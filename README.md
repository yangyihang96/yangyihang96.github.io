# Yihang Yang — Personal Portfolio

Source code for the bilingual biomedical engineering portfolio at https://yangyihang96.com/.

## License / 许可证

The original software code (HTML structure, CSS, JavaScript, Python tools and tests) is licensed under the [MIT License](LICENSE).

MIT applies to the software code only. Personal biography and contact information (including content embedded in HTML or JavaScript), resumes, portraits, photographs, illustrations, and other media are not licensed under MIT. Company and university names, trademarks and logos remain the property of their respective owners. See [CONTENT_RIGHTS.md](CONTENT_RIGHTS.md).

网站原创代码采用 MIT 许可证，允许复用、修改及商用并保留许可声明。个人资料、简历、肖像、图片及第三方标识不在 MIT 授权范围内；复用网站代码时请替换为你自己的内容。

## Local checks

Public content is maintained in `content/profile.json`. Run `python3 tools/sync_site_content.py` after content, CSS or JavaScript changes to refresh static content, metadata, SRI and CSP hashes. Run `node --test tests/site-contract.test.mjs` before publication. See [v20 implementation and browser checks](design/studio-v20/README.md) for the résumé and browser workflows.
