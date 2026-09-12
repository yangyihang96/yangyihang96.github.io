"""Sync shared public copy and resource integrity into the static page."""
import base64
import hashlib
import html
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
VERSION = 'portfolio-v18-20260912'

def digest(data, algorithm):
    return base64.b64encode(hashlib.new(algorithm, data).digest()).decode()

def main():
    content = json.loads((ROOT / 'content/profile.json').read_text())
    page = (ROOT / 'index.html').read_text()
    script = (ROOT / 'script.js').read_text()
    def leaf(match):
        return match[1] + html.escape(content['en'][match[2]]) + match[3]
    page = re.sub(r'(<[^>]+data-i18n="([^"]+)"[^>]*>)[^<]*(</[^>]+>)', leaf, page)
    script = re.sub(r'text: (\{[\s\S]*?\}),\n    menu: \{ open: "打开导航"',
                    lambda _: 'text: ' + json.dumps(content['zh'], ensure_ascii=False, indent=2) + ',\n    menu: { open: "打开导航"', script)
    descriptions = {
        'en': 'Sydney-based Biomedical Field Service Engineer with three years at Nova Biomedical Australia. Ultrasound maintenance, patient-monitor upgrades, V60 field changes and documented verification.',
        'zh': '常驻悉尼的医疗设备现场服务工程师，在 Nova Biomedical Australia 工作三年，具有超声维护、监护仪升级、V60 现场变更及验证记录经验。'
    }
    for language, description in descriptions.items():
        script = re.sub(r'(' + language + r': \{[\s\S]*?description: ")[^"]+("[,])', lambda m: m[1] + description + m[2], script, count=1)
    page = re.sub(r'(<meta (?:name="description"|property="og:description"|name="twitter:description") content=")[^"]+(">)', lambda m: m[1]+descriptions['en']+m[2], page)
    page = re.sub(r'("description": ")[^"]+("[,])',lambda m:m[1]+descriptions['en']+m[2],page,count=1)
    (ROOT / 'script.js').write_text(script)
    page = re.sub(r'portfolio-v\d+-\d+(?:-r\d+)?', VERSION, page)
    page = re.sub(r'(href="assets/Henry_Yang_Biomedical_Engineer_Resume\.(?:pdf|docx))(?:\?[^"]*)?(")', lambda m: m[1] + '?v=' + VERSION + m[2], page)
    for filename in ['styles.css', 'script.js', 'theme-init.js']:
        sri = 'sha384-' + digest((ROOT / filename).read_bytes(), 'sha384')
        page = re.sub(r'((?:src|href)="' + re.escape(filename) + r'\?[^\"]+" integrity=")[^"]+', lambda m:m[1]+sri, page)
    structured = re.search(r'<script type="application/ld\+json">([\s\S]*?)</script>',page)[1]
    csp_hash = 'sha256-' + digest(structured.encode(), 'sha256')
    page = re.sub(r'sha256-[A-Za-z0-9+/=]+', csp_hash, page)
    (ROOT / 'index.html').write_text('\n'.join(line.rstrip() for line in page.splitlines()) + '\n')
    headers = (ROOT / '_headers').read_text()
    (ROOT / '_headers').write_text(re.sub(r'sha256-[A-Za-z0-9+/=]+', csp_hash, headers))

if __name__ == '__main__':
    main()
