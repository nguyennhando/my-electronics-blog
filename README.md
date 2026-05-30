# ElektronikLab

Portfolio and technical blog for electronics, automation, embedded systems and engineering projects.

## Stack

- React
- Vite
- Tailwind CSS
- Framer Motion
- React Markdown
- Lucide React

## Development

```bash
npm install
npm run dev
```

Build the production version:

```bash
npm run build
```

## Project Structure

```text
public/
  images/             Static images used by the site and blog posts
src/
  components/         Shared UI components
  content/            Markdown blog posts
  lib/posts.js        Markdown loading and frontmatter parsing
  App.jsx             Application UI
  index.css           Tailwind CSS entrypoint
  main.jsx            React entrypoint
```

## Markdown Posts

Blog posts are stored as `.md` files in `src/content/`. Vite loads them at build time through `import.meta.glob` in `src/lib/posts.js`.

Each post starts with frontmatter:

```md
---
id: esp32-mqtt-gateway
slug: esp32-mqtt-gateway
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

Supported `project_status` values are `idea`, `in_progress` and `done`. Lower `sort_order` values appear first.

The Markdown parser supports wrapped scalar values and `-` list items for `image_gallery` and `tags`.

## Markdown Editor

Open `?admin=1` to use the Markdown export form:

```text
https://nguyennhando.github.io/my-electronics-blog/?admin=1
```

Create a new post or select an existing post to edit its loaded content. The form downloads a `.md` file only. Move the downloaded file into `src/content/`, replace the old file when editing, add any referenced images to `public/images/posts/`, then deploy the site. The editor does not modify the deployed website directly.

## Deployment

The Vite base path is configured for GitHub Pages:

```bash
npm run deploy
```
