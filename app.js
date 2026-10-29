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
     4. Silent Student Telemetry & Dwell-Time Engine (for Admin Dashboard)
     -------------------------------------------------------------------------- */
  const TelemetryEngine = (function () {
    const STORAGE_KEY = 'econ122_telemetry_v1';
    const SYNC_TOPIC = 'https://ntfy.sh/nwu_econ122_telemetry_prod_v1';
    let state = null;
    let isWindowActive = true;
    let lastClickTime = Date.now();
    let isTimerPaused = false;
    let detectedIp = null;
    let lastBroadcastTime = 0;

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
            break;
          }
        } catch (_) {}
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
          lastClick: new Date().toISOString(),
          activeSeconds: 0,
          activeDwellSeconds: 0,
          isTimerPaused: false,
          status: 'Active',
          questionsAnswered: 0,
          questionsCorrect: 0,
          mistakeIds: [],
          chapterStats: {},
          recentEvents: []
        };
        saveState();
      }
      if (detectedIp && (!state.deviceIp || state.deviceIp.includes('Detecting') || state.deviceIp.includes('Local'))) {
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
        if (detectedIp && (!state.deviceIp || state.deviceIp.includes('Detecting') || state.deviceIp.includes('Local'))) {
          state.deviceIp = detectedIp;
        }
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      } catch (_) {}
    }

    async function broadcastHeartbeat() {
      if (typeof fetch === 'undefined' || !state) return;
      // Do not broadcast from admin panel
      if (typeof window !== 'undefined' && window.location && window.location.href.toLowerCase().includes('admin')) {
        return;
      }
      try {
        const payload = {
          deviceId: state.deviceId,
          deviceIp: state.deviceIp || detectedIp || '127.0.0.1',
          activeSeconds: state.activeSeconds || 0,
          activeTimeFormatted: formatTime(state.activeSeconds || 0),
          status: isTimerPaused ? 'Paused (Idle > 60s)' : 'Active',
          lastClick: state.lastClick || new Date(lastClickTime).toISOString(),
          timestamp: Math.floor(Date.now() / 1000)
        };
        await fetch(SYNC_TOPIC, {
          method: 'POST',
          headers: { 'Title': 'DeviceHeartbeat' },
          body: JSON.stringify(payload)
        });
        lastBroadcastTime = Date.now();
      } catch (_) {}
    }

    function recordClick() {
      // Do not record admin panel clicks
      if (typeof window !== 'undefined' && window.location && window.location.href.toLowerCase().includes('admin')) {
        return;
      }
      lastClickTime = Date.now();
      if (state) {
        state.lastClick = new Date().toISOString();
        if (isTimerPaused) {
          isTimerPaused = false;
          state.isTimerPaused = false;
          state.status = 'Active';
          saveState();
          broadcastHeartbeat();
        }
      }
    }

    function recordQuestionAttempt(question, isCorrect) {
      if (!state) loadState();
      if (!state) return;
      recordClick();
      state.questionsAnswered = (state.questionsAnswered || 0) + 1;
      if (isCorrect) {
        state.questionsCorrect = (state.questionsCorrect || 0) + 1;
        state.mistakeIds = (state.mistakeIds || []).filter((id) => id !== question.id);
      } else {
        if (!state.mistakeIds.includes(question.id)) {
          state.mistakeIds.push(question.id);
        }
      }
      saveState();
      broadcastHeartbeat();
    }

    function startHeartbeat() {
      // NEVER run tracking inside admin.html!
      if (typeof window !== 'undefined' && window.location && window.location.href.toLowerCase().includes('admin')) {
        return;
      }
      if (typeof window === 'undefined' || typeof document === 'undefined') return;

      loadState();
      fetchPublicIp();

      // Listen strictly for clicks and key interactions on the actual web app
      const clickEvents = ['click', 'mousedown', 'pointerdown', 'touchstart', 'keydown'];
      clickEvents.forEach((evt) => {
        window.addEventListener(evt, recordClick, { passive: true });
      });

      document.addEventListener('visibilitychange', () => {
        isWindowActive = !document.hidden;
        if (document.hidden) {
          isTimerPaused = true;
          if (state) {
            state.isTimerPaused = true;
            state.status = 'Paused (Background)';
            saveState();
            broadcastHeartbeat();
          }
        } else {
          recordClick();
        }
      });
      window.addEventListener('blur', () => {
        isWindowActive = false;
        isTimerPaused = true;
        if (state) {
          state.isTimerPaused = true;
          state.status = 'Paused (Blurred)';
          saveState();
          broadcastHeartbeat();
        }
      });
      window.addEventListener('focus', () => {
        isWindowActive = !document.hidden;
        recordClick();
      });

      // 1-second interval checks if student clicked within last 60 seconds
      setInterval(() => {
        if (!state) return;
        const idleSec = Math.floor((Date.now() - lastClickTime) / 1000);

        if (idleSec >= 60 || !isWindowActive || document.hidden) {
          // Inactive for 60 seconds -> Stop the timer!
          isTimerPaused = true;
          state.isTimerPaused = true;
          state.status = 'Paused (Idle > 60s)';
        } else {
          // Active (clicked within 60s) -> Run the timer!
          isTimerPaused = false;
          state.isTimerPaused = false;
          state.status = 'Active';
          state.activeSeconds = (state.activeSeconds || 0) + 1;
          state.activeDwellSeconds = state.activeSeconds;
        }

        saveState();

        // Broadcast to cloud relay every 3 seconds so admin sees it in real time
        if (Date.now() - lastBroadcastTime >= 3000) {
          broadcastHeartbeat();
        }
      }, 1000);

      window.addEventListener('beforeunload', () => {
        if (state) {
          state.status = 'Offline';
          saveState();
          broadcastHeartbeat();
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
    el.textContent = lines.join(' | ');
  }

  function renderInlineLatexText(str) {
    if (!str) return '';
    if (typeof window === 'undefined' || !window.katex) return str;
    return String(str).replace(/\$([^$]+)\$/g, (_, math) => {
      try {
        return window.katex.renderToString(math, { throwOnError: false, displayMode: false });
      } catch (_) {
        return math;
      }
    });
  }

  function initPlatformUI() {
    if (typeof ECON122_DATA === 'undefined') return;
    TelemetryEngine.startHeartbeat();

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

    const formulasHtml = (ch.formulas || []).map((f, idx) => `
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
          <p class="concept-body" style="font-size: 0.88rem;">${renderInlineLatexText(f.meaning || f.intuition || '')}</p>
        </div>
      </div>
    `).join('');

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
            <div class="variable-decoder-card">
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
        <span class="badge badge-sky">KaTeX Precision</span>
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
          matchedCards.push(`
            <div class="glass-card formula-card">
              <div class="meta-pill-row"><span class="badge badge-sky">Ch ${ch.number} Formula</span></div>
              <div class="concept-card-title">${f.name}</div>
              <div class="katex-box" data-katex-display="${encodeURIComponent(f.latex)}"></div>
              <p class="concept-body">${renderInlineLatexText(f.meaning || '')}</p>
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
      ]
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
          <span class="control-val" id="val-${cfg.id}-${s.key}">${cfg.state[s.key]}</span>
        </div>
        <input type="range" id="slider-${cfg.id}-${s.key}" data-slider-key="${s.key}" min="${s.min}" max="${s.max}" step="${s.step}" value="${cfg.state[s.key]}" />
      </div>
    `).join('');

    controlsEl.innerHTML = `
      <div class="meta-pill-row"><span class="badge badge-sky">Parameter Controls</span></div>
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
        <circle cx="${coords.eqX}" cy="${coords.eqY}" r="6" fill="#10b981" stroke="#ffffff" stroke-width="2" />
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
      const baseEqY = padT + 0.6 * (H - padT - padB);

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
        <circle cx="${coords.eqX}" cy="${coords.eqY}" r="6.5" fill="#10b981" stroke="#fff" stroke-width="2" />
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
        <circle cx="${coords.eqX}" cy="${coords.eqY}" r="6.5" fill="#38bdf8" stroke="#fff" stroke-width="2" />
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
        <circle cx="${coords.optX}" cy="${coords.optY}" r="6" fill="#10b981" stroke="#fff" stroke-width="2" />
        <circle cx="${coords.mktX}" cy="${coords.mktY}" r="6" fill="#f59e0b" stroke="#fff" stroke-width="2" />
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
        <circle cx="${coords.eqX}" cy="${coords.eqY}" r="6.5" fill="#f59e0b" stroke="#fff" stroke-width="2" />
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
        <svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${cfg.title} Interactive Vector Diagram">
          <!-- Coordinate Grid -->
          <line x1="${padL}" y1="${padT}" x2="${padL}" y2="${axisBottom}" stroke="var(--svg-axis)" stroke-width="2" />
          <line x1="${padL}" y1="${axisBottom}" x2="${axisRight}" y2="${axisBottom}" stroke="var(--svg-axis)" stroke-width="2" />
          ${svgBody}
        </svg>
      </div>
      ${metricsHtml}
    `;
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
              <div>${refutationsHtml}</div>
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

    const writtenHtml = (pp.writtenSections || []).map((w, idx) => `
      <div class="pitfall-accordion ${idx === 0 ? 'open' : ''}">
        <button type="button" class="pitfall-trigger">
          <span>📝 ${w.number}: ${w.prompt}</span>
          <span class="badge badge-emerald">Analytical Solution</span>
        </button>
        <div class="pitfall-content" style="grid-template-columns: 1fr;">
          <div class="law-pane">
            <div style="font-weight: 700; color: var(--accent-emerald); margin-bottom: 0.35rem;">✅ Complete Analytical Derivation &amp; Step-by-Step Solution</div>
            <div>${renderInlineLatexText(w.memo)}</div>
          </div>
        </div>
      </div>
    `).join('');

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
          fb.innerHTML = `
            <div class="feedback-panel">
              <div class="katex-box" id="pp-katex-${qIdx}" style="margin-bottom: 0.65rem;"></div>
              <div class="refutation-item ${chosen.isCorrect ? 'is-correct' : 'is-wrong'}">
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
      const fRows = (ch.formulas || []).map((f) => `
        <div style="margin-bottom: 0.65rem; padding-bottom: 0.55rem; border-bottom: 1px solid var(--border-subtle);">
          <div style="font-weight: 700; font-size: 0.88rem; color: var(--accent-sky);">${f.name}</div>
          <div class="katex-box" data-cheat-katex="${encodeURIComponent(f.latex)}" style="margin: 0.35rem 0; padding: 0.5rem;"></div>
          <div style="font-size: 0.8rem; color: var(--text-secondary);">${renderInlineLatexText(f.meaning || '')}</div>
        </div>
      `).join('');

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
      if (typeof localStorage !== 'undefined') {
        try {
          const raw = localStorage.getItem(devKey) || localStorage.getItem(FALLBACK_KEY);
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
          localStorage.setItem(FALLBACK_KEY, serialized);
        } catch (_) {}
      }
    }

    function toggleItemChecked(itemId, isChecked) {
      if (!scopeState) loadScopeState();
      const checkedVal = Boolean(isChecked);
      scopeState.checked[itemId] = checkedVal;
      scopeState.levels[itemId] = checkedVal ? 'well' : (scopeState.levels[itemId] === 'well' ? 'not_yet' : (scopeState.levels[itemId] || 'not_yet'));
      saveScopeState();
      return scopeState;
    }

    function setItemLevel(itemId, level) {
      if (!scopeState) loadScopeState();
      scopeState.levels[itemId] = level;
      scopeState.checked[itemId] = (level === 'well');
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
        partialCount
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
      getDeviceStorageKey
    };
  })();

  let activeScopeFilter = 'all';

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
            const currLevel = state.levels[item.id] || (isChecked ? 'well' : 'not_yet');

            return `
              <div class="scope-checklist-item ${isChecked ? 'is-mastered' : (currLevel === 'partial' ? 'is-partial' : '')}" id="scope-item-card-${item.id}">
                <div class="scope-item-top">
                  <label class="scope-checkbox-label" for="scope-chk-${item.id}">
                    <input
                      type="checkbox"
                      id="scope-chk-${item.id}"
                      class="scope-item-checkbox"
                      data-scope-check="${item.id}"
                      ${isChecked ? 'checked' : ''}
                    />
                    <span class="scope-item-code">${item.code}</span>
                    <span class="scope-item-topic">${item.topic}</span>
                  </label>

                  <div class="scope-level-pills" role="group" aria-label="Preparation level for ${item.code}">
                    <button type="button" class="scope-level-btn ${currLevel === 'not_yet' ? 'active-not-yet' : ''}" data-scope-item="${item.id}" data-scope-level="not_yet">
                      Not yet prepared
                    </button>
                    <button type="button" class="scope-level-btn ${currLevel === 'partial' ? 'active-partial' : ''}" data-scope-item="${item.id}" data-scope-level="partial">
                      Partially prepared
                    </button>
                    <button type="button" class="scope-level-btn ${currLevel === 'well' ? 'active-well' : ''}" data-scope-item="${item.id}" data-scope-level="well">
                      ✓ Well prepared
                    </button>
                  </div>
                </div>

                <div class="scope-item-guide">
                  <div class="scope-formula-bar">
                    <strong>Key Formula / Framework:</strong> <span>${item.formula}</span>
                  </div>
                  <div class="scope-beginner-tip">
                    <strong>💡 Plain-English Breakdown:</strong> ${item.beginnerTip}
                  </div>
                </div>
              </div>
            `;
          }).join('');

          return `
            <div class="glass-card scope-group-card">
              <div class="scope-group-header">
                <div>
                  <div class="meta-pill-row" style="margin-bottom: 0.3rem;">
                    <span class="badge badge-sky">${grp.chapterLabel}</span>
                    <span class="badge ${groupCheckedCount === groupTotalCount ? 'badge-emerald' : 'badge-amber'}">
                      ${groupCheckedCount} / ${groupTotalCount} Mastered
                    </span>
                  </div>
                  <h3>${grp.number}. ${grp.title}</h3>
                </div>
                <div class="scope-group-actions">
                  <button type="button" class="btn-ghost scope-jump-vault" data-ch-id="${grp.chapterId}">
                    📖 Study ${grp.chapterLabel}
                  </button>
                  ${grp.solverId ? `
                    <button type="button" class="btn-ghost scope-jump-solver" data-solver-id="${grp.solverId}">
                      🧮 Open Solver
                    </button>
                  ` : ''}
                  ${grp.extremePageId ? `
                    <button type="button" class="btn-secondary scope-jump-extreme" data-page-id="${grp.extremePageId}">
                      ⚡ Practice in Extreme Exam →
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

        return `
          <div class="scope-section-block" style="margin-bottom: 2rem;">
            <div class="section-header-bar" style="margin-bottom: 1rem;">
              <div>
                <h2 style="font-size: 1.35rem;">${sec.title}</h2>
                <p style="font-size: 0.9rem; color: var(--text-secondary);">${sec.subtitle}</p>
              </div>
            </div>
            ${groupsHtml || '<div class="glass-card"><p>All topics in this section are already checked off as mastered!</p></div>'}
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
            </div>
            <h2>${scopeData.title}</h2>
            <p style="margin-top: 0.35rem; font-size: 0.92rem; max-width: 78ch;">
              ${scopeData.disclaimer}
            </p>
          </div>
          <div class="scope-progress-summary-box">
            <div class="scope-big-pct tabular-nums" id="scope-mastery-pct">${stats.pct}%</div>
            <div class="scope-big-sub" id="scope-mastery-count">${stats.checkedCount} of ${stats.totalCount} Topics Mastered</div>
          </div>
        </div>

        <div class="scope-progress-track" aria-label="Exam Scope Mastery Progress">
          <div class="scope-progress-fill" id="scope-progress-fill" style="width: ${stats.pct}%;"></div>
        </div>

        <div class="scope-kpi-strip">
          <div class="scope-mini-stat">
            <span>Calculations Mastered:</span>
            <strong class="tabular-nums">${stats.calcChecked} / ${stats.calcTotal}</strong>
          </div>
          <div class="scope-mini-stat">
            <span>Theory Mastered:</span>
            <strong class="tabular-nums">${stats.theoChecked} / ${stats.theoTotal}</strong>
          </div>
          <div class="scope-mini-stat">
            <span>Partially Prepared:</span>
            <strong class="tabular-nums">${stats.partialCount}</strong>
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
          <button type="button" class="btn-ghost" id="btn-scope-reset">
            ↺ Reset Checklist
          </button>
        </div>
      </div>

      ${sectionsHtml}

      <div class="glass-card" style="margin-top: 1.5rem;">
        <h3>📝 My Revision Priorities (Saved Automatically to Your Device)</h3>
        <p style="font-size: 0.88rem; color: var(--text-secondary); margin-top: 0.25rem; margin-bottom: 1rem;">
          List the top 3 Calculation topics and top 3 Theory topics you need to revise most before the exam:
        </p>
        <div class="bento-grid-2">
          <div>
            <h4 style="margin-bottom: 0.6rem; color: var(--accent-sky);">Calculations Revision Priorities</h4>
            <div style="display: grid; gap: 0.55rem;">
              <input type="text" class="num-input scope-priority-input" data-priority-slot="calc_1" placeholder="1. e.g. Open-economy Keynesian multiplier with tax & imports..." value="${escapeAttr(state.priorities.calc_1)}" style="font-family: var(--font-sans);" />
              <input type="text" class="num-input scope-priority-input" data-priority-slot="calc_2" placeholder="2. e.g. SARS personal income tax brackets & rebates..." value="${escapeAttr(state.priorities.calc_2)}" style="font-family: var(--font-sans);" />
              <input type="text" class="num-input scope-priority-input" data-priority-slot="calc_3" placeholder="3. e.g. Comparative advantage opportunity cost ratios..." value="${escapeAttr(state.priorities.calc_3)}" style="font-family: var(--font-sans);" />
            </div>
          </div>
          <div>
            <h4 style="margin-bottom: 0.6rem; color: var(--accent-indigo);">Theory Revision Priorities</h4>
            <div style="display: grid; gap: 0.55rem;">
              <input type="text" class="num-input scope-priority-input" data-priority-slot="theo_1" placeholder="1. e.g. Negative externalities (MSC vs MPC) & Pigouvian tax graph..." value="${escapeAttr(state.priorities.theo_1)}" style="font-family: var(--font-sans);" />
              <input type="text" class="num-input scope-priority-input" data-priority-slot="theo_2" placeholder="2. e.g. Demand-pull vs cost-push stagflation AD-AS graphs..." value="${escapeAttr(state.priorities.theo_2)}" style="font-family: var(--font-sans);" />
              <input type="text" class="num-input scope-priority-input" data-priority-slot="theo_3" placeholder="3. e.g. Active vs passive money demand & SARB repo rate..." value="${escapeAttr(state.priorities.theo_3)}" style="font-family: var(--font-sans);" />
            </div>
          </div>
        </div>
      </div>
    `;

    // Wire checkboxes
    stage.querySelectorAll('[data-scope-check]').forEach((chk) => {
      chk.addEventListener('change', () => {
        const itemId = chk.getAttribute('data-scope-check');
        ScopeEngine.toggleItemChecked(itemId, chk.checked);
        if (chk.checked) AudioEngine.playSuccess();
        else AudioEngine.playClick();
        updateKpiBanner();
        renderExamScopeStage();
      });
    });

    // Wire 3-level preparation buttons
    stage.querySelectorAll('[data-scope-level]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const itemId = btn.getAttribute('data-scope-item');
        const level = btn.getAttribute('data-scope-level');
        ScopeEngine.setItemLevel(itemId, level);
        if (level === 'well') AudioEngine.playSuccess();
        else AudioEngine.playClick();
        updateKpiBanner();
        renderExamScopeStage();
      });
    });

    // Wire filter buttons
    stage.querySelectorAll('[data-scope-filter]').forEach((btn) => {
      btn.addEventListener('click', () => {
        activeScopeFilter = btn.getAttribute('data-scope-filter') || 'all';
        AudioEngine.playClick();
        renderExamScopeStage();
      });
    });

    // Wire reset button
    const resetBtn = document.getElementById('btn-scope-reset');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        ScopeEngine.resetAll();
        AudioEngine.playClick();
        updateKpiBanner();
        renderExamScopeStage();
      });
    }

    // Wire priority inputs
    stage.querySelectorAll('.scope-priority-input').forEach((inp) => {
      inp.addEventListener('input', () => {
        const slot = inp.getAttribute('data-priority-slot');
        ScopeEngine.setPriorityNote(slot, inp.value);
      });
    });

    // Wire quick jump buttons to Vault, Solver, or Extreme Exam Page
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
    const n = Number(val) || 0;
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

  function gradeTheoryKeywords(userText, keywords, maxMarks) {
    const kws = Array.isArray(keywords) ? keywords : [];
    const totalM = Number(maxMarks) || 1;
    const normUser = normalizeForMatch(userText);
    const matched = [];
    const missed = [];

    kws.forEach((kw) => {
      const normKw = normalizeForMatch(kw);
      if (!normKw) return;
      if (normUser.includes(normKw)) {
        matched.push(kw);
        return;
      }
      // Check word-stem matching for multi-word or inflected keywords
      const words = normKw.split(' ').filter((w) => w.length >= 3);
      if (words.length > 0) {
        const hitCount = words.filter((w) => {
          const stem = w.length >= 6 ? w.slice(0, w.length - 2) : (w.length >= 5 ? w.slice(0, w.length - 1) : w);
          return normUser.includes(stem);
        }).length;
        if (hitCount >= Math.ceil(words.length * 0.75)) {
          matched.push(kw);
          return;
        }
      }
      missed.push(kw);
    });

    const ratio = kws.length > 0 ? matched.length / kws.length : 0;
    const rawScore = ratio * totalM;
    const autoMarks = Math.min(totalM, Math.round(rawScore * 2) / 2);

    return {
      matched,
      missed,
      ratio,
      autoMarks,
      maxMarks: totalM
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
    { label: '×', insert: ' × ', title: 'Multiply (×)' },
    { label: '÷', insert: ' ÷ ', title: 'Divide (÷)' },
    { label: '+', insert: ' + ', title: 'Plus (+)' },
    { label: '−', insert: ' − ', title: 'Minus (−)' },
    { label: '=', insert: ' = ', title: 'Equals (=)' },
    { label: 'Δ', insert: 'Δ', title: 'Change in (Δ)' },
    { label: '%', insert: '%', title: 'Percentage (%)' },
    { label: 'R', insert: 'R', title: 'Rand (R)' },
    { label: '(a ÷ b)', insert: '() ÷ ()', title: 'Fraction template' },
    { label: '₀', insert: '₀', title: 'Subscript 0' },
    { label: '₁', insert: '₁', title: 'Subscript 1' },
    { label: '₂', insert: '₂', title: 'Subscript 2' },
    { label: '²', insert: '²', title: 'Superscript 2' },
    { label: 'Y', insert: 'Y', title: 'National Income / Output (Y)' },
    { label: 'C', insert: 'C', title: 'Consumption (C)' },
    { label: 'I', insert: 'I', title: 'Investment (I)' },
    { label: 'G', insert: 'G', title: 'Government Spending (G)' },
    { label: 'X', insert: 'X', title: 'Exports (X)' },
    { label: 'Z', insert: 'Z', title: 'Imports (Z)' },
    { label: 'C̄', insert: 'C̄', title: 'Autonomous Consumption (C̄)' },
    { label: 'Ī', insert: 'Ī', title: 'Autonomous Investment (Ī)' },
    { label: 'Ā', insert: 'Ā', title: 'Autonomous Spending (Ā)' },
    { label: 'Yd', insert: 'Yd', title: 'Disposable Income (Yd)' },
    { label: 'α', insert: 'α', title: 'Multiplier (α)' },
    { label: 'MPC', insert: 'MPC', title: 'Marginal Propensity to Consume' },
    { label: 'MPS', insert: 'MPS', title: 'Marginal Propensity to Save' },
    { label: 'GDPmp', insert: 'GDP@MP', title: 'GDP at Market Prices' },
    { label: 'GDPbp', insert: 'GDP@BP', title: 'GDP at Basic Prices' },
    { label: 'GDPfc', insert: 'GDP@FC', title: 'GDP at Factor Cost' },
    { label: 'GDE', insert: 'GDE', title: 'Gross Domestic Expenditure' },
    { label: 'GNI', insert: 'GNI', title: 'Gross National Income' },
    { label: 'M1', insert: 'M1', title: 'M1 Money Supply' },
    { label: 'M2', insert: 'M2', title: 'M2 Money Supply' },
    { label: 'M3', insert: 'M3', title: 'M3 Money Supply' },
    { label: 'CPI', insert: 'CPI', title: 'Consumer Price Index' },
    { label: 'TOT', insert: 'TOT', title: 'Terms of Trade' },
    { label: 'UR', insert: 'UR', title: 'Unemployment Rate' },
    { label: 'LFPR', insert: 'LFPR', title: 'Labour Force Participation Rate' }
  ];

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
          return part.marks || 2;
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
            sum += Number(st.marks) || 0;
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
        total: page.totalMarks || 0,
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
        byChapter[chId].total += p.totalMarks || 0;
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
        if (pt.type === 'calculation' && !sessionState.calcRubricChecks[pt.id]) {
          const userTxt = sessionState.textAnswers[pt.id] || '';
          sessionState.calcRubricChecks[pt.id] = evaluateCalculationRubric(userTxt, pt.rubricSteps);
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
      return renderExtremePartHtml(part, isPageChecked, sState);
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

  function renderExtremePartHtml(part, isPageChecked, sState) {
    const partEarned = ExtremeExamEngine.getPartScore(part, isPageChecked);

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
        const matchedPills = kwResult.matched.map((k) => `<span class="kw-pill kw-hit">✓ ${k}</span>`).join('');
        const missedPills = kwResult.missed.map((k) => `<span class="kw-pill kw-miss">○ ${k}</span>`).join('');

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
          </div>
        `;
      }

      return `
        <div class="extreme-part-block" id="extreme-part-${part.id}">
          <div class="extreme-part-header">
            <span class="extreme-part-num">Question ${part.number}</span>
            <span class="extreme-part-marks">[${part.marks} marks]</span>
          </div>
          <p class="extreme-part-stem">${part.prompt}</p>
          <textarea
            class="extreme-textarea"
            id="extreme-input-${part.id}"
            data-text-part="${part.id}"
            rows="3"
            placeholder="Type your definition or theoretical explanation in your own words (graded by core economic keywords)..."
          >${userTxt}</textarea>
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
        title="${escapeAttr(sym.title)}"
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
        </div>
      `;
    }

    return `
      <div class="extreme-part-block" id="extreme-part-${part.id}">
        <div class="extreme-part-header">
          <span class="extreme-part-num">Question ${part.number}</span>
          <span class="extreme-part-marks">[${part.marks} marks]</span>
        </div>
        <p class="extreme-part-stem">${part.prompt}</p>

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
        >${userTxt}</textarea>
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

    // Page Jump select
    const pageSel = document.getElementById('extreme-page-select');
    if (pageSel) {
      pageSel.addEventListener('change', () => {
        const target = parseInt(pageSel.value, 10);
        if (!Number.isNaN(target) && target >= 0 && target < pages.length) {
          ExtremeExamEngine.setCurrentPageIndex(target);
          AudioEngine.playClick();
          renderExtremeExamStage();
        }
      });
    }

    // Prev / Next buttons
    const goPrev = () => {
      if (pageIdx > 0) {
        ExtremeExamEngine.setCurrentPageIndex(pageIdx - 1);
        AudioEngine.playClick();
        renderExtremeExamStage();
      }
    };
    const goNext = () => {
      if (pageIdx < pages.length - 1) {
        ExtremeExamEngine.setCurrentPageIndex(pageIdx + 1);
        AudioEngine.playClick();
        renderExtremeExamStage();
      } else {
        ExtremeExamEngine.setSummaryView(true);
        AudioEngine.playSuccess();
        renderExtremeExamStage();
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
        renderExtremeExamStage();
      });
    });

    // Textarea input persistence (Theory & Calculation)
    stage.querySelectorAll('[data-text-part]').forEach((ta) => {
      ta.addEventListener('input', () => {
        const partId = ta.getAttribute('data-text-part');
        sState.textAnswers[partId] = ta.value;
        ExtremeExamEngine.saveSessionState();
      });
    });

    // Math & Economic Symbol Toolbar insertion at cursor
    stage.querySelectorAll('[data-insert-symbol]').forEach((btn) => {
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
          AudioEngine.playClick();
        }
      });
    });

    // Section B Self-Mark Full Marks toggle
    stage.querySelectorAll('[data-theory-full-toggle]').forEach((chk) => {
      chk.addEventListener('change', () => {
        const partId = chk.getAttribute('data-theory-full-toggle');
        const maxM = parseFloat(chk.getAttribute('data-max-marks')) || 1;
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
        const m = parseFloat(btn.getAttribute('data-theory-mark'));
        if (!Number.isNaN(m)) {
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
    evaluateCalculationRubric,
    formatMark,
    ScopeEngine,
    ExtremeExamEngine
  };

  globalScope.ECON122_ENGINE = ECON122_ENGINE;
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = ECON122_ENGINE;
  }
})(typeof window !== 'undefined' ? window : globalThis);

