# Security Notes

This is a static personal website. Security hardening is split between browser-enforced document policy and optional hosting-layer headers.

## Active in the page

- Meta Content Security Policy restricts scripts, images, connections, frames, objects, and form submissions to the static site surface, and denies unused web-font, media, manifest, and data-image sources.
- CSP also blocks inline event handlers, inline style attributes, workers, child browsing contexts, and Trusted Types script sinks where supported.
- Every executable script and stylesheet reference carries an exact SHA-384 Subresource Integrity value, covered by contract tests that fail when a file changes without an HTML integrity update.
- Fragment navigation decodes the URL fragment and resolves it with `getElementById`; address-bar data is never parsed as a CSS selector.
- Referrer Policy is set to `strict-origin-when-cross-origin`.
- External links use `rel="noopener noreferrer"`.
- Language switching builds rich content with DOM nodes instead of assigning HTML strings.
- `.well-known/security.txt` publishes a lightweight contact path for responsible reports.

## Hosting-layer headers

The current DNS points directly to GitHub Pages. GitHub Pages does not let this repository set custom HTTP response headers for the live custom domain, so HSTS, frame-ancestors, COOP, CORP, Origin-Agent-Cluster, X-Content-Type-Options, and Permissions-Policy cannot be enforced from this repository alone.

The `_headers` file is included for hosts that support it, such as Cloudflare Pages or Netlify, and should be applied if the site is moved behind a configurable edge.
