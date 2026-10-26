import os
import shutil
import json
import fitz  # PyMuPDF

ROOT = r"c:\NWU\SM2\ECON122"
OLD_DIR = os.path.join(ROOT, "01_Source_Materials")
SOURCES_DIR = os.path.join(ROOT, "sources")
TEXTBOOK_DIR = os.path.join(SOURCES_DIR, "textbook")
PAST_PAPERS_DIR = os.path.join(SOURCES_DIR, "past_papers")
MEMORANDA_DIR = os.path.join(SOURCES_DIR, "memoranda")

def organize_sources():
    os.makedirs(TEXTBOOK_DIR, exist_ok=True)
    os.makedirs(PAST_PAPERS_DIR, exist_ok=True)
    os.makedirs(MEMORANDA_DIR, exist_ok=True)

    if os.path.exists(OLD_DIR):
        # Move Textbook
        tb_old = os.path.join(OLD_DIR, "Textbooks")
        if os.path.exists(tb_old):
            for f in os.listdir(tb_old):
                src = os.path.join(tb_old, f)
                dst = os.path.join(TEXTBOOK_DIR, f)
                if os.path.isfile(src):
                    shutil.move(src, dst)

        # Move Past Papers
        pp_old = os.path.join(OLD_DIR, "Past_Papers")
        if os.path.exists(pp_old):
            for f in os.listdir(pp_old):
                src = os.path.join(pp_old, f)
                dst = os.path.join(PAST_PAPERS_DIR, f)
                if os.path.isfile(src):
                    shutil.move(src, dst)

        # Move Memoranda and Study Guides/Tutorials
        for sub in ["Memoranda", "Study_Guides_and_Notes"]:
            sub_old = os.path.join(OLD_DIR, sub)
            if os.path.exists(sub_old):
                for f in os.listdir(sub_old):
                    src = os.path.join(sub_old, f)
                    dst = os.path.join(MEMORANDA_DIR, f)
                    if os.path.isfile(src):
                        shutil.move(src, dst)

        # Remove empty OLD_DIR
        shutil.rmtree(OLD_DIR, ignore_errors=True)
    print("Organized sources/ directory successfully.")

def extract_all_non_textbook():
    extracted = {"past_papers": {}, "memoranda": {}}
    for folder, key in [(PAST_PAPERS_DIR, "past_papers"), (MEMORANDA_DIR, "memoranda")]:
        for fname in sorted(os.listdir(folder)):
            if not fname.lower().endswith(".pdf"):
                continue
            fpath = os.path.join(folder, fname)
            doc = fitz.open(fpath)
            pages = []
            for i, page in enumerate(doc):
                pages.append(f"--- PAGE {i+1} ---\n" + page.get_text("text"))
            extracted[key][fname] = {
                "page_count": len(doc),
                "text": "\n".join(pages)
            }
            print(f"[{key}] {fname}: {len(doc)} pages")
            doc.close()

    out_path = os.path.join(ROOT, "scripts", "extracted_papers_and_memos.json")
    with open(out_path, "w", encoding="utf-8") as f:
        json.dump(extracted, f, indent=2, ensure_ascii=False)
    print(f"Saved extracted papers and memos to {out_path}")

def inspect_textbook():
    for fname in os.listdir(TEXTBOOK_DIR):
        if fname.lower().endswith(".pdf"):
            fpath = os.path.join(TEXTBOOK_DIR, fname)
            doc = fitz.open(fpath)
            print(f"[textbook] {fname}: {len(doc)} pages")
            toc = doc.get_toc()
            print(f"TOC entries: {len(toc)}")
            toc_path = os.path.join(ROOT, "scripts", "textbook_toc.json")
            # Also extract first 25 pages to find exact table of contents if needed
            front_matter = []
            for p in range(min(30, len(doc))):
                front_matter.append(f"--- PDF PAGE {p+1} ---\n" + doc[p].get_text("text"))
            with open(toc_path, "w", encoding="utf-8") as f:
                json.dump({"toc": toc, "front_matter": "\n".join(front_matter)}, f, indent=2, ensure_ascii=False)
            doc.close()

