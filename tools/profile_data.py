"""Resolve shared public facts at build time; the browser never fetches JSON."""
import json
from datetime import datetime
from pathlib import Path
from string import Template

ROOT = Path(__file__).resolve().parents[1]

def load_profile():
    data = json.loads((ROOT / 'content/profile.json').read_text())
    facts = data['facts']
    def tokens(language):
        values = {}
        for key, value in facts.items():
            if key == 'dates':
                continue
            values[key] = value[language] if isinstance(value, dict) else value
        for key, value in facts['dates'].items():
            date = datetime.strptime(value, '%Y-%m')
            values[key] = date.strftime('%b %Y') if language == 'en' else f'{date.year} 年 {date.month} 月'
            values[key + 'Long'] = date.strftime('%B %Y') if language == 'en' else values[key]
            values[key + 'Year'] = str(date.year)
        return values
    def resolve(value, values):
        if isinstance(value, str):
            return Template(value).substitute(values)
        if isinstance(value, dict):
            return {k: resolve(v, values) for k, v in value.items()}
        if isinstance(value, list):
            return [resolve(v, values) for v in value]
        return value
    for language in ['en', 'zh']:
        data[language] = resolve(data[language], tokens(language))
        data['metadata'][language] = resolve(data['metadata'][language], tokens(language))
        data['interface'][language] = resolve(data['interface'][language], tokens(language))
    data['resume'] = resolve(data['resume'], tokens('en'))
    return data

if __name__ == '__main__':
    print(json.dumps(load_profile(), ensure_ascii=False))
