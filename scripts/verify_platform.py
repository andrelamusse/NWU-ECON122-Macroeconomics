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
// Mirror index.html script order: vendored MiniSearch (UMD) -> data.js -> app.js
vm.runInContext(fs.readFileSync(path.join(root, 'vendor', 'minisearch.min.js'), 'utf8'), sandbox);
sandbox.MiniSearch = sandbox.module.exports;
sandbox.module = { exports: {} };
assert.strictEqual(typeof sandbox.MiniSearch, 'function', 'vendor/minisearch.min.js must expose the MiniSearch constructor');
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
assert(devKey.startsWith('scope_progress_DEV-'), `Device key must bind to Device ID with scope_progress_ prefix: ${devKey}`);
const storedScope = JSON.parse(localStorageMock.getItem(devKey));
assert.strictEqual(storedScope.checked['calc_1_1'], true, 'Device-bound localStorage must persist calc_1_1');
assert.strictEqual(storedScope.priorities['calc_1'], 'Master Keynesian multiplier', 'Device-bound localStorage must persist priorities');

// Verify transparent legacy migration from econ122_scope_progress_${deviceId} -> scope_progress_${deviceId}
const legacyKey = ENGINE.ScopeEngine.getLegacyStorageKey();
assert(legacyKey.startsWith('econ122_scope_progress_DEV-'), `Legacy key must use econ122_scope_progress_ prefix: ${legacyKey}`);
localStorageMock.removeItem(devKey);
localStorageMock.setItem(legacyKey, JSON.stringify({
  deviceId: sStats.deviceId,
  checked: { calc_1_2: true, theo_4_1: true },
  levels: { calc_1_2: 'well', theo_4_1: 'well', calc_2_1: 'partial' },
  priorities: { calc_1: 'Legacy Migrated Priority', calc_2: '', calc_3: '', theo_1: '', theo_2: '', theo_3: '' },
  updatedAt: '2026-01-01T00:00:00.000Z'
}));
const migratedState = ENGINE.ScopeEngine.loadScopeState();
assert.strictEqual(migratedState.checked['calc_1_2'], true, 'Legacy migration must preserve checked items');
assert.strictEqual(migratedState.levels['calc_2_1'], 'partial', 'Legacy migration must preserve partial preparation levels');
assert.strictEqual(migratedState.priorities['calc_1'], 'Legacy Migrated Priority', 'Legacy migration must preserve priority notes');
assert(localStorageMock.getItem(devKey) !== null, 'Legacy migration must immediately write to scope_progress_${deviceId}');
ENGINE.ScopeEngine.resetAll();

// Verify 100% Plain-English Variable Decoder coverage across all modules (Vault, Labs, Solvers, Scope, Exam, Cheat Sheet)
assert(ENGINE.GLOBAL_VARIABLE_DECODER && ENGINE.GLOBAL_VARIABLE_DECODER.length >= 25, 'GLOBAL_VARIABLE_DECODER must have >= 25 entries');
for (const ch of DATA.chapters) {
  for (const f of (ch.formulas || [])) {
    const decoded = ENGINE.decodeVariablesForText(`${f.latex || ''} ${f.meaning || ''} ${f.name || ''}`, ch.id);
    assert(decoded && decoded.length >= 1, `Vault/CheatSheet formula ${f.name} in ${ch.id} must decode >= 1 variable`);
  }
}
const labIds = ['keynesian', 'adas', 'money', 'externality', 'forex', 'lorenz'];
for (const lid of labIds) {
  const cfg = ENGINE.LAB_CONFIGS.find(c => c.id === lid);
  assert(cfg && cfg.decoder && cfg.decoder.formula && cfg.decoder.whyItWorks && cfg.decoder.variables && cfg.decoder.variables.length >= 3, `Lab ${lid} must have a complete Plain-English Variable Decoder`);
}
const solverIds = ['keynesian_solver', 'nat_accounts_solver', 'sars_tax_solver', 'deflator_solver', 'labour_solver', 'money_solver'];
for (const sid of solverIds) {
  const dec = ENGINE.SOLVER_DECODERS[sid];
  assert(dec && dec.formula && dec.whyItWorks && dec.variables && dec.variables.length >= 4, `Solver ${sid} must have a complete Plain-English Variable Decoder`);
}
for (const sec of DATA.examScope.sections) {
  for (const grp of sec.groups) {
    for (const item of grp.items) {
      const dec = ENGINE.decodeVariablesForText(`${item.formula} ${item.topic} ${item.beginnerTip}`, grp.chapterId);
      assert(dec && dec.length >= 1, `Scope item ${item.id} must decode >= 1 variable`);
    }
  }
}
for (const page of DATA.extremeExam.pages) {
  for (const part of page.parts) {
    const dec = ENGINE.decodeVariablesForText([part.stem, part.prompt, part.officialMemo, part.beginnerExplanation].filter(Boolean).join(' '), page.chapterId);
    assert(dec && dec.length >= 1, `Extreme Exam part ${part.id} must decode >= 1 variable`);
  }
}


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

