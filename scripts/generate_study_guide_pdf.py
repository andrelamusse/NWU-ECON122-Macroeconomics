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
    for f_idx, f_item in enumerate(ch["formulas"], start=1):
        encoded_tex = urllib.parse.quote(f_item["latex"])
        formulas_rows.append(f"""
        <div class="formula-item">
          <div class="f-title"><span class="item-idx">EQ {ch['number']}.{f_idx}</span> {html_escape(f_item['name'])}</div>
          <div class="f-code katex-display-target" data-tex="{encoded_tex}"></div>
          <div class="f-body math-inline-target"><strong>Meaning:</strong> {html_escape(f_item.get('meaning', ''))}</div>
        </div>
        """)

    concepts_rows = []
    pitfalls_rows = []
    for c_idx, c_item in enumerate(ch["concepts"], start=1):
        concepts_rows.append(f"""
        <div class="concept-item">
          <div class="c-title"><span class="item-idx">CONCEPT {ch['number']}.{c_idx}</span> {html_escape(c_item['title'])} <span class="c-tag-inline">({html_escape(c_item.get('tag', ''))})</span></div>
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

    # Chapter standalone problems rendered in a clean full-width single-column stack
    # so wide multi-step KaTeX derivations never stretch columns or clip at the A4 margin.
    ch_questions = [q for q in data["questions"] if (q.get("chapter") or q.get("chapterId")) == ch["id"]]
    q_rows = []
    for q_idx, q in enumerate(ch_questions, start=1):
        correct_opt = next((o for o in q["options"] if o.get("isCorrect")), q["options"][0])
        deriv = q.get("derivation", "")
        if isinstance(deriv, list):
            deriv_html = "".join(
                f'<div class="katex-display-target" data-tex="{urllib.parse.quote(d)}"></div>'
                for d in deriv
            )
        else:
            deriv_html = f'<div class="katex-display-target" data-tex="{urllib.parse.quote(str(deriv))}"></div>'

        topic_label = q.get("topic") or "Quantitative & Conceptual Application"
        cite_label = q.get("citation") or ch["pages"].split(" (")[0]
        diff_label = q.get("difficulty", "Medium")

        q_rows.append(f"""
        <div class="problem-card">
          <div class="p-header-row">
            <span class="p-topic">PROBLEM {ch['number']}.{q_idx} — {html_escape(topic_label)}</span>
            <span class="p-meta-pill">{html_escape(cite_label)} • {html_escape(diff_label)}</span>
          </div>
          <div class="p-stem math-inline-target">{html_escape(q['stem'])}</div>
          <div class="p-correct math-inline-target"><strong>Verified Solution:</strong> {html_escape(correct_opt['text'])}</div>
          <div class="f-code">{deriv_html}</div>
          <div class="p-refutation math-inline-target"><strong>First-Principles Proof:</strong> {html_escape(correct_opt['refutation'])}</div>
        </div>
        """)

    lo_items = "".join(
        f'<li class="math-inline-target" style="margin-bottom: 1.5pt;">{html_escape(lo)}</li>'
        for lo in ch.get("learningOutcomes", [])
    )
    lo_block = (
        f'<div class="f-code" style="background: #f0fdf4; border-color: #bbf7d0; margin-bottom: 5pt;">'
        f'<div style="font-weight: 800; font-size: 7.6pt; color: #065f46; margin-bottom: 2pt;">'
        f'OFFICIAL STUDY GUIDE LEARNING OUTCOMES ({html_escape(ch.get("studyUnit", ""))} • {html_escape(ch.get("studyHours", "10 Hours"))}):</div>'
        f'<ul style="margin-left: 12pt; font-size: 7.4pt; color: #1e293b;">{lo_items}</ul></div>'
        if lo_items else ""
    )

    chapters_html.append(f"""
    <section class="chapter-block">
      <div class="ch-banner">
        <div>
          <span class="ch-tag">CHAPTER {ch['number']}</span>
          <span class="ch-meta">{html_escape(ch.get('studyUnit', ''))} • {html_escape(ch['pages'])} • {html_escape(ch.get('studyHours', '10 Hours'))}</span>
        </div>
        <h2>Chapter {ch['number']}: {html_escape(ch['title'])}</h2>
        <p class="ch-summary math-inline-target">{html_escape(ch['summary'])}</p>
      </div>
      {lo_block}
      <h3>Core Mathematical Identities &amp; Canonical Equations ({len(ch['formulas'])} Identities)</h3>
      <div class="grid-2">{''.join(formulas_rows)}</div>
      <h3>Key Theoretical Frameworks, Worked Proofs &amp; SARB / Stats SA Context</h3>
      <div class="grid-2">{''.join(concepts_rows)}</div>
      <h3>Student Fallacies vs. First-Principles Laws</h3>
      <div class="pitfalls-wrap">{''.join(pitfalls_rows)}</div>
      <h3>Standalone Analytical Problems &amp; Step-by-Step Derivations ({len(ch_questions)} Problems)</h3>
      <div class="problems-stack">{''.join(q_rows)}</div>
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
      <div class="p-meta">Scope: {html_escape(pp['examiners'])} | Verification: {html_escape(pp['moderator'])} | {pp['durationMinutes']} Mins • {pp['totalMarks']} Points • {len(pp['questionIds'])} Linked Problems</div>
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
    *, *::before, *::after {{
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }}
    html, body {{
      width: 100%;
      max-width: 100%;
      overflow-x: hidden;
      font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      font-size: 8.4pt;
      line-height: 1.38;
      color: #0f172a;
      background: #ffffff;
    }}
    .cover-header {{
      border: 1.5px solid #0f172a;
      border-radius: 7px;
      padding: 9pt 11pt;
      margin-bottom: 9pt;
      background: linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%);
    }}
    .cover-eyebrow {{
      font-size: 7.4pt;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.07em;
      color: #0284c7;
    }}
    h1 {{
      font-size: 14.5pt;
      font-weight: 800;
      margin: 2.5pt 0;
      color: #0f172a;
      letter-spacing: -0.02em;
    }}
    h2 {{
      font-size: 11.2pt;
      font-weight: 800;
      color: #0f172a;
      margin: 2pt 0;
      letter-spacing: -0.015em;
    }}
    h3 {{
      font-size: 8.8pt;
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
      width: 100%;
      max-width: 100%;
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
      font-size: 8.1pt;
      color: #334155;
      margin-top: 3pt;
    }}
    .grid-2 {{
      display: grid;
      grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
      gap: 5pt;
      width: 100%;
      max-width: 100%;
    }}
    .problems-stack {{
      display: flex;
      flex-direction: column;
      gap: 4.5pt;
      width: 100%;
      max-width: 100%;
    }}
    .formula-item, .concept-item, .problem-card {{
      border: 1px solid #cbd5e1;
      border-radius: 5px;
      padding: 5pt 6.5pt;
      background: #ffffff;
      break-inside: avoid;
      min-width: 0;
      max-width: 100%;
      overflow-wrap: anywhere;
      word-break: break-word;
    }}
    .item-idx {{
      display: inline-block;
      font-size: 6.8pt;
      font-weight: 800;
      color: #0284c7;
      background: #e0f2fe;
      padding: 0.8pt 3.5pt;
      border-radius: 2.5px;
      margin-right: 3pt;
      vertical-align: middle;
    }}
    .c-tag-inline {{
      font-weight: 600;
      font-size: 7.4pt;
      color: #475569;
    }}
    .f-title, .c-title {{
      font-weight: 800;
      font-size: 8.1pt;
      color: #0f172a;
      margin-bottom: 2.5pt;
    }}
    .p-header-row {{
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      gap: 6pt;
      margin-bottom: 2.5pt;
      border-bottom: 1px solid #f1f5f9;
      padding-bottom: 2pt;
    }}
    .p-topic {{
      font-weight: 800;
      color: #0284c7;
      text-transform: uppercase;
      font-size: 7.4pt;
      letter-spacing: 0.02em;
    }}
    .p-meta-pill {{
      font-size: 6.9pt;
      font-weight: 700;
      color: #475569;
      background: #f1f5f9;
      padding: 1pt 4.5pt;
      border-radius: 3px;
      white-space: nowrap;
      flex-shrink: 0;
    }}
    .f-code {{
      font-size: 7.7pt;
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      padding: 3.5pt 6pt;
      border-radius: 3px;
      margin: 2.5pt 0;
      max-width: 100%;
      overflow: hidden;
    }}
    .f-body, .c-body, .p-stem, .p-correct, .p-refutation {{
      font-size: 7.6pt;
      color: #334155;
      margin-bottom: 2pt;
      overflow-wrap: anywhere;
    }}
    .p-correct {{
      color: #065f46;
      background: #ecfdf5;
      border-left: 2.5px solid #10b981;
      padding: 2pt 5pt;
      border-radius: 2.5px;
    }}
    .f-example, .c-tip {{
      font-size: 7.4pt;
      background: #fffbeb;
      border-left: 2.5px solid #d97706;
      padding: 2.5pt 4.5pt;
      color: #1e293b;
    }}
    .pitfalls-wrap {{
      width: 100%;
      max-width: 100%;
    }}
    .pitfall-row {{
      display: grid;
      grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
      gap: 5pt;
      margin-bottom: 3.5pt;
      break-inside: avoid;
      width: 100%;
      max-width: 100%;
    }}
    .p-fallacy {{
      font-size: 7.5pt;
      background: #fff1f2;
      border: 1px solid #fecdd3;
      padding: 4pt 5.5pt;
      border-radius: 4px;
      min-width: 0;
      overflow-wrap: anywhere;
    }}
    .p-law {{
      font-size: 7.5pt;
      background: #ecfdf5;
      border: 1px solid #a7f3d0;
      padding: 4pt 5.5pt;
      border-radius: 4px;
      min-width: 0;
      overflow-wrap: anywhere;
    }}
    .paper-block {{
      border: 1px solid #94a3b8;
      border-radius: 6px;
      padding: 7pt;
      margin-bottom: 7pt;
      break-inside: avoid;
      width: 100%;
      max-width: 100%;
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
      text-align: left !important;
      overflow: hidden !important;
      max-width: 100%;
    }}
    .katex {{
      font-size: 1.0em;
    }}
  </style>
