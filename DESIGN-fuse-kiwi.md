# Design System Inspired by Fuse.kiwi

> Auto-extracted from `https://www.fuse.kiwi/` on 2026-05-20

## 1. Visual Theme & Atmosphere

Clean, minimal, and product-focused with deliberate use of whitespace.

The hero section leads with "InterestingInternet" followed by "illustration".

**Key Characteristics:**
- syne as the heading font (custom web font loaded via @font-face)
- syne as the body font for all running text
- Heading weight 500, letter-spacing -12px
- Light/white background (#f2f2f2) as the primary canvas
- Primary accent `#0000ff` used for CTAs and brand highlights
- 1 shadow level(s) detected — tinted shadows
- Rounded corners (2px+) creating a friendly, approachable feel
- Tags: light, rounded, accented, bold-typography, monospace, sans-serif

## 2. Color Palette & Roles

### Primary
- **Primary Accent** (`#0000ff`) · `--color-primary`: Brand color, CTA backgrounds, link text, interactive highlights.
- **Background** (`#f2f2f2`) · `--color-bg`: Page background, primary canvas.
- **Background Secondary** (`#000000`) · `--color-bg-secondary`: Cards, surfaces, alternating sections.

### Text
- **Text Primary** (`#000000`) · `--color-text`: Headings and body text.
- **Text Secondary** (`#666666`) · `--color-text-secondary`: Muted text, captions, placeholders.

### Borders & Surfaces
- **Border** (`#1a1a1a`) · `--color-border`: Dividers, outlines, input borders.

### Full Extracted Palette

| # | Hex | CSS Variable | Role | Area | Contrast |
|---|---|---|---|---|---|
| 1 | `#1a1a1a` | `--palette-1` | button | medium | text-light |
| 2 | `#000000` | `--palette-2` | badge | small | text-light |
| 3 | `#0000ff` | `--palette-3` | text-accent | small | text-light |

## 3. Typography Rules

- **Heading Font:** `syne` (web font)
- **Body Font:** `syne` (web font)

### Type Hierarchy

| Role | Font | Size | Weight | Line Height | Letter Spacing |
|---|---|---|---|---|---|
| H1 | syne | 240px | 500 | 240px | -12px |
| H3 | syne | 48px | 500 | 56px | normal |
| H4 | syne | 32px | 500 | 34px | normal |
| Body | Syne Mono | 14px | 500 | 16px | normal |

### Type Scale

| Token | Size | Suggested Usage |
|---|---|---|
| Display | `240px` | headings |
| H1 | `32px` | headings |
| H2 | `28px` | headings |
| H3 | `24px` | headings |
| H4 | `16px` | headings |
| Body L | `14px` | body / supporting text |

## 4. Component Stylings

### Primary Button

```css
.btn-primary {
  background: transparent;
  color: #1a1a1a;
  border-radius: 4px;
  padding: 4px 0px;
  font-size: 24px;
  font-weight: 500;
  border: none;
  cursor: pointer;
}
```

### Filled Button

```css
.btn-filled {
  background: #1a1a1a;
  color: #ffffff;
  border-radius: 24px;
  padding: 0px 12px;
  font-size: 24px;
  font-weight: 500;
  border: none;
  cursor: pointer;
}
```

## 5. Layout Principles

- **Base spacing unit:** `2px` — use multiples (4px, 6px, 8px, etc.)

### Spacing Scale (extracted from real elements)

| Token | Value | Role |
|---|---|---|
| spacing-1 | `2px` | element |
| spacing-2 | `4px` | element |

### Border Radius Scale

| Token | Value | Element |
|---|---|---|
| radius-subtle | `2px` | subtle |
| radius-button | `6px` | button |
| radius-card | `24px` | card |
| radius-subtle | `4px` | subtle |

## 6. Depth & Elevation

| Level | Shadow | Usage |
|---|---|---|
| Low | `rgba(0, 0, 0, 0.05) 0px 0px 0px 1px` | Cards, subtle elevation |


## 7. Do's and Don'ts

### Do
- Use `#f2f2f2` as the primary background color
- Use `syne` for all headings and `syne` for body text
- Use `#0000ff` as the single dominant accent/CTA color
- Maintain `2px` as the base spacing unit — all gaps should be multiples
- Use rounded corners (`2px`+) consistently for all interactive elements
- Make headlines large and bold — typography is the hero element
- Apply the shadow system for elevation — use the extracted shadow values
- Use weight 500 for headings to match the brand's typographic voice

### Don't
- Don't use colors outside the extracted palette without justification
- Don't substitute syne/syne with generic alternatives
- Don't use irregular spacing — stick to 2px grid
- Don't use dark/black backgrounds — this is a light-themed design
- Don't use sharp corners — they feel hostile in this rounded design language
- Don't use pure black (#000000) for text — use `#000000` instead
- Don't add decorative elements not present in the original design — no badges, ribbons, banners, or ornaments unless the source site uses them
- Don't invent UI patterns the source site doesn't have — if the original has no NEW badge, don't add one just because a red is in the palette

## 8. Responsive Behavior

| Breakpoint | Width | Notes |
|---|---|---|
| Mobile | < 640px | Single column, stack sections, reduce font sizes ~80% |
| Tablet | 640–1024px | 2-column where appropriate, maintain spacing ratios |
| Desktop | 1024–1440px | Full layout as designed |
| Wide | > 1440px | Max-width container, center content |

- Touch targets: minimum 44×44px on mobile
- Maintain 2px base unit across breakpoints — only scale multipliers

## 9. Agent Prompt Guide

### Quick Color Reference

```
Background:  #f2f2f2
Text:        #000000
Accent:      #0000ff
Border:      #1a1a1a
```

### Example Prompts

1. "Build a hero section with a `#f2f2f2` background, `syne` heading in `#000000`, and a `#0000ff` CTA button with 24px radius."
2. "Create a pricing card using background `#000000`, border `#1a1a1a`, `syne` for text, and 6px padding."
3. "Design a navigation bar — `#f2f2f2` background, `#000000` links, `#0000ff` for active state."
4. "Build a feature grid with 3 columns, 6px gap, each card using the card component style."
5. "Create a footer with `#000000` background, `#f2f2f2` text, and 4px padding."

### Iteration Guide

1. Start with layout structure (sections, grid, spacing)
2. Apply colors from the palette — background first, then text, then accents
3. Set typography — font families, sizes from the type scale, weights
4. Add components — buttons, cards, inputs using the specs above
5. Apply border-radius consistently across all elements
6. Add shadows for depth — use the extracted shadow values, not defaults
7. Check responsive behavior — test mobile and tablet layouts
8. Final pass — verify all colors match, spacing is consistent, fonts are correct

## 10. CSS Custom Properties

> 21 custom properties extracted from `:root` / `html` stylesheets.

### Color Variables

| Variable | Value |
|---|---|
| `--bg` | `#f2f2f2` |
| `--line` | `#4d4e52` |
| `--visited` | `#e2e5e7` |
| `--white` | `#fff` |
| `--black` | `#1a1a1a` |
| `--blue` | `#0071d5` |
| `--yellow` | `#ebff00` |
| `--loading` | `#37383d` |
| `--purple` | `#4215cc` |
| `--green` | `#92ff45` |
| `--graphic` | `#5de726` |
| `--photo` | `#57c7f5` |
| `--illustration` | `#ffa96c` |
| `--threed` | `#3bdc5e` |
| `--art` | `#7ca4ff` |
| `--type` | `#ef8fdd` |
| `--video` | `#ffd900` |
| `--music` | `#b9b2fa` |
| `--reading` | `#1de1a1` |
| `--website` | `#ff909f` |

### Spacing Variables

| Variable | Value |
|---|---|
| `--grey-opacity` | `0.7` |
