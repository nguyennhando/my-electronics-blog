# ElektronikLab

Personal portfolio and technical blog for electronics, automation, embedded systems and engineering projects.

[![Live Website](https://img.shields.io/badge/Live_Website-Open-22d3ee?style=for-the-badge)](https://nguyennhando.github.io/my-electronics-blog/)

![ElektronikLab desktop homepage](docs/github-images/website-home-desktop.webp)

## Overview

ElektronikLab documents practical projects, technical concepts and learning progress in areas such as electronics, measurement technology, industrial automation and software development. A dedicated knowledge library collects technical notes, learning material, circuit analyses and personal research.

The website is built as a static React application and deployed through GitHub Pages. Blog posts, knowledge articles and editable homepage content are stored as Markdown files and loaded at build time.

## Responsive Design

| Desktop homepage | Mobile homepage |
| --- | --- |
| ![Desktop homepage](docs/github-images/website-home-desktop.webp) | ![Mobile homepage](docs/github-images/website-home-mobile.webp) |

## Website Sections

| Blog with search and filters | Feature cards and project notice |
| --- | --- |
| ![Blog section](docs/github-images/website-blog-section.webp) | ![Feature cards and project notice](docs/github-images/website-features-section.webp) |

| Knowledge library | Free-form project gallery |
| --- | --- |
| ![Knowledge library](docs/github-images/wissen&forschung.webp) | ![Project gallery](docs/github-images/projektbilder.webp) |

## Local Content Editor

![Local Markdown editor](docs/github-images/website-editor-local.webp)

## Features

- Responsive portfolio and technical blog
- Markdown-based project articles with frontmatter
- Dedicated knowledge library for technical notes, learning material and research articles
- Categories, tags, search and project status filters
- Project image galleries and external project links
- Editable free-form homepage gallery with split showcase, thumbnails and lightbox
- Editable homepage card for the personal journey section
- Local-only Markdown editor for creating and updating projects, knowledge articles and homepage content
- Content Security Policy for the production website

## Tech Stack

- React
- Vite
- Tailwind CSS
- Framer Motion
- React Markdown
- Lucide React
- GitHub Pages

## Getting Started

Install the dependencies and start the development server:

```bash
npm install
npm run dev
```

Create a production build:

```bash
npm run build
```

## Content Management

Blog posts and knowledge articles are stored in `src/content/`. Article images are stored in `public/images/posts/`. Free-form gallery images are stored separately in `public/images/galerie/`.

Start the local Markdown editor:

```bash
npm run admin
```

The editor is intentionally available only during local development. It is removed from the production bundle and cannot be opened through the public GitHub Pages website.

In Chrome or Edge:

1. Create a new post or select an existing post.
2. Choose whether it is a project article or a knowledge article.
3. Edit the content and preview the result.
4. Click `In Ordner speichern`.
5. Select `src/content/` the first time.
6. Add referenced article images to `public/images/posts/`.
7. Deploy the updated website.

Use `Persönlicher Weg bearbeiten` in the local editor to update the homepage card. Its content is stored in `src/content/personal-way.md`.

Use `Website-Hintergrund bearbeiten` to update the optional website background image. Its path is stored in `src/content/site-settings.md`. Leave the field empty to keep the default gradient background.

Use `Projektgalerie bearbeiten` to manage the free-form homepage gallery. Add one image path per line in the desired order. Gallery images are stored in `public/images/galerie/`, and the image list is stored in `src/content/gallery-settings.md`.

## Markdown Format

Each blog post starts with frontmatter:

```md
---
id: esp32-mqtt-gateway
slug: esp32-mqtt-gateway
content_type: project
title: ESP32 als MQTT-Gateway
category: IoT
image_url: /my-electronics-blog/images/posts/ESP32-main.webp
image_gallery:
- /my-electronics-blog/images/posts/detail-1.webp
tags:
- ESP32
- MQTT
read_time: 5 Min.
published: true
created_at: '2026-05-30T10:00:00.000Z'
external_link: ''
project_status: done
sort_order: 100
---

# ESP32 als MQTT-Gateway

Post content...
```

Supported `project_status` values:

- `idea`
- `in_progress`
- `done`

Lower `sort_order` values appear first.

Use `content_type: knowledge` for articles that should appear in the `Wissen & Forschung` library instead of the project blog.

## Project Structure

```text
docs/
  github-images/      Images used only by the GitHub README
public/
  images/
    galerie/          Free-form homepage gallery images
    posts/            Blog and knowledge article images
src/
  components/         Shared UI components
  content/            Markdown posts and homepage content
  lib/posts.js        Markdown loading and frontmatter parsing
  App.jsx             Application UI
  index.css           Tailwind CSS entrypoint
  main.jsx            React entrypoint
```

To update the GitHub repository preview without changing the website, replace the image files in `docs/github-images/` and keep their filenames unchanged.

Image naming convention:

- `website-home-desktop.webp`: desktop homepage screenshot and README cover
- `website-home-mobile.webp`: mobile homepage screenshot
- `website-blog-section.webp`: blog cards, search and category filter
- `website-features-section.webp`: feature cards and project notice
- `website-editor-local.webp`: local Markdown editor screenshot
- `wissen&forschung.webp`: knowledge library screenshot
- `projektbilder.webp`: free-form project gallery screenshot

## Deployment

Deploy the production build to GitHub Pages:

```bash
npm run deploy
```

The Vite base path is configured for:

```text
/my-electronics-blog/
```

## Security Notes

- The public website is static and does not expose an admin login, database or write API.
- The local Markdown editor is removed from production builds.
- A Content Security Policy is defined in `index.html`.
- Published images are stripped of metadata before deployment.
- Never commit credentials, API keys, private documents or environment files.
