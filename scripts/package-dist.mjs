#!/usr/bin/env node
/**
 * Assembles a clean, deployable copy of the site into dist/.
 *
 * Why: Cloudflare Workers assets reject files >25 MiB and both Workers and
 * Pages upload the *entire* output directory. Deploying the repo root would
 * ship node_modules (128 MiB+ workerd binary) and fail. dist/ contains only
 * what the site actually needs.
 *
 * Run via: npm run build   (or: node scripts/package-dist.mjs)
 */
import { cpSync, rmSync, mkdirSync, existsSync, readdirSync, statSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const dist = join(root, 'dist');

// Root-level files the site needs (including Cloudflare's _headers/_redirects)
const FILES = [
  'index.html',
  'style.css',
  '404.html',
  'robots.txt',
  'sitemap.xml',
  'llms.txt',
  '_headers',
  '_redirects',
];
const DIRS = ['assets'];

const MAX_BYTES = 25 * 1024 * 1024; // Cloudflare Workers per-asset limit

rmSync(dist, { recursive: true, force: true });
mkdirSync(dist, { recursive: true });

const missing = FILES.filter((f) => !existsSync(join(root, f)));
if (missing.length) {
  console.error(`✖ package-dist: missing required file(s): ${missing.join(', ')}`);
  process.exit(1);
}

for (const f of FILES) cpSync(join(root, f), join(dist, f));
for (const d of DIRS) cpSync(join(root, d), join(dist, d), { recursive: true });

// Collect stats + enforce the Cloudflare per-asset size limit
let count = 0;
let total = 0;
let largest = { file: '-', size: 0 };
const walk = (dir) => {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) walk(p);
    else {
      const size = statSync(p).size;
      count++;
      total += size;
      if (size > largest.size) largest = { file: p.slice(dist.length + 1), size };
      if (size > MAX_BYTES) {
        console.error(`✖ package-dist: ${(p.slice(dist.length + 1))} is ${(size / 1024 / 1024).toFixed(1)} MiB (> 25 MiB Cloudflare limit)`);
        process.exit(1);
      }
    }
  }
};
walk(dist);

const mb = (n) => (n / 1024 / 1024).toFixed(2) + ' MiB';
console.log(`✔ dist/ ready — ${count} files, ${mb(total)} total, largest asset: ${largest.file} (${(largest.size / 1024).toFixed(0)} KiB)`);
