const fs = require('fs');
const vm = require('vm');
const sb = { module: { exports: {} }, exports: {}, console, Math, Number, String, Boolean, Array, Object, Date, JSON, parseFloat, parseInt, isFinite };
sb.globalThis = sb;
vm.createContext(sb);
vm.runInContext(fs.readFileSync('data.js', 'utf8') + '\n;globalThis.ECON122_DATA = ECON122_DATA;', sb);
vm.runInContext(fs.readFileSync('app.js', 'utf8') , sb);
const T = sb.ECON122_ENGINE;
for (const w of ['unemploymant', 'unemployment', 'unemployment and', 'trade-off', 'stabilisation', 'stability', 'stable', 'economy', 'economic', 'supply', 'supplies', 'business', 'production', 'produce', 'prices', 'rise', 'rises'])
  console.log(w, JSON.stringify(T.gradingStemsOf(w)));

