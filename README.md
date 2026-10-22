# Yihang Yang — Personal Portfolio

Source code for the bilingual biomedical engineering portfolio at https://yangyihang96.com/.

## License / 许可证

The original software code (HTML structure, CSS, JavaScript, Python tools and tests) is licensed under the [MIT License](LICENSE).

MIT applies to the software code only. Personal biography and contact information (including content embedded in HTML or JavaScript), resumes, portraits, photographs, illustrations, and other media are not licensed under MIT. Company and university names, trademarks and logos remain the property of their respective owners. See [CONTENT_RIGHTS.md](CONTENT_RIGHTS.md).

网站原创代码采用 MIT 许可证，允许复用、修改及商用并保留许可声明。个人资料、简历、肖像、图片及第三方标识不在 MIT 授权范围内；复用网站代码时请替换为你自己的内容。

## Local checks

Public content is maintained in `content/profile.json`. Run `python3 tools/sync_site_content.py` after content, CSS or JavaScript changes to refresh static content, metadata, SRI and CSP hashes and the sitemap date; for a release, first raise `VERSION` in that script. Run `node --test tests/site-contract.test.mjs` before publication. See [v23 notes](design/studio-v23/README.md), [v22 notes](design/studio-v22/README.md) and [v20 implementation and browser checks](design/studio-v20/README.md) for the résumé and browser workflows.

## Automated checks

`.github/workflows/site.yml` runs the contract tests on every push and pull request and fails when the generated copy, metadata, SRI or CSP no longer match their sources. When the repository's GitHub Pages source is set to GitHub Actions, `main` is deployed only after those checks pass.

## Production hosting and security headers

GitHub Pages serves the static files. Cloudflare proxies only `yangyihang96.com` and `www.yangyihang96.com` and supplies the response headers below. GitHub Pages does **not** apply the repository's `_headers` file; that file is a generated policy reference for hosts that support it, not proof that a production header is present.

The two Cloudflare rules use the same exact hostname filter:

```text
http.host in {"yangyihang96.com" "www.yangyihang96.com"}
```

- **Portfolio TLS and static HTML:** strict origin certificate validation; Email Obfuscation and Rocket Loader off; RUM and Zaraz disabled. This preserves the original HTML, email links and hash-based CSP/SRI without injecting scripts.
- **Portfolio security response headers:** set the six headers below and remove `NEL` and `Report-To` so these hosts do not opt browsers into additional network-error reporting.

| Response header | Value |
| --- | --- |
| `Content-Security-Policy` | `frame-ancestors 'none'` |
| `X-Frame-Options` | `DENY` |
| `X-Content-Type-Options` | `nosniff` |
| `Referrer-Policy` | `strict-origin-when-cross-origin` |
| `Permissions-Policy` | `accelerometer=(), autoplay=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=()` |
| `Strict-Transport-Security` | `max-age=86400` |

The homepage's generated **meta CSP** continues to restrict scripts, styles and resource loading. The independent HTTP CSP adds framing protection, which a meta policy cannot enforce. Do not replace this companion header with the full homepage policy across every path: the existing NAS information pages have different inline-style requirements. Do not relax the document CSP or add `unsafe-inline` to fix a hosting issue.

HSTS is host-only for one day, without `includeSubDomains` or `preload`. Other subdomains and mail records are outside these rules. The four apex A records retain the GitHub Pages addresses `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`; `www` retains its `yangyihang96.github.io` CNAME target. Cloudflare requires Auto TTL for proxied records.

After a hosting change, inspect actual HTTPS responses and the HTTP/www redirect chains, then compare the homepage, images and résumé downloads with the deployed commit. Run `tests/browser-security.cjs` and `tests/browser-interactions.cjs` against production with `QA_URL=https://yangyihang96.com/`, setting `QA_OUT` outside this repository. These checks require Playwright and Chrome; `PLAYWRIGHT_MODULE` can point to an existing Playwright installation. An intentional CSP/SRI or failure-mode test can produce expected blocked requests; ordinary navigation must not.

For rollback, return only those five DNS records to DNS-only with their original 600-second TTL, and disable only the two named portfolio rules. Keep the GitHub Pages origin, valid HTTPS certificate, nameservers and unrelated records unchanged. Previously cached HSTS remains for at most one day and the origin continues to support HTTPS. Verify public responses again after any rollback.

Cloudflare's [response-header documentation](https://developers.cloudflare.com/rules/transform/response-header-modification/) describes the edge mechanism. A successful repository deployment and a successful edge-policy readback are separate checks; record both when publishing.
