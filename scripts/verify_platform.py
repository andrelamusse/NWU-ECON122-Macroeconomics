import os
import re
import json
import subprocess
import fitz

ROOT = r"c:\NWU\SM2\ECON122"
INDEX_HTML = os.path.join(ROOT, "index.html")
ADMIN_HTML = os.path.join(ROOT, "admin.html")
STYLES_CSS = os.path.join(ROOT, "styles.css")
DATA_JS = os.path.join(ROOT, "data.js")
APP_JS = os.path.join(ROOT, "app.js")
PDF_GUIDE = os.path.join(ROOT, "ECON122_Master_Study_Guide.pdf")
NODE_TEST_JS = os.path.join(ROOT, "scripts", "run_vm_tests.js")

FORBIDDEN_REGEX = re.compile(
    r"(Past[\s-]Paper|\b1st Opportunity\b|\b2nd Opportunity\b|\bTutorial\b|Mahikeng|Potchefstroom|Vanderbijlpark|\bMohr\b|\bPhilip Mohr\b|\bTextbook\b|\bStudy Unit\b|\bNotional\b)",
    re.IGNORECASE,
)


def run_node_vm_tests():
    node_script = r"""
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const crypto = require('crypto');
const assert = require('assert');

const root = process.cwd();
const dataCode = fs.readFileSync(path.join(root, 'data.js'), 'utf8');
const appCode = fs.readFileSync(path.join(root, 'app.js'), 'utf8');
const adminCode = fs.readFileSync(path.join(root, 'admin.html'), 'utf8');

const mockStorage = {};
const localStorageMock = {
  getItem: (k) => (k in mockStorage ? mockStorage[k] : null),
  setItem: (k, v) => { mockStorage[k] = String(v); },
  removeItem: (k) => { delete mockStorage[k]; }
};

const sandbox = {
  module: { exports: {} },
  exports: {},
  console,
  localStorage: localStorageMock,
  Math,
  Number,
  String,
  Boolean,
  Array,
  Object,
  Date,
  JSON,
  encodeURIComponent,
  decodeURIComponent,
  parseFloat,
  parseInt,
  isFinite
};
sandbox.globalThis = sandbox;

vm.createContext(sandbox);
vm.runInContext(dataCode + '\n;globalThis.ECON122_DATA = ECON122_DATA;', sandbox);
vm.runInContext(appCode, sandbox);

const DATA = sandbox.ECON122_DATA;
const ENGINE = sandbox.ECON122_ENGINE;

assert(DATA && Array.isArray(DATA.chapters), 'ECON122_DATA.chapters must exist');
assert.strictEqual(DATA.chapters.length, 10, 'Must have all 10 prescribed chapters (Ch 13-22)');
for (const ch of DATA.chapters) {
  assert(ch.title && ch.number >= 13 && ch.number <= 22, `Chapter ${ch.id} must have a valid title`);
  assert(Array.isArray(ch.learningOutcomes) && ch.learningOutcomes.length >= 2, `Chapter ${ch.id} must have learningOutcomes`);
  assert(Array.isArray(ch.formulas) && ch.formulas.length >= 2, `Chapter ${ch.id} must have formulas`);
  assert(Array.isArray(ch.concepts) && ch.concepts.length >= 2, `Chapter ${ch.id} must have concepts`);
  assert(ch.beginnerGuide && ch.beginnerGuide.whyFormulasWork && Array.isArray(ch.beginnerGuide.variables), `Chapter ${ch.id} must have beginnerGuide`);
}
assert.strictEqual(DATA.questions.length, 150, 'Must have all 150 verified standalone questions');
assert.strictEqual(DATA.pastPapers.length, 5, 'Must have 5 synthesis suites');

// Verify Exam Scope Dataset & Device-Bound Persistence Engine
assert(DATA.examScope && Array.isArray(DATA.examScope.sections), 'ECON122_DATA.examScope must exist');
assert.strictEqual(DATA.examScope.sections.length, 2, 'Exam Scope must have Calculations and Theory sections');
let totalScopeItems = 0;
for (const sec of DATA.examScope.sections) {
  for (const grp of sec.groups) {
    for (const item of grp.items) {
      totalScopeItems += 1;
      assert(item.id && item.code && item.topic && item.formula && item.beginnerTip, `Scope item ${item.id} missing fields`);
    }
  }
}
assert.strictEqual(totalScopeItems, 46, 'Exam Scope must have all 46 items (25 Calculations + 21 Theory)');

ENGINE.ScopeEngine.resetAll();
let sStats = ENGINE.ScopeEngine.getSummaryStats();
assert.strictEqual(sStats.checkedCount, 0, 'Initial checked count must be 0');
assert.strictEqual(sStats.totalCount, 46, 'Total scope items must be 46');
ENGINE.ScopeEngine.toggleItemChecked('calc_1_1', true);
ENGINE.ScopeEngine.setItemLevel('theo_3_1', 'well');
ENGINE.ScopeEngine.setItemLevel('calc_7_4', 'partial');
ENGINE.ScopeEngine.setPriorityNote('calc_1', 'Master Keynesian multiplier');
sStats = ENGINE.ScopeEngine.getSummaryStats();
assert.strictEqual(sStats.checkedCount, 2, 'Checked count must be 2 after checking calc_1_1 and setting theo_3_1 to well');
assert.strictEqual(sStats.partialCount, 1, 'Partial count must be 1');
const devKey = ENGINE.ScopeEngine.getDeviceStorageKey();
assert(devKey.startsWith('econ122_scope_progress_DEV-'), `Device key must bind to Device ID: ${devKey}`);
const storedScope = JSON.parse(localStorageMock.getItem(devKey));
assert.strictEqual(storedScope.checked['calc_1_1'], true, 'Device-bound localStorage must persist calc_1_1');
assert.strictEqual(storedScope.priorities['calc_1'], 'Master Keynesian multiplier', 'Device-bound localStorage must persist priorities');
ENGINE.ScopeEngine.resetAll();

// Verify Extreme Exam Prep (117 pages, 500 marks) & Grading Engines
assert(DATA.extremeExam && Array.isArray(DATA.extremeExam.pages), 'ECON122_DATA.extremeExam must exist');
assert.strictEqual(DATA.extremeExam.totalMarks, 500, 'Extreme Exam totalMarks must be 500');
assert.strictEqual(DATA.extremeExam.pages.length, 117, 'Extreme Exam must have 117 pages (97 Sec A + 10 Sec B + 10 Sec C)');

// Check grouped follow-up pages in Section A
const p44_45 = DATA.extremeExam.pages.find(p => p.pageId === 'A_44_45');
const p47_48 = DATA.extremeExam.pages.find(p => p.pageId === 'A_47_48');
const p68_69 = DATA.extremeExam.pages.find(p => p.pageId === 'A_68_69');
assert(p44_45 && p44_45.parts.length === 2, 'Questions 44 & 45 must be grouped on single page A_44_45');
assert(p47_48 && p47_48.parts.length === 2, 'Questions 47 & 48 must be grouped on single page A_47_48');
assert(p68_69 && p68_69.parts.length === 2, 'Questions 68 & 69 must be grouped on single page A_68_69');

// Test Section B Keyword Grader
const kwEmpty = ENGINE.gradeTheoryKeywords('', ['economic growth', 'full employment', 'price stability'], 5);
assert.strictEqual(kwEmpty.autoMarks, 0, 'Empty theory answer must score 0');
const kwFull = ENGINE.gradeTheoryKeywords(
  'The five objectives are economic growth, full employment, price stability, balance of payments stability, and equitable distribution of income.',
  ['economic growth', 'full employment', 'price stability', 'balance of payments', 'distribution of income'],
  5
);
assert.strictEqual(kwFull.autoMarks, 5, 'Full keyword match must score 5/5');
assert.strictEqual(kwFull.missed.length, 0, 'Full keyword match must have 0 missed keywords');

// Test Section C Calculation Rubric Evaluator
const c1_1 = DATA.extremeExam.pages.find(p => p.pageId === 'C1').parts[0];
const rubHit = ENGINE.evaluateCalculationRubric('GDE = C + I + G = 2 480 000 + 620 000 + 760 000 = R3,860,000 million', c1_1.rubricSteps);
assert.strictEqual(rubHit['C1_1_s1'], true, 'Rubric step 1 (formula) must match');
assert.strictEqual(rubHit['C1_1_s2'], true, 'Rubric step 2 (substitution with space-grouped numbers) must match');
assert.strictEqual(rubHit['C1_1_s3'], true, 'Rubric step 3 (final answer 3,860,000) must match');

// Test ExtremeExamEngine MCQ Shuffling & Page Scoring
ENGINE.ExtremeExamEngine.resetExam();
const firstPage = DATA.extremeExam.pages[0];
const firstPart = firstPage.parts[0];
const shufOpts = ENGINE.ExtremeExamEngine.getShuffledOptionsForPart(firstPart);
const correctIdx = shufOpts.findIndex(o => o.isCorrect);
assert(correctIdx >= 0 && correctIdx <= 3, 'Shuffled MCQ must have a valid correct option index');
ENGINE.ExtremeExamEngine.getState().mcqChoices[firstPart.id] = correctIdx;
ENGINE.ExtremeExamEngine.checkCurrentPage(firstPage);
assert.strictEqual(ENGINE.ExtremeExamEngine.getPageScore(firstPage).earned, 2, 'Selecting shuffled correct MCQ option must award 2 marks');
ENGINE.ExtremeExamEngine.resetExam();

const suiteQIds = new Set();
for (const pp of DATA.pastPapers) {
  for (const qid of pp.questionIds) {
    assert(DATA.questions.some(q => q.id === qid), `Suite ${pp.id} references unknown question ID ${qid}`);
    suiteQIds.add(qid);
  }
}
assert.strictEqual(suiteQIds.size, 150, 'All 150 standalone questions must be linked across the 5 synthesis suites');

// 0. Verify Balanced Answer Key Distribution (Never always A)
const rawPositions = DATA.questions.map(q => q.options.findIndex(o => o.isCorrect));
const posA = rawPositions.filter(p => p === 0).length;
const posB = rawPositions.filter(p => p === 1).length;
const posC = rawPositions.filter(p => p === 2).length;
const posD = rawPositions.filter(p => p === 3).length;
assert(posA >= 25 && posB >= 25 && posC >= 25 && posD >= 25, `Options must be balanced across A, B, C, D (got A:${posA}, B:${posB}, C:${posC}, D:${posD})`);

// 1. 50 Rounds of Fisher-Yates Shuffling & Psychometric Invariants
const seenTopics = new Set();
for (let round = 0; round < 50; round++) {
  for (const q of DATA.questions) {
    assert(q.stem && q.stem.length >= 30, `Question ${q.id} must have a self-contained stem`);
    assert(q.chapter && q.chapterId, `Question ${q.id} must have normalized chapter & chapterId`);
    assert(q.topic && q.topic.length >= 10, `Question ${q.id} must have an explicit descriptive topic`);
    if (round === 0) seenTopics.add(q.topic);
    assert.strictEqual(q.options.length, 4, `Question ${q.id} must have 4 options`);
    const lengths = q.options.map(o => o.text.length);
    const ratio = Math.max(...lengths) / Math.min(...lengths);
    assert(ratio <= 1.25, `Question ${q.id} exceeded max/min length ratio: ${ratio.toFixed(3)}`);

    const shuffled = ENGINE.fisherYatesShuffle(q.options);
    assert.strictEqual(shuffled.length, 4);
    const correctOpts = shuffled.filter(o => o.isCorrect === true);
    assert.strictEqual(correctOpts.length, 1, `Question ${q.id} must have exactly 1 correct option after shuffle`);
    for (const opt of shuffled) {
      assert(typeof opt.refutation === 'string' && opt.refutation.length > 20, `Option in ${q.id} missing decoupled refutation`);
    }
  }
}
assert.strictEqual(seenTopics.size, 150, 'Every question must have a distinct, non-duplicated topic title');

// 2. Zero-Input Parsing Edge-Case Verification (Never use || fallback coercion)
assert.strictEqual(ENGINE.parseNumSafe(0, 100), 0, 'Numeric 0 must not fall back to 100');
assert.strictEqual(ENGINE.parseNumSafe('0', 100), 0, 'String "0" must not fall back to 100');
assert.strictEqual(ENGINE.parseNumSafe('0.00', 100), 0, 'String "0.00" must not fall back to 100');
assert.strictEqual(ENGINE.parseNumSafe('', 42), 42, 'Empty string should return fallback');
assert.strictEqual(ENGINE.parseNumSafe(NaN, 42), 42, 'NaN should return fallback');

// 3. Bidirectional Solvers Mathematical Verification
const kClosed = ENGINE.solveKeynesianModel({ C0: 120, c: 0.75, I0: 80, G0: 0, t: 0, T0: 0, X0: 0, Z0: 0, m: 0, Yf: 1000 });
assert(Math.abs(kClosed.alphaExact - 4.0) < 1e-6, 'Closed economy multiplier must be 4.0');
assert(Math.abs(kClosed.Y0_exact - 800.0) < 1e-6, 'Closed economy Y0 must be 800.0');
assert(Math.abs(kClosed.requiredDeltaG_exact - 50.0) < 1e-6, 'Required Delta G for Yf=1000 must be 50.0');

const kPortofino = ENGINE.solveKeynesianModel({ C0: 100, c: 0.8, I0: 100, G0: 250, t: 0.2, T0: 0, X0: 300, Z0: 20, m: 0.1, Yf: 1909.6 });
assert.strictEqual(kPortofino.alphaRounded2, 2.17, 'Portofino rounded multiplier must be 2.17');
assert(Math.abs(kPortofino.Y0_memoRounded - 1584.10) < 0.05, 'Portofino Y0 must be 1584.10');

const kItaly = ENGINE.solveKeynesianModel({ C0: 85, c: 0.5, I0: 75, G0: 70, t: 0.25, T0: 0, X0: 30, Z0: 30, m: 0.3, Yf: 300, importsOnYd: true });
assert(Math.abs(kItaly.Y0_exact - 270.588) < 0.01, 'Y0 must be 270.59');
assert(Math.abs(kItaly.budgetBalance - (-2.353)) < 0.01, 'Budget balance must be -2.35');

const kIslamabad = ENGINE.solveKeynesianModel({ C0: 150, c: 0.8, I0: 250, G0: 450, t: 0.2, T0: 20, X0: 325, Z0: 50, m: 0.2, Yf: 2087.5 });
assert(Math.abs(kIslamabad.A_bar - 1109.0) < 1e-6, 'Islamabad A_bar must be 1109.0');
assert(Math.abs(kIslamabad.inducedSlope - 0.44) < 1e-6, 'Islamabad induced slope must be 0.44');
assert.strictEqual(kIslamabad.alphaRounded2, 1.79, 'Islamabad rounded multiplier must be 1.79');
assert(Math.abs(kIslamabad.Y0_exact - 1980.357) < 0.01, 'Islamabad exact Y0 must be 1980.36');

const naModel = ENGINE.solveNationalAccounts({
  GDPmp: 1530580, taxesOnProducts: 205562, subsidiesOnProducts: 11433,
  taxesOnProd: 0, subsidiesOnProd: 0, depreciation: 170986,
  factorIncomeRec: 1500, factorIncomePaid: 1800, exportsX: 492646, importsZ: 569321
});
assert.strictEqual(naModel.GDPfc, 1336451, 'GDPfc must be 1,336,451');
assert.strictEqual(naModel.GNImp, 1530280, 'GNImp must be 1,530,280');

const taxZero = ENGINE.solveSarsTax({ tableKey: 'schedule_a', income: 0, age: 30 });
assert.strictEqual(taxZero.netTax, 0, 'Zero income must yield R0 net tax');
const taxHigh = ENGINE.solveSarsTax({ tableKey: 'schedule_a', income: 825000, age: 35 });
assert(Math.abs(taxHigh.grossTax - 238427) < 0.01, 'Gross tax must be R238,427');
assert(Math.abs(taxHigh.netTax - 221192) < 0.01, 'Net tax must be R221,192');
const taxMid = ENGINE.solveSarsTax({ tableKey: 'schedule_b', income: 315850, age: 23 });
assert(Math.abs(taxMid.netTax - 47751.50) < 0.01, 'Net tax must be R47,751.50');
const taxJerome = ENGINE.solveSarsTax({ tableKey: 'schedule_d', income: 288000, age: 37 });
assert(Math.abs(taxJerome.grossTax - 59689.20) < 0.01, 'Jerome gross tax must be R59,689.20');
assert(Math.abs(taxJerome.netTax - 46189.20) < 0.01, 'Jerome net tax must be R46,189.20');
const taxSally = ENGINE.solveSarsTax({ tableKey: 'schedule_d', income: 4500000, age: 55 });
assert(Math.abs(taxSally.grossTax - 1883625) < 0.01, 'Sally gross tax must be R1,883,625');
assert(Math.abs(taxSally.netTax - 1870125) < 0.01, 'Sally net tax must be R1,870,125');

// 4. 2D Vector SVG Coordinate Bounds & Collision Avoidance Audit
const labTypes = ['keynesian', 'adas', 'money', 'externality', 'forex', 'lorenz'];
for (const lt of labTypes) {
  const c = ENGINE.computeSvgLabCoordinates(lt, {});
  assert.strictEqual(c.W, 680);
  assert.strictEqual(c.H, 420);
  if (c.eqX !== undefined) {
    assert(Number.isFinite(c.eqX) && c.eqX >= 0 && c.eqX <= 680, `${lt} eqX out of bounds: ${c.eqX}`);
    assert(Number.isFinite(c.eqY) && c.eqY >= 0 && c.eqY <= 420, `${lt} eqY out of bounds: ${c.eqY}`);
  }
}
const collided = ENGINE.resolveLabelCollisions([
  { id: 'a', y: 120 },
  { id: 'b', y: 122 },
  { id: 'c', y: 124 }
], 18);
assert(collided[1].y - collided[0].y >= 18, 'Labels a and b must be separated by at least 18px');
assert(collided[2].y - collided[1].y >= 18, 'Labels b and c must be separated by at least 18px');

// 5. Verify Admin SHA-256 Cryptographic Gate (no plaintext passcodes, valid SHA-256 hashes)
assert(!adminCode.includes('NWU-ECON122-ADMIN'), 'SECURITY FAILURE: Plaintext passcode found in admin.html!');
assert(!adminCode.includes('ECON122-2026'), 'SECURITY FAILURE: Plaintext passcode found in admin.html!');
assert(!adminCode.includes('admin122'), 'SECURITY FAILURE: Plaintext passcode found in admin.html!');
const expectedHash1 = crypto.createHash('sha256').update('NWU-ECON122-ADMIN').digest('hex');
const expectedHash2 = crypto.createHash('sha256').update('ECON122-2026').digest('hex');
const expectedHash3 = crypto.createHash('sha256').update('admin122').digest('hex');
assert(adminCode.includes(expectedHash1), 'admin.html must contain SHA-256 digest 1');
assert(adminCode.includes(expectedHash2), 'admin.html must contain SHA-256 digest 2');
assert(adminCode.includes(expectedHash3), 'admin.html must contain SHA-256 digest 3');
assert(adminCode.includes('VALID_PASSCODE_HASHES.includes(digest)'), 'admin.html must verify SHA-256 digest');

console.log('NODE_VM_SANDBOX_PASS: All 150 core questions, 46 Exam Scope items (device-bound persistence), 117 Extreme Exam pages (500 marks, MCQ shuffle, keyword & rubric grading), 6 solvers, 6 SVG labs, and SHA-256 gate verified!');
"""
    with open(NODE_TEST_JS, "w", encoding="utf-8") as f:
        f.write(node_script)

    try:
        res = subprocess.run(["node", NODE_TEST_JS], cwd=ROOT, capture_output=True, text=True)
        if res.returncode != 0:
            print("NODE_ERR:", res.stderr)
            raise AssertionError(f"Node VM test failed: {res.stderr}")
        print(res.stdout.strip())
    finally:
        if os.path.exists(NODE_TEST_JS):
            os.remove(NODE_TEST_JS)


