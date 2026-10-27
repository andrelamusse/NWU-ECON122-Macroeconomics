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
    const DEVICE_REGISTRY_KEY = 'econ122_device_log_v2';
    let state = null;
    let isWindowActive = true;
    let lastActivityTime = Date.now();
    let isAFK = false;
    let deviceIp = null;

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
          (window.screen ? window.screen.colorDepth : 24),
          (navigator.hardwareConcurrency || 4),
          (Intl.DateTimeFormat ? Intl.DateTimeFormat().resolvedOptions().timeZone : 'Africa/Johannesburg')
        ].join('|')
      );
      return 'DEV-' + canvasSig.slice(0, 4).toUpperCase() + '-' + hwSig.slice(0, 4).toUpperCase();
    }

    async function detectDeviceIp() {
      if (typeof fetch === 'undefined') return;
      try {
        const r = await fetch('https://api.ipify.org?format=json', { cache: 'no-store' });
        const d = await r.json();
        if (d && d.ip) {
          deviceIp = d.ip;
          if (state) {
            state.deviceIp = d.ip;
            saveState();
          }
        }
      } catch (_) {
        try {
          const r2 = await fetch('https://ipapi.co/json/', { cache: 'no-store' });
          const d2 = await r2.json();
          if (d2 && d2.ip) {
            deviceIp = d2.ip;
            if (state) {
              state.deviceIp = d2.ip;
              saveState();
            }
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
          deviceIp: deviceIp || '127.0.0.1 (Local)',
          firstSeen: new Date().toISOString(),
          lastSeen: new Date().toISOString(),
          activeDwellSeconds: 0,
          activeHours: 0,
          isActiveUserQualified: false, // >= 300s active dwell time
          isCurrentlyActive: true,
          isAFK: false,
          status: '🟢 Active Now',
          questionsAnswered: 0,
          questionsCorrect: 0,
          mistakeIds: [],
          chapterStats: {},
          recentEvents: []
        };
        saveState();
      }
      if (deviceIp && (!state.deviceIp || state.deviceIp.includes('Local'))) {
        state.deviceIp = deviceIp;
      }
      return state;
    }

    function saveState() {
      if (typeof localStorage === 'undefined' || !state) return;
      try {
        state.lastSeen = new Date().toISOString();
        state.isActiveUserQualified = state.activeDwellSeconds >= 300;
        state.activeHours = Number((state.activeDwellSeconds / 3600).toFixed(2));
        if (deviceIp && (!state.deviceIp || state.deviceIp.includes('Local'))) {
          state.deviceIp = deviceIp;
        }
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
        syncDeviceRegistry();
      } catch (_) {}
    }

    function syncDeviceRegistry() {
      if (typeof localStorage === 'undefined' || !state) return;
      try {
        let registry = [];
        const raw = localStorage.getItem(DEVICE_REGISTRY_KEY);
        if (raw) {
          registry = JSON.parse(raw);
        }
        if (!Array.isArray(registry)) registry = [];

        const ip = state.deviceIp || deviceIp || '127.0.0.1 (Local)';
        const devId = state.deviceId || 'DEV-MAIN';
        const activeMins = Math.floor(state.activeDwellSeconds / 60);
        const activeSecsRem = state.activeDwellSeconds % 60;
        const activeHoursDec = (state.activeDwellSeconds / 3600).toFixed(2);
        const formattedUsage = `${activeHoursDec} hrs (${activeMins}m ${activeSecsRem}s)`;

        const devIndex = registry.findIndex((d) => d.deviceId === devId || d.deviceIp === ip);
        const devEntry = {
          deviceIp: ip,
          deviceId: devId,
          userAgent: (typeof navigator !== 'undefined' ? (navigator.platform || navigator.userAgent.slice(0, 32)) : 'Web Browser'),
          firstSeen: state.firstSeen,
          lastSeen: state.lastSeen,
          activeDwellSeconds: state.activeDwellSeconds,
          activeHoursFormatted: formattedUsage,
          status: isAFK ? '🟡 AFK (Idle > 1m)' : (isWindowActive && !document.hidden ? '🟢 Active Now' : '⚪ Paused'),
          isAFK: isAFK,
          isActiveQualified: state.activeDwellSeconds >= 300,
          questionsAnswered: state.questionsAnswered || 0,
          questionsCorrect: state.questionsCorrect || 0,
          accuracyPct: state.questionsAnswered > 0 ? Number(((state.questionsCorrect / state.questionsAnswered) * 100).toFixed(1)) : 0
        };

        if (devIndex >= 0) {
          registry[devIndex] = devEntry;
        } else {
          registry.unshift(devEntry);
        }
        localStorage.setItem(DEVICE_REGISTRY_KEY, JSON.stringify(registry));
      } catch (_) {}
    }

    function recordActivity() {
      lastActivityTime = Date.now();
      if (isAFK) {
        isAFK = false;
        if (state) {
          state.isAFK = false;
          state.status = '🟢 Active Now';
          saveState();
        }
      }
    }

    function recordQuestionAttempt(question, isCorrect) {
      if (!state) loadState();
      if (!state) return;
      recordActivity();
      state.questionsAnswered += 1;
      if (isCorrect) {
        state.questionsCorrect += 1;
        state.mistakeIds = (state.mistakeIds || []).filter((id) => id !== question.id);
      } else {
        if (!state.mistakeIds.includes(question.id)) {
          state.mistakeIds.push(question.id);
        }
      }

      const ch = question.chapter || 'ch13';
      if (!state.chapterStats[ch]) {
        state.chapterStats[ch] = { attempts: 0, correct: 0 };
      }
      state.chapterStats[ch].attempts += 1;
      if (isCorrect) state.chapterStats[ch].correct += 1;

      state.recentEvents.unshift({
        ts: new Date().toISOString(),
        type: 'quiz_attempt',
        questionId: question.id,
        chapter: ch,
        isCorrect
      });
      if (state.recentEvents.length > 60) {
        state.recentEvents.length = 60;
      }
      saveState();
    }

    function startHeartbeat() {
      if (typeof window === 'undefined' || typeof document === 'undefined') return;
      loadState();
      detectDeviceIp();

      // Listen for human interactions
      const events = ['mousemove', 'mousedown', 'keydown', 'touchstart', 'scroll', 'click', 'input'];
      events.forEach((evt) => {
        window.addEventListener(evt, recordActivity, { passive: true });
      });

      document.addEventListener('visibilitychange', () => {
        isWindowActive = !document.hidden;
        if (document.hidden) {
          if (state) state.status = '⚪ Paused (Background)';
          saveState();
        } else {
          recordActivity();
        }
      });
      window.addEventListener('blur', () => {
        isWindowActive = false;
        if (state) state.status = '⚪ Paused (Blurred)';
        saveState();
      });
      window.addEventListener('focus', () => {
        isWindowActive = !document.hidden;
        recordActivity();
      });

      // 1-second interval checks AFK status (stopping counter when idle >= 60s)
      setInterval(() => {
        if (!state) return;
        const idleDurationMs = Date.now() - lastActivityTime;
        if (idleDurationMs >= 60000) {
          isAFK = true;
          state.isAFK = true;
          state.status = '🟡 AFK (Idle > 1m)';
          state.isCurrentlyActive = false;
        } else {
          isAFK = false;
          state.isAFK = false;
          state.isCurrentlyActive = isWindowActive && !document.hidden;
          if (state.isCurrentlyActive) {
            state.status = '🟢 Active Now';
          }
        }

        // Increment active dwell time ONLY if user is actively engaged (NOT AFK)
        if (!isAFK && isWindowActive && !document.hidden) {
          state.activeDwellSeconds = (state.activeDwellSeconds || 0) + 1;
        }

        // Save state every 5 seconds
        if (state.activeDwellSeconds % 5 === 0) {
          saveState();
        }
      }, 1000);

      window.addEventListener('beforeunload', () => {
        if (state) {
          state.status = '⚪ Offline (Closed)';
          saveState();
        }
      });
    }

    return {
      loadState,
      recordQuestionAttempt,
      startHeartbeat,
      getState: () => state || loadState(),
      getDeviceIp: () => deviceIp || (state ? state.deviceIp : null),
      isUserAFK: () => isAFK
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

    // 3. Initialize all 6 Modules
    updateKpiBanner();
    initVaultModule();
    initSvgLabModule();
    initSolversModule();
    initQuizModule();
    initPastPapersModule();
    initCheatSheetModule();
  }

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

    stage.innerHTML = `
      <div class="glass-card chapter-header-card">
        <div>
          <div class="meta-pill-row">
            <span class="badge badge-sky">Chapter ${ch.number}</span>
            <span class="badge badge-emerald">Chapter ${ch.number}</span>
            <span class="badge badge-indigo">${ch.pages || ch.shortTitle}</span>
            <span class="badge badge-amber">${chQuestions.length} Standalone Problems</span>
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
            <span class="badge badge-sky">Problem ${currentQuizIndex + 1} of ${totalCount} (${totalCount} Standalone Problems)</span>
            <span class="badge badge-indigo">${q.source || q.topic || 'Core Macroeconomics'}</span>
            <span class="badge badge-emerald">${q.citation || q.topic || 'Core Principle'}</span>
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
            <strong>Option ${keys[i]} (${o.isCorrect ? 'Correct' : 'Distractor Refutation'}):</strong>
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
                    ${isCorrect ? '✅ First-Principles Mastery Verified' : '❌ Diagnostic Refutation & Step-by-Step Derivation'}
                  </span>
                  <span class="badge badge-sky">Core Concept: ${q.topic || q.citation || 'Core Principle'}</span>
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
    const mcqsHtml = linkedQuestions.map((q, qIdx) => {
      const opts = q.options.map((o, oIdx) => `
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
              <span class="badge badge-emerald">${q.citation || q.topic || 'Core Principle'}</span>
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
        if (!q) return;
        const chosen = q.options[oIdx];
        if (chosen.isCorrect) AudioEngine.playSuccess();
        else AudioEngine.playError();

        stage.querySelectorAll(`.pp-opt-btn[data-q-idx="${qIdx}"]`).forEach((b, i) => {
          b.disabled = true;
          if (q.options[i].isCorrect) b.classList.add('correct');
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
          <strong>• ${c.title} (${c.tag || ''}):</strong> ${renderInlineLatexText(c.intuition || '')}
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
            <span class="badge badge-emerald">Chapter ${ch.number}</span>
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
    computeSvgLabCoordinates
  };

  globalScope.ECON122_ENGINE = ECON122_ENGINE;
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = ECON122_ENGINE;
  }
})(typeof window !== 'undefined' ? window : globalThis);
