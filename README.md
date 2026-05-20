# Interesting Internet — Fuse.kiwi Inspired

Award-style creative website built **strictly** from the extracted Fuse.kiwi design system:

- `DESIGN-fuse-kiwi.md`
- `design-tokens-fuse-kiwi.json`
- Category CSS variables (`--graphic`, `--photo`, etc.)

## Stack

- **Next.js 16** (App Router)
- **React 19**
- **Tailwind CSS v4**
- **Framer Motion**
- **Lenis** (smooth scroll)

## Design tokens

| Token | Value |
|-------|-------|
| Background | `#f2f2f2` |
| Text | `#000000` |
| Accent / CTA | `#0000ff` |
| Border / dark surface | `#1a1a1a` |
| Display type | 240px / -12px tracking |
| Base spacing | 2px grid |
| Container | 1440px max |
| Shadow | `rgba(0,0,0,0.05) 0px 0px 0px 1px` |

Fonts: **Syne** (headings), **Syne Mono** (body/labels).

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel

1. Push this repo to GitHub — **`src/app` must be at the repository root**.
2. Import on [vercel.com/new](https://vercel.com/new) — Framework: **Next.js**, Root Directory: **empty**.
3. Redeploy.

See [DEPLOY.md](./DEPLOY.md) for troubleshooting.

```bash
npm run verify   # checks src/app exists before build
npm run build
```

### Common Vercel error

> Couldn't find any `pages` or `app` directory

Your GitHub repo is missing `src/`. Push the full project (see DEPLOY.md).

## Project structure

```
src/
  app/           # layout, page, globals.css
  components/    # sections, ui, providers
  data/          # design-tokens-fuse-kiwi.json
  lib/
public/
scripts/         # verify-deploy.mjs
```

## Sections

1. **Hero** — giant “Interesting Internet” + category-colored subtitle
2. **Showcase grid** — asymmetrical cards with parallax hover
3. **Category pills** — extracted Fuse category colors
4. **About** — editorial layout
5. **Marquee** — infinite scrolling typography
6. **Testimonials** — minimal rounded cards
7. **Footer** — oversized type on `#1a1a1a`
