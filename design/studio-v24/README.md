# Portfolio v24 — mobile readability and accessibility

Release version: `portfolio-v24-20261023`. Base revision: `9404076`. Career facts, résumé files, portraits and device illustrations are unchanged.

## Changes

- Darker shared gradients for the main résumé button, selected equipment category and brand mark. The previous bright endpoint gave white text only 3.52:1 contrast and the smaller selected category label 3.03:1; the new ramp keeps these labels above 4.86:1.
- A darker contact backdrop with a weaker glow, keeping the light text legible across the gradient.
- Hide the decorative ECG trace below 700 px so it cannot cross the mobile introduction. Keep the brand's touch area at least 44 px high.
- Make the hamburger icon visible in forced-colour mode using a real border. Give selected tabs an inset outline and keyboard focus a separate outside outline; keep the role text readable without its gradient.
- Refresh the release references, stylesheet SRI and sitemap through the existing generator. The CSP is unchanged.

## Reproducible checks

Run `node --test tests/site-contract.test.mjs` and the four existing `tests/browser-*.cjs` tools against a local preview using `QA_URL` and an external `QA_OUT` directory. Use `PLAYWRIGHT_MODULE` and `AXE_SOURCE` to point to existing development dependencies; none are delivered to visitors.

- `browser-acceptance.cjs`: 96 combinations of six widths, two languages, two themes, native Chrome 100%/200% zoom and two motion preferences. Portrait uniqueness uses its accessible name rather than an obsolete filename.
- `browser-accessibility.cjs`: 140 recorded checks, including axe scans of the page, all seven categories, dialog and compact menu; touch targets; sampled gradient contrast; text spacing and forced colours. Widths are 320, 390 and 1440 px. Keep axe's incomplete findings for further review.
- `browser-interactions.cjs`: keyboard navigation, focus recovery, independent disclosure controls, real downloads, copy fallback, print and failure modes. Preserve the responsive-image decode waits.
- `browser-security.cjs`: hostile stored values/fragments, CSP/SRI enforcement and script-failure fallback.

Lighthouse 13.5.0, axe-core 4.14.0 and installed Chrome were used for this release. Record fresh mobile Lighthouse runs separately from browser interaction tests to avoid competing browser workloads, and retain the HTML/JSON reports outside this repository. Compare repeated production runs under the same conditions; a local uncompressed preview is not a production transfer-size benchmark.

Lighthouse's `robots-txt` fetch can fail with `CSP violation` because this static site deliberately uses `connect-src 'none'`. Check the actual public file separately and retain the original audit score; do not loosen CSP to improve it. The additional agentic-browsing category has the same fetch limitation for `llms.txt`, which this portfolio does not provide.

Screenshots, contrast review, local and production reports are retained outside the public repository. Automated scores and Chrome emulation do not establish real-user Core Web Vitals, full WCAG conformance or physical mobile/screen-reader compatibility. Deployment success and live file/header readback are separate release checks.
