# Pulse Data — landing page

A single-file landing page (`index.html`) for Pulse Data, a physical-world AI data collection and labelling company. No build step and no dependencies: open the file in a browser or deploy it to any static host (Netlify, Vercel, GitHub Pages, S3).

The layout follows physicaldata.ai: a floating pill nav, a dark hero with a live session console, light and dark sections that alternate, proof stats, question cards, a sensor kit, a market comparison, pricing, a tabbed FAQ, a gradient call-to-action band and a floating sample toast. It also borrows the bento grid and gradient headings from Linear, and the centred two-tone heading, ruled grid and glow button from Lemni.

## Before launch

- **Replace the placeholder figures.** Site counts, the site roster, the ramp-up numbers, prices ($18/h, 300 h minimum) and the market comparison ranges are examples, not real data.
- **Connect the form.** The request form's submit handler is marked `TODO` in the `<script>` block. Point it at Formspree, HubSpot, Netlify Forms or your own backend.
- **Update brand details.** Change the company name, logo (the `#logo` symbol in the SVG sprite), email address and social links.
- **Tune the colours.** Every colour is a CSS variable under `:root`.

## Preview

![Desktop hero](docs/preview-desktop.png)
