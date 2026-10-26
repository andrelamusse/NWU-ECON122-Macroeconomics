import os
import re
import sys
import urllib.parse
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

def html_escape(s):
    return (
        str(s)
        .replace("&", "&amp;")
        .replace("<", "&lt;")
        .replace(">", "&gt;")
    )

chapters_html = []
for ch in data["chapters"]:
    formulas_rows = []
    for f_item in ch["formulas"]:
        encoded_tex = urllib.parse.quote(f_item["latex"])
        formulas_rows.append(f"""
        <div class="formula-item">
          <div class="f-title">{html_escape(f_item['name'])}</div>
          <div class="f-code katex-display-target" data-tex="{encoded_tex}"></div>
          <div class="f-body math-inline-target"><strong>Meaning:</strong> {html_escape(f_item.get('meaning', ''))}</div>
        </div>
        """)

    concepts_rows = []
    pitfalls_rows = []
    for c_item in ch["concepts"]:
        concepts_rows.append(f"""
        <div class="concept-item">
          <div class="c-title">{html_escape(c_item['title'])} ({html_escape(c_item.get('tag', ''))})</div>
          <div class="c-body math-inline-target">{html_escape(c_item.get('intuition', ''))}</div>
          <div class="c-tip math-inline-target"><strong>Worked Proof:</strong> {html_escape(c_item.get('example', ''))}</div>
        </div>
        """)
        pitfalls_rows.append(f"""
        <div class="pitfall-row">
          <div class="p-fallacy math-inline-target"><strong>Fallacy ({html_escape(c_item['title'])}):</strong> {html_escape(c_item.get('fallacy', ''))}</div>
          <div class="p-law math-inline-target"><strong>First-Principles Law:</strong> {html_escape(c_item.get('firstPrinciples', ''))}</div>
        </div>
        """)

    # Also include chapter standalone problems
    ch_questions = [q for q in data["questions"] if (q.get("chapter") or q.get("chapterId")) == ch["id"]]
    q_rows = []
    for q in ch_questions:
        correct_opt = next((o for o in q["options"] if o.get("isCorrect")), q["options"][0])
        deriv = q.get("derivation", "")
        if isinstance(deriv, list):
            deriv_html = "".join(
                f'<div class="katex-display-target" data-tex="{urllib.parse.quote(d)}"></div>'
                for d in deriv
            )
        else:
            deriv_html = f'<div class="katex-display-target" data-tex="{urllib.parse.quote(str(deriv))}"></div>'

        q_rows.append(f"""
        <div class="problem-card">
          <div class="p-topic">{html_escape(q.get('topic') or q.get('source') or 'Macroeconomic Analysis')} • {html_escape(q.get('difficulty', 'Synthesis'))}</div>
          <div class="p-stem math-inline-target">{html_escape(q['stem'])}</div>
          <div class="p-correct math-inline-target"><strong>Verified Solution:</strong> {html_escape(correct_opt['text'])}</div>
          <div class="f-code">{deriv_html}</div>
          <div class="p-refutation math-inline-target"><strong>First-Principles Proof:</strong> {html_escape(correct_opt['refutation'])}</div>
        </div>
        """)

    chapters_html.append(f"""
    <section class="chapter-block">
      <div class="ch-banner">
        <div>
          <span class="ch-tag">CHAPTER {ch['number']}</span>
          <span class="ch-meta">{html_escape(ch['pages'])} • {html_escape(ch.get('shortTitle', ''))}</span>
        </div>
        <h2>Chapter {ch['number']}: {html_escape(ch['title'])}</h2>
        <p class="ch-summary math-inline-target">{html_escape(ch['summary'])}</p>
      </div>
      <h3>Core Mathematical Identities &amp; Canonical Equations</h3>
      <div class="grid-2">{''.join(formulas_rows)}</div>
      <h3>Key Theoretical Frameworks, Worked Proofs &amp; SARB / Stats SA Context</h3>
      <div class="grid-2">{''.join(concepts_rows)}</div>
      <h3>Student Fallacies vs. First-Principles Laws</h3>
      <div>{''.join(pitfalls_rows)}</div>
      <h3>Standalone Analytical Problems &amp; Derivations ({len(ch_questions)} Problems)</h3>
      <div class="grid-2">{''.join(q_rows)}</div>
    </section>
    """)

