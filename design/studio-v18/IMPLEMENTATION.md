# Portfolio v18 — equipment photography and interface refinement

## Intent and public content

Maintain the existing bilingual field-service portfolio, resume content, seven section anchors and seven equipment categories. Published qualifications, employment dates and project outcomes remain unchanged. Illustration captions and the image viewer are added to the shared bilingual source.

## Visual implementation

- Split hero: identity and contact actions first, with a separate complete V60 image plate. One reference-faithful image is used in light/dark and desktop/mobile layouts. The webpage changes around the image; device geometry and lighting are not recolored by CSS.
- Social-sharing metadata uses the same reference-based V60 artwork, replacing the older unverified composite.
- All seven device images have a consistent 3:2 canvas, neutral photographic lighting and matte contact shadows. `object-fit: contain` and intrinsic dimensions prevent stretching and cropping. No fictional equipment assembly or diagnostic data is shown.
- Equipment uses wrapping horizontal category tabs and a larger two-column image/details exhibit. The always-readable service-scope overview remains above it.
- Projects use editorial rows with the model, action summary and independent disclosure grouped together. Headings, buttons, captions, borders and spacing share a restrained style.
- Native image dialog supports Escape, close button, backdrop dismissal, focus containment and focus return. No-JavaScript visitors can read every category and follow manufacturer references; inactive image controls stay hidden.
- Images are loaded locally, with deferred category hydration and responsive 640/1280 WebP derivatives. No new remote runtime dependency, API, font service or analytics.

## Image review and provenance

All replacements were generated with GPT Image from freshly downloaded, visually inspected manufacturer references. References and full-resolution generated sources are retained privately outside the public repository. Public manufacturer links are provided beside each illustration. Source PNG filenames, derivative sizes and SHA-256 values are in `asset-manifest.json`.

| Image | Reference and review focus |
| --- | --- |
| V60 | [Philips quick reference guide](https://images.philips.com/is/content/PhilipsConsumer/Campaigns/HC20140401_DG/Documents/V60-quick-reference-guide.pdf), embedded photograph: portrait screen, upper-right rotary control, asymmetric enclosure, patient outlet and adjacent small fitting. |
| Affiniti 70 | [Philips brochure](https://www.usa.philips.com/c-dam/b2bhc/us/Products/Ultrasound/Affiniti70/Affiniti_A_smart%20investment_TCO_DS_FNL.PDF), page 2: monitor arm, second display, console, four vertical probe sockets and continuous caster support. Illustration is Affiniti 70; service text specifically identifies Affiniti 70G and CX50. |
| Efficia CM150 | [Philips product photo](https://images.philips.com/is/image/philipsconsumer/4ebad747f8174ae79485a48e011fb9ba?wid=1400&fmt=jpeg): bezel, four lower physical controls and rotary dial. The previous illustration incorrectly retained screen UI icons with the screen off; these were removed. This image is not an IntelliVue X3. |
| PageWriter TC50 | [Philips brochure](https://www.documents.philips.com/doclib/enc/5950412/PageWriter_TC50_cardiograph_with_DXL_16_-_Always_in_Touch_%28ENG%29.pdf), first-page isolated product photo: tilted display, hinge, keyboard, three colored controls and printer drawer. |
| Rowa Vmax | [BD Rowa Vmax 130 brochure](https://rowa.de/content/media/BD_Rowa_Vmax_EN.pdf): long cabinet, front opening, display, shelf, green opening and emergency stop. No added internal mechanism. |
| corpuls3 | [Manufacturer modular product image](https://corpuls.world/wAssets/img/produkte/corpuls3/weblication/wThumbnails/8e3a05a9-564810d5@ll.jpg?1712740670): three-module arrangement, screen/handle, front controls, patient-box connectors and rear defibrillator module. Screen is off to avoid fabricated readings. |
| Horizon DXA | [Hologic product image](https://www.hologic.com/sites/default/files/styles/banner_product_page_1070_x_540_/public/2021/04/Hologic_Horizon%C2%AE%20DXA%20System.jpg): foot-end view, bed, arm uprights and support base. No speculative internal parts. |

The review covers visible external structure and illustration quality. Generated art is labeled as an illustration and is not an exact service diagram, product specification or photograph of a service visit. Small lettering is not used as technical evidence.

## Design comparison

The two generated visual concepts set the split hero and full-width equipment exhibit direction. Final implementation retains verified text, real portrait/logos and existing scope overview; concept-generated sample employment text is not used. Source image aspect ratios are preserved rather than stretched to fit a concept plate.

Comparison points: hero reading order and two-column balance; navy/porcelain/cobalt palette; name/role/body hierarchy; complete device framing and natural lighting; wrapping category tabs with selected state; grouped service evidence; caption/link/close-button focus treatment; responsive collapse and dark-mode contrast.

## Verification and release

Use `python3 tools/sync_site_content.py` after copy, script or style changes to synchronize language data, version queries and SRI. Existing resume files are unchanged. Run `node --test tests/site-contract.test.mjs`, browser interactions, responsive and no-script coverage, and production asset readback after GitHub Pages deploys. The previous production commit `1850c77a382372c80d8781bd477271730c45f1a4` is not used as an automatic reset target; resolve the actual previous revision from Git history when rolling back.

Local acceptance: 24 regression checks passed; eight desktop/mobile × English/Chinese × light/dark browser combinations passed, including all seven device selections and modal close/focus return. Additional 320px, tablet, landscape, reduced-motion, no-JavaScript and delayed/failed-script checks passed. Mobile Lighthouse local scores: performance 99, accessibility 100, best practices 100, SEO 92; CLS 0.