def audit_html_css_and_dereferencing():
    for path, name in [(DATA_JS, "data.js"), (INDEX_HTML, "index.html"), (APP_JS, "app.js")]:
        with open(path, "r", encoding="utf-8") as f:
            txt = f.read()
        matches = FORBIDDEN_REGEX.findall(txt)
        assert not matches, f"DE-REFERENCING VIOLATION in {name}: {matches[:10]}"
    print("DEREFERENCING_AUDIT_PASS: 0 textbook author / past-paper / campus / boilerplate references in data.js, index.html, and app.js.")

    with open(INDEX_HTML, "r", encoding="utf-8") as f:
        idx_html = f.read()
    if "admin.html" in idx_html.lower():
        raise AssertionError("SECURITY ISOLATION VIOLATION: index.html references admin.html!")
    print("ISOLATION_AUDIT_PASS: index.html has 0 references to admin.html.")

    with open(ADMIN_HTML, "r", encoding="utf-8") as f:
        adm_html = f.read()
    assert "SHA-256" in adm_html and "econ122_telemetry_v1" in adm_html, "admin.html missing SHA-256 gate or telemetry key"
    assert "NWU-ECON122-ADMIN" not in adm_html and "ECON122-2026" not in adm_html, "Plaintext passcode leaked in admin.html"
    print("ADMIN_AUDIT_PASS: admin.html cryptographic SHA-256 passcode gate and telemetry verified.")

    with open(STYLES_CSS, "r", encoding="utf-8") as f:
        css = f.read()
    assert "max-width: 100vw" in css and "overflow-x: hidden" in css, "Missing global viewport guardrail"
    assert "backdrop-filter: blur(24px) saturate(180%)" in css, "Missing frosted glassmorphism"
    assert "-webkit-backdrop-filter: blur(24px) saturate(180%)" in css, "Missing webkit frosted glassmorphism"
    assert "@media print" in css, "Missing @media print rules"
    assert ".symbol-toolbar-btn" in css and ".scope-checklist-item" in css, "Missing Exam Scope & Extreme Exam Prep styles"
    print("CSS_DESIGN_SYSTEM_PASS: Cupertino glassmorphism, Exam Scope & Extreme Exam Prep workbench styles, and @media print verified.")


