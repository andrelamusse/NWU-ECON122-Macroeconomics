const fs = require('fs');
const vm = require('vm');
const sb = { module: { exports: {} }, exports: {}, console, Math, Number, String, Boolean, Array, Object, Date, JSON, parseFloat, parseInt, isFinite };
sb.globalThis = sb;
vm.createContext(sb);
vm.runInContext(fs.readFileSync('vendor/minisearch.min.js', 'utf8'), sb);
sb.MiniSearch = sb.module.exports;
sb.module = { exports: {} };
vm.runInContext(fs.readFileSync('data.js', 'utf8') + '\n;globalThis.ECON122_DATA = ECON122_DATA;', sb);
vm.runInContext(fs.readFileSync('app.js', 'utf8'), sb);
const E = sb.ECON122_ENGINE;
const cases = [
  ['the economy grows, more people employed, stable prices', ['economic growth', 'full employment', 'price stability']],
  ['unemploymant and inflashun trade off', ['inflation', 'unemployment', 'trade-off']],
  ['goods are overproduced and underpriced', ['over-produced', 'under-priced']],
  ['GDE=C+I+G and net exports X−Z', ['C + I + G', 'X - Z']],
  ['the MSC curve lies above the MPS', ['MSC', 'MPC']],
  ['an enterprise grows', ['rise']],
  ['employment rose', ['unemployment']],
  ['prices deflating', ['inflation']],
  ['exports increase', ['imports become more expensive', 'decrease']],
  ['', ['x']],
];
for (const [txt, kws] of cases) {
  const a = E.gradeTheoryKeywords(txt, kws, kws.length);
  const b = E.gradeTheoryKeywords(txt, kws, kws.length, { forceNative: true });
  console.log(a.engine, JSON.stringify(txt), '=>', JSON.stringify(a.matched), '| native', JSON.stringify(b.matched), JSON.stringify(a.matched) === JSON.stringify(b.matched) ? 'PARITY' : 'MISMATCH');
}
// parity over memo answers
let mism = 0, total = 0, full = 0;
for (const p of sb.ECON122_DATA.extremeExam.pages) for (const pt of p.parts) if (pt.keywords) {
  total++;
  const a = E.gradeTheoryKeywords(pt.officialMemo, pt.keywords, pt.marks);
  const b = E.gradeTheoryKeywords(pt.officialMemo, pt.keywords, pt.marks, { forceNative: true });
  if (JSON.stringify(a.matched) !== JSON.stringify(b.matched)) { mism++; console.log('MISMATCH', pt.id, a.matched, b.matched); }
  if (a.missed.length === 0) full++; else console.log('memo-missed', pt.id, a.missed);
}
console.log({ total, mism, full });