def extract_study_guide():
    sg_path = os.path.join(SOURCES_DIR, "ECON 122  Study guide.pdf")
    if not os.path.exists(sg_path):
        for fname in os.listdir(SOURCES_DIR):
            if "study guide" in fname.lower() and fname.lower().endswith(".pdf"):
                sg_path = os.path.join(SOURCES_DIR, fname)
                break
    embedded_transcriptions = {
        52: (
            "[EMBEDDED CHART xref=132: Sources of Revenue of the SA Government — "
            "Individuals: 41%, VAT: 26%, Company: 13%, Customs & Excise: 13%, Other: 6%, Mining: 1%]\n"
            "[EMBEDDED GRAPH xref=133: Laffer Curve — Total Tax Revenue (R) on vertical axis vs Tax Rate (%) on horizontal axis, peaking at optimal tax rate t* between 0% and 100%]"
        ),
        54: (
            "[EMBEDDED TABLE xref=138: Personal Income Tax Brackets — "
            "0-20 000: 19% of each R1; "
            "20 001-30 000: R3 800 + 21% of the amount above R20 000; "
            "30 001-40 000: R5 900 + 30% of the amount above R30 000; "
            "40 001-60 000: R8 900 + 39% of the amount above R40 000; "
            "60 001-70 000: R16 700 + 41% of the amount above R60 000; "
            "70 001-80 000: R20 800 + 42% of the amount above R70 000; "
            "80 000 and above: R25 000 + 43% of the amount above R80 000. "
            "Susan's taxable income = R83 450 -> Tax = R25 000 + 0.43 * (83 450 - 80 000) = R26 483.50; Average tax rate = 31.74%]"
        ),
        56: (
            "[EMBEDDED TABLE xref=143: Direct vs Indirect Tax Classification — "
            "Value added tax (Indirect); Individual income tax (Direct); Company tax (Direct); "
            "Tax on Petrol sales (Indirect); Custom taxes (Indirect); Mine tax (Direct); "
            "Excise duties on alcoholic drinks and cigarettes (Indirect)]"
        ),
        70: (
            "[EMBEDDED TABLE xref=183: Commodity Prices in the USA ($) — "
            "Commodity A: $1; Commodity B: $4; Commodity C: $6; Commodity D: $8; Commodity E: $12. "
            "Compared against Price in Britain (£): A=£9, B=£7, C=£6, D=£4, E=£1]"
        ),
        95: (
            "[EMBEDDED DIAGRAM xref=246: Aggregate Expenditure (AE) 45-degree Keynesian Cross — "
            "45-degree line Y = AE with equilibrium E1 at Y = 60, AE = 60]"
        ),
        128: (
            "[EMBEDDED DIAGRAM xref=321: South African Business Cycle Phases — "
            "Expansion/Upswing, Upper Turning Point (Peak), Contraction/Downswing, Lower Turning Point (Trough) along long-term growth trend]"
        ),
    }
    if os.path.exists(sg_path):
        doc = fitz.open(sg_path)
        pages = []
        for i, page in enumerate(doc):
            pno = i + 1
            txt = page.get_text("text")
            if pno in embedded_transcriptions:
                txt = txt + "\n" + embedded_transcriptions[pno]
            img_xrefs = [img[0] for img in page.get_images(full=True) if img[2] > 150 and img[3] > 80]
            page_entry = {"page": pno, "text": txt}
            if img_xrefs:
                page_entry["content_image_xrefs"] = img_xrefs
            pages.append(page_entry)
        out_sg = os.path.join(ROOT, "scripts", "extracted_study_guide.json")
        with open(out_sg, "w", encoding="utf-8") as f:
            json.dump(
                {
                    "page_count": len(doc),
                    "toc": doc.get_toc(),
                    "embedded_tables_and_figures": embedded_transcriptions,
                    "pages": pages,
                },
                f,
                indent=2,
                ensure_ascii=False,
            )
        print(f"[study_guide] {os.path.basename(sg_path)}: {len(doc)} pages -> {out_sg}")
        doc.close()

if __name__ == "__main__":
    organize_sources()
    extract_all_non_textbook()
    inspect_textbook()
    extract_study_guide()
