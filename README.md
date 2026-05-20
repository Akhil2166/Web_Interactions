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
cd fuse-website
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build & deploy

```bash
npm run build
npm start
```

Deploy to Vercel, Netlify, or any Node host supporting Next.js.

## Project structure

```
src/
  app/           # layout, page, globals.css
  components/
    sections/    # Hero, Showcase, Pills, About, Marquee, Testimonials, Footer
    ui/          # Button, MagneticButton, Container
    providers/   # SmoothScroll (Lenis)
  data/          # design-tokens-fuse-kiwi.json
  lib/           # tokens, motion presets, utils
```

## Sections

1. **Hero** — giant “Interesting Internet” + category-colored subtitle
2. **Showcase grid** — asymmetrical cards with parallax hover
3. **Category pills** — extracted Fuse category colors, 50px radius
4. **About** — editorial layout with scroll parallax
5. **Marquee** — infinite scrolling typography
6. **Testimonials** — minimal rounded cards
7. **Footer** — oversized type on `#1a1a1a` surface

## Source files

Design documentation lives in the parent folder:

- `../DESIGN-fuse-kiwi.md`
- `../design-tokens-fuse-kiwi.json`
