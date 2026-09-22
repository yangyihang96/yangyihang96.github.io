# Portfolio v20 — local implementation

This revision keeps the static HTML/CSS/JavaScript architecture. It prioritises a biomedical field-service identity, recorded service outcomes and clearly bounded equipment experience. No runtime content API, tracking or new framework is introduced.

## Content and generation

- `content/profile.json` is the shared public copy/fact source. `facts` stores established dates, degree names and case model names; bilingual copy and résumé text reference those values with `${token}` templates.
- `tools/profile_data.py` resolves the templates at build time. Unknown source evidence is recorded privately outside the repository, not as public placeholders.
- Run `python3 tools/build_resume.py` when résumé content changes. The DOCX is the sole layout source and LibreOffice exports the two-page PDF to the existing download path.
- Run `python3 tools/sync_site_content.py` after copy, CSS or JavaScript changes. This updates static English, the embedded Chinese dictionary, image alt text, metadata, asset versions, SRI and the existing JSON-LD CSP hash. It does not relax policy directives.
- English content remains readable without JavaScript. Native details, clipboard fallback, language persistence, keyboard tabs and native dialog are retained.

## Visual assets

See `asset-manifest.json` for all 38 retained, added or removed-from-page assets, including exact bilingual captions, reference URLs, authorisation limits, AI attributes, native dimensions, byte sizes and checksums.

- One existing portrait, resized proportionally to 320/640px without generative edits.
- Seven existing device category illustrations retained. Independent 1536×1024 WebP files are encoded from their original 1536×1024 sources for on-demand enlargement; no upscaling.
- CM150 is a category illustration, distinct from the X3 case. The Affiniti 70 illustration is distinct from the Affiniti 70G/CX50 case.
- Generated research still life and cable background are no longer referenced. Their files and earlier concepts are preserved.
- A new 1200×630 social card uses native typography and the unchanged portrait. Person JSON-LD still references the portrait.

## Validation entry points

```sh
node --test tests/site-contract.test.mjs
QA_OUT=/tmp/portfolio-qa node tests/browser-acceptance.cjs
QA_OUT=/tmp/portfolio-qa node tests/browser-interactions.cjs
QA_OUT=/tmp/portfolio-qa node tests/browser-accessibility.cjs
QA_OUT=/tmp/portfolio-qa node tests/browser-security.cjs
```

Serve the repository locally at `http://127.0.0.1:8765/`, or set `QA_URL`. The browser tools resolve locally installed Playwright, axe-core and Chrome; `PLAYWRIGHT_MODULE` and `AXE_SOURCE` may override the dependency paths. No browser dependencies are shipped to site visitors.

The acceptance matrix uses native Chrome per-host zoom preferences with `deviceScaleFactor: 1`; 200% is not simulated by changing only pixel density. Failure scenarios deliberately inject request/storage/clipboard errors and record them separately from application errors.

Screenshots, private evidence notes, browser logs and Lighthouse reports are held outside this public repository. The initial acceptance described here was performed locally before publication. Check the Git revision and GitHub Pages deployment for current production status.
