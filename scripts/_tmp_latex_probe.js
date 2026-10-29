const fs = require('fs');
const vm = require('vm');
const sb = { module: { exports: {} }, exports: {}, console, Math, Number, String, Boolean, Array, Object, Date, JSON, parseFloat, parseInt, isFinite };
sb.globalThis = sb;
vm.createContext(sb);
vm.runInContext(fs.readFileSync('data.js', 'utf8') + '\n;globalThis.ECON122_DATA = ECON122_DATA;', sb);
vm.runInContext(fs.readFileSync('app.js', 'utf8'), sb);
const E = sb.ECON122_ENGINE;
for (const s of ['GDE = C + I + G = 2 480 000 + 620 000', 'α = 1 ÷ (1 − c)', 'C̄ + Ī', 'Y₀ = 800', 'GDP@MP − taxes', 'MSC > MPC & GNI < GDP', '{}\\x^2_', 'x²', 'R3,860,000 million', '50%', 'é😀'])
  console.log(JSON.stringify(s), '=>', JSON.stringify(E.workingToLatex(s)));