</head>
<body>
  <div class="cover-header">
    <div class="cover-eyebrow">North-West University • ECON122 Introduction to Macroeconomics</div>
    <h1>Master Print Study Guide, Formula Vault &amp; Problem Compendium ({len(data['questions'])} Standalone Problems)</h1>
    <p style="font-size: 8.1pt; color: #334155;">
      Comprehensive Macroeconomic Study Guide (Chapters 13 to 22), incorporating SARB Monetary Policy Frameworks and Stats SA National Accounting standards. Every analytical problem is presented in full-width single-column clarity with step-by-step KaTeX derivations.
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
        var cleaned = String(tex || '').replace(/\\\\text\\{{([^}}]*)\\}}/g, function(_, inner) {{
          return '\\\\text{{' + inner.replace(/\\s*&\\s*/g, ' and ') + '}}';
        }});
        if (window.katex) {{
          try {{
            return window.katex.renderToString(cleaned, {{
              displayMode: Boolean(displayMode),
              throwOnError: false,
              output: 'html'
            }});
          }} catch (e) {{}}
        }}
        return cleaned;
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

      // Proportional auto-fit pass so wide KaTeX equations inside 2-column or full-width boxes never clip
      document.querySelectorAll('.f-code').forEach(function(box) {{
        var availW = box.clientWidth - 14;
        if (availW <= 0) return;
        box.querySelectorAll('.katex-display > .katex').forEach(function(kEl) {{
          var kw = kEl.getBoundingClientRect().width;
          if (kw > availW && kw > 0) {{
            var ratio = Math.max(0.55, (availW - 4) / kw);
            kEl.style.fontSize = (ratio * 100).toFixed(1) + '%';
          }}
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
    if "\\frac" in txt or "\\implies" in txt or "\\Delta" in txt or "\\text" in txt or "\\quad" in txt:
        raw_latex_leaks += 1
doc.close()
print(f"Raw LaTeX leak pages: {raw_latex_leaks}")

if os.path.exists(PRINT_HTML):
    os.remove(PRINT_HTML)
