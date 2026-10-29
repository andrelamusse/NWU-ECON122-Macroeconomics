const fs = require('fs');
const vm = require('vm');
const sb = {};
vm.createContext(sb);
vm.runInContext(fs.readFileSync('data.js', 'utf8') + '\n;globalThis.D = ECON122_DATA;', sb);
const pages = sb.D.extremeExam.pages;
for (const p of pages) {
  for (const pt of p.parts) {
    if (pt.keywords) console.log(pt.id, pt.type, pt.marks, JSON.stringify(pt.keywords));
  }
}
const first = pages.find(p => p.parts.some(pt => pt.keywords));
console.log(JSON.stringify(first.parts.find(pt => pt.keywords), null, 1).slice(0, 1500));
