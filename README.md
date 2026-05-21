# ElektronikLab

Modern electronics and automation project platform built with React, Vite, TailwindCSS and Supabase.

This website was developed to document technical projects, embedded systems, automation workflows and engineering-related developments in a clean and professional way.

---

## Status

Project currently under active development.

---

## Features

- Responsive modern UI
- Technical blog system
- Electronics & automation project showcase
- Secure admin dashboard
- Supabase authentication
- Role-based access control (RLS)
- Dynamic project management
- Image upload system
- Search & category filtering
- Animated hero slideshow
- Mobile optimized layout
- Cookie banner
- Impressum & Datenschutz pages
- External project/document links

---

## Technologies

### Frontend

- React
- Vite
- TailwindCSS
- Framer Motion
- React Router DOM
- Lucide React

### Backend / Database

- Supabase
- PostgreSQL
- Supabase Auth
- Supabase Storage
- Row Level Security (RLS)

---

## Project Structure

```bash
src/
│
├── components/
│   └── CookieBanner.jsx
│
├── pages/
│   ├── Impressum.jsx
│   └── Datenschutz.jsx
│
├── App.jsx
└── main.jsx
```

---

## Installation

### Clone repository

```bash
git clone https://github.com/YOUR_USERNAME/elektroniklab.git
```

### Enter project directory

```bash
cd elektroniklab
```

### Install dependencies

```bash
npm install
```

---

## Environment Variables

Create a `.env.local` file:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

---

## Start Development Server

```bash
npm run dev
```

---

## Build Production Version

```bash
npm run build
```

---

## Supabase Setup

### Required Tables

### posts

| Column        | Type      |
| ------------- | --------- |
| id            | uuid      |
| title         | text      |
| category      | text      |
| image_url     | text      |
| excerpt       | text      |
| content       | text      |
| tags          | text[]    |
| read_time     | text      |
| published     | boolean   |
| external_link | text      |
| created_at    | timestamp |

---

### profiles

| Column | Type |
| ------ | ---- |
| id     | uuid |
| role   | text |

---

## Authentication & Security

The admin area is protected with:

- Supabase Authentication
- Row Level Security (RLS)
- Admin role validation
- Protected CRUD operations

Only users with:

```sql
role = 'admin'
```

inside the `profiles` table can manage posts.

---

## Storage Bucket

Create a public bucket:

```bash
blog-images
```

Used for:

- project thumbnails
- uploaded blog images
- technical documentation assets

---

## Design Philosophy

The UI design focuses on:

- modern engineering aesthetics
- dark technical interface
- glassmorphism
- responsive layouts
- smooth animations
- industrial / cyber inspired visuals

---

## Future Improvements

Planned future features:

- multilingual support
- markdown editor
- syntax highlighting
- PDF project viewer
- project timelines
- analytics dashboard
- dark/light theme switcher
- comment system

---

## Author

Nguyen Nhan Do

Germany

Electronics • Automation • Embedded Systems • Engineering

---

## License

This project is licensed under the MIT License.