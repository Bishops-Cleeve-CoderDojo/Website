# Bishops Cleeve CoderDojo Website

This is the source for the website of the Bishops Cleeve CoderDojo, a free coding club for kids near Cheltenham, UK. The site is hosted at https://bccd.uk (via Netlify).

The website is built with [Astro](https://astro.build), and styled with [Tailwind CSS](https://tailwindcss.com).

If you'd like to make a site for your own Dojo, this repo could easily be forked.

## Developing

```shell
npm install
npm run dev        # dev server at http://localhost:4322
npm run build      # production build to dist/
npm run preview    # serve the built site
npm test           # build, then run the Playwright smoke tests
```

Before running the tests for the first time, install the browser:

```shell
npx playwright install chromium
```

## Updating the main page

The main page is assembled from the section components in `src/components/`. Each section's text is written directly in its component, so to change the copy, edit the component.

## Updating the blog

Blog posts live in `src/content/blog/`, one markdown file per post. A post with images goes in its own folder (`src/content/blog/<name>/index.md`) with the images alongside it.

Frontmatter:

```yaml
---
title: 'Autumn Term 2026'
date: '2026-09-01'
author: 'Andy B'
featuredImage: './photo.jpg' # optional
---
```

Posts are listed newest first, and the three most recent appear on the home page.
