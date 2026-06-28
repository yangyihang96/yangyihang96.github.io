# Security Notes

This is a static personal website. Security hardening is split between browser-enforced document policy and optional hosting-layer headers.

## Active in the page

- Meta Content Security Policy restricts scripts, images, connections, frames, objects, and form submissions to the static site surface.
- Referrer Policy is set to `strict-origin-when-cross-origin`.
- External links use `rel="noopener noreferrer"`.
- Language switching builds rich content with DOM nodes instead of assigning HTML strings.
- `.well-known/security.txt` publishes a lightweight contact path for responsible reports.

## Hosting-layer headers

GitHub Pages does not let this repository set custom HTTP response headers for the live custom domain. The `_headers` file is included for hosts that support it, such as Cloudflare Pages or Netlify, and should be applied if the site is moved behind a configurable edge.
