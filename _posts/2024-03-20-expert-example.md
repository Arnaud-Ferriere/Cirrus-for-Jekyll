---
layout: post
title: "Expert example — All the features at once"
date: 2024-03-20
last_modified_at: 2024-04-05
excerpt: "A standalone placeholder article demonstrating the expert difficulty badge, the last_modified_at Updated date, tables, and more."
tags: [example, tables, mermaid, kitchen-sink]
image: https://loremflickr.com/800/450/storm,lightning?lock=41
banner: https://loremflickr.com/1920/600/storm,lightning,weather?lock=42
difficulty: expert
placeholder: true
---

This article shows the **expert** difficulty badge and demonstrates features that don't fit in a series.

## Table with scroll region

Large tables are automatically wrapped in a scrollable region with `role="region"` and `aria-label` for screen readers:

| Command | Description | Platform | Notes |
|---|---|---|---|
| `git clone` | Clone a repository | Universal | Supports SSH and HTTPS |
| `jekyll serve` | Start local dev server | Ruby | Watches files by default |
| `bundle install` | Install gem dependencies | Ruby | Uses the Gemfile |
| `gh release create` | Publish a GitHub release | GitHub CLI | Requires `gh auth login` |
| `npm install` | Install npm packages | Node.js | Not needed for Cirrus |

## Gantt chart via Mermaid

```mermaid
gantt
    title Project timeline
    dateFormat YYYY-MM-DD
    section Phase 1
    Design            :a1, 2024-01-01, 14d
    Prototype         :a2, after a1, 10d
    section Phase 2
    Development       :b1, after a2, 30d
    Testing           :b2, after b1, 14d
    section Phase 3
    Documentation     :c1, after b2, 7d
    Release           :milestone, after c1, 0d
```

## Side-by-side images

Two images aligned left and right:

![Cloud left](https://loremflickr.com/400/300/clouds?lock=51){: .img-left}
![Cloud right](https://loremflickr.com/400/300/sky?lock=52){: .img-right}

Text flows between them on wide screens, and they stack vertically on mobile.

## Inline code and smart links

Visit https://jekyllrb.com for the Jekyll docs — the URL above was **not** wrapped in Markdown brackets. Cirrus auto-linked it for you, and the external-link icon plus screen-reader text were added automatically.

Inline `code` in prose stays readable in both themes, with proper contrast and a subtle background tint.

## Summary

This article ticks a lot of boxes at once — use it as a reference when building your own content.
