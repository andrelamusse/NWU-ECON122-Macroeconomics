/* ============================================================================
   NWU ECON122 — Interactive Macroeconomics Workbench & Assessment Engine
   Core Application Logic, Web Audio Synthesizer, 2D Vector SVG Labs & Solvers
   ============================================================================ */

(function (globalScope) {
  'use strict';

  /* --------------------------------------------------------------------------
     1. Zero-Safe Numeric Parsing & Pure Mathematical Solvers
     -------------------------------------------------------------------------- */
  function parseNumSafe(rawVal, fallback = 0) {
    if (rawVal === null || rawVal === undefined || rawVal === '') {
      return fallback;
    }
    const v = typeof rawVal === 'number' ? rawVal : parseFloat(String(rawVal).trim());
    return Number.isFinite(v) ? v : fallback;
  }

  function fisherYatesShuffle(arr) {
    const copy = arr.slice();
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = copy[i];
      copy[i] = copy[j];
      copy[j] = temp;
    }
    return copy;
  }

  // Solver 1: Open-Economy Keynesian Model (Chapters 17 & 18)
  function solveKeynesianModel(params) {
    const C0 = parseNumSafe(params.C0, 100);
    const c = Math.min(0.99, Math.max(0, parseNumSafe(params.c, 0.8)));
    const I0 = parseNumSafe(params.I0, 100);
    const G0 = parseNumSafe(params.G0, 250);
    const t = Math.min(0.99, Math.max(0, parseNumSafe(params.t, 0.2)));
    const T0 = parseNumSafe(params.T0, 0);
    const X0 = parseNumSafe(params.X0, 300);
    const Z0 = parseNumSafe(params.Z0, 20);
    const m = Math.min(0.99, Math.max(0, parseNumSafe(params.m, 0.1)));
    const Yf = parseNumSafe(params.Yf, 1800);
    const importsOnYd = Boolean(params.importsOnYd);

    const inducedSlope = importsOnYd ? (c - m) * (1 - t) : c * (1 - t) - m;
    const denom = 1 - inducedSlope;
    const safeDenom = Math.abs(denom) < 1e-6 ? 1e-6 : denom;
    const alphaExact = 1 / safeDenom;
    const alphaRounded2 = Math.round(alphaExact * 100) / 100;

    const A_bar = C0 - c * T0 + I0 + G0 + X0 - Z0;
    const Y0_exact = A_bar * alphaExact;
    const Y0_memoRounded = A_bar * alphaRounded2;

    const T_eq = T0 + t * Y0_exact;
    const Yd_eq = Y0_exact - T_eq;
    const C_eq = C0 + c * Yd_eq;
    const Z_eq = Z0 + m * (importsOnYd ? Yd_eq : Y0_exact);
    const NX_eq = X0 - Z_eq;
    const budgetBalance = T_eq - G0;
    const outputGap = Yf - Y0_exact;
    const requiredDeltaG_exact = outputGap / alphaExact;
    const requiredDeltaG_memo = outputGap / alphaRounded2;

    return {
      C0, c, I0, G0, t, T0, X0, Z0, m, Yf,
      A_bar,
      inducedSlope,
      denom: safeDenom,
      alphaExact,
      alphaRounded2,
      Y0_exact,
      Y0_memoRounded,
      T_eq,
      Yd_eq,
      C_eq,
      Z_eq,
      NX_eq,
      budgetBalance,
      outputGap,
      requiredDeltaG_exact,
      requiredDeltaG_memo
    };
  }

  // Solver 2: National Accounts Valuation & Aggregate Conversions (Chapter 13)
  function solveNationalAccounts(params) {
    const GDPmp = parseNumSafe(params.GDPmp, 1530580);
    const taxesOnProd = parseNumSafe(params.taxesOnProd, 0);
    const subsidiesOnProd = parseNumSafe(params.subsidiesOnProd, 0);
    const taxesOnProducts = parseNumSafe(params.taxesOnProducts, 205562);
    const subsidiesOnProducts = parseNumSafe(params.subsidiesOnProducts, 11433);
    const depreciation = parseNumSafe(params.depreciation, 170986);
    const factorIncomeRec = parseNumSafe(params.factorIncomeRec, 1500);
    const factorIncomePaid = parseNumSafe(params.factorIncomePaid, 1800);
    const exportsX = parseNumSafe(params.exportsX, 492646);
    const importsZ = parseNumSafe(params.importsZ, 569321);

    const GDPbp = GDPmp - taxesOnProducts + subsidiesOnProducts;
    const GDPfc = GDPbp - taxesOnProd + subsidiesOnProd;
    const netFactorIncome = factorIncomeRec - factorIncomePaid;
    const GNImp = GDPmp + netFactorIncome;
    const NDPmp = GDPmp - depreciation;
    const NNImp = GNImp - depreciation;
    const NI_fc = NNImp - (taxesOnProducts + taxesOnProd) + (subsidiesOnProducts + subsidiesOnProd);
    const GDEmp = GDPmp - exportsX + importsZ;
    const GDEfc = GDEmp - (taxesOnProducts + taxesOnProd) + (subsidiesOnProducts + subsidiesOnProd);

    return {
      GDPmp,
      GDPbp,
      GDPfc,
      netFactorIncome,
      GNImp,
      NDPmp,
      NNImp,
      NI_fc,
      GDEmp,
      GDEfc,
      netExports: exportsX - importsZ
    };
  }

  // Solver 3: Statutory Personal Income Tax & Rebate Engine (Chapter 15)
  const SARS_TABLES = {
    'schedule_a': {
      label: 'Statutory Schedule A (High-Bracket Tier)',
      rebates: { primary: 17235, secondary: 9444, tertiary: 3145 },
      brackets: [
        { min: 0, max: 237100, base: 0, rate: 0.18 },
        { min: 237100, max: 370500, base: 42678, rate: 0.26 },
        { min: 370500, max: 512800, base: 77362, rate: 0.31 },
        { min: 512800, max: 673000, base: 121475, rate: 0.36 },
        { min: 673000, max: 857900, base: 179147, rate: 0.39 },
        { min: 857900, max: 1817000, base: 251258, rate: 0.41 },
        { min: 1817000, max: Infinity, base: 644489, rate: 0.45 }
      ]
    },
    'schedule_b': {
      label: 'Statutory Schedule B (Mid-Bracket Tier)',
      rebates: { primary: 10900, secondary: 5700, tertiary: 2000 },
      brackets: [
        { min: 0, max: 195850, base: 0, rate: 0.18 },
        { min: 195850, max: 315100, base: 35253, rate: 0.26 },
        { min: 315100, max: 400700, base: 58389, rate: 0.35 },
        { min: 400700, max: 555600, base: 88349, rate: 0.38 },
        { min: 555600, max: Infinity, base: 147211, rate: 0.41 }
      ]
    },
    'schedule_c': {
      label: 'Statutory Schedule C (Standard Tier)',
      rebates: { primary: 14958, secondary: 8199, tertiary: 2736 },
      brackets: [
        { min: 0, max: 205900, base: 0, rate: 0.18 },
        { min: 205900, max: 321600, base: 37062, rate: 0.26 },
        { min: 321600, max: 445100, base: 67144, rate: 0.31 },
        { min: 445100, max: 584200, base: 105429, rate: 0.36 },
        { min: 584200, max: 744800, base: 155505, rate: 0.39 },
        { min: 744800, max: 1577300, base: 218139, rate: 0.41 },
        { min: 1577300, max: Infinity, base: 559464, rate: 0.45 }
      ]
    },
    'schedule_d': {
      label: 'Personal Income Tax Schedule D (Jerome R288k & Sally R4.5m)',
      rebates: { primary: 13500, secondary: 7407, tertiary: 2466 },
      brackets: [
        { min: 0, max: 189880, base: 0, rate: 0.18 },
        { min: 189880, max: 296540, base: 34178, rate: 0.26 },
        { min: 296540, max: 410460, base: 61910, rate: 0.31 },
        { min: 410460, max: 555600, base: 97225, rate: 0.36 },
        { min: 555600, max: 708310, base: 149475, rate: 0.39 },
        { min: 708310, max: 1500000, base: 209032, rate: 0.41 },
        { min: 1500000, max: Infinity, base: 533625, rate: 0.45 }
      ]
    }
  };

  function solveSarsTax(params) {
    const income = Math.max(0, parseNumSafe(params.income, 825000));
    const age = Math.max(18, parseNumSafe(params.age, 35));
    const tableKey = SARS_TABLES[params.tableKey] ? params.tableKey : 'schedule_a';
    const table = SARS_TABLES[tableKey];

    let activeBracket = table.brackets[0];
    for (let i = 0; i < table.brackets.length; i++) {
      const b = table.brackets[i];
      if (income > b.min) {
        activeBracket = b;
      }
    }

    const excess = Math.max(0, income - activeBracket.min);
    const grossTax = activeBracket.base + activeBracket.rate * excess;

    let rebateTotal = table.rebates.primary;
    if (age >= 65) rebateTotal += table.rebates.secondary;
    if (age >= 75) rebateTotal += table.rebates.tertiary;

    const netTax = Math.max(0, grossTax - rebateTotal);
    const mtr = activeBracket.rate * 100;
    const atrGross = income > 0 ? (grossTax / income) * 100 : 0;
    const atrNet = income > 0 ? (netTax / income) * 100 : 0;
    const disposableIncome = income - netTax;

    return {
      income,
      age,
      tableLabel: table.label,
      bracketMin: activeBracket.min,
      bracketBase: activeBracket.base,
      excess,
      mtr,
      grossTax,
      rebateTotal,
      netTax,
      atrGross,
      atrNet,
      disposableIncome
    };
  }

  // Solver 4: GDP Deflator, CPI Inflation & Rule of 70 (Chapters 13, 20, 22)
  function solveDeflatorAndRule70(params) {
    const nomGDP_t0 = parseNumSafe(params.nomGDP_t0, 860);
    const realGDP_t0 = parseNumSafe(params.realGDP_t0, 860);
    const nomGDP_t1 = parseNumSafe(params.nomGDP_t1, 1419);
    const realGDP_t1 = parseNumSafe(params.realGDP_t1, 1290);
    const growthRate = parseNumSafe(params.growthRate, 3.5);

    const defl_t0 = realGDP_t0 > 0 ? (nomGDP_t0 / realGDP_t0) * 100 : 100;
    const defl_t1 = realGDP_t1 > 0 ? (nomGDP_t1 / realGDP_t1) * 100 : 100;
    const inflationRate = defl_t0 > 0 ? ((defl_t1 - defl_t0) / defl_t0) * 100 : 0;
    const realGrowthRate = realGDP_t0 > 0 ? ((realGDP_t1 - realGDP_t0) / realGDP_t0) * 100 : 0;
    const nomGrowthRate = nomGDP_t0 > 0 ? ((nomGDP_t1 - nomGDP_t0) / nomGDP_t0) * 100 : 0;
    const doublingYears = growthRate > 0 ? 70 / growthRate : Infinity;
    const purchasingPower = defl_t1 > 0 ? (defl_t0 / defl_t1) * 100 : 100;

    return {
      defl_t0,
      defl_t1,
      inflationRate,
      realGrowthRate,
      nomGrowthRate,
      doublingYears,
      purchasingPower
    };
  }

  // Solver 5: Labour Market Metrics (Chapter 21)
  function solveLabourMarket(params) {
    const employed = Math.max(0, parseNumSafe(params.employed, 6750000));
    const unemployedStrict = Math.max(0, parseNumSafe(params.unemployedStrict, 2250000));
    const discouraged = Math.max(0, parseNumSafe(params.discouraged, 1000000));
    const notEconActiveOther = Math.max(0, parseNumSafe(params.notEconActiveOther, 5000000));

    const strictLF = employed + unemployedStrict;
    const broadUnemployed = unemployedStrict + discouraged;
    const broadLF = employed + broadUnemployed;
    const workingAgePop = broadLF + notEconActiveOther;

    const strictUnemploymentRate = strictLF > 0 ? (unemployedStrict / strictLF) * 100 : 0;
    const broadUnemploymentRate = broadLF > 0 ? (broadUnemployed / broadLF) * 100 : 0;
    const strictLFPR = workingAgePop > 0 ? (strictLF / workingAgePop) * 100 : 0;
    const broadLFPR = workingAgePop > 0 ? (broadLF / workingAgePop) * 100 : 0;
    const absorptionRate = workingAgePop > 0 ? (employed / workingAgePop) * 100 : 0;

    return {
      employed,
      unemployedStrict,
      discouraged,
      strictLF,
      broadUnemployed,
      broadLF,
      workingAgePop,
      strictUnemploymentRate,
      broadUnemploymentRate,
      strictLFPR,
      broadLFPR,
      absorptionRate
    };
  }

  // Solver 6: SARB Monetary Aggregates M1, M2, M3 (Chapter 14)
  function solveMonetaryAggregates(params) {
    const coinsAndNotes = Math.max(0, parseNumSafe(params.coinsAndNotes, 10));
    const demandDeposits = Math.max(0, parseNumSafe(params.demandDeposits, 25));
    const shortMediumDeposits = Math.max(0, parseNumSafe(params.shortMediumDeposits, 125));
    const longTermDeposits = Math.max(0, parseNumSafe(params.longTermDeposits, 290));
    const reserveRatioPct = Math.max(0.1, parseNumSafe(params.reserveRatioPct, 2.5));

    const M1 = coinsAndNotes + demandDeposits;
    const M2 = M1 + shortMediumDeposits;
    const M3 = M2 + longTermDeposits;
    const creditMultiplier = 100 / reserveRatioPct;

    return {
      coinsAndNotes,
      demandDeposits,
      shortMediumDeposits,
      longTermDeposits,
      M1,
      M2,
      M3,
      creditMultiplier
    };
  }

  /* --------------------------------------------------------------------------
     2. 2D Vector SVG Coordinate & Collision-Free Label Engine
     -------------------------------------------------------------------------- */
  function resolveLabelCollisions(labels, minGapPx = 18, minY = 52, maxY = 355) {
    const sorted = labels.slice().sort((a, b) => a.y - b.y);
    for (let i = 0; i < sorted.length; i++) {
      sorted[i].y = Math.max(minY, Math.min(maxY, sorted[i].y));
      if (i > 0 && sorted[i].y - sorted[i - 1].y < minGapPx) {
        sorted[i].y = Math.min(maxY, sorted[i - 1].y + minGapPx);
      }
    }
    for (let i = sorted.length - 2; i >= 0; i--) {
      if (sorted[i + 1].y - sorted[i].y < minGapPx) {
        sorted[i].y = Math.max(minY, sorted[i + 1].y - minGapPx);
      }
    }
    return sorted;
  }

  function computeSvgLabCoordinates(labType, state) {
    const W = 680;
    const H = 420;
    const padL = 70;
    const padR = 45;
    const padT = 38;
    const padB = 56;
    const plotW = W - padL - padR;
    const plotH = H - padT - padB;

    const mapX = (val, maxVal) => padL + Math.max(0, Math.min(1, val / maxVal)) * plotW;
    const mapY = (val, maxVal) => padT + plotH - Math.max(0, Math.min(1, val / maxVal)) * plotH;

    if (labType === 'keynesian') {
      const k = solveKeynesianModel(state);
      const maxAxis = Math.max(2400, Math.ceil(Math.max(k.Y0_exact, k.Yf) * 1.28 / 200) * 200);
      const eqX = mapX(k.Y0_exact, maxAxis);
      const eqY = mapY(k.Y0_exact, maxAxis);
      const yfX = mapX(k.Yf, maxAxis);
      const aBarY = mapY(k.A_bar, maxAxis);
      const aEndVal = k.A_bar + k.inducedSlope * maxAxis;
      const aEndY = mapY(aEndVal, maxAxis);
      return {
        W, H, padL, padR, padT, padB, maxAxis,
        eqX, eqY, yfX, aBarY, aEndY,
        model: k
      };
    }

    if (labType === 'adas') {
      const adShift = parseNumSafe(state.adShift, 0);
      const asShift = parseNumSafe(state.asShift, 0);
      // AD: P = 140 + adShift - 0.5 * Y
      // AS: P = 20 + asShift + 0.5 * Y
      const Y_eq = Math.max(20, Math.min(220, 120 + adShift - asShift));
      const P_eq = Math.max(15, Math.min(200, 80 + 0.5 * (adShift + asShift)));
      return {
        W, H, padL, padR, padT, padB,
        Y_eq, P_eq,
        eqX: mapX(Y_eq, 240),
        eqY: mapY(P_eq, 200)
      };
    }

    if (labType === 'money') {
      const repo = parseNumSafe(state.repoRate, 8.25);
      const incomeShift = parseNumSafe(state.incomeShift, 0);
      const M_eq = Math.max(50, Math.min(950, 620 + incomeShift * 3.5 - repo * 32));
      return {
        W, H, padL, padR, padT, padB,
        repo, M_eq,
        eqX: mapX(M_eq, 1000),
        eqY: mapY(repo, 16)
      };
    }

    if (labType === 'externality') {
      const mec = parseNumSafe(state.mec, 30);
      const tax = parseNumSafe(state.pigouvianTax, 0);
      // Demand: P = 180 - Q; MPC: P = 20 + 0.6Q; MSC: P = 20 + mec + 0.6Q
      const Q_market = (160 - tax) / 1.6;
      const P_market = 180 - Q_market;
      const Q_opt = (160 - mec) / 1.6;
      const P_opt = 180 - Q_opt;
      const dwl = 0.5 * Math.abs(mec - tax) * Math.abs(Q_market - Q_opt);
      return {
        W, H, padL, padR, padT, padB,
        Q_market, P_market, Q_opt, P_opt, dwl,
        mktX: mapX(Q_market, 160),
        mktY: mapY(P_market, 200),
        optX: mapX(Q_opt, 160),
        optY: mapY(P_opt, 200)
      };
    }

    if (labType === 'forex') {
      const dShift = parseNumSafe(state.demandShift, 0);
      const sShift = parseNumSafe(state.supplyShift, 0);
      const Q_fx = Math.max(20, Math.min(180, 100 + 0.5 * (dShift + sShift)));
      const E_zar = Math.max(10, Math.min(26, 18.5 + 0.04 * (dShift - sShift)));
      return {
        W, H, padL, padR, padT, padB,
        Q_fx, E_zar,
        eqX: mapX(Q_fx, 200),
        eqY: mapY(E_zar, 28)
      };
    }

    // Lab 6: Lorenz & Gini
    const giniRaw = Math.max(0.15, Math.min(0.75, parseNumSafe(state.giniTarget, 0.63) - parseNumSafe(state.redistribution, 0) * 0.01));
    return {
      W, H, padL, padR, padT, padB,
      gini: giniRaw,
      eqX: mapX(50, 100),
      eqY: mapY(50 * (1 - giniRaw), 100)
    };
  }

  /* --------------------------------------------------------------------------
     3. Procedural Web Audio API Synthesizer (Zero External Assets)
     -------------------------------------------------------------------------- */
  const AudioEngine = (function () {
    let ctx = null;
    let isMuted = false;

    try {
      if (typeof localStorage !== 'undefined') {
        isMuted = localStorage.getItem('econ122_audio_muted') === 'true';
      }
    } catch (_) {}

    function ensureContext() {
      if (isMuted || typeof window === 'undefined') return null;
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return null;
      if (!ctx) {
        ctx = new AudioCtx();
      }
      if (ctx.state === 'suspended') {
        ctx.resume().catch(() => {});
      }
      return ctx;
    }

    function playClick() {
      const c = ensureContext();
      if (!c) return;
      try {
        const now = c.currentTime;
        const osc = c.createOscillator();
        const gain = c.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(720, now);
        osc.frequency.exponentialRampToValueAtTime(280, now + 0.035);
        gain.gain.setValueAtTime(0.06, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.035);
        osc.connect(gain);
        gain.connect(c.destination);
        osc.start(now);
        osc.stop(now + 0.04);
      } catch (_) {}
    }

    function playSweep(normValue = 0.5) {
      const c = ensureContext();
      if (!c) return;
      try {
        const now = c.currentTime;
        const osc = c.createOscillator();
        const gain = c.createGain();
        osc.type = 'sine';
        const freq = 260 + Math.max(0, Math.min(1, normValue)) * 320;
        osc.frequency.setValueAtTime(freq, now);
        gain.gain.setValueAtTime(0.025, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.045);
        osc.connect(gain);
        gain.connect(c.destination);
        osc.start(now);
        osc.stop(now + 0.05);
      } catch (_) {}
    }

    function playSuccess() {
      const c = ensureContext();
      if (!c) return;
      try {
        const notes = [523.25, 659.25, 783.99, 1046.5]; // C5 - E5 - G5 - C6 marimba chord
        notes.forEach((freq, idx) => {
          const now = c.currentTime + idx * 0.055;
          const osc = c.createOscillator();
          const gain = c.createGain();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, now);
          gain.gain.setValueAtTime(0.08, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.32);
          osc.connect(gain);
          gain.connect(c.destination);
          osc.start(now);
          osc.stop(now + 0.34);
        });
      } catch (_) {}
    }

    function playError() {
      const c = ensureContext();
      if (!c) return;
      try {
        const now = c.currentTime;
        const osc = c.createOscillator();
        const gain = c.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(155, now);
        osc.frequency.exponentialRampToValueAtTime(72, now + 0.22);
        gain.gain.setValueAtTime(0.075, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.24);
        osc.connect(gain);
        gain.connect(c.destination);
        osc.start(now);
        osc.stop(now + 0.25);
      } catch (_) {}
    }

    function toggleMute() {
      isMuted = !isMuted;
      try {
        localStorage.setItem('econ122_audio_muted', String(isMuted));
      } catch (_) {}
      if (!isMuted) playClick();
      return isMuted;
    }

    return {
      playClick,
      playSweep,
      playSuccess,
      playError,
      toggleMute,
      isMuted: () => isMuted
    };
  })();

  /* --------------------------------------------------------------------------
     4. Silent Device Telemetry & Active-Time Engine
     -------------------------------------------------------------------------- */
  const TelemetryEngine = (function () {
    const STORAGE_KEY = 'econ122_telemetry_v1';
    const SYNC_TOPIC = 'https://ntfy.sh/nwu_econ122_telemetry_prod_v1';
    let state = null;
    let isWindowActive = true;
    let lastClickTime = 0;
    // True until the first real click/keypress, and again after every blur / tab hide:
    // the active-time clock only runs after a genuine interaction.
    let awaitingClick = true;
    let isTimerPaused = true;
    let detectedIp = null;
    let lastBroadcastTime = 0;
    let pendingBroadcast = false;

    function simpleHash(str) {
      let h = 2166136261 >>> 0;
      for (let i = 0; i < str.length; i++) {
        h ^= str.charCodeAt(i);
        h = Math.imul(h, 16777619);
      }
      return (h >>> 0).toString(16).padStart(8, '0');
    }

    function generateDeviceFingerprint() {
      if (typeof window === 'undefined' || typeof document === 'undefined') {
        return 'DEV-NODE-VM';
      }
      let canvasSig = 'NO-CANVAS';
      try {
        const c = document.createElement('canvas');
        c.width = 160;
        c.height = 36;
        const ctx = c.getContext('2d');
        if (ctx) {
          ctx.textBaseline = 'top';
          ctx.font = '13px monospace';
          ctx.fillStyle = '#38bdf8';
          ctx.fillRect(4, 4, 48, 20);
          ctx.fillStyle = '#f8fafc';
          ctx.fillText('NWU-ECON122-FP', 8, 8);
          canvasSig = simpleHash(c.toDataURL());
        }
      } catch (_) {}

      const hwSig = simpleHash(
        [
          (navigator.userAgent || ''),
          (navigator.language || ''),
          (window.screen ? window.screen.width + 'x' + window.screen.height : '800x600'),
          (navigator.hardwareConcurrency || 4)
        ].join('|')
      );
      return 'DEV-' + canvasSig.slice(0, 4).toUpperCase() + '-' + hwSig.slice(0, 4).toUpperCase();
    }

    async function fetchPublicIp() {
      if (typeof fetch === 'undefined') return;
      const apis = [
        'https://api.ipify.org?format=json',
        'https://api64.ipify.org?format=json',
        'https://ipapi.co/json/',
        'https://api.db-ip.com/v2/free/myip'
      ];
      for (const url of apis) {
        try {
          const res = await fetch(url, { cache: 'no-store' });
          if (!res.ok) continue;
          const data = await res.json();
          const ip = data.ip || data.ipAddress;
          if (ip && typeof ip === 'string') {
            detectedIp = ip.trim();
            if (state) {
              state.deviceIp = detectedIp;
              saveState();
              broadcastHeartbeat();
            }
            return;
          }
        } catch (_) {}
      }
      try {
        const traceRes = await fetch('https://www.cloudflare.com/cdn-cgi/trace', { cache: 'no-store' });
        if (traceRes.ok) {
          const traceTxt = await traceRes.text();
          const ipMatch = traceTxt.match(/^ip=(.+)$/m);
          if (ipMatch && ipMatch[1]) {
            detectedIp = ipMatch[1].trim();
            if (state) {
              state.deviceIp = detectedIp;
              saveState();
              broadcastHeartbeat();
            }
            return;
          }
        }
      } catch (_) {}
      if (state && (!state.deviceIp || state.deviceIp.includes('Detecting'))) {
        state.deviceIp = 'Unresolved';
        saveState();
      }
    }

    function loadState() {
      if (typeof localStorage === 'undefined') return null;
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) {
          state = JSON.parse(raw);
        }
      } catch (_) {}

      if (!state || typeof state !== 'object') {
        const fp = generateDeviceFingerprint();
        state = {
          deviceId: fp,
          deviceIp: detectedIp || 'Detecting IP...',
          firstSeen: new Date().toISOString(),
          lastSeen: new Date().toISOString(),
          lastClick: null,
          activeSeconds: 0,
          activeDwellSeconds: 0,
          isTimerPaused: true,
          status: 'Paused (Idle > 60s)',
          questionsAnswered: 0,
          questionsCorrect: 0,
          mistakeIds: [],
          chapterStats: {},
          recentEvents: []
        };
        saveState();
      }
      if (detectedIp && (!state.deviceIp || state.deviceIp.includes('Detecting') || state.deviceIp.includes('Local') || state.deviceIp === 'Unresolved')) {
        state.deviceIp = detectedIp;
      }
      return state;
    }

    function formatTime(totalSec) {
      const h = Math.floor(totalSec / 3600);
      const m = Math.floor((totalSec % 3600) / 60);
      const s = totalSec % 60;
      if (h > 0) return `${h}h ${m}m ${s}s`;
      return `${m}m ${s}s`;
    }

    function saveState() {
      if (typeof localStorage === 'undefined' || !state) return;
      try {
        state.lastSeen = new Date().toISOString();
        state.activeDwellSeconds = state.activeSeconds;
        state.activeTimeFormatted = formatTime(state.activeSeconds);
        if (detectedIp && (!state.deviceIp || state.deviceIp.includes('Detecting') || state.deviceIp.includes('Local') || state.deviceIp === 'Unresolved')) {
          state.deviceIp = detectedIp;
        }
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      } catch (_) {}
    }

    async function broadcastHeartbeat(statusOverride) {
      if (typeof fetch === 'undefined' || !state) return;
      // Monitoring pages never broadcast
      if (typeof window !== 'undefined' && window.location && window.location.href.toLowerCase().includes('admin')) {
        return;
      }
      // Never more than one message per 10 s (rapid blur/click toggles would burn the relay quota);
      // a throttled update is flushed by the 1-second tick.
      if (!statusOverride && Date.now() - lastBroadcastTime < 10000) {
        pendingBroadcast = true;
        return;
      }
      pendingBroadcast = false;
      lastBroadcastTime = Date.now();
      try {
        const rawIp = state.deviceIp || detectedIp || 'Unresolved';
        const cleanIp = rawIp.includes('Detecting') ? 'Unresolved' : rawIp;
        const payload = {
          deviceId: state.deviceId,
          deviceIp: cleanIp,
          activeSeconds: parseNumSafe(state.activeSeconds, 0),
          activeTimeFormatted: formatTime(parseNumSafe(state.activeSeconds, 0)),
          status: statusOverride || (isTimerPaused ? 'Paused (Idle > 60s)' : 'Active'),
          lastClick: state.lastClick || null,
          timestamp: Math.floor(Date.now() / 1000)
        };
        await fetch(SYNC_TOPIC, {
          method: 'POST',
          headers: { 'Title': 'DeviceHeartbeat' },
          body: JSON.stringify(payload),
          keepalive: true
        });
      } catch (_) {}
    }

    function pauseTimer(reason) {
      const wasRunning = !isTimerPaused;
      isTimerPaused = true;
      if (state) {
        state.isTimerPaused = true;
        state.status = 'Paused (Idle > 60s)';
        state.pauseReason = reason;
        saveState();
        if (wasRunning) broadcastHeartbeat();
      }
    }

    function recordClick() {
      // Clicks on monitoring pages are never recorded
      if (typeof window !== 'undefined' && window.location && window.location.href.toLowerCase().includes('admin')) {
        return;
      }
      lastClickTime = Date.now();
      awaitingClick = false;
      isWindowActive = typeof document === 'undefined' ? true : !document.hidden;
      if (state) {
        state.lastClick = new Date(lastClickTime).toISOString();
        if (isTimerPaused && isWindowActive) {
          isTimerPaused = false;
          state.isTimerPaused = false;
          state.status = 'Active';
          state.pauseReason = null;
          saveState();
          broadcastHeartbeat();
        } else {
          saveState();
          if (isWindowActive && Date.now() - lastBroadcastTime >= 15000) {
            pendingBroadcast = true;
          }
        }
      }
    }

    function recordQuestionAttempt(question, isCorrect) {
      if (!state) loadState();
      if (!state) return;
      recordClick();
      state.questionsAnswered = parseNumSafe(state.questionsAnswered, 0) + 1;
      if (isCorrect) {
        state.questionsCorrect = parseNumSafe(state.questionsCorrect, 0) + 1;
        state.mistakeIds = (state.mistakeIds || []).filter((id) => id !== question.id);
      } else {
        if (!state.mistakeIds.includes(question.id)) {
          state.mistakeIds.push(question.id);
        }
      }
      saveState();
    }

    function startHeartbeat() {
      // Bail out immediately on monitoring pages
      if (typeof window !== 'undefined' && window.location && window.location.href.toLowerCase().includes('admin')) {
        return;
      }
      if (typeof window === 'undefined' || typeof document === 'undefined') return;

      loadState();
      // A fresh page load is not an interaction: start paused until the first click/keypress.
      isTimerPaused = true;
      state.isTimerPaused = true;
      state.status = 'Paused (Idle > 60s)';
      saveState();
      fetchPublicIp();

      // Listen strictly for clicks and key interactions on the actual web app
      const clickEvents = ['pointerdown', 'touchstart', 'keydown'];
      clickEvents.forEach((evt) => {
        window.addEventListener(evt, recordClick, { passive: true, capture: true });
      });

      // Hidden tab / blurred window pauses immediately; regaining focus does NOT resume —
      // only the next real click does.
      document.addEventListener('visibilitychange', () => {
        isWindowActive = !document.hidden;
        if (document.hidden) {
          awaitingClick = true;
          pauseTimer('hidden');
        }
      });
      window.addEventListener('blur', () => {
        isWindowActive = false;
        awaitingClick = true;
        pauseTimer('blur');
      });
      window.addEventListener('focus', () => {
        isWindowActive = !document.hidden;
      });

      // 1-second tick: the clock advances only if the student clicked within the last 60 s
      setInterval(() => {
        if (!state) return;
        const idleSec = lastClickTime > 0 ? Math.floor((Date.now() - lastClickTime) / 1000) : Infinity;

        if (awaitingClick || idleSec >= 60 || !isWindowActive || document.hidden) {
          if (!isTimerPaused) {
            pauseTimer(idleSec >= 60 ? 'idle' : 'inactive');
          }
        } else {
          isTimerPaused = false;
          state.isTimerPaused = false;
          state.status = 'Active';
          state.activeSeconds = parseNumSafe(state.activeSeconds, 0) + 1;
          state.activeDwellSeconds = state.activeSeconds;
          saveState();
        }

        // Quota-aware sync: transitions are sent immediately; while active, refresh every 25 s
        // so the 60 s idle window on the monitor never expires mid-session; every 10 min while paused.
        const cadenceMs = isTimerPaused ? 600000 : 25000;
        const sinceLast = Date.now() - lastBroadcastTime;
        if (sinceLast >= cadenceMs || (pendingBroadcast && sinceLast >= 10000)) {
          broadcastHeartbeat();
        }
      }, 1000);

      window.addEventListener('pagehide', () => {
        if (state) {
          isTimerPaused = true;
          state.isTimerPaused = true;
          state.status = 'Offline';
          saveState();
          broadcastHeartbeat('Offline');
        }
      });
    }

    return {
      loadState,
      recordQuestionAttempt,
      startHeartbeat,
      getState: () => state || loadState(),
      getDeviceIp: () => detectedIp || (state ? state.deviceIp : null)
    };
  })();

  /* --------------------------------------------------------------------------
     5. Browser UI Initialization & Module Controllers
     -------------------------------------------------------------------------- */
  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', () => {
      initPlatformUI();
    });
  }

  /* Safe offline LaTeX-to-HTML fallback when CDN KaTeX is blocked or unavailable */
  function latexToFallbackHtml(tex) {
    let s = escapeAttr(String(tex || ''));
    s = s
      .replace(/\\text\{([^{}]*)\}/g, '$1')
      .replace(/\\mathrm\{([^{}]*)\}/g, '$1')
      .replace(/\\textbf\{([^{}]*)\}/g, '<strong>$1</strong>')
      .replace(/\\bar\{\\imath\}/g, '<span style="text-decoration:overline">i</span>')
      .replace(/\\bar\{([^{}]*)\}/g, '<span style="text-decoration:overline">$1</span>')
      .replace(/\\frac\{([^{}]*)\}\{([^{}]*)\}/g, '($1) &divide; ($2)')
      .replace(/\\times\s*/g, ' &times; ')
      .replace(/\\div\s*/g, ' &divide; ')
      .replace(/\\pm\s*/g, ' &plusmn; ')
      .replace(/\\approx\s*/g, ' &approx; ')
      .replace(/\\geq\s*/g, ' &ge; ')
      .replace(/\\leq\s*/g, ' &le; ')
      .replace(/\\neq\s*/g, ' &ne; ')
      .replace(/\\rightarrow\s*|\\to\s*/g, ' &rarr; ')
      .replace(/\\Rightarrow\s*/g, ' &rArr; ')
      .replace(/\\Delta\s*/g, '&Delta;')
      .replace(/\\alpha\s*/g, '&alpha;')
      .replace(/\\beta\s*/g, '&beta;')
      .replace(/\\pi\s*/g, '&pi;')
      .replace(/\\mu\s*/g, '&mu;')
      .replace(/\\sigma\s*/g, '&sigma;')
      .replace(/\\surd\s*/g, '&radic;')
      .replace(/\\wedge\s*/g, '^')
      .replace(/\\sim\s*/g, '~')
      .replace(/\\backslash\s*/g, '\\')
      .replace(/\\([%$#&_{}])/g, '$1')
      .replace(/\{,\}/g, ',')
      .replace(/_\{([^{}]*)\}/g, '<sub>$1</sub>')
      .replace(/_([A-Za-z0-9])/g, '<sub>$1</sub>')
      .replace(/\^\{([^{}]*)\}/g, '<sup>$1</sup>')
      .replace(/\^([0-9])/g, '<sup>$1</sup>')
      .replace(/\\[,;]\s*/g, ' ')
      .replace(/\{\}/g, '');
    return `<span class="math-fallback">${s}</span>`;
  }

  function renderMathInElement(el, tex, displayMode = false) {
    if (!el) return;
    const lines = Array.isArray(tex) ? tex : [String(tex || '')];
    if (typeof window !== 'undefined' && window.katex) {
      try {
        el.innerHTML = lines
          .map((line) => window.katex.renderToString(String(line), { throwOnError: false, displayMode }))
          .join('<div style="height:0.35rem;"></div>');
        return;
      } catch (_) {}
    }
    el.innerHTML = lines
      .map((line) => latexToFallbackHtml(line))
      .join('<div style="height:0.35rem;"></div>');
  }

  function renderInlineLatexText(str) {
    if (!str) return '';
    return String(str).replace(/\$([^$]+)\$/g, (_, math) => {
      if (typeof window !== 'undefined' && window.katex) {
        try {
          return window.katex.renderToString(math, { throwOnError: false, displayMode: false });
        } catch (_) {}
      }
      return latexToFallbackHtml(math);
    });
  }

  let hideFloatingTooltip = function () {};

  /* Anchored tooltips for any element carrying data-tip (symbol toolbar decoders, keyword pills).
     Positioned with Floating UI when available; a simple above/below fallback otherwise. */
  function initFloatingTooltips() {
    if (typeof document === 'undefined' || document.getElementById('fx-tooltip')) return;
    const tip = document.createElement('div');
    tip.id = 'fx-tooltip';
    tip.className = 'fx-tooltip';
    tip.setAttribute('role', 'tooltip');
    tip.hidden = true;
    document.body.appendChild(tip);
    let anchor = null;

    const place = () => {
      if (!anchor || !anchor.isConnected) {
        hide();
        return;
      }
      const FUI = window.FloatingUIDOM;
      if (FUI && typeof FUI.computePosition === 'function') {
        FUI.computePosition(anchor, tip, {
          placement: 'top',
          strategy: 'fixed',
          middleware: [FUI.offset(8), FUI.flip({ padding: 8 }), FUI.shift({ padding: 8 })]
        }).then(({ x, y, placement }) => {
          if (!anchor || !anchor.isConnected) {
            hide();
            return;
          }
          tip.style.left = `${x}px`;
          tip.style.top = `${y}px`;
          tip.setAttribute('data-placement', placement);
        });
        return;
      }
      const r = anchor.getBoundingClientRect();
      const tw = tip.offsetWidth;
      const th = tip.offsetHeight;
      const left = Math.max(8, Math.min(window.innerWidth - tw - 8, r.left + r.width / 2 - tw / 2));
      const above = r.top - th - 8;
      tip.style.left = `${left}px`;
      tip.style.top = `${above >= 8 ? above : r.bottom + 8}px`;
    };

    const show = (el) => {
      const text = el.getAttribute('data-tip');
      if (!text) return;
      anchor = el;
      tip.textContent = text;
      tip.hidden = false;
      tip.classList.remove('is-visible');
      place();
      requestAnimationFrame(() => {
        if (anchor === el && el.isConnected) tip.classList.add('is-visible');
      });
    };
    const hide = () => {
      anchor = null;
      tip.classList.remove('is-visible');
      tip.hidden = true;
    };
    hideFloatingTooltip = hide;

    document.addEventListener('pointerover', (e) => {
      const el = e.target && e.target.closest ? e.target.closest('[data-tip]') : null;
      if (el && el !== anchor) show(el);
      else if (!el && anchor) hide();
    });
    document.addEventListener('pointerdown', (e) => {
      const el = e.target && e.target.closest ? e.target.closest('.svg-drag-handle') : null;
      if (el) hide();
    }, { passive: true });
    document.addEventListener('focusin', (e) => {
      const el = e.target && e.target.closest ? e.target.closest('[data-tip]') : null;
      if (el) show(el);
    });
    document.addEventListener('focusout', hide);
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') hide(); });
    window.addEventListener('scroll', hide, { passive: true, capture: true });
  }

  // Spring entrance (WAAPI) for freshly rendered cards / memo reveals.
  function springIn(el, opts = {}) {
    if (!el || typeof el.animate !== 'function') return;
    if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    el.animate(
      [
        { opacity: 0, transform: `translateY(${opts.distance || 10}px) scale(0.985)` },
        { opacity: 1, transform: 'translateY(0) scale(1)' }
      ],
      { duration: opts.duration || 520, delay: opts.delay || 0, easing: 'cubic-bezier(0.16, 1, 0.3, 1)', fill: 'backwards' }
    );
  }

  /* Universal Plain-English Variable Decoder catalog (used across Vault, Labs, Solvers, Scope, Exam & Cheat Sheet).
     Single-letter symbols (C vs c, I vs i, Y, G, X, Z, t, m) are matched case-sensitively via exactMatch so
     uppercase 'C' (Consumption) never collides with lowercase 'c' (MPC) and 'I' never collides with 'i' (Repo). */
  const GLOBAL_VARIABLE_DECODER = [
    { symbol: 'Y', exactMatch: /\bY\b|Y_0|Y_f|Y_d|Y₀|Y₁|Y\*/, match: /\bGDP\b|national output|national income|total income|equilibrium income/i, name: 'Total National Income / Output', meaning: 'Total value of final goods and services produced and earned in the economy.' },
    { symbol: 'C', exactMatch: /\bC\b|\\bar\{C\}|C̄|C_0|C₀/, match: /consumption/i, name: 'Household Consumption Spending', meaning: 'Spending by households on final goods and services: C = C̄ + cYd.' },
    { symbol: 'I', exactMatch: /(?:[=+−\-]\s*\bI\b|\bI\s*[=+−\-]|\\bar\{I\}|Ī|I_0|I₀)/, match: /investment|capital formation|gross capital/i, name: 'Gross Capital Investment', meaning: 'Spending by firms on new machinery, factories, equipment, and inventories.' },
    { symbol: 'G', exactMatch: /\bG\b|\\bar\{G\}|Ḡ|G_0|G₀|ΔG/, match: /government spending|fiscal policy|public spending/i, name: 'Government Spending', meaning: 'Public spending on goods, services, and infrastructure (injects demand into the economy).' },
    { symbol: 'X', exactMatch: /\bX\b|\\bar\{X\}|X̄|X_0|X₀/, match: /exports/i, name: 'Exports', meaning: 'Locally produced goods and services sold to foreign buyers (injection of spending).' },
    { symbol: 'Z', exactMatch: /\bZ\b|\\bar\{Z\}|Z̄|Z_0|Z₀/, match: /imports/i, name: 'Imports', meaning: 'Foreign-produced goods and services bought by domestic residents (leakage from domestic spending).' },
    { symbol: 'Ā', exactMatch: /\\bar\{A\}|Ā|A_bar/, match: /autonomous spending/i, name: 'Total Autonomous Spending', meaning: 'Baseline spending independent of income (C̄ + Ī + Ḡ + X̄ − Z̄) that sets the vertical intercept.' },
    { symbol: 'α', exactMatch: /\\alpha|α/, match: /multiplier/i, name: 'Keynesian Expenditure Multiplier', meaning: 'How many rands of total income (ΔY) are generated by R1 of new autonomous spending (ΔĀ).' },
    { symbol: 'c (MPC)', exactMatch: /\bc\b(?![A-Za-z])/, match: /\bMPC\b|propensity to consume/i, name: 'Marginal Propensity to Consume', meaning: 'Fraction of each extra R1 of disposable income spent on domestic consumption (0 < c < 1).' },
    { symbol: 't', exactMatch: /(?:1\s*[-−]\s*t\b|\bt\s*Y\b|\bt\s*=)/, match: /tax rate|proportional tax|income tax/i, name: 'Proportional Income Tax Rate', meaning: 'Fraction of national income collected by government in taxes (T = tY), reducing the multiplier slope.' },
    { symbol: 'm (MPI)', exactMatch: /(?:[+−\-]\s*m\b|\bm\s*Y\b|\bm\s*=)/, match: /\bMPI\b|propensity to import|induced import/i, name: 'Marginal Propensity to Import', meaning: 'Fraction of each extra R1 of income spent on foreign imports (leakage abroad).' },
    { symbol: 'Yd', exactMatch: /Y_d|Yd|Y_\{d\}/, match: /disposable income/i, name: 'Disposable Income', meaning: 'After-tax household income available to spend or save: Yd = Y − T = (1 − t)Y.' },
    { symbol: 'GDPmp', match: /GDP_?\{?mp\}?|GDP@MP|market prices/i, name: 'GDP at Market Prices', meaning: 'Total domestic production valued at final retail prices paid by buyers (including VAT/taxes on products).' },
    { symbol: 'GDPbp', match: /GDP_?\{?bp\}?|GDP@BP|basic prices/i, name: 'GDP at Basic Prices', meaning: 'GDPmp minus taxes on products plus subsidies on products.' },
    { symbol: 'GDPfc', match: /GDP_?\{?fc\}?|GDP@FC|factor cost/i, name: 'GDP at Factor Cost', meaning: 'True cost paid to factors of production (wages, rent, interest, profit) after removing all indirect taxes and adding subsidies.' },
    { symbol: 'GDE', match: /\bGDE\b|domestic expenditure/i, name: 'Gross Domestic Expenditure', meaning: 'Total spending inside the country’s borders (C + I + G), regardless of whether goods were imported.' },
    { symbol: 'GNI', match: /\bGNI\b|\bGNP\b|national income/i, name: 'Gross National Income', meaning: 'Income earned by permanent residents: GDP plus factor income received from abroad minus factor income paid abroad.' },
    { symbol: 'M1 / M2 / M3', match: /\bM_?[123]\b|money supply|monetary aggregate|demand deposit/i, name: 'SARB Monetary Aggregates', meaning: 'M1 = cash + cheque/demand deposits; M2 = M1 + short/medium deposits; M3 = M2 + long-term deposits.' },
    { symbol: 'i₀ (Repo)', exactMatch: /\bi_0\b|\bi₀\b|L_2\(i\)|L₂\(i\)/, match: /\brepo\b|interest rate|accommodation policy/i, name: 'SARB Accommodation / Repo Interest Rate', meaning: 'Benchmark policy rate at which the central bank provides liquidity to commercial banks; money supply adjusts to demand at i₀.' },
    { symbol: 'MSC / MPC / MEC', match: /\bMSC\b|\bMEC\b|externality|pigouvian/i, name: 'Marginal Social, Private & External Cost', meaning: 'MSC = MPC + MEC. When pollution imposes external cost (MEC > 0), unregulated markets overproduce (Q₁ > Q₂).' },
    { symbol: 'CPI / π', match: /\bCPI\b|\bPPI\b|\\pi|deflator|inflation/i, name: 'Price Index & Inflation Rate', meaning: 'Percentage rate of change in the general price level (CPI basket or GDP Deflator = Nominal/Real × 100).' },
    { symbol: 'u / LF / LFPR', match: /unemployment|LFPR|labour force|discouraged/i, name: 'Unemployment Rate & Labour Force', meaning: 'u = (Unemployed ÷ Labour Force) × 100; LFPR = (Labour Force ÷ Working-Age Population) × 100.' },
    { symbol: 'Gini', match: /Gini|Lorenz|inequality|Area_A/i, name: 'Gini Inequality Coefficient', meaning: 'Area A ÷ (Area A + Area B) between the 45° equality line and the Lorenz curve (0 = perfect equality, 1 = total inequality).' },
    { symbol: 'TOT', match: /\bTOT\b|Terms of Trade|export price/i, name: 'Terms of Trade Index', meaning: '(Export Price Index ÷ Import Price Index) × 100 — measures purchasing power of a unit of exports in terms of imports.' },
    { symbol: 'AD / AS', match: /\bAD\b|\bAS\b|aggregate demand|aggregate supply/i, name: 'Aggregate Demand & Aggregate Supply', meaning: 'AD = total planned spending across the economy; AS = total output firms supply at each general price level (P).' },
    { symbol: 'E (R/$)', match: /exchange rate|depreciat|appreciat|R\/\$|forex/i, name: 'Rand / Dollar Exchange Rate', meaning: 'Price of 1 US Dollar in South African Rand (higher E = Rand depreciation; lower E = Rand appreciation).' }
  ];

  function decodeVariablesForText(rawText, chapterId) {
    const txt = String(rawText || '');
    const results = [];
    const seen = new Set();

    const addVar = (v) => {
      if (!v || !v.symbol || seen.has(v.symbol)) return;
      seen.add(v.symbol);
      results.push({ symbol: v.symbol, name: v.name, meaning: v.meaning });
    };

    if (typeof ECON122_DATA !== 'undefined' && Array.isArray(ECON122_DATA.chapters)) {
      const ch = ECON122_DATA.chapters.find((c) => c.id === chapterId);
      if (ch && ch.beginnerGuide && Array.isArray(ch.beginnerGuide.variables)) {
        ch.beginnerGuide.variables.forEach((v) => {
          const rawSym = String(v.symbol).trim();
          const baseSym = rawSym.split(/[(/\s]/)[0].replace(/[^A-Za-z0-9αΔπμσ]/g, '');
          const exactTokenHit = rawSym.length >= 2
            ? txt.includes(rawSym)
            : (baseSym.length === 1 && new RegExp(`\\b${baseSym}\\b`).test(txt));
          if (exactTokenHit || (baseSym.length >= 2 && new RegExp(`\\b${baseSym}\\b`, 'i').test(txt))) {
            addVar(v);
          }
        });
      }
    }

    GLOBAL_VARIABLE_DECODER.forEach((g) => {
      if ((g.exactMatch && g.exactMatch.test(txt)) || (g.match && g.match.test(txt))) {
        addVar(g);
      }
    });

    if (results.length < 2 && typeof ECON122_DATA !== 'undefined' && Array.isArray(ECON122_DATA.chapters)) {
      const ch = ECON122_DATA.chapters.find((c) => c.id === chapterId) || ECON122_DATA.chapters[0];
      if (ch && ch.beginnerGuide && Array.isArray(ch.beginnerGuide.variables)) {
        ch.beginnerGuide.variables.slice(0, 4).forEach(addVar);
      }
    }

    return results.slice(0, 6);
  }

  function renderDecoderPillsHtml(vars, label = 'Plain-English Symbol Decoder:') {
    if (!Array.isArray(vars) || vars.length === 0) return '';
    const pills = vars.map((v) => {
      const tip = `${v.symbol} (${v.name}): ${v.meaning}`;
      return `
        <span class="decoder-inline-pill" tabindex="0" data-tip="${escapeAttr(tip)}">
          <strong class="decoder-inline-sym">${escapeAttr(v.symbol)}</strong>
          <span class="decoder-inline-name">${escapeAttr(v.name)}</span>
        </span>
      `;
    }).join('');
    return `
      <div class="formula-var-decoder" aria-label="Plain-English Variable Decoder">
        <span class="formula-var-decoder-label">${escapeAttr(label)}</span>
        <div class="formula-var-decoder-pills">${pills}</div>
      </div>
    `;
  }

  function renderDecoderCardHtml(decoder, badgeLabel = '💡 Plain-English Variable Decoder & Mechanism Intuition') {
    if (!decoder) return '';
    const cardsHtml = (decoder.variables || []).map((v) => {
      const tip = `${v.symbol} (${v.name}): ${v.meaning}`;
      return `
        <div class="variable-decoder-card" tabindex="0" data-tip="${escapeAttr(tip)}">
          <div class="variable-symbol-pill">${escapeAttr(v.symbol)}</div>
          <div>
            <div style="font-weight: 700; font-size: 0.85rem; color: var(--text-primary);">${escapeAttr(v.name)}</div>
            <div style="font-size: 0.81rem; color: var(--text-secondary); line-height: 1.45; margin-top: 0.15rem;">${escapeAttr(v.meaning)}</div>
          </div>
        </div>
      `;
    }).join('');

    return `
      <div class="glass-card model-decoder-card" style="margin-top: 1.15rem; border-left: 4px solid var(--accent-sky);">
        <div class="meta-pill-row" style="margin-bottom: 0.45rem; justify-content: space-between; align-items: center;">
          <span class="badge badge-sky">${badgeLabel}</span>
          ${decoder.formula ? `<code class="mono" style="font-size: 0.78rem; color: var(--accent-sky);">${escapeAttr(decoder.formula)}</code>` : ''}
        </div>
        <p style="font-size: 0.9rem; color: var(--text-primary); line-height: 1.55; margin-bottom: 0.85rem;">
          <strong>Why This Mechanism Works:</strong> ${renderInlineLatexText(decoder.whyItWorks || '')}
        </p>
        <div class="variable-decoder-grid">${cardsHtml}</div>
      </div>
    `;
  }

  function initPlatformUI() {
    if (typeof ECON122_DATA === 'undefined') return;
    TelemetryEngine.startHeartbeat();
    initFloatingTooltips();

    // 1. Theme & Audio Toggles
    const rootHtml = document.documentElement;
    const savedTheme = localStorage.getItem('econ122_theme') || 'dark';
    rootHtml.setAttribute('data-theme', savedTheme);
    updateThemeButton(savedTheme);
    updateAudioButton(AudioEngine.isMuted());

    const btnTheme = document.getElementById('btn-theme-toggle');
    if (btnTheme) {
      btnTheme.addEventListener('click', () => {
        const curr = rootHtml.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
        rootHtml.setAttribute('data-theme', curr);
        localStorage.setItem('econ122_theme', curr);
        updateThemeButton(curr);
        AudioEngine.playClick();
      });
    }

    const btnAudio = document.getElementById('btn-audio-toggle');
    if (btnAudio) {
      btnAudio.addEventListener('click', () => {
        const muted = AudioEngine.toggleMute();
        updateAudioButton(muted);
      });
    }

    // 2. Primary Navigation
    const navButtons = document.querySelectorAll('.nav-pill[data-view]');
    const sections = document.querySelectorAll('.view-section');

    function switchView(viewKey) {
      hideFloatingTooltip();
      navButtons.forEach((btn) => {
        btn.classList.toggle('active', btn.getAttribute('data-view') === viewKey);
      });
      sections.forEach((sec) => {
        sec.classList.toggle('active', sec.id === 'view-' + viewKey);
      });
      AudioEngine.playClick();
    }
    switchPlatformView = switchView;

    navButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        switchView(btn.getAttribute('data-view'));
      });
    });

    document.querySelectorAll('[data-jump-view]').forEach((btn) => {
      btn.addEventListener('click', () => {
        switchView(btn.getAttribute('data-jump-view'));
      });
    });

    document.querySelectorAll('[data-quick-lab]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const targetLab = btn.getAttribute('data-quick-lab');
        if (targetLab) {
          activeLabId = targetLab;
          initSvgLabModule();
          switchView('lab');
        }
      });
    });

    document.querySelectorAll('[data-quick-solver]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const targetSolver = btn.getAttribute('data-quick-solver');
        if (targetSolver) {
          activeSolverId = targetSolver;
          initSolversModule();
          switchView('solvers');
        }
      });
    });

    // 3. Initialize all 8 Modules
    initVaultModule();
    initExamScopeModule();
    initExtremeExamModule();
    initSvgLabModule();
    initSolversModule();
    initQuizModule();
    initPastPapersModule();
    initCheatSheetModule();
    updateKpiBanner();
  }

  let switchPlatformView = function () {};

  function updateThemeButton(theme) {
    const icon = document.getElementById('theme-icon');
    const label = document.getElementById('theme-label');
    if (icon && label) {
      if (theme === 'light') {
        icon.textContent = '🌙';
        label.textContent = 'Dark';
      } else {
        icon.textContent = '☀️';
        label.textContent = 'Light';
      }
    }
  }

  function updateAudioButton(isMuted) {
    const icon = document.getElementById('audio-icon');
    const label = document.getElementById('audio-label');
    if (icon && label) {
      icon.textContent = isMuted ? '🔇' : '🔊';
      label.textContent = isMuted ? 'Muted' : 'Audio On';
    }
  }

  function updateKpiBanner() {
    const tState = TelemetryEngine.getState();
    const totalEl = document.getElementById('kpi-total-questions');
    const accEl = document.getElementById('kpi-user-accuracy');
    const ansEl = document.getElementById('kpi-user-answered');
    const ringEl = document.getElementById('kpi-accuracy-ring');
    const scopeProgEl = document.getElementById('kpi-scope-progress');
    const scopeSubEl = document.getElementById('kpi-scope-sub');
    const extremeScoreEl = document.getElementById('kpi-extreme-score');

    if (totalEl && typeof ECON122_DATA !== 'undefined') {
      totalEl.textContent = ECON122_DATA.questions.length + ' Problems';
    }
    if (accEl && ansEl && tState) {
      const pct = tState.questionsAnswered > 0
        ? Math.round((tState.questionsCorrect / tState.questionsAnswered) * 100)
        : 0;
      accEl.textContent = pct + '%';
      const mistakes = (tState.mistakeIds || []).length;
      ansEl.textContent = `${tState.questionsAnswered} Answered • ${mistakes} Weak Area${mistakes === 1 ? '' : 's'}`;
      if (ringEl) {
        const circumference = 94.25;
        const offset = circumference * (1 - Math.max(0, Math.min(100, pct)) / 100);
        ringEl.setAttribute('stroke-dashoffset', offset.toFixed(2));
      }
    }
    if (scopeProgEl && typeof ScopeEngine !== 'undefined') {
      const stats = ScopeEngine.getSummaryStats();
      scopeProgEl.textContent = `${stats.checkedCount} / ${stats.totalCount}`;
      if (scopeSubEl) {
        scopeSubEl.textContent = `${stats.pct}% Mastered • Saved to Device`;
      }
    }
    if (extremeScoreEl && typeof ExtremeExamEngine !== 'undefined') {
      const exStats = ExtremeExamEngine.getScoreSummary();
      if (exStats.checkedPages > 0) {
        extremeScoreEl.textContent = `${formatMark(exStats.totalEarned)} / 500`;
      } else {
        extremeScoreEl.textContent = '500 Marks';
      }
    }
  }

  /* --------------------------------------------------------------------------
     MODULE 1: Concept & Formula Bento Vault (Chapters 13–22)
     -------------------------------------------------------------------------- */
  let activeChapterId = 'ch13';

  function getChapterSchematicConfig(chId) {
    const map = {
      ch13: {
        labId: 'lorenz',
        solverId: 'nat_accounts_solver',
        caption: 'Lorenz Inequality Curve & National Accounts Valuation',
        svg: `<svg viewBox="0 0 320 150" role="img" aria-label="Chapter 13 Lorenz and GDP Schematic">
          <line x1="36" y1="18" x2="36" y2="126" stroke="var(--svg-axis)" stroke-width="1.6"/>
          <line x1="36" y1="126" x2="292" y2="126" stroke="var(--svg-axis)" stroke-width="1.6"/>
          <path d="M 36 126 Q 210 120 284 22 L 36 126 Z" fill="rgba(94, 92, 230, 0.24)"/>
          <line x1="36" y1="126" x2="284" y2="22" stroke="#30d158" stroke-width="2" stroke-dasharray="5 3"/>
          <path d="M 36 126 Q 210 120 284 22" fill="none" stroke="#2997ff" stroke-width="2.6"/>
          <text x="155" y="64" fill="#30d158" font-size="10" font-weight="700">Perfect Equality (45°)</text>
          <text x="172" y="102" fill="#2997ff" font-size="10" font-weight="700">Lorenz Curve (Gini ≈ 0.65)</text>
          <text x="44" y="32" fill="var(--svg-text)" font-size="9.5" font-weight="600">GDPmp → GDPbp → GDPfc</text>
        </svg>`
      },
      ch14: {
        labId: 'money',
        solverId: 'money_solver',
        caption: 'SARB Endogenous Money Market (Horizontal Repo i0)',
        svg: `<svg viewBox="0 0 320 150" role="img" aria-label="Chapter 14 Endogenous Money Schematic">
          <line x1="36" y1="18" x2="36" y2="126" stroke="var(--svg-axis)" stroke-width="1.6"/>
          <line x1="36" y1="126" x2="292" y2="126" stroke="var(--svg-axis)" stroke-width="1.6"/>
          <line x1="36" y1="74" x2="286" y2="74" stroke="#30d158" stroke-width="2.6"/>
          <line x1="68" y1="26" x2="248" y2="118" stroke="#2997ff" stroke-width="2.6"/>
          <line x1="162" y1="74" x2="162" y2="126" stroke="#2997ff" stroke-width="1.4" stroke-dasharray="4 3"/>
          <circle cx="162" cy="74" r="5" fill="#30d158" stroke="#fff" stroke-width="1.5"/>
          <text x="284" y="67" fill="#30d158" font-size="9.5" font-weight="700" text-anchor="end">SARB Repo Rate i0 = 8.25%</text>
          <text x="256" y="114" fill="#2997ff" font-size="9.5" font-weight="700">L = L1(Y) + L2(i)</text>
          <text x="166" y="92" fill="var(--svg-text)" font-size="9.5" font-weight="700">E (Demand-Determined M*)</text>
        </svg>`
      },
      ch15: {
        labId: 'externality',
        solverId: 'sars_tax_solver',
        caption: 'Negative Externality (MSC > MPC) & Pigouvian Tax',
        svg: `<svg viewBox="0 0 320 150" role="img" aria-label="Chapter 15 Externality and Tax Schematic">
          <line x1="36" y1="18" x2="36" y2="126" stroke="var(--svg-axis)" stroke-width="1.6"/>
          <line x1="36" y1="126" x2="292" y2="126" stroke="var(--svg-axis)" stroke-width="1.6"/>
          <polygon points="145,68 188,88 188,48" fill="rgba(255, 69, 58, 0.28)" stroke="#ff453a" stroke-width="1.2"/>
          <line x1="54" y1="28" x2="262" y2="118" stroke="#2997ff" stroke-width="2.4"/>
          <line x1="54" y1="118" x2="262" y2="42" stroke="#8e95a8" stroke-width="2" stroke-dasharray="4 3"/>
          <line x1="54" y1="94" x2="262" y2="18" stroke="#ff453a" stroke-width="2.5"/>
          <circle cx="145" cy="68" r="4.5" fill="#30d158" stroke="#fff" stroke-width="1.4"/>
          <circle cx="188" cy="88" r="4.5" fill="#ff9f0a" stroke="#fff" stroke-width="1.4"/>
          <text x="266" y="26" fill="#ff453a" font-size="9.5" font-weight="700" text-anchor="end">MSC = MPC + MEC</text>
          <text x="138" y="61" fill="#30d158" font-size="9.5" font-weight="700" text-anchor="end">Optimum Q2</text>
          <text x="195" y="102" fill="#ff9f0a" font-size="9.5" font-weight="700">Market Q1</text>
        </svg>`
      },
      ch16: {
        labId: 'forex',
        solverId: 'nat_accounts_solver',
        caption: 'Foreign Exchange Market (ZAR/USD Equilibrium)',
        svg: `<svg viewBox="0 0 320 150" role="img" aria-label="Chapter 16 Forex Market Schematic">
          <line x1="36" y1="18" x2="36" y2="126" stroke="var(--svg-axis)" stroke-width="1.6"/>
          <line x1="36" y1="126" x2="292" y2="126" stroke="var(--svg-axis)" stroke-width="1.6"/>
          <line x1="58" y1="26" x2="258" y2="116" stroke="#2997ff" stroke-width="2.5"/>
          <line x1="58" y1="116" x2="258" y2="26" stroke="#30d158" stroke-width="2.5"/>
          <line x1="36" y1="71" x2="158" y2="71" stroke="#ff9f0a" stroke-width="1.4" stroke-dasharray="4 3"/>
          <line x1="158" y1="71" x2="158" y2="126" stroke="#ff9f0a" stroke-width="1.4" stroke-dasharray="4 3"/>
          <circle cx="158" cy="71" r="5" fill="#ff9f0a" stroke="#fff" stroke-width="1.5"/>
          <text x="168" y="66" fill="#ff9f0a" font-size="10" font-weight="700">E0 (R18.50 / US$1)</text>
          <text x="262" y="32" fill="#30d158" font-size="9.5" font-weight="700" text-anchor="end">Supply S$</text>
          <text x="262" y="114" fill="#2997ff" font-size="9.5" font-weight="700" text-anchor="end">Demand D$</text>
        </svg>`
      },
      ch17: {
        labId: 'keynesian',
        solverId: 'keynesian_solver',
        caption: 'Simple Closed Keynesian 45° Line (A = C̄ + Ī + cY)',
        svg: `<svg viewBox="0 0 320 150" role="img" aria-label="Chapter 17 Simple Keynesian Schematic">
          <line x1="36" y1="18" x2="36" y2="126" stroke="var(--svg-axis)" stroke-width="1.6"/>
          <line x1="36" y1="126" x2="292" y2="126" stroke="var(--svg-axis)" stroke-width="1.6"/>
          <line x1="36" y1="126" x2="276" y2="20" stroke="#8e95a8" stroke-width="1.8" stroke-dasharray="5 3"/>
          <line x1="36" y1="94" x2="282" y2="36" stroke="#2997ff" stroke-width="2.8"/>
          <circle cx="176" cy="64" r="5" fill="#30d158" stroke="#fff" stroke-width="1.5"/>
          <line x1="176" y1="64" x2="176" y2="126" stroke="#30d158" stroke-width="1.4" stroke-dasharray="4 3"/>
          <text x="184" y="59" fill="#30d158" font-size="10" font-weight="700">E0 (Y* = αĀ)</text>
          <text x="282" y="31" fill="#2997ff" font-size="9.5" font-weight="700" text-anchor="end">A = Ā + cY</text>
          <text x="44" y="89" fill="#2997ff" font-size="9.5" font-weight="700">Ā</text>
        </svg>`
      },
      ch18: {
        labId: 'keynesian',
        solverId: 'keynesian_solver',
        caption: 'Open-Economy Multiplier with Taxes & Induced Imports',
        svg: `<svg viewBox="0 0 320 150" role="img" aria-label="Chapter 18 Open Economy Keynesian Schematic">
          <line x1="36" y1="18" x2="36" y2="126" stroke="var(--svg-axis)" stroke-width="1.6"/>
          <line x1="36" y1="126" x2="292" y2="126" stroke="var(--svg-axis)" stroke-width="1.6"/>
          <polygon points="164,69 224,69 224,43" fill="rgba(255, 159, 10, 0.22)" stroke="#ff9f0a" stroke-dasharray="3 2"/>
          <line x1="36" y1="126" x2="276" y2="20" stroke="#8e95a8" stroke-width="1.8" stroke-dasharray="5 3"/>
          <line x1="224" y1="20" x2="224" y2="126" stroke="#ff9f0a" stroke-width="1.5" stroke-dasharray="4 3"/>
          <line x1="36" y1="92" x2="282" y2="48" stroke="#2997ff" stroke-width="2.8"/>
          <circle cx="164" cy="69" r="5" fill="#30d158" stroke="#fff" stroke-width="1.5"/>
          <text x="156" y="61" fill="#30d158" font-size="9.5" font-weight="700" text-anchor="end">Y0 = 1584</text>
          <text x="220" y="31" fill="#ff9f0a" font-size="9.5" font-weight="700" text-anchor="end">Yf Target</text>
          <text x="282" y="43" fill="#2997ff" font-size="9" font-weight="700" text-anchor="end">Slope = c(1-t) - m</text>
        </svg>`
      },
      ch19: {
        labId: 'adas',
        solverId: 'keynesian_solver',
        caption: 'AD–AS Equilibrium & Monetary Transmission Channels',
        svg: `<svg viewBox="0 0 320 150" role="img" aria-label="Chapter 19 AD-AS Schematic">
          <line x1="36" y1="18" x2="36" y2="126" stroke="var(--svg-axis)" stroke-width="1.6"/>
          <line x1="36" y1="126" x2="292" y2="126" stroke="var(--svg-axis)" stroke-width="1.6"/>
          <line x1="176" y1="20" x2="176" y2="126" stroke="#ff9f0a" stroke-width="1.6" stroke-dasharray="4 3"/>
          <line x1="56" y1="30" x2="256" y2="116" stroke="#2997ff" stroke-width="2.6"/>
          <line x1="56" y1="116" x2="256" y2="30" stroke="#ff453a" stroke-width="2.6"/>
          <circle cx="156" cy="73" r="5" fill="#30d158" stroke="#fff" stroke-width="1.5"/>
          <text x="172" y="29" fill="#ff9f0a" font-size="9.5" font-weight="700" text-anchor="end">LRAS (Yf)</text>
          <text x="260" y="34" fill="#ff453a" font-size="9.5" font-weight="700" text-anchor="end">AS</text>
          <text x="260" y="112" fill="#2997ff" font-size="9.5" font-weight="700" text-anchor="end">AD</text>
        </svg>`
      },
      ch20: {
        labId: 'adas',
        solverId: 'deflator_solver',
        caption: 'Cost-Push Stagflation (AS Left) & SARB 3%–6% Target',
        svg: `<svg viewBox="0 0 320 150" role="img" aria-label="Chapter 20 Stagflation Schematic">
          <line x1="36" y1="18" x2="36" y2="126" stroke="var(--svg-axis)" stroke-width="1.6"/>
          <line x1="36" y1="126" x2="292" y2="126" stroke="var(--svg-axis)" stroke-width="1.6"/>
          <line x1="58" y1="32" x2="262" y2="116" stroke="#2997ff" stroke-width="2.5"/>
          <line x1="78" y1="116" x2="266" y2="38" stroke="#8e95a8" stroke-width="1.8" stroke-dasharray="4 3"/>
          <line x1="48" y1="98" x2="236" y2="20" stroke="#ff453a" stroke-width="2.6"/>
          <circle cx="168" cy="77" r="4.5" fill="#8e95a8"/>
          <circle cx="138" cy="65" r="5" fill="#ff453a" stroke="#fff" stroke-width="1.5"/>
          <text x="132" y="56" fill="#ff453a" font-size="9.5" font-weight="700" text-anchor="end">E1 (P↑, Y↓ Stagflation)</text>
          <text x="234" y="28" fill="#ff453a" font-size="9.5" font-weight="700" text-anchor="end">AS1 ← AS0</text>
        </svg>`
      },
      ch21: {
        labId: 'lorenz',
        solverId: 'labour_solver',
        caption: 'Strict vs Expanded Unemployment & Phillips Trade-Off',
        svg: `<svg viewBox="0 0 320 150" role="img" aria-label="Chapter 21 Phillips Curve Schematic">
          <line x1="36" y1="18" x2="36" y2="126" stroke="var(--svg-axis)" stroke-width="1.6"/>
          <line x1="36" y1="126" x2="292" y2="126" stroke="var(--svg-axis)" stroke-width="1.6"/>
          <path d="M 62 24 Q 105 98 264 114" fill="none" stroke="#2997ff" stroke-width="2.8"/>
          <path d="M 96 22 Q 140 92 282 104" fill="none" stroke="#ff9f0a" stroke-width="2" stroke-dasharray="5 3"/>
          <circle cx="128" cy="79" r="5" fill="#30d158" stroke="#fff" stroke-width="1.5"/>
          <text x="262" y="110" fill="#2997ff" font-size="9.5" font-weight="700" text-anchor="end">SRPC0 (π vs u)</text>
          <text x="280" y="96" fill="#ff9f0a" font-size="9.5" font-weight="700" text-anchor="end">SRPC1 (Supply Shock)</text>
        </svg>`
      },
      ch22: {
        labId: 'adas',
        solverId: 'deflator_solver',
        caption: 'Business Cycle Phases (Trough → Upswing → Peak → Downswing)',
        svg: `<svg viewBox="0 0 320 150" role="img" aria-label="Chapter 22 Business Cycle Schematic">
          <line x1="36" y1="18" x2="36" y2="126" stroke="var(--svg-axis)" stroke-width="1.6"/>
          <line x1="36" y1="126" x2="292" y2="126" stroke="var(--svg-axis)" stroke-width="1.6"/>
          <line x1="42" y1="106" x2="282" y2="34" stroke="#30d158" stroke-width="1.8" stroke-dasharray="5 3"/>
          <path d="M 42 104 C 78 124, 112 36, 152 46 C 192 56, 218 102, 248 74 C 266 56, 276 28, 286 26" fill="none" stroke="#2997ff" stroke-width="2.8"/>
          <circle cx="136" cy="48" r="4.5" fill="#ff9f0a" stroke="#fff" stroke-width="1.4"/>
          <circle cx="222" cy="84" r="4.5" fill="#ff453a" stroke="#fff" stroke-width="1.4"/>
          <text x="136" y="38" fill="#ff9f0a" font-size="9.5" font-weight="700" text-anchor="middle">Peak</text>
          <text x="222" y="100" fill="#ff453a" font-size="9.5" font-weight="700" text-anchor="middle">Trough</text>
          <text x="280" y="48" fill="#30d158" font-size="9" font-weight="700" text-anchor="end">Long-Run Trend (70/g)</text>
        </svg>`
      }
    };
    return map[chId] || map.ch13;
  }

  function initVaultModule() {
    const navList = document.getElementById('chapter-nav-list');
    const searchInput = document.getElementById('vault-search-input');
    if (!navList) return;

    function renderSidebar() {
      navList.innerHTML = '';
      ECON122_DATA.chapters.forEach((ch) => {
        const chQCount = ECON122_DATA.questions.filter((q) => (q.chapter || q.chapterId) === ch.id).length;
        const pageShort = ch.shortTitle || ch.title;
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'chapter-nav-btn' + (ch.id === activeChapterId ? ' active' : '');
        btn.innerHTML = `
          <div class="chapter-nav-left">
            <span class="ch-num-badge">Ch ${ch.number}</span>
            <div class="chapter-nav-titles">
              <span class="chapter-nav-main">${ch.title}</span>
              <span class="chapter-nav-sub">${pageShort} • ${(ch.formulas || []).length} Equations</span>
            </div>
          </div>
          <span class="chapter-nav-count">${chQCount} Qs</span>
        `;
        btn.addEventListener('click', () => {
          activeChapterId = ch.id;
          if (searchInput) searchInput.value = '';
          renderSidebar();
          renderChapterStage(ch);
          AudioEngine.playClick();
        });
        navList.appendChild(btn);
      });
    }

    if (searchInput) {
      searchInput.addEventListener('input', () => {
        const q = searchInput.value.trim().toLowerCase();
        if (!q) {
          const ch = ECON122_DATA.chapters.find((c) => c.id === activeChapterId) || ECON122_DATA.chapters[0];
          renderChapterStage(ch);
        } else {
          renderSearchVaultResults(q);
        }
      });
    }

    renderSidebar();
    renderChapterStage(ECON122_DATA.chapters[0]);
  }

  function renderChapterStage(ch) {
    const stage = document.getElementById('chapter-stage-container');
    if (!stage || !ch) return;

    const chQuestions = ECON122_DATA.questions.filter((q) => (q.chapter || q.chapterId) === ch.id);
    const schem = getChapterSchematicConfig(ch.id);

    const outcomesHtml = (ch.learningOutcomes || []).length > 0 ? `
      <div class="glass-card" style="margin-bottom: 1.35rem; border-left: 4px solid var(--accent-emerald);">
        <div class="meta-pill-row" style="justify-content: space-between; align-items: center;">
          <span class="badge badge-emerald">🎯 Chapter ${ch.number} — Key Learning Objectives</span>
          
        </div>
        <ul style="margin: 0.55rem 0 0 1.15rem; display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 0.45rem 1.25rem; font-size: 0.88rem; color: var(--text-secondary);">
          ${(ch.learningOutcomes || []).map((lo) => `<li style="line-height: 1.45;">${renderInlineLatexText(lo)}</li>`).join('')}
        </ul>
      </div>
    ` : '';

    const formulasHtml = (ch.formulas || []).map((f, idx) => {
      const fVars = decodeVariablesForText(`${f.name} ${f.latex} ${f.meaning || ''}`, ch.id);
      return `
      <div class="glass-card interactive-card formula-card">
        <div>
          <div class="meta-pill-row" style="justify-content: space-between; align-items: center;">
            <span class="badge badge-sky">Identity ${ch.number}.${idx + 1}</span>
            <button type="button" class="copy-tex-btn" data-copy-tex="${encodeURIComponent(f.latex)}" title="Copy LaTeX Identity">Copy LaTeX</button>
          </div>
          <div class="concept-card-title">${f.name}</div>
          <div class="katex-box" data-katex-display="${encodeURIComponent(f.latex)}"></div>
        </div>
        <div>
          <p class="concept-body" style="font-size: 0.88rem;"><strong>Why This Works:</strong> ${renderInlineLatexText(f.meaning || f.intuition || '')}</p>
          ${renderDecoderPillsHtml(fVars, 'Symbols in this formula:')}
        </div>
      </div>
    `;
    }).join('');

    const conceptsHtml = (ch.concepts || []).map((c, idx) => `
      <div class="glass-card interactive-card">
        <div class="meta-pill-row">
          <span class="badge badge-indigo">Concept ${ch.number}.${idx + 1} • ${c.tag || ch.pages}</span>
        </div>
        <div class="concept-card-title">${c.title}</div>
        <p class="concept-body">${renderInlineLatexText(c.intuition || c.body || '')}</p>
        <div class="concept-tip-callout">
          <strong>🎯 Worked Quantitative Proof &amp; Application:</strong> ${renderInlineLatexText(c.example || '')}
        </div>
      </div>
    `).join('');

    const pitfallsHtml = (ch.concepts || []).map((c, idx) => `
      <div class="pitfall-accordion ${idx === 0 ? 'open' : ''}">
        <button type="button" class="pitfall-trigger">
          <span>⚠️ Misconception Analysis (${c.title}): Student Fallacy vs. First-Principles Law</span>
          <span class="badge badge-rose">${c.tag || 'Analytical Pitfall'}</span>
        </button>
        <div class="pitfall-content">
          <div class="fallacy-pane">
            <div style="font-weight: 700; color: var(--accent-rose); margin-bottom: 0.35rem;">❌ Common Student Fallacy</div>
            <div>${renderInlineLatexText(c.fallacy || '')}</div>
          </div>
          <div class="law-pane">
            <div style="font-weight: 700; color: var(--accent-emerald); margin-bottom: 0.35rem;">✅ First-Principles Macroeconomic Law</div>
            <div>${renderInlineLatexText(c.firstPrinciples || '')}</div>
          </div>
        </div>
      </div>
    `).join('');

    const beginnerGuideHtml = ch.beginnerGuide ? `
      <div class="glass-card" style="margin-bottom: 1.35rem; border-left: 4px solid var(--accent-sky);">
        <div class="meta-pill-row" style="margin-bottom: 0.45rem;">
          <span class="badge badge-sky">💡 Beginner-Friendly Plain-English Intuition &amp; Variable Decoder</span>
        </div>
        <p style="font-size: 0.93rem; color: var(--text-primary); line-height: 1.6; margin-bottom: 0.9rem;">
          <strong>Why These Formulas Work:</strong> ${renderInlineLatexText(ch.beginnerGuide.whyFormulasWork)}
        </p>
        <div class="variable-decoder-grid">
          ${(ch.beginnerGuide.variables || []).map((v) => `
            <div class="variable-decoder-card" tabindex="0" data-tip="${escapeAttr(`${v.symbol} (${v.name}): ${v.meaning}`)}">
              <div class="variable-symbol-pill">${v.symbol}</div>
              <div>
                <div style="font-weight: 700; font-size: 0.85rem; color: var(--text-primary);">${v.name}</div>
                <div style="font-size: 0.81rem; color: var(--text-secondary); line-height: 1.45; margin-top: 0.15rem;">${v.meaning}</div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    ` : '';

    stage.innerHTML = `
      <div class="glass-card chapter-header-card">
        <div>
          <div class="meta-pill-row">
            <span class="badge badge-sky">Chapter ${ch.number}</span>
            <span class="badge badge-indigo">${ch.pages || ch.shortTitle}</span>
          </div>
          <h2>Chapter ${ch.number}: ${ch.title}</h2>
          <p style="margin-top: 0.5rem; font-size: 0.95rem;">${renderInlineLatexText(ch.summary)}</p>
          <div class="chapter-action-strip">
            <button type="button" class="btn-primary" id="btn-ch-launch-quiz">
              <span>Practice ${chQuestions.length} Chapter ${ch.number} Problems →</span>
            </button>
            <button type="button" class="btn-secondary" id="btn-ch-launch-lab">
              <span>Interactive 2D Diagram →</span>
            </button>
            <button type="button" class="btn-ghost" id="btn-ch-launch-solver">
              <span>Quantitative Solver →</span>
            </button>
          </div>
        </div>
        <div class="chapter-schematic-frame">
          ${schem.svg}
          <div class="schematic-caption">
            <span>${schem.caption}</span>
            <span style="color: var(--accent-sky);">Chapter ${ch.number}</span>
          </div>
        </div>
      </div>

      ${beginnerGuideHtml}
      ${outcomesHtml}

      <div class="section-header-bar">
        <h3>Mathematical Identities &amp; Canonical Equations (${(ch.formulas || []).length} Identities)</h3>
      </div>
      <div class="bento-grid-2">${formulasHtml}</div>

      <div class="section-header-bar">
        <h3>Core Theoretical Frameworks &amp; Worked Quantitative Proofs</h3>
        <span class="badge badge-indigo">SARB &amp; Stats SA Aligned</span>
      </div>
      <div class="bento-grid-2">${conceptsHtml}</div>

      <div class="section-header-bar">
        <h3>Student Fallacy vs. First-Principles Law Accordions</h3>
        <span class="badge badge-emerald">Click to Expand / Collapse</span>
      </div>
      <div>${pitfallsHtml}</div>
    `;

    stage.querySelectorAll('[data-katex-display]').forEach((el) => {
      renderMathInElement(el, decodeURIComponent(el.getAttribute('data-katex-display')), true);
    });

    stage.querySelectorAll('.copy-tex-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const rawTex = decodeURIComponent(btn.getAttribute('data-copy-tex') || '');
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(rawTex).catch(() => {});
        }
        btn.textContent = '✓ Copied';
        AudioEngine.playClick();
        setTimeout(() => {
          btn.textContent = 'Copy LaTeX';
        }, 1400);
      });
    });

    const btnQuiz = document.getElementById('btn-ch-launch-quiz');
    if (btnQuiz) {
      btnQuiz.addEventListener('click', () => {
        const chSel = document.getElementById('quiz-chapter-filter');
        if (chSel) {
          chSel.value = ch.id;
          chSel.dispatchEvent(new Event('change'));
        }
        const navQuiz = document.getElementById('nav-quiz');
        if (navQuiz) navQuiz.click();
      });
    }

    const btnLab = document.getElementById('btn-ch-launch-lab');
    if (btnLab) {
      btnLab.addEventListener('click', () => {
        activeLabId = schem.labId;
        initSvgLabModule();
        const navLab = document.getElementById('nav-lab');
        if (navLab) navLab.click();
      });
    }

    const btnSolver = document.getElementById('btn-ch-launch-solver');
    if (btnSolver) {
      btnSolver.addEventListener('click', () => {
        activeSolverId = schem.solverId;
        initSolversModule();
        const navSolvers = document.getElementById('nav-solvers');
        if (navSolvers) navSolvers.click();
      });
    }

    stage.querySelectorAll('.pitfall-trigger').forEach((btn) => {
      btn.addEventListener('click', () => {
        const parent = btn.closest('.pitfall-accordion');
        if (parent) {
          parent.classList.toggle('open');
          AudioEngine.playClick();
        }
      });
    });
  }

  function renderSearchVaultResults(query) {
    const stage = document.getElementById('chapter-stage-container');
    if (!stage) return;

    const matchedCards = [];
    ECON122_DATA.chapters.forEach((ch) => {
      (ch.formulas || []).forEach((f) => {
        const textBlob = [f.name, f.meaning, f.latex].join(' ').toLowerCase();
        if (textBlob.includes(query)) {
          const fVars = decodeVariablesForText(`${f.name} ${f.latex} ${f.meaning || ''}`, ch.id);
          matchedCards.push(`
            <div class="glass-card formula-card">
              <div class="meta-pill-row"><span class="badge badge-sky">Ch ${ch.number} Formula</span></div>
              <div class="concept-card-title">${f.name}</div>
              <div class="katex-box" data-katex-display="${encodeURIComponent(f.latex)}"></div>
              <p class="concept-body"><strong>Why This Works:</strong> ${renderInlineLatexText(f.meaning || '')}</p>
              ${renderDecoderPillsHtml(fVars, 'Symbols in this formula:')}
            </div>
          `);
        }
      });
      (ch.concepts || []).forEach((c) => {
        const textBlob = [c.title, c.tag, c.intuition, c.example, c.fallacy, c.firstPrinciples].join(' ').toLowerCase();
        if (textBlob.includes(query)) {
          matchedCards.push(`
            <div class="glass-card">
              <div class="meta-pill-row"><span class="badge badge-indigo">Ch ${ch.number} • ${c.tag || ''}</span></div>
              <div class="concept-card-title">${c.title}</div>
              <p class="concept-body">${renderInlineLatexText(c.intuition || '')}</p>
              <div class="concept-tip-callout"><strong>Worked Example:</strong> ${renderInlineLatexText(c.example || '')}</div>
            </div>
          `);
        }
      });
    });

    stage.innerHTML = `
      <div class="glass-card" style="margin-bottom: 1rem;">
        <h3>Search Results for "${query}" (${matchedCards.length} matches across Ch 13–22)</h3>
      </div>
      <div class="bento-grid-2">${matchedCards.join('') || '<p>No matching concepts found. Try "multiplier", "repo", "CPI", "Gini", or "tax".</p>'}</div>
    `;

    stage.querySelectorAll('[data-katex-display]').forEach((el) => {
      renderMathInElement(el, decodeURIComponent(el.getAttribute('data-katex-display')), true);
    });
  }

  /* --------------------------------------------------------------------------
     MODULE 2: Interactive 2D Vector SVG Laboratory (6 Macroeconomic Models)
     -------------------------------------------------------------------------- */
  const LAB_CONFIGS = [
    {
      id: 'keynesian',
      title: 'Keynesian 45° Line & Multiplier (Ch 17–18)',
      state: { C0: 100, c: 0.8, I0: 100, G0: 250, t: 0.2, X0: 300, Z0: 20, m: 0.1, Yf: 1900 },
      presets: [
        { label: 'Open Economy Baseline (Portofino)', values: { C0: 100, c: 0.8, I0: 100, G0: 250, t: 0.2, X0: 300, Z0: 20, m: 0.1, Yf: 1910 } },
        { label: 'High-Leakage Open Economy', values: { C0: 150, c: 0.75, I0: 300, G0: 400, t: 0.25, X0: 250, Z0: 50, m: 0.15, Yf: 2000 } },
        { label: 'Fiscal Transfer & Tax Shift (t=0.25)', values: { C0: 35, c: 0.7, I0: 19, G0: 20, t: 0.25, X0: 8, Z0: 13, m: 0.2, Yf: 130 } },
        { label: 'Simple Closed Economy (t=0, m=0)', values: { C0: 120, c: 0.75, I0: 80, G0: 0, t: 0, X0: 0, Z0: 0, m: 0, Yf: 1000 } }
      ],
      sliders: [
        { key: 'C0', label: 'Autonomous Consumption (C̄)', min: 0, max: 300, step: 5 },
        { key: 'c', label: 'Marginal Propensity to Consume (c)', min: 0.4, max: 0.9, step: 0.05 },
        { key: 'I0', label: 'Autonomous Investment (Ī)', min: 0, max: 450, step: 10 },
        { key: 'G0', label: 'Government Spending (Ḡ)', min: 0, max: 500, step: 10 },
        { key: 't', label: 'Proportional Tax Rate (t)', min: 0, max: 0.45, step: 0.05 },
        { key: 'X0', label: 'Autonomous Exports (X̄)', min: 0, max: 400, step: 10 },
        { key: 'm', label: 'Marginal Propensity to Import (m)', min: 0, max: 0.35, step: 0.05 },
        { key: 'Yf', label: 'Full-Employment Income (Yf)', min: 100, max: 2400, step: 20 }
      ],
      decoder: {
        formula: 'Y* = α × Ā  where  α = 1 / [1 − c(1 − t) + m]',
        whyItWorks: 'Equilibrium occurs where planned Aggregate Spending (A) crosses the 45° line (A = Y). Raising autonomous spending (C̄, Ī, Ḡ, X̄) shifts the A line parallel upward; raising c steepens the slope and enlarges the multiplier α, while taxes (t) and imports (m) flatten the slope via leakages.',
        variables: [
          { symbol: 'Y*', name: 'Equilibrium National Income', meaning: 'Total production where aggregate spending equals output (A = Y).' },
          { symbol: 'Ā', name: 'Total Autonomous Spending', meaning: 'Vertical intercept (C̄ − cT̄ + Ī + Ḡ + X̄ − Z̄) independent of income.' },
          { symbol: 'α', name: 'Open-Economy Multiplier', meaning: 'Total rands of income created per R1 of autonomous spending: 1 / [1 − c(1 − t) + m].' },
          { symbol: 'c(1−t)−m', name: 'Induced Spending Slope', meaning: 'Extra domestic spending induced by each R1 rise in national income Y.' },
          { symbol: 'Yf', name: 'Full-Employment Income', meaning: 'Target output needed to employ all available labour; ΔG = (Yf − Y*) / α.' }
        ]
      }
    },
    {
      id: 'adas',
      title: 'AD–AS Policy & Stagflation (Ch 19–20)',
      state: { adShift: 0, asShift: 0 },
      presets: [
        { label: 'Baseline Equilibrium (E0)', values: { adShift: 0, asShift: 0 } },
        { label: 'Demand-Pull Inflation (AD Right)', values: { adShift: 35, asShift: 0 } },
        { label: 'Cost-Push Stagflation (AS Left)', values: { adShift: 0, asShift: 38 } },
        { label: 'Monetary Repo Hike Contraction', values: { adShift: -30, asShift: 0 } }
      ],
      sliders: [
        { key: 'adShift', label: 'Aggregate Demand Shock (ΔAD: Fiscal/Monetary)', min: -50, max: 50, step: 2 },
        { key: 'asShift', label: 'Aggregate Supply Cost Shock (ΔAS: Oil/Electricity/Wages)', min: -45, max: 50, step: 2 }
      ],
      decoder: {
        formula: 'AD: P = f⁻(Y)   |   AS: P = f⁺(Y, Costs)',
        whyItWorks: 'Expansionary fiscal or monetary policy shifts AD rightward, raising both real output (Y↑) and the price level (P↑, demand-pull inflation). An adverse supply shock (higher oil prices, electricity tariffs, or wages above productivity) shifts AS upward/leftward, causing stagflation: rising prices (P↑) combined with falling output (Y↓).',
        variables: [
          { symbol: 'AD', name: 'Aggregate Demand Curve', meaning: 'Total planned spending C + I + G + (X − Z) at each general price level P.' },
          { symbol: 'AS', name: 'Short-Run Aggregate Supply', meaning: 'Total output firms supply at each price level given unit production costs.' },
          { symbol: 'LRAS (Yf)', name: 'Long-Run Potential Output', meaning: 'Full-employment capacity determined by technology, capital stock, and labour.' },
          { symbol: 'P*', name: 'Equilibrium Price Level', meaning: 'General price index where aggregate quantity demanded equals quantity supplied.' },
          { symbol: 'Y*', name: 'Equilibrium Real GDP', meaning: 'Real national output and employment level determined at the AD–AS intersection.' }
        ]
      }
    },
    {
      id: 'money',
      title: 'Endogenous Money & Repo Rate (Ch 14)',
      state: { repoRate: 8.25, incomeShift: 0 },
      presets: [
        { label: 'Central Bank Baseline (Repo = 8.25%)', values: { repoRate: 8.25, incomeShift: 0 } },
        { label: '50 bps Repo Cut (7.75%)', values: { repoRate: 7.75, incomeShift: 0 } },
        { label: '100 bps Repo Hike (7% → 8%)', values: { repoRate: 8.0, incomeShift: 0 } },
        { label: 'Contraction in Money Demand (L Left)', values: { repoRate: 8.25, incomeShift: -45 } }
      ],
      sliders: [
        { key: 'repoRate', label: 'Central Bank Repo / Market Interest Rate i0 (%)', min: 3.5, max: 13.5, step: 0.25 },
        { key: 'incomeShift', label: 'Real GDP / Transactions Demand Shift (ΔL)', min: -60, max: 60, step: 5 }
      ],
      decoder: {
        formula: 'L = L₁(Y) + L₂(i)   |   M* = L(Y, i₀)',
        whyItWorks: 'Under the SARB accommodation system, there is no independent vertical money supply curve. The central bank fixes the repo rate (establishing a horizontal interest rate line at i₀) and supplies whatever liquidity banks need; therefore, the equilibrium quantity of money M* is completely demand-determined where L crosses i₀.',
        variables: [
          { symbol: 'i₀', name: 'Repo-Linked Interest Rate', meaning: 'Policy rate set by the SARB Monetary Policy Committee (horizontal line).' },
          { symbol: 'L₁(Y)', name: 'Active Balances (Transactions + Precautionary)', meaning: 'Money held to buy goods; increases when national income Y rises (shifts L right).' },
          { symbol: 'L₂(i)', name: 'Passive / Speculative Balances', meaning: 'Liquid wealth held instead of bonds; varies inversely with the interest rate i.' },
          { symbol: 'M*', name: 'Endogenous Quantity of Money', meaning: 'Demand-determined stock of money created via bank credit at interest rate i₀.' }
        ]
      }
    },
    {
      id: 'externality',
      title: 'Negative Externality & Pigouvian Tax (Ch 15)',
      state: { mec: 36, pigouvianTax: 0 },
      presets: [
        { label: 'Unregulated Industrial Pollution (Q1 > Q2)', values: { mec: 36, pigouvianTax: 0 } },
        { label: 'Optimal Pigouvian Tax (τ = MEC)', values: { mec: 36, pigouvianTax: 36 } },
        { label: 'Partial Carbon Tax (50% Internalised)', values: { mec: 36, pigouvianTax: 18 } }
      ],
      sliders: [
        { key: 'mec', label: 'Marginal External Pollution Cost (MEC)', min: 10, max: 60, step: 2 },
        { key: 'pigouvianTax', label: 'Government Pigouvian Tax per Unit (τ)', min: 0, max: 60, step: 2 }
      ],
      decoder: {
        formula: 'MSC = MPC + MEC   |   Optimal Pigouvian Tax τ* = MEC',
        whyItWorks: 'When factories pollute, society bears Marginal External Cost (MEC) on top of the firm’s Marginal Private Cost (MPC). Unregulated markets equate MPB = MPC at Q₁, overproducing relative to the social optimum Q₂ (where MSB = MSC). Levying a per-unit Pigouvian tax τ = MEC shifts private cost up to MSC and eliminates the deadweight welfare loss triangle.',
        variables: [
          { symbol: 'MPC', name: 'Marginal Private Cost', meaning: 'Direct input costs (wages, power, materials) paid by the producing firm.' },
          { symbol: 'MEC', name: 'Marginal External Cost', meaning: 'Uncompensated pollution/health damage imposed on third parties per unit.' },
          { symbol: 'MSC', name: 'Marginal Social Cost', meaning: 'True total cost to society per unit: MSC = MPC + MEC.' },
          { symbol: 'Q₁ vs Q₂', name: 'Market vs Socially Optimal Output', meaning: 'Unregulated market overproduces (Q₁ > Q₂) and underprices (P₁ < P₂).' },
          { symbol: 'τ (Tax)', name: 'Pigouvian Excise Tax', meaning: 'Per-unit tax set equal to MEC at Q₂ to internalise the negative externality.' }
        ]
      }
    },
    {
      id: 'forex',
      title: 'Foreign Exchange Market ZAR/USD (Ch 16)',
      state: { demandShift: 0, supplyShift: 0 },
      presets: [
        { label: 'Baseline R18.50 / US$1.00', values: { demandShift: 0, supplyShift: 0 } },
        { label: 'Currency Appreciation (Export / Inflow Boom)', values: { demandShift: -35, supplyShift: 35 } },
        { label: 'Currency Depreciation (Import Spike / Outflows)', values: { demandShift: 40, supplyShift: -25 } }
      ],
      sliders: [
        { key: 'demandShift', label: 'Domestic Demand for US Dollars Shift (ΔD$)', min: -50, max: 50, step: 5 },
        { key: 'supplyShift', label: 'Foreign Supply of US Dollars Shift (ΔS$)', min: -50, max: 50, step: 5 }
      ],
      decoder: {
        formula: 'Direct Quote E = R / US$1.00   (Equilibrium: D$ = S$)',
        whyItWorks: 'On the vertical axis, a higher R/$ number means the Rand is weaker (depreciation) because it takes more Rand to buy $1. South African importers and capital outflows create Demand for Dollars (D$); foreign buyers of SA exports and capital inflows create Supply of Dollars (S$). Higher D$ depreciates the Rand; higher S$ appreciates the Rand.',
        variables: [
          { symbol: 'E (R/$)', name: 'Direct Exchange Rate', meaning: 'Price of 1 US Dollar in South African Rand (higher E = Rand depreciation).' },
          { symbol: 'D$', name: 'Demand for US Dollars', meaning: 'Derived from SA imports of foreign goods, outbound tourism, and capital outflows.' },
          { symbol: 'S$', name: 'Supply of US Dollars', meaning: 'Generated by SA exports (gold, platinum, wine), inbound tourists, and foreign investment.' },
          { symbol: 'Q$', name: 'Equilibrium FX Turnover', meaning: 'Quantity of US Dollars traded where D$ intersects S$.' }
        ]
      }
    },
    {
      id: 'lorenz',
      title: 'Lorenz Curve & Gini Coefficient (Ch 13 & 21)',
      state: { giniTarget: 0.65, redistribution: 0 },
      presets: [
        { label: 'High Pre-Transfer Inequality (~0.67)', values: { giniTarget: 0.67, redistribution: 0 } },
        { label: 'Post-Progressive Tax & Social Grants', values: { giniTarget: 0.67, redistribution: 14 } },
        { label: 'Moderate Inequality Benchmark (0.40)', values: { giniTarget: 0.40, redistribution: 0 } }
      ],
      sliders: [
        { key: 'giniTarget', label: 'Market Income Inequality Baseline', min: 0.25, max: 0.72, step: 0.01 },
        { key: 'redistribution', label: 'Fiscal Redistribution Intensity (Taxes + Grants)', min: 0, max: 25, step: 1 }
      ],
      decoder: {
        formula: 'Gini = Area A ÷ (Area A + Area B) = 2 × Area A',
        whyItWorks: 'The Lorenz curve plots cumulative % of population (poorest to richest) against cumulative % of national income. If everyone earned the exact same income, the curve would follow the 45° diagonal (Gini = 0). The further the Lorenz curve bows below the 45° line, the larger the shaded Area of Inequality (A) and the closer the Gini coefficient approaches 1.',
        variables: [
          { symbol: '45° Line (0B)', name: 'Line of Perfect Equality', meaning: 'Diagonal where any x% of the population earns exactly x% of national income.' },
          { symbol: 'Area A', name: 'Area of Inequality', meaning: 'Crescent region trapped between the 45° equality line and the bowed Lorenz curve.' },
          { symbol: 'Area B', name: 'Area Beneath Lorenz Curve', meaning: 'Remaining area of the lower triangle such that Area A + Area B = 0.5.' },
          { symbol: 'Gini', name: 'Gini Coefficient (0 to 1)', meaning: 'Ratio A / (A + B): 0 = complete equality, 1 = one person receives all income.' }
        ]
      }
    }
  ];

  let activeLabId = 'keynesian';

  function initSvgLabModule() {
    const bar = document.getElementById('lab-selector-bar');
    if (!bar) return;

    function renderSelectorBar() {
      bar.innerHTML = '';
      LAB_CONFIGS.forEach((cfg) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'selector-tab' + (cfg.id === activeLabId ? ' active' : '');
        btn.textContent = cfg.title;
        btn.addEventListener('click', () => {
          activeLabId = cfg.id;
          renderSelectorBar();
          renderActiveLab();
          AudioEngine.playClick();
        });
        bar.appendChild(btn);
      });
    }

    renderSelectorBar();
    renderActiveLab();
  }

  function renderActiveLab() {
    const cfg = LAB_CONFIGS.find((c) => c.id === activeLabId) || LAB_CONFIGS[0];
    const controlsEl = document.getElementById('lab-controls-panel');
    const canvasEl = document.getElementById('lab-canvas-panel');
    if (!controlsEl || !canvasEl) return;

    const presetsHtml = cfg.presets.map((p, idx) => `
      <button type="button" class="preset-btn" data-preset-idx="${idx}">${p.label}</button>
    `).join('');

    const slidersHtml = cfg.sliders.map((s) => `
      <div class="control-group">
        <div class="control-header">
          <label for="slider-${cfg.id}-${s.key}">${s.label}</label>
          <span class="control-val tabular-nums" id="val-${cfg.id}-${s.key}">${cfg.state[s.key]}</span>
        </div>
        <input type="range" id="slider-${cfg.id}-${s.key}" data-slider-key="${s.key}" min="${s.min}" max="${s.max}" step="${s.step}" value="${cfg.state[s.key]}" />
      </div>
    `).join('');

    controlsEl.innerHTML = `
      <div class="meta-pill-row" style="justify-content: space-between; align-items: center;">
        <span class="badge badge-sky">Parameter Controls</span>
        <span class="badge badge-indigo">✋ Drag Equilibrium Point on Graph</span>
      </div>
      <h3>${cfg.title}</h3>
      <div class="preset-btn-row">${presetsHtml}</div>
      <div>${slidersHtml}</div>
    `;

    controlsEl.querySelectorAll('[data-preset-idx]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const p = cfg.presets[parseInt(btn.getAttribute('data-preset-idx'), 10)];
        if (p) {
          Object.assign(cfg.state, p.values);
          renderActiveLab();
          AudioEngine.playClick();
        }
      });
    });

    controlsEl.querySelectorAll('[data-slider-key]').forEach((input) => {
      input.addEventListener('input', () => {
        const key = input.getAttribute('data-slider-key');
        const v = parseNumSafe(input.value, cfg.state[key]);
        cfg.state[key] = v;
        const valSpan = document.getElementById(`val-${cfg.id}-${key}`);
        if (valSpan) valSpan.textContent = String(v);
        updateLabCanvas(cfg, canvasEl);
        AudioEngine.playSweep((v - parseNumSafe(input.min, 0)) / Math.max(1, parseNumSafe(input.max, 1) - parseNumSafe(input.min, 0)));
      });
    });

    updateLabCanvas(cfg, canvasEl);
  }

  function syncSliderControl(cfg, key, rawVal) {
    const s = (cfg.sliders || []).find((it) => it.key === key);
    if (!s) return;
    const step = parseNumSafe(s.step, 1);
    const clamped = Math.max(s.min, Math.min(s.max, rawVal));
    const stepped = Math.round(clamped / step) * step;
    const decimals = (String(step).split('.')[1] || '').length;
    const finalVal = Number(stepped.toFixed(decimals));
    cfg.state[key] = finalVal;
    const inp = document.getElementById(`slider-${cfg.id}-${key}`);
    if (inp) inp.value = String(finalVal);
    const span = document.getElementById(`val-${cfg.id}-${key}`);
    if (span) span.textContent = String(finalVal);
  }

  function updateLabCanvas(cfg, canvasEl) {
    const coords = computeSvgLabCoordinates(cfg.id, cfg.state);
    const { W, H, padL, padR, padT, padB } = coords;
    const axisBottom = H - padB;
    const axisRight = W - padR;

    let svgBody = '';
    let metricsHtml = '';

    if (cfg.id === 'keynesian') {
      const m = coords.model;
      const labels = resolveLabelCollisions([
        { id: '45deg', y: padT + 18, text: '45° Line (A = Y)', color: '#94a3b8' },
        { id: 'aggA', y: Math.max(padT + 18, Math.min(axisBottom - 16, coords.aEndY - 8)), text: `A = ${m.A_bar.toFixed(0)} + ${m.inducedSlope.toFixed(2)}Y`, color: '#38bdf8' }
      ]);

      const gapPoly = `<polygon points="${coords.eqX},${coords.eqY} ${coords.yfX},${coords.eqY} ${coords.yfX},${padT + (H - padT - padB) * (1 - m.Yf / coords.maxAxis)}" fill="rgba(245, 158, 11, 0.16)" stroke="rgba(245, 158, 11, 0.5)" stroke-dasharray="4 3" />`;

      svgBody = `
        ${gapPoly}
        <!-- 45-degree reference line -->
        <line x1="${padL}" y1="${axisBottom}" x2="${axisRight}" y2="${padT}" stroke="var(--svg-axis)" stroke-width="2" stroke-dasharray="6 4" />
        <!--Yf vertical line -->
        <line x1="${coords.yfX}" y1="${padT}" x2="${coords.yfX}" y2="${axisBottom}" stroke="#f59e0b" stroke-width="1.8" stroke-dasharray="4 4" />
        <text x="${Math.min(axisRight - 6, Math.max(padL + 30, coords.yfX - 6))}" y="${padT + 16}" fill="#f59e0b" font-size="11" font-weight="700" text-anchor="end">Yf = ${m.Yf.toFixed(0)}</text>
        <!-- Aggregate Spending Line A -->
        <line x1="${padL}" y1="${coords.aBarY}" x2="${axisRight}" y2="${coords.aEndY}" stroke="#38bdf8" stroke-width="3.2" />
        <!-- Equilibrium Drop Lines -->
        <line x1="${coords.eqX}" y1="${coords.eqY}" x2="${coords.eqX}" y2="${axisBottom}" stroke="#10b981" stroke-width="1.6" stroke-dasharray="4 4" />
        <line x1="${padL}" y1="${coords.eqY}" x2="${coords.eqX}" y2="${coords.eqY}" stroke="#10b981" stroke-width="1.6" stroke-dasharray="4 4" />
        <circle class="svg-drag-handle" data-drag-role="eq" cx="${coords.eqX}" cy="${coords.eqY}" r="7.5" fill="#10b981" stroke="#ffffff" stroke-width="2.2" style="cursor: grab;" data-tip="Drag vertically to shift Government Spending (Ḡ) or horizontally to move Full-Employment Target (Yf)." />
        <text x="${Math.min(axisRight - 8, coords.eqX + 10)}" y="${Math.max(padT + 20, coords.eqY - 10)}" fill="#10b981" font-size="12" font-weight="700">E0 (Y* = ${m.Y0_exact.toFixed(1)})</text>
        <text x="${axisRight - 6}" y="${labels.find(l => l.id === '45deg').y}" fill="#94a3b8" font-size="11.5" font-weight="600" text-anchor="end">45° Line (A = Y)</text>
        <text x="${axisRight - 6}" y="${labels.find(l => l.id === 'aggA').y}" fill="#38bdf8" font-size="12" font-weight="700" text-anchor="end">${labels.find(l => l.id === 'aggA').text}</text>
        <text x="${padL + 8}" y="${Math.max(padT + 16, coords.aBarY - 6)}" fill="#38bdf8" font-size="11" font-weight="700">Ā = ${m.A_bar.toFixed(0)}</text>
        <text x="${W / 2}" y="${H - 14}" fill="var(--svg-text)" font-size="12" font-weight="700" text-anchor="middle">Total Production &amp; Income (Y)</text>
        <text x="20" y="${H / 2}" fill="var(--svg-text)" font-size="12" font-weight="700" text-anchor="middle" transform="rotate(-90 20 ${H / 2})">Aggregate Spending (A)</text>
      `;

      metricsHtml = `
        <div class="kpi-bento-grid" style="grid-template-columns: repeat(4, 1fr); margin-top: 1rem;">
          <div class="kpi-tile"><div class="kpi-label">Autonomous Ā</div><div class="kpi-value">${m.A_bar.toFixed(1)}</div><div class="kpi-sub">Vertical Intercept</div></div>
          <div class="kpi-tile"><div class="kpi-label">Multiplier α</div><div class="kpi-value">${m.alphaRounded2.toFixed(2)}</div><div class="kpi-sub">Exact: ${m.alphaExact.toFixed(3)}</div></div>
          <div class="kpi-tile"><div class="kpi-label">Equilibrium Y*</div><div class="kpi-value">${m.Y0_exact.toFixed(1)}</div><div class="kpi-sub">Memo: ${m.Y0_memoRounded.toFixed(1)}</div></div>
          <div class="kpi-tile"><div class="kpi-label">Required ΔG for Yf</div><div class="kpi-value">${m.requiredDeltaG_exact >= 0 ? '+' : ''}${m.requiredDeltaG_exact.toFixed(1)}</div><div class="kpi-sub">Gap: ${m.outputGap.toFixed(1)}</div></div>
        </div>
      `;
    } else if (cfg.id === 'adas') {
      const adShift = parseNumSafe(cfg.state.adShift, 0);
      const asShift = parseNumSafe(cfg.state.asShift, 0);
      const baseEqX = padL + 0.5 * (W - padL - padR);

      svgBody = `
        <!-- LRAS Yf -->
        <line x1="${baseEqX}" y1="${padT}" x2="${baseEqX}" y2="${axisBottom}" stroke="#f59e0b" stroke-width="1.8" stroke-dasharray="5 4" />
        <text x="${baseEqX - 6}" y="${padT + 16}" fill="#f59e0b" font-size="11" font-weight="700" text-anchor="end">LRAS (Yf)</text>
        <!-- Baseline AD0 & AS0 -->
        <line x1="${padL + 30}" y1="${padT + 40}" x2="${axisRight - 30}" y2="${axisBottom - 30}" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4 4" />
        <line x1="${padL + 30}" y1="${axisBottom - 30}" x2="${axisRight - 30}" y2="${padT + 40}" stroke="#64748b" stroke-width="1.5" stroke-dasharray="4 4" />
        <!-- Shifted AD1 & AS1 -->
        <line x1="${padL + 30 + adShift * 1.8}" y1="${padT + 40 - adShift * 0.8}" x2="${axisRight - 30 + adShift * 1.8}" y2="${axisBottom - 30 - adShift * 0.8}" stroke="#38bdf8" stroke-width="3" />
        <line x1="${padL + 30 - asShift * 1.8}" y1="${axisBottom - 30 - asShift * 1.2}" x2="${axisRight - 30 - asShift * 1.8}" y2="${padT + 40 - asShift * 1.2}" stroke="#f43f5e" stroke-width="3" />
        <circle class="svg-drag-handle" data-drag-role="eq" cx="${coords.eqX}" cy="${coords.eqY}" r="7.5" fill="#10b981" stroke="#fff" stroke-width="2.2" style="cursor: grab;" data-tip="Drag E1 horizontally/vertically to shift Aggregate Demand (AD) and Aggregate Supply (AS)." />
        <text x="${Math.min(axisRight - 10, coords.eqX + 12)}" y="${Math.max(padT + 20, coords.eqY - 8)}" fill="#10b981" font-size="12" font-weight="700">E1 (Y=${coords.Y_eq.toFixed(0)}, P=${coords.P_eq.toFixed(0)})</text>
        <text x="${axisRight - 10}" y="${axisBottom - 45}" fill="#38bdf8" font-size="12" font-weight="700" text-anchor="end">AD1</text>
        <text x="${axisRight - 10}" y="${padT + 34}" fill="#f43f5e" font-size="12" font-weight="700" text-anchor="end">AS1</text>
        <text x="${W / 2}" y="${H - 14}" fill="var(--svg-text)" font-size="12" font-weight="700" text-anchor="middle">Real Output / National Income (Y)</text>
        <text x="20" y="${H / 2}" fill="var(--svg-text)" font-size="12" font-weight="700" text-anchor="middle" transform="rotate(-90 20 ${H / 2})">General Price Level (P)</text>
      `;

      const regime = asShift > 10 && adShift <= 0 ? 'Cost-Push Stagflation (P↑, Y↓)' : (adShift > 10 ? 'Demand-Pull Expansion (P↑, Y↑)' : 'Macroeconomic Equilibrium');
      metricsHtml = `
        <div class="kpi-bento-grid" style="grid-template-columns: repeat(3, 1fr); margin-top: 1rem;">
          <div class="kpi-tile"><div class="kpi-label">Equilibrium Output Y*</div><div class="kpi-value">${coords.Y_eq.toFixed(1)}</div><div class="kpi-sub">Potential Yf = 120.0</div></div>
          <div class="kpi-tile"><div class="kpi-label">Price Level Index P*</div><div class="kpi-value">${coords.P_eq.toFixed(1)}</div><div class="kpi-sub">Baseline P0 = 80.0</div></div>
          <div class="kpi-tile"><div class="kpi-label">Active Regime</div><div class="kpi-value" style="font-size: 1rem;">${regime}</div><div class="kpi-sub">Macro Theory</div></div>
        </div>
      `;
    } else if (cfg.id === 'money') {
      const inc = parseNumSafe(cfg.state.incomeShift, 0);
      svgBody = `
        <!-- Horizontal Endogenous Interest Rate Line i0 -->
        <line x1="${padL}" y1="${coords.eqY}" x2="${axisRight}" y2="${coords.eqY}" stroke="#10b981" stroke-width="3" />
        <text x="${axisRight - 8}" y="${Math.max(padT + 16, coords.eqY - 8)}" fill="#10b981" font-size="12" font-weight="700" text-anchor="end">Repo-Linked Rate i0 = ${coords.repo.toFixed(2)}% (Endogenous Supply)</text>
        <!-- Money Demand Curve L = L1(Y) + L2(i) -->
        <line x1="${padL + 60 + inc * 1.5}" y1="${padT + 25}" x2="${axisRight - 50 + inc * 1.5}" y2="${axisBottom - 20}" stroke="#38bdf8" stroke-width="3.2" />
        <line x1="${coords.eqX}" y1="${coords.eqY}" x2="${coords.eqX}" y2="${axisBottom}" stroke="#38bdf8" stroke-width="1.6" stroke-dasharray="4 4" />
        <circle class="svg-drag-handle" data-drag-role="eq" cx="${coords.eqX}" cy="${coords.eqY}" r="7.5" fill="#38bdf8" stroke="#fff" stroke-width="2.2" style="cursor: grab;" data-tip="Drag vertically to adjust the SARB Repo Rate (i0) or horizontally to shift Money Demand (L)." />
        <text x="${Math.min(axisRight - 10, coords.eqX + 10)}" y="${Math.min(axisBottom - 12, coords.eqY + 22)}" fill="#38bdf8" font-size="12" font-weight="700">E (M* = R${coords.M_eq.toFixed(0)}bn)</text>
        <text x="${axisRight - 12}" y="${axisBottom - 28}" fill="#38bdf8" font-size="12" font-weight="700" text-anchor="end">L = L1(Y) + L2(i)</text>
        <text x="${W / 2}" y="${H - 14}" fill="var(--svg-text)" font-size="12" font-weight="700" text-anchor="middle">Quantity of Money (M) — Demand-Determined</text>
        <text x="20" y="${H / 2}" fill="var(--svg-text)" font-size="12" font-weight="700" text-anchor="middle" transform="rotate(-90 20 ${H / 2})">Interest Rate i (%)</text>
      `;
      metricsHtml = `
        <div class="kpi-bento-grid" style="grid-template-columns: repeat(3, 1fr); margin-top: 1rem;">
          <div class="kpi-tile"><div class="kpi-label">SARB Repo Rate</div><div class="kpi-value">${coords.repo.toFixed(2)}%</div><div class="kpi-sub">Sets Commercial Bank Cost</div></div>
          <div class="kpi-tile"><div class="kpi-label">Endogenous Money M*</div><div class="kpi-value">R${coords.M_eq.toFixed(0)}bn</div><div class="kpi-sub">No Vertical Ms Curve!</div></div>
          <div class="kpi-tile"><div class="kpi-label">Monetary Law</div><div class="kpi-value" style="font-size: 0.95rem;">Accommodation Policy</div><div class="kpi-sub">Quantity M adjusts to L at i0</div></div>
        </div>
      `;
    } else if (cfg.id === 'externality') {
      svgBody = `
        <!-- Shaded Deadweight Loss Triangle -->
        <polygon points="${coords.optX},${coords.optY} ${coords.mktX},${coords.mktY} ${coords.mktX},${ Math.max(padT + 15, coords.mktY - (cfg.state.mec - cfg.state.pigouvianTax) * 1.4)}" fill="rgba(244, 63, 94, 0.24)" stroke="#f43f5e" stroke-width="1.5" />
        <!-- Demand DD -->
        <line x1="${padL + 20}" y1="${padT + 30}" x2="${axisRight - 30}" y2="${axisBottom - 25}" stroke="#38bdf8" stroke-width="2.8" />
        <!-- MPC -->
        <line x1="${padL + 20}" y1="${axisBottom - 35}" x2="${axisRight - 30}" y2="${padT + 75}" stroke="#94a3b8" stroke-width="2.4" stroke-dasharray="5 3" />
        <!-- MSC = MPC + MEC -->
        <line x1="${padL + 20}" y1="${axisBottom - 85}" x2="${axisRight - 30}" y2="${padT + 25}" stroke="#f43f5e" stroke-width="3" />
        <circle class="svg-drag-handle" data-drag-role="opt" cx="${coords.optX}" cy="${coords.optY}" r="7" fill="#10b981" stroke="#fff" stroke-width="2" style="cursor: grab;" data-tip="Drag to adjust Marginal External Pollution Cost (MEC)." />
        <circle class="svg-drag-handle" data-drag-role="eq" cx="${coords.mktX}" cy="${coords.mktY}" r="7" fill="#f59e0b" stroke="#fff" stroke-width="2" style="cursor: grab;" data-tip="Drag toward E2 to raise the Pigouvian Tax (τ) and eliminate Deadweight Loss." />
        <text x="${Math.max(padL + 60, coords.optX - 8)}" y="${coords.optY - 12}" fill="#10b981" font-size="11.5" font-weight="700" text-anchor="end">Social Optimum E2 (Q2=${coords.Q_opt.toFixed(1)})</text>
        <text x="${Math.min(axisRight - 8, coords.mktX + 10)}" y="${coords.mktY + 18}" fill="#f59e0b" font-size="11.5" font-weight="700">Market Equilibrium E1 (Q1=${coords.Q_market.toFixed(1)})</text>
        <text x="${axisRight - 10}" y="${padT + 22}" fill="#f43f5e" font-size="12" font-weight="700" text-anchor="end">MSC (Social Cost)</text>
        <text x="${axisRight - 10}" y="${padT + 72}" fill="#94a3b8" font-size="11.5" font-weight="700" text-anchor="end">MPC + Tax</text>
        <text x="${axisRight - 10}" y="${axisBottom - 30}" fill="#38bdf8" font-size="12" font-weight="700" text-anchor="end">Demand (MPB = MSB)</text>
        <text x="${W / 2}" y="${H - 14}" fill="var(--svg-text)" font-size="12" font-weight="700" text-anchor="middle">Quantity of Polluting Output (Q)</text>
        <text x="20" y="${H / 2}" fill="var(--svg-text)" font-size="12" font-weight="700" text-anchor="middle" transform="rotate(-90 20 ${H / 2})">Price &amp; Marginal Cost (R)</text>
      `;
      metricsHtml = `
        <div class="kpi-bento-grid" style="grid-template-columns: repeat(3, 1fr); margin-top: 1rem;">
          <div class="kpi-tile"><div class="kpi-label">Market Output Q1</div><div class="kpi-value">${coords.Q_market.toFixed(1)}</div><div class="kpi-sub">Price P1 = R${coords.P_market.toFixed(1)}</div></div>
          <div class="kpi-tile"><div class="kpi-label">Socially Optimal Q2</div><div class="kpi-value">${coords.Q_opt.toFixed(1)}</div><div class="kpi-sub">Price P2 = R${coords.P_opt.toFixed(1)}</div></div>
          <div class="kpi-tile"><div class="kpi-label">Deadweight Welfare Loss</div><div class="kpi-value">R${coords.dwl.toFixed(1)}</div><div class="kpi-sub">${coords.dwl < 0.5 ? '100% Internalised!' : 'Overproduction Q1 > Q2'}</div></div>
        </div>
      `;
    } else if (cfg.id === 'forex') {
      const dS = parseNumSafe(cfg.state.demandShift, 0);
      const sS = parseNumSafe(cfg.state.supplyShift, 0);
      svgBody = `
        <line x1="${padL + 40 + dS * 1.4}" y1="${padT + 30}" x2="${axisRight - 40 + dS * 1.4}" y2="${axisBottom - 25}" stroke="#38bdf8" stroke-width="3" />
        <line x1="${padL + 40 + sS * 1.4}" y1="${axisBottom - 25}" x2="${axisRight - 40 + sS * 1.4}" y2="${padT + 30}" stroke="#10b981" stroke-width="3" />
        <line x1="${padL}" y1="${coords.eqY}" x2="${coords.eqX}" y2="${coords.eqY}" stroke="#f59e0b" stroke-width="1.6" stroke-dasharray="4 4" />
        <line x1="${coords.eqX}" y1="${coords.eqY}" x2="${coords.eqX}" y2="${axisBottom}" stroke="#f59e0b" stroke-width="1.6" stroke-dasharray="4 4" />
        <circle class="svg-drag-handle" data-drag-role="eq" cx="${coords.eqX}" cy="${coords.eqY}" r="7.5" fill="#f59e0b" stroke="#fff" stroke-width="2.2" style="cursor: grab;" data-tip="Drag to shift Dollar Demand (D$) and Dollar Supply (S$)." />
        <text x="${Math.min(axisRight - 10, coords.eqX + 12)}" y="${coords.eqY - 10}" fill="#f59e0b" font-size="12" font-weight="700">R${coords.E_zar.toFixed(2)} / US$1.00</text>
        <text x="${axisRight - 10}" y="${padT + 26}" fill="#10b981" font-size="12" font-weight="700" text-anchor="end">Supply of US$ (S$)</text>
        <text x="${axisRight - 10}" y="${axisBottom - 32}" fill="#38bdf8" font-size="12" font-weight="700" text-anchor="end">Demand for US$ (D$)</text>
        <text x="${W / 2}" y="${H - 14}" fill="var(--svg-text)" font-size="12" font-weight="700" text-anchor="middle">Quantity of US Dollars Traded (Q$bn)</text>
        <text x="20" y="${H / 2}" fill="var(--svg-text)" font-size="12" font-weight="700" text-anchor="middle" transform="rotate(-90 20 ${H / 2})">Rand per US Dollar (R/$)</text>
      `;
      const status = coords.E_zar < 18.45 ? 'Rand Appreciation (Cheaper Imports, Dearer Exports)' : (coords.E_zar > 18.55 ? 'Rand Depreciation (Boosts Exports, Raises CPI)' : 'Baseline ZAR/USD Equilibrium');
      metricsHtml = `
        <div class="kpi-bento-grid" style="grid-template-columns: repeat(3, 1fr); margin-top: 1rem;">
          <div class="kpi-tile"><div class="kpi-label">Exchange Rate (R/$)</div><div class="kpi-value">R${coords.E_zar.toFixed(2)}</div><div class="kpi-sub">Baseline: R18.50 / $</div></div>
          <div class="kpi-tile"><div class="kpi-label">FX Volume Traded</div><div class="kpi-value">$${coords.Q_fx.toFixed(1)}bn</div><div class="kpi-sub">Daily Spot Turnover</div></div>
          <div class="kpi-tile"><div class="kpi-label">Currency Regime</div><div class="kpi-value" style="font-size: 0.9rem;">${status}</div><div class="kpi-sub">Foreign Sector</div></div>
        </div>
      `;
    } else {
      // Lorenz Curve
      const g = coords.gini;
      const ctrlX = padL + (0.5 + g * 0.42) * (W - padL - padR);
      const ctrlY = axisBottom - (0.5 - g * 0.45) * (H - padT - padB);
      svgBody = `
        <!-- Shaded Area of Inequality A -->
        <path d="M ${padL} ${axisBottom} Q ${ctrlX} ${ctrlY} ${axisRight} ${padT} L ${padL} ${axisBottom} Z" fill="rgba(99, 102, 241, 0.24)" stroke="none" />
        <!-- 45-degree Line of Perfect Equality 0B -->
        <line x1="${padL}" y1="${axisBottom}" x2="${axisRight}" y2="${padT}" stroke="#10b981" stroke-width="2.5" stroke-dasharray="6 4" />
        <!-- Lorenz Curve -->
        <path d="M ${padL} ${axisBottom} Q ${ctrlX} ${ctrlY} ${axisRight} ${padT}" fill="none" stroke="#38bdf8" stroke-width="3.2" />
        <circle class="svg-drag-handle" data-drag-role="eq" cx="${coords.eqX}" cy="${coords.eqY}" r="7.5" fill="#38bdf8" stroke="#fff" stroke-width="2.2" style="cursor: grab;" data-tip="Drag up/down to bend the Lorenz Curve and change the Gini Coefficient." />
        <text x="${W / 2 - 20}" y="${H / 2 - 10}" fill="#10b981" font-size="12" font-weight="700">Line of Perfect Equality (0B)</text>
        <text x="${W / 2 + 15}" y="${H / 2 + 45}" fill="#38bdf8" font-size="12" font-weight="700">Area of Inequality (A)</text>
        <text x="${W / 2}" y="${H - 14}" fill="var(--svg-text)" font-size="12" font-weight="700" text-anchor="middle">Cumulative % of Population (Poorest to Richest)</text>
        <text x="20" y="${H / 2}" fill="var(--svg-text)" font-size="12" font-weight="700" text-anchor="middle" transform="rotate(-90 20 ${H / 2})">Cumulative % of National Income</text>
      `;
      metricsHtml = `
        <div class="kpi-bento-grid" style="grid-template-columns: repeat(3, 1fr); margin-top: 1rem;">
          <div class="kpi-tile"><div class="kpi-label">Gini Coefficient</div><div class="kpi-value">${g.toFixed(2)}</div><div class="kpi-sub">0 = Perfect Equality, 1 = Max Inequality</div></div>
          <div class="kpi-tile"><div class="kpi-label">Gini Index (0–100)</div><div class="kpi-value">${(g * 100).toFixed(0)}</div><div class="kpi-sub">Area A / (Area A + Area B)</div></div>
          <div class="kpi-tile"><div class="kpi-label">Bottom 50% Income Share</div><div class="kpi-value">${Math.max(4, (50 * (1 - g)).toFixed(1))}%</div><div class="kpi-sub">Lorenz Distribution</div></div>
        </div>
      `;
    }

    canvasEl.innerHTML = `
      <div class="svg-canvas-wrapper">
        <svg id="lab-interactive-svg" viewBox="0 0 ${W} ${H}" role="img" aria-label="${cfg.title} Interactive Vector Diagram">
          <!-- Coordinate Grid -->
          <line x1="${padL}" y1="${padT}" x2="${padL}" y2="${axisBottom}" stroke="var(--svg-axis)" stroke-width="2" />
          <line x1="${padL}" y1="${axisBottom}" x2="${axisRight}" y2="${axisBottom}" stroke="var(--svg-axis)" stroke-width="2" />
          ${svgBody}
        </svg>
      </div>
      ${metricsHtml}
      ${renderDecoderCardHtml(cfg.decoder, '💡 Plain-English Variable Decoder & Model Intuition')}
    `;

    // Wire direct pointer dragging on the SVG equilibrium / curve handles
    const svgEl = canvasEl.querySelector('#lab-interactive-svg');
    if (svgEl) {
      svgEl.querySelectorAll('.svg-drag-handle').forEach((handle) => {
        handle.addEventListener('pointerdown', (e) => {
          e.preventDefault();
          hideFloatingTooltip();
          const role = handle.getAttribute('data-drag-role') || 'eq';
          const onMove = (ev) => {
            const liveSvg = canvasEl.querySelector('#lab-interactive-svg');
            if (!liveSvg) return;
            const rect = liveSvg.getBoundingClientRect();
            if (!rect.width || !rect.height) return;
            hideFloatingTooltip();
            const sx = ((ev.clientX - rect.left) / rect.width) * W;
            const sy = ((ev.clientY - rect.top) / rect.height) * H;
            const normX = Math.max(0, Math.min(1, (sx - padL) / (W - padL - padR)));
            const normY = Math.max(0, Math.min(1, 1 - (sy - padT) / (H - padT - padB)));

            if (cfg.id === 'keynesian') {
              syncSliderControl(cfg, 'G0', normY * 500);
              syncSliderControl(cfg, 'Yf', 100 + normX * 2300);
            } else if (cfg.id === 'adas') {
              const targetY = normX * 240;
              const targetP = normY * 200;
              syncSliderControl(cfg, 'adShift', (targetY - 120) * 0.5 + (targetP - 80));
              syncSliderControl(cfg, 'asShift', (targetP - 80) - (targetY - 120) * 0.5);
            } else if (cfg.id === 'money') {
              syncSliderControl(cfg, 'repoRate', normY * 16);
              syncSliderControl(cfg, 'incomeShift', (normX * 1000 - 620 + cfg.state.repoRate * 32) / 3.5);
            } else if (cfg.id === 'externality') {
              const qVal = normX * 160;
              if (role === 'opt') {
                syncSliderControl(cfg, 'mec', 160 - 1.6 * qVal);
              } else {
                syncSliderControl(cfg, 'pigouvianTax', 160 - 1.6 * qVal);
              }
            } else if (cfg.id === 'forex') {
              syncSliderControl(cfg, 'demandShift', (normX - 0.5) * 100 + (normY - 0.66) * 80);
              syncSliderControl(cfg, 'supplyShift', (normX - 0.5) * 100 - (normY - 0.66) * 80);
            } else if (cfg.id === 'lorenz') {
              syncSliderControl(cfg, 'giniTarget', 1 - 2 * normY);
            }
            updateLabCanvas(cfg, canvasEl);
          };
          const onUp = () => {
            window.removeEventListener('pointermove', onMove);
            window.removeEventListener('pointerup', onUp);
            window.removeEventListener('pointercancel', onUp);
          };
          window.addEventListener('pointermove', onMove);
          window.addEventListener('pointerup', onUp);
          window.addEventListener('pointercancel', onUp);
        });
      });
    }
  }

  /* --------------------------------------------------------------------------
     MODULE 3: Bidirectional Quantitative Solvers (6 Solvers)
     -------------------------------------------------------------------------- */
  const SOLVER_TABS = [
    { id: 'keynesian_solver', label: 'Keynesian Multiplier & Target Gap Solver' },
    { id: 'nat_accounts_solver', label: 'National Accounts & Value-Added Solver' },
    { id: 'sars_tax_solver', label: 'Personal Income Tax & Rebate Solver' },
    { id: 'deflator_solver', label: 'GDP Deflator, Inflation & Rule of 70 Solver' },
    { id: 'labour_solver', label: 'Labour Market (Strict vs Broad Unemployment)' },
    { id: 'money_solver', label: 'Monetary Aggregates (M1 / M2 / M3) & Multiplier' }
  ];

  const SOLVER_DECODERS = {
    keynesian_solver: {
      formula: 'Y* = α × Ā   |   α = 1 / [1 − c(1 − t) + m]   |   ΔG = (Yf − Y*) / α',
      whyItWorks: 'Every R1 of autonomous spending (Ā = C̄ − cT̄ + Ī + Ḡ + X̄ − Z̄) becomes someone else’s income, of which c(1 − t) is re-spent domestically and m leaks out to imports. Summing the infinite geometric series yields the multiplier α = 1 / [1 − c(1 − t) + m]. To close an output gap ΔY = Yf − Y*, government only needs to inject ΔG = ΔY / α.',
      variables: [
        { symbol: 'C̄, Ī, Ḡ, X̄, Z̄', name: 'Autonomous Spending Components', meaning: 'Spending levels that do not depend on current national income Y.' },
        { symbol: 'c (MPC)', name: 'Marginal Propensity to Consume', meaning: 'Share of each extra R1 of disposable income spent on consumption.' },
        { symbol: 't', name: 'Proportional Tax Rate', meaning: 'Share of income taxed by government (T = tY), reducing disposable income.' },
        { symbol: 'm (MPI)', name: 'Marginal Propensity to Import', meaning: 'Share of each extra R1 of income spent on foreign imports.' },
        { symbol: 'α', name: 'Open-Economy Multiplier', meaning: 'Total change in equilibrium income Y* per R1 change in autonomous spending.' },
        { symbol: 'Yf & ΔG', name: 'Full-Employment Target & Fiscal Injection', meaning: 'Target output Yf and the change in government spending ΔG required to reach it.' }
      ]
    },
    nat_accounts_solver: {
      formula: 'GDPbp = GDPmp − T_prod + S_prod   |   GDPfc = GDPbp − T_other + S_other   |   GNI = GDP + Net Factor Income',
      whyItWorks: 'Market prices (GDPmp) include indirect product taxes (like VAT and excise duties) and deduct product subsidies. Stripping out product taxes and adding back product subsidies reveals Basic Prices (GDPbp); stripping out other production taxes (payroll/licences) and adding production subsidies reveals Factor Cost (GDPfc). Adjusting for cross-border primary factor income converts domestic GDP into national GNI.',
      variables: [
        { symbol: 'GDPmp', name: 'GDP at Market Prices', meaning: 'Value of domestic output at final prices paid by purchasers (expenditure method).' },
        { symbol: 'GDPbp', name: 'GDP at Basic Prices', meaning: 'Amount producers receive before product taxes (VAT) but including product subsidies.' },
        { symbol: 'GDPfc', name: 'GDP at Factor Cost', meaning: 'Total income earned by factors of production (labour, capital, land, entrepreneurship).' },
        { symbol: 'GDE', name: 'Gross Domestic Expenditure', meaning: 'C + I + G = GDPmp − X + Z (total spending inside the country).' },
        { symbol: 'GNI / NI', name: 'Gross National Income & Net National Income', meaning: 'GNI = GDP + (Factor Income Received − Paid); subtracting depreciation yields NNI.' }
      ]
    },
    sars_tax_solver: {
      formula: 'Gross Tax = Base + MTR × (Income − Bracket Min)   |   Net Tax = Gross Tax − Rebates',
      whyItWorks: 'Under South Africa’s progressive statutory income tax schedule, only the slice of taxable income above the bracket threshold is taxed at the Marginal Tax Rate (MTR), added to the cumulative base tax from lower brackets. Age-based statutory rebates (Primary <65, plus Secondary ≥65, plus Tertiary ≥75) are subtracted from Gross Tax to determine Net Tax Payable.',
      variables: [
        { symbol: 'Taxable Y', name: 'Annual Taxable Income', meaning: 'Gross income minus allowable deductions subject to the statutory bracket table.' },
        { symbol: 'MTR', name: 'Marginal Tax Rate (%)', meaning: 'Statutory percentage tax rate applied to the next R1 earned in your active bracket.' },
        { symbol: 'Gross Tax', name: 'Pre-Rebate Bracket Tax', meaning: 'Base tax of the bracket plus MTR multiplied by income exceeding the bracket floor.' },
        { symbol: 'Rebate', name: 'Statutory Age Tax Rebate', meaning: 'Direct rand reduction off Gross Tax (Primary, Secondary ≥65, Tertiary ≥75).' },
        { symbol: 'ATR (Effective)', name: 'Average / Effective Tax Rate', meaning: '(Net Tax Payable ÷ Taxable Income) × 100; in a progressive system MTR > ATR.' }
      ]
    },
    deflator_solver: {
      formula: 'GDP Deflator = (Nominal GDP ÷ Real GDP) × 100   |   Doubling Time ≈ 70 ÷ g',
      whyItWorks: 'Nominal GDP grows when either physical output rises or prices inflate. Dividing Nominal GDP by constant-price Real GDP isolates the economy-wide price index (GDP Deflator). Percentage change in the deflator measures broad inflation, while the Rule of 70 (70 ÷ annual real growth rate g%) approximates how many years it takes real output to double.',
      variables: [
        { symbol: 'Nominal GDP', name: 'Current-Price GDP', meaning: 'Output valued at the prices prevailing in that same year (includes inflation).' },
        { symbol: 'Real GDP', name: 'Constant-Price GDP', meaning: 'Output valued at base-year prices (isolates true physical volume growth).' },
        { symbol: 'Deflator', name: 'Implicit GDP Price Deflator', meaning: '(Nominal GDP ÷ Real GDP) × 100; equals 100 in the base year.' },
        { symbol: 'π (Inflation)', name: 'Deflator Inflation Rate (%)', meaning: '[(Deflator_t1 − Deflator_t0) ÷ Deflator_t0] × 100.' },
        { symbol: '70 / g', name: 'Rule of 70 Doubling Years', meaning: 'Years needed for real GDP to double at an annual compound growth rate of g%.' }
      ]
    },
    labour_solver: {
      formula: 'u = (Unemployed ÷ LF) × 100   |   LF = E + U   |   LFPR = (LF ÷ Working-Age Pop) × 100',
      whyItWorks: 'The working-age population (aged 15–64) splits into the economically active Labour Force (Employed + Unemployed) and the Not Economically Active. The Strict definition counts only jobless people who actively searched for work; the Expanded (Broad) definition adds discouraged work-seekers to both the numerator (Unemployed) and the denominator (Labour Force).',
      variables: [
        { symbol: 'E', name: 'Employed Persons', meaning: 'Working-age individuals performing work for pay, profit, or family gain.' },
        { symbol: 'U (Strict)', name: 'Strictly Unemployed', meaning: 'Jobless people aged 15–64 who can work and actively searched in the reference period.' },
        { symbol: 'Discouraged', name: 'Discouraged Work-Seekers', meaning: 'Want to work and are available, but gave up actively searching.' },
        { symbol: 'LF', name: 'Economically Active Population (Labour Force)', meaning: 'Strict LF = E + U_strict; Broad LF = E + U_strict + Discouraged.' },
        { symbol: 'u & LFPR', name: 'Unemployment Rate & Participation Rate', meaning: 'u = (U ÷ LF) × 100; LFPR = (LF ÷ Working-Age Population) × 100.' }
      ]
    },
    money_solver: {
      formula: 'M1 = C + D   |   M2 = M1 + Short/Medium   |   M3 = M2 + Long-Term   |   Multiplier = 1 / b',
      whyItWorks: 'The SARB classifies money by liquidity: Narrow Money (M1) includes only notes/coins outside banks (C) plus immediate cheque/demand deposits (D). Adding short- and medium-term deposits gives M2, and adding long-term deposits gives M3. Under a fractional cash reserve ratio b, each R1 of cash reserves supports up to 1/b in total bank deposits.',
      variables: [
        { symbol: 'C', name: 'Coins & Banknotes in Circulation', meaning: 'Physical currency held by the public outside the monetary banking sector.' },
        { symbol: 'D', name: 'Demand (Cheque) Deposits', meaning: 'Immediately accessible bank deposits transferable by card, EFT, or cheque.' },
        { symbol: 'M1', name: 'Narrow Money Supply', meaning: 'C + D — performs the direct medium-of-exchange function.' },
        { symbol: 'M2 & M3', name: 'Broad & Comprehensive Money Supply', meaning: 'M2 = M1 + short/medium deposits; M3 = M2 + long-term deposits (store of value).' },
        { symbol: 'b & 1/b', name: 'Cash Reserve Ratio & Credit Multiplier', meaning: 'Required reserve fraction b and theoretical deposit multiplier 1 / b.' }
      ]
    }
  };

  let activeSolverId = 'keynesian_solver';

  function initSolversModule() {
    const bar = document.getElementById('solver-selector-bar');
    if (!bar) return;

    function renderBar() {
      bar.innerHTML = '';
      SOLVER_TABS.forEach((t) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'selector-tab' + (t.id === activeSolverId ? ' active' : '');
        btn.textContent = t.label;
        btn.addEventListener('click', () => {
          activeSolverId = t.id;
          renderBar();
          renderActiveSolver();
          AudioEngine.playClick();
        });
        bar.appendChild(btn);
      });
    }

    renderBar();
    renderActiveSolver();
  }

  function renderActiveSolver() {
    const stage = document.getElementById('solver-stage-container');
    if (!stage) return;
    const decoderHtml = renderDecoderCardHtml(
      SOLVER_DECODERS[activeSolverId] || SOLVER_DECODERS.keynesian_solver,
      '💡 Plain-English Variable Decoder & Why This Formula Works'
    );

    if (activeSolverId === 'keynesian_solver') {
      stage.innerHTML = `
        <div class="glass-card">
          <h3>Open-Economy Keynesian Equilibrium &amp; Inverse Fiscal Target Solver (Ch 17–18)</h3>
          <p style="font-size: 0.88rem; margin-bottom: 1rem;">Supports both standard $Z = \\bar{Z} + mY$ and disposable-income import functions $Z = \\bar{Z} + mY_d$. Zero values ($0$) are preserved accurately.</p>
          <div class="solver-input-grid">
            <div class="input-field-wrap"><label>Autonomous C̄</label><input type="number" id="ks-c0" class="num-input" value="100" step="5" /></div>
            <div class="input-field-wrap"><label>MPC (c)</label><input type="number" id="ks-c" class="num-input" value="0.8" step="0.05" /></div>
            <div class="input-field-wrap"><label>Investment Ī</label><input type="number" id="ks-i0" class="num-input" value="100" step="10" /></div>
            <div class="input-field-wrap"><label>Gov Spending Ḡ</label><input type="number" id="ks-g0" class="num-input" value="250" step="10" /></div>
            <div class="input-field-wrap"><label>Tax Rate (t)</label><input type="number" id="ks-t" class="num-input" value="0.2" step="0.05" /></div>
            <div class="input-field-wrap"><label>Exports X̄</label><input type="number" id="ks-x0" class="num-input" value="300" step="10" /></div>
            <div class="input-field-wrap"><label>Autonomous Z̄</label><input type="number" id="ks-z0" class="num-input" value="20" step="5" /></div>
            <div class="input-field-wrap"><label>MPI (m)</label><input type="number" id="ks-m" class="num-input" value="0.1" step="0.05" /></div>
            <div class="input-field-wrap"><label>Target Full-Employment Yf</label><input type="number" id="ks-yf" class="num-input" value="1909.6" step="10" /></div>
          </div>
          <div id="ks-output"></div>
        </div>
        ${decoderHtml}
      `;
      const update = () => {
        const res = solveKeynesianModel({
          C0: document.getElementById('ks-c0').value,
          c: document.getElementById('ks-c').value,
          I0: document.getElementById('ks-i0').value,
          G0: document.getElementById('ks-g0').value,
          t: document.getElementById('ks-t').value,
          X0: document.getElementById('ks-x0').value,
          Z0: document.getElementById('ks-z0').value,
          m: document.getElementById('ks-m').value,
          Yf: document.getElementById('ks-yf').value
        });
        document.getElementById('ks-output').innerHTML = `
          <div class="kpi-bento-grid" style="grid-template-columns: repeat(3, 1fr);">
            <div class="kpi-tile"><div class="kpi-label">Autonomous Spending Ā</div><div class="kpi-value">${res.A_bar.toFixed(2)}</div><div class="kpi-sub">C̄ + Ī + Ḡ + X̄ - Z̄</div></div>
            <div class="kpi-tile"><div class="kpi-label">Multiplier α (2 d.p. / Exact)</div><div class="kpi-value">${res.alphaRounded2.toFixed(2)} / ${res.alphaExact.toFixed(4)}</div><div class="kpi-sub">1 / [1 - c(1-t) + m]</div></div>
            <div class="kpi-tile"><div class="kpi-label">Equilibrium Income Y*</div><div class="kpi-value">${res.Y0_memoRounded.toFixed(2)}</div><div class="kpi-sub">Exact unrounded: ${res.Y0_exact.toFixed(2)}</div></div>
            <div class="kpi-tile"><div class="kpi-label">Government Budget (T - G)</div><div class="kpi-value">${res.budgetBalance.toFixed(2)}</div><div class="kpi-sub">Taxes T = ${res.T_eq.toFixed(2)}</div></div>
            <div class="kpi-tile"><div class="kpi-label">Net Exports (X - Z)</div><div class="kpi-value">${res.NX_eq.toFixed(2)}</div><div class="kpi-sub">Imports Z = ${res.Z_eq.toFixed(2)}</div></div>
            <div class="kpi-tile"><div class="kpi-label">Inverse Target: ΔG Needed</div><div class="kpi-value">${res.requiredDeltaG_memo >= 0 ? '+' : ''}${res.requiredDeltaG_memo.toFixed(2)}</div><div class="kpi-sub">To close gap ΔY = ${res.outputGap.toFixed(2)}</div></div>
          </div>
        `;
      };
      stage.querySelectorAll('input').forEach((inp) => inp.addEventListener('input', update));
      update();
    } else if (activeSolverId === 'nat_accounts_solver') {
      stage.innerHTML = `
        <div class="glass-card">
          <h3>National Accounts Valuation &amp; GDE / GNI / NI Solver (Ch 13)</h3>
          <div class="solver-input-grid" style="margin-top: 1rem;">
            <div class="input-field-wrap"><label>GDP at Market Prices (GDPmp)</label><input type="number" id="na-gdpmp" class="num-input" value="1530580" /></div>
            <div class="input-field-wrap"><label>Taxes on Products</label><input type="number" id="na-tprod" class="num-input" value="205562" /></div>
            <div class="input-field-wrap"><label>Subsidies on Products</label><input type="number" id="na-sprod" class="num-input" value="11433" /></div>
            <div class="input-field-wrap"><label>Other Taxes on Production</label><input type="number" id="na-tother" class="num-input" value="0" /></div>
            <div class="input-field-wrap"><label>Other Subsidies on Production</label><input type="number" id="na-sother" class="num-input" value="0" /></div>
            <div class="input-field-wrap"><label>Depreciation (Capital Consumption)</label><input type="number" id="na-dep" class="num-input" value="170986" /></div>
            <div class="input-field-wrap"><label>Factor Income Received from Abroad</label><input type="number" id="na-firec" class="num-input" value="1500" /></div>
            <div class="input-field-wrap"><label>Factor Income Paid to Foreigners</label><input type="number" id="na-fipaid" class="num-input" value="1800" /></div>
            <div class="input-field-wrap"><label>Exports (X)</label><input type="number" id="na-x" class="num-input" value="492646" /></div>
            <div class="input-field-wrap"><label>Imports (Z)</label><input type="number" id="na-z" class="num-input" value="569321" /></div>
          </div>
          <div id="na-output"></div>
        </div>
        ${decoderHtml}
      `;
      const update = () => {
        const res = solveNationalAccounts({
          GDPmp: document.getElementById('na-gdpmp').value,
          taxesOnProducts: document.getElementById('na-tprod').value,
          subsidiesOnProducts: document.getElementById('na-sprod').value,
          taxesOnProd: document.getElementById('na-tother').value,
          subsidiesOnProd: document.getElementById('na-sother').value,
          depreciation: document.getElementById('na-dep').value,
          factorIncomeRec: document.getElementById('na-firec').value,
          factorIncomePaid: document.getElementById('na-fipaid').value,
          exportsX: document.getElementById('na-x').value,
          importsZ: document.getElementById('na-z').value
        });
        document.getElementById('na-output').innerHTML = `
          <div class="kpi-bento-grid" style="grid-template-columns: repeat(3, 1fr);">
            <div class="kpi-tile"><div class="kpi-label">GDP at Basic Prices (GDPbp)</div><div class="kpi-value">R${res.GDPbp.toLocaleString()}</div><div class="kpi-sub">GDPmp - T_products + S_products</div></div>
            <div class="kpi-tile"><div class="kpi-label">GDP at Factor Cost (GDPfc)</div><div class="kpi-value">R${res.GDPfc.toLocaleString()}</div><div class="kpi-sub">Factor Cost Valuation Identity</div></div>
            <div class="kpi-tile"><div class="kpi-label">GNI / GNP at Market Prices</div><div class="kpi-value">R${res.GNImp.toLocaleString()}</div><div class="kpi-sub">Net Primary Income: ${res.netFactorIncome}</div></div>
            <div class="kpi-tile"><div class="kpi-label">Gross Domestic Expenditure (GDEmp)</div><div class="kpi-value">R${res.GDEmp.toLocaleString()}</div><div class="kpi-sub">GDPmp - X + Z</div></div>
            <div class="kpi-tile"><div class="kpi-label">GDE at Factor Cost (GDEfc)</div><div class="kpi-value">R${res.GDEfc.toLocaleString()}</div><div class="kpi-sub">GDEmp - Taxes + Subsidies</div></div>
            <div class="kpi-tile"><div class="kpi-label">National Income (NI / NNIfc)</div><div class="kpi-value">R${res.NI_fc.toLocaleString()}</div><div class="kpi-sub">Net of Depreciation (${res.NDPmp.toLocaleString()} NDPmp)</div></div>
          </div>
        `;
      };
      stage.querySelectorAll('input').forEach((inp) => inp.addEventListener('input', update));
      update();
    } else if (activeSolverId === 'sars_tax_solver') {
      stage.innerHTML = `
        <div class="glass-card">
          <h3>Progressive Personal Income Tax &amp; Rebate Calculator (Ch 15)</h3>
          <div class="solver-input-grid" style="margin-top: 1rem;">
            <div class="input-field-wrap">
              <label>Statutory Tax Schedule</label>
              <select id="tax-table-key" class="select-input">
                <option value="schedule_a">Statutory Schedule A (R825,000 Benchmark)</option>
                <option value="schedule_b">Statutory Schedule B (R315,850 Benchmark)</option>
                <option value="schedule_c">Statutory Schedule C (R384,000 Benchmark)</option>
                <option value="schedule_d">Personal Income Tax Schedule D (Jerome R288k &amp; Sally R4.5m)</option>
              </select>
            </div>
            <div class="input-field-wrap"><label>Annual Taxable Income (R)</label><input type="number" id="tax-income" class="num-input" value="825000" step="5000" /></div>
            <div class="input-field-wrap"><label>Taxpayer Age (Years)</label><input type="number" id="tax-age" class="num-input" value="35" min="18" max="95" /></div>
          </div>
          <div id="tax-output"></div>
        </div>
        ${decoderHtml}
      `;
      const update = () => {
        const res = solveSarsTax({
          tableKey: document.getElementById('tax-table-key').value,
          income: document.getElementById('tax-income').value,
          age: document.getElementById('tax-age').value
        });
        document.getElementById('tax-output').innerHTML = `
          <div class="kpi-bento-grid" style="grid-template-columns: repeat(3, 1fr);">
            <div class="kpi-tile"><div class="kpi-label">Gross Tax (Pre-Rebate)</div><div class="kpi-value">R${res.grossTax.toFixed(2)}</div><div class="kpi-sub">Base R${res.bracketBase} + ${res.mtr.toFixed(0)}% above R${res.bracketMin}</div></div>
            <div class="kpi-tile"><div class="kpi-label">Applicable Statutory Rebate</div><div class="kpi-value">-R${res.rebateTotal.toFixed(2)}</div><div class="kpi-sub">Age ${res.age} Qualification</div></div>
            <div class="kpi-tile"><div class="kpi-label">Net Tax Payable</div><div class="kpi-value">R${res.netTax.toFixed(2)}</div><div class="kpi-sub">Disposable Yd = R${res.disposableIncome.toFixed(2)}</div></div>
            <div class="kpi-tile"><div class="kpi-label">Marginal Tax Rate (MTR)</div><div class="kpi-value">${res.mtr.toFixed(2)}%</div><div class="kpi-sub">Rate on next R1 earned</div></div>
            <div class="kpi-tile"><div class="kpi-label">Effective Rate (Post-Rebate)</div><div class="kpi-value">${res.atrNet.toFixed(2)}%</div><div class="kpi-sub">Pre-rebate ATR: ${res.atrGross.toFixed(2)}%</div></div>
            <div class="kpi-tile"><div class="kpi-label">Tax Structure</div><div class="kpi-value">Progressive</div><div class="kpi-sub">MTR (${res.mtr.toFixed(0)}%) &gt; ATR (${res.atrNet.toFixed(1)}%)</div></div>
          </div>
        `;
      };
      stage.querySelectorAll('input, select').forEach((inp) => inp.addEventListener('input', update));
      update();
    } else if (activeSolverId === 'deflator_solver') {
      stage.innerHTML = `
        <div class="glass-card">
          <h3>GDP Deflator, Inflation Rate &amp; Rule of 70 Doubling Solver (Ch 13, 20, 22)</h3>
          <div class="solver-input-grid" style="margin-top: 1rem;">
            <div class="input-field-wrap"><label>Period 1 Nominal GDP</label><input type="number" id="df-nom0" class="num-input" value="860" /></div>
            <div class="input-field-wrap"><label>Period 1 Real GDP</label><input type="number" id="df-real0" class="num-input" value="860" /></div>
            <div class="input-field-wrap"><label>Period 2 Nominal GDP</label><input type="number" id="df-nom1" class="num-input" value="1419" /></div>
            <div class="input-field-wrap"><label>Period 2 Real GDP</label><input type="number" id="df-real1" class="num-input" value="1290" /></div>
            <div class="input-field-wrap"><label>Annual Growth Rate g (%) for Rule of 70</label><input type="number" id="df-g" class="num-input" value="3.5" step="0.5" /></div>
          </div>
          <div id="df-output"></div>
        </div>
        ${decoderHtml}
      `;
      const update = () => {
        const res = solveDeflatorAndRule70({
          nomGDP_t0: document.getElementById('df-nom0').value,
          realGDP_t0: document.getElementById('df-real0').value,
          nomGDP_t1: document.getElementById('df-nom1').value,
          realGDP_t1: document.getElementById('df-real1').value,
          growthRate: document.getElementById('df-g').value
        });
        document.getElementById('df-output').innerHTML = `
          <div class="kpi-bento-grid" style="grid-template-columns: repeat(3, 1fr);">
            <div class="kpi-tile"><div class="kpi-label">Period 1 GDP Deflator</div><div class="kpi-value">${res.defl_t0.toFixed(2)}</div><div class="kpi-sub">(Nom / Real) × 100</div></div>
            <div class="kpi-tile"><div class="kpi-label">Period 2 GDP Deflator</div><div class="kpi-value">${res.defl_t1.toFixed(2)}</div><div class="kpi-sub">(Nom / Real) × 100</div></div>
            <div class="kpi-tile"><div class="kpi-label">Deflator Inflation Rate</div><div class="kpi-value">${res.inflationRate.toFixed(2)}%</div><div class="kpi-sub">Real GDP Growth: ${res.realGrowthRate.toFixed(2)}%</div></div>
            <div class="kpi-tile"><div class="kpi-label">Nominal GDP Growth</div><div class="kpi-value">${res.nomGrowthRate.toFixed(2)}%</div><div class="kpi-sub">Includes Price + Volume</div></div>
            <div class="kpi-tile"><div class="kpi-label">Rule of 70 Doubling Time</div><div class="kpi-value">${Number.isFinite(res.doublingYears) ? res.doublingYears.toFixed(1) + ' yrs' : '∞'}</div><div class="kpi-sub">70 / g</div></div>
            <div class="kpi-tile"><div class="kpi-label">Purchasing Power of R100</div><div class="kpi-value">R${res.purchasingPower.toFixed(2)}</div><div class="kpi-sub">Real value retention</div></div>
          </div>
        `;
      };
      stage.querySelectorAll('input').forEach((inp) => inp.addEventListener('input', update));
      update();
    } else if (activeSolverId === 'labour_solver') {
      stage.innerHTML = `
        <div class="glass-card">
          <h3>Labour Market Solver: Strict vs. Expanded Unemployment &amp; LFPR (Ch 21)</h3>
          <div class="solver-input-grid" style="margin-top: 1rem;">
            <div class="input-field-wrap"><label>Employed Persons (E)</label><input type="number" id="lb-emp" class="num-input" value="6750000" /></div>
            <div class="input-field-wrap"><label>Strictly Unemployed (Searching)</label><input type="number" id="lb-ustr" class="num-input" value="2250000" /></div>
            <div class="input-field-wrap"><label>Discouraged Work-Seekers</label><input type="number" id="lb-disc" class="num-input" value="1000000" /></div>
            <div class="input-field-wrap"><label>Other Not Economically Active</label><input type="number" id="lb-nea" class="num-input" value="5000000" /></div>
          </div>
          <div id="lb-output"></div>
        </div>
        ${decoderHtml}
      `;
      const update = () => {
        const res = solveLabourMarket({
          employed: document.getElementById('lb-emp').value,
          unemployedStrict: document.getElementById('lb-ustr').value,
          discouraged: document.getElementById('lb-disc').value,
          notEconActiveOther: document.getElementById('lb-nea').value
        });
        document.getElementById('lb-output').innerHTML = `
          <div class="kpi-bento-grid" style="grid-template-columns: repeat(3, 1fr);">
            <div class="kpi-tile"><div class="kpi-label">Strict Labour Force</div><div class="kpi-value">${res.strictLF.toLocaleString()}</div><div class="kpi-sub">Strict u = ${res.strictUnemploymentRate.toFixed(2)}%</div></div>
            <div class="kpi-tile"><div class="kpi-label">Broad / Expanded Labour Force</div><div class="kpi-value">${res.broadLF.toLocaleString()}</div><div class="kpi-sub">Broad u = ${res.broadUnemploymentRate.toFixed(2)}%</div></div>
            <div class="kpi-tile"><div class="kpi-label">Working-Age Population</div><div class="kpi-value">${res.workingAgePop.toLocaleString()}</div><div class="kpi-sub">Aged 15–64 Years</div></div>
            <div class="kpi-tile"><div class="kpi-label">Strict LFPR</div><div class="kpi-value">${res.strictLFPR.toFixed(2)}%</div><div class="kpi-sub">Strict LF / Working-Age Pop</div></div>
            <div class="kpi-tile"><div class="kpi-label">Expanded LFPR</div><div class="kpi-value">${res.broadLFPR.toFixed(2)}%</div><div class="kpi-sub">Broad LF / Working-Age Pop</div></div>
            <div class="kpi-tile"><div class="kpi-label">Labour Absorption Rate</div><div class="kpi-value">${res.absorptionRate.toFixed(2)}%</div><div class="kpi-sub">Employed / Working-Age Pop</div></div>
          </div>
        `;
      };
      stage.querySelectorAll('input').forEach((inp) => inp.addEventListener('input', update));
      update();
    } else {
      stage.innerHTML = `
        <div class="glass-card">
          <h3>Monetary Aggregates ($M_1, M_2, M_3$) &amp; Simple Credit Multiplier Solver (Ch 14)</h3>
          <div class="solver-input-grid" style="margin-top: 1rem;">
            <div class="input-field-wrap"><label>Coins &amp; Banknotes (Outside Banks, Rm)</label><input type="number" id="mo-c" class="num-input" value="10" /></div>
            <div class="input-field-wrap"><label>Immediate Demand Deposits (D, Rm)</label><input type="number" id="mo-d" class="num-input" value="25" /></div>
            <div class="input-field-wrap"><label>Short- &amp; Medium-Term Deposits (Rm)</label><input type="number" id="mo-sm" class="num-input" value="125" /></div>
            <div class="input-field-wrap"><label>Long-Term Deposits (Rm)</label><input type="number" id="mo-lt" class="num-input" value="290" /></div>
            <div class="input-field-wrap"><label>Cash Reserve Ratio b (%)</label><input type="number" id="mo-b" class="num-input" value="2.5" step="0.5" /></div>
          </div>
          <div id="mo-output"></div>
        </div>
        ${decoderHtml}
      `;
      const update = () => {
        const res = solveMonetaryAggregates({
          coinsAndNotes: document.getElementById('mo-c').value,
          demandDeposits: document.getElementById('mo-d').value,
          shortMediumDeposits: document.getElementById('mo-sm').value,
          longTermDeposits: document.getElementById('mo-lt').value,
          reserveRatioPct: document.getElementById('mo-b').value
        });
        document.getElementById('mo-output').innerHTML = `
          <div class="kpi-bento-grid" style="grid-template-columns: repeat(4, 1fr);">
            <div class="kpi-tile"><div class="kpi-label">Narrow Money M1</div><div class="kpi-value">R${res.M1.toLocaleString()}m</div><div class="kpi-sub">C + D (Medium of Exchange)</div></div>
            <div class="kpi-tile"><div class="kpi-label">Broad Money M2</div><div class="kpi-value">R${res.M2.toLocaleString()}m</div><div class="kpi-sub">M1 + Short/Medium Deposits</div></div>
            <div class="kpi-tile"><div class="kpi-label">Comprehensive M3</div><div class="kpi-value">R${res.M3.toLocaleString()}m</div><div class="kpi-sub">M2 + Long-Term Deposits</div></div>
            <div class="kpi-tile"><div class="kpi-label">Simple Credit Multiplier</div><div class="kpi-value">${res.creditMultiplier.toFixed(1)}x</div><div class="kpi-sub">1 / b</div></div>
          </div>
        `;
      };
      stage.querySelectorAll('input').forEach((inp) => inp.addEventListener('input', update));
      update();
    }
  }

  /* --------------------------------------------------------------------------
     MODULE 4: Interactive Mastery Quiz Engine (Fisher-Yates + Keyboard Shortcuts)
     -------------------------------------------------------------------------- */
  let filteredQuizDeck = [];
  let currentQuizIndex = 0;
  let currentQuestionAnswered = false;

  function initQuizModule() {
    const chSelect = document.getElementById('quiz-chapter-filter');
    const modeSelect = document.getElementById('quiz-mode-filter');
    const btnShuffle = document.getElementById('btn-reshuffle-quiz');
    if (!chSelect) return;

    ECON122_DATA.chapters.forEach((ch) => {
      const opt = document.createElement('option');
      opt.value = ch.id;
      opt.textContent = `Ch ${ch.number}: ${ch.title}`;
      chSelect.appendChild(opt);
    });

    function rebuildDeck(doShuffle = false) {
      const chVal = chSelect.value;
      const modeVal = modeSelect ? modeSelect.value : 'all';
      const tState = TelemetryEngine.getState();

      let list = ECON122_DATA.questions.filter((q) => {
        if (chVal !== 'all' && q.chapter !== chVal) return false;
        if (modeVal === 'mistakes') {
          return (tState.mistakeIds || []).includes(q.id);
        }
        if (modeVal !== 'all' && q.difficulty !== modeVal) return false;
        return true;
      });

      if (doShuffle) {
        list = fisherYatesShuffle(list);
      }

      filteredQuizDeck = list.map((q) => ({
        ...q,
        shuffledOptions: fisherYatesShuffle(q.options)
      }));
      currentQuizIndex = 0;
      renderCurrentQuizCard();
    }

    chSelect.addEventListener('change', () => rebuildDeck(false));
    if (modeSelect) modeSelect.addEventListener('change', () => rebuildDeck(false));
    if (btnShuffle) {
      btnShuffle.addEventListener('click', () => {
        rebuildDeck(true);
        AudioEngine.playClick();
      });
    }

    // Global Keyboard Shortcuts for Quiz View (1–4 / A–D, ArrowLeft/Right, Space)
    window.addEventListener('keydown', (e) => {
      const quizSec = document.getElementById('view-quiz');
      if (!quizSec || !quizSec.classList.contains('active')) return;
      if (['INPUT', 'SELECT', 'TEXTAREA'].includes(document.activeElement?.tagName)) return;

      const key = e.key.toUpperCase();
      if (['1', '2', '3', '4', 'A', 'B', 'C', 'D'].includes(key)) {
        const idx = ['1', 'A'].includes(key) ? 0 : (['2', 'B'].includes(key) ? 1 : (['3', 'C'].includes(key) ? 2 : 3));
        const btn = document.querySelector(`.option-btn[data-opt-idx="${idx}"]`);
        if (btn && !btn.disabled) {
          e.preventDefault();
          btn.click();
        }
      } else if (e.key === 'ArrowRight' || (e.key === ' ' && currentQuestionAnswered)) {
        const nextBtn = document.getElementById('btn-quiz-next');
        if (nextBtn) {
          e.preventDefault();
          nextBtn.click();
        }
      } else if (e.key === 'ArrowLeft') {
        const prevBtn = document.getElementById('btn-quiz-prev');
        if (prevBtn) {
          e.preventDefault();
          prevBtn.click();
        }
      }
    });

    rebuildDeck(false);
  }

  function renderCurrentQuizCard() {
    const stage = document.getElementById('quiz-stage-container');
    if (!stage) return;

    if (filteredQuizDeck.length === 0) {
      stage.innerHTML = `
        <div class="glass-card">
          <h3>No Questions Match This Filter</h3>
          <p style="margin-top: 0.4rem;">If you selected "Weak-Area Mistakes Only", you currently have zero recorded mistakes in this chapter! Switch back to "All Difficulties" to practice the full question bank.</p>
        </div>
      `;
      return;
    }

    const q = filteredQuizDeck[currentQuizIndex];
    currentQuestionAnswered = false;
    const keys = ['A', 'B', 'C', 'D'];
    const totalCount = filteredQuizDeck.length;
    const isFirst = currentQuizIndex === 0;
    const isLast = currentQuizIndex === totalCount - 1;
    const nextLabel = isLast ? 'Next Question (Restart Deck ↻)' : 'Next Question →';

    const jumpOptionsHtml = filteredQuizDeck.map((item, idx) => `
      <option value="${idx}" ${idx === currentQuizIndex ? 'selected' : ''}>
        Problem ${idx + 1} of ${totalCount} (${(item.chapter || 'ch13').toUpperCase()})
      </option>
    `).join('');

    const optionsHtml = q.shuffledOptions.map((opt, idx) => `
      <button type="button" class="option-btn" data-opt-idx="${idx}">
        <span class="option-key">${keys[idx]}</span>
        <span>${renderInlineLatexText(opt.text)}</span>
      </button>
    `).join('');

    stage.innerHTML = `
      <div class="glass-card" id="active-quiz-card">
        <div class="quiz-toolbar" style="margin-bottom: 0.85rem;">
          <div class="meta-pill-row" style="margin-bottom: 0;">
            <span class="badge badge-sky">Problem ${currentQuizIndex + 1} of ${totalCount}</span>
            <span class="badge badge-indigo">${q.source || q.topic || 'Core Macroeconomics'}</span>
            <span class="badge badge-amber">${q.difficulty}</span>
          </div>
          <div class="quiz-nav-btn-group">
            <select id="quiz-jump-select" class="select-input" aria-label="Jump to problem" style="min-height: 40px; padding: 0.35rem 0.65rem; font-size: 0.8rem; width: auto;">
              ${jumpOptionsHtml}
            </select>
            <button type="button" class="btn-secondary" id="btn-quiz-prev" ${isFirst ? 'disabled' : ''}>← Previous Question</button>
            <button type="button" class="btn-primary" id="btn-quiz-next">${nextLabel}</button>
          </div>
        </div>

        <h3 style="font-size: 1.12rem; line-height: 1.55; margin-top: 0.5rem;">${renderInlineLatexText(q.stem)}</h3>
        <div class="option-list" id="quiz-option-list">${optionsHtml}</div>
        <div id="quiz-feedback-mount"></div>

        <div class="quiz-nav-footer">
          <button type="button" class="btn-secondary" id="btn-quiz-prev-bottom" ${isFirst ? 'disabled' : ''}>← Previous Question</button>
          <span class="quiz-nav-status">Problem ${currentQuizIndex + 1} of ${totalCount} &bull; Keyboard: A–D / ← / →</span>
          <button type="button" class="btn-primary" id="btn-quiz-next-bottom">${nextLabel}</button>
        </div>
      </div>
    `;

    function goPrevQuestion() {
      if (currentQuizIndex > 0) {
        currentQuizIndex -= 1;
        renderCurrentQuizCard();
        AudioEngine.playClick();
      }
    }

    function goNextQuestion() {
      currentQuizIndex = (currentQuizIndex + 1) % filteredQuizDeck.length;
      renderCurrentQuizCard();
      AudioEngine.playClick();
    }

    const jumpSel = document.getElementById('quiz-jump-select');
    if (jumpSel) {
      jumpSel.addEventListener('change', () => {
        const targetIdx = parseInt(jumpSel.value, 10);
        if (!Number.isNaN(targetIdx) && targetIdx >= 0 && targetIdx < filteredQuizDeck.length) {
          currentQuizIndex = targetIdx;
          renderCurrentQuizCard();
          AudioEngine.playClick();
        }
      });
    }

    ['btn-quiz-prev', 'btn-quiz-prev-bottom'].forEach((id) => {
      const b = document.getElementById(id);
      if (b) b.addEventListener('click', goPrevQuestion);
    });
    ['btn-quiz-next', 'btn-quiz-next-bottom'].forEach((id) => {
      const b = document.getElementById(id);
      if (b) b.addEventListener('click', goNextQuestion);
    });

    stage.querySelectorAll('.option-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        if (currentQuestionAnswered) return;
        currentQuestionAnswered = true;
        const chosenIdx = parseInt(btn.getAttribute('data-opt-idx'), 10);
        const chosenOpt = q.shuffledOptions[chosenIdx];
        const isCorrect = Boolean(chosenOpt.isCorrect);

        if (isCorrect) {
          AudioEngine.playSuccess();
        } else {
          AudioEngine.playError();
        }

        TelemetryEngine.recordQuestionAttempt(q, isCorrect);
        updateKpiBanner();

        stage.querySelectorAll('.option-btn').forEach((b, i) => {
          b.disabled = true;
          const o = q.shuffledOptions[i];
          if (o.isCorrect) {
            b.classList.add('correct');
          } else if (i === chosenIdx) {
            b.classList.add('wrong');
          }
        });

        const refutationsHtml = q.shuffledOptions.map((o, i) => `
          <div class="refutation-item ${o.isCorrect ? 'is-correct' : 'is-wrong'}">
            <strong>Option ${keys[i]} (${o.isCorrect ? 'Correct' : 'Why This Is Incorrect'}):</strong>
            ${renderInlineLatexText(o.refutation)}
          </div>
        `).join('');

        const fbMount = document.getElementById('quiz-feedback-mount');
        if (fbMount) {
          const qDecodedVars = decodeVariablesForText(
            `${q.stem || ''} ${Array.isArray(q.derivation) ? q.derivation.join(' ') : (q.derivation || '')} ${q.topic || ''}`,
            q.chapter || q.chapterId || 'ch13'
          );
          fbMount.innerHTML = `
            <div class="feedback-panel">
              <div class="meta-pill-row" style="justify-content: space-between; align-items: center;">
                <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                  <span class="badge ${isCorrect ? 'badge-emerald' : 'badge-rose'}">
                    ${isCorrect ? '✅ Correct — Step-by-Step Explanation' : '❌ Step-by-Step Solution & Explanation'}
                  </span>
                  <span class="badge badge-sky">${q.topic || 'Core Principle'}</span>
                </div>
                <button type="button" class="btn-primary" id="btn-quiz-next-fb">${nextLabel}</button>
              </div>
              <div class="katex-box" id="quiz-derivation-katex" style="margin: 0.75rem 0;"></div>
              ${renderDecoderPillsHtml(qDecodedVars, 'Plain-English Variable Decoder:')}
              <div style="margin-top: 0.65rem;">${refutationsHtml}</div>
            </div>
          `;
          renderMathInElement(document.getElementById('quiz-derivation-katex'), q.derivation, true);
          const nextFbBtn = document.getElementById('btn-quiz-next-fb');
          if (nextFbBtn) {
            nextFbBtn.addEventListener('click', goNextQuestion);
          }
        }
      });
    });
  }

  /* --------------------------------------------------------------------------
     MODULE 5: Comprehensive Macroeconomic Synthesis Suites
     -------------------------------------------------------------------------- */
  let activePaperId = 'suite_01';
  let paperTimerInterval = null;
  let paperRemainingSec = 180 * 60;

  function initPastPapersModule() {
    const sel = document.getElementById('paper-selector');
    const timerBtn = document.getElementById('btn-paper-timer');
    if (!sel) return;

    ECON122_DATA.pastPapers.forEach((pp) => {
      const opt = document.createElement('option');
      opt.value = pp.id;
      opt.textContent = `${pp.session} (${pp.campuses.join(' • ')})`;
      sel.appendChild(opt);
    });

    sel.addEventListener('change', () => {
      activePaperId = sel.value;
      renderPastPaperStage();
      AudioEngine.playClick();
    });

    if (timerBtn) {
      timerBtn.addEventListener('click', () => {
        const disp = document.getElementById('paper-timer-display');
        if (paperTimerInterval) {
          clearInterval(paperTimerInterval);
          paperTimerInterval = null;
          if (disp) disp.textContent = '⏱️ Paused (Click to Resume)';
        } else {
          paperTimerInterval = setInterval(() => {
            paperRemainingSec = Math.max(0, paperRemainingSec - 1);
            const mins = String(Math.floor(paperRemainingSec / 60)).padStart(2, '0');
            const secs = String(paperRemainingSec % 60).padStart(2, '0');
            if (disp) disp.textContent = `⏱️ ${mins}:${secs} Remaining`;
          }, 1000);
        }
        AudioEngine.playClick();
      });
    }

    renderPastPaperStage();
  }

  function renderPastPaperStage() {
    const stage = document.getElementById('paper-stage-container');
    if (!stage) return;
    const pp = ECON122_DATA.pastPapers.find((p) => p.id === activePaperId) || ECON122_DATA.pastPapers[0];

    const linkedQuestions = pp.questionIds
      .map((qid) => ECON122_DATA.questions.find((q) => q.id === qid))
      .filter(Boolean);

    const writtenHtml = (pp.writtenSections || []).map((w, idx) => {
      const wVars = decodeVariablesForText(`${w.number || ''} ${w.prompt || ''} ${w.memo || ''}`, 'ch13');
      return `
      <div class="pitfall-accordion ${idx === 0 ? 'open' : ''}">
        <button type="button" class="pitfall-trigger">
          <span>📝 ${w.number}: ${w.prompt}</span>
          <span class="badge badge-emerald">Analytical Solution</span>
        </button>
        <div class="pitfall-content" style="grid-template-columns: 1fr;">
          <div class="law-pane">
            <div style="font-weight: 700; color: var(--accent-emerald); margin-bottom: 0.35rem;">✅ Complete Analytical Derivation &amp; Step-by-Step Solution</div>
            <div>${renderInlineLatexText(w.memo)}</div>
            ${renderDecoderPillsHtml(wVars, 'Plain-English Variable Decoder:')}
          </div>
        </div>
      </div>
    `;
    }).join('');

    const totalSuiteQ = linkedQuestions.length;
    linkedQuestions.forEach((q) => {
      q.suiteShuffledOptions = fisherYatesShuffle(q.options);
    });

    const mcqsHtml = linkedQuestions.map((q, qIdx) => {
      const opts = q.suiteShuffledOptions.map((o, oIdx) => `
        <button type="button" class="option-btn pp-opt-btn" data-q-idx="${qIdx}" data-o-idx="${oIdx}">
          <span class="option-key">${['A', 'B', 'C', 'D'][oIdx]}</span>
          <span>${renderInlineLatexText(o.text)}</span>
        </button>
      `).join('');
      const hasPrev = qIdx > 0;
      const hasNext = qIdx < totalSuiteQ - 1;
      return `
        <div class="glass-card" id="pp-card-${qIdx}" style="margin-bottom: 1rem;">
          <div class="quiz-toolbar" style="margin-bottom: 0.65rem;">
            <div class="meta-pill-row" style="margin-bottom: 0;">
              <span class="badge badge-sky">Suite Problem ${qIdx + 1} of ${totalSuiteQ}</span>
              <span class="badge badge-indigo">${q.source || q.topic || 'Core Macroeconomics'}</span>
            </div>
            <div class="quiz-nav-btn-group">
              <button type="button" class="btn-ghost pp-nav-jump" data-target-idx="${qIdx - 1}" ${!hasPrev ? 'disabled' : ''}>← Previous Question</button>
              <button type="button" class="btn-secondary pp-nav-jump" data-target-idx="${hasNext ? qIdx + 1 : 0}">${hasNext ? 'Next Question →' : 'Back to First ↻'}</button>
            </div>
          </div>
          <h4 style="font-size: 1rem; margin-bottom: 0.65rem;">${renderInlineLatexText(q.stem)}</h4>
          <div class="option-list">${opts}</div>
          <div id="pp-fb-${qIdx}"></div>
        </div>
      `;
    }).join('');

    stage.innerHTML = `
      <div class="glass-card" style="margin-bottom: 1.25rem; border-left: 4px solid var(--accent-indigo);">
        <div class="meta-pill-row">
          <span class="badge badge-indigo">${pp.session}</span>
          <span class="badge badge-sky">Duration: ${pp.durationMinutes} Mins • ${pp.totalMarks} Points • ${totalSuiteQ} Interactive Problems</span>
        </div>
        <h3>${pp.session} — ${pp.campuses.join(' • ')}</h3>
        <p style="font-size: 0.88rem; margin-top: 0.35rem;">
          <strong>Scope:</strong> ${pp.examiners} &nbsp;|&nbsp; <strong>Verification:</strong> ${pp.moderator}
        </p>
      </div>

      <h3 style="margin: 1.25rem 0 0.75rem;">Interactive Multiple-Choice &amp; Quantitative Calculation Problems</h3>
      <div>${mcqsHtml}</div>

      <h3 style="margin: 1.5rem 0 0.75rem;">Structured Theoretical Derivations &amp; Analytical Solutions</h3>
      <div>${writtenHtml}</div>
    `;

    function jumpToSuiteCard(targetIdx) {
      const targetEl = document.getElementById(`pp-card-${targetIdx}`);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        AudioEngine.playClick();
      }
    }

    stage.querySelectorAll('.pp-nav-jump').forEach((btn) => {
      btn.addEventListener('click', () => {
        const targetIdx = parseInt(btn.getAttribute('data-target-idx'), 10);
        if (!Number.isNaN(targetIdx)) jumpToSuiteCard(targetIdx);
      });
    });

    stage.querySelectorAll('.pitfall-trigger').forEach((btn) => {
      btn.addEventListener('click', () => {
        const acc = btn.closest('.pitfall-accordion');
        if (acc) {
          acc.classList.toggle('open');
          AudioEngine.playClick();
        }
      });
    });

    stage.querySelectorAll('.pp-opt-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const qIdx = parseInt(btn.getAttribute('data-q-idx'), 10);
        const oIdx = parseInt(btn.getAttribute('data-o-idx'), 10);
        const q = linkedQuestions[qIdx];
        if (!q || !q.suiteShuffledOptions) return;
        const chosen = q.suiteShuffledOptions[oIdx];
        if (chosen.isCorrect) AudioEngine.playSuccess();
        else AudioEngine.playError();

        stage.querySelectorAll(`.pp-opt-btn[data-q-idx="${qIdx}"]`).forEach((b, i) => {
          b.disabled = true;
          if (q.suiteShuffledOptions[i].isCorrect) b.classList.add('correct');
          else if (i === oIdx) b.classList.add('wrong');
        });

        const hasNext = qIdx < totalSuiteQ - 1;
        const fb = document.getElementById(`pp-fb-${qIdx}`);
        if (fb) {
          const ppDecodedVars = decodeVariablesForText(
            `${q.stem || ''} ${Array.isArray(q.derivation) ? q.derivation.join(' ') : (q.derivation || '')} ${q.topic || ''}`,
            q.chapter || q.chapterId || 'ch13'
          );
          fb.innerHTML = `
            <div class="feedback-panel">
              <div class="katex-box" id="pp-katex-${qIdx}" style="margin-bottom: 0.65rem;"></div>
              ${renderDecoderPillsHtml(ppDecodedVars, 'Plain-English Variable Decoder:')}
              <div class="refutation-item ${chosen.isCorrect ? 'is-correct' : 'is-wrong'}" style="margin-top: 0.6rem;">
                <strong>Analytical Explanation:</strong> ${renderInlineLatexText(chosen.refutation)}
              </div>
              <div class="quiz-nav-footer" style="margin-top: 0.9rem; padding-top: 0.75rem;">
                <span class="quiz-nav-status">Suite Problem ${qIdx + 1} of ${totalSuiteQ}</span>
                <button type="button" class="btn-primary" id="pp-fb-next-${qIdx}">${hasNext ? 'Next Question →' : 'Back to First Question ↻'}</button>
              </div>
            </div>
          `;
          renderMathInElement(document.getElementById(`pp-katex-${qIdx}`), q.derivation, true);
          const nextFbBtn = document.getElementById(`pp-fb-next-${qIdx}`);
          if (nextFbBtn) {
            nextFbBtn.addEventListener('click', () => jumpToSuiteCard(hasNext ? qIdx + 1 : 0));
          }
        }
      });
    });
  }

  /* --------------------------------------------------------------------------
     MODULE 6: High-Density Printable Cheat Sheet & PDF Export
     -------------------------------------------------------------------------- */
  function initCheatSheetModule() {
    const stage = document.getElementById('cheatsheet-stage-container');
    const printBtn = document.getElementById('btn-print-cheatsheet');
    if (printBtn) {
      printBtn.addEventListener('click', () => {
        AudioEngine.playClick();
        window.print();
      });
    }
    if (!stage) return;

    const chaptersHtml = ECON122_DATA.chapters.map((ch) => {
      const fRows = (ch.formulas || []).map((f) => {
        const decodedVars = decodeVariablesForText(`${f.latex || ''} ${f.meaning || ''} ${f.name || ''}`, ch.id);
        return `
        <div style="margin-bottom: 0.75rem; padding-bottom: 0.65rem; border-bottom: 1px solid var(--border-subtle);">
          <div style="font-weight: 700; font-size: 0.88rem; color: var(--accent-sky);">${f.name}</div>
          <div class="katex-box" data-cheat-katex="${encodeURIComponent(f.latex)}" style="margin: 0.35rem 0; padding: 0.5rem;"></div>
          <div style="font-size: 0.8rem; color: var(--text-secondary);">${renderInlineLatexText(f.meaning || '')}</div>
          ${renderDecoderPillsHtml(decodedVars, 'Plain-English Variable Decoder:')}
        </div>
      `;
      }).join('');

      const bg = ch.beginnerGuide;
      const bgHtml = bg ? `
        <div class="beginner-decoder-panel" style="margin-bottom: 0.85rem; padding: 0.75rem;">
          <div style="font-size: 0.78rem; font-weight: 700; color: var(--accent-emerald); margin-bottom: 0.25rem;">
            💡 Plain-English Variable Decoder &amp; Why It Works
          </div>
          <p style="font-size: 0.78rem; color: var(--text-secondary); margin-bottom: 0.5rem;">
            ${renderInlineLatexText(bg.whyFormulasWork || bg.whyItWorks || '')}
          </p>
          <div class="variable-decoder-grid">
            ${(bg.variables || []).map((v) => `
              <div class="variable-decoder-card" tabindex="0" data-tip="${escapeAttr(`${v.symbol} (${v.name}): ${v.meaning || v.plainEnglish || ''}`)}">
                <div class="variable-symbol-pill">${v.symbol}</div>
                <div>
                  <div style="font-weight: 700; font-size: 0.82rem; color: var(--text-primary);">${v.name}</div>
                  <div style="font-size: 0.78rem; color: var(--text-secondary); line-height: 1.4; margin-top: 0.1rem;">${renderInlineLatexText(v.meaning || v.plainEnglish || '')}</div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      ` : '';

      const cRows = (ch.concepts || []).map((c) => `
        <div style="margin-bottom: 0.5rem; font-size: 0.8rem;">
          <strong>• ${c.title}:</strong> ${renderInlineLatexText(c.intuition || '')}
        </div>
      `).join('');

      const loRows = (ch.learningOutcomes || []).length > 0 ? `
        <div style="margin-bottom: 0.7rem; padding: 0.55rem 0.7rem; border-radius: 10px; background: rgba(48, 209, 88, 0.06); border: 1px solid rgba(48, 209, 88, 0.22); font-size: 0.78rem;">
          <strong style="color: var(--accent-emerald);">🎯 Chapter ${ch.number} Learning Objectives:</strong>
          <ul style="margin: 0.3rem 0 0 1rem; color: var(--text-secondary);">
            ${(ch.learningOutcomes || []).map((lo) => `<li>${renderInlineLatexText(lo)}</li>`).join('')}
          </ul>
        </div>
      ` : '';

      return `
        <div class="glass-card cheat-block" style="margin-bottom: 1rem;">
          <div class="meta-pill-row">
            <span class="badge badge-sky">Chapter ${ch.number}</span>
            <span class="badge badge-indigo">${ch.pages || ch.shortTitle}</span>
          </div>
          <h3 style="margin-bottom: 0.5rem;">Ch ${ch.number}: ${ch.title}</h3>
          <p style="font-size: 0.84rem; margin-bottom: 0.75rem;">${renderInlineLatexText(ch.summary)}</p>
          ${loRows}
          ${bgHtml}
          <div>${fRows}</div>
          <div style="margin-top: 0.5rem;">${cRows}</div>
        </div>
      `;
    }).join('');

    stage.innerHTML = `
      <div class="bento-grid-2">${chaptersHtml}</div>
    `;

    stage.querySelectorAll('[data-cheat-katex]').forEach((el) => {
      renderMathInElement(el, decodeURIComponent(el.getAttribute('data-cheat-katex')), true);
    });
  }

  /* --------------------------------------------------------------------------
     MODULE 7: Official Exam Scope Interactive Checklist (Device-Bound Persistence)
     -------------------------------------------------------------------------- */
  const ScopeEngine = (() => {
    const FALLBACK_KEY = 'econ122_scope_progress_v1';
    let scopeState = null;

    function getDeviceId() {
      const tState = TelemetryEngine.getState();
      return (tState && tState.deviceId) ? tState.deviceId : 'DEV-LOCAL';
    }

    function getDeviceStorageKey() {
      return `scope_progress_${getDeviceId()}`;
    }

    function getLegacyStorageKey() {
      return `econ122_scope_progress_${getDeviceId()}`;
    }

    function getAllScopeItems() {
      if (typeof ECON122_DATA === 'undefined' || !ECON122_DATA.examScope) return [];
      const items = [];
      (ECON122_DATA.examScope.sections || []).forEach((sec) => {
        (sec.groups || []).forEach((grp) => {
          (grp.items || []).forEach((it) => {
            items.push({ ...it, sectionId: sec.id, groupId: grp.id });
          });
        });
      });
      return items;
    }

    function loadScopeState() {
      const devId = getDeviceId();
      const devKey = getDeviceStorageKey();
      const legacyKey = getLegacyStorageKey();
      if (typeof localStorage !== 'undefined') {
        try {
          const directRaw = localStorage.getItem(devKey);
          const legacyRaw = !directRaw ? (localStorage.getItem(legacyKey) || localStorage.getItem(FALLBACK_KEY)) : null;
          const raw = directRaw || legacyRaw;
          if (raw) {
            const parsed = JSON.parse(raw);
            if (parsed && typeof parsed === 'object') {
              scopeState = {
                deviceId: devId,
                checked: parsed.checked || {},
                levels: parsed.levels || {},
                priorities: parsed.priorities || {
                  calc_1: '', calc_2: '', calc_3: '',
                  theo_1: '', theo_2: '', theo_3: ''
                },
                updatedAt: parsed.updatedAt || new Date().toISOString()
              };
              if (!directRaw && legacyRaw) {
                saveScopeState();
              }
              return scopeState;
            }
          }
        } catch (_) {}
      }
      scopeState = {
        deviceId: devId,
        checked: {},
        levels: {},
        priorities: {
          calc_1: '', calc_2: '', calc_3: '',
          theo_1: '', theo_2: '', theo_3: ''
        },
        updatedAt: new Date().toISOString()
      };
      saveScopeState();
      return scopeState;
    }

    function saveScopeState() {
      if (!scopeState) return;
      scopeState.deviceId = getDeviceId();
      scopeState.updatedAt = new Date().toISOString();
      if (typeof localStorage !== 'undefined') {
        try {
          const serialized = JSON.stringify(scopeState);
          localStorage.setItem(getDeviceStorageKey(), serialized);
          localStorage.setItem(getLegacyStorageKey(), serialized);
          localStorage.setItem(FALLBACK_KEY, serialized);
        } catch (_) {}
      }
    }

    function toggleItemChecked(itemId, isChecked) {
      if (!scopeState) loadScopeState();
      const checkedVal = Boolean(isChecked);
      scopeState.checked[itemId] = checkedVal;
      scopeState.levels[itemId] = checkedVal ? 'well' : (scopeState.levels[itemId] === 'well' ? '' : (scopeState.levels[itemId] || ''));
      saveScopeState();
      return scopeState;
    }

    function setItemLevel(itemId, level) {
      if (!scopeState) loadScopeState();
      const cleanLevel = level || '';
      scopeState.levels[itemId] = cleanLevel;
      scopeState.checked[itemId] = (cleanLevel === 'well');
      saveScopeState();
      return scopeState;
    }

    function setPriorityNote(slotKey, text) {
      if (!scopeState) loadScopeState();
      scopeState.priorities[slotKey] = String(text || '');
      saveScopeState();
    }

    function resetAll() {
      const devId = getDeviceId();
      scopeState = {
        deviceId: devId,
        checked: {},
        levels: {},
        priorities: {
          calc_1: '', calc_2: '', calc_3: '',
          theo_1: '', theo_2: '', theo_3: ''
        },
        updatedAt: new Date().toISOString()
      };
      saveScopeState();
      return scopeState;
    }

    function getSummaryStats() {
      if (!scopeState) loadScopeState();
      const all = getAllScopeItems();
      const calcItems = all.filter((i) => i.sectionId === 'scope_calculations');
      const theoItems = all.filter((i) => i.sectionId === 'scope_theory');

      const checkedCount = all.filter((i) => Boolean(scopeState.checked[i.id])).length;
      const calcChecked = calcItems.filter((i) => Boolean(scopeState.checked[i.id])).length;
      const theoChecked = theoItems.filter((i) => Boolean(scopeState.checked[i.id])).length;
      const partialCount = all.filter((i) => scopeState.levels[i.id] === 'partial' && !scopeState.checked[i.id]).length;
      const notYetCount = all.filter((i) => scopeState.levels[i.id] === 'not_yet' && !scopeState.checked[i.id]).length;
      const totalCount = all.length || 46;
      const pct = totalCount > 0 ? Math.round((checkedCount / totalCount) * 100) : 0;

      return {
        deviceId: scopeState.deviceId,
        checkedCount,
        totalCount,
        pct,
        calcChecked,
        calcTotal: calcItems.length || 25,
        theoChecked,
        theoTotal: theoItems.length || 21,
        partialCount,
        notYetCount
      };
    }

    return {
      loadScopeState,
      saveScopeState,
      toggleItemChecked,
      setItemLevel,
      setPriorityNote,
      resetAll,
      getSummaryStats,
      getDeviceStorageKey,
      getLegacyStorageKey
    };
  })();

  let activeScopeFilter = 'all';
  const openScopeDropdowns = new Set();
  let allScopeDropdownsExpanded = false;

  function initExamScopeModule() {
    const stage = document.getElementById('scope-stage-container');
    if (!stage || typeof ECON122_DATA === 'undefined' || !ECON122_DATA.examScope) return;
    ScopeEngine.loadScopeState();
    renderExamScopeStage();
  }

  function renderExamScopeStage() {
    const stage = document.getElementById('scope-stage-container');
    if (!stage || typeof ECON122_DATA === 'undefined' || !ECON122_DATA.examScope) return;

    const scopeData = ECON122_DATA.examScope;
    const state = ScopeEngine.loadScopeState();
    const stats = ScopeEngine.getSummaryStats();

    const sectionsHtml = (scopeData.sections || [])
      .filter((sec) => {
        if (activeScopeFilter === 'calc') return sec.id === 'scope_calculations';
        if (activeScopeFilter === 'theory') return sec.id === 'scope_theory';
        return true;
      })
      .map((sec) => {
        const isCalcSec = sec.id === 'scope_calculations';
        const prepKeysHtml = (sec.preparationKey || []).map((pk) => `
          <div class="scope-prep-key-item">
            <span class="scope-prep-key-box" aria-hidden="true">☐</span>
            <span><strong>${pk.label}:</strong> ${pk.desc}</span>
          </div>
        `).join('');

        const groupsHtml = (sec.groups || []).map((grp) => {
          const visibleItems = (grp.items || []).filter((item) => {
            if (activeScopeFilter === 'unmastered') {
              return !state.checked[item.id];
            }
            return true;
          });
          if (visibleItems.length === 0) return '';

          const groupCheckedCount = (grp.items || []).filter((it) => Boolean(state.checked[it.id])).length;
          const groupTotalCount = (grp.items || []).length;

          const itemsHtml = visibleItems.map((item) => {
            const isChecked = Boolean(state.checked[item.id]);
            const currLevel = state.levels[item.id] || (isChecked ? 'well' : '');
            const isOpen = allScopeDropdownsExpanded || openScopeDropdowns.has(item.id);
            const decodedScopeVars = decodeVariablesForText(
              `${item.formula || ''} ${item.topic || ''} ${item.beginnerTip || ''} ${(item.knowledgePoints || []).join(' ')} ${item.workedExample || ''}`,
              grp.chapterId
            );
            const kPointsHtml = (item.knowledgePoints || []).map((kp) => `
              <li>${renderInlineLatexText(kp)}</li>
            `).join('');

            return `
              <div class="scope-checklist-item ${isChecked ? 'is-mastered' : (currLevel === 'partial' ? 'is-partial' : (currLevel === 'not_yet' ? 'is-not-yet' : ''))}" id="scope-item-card-${item.id}">
                <div class="scope-table-row">
                  <div class="scope-col-no tabular-nums">${item.code}</div>
                  <div class="scope-col-topic">
                    <div class="scope-topic-title-line">
                      <label class="scope-checkbox-label" for="scope-chk-${item.id}">
                        <span class="scope-item-topic">${item.topic}</span>
                      </label>
                      <button type="button" class="scope-dropdown-trigger-btn" data-toggle-dropdown="${item.id}" aria-expanded="${isOpen ? 'true' : 'false'}">
                        <span>📚 Knowledge Needed to Check Box</span>
                        <span class="scope-chevron">${isOpen ? '▴' : '▾'}</span>
                      </button>
                    </div>
                  </div>
                  <div class="scope-col-check">
                    <label class="scope-box-cell ${currLevel === 'not_yet' ? 'checked-not-yet' : ''}" title="Not yet prepared (${item.code})">
                      <input
                        type="checkbox"
                        class="scope-level-checkbox"
                        data-scope-item="${item.id}"
                        data-scope-level="not_yet"
                        ${currLevel === 'not_yet' ? 'checked' : ''}
                      />
                      <span class="scope-mobile-col-label">Not yet prepared</span>
                    </label>
                  </div>
                  <div class="scope-col-check">
                    <label class="scope-box-cell ${currLevel === 'partial' ? 'checked-partial' : ''}" title="Partially prepared (${item.code})">
                      <input
                        type="checkbox"
                        class="scope-level-checkbox"
                        data-scope-item="${item.id}"
                        data-scope-level="partial"
                        ${currLevel === 'partial' ? 'checked' : ''}
                      />
                      <span class="scope-mobile-col-label">Partially prepared</span>
                    </label>
                  </div>
                  <div class="scope-col-check">
                    <label class="scope-box-cell ${isChecked || currLevel === 'well' ? 'checked-well' : ''}" title="Well prepared (${item.code})">
                      <input
                        type="checkbox"
                        id="scope-chk-${item.id}"
                        class="scope-item-checkbox scope-level-checkbox"
                        data-scope-check="${item.id}"
                        data-scope-item="${item.id}"
                        data-scope-level="well"
                        ${isChecked || currLevel === 'well' ? 'checked' : ''}
                      />
                      <span class="scope-mobile-col-label">Well prepared</span>
                    </label>
                  </div>
                </div>

                <details class="scope-knowledge-dropdown" data-dropdown-id="${item.id}" ${isOpen ? 'open' : ''}>
                  <summary class="scope-knowledge-summary">
                    <span>💡 Click to ${isOpen ? 'hide' : 'view'} the exact formulas, concepts &amp; worked example needed to check <strong>${item.code} ${item.topic}</strong></span>
                  </summary>
                  <div class="scope-item-guide">
                    <div class="scope-formula-bar">
                      <strong>📐 Core Formula / Framework:</strong> <span>${item.formula}</span>
                    </div>
                    <div class="scope-beginner-tip">
                      <strong>💡 Plain-English Intuition:</strong> ${item.beginnerTip}
                    </div>
                    ${kPointsHtml ? `
                      <div class="scope-knowledge-box">
                        <div class="scope-knowledge-heading">✅ Knowledge Needed to Check This Box (Must-Know Checklist):</div>
                        <ul class="scope-knowledge-list">
                          ${kPointsHtml}
                        </ul>
                      </div>
                    ` : ''}
                    ${item.workedExample ? `
                      <div class="scope-example-box">
                        <div class="scope-example-heading">📝 Step-by-Step Worked Exam Example:</div>
                        <div class="scope-example-body">${escapeAttr(item.workedExample).replace(/\n/g, '<br/>')}</div>
                      </div>
                    ` : ''}
                    ${renderDecoderPillsHtml(decodedScopeVars, 'Plain-English Variable Decoder:')}
                    <div class="scope-dropdown-footer">
                      <button type="button" class="btn-secondary scope-mark-well-btn" data-scope-item="${item.id}" data-scope-level="well" data-force-well="true">
                        <span>${isChecked ? '✓ Marked as Well Prepared' : '☑️ I Understand This Content — Tick "Well Prepared"'}</span>
                      </button>
                      <button type="button" class="btn-ghost scope-jump-vault" data-ch-id="${grp.chapterId}">
                        📖 Open ${grp.chapterLabel} in Vault
                      </button>
                      ${grp.solverId ? `
                        <button type="button" class="btn-ghost scope-jump-solver" data-solver-id="${grp.solverId}">
                          🧮 Open Interactive Solver
                        </button>
                      ` : ''}
                      ${grp.extremePageId ? `
                        <button type="button" class="btn-ghost scope-jump-extreme" data-page-id="${grp.extremePageId}">
                          ⚡ Practice in Extreme Exam (${grp.extremePageId}) →
                        </button>
                      ` : ''}
                    </div>
                  </div>
                </details>
              </div>
            `;
          }).join('');

          return `
            <div class="scope-group-section">
              <div class="scope-group-banner">
                <div class="scope-group-banner-left">
                  <span class="scope-group-num tabular-nums">${grp.number}</span>
                  <strong class="scope-group-title">${grp.title}</strong>
                  <span class="badge badge-sky">${grp.chapterLabel}</span>
                  <span class="badge ${groupCheckedCount === groupTotalCount ? 'badge-emerald' : 'badge-amber'}">
                    ${groupCheckedCount}/${groupTotalCount} Well Prepared
                  </span>
                </div>
                <div class="scope-group-actions">
                  ${grp.solverId ? `
                    <button type="button" class="btn-ghost scope-jump-solver" data-solver-id="${grp.solverId}" style="padding: 0.25rem 0.6rem; font-size: 0.76rem;">
                      🧮 Solver
                    </button>
                  ` : ''}
                  ${grp.extremePageId ? `
                    <button type="button" class="btn-ghost scope-jump-extreme" data-page-id="${grp.extremePageId}" style="padding: 0.25rem 0.6rem; font-size: 0.76rem;">
                      ⚡ Practice (${grp.extremePageId})
                    </button>
                  ` : ''}
                </div>
              </div>
              <div class="scope-items-stack">
                ${itemsHtml}
              </div>
            </div>
          `;
        }).join('');

        const prioritiesHtml = isCalcSec ? `
          <div class="scope-priorities-block">
            <h4>My revision priorities</h4>
            <div class="scope-priorities-grid">
              <div class="scope-priority-row">
                <label>1. The topic I need to spend the most time on:</label>
                <input type="text" class="num-input scope-priority-input" data-priority-slot="calc_1" placeholder="Write calculation topic here..." value="${escapeAttr(state.priorities.calc_1)}" style="font-family: var(--font-sans);" />
              </div>
              <div class="scope-priority-row">
                <label>2. The topic I need to practise more:</label>
                <input type="text" class="num-input scope-priority-input" data-priority-slot="calc_2" placeholder="Write calculation topic here..." value="${escapeAttr(state.priorities.calc_2)}" style="font-family: var(--font-sans);" />
              </div>
              <div class="scope-priority-row">
                <label>3. The topic I feel most confident about:</label>
                <input type="text" class="num-input scope-priority-input" data-priority-slot="calc_3" placeholder="Write calculation topic here..." value="${escapeAttr(state.priorities.calc_3)}" style="font-family: var(--font-sans);" />
              </div>
            </div>
          </div>
        ` : `
          <div class="scope-priorities-block">
            <h4>My revision priorities</h4>
            <div class="scope-priorities-grid">
              <div class="scope-priority-row">
                <label>1. The topic I need to spend the most time on:</label>
                <input type="text" class="num-input scope-priority-input" data-priority-slot="theo_1" placeholder="Write theory topic here..." value="${escapeAttr(state.priorities.theo_1)}" style="font-family: var(--font-sans);" />
              </div>
              <div class="scope-priority-row">
                <label>2. The topic I need to practise explaining or discussing:</label>
                <input type="text" class="num-input scope-priority-input" data-priority-slot="theo_2" placeholder="Write theory topic here..." value="${escapeAttr(state.priorities.theo_2)}" style="font-family: var(--font-sans);" />
              </div>
              <div class="scope-priority-row">
                <label>3. The topic I feel most confident about:</label>
                <input type="text" class="num-input scope-priority-input" data-priority-slot="theo_3" placeholder="Write theory topic here..." value="${escapeAttr(state.priorities.theo_3)}" style="font-family: var(--font-sans);" />
              </div>
            </div>
          </div>
        `;

        return `
          <div class="glass-card scope-section-block" style="margin-bottom: 2rem;">
            <div class="scope-official-sec-header">
              <h2>${sec.title}</h2>
              <p class="scope-sec-instructions">${sec.instructions || sec.subtitle}</p>
              <div class="scope-prep-key-box-wrap">
                <div style="font-weight: 700; font-size: 0.84rem; margin-bottom: 0.35rem; color: var(--text-primary);">Preparation key:</div>
                ${prepKeysHtml}
              </div>
            </div>

            <div class="scope-table-frame">
              <div class="scope-table-header">
                <div class="scope-col-no">No.</div>
                <div class="scope-col-topic">Topic <span style="font-weight: 400; font-size: 0.78rem; color: var(--text-secondary);">(Click dropdown under any topic for full study notes &amp; worked examples)</span></div>
                <div class="scope-col-check">Not yet<br/>prepared</div>
                <div class="scope-col-check">Partially<br/>prepared</div>
                <div class="scope-col-check">Well<br/>prepared</div>
              </div>
              ${groupsHtml || '<div style="padding: 1.25rem;"><p>All topics in this section are already checked off as Well Prepared!</p></div>'}
            </div>

            ${prioritiesHtml}
          </div>
        `;
      }).join('');

    stage.innerHTML = `
      <div class="glass-card scope-hero-card" style="margin-bottom: 1.5rem;">
        <div class="scope-hero-top">
          <div>
            <div class="meta-pill-row">
              <span class="badge badge-emerald">✓ Auto-Saved to Device (${stats.deviceId})</span>
              <span class="badge badge-sky">46 Official Exam Scope Topics</span>
              <a href="exam-scope.html" target="_blank" rel="noopener" class="badge badge-indigo" style="text-decoration: none; cursor: pointer;">
                ↗ Open Standalone Local Checkbox App (exam-scope.html)
              </a>
            </div>
            <h2>${scopeData.title}</h2>
            <p style="margin-top: 0.35rem; font-size: 0.88rem; max-width: 85ch; color: var(--text-secondary);">
              ${scopeData.disclaimer}
            </p>
          </div>
          <div class="scope-progress-summary-box">
            <div class="scope-big-pct tabular-nums" id="scope-mastery-pct">${stats.pct}%</div>
            <div class="scope-big-sub" id="scope-mastery-count">${stats.checkedCount} of ${stats.totalCount} Topics Well Prepared</div>
          </div>
        </div>

        <div class="scope-progress-track" aria-label="Exam Scope Mastery Progress">
          <div class="scope-progress-fill" id="scope-progress-fill" style="width: ${stats.pct}%;"></div>
        </div>

        <div class="scope-kpi-strip">
          <div class="scope-mini-stat">
            <span>Calculations (Well Prepared):</span>
            <strong class="tabular-nums">${stats.calcChecked} / ${stats.calcTotal}</strong>
          </div>
          <div class="scope-mini-stat">
            <span>Theory (Well Prepared):</span>
            <strong class="tabular-nums">${stats.theoChecked} / ${stats.theoTotal}</strong>
          </div>
          <div class="scope-mini-stat">
            <span>Partially Prepared:</span>
            <strong class="tabular-nums">${stats.partialCount}</strong>
          </div>
          <div class="scope-mini-stat">
            <span>Not Yet Prepared:</span>
            <strong class="tabular-nums">${stats.notYetCount}</strong>
          </div>
        </div>

        <div class="scope-toolbar">
          <div class="scope-filter-group" role="tablist" aria-label="Filter Exam Scope">
            <button type="button" class="btn-secondary ${activeScopeFilter === 'all' ? 'active-filter' : ''}" data-scope-filter="all">
              All Topics (${stats.totalCount})
            </button>
            <button type="button" class="btn-secondary ${activeScopeFilter === 'calc' ? 'active-filter' : ''}" data-scope-filter="calc">
              1. Calculations (${stats.calcTotal})
            </button>
            <button type="button" class="btn-secondary ${activeScopeFilter === 'theory' ? 'active-filter' : ''}" data-scope-filter="theory">
              2. Theory (${stats.theoTotal})
            </button>
            <button type="button" class="btn-secondary ${activeScopeFilter === 'unmastered' ? 'active-filter' : ''}" data-scope-filter="unmastered">
              Needs Revision Only (${stats.totalCount - stats.checkedCount})
            </button>
          </div>
          <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
            <button type="button" class="btn-secondary" id="btn-scope-expand-all">
              ${allScopeDropdownsExpanded ? '📁 Collapse All Knowledge Dropdowns' : '📂 Expand All Knowledge Dropdowns'}
            </button>
            <button type="button" class="btn-ghost" id="btn-scope-reset">
              ↺ Reset Checklist
            </button>
          </div>
        </div>
      </div>

      ${sectionsHtml}
    `;

    stage.querySelectorAll('details.scope-knowledge-dropdown').forEach((det) => {
      det.addEventListener('toggle', () => {
        const id = det.getAttribute('data-dropdown-id');
        if (!id) return;
        if (det.open) openScopeDropdowns.add(id);
        else openScopeDropdowns.delete(id);
        const btn = stage.querySelector(`[data-toggle-dropdown="${id}"]`);
        if (btn) {
          btn.setAttribute('aria-expanded', det.open ? 'true' : 'false');
          const chev = btn.querySelector('.scope-chevron');
          if (chev) chev.textContent = det.open ? '▴' : '▾';
        }
      });
    });

    stage.querySelectorAll('[data-toggle-dropdown]').forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const id = btn.getAttribute('data-toggle-dropdown');
        const det = stage.querySelector(`details.scope-knowledge-dropdown[data-dropdown-id="${id}"]`);
        if (det) {
          det.open = !det.open;
          if (det.open) openScopeDropdowns.add(id);
          else openScopeDropdowns.delete(id);
        }
      });
    });

    stage.querySelectorAll('.scope-level-checkbox').forEach((chk) => {
      chk.addEventListener('change', () => {
        const itemId = chk.getAttribute('data-scope-item');
        const level = chk.getAttribute('data-scope-level');
        const newLevel = chk.checked ? level : '';
        ScopeEngine.setItemLevel(itemId, newLevel);
        if (newLevel === 'well') AudioEngine.playSuccess();
        else AudioEngine.playClick();
        updateKpiBanner();
        renderExamScopeStage();
      });
    });

    stage.querySelectorAll('.scope-mark-well-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const itemId = btn.getAttribute('data-scope-item');
        ScopeEngine.setItemLevel(itemId, 'well');
        AudioEngine.playSuccess();
        updateKpiBanner();
        renderExamScopeStage();
      });
    });

    const expandAllBtn = document.getElementById('btn-scope-expand-all');
    if (expandAllBtn) {
      expandAllBtn.addEventListener('click', () => {
        allScopeDropdownsExpanded = !allScopeDropdownsExpanded;
        if (!allScopeDropdownsExpanded) openScopeDropdowns.clear();
        AudioEngine.playClick();
        renderExamScopeStage();
      });
    }

    stage.querySelectorAll('[data-scope-filter]').forEach((btn) => {
      btn.addEventListener('click', () => {
        activeScopeFilter = btn.getAttribute('data-scope-filter') || 'all';
        AudioEngine.playClick();
        renderExamScopeStage();
      });
    });

    const resetBtn = document.getElementById('btn-scope-reset');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        ScopeEngine.resetAll();
        AudioEngine.playClick();
        updateKpiBanner();
        renderExamScopeStage();
      });
    }

    stage.querySelectorAll('.scope-priority-input').forEach((inp) => {
      inp.addEventListener('input', () => {
        const slot = inp.getAttribute('data-priority-slot');
        ScopeEngine.setPriorityNote(slot, inp.value);
      });
    });

    stage.querySelectorAll('.scope-jump-vault').forEach((btn) => {
      btn.addEventListener('click', () => {
        const chId = btn.getAttribute('data-ch-id');
        const ch = ECON122_DATA.chapters.find((c) => c.id === chId);
        if (ch) {
          activeChapterId = ch.id;
          initVaultModule();
          switchPlatformView('vault');
        }
      });
    });

    stage.querySelectorAll('.scope-jump-solver').forEach((btn) => {
      btn.addEventListener('click', () => {
        const sId = btn.getAttribute('data-solver-id');
        if (sId) {
          activeSolverId = sId;
          initSolversModule();
          switchPlatformView('solvers');
        }
      });
    });

    stage.querySelectorAll('.scope-jump-extreme').forEach((btn) => {
      btn.addEventListener('click', () => {
        const pageId = btn.getAttribute('data-page-id');
        if (pageId) {
          ExtremeExamEngine.jumpToPageId(pageId);
          switchPlatformView('extreme');
        }
      });
    });
  }

  function escapeAttr(str) {
    return String(str || '')
      .replace(/&/g, '&amp;')
      .replace(/"/g, '&quot;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  /* --------------------------------------------------------------------------
     MODULE 8: Extreme Exam Prep (500 Marks) & Interactive Memo Workbench
     -------------------------------------------------------------------------- */
  function formatMark(val) {
    const n = parseNumSafe(val, 0);
    const rounded = Math.round(n * 2) / 2;
    const whole = Math.floor(rounded);
    const isHalf = Math.abs(rounded - whole - 0.5) < 1e-6;
    if (isHalf) {
      return whole === 0 ? '½' : `${whole}½`;
    }
    return String(whole);
  }

  function normalizeForMatch(str) {
    return String(str || '')
      .toLowerCase()
      .replace(/[\u2212\u2013\u2014]/g, '-')
      .replace(/[^\w\s.%+-]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  /* ---- Stemmed + fuzzy keyword grading -------------------------------------
     Pipeline: tokenize -> drop stop-words -> light English stemmer ->
     per keyword term: exact | prefix (term >= 4 chars) | Levenshtein
     (1 edit for 5-8 chars, 2 edits for 9+) | reverse prefix (student wrote a
     shortened form, >= 4 chars and >= 60% of the keyword term).
     When the vendored MiniSearch library is loaded (browser + test harness),
     the exact/prefix/fuzzy lookups run through MiniSearch; otherwise the
     identical rules run natively so grades never depend on a CDN. */
  const GRADING_STOPWORDS = new Set([
    'a', 'an', 'the', 'of', 'and', 'or', 'in', 'on', 'to', 'for', 'by', 'with', 'is', 'are', 'was', 'were',
    'be', 'been', 'as', 'at', 'it', 'its', 'that', 'this', 'these', 'those', 'from', 'which', 'into', 'than',
    'there', 'their', 'they', 'them', 'such', 'so', 'also', 'will', 'can', 'has', 'have', 'had'
  ]);

  const GRADING_SUFFIX_RULES = [
    ['isations', 'iz'], ['izations', 'iz'], ['isation', 'iz'], ['ization', 'iz'],
    ['ational', 'at'], ['ations', 'at'], ['ation', 'at'], ['tions', 't'], ['tion', 't'],
    ['ically', ''], ['ical', ''], ['ics', ''],
    ['fulness', 'ful'], ['iveness', 'iv'], ['ousness', 'ous'],
    ['ilities', 'il'], ['ility', 'il'], ['ities', ''], ['ity', ''],
    ['ments', ''], ['ment', ''], ['nesses', ''], ['ness', ''],
    ['ising', 'iz'], ['izing', 'iz'], ['ised', 'iz'], ['ized', 'iz'], ['ises', 'iz'], ['izes', 'iz'], ['ise', 'iz'], ['ize', 'iz'],
    ['ings', ''], ['ing', ''],
    ['ies', 'i'], ['ied', 'i'],
    ['edly', ''], ['ed', ''], ['ers', 'er'], ['es', ''], ['ic', ''], ['s', '']
  ];

  function stemGradingToken(raw) {
    let w = String(raw || '').toLowerCase().replace(/'s$/, '').replace(/'/g, '');
    if (w.length <= 3 || /\d/.test(w)) return w;
    let stripped = false;
    if (w.endsWith('ly') && w.length - 2 >= 5) {
      w = w.slice(0, -2);
      stripped = true;
    } else {
      for (let i = 0; i < GRADING_SUFFIX_RULES.length; i++) {
        const [suf, rep] = GRADING_SUFFIX_RULES[i];
        if (w.endsWith(suf) && w.length - suf.length >= 3) {
          if (suf === 's' && (w.endsWith('ss') || w.endsWith('us') || w.endsWith('is'))) break;
          w = w.slice(0, w.length - suf.length) + rep;
          stripped = true;
          break;
        }
      }
    }
    if (!stripped && w.length > 3 && w.endsWith('y')) w = w.slice(0, -1) + 'i';
    if (!stripped && w.length >= 4 && w.endsWith('e')) w = w.slice(0, -1);
    return w;
  }

  // Raw word tokens (lower-case). Hyphenated words also emit their joined form
  // so "over-produced" and "overproduced" meet in the middle.
  function tokenizeForGrading(str) {
    const text = String(str || '')
      .toLowerCase()
      .replace(/[\u2018\u2019\u02bc]/g, "'")
      .replace(/[\u2212\u2013\u2014]/g, '-');
    const out = [];
    const chunks = text.split(/[^a-z0-9'%-]+/).filter(Boolean);
    chunks.forEach((chunk) => {
      const parts = chunk.split(/-+/).map((p) => p.replace(/^'+|'+$/g, '')).filter(Boolean);
      parts.forEach((p) => out.push(p));
      if (parts.length > 1) out.push(parts.join(''));
    });
    return out;
  }

  function processGradingTerm(tok) {
    const t = String(tok || '').replace(/^'+|'+$/g, '');
    if (!t || GRADING_STOPWORDS.has(t)) return null;
    return stemGradingToken(t);
  }

  function gradingStemsOf(str) {
    const seen = new Set();
    tokenizeForGrading(str).forEach((tok) => {
      const s = processGradingTerm(tok);
      if (s) seen.add(s);
    });
    return Array.from(seen);
  }

  function gradingFuzzyDistance(term) {
    const len = String(term || '').length;
    if (len >= 9) return 2;
    if (len >= 5) return 1;
    return 0;
  }

  function boundedLevenshtein(a, b, maxDist) {
    if (a === b) return 0;
    if (Math.abs(a.length - b.length) > maxDist) return maxDist + 1;
    let prev = new Array(b.length + 1);
    for (let j = 0; j <= b.length; j++) prev[j] = j;
    for (let i = 1; i <= a.length; i++) {
      const cur = [i];
      let rowMin = cur[0];
      for (let j = 1; j <= b.length; j++) {
        const cost = a[i - 1] === b[j - 1] ? 0 : 1;
        cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + cost);
        if (cur[j] < rowMin) rowMin = cur[j];
      }
      if (rowMin > maxDist) return maxDist + 1;
      prev = cur;
    }
    return prev[b.length];
  }

  function isReversePrefixHit(kwTerm, userStems) {
    return userStems.some((u) => u.length >= 4 && u.length < kwTerm.length && u.length >= kwTerm.length * 0.6 && kwTerm.startsWith(u));
  }

  function nativeTermHit(kwTerm, userStems) {
    const maxD = gradingFuzzyDistance(kwTerm);
    for (let i = 0; i < userStems.length; i++) {
      const u = userStems[i];
      if (u === kwTerm) return true;
      if (kwTerm.length >= 4 && u.startsWith(kwTerm)) return true;
      if (maxD > 0 && boundedLevenshtein(kwTerm, u, maxD) <= maxD) return true;
    }
    return isReversePrefixHit(kwTerm, userStems);
  }

  function getMiniSearchCtor() {
    const g = typeof globalThis !== 'undefined' ? globalThis : (typeof window !== 'undefined' ? window : {});
    const ctor = g.MiniSearch;
    return typeof ctor === 'function' ? ctor : null;
  }

  function buildGradingMatcher(userText, opts = {}) {
    const userStems = gradingStemsOf(userText);
    const MiniSearchCtor = opts.forceNative ? null : getMiniSearchCtor();
    if (MiniSearchCtor && userStems.length > 0) {
      try {
        const ms = new MiniSearchCtor({
          fields: ['text'],
          idField: 'id',
          tokenize: tokenizeForGrading,
          processTerm: processGradingTerm,
          searchOptions: {
            tokenize: (s) => [s],
            processTerm: (s) => s,
            prefix: (term) => term.length >= 4,
            fuzzy: (term) => gradingFuzzyDistance(term) || false
          }
        });
        ms.add({ id: 1, text: String(userText || '') });
        return {
          engine: 'minisearch',
          userStems,
          hit: (kwTerm) => ms.search(kwTerm).length > 0 || isReversePrefixHit(kwTerm, userStems)
        };
      } catch (_) { /* fall through to the native matcher */ }
    }
    return { engine: 'native', userStems, hit: (kwTerm) => nativeTermHit(kwTerm, userStems) };
  }

  function keywordTermVariants(kw) {
    const variants = [gradingStemsOf(String(kw).replace(/-/g, ' '))];
    if (/-/.test(String(kw))) variants.push(gradingStemsOf(String(kw).replace(/-/g, '')));
    return variants.filter((v) => v.length > 0);
  }

  function gradeTheoryKeywords(userText, keywords, maxMarks, opts = {}) {
    const kws = Array.isArray(keywords) ? keywords : [];
    const totalM = Math.max(0, parseNumSafe(maxMarks, 1));
    const normUser = normalizeForMatch(userText);
    const compactUser = normUser.replace(/\s+/g, '');
    const matcher = buildGradingMatcher(userText, opts);
    const matched = [];
    const missed = [];

    kws.forEach((kw) => {
      const normKw = normalizeForMatch(kw);
      if (!normKw) return;
      const escapedKw = normKw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const phraseHit = new RegExp(`(^|[^a-z0-9])${escapedKw}($|[^a-z0-9])`).test(normUser);
      const isSymbolicKw = /[+=%]|\s-\s/.test(normKw);
      if (normUser && (phraseHit || (isSymbolicKw && compactUser.includes(normKw.replace(/\s+/g, ''))))) {
        matched.push(kw);
        return;
      }
      const isHit = matcher.userStems.length > 0 && keywordTermVariants(kw).some((terms) => {
        const hits = terms.filter((t) => matcher.hit(t)).length;
        return hits >= Math.ceil(terms.length * 0.75);
      });
      if (isHit) matched.push(kw);
      else missed.push(kw);
    });

    const ratio = kws.length > 0 ? matched.length / kws.length : 0;
    const rawScore = ratio * totalM;
    const autoMarks = Math.min(totalM, Math.round(rawScore * 2) / 2);

    return {
      matched,
      missed,
      ratio,
      autoMarks,
      maxMarks: totalM,
      engine: matcher.engine
    };
  }

  function evaluateCalculationRubric(userText, rubricSteps) {
    const steps = Array.isArray(rubricSteps) ? rubricSteps : [];
    const rawUser = String(userText || '').toLowerCase().replace(/[\u2212\u2013\u2014]/g, '-');
    const compactUser = rawUser.replace(/(\d)[\s,]+(?=\d)/g, '$1');
    const matchedMap = {};

    steps.forEach((st) => {
      const hints = Array.isArray(st.matchHints) ? st.matchHints : [];
      let hit = false;
      for (let i = 0; i < hints.length; i++) {
        const h = String(hints[i] || '').toLowerCase().replace(/[\u2212\u2013\u2014]/g, '-');
        const compactH = h.replace(/(\d)[\s,]+(?=\d)/g, '$1');
        if (h && (rawUser.includes(h) || compactUser.includes(compactH))) {
          hit = true;
          break;
        }
      }
      matchedMap[st.id] = hit;
    });

    return matchedMap;
  }

  const CALC_SYMBOL_TOOLBAR = [
    { label: '×', insert: ' × ', title: 'Multiply' },
    { label: '÷', insert: ' ÷ ', title: 'Divide' },
    { label: '+', insert: ' + ', title: 'Add' },
    { label: '−', insert: ' − ', title: 'Subtract' },
    { label: '=', insert: ' = ', title: 'Equals' },
    { label: 'Δ', insert: 'Δ', title: 'Δ (delta) = "change in". ΔY = new Y − old Y.' },
    { label: '%', insert: '%', title: 'Percent: divide by 100 to use it in a formula (5% = 0.05).' },
    { label: 'R', insert: 'R', title: 'Rand — always state the currency/unit on your final answer.' },
    { label: '(a ÷ b)', insert: '() ÷ ()', title: 'Fraction template: top part in the first brackets, bottom part in the second.' },
    { label: '₀', insert: '₀', title: 'Subscript 0 — usually the starting / base value (Y₀ = original income).' },
    { label: '₁', insert: '₁', title: 'Subscript 1 — the new value after a change (Y₁ = new income).' },
    { label: '₂', insert: '₂', title: 'Subscript 2' },
    { label: '²', insert: '²', title: 'Squared (superscript 2)' },
    { label: 'Y', insert: 'Y', title: 'Y = total income = total output of the economy.' },
    { label: 'C', insert: 'C', title: 'C = consumption: what households spend on goods and services.' },
    { label: 'I', insert: 'I', title: 'I = investment: firms buying machines, buildings and stock.' },
    { label: 'G', insert: 'G', title: 'G = government spending on goods and services.' },
    { label: 'X', insert: 'X', title: 'X = exports: foreigners buying our goods (money flows in).' },
    { label: 'Z', insert: 'Z', title: 'Z = imports: we buy foreign goods (money flows out).' },
    { label: 'C̄', insert: 'C̄', title: 'C̄ = autonomous consumption: spending that happens even if income is zero.' },
    { label: 'Ī', insert: 'Ī', title: 'Ī = autonomous investment: investment that does not depend on income.' },
    { label: 'Ā', insert: 'Ā', title: 'Ā = all autonomous spending added together (C̄ + Ī + Ḡ + X̄ − Z̄ …).' },
    { label: 'Yd', insert: 'Yd', title: 'Yd = disposable income: income left after paying tax (Y − T).' },
    { label: 'α', insert: 'α', title: 'α = the multiplier: how many rands of income one extra rand of spending creates.' },
    { label: 'MPC', insert: 'MPC', title: 'MPC (c) = share of each extra rand of income that is spent (0 < c < 1).' },
    { label: 'MPS', insert: 'MPS', title: 'MPS = share of each extra rand that is saved. MPC + MPS = 1.' },
    { label: 'GDPmp', insert: 'GDP@MP', title: 'GDP at market prices: what buyers actually pay, taxes on products included.' },
    { label: 'GDPbp', insert: 'GDP@BP', title: 'GDP at basic prices = GDPmp − taxes on products + subsidies on products.' },
    { label: 'GDPfc', insert: 'GDP@FC', title: 'GDP at factor cost = what the factors of production earn (all indirect taxes removed, subsidies added).' },
    { label: 'GDE', insert: 'GDE', title: 'GDE = total spending inside the country: C + I + G (imports included).' },
    { label: 'GNI', insert: 'GNI', title: 'GNI = income earned by permanent residents: GDP + primary income received − paid.' },
    { label: 'M1', insert: 'M1', title: 'M1 = notes and coins held by the public + demand (cheque) deposits.' },
    { label: 'M2', insert: 'M2', title: 'M2 = M1 + other short- and medium-term deposits.' },
    { label: 'M3', insert: 'M3', title: 'M3 = M2 + long-term deposits (the broadest money measure).' },
    { label: 'CPI', insert: 'CPI', title: 'CPI = consumer price index: the price of a typical shopping basket vs the base year (= 100).' },
    { label: 'TOT', insert: 'TOT', title: 'Terms of trade = (export price index ÷ import price index) × 100.' },
    { label: 'UR', insert: 'UR', title: 'Unemployment rate = unemployed ÷ labour force × 100.' },
    { label: 'LFPR', insert: 'LFPR', title: 'Labour force participation rate = labour force ÷ working-age population × 100.' }
  ];

  /* Converts a student's plain-text working ("GDE = C + I + G = 2 480 000 + …", "α = 1 ÷ (1 − c)",
     "C̄", "Y₀", "GDP@MP") into KaTeX source for the live typeset preview. Never throws. */
  const WORKING_SYMBOL_TEX = {
    '×': '\\times ', '*': '\\times ', '÷': '\\div ', '−': '-', '–': '-', '—': '-', '±': '\\pm ',
    '≈': '\\approx ', '≥': '\\geq ', '≤': '\\leq ', '≠': '\\neq ', '→': '\\rightarrow ', '⇒': '\\Rightarrow ',
    'Δ': '\\Delta ', 'α': '\\alpha ', 'β': '\\beta ', 'π': '\\pi ', 'μ': '\\mu ', 'σ': '\\sigma ', '√': '\\surd ',
    '%': '\\%', '$': '\\$', '#': '\\#', '&': '\\&', '_': '\\_', '{': '\\{', '}': '\\}', '\\': '\\backslash ',
    '^': '\\wedge ', '~': '\\sim ', '<': '<', '>': '>', '=': '=', '+': '+', '-': '-', '/': '/',
    '(': '(', ')': ')', '[': '[', ']': ']', ':': ':', ';': ';', '!': '!', '?': '?', '|': '|', '\'': '\'',
    'Ā': '\\bar{A}', 'Ē': '\\bar{E}', 'Ī': '\\bar{I}', 'Ō': '\\bar{O}', 'Ū': '\\bar{U}', 'Ȳ': '\\bar{Y}', 'Ḡ': '\\bar{G}',
    'ā': '\\bar{a}', 'ī': '\\bar{\\imath}', 'ȳ': '\\bar{y}'
  };
  const SUBSCRIPT_DIGITS = '₀₁₂₃₄₅₆₇₈₉';
  const SUPERSCRIPT_DIGITS = '⁰¹²³⁴⁵⁶⁷⁸⁹';

  function workingLineToLatex(line) {
    const chars = Array.from(String(line || ''));
    let out = '';
    let prevKind = '';
    let i = 0;
    const isWordChar = (k) => k === 'word' || k === 'num' || k === 'close';
    while (i < chars.length) {
      const ch = chars[i];
      if (/\s/.test(ch)) {
        let j = i;
        while (j < chars.length && /\s/.test(chars[j])) j++;
        const nextCh = chars[j] || '';
        const nextKind = /[0-9]/.test(nextCh) ? 'num' : (/[A-Za-z(]/.test(nextCh) ? 'word' : 'op');
        if (prevKind === 'num' && nextKind === 'num') out += '\\,';
        else if (isWordChar(prevKind) && nextKind !== 'op') out += '\\;';
        i = j;
        continue;
      }
      if (/[A-Za-z]/.test(ch)) {
        let j = i;
        while (j < chars.length && /[A-Za-z]/.test(chars[j])) j++;
        const word = chars.slice(i, j).join('');
        if (chars[j] === '\u0304') {
          // Combining macron: C̄ / Ī / Ā (macron applies to the last letter of the run)
          const head = word.slice(0, -1);
          out += (head ? `\\mathrm{${head}}` : '') + `\\bar{${word.slice(-1)}}`;
          j++;
        } else if (word.length === 1 || /^[a-z][A-Z]$/.test(word)) {
          out += /^[0-9]$/.test(chars[j] || '') && word === 'R' ? '\\mathrm{R}' : word;
        } else {
          out += `\\mathrm{${word}}`;
        }
        prevKind = 'word';
        i = j;
        continue;
      }
      if (/[0-9.,]/.test(ch)) {
        let j = i;
        while (j < chars.length && /[0-9.,]/.test(chars[j])) j++;
        out += chars.slice(i, j).join('').replace(/,/g, '{,}');
        prevKind = 'num';
        i = j;
        continue;
      }
      if (SUBSCRIPT_DIGITS.includes(ch) || SUPERSCRIPT_DIGITS.includes(ch)) {
        const table = SUBSCRIPT_DIGITS.includes(ch) ? SUBSCRIPT_DIGITS : SUPERSCRIPT_DIGITS;
        let j = i;
        let digits = '';
        while (j < chars.length && table.includes(chars[j])) {
          digits += String(table.indexOf(chars[j]));
          j++;
        }
        out += (out ? '' : '{}') + (table === SUBSCRIPT_DIGITS ? `_{${digits}}` : `^{${digits}}`);
        prevKind = 'word';
        i = j;
        continue;
      }
      if (ch === '@' || (ch === '_' && isWordChar(prevKind) && /[A-Za-z0-9]/.test(chars[i + 1] || ''))) {
        let j = i + 1;
        while (j < chars.length && /[A-Za-z0-9]/.test(chars[j])) j++;
        const sub = chars.slice(i + 1, j).join('');
        if (sub) {
          out += /^[0-9]+$/.test(sub) ? `_{${sub}}` : `_{\\mathrm{${sub}}}`;
        } else {
          out += ch === '@' ? '@' : '\\_';
        }
        prevKind = 'word';
        i = j;
        continue;
      }
      if (ch === '^' && isWordChar(prevKind) && /[0-9]/.test(chars[i + 1] || '')) {
        let j = i + 1;
        while (j < chars.length && /[0-9]/.test(chars[j])) j++;
        const sup = chars.slice(i + 1, j).join('');
        out += `^{${sup}}`;
        prevKind = 'word';
        i = j;
        continue;
      }
      if (Object.prototype.hasOwnProperty.call(WORKING_SYMBOL_TEX, ch)) {
        out += WORKING_SYMBOL_TEX[ch];
        prevKind = (ch === ')' || ch === ']') ? 'close' : (WORKING_SYMBOL_TEX[ch].startsWith('\\bar') ? 'word' : 'op');
        i++;
        continue;
      }
      if (ch === '\u0304') { i++; continue; }
      // Any other character (accented letters, emoji…) goes through \text{} verbatim-safe.
      out += `\\text{${ch.replace(/[{}\\]/g, '')}}`;
      prevKind = 'word';
      i++;
    }
    return out;
  }

  function workingToLatex(text) {
    return String(text || '')
      .split(/\r?\n/)
      .map((l) => workingLineToLatex(l))
      .filter((l) => l.trim().length > 0);
  }

  function renderWorkingPreview(previewEl, text) {
    if (!previewEl) return;
    const lines = workingToLatex(text);
    if (lines.length === 0) {
      previewEl.hidden = true;
      previewEl.innerHTML = '';
      return;
    }
    previewEl.hidden = false;
    previewEl.innerHTML = `<span class="calc-preview-label">Preview</span>` + lines.map((l) => {
      let html = '';
      if (typeof window !== 'undefined' && window.katex) {
        try {
          html = window.katex.renderToString(l, { throwOnError: false, displayMode: false, strict: 'ignore' });
        } catch (_) {
          html = '';
        }
      }
      if (!html) {
        html = latexToFallbackHtml(l);
      }
      return `<div class="calc-preview-line">${html}</div>`;
    }).join('');
  }

  const ExtremeExamEngine = (() => {
    let sectionFilter = 'ALL'; // 'ALL' | 'A' | 'B' | 'C'
    let currentPageIndex = 0;
    let showSummaryView = false;
    let shuffledMcqMap = {}; // partId -> [{ text, isCorrect }, ...]
    let sessionState = null;

    function getDeviceStorageKey() {
      const tState = TelemetryEngine.getState();
      const devId = (tState && tState.deviceId) ? tState.deviceId : 'DEV-LOCAL';
      return `econ122_extreme_prep_${devId}`;
    }

    function getAllPages() {
      if (typeof ECON122_DATA === 'undefined' || !ECON122_DATA.extremeExam) return [];
      return ECON122_DATA.extremeExam.pages || [];
    }

    function getFilteredPages() {
      const all = getAllPages();
      if (sectionFilter === 'ALL') return all;
      return all.filter((p) => p.section === sectionFilter);
    }

    function initShuffledOptions() {
      shuffledMcqMap = {};
      getAllPages().forEach((page) => {
        (page.parts || []).forEach((part) => {
          if (part.type === 'mcq' && Array.isArray(part.options)) {
            shuffledMcqMap[part.id] = fisherYatesShuffle(part.options);
          }
        });
      });
    }

    function getShuffledOptionsForPart(part) {
      if (!shuffledMcqMap[part.id]) {
        shuffledMcqMap[part.id] = fisherYatesShuffle(part.options || []);
      }
      return shuffledMcqMap[part.id];
    }

    function loadSessionState() {
      if (typeof localStorage !== 'undefined') {
        try {
          const raw = localStorage.getItem(getDeviceStorageKey());
          if (raw) {
            const parsed = JSON.parse(raw);
            if (parsed && typeof parsed === 'object') {
              sessionState = {
                checkedPages: parsed.checkedPages || {},
                mcqChoices: parsed.mcqChoices || {},
                textAnswers: parsed.textAnswers || {},
                theorySelfMarks: parsed.theorySelfMarks || {},
                calcRubricChecks: parsed.calcRubricChecks || {}
              };
              return sessionState;
            }
          }
        } catch (_) {}
      }
      sessionState = {
        checkedPages: {},
        mcqChoices: {},
        textAnswers: {},
        theorySelfMarks: {},
        calcRubricChecks: {}
      };
      return sessionState;
    }

    function saveSessionState() {
      if (!sessionState || typeof localStorage === 'undefined') return;
      try {
        localStorage.setItem(getDeviceStorageKey(), JSON.stringify(sessionState));
      } catch (_) {}
    }

    function getPartScore(part, isPageChecked) {
      if (!sessionState) loadSessionState();
      if (!isPageChecked) return 0;

      if (part.type === 'mcq') {
        const chosenIdx = sessionState.mcqChoices[part.id];
        const opts = getShuffledOptionsForPart(part);
        if (typeof chosenIdx === 'number' && opts[chosenIdx] && opts[chosenIdx].isCorrect) {
          return parseNumSafe(part.marks, 2);
        }
        return 0;
      }

      if (part.type === 'theory') {
        if (typeof sessionState.theorySelfMarks[part.id] === 'number') {
          return Math.min(part.marks, Math.max(0, sessionState.theorySelfMarks[part.id]));
        }
        const userTxt = sessionState.textAnswers[part.id] || '';
        const res = gradeTheoryKeywords(userTxt, part.keywords, part.marks);
        return res.autoMarks;
      }

      if (part.type === 'calculation') {
        const stepChecks = sessionState.calcRubricChecks[part.id] || {};
        let sum = 0;
        (part.rubricSteps || []).forEach((st) => {
          if (stepChecks[st.id]) {
            sum += parseNumSafe(st.marks, 0);
          }
        });
        return Math.min(part.marks, sum);
      }

      return 0;
    }

    function getPageScore(page) {
      if (!sessionState) loadSessionState();
      const isChecked = Boolean(sessionState.checkedPages[page.pageId]);
      let earned = 0;
      (page.parts || []).forEach((pt) => {
        earned += getPartScore(pt, isChecked);
      });
      return {
        earned,
        total: parseNumSafe(page.totalMarks, 0),
        isChecked
      };
    }

    function getScoreSummary() {
      if (!sessionState) loadSessionState();
      const allPages = getAllPages();
      const bySection = {
        A: { earned: 0, total: 200, checkedPages: 0, totalPages: 0 },
        B: { earned: 0, total: 150, checkedPages: 0, totalPages: 0 },
        C: { earned: 0, total: 150, checkedPages: 0, totalPages: 0 }
      };
      const byChapter = {};
      let totalEarned = 0;
      let checkedPages = 0;

      allPages.forEach((p) => {
        const sec = p.section || 'A';
        if (bySection[sec]) bySection[sec].totalPages += 1;
        const pScore = getPageScore(p);
        if (pScore.isChecked) {
          checkedPages += 1;
          if (bySection[sec]) bySection[sec].checkedPages += 1;
        }
        totalEarned += pScore.earned;
        if (bySection[sec]) bySection[sec].earned += pScore.earned;

        const chId = p.chapterId || 'ch13';
        if (!byChapter[chId]) {
          byChapter[chId] = {
            chapterId: chId,
            chapterTitle: p.chapterTitle || chId.toUpperCase(),
            earned: 0,
            total: 0
          };
        }
        byChapter[chId].earned += pScore.earned;
        byChapter[chId].total += parseNumSafe(p.totalMarks, 0);
      });

      return {
        totalEarned,
        totalPossible: 500,
        pct: Math.round((totalEarned / 500) * 100),
        checkedPages,
        totalPages: allPages.length,
        bySection,
        byChapter
      };
    }

    function checkCurrentPage(page) {
      if (!sessionState) loadSessionState();
      sessionState.checkedPages[page.pageId] = true;
      (page.parts || []).forEach((pt) => {
        if (pt.type === 'calculation') {
          const userTxt = sessionState.textAnswers[pt.id] || '';
          const autoChecks = evaluateCalculationRubric(userTxt, pt.rubricSteps);
          const prevChecks = sessionState.calcRubricChecks[pt.id] || {};
          const mergedChecks = {};
          (pt.rubricSteps || []).forEach((st) => {
            mergedChecks[st.id] = Boolean(prevChecks[st.id] || autoChecks[st.id]);
          });
          sessionState.calcRubricChecks[pt.id] = mergedChecks;
        }
      });
      saveSessionState();
    }

    function resetExam() {
      initShuffledOptions();
      sessionState = {
        checkedPages: {},
        mcqChoices: {},
        textAnswers: {},
        theorySelfMarks: {},
        calcRubricChecks: {}
      };
      currentPageIndex = 0;
      showSummaryView = false;
      saveSessionState();
    }

    function jumpToPageId(targetPageId) {
      sectionFilter = 'ALL';
      showSummaryView = false;
      const pages = getFilteredPages();
      const idx = pages.findIndex((p) => p.pageId === targetPageId);
      if (idx >= 0) {
        currentPageIndex = idx;
      }
      renderExtremeExamStage();
    }

    return {
      initShuffledOptions,
      loadSessionState,
      saveSessionState,
      getAllPages,
      getFilteredPages,
      getShuffledOptionsForPart,
      getPartScore,
      getPageScore,
      getScoreSummary,
      checkCurrentPage,
      resetExam,
      jumpToPageId,
      getState: () => sessionState || loadSessionState(),
      getSectionFilter: () => sectionFilter,
      setSectionFilter: (f) => { sectionFilter = f; currentPageIndex = 0; showSummaryView = false; },
      getCurrentPageIndex: () => currentPageIndex,
      setCurrentPageIndex: (idx) => { currentPageIndex = idx; showSummaryView = false; },
      isSummaryView: () => showSummaryView,
      setSummaryView: (val) => { showSummaryView = Boolean(val); }
    };
  })();

  function initExtremeExamModule() {
    const stage = document.getElementById('extreme-stage-container');
    if (!stage || typeof ECON122_DATA === 'undefined' || !ECON122_DATA.extremeExam) return;
    ExtremeExamEngine.initShuffledOptions();
    ExtremeExamEngine.loadSessionState();
    renderExtremeExamStage();
  }

  function renderExtremeExamStage() {
    const stage = document.getElementById('extreme-stage-container');
    if (!stage || typeof ECON122_DATA === 'undefined' || !ECON122_DATA.extremeExam) return;

    const summary = ExtremeExamEngine.getScoreSummary();
    const secFilter = ExtremeExamEngine.getSectionFilter();
    const pages = ExtremeExamEngine.getFilteredPages();
    const isSummary = ExtremeExamEngine.isSummaryView();

    // Top control bar shared across Workbench & Summary
    const headerBarHtml = `
      <div class="glass-card extreme-header-card" style="margin-bottom: 1.35rem;">
        <div class="extreme-header-top">
          <div>
            <div class="meta-pill-row">
              <span class="badge badge-sky">500 Marks Total • 117 Interactive Pages</span>
              <span class="badge badge-emerald">Section A (200) • Section B (150) • Section C (150)</span>
            </div>
            <h2>Extreme Exam Prep &amp; Interactive Memorandum Workbench</h2>
            <p style="font-size: 0.9rem; color: var(--text-secondary); margin-top: 0.25rem;">
              Complete each question or multi-part scenario, click <strong>Check Answer</strong> to grade your work and unlock the official memorandum + beginner-friendly explanation, then click <strong>Next Question →</strong>.
            </p>
          </div>
          <div class="extreme-score-badge-box">
            <div class="extreme-score-label">Live Exam Score</div>
            <div class="extreme-score-val tabular-nums" id="extreme-live-score">${formatMark(summary.totalEarned)} / 500</div>
            <div class="extreme-score-sub">${summary.checkedPages} of ${summary.totalPages} Pages Graded (${summary.pct}%)</div>
          </div>
        </div>

        <div class="extreme-section-tabs" role="tablist" aria-label="Exam Section Filter">
          <button type="button" class="btn-secondary ${!isSummary && secFilter === 'ALL' ? 'active-filter' : ''}" data-extreme-sec="ALL">
            All Sections (500 Marks)
          </button>
          <button type="button" class="btn-secondary ${!isSummary && secFilter === 'A' ? 'active-filter' : ''}" data-extreme-sec="A">
            Section A: 100 MCQs (${formatMark(summary.bySection.A.earned)} / 200)
          </button>
          <button type="button" class="btn-secondary ${!isSummary && secFilter === 'B' ? 'active-filter' : ''}" data-extreme-sec="B">
            Section B: Theory (${formatMark(summary.bySection.B.earned)} / 150)
          </button>
          <button type="button" class="btn-secondary ${!isSummary && secFilter === 'C' ? 'active-filter' : ''}" data-extreme-sec="C">
            Section C: Calculations (${formatMark(summary.bySection.C.earned)} / 150)
          </button>
          <button type="button" class="btn-primary ${isSummary ? 'active-filter' : ''}" id="btn-extreme-view-summary">
            🏆 Final Score Summary
          </button>
          <button type="button" class="btn-ghost" id="btn-extreme-reset">
            🔀 Reset &amp; Reshuffle
          </button>
        </div>
      </div>
    `;

    if (isSummary || pages.length === 0) {
      stage.innerHTML = headerBarHtml + renderExtremeSummaryHtml(summary);
      bindExtremeHeaderEvents(stage);
      const retryBtn = document.getElementById('btn-extreme-summary-retry');
      if (retryBtn) {
        retryBtn.addEventListener('click', () => {
          ExtremeExamEngine.resetExam();
          AudioEngine.playClick();
          updateKpiBanner();
          renderExtremeExamStage();
        });
      }
      const resumeBtn = document.getElementById('btn-extreme-summary-resume');
      if (resumeBtn) {
        resumeBtn.addEventListener('click', () => {
          ExtremeExamEngine.setSummaryView(false);
          AudioEngine.playClick();
          renderExtremeExamStage();
        });
      }
      return;
    }

    const pageIdx = Math.max(0, Math.min(pages.length - 1, ExtremeExamEngine.getCurrentPageIndex()));
    const page = pages[pageIdx];
    const sState = ExtremeExamEngine.getState();
    const isPageChecked = Boolean(sState.checkedPages[page.pageId]);
    const pageScore = ExtremeExamEngine.getPageScore(page);
    const isFirstPage = pageIdx === 0;
    const isLastPage = pageIdx === pages.length - 1;

    const jumpOptionsHtml = pages.map((p, idx) => {
      const checkedMark = sState.checkedPages[p.pageId] ? '✓ ' : '';
      return `<option value="${idx}" ${idx === pageIdx ? 'selected' : ''}>${checkedMark}Page ${idx + 1}/${pages.length}: ${p.title} (${p.totalMarks}m)</option>`;
    }).join('');

    const partsHtml = (page.parts || []).map((part) => {
      return renderExtremePartHtml(part, isPageChecked, sState, page.chapterId);
    }).join('');

    stage.innerHTML = `
      ${headerBarHtml}

      <div class="glass-card extreme-page-card" id="extreme-active-page" data-page-id="${page.pageId}">
        <div class="quiz-toolbar" style="margin-bottom: 1rem; padding-bottom: 0.85rem; border-bottom: 1px solid var(--border-subtle);">
          <div>
            <div class="meta-pill-row" style="margin-bottom: 0.35rem;">
              <span class="badge badge-sky">${page.sectionTitle}</span>
              <span class="badge badge-indigo">${page.chapterTitle}</span>
              <span class="badge ${isPageChecked ? 'badge-emerald' : 'badge-amber'}">
                ${isPageChecked ? `Graded: ${formatMark(pageScore.earned)} / ${page.totalMarks} Marks` : `${page.totalMarks} Marks`}
              </span>
            </div>
            <h3 style="font-size: 1.22rem;">${page.title}</h3>
          </div>

          <div class="quiz-nav-btn-group">
            <select id="extreme-page-select" class="select-input" aria-label="Jump to Exam Page" style="width: auto; max-width: 310px; font-size: 0.82rem;">
              ${jumpOptionsHtml}
            </select>
            <button type="button" class="btn-secondary" id="btn-extreme-prev-top" ${isFirstPage ? 'disabled' : ''}>
              ← Prev
            </button>
            <button type="button" class="btn-secondary" id="btn-extreme-next-top">
              ${isLastPage ? 'Final Summary →' : 'Next Question →'}
            </button>
          </div>
        </div>

        ${page.sharedContextHtml ? `
          <div class="extreme-shared-context">
            ${page.sharedContextHtml}
          </div>
        ` : ''}

        <div class="extreme-parts-stack">
          ${partsHtml}
        </div>

        <div class="extreme-action-footer">
          <button type="button" class="btn-secondary" id="btn-extreme-prev-bottom" ${isFirstPage ? 'disabled' : ''}>
            ← Previous Question
          </button>

          <div class="extreme-footer-center">
            <button type="button" class="${isPageChecked ? 'btn-secondary' : 'btn-primary'} btn-lg-action" id="btn-extreme-check">
              <span>${isPageChecked ? '✓ Update Grade & Memo' : '✓ Check Answer'}</span>
            </button>
            ${isPageChecked ? `
              <span class="badge badge-emerald" style="font-size: 0.88rem; padding: 0.45rem 0.85rem;">
                Page Score: ${formatMark(pageScore.earned)} / ${page.totalMarks} Marks
              </span>
            ` : ''}
          </div>

          <button type="button" class="${isPageChecked ? 'btn-primary' : 'btn-secondary'} btn-lg-action" id="btn-extreme-next">
            <span>${isLastPage ? 'Finish & View Summary →' : 'Next Question →'}</span>
          </button>
        </div>
      </div>
    `;

    bindExtremeHeaderEvents(stage);
    bindExtremePageEvents(stage, page, pages, pageIdx);
  }

  function renderExtremePartHtml(part, isPageChecked, sState, chapterId) {
    const partEarned = ExtremeExamEngine.getPartScore(part, isPageChecked);
    const partDecodedVars = decodeVariablesForText(
      [part.stem, part.prompt, part.officialMemo, part.beginnerExplanation].filter(Boolean).join(' '),
      chapterId || 'ch13'
    );
    const partDecoderPillsHtml = renderDecoderPillsHtml(partDecodedVars, 'Plain-English Variable Decoder:');

    if (part.type === 'mcq') {
      const opts = ExtremeExamEngine.getShuffledOptionsForPart(part);
      const letters = ['A', 'B', 'C', 'D'];
      const chosenIdx = sState.mcqChoices[part.id];
      const correctIdx = opts.findIndex((o) => o.isCorrect);
      const correctLetter = correctIdx >= 0 ? letters[correctIdx] : 'A';
      const correctOpt = correctIdx >= 0 ? opts[correctIdx] : opts[0];

      const optionsHtml = opts.map((opt, idx) => {
        let stateClass = '';
        if (isPageChecked) {
          if (opt.isCorrect) stateClass = 'correct';
          else if (chosenIdx === idx) stateClass = 'wrong';
        } else if (chosenIdx === idx) {
          stateClass = 'selected-choice';
        }
        return `
          <button
            type="button"
            class="option-btn extreme-mcq-opt ${stateClass}"
            data-part-id="${part.id}"
            data-opt-idx="${idx}"
          >
            <span class="option-key">${letters[idx]}</span>
            <span>${renderInlineLatexText(opt.text)}</span>
          </button>
        `;
      }).join('');

      const memoHtml = isPageChecked ? `
        <div class="extreme-memo-box">
          <div class="extreme-memo-header">
            <span class="badge ${partEarned > 0 ? 'badge-emerald' : 'badge-rose'}">
              ${partEarned > 0 ? `✓ Correct (+${part.marks} / ${part.marks} Marks)` : `✗ Incorrect (0 / ${part.marks} Marks)`}
            </span>
            <span class="badge badge-sky">Official Memo Answer: Option ${correctLetter}</span>
          </div>
          <div class="extreme-official-memo">
            <strong>Official Memorandum (${correctLetter} — ${correctOpt ? correctOpt.text : ''}):</strong>
            <p style="margin-top: 0.25rem;">${part.officialMemo}</p>
          </div>
          <div class="extreme-beginner-box">
            <strong>💡 Beginner-Friendly Step-by-Step Explanation:</strong>
            <p style="margin-top: 0.25rem;">${part.beginnerExplanation}</p>
          </div>
          ${partDecoderPillsHtml}
        </div>
      ` : '';

      return `
        <div class="extreme-part-block" id="extreme-part-${part.id}">
          <div class="extreme-part-header">
            <span class="extreme-part-num">${part.number}</span>
            <span class="extreme-part-marks">[${part.marks} marks]</span>
          </div>
          <p class="extreme-part-stem">${renderInlineLatexText(part.stem)}</p>
          <div class="option-list">${optionsHtml}</div>
          ${memoHtml}
        </div>
      `;
    }

    if (part.type === 'theory') {
      const userTxt = sState.textAnswers[part.id] || '';
      const kwResult = gradeTheoryKeywords(userTxt, part.keywords, part.marks);
      const isSelfMarkedFull = sState.theorySelfMarks[part.id] === part.marks;

      let memoHtml = '';
      if (isPageChecked) {
        const matchedPills = kwResult.matched.map((k) => `<span class="kw-pill kw-hit" tabindex="0" data-tip="Found in your answer (spelling slips and word endings are tolerated).">✓ ${escapeAttr(k)}</span>`).join('');
        const missedPills = kwResult.missed.map((k) => `<span class="kw-pill kw-miss" tabindex="0" data-tip="Not found — the memo expects this idea. If you said it in other words, self-mark below.">○ ${escapeAttr(k)}</span>`).join('');

        // Generate fine-grained score buttons (0, half-marks, integer marks up to part.marks)
        const markChoices = [];
        for (let m = 0; m <= part.marks; m += (part.marks <= 3 ? 0.5 : 1)) {
          markChoices.push(m);
        }
        if (!markChoices.includes(part.marks)) markChoices.push(part.marks);

        const markBtnsHtml = markChoices.map((m) => `
          <button
            type="button"
            class="self-mark-btn ${Math.abs(partEarned - m) < 1e-6 ? 'active' : ''}"
            data-theory-part="${part.id}"
            data-theory-mark="${m}"
          >
            ${formatMark(m)} / ${part.marks}
          </button>
        `).join('');

        memoHtml = `
          <div class="extreme-memo-box">
            <div class="extreme-memo-header">
              <span class="badge ${partEarned >= part.marks * 0.7 ? 'badge-emerald' : (partEarned > 0 ? 'badge-amber' : 'badge-rose')}">
                Awarded: ${formatMark(partEarned)} / ${part.marks} Marks
              </span>
              <span class="badge badge-sky">
                Keyword Match: ${kwResult.matched.length} / ${(part.keywords || []).length} Core Concepts Detected
              </span>
            </div>

            <div class="extreme-kw-row">
              <div style="font-size: 0.8rem; font-weight: 600; color: var(--text-secondary); margin-bottom: 0.35rem;">
                Essential Concept Keywords (Matched vs. To Review):
              </div>
              <div class="kw-pills-wrap">
                ${matchedPills}
                ${missedPills}
              </div>
            </div>

            <div class="extreme-self-mark-bar">
              <label class="scope-checkbox-label" style="font-size: 0.85rem;">
                <input
                  type="checkbox"
                  class="scope-item-checkbox"
                  data-theory-full-toggle="${part.id}"
                  data-max-marks="${part.marks}"
                  ${isSelfMarkedFull ? 'checked' : ''}
                />
                <span>I phrased this accurately in my own words — Award full marks (${part.marks}/${part.marks})</span>
              </label>
              <div class="self-mark-btn-row">
                <span style="font-size: 0.78rem; color: var(--text-muted);">Or set exact marks:</span>
                ${markBtnsHtml}
              </div>
            </div>

            <div class="extreme-official-memo">
              <strong>Official Memorandum Answer (${part.number}):</strong>
              <div style="margin-top: 0.35rem; white-space: pre-line;">${part.officialMemo}</div>
              ${part.officialMemoHtml || ''}
            </div>

            <div class="extreme-beginner-box">
              <strong>💡 Beginner-Friendly Step-by-Step Explanation:</strong>
              <p style="margin-top: 0.25rem;">${part.beginnerExplanation}</p>
            </div>
            ${partDecoderPillsHtml}
          </div>
        `;
      }

      return `
        <div class="extreme-part-block" id="extreme-part-${part.id}">
          <div class="extreme-part-header">
            <span class="extreme-part-num">Question ${part.number}</span>
            <span class="extreme-part-marks">[${part.marks} marks]</span>
          </div>
          <p class="extreme-part-stem">${renderInlineLatexText(part.prompt)}</p>
          <textarea
            class="extreme-textarea"
            id="extreme-input-${part.id}"
            data-text-part="${part.id}"
            rows="3"
            placeholder="Type your definition or theoretical explanation in your own words (graded by core economic keywords)..."
          >${escapeAttr(userTxt)}</textarea>
          ${memoHtml}
        </div>
      `;
    }

    // Calculation & Quantitative Part (Section C)
    const userTxt = sState.textAnswers[part.id] || '';
    const stepChecks = sState.calcRubricChecks[part.id] || {};

    const toolbarButtonsHtml = CALC_SYMBOL_TOOLBAR.map((sym) => `
      <button
        type="button"
        class="symbol-toolbar-btn"
        data-target-input="extreme-input-${part.id}"
        data-insert-symbol="${escapeAttr(sym.insert)}"
        data-tip="${escapeAttr(sym.title)}"
        aria-label="Insert ${escapeAttr(sym.label)}: ${escapeAttr(sym.title)}"
      >${sym.label}</button>
    `).join('');

    let memoHtml = '';
    if (isPageChecked) {
      const rubricItemsHtml = (part.rubricSteps || []).map((st) => {
        const isTicked = Boolean(stepChecks[st.id]);
        return `
          <label class="rubric-step-item ${isTicked ? 'is-ticked' : ''}">
            <input
              type="checkbox"
              class="scope-item-checkbox"
              data-rubric-part="${part.id}"
              data-rubric-step="${st.id}"
              ${isTicked ? 'checked' : ''}
            />
            <span class="rubric-step-label">${st.label}</span>
          </label>
        `;
      }).join('');

      memoHtml = `
        <div class="extreme-memo-box">
          <div class="extreme-memo-header">
            <span class="badge ${partEarned >= part.marks ? 'badge-emerald' : (partEarned > 0 ? 'badge-amber' : 'badge-rose')}">
              Calculation Score: ${formatMark(partEarned)} / ${part.marks} Marks
            </span>
            <span class="badge badge-sky">Tick Each Step You Got Right Below</span>
          </div>

          <div class="rubric-checklist-box">
            <div style="font-size: 0.83rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.45rem;">
              ☑️ Interactive Self-Marking Memo Breakdown (Tick the steps your working earned):
            </div>
            <div class="rubric-steps-stack">
              ${rubricItemsHtml}
            </div>
          </div>

          <div class="extreme-official-memo">
            <strong>Official Memorandum Working (${part.number}):</strong>
            <div style="margin-top: 0.35rem; white-space: pre-line; font-family: var(--font-mono); font-size: 0.88rem;">${part.officialMemo}</div>
            ${part.officialMemoHtml || ''}
          </div>

          <div class="extreme-beginner-box">
            <strong>💡 Beginner-Friendly Step-by-Step Explanation:</strong>
            <p style="margin-top: 0.25rem;">${part.beginnerExplanation}</p>
          </div>
          ${partDecoderPillsHtml}
        </div>
      `;
    }

    return `
      <div class="extreme-part-block" id="extreme-part-${part.id}">
        <div class="extreme-part-header">
          <span class="extreme-part-num">Question ${part.number}</span>
          <span class="extreme-part-marks">[${part.marks} marks]</span>
        </div>
        <p class="extreme-part-stem">${renderInlineLatexText(part.prompt)}</p>
        ${partDecoderPillsHtml}

        <div class="symbol-toolbar" role="toolbar" aria-label="Math and Economic Symbol Toolbar for Question ${part.number}">
          <span class="symbol-toolbar-title">Insert Symbol:</span>
          ${toolbarButtonsHtml}
        </div>

        <textarea
          class="extreme-textarea calc-textarea"
          id="extreme-input-${part.id}"
          data-text-part="${part.id}"
          rows="3"
          placeholder="Write your formula, substitution, and final answer here (click any symbol above to insert at cursor)..."
        >${escapeAttr(userTxt)}</textarea>
        <div class="calc-live-preview" data-preview-for="extreme-input-${part.id}" aria-live="polite" hidden></div>
        ${memoHtml}
      </div>
    `;
  }

  function renderExtremeSummaryHtml(summary) {
    const chRowsHtml = Object.values(summary.byChapter).map((ch) => {
      const chPct = ch.total > 0 ? Math.round((ch.earned / ch.total) * 100) : 0;
      return `
        <tr>
          <td><strong>${ch.chapterTitle}</strong></td>
          <td class="tabular-nums">${formatMark(ch.earned)} / ${ch.total}</td>
          <td class="tabular-nums">${chPct}%</td>
          <td>
            <span class="badge ${chPct >= 75 ? 'badge-emerald' : (chPct >= 50 ? 'badge-amber' : 'badge-rose')}">
              ${chPct >= 75 ? 'Distinction Ready' : (chPct >= 50 ? 'Pass — Keep Practising' : 'Priority Revision')}
            </span>
          </td>
        </tr>
      `;
    }).join('');

    const verdict = summary.pct >= 75
      ? 'Distinction Readiness (≥ 75%) — Outstanding command of both theoretical and quantitative macroeconomics!'
      : (summary.pct >= 50
        ? 'Solid Foundation (50%–74%) — Review missed keywords and calculation steps to push into distinction territory.'
        : 'In Progress (< 50%) — Work through the remaining pages and use the beginner-friendly explanations to master each topic.');

    return `
      <div class="glass-card extreme-summary-card" id="extreme-summary-view">
        <div class="meta-pill-row">
          <span class="badge badge-emerald">Final Exam Performance Report</span>
          <span class="badge badge-sky">${summary.checkedPages} of ${summary.totalPages} Pages Completed</span>
        </div>
        <h2>Final Score &amp; Performance Summary</h2>
        <p style="font-size: 0.95rem; color: var(--text-secondary); margin-top: 0.35rem;">
          ${verdict}
        </p>

        <div class="kpi-bento-grid" style="grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); margin: 1.25rem 0;">
          <div class="kpi-tile">
            <div class="kpi-label">Total Exam Score</div>
            <div class="kpi-value tabular-nums">${formatMark(summary.totalEarned)} / 500</div>
            <div class="kpi-sub">${summary.pct}% Overall Score</div>
          </div>
          <div class="kpi-tile">
            <div class="kpi-label">Section A (100 MCQs)</div>
            <div class="kpi-value tabular-nums">${formatMark(summary.bySection.A.earned)} / 200</div>
            <div class="kpi-sub">${Math.round((summary.bySection.A.earned / 200) * 100)}% (${summary.bySection.A.checkedPages}/97 Pages)</div>
          </div>
          <div class="kpi-tile">
            <div class="kpi-label">Section B (Theory)</div>
            <div class="kpi-value tabular-nums">${formatMark(summary.bySection.B.earned)} / 150</div>
            <div class="kpi-sub">${Math.round((summary.bySection.B.earned / 150) * 100)}% (${summary.bySection.B.checkedPages}/10 Pages)</div>
          </div>
          <div class="kpi-tile">
            <div class="kpi-label">Section C (Calculations)</div>
            <div class="kpi-value tabular-nums">${formatMark(summary.bySection.C.earned)} / 150</div>
            <div class="kpi-sub">${Math.round((summary.bySection.C.earned / 150) * 100)}% (${summary.bySection.C.checkedPages}/10 Pages)</div>
          </div>
        </div>

        <h3 style="margin: 1.25rem 0 0.65rem;">Breakdown by Chapter (Ch 13–22)</h3>
        <div class="table-scroll-wrap">
          <table class="data-table">
            <thead>
              <tr>
                <th>Chapter</th>
                <th>Marks Earned</th>
                <th>Percentage</th>
                <th>Readiness Status</th>
              </tr>
            </thead>
            <tbody>
              ${chRowsHtml}
            </tbody>
          </table>
        </div>

        <div style="display: flex; gap: 0.85rem; flex-wrap: wrap; margin-top: 1.35rem;">
          <button type="button" class="btn-primary" id="btn-extreme-summary-resume">
            ← Return to Questions &amp; Memo Workbench
          </button>
          <button type="button" class="btn-secondary" id="btn-extreme-summary-retry">
            🔀 Retry Exam (Reset Scores &amp; Reshuffle All MCQs)
          </button>
        </div>
      </div>
    `;
  }

  function bindExtremeHeaderEvents(stage) {
    stage.querySelectorAll('[data-extreme-sec]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const sec = btn.getAttribute('data-extreme-sec');
        ExtremeExamEngine.setSectionFilter(sec);
        AudioEngine.playClick();
        renderExtremeExamStage();
      });
    });

    const sumBtn = document.getElementById('btn-extreme-view-summary');
    if (sumBtn) {
      sumBtn.addEventListener('click', () => {
        ExtremeExamEngine.setSummaryView(true);
        AudioEngine.playClick();
        renderExtremeExamStage();
      });
    }

    const resetBtn = document.getElementById('btn-extreme-reset');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        ExtremeExamEngine.resetExam();
        AudioEngine.playClick();
        updateKpiBanner();
        renderExtremeExamStage();
      });
    }
  }

  function bindExtremePageEvents(stage, page, pages, pageIdx) {
    const sState = ExtremeExamEngine.getState();

    const scrollExtremeStageToTop = () => {
      const card = document.getElementById('extreme-active-page') || document.getElementById('extreme-summary-view') || stage;
      if (card && typeof card.scrollIntoView === 'function') {
        card.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      springIn(card, { distance: 14 });
    };

    // Page Jump select
    const pageSel = document.getElementById('extreme-page-select');
    if (pageSel) {
      pageSel.addEventListener('change', () => {
        const target = parseInt(pageSel.value, 10);
        if (!Number.isNaN(target) && target >= 0 && target < pages.length) {
          ExtremeExamEngine.setCurrentPageIndex(target);
          AudioEngine.playClick();
          renderExtremeExamStage();
          scrollExtremeStageToTop();
        }
      });
    }

    // Prev / Next buttons
    const goPrev = () => {
      if (pageIdx > 0) {
        ExtremeExamEngine.setCurrentPageIndex(pageIdx - 1);
        AudioEngine.playClick();
        renderExtremeExamStage();
        scrollExtremeStageToTop();
      }
    };
    const goNext = () => {
      if (pageIdx < pages.length - 1) {
        ExtremeExamEngine.setCurrentPageIndex(pageIdx + 1);
        AudioEngine.playClick();
        renderExtremeExamStage();
        scrollExtremeStageToTop();
      } else {
        ExtremeExamEngine.setSummaryView(true);
        AudioEngine.playSuccess();
        renderExtremeExamStage();
        scrollExtremeStageToTop();
      }
    };

    ['btn-extreme-prev-top', 'btn-extreme-prev-bottom'].forEach((id) => {
      const b = document.getElementById(id);
      if (b) b.addEventListener('click', goPrev);
    });
    ['btn-extreme-next-top', 'btn-extreme-next'].forEach((id) => {
      const b = document.getElementById(id);
      if (b) b.addEventListener('click', goNext);
    });

    // Check Answer button
    const checkBtn = document.getElementById('btn-extreme-check');
    if (checkBtn) {
      checkBtn.addEventListener('click', () => {
        ExtremeExamEngine.checkCurrentPage(page);
        const pScore = ExtremeExamEngine.getPageScore(page);
        if (pScore.earned > 0) AudioEngine.playSuccess();
        else AudioEngine.playClick();
        updateKpiBanner();
        renderExtremeExamStage();
        document.querySelectorAll('#extreme-active-page .extreme-memo-box').forEach((box, i) => {
          springIn(box, { delay: Math.min(i, 6) * 60 });
        });
      });
    }

    // MCQ Option selection
    stage.querySelectorAll('.extreme-mcq-opt').forEach((btn) => {
      btn.addEventListener('click', () => {
        const partId = btn.getAttribute('data-part-id');
        const optIdx = parseInt(btn.getAttribute('data-opt-idx'), 10);
        sState.mcqChoices[partId] = optIdx;
        ExtremeExamEngine.saveSessionState();
        AudioEngine.playClick();
        updateKpiBanner();
        renderExtremeExamStage();
      });
    });

    // Textarea input persistence (Theory & Calculation) + live typeset preview for calculations
    const previewFor = (inputEl) => stage.querySelector(`[data-preview-for="${inputEl.id}"]`);
    stage.querySelectorAll('[data-text-part]').forEach((ta) => {
      const pv = previewFor(ta);
      if (pv) renderWorkingPreview(pv, ta.value);
      let rafId = 0;
      ta.addEventListener('input', () => {
        const partId = ta.getAttribute('data-text-part');
        sState.textAnswers[partId] = ta.value;
        ExtremeExamEngine.saveSessionState();
        if (pv && typeof requestAnimationFrame === 'function') {
          cancelAnimationFrame(rafId);
          rafId = requestAnimationFrame(() => renderWorkingPreview(pv, ta.value));
        }
      });
    });

    // Math & Economic Symbol Toolbar insertion at cursor
    stage.querySelectorAll('[data-insert-symbol]').forEach((btn) => {
      // Keep the caret in the textarea: stop the button from taking focus on mouse/touch down.
      btn.addEventListener('mousedown', (e) => e.preventDefault());
      btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-target-input');
        const sym = btn.getAttribute('data-insert-symbol') || '';
        const inputEl = document.getElementById(targetId);
        if (inputEl) {
          const start = typeof inputEl.selectionStart === 'number' ? inputEl.selectionStart : inputEl.value.length;
          const end = typeof inputEl.selectionEnd === 'number' ? inputEl.selectionEnd : inputEl.value.length;
          const before = inputEl.value.slice(0, start);
          const after = inputEl.value.slice(end);
          inputEl.value = before + sym + after;
          const partId = inputEl.getAttribute('data-text-part');
          if (partId) {
            sState.textAnswers[partId] = inputEl.value;
            ExtremeExamEngine.saveSessionState();
          }
          inputEl.focus();
          const newCursor = start + sym.length;
          if (typeof inputEl.setSelectionRange === 'function') {
            inputEl.setSelectionRange(newCursor, newCursor);
          }
          renderWorkingPreview(previewFor(inputEl), inputEl.value);
          AudioEngine.playClick();
        }
      });
    });

    // Section B Self-Mark Full Marks toggle
    stage.querySelectorAll('[data-theory-full-toggle]').forEach((chk) => {
      chk.addEventListener('change', () => {
        const partId = chk.getAttribute('data-theory-full-toggle');
        const maxM = parseNumSafe(chk.getAttribute('data-max-marks'), 1);
        if (chk.checked) {
          sState.theorySelfMarks[partId] = maxM;
          AudioEngine.playSuccess();
        } else {
          delete sState.theorySelfMarks[partId];
          AudioEngine.playClick();
        }
        ExtremeExamEngine.saveSessionState();
        updateKpiBanner();
        renderExtremeExamStage();
      });
    });

    // Section B exact self-mark buttons
    stage.querySelectorAll('[data-theory-mark]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const partId = btn.getAttribute('data-theory-part');
        const m = parseNumSafe(btn.getAttribute('data-theory-mark'), NaN);
        if (Number.isFinite(m)) {
          sState.theorySelfMarks[partId] = m;
          ExtremeExamEngine.saveSessionState();
          AudioEngine.playClick();
          updateKpiBanner();
          renderExtremeExamStage();
        }
      });
    });

    // Section C Interactive Self-Marking Rubric Checkboxes
    stage.querySelectorAll('[data-rubric-step]').forEach((chk) => {
      chk.addEventListener('change', () => {
        const partId = chk.getAttribute('data-rubric-part');
        const stepId = chk.getAttribute('data-rubric-step');
        if (!sState.calcRubricChecks[partId]) {
          sState.calcRubricChecks[partId] = {};
        }
        sState.calcRubricChecks[partId][stepId] = chk.checked;
        ExtremeExamEngine.saveSessionState();
        if (chk.checked) AudioEngine.playSuccess();
        else AudioEngine.playClick();
        updateKpiBanner();
        renderExtremeExamStage();
      });
    });
  }

  /* --------------------------------------------------------------------------
     6. Export Pure Functions for Automated Node.js VM Sandbox Verification
     -------------------------------------------------------------------------- */
  const ECON122_ENGINE = {
    parseNumSafe,
    fisherYatesShuffle,
    solveKeynesianModel,
    solveNationalAccounts,
    solveSarsTax,
    solveDeflatorAndRule70,
    solveLabourMarket,
    solveMonetaryAggregates,
    resolveLabelCollisions,
    computeSvgLabCoordinates,
    gradeTheoryKeywords,
    stemGradingToken,
    gradingStemsOf,
    workingToLatex,
    latexToFallbackHtml,
    renderWorkingPreview,
    evaluateCalculationRubric,
    formatMark,
    escapeAttr,
    GLOBAL_VARIABLE_DECODER,
    LAB_CONFIGS,
    SOLVER_DECODERS,
    decodeVariablesForText,
    renderDecoderPillsHtml,
    renderDecoderCardHtml,
    ScopeEngine,
    ExtremeExamEngine
  };

  globalScope.ECON122_ENGINE = ECON122_ENGINE;
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = ECON122_ENGINE;
  }
})(typeof window !== 'undefined' ? window : globalThis);