papers_html = []
for pp in data["pastPapers"]:
    sec_rows = []
    for ws in pp["writtenSections"]:
        sec_rows.append(f"""
        <div class="memo-box">
          <div class="m-head math-inline-target">{html_escape(ws['number'])}: {html_escape(ws['prompt'])}</div>
          <div class="m-ans math-inline-target"><strong>Analytical Solution:</strong> {html_escape(ws['memo'])}</div>
        </div>
        """)
    papers_html.append(f"""
    <div class="paper-block">
      <h3>{html_escape(pp['session'])} — {html_escape(', '.join(pp['campuses']))}</h3>
      <div class="p-meta">Scope: {html_escape(pp['examiners'])} | Verification: {html_escape(pp['moderator'])} | {pp['durationMinutes']} Mins • {pp['totalMarks']} Points</div>
      {''.join(sec_rows)}
    </div>
    """)

html_doc = f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>NWU ECON122 Master Study Guide &amp; Formula Compendium</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css" />
  <script src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js"></script>
  <style>
    @page {{
      size: A4 portrait;
      margin: 10mm 10mm 10mm 10mm;
    }}
    * {{
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }}
    body {{
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      font-size: 8.5pt;
      line-height: 1.36;
      color: #0f172a;
      background: #ffffff;
    }}
    .cover-header {{
      border: 2px solid #0f172a;
      border-radius: 8px;
      padding: 10pt;
      margin-bottom: 10pt;
      background: #f8fafc;
    }}
    .cover-eyebrow {{
      font-size: 7.8pt;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.06em;
      color: #0284c7;
    }}
    h1 {{
      font-size: 15pt;
      font-weight: 800;
      margin: 3pt 0;
      color: #0f172a;
    }}
    h2 {{
      font-size: 11.5pt;
      font-weight: 800;
      color: #0f172a;
      margin: 2pt 0;
    }}
    h3 {{
      font-size: 9pt;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      color: #1e293b;
      margin: 7pt 0 4pt;
      border-bottom: 1px solid #cbd5e1;
      padding-bottom: 2pt;
    }}
    .chapter-block {{
      margin-bottom: 10pt;
      padding-bottom: 8pt;
      border-bottom: 1.5px solid #94a3b8;
    }}
    .ch-banner {{
      background: #f1f5f9;
      border-left: 4px solid #0284c7;
      padding: 6pt 8pt;
      border-radius: 4px;
      margin-bottom: 5pt;
      break-inside: avoid;
    }}
    .ch-tag {{
      font-size: 7.2pt;
      font-weight: 800;
      background: #0284c7;
      color: #fff;
      padding: 1.5pt 5pt;
      border-radius: 3px;
      margin-right: 6pt;
    }}
    .ch-meta {{
      font-size: 7.2pt;
      font-weight: 700;
      color: #475569;
    }}
    .ch-summary {{
      font-size: 8.2pt;
      color: #334155;
      margin-top: 3pt;
    }}
    .grid-2 {{
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 5pt;
    }}
    .formula-item, .concept-item, .problem-card {{
      border: 1px solid #cbd5e1;
      border-radius: 5px;
      padding: 5pt;
      background: #ffffff;
      break-inside: avoid;
    }}
    .f-title, .c-title, .p-topic {{
      font-weight: 800;
      font-size: 8.2pt;
      color: #0f172a;
      margin-bottom: 2.5pt;
    }}
    .p-topic {{
      color: #0284c7;
      text-transform: uppercase;
      font-size: 7.2pt;
      letter-spacing: 0.03em;
    }}
    .f-code {{
      font-size: 8pt;
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      padding: 3pt 5pt;
      border-radius: 3px;
      margin: 2.5pt 0;
      overflow-x: hidden;
    }}
    .f-body, .c-body, .p-stem, .p-correct, .p-refutation {{
      font-size: 7.6pt;
      color: #334155;
      margin-bottom: 2.5pt;
    }}
    .p-correct {{
      color: #065f46;
      background: #ecfdf5;
      padding: 2pt 4pt;
      border-radius: 3px;
    }}
    .f-example, .c-tip {{
      font-size: 7.5pt;
      background: #fffbeb;
      border-left: 2.5px solid #d97706;
      padding: 2.5pt 4.5pt;
      color: #1e293b;
    }}
    .pitfall-row {{
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 5pt;
      margin-bottom: 3.5pt;
      break-inside: avoid;
    }}
    .p-fallacy {{
      font-size: 7.6pt;
      background: #fff1f2;
      border: 1px solid #fecdd3;
      padding: 4pt 5.5pt;
      border-radius: 4px;
    }}
    .p-law {{
      font-size: 7.6pt;
      background: #ecfdf5;
      border: 1px solid #a7f3d0;
      padding: 4pt 5.5pt;
      border-radius: 4px;
    }}
    .paper-block {{
      border: 1px solid #94a3b8;
      border-radius: 6px;
      padding: 7pt;
      margin-bottom: 7pt;
      break-inside: avoid;
    }}
    .p-meta {{
      font-size: 7.5pt;
      color: #475569;
      margin-bottom: 4pt;
    }}
    .memo-box {{
      border-top: 1px solid #e2e8f0;
      padding-top: 3.5pt;
      margin-top: 3.5pt;
      font-size: 7.6pt;
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
    .katex-display {{
      margin: 0.2em 0 !important;
    }}
  </style>
</head>
<body>
  <div class="cover-header">
    <div class="cover-eyebrow">North-West University • ECON122 Introduction to Macroeconomics</div>
    <h1>Master Print Study Guide, Formula Vault &amp; Problem Compendium ({len(data['questions'])} Standalone Problems)</h1>
    <p style="font-size: 8.2pt; color: #334155;">
      100% Aligned with Philip Mohr — <em>Economics for South African Students</em> (Chapters 13 to 22), SARB Monetary Policy Frameworks, and Stats SA National Accounts.
    </p>
  </div>

  {''.join(chapters_html)}

  <section>
    <h2>Comprehensive Macroeconomic Synthesis Suites &amp; Analytical Derivations</h2>
    {''.join(papers_html)}
  </section>

  <script>
    (function() {{
      function renderMathSafe(tex, displayMode) {{
        if (window.katex) {{
          try {{
            return window.katex.renderToString(tex, {{
              displayMode: Boolean(displayMode),
              throwOnError: false,
              output: 'html'
            }});
          }} catch (e) {{}}
        }}
        return tex;
      }}

      document.querySelectorAll('.katex-display-target').forEach(function(el) {{
        var raw = decodeURIComponent(el.getAttribute('data-tex') || '');
        el.innerHTML = renderMathSafe(raw, true);
      }});

      document.querySelectorAll('.math-inline-target').forEach(function(el) {{
        var html = el.innerHTML;
        el.innerHTML = html.replace(/\\$([^$]+)\\$/g, function(_, tex) {{
          var decoded = tex.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>');
          return renderMathSafe(decoded, false);
        }});
      }});
    }})();
  </script>
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
    "--virtual-time-budget=5000",
    f"--print-to-pdf={OUT_PDF}",
    f"file:///{PRINT_HTML.replace(os.sep, '/')}"
]
subprocess.run(cmd, check=True)

doc = fitz.open(OUT_PDF)
print(f"Compiled {OUT_PDF} ({len(doc)} pages)")
raw_latex_leaks = 0
for i, page in enumerate(doc):
    txt = page.get_text("text").strip()
    if "\\frac" in txt or "\\implies" in txt or "\\Delta" in txt:
        raw_latex_leaks += 1
doc.close()
print(f"Raw LaTeX leak pages: {raw_latex_leaks}")

if os.path.exists(PRINT_HTML):
    os.remove(PRINT_HTML)