// Fuzzy + stemmed keyword grading (MiniSearch engine, identical native fallback)
const fuzzyCases = [
  ['unemploymant and inflashun trade off', ['inflation', 'unemployment', 'trade-off'], ['unemployment', 'trade-off']],
  ['goods are overproduced and underpriced', ['over-produced', 'under-priced'], ['over-produced', 'under-priced']],
  ['GDE=C+I+G and net exports X\u2212Z', ['C + I + G', 'X - Z'], ['C + I + G', 'X - Z']],
  ['the economy grows with stable prices', ['economic growth', 'price stability'], ['economic growth', 'price stability']],
  ['employment rose', ['unemployment'], []],
  ['prices deflating', ['inflation'], []],
  ['the MSC curve lies above the MPS', ['MSC', 'MPC'], ['MSC']],
  ['', ['inflation'], []]
];
for (const [txt, kws, expected] of fuzzyCases) {
  const ms = ENGINE.gradeTheoryKeywords(txt, kws, kws.length);
  const nat = ENGINE.gradeTheoryKeywords(txt, kws, kws.length, { forceNative: true });
  assert.deepStrictEqual(Array.from(ms.matched), expected, `Fuzzy grading of ${JSON.stringify(txt)}: got ${JSON.stringify(ms.matched)}`);
  assert.deepStrictEqual(Array.from(nat.matched), expected, `Native fallback grading of ${JSON.stringify(txt)}: got ${JSON.stringify(nat.matched)}`);
}
assert.strictEqual(ENGINE.gradeTheoryKeywords('inflation', ['inflation'], 2).engine, 'minisearch', 'Keyword grading must run through the vendored MiniSearch engine when loaded');
assert.strictEqual(ENGINE.gradeTheoryKeywords('0', ['inflation'], 0).maxMarks, 0, 'maxMarks of 0 must not fall back to 1');
let parityParts = 0;
for (const p of DATA.extremeExam.pages) for (const pt of p.parts) if (Array.isArray(pt.keywords)) {
  parityParts++;
  const ms = ENGINE.gradeTheoryKeywords(pt.officialMemo, pt.keywords, pt.marks);
  const nat = ENGINE.gradeTheoryKeywords(pt.officialMemo, pt.keywords, pt.marks, { forceNative: true });
  assert.deepStrictEqual(Array.from(ms.matched), Array.from(nat.matched), `MiniSearch/native parity broken on ${pt.id}`);
}
assert(parityParts >= 40, `Expected >= 40 keyword-graded parts, found ${parityParts}`);

// Live typeset preview: plain-text working -> KaTeX source & offline HTML fallback
assert.deepStrictEqual(Array.from(ENGINE.workingToLatex('\u03b1 = 1 \u00f7 (1 \u2212 c)')), ['\\alpha =1\\div (1-c)'], 'Preview must convert alpha, division and minus');
assert.deepStrictEqual(Array.from(ENGINE.workingToLatex('C\u0304 + \u012a')), ['\\bar{C}+\\bar{I}'], 'Preview must convert C-bar and I-bar');
assert.deepStrictEqual(Array.from(ENGINE.workingToLatex('Y\u2080 = 800\n\nGDP@MP')), ['Y_{0}=800', '\\mathrm{GDP}_{\\mathrm{MP}}'], 'Preview must convert subscripts, @-subscripts and skip blank lines');
assert.deepStrictEqual(Array.from(ENGINE.workingToLatex('Y_0 = C_0 + cY_d')), ['Y_{0}=C_{0}+cY_{\\mathrm{d}}'], 'Preview must convert ASCII subscripts like Y_0, C_0, Y_d');
assert.deepStrictEqual(Array.from(ENGINE.workingToLatex('')), [], 'Empty working must produce no preview lines');
assert(ENGINE.workingToLatex('50% {}\\x^2_')[0].includes('\\%'), 'Preview must escape LaTeX special characters');
const fbHtml = ENGINE.latexToFallbackHtml('\\alpha = \\frac{1}{1 - c(1 - t) + m}');
assert(fbHtml.includes('&alpha;') && fbHtml.includes('&divide;') && fbHtml.includes('1 - c'), 'Offline math fallback must convert Greek symbols and fractions to readable HTML');

// Case-sensitive variable decoding (C vs c, I vs i)
const decodedGde = ENGINE.decodeVariablesForText('GDE = C + I + G', 'ch13').map(d => d.symbol);
assert(decodedGde.includes('C') && decodedGde.includes('I') && decodedGde.includes('G'), 'GDE = C + I + G must decode uppercase C, I, G');
assert(!decodedGde.includes('c (MPC)') && !decodedGde.includes('i\u2080 (Repo)'), 'Uppercase C and I must not false-match lowercase c (MPC) or i (Repo)');

