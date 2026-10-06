<div align="center">
  <h1>Wilson Mbuthia — Portfolio</h1>
  <p><strong>WordPress Architect & AI Systems Engineer</strong></p>
  
  <p>
    <a href="https://wilsondevops.com/">Live Demo</a> •
    <a href="#features">Features</a> •
    <a href="#tech-stack">Tech Stack</a> •
    <a href="#local-development">Local Development</a>
  </p>
</div>

---

## 🌟 Overview

This repository contains the source code for my personal portfolio website. It is designed to be a high-performance, visually striking showcase of my work in engineering **WordPress systems**, **WooCommerce revenue machines**, and **AI-powered web applications**.

Built with a focus on speed, aesthetics, and smooth user experiences, the site features a custom design system, seamless theme switching (Light/Dark/System), and fluid animations powered by GSAP.

## ✨ Features

- 🌓 **Dynamic Theming:** Seamless switching between Dark, Light, and System themes with persistent storage.
- ⚡ **Production Performance:** Self-hosted fonts and libraries (zero third-party requests), CSS-first hero animation so the LCP paints before any JS downloads, batched/paused canvas rendering, lazy heading animation.
- 🎨 **Modern Aesthetics:** Custom UI tokens, noise overlays, grid backgrounds, and glassmorphism effects.
- 🎬 **Smooth Animations:** Advanced scroll-triggered animations and fluid transitions using GSAP and Lenis.
- 📱 **Fully Responsive:** Tailored for optimal viewing on any device, from mobile to ultra-wide displays.
- 🔍 **SEO Optimized:** Fully static server-rendered content (readable without JavaScript), JSON-LD graph (WebSite + Person + ProfessionalService + FAQPage), canonical/Open Graph/Twitter tags with a real 1200×630 social card, `sitemap.xml` and `robots.txt`.
- 🤖 **AI-Ready:** `llms.txt` site summary for LLM crawlers and a robots.txt policy that explicitly welcomes GPTBot, ClaudeBot, PerplexityBot, Google-Extended and friends.
- 🔒 **Secure Headers:** Cloudflare Pages `_headers` ships CSP, HSTS, nosniff, `frame-ancestors 'none'` and a tiered cache policy.

## 🛠 Tech Stack

- **Markup & Styling:** HTML5, CSS3, [Tailwind CSS](https://tailwindcss.com/)
- **Reactivity:** [Alpine.js](https://alpinejs.dev/)
- **Animations:** [GSAP](https://gsap.com/) & ScrollTrigger
- **Smooth Scrolling:** [Lenis](https://lenis.darkroom.engineering/)
- **Typography:** Space Grotesk, Inter, JetBrains Mono, Clash Display## 📂 Project Structure

```text
├── index.html            # Main entry: layout, theme tokens, Alpine/GSAP logic (all content is static HTML)
├── style.css             # Tailwind build output (generated — do not edit by hand)
├── src/
│   ├── input.css         # Tailwind entry + design tokens
│   └── fonts.css         # Self-hosted @font-face rules (generated)
├── assets/
│   ├── fonts/            # Self-hosted woff2 (Inter, Space Grotesk, JetBrains Mono, Clash Display)
│   ├── vendor/           # Self-hosted GSAP, ScrollTrigger, Lenis, Alpine
│   ├── images/           # Compressed portfolio images (AVIF) + social-card.png (1200×630 OG image)
│   └── favicon/          # Site icons and web manifest
├── robots.txt            # Crawler policy (AI crawlers explicitly allowed) + sitemap pointer
├── sitemap.xml           # Sitemap
├── llms.txt              # LLM-friendly site summary (llmstxt.org)
├── _headers              # Cloudflare Pages: CSP, HSTS, cache policy
├── _redirects            # Cloudflare Pages redirects (notes for www → apex)
├── 404.html              # Custom error page served by Cloudflare Pages
└── .htaccess             # Apache config (only relevant if hosted on Apache; ignored by Cloudflare Pages)
```

## 🚀 Local Development

Everything is self-hosted — no CDNs or API keys needed:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Wyllymk/wildon-dev.git
   cd wildon-dev
   ```

2. **Rebuild the CSS after editing `src/` or HTML classes:**
   ```bash
   npm install
   npm run build        # minifies src/input.css → style.css
   npm run watch:css    # rebuild on change
   ```

3. **Serve the project:**
   ```bash
   npm run serve        # or: python3 -m http.server
   ```

4. **Open in browser:** Navigate to `http://localhost:3000` (or the port shown).

## ☁️ Deploying to Cloudflare Pages

1. Push this repository to GitHub.
2. In the Cloudflare dashboard: **Workers & Pages → Create → Pages → Connect to Git**.
3. Build settings:
   - **Build command:** `npm run build`
   - **Build output directory:** `/` (repo root — the site is static)
   - Node version: defaults are fine (uses `package-lock.json`).
4. Add the custom domain **wilsondevops.com** (and `www`) under **Custom domains**.
   - Set up `www → https://wilsondevops.com` as a redirect rule in the dashboard (the `_redirects` file only matches paths, not hostnames).
   - Cloudflare auto-provides HTTPS; the `Strict-Transport-Security` header in `_headers` enables HSTS preload.
5. Confirm after the first deploy:
   - `https://wilsondevops.com/robots.txt`, `/sitemap.xml`, `/llms.txt` all return 200.
   - Response headers include `content-security-policy` and `strict-transport-security`.
   - Add the site to **Google Search Console** and submit the sitemap.

### Post-deploy SEO checklist

- [ ] Google Search Console → submit `https://wilsondevops.com/sitemap.xml`
- [ ] Bing Webmaster Tools (also indexes ChatGPT/Perplexity via IndexNow)
- [ ] Validate structured data: <https://search.google.com/test/rich-results>
- [ ] Test social preview: paste the URL in a LinkedIn/X/Facebook post (uses `assets/images/social-card.png`)
- [ ] Optional: Cloudflare Web Analytics (no cookie banner needed) — add the beacon token to `index.html`


## 📬 Connect with Me

- **Website:** [wilsondevops.com](https://wilsondevops.com/)
- **LinkedIn:** [Wilson Mbuthia](https://www.linkedin.com/in/wilson-mbuthia-k/)
- **GitHub:** [@Wyllymk](https://github.com/Wyllymk)
- **Twitter / X:** [@WilsonMbuthiaK](https://twitter.com/WilsonMbuthiaK)

---

<div align="center">
  <sub>Built with 💻 by Wilson Mbuthia in Nairobi, Kenya.</sub>
</div>
