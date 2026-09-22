"""Build the two-page resume from shared public facts; export the DOCX to PDF."""
import json
import shutil
import subprocess
import tempfile
from datetime import datetime, timezone
from pathlib import Path

from profile_data import load_profile
from docx import Document
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.oxml import OxmlElement
from docx.oxml.ns import qn
from docx.shared import Mm, Pt, RGBColor

ROOT = Path(__file__).resolve().parents[1]
ASSETS = ROOT / 'assets'
DOCX_PATH = ASSETS / 'Henry_Yang_Biomedical_Engineer_Resume.docx'
PDF_PATH = DOCX_PATH.with_suffix('.pdf')
DATA = load_profile()
TEXT = DATA['en']
INK = RGBColor.from_string('15283F')
MUTED = RGBColor.from_string('43546B')


def add_link(paragraph, text, url):
    relationship = paragraph.part.relate_to(url, 'http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink', is_external=True)
    link = OxmlElement('w:hyperlink'); link.set(qn('r:id'), relationship)
    run = OxmlElement('w:r'); props = OxmlElement('w:rPr')
    color = OxmlElement('w:color'); color.set(qn('w:val'), '275DDE'); props.append(color)
    run.append(props); value = OxmlElement('w:t'); value.text = text; run.append(value)
    link.append(run); paragraph._p.append(link)


def heading(doc, title, page_break=False):
    p = doc.add_paragraph(title, 'Heading 1')
    p.paragraph_format.page_break_before = page_break
    return p


def paragraph(doc, text, bold_prefix=None, style=None):
    p = doc.add_paragraph(style=style)
    if bold_prefix:
        p.add_run(bold_prefix + ' ').bold = True
    p.add_run(text)
    p.paragraph_format.widow_control = True
    p.paragraph_format.keep_together = True
    return p


