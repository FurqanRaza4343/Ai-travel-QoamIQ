# TODO

- [ ] Update Vercel CSP in `next.config.ts` to allow fonts loaded from Vercel Blob Storage (`*.vercel-storage.com` / `vercel-storage.com`).
- [ ] Keep existing CSP directives (preserve `frame-src`).
- [x] Ensure CSP header is valid for Next.js.
- [ ] After change, redeploy on Vercel (user will handle) and verify the font CSP error disappears.


