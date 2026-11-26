# Deploying to data.pulsepayments.co (Cloudflare Workers)

Cloudflare builds the site from GitHub and redeploys on every push to the production branch, so a push is a live update.

## One-time setup (Cloudflare dashboard → Workers & Pages → Create → Import a repository)

1. Pick `pulsepayments/pulse-data`.
2. Fill in:
   - **Project name:** `pulse-data` (must match `name` in `wrangler.jsonc`)
   - **Build command:** `sh build.sh`
   - **Deploy command:** `npx wrangler deploy` (the default)
   - **Preview command:** leave the default
   - **Production branch** (under advanced settings, if shown): `claude/inspiring-goldberg-xsldqr` for now, then `main` once merged.
3. Click **Deploy**.

`wrangler.jsonc` attaches `data.pulsepayments.co` as a custom domain. Because pulsepayments.co is on the same Cloudflare account, the first deploy creates the DNS record and HTTPS certificate. If a DNS record for `data` already exists, delete it first or the deploy will refuse to take it over.

## Pushing live updates

Commit and push to the production branch. Cloudflare rebuilds and the change is live in about a minute. Other branches get preview versions without touching the live site.

## What gets published

`build.sh` copies only `index.html`, `styles.css`, `main.js`, `_headers` and the images in `assets/` into `dist/`, which `wrangler.jsonc` serves. Repo internals (`.claude/`, `PRODUCT.md`, `DESIGN.md`, `docs/`, `.impeccable/`) are never published. `_headers` applies the security headers (CSP, HSTS, anti-clickjacking).

## Optional

- **Analytics:** turn on Cloudflare Web Analytics. It adds a script, so add `https://static.cloudflareinsights.com` to `script-src` and `https://cloudflareinsights.com` to `connect-src` in both the CSP meta tag and `_headers`.
