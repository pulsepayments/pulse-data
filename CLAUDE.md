# Pulse Data website

Static marketing site: `index.html`, `styles.css`, `main.js`, and `assets/`. No build step.

## Sources of truth
- `PRODUCT.md`: who the site is for and which claims are true. Never invent numbers, prices, customers or locations beyond what it lists.
- `DESIGN.md` and `.impeccable/design.json`: the contact-sheet visual system. Follow its named rules.
- `.impeccable/surfaces/index-html.md`: the landing page's direction contract.

## How to work here
- Do design work in one agent loop, with skills loaded progressively, rather than splitting it across many subagents (see "Building agents: When to fold subagents into your main agent loop" on claude.com). Bring in a subagent only for genuinely independent, parallel work.
- Design: use the `impeccable` skill (`/impeccable critique`, `polish`, `audit`). Run `.claude/skills/impeccable/scripts/impeccable detect --json index.html styles.css` after UI changes.
- Motion: use `emil-design-eng`, `animate` and `review-animations`. The page has one authored motion (the hero marker draw-in); don't scatter entrance effects.
- Planning larger changes: use `plan-council`.
- Security: keep the CSP strict (no inline scripts, handlers or style attributes) and follow `SECURITY.md`. Run `/security-review` before shipping changes.

## Verifying
Serve locally with `python3 -m http.server 8000`, then check at 1440px and 390px widths. There must be no horizontal page scroll and no console errors.
