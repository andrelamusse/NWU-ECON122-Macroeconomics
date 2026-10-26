import os
import json
import fitz

ROOT = r"c:\NWU\SM2\ECON122"
TB_PATH = os.path.join(ROOT, "sources", "textbook", "Philip Mohr - Economics for South African Students 6_e-Van Schaik (2020).pdf")
OUT_PATH = os.path.join(ROOT, "scripts", "extracted_textbook_macro.json")

doc = fitz.open(TB_PATH)
toc = doc.get_toc()

# Chapters 13 to 22 PDF page ranges from TOC:
# Ch 13: 598 to 654
# Ch 14: 655 to 713
# Ch 15: 714 to 773
# Ch 16: 774 to 822
# Ch 17: 823 to 875
# Ch 18: 876 to 930
# Ch 19: 931 to 982
# Ch 20: 983 to 1034
# Ch 21: 1035 to 1063
# Ch 22: 1064 to 1118

chapters_ranges = {
    "ch13": (598, 654, "Chapter 13: Measuring the performance of the economy"),
    "ch14": (655, 713, "Chapter 14: The monetary sector"),
    "ch15": (714, 773, "Chapter 15: The government sector"),
    "ch16": (774, 822, "Chapter 16: The foreign sector"),
    "ch17": (823, 875, "Chapter 17: A simple Keynesian model of the economy"),
    "ch18": (876, 930, "Chapter 18: The Keynesian model with a government and a foreign sector"),
    "ch19": (931, 982, "Chapter 19: More on macroeconomic theory and policy"),
    "ch20": (983, 1034, "Chapter 20: Inflation"),
    "ch21": (1035, 1063, "Chapter 21: Unemployment, poverty and inequality"),
    "ch22": (1064, 1118, "Chapter 22: Economic growth and business cycles"),
}

extracted_tb = {}
for ch_id, (start_p, end_p, title) in chapters_ranges.items():
    pages_text = []
    for p in range(start_p - 1, min(end_p, len(doc))):
        pages_text.append(f"--- PDF PAGE {p+1} ---\n" + doc[p].get_text("text"))
    full_txt = "\n".join(pages_text)
    extracted_tb[ch_id] = {
        "title": title,
        "pdf_start_page": start_p,
        "pdf_end_page": end_p,
        "char_count": len(full_txt),
        "text": full_txt
    }
    print(f"Extracted {ch_id} ({title}): PDF pages {start_p}-{end_p}, {len(full_txt)} chars")

doc.close()

with open(OUT_PATH, "w", encoding="utf-8") as f:
    json.dump(extracted_tb, f, indent=2, ensure_ascii=False)
print(f"Saved textbook macro chapters to {OUT_PATH}")
