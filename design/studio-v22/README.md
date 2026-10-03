# Portfolio v22 — scope marks, service trace and automated checks

Release version: `portfolio-v22-20261004`. Base revision: `191dfb9` (v21). Published claims, dates, case outcomes, résumé files, images and CSP directives are unchanged.

## Interface

- **Equipment scope marks.** One shape per scope — filled circle for hands-on service, filled diamond for implementation support, outlined square for completed training — appears in a key above the category tabs, on each tab and beside the matching rows in each panel. Tab marks are built by `panelScopes` in `script.js` from the rows the panel lists, so a tab cannot show more scope than its panel states. The marks are decorative (`aria-hidden`); the panel text remains the accessible source. The dropdown-style chevron, which suggested an expanding menu, is no longer shown on the tabs.
- **Service record trace.** Context, responsibility and verification connect through a thin trace to the recorded outcome, which sits in a tinted box with a filled node. CSS only; the wording is unchanged and printing keeps a light tint in either theme.
- Evaluated and dropped: an animated disclosure height and a fading panel switch. The first delayed an opened service note becoming readable; the second lowered measured text contrast while fading.

## Fixes

- Native `color-scheme` now follows a system theme change after load; scrollbars and form controls previously kept the scheme from page load.
- The EN and 中文 buttons declare `lang`, so screen readers pronounce each label in its own language.
- Chinese date ranges use the same CJK–digit spacing as the rest of the page (`2019 年 12 月至 2020 年 2 月`).
- Removed five unused strings from `content/profile.json` (`corpulsScope`, `ecgScope`, `hologicScope`, `monitorScope`, `equipmentLabel`); `ecgScope` still carried older HeartStart wording.
- Removed the unused `.is-restoring-hash` rule.

## Generation and checks

- `tools/sync_site_content.py` reads and writes UTF-8 explicitly and writes the sitemap `lastmod` from the date in `VERSION`.
- The contract tests read `VERSION` from the generator instead of repeating it, and cover the scope-mark derivation, the theme colour-scheme update and the language attributes. The browser interaction check also compares every tab's marks with its panel rows and switches the system theme after load.
- `.github/workflows/site.yml` runs the contract tests and a generator-drift check on every push and pull request. Its deploy job publishes `main` to GitHub Pages after the checks pass, once the repository's Pages source is set to GitHub Actions. The Pages artifact includes hidden files so `.well-known/security.txt` stays published.

## Local verification

Run against a local preview of this revision before publication:

- `node --test tests/site-contract.test.mjs`: 30/30 passed. `python3 tools/sync_site_content.py` left no diff.
- Browser checks with local Chrome: acceptance matrix 96/96, interactions 12/12, accessibility 76 checks with no violations or targets under 24 px, security 8/8.
- CI steps reproduced on a clean copy: they passed, and failed as intended when CSS or profile copy changed without running the generator.

Screenshots and logs are kept outside this repository. Production status is confirmed separately after deployment.
