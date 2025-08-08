---
title: Theme Debug
permalink: /dbug/
---

# Theme Debug

This page echoes key values from `_config.yml` and the *effective* values after defaults.

> **Tip:** “Effective” uses the same defaults you wired in `style.html`, so it reflects what the CSS variables will get.

---

## Typography

| Key        |  Value |
|------------|------------|
| `font_size`|  `{{ site.typography.font_size | default: "16px" }}` |
| `text_font`|  `{{ site.typography.text_font  | default: "'Calibri', Tahoma, Geneva, Verdana, sans-serif" }}`
| `mono_font`|  `{{ site.typography.mono_font  | default: "Consolas, 'Courier New', Courier, monospace" }}` |

---

## Layout

| Key             |  Value |
|-----------------|------------|
| `panel_width`   |  `{{ site.layout.panel_width   | default: "13em" }}` |
| `content_max`   |  `{{ site.layout.content_max   | default: "66.67em" }}` |
| `header_height` |  `{{ site.layout.header_height | default: "3em" }}` |

---

## Colors (Light/Dark)

| Key                         | Value |
|-----------------------------|-----------|
| `accent`                    |`{{ site.colors.accent         | default: "#0078d7" }}` |
| `light.bg`                  |`{{ site.colors.light.bg       | default: "#ffffff" }}` |
| `light.bg_alt`              |`{{ site.colors.light.bg_alt   | default: "#f3f3f3" }}` |
| `light.text`                |`{{ site.colors.light.text     | default: "#000000" }}` |
| `light.text_alt`            |`{{ site.colors.light.text_alt | default: "#555555" }}` |
| `dark.bg`                   |`{{ site.colors.dark.bg        | default: "#1d1d1d" }}` |
| `dark.bg_alt`               |`{{ site.colors.dark.bg_alt    | default: "#2a2a2a" }}` |
| `dark.text`                 |`{{ site.colors.dark.text      | default: "#ffffff" }}` |
| `dark.text_alt`             |`{{ site.colors.dark.text_alt  | default: "#aaaaaa" }}` |

---

## Misc

| Key                 | Value |
|---------------------|-------|
| `fontawesome_kit`   | `{{ site.fontawesome_kit | inspect }}` |
| `toc-include-h1`    | `{{ site['toc-include-h1'] | inspect }}` |
| `nav (count)`       | `{{ site.nav | size }}` |
| `social (count)`    | `{{ site.social | size }}` |

---