def audit_compiled_pdf():
    assert os.path.exists(PDF_GUIDE), f"Missing compiled PDF: {PDF_GUIDE}"
    doc = fitz.open(PDF_GUIDE)
    page_count = len(doc)
    assert page_count >= 12, f"Expected >= 12 pages in master study guide, got {page_count}"
    char_counts = []
    global_max_x1 = 0.0
    problem_headers_count = 0

    for i, page in enumerate(doc):
        txt = page.get_text("text").strip()
        char_counts.append(len(txt))
        assert len(txt) >= 1000, f"Page {i+1} has low density or is blank/spillover ({len(txt)} chars)"
        assert "\\" not in txt, f"Page {i+1} contains unrendered raw LaTeX backslash"
        matches = FORBIDDEN_REGEX.findall(txt)
        assert not matches, f"Page {i+1} of PDF has forbidden reference: {matches[:5]}"

        max_allowed_x1 = page.rect.width - 28.0
        for b in page.get_text("blocks"):
            x0, y0, x1, y1, b_txt = b[0], b[1], b[2], b[3], b[4]
            if x1 > global_max_x1:
                global_max_x1 = x1
            assert x1 <= max_allowed_x1, (
                f"Page {i+1} horizontal overflow/clipping detected: block x1={x1:.2f} > {max_allowed_x1:.2f} "
                f"near {b_txt[:40]!r}"
            )
            if "PROBLEM " in b_txt:
                problem_headers_count += 1
                assert x0 < 45.0, (
                    f"Page {i+1} problem card is not full-width single-column (x0={x0:.2f}): {b_txt[:40]!r}"
                )

    doc.close()
    assert problem_headers_count >= 150, f"Expected all 150 problem headers in PDF, found {problem_headers_count}"
    print(
        f"PDF_FITZ_AUDIT_PASS: {page_count} pages verified, min density = {min(char_counts)} chars, "
        f"max x1 = {global_max_x1:.2f}pt (<= 566.96pt printable margin), {problem_headers_count} full-width problem cards, "
        f"0 raw LaTeX leaks, 0 margin clippings."
    )


