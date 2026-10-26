// Auto-generated & Mathematically Verified Knowledge Base for NWU ECON122
// Source: Philip Mohr - Economics for South African Students (6e, Van Schaik, 2020) & Official NWU Past Papers (2018–2024)

const ECON122_DATA = {
  chapters: [
  {
    "id": "ch13",
    "number": 13,
    "title": "Measuring the Performance of the Economy",
    "shortTitle": "Macro Measurement",
    "pages": "Mohr 6e, pp. 235–265 (PDF pp. 598–652)",
    "accent": "#38bdf8",
    "summary": "The five macroeconomic objectives, national accounting identities (GDP, GDE, GNI, NDP, NI), three calculation methods, market prices vs basic prices vs factor cost, nominal vs real GDP, CPI, Balance of Payments, and Lorenz/Gini income inequality.",
    "formulas": [
      {
        "name": "Expenditure on GDP vs GDE",
        "latex": "\\text{GDP}_{mp} = C + I + G + (X - Z) = \\text{GDE} + (X - Z)",
        "meaning": "Gross Domestic Expenditure (GDE = C + I + G) measures total domestic spending; GDP adds exports (X) and subtracts imports (Z)."
      },
      {
        "name": "Market Prices, Basic Prices & Factor Cost",
        "latex": "\\text{GDP}_{fc} = \\text{GDP}_{mp} - T_{\\text{products/prod}} + S_{\\text{products/prod}}",
        "meaning": "To move from market prices to factor cost, subtract indirect taxes (e.g. VAT) and add subsidies."
      },
      {
        "name": "Gross National Income (GNI / GNP)",
        "latex": "\\text{GNI}_{mp} = \\text{GDP}_{mp} + \\text{FI}_{\\text{from ROW}} - \\text{FP}_{\\text{to ROW}}",
        "meaning": "Adds primary factor income earned by residents abroad and subtracts primary factor payments to foreign factor owners inside domestic borders."
      },
      {
        "name": "Net Domestic Product & National Income",
        "latex": "\\text{NI} = \\text{NDP}_{fc} + \\text{FI} - \\text{FP} = \\text{GDP}_{mp} - D + \\text{FI} - \\text{FP} - T_{\\text{ind}} + S",
        "meaning": "Subtracts depreciation (consumption of fixed capital, D) and converts to resident factor cost."
      },
      {
        "name": "Real GDP & Implicit GDP Deflator",
        "latex": "\\text{GDP Deflator} = \\left(\\frac{\\text{Nominal GDP}}{\\text{Real GDP}}\\right) \\times 100",
        "meaning": "Eliminates price inflation by valuing current quantities at base-year constant prices."
      },
      {
        "name": "Gini Coefficient from Lorenz Curve",
        "latex": "G = \\frac{\\text{Area } A}{\\text{Area } A + \\text{Area } B}, \\quad 0 \\le G \\le 1",
        "meaning": "Ratio of the area between the line of perfect equality and the Lorenz curve (A) to the total triangular area under the diagonal (A + B)."
      }
    ],
    "concepts": [
      {
        "title": "Five Macroeconomic Objectives",
        "tag": "Mohr §13.1, p. 236",
        "intuition": "Every macroeconomic policy is judged against five core criteria: (1) Economic growth (real GDP growth), (2) Full employment (low unemployment), (3) Price stability (low inflation within SARB 3–6% band), (4) Balance of payments / external stability, and (5) Equitable distribution of income.",
        "example": "When SARB raises the repo rate to curb inflation (Objective 3), higher borrowing costs may dampen short-run output growth (Objective 1) and employment (Objective 2), illustrating policy trade-offs.",
        "fallacy": "Assuming 'price stability' means prices are frozen at zero percent change forever.",
        "firstPrinciples": "Price stability means keeping the rate of change in the general price level low and predictable (in South Africa, inside the 3%–6% inflation target range, anchored near the 4.5% midpoint or 3% point target)."
      },
      {
        "title": "Three Equivalent Methods of Calculating GDP",
        "tag": "Mohr §13.2, pp. 239–241",
        "intuition": "GDP is the total value of all final goods and services produced within the geographic boundaries of a country in a given period. It can be measured via (1) Production (sum of value added S - B at each stage), (2) Income (Wages + Rent + Interest + Profit), or (3) Expenditure (final sales C + I + G + X - Z).",
        "example": "Dr Ray sells beauty inputs to L'Oréal for R45,000 (VA = R45,000); L'Oréal sells to Edgars for R160,000 (VA = R115,000); Edgars sells to final consumers for R240,000 (VA = R80,000). Total Value Added = R45k + R115k + R80k = R240,000 = Final Expenditure = Total Factor Incomes.",
        "fallacy": "Adding the full selling prices of Dr Ray (R45k) + L'Oréal (R160k) + Edgars (R240k) = R445k.",
        "firstPrinciples": "Summing raw gross sales across stages causes double counting of intermediate goods. Always sum Value Added (Sales minus Intermediate Purchases) or count only final consumer expenditure."
      },
      {
        "title": "Market Prices vs. Basic Prices vs. Factor Cost",
        "tag": "Mohr §13.2, pp. 241–243",
        "intuition": "Indirect taxes (like VAT) raise the market price paid by consumers above what factors of production actually earn, whereas subsidies lower the market price below factor cost.",
        "example": "Given GDP at market prices = R150,000, VAT = R14,000, and Subsidies = R25,000: GDP at factor cost = 150,000 - 14,000 + 25,000 = R161,000.",
        "fallacy": "Adding indirect taxes and subtracting subsidies when moving from Market Prices to Factor Cost.",
        "firstPrinciples": "Market prices already include indirect taxes (+T) and exclude subsidies (-S). To recover true Factor Cost, reverse the signs: subtract indirect taxes (-T) and add back subsidies (+S)."
      },
      {
        "title": "Balance of Payments & Lorenz Curve Inequality",
        "tag": "Mohr §13.6–13.7, pp. 253–260",
        "intuition": "The Balance of Payments records all transactions with the rest of the world across the Current Account (merchandise trade, net gold, services, primary & secondary income) and Financial Account (direct, portfolio, and other investment). Inequality is visualised via the Lorenz curve against the 45° diagonal of perfect equality.",
        "example": "South Africa's Gini coefficient is approximately 0.63–0.67, meaning the Lorenz curve bows far away from the 45° line of absolute equality.",
        "fallacy": "Thinking a Gini coefficient closer to 100 (or 1.0) indicates higher income equality.",
        "firstPrinciples": "A Gini coefficient of 0 represents perfect equality (everyone earns the same share), while 1 (or Gini index 100) represents absolute inequality (one person receives 100% of national income)."
      }
    ]
  },
  {
    "id": "ch14",
    "number": 14,
    "title": "The Monetary Sector",
    "shortTitle": "Monetary Sector",
    "pages": "Mohr 6e, pp. 267–294 (PDF pp. 655–713)",
    "accent": "#818cf8",
    "summary": "Functions of money, M1/M2/M3 monetary aggregates in South Africa, financial intermediaries, Keynes's liquidity preference (active vs passive balances), inverse bond price–interest rate nexus, endogenous money creation, and SARB repo policy.",
    "formulas": [
      {
        "name": "Monetary Aggregates (M1, M2, M3)",
        "latex": "M_1 = C + D, \\quad M_2 = M_1 + D_{\\text{short/med}}, \\quad M_3 = M_2 + D_{\\text{long}}",
        "meaning": "M1 is coins/banknotes outside the monetary sector (C) plus demand deposits (D); M2 adds short- and medium-term deposits (quasi-money); M3 adds long-term deposits (>6 months)."
      },
      {
        "name": "Liquidity Preference (Demand for Money)",
        "latex": "L = L_1(Y) + L_2(i), \\quad \\frac{\\partial L_1}{\\partial Y} > 0, \\quad \\frac{\\partial L_2}{\\partial i} < 0",
        "meaning": "Total money demand comprises active balances L1 (transactions + precautionary, positive function of income Y) and passive balances L2 (speculative, inverse function of interest rate i)."
      },
      {
        "name": "Bond Price & Market Interest Rate Yield",
        "latex": "P_{\\text{bond}} \\propto \\frac{\\text{Annual Coupon}}{i} \\implies i \\uparrow \\iff P_{\\text{bond}} \\downarrow",
        "meaning": "There is a strict inverse relationship between the market price of fixed-coupon bonds and the prevailing market interest rate."
      }
    ],
    "concepts": [
      {
        "title": "Functions of Money & What Money Is Not",
        "tag": "Mohr §14.1, pp. 268–270",
        "intuition": "Money is anything generally accepted as payment for goods and services or settlement of debt. Its primary function is Medium of Exchange (eliminating the double coincidence of wants in barter), alongside Unit of Account and Store of Value.",
        "example": "Even though a company says it could expand its factory if it had 'more money', money itself cannot physically produce output—natural resources, labour, physical capital, and entrepreneurship produce output.",
        "fallacy": "Treating money as a factor of production or confusing money (a stock) with income (a flow).",
        "firstPrinciples": "Money is NOT a factor of production, NOT income, and NOT identical to wealth. During high inflation, money performs poorly as a store of value because its purchasing power erodes."
      },
      {
        "title": "South African Monetary Aggregates (M1, M2, M3)",
        "tag": "Mohr §14.3, pp. 271–273",
        "intuition": "SARB classifies money supply by maturity and liquidity: M1 is the narrowest measure (cash held by the public + cheque/transmission demand deposits); M2 adds short-term (<30 days) and medium-term (<6 months) deposits; M3 adds long-term (>6 months) deposits and is the most reliable comprehensive indicator.",
        "example": "If Notes & Coins = R52,000m, Demand Deposits = R425,000m, Short-term = R215,000m, Medium-term = R190,000m, Long-term = R125,000m: M1 = R477,000m, M2 = R882,000m, and M3 = R1,007,000m.",
        "fallacy": "Including vault cash held inside commercial banks or SARB in M1.",
        "firstPrinciples": "Only coins and banknotes in circulation OUTSIDE the monetary sector (in the hands of the non-bank public) count toward C in M1, avoiding double counting with bank deposits."
      },
      {
        "title": "Endogenous Money Supply & SARB Accommodation Policy",
        "tag": "Mohr §14.6–14.8, pp. 279–286",
        "intuition": "In modern South African banking, there is no independent vertical money supply curve. Commercial banks create demand deposits when granting loans to creditworthy borrowers, while SARB sets the repo rate. Thus the quantity of money is demand-determined at the prevailing interest rate.",
        "example": "When SARB lowers the repo rate by 50 basis points, commercial banks lower prime lending rates; the horizontal interest rate line shifts down, increasing the quantity of credit and money demanded along the L curve.",
        "fallacy": "Drawing a vertical exogenous money supply curve when analysing SARB repo rate decisions.",
        "firstPrinciples": "Under SARB's accommodation policy, money supply is endogenous (demand-determined): an increase in income Y shifts L rightward, increasing M at the given repo-linked interest rate."
      }
    ]
  },
  {
    "id": "ch15",
    "number": 15,
    "title": "The Government Sector",
    "shortTitle": "Government & Tax",
    "pages": "Mohr 6e, pp. 295–322 (PDF pp. 714–773)",
    "accent": "#34d399",
    "summary": "Structure of the public sector, market failure (public goods, externalities, asymmetric information), Musgrave's three functions, government failure, nationalisation vs privatisation, fiscal policy & budget balances, tax criteria, and SARS personal income tax calculations.",
    "formulas": [
      {
        "name": "SARS Personal Income Tax Liability",
        "latex": "T_{\\text{net}} = \\max\\!\\Big(0,\\; T_{\\text{base}} + r_{\\text{marginal}} \\times (Y_{\\text{taxable}} - Y_{\\text{threshold}}) - \\text{Rebates}\\Big)",
        "meaning": "Statutory bracket base tax plus marginal rate on income above bracket floor, minus applicable age rebates (Primary for all, Secondary ≥65, Tertiary ≥75)."
      },
      {
        "name": "Effective (Average) vs Marginal Tax Rate",
        "latex": "\\text{ATR} = \\left(\\frac{T_{\\text{net}}}{Y_{\\text{taxable}}}\\right)\\times 100\\%, \\quad \\text{MTR} = \\frac{\\Delta T}{\\Delta Y}",
        "meaning": "In a progressive tax system, the average/effective tax rate (ATR) rises as income increases and remains strictly below the top marginal tax rate (MTR)."
      },
      {
        "name": "Government Budget Balance",
        "latex": "\\text{Budget Balance} = T_{\\text{revenue}} - G_{\\text{expenditure}}",
        "meaning": "A negative balance (G > T) is a budget deficit financed via domestic/foreign borrowing or SARB credit; a positive balance (T > G) is a budget surplus."
      },
      {
        "name": "Negative Production Externality Optimality",
        "latex": "\\text{MSC} = \\text{MPC} + \\text{MEC}, \\quad Q_{\\text{market}} (\\text{MPC}=\\text{MSB}) > Q_{\\text{social}} (\\text{MSC}=\\text{MSB})",
        "meaning": "Unpriced pollution causes private firms to overproduce (Q1 > Q2) at too low a price (P1 < P2), creating a deadweight welfare loss."
      }
    ],
    "concepts": [
      {
        "title": "Composition of the Public Sector & Musgrave's Three Functions",
        "tag": "Mohr §15.1–15.4, pp. 296–306",
        "intuition": "The South African public sector consists of (1) Central government, (2) Provincial/regional government, (3) Local government (municipalities), and (4) Public corporations (SOEs like Eskom and Transnet). Government intervention serves three functions: Allocative (correcting market failure), Distributive (reducing inequality), and Stabilisation (smoothing business cycles).",
        "example": "Progressive income taxation and social grants serve the Distributive function, while Pigouvian carbon taxes and public street lighting serve the Allocative function.",
        "fallacy": "Confusing government transfer payments (pensions, child grants) with government spending G in GDP.",
        "firstPrinciples": "Transfer payments are excluded from G in national accounts because recipients do not provide a current factor service in exchange; they redistribute purchasing power rather than directly purchasing newly produced output."
      },
      {
        "title": "Negative Production Externalities & Deadweight Loss",
        "tag": "Mohr §15.3, pp. 301–303",
        "intuition": "When a chemical or coal plant pollutes Highveld air, Marginal Social Cost (MSC) lies vertically above Marginal Private Cost (MPC). Left to the free market, equilibrium occurs where Demand (MPB=MSB) intersects MPC at (P1, Q1), exceeding the socially efficient output Q2 where MSB intersects MSC.",
        "example": "Imposing a Pigouvian excise tax equal to the Marginal External Cost (MEC) per unit internalises the externality, shifting MPC up to MSC, raising price to P2 and reducing output to Q2.",
        "fallacy": "Arguing that socially efficient policy requires eliminating 100% of industrial production (Q = 0).",
        "firstPrinciples": "Social efficiency occurs where Marginal Social Benefit equals Marginal Social Cost (Q2 > 0), eliminating the deadweight loss triangle between Q2 and Q1."
      },
      {
        "title": "Progressive, Proportional & Regressive Taxes",
        "tag": "Mohr §15.11, pp. 316–319",
        "intuition": "Taxes are classified by how the ratio of tax paid to income (the average/effective tax rate) changes as income rises: Progressive (ATR rises with income, e.g. SARS Personal Income Tax), Proportional (ATR is constant, e.g. flat company tax rate), and Regressive (ATR falls as income rises, e.g. uniform indirect VAT/fuel levies relative to household income).",
        "example": "On a R425,000 income in a bracket 'R75,000 + 40% above R350,000' with a R10,000 primary rebate: Tax before rebate = 75,000 + 0.40(75,000) = R105,000; Net tax = R95,000; Effective rate = 95,000/425,000 = 22.35%, while Marginal rate = 40%.",
        "fallacy": "Multiplying the entire R425,000 income by 40% to get R170,000 tax.",
        "firstPrinciples": "In a bracketed progressive system, the 40% marginal rate applies ONLY to the excess income above the bracket threshold (R425,000 - R350,000 = R75,000), added to the base tax for lower brackets."
      }
    ]
  },
  {
    "id": "ch16",
    "number": 16,
    "title": "The Foreign Sector",
    "shortTitle": "Foreign Sector",
    "pages": "Mohr 6e, pp. 323–346 (PDF pp. 774–822)",
    "accent": "#f59e0b",
    "summary": "Absolute vs comparative (relative) advantage, opportunity cost trade calculations, import tariffs & trade policy instruments, foreign exchange market (ZAR/USD appreciation & depreciation), and the terms of trade.",
    "formulas": [
      {
        "name": "Opportunity Cost & Comparative Advantage",
        "latex": "\\text{Opp. Cost of } 1\\text{ unit of } X = \\frac{\\text{Maximum Output of } Y}{\\text{Maximum Output of } X}",
        "meaning": "A country has a comparative (relative) advantage in producing good X if it sacrifices fewer units of good Y per unit of X than its trading partner."
      },
      {
        "name": "Terms of Trade Index",
        "latex": "\\text{Terms of Trade} = \\left(\\frac{\\text{Export Price Index}}{\\text{Import Price Index}}\\right) \\times 100",
        "meaning": "Measures the volume of imports a country can purchase per unit of exports; an increase represents an improvement in national purchasing power."
      },
      {
        "name": "Direct Exchange Rate Quotation",
        "latex": "E_{\\text{direct}} = \\frac{\\text{Domestic Currency (ZAR)}}{1 \\text{ Unit of Foreign Currency (USD)}}",
        "meaning": "Under direct quotation in SA (e.g. R18.50/$1), a decrease in the Rand price of $1 is a Rand appreciation; an increase is a Rand depreciation."
      }
    ],
    "concepts": [
      {
        "title": "Absolute vs. Comparative (Relative) Advantage",
        "tag": "Mohr §16.2, pp. 325–329",
        "intuition": "Absolute advantage exists when a country can produce more of a good than another country using the same resources. Comparative (relative) advantage exists when a country can produce a good at a lower opportunity cost (sacrificing less of the alternative good).",
        "example": "Greece produces 300 kg olives or 300 kg tobacco (1 olive = 1 tobacco). Spain produces 100 kg olives or 150 kg tobacco (1 tobacco = 100/150 = 0.67 olives; 1 olive = 1.5 tobacco). Greece has absolute advantage in both, but Spain has comparative advantage in tobacco (0.67 < 1) and Greece in olives (1 < 1.5).",
        "fallacy": "Concluding that no mutually beneficial trade can occur when one country has an absolute advantage in both goods.",
        "firstPrinciples": "David Ricardo's law of comparative advantage proves that as long as opportunity costs differ between two countries, each country gains by specialising in the good where its opportunity cost is lowest."
      },
      {
        "title": "Trade Policy Measures to Curb Imports",
        "tag": "Mohr §16.3, pp. 329–333",
        "intuition": "Governments restrict import volumes or protect domestic infant industries and jobs using six main instruments: (1) Import tariffs (specific fixed amount per unit vs ad valorem percentage of value), (2) Import quotas (quantitative limits), (3) Subsidies to domestic producers, (4) Non-tariff barriers (administrative/health standards), (5) Exchange controls, and (6) Exchange rate policy.",
        "example": "Imposing an import tariff raises the domestic price above the world price, increasing domestic production, reducing domestic consumption, and generating tariff revenue, but creating deadweight welfare losses.",
        "fallacy": "Confusing import substitution with export promotion.",
        "firstPrinciples": "Import substitution uses tariffs/quotas to replace previously imported goods with locally manufactured goods, whereas export promotion provides incentives to produce for world markets."
      },
      {
        "title": "Exchange Rate Appreciation & Depreciation",
        "tag": "Mohr §16.4, pp. 334–341",
        "intuition": "In the ZAR/USD foreign exchange market, US dollars are supplied by buyers of SA exports and foreign investors bringing capital into SA, and demanded by SA importers and residents investing abroad. An increase in supply of USD (e.g. boom in SA commodity exports or higher SA interest rates attracting capital inflows) shifts S$ right, causing the Rand to appreciate.",
        "example": "When the Rand appreciates against the US dollar (e.g. from R18/$ to R16/$), South African export prices in foreign currency become more expensive (hurting exporters), while import prices in Rand become cheaper (helping curb domestic cost-push inflation).",
        "fallacy": "Thinking a rise in the number R18/$ to R20/$ represents an appreciation of the Rand.",
        "firstPrinciples": "Because R/$ is a direct quote (Rands per 1 USD), paying MORE Rands for $1 (R18 -> R20) means the Rand has lost value (depreciated) and the US dollar has appreciated."
      }
    ]
  },
  {
    "id": "ch17",
    "number": 17,
    "title": "A Simple Keynesian Model of the Economy",
    "shortTitle": "Simple Keynesian Model",
    "pages": "Mohr 6e, pp. 347–376 (PDF pp. 823–875)",
    "accent": "#ec4899",
    "summary": "Core assumptions of the simple closed no-government Keynesian model, Say's Law vs Keynes's Law, the consumption function and its three characteristics, saving function, autonomous investment, the 45° line, equilibrium income, and the simple multiplier.",
    "formulas": [
      {
        "name": "Consumption & Saving Functions",
        "latex": "C = \\bar{C} + cY, \\quad S = -\\bar{C} + (1-c)Y, \\quad c + s = 1",
        "meaning": "Autonomous consumption C_bar (>0) is independent of income; induced consumption cY depends on the marginal propensity to consume c (0 < c < 1)."
      },
      {
        "name": "Simple Closed-Economy Equilibrium",
        "latex": "Y_0 = \\alpha \\bar{A} = \\left(\\frac{1}{1 - c}\\right)(\\bar{C} + \\bar{I})",
        "meaning": "Equilibrium occurs along the 45° line where Aggregate Spending A = C + I equals Total Production/Income Y."
      },
      {
        "name": "The Simple Multiplier Process",
        "latex": "\\alpha = \\frac{\\Delta Y}{\\Delta \\bar{A}} = \\frac{1}{1 - c} = \\frac{1}{s} > 1",
        "meaning": "An autonomous injection (e.g. ΔI) triggers a geometric chain of induced consumption rounds, expanding equilibrium income by a multiple of the initial spending change."
      }
    ],
    "concepts": [
      {
        "title": "Assumptions of the Simple Keynesian Model & Say's Law",
        "tag": "Mohr §17.2, pp. 351–352",
        "intuition": "The simple model assumes: (1) The economy consists only of households and firms (closed, no government), (2) Prices and wages are fixed, (3) The money market and interest rates are constant, and (4) Aggregate spending (demand) determines aggregate production (income). Unlike Classical Say's Law ('supply creates its own demand', Y → A), Keynes showed that aggregate spending drives output (A → Y) and equilibrium can persist below full employment.",
        "example": "At any output level below equilibrium (to the left of the 45° intersection), Aggregate Spending exceeds Production (A > Y), causing unplanned inventory depletion and prompting firms to expand output.",
        "fallacy": "Believing that Keynesian equilibrium (A = Y) automatically guarantees full employment of all labour.",
        "firstPrinciples": "Macroeconomic equilibrium in the Keynesian model simply means planned spending equals production (A = Y); this equilibrium income Y0 can be far below full-employment output Yf."
      },
      {
        "title": "Three Characteristics of the Consumption Function",
        "tag": "Mohr §17.3, pp. 353–356",
        "intuition": "Keynes's consumption function C = C_bar + cY has three fundamental properties: (1) Consumption is strictly positive even when income is zero (C_bar > 0, financed by dissaving/past wealth), (2) Consumption increases as income increases (positive slope, c > 0), and (3) When income increases, consumption increases by LESS than the increase in income (0 < c < 1, because households save part of every extra Rand).",
        "example": "If C = 100 + 0.8Y, then at Y = 0 households spend R100 (dissaving S = -100). For every R100 rise in Y, consumption rises by R80 (MPC = 0.8) and saving rises by R20 (MPS = 0.2).",
        "fallacy": "Confusing a movement along the consumption curve (caused by a change in income Y) with a vertical shift of the consumption curve (caused by non-income factors like wealth or interest rates).",
        "firstPrinciples": "Income Y is on the horizontal axis, so ΔY causes a movement along C = C_bar + cY (induced consumption), whereas a change in autonomous consumption ΔC_bar shifts the entire intercept vertically."
      },
      {
        "title": "The Multiplier & Unplanned Inventory Adjustment",
        "tag": "Mohr §17.8, pp. 366–371",
        "intuition": "When investment increases by ΔI, total spending jumps vertically by ΔI. Because each Rand spent becomes income for someone else who spends a fraction c of it, total income expands by ΔY = [1 + c + c² + c³ + ...] ΔI = [1/(1-c)] ΔI. Consequently, the horizontal increase in equilibrium income (ΔY) is strictly greater than the vertical increase in investment (ΔI).",
        "example": "With MPC c = 0.75, the multiplier is α = 1/(1 - 0.75) = 4. A R50m increase in autonomous investment raises equilibrium income by 4 × R50m = R200m.",
        "fallacy": "Thinking that higher household thrift (an autonomous rise in the saving rate) always increases total national saving in the simple Keynesian model.",
        "firstPrinciples": "By the Paradox of Thrift (Box 17-6), an autonomous attempt to save more reduces C_bar and lowers the multiplier, contracting equilibrium income Y0 and leaving total saving unchanged at S = I."
      }
    ]
  },
  {
    "id": "ch18",
    "number": 18,
    "title": "The Keynesian Model with a Government and a Foreign Sector",
    "shortTitle": "Open Keynesian Model",
    "pages": "Mohr 6e, pp. 377–405 (PDF pp. 876–930)",
    "accent": "#f43f5e",
    "summary": "Introducing government spending (G) and proportional taxes (T = tY), disposable income, open-economy exports (X) and induced imports (Z = Z_bar + mY), leakages vs injections, open-economy multiplier, and fiscal policy adjustments.",
    "formulas": [
      {
        "name": "Consumption with Proportional Income Tax",
        "latex": "T = tY, \\quad Y_d = (1 - t)Y \\implies C = \\bar{C} + c(1 - t)Y",
        "meaning": "Proportional taxes t reduce disposable income Yd, flattening the slope of the consumption schedule from c to c(1 - t)."
      },
      {
        "name": "Multiplier with Government Sector (Closed)",
        "latex": "\\alpha_G = \\frac{1}{1 - c(1 - t)}",
        "meaning": "Government spending G is autonomous and does NOT change the multiplier, whereas the tax rate t is a leakage that reduces the multiplier."
      },
      {
        "name": "Open-Economy Multiplier (with Induced Imports)",
        "latex": "\\alpha_{\\text{open}} = \\frac{1}{1 - c(1 - t) + m}, \\quad \\bar{A} = \\bar{C} + \\bar{I} + \\bar{G} + \\bar{X} - \\bar{Z}",
        "meaning": "Both proportional taxes (t) and the marginal propensity to import (m) act as leakages from the domestic spending stream, reducing the size of the multiplier."
      },
      {
        "name": "Fiscal Policy Gap to Full Employment",
        "latex": "\\Delta \\bar{G} = \\frac{Y_f - Y_0}{\\alpha}",
        "meaning": "To close a recessionary output gap (Yf - Y0), government spending must increase by the income gap divided by the multiplier."
      }
    ],
    "concepts": [
      {
        "title": "How G and t Affect the Aggregate Spending Curve Differently",
        "tag": "Mohr §18.1, pp. 378–386",
        "intuition": "Government spending G is an autonomous injection: it shifts the Aggregate Spending curve upward in parallel by ΔG without changing its slope or the multiplier. Proportional taxes T = tY are an induced leakage: an increase in the tax rate t rotates (pivots) the Aggregate Spending curve downward, reducing its slope c(1-t) and shrinking the multiplier.",
        "example": "If G rises by R4m while t is simultaneously raised from 0.167 to 0.25 (as in NWU 2023 Dec Paper Q7.3), the intercept A_bar rises from R65m to R69m, but the multiplier falls from 1.60 to 1.48, causing equilibrium income to fall from R104m to R102.22m.",
        "fallacy": "Saying that an increase in government spending G increases the size of the multiplier α.",
        "firstPrinciples": "The multiplier α = 1/[1 - c(1-t) + m] depends ONLY on the marginal propensities (c, m) and the tax rate (t). Autonomous G changes the intercept A_bar, never α."
      },
      {
        "title": "Exports, Induced Imports & the Open-Economy Multiplier",
        "tag": "Mohr §18.2–18.3, pp. 387–393",
        "intuition": "Exports X depend on foreign income and exchange rates, so X is an autonomous injection (+X_bar). Imports Z = Z_bar + mY consist of autonomous imports (Z_bar, subtracted from A_bar) and induced imports (mY, which rise as domestic income rises, reducing the slope of net spending to c(1-t) - m).",
        "example": "Given C_bar = 150, I = 300, G = 400, X = 250, Z = 50 + 0.15Y, c = 0.75, t = 0.25 (NWU 2022 Dec Q7): A_bar = 150 + 300 + 400 + 250 - 50 = 1050; α = 1/[1 - 0.75(0.75) + 0.15] = 1/0.5875 = 1.70; Y0 = 1.70 × 1050 = 1785 (or exact 1787.23).",
        "fallacy": "Adding autonomous imports Z_bar (+50) into autonomous spending A_bar instead of subtracting it (-50).",
        "firstPrinciples": "Imports represent domestic spending leaking to foreign producers (X - Z = X_bar - Z_bar - mY), so autonomous imports Z_bar must always be subtracted from A_bar."
      },
      {
        "title": "Injections vs. Leakages Table (Exam Favourite)",
        "tag": "Mohr Appendix 18-1, p. 402",
        "intuition": "In the open circular flow with government: Investment (I), Government Spending (G), and Exports (X) are INJECTIONS that increase equilibrium income Y0 without changing α. Saving (s), Taxation (t), and Imports (m) are LEAKAGES (withdrawals): an increase in s, t, or m decreases the multiplier α and decreases equilibrium income Y0.",
        "example": "In NWU 2019 Exam Section B Q5.3: Variable G is an Injection, α remains unchanged, and Ye increases; Variable t is a Leakage, α decreases, and Ye decreases.",
        "fallacy": "Claiming that an increase in the marginal propensity to consume (c) reduces the multiplier.",
        "firstPrinciples": "Because households re-spend a larger fraction of income domestically when c rises, α = 1/[1 - c(1-t) + m] increases and equilibrium income Y0 increases."
      }
    ]
  },
  {
    "id": "ch19",
    "number": 19,
    "title": "More on Macroeconomic Theory and Policy",
    "shortTitle": "AD–AS & Policy",
    "pages": "Mohr 6e, pp. 407–436 (PDF pp. 931–982)",
    "accent": "#a855f7",
    "summary": "The Aggregate Demand–Aggregate Supply (AD–AS) model, variable price levels, why AD slopes downward (wealth, interest rate, trade effects), SRAS vs LRAS, monetary transmission mechanism channels, four policy lags, and Monetarist vs Keynesian schools.",
    "formulas": [
      {
        "name": "Aggregate Demand Downward Slope Effects",
        "latex": "P \\uparrow \\implies \\begin{cases} (M/P) \\downarrow \\implies C \\downarrow & \\text{(Wealth/Real Balance)} \\\\ i \\uparrow \\implies I \\downarrow & \\text{(Interest Rate Effect)} \\\\ (X - Z) \\downarrow & \\text{(International Trade)} \\end{cases}",
        "meaning": "A rise in the domestic price level P reduces real money balances, raises interest rates, and erodes export competitiveness, reducing real output demanded."
      },
      {
        "name": "Monetary Transmission Mechanism",
        "latex": "\\Delta i_{\\text{repo}} \\to \\Delta i_{\\text{market}} \\to \\Delta I \\text{ (and } \\Delta C, \\Delta E, \\Delta P_{\\text{assets}}\\text{)} \\to \\Delta \\text{AD} \\to \\Delta P, \\Delta Y",
        "meaning": "Links monetary policy changes in the repo rate to real economic output and inflation via interest rate, exchange rate, asset price, and credit channels."
      },
      {
        "name": "Equation of Exchange (Quantity Theory of Money)",
        "latex": "M \\times V = P \\times Y \\implies \\text{If } V, Y \\text{ constant, } \\%\\Delta P = \\%\\Delta M",
        "meaning": "Monetarists argue that velocity V is stable and output Y is near full capacity, so excessive money growth directly causes inflation."
      }
    ],
    "concepts": [
      {
        "title": "The AD–AS Framework: Relaxing the Fixed-Price Assumption",
        "tag": "Mohr §19.1, pp. 408–417",
        "intuition": "While the Keynesian model of Ch 17–18 assumes fixed prices, the AD–AS model places the general price level (P) on the vertical axis and real output (Y) on the horizontal axis. Short-run AS (SRAS) slopes upward due to sticky nominal wages and rising marginal costs; Long-run AS (LRAS) is vertical at full-employment potential output Yf because in the long run output depends solely on supply-side productive capacity.",
        "example": "An expansionary fiscal boost (↑G) shifts AD rightward along an upward-sloping SRAS, increasing real output Y (reducing unemployment) at the cost of a higher price level P.",
        "fallacy": "Explaining the downward slope of the macroeconomic AD curve using the microeconomic substitution effect between two individual goods.",
        "firstPrinciples": "When the aggregate price level P rises, all domestic goods become more expensive together; AD slopes downward due to the real balance (wealth) effect, the Keynes interest rate effect, and the international trade effect."
      },
      {
        "title": "Adverse Supply Shocks & Stagflation in AD–AS",
        "tag": "Mohr §19.1, pp. 415–417",
        "intuition": "An increase in unit production costs (e.g. an oil price spike, Eskom electricity tariff surge, or wage hikes exceeding productivity growth) shifts the SRAS curve upward/leftward. The economy experiences STAGFLATION: a simultaneous rise in the price level (↑P, cost-push inflation) and contraction in real output and employment (↓Y).",
        "example": "If policymakers respond to a leftward SRAS shift solely by expanding AD (cutting interest rates), they restore output Y0 only by worsening inflation even further; if they contract AD, they tame inflation only by deepening the recession.",
        "fallacy": "Thinking demand-management policies (monetary or fiscal policy alone) can easily cure stagflation.",
        "firstPrinciples": "Because monetary and fiscal policies shift AD rather than AS, they cannot simultaneously reverse both higher prices and lower output after an adverse supply shock."
      },
      {
        "title": "Four Policy Lags & Monetarist vs. Keynesian Views",
        "tag": "Mohr §19.3–19.4, pp. 423–432",
        "intuition": "Stabilisation policy faces four chronological lags: (1) Recognition lag (time to collect data confirming a shock, same for both policies), (2) Decision lag (very long for fiscal policy due to annual parliamentary budget process; very short for SARB MPC), (3) Implementation lag (short for monetary policy), and (4) Impact/outside lag (long for monetary policy as investment responds slowly; shorter for direct fiscal spending).",
        "example": "Monetarists (Milton Friedman) view the market economy as inherently stable and warn that long, variable policy lags make activist Keynesian fine-tuning destabilising.",
        "fallacy": "Claiming that monetary policy has a longer decision lag than fiscal policy.",
        "firstPrinciples": "Fiscal policy has a long decision/inside lag (parliamentary approval) but a relatively short impact lag, whereas monetary policy has a very short decision lag (SARB MPC meets every 2 months) but a long impact/outside lag (12–24 months)."
      }
    ]
  },
  {
    "id": "ch20",
    "number": 20,
    "title": "Inflation",
    "shortTitle": "Inflation & Phillips",
    "pages": "Mohr 6e, pp. 437–466 (PDF pp. 983–1034)",
    "accent": "#eab308",
    "summary": "Definition and measurement of inflation (CPI, PPI, Implicit GDP Deflator), distributional/economic/social effects, bracket creep, demand-pull vs cost-push inflation, structuralist & conflict approaches, SARB inflation targeting, and the Phillips curve.",
    "formulas": [
      {
        "name": "CPI Inflation Rate",
        "latex": "\\pi_t = \\left(\\frac{\\text{CPI}_t - \\text{CPI}_{t-1}}{\\text{CPI}_{t-1}}\\right) \\times 100\\%",
        "meaning": "Percentage change in the cost of a fixed representative consumer basket (measured month-on-same-month of previous year or annual average on annual average)."
      },
      {
        "name": "GDP Deflator Inflation Rate",
        "latex": "\\text{Deflator}_t = \\frac{\\text{Nom GDP}_t}{\\text{Real GDP}_t}\\times 100, \\quad \\pi_t^{\\text{Defl}} = \\left(\\frac{\\text{Deflator}_t - \\text{Deflator}_{t-1}}{\\text{Deflator}_{t-1}}\\right)\\times 100\\%",
        "meaning": "Measures economy-wide inflation across all domestically produced final goods and services using a variable current-production basket."
      },
      {
        "name": "Real Purchasing Power & Real Interest Rate",
        "latex": "r_{\\text{real}} \\approx i_{\\text{nominal}} - \\pi",
        "meaning": "When inflation π exceeds the nominal interest rate i, the real interest rate is negative, redistributing real wealth from creditors (savers) to debtors (borrowers)."
      }
    ],
    "concepts": [
      {
        "title": "CPI vs. PPI vs. Implicit GDP Deflator (Exam Table)",
        "tag": "Mohr §20.2, pp. 438–442",
        "intuition": "Three price indicators differ in scope and basket structure: (1) CPI measures the cost of living for urban households using a fixed consumer basket that INCLUDES imported consumer goods and VAT; (2) PPI measures prices at the level of first significant commercial transaction (production/factory gate), EXCLUDES services and VAT, and includes capital & intermediate goods; (3) The GDP Deflator covers ALL domestically produced final goods/services (including exports & capital goods) but EXCLUDES all imports.",
        "example": "In NWU 2024 Dec Paper Section B Q3.2: CPI measures cost of living vs PPI measures cost of production; CPI includes services & VAT vs PPI excludes services & VAT; CPI basket covers consumer goods vs PPI includes capital and intermediate goods.",
        "fallacy": "Calling a one-off jump in the price of bread or petrol 'inflation'.",
        "firstPrinciples": "Inflation is a CONTINUOUS and CONSIDERABLE rise in prices IN GENERAL—not a once-off price level shock or a relative price change in a single commodity."
      },
      {
        "title": "Distributional Effects of Inflation & Bracket Creep",
        "tag": "Mohr §20.3, pp. 442–446",
        "intuition": "Inflation redistributes income and wealth arbitrarily: (1) Debtors (borrowers) gain at the expense of creditors (lenders) because loans are repaid in Rand with lower real purchasing power; (2) Young borrowers with mortgages gain while elderly pensioners on fixed nominal annuities lose; (3) The government always gains via 'bracket creep' (fiscal drag) as nominal wage rises push taxpayers into higher progressive SARS tax brackets without any increase in real income, and because the state is a major net debtor.",
        "example": "If a worker's salary rises by 7% to match 7% inflation, their real pre-tax income is unchanged, yet under an unindexed progressive tax table their effective tax rate rises, reducing their real disposable income.",
        "fallacy": "Assuming that everyone loses equally during inflation.",
        "firstPrinciples": "Inflation redistributes real wealth from lenders/fixed-income holders to borrowers and the government (via bracket creep and erosion of real public debt)."
      },
      {
        "title": "Demand-Pull vs. Cost-Push Inflation & the Phillips Curve",
        "tag": "Mohr §20.4–20.6, pp. 446–463",
        "intuition": "Demand-pull inflation occurs when aggregate demand (C + I + G + X) outstrips productive capacity, shifting AD rightward (↑P and ↑Y). Cost-push inflation is triggered by 5 sources: (1) Wage increases exceeding productivity, (2) Higher prices of imported capital/intermediate goods (e.g. oil or weak Rand), (3) Increased profit margins, (4) Decreased labour productivity, and (5) Natural disasters, shifting AS leftward (↑P and ↓Y). The short-run Phillips curve illustrates an inverse trade-off between inflation (π) and unemployment (U); stagflation shifts the Phillips curve rightward.",
        "example": "To combat demand-pull inflation, SARB applies contractionary monetary policy (raising the repo rate) and Treasury applies contractionary fiscal policy (cutting G or raising taxes T), shifting AD leftward.",
        "fallacy": "Using contractionary monetary/fiscal policy aggressively against pure cost-push inflation without side effects.",
        "firstPrinciples": "Restricting AD when inflation is cost-push curbs price rises only by worsening the contraction in real output Y and increasing unemployment further."
      }
    ]
  },
  {
    "id": "ch21",
    "number": 21,
    "title": "Unemployment, Poverty and Inequality",
    "shortTitle": "Unemployment & Poverty",
    "pages": "Mohr 6e, pp. 467–484 (PDF pp. 1035–1063)",
    "accent": "#06b6d4",
    "summary": "The unemployment pool inflows & outflows, strict (narrow) vs expanded (broad) definitions, labour force participation & absorption rates, four types of unemployment (frictional, seasonal, cyclical, structural), demand vs supply-side policies, poverty lines, and SA's Triple Challenge.",
    "formulas": [
      {
        "name": "Strict vs Expanded Labour Force & Unemployment Rate",
        "latex": "\\text{LF}_{\\text{strict}} = E + U_{\\text{active}}, \\quad u_{\\text{strict}} = \\frac{U_{\\text{active}}}{E + U_{\\text{active}}}\\times 100\\%",
        "meaning": "The strict definition requires active job search in the past 4 weeks; the expanded definition adds discouraged work-seekers to both the numerator and denominator."
      },
      {
        "name": "Expanded (Broad) Unemployment Rate",
        "latex": "u_{\\text{broad}} = \\left(\\frac{U_{\\text{active}} + U_{\\text{discouraged}}}{E + U_{\\text{active}} + U_{\\text{discouraged}}}\\right) \\times 100\\%",
        "meaning": "Includes discouraged work-seekers who want work and are available to start, even if they stopped actively searching."
      },
      {
        "name": "Labour Force Participation & Absorption Rates",
        "latex": "\\text{LFPR} = \\frac{\\text{Labour Force}}{\\text{Working-Age Pop (15–64)}}\\times 100\\%, \\quad \\text{AR} = \\frac{\\text{Employed}}{\\text{Working-Age Pop}}\\times 100\\%",
        "meaning": "Note the denominator trap: Unemployment rate divides by the Labour Force, whereas LFPR and Absorption Rate divide by the total Working-Age Population (aged 15–64)."
      }
    ],
    "concepts": [
      {
        "title": "The Unemployment Pool: Four Inflows & Two Outflows",
        "tag": "Mohr §21.1, pp. 468–470",
        "intuition": "The level of unemployment is a stock that rises when inflows exceed outflows. People ENTER the unemployment pool for 4 reasons: (1) New entrants looking for a first job (school leavers/graduates), (2) Re-entrants returning to the labour force, (3) Job losers laid off or retrenched, and (4) Voluntary quitters searching for a better job. People LEAVE the pool by: (1) Finding employment, or (2) Withdrawing from the labour force (retiring or becoming discouraged under the strict definition).",
        "example": "Even if an economy creates 100,000 new jobs in a quarter, the unemployment rate will increase if 250,000 new school-leavers enter the labour force simultaneously.",
        "fallacy": "Assuming a rising unemployment rate proves that zero new jobs are being created or that GDP is shrinking.",
        "firstPrinciples": "The unemployment rate rises whenever the labour force grows faster than employment creation (jobless growth)—it measures the proportion of the economically active population unable to find work."
      },
      {
        "title": "Four Types of Unemployment & Policy Prescriptions",
        "tag": "Mohr §21.1, pp. 472–477",
        "intuition": "Unemployment is classified into four types: (1) Frictional (short-term search between jobs or after graduation), (2) Seasonal (predictable off-season layoffs in agriculture/tourism, e.g. Elgin fruit pickers), (3) Cyclical / Demand-deficient (caused by recessions/downswings in aggregate demand), and (4) Structural (long-term mismatch between worker skills/location and job requirements, automation replacing travel agents, or declining industries like Rustenburg platinum mines).",
        "example": "Cyclical unemployment is treated with demand-side expansionary monetary/fiscal policy (↓repo rate, ↑G, ↓T), whereas structural unemployment requires supply-side policies (vocational retraining, education reform, SMME deregulation, labour-intensive industrial policy).",
        "fallacy": "Classifying a worker permanently replaced by online algorithms or automation as 'cyclically unemployed'.",
        "firstPrinciples": "Technological displacement and skills mismatches persist even during economic booms; they represent structural (or technological) unemployment, which is South Africa's dominant challenge."
      },
      {
        "title": "Strict vs. Expanded Unemployment & Calculation Trap",
        "tag": "Mohr §21.1, pp. 469–471",
        "intuition": "Stats SA's strict (official/narrow) definition excludes discouraged work-seekers because they did not take active steps to look for work in the four weeks prior to the survey. The expanded (broad) definition includes discouraged work-seekers.",
        "example": "In Elaria (NWU 2024 Dec Q4): Employed = 6,750,000, Active Unemployed = 2,220,000, Discouraged = 1,030,000 (plus students, homemakers, etc.). Broad Unemployed = 2,220,000 + 1,030,000 = 3,250,000; Broad Labour Force = 6,750,000 + 3,250,000 = 10,000,000; Broad Unemployment Rate = (3.25m / 10.0m) × 100 = 32.50%.",
        "fallacy": "Including students, homemakers, pensioners, children (<15), or the medically disabled in the labour force denominator.",
        "firstPrinciples": "Students, homemakers, retirees, and children under 15 are Not Economically Active (outside the labour force) under both strict and expanded definitions."
      }
    ]
  },
  {
    "id": "ch22",
    "number": 22,
    "title": "Economic Growth and Business Cycles",
    "shortTitle": "Growth & Cycles",
    "pages": "Mohr 6e, pp. 485–512 (PDF pp. 1064–1118)",
    "accent": "#10b981",
    "summary": "Definition and measurement of real economic growth, problems with GDP as a welfare measure, the four phases of the business cycle, Classical vs Keynesian vs Structuralist cycle theories, SARB leading/coincident/lagging indicators, supply vs demand growth drivers, and capital widening vs deepening.",
    "formulas": [
      {
        "name": "Annual Economic Growth Rate",
        "latex": "g_t = \\left(\\frac{\\text{Real GDP}_t - \\text{Real GDP}_{t-1}}{\\text{Real GDP}_{t-1}}\\right) \\times 100\\%",
        "meaning": "Economic growth MUST be calculated using Real GDP (constant prices) to eliminate price inflation; per capita real GDP adjusts further for population growth."
      },
      {
        "name": "Rule of 70 (Doubling Time)",
        "latex": "\\text{Years to Double Real GDP} \\approx \\frac{70}{g\\text{ (\\%)}}",
        "meaning": "Approximates how many years it takes for real output or living standards to double at a steady annual growth rate g%."
      },
      {
        "name": "Aggregate Production Function & Capital Intensity",
        "latex": "Y = A \\cdot f(K, L), \\quad \\text{Capital Deepening: } \\uparrow\\!\\left(\\frac{K}{L}\\right), \\quad \\text{Capital Widening: } \\Delta\\!\\left(\\frac{K}{L}\\right) = 0",
        "meaning": "Capital widening equips new workers at a constant capital-to-labour ratio (K/L); capital deepening raises capital per worker, boosting labour productivity."
      }
    ],
    "concepts": [
      {
        "title": "Five Problems with GDP as a Measure of Welfare",
        "tag": "Mohr §22.1, pp. 486–488",
        "intuition": "Real GDP is flawed as a measure of societal well-being because: (1) Non-market production (e.g. unpaid household work, subsistence farming) is difficult or impossible to value, (2) Unrecorded/informal sector activity and illegal trade are omitted, (3) GDP data are frequently revised after initial estimates, (4) Aggregate or even per capita GDP ignores the distribution of income (inequality), and (5) GDP makes no distinction between economic 'goods' (hospitals, schools) and 'bads' (pollution, crime expenditure, weapons)—negative externalities are not subtracted.",
        "example": "If Country A has twice the per capita GDP of Country B (NWU 2019 & Ch 22 Q4), residents of A are NOT necessarily twice as well off because per capita GDP is a simple mean that hides extreme inequality and environmental costs.",
        "fallacy": "Thinking 'GDP pertains only to production inside the country' is a welfare flaw rather than its literal geographic definition.",
        "firstPrinciples": "GDP is by definition a geographic production total; its true welfare limitations are unrecorded informal activity, non-market valuation, data revisions, inequality blindness, and counting 'bads' alongside 'goods'."
      },
      {
        "title": "The Business Cycle: Phases, Theories & SARB Indicators",
        "tag": "Mohr §22.2, pp. 488–494",
        "intuition": "A complete business cycle has four phases: Trough (lowest turning point) → Expansion / Upswing (rising real GDP) → Peak / Boom (upper turning point where almost all resources are in use) → Contraction / Downswing / Recession (declining real GDP). Classical economists view the economy as inherently stable (cycles caused by exogenous shocks like weather or government meddling); Keynesian economists view cycles as endogenous (inherent to modern market economies, requiring counter-cyclical policy). SARB tracks Leading indicators (turn before the economy, e.g. share prices, building plans passed, real M1), Coincident indicators (move with the economy, e.g. manufacturing volume), and Lagging indicators (turn after, e.g. prime rate, unemployment duration).",
        "example": "On a business cycle diagram where Point A is a Trough, Point B is a Peak, and Point C is the next Trough (NWU 2018 & 2024 Section B): A → B is the Expansion/Upswing phase, and B → C is the Contraction/Downswing phase.",
        "fallacy": "Confusing a slowdown in the positive rate of growth with a recession (contraction).",
        "firstPrinciples": "During a contraction (downswing), the level of real economic activity declines between a Peak and a Trough."
      },
      {
        "title": "Supply vs. Demand Sources of Economic Growth",
        "tag": "Mohr §22.3, pp. 494–500",
        "intuition": "Sustained economic growth requires both expanding productive capacity (Supply factors: natural resources/minerals, labour quantity & human capital skills, capital widening & deepening, and entrepreneurship/technology shifting the PPC and LRAS outward) and expanding aggregate expenditure (Demand factors: domestic demand C+I+G, export promotion X, and import substitution replacing Z).",
        "example": "South Africa's mineral wealth shows that natural resources are neither necessary nor sufficient for sustained growth: commodity price volatility and exchange rate swings can create a 'resource curse' unless revenues are invested in human and physical capital.",
        "fallacy": "Believing that higher government spending that drives up local interest rates (crowding out private investment) always guarantees higher long-run growth.",
        "firstPrinciples": "When supply-side capacity is constrained (e.g. skills shortages or electricity bottlenecks) or higher G crowds out private investment I via higher interest rates, demand expansion fuels inflation rather than long-run real growth."
      }
    ]
  }
],
  questions: [
  {
    "id": "q_ch13_01",
    "chapter": "ch13",
    "source": "NWU Ch 13 Study Unit 1 Q1 (Dr Ray / L'Oréal / Edgars)",
    "citation": "Mohr 6e, §13.2, pp. 239–241",
    "difficulty": "Medium",
    "stem": "Dr Ray sells natural beauty inputs to L'Oréal for R45 000 (paying R15 000 wages, R10 000 rent, R1 500 interest). L'Oréal processes and sells the products to Edgars for R160 000 (paying R30 000 wages, R14 000 rent, R3 000 interest). Edgars sells the finished products to final consumers for R240 000 (paying R12 500 wages, R4 000 interest). What is the value added by L'Oréal and the total GDP contribution?",
    "derivation": "\\text{VA}_{\\text{Dr Ray}} = 45\\,000 - 0 = \\text{R}45\\,000; \\quad \\text{VA}_{\\text{L'Oréal}} = 160\\,000 - 45\\,000 = \\text{R}115\\,000; \\quad \\text{VA}_{\\text{Edgars}} = 240\\,000 - 160\\,000 = \\text{R}80\\,000. \\\\ \\text{Total GDP} = 45\\,000 + 115\\,000 + 80\\,000 = \\text{R}240\\,000.",
    "options": [
      {
        "text": "L'Oréal adds R115 000 in value, yielding a total final GDP of R240 000.",
        "isCorrect": true,
        "refutation": "Correct! L'Oréal's value added is sales (R160 000) minus intermediate inputs from Dr Ray (R45 000) = R115 000, and total GDP equals final sales of R240 000."
      },
      {
        "text": "L'Oréal adds R160 000 in value, yielding a total final GDP of R445 000.",
        "isCorrect": false,
        "refutation": "This sums gross sales across all three firms (45 000 + 160 000 + 240 000 = R445 000), which double counts intermediate inputs instead of subtracting R45 000."
      },
      {
        "text": "L'Oréal adds R68 000 in value, yielding a total final GDP of R150 000.",
        "isCorrect": false,
        "refutation": "R68 000 is only L'Oréal's residual profit (115 000 - 30 000 - 14 000 - 3 000) rather than its full value added including wages, rent, and interest."
      },
      {
        "text": "L'Oréal adds R115 000 in value, yielding a total final GDP of R400 000.",
        "isCorrect": false,
        "refutation": "While L'Oréal's value added of R115 000 is right, R400 000 erroneously adds L'Oréal's R160 000 intermediate sales to Edgars' R240 000 final retail sales."
      }
    ]
  },
  {
    "id": "q_ch13_02",
    "chapter": "ch13",
    "source": "NWU Ch 13 Exercise 2 (Valuation at Factor Cost & NDP)",
    "citation": "Mohr 6e, §13.2–13.3, pp. 241–245",
    "difficulty": "Medium",
    "stem": "Given the following national accounting data (in R millions): GDP at market prices = 150 000; VAT (taxes on products) = 14 000; Interest on government debt = 8 500; Depreciation (consumption of fixed capital) = 5 500; Subsidies on products = 25 000; Wages of migrant workers = 15 000. Calculate Net Domestic Product (NDP) at market prices and GDP at factor cost.",
    "derivation": "\\text{NDP}_{mp} = \\text{GDP}_{mp} - D = 150\\,000 - 5\\,500 = 144\\,500. \\\\ \\text{GDP}_{fc} = \\text{GDP}_{mp} - \\text{VAT} + \\text{Subsidies} = 150\\,000 - 14\\,000 + 25\\,000 = 161\\,000.",
    "options": [
      {
        "text": "NDP at market prices is R144 500 million and GDP at factor cost is R161 000 million.",
        "isCorrect": true,
        "refutation": "Correct! Subtracting depreciation (5 500) gives NDPmp = 144 500, and subtracting VAT (14 000) while adding subsidies (25 000) gives GDPfc = 161 000."
      },
      {
        "text": "NDP at market prices is R144 500 million and GDP at factor cost is R139 000 million.",
        "isCorrect": false,
        "refutation": "R139 000 million results from inverting the tax and subsidy signs (150 000 + 14 000 - 25 000); moving to factor cost requires subtracting VAT and adding subsidies."
      },
      {
        "text": "NDP at market prices is R155 500 million and GDP at factor cost is R161 000 million.",
        "isCorrect": false,
        "refutation": "R155 500 million adds depreciation (150 000 + 5 500) instead of subtracting consumption of fixed capital when converting from Gross to Net product."
      },
      {
        "text": "NDP at market prices is R135 000 million and GDP at factor cost is R152 500 million.",
        "isCorrect": false,
        "refutation": "This mistakenly subtracts migrant worker wages (15 000) and government debt interest (8 500), neither of which enters the GDPmp-to-NDPmp or factor cost identity."
      }
    ]
  },
  {
    "id": "q_ch13_03",
    "chapter": "ch13",
    "source": "NWU Past Paper Dec 2023 Section C Q1 (GDE & National Income)",
    "citation": "Mohr 6e, §13.3, pp. 244–247",
    "difficulty": "Hard",
    "stem": "Use the following South African data (in Rand): GDP at factor cost = R293 250; VAT = R16 000; Subsidies = R43 300; Exports = R20 000; Imports = R10 000; Capital Goods = R40 000; Depreciation = 8% of Capital Goods; Salaries earned by SA cricket players in the UK = R35 200; Profits earned by UK Airlines trading in SA = R125 600. Calculate Gross Domestic Expenditure (GDE) at market prices and National Income (NI).",
    "derivation": "\\text{GDP}_{mp} = \\text{GDP}_{fc} + \\text{VAT} - \\text{Subsidies} = 293\\,250 + 16\\,000 - 43\\,300 = \\text{R}265\\,950. \\\\ \\text{GDE}_{mp} = \\text{GDP}_{mp} - X + Z = 265\\,950 - 20\\,000 + 10\\,000 = \\text{R}255\\,950. \\\\ D = 0.08 \\times 40\\,000 = \\text{R}3\\,200; \\quad \\text{NI} = \\text{GDP}_{fc} - D + \\text{FI} - \\text{FP} = 293\\,250 - 3\\,200 + 35\\,200 - 125\\,600 = \\text{R}199\\,650.",
    "options": [
      {
        "text": "GDE at market prices equals R255 950 and National Income equals R199 650.",
        "isCorrect": true,
        "refutation": "Correct! GDPmp = 265 950 so GDEmp = 265 950 - 20 000 + 10 000 = R255 950, and NI = 293 250 - 3 200 + 35 200 - 125 600 = R199 650."
      },
      {
        "text": "GDE at market prices equals R275 950 and National Income equals R199 650.",
        "isCorrect": false,
        "refutation": "R275 950 adds net exports (+20 000 - 10 000) to GDPmp instead of subtracting exports and adding imports to isolate domestic expenditure GDE."
      },
      {
        "text": "GDE at market prices equals R255 950 and National Income equals R380 450.",
        "isCorrect": false,
        "refutation": "R380 450 inverts primary factor flows by adding profits paid to foreign UK Airlines (+125 600) and subtracting SA cricket salaries earned abroad (-35 200)."
      },
      {
        "text": "GDE at market prices equals R310 550 and National Income equals R172 350.",
        "isCorrect": false,
        "refutation": "R310 550 reverses VAT and subsidies when computing GDPmp (293 250 - 16 000 + 43 300 = 320 550), which then distorts both GDEmp and National Income."
      }
    ]
  },
  {
    "id": "q_ch13_04",
    "chapter": "ch13",
    "source": "NWU Past Paper Nov 2019 & Dec 2022 Section C Q1",
    "citation": "Mohr 6e, §13.3, pp. 244–247",
    "difficulty": "Hard",
    "stem": "Given the following quarterly national accounting statistics: National Income (NI at factor cost) = 870 760; VAT = 120 000; Subsidies = 9 000; Government transfer payments = 15 500; Depreciation = 11 100; Wages paid to foreign migrant labourers working domestically = 120 800; Earnings of domestic citizens working abroad = 234 000; Exports = 553 200; Imports = 489 300. Calculate GDP at factor cost and GDE at market prices.",
    "derivation": "\\text{GDP}_{fc} = \\text{NI} + D - \\text{FI}_{\\text{from ROW}} + \\text{FP}_{\\text{to ROW}} = 870\\,760 + 11\\,100 - 234\\,000 + 120\\,800 = 768\\,660. \\\\ \\text{GDP}_{mp} = 768\\,660 + 120\\,000 - 9\\,000 = 879\\,660. \\\\ \\text{GDE}_{mp} = \\text{GDP}_{mp} - X + Z = 879\\,660 - 553\\,200 + 489\\,300 = 815\\,760.",
    "options": [
      {
        "text": "GDP at factor cost is 768 660 and GDE at market prices is 815 760.",
        "isCorrect": true,
        "refutation": "Correct! Working backwards from NI (870 760) adds depreciation (+11 100) and foreign factor payments (+120 800) and subtracts factor receipts (-234 000) to get 768 660."
      },
      {
        "text": "GDP at factor cost is 994 060 and GDE at market prices is 1 041 160.",
        "isCorrect": false,
        "refutation": "994 060 fails to reverse signs when moving backwards from NI to GDP, adding factor income from abroad (+234 000) instead of subtracting it."
      },
      {
        "text": "GDP at factor cost is 768 660 and GDE at market prices is 943 560.",
        "isCorrect": false,
        "refutation": "943 560 adds net exports (+553 200 - 489 300) to GDPmp (879 660) instead of subtracting exports and adding imports to find GDEmp."
      },
      {
        "text": "GDP at factor cost is 784 160 and GDE at market prices is 831 260.",
        "isCorrect": false,
        "refutation": "784 160 erroneously includes government transfer payments (15 500), which are pure income redistributions and never part of GDP or GDE."
      }
    ]
  },
  {
    "id": "q_ch13_05",
    "chapter": "ch13",
    "source": "NWU Past Paper Dec 2022 Section B Q4 & Ch 13 Theory",
    "citation": "Mohr 6e, §13.2, pp. 239–241",
    "difficulty": "Easy",
    "stem": "Suppose the prescribed minimum wage in South Africa increases by 8%. How much would total GDP calculated using the income method differ from total GDP estimated using the production (value-added) method, assuming no measurement errors?",
    "derivation": "\\text{GDP}_{\\text{Production}} \\equiv \\sum \\text{Value Added} \\equiv \\text{GDP}_{\\text{Income}} \\equiv W + R + i + \\Pi \\implies \\text{Difference} = 0.",
    "options": [
      {
        "text": "There is zero difference because the production and income methods measure the exact same GDP.",
        "isCorrect": true,
        "refutation": "Correct! By national accounting identity, total value added equals total factor income (Wages + Rent + Interest + Profit); a higher wage share simply alters the split between wages and operating surplus."
      },
      {
        "text": "GDP via the income method will be exactly 8% higher than GDP via the production method.",
        "isCorrect": false,
        "refutation": "A rise in minimum wages redistributes value added between labour wages and firm profits (or raises output prices in both methods equally), so the two methods cannot diverge."
      },
      {
        "text": "GDP via the production method will exceed the income method due to intermediate input costs.",
        "isCorrect": false,
        "refutation": "The production method subtracts intermediate inputs at every stage to isolate net value added, which is identically equal to total primary factor incomes."
      },
      {
        "text": "GDP via the income method will be lower because higher wages reduce corporate tax revenues.",
        "isCorrect": false,
        "refutation": "Both methods measure the identical domestic production total; changes in factor shares between wages and profits leave the accounting identity intact."
      }
    ]
  },
  {
    "id": "q_ch14_01",
    "chapter": "ch14",
    "source": "NWU Tutorial Ch 14 Monetary Sector Calculations Q1–Q3",
    "citation": "Mohr 6e, §14.3, pp. 271–273",
    "difficulty": "Easy",
    "stem": "The following monetary statistics are available for South Africa in a given year (in R millions): Notes and coins held by the public = 52 000; Demand deposits = 425 000; Short-term deposits = 215 000; Medium-term deposits = 190 000; Long-term deposits = 125 000. Calculate the M1, M2, and M3 money supply aggregates.",
    "derivation": "M_1 = C + D = 52\\,000 + 425\\,000 = \\text{R}477\\,000\\text{m}. \\\\ M_2 = M_1 + 215\\,000 + 190\\,000 = \\text{R}882\\,000\\text{m}. \\\\ M_3 = M_2 + 125\\,000 = \\text{R}1\\,007\\,000\\text{m}.",
    "options": [
      {
        "text": "M1 is R477 000 million, M2 is R882 000 million, and M3 is R1 007 000 million.",
        "isCorrect": true,
        "refutation": "Correct! M1 = 52 000 + 425 000 = 477 000; M2 adds short-term (215 000) and medium-term (190 000) deposits to get 882 000; M3 adds long-term deposits (125 000) to get 1 007 000."
      },
      {
        "text": "M1 is R425 000 million, M2 is R692 000 million, and M3 is R1 007 000 million.",
        "isCorrect": false,
        "refutation": "R425 000 million omits notes and coins in circulation (52 000), and R692 000 million omits medium-term deposits (190 000) from M2."
      },
      {
        "text": "M1 is R477 000 million, M2 is R692 000 million, and M3 is R882 000 million.",
        "isCorrect": false,
        "refutation": "R692 000 million includes only short-term deposits in M2 (omitting medium-term deposits of 190 000), which shifts M2 into the M3 slot."
      },
      {
        "text": "M1 is R692 000 million, M2 is R882 000 million, and M3 is R955 000 million.",
        "isCorrect": false,
        "refutation": "M1 must only include cash and immediate demand deposits (477 000), not short-term deposits (215 000), and M3 must include cash (1 007 000)."
      }
    ]
  },
  {
    "id": "q_ch14_02",
    "chapter": "ch14",
    "source": "NWU Tutorial Ch 14 Monetary Sector (Missing Component)",
    "citation": "Mohr 6e, §14.3, pp. 271–273",
    "difficulty": "Medium",
    "stem": "Given the following monetary aggregates for a particular year (in R millions): Notes and coins held by the public = 72 500; Demand deposits = 438 000; Short-term deposits = 265 000; Long-term deposits = 142 500; Total M2 money supply = 1 015 500. Calculate M1 and the missing value of medium-term deposits.",
    "derivation": "M_1 = 72\\,500 + 438\\,000 = \\text{R}510\\,500\\text{m}. \\\\ M_2 = M_1 + D_{\\text{short}} + D_{\\text{medium}} \\implies 1\\,015\\,500 = 510\\,500 + 265\\,000 + D_{\\text{medium}} \\implies D_{\\text{medium}} = \\text{R}240\\,000\\text{m}.",
    "options": [
      {
        "text": "M1 equals R510 500 million and medium-term deposits equal R240 000 million.",
        "isCorrect": true,
        "refutation": "Correct! M1 = 72 500 + 438 000 = 510 500, and subtracting M1 (510 500) and short-term deposits (265 000) from M2 (1 015 500) yields R240 000 million."
      },
      {
        "text": "M1 equals R510 500 million and medium-term deposits equal R362 500 million.",
        "isCorrect": false,
        "refutation": "R362 500 million forgets to subtract notes and coins (72 500) and mistakenly subtracts long-term deposits (142 500) which belong to M3, not M2."
      },
      {
        "text": "M1 equals R438 000 million and medium-term deposits equal R312 500 million.",
        "isCorrect": false,
        "refutation": "This omits notes and coins (72 500) from M1, which then inflates the calculated residual for medium-term deposits by R72 500 million."
      },
      {
        "text": "M1 equals R510 500 million and medium-term deposits equal R97 500 million.",
        "isCorrect": false,
        "refutation": "R97 500 million erroneously subtracts long-term deposits (142 500) from M2, even though long-term deposits are only added when moving from M2 to M3."
      }
    ]
  },
  {
    "id": "q_ch14_03",
    "chapter": "ch14",
    "source": "NWU Past Paper Nov 2019 B Q2.2 & Dec 2023 B Q5.1",
    "citation": "Mohr 6e, §14.5–14.8, pp. 275–286",
    "difficulty": "Medium",
    "stem": "According to the endogenous money supply approach used by the South African Reserve Bank (SARB), there is no independent vertical money supply curve. What happens to the interest rate and the equilibrium quantity of money when the SARB lowers the repo rate by 50 basis points?",
    "derivation": "i_{\\text{repo}} \\downarrow \\implies i_{\\text{market}} \\downarrow \\text{ (downward shift of horizontal rate line)} \\implies \\text{movement downward along } L \\implies M \\uparrow.",
    "options": [
      {
        "text": "Market interest rates fall and the quantity of money increases along the money demand curve.",
        "isCorrect": true,
        "refutation": "Correct! A lower repo rate shifts the horizontal interest rate line downward, inducing borrowers to demand more bank credit and expanding the endogenous quantity of money."
      },
      {
        "text": "The vertical money supply curve shifts right while the demand for money curve shifts left.",
        "isCorrect": false,
        "refutation": "In the endogenous model there is no independent vertical money supply curve, and a change in the interest rate causes a movement along the money demand curve, not a shift."
      },
      {
        "text": "Market interest rates rise and the quantity of speculative passive money balances contracts.",
        "isCorrect": false,
        "refutation": "Lowering the repo rate reduces the cost of accommodation credit to commercial banks, which lowers (not raises) market interest rates and increases quantity of money demanded."
      },
      {
        "text": "The liquidity preference curve shifts upward while the equilibrium money stock stays fixed.",
        "isCorrect": false,
        "refutation": "The position of the money demand curve is determined by real income Y; a repo cut lowers the interest rate and increases the demand-determined money stock."
      }
    ]
  },
  {
    "id": "q_ch14_04",
    "chapter": "ch14",
    "source": "NWU Past Paper Nov 2018 B Q5.3 & Dec 2024 B Q6.2 (Ubuntu Production)",
    "citation": "Mohr 6e, §14.1 & §3.3, pp. 270, 44",
    "difficulty": "Easy",
    "stem": "Ubuntu Production (Pty) Ltd, a South African manufacturing firm, states that it could produce more goods and expand its plant if it had more money available. Does this imply that money is a factor of production in macroeconomics?",
    "derivation": "\\text{Factors of Production} = \\{\\text{Natural Resources (Land)},\\; \\text{Labour},\\; \\text{Capital},\\; \\text{Entrepreneurship}\\}. \\quad \\text{Money} \\notin \\text{FOP}.",
    "options": [
      {
        "text": "No, money is merely a medium of exchange used to acquire real physical capital and labour.",
        "isCorrect": true,
        "refutation": "Correct! Goods and services are produced by real factors of production (land, labour, physical capital, entrepreneurship); money is a financial medium of exchange, not a factor of production."
      },
      {
        "text": "Yes, money is the most important factor of production because it finances all investment.",
        "isCorrect": false,
        "refutation": "Banknotes and deposits cannot physically manufacture goods; confusing financial capital (money) with physical capital (machinery and buildings) is a classic fallacy."
      },
      {
        "text": "Yes, money is classified alongside physical machinery as part of the capital factor stock.",
        "isCorrect": false,
        "refutation": "In economics, 'capital' as a factor of production refers strictly to tangible man-made means of production (tools, machines, factories), never to money."
      },
      {
        "text": "No, money is classified as a factor of production only when held by the central bank.",
        "isCorrect": false,
        "refutation": "Money is never a factor of production regardless of whether it is held by households, firms, commercial banks, or the South African Reserve Bank."
      }
    ]
  },
  {
    "id": "q_ch15_01",
    "chapter": "ch15",
    "source": "NWU Tutorial Ch 15 Government Sector Section 1 (R425 000 Tax)",
    "citation": "Mohr 6e, §15.11, pp. 316–319",
    "difficulty": "Medium",
    "stem": "In a hypothetical SARS tax table, the bracket for taxable income R350 001 – R500 000 specifies: 'R75 000 + 40% of the amount above R350 000', and the primary tax rebate is R10 000. For an individual under 65 earning R425 000 annually, calculate the net tax payable after the rebate, the effective tax rate, and the marginal tax rate.",
    "derivation": "T_{\\text{before}} = 75\\,000 + 0.40(425\\,000 - 350\\,000) = 75\\,000 + 30\\,000 = \\text{R}105\\,000. \\\\ T_{\\text{after}} = 105\\,000 - 10\\,000 = \\text{R}95\\,000. \\quad \\text{ATR} = \\frac{95\\,000}{425\\,000}\\times 100 = 22.35\\%, \\quad \\text{MTR} = 40\\%.",
    "options": [
      {
        "text": "Net tax payable is R95 000, the effective tax rate is 22.35%, and the marginal rate is 40%.",
        "isCorrect": true,
        "refutation": "Correct! Tax before rebate is 75 000 + 0.40(75 000) = R105 000; subtracting the R10 000 rebate gives R95 000 (22.35% of R425 000), while the bracket marginal rate is 40%."
      },
      {
        "text": "Net tax payable is R105 000, the effective tax rate is 24.71%, and the marginal rate is 40%.",
        "isCorrect": false,
        "refutation": "R105 000 and 24.71% represent the gross tax liability before deducting the mandatory R10 000 primary tax rebate available to all individual taxpayers."
      },
      {
        "text": "Net tax payable is R160 000, the effective tax rate is 37.65%, and the marginal rate is 40%.",
        "isCorrect": false,
        "refutation": "R160 000 erroneously applies the 40% marginal rate to the entire R425 000 income (170 000 - 10 000) instead of only the R75 000 excess above R350 000."
      },
      {
        "text": "Net tax payable is R95 000, the effective tax rate is 40.00%, and the marginal rate is 22.35%.",
        "isCorrect": false,
        "refutation": "This swaps the effective (average) tax rate (22.35% of total income) with the marginal tax rate (40% on each additional Rand above R350 000)."
      }
    ]
  },
  {
    "id": "q_ch15_02",
    "chapter": "ch15",
    "source": "NWU Past Paper Dec 2022 Section C Q6 (Thabiso Lebotse R32 000/pm)",
    "citation": "Mohr 6e, §15.11, pp. 316–319",
    "difficulty": "Medium",
    "stem": "Thabiso Lebotse (aged 24) starts his first job as a Junior Lecturer earning R32 000 per month (R384 000 per year). The 2021/2022 SARS tax bracket for R321 601 – R445 100 is 'R67 144 + 31% of the amount over R321 600', with a Primary Rebate of R14 958 (and Secondary Rebate of R8 199 for ages 65+). Calculate his total annual tax payable after rebate and his effective tax rate.",
    "derivation": "Y = 32\\,000 \\times 12 = \\text{R}384\\,000. \\quad T_{\\text{gross}} = 67\\,144 + 0.31(384\\,000 - 321\\,600) = 67\\,144 + 19\\,344 = \\text{R}86\\,488. \\\\ T_{\\text{net}} = 86\\,488 - 14\\,958 = \\text{R}71\\,530. \\quad \\text{ATR} = \\frac{71\\,530}{384\\,000}\\times 100 = 18.63\\%.",
    "options": [
      {
        "text": "Total net tax payable is R71 530 and his effective tax rate is 18.63% (22.52% pre-rebate).",
        "isCorrect": true,
        "refutation": "Correct! Annual income is R384 000; gross tax is 67 144 + 0.31(62 400) = R86 488; subtracting the R14 958 primary rebate yields R71 530 (18.63% effective rate)."
      },
      {
        "text": "Total net tax payable is R63 331 and his effective tax rate is 16.49% after all rebates.",
        "isCorrect": false,
        "refutation": "R63 331 mistakenly subtracts the R8 199 secondary rebate as well, which only applies to taxpayers aged 65 years and older."
      },
      {
        "text": "Total net tax payable is R104 082 and his effective tax rate is 27.10% after the rebate.",
        "isCorrect": false,
        "refutation": "R104 082 applies the 31% marginal rate to the entire R384 000 salary (119 040 - 14 958) instead of only the R62 400 exceeding R321 600."
      },
      {
        "text": "Total net tax payable is R52 186 and his effective tax rate is 13.59% on annual salary.",
        "isCorrect": false,
        "refutation": "R52 186 omits the 31% marginal tax on the R62 400 excess above R321 600 (67 144 - 14 958 = 52 186)."
      }
    ]
  },
  {
    "id": "q_ch15_03",
    "chapter": "ch15",
    "source": "NWU Past Paper Dec 2024 Section C Q6 (R825 000 Salary)",
    "citation": "Mohr 6e, §15.11, pp. 316–319",
    "difficulty": "Medium",
    "stem": "According to the 2024/2025 SARS tax table, the bracket for R673 001 – R857 900 is 'R179 147 + 39% of taxable income above R673 000', with a Primary Rebate of R17 235 (for all individuals under 65). If you earn R825 000 per annum, what is your tax payable (before and after the primary rebate) and your marginal tax rate?",
    "derivation": "T_{\\text{before}} = 179\\,147 + 0.39(825\\,000 - 673\\,000) = 179\\,147 + 59\\,280 = \\text{R}238\\,427. \\\\ T_{\\text{after}} = 238\\,427 - 17\\,235 = \\text{R}221\\,192. \\quad \\text{MTR} = 39\\%.",
    "options": [
      {
        "text": "Tax is R221 192 after rebate (R238 427 before rebate) with a 39% marginal tax rate.",
        "isCorrect": true,
        "refutation": "Correct! Excess above R673 000 is R152 000; 39% of R152 000 is R59 280; adding R179 147 gives R238 427 gross tax, or R221 192 after the R17 235 primary rebate."
      },
      {
        "text": "Tax is R221 192 after rebate (R238 427 before rebate) with a 26.81% marginal tax rate.",
        "isCorrect": false,
        "refutation": "26.81% (221 192 / 825 000) is the effective (average) tax rate, whereas the marginal tax rate on the next Rand earned in this bracket is 39%."
      },
      {
        "text": "Tax is R304 515 after rebate (R321 750 before rebate) with a 39% marginal tax rate.",
        "isCorrect": false,
        "refutation": "R321 750 multiplies the entire R825 000 income by 39% instead of applying 39% only to the R152 000 above the R673 000 bracket threshold."
      },
      {
        "text": "Tax is R255 662 after rebate (R238 427 before rebate) with a 41% marginal tax rate.",
        "isCorrect": false,
        "refutation": "R255 662 adds the primary rebate instead of subtracting it, and 41% applies only to incomes above R857 900."
      }
    ]
  },
  {
    "id": "q_ch15_04",
    "chapter": "ch15",
    "source": "NWU Tutorial Ch 15 Section 4 & Dec 2022 Section B Q7 (Negative Externality)",
    "citation": "Mohr 6e, §15.3, pp. 301–303",
    "difficulty": "Medium",
    "stem": "A chemical plant in the Highveld generates air pollution (hydrogen sulphide) as an unpriced by-product of production. In the market diagram showing Demand (DD = MSB), Marginal Private Cost (MPC), and Marginal Social Cost (MSC), why is the free-market equilibrium output (Q1) larger than the socially efficient output (Q2)?",
    "derivation": "\\text{Free Market: } \\text{MPC}(Q_1) = \\text{MSB}(Q_1). \\quad \\text{Social Optimum: } \\text{MSC}(Q_2) = \\text{MPC}(Q_2) + \\text{MEC} = \\text{MSB}(Q_2) \\implies Q_1 > Q_2,\\; P_1 < P_2.",
    "options": [
      {
        "text": "Firms ignore external pollution costs, so private marginal cost is below social cost (MPC < MSC).",
        "isCorrect": true,
        "refutation": "Correct! Because the polluting firm does not pay for the external damage inflicted on society, its MPC curve lies below MSC, leading to overproduction (Q1 > Q2) and deadweight loss."
      },
      {
        "text": "Firms include external pollution costs, pushing private marginal cost above social cost (MPC > MSC).",
        "isCorrect": false,
        "refutation": "With a negative production externality, Marginal Social Cost equals Marginal Private Cost plus Marginal External Cost (MSC = MPC + MEC), so MSC lies vertically above MPC."
      },
      {
        "text": "Consumers overvalue the chemical product, shifting the social benefit curve above demand (MSB > MPB).",
        "isCorrect": false,
        "refutation": "A shift in social benefit relative to private demand describes a consumption externality, whereas industrial pollution is a negative production externality affecting cost curves."
      },
      {
        "text": "Government subsidies force chemical firms to price output above the socially optimal price (P1 > P2).",
        "isCorrect": false,
        "refutation": "In an unregulated market with negative externalities, the market price P1 is too low (P1 < P2) because pollution costs are omitted from market pricing."
      }
    ]
  },
  {
    "id": "q_ch16_01",
    "chapter": "ch16",
    "source": "NWU Past Paper Nov 2019 Section C Q2 (Spain & Greece Trade)",
    "citation": "Mohr 6e, §16.2, pp. 325–329",
    "difficulty": "Medium",
    "stem": "Spain and Greece produce olives and tobacco. With a given unit of resources, Spain can produce either 100 kg of olives or 150 kg of tobacco, while Greece can produce either 300 kg of olives or 300 kg of tobacco. What are the opportunity costs, and which country has the comparative advantage in each product?",
    "derivation": "\\text{Spain: } 1\\text{ Tobacco} = \\frac{100}{150} = 0.67\\text{ Olives}, \\; 1\\text{ Olive} = \\frac{150}{100} = 1.5\\text{ Tobacco}. \\\\ \\text{Greece: } 1\\text{ Tobacco} = \\frac{300}{300} = 1\\text{ Olive}, \\; 1\\text{ Olive} = 1\\text{ Tobacco}.",
    "options": [
      {
        "text": "Spain has comparative advantage in tobacco (0.67 < 1 olive) and Greece in olives (1 < 1.5 tobacco).",
        "isCorrect": true,
        "refutation": "Correct! Spain sacrifices only 0.67 kg of olives per kg of tobacco (vs 1 kg in Greece), while Greece sacrifices only 1 kg of tobacco per kg of olives (vs 1.5 kg in Spain)."
      },
      {
        "text": "Greece has comparative advantage in both goods because 300 kg exceeds 100 kg and 150 kg.",
        "isCorrect": false,
        "refutation": "Producing more of both goods (300 vs 100 and 300 vs 150) gives Greece an absolute advantage in both, but one country can never hold a comparative advantage in both goods."
      },
      {
        "text": "Spain has comparative advantage in olives (1.5 > 1 tobacco) and Greece in tobacco (1 > 0.67 olive).",
        "isCorrect": false,
        "refutation": "Comparative advantage belongs to the producer with the LOWER opportunity cost, not the higher opportunity cost."
      },
      {
        "text": "Neither country holds a comparative advantage because Greece's opportunity cost ratio is 1:1.",
        "isCorrect": false,
        "refutation": "Mutually beneficial trade requires only that opportunity cost ratios differ between the two countries (Spain's 2:3 vs Greece's 1:1)."
      }
    ]
  },
  {
    "id": "q_ch16_02",
    "chapter": "ch16",
    "source": "NWU Past Paper Dec 2023 Section C Q6 (USA & Australia Trade & Exchange Rate)",
    "citation": "Mohr 6e, §16.2 & §16.4, pp. 326–336",
    "difficulty": "Medium",
    "stem": "Australia can produce 150 surfboards or 900 bottles of sunscreen per month, whereas the USA can produce 200 surfboards or 1 600 bottles of sunscreen per month. Furthermore, 1 bottle of sunscreen costs US$1.50 and the exchange rate is 1 US$ = 1.70 AUS$. Which country has a relative advantage in surfboards, and what will Australia pay in AUS$ for 50 bottles of sunscreen?",
    "derivation": "\\text{Opp. Cost of 1 Surfboard: Australia} = \\frac{900}{150} = 6\\text{ bottles}; \\quad \\text{USA} = \\frac{1600}{200} = 8\\text{ bottles} \\implies \\text{Australia (6 < 8)}. \\\\ \\text{Cost} = 50 \\times \\$1.50 \\times 1.70 = \\text{AUS\\$}127.50.",
    "options": [
      {
        "text": "Australia has relative advantage in surfboards (costing 6 vs 8 bottles); 50 bottles cost AUS$127.50.",
        "isCorrect": true,
        "refutation": "Correct! Australia gives up 6 bottles of sunscreen per surfboard compared to 8 in the USA, and 50 × US$1.50 × 1.70 = AUS$127.50."
      },
      {
        "text": "The USA has relative advantage in surfboards (producing 200 vs 150); 50 bottles cost AUS$127.50.",
        "isCorrect": false,
        "refutation": "200 vs 150 surfboards is the USA's absolute advantage; relative (comparative) advantage is determined by lower opportunity cost (Australia's 6 bottles < USA's 8 bottles)."
      },
      {
        "text": "Australia has relative advantage in surfboards (costing 6 vs 8 bottles); 50 bottles cost AUS$44.12.",
        "isCorrect": false,
        "refutation": "AUS$44.12 divides US$75 by 1.70 instead of multiplying by 1.70 AUS$/US$."
      },
      {
        "text": "The USA has relative advantage in surfboards (costing 0.125 vs 0.17); 50 bottles cost AUS$75.00.",
        "isCorrect": false,
        "refutation": "0.125 vs 0.17 surfboards is the opportunity cost of 1 bottle of sunscreen (giving USA comparative advantage in sunscreen, not surfboards), and $75 is in US$ not AUS$."
      }
    ]
  },
  {
    "id": "q_ch16_03",
    "chapter": "ch16",
    "source": "NWU Past Paper Nov 2018 B Q3.1.3 & Dec 2023 B Q2.1",
    "citation": "Mohr 6e, §16.4, pp. 336–340",
    "difficulty": "Easy",
    "stem": "Suppose the South African Rand appreciates against the US dollar (for example, moving from R19.00/$1 to R17.00/$1) due to strong capital inflows and rising commodity demand. How will this appreciation impact South Africa's export prices (in foreign currency) and import prices (in Rand), ceteris paribus?",
    "derivation": "\\text{Rand Appreciation } (E \\downarrow) \\implies P_{\\text{exports in USD}} \\uparrow \\implies X \\downarrow; \\quad P_{\\text{imports in ZAR}} \\downarrow \\implies Z \\uparrow.",
    "options": [
      {
        "text": "South African export prices in foreign currency increase, while import prices in Rand decrease.",
        "isCorrect": true,
        "refutation": "Correct! A stronger Rand makes South African goods more expensive for foreign buyers in USD, while foreign goods become cheaper for South Africans in ZAR."
      },
      {
        "text": "South African export prices in foreign currency decrease, while import prices in Rand increase.",
        "isCorrect": false,
        "refutation": "Cheaper exports and pricier imports occur when the Rand depreciates (weakens), not when it appreciates."
      },
      {
        "text": "Both South African export prices in foreign currency and import prices in Rand will increase.",
        "isCorrect": false,
        "refutation": "A currency appreciation always moves foreign-currency export prices and domestic-currency import prices in opposite directions."
      },
      {
        "text": "Both South African export prices in foreign currency and import prices in Rand will decrease.",
        "isCorrect": false,
        "refutation": "While import prices in Rand fall during a Rand appreciation, foreign buyers must pay more USD per Rand of South African exports."
      }
    ]
  },
  {
    "id": "q_ch17_01",
    "chapter": "ch17",
    "source": "NWU Past Paper Nov 2018 Section B Q3.2 (Keynesian Model Principles)",
    "citation": "Mohr 6e, §17.1–17.6, pp. 348–361",
    "difficulty": "Easy",
    "stem": "Which one of the following statements accurately describes the simple Keynesian model of income determination and its relationship to the 45-degree line?",
    "derivation": "\\text{Keynes's Law: } A \\to Y. \\quad \\text{Above } 45^\\circ \\text{ line } (Y < Y_0): A > Y \\implies \\Delta \\text{Inventories} < 0 \\implies Y \\uparrow.",
    "options": [
      {
        "text": "Any point on the aggregate spending line above the 45° line means spending exceeds production (A > Y).",
        "isCorrect": true,
        "refutation": "Correct! Above the 45° line (to the left of equilibrium), aggregate spending A exceeds output Y, causing unplanned inventory depletion and an expansion in output."
      },
      {
        "text": "The Keynesian model demonstrates that the economy automatically moves to full-employment output.",
        "isCorrect": false,
        "refutation": "Automatic full employment is a Classical belief; Keynes proved that macroeconomic equilibrium (A = Y) can persist with high involuntary unemployment."
      },
      {
        "text": "The Keynesian model assumes that changes in aggregate production cause changes in aggregate demand.",
        "isCorrect": false,
        "refutation": "'Supply creates its own demand' (Y → A) is Say's Law; the Keynesian model reverses causality so that aggregate spending drives production (A → Y)."
      },
      {
        "text": "Any point on the aggregate spending line above the 45° line leads to unplanned inventory accumulation.",
        "isCorrect": false,
        "refutation": "When spending exceeds production (A > Y, above the 45° line), firms sell more than they produce, resulting in unplanned inventory depletion (falls in stocks)."
      }
    ]
  },
  {
    "id": "q_ch17_02",
    "chapter": "ch17",
    "source": "NWU Past Paper Dec 2022 Section B Q9 & Ch 17 Multiplier",
    "citation": "Mohr 6e, §17.8, pp. 366–371",
    "difficulty": "Medium",
    "stem": "In a simple closed Keynesian economy without a government, autonomous consumption is R120 million, the marginal propensity to consume (c) is 0.75, and autonomous investment is R80 million. If autonomous investment increases by R40 million to R120 million, how do the equilibrium level of income and the relative sizes of ΔY and ΔI compare?",
    "derivation": "\\alpha = \\frac{1}{1 - 0.75} = 4. \\quad Y_0 = 4(120 + 80) = \\text{R}800\\text{m}. \\quad \\Delta Y = 4 \\times 40 = \\text{R}160\\text{m} \\implies Y_1 = \\text{R}960\\text{m}, \\; \\Delta Y > \\Delta I.",
    "options": [
      {
        "text": "Equilibrium income rises by R160m (from R800m to R960m), so ΔY is four times larger than ΔI.",
        "isCorrect": true,
        "refutation": "Correct! With c = 0.75, the multiplier is α = 1/(1 - 0.75) = 4, so a R40m rise in investment triggers induced consumption rounds that raise equilibrium income by R160m."
      },
      {
        "text": "Equilibrium income rises by R40m (from R800m to R840m), so ΔY is exactly equal to ΔI.",
        "isCorrect": false,
        "refutation": "R40m is only the initial autonomous injection (Round 1); it ignores the multiplier chain of induced consumption spending (α = 4)."
      },
      {
        "text": "Equilibrium income rises by R53.33m (from R266.67m to R320m), using a multiplier of 1.33.",
        "isCorrect": false,
        "refutation": "A multiplier of 1.33 comes from calculating 1/c = 1/0.75 instead of 1/(1 - c) = 1/0.25 = 4."
      },
      {
        "text": "Equilibrium income rises by R30m (from R800m to R830m), so ΔY is smaller than ΔI.",
        "isCorrect": false,
        "refutation": "Since 0 < c < 1, the simple multiplier α = 1/(1 - c) is always strictly greater than 1, meaning ΔY is always larger than ΔI."
      }
    ]
  },
  {
    "id": "q_ch18_01",
    "chapter": "ch18",
    "source": "NWU Past Paper Nov 2019 C Q1 & Dec 2024 C Q8 (Portofino Keynesian Model)",
    "citation": "Mohr 6e, §18.2–18.3, pp. 387–393",
    "difficulty": "Hard",
    "stem": "Suppose the following equations describe the open economy of Portofino, Italy: Autonomous consumption = 100, MPC (c) = 0.8, proportional tax rate (t) = 0.2 (so T = 0.2Y), Investment (I) = 100, Government spending (G) = 250, Exports (X) = 300, and Imports Z = 20 + 0.1Y. Calculate the open-economy multiplier (rounded to 2 decimal places) and the equilibrium level of income.",
    "derivation": "\\bar{A} = 100 + 100 + 250 + 300 - 20 = 730. \\\\ \\alpha = \\frac{1}{1 - c(1-t) + m} = \\frac{1}{1 - 0.8(1 - 0.2) + 0.1} = \\frac{1}{1 - 0.64 + 0.1} = \\frac{1}{0.46} \\approx 2.17. \\\\ Y_0 = 2.17 \\times 730 = 1\\,584.10 \\text{ (or } 730 / 0.46 = 1\\,586.96\\text{)}.",
    "options": [
      {
        "text": "The multiplier is 2.17 and equilibrium income is 1 584.10 (or 1 586.96 unrounded) with Ā = 730.",
        "isCorrect": true,
        "refutation": "Correct! Autonomous spending is 100 + 100 + 250 + 300 - 20 = 730, and α = 1/[1 - 0.8(0.8) + 0.1] = 1/0.46 = 2.17, giving Y0 = 1 584.10 (or 1 586.96 exact)."
      },
      {
        "text": "The multiplier is 2.17 and equilibrium income is 1 670.90 because autonomous spending Ā is 770.",
        "isCorrect": false,
        "refutation": "Ā = 770 erroneously adds autonomous imports (+20) instead of subtracting them (-20) from autonomous aggregate expenditure."
      },
      {
        "text": "The multiplier is 2.78 and equilibrium income is 2 027.78 by adding m = 0.1 to c(1 - t) = 0.64.",
        "isCorrect": false,
        "refutation": "Induced imports (m = 0.1) are a leakage that must be added in the denominator [1 - c(1-t) + m = 0.46], not subtracted [1 - 0.64 - 0.1 = 0.26]."
      },
      {
        "text": "The multiplier is 5.00 and equilibrium income is 3 650.00 by ignoring taxes and imports.",
        "isCorrect": false,
        "refutation": "A multiplier of 5.00 = 1/(1 - 0.8) ignores both the proportional tax leakage (t = 0.2) and the marginal propensity to import (m = 0.1)."
      }
    ]
  },
  {
    "id": "q_ch18_02",
    "chapter": "ch18",
    "source": "NWU Past Paper Dec 2022 Section C Q7 (Open Keynesian Model)",
    "citation": "Mohr 6e, §18.2–18.4, pp. 387–396",
    "difficulty": "Hard",
    "stem": "Consider an open economy with government where: Government expenditure (G) = R400, Exports (X) = R250, Imports (Z) = 50 + 0.15Y, Autonomous consumption (C̄) = R150, Investment (I) = R300, Full-employment output (Yf) = R1 900, MPC (c) = 0.75, and Tax rate (t) = 0.25. Calculate the multiplier (rounded to 2 decimals), equilibrium income, and the new equilibrium income if investment falls to R250.",
    "derivation": "\\bar{A} = 150 + 300 + 400 + 250 - 50 = 1\\,050. \\\\ \\alpha = \\frac{1}{1 - 0.75(1 - 0.25) + 0.15} = \\frac{1}{1 - 0.5625 + 0.15} = \\frac{1}{0.5875} \\approx 1.70. \\\\ Y_0 = 1.70 \\times 1\\,050 = 1\\,785 \\text{ (exact } 1\\,787.23\\text{)}. \\quad \\Delta I = -50 \\implies \\Delta Y = -85 \\implies Y_{\\text{new}} = 1\\,700.",
    "options": [
      {
        "text": "Multiplier is 1.70, equilibrium income is R1 785 (R1 787.23 exact), falling to R1 700 when I = 250.",
        "isCorrect": true,
        "refutation": "Correct! α = 1/0.5875 = 1.70 and Ā = 1 050, so Y0 = 1.70 × 1 050 = R1 785 (or R1 787.23 exact); a R50 drop in I reduces Y by 50 × 1.70 = R85 to R1 700."
      },
      {
        "text": "Multiplier is 1.70, equilibrium income is R1 870 (R1 872.34 exact), falling to R1 785 when I = 250.",
        "isCorrect": false,
        "refutation": "R1 870 results from adding autonomous imports (+50) to get Ā = 1 150 instead of subtracting autonomous imports (-50) to get Ā = 1 050."
      },
      {
        "text": "Multiplier is 2.50, equilibrium income is R2 625, falling to R2 500 when investment drops to 250.",
        "isCorrect": false,
        "refutation": "A multiplier of 2.50 = 1/(1 - 0.75 + 0.15) forgets to multiply the MPC (0.75) by (1 - t) = 0.75 to account for proportional income taxation."
      },
      {
        "text": "Multiplier is 1.70, equilibrium income is R1 900 at full employment, falling to R1 815 when I = 250.",
        "isCorrect": false,
        "refutation": "R1 900 is the given full-employment benchmark Yf, not the actual equilibrium income Y0 determined by aggregate spending."
      }
    ]
  },
  {
    "id": "q_ch18_03",
    "chapter": "ch18",
    "source": "NWU Past Paper Dec 2023 Section C Q7 (Basic Income Grant Fiscal Shift)",
    "citation": "Mohr 6e, §18.4, pp. 393–398",
    "difficulty": "Hard",
    "stem": "In the South African Keynesian model (in R millions): C̄ = 30, Ī = 10, Ḡ = 20, X̄ = 10, Z̄ = 5, MPC (c) = 0.6, average tax rate (t) = 0.167, and MPM (m) = 0.125. Initial equilibrium income is R104m (with α = 1.60 and Ā = 65). Suppose the government introduces a basic income grant that raises G by R4m (to R24m) and finances it by raising the tax rate t to 0.25. What are the new equilibrium income and tax revenue?",
    "derivation": "\\bar{A}_{\\text{new}} = 30 + 10 + 24 + 10 - 5 = 69. \\quad c(1 - t_{\\text{new}}) = 0.6(0.75) = 0.45. \\\\ Y_{\\text{new}} = \\frac{69}{1 - 0.45 + 0.125} = \\frac{69}{0.675} = \\text{R}102.22\\text{m}. \\quad T_{\\text{new}} = 0.25 \\times 102.22 = \\text{R}25.56\\text{m}.",
    "options": [
      {
        "text": "New equilibrium income is R102.22 million and government tax revenue is R25.56 million.",
        "isCorrect": true,
        "refutation": "Correct! With Ā_new = 69 and the new denominator 1 - 0.6(0.75) + 0.125 = 0.675, Y_new = 69 / 0.675 = R102.22m and T = 0.25 × 102.22 = R25.56m."
      },
      {
        "text": "New equilibrium income is R110.40 million and government tax revenue is R27.60 million.",
        "isCorrect": false,
        "refutation": "R110.40 million multiplies Ā_new = 69 by the old multiplier (1.60), overlooking that raising the tax rate to 0.25 shrinks the multiplier to 1/0.675 = 1.48."
      },
      {
        "text": "New equilibrium income is R117.00 million and government tax revenue is R29.25 million.",
        "isCorrect": false,
        "refutation": "R117.00 million fails to subtract induced imports (m = 0.125) and autonomous imports (Z̄ = 5) from the open-economy expenditure equation."
      },
      {
        "text": "New equilibrium income is R96.30 million and government tax revenue is R24.07 million.",
        "isCorrect": false,
        "refutation": "R96.30 million keeps autonomous spending at R65m, forgetting to add the R4m increase in government expenditure (G rising from 20 to 24)."
      }
    ]
  },
  {
    "id": "q_ch19_01",
    "chapter": "ch19",
    "source": "NWU Past Paper Dec 2022 B Q1 & Ch 19 AD–AS / Policy Lags",
    "citation": "Mohr 6e, §19.1–19.4, pp. 408–431",
    "difficulty": "Medium",
    "stem": "How do the views of Monetarist economists differ from Keynesian economists regarding economic fluctuations, and how do the decision lag and impact lag compare between fiscal policy and monetary policy?",
    "derivation": "\\text{Keynesian: Endogenous Instability } \\implies \\text{Active Policy}. \\quad \\text{Decision Lag: Fiscal} > \\text{Monetary}; \\quad \\text{Impact Lag: Monetary} > \\text{Fiscal}.",
    "options": [
      {
        "text": "Keynesians see instability as endogenous; fiscal policy has a longer decision lag but shorter impact lag.",
        "isCorrect": true,
        "refutation": "Correct! Keynesians view fluctuations as inherent to market economies, and parliamentary budgets give fiscal policy a long decision lag while repo changes have a long impact lag."
      },
      {
        "text": "Monetarists see instability as endogenous; monetary policy has a longer decision lag than fiscal policy.",
        "isCorrect": false,
        "refutation": "Monetarists view the private economy as inherently stable (disturbed mainly by erratic money growth), and the SARB MPC has a much shorter decision lag than Parliament."
      },
      {
        "text": "Keynesians oppose counter-cyclical policy because recognition lags are longer for monetary policy.",
        "isCorrect": false,
        "refutation": "Keynesians advocate active counter-cyclical policy during downswings, and the recognition lag (data collection time) is identical for both monetary and fiscal authorities."
      },
      {
        "text": "Monetarists favour discretionary fiscal fine-tuning because impact lags are zero for interest rates.",
        "isCorrect": false,
        "refutation": "Monetarists oppose discretionary fine-tuning precisely because monetary policy has a long and variable impact lag (12–24 months) on real output."
      }
    ]
  },
  {
    "id": "q_ch19_02",
    "chapter": "ch19",
    "source": "Mohr 6e Ch 19 Review & AD–AS Transmission",
    "citation": "Mohr 6e, §19.1–19.2, pp. 409–421",
    "difficulty": "Medium",
    "stem": "In the Aggregate Demand–Aggregate Supply (AD–AS) model, which three macroeconomic effects explain why the Aggregate Demand (AD) curve slopes downward from left to right as the general price level (P) falls?",
    "derivation": "P \\downarrow \\implies (1)\\; (M/P) \\uparrow \\implies C \\uparrow \\text{ (Wealth)}; \\; (2)\\; i \\downarrow \\implies I \\uparrow \\text{ (Interest Rate)}; \\; (3)\\; (X-Z) \\uparrow \\text{ (Trade)}.",
    "options": [
      {
        "text": "The wealth (real balance) effect, the interest rate effect, and the international trade effect.",
        "isCorrect": true,
        "refutation": "Correct! A lower price level raises the real value of money balances (boosting C), lowers interest rates (boosting I), and improves net export competitiveness (boosting X - Z)."
      },
      {
        "text": "The microeconomic substitution effect, the diminishing marginal utility effect, and the Giffen effect.",
        "isCorrect": false,
        "refutation": "Those three effects explain why an individual microeconomic demand curve slopes downward when one good's relative price changes, not the aggregate price level P."
      },
      {
        "text": "The sticky nominal wage effect, the productivity effect, and the imported capital cost effect.",
        "isCorrect": false,
        "refutation": "Sticky nominal wages, productivity, and input costs determine the slope and position of the Short-Run Aggregate Supply (SRAS) curve, not the AD curve."
      },
      {
        "text": "The fiscal bracket-creep effect, the statutory reserve requirement effect, and the quota effect.",
        "isCorrect": false,
        "refutation": "Mohr §19.1 establishes that the downward slope of AD rests specifically on the wealth (real balance), interest rate (Keynes), and international trade (foreign purchases) effects."
      }
    ]
  },
  {
    "id": "q_ch20_01",
    "chapter": "ch20",
    "source": "NWU Past Paper Dec 2022 C Q5, Dec 2023 C Q4 & Ch 20 Tutorial Q3",
    "citation": "Mohr 6e, §20.2, pp. 438–442",
    "difficulty": "Medium",
    "stem": "The macroeconomic table below shows Nominal GDP and Real GDP (in R millions) for two consecutive years: in Year 1 (2020/2022), Nominal GDP = 5 130 703 and Real GDP = 4 028 475; in Year 2 (2021/2023), Nominal GDP = 5 643 773 and Real GDP = 4 391 038. Calculate the implicit GDP deflator for both years and the resulting annual inflation rate (rounded to 2 decimal places).",
    "derivation": "\\text{Deflator}_1 = \\frac{5\\,130\\,703}{4\\,028\\,475}\\times 100 = 127.36; \\quad \\text{Deflator}_2 = \\frac{5\\,643\\,773}{4\\,391\\,038}\\times 100 = 128.53. \\\\ \\pi = \\frac{128.53 - 127.36}{127.36}\\times 100 = 0.92\\%.",
    "options": [
      {
        "text": "The GDP deflator rises from 127.36 to 128.53, yielding an annual inflation rate of 0.92%.",
        "isCorrect": true,
        "refutation": "Correct! Deflator Year 1 = (5 130 703 / 4 028 475) × 100 = 127.36; Deflator Year 2 = (5 643 773 / 4 391 038) × 100 = 128.53; inflation = [(128.53 - 127.36)/127.36] × 100 = 0.92%."
      },
      {
        "text": "The GDP deflator rises from 127.36 to 128.53, yielding an annual inflation rate of 1.17%.",
        "isCorrect": false,
        "refutation": "1.17 is simply the raw index point difference (128.53 - 127.36); to find the percentage inflation rate, you must divide the difference by the previous year's deflator (127.36)."
      },
      {
        "text": "The GDP deflator rises from 78.52 to 77.80, yielding a negative inflation rate of -0.92%.",
        "isCorrect": false,
        "refutation": "78.52 and 77.80 invert the GDP deflator formula by dividing Real GDP by Nominal GDP instead of (Nominal GDP / Real GDP) × 100."
      },
      {
        "text": "The GDP deflator rises from 127.36 to 128.53, yielding an annual inflation rate of 10.00%.",
        "isCorrect": false,
        "refutation": "10.00% is the percentage growth in Nominal GDP [(5 643 773 - 5 130 703)/5 130 703 × 100], which conflates real output growth (9.00%) with price inflation (0.92%)."
      }
    ]
  },
  {
    "id": "q_ch20_02",
    "chapter": "ch20",
    "source": "NWU Past Paper Dec 2024 Section C Q3 (Pizza, Soda, Ice Cream)",
    "citation": "Mohr 6e, §13.2 & §20.2, pp. 243, 441",
    "difficulty": "Medium",
    "stem": "An economy produces three goods (2021 is the base year): Pizza (2021: Q=24, P=R22.50; 2022: Q=36, P=R24.75), Soda (2021: Q=50, P=R4.00; 2022: Q=75, P=R4.40), and Ice Cream (2021: Q=15, P=R8.00; 2022: Q=22.5, P=R8.80). Calculate 2021 Nominal/Real GDP, 2022 Nominal and Real GDP, the 2022 GDP Deflator, and the 2022 inflation rate.",
    "derivation": "\\text{GDP}_{2021}^{\\text{Nom}} = \\text{GDP}_{2021}^{\\text{Real}} = 24(22.5) + 50(4) + 15(8) = \\text{R}860. \\\\ \\text{GDP}_{2022}^{\\text{Nom}} = 36(24.75) + 75(4.4) + 22.5(8.8) = \\text{R}1\\,419; \\quad \\text{GDP}_{2022}^{\\text{Real}} = 36(22.5) + 75(4) + 22.5(8) = \\text{R}1\\,290. \\\\ \\text{Deflator}_{2022} = \\frac{1419}{1290}\\times 100 = 110.0 \\implies \\pi_{2022} = 10.0\\%.",
    "options": [
      {
        "text": "2021 GDP is R860; 2022 Nominal is R1 419 and Real is R1 290; 2022 Deflator is 110 and inflation is 10%.",
        "isCorrect": true,
        "refutation": "Correct! 2021 GDP = 540 + 200 + 120 = R860; 2022 Nominal = 891 + 330 + 198 = R1 419; 2022 Real = 810 + 300 + 180 = R1 290; Deflator = 110, so inflation = 10%."
      },
      {
        "text": "2021 GDP is R860; 2022 Nominal is R1 419 and Real is R1 290; 2022 Deflator is 110 and inflation is 50%.",
        "isCorrect": false,
        "refutation": "50% is the real output growth rate [(1 290 - 860)/860 × 100 = 50%], whereas price inflation is [(110 - 100)/100 × 100] = 10%."
      },
      {
        "text": "2021 GDP is R860; 2022 Nominal is R1 290 and Real is R1 419; 2022 Deflator is 90.9 and inflation is -9.1%.",
        "isCorrect": false,
        "refutation": "This swaps 2022 Nominal GDP (current prices = R1 419) with 2022 Real GDP (2021 constant prices = R1 290)."
      },
      {
        "text": "2021 GDP is R946; 2022 Nominal is R1 419 and Real is R1 290; 2022 Deflator is 110 and inflation is 65%.",
        "isCorrect": false,
        "refutation": "R946 values 2021 quantities at 2022 prices, and 65% is the nominal GDP growth rate [(1 419 - 860)/860 × 100 = 65%], not the inflation rate."
      }
    ]
  },
  {
    "id": "q_ch20_03",
    "chapter": "ch20",
    "source": "NWU Past Paper Dec 2024 Section B Q3.2 & Ch 20 Tutorial Q6",
    "citation": "Mohr 6e, §20.2, pp. 438–442",
    "difficulty": "Easy",
    "stem": "Which statement accurately contrasts the Consumer Price Index (CPI), the Producer Price Index (PPI), and the Implicit GDP Deflator in South Africa?",
    "derivation": "\\text{CPI: Urban consumer basket (incl. imports & services)}. \\quad \\text{PPI: Production gate (excl. services & VAT, incl. capital/intermediate)}. \\quad \\text{Deflator: All domestic final output (excl. imports)}.",
    "options": [
      {
        "text": "CPI includes services and imported consumer goods; PPI excludes services and includes capital goods.",
        "isCorrect": true,
        "refutation": "Correct! CPI measures household cost of living (including services, VAT, and imported consumer goods), whereas PPI measures producer prices (excluding services and VAT, including capital/intermediate goods)."
      },
      {
        "text": "PPI includes household services and VAT; CPI excludes imported consumer goods and indirect taxes.",
        "isCorrect": false,
        "refutation": "This reverses the two indices: services and VAT are included in CPI (consumer prices) and excluded from PPI (producer prices)."
      },
      {
        "text": "The GDP Deflator uses a fixed consumer basket including imports; CPI excludes all imported oil.",
        "isCorrect": false,
        "refutation": "CPI uses a fixed consumer basket that includes imported consumer goods (like petrol), whereas the GDP Deflator uses a changing basket of strictly domestic production (excluding imports)."
      },
      {
        "text": "CPI, PPI, and the GDP Deflator always yield the exact same annual inflation percentage in SA.",
        "isCorrect": false,
        "refutation": "Because their baskets, weights, and treatment of imports, services, and capital goods differ, the three measures regularly yield different inflation rates."
      }
    ]
  },
  {
    "id": "q_ch21_01",
    "chapter": "ch21",
    "source": "NWU Past Paper Dec 2024 Section C Q4 (Elaria Broad Unemployment Rate)",
    "citation": "Mohr 6e, §21.1, pp. 469–471",
    "difficulty": "Medium",
    "stem": "In the economy of Elaria (Q2 2024), workforce statistics are: Employed = 6 750 000; Unemployed (actively seeking work) = 2 220 000; Discouraged work seekers = 1 030 000; Students = 2 950 000; Homemakers = 1 280 000; Too old/young to work = 740 000; Illness = 640 000; Disability = 560 000. Calculate the strict (narrow) and broad (expanded) unemployment rates.",
    "derivation": "u_{\\text{strict}} = \\frac{2\\,220\\,000}{6\\,750\\,000 + 2\\,220\\,000}\\times 100 = \\frac{2.22\\text{m}}{8.97\\text{m}}\\times 100 = 24.75\\%. \\\\ u_{\\text{broad}} = \\frac{2\\,220\\,000 + 1\\,030\\,000}{6\\,750\\,000 + 2\\,220\\,000 + 1\\,030\\,000}\\times 100 = \\frac{3.25\\text{m}}{10.00\\text{m}}\\times 100 = 32.50\\%.",
    "options": [
      {
        "text": "The broad unemployment rate is 32.50% (3.25m / 10.00m) and the strict rate is 24.75%.",
        "isCorrect": true,
        "refutation": "Correct! Broad unemployment adds discouraged work-seekers (1.03m) to both active unemployed (2.22m -> 3.25m) and the strict labour force (8.97m -> 10.00m), giving 32.50%."
      },
      {
        "text": "The broad unemployment rate is 36.23% (3.25m / 8.97m) and the strict rate is 24.75%.",
        "isCorrect": false,
        "refutation": "36.23% adds discouraged work-seekers to the numerator (3.25m) but forgets to add them to the expanded labour force denominator (dividing by 8.97m instead of 10.00m)."
      },
      {
        "text": "The broad unemployment rate is 20.10% (3.25m / 16.17m) by dividing by total population.",
        "isCorrect": false,
        "refutation": "Students, homemakers, the ill, disabled, and those too old/young are not economically active and must never be included in the labour force denominator."
      },
      {
        "text": "The broad unemployment rate is 22.20% (2.22m / 10.00m) and the strict rate is 32.89%.",
        "isCorrect": false,
        "refutation": "22.20% omits discouraged work-seekers from the broad numerator, while 32.89% divides unemployed (2.22m) by employed (6.75m) instead of the labour force."
      }
    ]
  },
  {
    "id": "q_ch21_02",
    "chapter": "ch21",
    "source": "NWU Past Paper Dec 2023 Section C Q3 (Tigeria Labour Market)",
    "citation": "Mohr 6e, §21.1, pp. 469–471",
    "difficulty": "Medium",
    "stem": "Labour statistics for Tigeria are as follows: Total adult population = 34 000 000; Total employed = 18 600 000; Unemployed (active seekers) = 8 900 000; Unemployed (discouraged work-seekers) = 2 500 000. Calculate Tigeria's strict labour force, broad labour force, and broad unemployment rate.",
    "derivation": "\\text{LF}_{\\text{strict}} = 18.6\\text{m} + 8.9\\text{m} = 27.5\\text{m}; \\quad \\text{LF}_{\\text{broad}} = 27.5\\text{m} + 2.5\\text{m} = 30.0\\text{m}. \\\\ u_{\\text{broad}} = \\frac{8.9\\text{m} + 2.5\\text{m}}{30.0\\text{m}}\\times 100 = \\frac{11.4\\text{m}}{30.0\\text{m}}\\times 100 = 38.00\\%.",
    "options": [
      {
        "text": "Strict labour force is 27.5m, broad labour force is 30.0m, and broad unemployment is 38.00%.",
        "isCorrect": true,
        "refutation": "Correct! Strict LF = 18.6m + 8.9m = 27.5m; Broad LF adds 2.5m discouraged = 30.0m; Broad unemployment rate = (11.4m / 30.0m) × 100 = 38.00%."
      },
      {
        "text": "Strict labour force is 27.5m, broad labour force is 34.0m, and broad unemployment is 33.53%.",
        "isCorrect": false,
        "refutation": "34.0m is the total adult population (which includes 4.0m economically inactive persons), not the broad labour force of 30.0m."
      },
      {
        "text": "Strict labour force is 18.6m, broad labour force is 27.5m, and broad unemployment is 41.45%.",
        "isCorrect": false,
        "refutation": "18.6m is only the employed population, and 41.45% (11.4m / 27.5m) forgets to include the 2.5m discouraged work-seekers in the broad labour force denominator."
      },
      {
        "text": "Strict labour force is 27.5m, broad labour force is 30.0m, and broad unemployment is 32.36%.",
        "isCorrect": false,
        "refutation": "32.36% (8.9m / 27.5m) is the strict (narrow) unemployment rate excluding discouraged work-seekers, whereas the broad rate is 38.00%."
      }
    ]
  },
  {
    "id": "q_ch21_03",
    "chapter": "ch21",
    "source": "NWU Past Paper Dec 2022 Section B Q5 (Yetunde, Cipriano, Anouska)",
    "citation": "Mohr 6e, §21.1, pp. 472–477",
    "difficulty": "Easy",
    "stem": "Stats SA surveyed three unemployed individuals: (1) Yetunde worked on a soft-fruit farm in Elgin during the picking season and is now off-season; (2) Cipriano was a club bouncer retrenched during an economic recession and loadshedding downturn until business recovers; (3) Anouska worked at a travel agency that closed because online algorithms replaced human booking staff. Classify their unemployment types.",
    "derivation": "\\text{Yetunde} \\to \\text{Seasonal}; \\quad \\text{Cipriano} \\to \\text{Cyclical}; \\quad \\text{Anouska} \\to \\text{Structural}.",
    "options": [
      {
        "text": "Yetunde is seasonally unemployed, Cipriano is cyclically unemployed, and Anouska is structurally unemployed.",
        "isCorrect": true,
        "refutation": "Correct! Agricultural harvest work is seasonal, recession/downturn layoffs are cyclical, and permanent displacement by online algorithms is structural."
      },
      {
        "text": "Yetunde is frictionally unemployed, Cipriano is structurally unemployed, and Anouska is cyclically unemployed.",
        "isCorrect": false,
        "refutation": "This misclassifies all three: agricultural picking is seasonal, recessionary layoffs are cyclical, and algorithmic replacement is structural."
      },
      {
        "text": "Yetunde is seasonally unemployed, Cipriano is frictionally unemployed, and Anouska is cyclically unemployed.",
        "isCorrect": false,
        "refutation": "Cipriano lost his job due to an aggregate economic downturn (cyclical, not voluntary frictional job search), and Anouska's job was automated (structural)."
      },
      {
        "text": "Yetunde is structurally unemployed, Cipriano is cyclically unemployed, and Anouska is frictionally unemployed.",
        "isCorrect": false,
        "refutation": "Fruit picking follows predictable annual climate seasons (seasonal), while algorithmic replacement requires retraining (structural, not short-term frictional)."
      }
    ]
  },
  {
    "id": "q_ch21_04",
    "chapter": "ch21",
    "source": "NWU Chapter 21 Revision Questions (Phillips Curve & Labour Force)",
    "citation": "Mohr 6e, §20.6 & §21.1, pp. 459–471",
    "difficulty": "Medium",
    "stem": "In macroeconomic labour analysis, what does a rightward shift of the short-run Phillips curve indicate, and what can we definitely conclude when a country's unemployment rate increases?",
    "derivation": "\\text{Rightward Phillips Shift} \\implies \\text{Stagflation (higher } \\pi \\text{ at every } U\\text{)}. \\quad u \\uparrow \\iff \\frac{U}{LF} \\uparrow.",
    "options": [
      {
        "text": "Every inflation level has higher unemployment; the unemployed share of the labour force rose.",
        "isCorrect": true,
        "refutation": "Correct! A rightward Phillips curve shift means a worse trade-off (more unemployment at every inflation rate), and a rising unemployment rate means the unemployed share of the labour force grew."
      },
      {
        "text": "The inflation-unemployment trade-off improved; zero new jobs were created in the economy.",
        "isCorrect": false,
        "refutation": "A less severe trade-off would be a leftward shift, and the unemployment rate can rise even when new jobs are created if the labour force grows faster."
      },
      {
        "text": "The economy is experiencing deflation; real GDP growth must be negative during the period.",
        "isCorrect": false,
        "refutation": "A rightward Phillips shift represents stagflation (rising inflation and rising unemployment), and unemployment can rise during positive 'jobless' GDP growth."
      },
      {
        "text": "Imported capital goods became cheaper; workers are retiring and leaving the labour force.",
        "isCorrect": false,
        "refutation": "Cheaper imported capital goods shift AS right and the Phillips curve left, while retirees exit the labour force rather than entering the unemployed pool."
      }
    ]
  },
  {
    "id": "q_ch22_01",
    "chapter": "ch22",
    "source": "NWU Chapter 22 Revision Questions (MCQs 1–5)",
    "citation": "Mohr 6e, §22.1–22.3, pp. 485–500",
    "difficulty": "Easy",
    "stem": "According to Chapter 22 of Mohr (6e), which phase of the business cycle occurs when almost all available resources in the economy are in use, and what does a strategy of 'import substitution' involve?",
    "derivation": "\\text{Maximum Capacity Utilisation} \\to \\text{Peak (Boom) Phase}. \\quad \\text{Import Substitution} \\to \\text{Tariffs/Quotas to produce former imports locally}.",
    "options": [
      {
        "text": "The peak (boom) phase; using import tariffs to encourage local production of formerly imported goods.",
        "isCorrect": true,
        "refutation": "Correct! Resource utilisation reaches its maximum at the peak (boom) of the cycle, and import substitution uses trade protection to manufacture previously imported goods domestically."
      },
      {
        "text": "The expansion (upswing) phase; reducing import tariffs so domestic firms can export more goods.",
        "isCorrect": false,
        "refutation": "The expansion phase leads up to full capacity, while peak is the upper turning point where resources are fully used; import substitution raises (not cuts) tariffs on consumer imports."
      },
      {
        "text": "The recovery phase; replacing domestic workers with imported capital machinery to cut labour costs.",
        "isCorrect": false,
        "refutation": "Replacing workers with machinery is capital deepening (raising capital intensity), whereas import substitution replaces foreign imported goods with domestic production."
      },
      {
        "text": "The trough phase; protecting export industries in which the economy already holds comparative advantage.",
        "isCorrect": false,
        "refutation": "The trough is the lowest point of a recession with high idle capacity, and import substitution targets domestic manufacturing of goods that were previously imported."
      }
    ]
  },
  {
    "id": "q_ch22_02",
    "chapter": "ch22",
    "source": "NWU Past Paper Nov 2019 B Q2.1, Ch 22 Revision Q2 & Q4",
    "citation": "Mohr 6e, §22.1, pp. 486–488",
    "difficulty": "Easy",
    "stem": "If per capita real GDP in Country A is twice as high as per capita real GDP in Country B, why does this NOT imply that every resident in Country A is twice as well off, and which item is NOT a welfare limitation of GDP?",
    "derivation": "\\text{Per Capita GDP} = \\frac{\\text{GDP}}{\\text{Population}} \\text{ (ignores Gini inequality, informal sector, non-market output, pollution)}.",
    "options": [
      {
        "text": "Per capita GDP is an average that hides inequality; 'pertaining only to domestic production' is not a flaw.",
        "isCorrect": true,
        "refutation": "Correct! Per capita GDP contains zero information about income distribution, and 'pertaining only to production inside the country' is simply the geographic definition of GDP (Ch 22 MCQ 5)."
      },
      {
        "text": "Per capita GDP adjusts for Gini inequality; 'unrecorded informal sector activity' is not a welfare flaw.",
        "isCorrect": false,
        "refutation": "Per capita GDP does NOT adjust for the Gini coefficient, and unrecorded informal activity is one of the five main textbook problems associated with GDP."
      },
      {
        "text": "Per capita GDP subtracts pollution costs; 'valuing non-market subsistence output' is not a welfare flaw.",
        "isCorrect": false,
        "refutation": "Standard GDP fails to subtract negative externalities like pollution and struggles to value non-market production—both are major welfare limitations."
      },
      {
        "text": "Per capita GDP measures median household wealth; 'frequent data revisions' is not a problem with GDP.",
        "isCorrect": false,
        "refutation": "Per capita GDP is a mean flow of income (not median wealth), and inevitable data revisions are explicitly listed in Mohr §22.1 as a problem with GDP."
      }
    ]
  },
  {
    "id": "q_ch13_06",
    "chapter": "ch13",
    "source": "NWU Past Paper Dec 2024 Section C Q1 (SA 2020 National Accounts)",
    "citation": "Mohr 6e, §13.2–13.3, pp. 241–246",
    "difficulty": "Medium",
    "stem": "Table 1 provides South African statistics for 2020 (in R millions): Household expenditure = 974 252; Fixed capital consumption = 170 986; Exports = 492 646; Imports = 569 321; Taxes on production and imports = 205 562; Subsidies = 11 433; GDP at market prices (GDPMP) = 1 530 580; Wages paid to RSA au pairs working in the USA = 1 500; Salaries paid to Cuban doctors working in RSA = 1 800. Calculate GDP at factor cost (GDPfc) and Gross National Product at market prices (GNPmp).",
    "derivation": "\\text{GDP}_{fc} = \\text{GDP}_{mp} - T_{\\text{ind}} + S = 1\\,530\\,580 - 205\\,562 + 11\\,433 = \\text{R}1\\,336\\,451\\text{m}. \\\\ \\text{GNP}_{mp} = \\text{GDP}_{mp} + \\text{FI}_{\\text{RSA in USA}} - \\text{FP}_{\\text{Cubans in RSA}} = 1\\,530\\,580 + 1\\,500 - 1\\,800 = \\text{R}1\\,530\\,280\\text{m}.",
    "options": [
      {
        "text": "GDP at factor cost is R1 336 451 million and GNP at market prices is R1 530 280 million.",
        "isCorrect": true,
        "refutation": "Correct! Subtracting taxes (205 562) and adding subsidies (11 433) yields GDPfc = 1 336 451, while adding RSA au pair earnings (+1 500) and subtracting Cuban doctor salaries (-1 800) gives GNPmp = 1 530 280."
      },
      {
        "text": "GDP at factor cost is R1 724 709 million and GNP at market prices is R1 530 880 million.",
        "isCorrect": false,
        "refutation": "This reverses both formulas: it adds indirect taxes (+205 562) and subtracts subsidies (-11 433) for GDPfc, and adds foreign Cuban doctor payments (+1 800) for GNPmp."
      },
      {
        "text": "GDP at factor cost is R1 336 451 million and GNP at market prices is R1 453 905 million.",
        "isCorrect": false,
        "refutation": "R1 453 905 million subtracts net exports (492 646 - 569 321) instead of adjusting for primary factor income receipts (+1 500) and payments (-1 800)."
      },
      {
        "text": "GDP at factor cost is R1 165 465 million and GNP at market prices is R1 359 294 million.",
        "isCorrect": false,
        "refutation": "This mistakenly subtracts fixed capital consumption (170 986), which converts Gross to Net product rather than Market Prices to Factor Cost."
      }
    ]
  },
  {
    "id": "q_ch13_07",
    "chapter": "ch13",
    "source": "NWU Past Paper Dec 2024 Section C Q2 (Trevor Noah / Bonang Matheba Charity Gala)",
    "citation": "Mohr 6e, §13.2, pp. 239–241",
    "difficulty": "Hard",
    "stem": "Bonang Matheba sponsors a charity gala for R15 307 200, hiring Celebration Creations (which pays R592 200 venue rent, 12 servers at R11 700 each = R140 400 wages, and earns R3 612 600 profit). Celebration Creations hires Chef Siba (who pays R120 600 kitchen rent, R88 200 wages, and buys ingredients from Woolworths for R1 283 760). Woolworths pays R73 800 rent and R108 000 wages. What are the value added by Celebration Creations, the value added by Chef Siba, and Total GDP?",
    "derivation": "\\text{VA}_{\\text{CC}} = 140\\,400 + 592\\,200 + 3\\,612\\,600 = \\text{R}4\\,345\\,200 \\implies S_{\\text{Siba}} = 15\\,307\\,200 - 4\\,345\\,200 = \\text{R}10\\,962\\,000. \\\\ \\text{VA}_{\\text{Siba}} = 10\\,962\\,000 - 1\\,283\\,760 = \\text{R}9\\,678\\,240; \\quad \\text{VA}_{\\text{Woolworths}} = \\text{R}1\\,283\\,760; \\quad \\text{GDP} = \\text{R}15\\,307\\,200.",
    "options": [
      {
        "text": "Celebration Creations VA is R4 345 200, Chef Siba VA is R9 678 240, and GDP is R15 307 200.",
        "isCorrect": true,
        "refutation": "Correct! Celebration Creations' factor incomes sum to R4 345 200, leaving R10 962 000 paid to Chef Siba; subtracting Woolworths inputs (R1 283 760) gives Siba VA = R9 678 240."
      },
      {
        "text": "Celebration Creations VA is R3 612 600, Chef Siba VA is R9 469 440, and GDP is R14 184 000.",
        "isCorrect": false,
        "refutation": "Those three figures represent only the net profits of each participant, omitting wages (R336 600) and rent (R786 600) from value added."
      },
      {
        "text": "Celebration Creations VA is R15 307 200, Chef Siba VA is R10 962 000, and GDP is R27 552 960.",
        "isCorrect": false,
        "refutation": "R27 552 960 sums gross sales across all three participants without subtracting intermediate purchases, causing severe double counting."
      },
      {
        "text": "Celebration Creations VA is R4 345 200, Chef Siba VA is R10 962 000, and GDP is R16 590 960.",
        "isCorrect": false,
        "refutation": "R10 962 000 is Chef Siba's gross sales to Celebration Creations before subtracting the R1 283 760 of intermediate ingredients purchased from Woolworths."
      }
    ]
  },
  {
    "id": "q_ch14_05",
    "chapter": "ch14",
    "source": "NWU Past Paper Dec 2024 Section C Q5 (Comprehensive M3 Money Supply)",
    "citation": "Mohr 6e, §14.3, pp. 271–273",
    "difficulty": "Easy",
    "stem": "Determine the M1, M2, and comprehensive M3 money supply of South Africa when there is R10 million worth of coins and banknotes in circulation outside the monetary sector, R25 million in immediate demand deposits at banks, R125 million in short- and medium-term deposits, and R290 million in long-term deposits.",
    "derivation": "M_1 = 10 + 25 = \\text{R}35\\text{m}; \\quad M_2 = 35 + 125 = \\text{R}160\\text{m}; \\quad M_3 = 160 + 290 = \\text{R}450\\text{m}.",
    "options": [
      {
        "text": "M1 equals R35 million, M2 equals R160 million, and comprehensive M3 equals R450 million.",
        "isCorrect": true,
        "refutation": "Correct! M1 = 10 + 25 = R35m; M2 = 35 + 125 = R160m; and comprehensive M3 = 160 + 290 = R450m."
      },
      {
        "text": "M1 equals R25 million, M2 equals R150 million, and comprehensive M3 equals R440 million.",
        "isCorrect": false,
        "refutation": "This omits the R10 million of coins and banknotes in circulation from M1, which then understates M2 and M3 by R10 million each."
      },
      {
        "text": "M1 equals R35 million, M2 equals R125 million, and comprehensive M3 equals R290 million.",
        "isCorrect": false,
        "refutation": "Each broader monetary aggregate is cumulative: M2 must include M1 (35 + 125 = 160), and M3 must include M2 (160 + 290 = 450)."
      },
      {
        "text": "M1 equals R160 million, M2 equals R325 million, and comprehensive M3 equals R450 million.",
        "isCorrect": false,
        "refutation": "M1 includes only cash and immediate demand deposits (R35m), whereas short- and medium-term deposits (R125m) belong in M2."
      }
    ]
  },
  {
    "id": "q_ch15_05",
    "chapter": "ch15",
    "source": "NWU Past Paper Dec 2023 Section C Q5 (Bella Mbonambi R315 850 Salary)",
    "citation": "Mohr 6e, §15.11, pp. 316–319",
    "difficulty": "Medium",
    "stem": "Bella Mbonambi (aged 23) starts her first job as a junior economist at the SARB earning R315 850 per year. The tax table specifies for bracket R315 101 – R400 700: 'R58 389 + 35% of taxable income above R315 100', with a Primary Rebate of R10 900 (and Secondary Rebate of R5 700 for 65+). Calculate her net tax payable and effective tax rate.",
    "derivation": "T_{\\text{before}} = 58\\,389 + 0.35(315\\,850 - 315\\,100) = 58\\,389 + 262.50 = \\text{R}58\\,651.50. \\\\ T_{\\text{after}} = 58\\,651.50 - 10\\,900 = \\text{R}47\\,751.50. \\quad \\text{ATR} = \\frac{47\\,751.50}{315\\,850}\\times 100 = 15.12\\%.",
    "options": [
      {
        "text": "Net tax payable is R47 751.50 and her effective tax rate is 15.12% (18.57% pre-rebate).",
        "isCorrect": true,
        "refutation": "Correct! Tax on the R750 excess above R315 100 is R262.50; adding R58 389 gives R58 651.50, and subtracting the R10 900 primary rebate yields R47 751.50 (15.12%)."
      },
      {
        "text": "Net tax payable is R42 051.50 and her effective tax rate is 13.31% after all rebates.",
        "isCorrect": false,
        "refutation": "R42 051.50 wrongly deducts the R5 700 secondary rebate, which applies only to taxpayers aged 65 years and older."
      },
      {
        "text": "Net tax payable is R99 647.50 and her effective tax rate is 31.55% after the rebate.",
        "isCorrect": false,
        "refutation": "R99 647.50 multiplies her entire R315 850 salary by 35% (110 547.50 - 10 900) instead of applying 35% only to the R750 excess above R315 100."
      },
      {
        "text": "Net tax payable is R69 551.50 and her effective tax rate is 22.02% on annual salary.",
        "isCorrect": false,
        "refutation": "R69 551.50 adds the R10 900 primary rebate to gross tax (58 651.50 + 10 900) instead of subtracting it."
      }
    ]
  },
  {
    "id": "q_ch16_04",
    "chapter": "ch16",
    "source": "NWU Past Paper Dec 2024 Section C Q7 (Japan & Portugal Wagyu Beef)",
    "citation": "Mohr 6e, §16.2, pp. 325–329",
    "difficulty": "Easy",
    "stem": "Suppose Japan and Portugal produce only Wagyu beef and Seafood. If all resources are fully used, Japan can produce 1 000 kg of Wagyu beef or 2 000 kg of Seafood, while Portugal can produce 2 200 kg of Wagyu beef or 3 000 kg of Seafood. Compute the opportunity cost of producing 1 kg of Wagyu beef in both countries and identify who holds the comparative advantage in Wagyu beef.",
    "derivation": "\\text{Japan: } 1\\text{ kg Wagyu} = \\frac{2\\,000}{1\\,000} = 2.00\\text{ kg Seafood}. \\quad \\text{Portugal: } 1\\text{ kg Wagyu} = \\frac{3\\,000}{2\\,200} = 1.36\\text{ kg Seafood}.",
    "options": [
      {
        "text": "Japan sacrifices 2.00 kg Seafood and Portugal sacrifices 1.36 kg, giving Portugal comparative advantage.",
        "isCorrect": true,
        "refutation": "Correct! Japan gives up 2000/1000 = 2.00 kg of Seafood per kg of Wagyu, while Portugal gives up only 3000/2200 = 1.36 kg of Seafood."
      },
      {
        "text": "Japan sacrifices 0.50 kg Seafood and Portugal sacrifices 0.73 kg, giving Japan comparative advantage.",
        "isCorrect": false,
        "refutation": "0.50 kg (1000/2000) and 0.73 kg (2200/3000) measure the opportunity cost of 1 kg of Seafood in terms of Wagyu beef, not 1 kg of Wagyu beef."
      },
      {
        "text": "Japan sacrifices 2.00 kg Seafood and Portugal sacrifices 1.36 kg, giving Japan comparative advantage.",
        "isCorrect": false,
        "refutation": "While the opportunity costs (2.00 kg and 1.36 kg) are right, comparative advantage belongs to Portugal because 1.36 kg is lower than 2.00 kg."
      },
      {
        "text": "Japan sacrifices 1.00 kg Seafood and Portugal sacrifices 1.50 kg, giving Japan comparative advantage.",
        "isCorrect": false,
        "refutation": "Dividing Seafood by Wagyu output gives 2000/1000 = 2.00 kg for Japan and 3000/2200 = 1.36 kg for Portugal."
      }
    ]
  },
  {
    "id": "q_ch18_04",
    "chapter": "ch18",
    "source": "NWU Past Paper Nov 2018 Section C Q4 (Italian Economy Keynesian Model)",
    "citation": "Mohr 6e, §18.2–18.3, pp. 387–393",
    "difficulty": "Hard",
    "stem": "You are given the following model for the Italian economy: Consumption C = 85 + 0.5Yd; Investment I = 75; Government expenditure G = 70; Taxes T = 0.25Y; Disposable income Yd = Y - T; Exports X = 30; Imports Z = 30 + 0.3Yd. Calculate equilibrium income (Y), taxes collected at equilibrium (T), the government budget balance (T - G), and household savings (S).",
    "derivation": "\\bar{A} = 85 + 75 + 70 + 30 - 30 = 230. \\quad Y = 230 + (0.5 - 0.3)(1 - 0.25)Y = 230 + 0.15Y \\implies Y = \\frac{230}{0.85} = 270.59. \\\\ T = 0.25(270.59) = 67.65; \\quad \\text{Budget} = 67.65 - 70 = -2.35; \\quad S = -85 + 0.5(0.75 \\times 270.59) = 16.47.",
    "options": [
      {
        "text": "Equilibrium Y is 270.59, Taxes are 67.65, Budget Deficit is -2.35, and Savings equal 16.47.",
        "isCorrect": true,
        "refutation": "Correct! With Ā = 230 and induced slope (0.5 - 0.3)(0.75) = 0.15, Y = 230 / 0.85 = 270.59, T = 67.65, Budget = 67.65 - 70 = -2.35 (deficit), and S = 16.47."
      },
      {
        "text": "Equilibrium Y is 248.65, Taxes are 62.16, Budget Deficit is -7.84, and Savings equal 8.24.",
        "isCorrect": false,
        "refutation": "248.65 treats induced imports as 0.3Y instead of 0.3Yd = 0.3(0.75Y) = 0.225Y as specified in the exam equation Z = 30 + 0.3Yd."
      },
      {
        "text": "Equilibrium Y is 368.00, Taxes are 92.00, Budget Surplus is +22.00, and Savings equal 53.00.",
        "isCorrect": false,
        "refutation": "368.00 ignores the foreign sector leakage (m = 0.3) completely, dividing 230 by (1 - 0.375) = 0.625."
      },
      {
        "text": "Equilibrium Y is 270.59, Taxes are 67.65, Budget Surplus is +2.35, and Savings equal 101.47.",
        "isCorrect": false,
        "refutation": "Since tax revenue (67.65) is less than government spending (70.00), the government has a budget deficit (-2.35), and S must subtract autonomous dissaving (-85)."
      }
    ]
  },
  {
    "id": "q_ch20_04",
    "chapter": "ch20",
    "source": "NWU Tutorial Ch 20 Comprehensive Questions Q1, Q4 & Q6",
    "citation": "Mohr 6e, §20.2–20.3, pp. 438–445",
    "difficulty": "Medium",
    "stem": "A household spent R4 200 on Food, R1 900 on Transport, R5 800 on Rent, and R1 300 on Utilities last year (total R13 200). If CPI inflation during the year was 6.8%, how much must total household expenditure increase to maintain the exact same real consumption basket, and why does CPI inflation often exceed GDP Deflator inflation when global crude oil prices spike?",
    "derivation": "\\text{Initial Total} = 4\\,200 + 1\\,900 + 5\\,800 + 1\\,300 = \\text{R}13\\,200. \\quad \\Delta E = 13\\,200 \\times 0.068 = \\text{R}897.60 \\implies E_{\\text{new}} = \\text{R}14\\,097.60.",
    "options": [
      {
        "text": "Expenditure rises by R897.60 (to R14 097.60); CPI includes imported fuel while the Deflator excludes imports.",
        "isCorrect": true,
        "refutation": "Correct! 6.8% of R13 200 is R897.60 (new total R14 097.60), and CPI uses a fixed consumer basket that includes imported oil whereas the GDP Deflator covers only domestic production."
      },
      {
        "text": "Expenditure rises by R897.60 (to R14 097.60); the Deflator includes imported fuel while CPI excludes imports.",
        "isCorrect": false,
        "refutation": "Imports are excluded from GDP and therefore excluded from the GDP Deflator, whereas imported consumer goods (like petrol) are included in the CPI basket."
      },
      {
        "text": "Expenditure rises by R839.25 (to R14 039.25); CPI uses a variable basket while the Deflator is fixed.",
        "isCorrect": false,
        "refutation": "6.8% of R13 200 is R897.60, and CPI uses a fixed basket (subject to substitution bias) while the GDP Deflator uses a changing current-production basket."
      },
      {
        "text": "Expenditure rises by R950.40 (to R14 150.40); CPI excludes VAT while the GDP Deflator includes VAT.",
        "isCorrect": false,
        "refutation": "CPI measures final retail market prices paid by consumers (including VAT), and 0.068 × R13 200 = R897.60."
      }
    ]
  },
  {
    "id": "q_ch13_08",
    "chapter": "ch13",
    "source": "NWU Past Paper Nov 2018 Section C Q1 (SA 2018 National Accounts)",
    "citation": "Mohr 6e, §13.2–13.3, pp. 241–246",
    "difficulty": "Hard",
    "stem": "Use the following SA National Accounts data (R millions): GDP at market prices (GDPmp) = 1 204; Consumption of fixed capital = 72; Factor income earned abroad by South Africans = 24; Factor income earned in SA by foreigners = 13; Exports = 64; Imports = 100; Taxes on production and imports = 148; Subsidies = 15. Calculate National Income (NI / NNI at factor cost) and Gross Domestic Expenditure at factor cost (GDEfc).",
    "derivation": "\\text{NI} = \\text{GDP}_{mp} - D + \\text{FI}_{\\text{rec}} - \\text{FP}_{\\text{paid}} - T_{\\text{ind}} + S = 1\\,204 - 72 + 24 - 13 - 148 + 15 = \\text{R}1\\,010\\text{m}. \\\\ \\text{GDE}_{fc} = (\\text{GDP}_{mp} - X + Z) - T_{\\text{ind}} + S = (1\\,204 - 64 + 100) - 148 + 15 = \\text{R}1\\,107\\text{m}.",
    "options": [
      {
        "text": "National Income (NI) is R1 010 million and Gross Domestic Expenditure at factor cost is R1 107 million.",
        "isCorrect": true,
        "refutation": "Correct! NI = 1 204 - 72 + 24 - 13 - 148 + 15 = R1 010m, and GDEfc = 1 204 - 64 + 100 - 148 + 15 = R1 107m."
      },
      {
        "text": "National Income (NI) is R1 082 million and Gross Domestic Expenditure at factor cost is R1 035 million.",
        "isCorrect": false,
        "refutation": "R1 082 million forgets to subtract consumption of fixed capital (72) from NNI, while R1 035 million reverses exports and imports."
      },
      {
        "text": "National Income (NI) is R1 143 million and Gross Domestic Expenditure at factor cost is R1 240 million.",
        "isCorrect": false,
        "refutation": "Those two figures are NNI at market prices (1 143) and GDE at market prices (1 240) before converting to factor cost (-148 + 15)."
      },
      {
        "text": "National Income (NI) is R988 million and Gross Domestic Expenditure at factor cost is R1 179 million.",
        "isCorrect": false,
        "refutation": "R988 million reverses net primary factor income (-24 + 13 instead of +24 - 13), and R1 179 million adds exports instead of imports."
      }
    ]
  },
  {
    "id": "q_ch13_09",
    "chapter": "ch13",
    "source": "NWU Past Paper Dec 2022 Section C Q2 & Nov 2018 Section C Q2 (Hogwarts GDP)",
    "citation": "Mohr 6e, §13.2, pp. 244–245",
    "difficulty": "Easy",
    "stem": "In the economy of Hogwarts, only Brooms and Wands are produced. In 2020 (base year), 10 Brooms are sold at R12 each and 16 Wands at R5 each. In 2021, 9 Brooms are sold at R14 each and 17 Wands at R6 each, while in an alternative 2021 scenario 10 Brooms are sold at R13 each and 20 Wands at R6 each. Using the standard 2018/2022 exam figures (2020: 10 Brooms @ R12, 16 Wands @ R5; 2021: 10 Brooms @ R13, 20 Wands @ R6), calculate 2020 Nominal GDP, 2021 Nominal GDP, and 2021 Real GDP (at 2020 prices).",
    "derivation": "\\text{Nom GDP}_{2020} = (10\\times 12) + (16\\times 5) = \\text{R}200. \\quad \\text{Nom GDP}_{2021} = (10\\times 13) + (20\\times 6) = \\text{R}250. \\\\ \\text{Real GDP}_{2021} = (10\\times 12) + (20\\times 5) = 120 + 100 = \\text{R}220 \\text{ (or R225 with 21 wands)}.",
    "options": [
      {
        "text": "2020 Nominal GDP is R200, 2021 Nominal GDP is R250 (25% nominal growth), and 2021 Real GDP is R220.",
        "isCorrect": true,
        "refutation": "Correct! 2020 Nominal GDP = 120 + 80 = R200; 2021 Nominal GDP = 130 + 120 = R250 (up 25%); and 2021 Real GDP at 2020 prices = 10(12) + 20(5) = R220."
      },
      {
        "text": "2020 Nominal GDP is R200, 2021 Nominal GDP is R220 (10% nominal growth), and 2021 Real GDP is R250.",
        "isCorrect": false,
        "refutation": "This swaps 2021 Nominal GDP (R250 at 2021 prices) with 2021 Real GDP (R220 at constant 2020 base-year prices)."
      },
      {
        "text": "2020 Nominal GDP is R210, 2021 Nominal GDP is R250 (19% nominal growth), and 2021 Real GDP is R200.",
        "isCorrect": false,
        "refutation": "2020 Nominal GDP is 10(12) + 16(5) = 120 + 80 = R200, and 2021 Real GDP rises to R220 because wand quantity grew from 16 to 20."
      },
      {
        "text": "2020 Nominal GDP is R180, 2021 Nominal GDP is R240 (33% nominal growth), and 2021 Real GDP is R210.",
        "isCorrect": false,
        "refutation": "Multiplying price by quantity gives 10×12 + 16×5 = R200 in 2020 and 10×13 + 20×6 = R250 in 2021."
      }
    ]
  },
  {
    "id": "q_ch13_10",
    "chapter": "ch13",
    "source": "NWU Past Paper Dec 2022 Section C Q4 (Fish, Pork & Beef Deflator)",
    "citation": "Mohr 6e, §13.2 & §20.2, pp. 244–245, 442",
    "difficulty": "Medium",
    "stem": "An island economy produces Fish, Pork, and Beef. In 2018 (base year), prices were Fish = $5, Pork = $10, Beef = $20. In 2020, quantities produced were Fish = 350, Pork = 475, Beef = 237.5, and 2020 current prices were Fish = $7.50, Pork = $12.50, Beef = $22.37. Given that 2020 Nominal GDP is $13 875 and 2020 Real GDP (at 2018 prices) is $11 250, calculate the 2020 GDP Deflator and cumulative price increase since 2018.",
    "derivation": "\\text{Real GDP}_{2020} = 350(5) + 475(10) + 237.5(20) = 1\\,750 + 4\\,750 + 4\\,750 = \\$11\\,250. \\\\ \\text{GDP Deflator}_{2020} = \\frac{13\\,875}{11\\,250} \\times 100 = 123.33 \\implies +23.33\\%.",
    "options": [
      {
        "text": "The 2020 GDP Deflator is 123.33, indicating that the overall price level rose by 23.33% since 2018.",
        "isCorrect": true,
        "refutation": "Correct! Dividing 2020 Nominal GDP ($13 875) by 2020 Real GDP ($11 250) and multiplying by 100 gives 123.33 (a 23.33% price rise)."
      },
      {
        "text": "The 2020 GDP Deflator is 81.08, indicating that the overall price level fell by 18.92% since 2018.",
        "isCorrect": false,
        "refutation": "81.08 inverts the GDP Deflator ratio by dividing Real GDP ($11 250) by Nominal GDP ($13 875)."
      },
      {
        "text": "The 2020 GDP Deflator is 126.25, indicating that the overall price level rose by 26.25% since 2018.",
        "isCorrect": false,
        "refutation": "126.25 is an unweighted average of individual price changes rather than the weighted Nominal-to-Real GDP ratio (13 875 / 11 250)."
      },
      {
        "text": "The 2020 GDP Deflator is 119.05, indicating that the overall price level rose by 19.05% since 2018.",
        "isCorrect": false,
        "refutation": "Dividing $13 875 by $11 250 and multiplying by 100 yields exactly 123.33, not 119.05."
      }
    ]
  },
  {
    "id": "q_ch14_06",
    "chapter": "ch14",
    "source": "NWU Past Paper Dec 2023 & Dec 2024 Section A MCQs (SARB & Financial Intermediaries)",
    "citation": "Mohr 6e, §14.4–14.8, pp. 274–288",
    "difficulty": "Easy",
    "stem": "In the South African financial sector, what is the main function of financial intermediaries (such as commercial banks), and what happens in the endogenous money market when the SARB raises the repo rate?",
    "derivation": "\\text{Financial Intermediaries: Channel funds from surplus units (savers) to deficit units (borrowers)}. \\quad \\text{Repo}\\uparrow \\implies i\\uparrow \\implies M\\downarrow.",
    "options": [
      {
        "text": "They channel funds from surplus units to deficit units; a repo hike raises market interest rates and reduces M.",
        "isCorrect": true,
        "refutation": "Correct! Financial intermediaries bridge savers (surplus units) and borrowers (deficit units), and a higher repo rate shifts the horizontal interest rate line up along the money demand curve, reducing M."
      },
      {
        "text": "They mint physical coins and banknotes for Treasury; a repo hike shifts the vertical money supply curve left.",
        "isCorrect": false,
        "refutation": "Only the SARB (via the SA Mint and Note Company) issues currency, and there is no independent vertical money supply curve in the textbook model."
      },
      {
        "text": "They set statutory tax brackets for SARS; a repo hike lowers commercial bank prime lending rates and raises M.",
        "isCorrect": false,
        "refutation": "National Treasury and Parliament set tax rates, and an increase in the SARB repo rate increases (not lowers) the prime lending rate."
      },
      {
        "text": "They eliminate credit risk for equity traders; a repo hike shifts the money demand curve rightward and raises M.",
        "isCorrect": false,
        "refutation": "A change in the interest rate causes an upward movement along the money demand curve rather than shifting the curve rightward."
      }
    ]
  },
  {
    "id": "q_ch15_06",
    "chapter": "ch15",
    "source": "NWU Past Paper Nov 2019 Section C Q4 (2017/18 vs 2018/19 Tax Bracket Creep)",
    "citation": "Mohr 6e, §15.11 & §20.3, pp. 316–319, 447",
    "difficulty": "Hard",
    "stem": "An individual earned R375 000 taxable income in both 2017/18 and 2018/19. In 2017/18, the bracket R296 541 – R410 460 was taxed at 'R63 478 + 31% above R296 540' (no rebate subtracted in exam memo). In 2018/19, Treasury adjusted the bracket to R305 851 – R423 300 taxed at 'R63 853 + 31% above R305 850'. Calculate gross tax payable in both years and explain why Treasury adjusts bracket thresholds upward.",
    "derivation": "T_{17/18} = 63\\,478 + 0.31(375\\,000 - 296\\,540) = \\text{R}87\\,800.60 \\text{ (or R86 232.60 with R61 910 base)}. \\\\ T_{18/19} = 63\\,853 + 0.31(375\\,000 - 305\\,850) = 63\\,853 + 21\\,436.50 = \\text{R}85\\,289.50 \\text{ (ATR } = 22.74\\%\\text{)}.",
    "options": [
      {
        "text": "2018/19 gross tax is R85 289.50 (22.74% average rate); raising bracket thresholds provides relief against bracket creep.",
        "isCorrect": true,
        "refutation": "Correct! In 2018/19, R63 853 + 0.31(69 150) = R85 289.50 (22.74% of R375 000), and raising bracket thresholds prevents inflation from pushing taxpayers into higher brackets (fiscal drag)."
      },
      {
        "text": "2018/19 gross tax is R116 250.00 (31.00% average rate); raising bracket thresholds increases fiscal drag revenue.",
        "isCorrect": false,
        "refutation": "R116 250 multiplies the entire R375 000 income by the 31% marginal rate instead of applying 31% only to income above R305 850."
      },
      {
        "text": "2018/19 gross tax is R63 853.00 (17.03% average rate); raising bracket thresholds converts the tax into a regressive tax.",
        "isCorrect": false,
        "refutation": "R63 853 is only the base tax on the first R305 850; you must add 31% of the R69 150 excess (R21 436.50) to get R85 289.50."
      },
      {
        "text": "2018/19 gross tax is R94 785.00 (25.28% average rate); raising bracket thresholds eliminates value-added tax (VAT).",
        "isCorrect": false,
        "refutation": "31% of (375 000 - 305 850) is R21 436.50, which added to R63 853 equals R85 289.50, and personal income tax adjustments do not eliminate VAT."
      }
    ]
  },
  {
    "id": "q_ch16_05",
    "chapter": "ch16",
    "source": "NWU Past Paper Nov 2018 Section C Q5 (SA vs Zimbabwe Cloth & Cars)",
    "citation": "Mohr 6e, §16.2, pp. 325–329",
    "difficulty": "Medium",
    "stem": "One worker in South Africa can produce 300 metres of cloth or 200 cars, whereas one worker in Zimbabwe can produce 50 metres of cloth or 250 cars. Determine the opportunity cost of producing 1 metre of cloth and 1 car in each country, and state which country should specialise in each product.",
    "derivation": "\\text{SA: } 1\\text{m cloth} = \\frac{200}{300} = 0.67\\text{ cars}, \\; 1\\text{ car} = 1.50\\text{m cloth}. \\quad \\text{Zim: } 1\\text{m cloth} = \\frac{250}{50} = 5\\text{ cars}, \\; 1\\text{ car} = 0.20\\text{m cloth}.",
    "options": [
      {
        "text": "SA has comparative advantage in cloth (0.67 < 5 cars) and Zimbabwe has comparative advantage in cars (0.20 < 1.50m cloth).",
        "isCorrect": true,
        "refutation": "Correct! SA sacrifices only 0.67 cars per metre of cloth (vs 5 cars in Zimbabwe), while Zimbabwe sacrifices only 0.20m of cloth per car (vs 1.50m in SA)."
      },
      {
        "text": "SA has comparative advantage in both cloth and cars because 300 + 200 = 500 total units exceeds Zimbabwe's 300 units.",
        "isCorrect": false,
        "refutation": "A country cannot hold a comparative advantage in both goods because opportunity costs are reciprocals of each other (0.67 vs 5 and 1.50 vs 0.20)."
      },
      {
        "text": "SA has comparative advantage in cars (1.50 > 0.20m cloth) and Zimbabwe has comparative advantage in cloth (5 > 0.67 cars).",
        "isCorrect": false,
        "refutation": "Comparative advantage belongs to the producer with the LOWER opportunity cost, not the higher opportunity cost."
      },
      {
        "text": "Zimbabwe has absolute and comparative advantage in cloth because 50 metres requires fewer machines than 300 metres.",
        "isCorrect": false,
        "refutation": "South Africa produces more cloth per worker (300m > 50m, absolute advantage) and at a lower opportunity cost (0.67 < 5 cars, comparative advantage)."
      }
    ]
  },
  {
    "id": "q_ch17_03",
    "chapter": "ch17",
    "source": "NWU Chapter 17 Tutorial & Revision Questions (Simple Keynesian Saving & Multiplier)",
    "citation": "Mohr 6e, §17.4–17.7, pp. 361–376",
    "difficulty": "Medium",
    "stem": "In a simple closed economy without a government, the saving function is given by S = -120 + 0.25Y and autonomous investment is I = 80. Determine the consumption function C(Y), the simple multiplier (α), equilibrium income (Y0), and what happens if households attempt to save more by shifting autonomous saving upward (the Paradox of Thrift).",
    "derivation": "S = -\\bar{C} + (1-c)Y = -120 + 0.25Y \\implies \\bar{C} = 120, \\; c = 0.75. \\quad \\alpha = \\frac{1}{0.25} = 4.0. \\quad Y_0 = 4(120 + 80) = 800.",
    "options": [
      {
        "text": "C = 120 + 0.75Y, α = 4.0, Y0 = 800; higher autonomous saving reduces equilibrium income while leaving total S = I = 80.",
        "isCorrect": true,
        "refutation": "Correct! Since S = -C̄ + (1-c)Y, C = 120 + 0.75Y, α = 1/0.25 = 4, Y0 = 4(200) = 800, and the Paradox of Thrift lowers Y0 without raising equilibrium saving (which remains equal to I = 80)."
      },
      {
        "text": "C = -120 + 0.25Y, α = 1.33, Y0 = 266.7; higher autonomous saving increases equilibrium income and raises total S above 80.",
        "isCorrect": false,
        "refutation": "Autonomous consumption C̄ is positive (+120) and c = 1 - s = 0.75, giving α = 4.0 and Y0 = 800; saving more reduces aggregate spending and income."
      },
      {
        "text": "C = 120 + 0.75Y, α = 4.0, Y0 = 480; higher autonomous saving shifts the aggregate spending curve upward and raises Y0.",
        "isCorrect": false,
        "refutation": "Equilibrium income must include autonomous investment: Y0 = 4 × (120 + 80) = 800 (not 4 × 120 = 480), and higher saving shifts consumption downward."
      },
      {
        "text": "C = 200 + 0.25Y, α = 4.0, Y0 = 800; higher autonomous saving increases autonomous investment I by an equal amount.",
        "isCorrect": false,
        "refutation": "The marginal propensity to consume is c = 1 - 0.25 = 0.75 (not 0.25), and autonomous investment I = 80 is independent of household saving decisions."
      }
    ]
  },
  {
    "id": "q_ch17_04",
    "chapter": "ch17",
    "source": "NWU Past Paper Nov 2018 Section B Q3.2 (Say's Law vs Keynesian Model)",
    "citation": "Mohr 6e, §17.1–17.2, pp. 354–357",
    "difficulty": "Easy",
    "stem": "Compare Classical (Say's Law) theory and Keynesian theory regarding the relationship between total production (Y) and aggregate spending (A): which statement accurately contrasts the two frameworks and interprets points off the 45-degree line?",
    "derivation": "\\text{Say's Law: } Y \\implies A \\text{ (supply creates its own demand)}. \\quad \\text{Keynes: } A \\implies Y \\text{ (spending determines production)}.",
    "options": [
      {
        "text": "Say's Law holds that supply creates demand (Y → A), whereas Keynes holds that aggregate spending drives output (A → Y).",
        "isCorrect": true,
        "refutation": "Correct! Classical Say's Law states that production automatically generates sufficient demand, whereas in the Keynesian model aggregate spending determines national production."
      },
      {
        "text": "Say's Law holds that spending creates supply (A → Y), whereas Keynes holds that supply always creates demand (Y → A).",
        "isCorrect": false,
        "refutation": "This reverses the causal direction of both theories: Say's Law runs from supply to demand (Y → A), while Keynes runs from spending to output (A → Y)."
      },
      {
        "text": "Both Say's Law and Keynes guarantee automatic full employment whenever the aggregate spending line intersects the 45° line.",
        "isCorrect": false,
        "refutation": "In the Keynesian model, equilibrium on the 45° line (A = Y) can occur well below full employment (recessionary unemployment) or above it."
      },
      {
        "text": "When the aggregate spending line lies below the 45° line (A < Y), unplanned inventories fall and firms expand output.",
        "isCorrect": false,
        "refutation": "When A < Y (to the right of equilibrium), production exceeds spending, causing unplanned inventory accumulation (ΔInv > 0) so firms cut output."
      }
    ]
  },
  {
    "id": "q_ch18_05",
    "chapter": "ch18",
    "source": "NWU Past Paper Nov 2019 Section B Q5.3 & Dec 2023 Section B Q4.1 (G vs t in Keynesian Model)",
    "citation": "Mohr 6e, §18.1, pp. 381–387",
    "difficulty": "Easy",
    "stem": "In the Keynesian model with a government sector, compare how an increase in government spending (G) versus an increase in the proportional tax rate (t) affects (i) the circular flow (injection vs leakage), (ii) the size of the multiplier (α), and (iii) the equilibrium level of income (Ye).",
    "derivation": "G: \\text{Autonomous Injection } (\\alpha \\text{ unchanged}, \\; Y_e \\uparrow). \\quad t: \\text{Induced Leakage } (\\alpha = \\frac{1}{1 - c(1-t) + m} \\downarrow, \\; Y_e \\downarrow).",
    "options": [
      {
        "text": "G is an injection that leaves α unchanged and raises Ye; t is a leakage that reduces α (flattens A) and lowers Ye.",
        "isCorrect": true,
        "refutation": "Correct! Government spending G is purely autonomous (shifting A parallel upward without changing α), whereas the tax rate t reduces the slope c(1-t) and lowers both α and Ye."
      },
      {
        "text": "G is an injection that increases the multiplier α and raises Ye; t is a leakage that leaves α unchanged and lowers Ye.",
        "isCorrect": false,
        "refutation": "As tested in Dec 2023 Section B Q4.1, G does NOT affect the size of the multiplier α because G is autonomous (independent of Y)."
      },
      {
        "text": "G is a leakage that reduces the multiplier α and lowers Ye; t is an injection that increases α and raises Ye.",
        "isCorrect": false,
        "refutation": "Government expenditure G is an injection into the circular flow that raises Ye, whereas taxation T = tY is a withdrawal (leakage) that lowers Ye."
      },
      {
        "text": "Both G and t change the vertical intercept of the aggregate spending curve without changing its slope or multiplier.",
        "isCorrect": false,
        "refutation": "While G shifts the vertical intercept, a proportional tax rate t = T/Y changes the induced slope c(1-t) and rotates the spending line."
      }
    ]
  },
  {
    "id": "q_ch19_03",
    "chapter": "ch19",
    "source": "NWU Past Paper Dec 2022 Section B Q1 & Ch 19 Revision Questions (Monetarists vs Keynesians & Policy Lags)",
    "citation": "Mohr 6e, §19.2–19.3, pp. 421–428",
    "difficulty": "Medium",
    "stem": "In macroeconomic policy debates (Chapter 19), how do Monetarists and Keynesians differ regarding the stability of the private sector, and how do the implementation and impact lags compare between fiscal policy and monetary policy?",
    "derivation": "\\text{Monetarists: Private sector inherently stable; avoid activist fine-tuning}. \\quad \\text{Fiscal: Long decision/implementation lag, short impact lag}.",
    "options": [
      {
        "text": "Monetarists view the private economy as stable; fiscal policy has a longer decision lag while monetary policy has a longer impact lag.",
        "isCorrect": true,
        "refutation": "Correct! Monetarists believe markets are self-correcting and activist policy is destabilising; fiscal changes require parliamentary budget approval (long decision lag), while repo rate changes take 12–24 months to work (long impact lag)."
      },
      {
        "text": "Monetarists view the private economy as unstable; monetary policy has a longer decision lag while fiscal policy has a longer impact lag.",
        "isCorrect": false,
        "refutation": "Keynesians (not Monetarists) view the private economy as inherently unstable, and the SARB MPC can change the repo rate rapidly (short decision/implementation lag)."
      },
      {
        "text": "Both schools favour discretionary fiscal fine-tuning; recognition lag differs sharply between fiscal and monetary authorities.",
        "isCorrect": false,
        "refutation": "Monetarists strongly oppose discretionary fine-tuning in favour of stable rules, and the recognition lag (waiting for quarterly GDP/CPI data) is the same for both."
      },
      {
        "text": "Keynesians argue that the AS curve is always vertical; monetary policy affects real output immediately with zero impact lag.",
        "isCorrect": false,
        "refutation": "Classical/Monetarist economists emphasise a vertical long-run AS curve, and monetary transmission works through investment and exchange rates with a long 12–24 month impact lag."
      }
    ]
  },
  {
    "id": "q_ch19_04",
    "chapter": "ch19",
    "source": "NWU Chapter 19 Tutorial Questions (Monetary Transmission Mechanism Channels)",
    "citation": "Mohr 6e, §19.2, pp. 416–420",
    "difficulty": "Medium",
    "stem": "Trace the exchange-rate channel and asset-price (wealth) channel of the monetary transmission mechanism when the SARB Monetary Policy Committee (MPC) cuts the repo rate by 100 basis points:",
    "derivation": "\\Delta i < 0 \\implies \\text{Capital outflows} \\implies \\text{Rand depreciates} \\implies NX \\uparrow \\implies AD \\uparrow; \\quad \\Delta i < 0 \\implies P_{\\text{bonds/equities}} \\uparrow \\implies C \\uparrow.",
    "options": [
      {
        "text": "Lower interest rates trigger capital outflows that depreciate the Rand (boosting NX) and raise bond/equity prices (boosting C).",
        "isCorrect": true,
        "refutation": "Correct! Lower domestic yields reduce foreign capital inflows, depreciating the Rand (raising X - Z), while inverse bond pricing and discounted cash flows raise asset wealth and consumption."
      },
      {
        "text": "Lower interest rates attract foreign capital inflows that appreciate the Rand (boosting NX) and lower domestic property prices.",
        "isCorrect": false,
        "refutation": "Lower interest rates make domestic bonds less attractive relative to foreign yields (causing outflows and Rand depreciation), and lower discount rates raise property and bond prices."
      },
      {
        "text": "Lower interest rates shift the aggregate supply curve leftward while reducing both autonomous investment and net exports.",
        "isCorrect": false,
        "refutation": "An interest rate cut is an expansionary demand-side measure that raises investment (I) and net exports (NX), shifting AD rightward."
      },
      {
        "text": "Lower interest rates increase the statutory tax rate t and reduce the open-economy Keynesian multiplier via fiscal drag.",
        "isCorrect": false,
        "refutation": "Repo rate adjustments are monetary policy actions by the SARB and do not alter statutory tax brackets or the marginal tax rate t."
      }
    ]
  },
  {
    "id": "q_ch20_05",
    "chapter": "ch20",
    "source": "NWU Past Paper Nov 2018 Section C Q3 & Nov 2019 Section C Q3 (SARB Deflator Inflation)",
    "citation": "Mohr 6e, §20.2, pp. 441–443",
    "difficulty": "Medium",
    "stem": "According to SARB data in the 2018 exam paper, South Africa's Nominal GDP was R3 023 659 million in 2011 and R3 253 852 million in 2012, while Real GDP (at constant prices) was R1 975 095 million in 2011 and R2 015 449 million in 2012. Calculate the GDP Deflator for 2011 and 2012 and the resulting 2012 inflation rate.",
    "derivation": "\\text{Defl}_{2011} = \\frac{3\\,023\\,659}{1\\,975\\,095}\\times 100 = 153.09; \\quad \\text{Defl}_{2012} = \\frac{3\\,253\\,852}{2\\,015\\,449}\\times 100 = 161.45. \\\\ \\pi_{2012} = \\frac{161.45 - 153.09}{153.09}\\times 100 = 5.46\\%.",
    "options": [
      {
        "text": "The 2011 GDP Deflator is 153.09, the 2012 GDP Deflator is 161.45, and the 2012 inflation rate is 5.46%.",
        "isCorrect": true,
        "refutation": "Correct! Deflator 2011 = 153.09 and Deflator 2012 = 161.45; the percentage change is (161.45 - 153.09) / 153.09 × 100 = 5.46%."
      },
      {
        "text": "The 2011 GDP Deflator is 153.09, the 2012 GDP Deflator is 161.45, and the 2012 inflation rate is 8.36%.",
        "isCorrect": false,
        "refutation": "8.36% is the simple index-point difference (161.45 - 153.09) without dividing by the 2011 base deflator of 153.09."
      },
      {
        "text": "The 2011 GDP Deflator is 65.32, the 2012 GDP Deflator is 61.94, and the 2012 inflation rate is -5.17%.",
        "isCorrect": false,
        "refutation": "65.32 and 61.94 invert the GDP Deflator formula by dividing Real GDP by Nominal GDP instead of Nominal GDP by Real GDP."
      },
      {
        "text": "The 2011 GDP Deflator is 150.00, the 2012 GDP Deflator is 161.45, and the 2012 inflation rate is 7.61%.",
        "isCorrect": false,
        "refutation": "7.61% is the growth rate of Nominal GDP ((3 253 852 - 3 023 659) / 3 023 659), which combines real output growth (2.04%) and inflation (5.46%)."
      }
    ]
  },
  {
    "id": "q_ch21_05",
    "chapter": "ch21",
    "source": "NWU Past Paper Dec 2022 Section C Q3 (Bureau of Labor Statistics 2020 & 2021)",
    "citation": "Mohr 6e, §21.1, pp. 468–471",
    "difficulty": "Easy",
    "stem": "The Bureau of Labor Statistics reported the following country data: in 2020, 14 million people were employed and 2 million were strictly unemployed; in 2021, 15 million people were employed and 2.5 million were strictly unemployed. Calculate the total labour force in 2020 and 2021, and the official unemployment rate in 2021.",
    "derivation": "LF_{2020} = 14 + 2 = 16.0\\text{m}; \\quad LF_{2021} = 15 + 2.5 = 17.5\\text{m}. \\quad u_{2021} = \\frac{2.5}{17.5} \\times 100 = 14.29\\%.",
    "options": [
      {
        "text": "The labour force was 16.0 million in 2020 and 17.5 million in 2021, and the 2021 unemployment rate was 14.29%.",
        "isCorrect": true,
        "refutation": "Correct! Adding employed and unemployed yields LF = 16.0m in 2020 and 17.5m in 2021, so u_2021 = 2.5 / 17.5 × 100 = 14.29%."
      },
      {
        "text": "The labour force was 14.0 million in 2020 and 15.0 million in 2021, and the 2021 unemployment rate was 16.67%.",
        "isCorrect": false,
        "refutation": "The labour force must include both employed and unemployed persons (15m + 2.5m = 17.5m); dividing 2.5m by 15m employed gives 16.67%."
      },
      {
        "text": "The labour force was 16.0 million in 2020 and 17.5 million in 2021, and the 2021 unemployment rate was 12.50%.",
        "isCorrect": false,
        "refutation": "12.50% is the 2020 unemployment rate (2.0m / 16.0m = 12.50%), whereas in 2021 the rate rose to 2.5m / 17.5m = 14.29%."
      },
      {
        "text": "The labour force was 12.0 million in 2020 and 12.5 million in 2021, and the 2021 unemployment rate was 20.00%.",
        "isCorrect": false,
        "refutation": "This subtracts the unemployed from the employed (15m - 2.5m = 12.5m) instead of summing them to find the total labour force (17.5m)."
      }
    ]
  },
  {
    "id": "q_ch22_03",
    "chapter": "ch22",
    "source": "NWU Past Paper Dec 2023 Section B Q8.1 & Ch 22 Tutorial (Capital Deepening & Rule of 70)",
    "citation": "Mohr 6e, §22.1 & §22.3, pp. 486–498",
    "difficulty": "Medium",
    "stem": "Distinguish between 'capital widening' and 'capital deepening' in the context of long-run economic growth, and apply the Rule of 70 to determine how long it takes for a nation's real GDP per capita to double if it grows steadily at 3.5% per year.",
    "derivation": "\\text{Capital Widening: } \\frac{\\Delta K}{K} = \\frac{\\Delta L}{L} \\implies \\frac{K}{L} \\text{ constant}. \\quad \\text{Capital Deepening: } \\frac{K}{L} \\uparrow. \\quad T_{\\text{double}} \\approx \\frac{70}{3.5} = 20\\text{ years}.",
    "options": [
      {
        "text": "Capital widening keeps the K/L ratio constant while capital deepening raises K/L; doubling takes 20 years.",
        "isCorrect": true,
        "refutation": "Correct! Capital widening expands capital in proportion to labour growth (constant K/L), capital deepening increases capital per worker (higher K/L), and 70 / 3.5 = 20 years."
      },
      {
        "text": "Capital widening raises the K/L ratio while capital deepening keeps K/L constant; doubling takes 20 years.",
        "isCorrect": false,
        "refutation": "This reverses the two definitions: equipping a growing workforce with the same capital per worker is capital widening, while raising capital per worker is capital deepening."
      },
      {
        "text": "Capital widening keeps the K/L ratio constant while capital deepening raises K/L; doubling takes 28.6 years.",
        "isCorrect": false,
        "refutation": "28.6 years divides 100 by 3.5; because growth compounds annually, the Rule of 70 (70 / 3.5 = 20 years) gives the doubling time."
      },
      {
        "text": "Capital widening replaces workers with imports while capital deepening cuts interest rates; doubling takes 14 years.",
        "isCorrect": false,
        "refutation": "Capital widening and deepening refer to the physical capital-to-labour ratio (K/L) in production, and 70 / 3.5 equals 20 years (not 14 years)."
      }
    ]
  },
  {
    "id": "q_ch22_04",
    "chapter": "ch22",
    "source": "NWU Chapter 22 Revision & SARB Business Cycle Indicators",
    "citation": "Mohr 6e, §22.2, pp. 490–494",
    "difficulty": "Easy",
    "stem": "When economists at the South African Reserve Bank (SARB) analyse business cycle turning points, how do they classify (1) new passenger vehicle sales and building plans passed, (2) industrial production and retail sales, and (3) employment in the non-agricultural sector and hours worked in construction?",
    "derivation": "\\text{Building plans / JSE / New car sales} \\to \\text{Leading}; \\quad \\text{Industrial output} \\to \\text{Coincident}; \\quad \\text{Formal employment} \\to \\text{Lagging}.",
    "options": [
      {
        "text": "(1) Leading indicators (peak before the cycle), (2) Coincident indicators, and (3) Lagging indicators (turn after the cycle).",
        "isCorrect": true,
        "refutation": "Correct! Building plans and new vehicle sales lead economic turning points, industrial production moves coincidentally with the cycle, and formal employment lags behind turning points."
      },
      {
        "text": "(1) Lagging indicators (turn after the cycle), (2) Leading indicators, and (3) Coincident indicators (move with the cycle).",
        "isCorrect": false,
        "refutation": "Building plans passed must occur months before construction activity and therefore lead (not lag) the aggregate business cycle."
      },
      {
        "text": "(1) Coincident indicators, (2) Lagging indicators, and (3) Leading indicators (peak before the aggregate business cycle).",
        "isCorrect": false,
        "refutation": "Firms only hire or retrench permanent staff after an upswing or recession is well underway, making formal employment a lagging (not leading) indicator."
      },
      {
        "text": "(1) Structural indicators, (2) Frictional indicators, and (3) Seasonal indicators measured quarterly by Stats SA.",
        "isCorrect": false,
        "refutation": "Structural, frictional, and seasonal are classifications of unemployment (Chapter 21), whereas business cycle indicators are Leading, Coincident, and Lagging."
      }
    ]
  }
],
  pastPapers: [
  {
    "id": "pp_2024_pc_vc",
    "year": 2024,
    "session": "Oct/Dec 2024 — Paper 1 (1st Opportunity)",
    "campuses": [
      "Potchefstroom (PC)",
      "Vanderbijlpark (VC)",
      "Mahikeng (MC)"
    ],
    "examiners": "Miss K. Sere (MC), Prof W. Krugell (PC), Mrs P. Mdluli-Maziya (VC)",
    "moderator": "Prof I. Choga (MC)",
    "durationMinutes": 180,
    "totalMarks": 100,
    "questionIds": [
      "q_ch13_06",
      "q_ch13_07",
      "q_ch20_02",
      "q_ch20_03",
      "q_ch21_01",
      "q_ch14_05",
      "q_ch14_06",
      "q_ch15_03",
      "q_ch16_04",
      "q_ch18_01",
      "q_ch14_04"
    ],
    "writtenSections": [
      {
        "number": "Section B — Q1 (4 marks)",
        "prompt": "Define the following concepts: (1.1) Fiscal policy, (1.2) Autonomous consumption, (1.3) Comparative advantage, (1.4) Unit of account.",
        "memo": "1.1 Fiscal policy: Government's policy in respect of the level and composition of government spending, taxation, and borrowing to influence economic activity. 1.2 Autonomous consumption (C̄): That part of consumption expenditure that is independent of the level of income (consumption when Y = 0). 1.3 Comparative advantage: The ability of a country to produce a good at a lower opportunity cost (sacrificing fewer units of the alternative good) than another country. 1.4 Unit of account: An agreed standard measure for stating and comparing the prices of goods and services."
      },
      {
        "number": "Section B — Q3 (5 marks)",
        "prompt": "(3.1) Identify cost-push inflation from an leftward AS shift diagram and name any three causes (2). (3.2) In tabular form, provide three differences between CPI and PPI (3).",
        "memo": "3.1 Cost-push inflation (AS shifts left/up, raising P and lowering Y). Causes: (1) Increases in wages/salaries exceeding productivity, (2) Cost of imported capital and intermediate goods, (3) Increases in profit margins, (4) Decreased productivity, (5) Natural disasters. 3.2 CPI vs PPI: (1) CPI measures cost of living vs PPI measures cost of production; (2) CPI basket consists of consumer goods and services vs PPI covers goods only (excludes services); (3) CPI includes VAT vs PPI excludes VAT; (4) CPI excludes capital & intermediate goods vs PPI includes capital & intermediate goods."
      },
      {
        "number": "Section B — Q4 & Q5 (9 marks)",
        "prompt": "(4.1) Classify unemployment: Recent graduate searching (Frictional); Factory workers displaced by automation (Structural); Retail workers laid off in recession (Cyclical); Agricultural workers off-season (Seasonal). (5.1–5.3) Classify Classical vs Keynesian business cycle views and explain A→B (Expansion) and B→C (Contraction).",
        "memo": "4.2 Inflows to unemployment pool: New entrants, re-entrants, job losers (retrenched), voluntary quitters. Outflows: Finding a job, withdrawing from the labour force (retiring/discouraged). 5.1 Inherently stable economy with external shocks = Classical view. 5.2 Endogenous instability inherent to modern economies = Keynesian view. 5.3 A to B (Trough to Peak) = Upswing/Expansion phase (rising real GDP and employment); B to C (Peak to Trough) = Downswing/Contraction phase (falling real GDP)."
      },
      {
        "number": "Section C — Q1 to Q8 (30 marks)",
        "prompt": "Full quantitative section: Q1 SA 2020 National Accounts (GDPfc & GNPmp); Q2 Trevor Noah / Bonang Matheba Charity Gala Value-Added & Income Table; Q3 Pizza/Soda/Ice Cream Nominal & Real GDP, Deflator & Inflation; Q4 Elaria Broad Unemployment Rate; Q5 M3 Money Supply; Q6 SARS 2024/25 Tax Table (R825 000); Q7 Japan vs Portugal Wagyu Opportunity Cost; Q8 Portofino Keynesian Multiplier & Equilibrium.",
        "memo": "Q1.1 GDPfc = 1 530 580 - 205 562 + 11 433 = R1 336 451m. Q1.2 GNPmp = 1 530 580 + 1 500 - 1 800 = R1 530 280m. Q2.1 Celebration Creations VA = R4 345 200; Chef Siba Sales = R10 962 000, VA = R9 678 240, Profit = R9 469 440; Woolworths VA = R1 283 760, Profit = R1 101 960; Total GDP = R15 307 200. Q3.1 2021 Nom = Real = R860; 2022 Nom = R1 419, Real = R1 290; Q3.2 Defl 2021 = 100, Defl 2022 = 110; Q3.3 Inflation = 10%. Q4.1 Broad U = 3 250 000 / 10 000 000 = 32.50%. Q5 M1 = R35m, M2 = R160m, M3 = R450m. Q6.1 Tax = R238 427 before rebate, R221 192 after primary rebate; Q6.2 MTR = 39%. Q7.1 Japan = 2 kg Seafood, Portugal = 1.36 kg Seafood. Q8.1 α = 2.17; Q8.2 Y0 = 1 584.10 (or 1 586.96)."
      }
    ]
  },
  {
    "id": "pp_2023_mc_pc",
    "year": 2023,
    "session": "Nov/Dec 2023 — Paper 1 (1st Opportunity)",
    "campuses": [
      "Mahikeng (MC)",
      "Potchefstroom (PC)",
      "Vanderbijlpark (VC)"
    ],
    "examiners": "Mr D.K. Magubane (VC), Ms M. Aucamp (PC), Ms C. Nthebe (MC)",
    "moderator": "Dr P. Mncayi (VC)",
    "durationMinutes": 180,
    "totalMarks": 100,
    "questionIds": [
      "q_ch13_03",
      "q_ch21_02",
      "q_ch20_01",
      "q_ch15_05",
      "q_ch16_02",
      "q_ch18_03",
      "q_ch18_05",
      "q_ch16_03",
      "q_ch14_03",
      "q_ch22_03"
    ],
    "writtenSections": [
      {
        "number": "Section B — Q1 to Q4 (10 marks)",
        "prompt": "(1.1) Absolute vs Comparative advantage (2). (2.1) Two reasons for Rand appreciation against USD (2). (3.1–3.3) Define, describe 3 characteristics, and graph the consumption function (5). (4.1) Does government spending affect the multiplier? (1).",
        "memo": "1.1 Absolute advantage = producing more output with same inputs; Comparative advantage = producing at a lower opportunity cost. 2.1 Higher SA export demand, higher domestic interest rates attracting capital inflows, lower SA inflation relative to US, or rise in gold/mineral prices. 3.1–3.3 Consumption function shows relationship between C and Y: (1) C > 0 at Y = 0 (C̄ > 0), (2) C rises as Y rises (c > 0), (3) ΔC < ΔY (0 < c < 1). 4.1 No: G is purely autonomous (shifts A upward), whereas α = 1/[1 - c(1-t) + m] depends only on c, t, and m."
      },
      {
        "number": "Section B — Q5 to Q9 (20 marks)",
        "prompt": "(5.1) Effect of a decline in demand for money on money supply with no independent supply curve (3.5). (6.1–6.2) 4 components of SA public sector & Allocation, Distribution, Stabilisation functions (3.5). (7.1–7.2) Demand-pull inflation diagram & contractionary policy (3). (8.1–8.2) Define CPI, GDE, Capital widening, and 3 inequality measures (6). (9.1–9.4) Classify 4 unemployment scenarios (4).",
        "memo": "5.1 Leftward shift of L along the horizontal repo-linked interest rate line i0 reduces the equilibrium quantity of money M. 6.1 Central government, Provincial government, Local government/municipalities, Public corporations (SOEs). 6.2 Allocation (correcting market failure), Distribution (progressive tax & grants), Stabilisation (monetary/fiscal smoothing of cycles). 8.2 Lorenz curve, Gini coefficient, Quantile ratio. 9.1 Autoworker laid off due to sales drop = Cyclical; 9.2 Migrant harvest worker = Seasonal; 9.3 Real estate agent moving JHB to CPT = Frictional; 9.4 Geologist laid off due to union wage hike = Structural."
      },
      {
        "number": "Section C — Q1 to Q7 (30 marks)",
        "prompt": "Q1 GDEmp & NI from GDPfc = R293 250; Q2 Real GDP 2021 & 2022 (Clothes, Food, Drink) & Growth rate; Q3 Tigeria Labour Force & Broad Unemployment Rate; Q4 2023 GDP Deflator Inflation; Q5 Bella Mbonambi Tax (R315 850); Q6 USA vs Australia Surfboards & Sunscreen; Q7 SA Keynesian Model with Basic Income Grant.",
        "memo": "Q1.1 GDPmp = 293 250 + 16 000 - 43 300 = R265 950; GDEmp = 265 950 - 20 000 + 10 000 = R255 950. Q1.2 D = 0.08(40 000) = R3 200; NI = 293 250 - 3 200 + 35 200 - 125 600 = R199 650. Q2.1 Real GDP 2021 = R36 385; Real GDP 2022 = R37 755; Q2.2 Growth = 3.77%. Q3.1 Strict LF = 27.5m, Broad LF = 30.0m; Q3.2 Broad U = 38.00%. Q4.1 Deflator 2022 = 127.36, Deflator 2023 = 128.53, Inflation = 0.92%. Q5.1 Net Tax = R47 751.50 (R58 651.50 before rebate); Q5.2 Effective rate = 15.12%. Q6.1 Australia (6 < 8 bottles); Q6.2 AUS$127.50. Q7.1 α = 1.60; Q7.2 Y0 = R104m; Q7.3 Y_new = 69 / 0.675 = R102.22m; Q7.4 T_new = R25.56m."
      }
    ]
  },
  {
    "id": "pp_2022_mc_pc_vc",
    "year": 2022,
    "session": "Nov/Dec 2022 — Paper 1 (1st Opportunity)",
    "campuses": [
      "Mahikeng (MC)",
      "Potchefstroom (PC)",
      "Vanderbijlpark (VC)"
    ],
    "examiners": "Ms C. Nthebe (MC), Dr A. Van Wyk (PC), Mr J. de Jongh (VC)",
    "moderator": "Dr P. Mncayi (VC)",
    "durationMinutes": 180,
    "totalMarks": 100,
    "questionIds": [
      "q_ch13_04",
      "q_ch13_05",
      "q_ch13_09",
      "q_ch13_10",
      "q_ch20_01",
      "q_ch15_02",
      "q_ch18_02",
      "q_ch21_03",
      "q_ch21_05",
      "q_ch15_04",
      "q_ch19_01",
      "q_ch19_03"
    ],
    "writtenSections": [
      {
        "number": "Section B — Q1 to Q11 (30 marks)",
        "prompt": "Q1 Monetarist vs Keynesian views (2); Q2 Keynesian policy in cyclical downswing (1); Q3 Most important macro objective (2); Q4 GDP Income vs Production method if minimum wage rises 8% (1); Q5 Yetunde, Cipriano, Anouska unemployment table (6); Q6 Three drivers of economic growth (3); Q7 Highveld air pollution negative externality diagram & intervention (5); Q8 SARB open-market operations (2); Q9 Investment multiplier diagram (3); Q10 Income vs Disposable income (2); Q11 Consumption function characteristics (3).",
        "memo": "Q2 Expansionary monetary (cut repo rate) and fiscal policy (raise G, cut T). Q3 Economic growth (sustainable job creation depends on expanding real output) or Price stability. Q4 Zero difference (accounting identity). Q5 Yetunde: Seasonal; Cipriano: Cyclical (expansionary demand policy); Anouska: Structural (education/retraining supply-side policy). Q7.2 MSC above MPC, free market Q1 > socially optimal Q2. Q8 SARB buys government bonds on the open market, injecting liquidity into banks and expanding bank reserves/deposits."
      },
      {
        "number": "Section C — Q1 to Q7 (30 marks)",
        "prompt": "Q1 National Accounts (GDPfc = 768 660, GDEmp = 815 760); Q2 Hogwarts 2020 & 2021 Nominal & Real GDP; Q3 Bureau of Labor Statistics 2020 & 2021 LF & Unemployment Rate; Q4 Fish, Pork, Beef 2020 Nominal/Real GDP & Deflator; Q5 Wakanda 2021 Inflation Rate; Q6 Thabiso Lebotse Tax (R32 000/month); Q7 Open Keynesian Economy (G=400, X=250, Z=50+0.15Y, C̄=150, I=300, c=0.75, t=0.25).",
        "memo": "Q1.1 GDPfc = 768 660; Q1.2 GDEmp = 815 760. Q2.1 Nom 2020 = R200, Nom 2021 = R250; Q2.2 Growth = 25%; Q2.3 Real 2021 = R225. Q3.1 LF 2020 = 16.0m, LF 2021 = 17.5m; Q3.2 U_2021 = 2.5m / 17.5m = 14.29%. Q4.1 Nom 2020 = $13 875, Real 2020 (2018 prices) = $11 250; Q4.2 Deflator 2020 = 123.3. Q5.1 Inflation 2021 = 0.92%. Q6.1 Tax = R71 530 after primary rebate (R86 488 gross); Q6.2 Effective rate = 18.63%. Q7.1 α = 1.70; Q7.2 Y0 = R1 785 (R1 787.23 exact); Q7.4 T = R446.81 (or R446.25); Q7.5 Y_new = R1 700."
      }
    ]
  },
  {
    "id": "pp_2019_mc_pc_vc",
    "year": 2019,
    "session": "Oct/Dec 2019 — Paper 1 (1st Opportunity)",
    "campuses": [
      "Mahikeng (MC)",
      "Potchefstroom (PC)",
      "Vanderbijlpark (VC)"
    ],
    "examiners": "Dr C. Bezuidenhout (MC), Ms P. Mncayi (VTC), Ms H. Maruping (MC)",
    "moderator": "Mr J. de Jongh (VTC)",
    "durationMinutes": 180,
    "totalMarks": 100,
    "questionIds": [
      "q_ch18_01",
      "q_ch16_01",
      "q_ch13_04",
      "q_ch14_03",
      "q_ch15_06",
      "q_ch18_05",
      "q_ch22_02",
      "q_ch21_04"
    ],
    "writtenSections": [
      {
        "number": "Section B — Q1 to Q5 (30 marks)",
        "prompt": "Q1 Define Fiscal policy, GDP, Inflation, Balance of Payments, Monetary policy (5); Q2 Per capita GDP welfare comparison, SARB 50 bps repo cut endogenous money diagram, SARB 3–6% inflation target (5); Q3 Monetary/fiscal policies for unemployment, 2 inflows to unemployment pool, Phillips curve diagram (5); Q4 Business cycle phases diagram, negative externalities diagram, 4 trade policies to curb imports (7); Q5 Consumption function, 4 components of aggregate expenditure, Injection/Leakage table for G and t (8).",
        "memo": "Q2.3 SARB inflation target range is 3% to 6%. Q4.3 Trade policies to curb imports: Import tariffs, Import quotas, Subsidies to local producers, Non-tariff barriers, Exchange controls, Exchange rate policy. Q5.3 Variable G: Injection, α remains the same, Ye increases; Variable t: Leakage, α decreases, Ye decreases."
      },
      {
        "number": "Section C — Q1 to Q6 (30 marks)",
        "prompt": "Q1 Portofino Keynesian Model (C=100+0.8Y, T=0.2Y, I=100, G=250, X=300, Z=20+0.1Y) with ΔI = +150; Q2 Spain vs Greece Olives & Tobacco opportunity cost; Q3 2017 Inflation rate from GDP deflator; Q4 2017/18 vs 2018/19 Tax Table for R375 000; Q5 Coffee farmer John, Coffee Roasters & Starbucks Value-Added / Income / Expenditure GDP; Q6 Q1 2019 National Accounts.",
        "memo": "Q1.1.1 Y0 = 1 584.10 (or 1 586.96); Q1.1.3 α = 2.17; Q1.1.4 Y_new = 1 584.10 + 2.17(150) = 1 909.60. Q2.1 Tobacco opp cost: Spain = 0.67 olives (comp adv), Greece = 1 olive; Q2.2 Olives opp cost: Spain = 1.5 tobacco, Greece = 1 tobacco (comp adv). Q3 Defl 2016 = 126.11, Defl 2017 = 127.30, Inflation 2017 = 0.94%. Q4.1 Tax 2017/18 = R86 232.60 (23.00%), Tax 2018/19 = R85 289.50 (22.74%). Q5 John VA = R1 500, Coffee Roasters VA = R4 500, Starbucks VA = R5 000; Total = R11 000 (SA domestic VA = R9 500). Q6.1 GDPfc = 768 660; Q6.2 GDEmp = 815 760."
      }
    ]
  },
  {
    "id": "pp_2018_mc_pc_vc",
    "year": 2018,
    "session": "Oct/Nov 2018 — Paper 1 (1st Opportunity)",
    "campuses": [
      "Mahikeng (MC)",
      "Potchefstroom (PC)",
      "Vanderbijlpark (VTC)"
    ],
    "examiners": "Dr A. Fourie (PC), Miss P. Mncayi (VTC), Prof I. Choga (MC)",
    "moderator": "Mr J. de Jongh (VTC)",
    "durationMinutes": 180,
    "totalMarks": 100,
    "questionIds": [
      "q_ch13_08",
      "q_ch13_09",
      "q_ch18_04",
      "q_ch16_05",
      "q_ch17_01",
      "q_ch17_04",
      "q_ch14_04",
      "q_ch16_03",
      "q_ch20_05",
      "q_ch22_01"
    ],
    "writtenSections": [
      {
        "number": "Section B — Q1 to Q7 (30 marks)",
        "prompt": "Q1 Define Monetary policy, Privatisation, Comparative advantage (3); Q2 Two macro objectives & Lorenz curve / Gini 0.67 interpretation (3); Q3 2018 FIFA World Cup Russian infrastructure spending Keynesian diagram, 4 reasons for Rand appreciation, impact on export/import prices, & True/False on Say's Law and 45° line (8); Q4 Demand-pull inflation diagram & contractionary measures (3); Q5 Interest rate hike 7% to 8% money diagram, 2 functions of money, Ubuntu Production money as factor of production, 4 components of public sector (4); Q6 Rustenburg platinum miner (Structural) vs Sophia recession layoff (Cyclical) & policies (2); Q7 Classical vs Keynesian cycle theories & Peak-to-Trough downswing (3).",
        "memo": "Q2.2.1 Diagonal 0B = Line of perfect equality; Q2.2.2 Area 0AB = Area of inequality; Q2.2.3 Gini of 0.67 implies high income inequality in South Africa. Q3.2.1 False; Q3.2.2 True (Say's Law); Q3.2.3 True (Keynesian); Q3.2.4 True. Q6.1.1 Structural; Q6.1.2 Cyclical."
      },
      {
        "number": "Section C — Q1 to Q6 (30 marks)",
        "prompt": "Q1 SA 2018 National Accounts (Calculate NI and GDEfc from GDPmp = 1 204); Q2 Hogwarts 2017 & 2018 Nominal & Real GDP; Q3 SARB 2012 Deflator Inflation Rate; Q4 Italian Economy Keynesian Model (C = 85 + 0.5Yd, I = 75, G = 70, T = 0.25Y, X = 30, Z = 30 + 0.3Yd); Q5 SA vs Zimbabwe Cloth & Cars Comparative Advantage; Q6 Italy Unemployment Rate.",
        "memo": "Q1.1 NI = 1 204 - 72 + 24 - 13 - 148 + 15 = R1 010m; Q1.2 GDEfc = 1 204 + 100 - 64 - 148 + 15 = R1 107m. Q2.1 Nom 2017 = R200, Nom 2018 = R250; Q2.2 Growth = 25%; Q2.3 Real 2018 = R225. Q3.1 Defl 2011 = 153.09, Defl 2012 = 161.45, Inflation 2012 = 5.46%. Q4.1 Y = 230 / 0.85 = 270.59; Q4.2 T = 67.65; Q4.3 Budget Deficit = -2.35; Q4.4 Savings S = 16.47. Q5.1 SA has comparative advantage in cloth (0.67 < 5 cars); Zimbabwe has comparative advantage in cars (0.2 < 1.5m cloth). Q6.1 LF = 20m + 10m = 30m; Unemployment rate = 10/30 × 100 = 33.33%."
      }
    ]
  }
]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = ECON122_DATA;
}
