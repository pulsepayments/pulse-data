---
name: Pulse Data
description: Dark product-site system modelled closely on Linear and Lemni, as pinned by the founder.
colors:
  page: "#08090A"
  page-violet: "#0D0D12"
  panel: "#0F1011"
  panel-raised: "#141516"
  line: "#23252A"
  line-soft: "#1A1B1F"
  text: "#F7F8F8"
  text-soft: "#D0D6E0"
  muted: "#8A8F98"
  dim: "#80858D"
  lavender: "#E3E8FF"
  violet: "#7B5CFF"
  violet-light: "#A78BFA"
  indigo: "#5E6AD2"
  success: "#4CB782"
  warning: "#F2C94C"
  danger: "#EB5757"
  light-page: "#F4F5F8"
  light-ink: "#0D0D12"
  light-muted: "#5A5B6C"
typography:
  display:
    fontFamily: "Inter, -apple-system, sans-serif"
    fontSize: "clamp(2.6rem, 6.4vw, 5.9rem)"
    fontWeight: 400
    lineHeight: 0.92
    letterSpacing: "-0.05em"
  heading:
    fontFamily: "Inter, -apple-system, sans-serif"
    fontSize: "clamp(2.4rem, 4.6vw, 4rem)"
    fontWeight: 510
    lineHeight: 1
    letterSpacing: "-0.035em"
  subheading:
    fontFamily: "Inter, -apple-system, sans-serif"
    fontSize: "clamp(1.6rem, 2.6vw, 2.25rem)"
    fontWeight: 510
    lineHeight: 1.15
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Inter, -apple-system, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.6
  ui:
    fontFamily: "Inter, -apple-system, sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "11px"
    fontWeight: 400
    letterSpacing: "0.06em"
rounded:
  sm: "6px"
  md: "10px"
  lg: "12px"
  xl: "16px"
  pill: "999px"
spacing:
  gutter: "clamp(16px, 5vw, 80px)"
  section: "clamp(96px, 12vw, 180px)"
components:
  button-white:
    backgroundColor: "#E6E6E6"
    textColor: "{colors.page}"
    rounded: "{rounded.pill}"
    height: "40px"
    padding: "0 16px"
  button-dark:
    backgroundColor: "#1C1D20"
    textColor: "{colors.text}"
    rounded: "{rounded.pill}"
    height: "40px"
    padding: "0 16px"
  button-glow:
    backgroundColor: "#1B1240"
    textColor: "#FFFFFF"
    rounded: "{rounded.pill}"
    height: "44px"
    padding: "0 20px"
  card:
    backgroundColor: "{colors.panel-raised}"
    textColor: "{colors.text}"
    rounded: "{rounded.md}"
    padding: "12px"
  input:
    backgroundColor: "#0B0C0D"
    textColor: "{colors.text}"
    rounded: "8px"
    padding: "10px 12px"
---

# Design System: Pulse Data

## Overview

The founder asked for the site to follow linear.app and lemni.com almost bar for bar, so the system borrows their grammar directly. Linear supplies the frame: a near-black page, Inter at weight 510 with tight tracking, a top nav with a white pill button, a large product-UI mock under the hero, "FIG 0.x" line-art columns, feature sections with the heading left and the text right, board and review mocks, the closing call to action and the multi-column footer. Lemni supplies the moments: a centred thin headline with a glowing violet button, tilted 3D UI cards, a dark-to-violet gradient band, a light section with an icon row and an angled app shot, and template cards.

All content is Pulse Data's own: the mining frame, the four regions, sensor types and label types. The UI mocks are illustrative and never carry invented volumes, prices or customers.

## Colors

### Primary
- **Page** `#08090A` (Linear) and **Page violet** `#0D0D12` (Lemni sections).
- **Text** `#F7F8F8`, with **muted** `#8A8F98` for the second half of two-tone headings and body copy.

### Secondary
- **Violet** `#7B5CFF` and **Violet light** `#A78BFA`: glow buttons, the gradient band, icons in the pair section.
- **Lavender** `#E3E8FF`: Lemni-style thin headlines.

### Tertiary
- Status colours from Linear: indigo `#5E6AD2` (done), warning `#F2C94C` (in progress), danger `#EB5757` (recording), success `#4CB782`.

### Neutral
- Panels `#0F1011` and `#141516`, hairlines `#23252A` and `#1A1B1F`; light section `#F4F5F8` with ink `#0D0D12`.

### Named Rules
- **Two-Tone Headings.** Lead phrase in full text colour, the rest in muted or lavender-60%.
- **Glow Is for the Primary Action.** Only the main "Request data" button glows.

## Typography

Inter everywhere. Linear sections use weight 510 with -0.035em tracking; Lemni sections use weight 400 with -0.045 to -0.05em tracking. JetBrains Mono only for figure labels and IDs.

### Hierarchy
- Display: clamp(2.6rem, 6.4vw, 5.9rem), 400, lavender.
- Heading: clamp(2.4rem, 4.6vw, 4rem), 510.
- Subheading / two-tone: clamp(1.6rem, 2.6vw, 2.25rem).
- Body: 15 to 18px muted; UI text 13px.

## Layout

Max width 1280px with a fluid gutter. Linear sections use a two-column head (heading left, larger lede right) followed by a full-width mock and a three-column feature list. Lemni sections are ruled into halves with hairlines.

## Elevation & Depth

Flat panels with 1px borders. Depth appears only on floating UI (chat panel, tilted cards, angled light app shot), as large soft shadows.

## Shapes

Pills for buttons and tags, 10 to 16px radii for panels and app frames.

## Components

### Buttons
White pill (primary in the nav and final CTA), dark pill (secondary), violet glow pill (hero and template CTA), ghost pill (secondary next to the glow).

### Cards / Containers
Board cards with a mono ID, title and pill tags; Lemni template cards with an icon chip, title and tags.

### Navigation
Sticky bar that gains a blurred background once the page scrolls; links in muted grey, a separator, a text link and the white pill.

### Product mocks (signature)
The hero app frame (sidebar, session view, properties, floating assistant panel), the collection board, and the label review panel with a toggle that shows or hides annotations.

## Do's and Don'ts

### Do:
- Keep copy and claims to what PRODUCT.md confirms.
- Use the real mining frame wherever footage appears.

### Don't:
- Add customer logos, testimonials, prices or volumes until they are real.
- Use inline styles; the CSP forbids them.
