import os
import sys
import subprocess
import fitz

ROOT = r"c:\NWU\SM2\ECON122"
sys.path.insert(0, os.path.join(ROOT, "scripts"))
from build_data_js import CHAPTERS, QUESTIONS, PAST_PAPERS

PRINT_HTML = os.path.join(ROOT, "scripts", "study_guide_print.html")
OUT_PDF = os.path.join(ROOT, "ECON122_Master_Study_Guide.pdf")

data = {
    "chapters": CHAPTERS,
    "questions": QUESTIONS,
    "pastPapers": PAST_PAPERS
}

chapters_html = []
for ch in data["chapters"]:
    formulas_rows = []
    for f_item in ch["formulas"]:
        formulas_rows.append(f"""
        <div class="formula-item">
          <div class="f-title">{f_item['name']}</div>
          <div class="f-code">{f_item['latex']}</div>
          <div class="f-body"><strong>Meaning:</strong> {f_item['meaning']}</div>
        </div>
        """)

    concepts_rows = []
    pitfalls_rows = []
    for c_item in ch["concepts"]:
        concepts_rows.append(f"""
        <div class="concept-item">
          <div class="c-title">{c_item['title']} ({c_item.get('tag', '')})</div>
          <div class="c-body">{c_item['intuition']}</div>
          <div class="c-tip"><strong>Worked Proof:</strong> {c_item['example']}</div>
        </div>
        """)
        pitfalls_rows.append(f"""
        <div class="pitfall-row">
          <div class="p-fallacy"><strong>Fallacy ({c_item['title']}):</strong> {c_item['fallacy']}</div>
          <div class="p-law"><strong>First-Principles Law:</strong> {c_item['firstPrinciples']}</div>
        </div>
        """)

    chapters_html.append(f"""
    <section class="chapter-block">
      <div class="ch-banner">
        <div>
          <span class="ch-tag">CHAPTER {ch['number']}</span>
          <span class="ch-meta">{ch['pages']} • {ch.get('shortTitle', '')}</span>
        </div>
        <h2>Chapter {ch['number']}: {ch['title']}</h2>
        <p class="ch-summary">{ch['summary']}</p>
      </div>
      <h3>Core Mathematical Identities &amp; Canonical Equations</h3>
      <div class="grid-2">{''.join(formulas_rows)}</div>
      <h3>Key Theoretical Frameworks, Worked Proofs &amp; SARB / Stats SA Context</h3>
      <div class="grid-2">{''.join(concepts_rows)}</div>
      <h3>Student Fallacies vs. First-Principles Laws</h3>
      <div>{''.join(pitfalls_rows)}</div>
    </section>
    """)

papers_html = []
for pp in data["pastPapers"]:
    sec_rows = []
    for ws in pp["writtenSections"]:
        sec_rows.append(f"""
        <div class="memo-box">
          <div class="m-head">{ws['number']}: {ws['prompt']}</div>
          <div class="m-ans"><strong>Official Memorandum:</strong> {ws['memo']}</div>
        </div>
        """)
    papers_html.append(f"""
    <div class="paper-block">
      <h3>{pp['session']} — {', '.join(pp['campuses'])}</h3>
      <div class="p-meta">Examiners: {pp['examiners']} | Moderator: {pp['moderator']} | {pp['durationMinutes']} Mins • {pp['totalMarks']} Marks</div>
      {''.join(sec_rows)}
    </div>
    """)

