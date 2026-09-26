"""Generate static bilingual copy, metadata and CSP/SRI from the shared profile."""
import base64
import hashlib
import html
import json
import re
from pathlib import Path
from profile_data import load_profile

ROOT = Path(__file__).resolve().parents[1]
VERSION = 'portfolio-v21-20260926'

def digest(data, algorithm):
    return base64.b64encode(hashlib.new(algorithm, data).digest()).decode()

def main():
    content = load_profile()
    page = (ROOT / 'index.html').read_text()
    script = (ROOT / 'script.js').read_text()
    def leaf(match):
        return match[1] + html.escape(content['en'][match[2]]) + match[3]
    page = re.sub(r'(<[^>]+data-i18n="([^"]+)"[^>]*>)[^<]*(</[^>]+>)', leaf, page)
    def accessible(match):
        tag = match[0]
        key = re.search(r'data-i18n-aria="([^"]+)"', tag)[1]
        return re.sub(r'aria-label="[^"]*"', 'aria-label="' + html.escape(content['en'][key]) + '"', tag)
    page = re.sub(r'<[^>]+data-i18n-aria="[^"]+"[^>]*>', accessible, page)
    def image_alt(match):
        tag = match[0]
        key = re.search(r'data-i18n-alt="([^"]+)"', tag)[1]
        return re.sub(r'(?<!-)alt="[^"]*"', 'alt="' + html.escape(content['en'][key]) + '"', tag)
    page = re.sub(r'<img[^>]+data-i18n-alt="[^"]+"[^>]*>', image_alt, page)
    languages = []
    for language in ['en', 'zh']:
        metadata, interface = content['metadata'][language], content['interface'][language]
        text = 'englishText' if language == 'en' else json.dumps(content['zh'], ensure_ascii=False, indent=2)
        languages.append(f'''  {language}: {{
    lang: {json.dumps('en' if language == 'en' else 'zh-CN')},
    title: {json.dumps(metadata['title'], ensure_ascii=False)},
    description: {json.dumps(metadata['description'], ensure_ascii=False)},
    text: {text},
    menu: {{ open: {json.dumps(interface['menu']['open'], ensure_ascii=False)}, close: {json.dumps(interface['menu']['close'], ensure_ascii=False)} }},
    copyEmail: {json.dumps(interface['copyEmail'], ensure_ascii=False)},
    platformLabel: {json.dumps(interface['platformLabel'], ensure_ascii=False)}
  }}''')
    script = re.sub(r'const translations = \{[\s\S]*?\n\};\nconst isSupportedLanguage', lambda _: 'const translations = {\n' + ',\n'.join(languages) + '\n};\nconst isSupportedLanguage', script, count=1)
    meta = content['metadata']['en']
    page = re.sub(r'<title>[^<]+</title>', '<title>' + html.escape(meta['title']) + '</title>', page)
    for kind, value in [('description',meta['description']),('title',meta['title'])]:
        page = re.sub(r'(<meta (?:name="'+kind+'"|property="og:'+kind+'"|name="twitter:'+kind+'") content=")[^"]+(">)', lambda m:m[1]+html.escape(value)+m[2],page)
    structured = re.search(r'<script type="application/ld\+json">([\s\S]*?)</script>',page)[1]
    person = json.loads(structured)
    person['description'] = meta['description']
    person['jobTitle'] = content['en']['heroRole']
    person['worksFor']['name'] = content['facts']['employer']
    person['alumniOf']['name'] = content['facts']['university']
    # Script elements are parsed as HTML raw text before JSON is decoded.
    # Escape HTML delimiters so edited profile text cannot end the JSON-LD tag.
    safe_json = json.dumps(person, ensure_ascii=False, indent=2)
    for character, escaped in [('<', r'\u003c'), ('>', r'\u003e'), ('&', r'\u0026')]:
        safe_json = safe_json.replace(character, escaped)
    new_structured = '\n' + safe_json + '\n    '
    page = page.replace(structured, new_structured)
    (ROOT / 'script.js').write_text(script)
    page = re.sub(r'portfolio-v\d+-\d+(?:-r\d+)?', VERSION, page)
    page = re.sub(r'(href="assets/Henry_Yang_Biomedical_Engineer_Resume\.(?:pdf|docx))(?:\?[^"]*)?(")', lambda m:m[1]+'?v='+VERSION+m[2],page)
    for filename in ['styles.css','script.js','theme-init.js']:
        sri = 'sha384-' + digest((ROOT / filename).read_bytes(),'sha384')
        page = re.sub(r'((?:src|href)="'+re.escape(filename)+r'\?[^\"]+" integrity=")[^"]+',lambda m:m[1]+sri,page)
    csp_hash = 'sha256-' + digest(new_structured.encode(),'sha256')
    page = re.sub(r'sha256-[A-Za-z0-9+/=]+',csp_hash,page)
    (ROOT / 'index.html').write_text('\n'.join(line.rstrip() for line in page.splitlines())+'\n')
    headers = (ROOT / '_headers').read_text()
    (ROOT / '_headers').write_text(re.sub(r'sha256-[A-Za-z0-9+/=]+',csp_hash,headers))

if __name__ == '__main__':
    main()
