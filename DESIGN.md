---
name: Pulse Data
description: Physical-world AI data collection and labelling, presented as a contact sheet from a site visit.
colors:
  photo-paper: "#E8E9E5"
  photo-paper-shade: "#DCDDD8"
  paper-rule: "#C4C6C0"
  ink: "#131415"
  ink-soft: "#3B3D40"
  ink-muted: "#5E6166"
  film-base: "#0F0F0E"
  film-raised: "#1B1A18"
  film-rule: "#2D2B28"
  film-text: "#E6E2D8"
  film-text-soft: "#A8A397"
  edge-print: "#E3A13A"
  china-marker: "#F0CF2A"
  grease-pencil: "#D3382C"
typography:
  display:
    fontFamily: "Archivo (wdth 72), Arial Narrow, sans-serif"
    fontSize: "clamp(3rem, 8.2vw, 6rem)"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.02em"
  heading:
    fontFamily: "Archivo (wdth 72), Arial Narrow, sans-serif"
    fontSize: "clamp(2.4rem, 5.6vw, 4.5rem)"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.55
  data:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    letterSpacing: "0.08em"
  hand:
    fontFamily: "Permanent Marker, cursive"
    fontSize: "0.95rem"
    fontWeight: 400
rounded:
  none: "0px"
  hair: "2px"
spacing:
  gutter: "clamp(16px, 4vw, 48px)"
  section: "clamp(80px, 11vw, 144px)"
  head-gap: "clamp(48px, 7vw, 80px)"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.photo-paper}"
    rounded: "{rounded.hair}"
    padding: "0 24px"
    height: "52px"
  button-line:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.hair}"
    padding: "0 24px"
    height: "52px"
  button-film:
    backgroundColor: "{colors.china-marker}"
    textColor: "{colors.ink}"
    rounded: "{rounded.hair}"
    padding: "0 24px"
    height: "52px"
  field-film:
    backgroundColor: "{colors.film-raised}"
    textColor: "{colors.film-text}"
    rounded: "{rounded.hair}"
    padding: "13px 14px"
---

# Design System: Pulse Data

## Overview

The site is a contact sheet from a site visit. Cool photographic paper is the ground; black film strips carry the footage, with sprocket holes and amber edge print showing real frame numbers and timecodes. Labelling appears as china-marker and grease-pencil marks on the footage, which is exactly what the product sells: real footage plus labels drawn by people who know the work.

Sections alternate between paper (proof, access, ethics, audiences, FAQ) and film (what we install, request a sample). The rhythm is set by hairline rules and ruled columns, not cards.

## Colors

### Primary
- **Ink** `#131415`: headlines, body and primary buttons on paper.
- **Film base** `#0F0F0E`: strips and dark sections.

### Secondary
- **China marker** `#F0CF2A`: hand marks, the headline highlight, and the primary action on film.
- **Grease pencil** `#D3382C`: ticks, contact points, focus rings and list markers.

### Tertiary
- **Edge print** `#E3A13A`: frame numbers and edge text on film only.

### Neutral
- Photo paper `#E8E9E5`, paper shade `#DCDDD8`, paper rule `#C4C6C0`, ink soft `#3B3D40`, ink muted `#5E6166`; film raised `#1B1A18`, film rule `#2D2B28`, film text `#E6E2D8`, film text soft `#A8A397`.

### Named Rules
- **Marker Means Label.** Yellow and red only mark things: labels, selections, ticks, focus. They never fill decorative surfaces.
- **Cool Paper, Never Cream.** The paper ground stays a cool, slightly grey photographic white.

## Typography

Archivo carries everything, condensed to wdth 72 at weight 800 for display and headings, and at normal width for body. JetBrains Mono is used only for real data: frame numbers, timecodes, table headers. Permanent Marker is used only for hand marks on footage.

### Hierarchy
- Display (h1): clamp(3rem, 8.2vw, 6rem), 800, line-height 0.95.
- Heading (h2): clamp(2.4rem, 5.6vw, 4.5rem), 800.
- Subheading (h3): 1.35 to 2.2rem, 800, condensed.
- Body: 18px / 1.55, measure capped at 64ch.
- Data: 0.72 to 0.75rem mono, tracked 0.08 to 0.12em, uppercase for headers.

### Named Rules
- **Mono Is Measurement.** Monospace appears only on numbers, timecodes and data labels.

## Layout

Max width 1280px with a fluid gutter. Each section opens with a two-column head (heading left, lede right, bottom-aligned). Content sits in ruled columns, a register table, or a two-column slip. Film strips run full-bleed and scroll sideways on narrow screens.

## Elevation & Depth

The page is flat. The one exception is the QC slip, which casts a soft offset shadow `0 18px 40px -24px rgba(19,20,21,.45)` like a printed form lying on paper.

## Shapes

Square corners with 2px at most. Hand marks are the only curves.

## Components

### Buttons
Solid ink on paper, solid china marker on film, ink outline as the secondary. Minimum height 52px (44px in the nav), with a 1px press on active.

### Inputs / Fields
Raised film fields with a film-rule border. Focus turns the border china marker; invalid turns it grease pencil.

### Navigation
A sticky paper bar with a bottom hairline. Links underline in grease pencil on hover.

### Film Strip (signature)
Sprocket rows, an amber edge-print line, then a scrolling row of frames with mono frame numbers and timecodes. The select frame carries a hand-drawn marker loop and a red tick that draw in once on load.

### Label Viewer (signature)
A footage frame with SVG annotations in marker colours and a "Labels" toggle that hides or shows them.

## Do's and Don'ts

### Do:
- Show real footage before claims.
- Keep marker colours for labels and actions.
- Rule content with hairlines and columns.

### Don't:
- Use gradient text, eyebrow labels above headings, or rows of identical icon cards.
- Invent numbers, prices or customers.
- Use mono or the hand face as decoration.
