# Cirrus for Jekyll

A clean, minimal Jekyll template for a **CV + blog** site, designed to be deployed on **GitHub Pages in minutes** — no server, no build pipeline, no command line required.

All personal content is configured through YAML files — no template editing needed.

Built with Bootstrap 5, Font Awesome 6, and full GitHub Pages compatibility.

**Live demo:** [surlesnuages.fr](https://surlesnuages.fr)

## Features

- **CV page** — skills, work experience, certifications, languages, interests
- **Blog** — article cards with search, tag cloud, chronological & tag views, RSS feed, pagination
- **Fully data-driven** — all personal content lives in `_data/` YAML files
- **Dark mode** — automatic (follows OS preference) with manual toggle, persists in localStorage
- **Translatable** — all UI strings in `_data/ui.yml`, translate the entire site by editing one file
- **Print-friendly** — optimized CV layout for PDF export (always prints in light mode)
- **Accessible** — keyboard navigation, ARIA labels, skip link, screen-reader support, reduced motion
- **SEO** — Open Graph, Twitter Card, JSON-LD structured data, sitemap
- **PWA-ready** — web app manifest for "Add to Home Screen" on mobile
- **Customizable** — edit `custom.css` to change colors and fonts without touching the core stylesheet
- **Modular SCSS** — clean architecture under `_sass/`, easy to extend

---

## Deploy to GitHub Pages (no server needed)

> Your site will be live at `https://your-username.github.io/your-repo/` within minutes.

### 1. Use this template

Click **"Use this template"** → **"Create a new repository"** on GitHub.

### 2. Enable GitHub Pages

In your new repo: **Settings → Pages → Source → Deploy from branch** → select `main` / `root` → **Save**.

That's it. GitHub builds and hosts your site automatically on every push. No Ruby, no terminal, no CI setup needed.

---

## Configure your site

### 3. Edit `_config.yml`

```yaml
title: My Site
home_title: "Welcome!"
home_tagline: "Discover my latest articles."
url: "https://your-username.github.io"
baseurl: "/your-repo"          # leave "" if the site is at the root domain
description: "Your site description for SEO."
lang: en                       # used for the HTML lang attribute
```

### 4. Fill in your personal info

Edit `_data/author.yml`:

```yaml
name: Jane Doe
role: Systems Administrator
linkedin: https://www.linkedin.com/in/your-profile/
github: https://github.com/your-username
email_user: your.email
email_domain: example.com
bio: >-
  Write your bio here...
```

### 5. Fill in your CV data

Edit the files in `_data/`:

| File | Content |
|---|---|
| `skills.yml` | Technical skills with levels |
| `experiences.yml` | Work experience (with or without sub-missions) |
| `certifications.yml` | Professional certifications + badge images |
| `applied_skills.yml` | Micro-certifications / applied skills |
| `education.yml` | Education & training |
| `languages.yml` | Language skills |

### 6. Add your profile photo

Replace `assets/photo.webp` with your own picture (recommended: square, ~300×300px).

### 7. Add PWA icons (optional)

For "Add to Home Screen" support on mobile, add two PNG icons:
- `assets/icon-192.png` (192×192px)
- `assets/icon-512.png` (512×512px)

These are referenced in `manifest.json`. Without them, the site works fine but won't be installable as a PWA.

---

## Writing articles

You can write articles with any tool you like:

- **Directly on GitHub** — create a new file in `_posts/` via the GitHub web editor. The simplest option, no tools needed.
- **Any text editor + git** — write markdown files locally and push with git.
- **Obsidian** *(recommended)* — see the workflow below for a smooth writing experience.

### Article front matter reference

```yaml
---
layout: post
title: "Your article title"
date: 2025-01-15
excerpt: "Short summary shown on cards and in search."
tags: [Azure, PowerShell]
image: /assets/my-image.png       # card thumbnail + article header
banner: /assets/my-banner.jpg     # full-width header (overrides image)
# placeholder: true               # uncomment to show an "AI-generated" disclaimer
---
```

### Images in the body

```markdown
![Description](/assets/image-name.png)                  ← centered (default)
![Description](/assets/image-name.png){: .img-left}     ← float left
![Description](/assets/image-name.png){: .img-right}    ← float right
![Description](/assets/image-name.png){: .img-full}     ← full width
```

### Recommended workflow with Obsidian + Obsidian Git plugin

> Write in Obsidian, publish with two clicks — no terminal needed.

1. **Create a draft** — save a new note to the `_drafts/` folder. Jekyll won't publish it yet.

2. **Write your article** in Obsidian. Add images to `assets/`.

3. **When ready to publish** — rename the file to `YYYY-MM-DD-your-title.md` and move it to `_posts/`.

4. **Push to GitHub** — open the Obsidian Git panel (left sidebar) → **Stage all** → **Commit** → **Push**.

5. **Done** — GitHub Pages rebuilds your site automatically within ~1 minute.

---

## Translate the UI

All user-facing strings are in **`_data/ui.yml`**. To translate the site to another language:

1. Set `lang: fr` (or your language code) in `_config.yml`
2. Edit `_data/ui.yml` and translate each value

No template files need to be changed.

---

## Dark mode

Dark mode works out of the box:
- **Automatic** — follows the OS/browser `prefers-color-scheme` setting
- **Manual toggle** — moon/sun icon in the navbar, persisted in `localStorage`
- **Print** — always uses the light theme

To customize dark mode colors, add overrides in `custom.css`:

```css
[data-theme="dark"] {
  --color-background: #your-dark-bg;
  --color-card-bg: #your-dark-card-bg;
  --color-text: #your-light-text;
}
```

---

## Customize the look

Edit **`custom.css`** at the root of the repo — all CSS variables are listed with comments, just uncomment the ones you want to change. This file is loaded after the main stylesheet so your values always win.

Available variables:

| Variable | Default | Description |
|---|---|---|
| `--color-primary` | `#081a34` | Navbar, headings, buttons |
| `--color-secondary` | `#003b82` | Links, borders, highlights |
| `--color-background` | `#eef2f3` | Page background |
| `--color-card-bg` | `#ffffff` | Card / section background |
| `--font-main` | `'Poppins', sans-serif` | Main font |
| `--border-radius` | `15px` | Card / button corner radius |

To use a different Google Font, update `--font-main` and add the corresponding `<link>` in `_layouts/default.html`.

### Footer wave

The decorative wave above the footer is driven by `assets/clouds-footer.svg`. The color is handled automatically by CSS (`--color-background`) — no need to touch the SVG if you change your color scheme.

The wave is only rendered if the file exists: delete `assets/clouds-footer.svg` and the footer will simply display without it.

To **replace** the wave shape: swap `assets/clouds-footer.svg` with any SVG you like — it will stretch to full width automatically.

### SCSS architecture

The stylesheet is split into modular partials under `_sass/`:

| File | Content |
|---|---|
| `_variables.scss` | CSS custom properties (`:root`) |
| `_base.scss` | html, body, headings, containers |
| `_navbar.scss` | Navigation bar and hover animation |
| `_cards.scss` | Cards, stacked cards, certifications |
| `_tags.scss` | Tag cloud, tag badges, articles view |
| `_articles.scss` | Article layout, images, blockquotes |
| `_experience.scss` | CV sections, missions, interests |
| `_dark-mode.scss` | Dark theme overrides |
| `_print.scss` | Print-optimized styles |
| *...and more* | Buttons, grid, footer, code, TOC, etc. |

The entry point is `assets/css/main.scss`. Jekyll compiles it automatically — no build tools needed.

---

## Local development

```bash
bundle install
bundle exec jekyll serve --drafts   # --drafts also shows _drafts/ posts
```

Requires Ruby and Bundler. The `Gemfile` uses `github-pages` for full GitHub Pages compatibility.

---

## License

[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) — free to use, modify, and redistribute for any purpose, **including commercially**, as long as you credit the original author:

> **Arnaud FERRIERE** — [surlesnuages.fr](https://surlesnuages.fr) — [github.com/Arnaud-Ferriere/jekyll-cirrus](https://github.com/Arnaud-Ferriere/jekyll-cirrus)

---

If this template saved you some time, a coffee is always appreciated!

[![Ko-fi](https://img.shields.io/badge/Support%20on-Ko--fi-FF5E5B?logo=ko-fi&logoColor=white)](https://ko-fi.com/surlesnuages)
