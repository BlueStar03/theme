---
title: read me
author: zbule
---

# BlueStar Theme

A clean, responsive Jekyll theme designed for documentation and game-dev sites.  
Features a collapsible left navigation panel, a right-side table of contents, dark/light modes, and easy theming via CSS variables.

---

## 🚀 Installation

1. In your site’s `_config.yml`, enable remote themes and point to this repo:

```yaml
   plugins:
     - jekyll-remote-theme

   remote_theme: BlueStar03/theme@v1.0.0
```

2. Remove any existing `theme:` entry.
4. Push to GitHub Pages — your site will rebuild with BlueStar Theme.

---

## ⚙️ Configuration

All of the following settings go in your **site** repo’s `_config.yml`. Each has a sensible default, but you can override to customize the look, layout, and functionality.

| Key                         | Default       | Description                                                                                                                                     |
| --------------------------- | ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `title`                     | *—*           | Your site’s title (shown in header and browser tab).                                                                                            |
| `description`               | *—*           | Meta description for SEO & social previews.                                                                                                     |
| `lang`                      | `en`          | Page language attribute (`<html lang="…">`).                                                                                                    |
| `logo`                      | *unset*       | URL or path to a logo image for the left-panel toggle.                                                                                          |
| `font_base`                 | `16px`        | Base font size for the site (`html { font-size: … }`).                                                                                          |
| `panel_width`               | `20em`        | Width of both left & right panels (`--panel-width`).                                                                                            |
| `accent_color`              | `blue`        | Primary accent color for header, links, highlights (`--accent-color`).                                                                          |
| `content_max`               | `66.67em`     | Maximum width for the main content area (`--content-max`).                                                                                      |
| `nav`                       | *see example* | Array of navigation items for the left panel |
| `social`                    | *empty array* | Social links for the footer:                  |
| `toc_icon`                  | `📑`          | Icon for the right-panel toggle                       |
| `toc-include-h1`            | `false`       | Whether to include `<h1>` in the generated Table of Contents (via `<meta>` tag).                                                                |
| `author`                    | *—*           | Default author name (shown in right-panel metadata).                                                                                            |
| `date` / `last_modified_at` | *auto*        | Page date formatting; if unset, falls back to `site.time`.                                                                                      |
| `fontawesome_kit`  | unset | defaults to cdnjs.cloudflare.com |

---

### Example `_config.yml`

```yaml
title: “Chronicle Destiny Docs”
description: “Design documents, devlogs, and reference for the Chronicle Destiny game.”
lang: en

plugins:
  - jekyll-remote-theme

remote_theme: BlueStar03/theme@v1.0.0

logo: /assets/img/logo.svg

toc_icon: fa fa-list

toc-include-h1: true

font_base: 16px
panel_width: 20em
accent_color: red
content_max: 70em

nav:
  - title: 🏠 Home
    url: /
  - title: 📄 Documentation
    url: /docs
  - title: 📝 Blog
    url: /blog
  - title: 📰 Updates
    url: /updates

social:
  - title: GitHub
    url: https://github.com/your-user/your-repo
    icon: fab fa-github
  - title: Twitter
    url: https://twitter.com/your-handle
    icon: fab fa-twitter


```

---

## 🛠️ Overriding Theme Files

To customize any include, layout, or asset:

1. Copy the file path from this repo (e.g. `_includes/header.html`).
2. Paste it into the **same path** in your site repo.
3. Edit locally — Jekyll will use your version instead of the remote one.

---

## 🎨 Theming & CSS Variables

BlueStar Theme exposes key variables in `:root` so you can tweak colors, spacing, and fonts:

```css
:root {
  --panel-width:   13em;
  --accent-color:  blue;
  --content-max:   66.67em;
  --font-size:     16px;
  /* plus colors for bg, text, links, etc. */
}
```

You can override these in your site’s inline `_includes/style.html`, or via additional CSS.

---

## 📄 License

Licensed under the MIT License. See [LICENSE](LICENSE.md) for details.

