# Professional portfolio v17

The page now leads with Nova Biomedical Australia employment and three documented service projects. Equipment coverage is visible before the seven illustrated category panels. Education and applied AI remain supporting sections. Public work-rights wording has been removed at the owner's request.

## Content and documents

- `content/profile.json` is the shared public copy source for English, Chinese and resume content. Keep private evidence, customer identifiers and certificate originals outside the repository.
- `python3 tools/sync_site_content.py` updates the static English page, embedded Chinese dictionary, metadata, download versions and CSP/SRI hashes. Run it after changing the shared copy, styles or scripts.
- `python3 tools/build_resume.py` creates the DOCX and exports it with LibreOffice. The export must be two A4 pages, with equipment/training starting on page two. Dependencies: python-docx, pypdf and LibreOffice (`soffice`). The PDF has no separate layout implementation.
- Existing PDF/DOCX paths remain valid. Page download links include the release version to avoid stale cached resumes.

Training completion, project work and internal practical training are distinct. FIX100 is a BD course; X3 is listed as field experience; Jaeger is excluded. Existing verified device-reference illustrations remain in `assets/studio-v16/`.

## Interaction and accessibility

Native `details` elements retain readable project summaries and independent expansion. The first service project and first AI note start open. Equipment switching retains keyboard navigation, deferred artwork and language-independent selection. All categories remain readable without JavaScript.

Section anchors are unchanged. Navigation follows the new order and correctly selects Contact at the page bottom. A single scroll-padding offset avoids doubled anchor spacing. The early theme bootstrap reserves the enhanced header height before the deferred script arrives; missing or failed scripts restore native navigation. Delayed-script checks measured CLS 0 in English and 0.029 with saved Chinese, in both themes. System dark mode, reduced motion, menu focus handling and clipboard fallbacks remain supported.

## Validation

Validated on 10 September 2026:

- `node --test tests/site-contract.test.mjs`: 24 passing checks.
- `node --check script.js` and `git diff --check`.
- Chrome: desktop/mobile × English/Chinese × light/dark; seven device selections, independent disclosures, keyboard, mobile menu, clipboard and downloads.
- Additional 320px narrow, 844×390 landscape, 768px tablet, reduced-motion and JavaScript-disabled checks.
- DOCX schema validation, two-page PDF rendering, text margins and shared-copy checks.
- Initial local mobile Lighthouse: performance 99, accessibility 100, best practices 100, CLS 0. The production check exposed a deferred-header layout shift, subsequently reproduced and fixed by the early bootstrap. SEO audit fetching of robots.txt is blocked by the page CSP; the robots file itself remains valid and directly accessible. Production acceptance requires performance >=90 and CLS <=0.1 after deployment.

Deployment continues through the existing GitHub Pages `main` branch and custom domain. Preserve unrelated working files and the previous release when publishing.