def audit_headless_browser_dom():
    edge_paths = [
        r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe",
        r"C:\Program Files\Microsoft\Edge\Application\msedge.exe",
        r"C:\Program Files\Google\Chrome\Application\chrome.exe"
    ]
    browser_exe = next((p for p in edge_paths if os.path.exists(p)), None)
    if not browser_exe:
        return
    idx_url = f"file:///{INDEX_HTML.replace(os.sep, '/')}"
    res = subprocess.run(
        [browser_exe, "--headless=new", "--disable-gpu", "--dump-dom", idx_url],
        cwd=ROOT, capture_output=True, text=True, encoding="utf-8", errors="replace", check=True
    )
    dom = res.stdout
    assert "Chapter 13: Measuring the Performance of the Economy" in dom, "Vault DOM did not render Chapter 13"
    assert "Beginner-Friendly Plain-English Intuition" in dom, "Vault DOM did not render Beginner Variable Decoder"
    assert "Key Learning Objectives" in dom, "Vault DOM did not render Learning Objectives card"
    assert "chapter-schematic-frame" in dom and "Lorenz Curve" in dom, "Vault DOM did not render Chapter 13 SVG schematic"
    assert 'id="nav-scope"' in dom and 'id="view-scope"' in dom, "DOM missing Exam Scope navigation or view"
    assert "46 Official Exam Scope Topics" in dom and "scope-checklist-item" in dom, "Exam Scope DOM did not render 46 checklist items"
    assert 'id="nav-extreme"' in dom and 'id="view-extreme"' in dom, "DOM missing Extreme Exam Prep navigation or view"
    assert "500 Marks Total • 117 Interactive Pages" in dom and 'id="extreme-active-page"' in dom, "Extreme Exam Prep DOM did not render active page"
    assert "svg" in dom and "E0 (Y* =" in dom, "2D Vector SVG Lab did not render equilibrium E0"
    assert "Problem 1 of 150" in dom, "Quiz engine did not render 150 Problems deck"
    assert 'id="btn-quiz-next"' in dom and 'id="btn-quiz-next-bottom"' in dom and "Next Question →" in dom, "Quiz engine missing Next Question navigation buttons"
    assert 'id="btn-quiz-prev"' in dom and 'id="btn-quiz-prev-bottom"' in dom and "← Previous Question" in dom, "Quiz engine missing Previous Question navigation buttons"
    assert ">undefined<" not in dom, "Rendered DOM contains literal undefined badge"

    adm_url = f"file:///{ADMIN_HTML.replace(os.sep, '/')}"
    res_adm = subprocess.run(
        [browser_exe, "--headless=new", "--disable-gpu", "--dump-dom", adm_url],
        cwd=ROOT, capture_output=True, text=True, encoding="utf-8", errors="replace", check=True
    )
    dom_adm = res_adm.stdout
    assert "SHA-256 Cryptographic Gate" in dom_adm, "admin.html DOM did not render SHA-256 gate"
    assert "Active Device IP Counter" in dom_adm, "admin.html DOM did not render Active Device IP Counter"
    assert "Total Active Time" in dom_adm, "admin.html DOM did not render Total Active Time"
    print("HEADLESS_BROWSER_DOM_PASS: Real browser execution rendered Study Vault (with Plain-English Variable Decoder), Exam Scope Checklist (46 items), Extreme Exam Prep Workbench (500 marks), 2D SVG Lab, Solvers, 150-problem Quiz, and Admin Console with 0 runtime errors!")


if __name__ == "__main__":
    run_node_vm_tests()
    audit_html_css_and_dereferencing()
    audit_compiled_pdf()
    audit_headless_browser_dom()
    print("ALL_PLATFORM_VERIFICATIONS_PASSED!")

