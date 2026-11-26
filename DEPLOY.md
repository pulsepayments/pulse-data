# Deploying to data.pulsepayments.co (Cloudflare Pages)

Cloudflare Pages builds the site from GitHub and redeploys on every push, so a push is a live update.

## One-time setup (about 5 minutes, in the Cloudflare dashboard)

1. Go to **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
2. Authorise GitHub if asked, then pick the `pulsepayments/pulse-data` repository.
3. Set up the build:
   - **Project name:** `pulse-data`
   - **Production branch:** `claude/inspiring-goldberg-xsldqr`, for now. Switch it to `main` once the work is merged there.
   - **Framework preset:** None
   - **Build command:** `sh build.sh`
   - **Build output directory:** `dist`
4. Click **Save and Deploy**. The site goes live at `pulse-data.pages.dev` (or a similar name) in about a minute.
5. Open the project → **Custom domains** → **Set up a custom domain** → enter `data.pulsepayments.co` → **Activate domain**.
   Because pulsepayments.co is already on Cloudflare, it adds the DNS record and HTTPS certificate for you. It's usually live within a few minutes.

## Pushing live updates

Commit and push to the production branch. Cloudflare rebuilds and the change is live in about a minute. Pushes to any other branch get their own preview URL, without touching the live site.

## What gets published

`build.sh` copies only `index.html`, `styles.css`, `main.js`, `_headers` and the images in `assets/` into `dist/`. Repo internals (`.claude/`, `PRODUCT.md`, `DESIGN.md`, `docs/`, `.impeccable/`) are never published.

`_headers` applies the security headers (CSP, HSTS, anti-clickjacking) on Cloudflare Pages automatically.

## Optional

- **Hide the pages.dev address:** in the project, add a redirect rule (Rules → Redirect Rules on the pulsepayments.co zone, or a `_redirects` file) from `pulse-data.pages.dev` to `https://data.pulsepayments.co`.
- **Analytics:** turn on Cloudflare Web Analytics for the project. It adds a script, so add `https://static.cloudflareinsights.com` to `script-src` and `https://cloudflareinsights.com` to `connect-src` in both the CSP meta tag and `_headers`.