def build_docx():
    doc = Document(); section = doc.sections[0]
    zoom = doc.settings.element.find(qn('w:zoom'))
    if zoom is not None: zoom.set(qn('w:percent'), '100')
    section.page_width = Mm(210); section.page_height = Mm(297)
    section.top_margin = Mm(16); section.bottom_margin = Mm(16)
    section.left_margin = Mm(18); section.right_margin = Mm(18)
    section.footer_distance = Mm(8)
    normal = doc.styles['Normal']
    normal.font.name = 'Arial'; normal.font.size = Pt(11); normal.font.color.rgb = INK
    normal.paragraph_format.line_spacing = 1.12
    normal.paragraph_format.space_after = Pt(6)
    for name, size in [('Heading 1', 12), ('Heading 2', 10.5)]:
        style = doc.styles[name]; style.font.name = 'Arial'; style.font.size = Pt(size)
        style.font.color.rgb = INK; style.font.bold = True
        style.paragraph_format.space_before = Pt(11 if name == 'Heading 1' else 6)
        style.paragraph_format.space_after = Pt(5)
        style.paragraph_format.keep_with_next = True
    bullet = doc.styles['List Bullet']; bullet.font.name = 'Arial'; bullet.font.size = Pt(11)
    bullet.paragraph_format.left_indent = Mm(3.5); bullet.paragraph_format.first_line_indent = Mm(-3.5)
    bullet.paragraph_format.space_after = Pt(5)

    p=doc.add_paragraph(); p.paragraph_format.space_after=Pt(3)
    run=p.add_run('YIHANG (HENRY) YANG'); run.font.size=Pt(22);run.bold=True
    p=paragraph(doc,TEXT['heroRole'] + ' | Sydney');p.runs[0].bold=True;p.runs[0].font.size=Pt(12)
    p=paragraph(doc,'Sydney, NSW  |  0436 016 660  |  yangyihang96@gmail.com');p.runs[0].font.size=Pt(9.5)
    p=doc.add_paragraph();add_link(p,'yangyihang96.com','https://yangyihang96.com/');p.add_run('  |  ');add_link(p,'LinkedIn','https://au.linkedin.com/in/henry-yang-9644382bb')
    p.add_run('  |  Driver licence  |  English / Mandarin').font.size=Pt(9.5)
    heading(doc,'PROFESSIONAL PROFILE');paragraph(doc,DATA['resume']['profile'])
    heading(doc,'PROFESSIONAL EXPERIENCE')
    p=doc.add_paragraph(TEXT['novaRole'] + ' | ' + DATA['facts']['employer'],'Heading 2')
    p=paragraph(doc,TEXT['novaDate'] + ' | Field service / workshop repair');p.runs[0].font.color.rgb=MUTED;p.runs[0].font.size=Pt(9.5);p.paragraph_format.keep_with_next=True
    for i in range(1,6):paragraph(doc,TEXT[f'novaBullet{i}'],style='List Bullet')
    heading(doc,'SELECTED SERVICE PROJECTS')
    for key in ['Ultrasound','Monitor','V60']:
        doc.add_paragraph(TEXT[f'case{key}Context'],'Heading 2')
        if key == 'Ultrasound':
            body = TEXT[f'case{key}Action'] + ' ' + TEXT[f'case{key}Result']
        elif key == 'Monitor':
            body = TEXT[f'case{key}Summary'] + ' ' + TEXT[f'case{key}Result']
        else:
            body = TEXT[f'case{key}Result']
        paragraph(doc, body)

    heading(doc,'EQUIPMENT & COMPLETED TRAINING',page_break=True)
    for label, body in DATA['resume']['training']:
        paragraph(doc,body,bold_prefix=label + ' —')
    heading(doc,'EDUCATION & RESEARCH')
    paragraph(doc,DATA['facts']['university'] + ' | ' + TEXT['mphilDate'],bold_prefix=TEXT['mphil'] + ' |')
    paragraph(doc,TEXT['mphilScope'])
    paragraph(doc,DATA['facts']['university'] + ' | ' + TEXT['bachelorDate'],bold_prefix=TEXT['bachelor'] + ' |')
    heading(doc,'EARLIER EXPERIENCE')
    paragraph(doc,'Lundbeck Beijing | ' + TEXT['lundbeckDate'],bold_prefix=TEXT['lundbeckRole'] + ' |')
    paragraph(doc,TEXT['lundbeckIntro'])
    heading(doc,'DIGITAL TOOLS & APPLIED AI')
    paragraph(doc,TEXT['digitalTools'])
    paragraph(doc,TEXT['aiIntro'])
    footer=section.footer.paragraphs[0];footer.alignment=WD_ALIGN_PARAGRAPH.RIGHT
    run=footer.add_run('Yihang (Henry) Yang  ·  ');run.font.size=Pt(8);run.font.color.rgb=MUTED
    field=OxmlElement('w:fldSimple');field.set(qn('w:instr'),'PAGE');footer._p.append(field)
    core=doc.core_properties
    core.title='Henry Yang Biomedical Field Service Engineer Resume';core.author='Yihang Henry Yang'
    core.subject='Biomedical field service resume';core.last_modified_by='Yihang Henry Yang'
    core.keywords='Biomedical Engineer, Field Service Engineer, Medical Device Service, Sydney'
    core.created=datetime(2026,6,25,tzinfo=timezone.utc);core.modified=datetime.now(timezone.utc)
    doc.save(DOCX_PATH)


def export_pdf():
    soffice = shutil.which('soffice')
    if not soffice: raise RuntimeError('LibreOffice is required to export the resume PDF.')
    with tempfile.TemporaryDirectory(prefix='resume-export-') as directory:
        subprocess.run([soffice, '--headless', '--convert-to', 'pdf:writer_pdf_Export', '--outdir', directory, str(DOCX_PATH)], check=True, capture_output=True, text=True, timeout=90)
        exported=Path(directory)/PDF_PATH.name
        from pypdf import PdfReader
        reader=PdfReader(exported)
        if len(reader.pages)!=2: raise RuntimeError(f'Resume must be two pages, got {len(reader.pages)}. PDF not replaced.')
        if 'EQUIPMENT & COMPLETED TRAINING' not in reader.pages[1].extract_text(): raise RuntimeError('Unexpected page break. PDF not replaced.')
        shutil.copyfile(exported,PDF_PATH)

if __name__ == '__main__':
    build_docx(); export_pdf()
    print('Built matching two-page DOCX and PDF resumes.')
