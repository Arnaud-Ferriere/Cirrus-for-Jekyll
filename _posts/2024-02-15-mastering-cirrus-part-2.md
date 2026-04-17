---
layout: post
title: "Part 2 — Customizing colors, fonts and layout"
date: 2024-02-15
excerpt: "Dive into custom.css, the SCSS architecture, and how to tweak the look without breaking GitHub Pages compatibility."
tags: [jekyll, customization, scss]
image: https://loremflickr.com/800/450/abstract,color?lock=21
banner: https://loremflickr.com/1920/600/abstract,paint,color?lock=22
difficulty: intermediate
series: "mastering-cirrus"
series_part: 2
placeholder: true
---

This is the second article in the **Mastering Cirrus for Jekyll** series, showcasing the `intermediate` difficulty badge.

## CSS custom properties

All colors, fonts and spacings are driven by CSS custom properties defined in `_sass/_variables.scss`:

```scss
:root {
  --color-primary: #081a34;
  --color-secondary: #003b82;
  --color-background: #eef2f3;
  --font-main: 'Poppins', sans-serif;
  --border-radius: 15px;
}
```

> [!TIP]
> Override any variable in `custom.css` to personalize without forking the SCSS partials. Your changes always win because `custom.css` loads last.

## Font swap

The default font is Poppins, self-hosted in `assets/fonts/`. To use a different font:

1. Drop the woff2 files in `assets/fonts/`
2. Update `_sass/_fonts.scss`
3. Change `--font-main` in `custom.css`

> [!WARNING]
> Don't remove the self-hosted approach unless you're fine with Google Fonts leaking visitor IPs (GDPR).

## What's next

**Part 3** dives into advanced topics: article series (meta!), Mermaid diagrams, and the floating TOC.