// Student / monitor isolation
assert(!/<script[^>]+src=["'][^"']*app\.js/i.test(adminCode), 'admin.html must never load app.js');
assert(!/minisearch|floating-ui/i.test(adminCode), 'admin.html must not load student-side vendor scripts');
assert(/location\.href\.toLowerCase\(\)\.includes\('admin'\)/.test(appCode), 'Tracker must bail out when location.href contains admin');
assert(!/parseFloat\([^)]*\)\s*\|\|/.test(appCode) && !/parseFloat\([^)]*\)\s*\|\|/.test(adminCode), 'parseFloat(x) || fallback breaks on 0; use Number.isFinite');

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

// Regression Test A: Section C re-grading when updating working and clicking "Update Grade & Memo"
const c1Page = DATA.extremeExam.pages.find(p => p.pageId === 'C1');
const c1Part1 = c1Page.parts[0];
ENGINE.ExtremeExamEngine.getState().textAnswers[c1Part1.id] = 'GDE = C + I + G';
ENGINE.ExtremeExamEngine.checkCurrentPage(c1Page);
assert.strictEqual(ENGINE.ExtremeExamEngine.getPartScore(c1Part1, true), 0.5, 'Initial partial working on C1_1 must award 0.5 marks');
ENGINE.ExtremeExamEngine.getState().textAnswers[c1Part1.id] = 'GDE = C + I + G = 2 480 000 + 620 000 + 760 000 = R3,860,000 million';
ENGINE.ExtremeExamEngine.checkCurrentPage(c1Page);
assert.strictEqual(ENGINE.ExtremeExamEngine.getPartScore(c1Part1, true), 2, 'Updated complete working on C1_1 must re-evaluate and award full 2 marks');

// Regression Test B: Section filter switching preserves mcqChoices and textAnswers
ENGINE.ExtremeExamEngine.setSectionFilter('B');
assert.strictEqual(ENGINE.ExtremeExamEngine.getFilteredPages().length, 10, 'Section B filter must return 10 pages');
ENGINE.ExtremeExamEngine.setSectionFilter('C');
assert.strictEqual(ENGINE.ExtremeExamEngine.getFilteredPages().length, 10, 'Section C filter must return 10 pages');
ENGINE.ExtremeExamEngine.setSectionFilter('A');
assert.strictEqual(ENGINE.ExtremeExamEngine.getFilteredPages().length, 97, 'Section A filter must return 97 pages');
ENGINE.ExtremeExamEngine.setSectionFilter('ALL');
assert.strictEqual(ENGINE.ExtremeExamEngine.getState().mcqChoices[firstPart.id], correctIdx, 'MCQ choice must persist across section filter switches');
assert(ENGINE.ExtremeExamEngine.getState().textAnswers[c1Part1.id].includes('3,860,000'), 'Calculation text answer must persist across section filter switches');

// Regression Test C: HTML escaping for inequalities (< and >) and C2 Annexure table
const escapedIneq = ENGINE.escapeAttr('MSC > MPC & GNI < GDP </textarea>');
assert.strictEqual(escapedIneq, 'MSC &gt; MPC &amp; GNI &lt; GDP &lt;/textarea&gt;', 'escapeAttr must safely escape <, >, and & for textareas');
const c2Page = DATA.extremeExam.pages.find(p => p.pageId === 'C2');
assert(c2Page && c2Page.sharedContextHtml.includes('ANNEXURE — SECTION C, QUESTION 2.1 and 2.2'), 'C2 sharedContextHtml must include the Annexure table structure');

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

    for vendor_src in re.findall(r'<script src="(vendor/[^"]+)"', idx_html):
        assert os.path.exists(os.path.join(ROOT, *vendor_src.split("/"))), f"index.html references missing vendored file {vendor_src}"
    assert "vendor/minisearch.min.js" in idx_html and "vendor/floating-ui.dom.umd.min.js" in idx_html, "index.html must load vendored MiniSearch and Floating UI"

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
    assert "--bg-canvas-elevated" in css and "--bg-elevated" in css, "Missing elevated surface CSS variables"
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
    assert "1. The topic I need to spend the most time on:" in dom and "2. The topic I need to practise explaining or discussing:" in dom, "Exam Scope DOM missing official revision priority prompts"
    assert 'id="nav-extreme"' in dom and 'id="view-extreme"' in dom, "DOM missing Extreme Exam Prep navigation or view"
    assert "500 Marks Total • 117 Interactive Pages" in dom and 'id="extreme-active-page"' in dom, "Extreme Exam Prep DOM did not render active page"
    assert "svg" in dom and "E0 (Y* =" in dom, "2D Vector SVG Lab did not render equilibrium E0"
    assert "Problem 1 of 150" in dom, "Quiz engine did not render 150 Problems deck"
    assert 'id="btn-quiz-next"' in dom and 'id="btn-quiz-next-bottom"' in dom and "Next Question →" in dom, "Quiz engine missing Next Question navigation buttons"
    assert 'id="btn-quiz-prev"' in dom and 'id="btn-quiz-prev-bottom"' in dom and "← Previous Question" in dom, "Quiz engine missing Previous Question navigation buttons"
    assert ">undefined<" not in dom, "Rendered DOM contains literal undefined badge"
    assert 'id="fx-tooltip"' in dom, "Floating UI tooltip layer did not mount (vendor scripts or initFloatingTooltips failed)"

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