html_doc = f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>NWU ECON122 Master Study Guide &amp; Formula Compendium</title>
  <style>
    @page {{
      size: A4 portrait;
      margin: 12mm 12mm 12mm 12mm;
    }}
    * {{
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }}
    body {{
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      font-size: 9pt;
      line-height: 1.38;
      color: #0f172a;
      background: #ffffff;
    }}
    .cover-header {{
      border: 2px solid #0f172a;
      border-radius: 8px;
      padding: 12pt;
      margin-bottom: 12pt;
      background: #f8fafc;
    }}
    .cover-eyebrow {{
      font-size: 8pt;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      color: #0284c7;
    }}
    h1 {{
      font-size: 16pt;
      font-weight: 800;
      margin: 3pt 0;
      color: #0f172a;
    }}
    h2 {{
      font-size: 12pt;
      font-weight: 800;
      color: #0f172a;
      margin: 2pt 0;
    }}
    h3 {{
      font-size: 9.5pt;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      color: #1e293b;
      margin: 8pt 0 4pt;
      border-bottom: 1px solid #cbd5e1;
      padding-bottom: 2pt;
    }}
    .chapter-block {{
      margin-bottom: 12pt;
      padding-bottom: 8pt;
      border-bottom: 1.5px solid #94a3b8;
    }}
    .ch-banner {{
      background: #f1f5f9;
      border-left: 4px solid #0284c7;
      padding: 7pt 9pt;
      border-radius: 4px;
      margin-bottom: 6pt;
      break-inside: avoid;
    }}
    .ch-tag {{
      font-size: 7.5pt;
      font-weight: 800;
      background: #0284c7;
      color: #fff;
      padding: 1.5pt 5pt;
      border-radius: 3px;
      margin-right: 6pt;
    }}
    .ch-meta {{
      font-size: 7.5pt;
      font-weight: 700;
      color: #475569;
    }}
    .ch-summary {{
      font-size: 8.5pt;
      color: #334155;
      margin-top: 3pt;
    }}
    .grid-2 {{
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 6pt;
    }}
    .formula-item, .concept-item {{
      border: 1px solid #cbd5e1;
      border-radius: 5px;
      padding: 6pt;
      background: #ffffff;
      break-inside: avoid;
    }}
    .f-title, .c-title {{
      font-weight: 800;
      font-size: 8.8pt;
      color: #0f172a;
      margin-bottom: 3pt;
    }}
    .f-code {{
      font-family: "Consolas", "Courier New", monospace;
      font-size: 7.8pt;
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      padding: 3.5pt 5pt;
      border-radius: 3px;
      margin-bottom: 3pt;
      word-break: break-word;
    }}
    .f-body, .c-body {{
      font-size: 8pt;
      color: #334155;
      margin-bottom: 3pt;
    }}
    .f-example, .c-tip {{
      font-size: 7.8pt;
      background: #fffbeb;
      border-left: 2.5px solid #d97706;
      padding: 3pt 5pt;
      color: #1e293b;
    }}
    .pitfall-row {{
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 6pt;
      margin-bottom: 4pt;
      break-inside: avoid;
    }}
    .p-fallacy {{
      font-size: 8pt;
      background: #fff1f2;
      border: 1px solid #fecdd3;
      padding: 4.5pt 6pt;
      border-radius: 4px;
    }}
    .p-law {{
      font-size: 8pt;
      background: #ecfdf5;
      border: 1px solid #a7f3d0;
      padding: 4.5pt 6pt;
      border-radius: 4px;
    }}
    .paper-block {{
      border: 1px solid #94a3b8;
      border-radius: 6px;
      padding: 8pt;
      margin-bottom: 8pt;
      break-inside: avoid;
    }}
    .p-meta {{
      font-size: 7.8pt;
      color: #475569;
      margin-bottom: 5pt;
    }}
    .memo-box {{
      border-top: 1px solid #e2e8f0;
      padding-top: 4pt;
      margin-top: 4pt;
      font-size: 8pt;
      break-inside: avoid;
    }}
    .m-head {{
      font-weight: 700;
      color: #0f172a;
      margin-bottom: 2pt;
    }}
    .m-ans {{
      color: #1e293b;
    }}
  </style>
</head>
<body>
  <div class="cover-header">
    <div class="cover-eyebrow">North-West University (MC • PC • VC) • ECON122 Introduction to Macroeconomics</div>
    <h1>Master Print Study Guide, Formula Vault &amp; Past-Paper Compendium (2018–2024)</h1>
    <p style="font-size: 8.5pt; color: #334155;">
      100% Aligned with Philip Mohr — <em>Economics for South African Students</em> (6th Edition, 2020), Chapters 13 to 22, and Official NWU Exam Memoranda.
    </p>
  </div>

  {''.join(chapters_html)}

  <section>
    <h2>Official NWU Past-Paper Written &amp; Quantitative Memoranda Archive (2018–2024)</h2>
    {''.join(papers_html)}
  </section>
</body>
</html>
"""

with open(PRINT_HTML, "w", encoding="utf-8") as f:
    f.write(html_doc)

edge_paths = [
    r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe",
    r"C:\Program Files\Microsoft\Edge\Application\msedge.exe",
    r"C:\Program Files\Google\Chrome\Application\chrome.exe"
]
browser_exe = next((p for p in edge_paths if os.path.exists(p)), None)
if not browser_exe:
    raise FileNotFoundError("Could not find Headless Edge/Chrome executable.")

cmd = [
    browser_exe,
    "--headless=new",
    "--disable-gpu",
    "--no-pdf-header-footer",
    f"--print-to-pdf={OUT_PDF}",
    f"file:///{PRINT_HTML.replace(os.sep, '/')}"
]
subprocess.run(cmd, check=True)

doc = fitz.open(OUT_PDF)
print(f"Compiled {OUT_PDF} ({len(doc)} pages)")
for i, page in enumerate(doc):
    txt = page.get_text("text").strip()
    print(f"  Page {i+1}: {len(txt)} chars")
doc.close()

# Clean up temporary print html
if os.path.exists(PRINT_HTML):
    os.remove(PRINT_HTML)
