# Security

The site is static (HTML, CSS, JS and one image), which keeps the attack surface small. These measures are already in place:

- **Strict Content Security Policy.** Scripts load only from this site, and there are no inline scripts, inline event handlers or inline style attributes. Fonts come only from Google Fonts. The policy is set as a `<meta>` tag in `index.html` and as a full HTTP header in `_headers`.
- **Hardening headers** in `_headers` (read by Netlify and Cloudflare Pages): HSTS, `X-Content-Type-Options: nosniff`, clickjacking protection (`frame-ancestors 'none'` and `X-Frame-Options: DENY`), a strict referrer policy, and a Permissions-Policy that turns off camera, microphone, location, payment and USB.
- **Form hygiene.** Every field has a length cap and client-side checks, plus a hidden honeypot field to filter out simple bots. The form posts nowhere yet.

## Before connecting the form

1. Send submissions over HTTPS to a backend you control or a reputable form service.
2. Validate and sanitise every field on the server again. Client-side checks are for convenience and stop no attacker.
3. Add rate limiting or a CAPTCHA (for example Cloudflare Turnstile) if spam appears.
4. Add the endpoint's origin to `connect-src` (for `fetch`) or `form-action` (for a plain POST), in both the meta tag and `_headers`.
5. Store leads with access controls and decide how long to keep them. Submissions contain personal data, so GDPR and similar laws apply.

## On Vercel or another host

`_headers` is only read by Netlify and Cloudflare Pages. On Vercel, copy the same headers into `vercel.json`. On other hosts, set them in the server or CDN config.

## Reporting

Report security issues privately to the team rather than opening a public issue.
