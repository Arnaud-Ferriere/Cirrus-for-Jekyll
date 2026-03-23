# jekyll-cirrus

A clean, minimal Jekyll template for a **CV + blog** site. Easily configurable via YAML data files — no template editing required for personal content.

Built with Bootstrap 5, Font Awesome 6, and GitHub Pages compatibility.

## Features

- **CV page** — skills, work experience, certifications, languages, interests
- **Blog** — article cards with search, tag cloud, chronological & tag views, RSS feed, pagination
- **Fully data-driven** — all personal content lives in `_data/` YAML files
- **Print-friendly** — optimized CV layout for PDF export
- **Accessible** — keyboard navigation, ARIA labels, skip link, screen-reader support
- **SEO** — Open Graph, Twitter Card, JSON-LD structured data, sitemap

## Quick start

### 1. Use this template

Click **"Use this template"** on GitHub to create your own repo.

### 2. Configure your site

Edit `_config.yml`:

```yaml
title: My Site
home_title: "Welcome!"
home_tagline: "Discover my latest articles."
url: "https://yourdomain.com"
description: "Your site description for SEO."
```

### 3. Fill in your personal info

Edit `_data/author.yml` — this is the only file you need to touch for the navbar, footer, about page header and bio:

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

### 4. Fill in your CV data

Edit the other files in `_data/`:

| File | Content |
|---|---|
| `skills.yml` | Technical skills with levels |
| `experiences.yml` | Work experience (with or without sub-missions) |
| `certifications.yml` | Professional certifications + badge images |
| `applied_skills.yml` | Micro-certifications / applied skills |
| `formations.yml` | Education & training |
| `languages.yml` | Language skills |

### 5. Add your profile photo

Replace `assets/photo.webp` with your own picture (recommended: square, ~300×300px).

### 6. Write your first article

Use the template in `Templates/Article Jekyll.md` and drop it into `_posts/` with the filename format `YYYY-MM-DD-your-title.md`.

### 7. Deploy to GitHub Pages

In your repo **Settings → Pages**, set source to **Deploy from branch** → `main` / `root`.

## Local development

```bash
bundle install
bundle exec jekyll serve
```

Requires Ruby and Bundler. The `Gemfile` uses `github-pages` for full GitHub Pages compatibility.

## License

MIT — do whatever you want with it. Attribution appreciated but not required.
