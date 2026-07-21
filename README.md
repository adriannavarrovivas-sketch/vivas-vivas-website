# Vivas & Vivas Law Office — Website

A static marketing site for Vivas & Vivas Law Office (Quezon City). Plain
HTML/CSS/JS — no build step, no dependencies.

## Files
- `index.html` — all page content (single-page site with anchored sections)
- `styles.css` — styling and responsive layout
- `script.js` — mobile nav, footer year, contact form handler
- `images/` — attorney photos (see below)

## Images
- `images/hero-library.jpg` — hero background (AI-generated navy law-library scene, via vaaya.ai)
- `images/og-image.jpg` — 1200×630 social-share (Open Graph) image, branded
- `images/alfeo-d-vivas.jpg` — Atty. Alfeo D. Vivas
- `images/adrian-n-vivas.jpg` — Atty. Adrian N. Vivas
- `favicon.svg` — V&V monogram favicon

When you deploy to a real domain, update the `og:image` / `twitter:image` and
`og:url` meta tags in `index.html` and `about.html` to absolute `https://` URLs
(some social scrapers require absolute paths).

To swap an attorney photo, replace the file with the same name. Square or
portrait JPGs work best (they're cropped to a circle). If a file is missing,
the site falls back to the initials monogram.

Square or portrait JPGs work best (they're cropped to a circle). If a file is
missing, the site automatically falls back to the initials monogram.

## Run locally
Just open `index.html` in a browser. Or serve it:

```bash
# from this folder
python -m http.server 8000
# then visit http://localhost:8000
```

## Deploy
Any static host works — GitHub Pages, Netlify, Cloudflare Pages, or plain web
hosting. Upload the three files (and this README if you like).

## To finish / confirm
- **Contact form** — currently opens the visitor's email app (`mailto:`). For a
  real submission backend, wire `handleContactSubmit` in `script.js` to a form
  service (Formspree, Netlify Forms, etc.).
- **Attorney photos** — currently monogram avatars; swap in real photos if desired.
