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
    if os.path.exists(sg_path):
        doc = fitz.open(sg_path)
        pages = []
        for i, page in enumerate(doc):
            pages.append({"page": i + 1, "text": page.get_text("text")})
        out_sg = os.path.join(ROOT, "scripts", "extracted_study_guide.json")
        with open(out_sg, "w", encoding="utf-8") as f:
            json.dump({"page_count": len(doc), "toc": doc.get_toc(), "pages": pages}, f, indent=2, ensure_ascii=False)
        print(f"[study_guide] {os.path.basename(sg_path)}: {len(doc)} pages -> {out_sg}")
        doc.close()

if __name__ == "__main__":
    organize_sources()
    extract_all_non_textbook()
    inspect_textbook()
    extract_study_guide()
