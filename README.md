# jekyll-cirrus

A clean, minimal Jekyll template for a **CV + blog** site, designed to be deployed on **GitHub Pages in minutes** — no server, no build pipeline, no command line required.

All personal content is configured through YAML files — no template editing needed.

Built with Bootstrap 5, Font Awesome 6, and full GitHub Pages compatibility.

**Live demo:** [surlesnuages.fr](https://surlesnuages.fr)

## Features

- **CV page** — skills, work experience, certifications, languages, interests
- **Blog** — article cards with search, tag cloud, chronological & tag views, RSS feed, pagination
- **Fully data-driven** — all personal content lives in `_data/` YAML files
- **Print-friendly** — optimized CV layout for PDF export
- **Accessible** — keyboard navigation, ARIA labels, skip link, screen-reader support
- **SEO** — Open Graph, Twitter Card, JSON-LD structured data, sitemap
- **Customizable** — edit `custom.css` to change colors and fonts without touching the core stylesheet

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

---

## Writing articles

You can write articles with any tool you like:

- **Directly on GitHub** — create a new file in `_posts/` via the GitHub web editor. The simplest option, no tools needed.
- **Any text editor + git** — write markdown files locally and push with git.
- **Obsidian** *(recommended)* — see the workflow below for a smooth writing experience.

### Recommended workflow with Obsidian + Obsidian Git plugin

> Write in Obsidian, publish with two clicks — no terminal needed.

1. **Create a draft** — use the template at `Templates/Article Jekyll.md` (Templater plugin recommended). Save the note to the `_drafts/` folder. Jekyll won't publish it yet.

2. **Write your article** in Obsidian. Add images to `assets/`.

3. **When ready to publish** — rename the file to `YYYY-MM-DD-your-title.md` and move it to `_posts/`.

4. **Push to GitHub** — open the Obsidian Git panel (left sidebar) → **Stage all** → **Commit** → **Push**.

5. **Done** — GitHub Pages rebuilds your site automatically within ~1 minute.

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

The footer wave is an SVG file at `assets/clouds-footer.svg`. You can replace it with any SVG you like, or delete it and remove the `<img class="footer-wave">` line in `_includes/footer.html` to have a plain footer.

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

If this template saved you some time, a coffee is always appreciated! ☕

[![Ko-fi](https://img.shields.io/badge/Support%20on-Ko--fi-FF5E5B?logo=ko-fi&logoColor=white)](https://ko-fi.com/surlesnuages)
