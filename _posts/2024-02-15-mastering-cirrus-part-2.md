---
layout: post
title: "Part 2 — Colors, fonts and the SCSS architecture"
date: 2024-02-15
excerpt: "Make it yours: override CSS custom properties in custom.css, swap the self-hosted Poppins for your favorite font, and understand how the SCSS partials are organized."
tags: [jekyll, customization, scss, design]
image: https://loremflickr.com/800/450/abstract,color?lock=21
banner: https://loremflickr.com/1920/600/abstract,paint,color?lock=22
difficulty: intermediate
series: "mastering-cirrus"
series_part: 2
placeholder: true
---

You have a live site (see **Part 1** if not). Now let us make it look like *yours* without breaking GitHub Pages compatibility.

This article shows the `intermediate` difficulty badge (☁️).

## The three layers of styling

Cirrus stacks three CSS layers in this order:

1. **Main stylesheet** — compiled from `_sass/` modules into `/assets/css/main.css`
2. **Print stylesheet** — `/assets/css/print.css`, loaded with `<link media="print">` so it never blocks screen rendering
3. **Your overrides** — `/custom.css` at the repo root, loaded last, always wins

**99% of what you want to customize fits in `custom.css`.** You rarely need to touch the SCSS partials.

## CSS custom properties — the single source of truth

All colors, fonts, and radii are CSS variables defined in `_sass/_variables.scss`:

```scss
:root {
  --color-primary:        #081a34;  /* navbar, headings, buttons */
  --color-secondary:      #003b82;  /* links, borders, accents */
  --color-navbar-bg:      rgba(8, 26, 52, 0.95);
  --color-background:     #eef2f3;  /* page background */
  --color-card-bg:        #ffffff;  /* cards, article container */
  --color-text:           #333;     /* body text */
  --color-text-muted:     #6c757d;  /* dates, meta info */
  --color-border:         #dee2e6;  /* borders, separators */
  --table-header-bg:      rgba(0, 59, 130, 0.12);
  --font-main:            'Poppins', sans-serif;
  --border-radius:        15px;
  --box-shadow-light:     0 6px 12px rgba(0, 0, 0, 0.05);
  --box-shadow-hover:     0 10px 20px rgba(0, 0, 0, 0.1);
}
```

To recolor the entire site, open `custom.css` and redefine only what you want to change:

```css
/* A warmer, terracotta-toned variant */
:root {
  --color-primary:   #3d1e14;
  --color-secondary: #c5502a;
  --color-background: #faf4ee;
}
```

Save, push, and GitHub rebuilds your site within a minute. Every card, link, border and accent picks up the new colors automatically.

## Dark mode overrides

Cirrus dark mode is driven by a single SCSS mixin that redefines the same CSS variables on `[data-theme="dark"]` and under `@media (prefers-color-scheme: dark)`. To tweak dark mode colors without forking the SCSS, override in `custom.css`:

```css
[data-theme="dark"] {
  --color-primary:    #f0d0a0;   /* warm titles */
  --color-secondary:  #ffa060;   /* warm accent */
  --color-background: #1a0e08;   /* deep warm black */
  --color-card-bg:    #2a1a12;
}

/* Same overrides when user has OS-level dark preference */
@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
    --color-primary:    #f0d0a0;
    --color-secondary:  #ffa060;
    --color-background: #1a0e08;
    --color-card-bg:    #2a1a12;
  }
}
```

> [!TIP]
> Print is always forced to the light theme via `@media (prefers-color-scheme: dark) and (not print)` — no extra work on your side.

## Swapping the font

Poppins is self-hosted in `/assets/fonts/` as three woff2 files (weights 300/500/700). Google Fonts is **not** used — visitors' IPs never leak.

To use a different font, for example Inter:

1. Download Inter's woff2 files from [rsms.me/inter](https://rsms.me/inter/) or [gwfh.mranftl.com](https://gwfh.mranftl.com/fonts).
2. Drop them in `/assets/fonts/` (e.g. `inter-300.woff2`, `inter-500.woff2`, `inter-700.woff2`).
3. Update `_sass/_fonts.scss` to point to the new files and rename `font-family` if you want.
4. In `custom.css`:

```css
:root {
  --font-main: 'Inter', system-ui, sans-serif;
}
```

> [!WARNING]
> Avoid re-introducing a Google Fonts `<link>` in `_layouts/default.html`. The zero-external-CDN promise is a GDPR selling point. Self-hosting is also faster on cold visits.

## The decorative footer wave

The wave above the footer is an SVG mask on `.footer-wave`. The shape comes from `/assets/clouds-footer.svg` and the fill color is always `var(--color-background)` — so the wave stays in sync with your page background automatically.

To replace the wave shape, swap `assets/clouds-footer.svg` with any SVG silhouette. The file is used as a `-webkit-mask-image` / `mask-image`, so only the shape matters — the color is handled by CSS.

To remove the wave entirely, delete the file (or empty it) — the footer will just show without a wave.

## SCSS architecture — when you *do* need to go deeper

If `custom.css` is not enough, the SCSS partials are organized by component:

| Partial | Responsibility |
|---|---|
| `_variables.scss` | CSS custom properties (`:root`) |
| `_mixins.scss` | Reusable mixins like `badge-style` |
| `_fonts.scss` | `@font-face` declarations (self-hosted Poppins) |
| `_base.scss` | html, body, containers |
| `_navbar.scss` | Top nav, theme toggle |
| `_cards.scss` | Home cards, stacked cards |
| `_articles.scss` | Article layout, headings, images, callouts, series blocks |
| `_tags.scss` | Tag cloud, tag badges, share buttons, articles list |
| `_tables.scss` | Article and about tables |
| `_code.scss` | Rouge syntax highlighting, Mermaid, copy button |
| `_toc.scss` | Inline TOC + floating pill + drawer |
| `_experience.scss` | CV sections, interests, stacked cards |
| `_modal.scss` | Image zoom modal |
| `_dark-mode.scss` | Single mixin included in `[data-theme="dark"]` and the media query |
| `_utilities.scss` | Skip-link, back-to-top, `prefers-reduced-motion` |
| `_print-base.scss` / `_print-cv.scss` / `_print-articles.scss` | Print rules (loaded via `print.css` only when printing) |

The entry point `assets/css/main.scss` imports them all. Jekyll compiles the SCSS automatically using the `jekyll-sass-converter` plugin, with compression enabled in `_config.yml`.

## What is next

**Part 3** dives into the advanced stuff: article series (which you are reading right now!), Mermaid diagrams, the floating TOC pill, copy-to-clipboard on code blocks, Obsidian callouts, and smart link decoration.
