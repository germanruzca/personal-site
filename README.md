# Germán Ruiz — Personal Site

Personal portfolio and blog built with Next.js 14, Styled Components, MDX, and Framer Motion.

## Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Styled Components
- **Blog**: MDX via `next-mdx-remote`
- **Animations**: Framer Motion
- **Deployment**: Netlify

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── app/              # Next.js App Router pages
│   └── blog/         # Blog index + [slug] post pages
├── components/       # Navbar, Hero, Experience, Projects, Footer
├── lib/              # MDX utilities, Styled Components registry
└── styles/           # theme.ts (colors, fonts, breakpoints), GlobalStyles

content/
└── posts/            # MDX blog posts
```

## Writing Posts

Add `.mdx` files to `content/posts/` with this frontmatter:

```mdx
---
title: "Post title"
date: "2024-01-01"
excerpt: "Short description shown in listings."
category: "Tech"
tags: ["tag1", "tag2"]
---

Post content here...
```

## Deployment

Configured for Netlify via `netlify.toml`. Connect the GitHub repo in the Netlify dashboard and it deploys automatically on push to `main`.
