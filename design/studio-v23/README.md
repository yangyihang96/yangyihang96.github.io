# Portfolio v23 — technical console look, new portrait and introduction

Release version: `portfolio-v23-20261012`. Base revision: `7ddbfae` (v22). Employment facts, dates, case outcomes, résumé files, equipment illustrations and CSP directives are unchanged.

## Interface

- **Dark identity console.** The hero is a navy stage in both colour schemes: a faint 48 px grid, a radial glow and a decorative ECG trace (inline SVG, `aria-hidden`) that runs under the identity block and the readout tiles. The four facts (experience, location, licence, languages) are rendered as instrument-style tiles with monospace labels.
- **Portrait frame.** Viewfinder corner brackets and a soft glow around the portrait; no decoration overlaps the face. Mobile shows the portrait at 176 px below the contact actions, keeping identity and contact first.
- **Monospace technical labels.** Section labels, project indices, dates, category sub-labels and the scope key use `ui-monospace`; the system sans-serif remains for headings and body copy. No web fonts are loaded (`font-src 'none'` is unchanged).
- **Cards.** Experience, service projects, education and the website note sit in bordered cards with a hairline accent on top and a soft shadow; project cards highlight their border on hover. The equipment console gets a grid backdrop, glass-style tabs and a bordered panel area.
- **Header and controls.** Translucent blurred header, a gradient brand tile, pill-style navigation states, gradient primary buttons with a glow on hover, and a gradient reading-progress line.
- Motion stays limited to hover transitions and the existing scroll-driven progress line; `prefers-reduced-motion` disables all of it. No opacity animations are used on text, so measured contrast is unaffected.

## Portrait and introduction

- `assets/studio-v23/portrait-{320,640,960}.webp` replace the v20 hero portrait sources. The image is an identity-preserving edit of the existing studio headshot: Codex `image_gen` replaced the grey backdrop with a blurred medical-device workshop; the suit, shirt and tie are from the original photo. The face is re-rendered by the model, so the owner approved the result before publication. The figure caption now states "Studio portrait · AI-rendered lab background" / "本人照片 · 背景为 AI 合成的设备实验室".
- The JSON-LD `image`, Open Graph card and résumé portrait still use the original studio photo.
- `heroEyebrow` (new string) and `heroIntro` (rewritten in both languages) describe the role as keeping ventilators, ultrasound, patient monitors and pharmacy automation running through preventive maintenance, fault diagnosis, upgrades and documented verification. No new claims: every category named is already listed in the equipment section with its scope.

## Generation and checks

- `tools/sync_site_content.py` `VERSION` raised to `portfolio-v23-20261012`; sitemap `lastmod` follows it.
- Contract tests now require the v23 portrait sources in the hero and in the published-asset list, with a 120 kB ceiling on the 960 px file.

## Local verification (this revision, local preview at 127.0.0.1:8771)

- `node --test tests/site-contract.test.mjs`: 30/30. `python3 tools/sync_site_content.py` leaves no diff.
- Browser checks with local Chrome (Playwright 1.61 core, axe-core 4.14.0): acceptance matrix 96/96; accessibility 76 checks, 0 violations, no targets under 24 px; interactions and security results are recorded in the release notes outside the repository.

Screenshots and logs are kept outside this repository. Production status is confirmed separately after deployment.
