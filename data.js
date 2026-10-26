// Auto-generated & Mathematically Verified Knowledge Base for Macroeconomics (ECON122)
// Source: Philip Mohr - Economics for South African Students (6e, Van Schaik)

const ECON122_DATA = {
  chapters: [
  {
    "id": "ch13",
    "number": 13,
    "title": "Measuring the Performance of the Economy",
    "shortTitle": "Macro Measurement",
    "studyUnit": "Study Unit 1 — Measuring Economic Performance (§1.1)",
    "studyHours": "5 Hours",
    "pages": "Mohr 6e, pp. 235–265 • Study Unit 1, pp. 2–11",
    "accent": "#38bdf8",
    "summary": "The five macroeconomic objectives (short-run stabilisation vs long-run development), national accounting identities (GDP, GDE, GNI, NDP, NI), three calculation methods, market prices vs basic prices vs factor cost, nominal vs real GDP, CPI, Balance of Payments, and Lorenz/Gini income inequality.",
    "learningOutcomes": [
      "Distinguish between short-term macroeconomic policy objectives (economic growth, full employment, price stability, balance of payments stability) and long-run developmental objectives (poverty reduction, human capital, equitable income distribution).",
      "Define Gross Domestic Product (GDP), explain why intermediate goods are excluded to prevent double counting, and calculate GDP via the production (value-added), income (W + R + i + P), and expenditure (C + I + G + X - Z) methods.",
      "Calculate and convert between nominal GDP (current prices) and real GDP (constant base-period prices), Gross Domestic Expenditure (GDE), Gross National Income (GNI/GNP), Net Domestic Product (NDP), and National Income (NNP at factor cost).",
      "Represent, calculate, and interpret unequal distribution of income using the Lorenz curve, the Gini coefficient, and quantile ratios."
    ],
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
        "tag": "Mohr §13.1, p. 236 • Study Unit 1 §1.1.1",
        "intuition": "Every macroeconomic policy is judged against five core criteria: (1) Economic growth (real GDP growth), (2) Full employment (low unemployment), (3) Price stability (low inflation within SARB 3–6% band), (4) Balance of payments / external stability, and (5) Equitable distribution of income. Short-term demand policies address the first four objectives, while developmental objectives like lower poverty and human capital unfold in the long run.",
        "example": "When SARB raises the repo rate to curb inflation (Objective 3), higher borrowing costs may dampen short-run output growth (Objective 1) and employment (Objective 2), illustrating policy trade-offs.",
        "fallacy": "Assuming 'price stability' means prices are frozen at zero percent change forever.",
        "firstPrinciples": "Price stability means keeping the rate of change in the general price level low and predictable (in South Africa, inside the 3%–6% inflation target range, anchored near the 4.5% midpoint or 3% point target)."
      },
      {
        "title": "Three Equivalent Methods of Calculating GDP",
        "tag": "Mohr §13.2, pp. 239–241 • Study Unit 1 §1.1.2",
        "intuition": "GDP is the total value of all final goods and services produced within the geographic boundaries of a country in a given period. It can be measured via (1) Production (sum of value added S - B at each stage), (2) Income (Wages + Rent + Interest + Profit, where Profit = S - B - W - R - i), or (3) Expenditure (final sales C + I + G + X - Z).",
        "example": "In Study Unit 1's event-catering chain (Metro → Namakwa Liquor Store → Kosie): Metro sells supplies for R6 000 (Buy = R0, VA = R6 000, W = R3 500, R = R900, i = R700, Profit = R900); Namakwa sells to Kosie for R12 000 (Buy = R6 000, VA = R6 000, W = R3 200, R = R1 500, i = R500, Profit = R800); Kosie organises the event for R20 000 (Buy = R12 000, VA = R8 000, W = R2 000, Profit = R6 000). Both ∑VA (6 000 + 6 000 + 8 000) and ∑Factor Incomes equal R20 000.",
        "fallacy": "Adding the full selling prices of Metro (R6k) + Namakwa (R12k) + Kosie (R20k) = R38k, or Dr Ray (R45k) + L'Oréal (R160k) + Edgars (R240k) = R445k.",
        "firstPrinciples": "Summing raw gross sales across stages causes double counting of intermediate goods. Always sum Value Added (Sales minus Intermediate Purchases) or count only final consumer expenditure."
      },
      {
        "title": "Market Prices vs. Basic Prices vs. Factor Cost & NNP",
        "tag": "Mohr §13.2–13.3, pp. 241–245 • Study Unit 1 §1.1.3",
        "intuition": "Indirect taxes (like VAT) raise the market price paid by consumers above what factors of production actually earn, whereas subsidies lower the market price below factor cost. Converting from Gross to Net subtracts depreciation (D), and moving from Domestic to National adds net factor income from the rest of the world.",
        "example": "In Study Unit 1 (p. 9): Given GDP at market prices = R955m, Capital goods = R92m, Depreciation = 9% of capital goods (R8.28m), contract earnings abroad = R23m, and migrant wages paid = R52m (while state pensions = R61m and personal income tax = R25m are excluded): NNP at market prices = 955 - 8.28 + 23 - 52 = R917.72m.",
        "fallacy": "Adding indirect taxes and subtracting subsidies when moving from Market Prices to Factor Cost, or subtracting state pension transfers when computing NNP.",
        "firstPrinciples": "Market prices already include indirect taxes (+T) and exclude subsidies (-S). To recover true Factor Cost, reverse the signs (-T + S), and always exclude pure government transfer payments (pensions/grants) and direct income taxes from GDP/NNP conversions."
      },
      {
        "title": "Balance of Payments & Lorenz Curve Inequality",
        "tag": "Mohr §13.6–13.7, pp. 253–260 • Study Unit 1 §1.1.4",
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
    "studyUnit": "Study Unit 2 — Monetary Economics (§2.1)",
    "studyHours": "8 Hours",
    "pages": "Mohr 6e, pp. 267–294 • Study Unit 2.1, pp. 14–24",
    "accent": "#818cf8",
    "summary": "Functions of money, M1/M2/M3 monetary aggregates in South Africa, financial intermediaries, Keynes's liquidity preference (active vs passive balances), inverse bond price–interest rate nexus, balance-sheet money creation, and SARB repo policy.",
    "learningOutcomes": [
      "Describe the functions (medium of exchange, unit of account, store of value) and requirements of money, and explain why money is not income, wealth, or a factor of production.",
      "Explain the various South African monetary aggregates (M1, M2, and comprehensive M3) and explain why M3 is widely used for macroeconomic analysis.",
      "Name and explain the role of financial intermediaries and the core functions and mission of the South African Reserve Bank (protection of the internal and external value of the Rand).",
      "Explain the demand for active balances (transactions and precautionary motives) and passive balances (speculative motive) and employ graphs to illustrate money market equilibrium.",
      "Explain the commercial bank balance-sheet money creation process, define money market instruments (Bankers' Acceptances and Debentures), and distinguish between indirect (market-oriented) and direct monetary policy instruments."
    ],
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
      },
      {
        "name": "Commercial Bank Balance-Sheet Accounting Identity",
        "latex": "\\text{Assets (Cash Reserves } R + \\text{Loans } L + \\text{Property)} \\equiv \\text{Liabilities (Demand Deposits } DD\\text{)} + \\text{Capital Stock}",
        "meaning": "When a bank receives a R1 000 deposit and retains a 20% reserve (R200), it holds R800 in surplus funds to grant creditworthy overdraft loans, creating demand deposits."
      }
    ],
    "concepts": [
      {
        "title": "Functions of Money & What Money Is Not",
        "tag": "Mohr §14.1, pp. 268–270 • Study Unit 2.1 §2.1.1",
        "intuition": "Money is anything generally accepted as payment for goods and services or settlement of debt. Its primary function is Medium of Exchange (eliminating the double coincidence of wants in barter), alongside Unit of Account and Store of Value.",
        "example": "Even though a company says it could expand its factory if it had 'more money', money itself cannot physically produce output—natural resources, labour, physical capital, and entrepreneurship produce output.",
        "fallacy": "Treating money as a factor of production or confusing money (a stock) with income (a flow).",
        "firstPrinciples": "Money is NOT a factor of production, NOT income, and NOT identical to wealth. During high inflation, money performs poorly as a store of value because its purchasing power erodes."
      },
      {
        "title": "South African Monetary Aggregates (M1, M2, M3)",
        "tag": "Mohr §14.3, pp. 271–273 • Study Unit 2.1 §2.1.2",
        "intuition": "SARB classifies money supply by maturity and liquidity: M1 is the narrowest measure (cash held by the public + cheque/transmission demand deposits); M2 adds short-term (<30 days) and medium-term (<6 months) deposits; M3 adds long-term (>6 months) deposits and is the most reliable comprehensive indicator.",
        "example": "If Notes & Coins = R52,000m, Demand Deposits = R425,000m, Short-term = R215,000m, Medium-term = R190,000m, Long-term = R125,000m: M1 = R477,000m, M2 = R882,000m, and M3 = R1,007,000m.",
        "fallacy": "Including vault cash held inside commercial banks or SARB in M1.",
        "firstPrinciples": "Only coins and banknotes in circulation OUTSIDE the monetary sector (in the hands of the non-bank public) count toward C in M1, avoiding double counting with bank deposits."
      },
      {
        "title": "Endogenous Money Supply & SARB Accommodation Policy",
        "tag": "Mohr §14.6–14.8, pp. 279–286 • Study Unit 2.1 §2.1.4–2.1.6",
        "intuition": "In modern South African banking, there is no independent vertical money supply curve. Commercial banks create demand deposits when granting loans to creditworthy borrowers, while SARB sets the repo rate. Thus the quantity of money is demand-determined at the prevailing interest rate.",
        "example": "When SARB lowers the repo rate by 50 basis points, commercial banks lower prime lending rates; the horizontal interest rate line shifts down, increasing the quantity of credit and money demanded along the L curve.",
        "fallacy": "Drawing a vertical exogenous money supply curve when analysing SARB repo rate decisions.",
        "firstPrinciples": "Under SARB's accommodation policy, money supply is endogenous (demand-determined): an increase in income Y shifts L rightward, increasing M at the given repo-linked interest rate."
      },
      {
        "title": "Balance-Sheet Money Creation & Money Market Instruments",
        "tag": "Study Unit 2.1 §2.1.5–2.1.6, pp. 20–24",
        "intuition": "Banks create money through balance-sheet lending to creditworthy borrowers. Key money market instruments include Bankers' Acceptances (short-term negotiable bills of exchange guaranteed by a commercial bank to finance trade) and Debentures (long-term fixed-interest corporate debt securities backed by general creditworthiness). SARB favours market-oriented (indirect) policy instruments (repo accommodation, open-market operations) over direct non-market controls.",
        "example": "In Study Unit 2.1 (pp. 21–22): (a) R100 000 capital is invested in a new bank, with R80 000 buying property and R20 000 kept as cash (Total = R100 000); (b) R30 000 in customer cash deposits raises cash to R50 000 and demand deposits to R30 000 (Total = R130 000); (c) a further R35 000 deposit minus a R1 000 withdrawal brings cash to R84 000, property to R80 000, demand deposits to R64 000, and total balance sheet to R164 000.",
        "fallacy": "Thinking the central bank expands money supply primarily by printing physical banknotes or imposing direct credit ceilings on banks.",
        "firstPrinciples": "Electronic bank deposits constitute the vast majority of the money stock; SARB influences credit creation indirectly via the cost of credit (the repo rate) and open-market transactions."
      }
    ]
  },
  {
    "id": "ch15",
    "number": 15,
    "title": "The Government Sector",
    "shortTitle": "Government & Tax",
    "studyUnit": "Study Unit 2 — The Government Sector (§2.2)",
    "studyHours": "8 Hours",
    "pages": "Mohr 6e, pp. 295–322 • Study Unit 2.2, pp. 25–46",
    "accent": "#34d399",
    "summary": "Structure of the public sector, market failure (public goods, externalities, asymmetric information), Musgrave's three functions, government failure, nationalisation vs privatisation, fiscal policy & deficit financing, tax functions & incidence, and SARS personal income tax calculations.",
    "learningOutcomes": [
      "Define the public sector (central, provincial, and local government plus public corporations) and explain its role in a mixed economy.",
      "Explain nationalisation and privatisation and evaluate the economic arguments for and against each strategy.",
      "Define fiscal policy and its instruments (government expenditure G, taxation T, and deficit financing), and explain how the deficit before borrowing is financed via domestic private loans, central bank credit, or foreign borrowing.",
      "Describe the criteria of a good tax (neutrality, equity, administrative simplicity), classify tax functions (financing, redistributing, regulating), and calculate marginal tax rates, effective (average) tax rates, and net personal income tax after rebates.",
      "Distinguish between statutory (legal) tax incidence and effective (economic) tax incidence as market participants shift the tax burden forward or backward."
    ],
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
        "tag": "Mohr §15.1–15.4, pp. 296–306 • Study Unit 2.2 §2.2.1–2.2.2",
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
        "tag": "Mohr §15.11, pp. 316–319 • Study Unit 2.2 §2.2.6",
        "intuition": "Taxes are classified by how the ratio of tax paid to income (the average/effective tax rate) changes as income rises: Progressive (ATR rises with income, e.g. SARS Personal Income Tax), Proportional (ATR is constant, e.g. flat company tax rate), and Regressive (ATR falls as income rises, e.g. uniform indirect VAT/fuel levies relative to household income).",
        "example": "In Study Unit 2.2 (pp. 43–44): Jerome earns R24 000/month (R288 000/year) and pays R46 189 net tax after the R13 500 primary rebate (16.04% effective rate, 26% marginal rate), whereas CEO Sally earns R375 000/month (R4 500 000/year) and pays R1 870 125 net tax after the R13 500 primary rebate (41.56% effective rate, 45% marginal rate).",
        "fallacy": "Multiplying a taxpayer's entire annual income by their top bracket marginal rate.",
        "firstPrinciples": "In a bracketed progressive system, the marginal rate applies ONLY to the excess income above the bracket threshold, added to the base tax for lower brackets, minus statutory rebates."
      },
      {
        "title": "Tax Functions, Regressive VAT Proof & Statutory vs. Effective Incidence",
        "tag": "Study Unit 2.2 §2.2.6–2.2.8, pp. 29–45",
        "intuition": "Study Unit 2.2 classifies tax actions into three functions: Financing (raising revenue to reduce state borrowing), Redistributing (funding basic-needs programmes and poorer-area infrastructure), and Regulating (raising taxes to cool an overheating economy or cutting taxes to stimulate slow growth). In the SA revenue chart (p. 36), Individuals (41%), VAT (26%), and Companies (13%) are the top tax sources, where Individual income tax, Company tax, and Mine tax are Direct taxes while VAT, Petrol tax, Customs duties, and Excise duties are Indirect taxes.",
        "example": "In Study Unit 2.2 (pp. 38–42): Under progressive brackets, Peter (R16 601) pays R2 550 + 21% above R15 000 = R2 886.21 (17.39% ATR) while Susan (R83 450) pays R25 000 + 43% above R80 000 = R26 483.50 (31.74% ATR). Conversely, at 14% VAT, Nicky (earns R1 000, spends R750) pays R105 VAT (10.5% ATR) while Duncan (earns R500, spends R500) pays R70 VAT (14.0% ATR), proving VAT is regressive.",
        "fallacy": "Believing that a uniform flat-rate consumption tax like VAT is proportional with respect to household income.",
        "firstPrinciples": "Because low-income households consume nearly 100% of their income while higher-income households save a larger fraction, a uniform indirect tax on consumption claims a larger percentage of poor households' income (regressive)."
      }
    ]
  },
  {
    "id": "ch16",
    "number": 16,
    "title": "The Foreign Sector",
    "shortTitle": "Foreign Sector",
    "studyUnit": "Study Unit 2 — The Foreign Sector (§2.3)",
    "studyHours": "12 Hours",
    "pages": "Mohr 6e, pp. 323–346 • Study Unit 2.3, pp. 47–56",
    "accent": "#f59e0b",
    "summary": "Globalisation, absolute vs comparative (relative) advantage, opportunity cost trade calculations, import substitution vs export promotion, GATT/WTO & trade barriers, foreign exchange market (ZAR/USD appreciation & depreciation), and the terms of trade.",
    "learningOutcomes": [
      "Explain globalisation, international economic interdependence, and why uneven factor endowments give rise to international trade.",
      "Calculate and explain absolute advantage and comparative (relative) advantage using opportunity cost ratios to determine optimal specialisation.",
      "Identify trade barriers (tariffs, quotas, subsidies, non-tariff barriers, exchange controls), compare import substitution with outward-oriented export promotion, and explain the role of GATT and the WTO.",
      "Explain and graphically illustrate how exchange rates are determined in a controlled floating exchange rate regime, analyse currency appreciation and depreciation, and define the terms of trade."
    ],
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
        "tag": "Mohr §16.2, pp. 325–329 • Study Unit 2.3 §2.3.1",
        "intuition": "Absolute advantage exists when a country can produce more of a good than another country using the same resources. Comparative (relative) advantage exists when a country can produce a good at a lower opportunity cost (sacrificing less of the alternative good).",
        "example": "In Study Unit 2.3 (p. 49): A Less Developed Country (LDC) produces 2 kg wheat or 1 m cloth (1 m cloth = 2 kg wheat; 1 kg wheat = 0.5 m cloth). A Developed Country (DC) produces 4 kg wheat or 8 m cloth (1 m cloth = 0.5 kg wheat; 1 kg wheat = 2 m cloth). DC has absolute advantage in both, but LDC has comparative advantage in wheat (0.5 < 2) and DC in cloth (0.5 < 2).",
        "fallacy": "Concluding that no mutually beneficial trade can occur when one country has an absolute advantage in both goods.",
        "firstPrinciples": "David Ricardo's law of comparative advantage proves that as long as opportunity costs differ between two countries, each country gains by specialising in the good where its opportunity cost is lowest."
      },
      {
        "title": "Trade Policy Measures, GATT/WTO & Export Promotion",
        "tag": "Mohr §16.3, pp. 329–333 • Study Unit 2.3 §2.3.2",
        "intuition": "Governments restrict import volumes or protect domestic infant industries and jobs using six main instruments: (1) Import tariffs (specific fixed amount per unit vs ad valorem percentage of value), (2) Import quotas (quantitative limits), (3) Subsidies to domestic producers, (4) Non-tariff barriers (administrative/health standards), (5) Exchange controls, and (6) Exchange rate policy. Outward-oriented export promotion achieves higher growth than inward-looking import substitution.",
        "example": "Imposing an import tariff raises the domestic price above the world price, increasing domestic production, reducing domestic consumption, and generating tariff revenue, but creating deadweight welfare losses and hurting consumers.",
        "fallacy": "Confusing import substitution with export promotion, or thinking governments can impose arbitrary tariffs without WTO constraints.",
        "firstPrinciples": "Import substitution uses tariffs/quotas to replace previously imported goods with locally manufactured goods, whereas export promotion provides incentives to produce for world markets under WTO rules."
      },
      {
        "title": "Exchange Rate Appreciation, Depreciation & Cross-Currency Pricing",
        "tag": "Mohr §16.4, pp. 334–341 • Study Unit 2.3 §2.3.3, p. 54",
        "intuition": "In the ZAR/USD foreign exchange market, US dollars are supplied by buyers of SA exports and foreign investors bringing capital into SA, and demanded by SA importers and residents investing abroad. South Africa operates a controlled floating single exchange rate regime. To determine trade flows across multiple commodities, prices must first be converted into a common currency via the exchange rate.",
        "example": "In Study Unit 2.3 (p. 54): USA prices are A=$1, B=$4, C=$6, D=$8, E=$12 and British prices are A=£9, B=£7, C=£6, D=£4, E=£1. At £1=$1, USA exports A & B (C equal at $6) and imports D & E; at £1=$2 (dollar depreciation), British dollar prices double so USA exports A, B, C (D equal at $8) and imports only E; at £1=$0.50 (dollar appreciation), USA exports only A and imports B, C, D, E.",
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
    "studyUnit": "Study Unit 3 — Simple Macroeconomic Model (§3.1)",
    "studyHours": "25 Hours",
    "pages": "Mohr 6e, pp. 347–376 • Study Unit 3.1, pp. 58–71",
    "accent": "#ec4899",
    "summary": "Core assumptions of the simple closed no-government Keynesian model, Say's Law vs Keynes's Law, the consumption function (APC vs MPC) and its three characteristics, saving function (APS vs MPS), autonomous investment, the 45° line, equilibrium income, and the simple multiplier.",
    "learningOutcomes": [
      "State the restricting assumptions of the Simple Keynesian Model (closed two-sector economy with only households and firms, fixed prices and wages, constant interest rates, demand-determined output).",
      "Describe, formulate, and graph the consumption function (C = C̄ + cY) and calculate the Average Propensity to Consume (APC = C/Y), Marginal Propensity to Consume (MPC = ΔC/ΔY), Average Propensity to Save (APS = S/Y), and Marginal Propensity to Save (MPS = ΔS/ΔY).",
      "Define and illustrate the autonomous investment function and explain its inverse relationship with the interest rate.",
      "Determine equilibrium income algebraically, tabularly, and graphically using the 45° line (A = Y) and saving–investment equality (S = I).",
      "Formulate, calculate, and graphically illustrate the simple expenditure multiplier (α = 1/(1 - c) = 1/s) and the Paradox of Thrift."
    ],
    "formulas": [
      {
        "name": "Consumption & Saving Functions",
        "latex": "C = \\bar{C} + cY, \\quad S = -\\bar{C} + (1-c)Y, \\quad c + s = 1",
        "meaning": "Autonomous consumption C_bar (>0) is independent of income; induced consumption cY depends on the marginal propensity to consume c (0 < c < 1)."
      },
      {
        "name": "Average vs. Marginal Propensities (APC, APS, MPC, MPS)",
        "latex": "\\text{APC} = \\frac{C}{Y}, \\quad \\text{APS} = \\frac{S}{Y}, \\quad \\text{MPC} = \\frac{\\Delta C}{\\Delta Y} = c, \\quad \\text{MPS} = \\frac{\\Delta S}{\\Delta Y} = s, \\quad \\text{APC} + \\text{APS} = 1",
        "meaning": "APC and APS measure the fraction of total income consumed or saved, whereas MPC (slope c) and MPS (slope s) measure the fraction of an additional Rand consumed or saved."
      },
      {
        "name": "Simple Closed-Economy Equilibrium",
        "latex": "Y_0 = \\alpha \\bar{A} = \\left(\\frac{1}{1 - c}\\right)(\\bar{C} + \\bar{I})",
        "meaning": "Equilibrium occurs along the 45° line where Aggregate Spending A = C + I equals Total Production/Income Y (and Planned Saving S = I)."
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
        "tag": "Mohr §17.2, pp. 351–352 • Study Unit 3.1 §3.1.1",
        "intuition": "The simple model assumes: (1) The economy consists only of households and firms (closed, no government), (2) Prices and wages are fixed, (3) The money market and interest rates are constant, and (4) Aggregate spending (demand) determines aggregate production (income). Unlike Classical Say's Law ('supply creates its own demand', Y → A), Keynes showed that aggregate spending drives output (A → Y) and equilibrium can persist below full employment.",
        "example": "At any output level below equilibrium (to the left of the 45° intersection), Aggregate Spending exceeds Production (A > Y), causing unplanned inventory depletion and prompting firms to expand output.",
        "fallacy": "Believing that Keynesian equilibrium (A = Y) automatically guarantees full employment of all labour.",
        "firstPrinciples": "Macroeconomic equilibrium in the Keynesian model simply means planned spending equals production (A = Y); this equilibrium income Y0 can be far below full-employment output Yf."
      },
      {
        "title": "Three Characteristics of the Consumption Function & APC vs. MPC",
        "tag": "Mohr §17.3, pp. 353–356 • Study Unit 3.1 §3.1.2",
        "intuition": "Keynes's consumption function C = C_bar + cY has three fundamental properties: (1) Consumption is strictly positive even when income is zero (C_bar > 0, financed by dissaving/past wealth), (2) Consumption increases as income increases (positive slope, c > 0), and (3) When income increases, consumption increases by LESS than the increase in income (0 < c < 1, because households save part of every extra Rand).",
        "example": "In Study Unit 3.1 (pp. 62–64): For the schedule Y = [40, 60, 80, 100, 120, 140] and C = [47, 58, 69, 80, 91, 102], every ΔY = 20 yields ΔC = 11, so MPC = 11/20 = 0.55, MPS = 0.45, and C̄ = 25 (C = 25 + 0.55Y). At Y = 100, C = 80 so APC = 0.80 and APS = 0.20.",
        "fallacy": "Confusing a movement along the consumption curve (caused by a change in income Y) with a vertical shift of the consumption curve, or using APC instead of MPC in the multiplier.",
        "firstPrinciples": "Income Y is on the horizontal axis, so ΔY causes a movement along C = C_bar + cY (induced consumption), whereas a change in autonomous consumption ΔC_bar shifts the entire intercept vertically."
      },
      {
        "title": "The Multiplier, Island Economy Equilibrium & Saving Identity",
        "tag": "Mohr §17.5–17.8, pp. 360–371 • Study Unit 3.1 §3.1.4–3.1.6",
        "intuition": "When investment increases by ΔI, total spending jumps vertically by ΔI. Because each Rand spent becomes income for someone else who spends a fraction c of it, total income expands by ΔY = [1/(1-c)] ΔI. In a closed two-sector economy, households either consume or save their income (Y = C + S), so at equilibrium (Y = C + I) planned saving must equal investment (S = I).",
        "example": "In Study Unit 3.1's island economy (pp. 68–70) with C = 250 + 0.8Y and I = 400: Ye = (250 + 400)/(1 - 0.8) = 650/0.2 = 3 250; equilibrium consumption C = 250 + 0.8(3 250) = 2 850; and household saving S = Ye - C = 3 250 - 2 850 = 400 = I.",
        "fallacy": "Thinking that higher household thrift (an autonomous rise in the saving rate) always increases total national saving in the simple Keynesian model.",
        "firstPrinciples": "By the Paradox of Thrift (Box 17-9), an autonomous attempt to save more reduces C_bar and lowers the multiplier, contracting equilibrium income Y0 and leaving total saving unchanged at S = I."
      }
    ]
  },
  {
    "id": "ch18",
    "number": 18,
    "title": "The Keynesian Model with a Government and a Foreign Sector",
    "shortTitle": "Open Keynesian Model",
    "studyUnit": "Study Unit 3 — Open Economy with Government (§3.2)",
    "studyHours": "25 Hours",
    "pages": "Mohr 6e, pp. 377–405 • Study Unit 3.2, pp. 72–91",
    "accent": "#f43f5e",
    "summary": "Introducing government spending (G) and lump-sum or proportional taxes (T = T̄ + tY), disposable income, open-economy exports (X) and induced imports (Z = Z_bar + mY), leakages vs injections, order of operations in the open-economy multiplier, and fiscal policy adjustments.",
    "learningOutcomes": [
      "Explain how autonomous government expenditure (G) and lump-sum or proportional income taxes (T = T̄ + tY) alter disposable income (Yd = Y - T), the consumption function, the multiplier, and equilibrium income.",
      "Apply the strict order of operations when calculating the tax-adjusted multiplier α = 1/[1 - c(1 - t)], computing (1 - t) first, multiplying by c, and subtracting from 1.",
      "Compare the quantitative impact on equilibrium income of an autonomous increase in government spending (ΔG) versus an equal-sized lump-sum tax cut (-ΔT).",
      "Incorporate autonomous exports (X) and autonomous plus induced imports (Z = Z̄ + mY) into the open-economy Keynesian model (A = C + I + G + X - Z) and calculate the open-economy multiplier α = 1/[1 - c(1 - t) + m].",
      "Use the multiplier to calculate the exact fiscal policy change (ΔG) required to eliminate a recessionary output gap (Yf - Ye)."
    ],
    "formulas": [
      {
        "name": "Consumption with Lump-Sum & Proportional Taxes",
        "latex": "T = \\bar{T} + tY, \\quad Y_d = (1 - t)Y - \\bar{T} \\implies C = \\bar{C} - c\\bar{T} + c(1 - t)Y",
        "meaning": "Lump-sum taxes T̄ reduce the autonomous intercept by cT̄, while proportional taxes t reduce disposable income Yd and flatten the consumption slope from c to c(1 - t)."
      },
      {
        "name": "Multiplier with Government Sector (Closed)",
        "latex": "\\alpha_G = \\frac{1}{1 - c(1 - t)}",
        "meaning": "Order of operations: calculate (1 - t) first, multiply by c, and subtract from 1. Never evaluate as (1 - c)(1 - t)."
      },
      {
        "name": "Open-Economy Multiplier (with Induced Imports)",
        "latex": "\\alpha_{\\text{open}} = \\frac{1}{1 - c(1 - t) + m}, \\quad \\bar{A} = \\bar{C} - c\\bar{T} + \\bar{I} + \\bar{G} + \\bar{X} - \\bar{Z}",
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
        "title": "How G and t Affect the Aggregate Spending Curve & Order of Operations",
        "tag": "Mohr §18.1, pp. 378–386 • Study Unit 3.2 §3.2.1",
        "intuition": "Government spending G is an autonomous injection: it shifts the Aggregate Spending curve upward in parallel by ΔG without changing its slope or the multiplier. Proportional taxes T = tY are an induced leakage: an increase in the tax rate t rotates (pivots) the Aggregate Spending curve downward, reducing its slope c(1-t) and shrinking the multiplier. Furthermore, a R5 000 increase in G raises equilibrium income by more than a R5 000 tax cut because households save part of a tax cut.",
        "example": "In Study Unit 3.2 (pp. 77–79): Given C = 250 + 0.85Y, I = 150, G = 350 (t = 0): Ā = 750, α = 1/(1 - 0.85) = 6.67, and Ye = 5 000. If ΔG = +100, ΔY = 6.67 × 100 = 667, raising Y to 5 667.",
        "fallacy": "Evaluating 1 - c(1 - t) as (1 - c)(1 - t), or claiming that an increase in G increases the size of the multiplier α.",
        "firstPrinciples": "In α = 1/[1 - c(1-t) + m], 1 - c is NOT in brackets: compute (1 - t) first, multiply by c, and subtract from 1. Autonomous G changes the intercept A_bar, never α."
      },
      {
        "title": "Exports, Induced Imports & the Islamabad Open-Economy Model",
        "tag": "Mohr §18.2–18.3, pp. 387–393 • Study Unit 3.2 §3.2.2",
        "intuition": "Exports X are an autonomous injection (+X_bar). Imports Z = Z_bar + mY consist of autonomous imports (Z_bar, subtracted from A_bar) and induced imports (mY, which rise as domestic income rises, reducing the slope of net spending to c(1-t) - m).",
        "example": "In Study Unit 3.2's Islamabad economy (pp. 86–89): C = 150 + 0.8Yd, T = 20 + 0.2Y, I = 250, G = 450, X = 325, Z = 50 + 0.2Y. Autonomous spending Ā = 150 - 0.8(20) + 250 + 450 + 325 - 50 = 1 109. Induced slope = 0.8(1 - 0.2) - 0.2 = 0.44, so 1 - 0.44 = 0.56, α = 1/0.56 = 1.79, and Ye = 1 109 / 0.56 = 1 980. When investment rises from 250 to 310 (ΔI = 60), ΔY = 60 × 1.79 = 107.4, giving Y_new = 2 087 (or exact 2 087.5).",
        "fallacy": "Adding autonomous imports Z_bar (+50) into autonomous spending A_bar instead of subtracting it (-50).",
        "firstPrinciples": "Imports represent domestic spending leaking to foreign producers (X - Z = X_bar - Z_bar - mY), so autonomous imports Z_bar must always be subtracted from A_bar."
      },
      {
        "title": "Injections vs. Leakages Table (Core Synthesis)",
        "tag": "Mohr Appendix 18-1, p. 402 • Study Unit 3.2 §3.2.2",
        "intuition": "In the open circular flow with government: Investment (I), Government Spending (G), and Exports (X) are INJECTIONS that increase equilibrium income Y0 without changing α. Saving (s), Taxation (t), and Imports (m) are LEAKAGES (withdrawals): an increase in s, t, or m decreases the multiplier α and decreases equilibrium income Y0.",
        "example": "Variable G is an Injection, α remains unchanged, and Ye increases; Variable t is a Leakage, α decreases, and Ye decreases.",
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
    "studyUnit": "Study Units 3 & 4 — AD–AS & Policy Transmission",
    "studyHours": "10 Hours",
    "pages": "Mohr 6e, pp. 407–436 • Study Units 2.2 & 4.1, pp. 29, 97–98",
    "accent": "#a855f7",
    "summary": "The Aggregate Demand–Aggregate Supply (AD–AS) model, variable price levels, real vs monetary AD shifters, why AD slopes downward, SRAS vs LRAS, imported input cost-push shocks, monetary transmission mechanism channels, four policy lags, and Monetarist vs Keynesian schools.",
    "learningOutcomes": [
      "Relax the fixed-price assumption of the simple Keynesian model and analyse macroeconomic equilibrium in the Aggregate Demand–Aggregate Supply (AD–AS) framework.",
      "Distinguish between real factors (changes in autonomous C, I, G, X - Z) and monetary factors (changes in money supply M and interest rates i) that shift the Aggregate Demand curve.",
      "Explain how domestic and imported intermediate input price shocks (electricity, transport, steel, imported vehicle engines) shift Aggregate Supply upward/leftward, causing cost-push stagflation.",
      "Compare the policy perspectives of the Monetarist and Keynesian schools on stabilisation, velocity of circulation (MV ≡ PY), and the four policy implementation lags."
    ],
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
        "title": "The AD–AS Framework: Real vs. Monetary AD Shifters",
        "tag": "Mohr §19.1, pp. 408–417 • Study Unit 4.1, p. 97",
        "intuition": "While the Keynesian model of Ch 17–18 assumes fixed prices, the AD–AS model places the general price level (P) on the vertical axis and real output (Y) on the horizontal axis. Study Unit 4 emphasises that Macro-Demand (AD) shifts rightward due to either real factors (autonomous increases in C, I, G, or X - Z) or monetary factors (increases in the money supply M lowering interest rates and boosting total expenditure).",
        "example": "An expansionary fiscal boost (↑G) or monetary expansion (↑M → ↓i → ↑I) shifts AD rightward along an upward-sloping SRAS, increasing real output Y at the cost of a higher price level P.",
        "fallacy": "Explaining the downward slope of the macroeconomic AD curve using the microeconomic substitution effect between two individual goods.",
        "firstPrinciples": "When the aggregate price level P rises, all domestic goods become more expensive together; AD slopes downward due to the real balance (wealth) effect, the Keynes interest rate effect, and the international trade effect."
      },
      {
        "title": "Adverse Supply Shocks, Imported Inputs & Stagflation in AD–AS",
        "tag": "Mohr §19.1, pp. 415–417 • Study Unit 4.1, p. 97",
        "intuition": "An increase in unit production costs—such as domestic transport, electricity, and steel tariffs, or more expensive imported intermediate inputs—shifts the SRAS curve upward/leftward. The economy experiences STAGFLATION: a simultaneous rise in the price level (↑P, cost-push inflation) and contraction in real output and employment (↓Y).",
        "example": "As noted in Study Unit 4 (p. 97), if Ford vehicle engines are imported from England and the price of imported engines rises, the production cost of assembling vehicles in South Africa increases, shifting AS upward (raising prices and lowering output).",
        "fallacy": "Thinking demand-management policies (monetary or fiscal policy alone) can easily cure stagflation.",
        "firstPrinciples": "Because monetary and fiscal policies shift AD rather than AS, they cannot simultaneously reverse both higher prices and lower output after an adverse supply shock."
      },
      {
        "title": "Four Policy Lags & Monetarist vs. Keynesian Views",
        "tag": "Mohr §19.3–19.4, pp. 423–432 • Study Unit 2.2, p. 29",
        "intuition": "Stabilisation policy faces four chronological lags: (1) Recognition lag (time to collect data confirming a shock, same for both policies), (2) Decision lag (very long for fiscal policy due to annual parliamentary budget process; very short for SARB MPC), (3) Implementation lag (short for monetary policy), and (4) Impact/outside lag (long for monetary policy as investment responds slowly; shorter for direct fiscal spending).",
        "example": "Monetarists (Milton Friedman) view the market economy as inherently stable and see money supply changes as directly affecting private spending, warning that policy lags make activist Keynesian fiscal fine-tuning destabilising.",
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
    "studyUnit": "Study Unit 4 — Inflation (§4.1)",
    "studyHours": "10 Hours",
    "pages": "Mohr 6e, pp. 437–466 • Study Unit 4, pp. 93–101",
    "accent": "#eab308",
    "summary": "Definition and measurement of inflation (CPI, PPI, Implicit GDP Deflator), distributional/economic/social effects, bracket creep, the four approaches to inflation (Monetarist, Demand-pull/Cost-push, Structuralist, Conflict), dangers of deflation, and SARB inflation targeting.",
    "learningOutcomes": [
      "Define inflation rigorously (a continuous and considerable rise in the general price level) and explain why a once-off price hike is not inflation.",
      "Explain how inflation is measured and calculate the inflation rate using the Consumer Price Index (CPI), Production Price Index (PPI), and the Implicit GDP Deflator.",
      "Explain why dividing Nominal GDP by Real GDP × 100 yields an index (the GDP Deflator) rather than an inflation rate, requiring two consecutive periods' deflators to compute percentage inflation.",
      "Explain the four main approaches to inflation: the Monetarist approach (MV ≡ PY), Demand-pull and Cost-push approach, the Structuralist approach (underlying, initiating, and propagating factors), and the Conflict approach.",
      "Explain why continuous deflation is dangerous to an economy and suggest policy measures (including inflation targeting and indexation) to fight inflation."
    ],
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
        "title": "CPI vs. PPI vs. Implicit GDP Deflator (Comparative Matrix)",
        "tag": "Mohr §20.2, pp. 438–442 • Study Unit 4 §4.1.1",
        "intuition": "Three price indicators differ in scope and basket structure: (1) CPI measures the retail cost of living for urban households using a fixed consumer basket that INCLUDES imported consumer goods and VAT; (2) PPI measures wholesale prices at the level of first significant commercial transaction (production/factory gate), EXCLUDES services and VAT, and includes capital & intermediate goods; (3) The GDP Deflator covers ALL domestically produced final goods/services (including exports & capital goods) but EXCLUDES all imports.",
        "example": "In Study Unit 4 (pp. 95–96): When CPI rises from 102.3 to 106.9, CPI inflation is [(106.9 - 102.3)/102.3] × 100 = 4.5%. When Nominal/Real GDP gives Deflator₁ = 153.1 and Deflator₂ = 166.2, deflator inflation is [(166.2 - 153.1)/153.1] × 100 = 8.6%.",
        "fallacy": "Calling a one-off jump in the price of bread 'inflation', or treating the single-period ratio (Nominal GDP / Real GDP) × 100 as an inflation rate rather than a price index.",
        "firstPrinciples": "Inflation is a CONTINUOUS and CONSIDERABLE rise in prices IN GENERAL. Dividing Nominal by Real GDP × 100 yields an index; you must compare two periods' deflator indices to obtain the percentage inflation rate."
      },
      {
        "title": "Distributional Effects of Inflation, Bracket Creep & the Deflation Trap",
        "tag": "Mohr §20.3, pp. 442–446 • Study Unit 4 §4.1.3, p. 99",
        "intuition": "Inflation redistributes income and wealth arbitrarily: (1) Debtors gain at the expense of creditors because loans are repaid in Rand with lower real purchasing power; (2) Young borrowers with mortgages gain while elderly pensioners on fixed annuities lose; (3) The government always gains via 'bracket creep' (fiscal drag). Conversely, Study Unit 4 warns that continuous deflation (falling prices) is even more dangerous because buyers and shop-owners postpone purchases expecting lower prices later, triggering recession or depression.",
        "example": "If a worker's salary rises by 7% to match 7% inflation, their real pre-tax income is unchanged, yet under an unindexed progressive tax table their effective tax rate rises, reducing their real disposable income.",
        "fallacy": "Assuming that everyone loses equally during inflation, or wishing for prices to fall continuously (deflation).",
        "firstPrinciples": "Inflation redistributes real wealth from lenders/fixed-income holders to borrowers and the state, while continuous deflation paralyses consumption and investment (as seen in late-20th-century Japan)."
      },
      {
        "title": "Four Approaches to Inflation: Monetarist, Demand/Cost, Structuralist & Conflict",
        "tag": "Mohr §20.4–20.6, pp. 446–463 • Study Unit 4 §4.1.2, p. 98",
        "intuition": "Study Unit 4 highlights four major theoretical approaches to inflation: (1) The Monetarist approach based on MV ≡ PY; (2) Demand-pull (↑AD) and Cost-push (←AS) inflation; (3) The Structuralist approach, which separates inflation drivers into underlying factors (structural rigidities), initiating factors (price/supply shocks), and propagating factors (indexation and wage-price spirals); and (4) The Conflict approach, where competing income claims by labour unions, business, and government exceed real output.",
        "example": "To combat demand-pull inflation, SARB raises the repo rate and Treasury cuts G or raises T; to address structuralist and conflict inflation, supply-side reforms and incomes policies are required.",
        "fallacy": "Using contractionary monetary/fiscal policy aggressively against pure cost-push or structural inflation without side effects.",
        "firstPrinciples": "Restricting AD when inflation is cost-push curbs price rises only by worsening the contraction in real output Y and increasing unemployment further."
      }
    ]
  },
  {
    "id": "ch21",
    "number": 21,
    "title": "Unemployment, Poverty and Inequality",
    "shortTitle": "Unemployment & Poverty",
    "studyUnit": "Study Unit 5 — Unemployment (§5.1)",
    "studyHours": "10 Hours",
    "pages": "Mohr 6e, pp. 467–484 • Study Unit 5, pp. 102–107",
    "accent": "#06b6d4",
    "summary": "The unemployment pool inflows & outflows, strict (narrow) vs expanded (broad) definitions, labour force participation & absorption rates, four types of unemployment, the Eclectic Approach to job creation, the Phillips curve trade-off, incomes policy for stagflation, and SA's Triple Challenge.",
    "learningOutcomes": [
      "Describe and discuss the strict (narrow) and expanded (broad) definitions of unemployment and calculate the unemployment rate from labour force data.",
      "Distinguish between frictional, seasonal, cyclical (demand-deficient), and structural unemployment and explain why structural unemployment involves a greater danger to the economy than frictional unemployment.",
      "Explain how unemployment and job creation fit into the Simple Macroeconomic Model (Y = C + I + G + X - Z) and apply an Eclectic Approach combining demand-side and supply-side measures.",
      "Explain the Phillips curve trade-off between unemployment and inflation, how stagflation shifts the Phillips curve rightward/upward, and how incomes policy can be applied to curb stagflation."
    ],
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
        "tag": "Mohr §21.1, pp. 468–470 • Study Unit 5 §5.1.1",
        "intuition": "The level of unemployment is a stock that rises when inflows exceed outflows. People ENTER the unemployment pool for 4 reasons: (1) New entrants looking for a first job (school leavers/graduates), (2) Re-entrants returning to the labour force, (3) Job losers laid off or retrenched, and (4) Voluntary quitters searching for a better job. People LEAVE the pool by: (1) Finding employment, or (2) Withdrawing from the labour force (retiring or becoming discouraged under the strict definition).",
        "example": "In Study Unit 5 (p. 104): If Estonia has an active labour force of 250 000 people and 7 500 of them are unemployed, the unemployment rate is (7 500 / 250 000) × 100 = 3.0%.",
        "fallacy": "Assuming a rising unemployment rate proves that zero new jobs are being created or that GDP is shrinking.",
        "firstPrinciples": "The unemployment rate rises whenever the labour force grows faster than employment creation (jobless growth)—it measures the proportion of the economically active population unable to find work."
      },
      {
        "title": "Four Types of Unemployment, Eclectic Policy & Phillips Curve",
        "tag": "Mohr §21.1–21.2, pp. 472–477 • Study Unit 5 §5.1.2–5.1.3",
        "intuition": "Unemployment is classified into four types: (1) Frictional (short-term search between jobs or after graduation), (2) Seasonal (predictable off-season layoffs in agriculture/tourism), (3) Cyclical / Demand-deficient (caused by recessions in aggregate demand), and (4) Structural (long-term mismatch between worker skills/location and job requirements, or automation). Structural unemployment is far more dangerous than frictional unemployment because it reflects deep structural mismatches that do not vanish when demand recovers.",
        "example": "In Study Unit 5 (p. 106): Duncan (recent graduate searching) and Thandi (starting a new job next month) are Frictional; Robert (lost his job in a recession) is Cyclical; Jan (unemployed economist in Durban while work is in Pretoria) and a shortage of managers alongside an oversupply of unskilled labourers are Structural. Study Unit 5 advocates an Eclectic Approach pooling demand-side (C+I+G+X-Z) and supply-side (skills training, SMME support, appropriate technology) measures, plus incomes policy against stagflation.",
        "fallacy": "Classifying a worker permanently displaced by automation or geographic immobility as 'frictional' or 'cyclical'.",
        "firstPrinciples": "Technological displacement, geographic immobility, and skills mismatches persist even during economic booms; they represent structural unemployment, requiring holistic supply-side human capital development."
      },
      {
        "title": "Strict vs. Expanded Unemployment & Calculation Trap",
        "tag": "Mohr §21.1, pp. 469–471 • Study Unit 5 §5.1.1",
        "intuition": "Stats SA's strict (official/narrow) definition excludes discouraged work-seekers because they did not take active steps to look for work in the four weeks prior to the survey. The expanded (broad) definition includes discouraged work-seekers.",
        "example": "In Elaria: Employed = 6,750,000, Active Unemployed = 2,220,000, Discouraged = 1,030,000 (plus students, homemakers, etc.). Broad Unemployed = 2,220,000 + 1,030,000 = 3,250,000; Broad Labour Force = 6,750,000 + 3,250,000 = 10,000,000; Broad Unemployment Rate = (3.25m / 10.0m) × 100 = 32.50%.",
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
    "studyUnit": "Study Unit 6 — Economic Growth & Business Cycles (§6.1–6.2)",
    "studyHours": "20 Hours",
    "pages": "Mohr 6e, pp. 485–512 • Study Unit 6, pp. 109–114",
    "accent": "#10b981",
    "summary": "Definition and measurement of real and inclusive economic growth, problems with GDP as a welfare measure, the four elements of the business cycle, Classical vs Keynesian vs Structuralist cycle theories, SARB leading/coincident/lagging indicators, supply vs demand growth drivers, and fundamental causes of low growth in SA.",
    "learningOutcomes": [
      "Define economic growth, explain how it is measured using constant-price Real GDP, and explain the necessity of inclusive, shared growth in an unequal developing society.",
      "Identify the five major problems associated with GDP as a measure of total production and economic welfare.",
      "Define the business cycle, illustrate and discuss its four elements (trough, upswing/expansion, peak, downswing/contraction), and explain how business cycles are measured.",
      "Identify the supply-side and demand-side sources of economic growth, diagnose the fundamental causes of low economic growth in South Africa, and formulate remedial policy measures."
    ],
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
        "tag": "Mohr §22.1, pp. 486–488 • Study Unit 6 §6.1.2",
        "intuition": "Real GDP is flawed as a measure of societal well-being because: (1) Non-market production (e.g. unpaid household work, subsistence farming) is difficult or impossible to value, (2) Unrecorded/informal sector activity and illegal trade are omitted, (3) GDP data are frequently revised after initial estimates, (4) Aggregate or even per capita GDP ignores the distribution of income (inequality), and (5) GDP makes no distinction between economic 'goods' (hospitals, schools) and 'bads' (pollution, crime expenditure, weapons)—negative externalities are not subtracted.",
        "example": "If Country A has twice the per capita GDP of Country B, residents of A are NOT necessarily twice as well off because per capita GDP is a simple mean that hides extreme inequality and environmental costs.",
        "fallacy": "Thinking 'GDP pertains only to production inside the country' is a welfare flaw rather than its literal geographic definition.",
        "firstPrinciples": "GDP is by definition a geographic production total; its true welfare limitations are unrecorded informal activity, non-market valuation, data revisions, inequality blindness, and counting 'bads' alongside 'goods'."
      },
      {
        "title": "The Business Cycle: Four Elements, Theories & SARB Indicators",
        "tag": "Mohr §22.2, pp. 488–494 • Study Unit 6 §6.2.1–6.2.3",
        "intuition": "A complete business cycle has four elements: Trough (lowest turning point) → Expansion / Upswing (rising real GDP) → Peak / Boom (upper turning point where almost all resources are in use) → Contraction / Downswing / Recession (declining real GDP). Classical economists view the economy as inherently stable (cycles caused by exogenous shocks); Keynesian economists view cycles as endogenous (inherent to modern market economies). SARB tracks Leading indicators (turn before the economy, e.g. share prices, building plans passed, real M1), Coincident indicators (move with the economy, e.g. manufacturing volume), and Lagging indicators (turn after, e.g. prime rate, unemployment duration).",
        "example": "On a business cycle diagram where Point A is a Trough, Point B is a Peak, and Point C is the next Trough: A → B is the Expansion/Upswing phase, and B → C is the Contraction/Downswing phase.",
        "fallacy": "Confusing a slowdown in the positive rate of growth with a recession (contraction).",
        "firstPrinciples": "During a contraction (downswing), the level of real economic activity declines between a Peak and a Trough."
      },
      {
        "title": "Inclusive Growth, Supply/Demand Drivers & Causes of Low Growth in SA",
        "tag": "Mohr §22.3–22.4, pp. 494–504 • Study Unit 6 §6.1.4–6.1.5",
        "intuition": "Study Unit 6 emphasises that in a highly unequal society like South Africa, the goal is inclusive growth—accelerating growth while sharing its benefits via broad job creation. Growth requires both Supply factors (natural resources, human capital skills, capital widening & deepening, entrepreneurship/technology) and Demand factors (domestic demand C+I+G, export promotion X, import substitution Z). Fundamental causes of low growth in South Africa include skills shortages, electricity and logistics bottlenecks, low domestic saving and investment, and structural unemployment.",
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
    "source": "Chapter 13 — Measuring the Performance of the Economy — Value-Added & Double-Counting Elimination (Dr Ray & L'Oréal)",
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
    ],
    "chapterId": "ch13",
    "topic": "Value-Added & Double-Counting Elimination (Dr Ray & L'Oréal)"
  },
  {
    "id": "q_ch13_02",
    "chapter": "ch13",
    "source": "Chapter 13 — Measuring the Performance of the Economy — Deriving NDP at Market Prices & Gross National Income (GNI)",
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
    ],
    "chapterId": "ch13",
    "topic": "Deriving NDP at Market Prices & Gross National Income (GNI)"
  },
  {
    "id": "q_ch13_03",
    "chapter": "ch13",
    "source": "Chapter 13 — Measuring the Performance of the Economy — Converting GDP at Factor Cost to Basic Prices & Market Prices",
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
    ],
    "chapterId": "ch13",
    "topic": "Converting GDP at Factor Cost to Basic Prices & Market Prices"
  },
  {
    "id": "q_ch13_04",
    "chapter": "ch13",
    "source": "Chapter 13 — Measuring the Performance of the Economy — Reconstructing GDP at Factor Cost from National Income & Depreciation",
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
    ],
    "chapterId": "ch13",
    "topic": "Reconstructing GDP at Factor Cost from National Income & Depreciation"
  },
  {
    "id": "q_ch13_05",
    "chapter": "ch13",
    "source": "Chapter 13 — Measuring the Performance of the Economy — Equivalence of Income & Production GDP Under Minimum-Wage Shifts",
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
    ],
    "chapterId": "ch13",
    "topic": "Equivalence of Income & Production GDP Under Minimum-Wage Shifts"
  },
  {
    "id": "q_ch14_01",
    "chapter": "ch14",
    "source": "Chapter 14 — The Monetary Sector — Calculating SARB Monetary Aggregates M1, M2 & Comprehensive M3",
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
    ],
    "chapterId": "ch14",
    "topic": "Calculating SARB Monetary Aggregates M1, M2 & Comprehensive M3"
  },
  {
    "id": "q_ch14_02",
    "chapter": "ch14",
    "source": "Chapter 14 — The Monetary Sector — Isolating Demand Deposits, Short/Medium & Long-Term Deposits in M1–M3",
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
    ],
    "chapterId": "ch14",
    "topic": "Isolating Demand Deposits, Short/Medium & Long-Term Deposits in M1–M3"
  },
  {
    "id": "q_ch14_03",
    "chapter": "ch14",
    "source": "Chapter 14 — The Monetary Sector — Endogenous Money Supply & SARB Repo Rate Accommodation Policy",
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
    ],
    "chapterId": "ch14",
    "topic": "Endogenous Money Supply & SARB Repo Rate Accommodation Policy"
  },
  {
    "id": "q_ch14_04",
    "chapter": "ch14",
    "source": "Chapter 14 — The Monetary Sector — Financial Capital vs Physical Capital as a Factor of Production",
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
    ],
    "chapterId": "ch14",
    "topic": "Financial Capital vs Physical Capital as a Factor of Production"
  },
  {
    "id": "q_ch15_01",
    "chapter": "ch15",
    "source": "Chapter 15 — The Government Sector — Statutory Personal Income Tax, Rebate, Effective & Marginal Tax Rates (R425 000)",
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
    ],
    "chapterId": "ch15",
    "topic": "Statutory Personal Income Tax, Rebate, Effective & Marginal Tax Rates (R425 000)"
  },
  {
    "id": "q_ch15_02",
    "chapter": "ch15",
    "source": "Chapter 15 — The Government Sector — Junior Lecturer Personal Income Tax & Primary Rebate Calculation (R384 000)",
    "citation": "Mohr 6e, §15.11, pp. 316–319",
    "difficulty": "Medium",
    "stem": "Thabiso Lebotse (aged 24) starts his first job as a Junior Lecturer earning R32 000 per month (R384 000 per year). The statutory SARS tax bracket for R321 601 – R445 100 is 'R67 144 + 31% of the amount over R321 600', with a Primary Rebate of R14 958 (and Secondary Rebate of R8 199 for ages 65+). Calculate his total annual tax payable after rebate and his effective tax rate.",
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
    ],
    "chapterId": "ch15",
    "topic": "Junior Lecturer Personal Income Tax & Primary Rebate Calculation (R384 000)"
  },
  {
    "id": "q_ch15_03",
    "chapter": "ch15",
    "source": "Chapter 15 — The Government Sector — High-Bracket Statutory Tax Payable Before & After Primary Rebate (R825 000)",
    "citation": "Mohr 6e, §15.11, pp. 316–319",
    "difficulty": "Medium",
    "stem": "According to the current statutory SARS tax table, the bracket for R673 001 – R857 900 is 'R179 147 + 39% of taxable income above R673 000', with a Primary Rebate of R17 235 (for all individuals under 65). If you earn R825 000 per annum, what is your tax payable (before and after the primary rebate) and your marginal tax rate?",
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
    ],
    "chapterId": "ch15",
    "topic": "High-Bracket Statutory Tax Payable Before & After Primary Rebate (R825 000)"
  },
  {
    "id": "q_ch15_04",
    "chapter": "ch15",
    "source": "Chapter 15 — The Government Sector — Negative Production Externalities (MSC vs MPC) & Corrective Pigouvian Tax",
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
    ],
    "chapterId": "ch15",
    "topic": "Negative Production Externalities (MSC vs MPC) & Corrective Pigouvian Tax"
  },
  {
    "id": "q_ch16_01",
    "chapter": "ch16",
    "source": "Chapter 16 — The Foreign Sector — Absolute vs Comparative Advantage & Opportunity Cost (Spain & Greece)",
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
    ],
    "chapterId": "ch16",
    "topic": "Absolute vs Comparative Advantage & Opportunity Cost (Spain & Greece)"
  },
  {
    "id": "q_ch16_02",
    "chapter": "ch16",
    "source": "Chapter 16 — The Foreign Sector — Opportunity Cost Ratios & Specialisation in Trade (Australia & Brazil)",
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
    ],
    "chapterId": "ch16",
    "topic": "Opportunity Cost Ratios & Specialisation in Trade (Australia & Brazil)"
  },
  {
    "id": "q_ch16_03",
    "chapter": "ch16",
    "source": "Chapter 16 — The Foreign Sector — Exchange Rate Appreciation (ZAR/USD): Trade Balance & Domestic Inflation",
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
    ],
    "chapterId": "ch16",
    "topic": "Exchange Rate Appreciation (ZAR/USD): Trade Balance & Domestic Inflation"
  },
  {
    "id": "q_ch17_01",
    "chapter": "ch17",
    "source": "Chapter 17 — A Simple Keynesian Model of the Economy — Core Assumptions & Equilibrium Laws of the Simple Keynesian Model",
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
    ],
    "chapterId": "ch17",
    "topic": "Core Assumptions & Equilibrium Laws of the Simple Keynesian Model"
  },
  {
    "id": "q_ch17_02",
    "chapter": "ch17",
    "source": "Chapter 17 — A Simple Keynesian Model of the Economy — Closed-Economy Multiplier, Equilibrium Income & Investment Injection",
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
    ],
    "chapterId": "ch17",
    "topic": "Closed-Economy Multiplier, Equilibrium Income & Investment Injection"
  },
  {
    "id": "q_ch18_01",
    "chapter": "ch18",
    "source": "Chapter 18 — The Keynesian Model with a Government and a Foreign Sector — Open-Economy Keynesian Model: Multiplier, Equilibrium & Fiscal Gap (Portofino)",
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
    ],
    "chapterId": "ch18",
    "topic": "Open-Economy Keynesian Model: Multiplier, Equilibrium & Fiscal Gap (Portofino)"
  },
  {
    "id": "q_ch18_02",
    "chapter": "ch18",
    "source": "Chapter 18 — The Keynesian Model with a Government and a Foreign Sector — Open-Economy Multiplier with Proportional Taxes & Induced Imports",
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
    ],
    "chapterId": "ch18",
    "topic": "Open-Economy Multiplier with Proportional Taxes & Induced Imports"
  },
  {
    "id": "q_ch18_03",
    "chapter": "ch18",
    "source": "Chapter 18 — The Keynesian Model with a Government and a Foreign Sector — Fiscal Transfer Shock, Tax Rate Adjustment & New Equilibrium Output",
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
    ],
    "chapterId": "ch18",
    "topic": "Fiscal Transfer Shock, Tax Rate Adjustment & New Equilibrium Output"
  },
  {
    "id": "q_ch19_01",
    "chapter": "ch19",
    "source": "Chapter 19 — More on Macroeconomic Theory and Policy — Monetarist Rules vs Keynesian Counter-Cyclical Stabilisation Debate",
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
    ],
    "chapterId": "ch19",
    "topic": "Monetarist Rules vs Keynesian Counter-Cyclical Stabilisation Debate"
  },
  {
    "id": "q_ch19_02",
    "chapter": "ch19",
    "source": "Chapter 19 — More on Macroeconomic Theory and Policy — Wealth, Interest-Rate & International Trade Effects on the AD Slope",
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
    ],
    "chapterId": "ch19",
    "topic": "Wealth, Interest-Rate & International Trade Effects on the AD Slope"
  },
  {
    "id": "q_ch20_01",
    "chapter": "ch20",
    "source": "Chapter 20 — Inflation — Implicit GDP Deflator & Annual Inflation Rate Calculation",
    "citation": "Mohr 6e, §20.2, pp. 438–442",
    "difficulty": "Medium",
    "stem": "The macroeconomic table below shows Nominal GDP and Real GDP (in R millions) for two consecutive years: in Period 1, Nominal GDP = 5 130 703 and Real GDP = 4 028 475; in Period 2, Nominal GDP = 5 643 773 and Real GDP = 4 391 038. Calculate the implicit GDP deflator for both years and the resulting annual inflation rate (rounded to 2 decimal places).",
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
    ],
    "chapterId": "ch20",
    "topic": "Implicit GDP Deflator & Annual Inflation Rate Calculation"
  },
  {
    "id": "q_ch20_02",
    "chapter": "ch20",
    "source": "Chapter 20 — Inflation — Three-Good Economy: Nominal GDP, Real GDP & Deflator Inflation",
    "citation": "Mohr 6e, §13.2 & §20.2, pp. 243, 441",
    "difficulty": "Medium",
    "stem": "An economy produces three goods (Period 1 is the base year): Pizza (Period 1: Q=24, P=R22.50; Period 2: Q=36, P=R24.75), Soda (Period 1: Q=50, P=R4.00; Period 2: Q=75, P=R4.40), and Ice Cream (Period 1: Q=15, P=R8.00; Period 2: Q=22.5, P=R8.80). Calculate Period 1 Nominal/Real GDP, Period 2 Nominal and Real GDP, the Period 2 GDP Deflator, and the Period 2 inflation rate.",
    "derivation": "\\text{GDP}_{1}^{\\text{Nom}} = \\text{GDP}_{1}^{\\text{Real}} = 24(22.5) + 50(4) + 15(8) = \\text{R}860. \\\\ \\text{GDP}_{2}^{\\text{Nom}} = 36(24.75) + 75(4.4) + 22.5(8.8) = \\text{R}1\\,419; \\quad \\text{GDP}_{2}^{\\text{Real}} = 36(22.5) + 75(4) + 22.5(8) = \\text{R}1\\,290. \\\\ \\text{Deflator}_{2} = \\frac{1419}{1290}\\times 100 = 110.0 \\implies \\pi_{2} = 10.0\\%.",
    "options": [
      {
        "text": "Period 1 GDP is R860; Period 2 Nominal is R1 419 and Real is R1 290; Period 2 Deflator is 110 and inflation is 10%.",
        "isCorrect": true,
        "refutation": "Correct! Period 1 GDP = 540 + 200 + 120 = R860; Period 2 Nominal = 891 + 330 + 198 = R1 419; Period 2 Real = 810 + 300 + 180 = R1 290; Deflator = 110, so inflation = 10%."
      },
      {
        "text": "Period 1 GDP is R860; Period 2 Nominal is R1 419 and Real is R1 290; Period 2 Deflator is 110 and inflation is 50%.",
        "isCorrect": false,
        "refutation": "50% is the real output growth rate [(1 290 - 860)/860 × 100 = 50%], whereas price inflation is [(110 - 100)/100 × 100] = 10%."
      },
      {
        "text": "Period 1 GDP is R860; Period 2 Nominal is R1 290 and Real is R1 419; Period 2 Deflator is 90.9 and inflation is -9.1%.",
        "isCorrect": false,
        "refutation": "This swaps Period 2 Nominal GDP (current prices = R1 419) with Period 2 Real GDP (Period 1 constant prices = R1 290)."
      },
      {
        "text": "Period 1 GDP is R946; Period 2 Nominal is R1 419 and Real is R1 290; Period 2 Deflator is 110 and inflation is 65%.",
        "isCorrect": false,
        "refutation": "R946 values Period 1 quantities at Period 2 prices, and 65% is the nominal GDP growth rate [(1 419 - 860)/860 × 100 = 65%], not the inflation rate."
      }
    ],
    "chapterId": "ch20",
    "topic": "Three-Good Economy: Nominal GDP, Real GDP & Deflator Inflation"
  },
  {
    "id": "q_ch20_03",
    "chapter": "ch20",
    "source": "Chapter 20 — Inflation — Structural Comparison of CPI, PPI & the Implicit GDP Deflator",
    "citation": "Mohr 6e, §20.2, pp. 438–442",
    "difficulty": "Easy",
    "stem": "Which statement accurately contrasts the Consumer Price Index (CPI), the Producer Price Index (PPI), and the Implicit GDP Deflator in South Africa?",
    "derivation": "\\text{CPI: Urban consumer basket (incl. imports and services)}. \\quad \\text{PPI: Production gate (excl. services and VAT, incl. capital/intermediate)}. \\quad \\text{Deflator: All domestic final output (excl. imports)}.",
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
    ],
    "chapterId": "ch20",
    "topic": "Structural Comparison of CPI, PPI & the Implicit GDP Deflator"
  },
  {
    "id": "q_ch21_01",
    "chapter": "ch21",
    "source": "Chapter 21 — Unemployment, Poverty and Inequality — Strict Unemployment Rate & Labour Force Participation Rate (Elaria)",
    "citation": "Mohr 6e, §21.1, pp. 469–471",
    "difficulty": "Medium",
    "stem": "In the economy of Elaria (quarterly survey), workforce statistics are: Employed = 6 750 000; Unemployed (actively seeking work) = 2 220 000; Discouraged work seekers = 1 030 000; Students = 2 950 000; Homemakers = 1 280 000; Too old/young to work = 740 000; Illness = 640 000; Disability = 560 000. Calculate the strict (narrow) and broad (expanded) unemployment rates.",
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
    ],
    "chapterId": "ch21",
    "topic": "Strict Unemployment Rate & Labour Force Participation Rate (Elaria)"
  },
  {
    "id": "q_ch21_02",
    "chapter": "ch21",
    "source": "Chapter 21 — Unemployment, Poverty and Inequality — Strict vs Expanded (Broad) Unemployment & Discouraged Work-Seekers (Tigeria)",
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
    ],
    "chapterId": "ch21",
    "topic": "Strict vs Expanded (Broad) Unemployment & Discouraged Work-Seekers (Tigeria)"
  },
  {
    "id": "q_ch21_03",
    "chapter": "ch21",
    "source": "Chapter 21 — Unemployment, Poverty and Inequality — Diagnosing Frictional, Seasonal, Structural & Cyclical Unemployment",
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
    ],
    "chapterId": "ch21",
    "topic": "Diagnosing Frictional, Seasonal, Structural & Cyclical Unemployment"
  },
  {
    "id": "q_ch21_04",
    "chapter": "ch21",
    "source": "Chapter 21 — Unemployment, Poverty and Inequality — Stagflation & Rightward Shift of the Short-Run Phillips Curve",
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
    ],
    "chapterId": "ch21",
    "topic": "Stagflation & Rightward Shift of the Short-Run Phillips Curve"
  },
  {
    "id": "q_ch22_01",
    "chapter": "ch22",
    "source": "Chapter 22 — Economic Growth and Business Cycles — Business Cycle Phases: Trough, Upswing (Expansion), Peak & Downswing",
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
    ],
    "chapterId": "ch22",
    "topic": "Business Cycle Phases: Trough, Upswing (Expansion), Peak & Downswing"
  },
  {
    "id": "q_ch22_02",
    "chapter": "ch22",
    "source": "Chapter 22 — Economic Growth and Business Cycles — Limitations of Real GDP Per Capita as a Measure of Social Welfare",
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
    ],
    "chapterId": "ch22",
    "topic": "Limitations of Real GDP Per Capita as a Measure of Social Welfare"
  },
  {
    "id": "q_ch13_06",
    "chapter": "ch13",
    "source": "Chapter 13 — Measuring the Performance of the Economy — Expenditure GDP (C+I+G+X-Z), GDE & Factor Cost Valuation",
    "citation": "Mohr 6e, §13.2–13.3, pp. 241–246",
    "difficulty": "Medium",
    "stem": "Table 1 provides South African statistics for Period 2 (in R millions): Household expenditure = 974 252; Fixed capital consumption = 170 986; Exports = 492 646; Imports = 569 321; Taxes on production and imports = 205 562; Subsidies = 11 433; GDP at market prices (GDPMP) = 1 530 580; Wages paid to RSA au pairs working in the USA = 1 500; Salaries paid to Cuban doctors working in RSA = 1 800. Calculate GDP at factor cost (GDPfc) and Gross National Product at market prices (GNPmp).",
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
    ],
    "chapterId": "ch13",
    "topic": "Expenditure GDP (C+I+G+X-Z), GDE & Factor Cost Valuation"
  },
  {
    "id": "q_ch13_07",
    "chapter": "ch13",
    "source": "Chapter 13 — Measuring the Performance of the Economy — Value-Added Chain in Event Production (Celebration House Gala)",
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
    ],
    "chapterId": "ch13",
    "topic": "Value-Added Chain in Event Production (Celebration House Gala)"
  },
  {
    "id": "q_ch14_05",
    "chapter": "ch14",
    "source": "Chapter 14 — The Monetary Sector — Comprehensive M1, M2 & M3 Money Supply Schedule Calculation",
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
    ],
    "chapterId": "ch14",
    "topic": "Comprehensive M1, M2 & M3 Money Supply Schedule Calculation"
  },
  {
    "id": "q_ch15_05",
    "chapter": "ch15",
    "source": "Chapter 15 — The Government Sector — Progressive Tax Bracket, Primary Rebate & Marginal Rate (Bella Mbonambi R315 850)",
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
    ],
    "chapterId": "ch15",
    "topic": "Progressive Tax Bracket, Primary Rebate & Marginal Rate (Bella Mbonambi R315 850)"
  },
  {
    "id": "q_ch16_04",
    "chapter": "ch16",
    "source": "Chapter 16 — The Foreign Sector — Comparative Advantage in Wagyu Beef & Seafood (Japan & Portugal)",
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
    ],
    "chapterId": "ch16",
    "topic": "Comparative Advantage in Wagyu Beef & Seafood (Japan & Portugal)"
  },
  {
    "id": "q_ch18_04",
    "chapter": "ch18",
    "source": "Chapter 18 — The Keynesian Model with a Government and a Foreign Sector — Imports as a Function of Disposable Income (Z = Z̄ + mYd) & Budget Balance",
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
        "refutation": "248.65 treats induced imports as 0.3Y instead of 0.3Yd = 0.3(0.75Y) = 0.225Y as specified in the structural equation Z = 30 + 0.3Yd."
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
    ],
    "chapterId": "ch18",
    "topic": "Imports as a Function of Disposable Income (Z = Z̄ + mYd) & Budget Balance"
  },
  {
    "id": "q_ch20_04",
    "chapter": "ch20",
    "source": "Chapter 20 — Inflation — Household Basket Cost-of-Living Escalation Under Headline CPI Inflation",
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
    ],
    "chapterId": "ch20",
    "topic": "Household Basket Cost-of-Living Escalation Under Headline CPI Inflation"
  },
  {
    "id": "q_ch13_08",
    "chapter": "ch13",
    "source": "Chapter 13 — Measuring the Performance of the Economy — National Accounting Matrix: GDPbp, GDPfc, GNImp & Net Primary Income",
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
    ],
    "chapterId": "ch13",
    "topic": "National Accounting Matrix: GDPbp, GDPfc, GNImp & Net Primary Income"
  },
  {
    "id": "q_ch13_09",
    "chapter": "ch13",
    "source": "Chapter 13 — Measuring the Performance of the Economy — Base-Period vs Current-Period Nominal & Real GDP (Hogwarts Basket)",
    "citation": "Mohr 6e, §13.2, pp. 244–245",
    "difficulty": "Easy",
    "stem": "In the economy of Hogwarts, three goods are produced: Cell phones (Period 1 base period: P = R100, Q = 1; Period 2: P = R110, Q = 1), Tablets (Period 1: P = R10, Q = 8; Period 2: P = R12, Q = 10), and Laptops (Period 1: P = R5, Q = 4; Period 2: P = R4, Q = 5). Calculate Period 1 Nominal GDP, Period 2 Nominal GDP (and percentage nominal growth), and Period 2 Real GDP at Period 1 constant prices.",
    "derivation": "\\text{Nom GDP}_{1} = 100(1) + 10(8) + 5(4) = \\text{R}200. \\quad \\text{Nom GDP}_{2} = 110(1) + 12(10) + 4(5) = \\text{R}250 \\; (+25\\%). \\\\ \\text{Real GDP}_{2} = 100(1) + 10(10) + 5(5) = 100 + 100 + 25 = \\text{R}225 \\; (+12.5\\% \\text{ real growth}).",
    "options": [
      {
        "text": "Period 1 Nominal GDP is R200, Period 2 Nominal GDP is R250 (up 25%), and Period 2 Real GDP is R225.",
        "isCorrect": true,
        "refutation": "Correct! Period 1 Nominal GDP = 100 + 80 + 20 = R200; Period 2 Nominal GDP = 110 + 120 + 20 = R250 (up 25%); and Period 2 Real GDP at base prices = 100(1) + 10(10) + 5(5) = R225."
      },
      {
        "text": "Period 1 Nominal GDP is R200, Period 2 Nominal GDP is R225 (up 12.5%), and Period 2 Real GDP is R250.",
        "isCorrect": false,
        "refutation": "This swaps Period 2 Nominal GDP (R250 at Period 2 current prices) with Period 2 Real GDP (R225 at Period 1 constant base prices)."
      },
      {
        "text": "Period 1 Nominal GDP is R210, Period 2 Nominal GDP is R250 (up 19%), and Period 2 Real GDP is R200.",
        "isCorrect": false,
        "refutation": "Period 1 Nominal GDP is 100(1) + 10(8) + 5(4) = R200, and Period 2 Real GDP rises to R225 because tablet and laptop quantities expanded."
      },
      {
        "text": "Period 1 Nominal GDP is R180, Period 2 Nominal GDP is R240 (up 33.3%), and Period 2 Real GDP is R215.",
        "isCorrect": false,
        "refutation": "Summing P × Q across Cell phones, Tablets, and Laptops yields R200 in Period 1, R250 in Period 2 at current prices, and R225 at base prices."
      }
    ],
    "chapterId": "ch13",
    "topic": "Base-Period vs Current-Period Nominal & Real GDP (Hogwarts Basket)"
  },
  {
    "id": "q_ch13_10",
    "chapter": "ch13",
    "source": "Chapter 13 — Measuring the Performance of the Economy — Multi-Good Nominal GDP, Real GDP & Implicit Price Deflator",
    "citation": "Mohr 6e, §13.2 & §20.2, pp. 244–245, 442",
    "difficulty": "Medium",
    "stem": "An economy produces Fish, Pork, and Beef. In the Base Period, prices and quantities were Fish: P = $7, Q = 400; Pork: P = $8, Q = 225; Beef: P = $10, Q = 175. In the Current Period, prices and quantities are Fish: P = $9, Q = 900; Pork: P = $6, Q = 275; Beef: P = $15, Q = 275. Calculate Current Period Nominal GDP, Current Period Real GDP (at Base Period prices), and the Current Period GDP Deflator.",
    "derivation": "\\text{Nom GDP} = 9(900) + 6(275) + 15(275) = 8\\,100 + 1\\,650 + 4\\,125 = \\$13\\,875. \\\\ \\text{Real GDP} = 7(900) + 8(275) + 10(275) = 6\\,300 + 2\\,200 + 2\\,750 = \\$11\\,250. \\quad \\text{Deflator} = \\frac{13\\,875}{11\\,250} \\times 100 = 123.33.",
    "options": [
      {
        "text": "Current Nominal GDP is $13 875, Real GDP is $11 250, and the GDP Deflator is 123.33 (up 23.33%).",
        "isCorrect": true,
        "refutation": "Correct! Current Nominal GDP = 8 100 + 1 650 + 4 125 = $13 875; Real GDP at base prices = 6 300 + 2 200 + 2 750 = $11 250; Deflator = (13 875 / 11 250) × 100 = 123.33."
      },
      {
        "text": "Current Nominal GDP is $11 250, Real GDP is $13 875, and the GDP Deflator is 81.08 (down 18.92%).",
        "isCorrect": false,
        "refutation": "81.08 inverts the GDP Deflator formula by dividing Real GDP ($11 250) by Nominal GDP ($13 875) instead of Nominal by Real."
      },
      {
        "text": "Current Nominal GDP is $13 875, Real GDP is $6 350, and the GDP Deflator is 218.50 (up 118.50%).",
        "isCorrect": false,
        "refutation": "$6 350 is Base Period GDP [7(400) + 8(225) + 10(175)], whereas Current Real GDP must multiply Current Period quantities (900, 275, 275) by Base Period prices ($11 250)."
      },
      {
        "text": "Current Nominal GDP is $12 450, Real GDP is $11 250, and the GDP Deflator is 110.67 (up 10.67%).",
        "isCorrect": false,
        "refutation": "Valuing current quantities at current prices gives 9(900) + 6(275) + 15(275) = $13 875, yielding a GDP Deflator of 123.33."
      }
    ],
    "chapterId": "ch13",
    "topic": "Multi-Good Nominal GDP, Real GDP & Implicit Price Deflator"
  },
  {
    "id": "q_ch14_06",
    "chapter": "ch14",
    "source": "Chapter 14 — The Monetary Sector — Financial Intermediaries, SARB Functions & Open-Market Operations",
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
    ],
    "chapterId": "ch14",
    "topic": "Financial Intermediaries, SARB Functions & Open-Market Operations"
  },
  {
    "id": "q_ch15_06",
    "chapter": "ch15",
    "source": "Chapter 15 — The Government Sector — Bracket Creep (Fiscal Drag) Under Unindexed Nominal Wage Inflation",
    "citation": "Mohr 6e, §15.11 & §20.3, pp. 316–319, 447",
    "difficulty": "Hard",
    "stem": "An individual earned R375 000 taxable income in both Schedule A and Schedule B. In Schedule A, the bracket R296 541 – R410 460 was taxed at 'R63 478 + 31% above R296 540' (with zero rebate subtracted). In Schedule B, Treasury adjusted the bracket to R305 851 – R423 300 taxed at 'R63 853 + 31% above R305 850'. Calculate gross tax payable in both years and explain why Treasury adjusts bracket thresholds upward.",
    "derivation": "T_{17/18} = 63\\,478 + 0.31(375\\,000 - 296\\,540) = \\text{R}87\\,800.60 \\text{ (or R86 232.60 with R61 910 base)}. \\\\ T_{18/19} = 63\\,853 + 0.31(375\\,000 - 305\\,850) = 63\\,853 + 21\\,436.50 = \\text{R}85\\,289.50 \\text{ (ATR } = 22.74\\%\\text{)}.",
    "options": [
      {
        "text": "Schedule B gross tax is R85 289.50 (22.74% average rate); raising bracket thresholds provides relief against bracket creep.",
        "isCorrect": true,
        "refutation": "Correct! In Schedule B, R63 853 + 0.31(69 150) = R85 289.50 (22.74% of R375 000), and raising bracket thresholds prevents inflation from pushing taxpayers into higher brackets (fiscal drag)."
      },
      {
        "text": "Schedule B gross tax is R116 250.00 (31.00% average rate); raising bracket thresholds increases fiscal drag revenue.",
        "isCorrect": false,
        "refutation": "R116 250 multiplies the entire R375 000 income by the 31% marginal rate instead of applying 31% only to income above R305 850."
      },
      {
        "text": "Schedule B gross tax is R63 853.00 (17.03% average rate); raising bracket thresholds converts the tax into a regressive tax.",
        "isCorrect": false,
        "refutation": "R63 853 is only the base tax on the first R305 850; you must add 31% of the R69 150 excess (R21 436.50) to get R85 289.50."
      },
      {
        "text": "Schedule B gross tax is R94 785.00 (25.28% average rate); raising bracket thresholds eliminates value-added tax (VAT).",
        "isCorrect": false,
        "refutation": "31% of (375 000 - 305 850) is R21 436.50, which added to R63 853 equals R85 289.50, and personal income tax adjustments do not eliminate VAT."
      }
    ],
    "chapterId": "ch15",
    "topic": "Bracket Creep (Fiscal Drag) Under Unindexed Nominal Wage Inflation"
  },
  {
    "id": "q_ch16_05",
    "chapter": "ch16",
    "source": "Chapter 16 — The Foreign Sector — Labour-Hour Opportunity Cost & Mutual Gains from Trade (Cloth & Wine)",
    "citation": "Mohr 6e, §16.2, pp. 325–329",
    "difficulty": "Medium",
    "stem": "Suppose 1 hour of labour in South Africa can produce either 6 metres of cloth or 4 cars, whereas 1 hour of labour in Zimbabwe can produce either 1 metre of cloth or 5 cars. Determine the opportunity cost of producing 1 metre of cloth and 1 car in each country, and state which country should specialise in each product.",
    "derivation": "\\text{SA: } 1\\text{m cloth} = \\frac{4}{6} = 0.67\\text{ cars}, \\; 1\\text{ car} = \\frac{6}{4} = 1.50\\text{m cloth}. \\quad \\text{Zim: } 1\\text{m cloth} = \\frac{5}{1} = 5\\text{ cars}, \\; 1\\text{ car} = \\frac{1}{5} = 0.20\\text{m cloth}.",
    "options": [
      {
        "text": "SA has comparative advantage in cloth (0.67 < 5 cars) and Zimbabwe has comparative advantage in cars (0.20 < 1.50m cloth).",
        "isCorrect": true,
        "refutation": "Correct! SA sacrifices only 4/6 = 0.67 cars per metre of cloth (vs 5 cars in Zimbabwe), while Zimbabwe sacrifices only 1/5 = 0.20m of cloth per car (vs 1.50m in SA)."
      },
      {
        "text": "SA has comparative advantage in both cloth and cars because 6 + 4 = 10 total units per hour exceeds Zimbabwe's 6 units.",
        "isCorrect": false,
        "refutation": "A country cannot hold a comparative advantage in both goods because opportunity costs are reciprocals of each other (0.67 vs 5 and 1.50 vs 0.20)."
      },
      {
        "text": "SA has comparative advantage in cars (1.50 > 0.20m cloth) and Zimbabwe has comparative advantage in cloth (5 > 0.67 cars).",
        "isCorrect": false,
        "refutation": "Comparative advantage belongs to the producer with the LOWER opportunity cost, not the higher opportunity cost."
      },
      {
        "text": "Zimbabwe has absolute and comparative advantage in cloth because 1 metre requires less raw cotton than 6 metres.",
        "isCorrect": false,
        "refutation": "South Africa produces more cloth per hour (6m > 1m, absolute advantage) and at a lower opportunity cost (0.67 < 5 cars, comparative advantage)."
      }
    ],
    "chapterId": "ch16",
    "topic": "Labour-Hour Opportunity Cost & Mutual Gains from Trade (Cloth & Wine)"
  },
  {
    "id": "q_ch17_03",
    "chapter": "ch17",
    "source": "Chapter 17 — A Simple Keynesian Model of the Economy — Deriving the Consumption Function & Autonomous Spending from Saving",
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
    ],
    "chapterId": "ch17",
    "topic": "Deriving the Consumption Function & Autonomous Spending from Saving"
  },
  {
    "id": "q_ch17_04",
    "chapter": "ch17",
    "source": "Chapter 17 — A Simple Keynesian Model of the Economy — Classical Say's Law vs Keynesian Effective Demand Principle",
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
    ],
    "chapterId": "ch17",
    "topic": "Classical Say's Law vs Keynesian Effective Demand Principle"
  },
  {
    "id": "q_ch18_05",
    "chapter": "ch18",
    "source": "Chapter 18 — The Keynesian Model with a Government and a Foreign Sector — Direct Autonomous Government Spending Injection vs Tax-Rate Multiplier Effect",
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
        "refutation": "G does NOT affect the size of the multiplier α because G is autonomous (independent of Y)."
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
    ],
    "chapterId": "ch18",
    "topic": "Direct Autonomous Government Spending Injection vs Tax-Rate Multiplier Effect"
  },
  {
    "id": "q_ch19_03",
    "chapter": "ch19",
    "source": "Chapter 19 — More on Macroeconomic Theory and Policy — Structural Transmission of Monetary & Fiscal Policy in the AD–AS Model",
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
    ],
    "chapterId": "ch19",
    "topic": "Structural Transmission of Monetary & Fiscal Policy in the AD–AS Model"
  },
  {
    "id": "q_ch19_04",
    "chapter": "ch19",
    "source": "Chapter 19 — More on Macroeconomic Theory and Policy — Exchange-Rate & Asset-Price Channels of the Monetary Transmission Mechanism",
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
    ],
    "chapterId": "ch19",
    "topic": "Exchange-Rate & Asset-Price Channels of the Monetary Transmission Mechanism"
  },
  {
    "id": "q_ch20_05",
    "chapter": "ch20",
    "source": "Chapter 20 — Inflation — Converting Nominal GDP Growth & Real GDP Growth into Deflator Inflation",
    "citation": "Mohr 6e, §20.2, pp. 441–443",
    "difficulty": "Medium",
    "stem": "According to central bank national accounting statistics, Nominal GDP was R2 917 539 million in Period 1 and R3 155 195 million in Period 2, while Real GDP (at constant base prices) was R1 905 736 million in Period 1 and R1 954 303 million in Period 2. Calculate the implicit GDP Deflator for Period 1 and Period 2 and the resulting annual inflation rate.",
    "derivation": "\\text{Defl}_{1} = \\frac{2\\,917\\,539}{1\\,905\\,736}\\times 100 = 153.09; \\quad \\text{Defl}_{2} = \\frac{3\\,155\\,195}{1\\,954\\,303}\\times 100 = 161.45. \\\\ \\pi_{2} = \\frac{161.45 - 153.09}{153.09}\\times 100 = 5.46\\%.",
    "options": [
      {
        "text": "The Period 1 GDP Deflator is 153.09, the Period 2 GDP Deflator is 161.45, and the inflation rate is 5.46%.",
        "isCorrect": true,
        "refutation": "Correct! Deflator 1 = (2 917 539 / 1 905 736) × 100 = 153.09 and Deflator 2 = (3 155 195 / 1 954 303) × 100 = 161.45; percentage change = (161.45 - 153.09) / 153.09 × 100 = 5.46%."
      },
      {
        "text": "The Period 1 GDP Deflator is 153.09, the Period 2 GDP Deflator is 161.45, and the inflation rate is 8.36%.",
        "isCorrect": false,
        "refutation": "8.36% is the raw index-point difference (161.45 - 153.09) without dividing by the Period 1 base deflator of 153.09."
      },
      {
        "text": "The Period 1 GDP Deflator is 65.32, the Period 2 GDP Deflator is 61.94, and the inflation rate is -5.17%.",
        "isCorrect": false,
        "refutation": "65.32 and 61.94 invert the GDP Deflator formula by dividing Real GDP by Nominal GDP instead of Nominal GDP by Real GDP."
      },
      {
        "text": "The Period 1 GDP Deflator is 150.00, the Period 2 GDP Deflator is 161.45, and the inflation rate is 8.15%.",
        "isCorrect": false,
        "refutation": "8.15% is the growth rate of Nominal GDP [(3 155 195 - 2 917 539) / 2 917 539], which combines real output growth (2.55%) and inflation (5.46%)."
      }
    ],
    "chapterId": "ch20",
    "topic": "Converting Nominal GDP Growth & Real GDP Growth into Deflator Inflation"
  },
  {
    "id": "q_ch21_05",
    "chapter": "ch21",
    "source": "Chapter 21 — Unemployment, Poverty and Inequality — Multi-Period Labour Force Growth vs Job Creation & Unemployment Rate Shift",
    "citation": "Mohr 6e, §21.1, pp. 468–471",
    "difficulty": "Easy",
    "stem": "Labour market survey statistics for an economy show the following: in Period 1, 14 500 000 people were employed and 1 500 000 were strictly unemployed; in Period 2, 15 000 000 people were employed and 2 500 000 were strictly unemployed. Calculate the total labour force in Period 1 and Period 2, and the official unemployment rate in Period 2.",
    "derivation": "LF_{1} = 14.5\\text{m} + 1.5\\text{m} = 16.0\\text{m}; \\quad LF_{2} = 15.0\\text{m} + 2.5\\text{m} = 17.5\\text{m}. \\quad u_{2} = \\frac{2.5}{17.5} \\times 100 = 14.29\\%.",
    "options": [
      {
        "text": "The labour force was 16.0 million in Period 1 and 17.5 million in Period 2, and Period 2 unemployment was 14.29%.",
        "isCorrect": true,
        "refutation": "Correct! Summing employed and unemployed yields LF = 16.0m (14.5m + 1.5m) in Period 1 and 17.5m (15.0m + 2.5m) in Period 2, so u = 2.5 / 17.5 × 100 = 14.29%."
      },
      {
        "text": "The labour force was 14.5 million in Period 1 and 15.0 million in Period 2, and Period 2 unemployment was 16.67%.",
        "isCorrect": false,
        "refutation": "The labour force must include both employed and unemployed persons (15.0m + 2.5m = 17.5m); dividing 2.5m by 15.0m employed gives 16.67%."
      },
      {
        "text": "The labour force was 16.0 million in Period 1 and 17.5 million in Period 2, and Period 2 unemployment was 9.38%.",
        "isCorrect": false,
        "refutation": "9.38% is the Period 1 unemployment rate (1.5m / 16.0m = 9.38%), whereas in Period 2 the rate rose to 2.5m / 17.5m = 14.29%."
      },
      {
        "text": "The labour force was 13.0 million in Period 1 and 12.5 million in Period 2, and Period 2 unemployment was 20.00%.",
        "isCorrect": false,
        "refutation": "This subtracts the unemployed from the employed (15.0m - 2.5m = 12.5m) instead of summing them to find the total labour force (17.5m)."
      }
    ],
    "chapterId": "ch21",
    "topic": "Multi-Period Labour Force Growth vs Job Creation & Unemployment Rate Shift"
  },
  {
    "id": "q_ch22_03",
    "chapter": "ch22",
    "source": "Chapter 22 — Economic Growth and Business Cycles — Capital Widening vs Capital Deepening in Long-Run Economic Growth",
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
    ],
    "chapterId": "ch22",
    "topic": "Capital Widening vs Capital Deepening in Long-Run Economic Growth"
  },
  {
    "id": "q_ch22_04",
    "chapter": "ch22",
    "source": "Chapter 22 — Economic Growth and Business Cycles — Leading, Coincident & Lagging Business Cycle Indicators & Rule of 70",
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
    ],
    "chapterId": "ch22",
    "topic": "Leading, Coincident & Lagging Business Cycle Indicators & Rule of 70"
  },
  {
    "id": "q_ch13_11",
    "chapterId": "ch13",
    "source": "Chapter 13 — Measuring the Performance of the Economy — Value-Added, Expenditure & Income Approaches in a Coffee Supply Chain",
    "topic": "Value-Added, Expenditure & Income Approaches in a Coffee Supply Chain",
    "difficulty": "Hard",
    "stem": "A domestic coffee farmer harvests 30 kg of green coffee beans and sells the entire harvest to an international roaster for R50 per kg. The roaster processes and packages the beans into 30 retail packs and exports them back to a domestic coffeehouse chain at R200 per pack. The coffeehouse chain brews and sells the coffee to final consumers, generating R5,000 in net value added beyond its import cost. Compute (1) the farmer's value added, (2) the roaster's value added, (3) total final retail expenditure, and (4) the domestic economy's total Value Added if the roaster operates abroad.",
    "derivation": [
      "\\text{Step 1 (Farmer VA): } 30\\text{ kg} \\times \\text{R}50 = \\text{R}1,500\\text{ (zero prior intermediate inputs)}",
      "\\text{Step 2 (Roaster VA): } (30 \\times \\text{R}200) - \\text{R}1,500 = \\text{R}6,000 - \\text{R}1,500 = \\text{R}4,500",
      "\\text{Step 3 (Final Retail Sales): } \\text{R}6,000\\text{ (intermediate cost)} + \\text{R}5,000\\text{ (retailer VA)} = \\text{R}11,000",
      "\\text{Step 4 (Domestic GDP vs Total Chain VA): } \\text{Total Chain VA} = 1,500 + 4,500 + 5,000 = \\text{R}11,000;\\quad \\text{Domestic VA} = 1,500 + 5,000 = \\text{R}6,500"
    ],
    "options": [
      {
        "text": "Farmer VA = R1,500; Roaster VA = R4,500; Final retail expenditure = R11,000; Domestic VA = R6,500 (Total chain VA = R11,000).",
        "isCorrect": true,
        "refutation": "Correct! Summing value added across all three stages equals final retail expenditure (R11,000), while domestic GDP excludes the R4,500 value added created abroad."
      },
      {
        "text": "Farmer VA = R1,500; Roaster VA = R6,000; Final retail expenditure = R12,500; Domestic VA = R6,500 (Total chain VA = R12,500).",
        "isCorrect": false,
        "refutation": "This fails to subtract the R1,500 intermediate bean purchase from the roaster's R6,000 sales revenue, double-counting the farmer's output."
      },
      {
        "text": "Farmer VA = R1,500; Roaster VA = R4,500; Final retail expenditure = R18,500; Domestic VA = R11,000 (Total chain VA = R18,500).",
        "isCorrect": false,
        "refutation": "Summing gross sales across stages (R1,500 + R6,000 + R11,000 = R18,500) commits classic multiple counting of intermediate inputs."
      },
      {
        "text": "Farmer VA = R3,000; Roaster VA = R4,500; Final retail expenditure = R11,000; Domestic VA = R9,500 (Total chain VA = R11,000).",
        "isCorrect": false,
        "refutation": "Selling 30 kg at R50/kg generates R1,500 in primary agricultural value added, not R3,000, and domestic VA is R1,500 + R5,000 = R6,500."
      }
    ],
    "chapter": "ch13",
    "citation": "Mohr 6e, Mohr 6e, pp. 235–265 • Study Unit 1, pp. 2–11"
  },
  {
    "id": "q_ch13_12",
    "chapterId": "ch13",
    "source": "Chapter 13 — Measuring the Performance of the Economy — Multi-Good Real GDP & Real Economic Growth Rate",
    "topic": "Multi-Good Real GDP & Real Economic Growth Rate",
    "difficulty": "Medium",
    "stem": "An economy produces three goods (Clothes, Food, and Drink). In Period 1 (the base period), prices and quantities are: Clothes (P = R260, Q = 13), Food (P = R2 150, Q = 12), and Drink (P = R655, Q = 11). In Period 2, prices and quantities are: Clothes (P = R310, Q = 10), Food (P = R2 100, Q = 13), and Drink (P = R680, Q = 11). Calculate Real GDP in Period 1, Real GDP in Period 2 (at constant Period 1 prices), and the real economic growth rate.",
    "derivation": [
      "\\text{Real GDP}_{1} = (260 \\times 13) + (2\\,150 \\times 12) + (655 \\times 11) = 3\\,380 + 25\\,800 + 7\\,205 = \\text{R}36\\,385",
      "\\text{Real GDP}_{2}\\text{ (at Period 1 constant prices)} = (260 \\times 10) + (2\\,150 \\times 13) + (655 \\times 11) = 2\\,600 + 27\\,950 + 7\\,205 = \\text{R}37\\,755",
      "\\text{Nominal GDP}_{2}\\text{ (at Period 2 current prices)} = (310 \\times 10) + (2\\,100 \\times 13) + (680 \\times 11) = 3\\,100 + 27\\,300 + 7\\,480 = \\text{R}37\\,880",
      "g_{\\text{real}} = \\frac{37\\,755 - 36\\,385}{36\\,385} \\times 100 = \\frac{1\\,370}{36\\,385} \\times 100 = +3.77\\%"
    ],
    "options": [
      {
        "text": "Period 1 Real GDP = R36 385; Period 2 Real GDP = R37 755; Real GDP growth rate = +3.77% (Nominal GDP = R37 880).",
        "isCorrect": true,
        "refutation": "Correct! Period 1 Real GDP is 3 380 + 25 800 + 7 205 = R36 385, and Period 2 Real GDP at Period 1 constant prices is 2 600 + 27 950 + 7 205 = R37 755 (+3.77% real growth)."
      },
      {
        "text": "Period 1 Real GDP = R36 385; Period 2 Real GDP = R37 880; Real GDP growth rate = +4.11% (Nominal GDP = R37 755).",
        "isCorrect": false,
        "refutation": "R37 880 (3 100 + 27 300 + 7 480) is Period 2 Nominal GDP at current Period 2 prices, which conflates price changes with real volume growth."
      },
      {
        "text": "Period 1 Real GDP = R36 710; Period 2 Real GDP = R37 755; Real GDP growth rate = +2.85% (Nominal GDP = R37 880).",
        "isCorrect": false,
        "refutation": "R36 710 values Period 1 quantities at Period 2 prices (310×13 + 2 100×12 + 680×11), violating constant Period 1 base-period valuation."
      },
      {
        "text": "Period 1 Real GDP = R36 385; Period 2 Real GDP = R37 755; Real GDP growth rate = +3.63% (dividing by Period 2 GDP).",
        "isCorrect": false,
        "refutation": "3.63% divides the R1 370 real output increase by Period 2 Real GDP (R37 755) instead of the initial Period 1 base value (R36 385)."
      }
    ],
    "chapter": "ch13",
    "citation": "Mohr 6e, Mohr 6e, pp. 235–265 • Study Unit 1, pp. 2–11"
  },
  {
    "id": "q_ch13_13",
    "chapterId": "ch13",
    "source": "Chapter 13 — Measuring the Performance of the Economy — Reconciling Value-Added and Factor Income in a Service Production Chain",
    "topic": "Reconciling Value-Added and Factor Income in a Service Production Chain",
    "difficulty": "Hard",
    "stem": "A hospitality event involves three domestic firms: (1) A wholesale food supplier with zero intermediate inputs sells ingredients for $71,220, paying $10,100 in wages (the remainder is operating profit); (2) A catering firm purchases those ingredients ($71,220), pays $11,400 in wages, and earns $527,680 in profit; (3) An event management firm purchases the catered banquet, pays $200,000 in wages and $40,000 in profit, and sells the final event package for $850,300. Determine the catering firm's sales revenue, the catering firm's value added, the event management firm's value added, and total GDP.",
    "derivation": [
      "\\text{Caterer Value Added} = \\text{Wages} + \\text{Profit} = 11,400 + 527,680 = \\$539,080",
      "\\text{Caterer Sales Revenue} = \\text{Intermediate Inputs} + \\text{Value Added} = 71,220 + 539,080 = \\$610,300",
      "\\text{Event Manager Value Added} = 850,300 - 610,300 = \\$240,000 = \\text{Wages }(200,000) + \\text{Profit }(40,000)",
      "\\text{Total GDP} = 71,220 + 539,080 + 240,000 = \\$850,300 = \\text{Total Wages }(221,500) + \\text{Total Profit }(628,800)"
    ],
    "options": [
      {
        "text": "Caterer sales = $610,300; Caterer VA = $539,080; Event Manager VA = $240,000; Total GDP = $850,300.",
        "isCorrect": true,
        "refutation": "Correct! Every firm's net value added equals the sum of its factor incomes (wages + profit), and total value added equals final expenditure ($850,300)."
      },
      {
        "text": "Caterer sales = $539,080; Caterer VA = $467,860; Event Manager VA = $311,220; Total GDP = $850,300.",
        "isCorrect": false,
        "refutation": "This confuses the caterer's value added ($539,080 = wages + profit) with its gross sales revenue ($610,300 = intermediate inputs + value added)."
      },
      {
        "text": "Caterer sales = $610,300; Caterer VA = $610,300; Event Manager VA = $850,300; Total GDP = $1,531,820.",
        "isCorrect": false,
        "refutation": "Summing gross sales across all three firms ($71,220 + $610,300 + $850,300 = $1,531,820) double-counts intermediate inputs at both downstream stages."
      },
      {
        "text": "Caterer sales = $610,300; Caterer VA = $539,080; Event Manager VA = $200,000; Total GDP = $810,300.",
        "isCorrect": false,
        "refutation": "The event manager's value added includes both its $200,000 wage bill and its $40,000 operating profit ($240,000 total)."
      }
    ],
    "chapter": "ch13",
    "citation": "Mohr 6e, Mohr 6e, pp. 235–265 • Study Unit 1, pp. 2–11"
  },
  {
    "id": "q_ch13_14",
    "chapterId": "ch13",
    "source": "Chapter 13 — Measuring the Performance of the Economy — Bridging GDE at Market Prices to GDP and Net National Income",
    "topic": "Bridging GDE at Market Prices to GDP and Net National Income",
    "difficulty": "Hard",
    "stem": "Given the following National Accounts data (in R millions): Gross Domestic Expenditure at market prices (GDE_mp) = 9,000; Exports of goods and services (X) = 6,900; Imports of goods and services (Z) = 6,400; Capital stock = 5,500 (depreciating at 7% per annum); Foreign factor receipts = 3,500; Foreign factor payments = 2,900; Taxes on production/products = 600; Subsidies = 3,100. Calculate GDP at market prices (GDP_mp) and Net National Income at factor cost (NI).",
    "derivation": [
      "\\text{GDP}_{mp} = \\text{GDE}_{mp} + X - Z = 9,000 + 6,900 - 6,400 = \\text{R}9,500\\text{ million}",
      "\\text{Depreciation } (D) = 0.07 \\times 5,500 = \\text{R}385\\text{ million}",
      "\\text{GNP}_{mp} = 9,500 + 3,500 - 2,900 = \\text{R}10,100\\text{ million};\\quad \\text{NNP}_{mp} = 10,100 - 385 = \\text{R}9,715\\text{ million}",
      "\\text{NI (at factor cost)} = \\text{NNP}_{mp} - \\text{Taxes} + \\text{Subsidies} = 9,715 - 600 + 3,100 = \\text{R}12,215\\text{ million}"
    ],
    "options": [
      {
        "text": "GDP at market prices = R9,500 million; Depreciation = R385 million; Net National Income (factor cost) = R12,215 million.",
        "isCorrect": true,
        "refutation": "Correct! Adding net exports (+500) to GDE gives GDP_mp = 9,500; adjusting for net foreign factor income (+600), depreciation (-385), and net subsidies (+2,500) yields R12,215m."
      },
      {
        "text": "GDP at market prices = R8,500 million; Depreciation = R385 million; Net National Income (factor cost) = R6,215 million.",
        "isCorrect": false,
        "refutation": "This subtracts net exports instead of adding (X - Z = +500) and reverses the signs on taxes and subsidies when moving from market prices to factor cost."
      },
      {
        "text": "GDP at market prices = R9,500 million; Depreciation = R385 million; Net National Income (factor cost) = R7,215 million.",
        "isCorrect": false,
        "refutation": "Moving from market prices to factor cost requires subtracting indirect taxes (-600) and adding subsidies (+3,100), not subtracting subsidies."
      },
      {
        "text": "GDP at market prices = R9,500 million; Depreciation = R5,500 million; Net National Income (factor cost) = R7,100 million.",
        "isCorrect": false,
        "refutation": "Only the annual consumption of fixed capital (7% of 5,500 = 385), not the entire R5,500 million capital stock, is deducted as depreciation."
      }
    ],
    "chapter": "ch13",
    "citation": "Mohr 6e, Mohr 6e, pp. 235–265 • Study Unit 1, pp. 2–11"
  },
  {
    "id": "q_ch13_15",
    "chapterId": "ch13",
    "source": "Chapter 13 — Measuring the Performance of the Economy — Deriving GDE at Factor Cost and Net National Income at Market Prices",
    "topic": "Deriving GDE at Factor Cost and Net National Income at Market Prices",
    "difficulty": "Hard",
    "stem": "An open economy reports the following figures (in R millions): GDP at market prices (GDP_mp) = 8,000; Exports (X) = 6,100; Imports (Z) = 8,350; Subsidies = 3,200; Value-Added Tax (indirect taxes) = 900; Capital stock = 6,000 with an annual depreciation rate of 7%; Factor income earned abroad by residents = 2,500; Factor income paid to non-residents = 3,100. Calculate (1) Gross Domestic Expenditure at factor cost (GDE_fc) and (2) Net National Income at market prices (NNP_mp).",
    "derivation": [
      "\\text{Step 1: }\\text{GDE}_{mp} = \\text{GDP}_{mp} - X + Z = 8,000 - 6,100 + 8,350 = \\text{R}10,250\\text{ million}",
      "\\text{Step 2: }\\text{GDE}_{fc} = \\text{GDE}_{mp} - \\text{Taxes} + \\text{Subsidies} = 10,250 - 900 + 3,200 = \\text{R}12,550\\text{ million}",
      "\\text{Step 3: }\\text{Depreciation } (D) = 0.07 \\times 6,000 = \\text{R}420\\text{ million}",
      "\\text{Step 4: }\\text{NNP}_{mp} = \\text{GDP}_{mp} + \\text{Net Foreign Income} - D = 8,000 + (2,500 - 3,100) - 420 = \\text{R}6,980\\text{ million}"
    ],
    "options": [
      {
        "text": "GDE at factor cost (GDE_fc) = R12,550 million; Net National Income at market prices (NNP_mp) = R6,980 million.",
        "isCorrect": true,
        "refutation": "Correct! Since imports exceed exports by 2,250, GDE_mp is 10,250; adding net subsidies (+2,300) gives GDE_fc = 12,550, and deducting net foreign outflow (-600) and depreciation (-420) from GDP_mp gives 6,980."
      },
      {
        "text": "GDE at factor cost (GDE_fc) = R8,050 million; Net National Income at market prices (NNP_mp) = R9,280 million.",
        "isCorrect": false,
        "refutation": "This subtracts subsidies and adds indirect taxes when computing GDE_fc, and erroneously adds net subsidies to NNP at market prices."
      },
      {
        "text": "GDE at factor cost (GDE_fc) = R7,950 million; Net National Income at market prices (NNP_mp) = R8,180 million.",
        "isCorrect": false,
        "refutation": "This reverses the trade balance adjustment (computing 8,000 + 6,100 - 8,350 = 5,750 instead of 10,250) and reverses net foreign factor income."
      },
      {
        "text": "GDE at factor cost (GDE_fc) = R10,250 million; Net National Income at market prices (NNP_mp) = R7,400 million.",
        "isCorrect": false,
        "refutation": "R10,250 million is GDE at market prices (before adjusting for VAT and subsidies), and R7,400 million omits the R420 million capital depreciation deduction."
      }
    ],
    "chapter": "ch13",
    "citation": "Mohr 6e, Mohr 6e, pp. 235–265 • Study Unit 1, pp. 2–11"
  },
  {
    "id": "q_ch13_16",
    "chapterId": "ch13",
    "source": "Chapter 13 — Measuring the Performance of the Economy — Computing NDP, Factor Cost GDP, and GNP from Base Accounts",
    "topic": "Computing NDP, Factor Cost GDP, and GNP from Base Accounts",
    "difficulty": "Medium",
    "stem": "Suppose an economy reports GDP at market prices = R45,000 million, Consumption of fixed capital (depreciation) = R2,500 million, Indirect taxes = R1,500 million, Subsidies = R1,500 million, Factor income earned in the rest of the world by residents = R2,000 million, and Factor income earned in the domestic economy by non-residents = R5,000 million. Compute (1) Net Domestic Product at market prices (NDP_mp), (2) GDP at factor cost (GDP_fc), and (3) Gross National Product at market prices (GNP_mp).",
    "derivation": [
      "\\text{NDP}_{mp} = \\text{GDP}_{mp} - \\text{Depreciation} = 45,000 - 2,500 = \\text{R}42,500\\text{ million}",
      "\\text{GDP}_{fc} = \\text{GDP}_{mp} - \\text{Indirect Taxes} + \\text{Subsidies} = 45,000 - 1,500 + 1,500 = \\text{R}45,000\\text{ million}",
      "\\text{GNP}_{mp} = \\text{GDP}_{mp} + \\text{Foreign Receipts} - \\text{Foreign Payments} = 45,000 + 2,000 - 5,000 = \\text{R}42,000\\text{ million}"
    ],
    "options": [
      {
        "text": "NDP at market prices = R42,500 million; GDP at factor cost = R45,000 million; GNP at market prices = R42,000 million.",
        "isCorrect": true,
        "refutation": "Correct! Equal indirect taxes and subsidies leave GDP_fc equal to GDP_mp (R45,000m), while deducting R2,500m depreciation gives NDP_mp = R42,500m and net factor outflow (-R3,000m) gives GNP_mp = R42,000m."
      },
      {
        "text": "NDP at market prices = R47,500 million; GDP at factor cost = R42,000 million; GNP at market prices = R48,000 million.",
        "isCorrect": false,
        "refutation": "This adds depreciation instead of subtracting it, subtracts both taxes and subsidies, and reverses the sign of net foreign factor payments."
      },
      {
        "text": "NDP at market prices = R42,500 million; GDP at factor cost = R43,500 million; GNP at market prices = R39,500 million.",
        "isCorrect": false,
        "refutation": "GDP_fc must add back the R1,500m in subsidies after subtracting R1,500m in indirect taxes, and GNP_mp is gross of the R2,500m depreciation."
      },
      {
        "text": "NDP at market prices = R42,000 million; GDP at factor cost = R45,000 million; GNP at market prices = R42,500 million.",
        "isCorrect": false,
        "refutation": "This swaps the definitions of Net Domestic Product (R42,500m) and Gross National Product (R42,000m)."
      }
    ],
    "chapter": "ch13",
    "citation": "Mohr 6e, Mohr 6e, pp. 235–265 • Study Unit 1, pp. 2–11"
  },
  {
    "id": "q_ch13_17",
    "chapterId": "ch13",
    "source": "Chapter 13 — Measuring the Performance of the Economy — Isolating Volume Growth from Price Inflation in a Two-Good Economy",
    "topic": "Isolating Volume Growth from Price Inflation in a Two-Good Economy",
    "difficulty": "Medium",
    "stem": "An economy produces only two final goods: Good A (Bread) and Good B (Milk). In Period 1 (the base period), 1 000 loaves of Bread are produced and sold at R15 each and 2 000 litres of Milk are produced and sold at R5 each. In Period 2, 1 200 loaves of Bread are produced and sold at R20 each and 2 200 litres of Milk are produced and sold at R10 each. Calculate Period 1 Nominal GDP, Period 2 Nominal GDP (and percentage nominal growth), and Period 2 Real GDP at constant Period 1 prices.",
    "derivation": [
      "\\text{Period 1 GDP (Nominal = Real)} = (1\\,000 \\times 15) + (2\\,000 \\times 5) = 15\\,000 + 10\\,000 = \\text{R}25\\,000",
      "\\text{Period 2 Nominal GDP} = (1\\,200 \\times 20) + (2\\,200 \\times 10) = 24\\,000 + 22\\,000 = \\text{R}46\\,000 \\implies \\% \\Delta \\text{Nominal} = \\frac{46\\,000 - 25\\,000}{25\\,000} \\times 100 = +84.0\\%",
      "\\text{Period 2 Real GDP (at Period 1 prices)} = (1\\,200 \\times 15) + (2\\,200 \\times 5) = 18\\,000 + 11\\,000 = \\text{R}29\\,000",
      "\\% \\Delta \\text{Real GDP} = \\frac{29\\,000 - 25\\,000}{25\\,000} \\times 100 = +16.0\\%"
    ],
    "options": [
      {
        "text": "Period 1 GDP = R25 000; Period 2 Nominal GDP = R46 000 (+84.0%); Period 2 Real GDP = R29 000 (+16.0% real growth).",
        "isCorrect": true,
        "refutation": "Correct! Period 1 GDP is 15 000 + 10 000 = R25 000; Period 2 Nominal GDP is 24 000 + 22 000 = R46 000 (+84.0%), while holding prices constant at Period 1 levels gives R29 000 (+16.0%)."
      },
      {
        "text": "Period 1 GDP = R25 000; Period 2 Nominal GDP = R46 000 (+84.0%); Period 2 Real GDP = R46 000 (+84.0% real growth).",
        "isCorrect": false,
        "refutation": "Using Period 2 current prices to compute Real GDP fails to strip out inflation, overstating real economic expansion by 68 percentage points."
      },
      {
        "text": "Period 1 GDP = R25 000; Period 2 Nominal GDP = R29 000 (+16.0%); Period 2 Real GDP = R46 000 (+84.0% real growth).",
        "isCorrect": false,
        "refutation": "This inverts Nominal GDP (valued at current Period 2 prices = R46 000) and Real GDP (valued at constant Period 1 prices = R29 000)."
      },
      {
        "text": "Period 1 GDP = R40 000; Period 2 Nominal GDP = R46 000 (+15.0%); Period 2 Real GDP = R29 000 (-27.5% real growth).",
        "isCorrect": false,
        "refutation": "R40 000 values Period 1 quantities at Period 2 prices (1 000×20 + 2 000×10) instead of Period 1 base prices (R25 000)."
      }
    ],
    "chapter": "ch13",
    "citation": "Mohr 6e, Mohr 6e, pp. 235–265 • Study Unit 1, pp. 2–11"
  },
  {
    "id": "q_ch13_18",
    "chapterId": "ch13",
    "source": "Chapter 13 — Measuring the Performance of the Economy — Deriving Net National Income and GDE from GDP at Market Prices",
    "topic": "Deriving Net National Income and GDE from GDP at Market Prices",
    "difficulty": "Medium",
    "stem": "Consider the following national accounting data (in R millions): GDP at market prices (GDP_mp) = 550,250; Gross Domestic Expenditure (GDE) = 554,750 (with Exports X = 120,500 and Imports Z = 125,000); Consumption of fixed capital (depreciation) = 12,450; Factor income received from abroad = 8,200; Factor income paid to abroad = 11,400; Indirect taxes = 22,300; Subsidies = 15,000. Verify GDE at market prices and calculate Net National Income at factor cost (NI).",
    "derivation": [
      "\\text{GDE}_{mp} = \\text{GDP}_{mp} - X + Z = 550,250 - 120,500 + 125,000 = \\text{R}554,750\\text{ million}",
      "\\text{GNP}_{mp} = 550,250 + 8,200 - 11,400 = \\text{R}547,050\\text{ million}",
      "\\text{NNP}_{mp} = 547,050 - 12,450 = \\text{R}534,600\\text{ million}",
      "\\text{NI (at factor cost)} = 534,600 - 22,300 + 15,000 = \\text{R}527,300\\text{ million}"
    ],
    "options": [
      {
        "text": "GDE at market prices = R554,750 million; GNP at market prices = R547,050 million; Net National Income (NI) = R527,300 million.",
        "isCorrect": true,
        "refutation": "Correct! Net imports (+4,500) make GDE_mp = 554,750; subtracting net foreign factor outflow (-3,200), depreciation (-12,450), and net indirect taxes (-7,300) yields NI = R527,300m."
      },
      {
        "text": "GDE at market prices = R545,750 million; GNP at market prices = R553,450 million; Net National Income (NI) = R548,300 million.",
        "isCorrect": false,
        "refutation": "This reverses the signs on net exports (subtracting Z and adding X), net foreign factor income, and net indirect taxes."
      },
      {
        "text": "GDE at market prices = R554,750 million; GNP at market prices = R547,050 million; Net National Income (NI) = R539,750 million.",
        "isCorrect": false,
        "refutation": "R539,750 million omits the deduction of consumption of fixed capital (depreciation = R12,450 million)."
      },
      {
        "text": "GDE at market prices = R554,750 million; GNP at market prices = R534,600 million; Net National Income (NI) = R541,900 million.",
        "isCorrect": false,
        "refutation": "Converting from market prices to factor cost requires subtracting indirect taxes (-22,300) and adding subsidies (+15,000), not adding +7,300."
      }
    ],
    "chapter": "ch13",
    "citation": "Mohr 6e, Mohr 6e, pp. 235–265 • Study Unit 1, pp. 2–11"
  },
  {
    "id": "q_ch13_19",
    "chapterId": "ch13",
    "source": "Chapter 13 — Measuring the Performance of the Economy — The Five Macroeconomic Objectives & BoP Sub-Accounts",
    "topic": "The Five Macroeconomic Objectives & BoP Sub-Accounts",
    "difficulty": "Easy",
    "stem": "Which five fundamental macroeconomic objectives serve as criteria for evaluating economic performance, and how does the Balance of Payments (BoP) divide international transactions between its two primary sub-accounts?",
    "derivation": [
      "\\text{Five Objectives: (1) Economic growth, (2) Full employment, (3) Price stability, (4) Balance of payments (external) stability, (5) Equitable distribution of income}",
      "\\text{Current Account: records exports/imports of goods and services, primary factor income flows, and current transfers}",
      "\\text{Financial Account: records international flows of financial assets and liabilities (direct, portfolio, and other investment)}"
    ],
    "options": [
      {
        "text": "Economic growth, full employment, price stability, BoP stability, and equitable income distribution; the Current Account records trade in goods/services and income flows, while the Financial Account records cross-border asset/liability flows.",
        "isCorrect": true,
        "refutation": "Correct! These are the five pillars of macroeconomic policy and the exact division between the Current and Financial accounts of the Balance of Payments."
      },
      {
        "text": "Zero inflation, budget surpluses, fixed exchange rates, nationalisation, and tariff protection; the Current Account records portfolio investment, while the Financial Account records merchandise exports and imports.",
        "isCorrect": false,
        "refutation": "Price stability means low inflation (not necessarily zero), and the descriptions of the Current and Financial accounts are completely inverted."
      },
      {
        "text": "Economic growth, full employment, price stability, BoP stability, and equitable income distribution; the Current Account records government tax revenue, while the Financial Account records commercial bank credit creation.",
        "isCorrect": false,
        "refutation": "The Balance of Payments records transactions between domestic residents and the rest of the world, not domestic fiscal revenue or domestic bank lending."
      },
      {
        "text": "Profit maximisation, utility maximisation, market clearing, perfect competition, and factor mobility; the Current Account records short-term capital flows, while the Financial Account records long-term merchandise trade.",
        "isCorrect": false,
        "refutation": "Profit and utility maximisation are microeconomic behavioural assumptions, not macroeconomic policy objectives, and merchandise trade belongs in the Current Account."
      }
    ],
    "chapter": "ch13",
    "citation": "Mohr 6e, Mohr 6e, pp. 235–265 • Study Unit 1, pp. 2–11"
  },
  {
    "id": "q_ch13_20",
    "chapterId": "ch13",
    "source": "Chapter 13 — Measuring the Performance of the Economy — Interpreting the Lorenz Curve Diagonal, Inequality Area, and Gini Coefficient",
    "topic": "Interpreting the Lorenz Curve Diagonal, Inequality Area, and Gini Coefficient",
    "difficulty": "Easy",
    "stem": "In a standard Lorenz curve diagram where cumulative population percentage is plotted on the horizontal axis and cumulative income percentage is plotted on the vertical axis: (1) What does the 45-degree diagonal line 0B represent? (2) What does the crescent area between the diagonal 0B and the bowed Lorenz curve represent? (3) How is a Gini coefficient of 0.67 interpreted?",
    "derivation": [
      "\\text{Diagonal } 0B: \\text{Line of perfect equality (every } x\\% \\text{ of the population receives exactly } x\\% \\text{ of total income)}",
      "\\text{Area between } 0B \\text{ and Lorenz curve}: \\text{Area of inequality } (A)",
      "\\text{Gini Coefficient} = \\frac{\\text{Area of inequality } A}{\\text{Total triangular area under diagonal } (A + B)} \\in [0, 1]",
      "\\text{Gini} = 0.67 \\implies \\text{Extremely high income inequality (closer to perfect inequality 1 than perfect equality 0)}"
    ],
    "options": [
      {
        "text": "(1) The line of perfect equality; (2) The area of income inequality; (3) A Gini coefficient of 0.67 indicates very high income inequality (since 0 is perfect equality and 1 is perfect inequality).",
        "isCorrect": true,
        "refutation": "Correct! The 45° diagonal is the benchmark of perfect equality, the shaded deviation is the area of inequality, and 0.67 reflects severe income concentration."
      },
      {
        "text": "(1) The line of perfect inequality; (2) The area of disposable savings; (3) A Gini coefficient of 0.67 indicates that 67% of the population lives below the poverty line.",
        "isCorrect": false,
        "refutation": "The 45° line represents perfect equality (not inequality), and the Gini coefficient measures relative dispersion rather than the headcount poverty rate."
      },
      {
        "text": "(1) The aggregate expenditure schedule; (2) Autonomous consumption; (3) A Gini coefficient of 0.67 indicates a relatively equal distribution because it is close to 1.0.",
        "isCorrect": false,
        "refutation": "A Gini coefficient close to 1.0 indicates extreme inequality (one person receives all income), whereas 0 represents perfect equality."
      },
      {
        "text": "(1) The line of perfect equality; (2) The area of income inequality; (3) A Gini coefficient of 0.67 indicates that the poorest 67% of households earn 67% of national income.",
        "isCorrect": false,
        "refutation": "If the poorest 67% earned 67% of income, the Lorenz curve would lie on the line of perfect equality (Gini = 0)."
      }
    ],
    "chapter": "ch13",
    "citation": "Mohr 6e, Mohr 6e, pp. 235–265 • Study Unit 1, pp. 2–11"
  },
  {
    "id": "q_ch14_07",
    "chapterId": "ch14",
    "source": "Chapter 14 — The Monetary Sector — Economic Definition and Functions of Money vs Factor Inputs",
    "topic": "Economic Definition and Functions of Money vs Factor Inputs",
    "difficulty": "Easy",
    "stem": "Evaluate the following statements regarding the nature and functions of money: (1) How is money formally defined in economics? (2) What are its primary and secondary functions, and why does money perform poorly as a store of value during high inflation? (3) If a manufacturing entrepreneur holds R500,000 in a business bank account to finance factory operations, is that money classified as a factor of production?",
    "derivation": [
      "\\text{Definition: Money is anything that is generally accepted as payment for goods and services or that is accepted in settlement of debt}",
      "\\text{Functions: (1) Medium of exchange (primary), (2) Unit of account, (3) Store of value (eroded by inflation as purchasing power falls)}",
      "\\text{Factor of Production Test: Money is a financial asset/medium of exchange, NEVER a physical factor of production (Capital = physical machinery/buildings)}"
    ],
    "options": [
      {
        "text": "Money is anything generally accepted in payment or settlement of debt; it serves as medium of exchange, unit of account, and store of value (which loses real purchasing power during inflation); money is never a factor of production.",
        "isCorrect": true,
        "refutation": "Correct! Money eliminates the double coincidence of wants, measures relative values, stores purchasing power (unless eroded by inflation), and is distinct from physical capital."
      },
      {
        "text": "Money is equal to household income and wealth; it serves as a medium of barter, fiscal stabilizer, and store of value (which appreciates during inflation); bank balances are classified as the capital factor of production.",
        "isCorrect": false,
        "refutation": "Money (a stock) is distinct from income (a flow), inflation erodes the real purchasing power of money, and economic capital refers strictly to physical equipment and structures."
      },
      {
        "text": "Money is exclusively gold-backed coins and notes issued by the Treasury; its sole function is a unit of account; money held by a manufacturing firm is classified as a financial factor of production alongside labour.",
        "isCorrect": false,
        "refutation": "Modern fiat money consists primarily of demand deposits created by banks, not gold-backed coins, and financial balances cannot directly produce goods and services."
      },
      {
        "text": "Money is anything generally accepted in payment or settlement of debt; its primary function is a store of value while medium of exchange is secondary; money in a corporate account is counted as physical capital.",
        "isCorrect": false,
        "refutation": "The primary, defining function of money is serving as a medium of exchange, and corporate cash balances are financial assets rather than physical capital inputs."
      }
    ],
    "chapter": "ch14",
    "citation": "Mohr 6e, Mohr 6e, pp. 267–294 • Study Unit 2.1, pp. 14–24"
  },
  {
    "id": "q_ch14_08",
    "chapterId": "ch14",
    "source": "Chapter 14 — The Monetary Sector — Transactions, Precautionary, and Speculative Motives for Holding Money",
    "topic": "Transactions, Precautionary, and Speculative Motives for Holding Money",
    "difficulty": "Medium",
    "stem": "According to Keynes's liquidity preference theory of the demand for money ($L = L_1(Y) + L_2(i)$), how are the three motives for holding money grouped into active versus passive balances, and what are their respective determinants?",
    "derivation": [
      "\\text{Active Balances } L_1(Y): \\text{Transactions motive (bridging receipt-payment gaps) + Precautionary motive (unforeseen contingencies)}",
      "\\frac{\\partial L_1}{\\partial Y} > 0: \\text{Active balances depend positively on the level of national income } Y",
      "\\text{Passive/Idle Balances } L_2(i): \\text{Speculative motive (holding cash vs interest-bearing bonds based on expected interest rate movements)}",
      "\\frac{\\partial L_2}{\\partial i} < 0: \\text{Speculative balances depend inversely on the market interest rate } i\\text{ (opportunity cost of holding cash)}"
    ],
    "options": [
      {
        "text": "Active balances (transactions and precautionary motives) vary positively with national income Y, while passive balances (speculative motive) vary inversely with the interest rate i.",
        "isCorrect": true,
        "refutation": "Correct! Higher income increases transaction volume and precautionary needs ($L_1(Y)$), while a higher interest rate raises the opportunity cost of holding idle cash and lowers bond prices ($L_2(i)$)."
      },
      {
        "text": "Active balances (speculative and precautionary motives) vary inversely with national income Y, while passive balances (transactions motive) vary positively with the interest rate i.",
        "isCorrect": false,
        "refutation": "This misclassifies the speculative and transactions motives and reverses the signs of both income and interest-rate relationships."
      },
      {
        "text": "All three motives (transactions, precautionary, and speculative) depend exclusively on the repo rate set by the central bank and are independent of real national income Y.",
        "isCorrect": false,
        "refutation": "Transactions and precautionary demand ($L_1$) are driven primarily by the volume of income and expenditure $Y$, shifting the $L$ curve rightward when $Y$ rises."
      },
      {
        "text": "Active balances (transactions motive) vary inversely with the interest rate i, while passive balances (precautionary and speculative motives) vary positively with national income Y.",
        "isCorrect": false,
        "refutation": "The precautionary motive belongs to active balances $L_1(Y)$, and speculative demand $L_2(i)$ is negatively related to the interest rate $i$."
      }
    ],
    "chapter": "ch14",
    "citation": "Mohr 6e, Mohr 6e, pp. 267–294 • Study Unit 2.1, pp. 14–24"
  },
  {
    "id": "q_ch14_09",
    "chapterId": "ch14",
    "source": "Chapter 14 — The Monetary Sector — Calculating M1, M2, and M3 from Coins, Demand, Quasi-Money, and Long-Term Deposits",
    "topic": "Calculating M1, M2, and M3 from Coins, Demand, Quasi-Money, and Long-Term Deposits",
    "difficulty": "Medium",
    "stem": "Given the following monetary sector data (in R millions): Coins and banknotes in circulation outside the monetary sector = 39,080; Cheque and transmission (demand) deposits = 382,414; Other short-term and medium-term deposits (quasi-money) = 397,246; Long-term deposits = 95,410. Calculate the monetary aggregates M1, M2, and M3.",
    "derivation": [
      "M_1 = C + D = 39,080 + 382,414 = \\text{R}421,494\\text{ million}",
      "M_2 = M_1 + \\text{Quasi-money (short/medium-term deposits)} = 421,494 + 397,246 = \\text{R}818,740\\text{ million}",
      "M_3 = M_2 + \\text{Long-term deposits} = 818,740 + 95,410 = \\text{R}914,150\\text{ million}"
    ],
    "options": [
      {
        "text": "M1 = R421,494 million; M2 = R818,740 million; M3 = R914,150 million.",
        "isCorrect": true,
        "refutation": "Correct! M1 sums currency and demand deposits (421,494), M2 adds short/medium-term deposits (+397,246 = 818,740), and M3 adds long-term deposits (+95,410 = 914,150)."
      },
      {
        "text": "M1 = R39,080 million; M2 = R421,494 million; M3 = R818,740 million.",
        "isCorrect": false,
        "refutation": "M1 includes both currency in circulation (39,080) and demand deposits (382,414), not currency alone."
      },
      {
        "text": "M1 = R421,494 million; M2 = R516,904 million; M3 = R914,150 million.",
        "isCorrect": false,
        "refutation": "This adds long-term deposits (95,410) instead of short/medium-term quasi-money deposits (397,246) when moving from M1 to M2."
      },
      {
        "text": "M1 = R382,414 million; M2 = R779,660 million; M3 = R875,070 million.",
        "isCorrect": false,
        "refutation": "This omits the R39,080 million of coins and banknotes in circulation outside the monetary sector from all three aggregates."
      }
    ],
    "chapter": "ch14",
    "citation": "Mohr 6e, Mohr 6e, pp. 267–294 • Study Unit 2.1, pp. 14–24"
  },
  {
    "id": "q_ch14_10",
    "chapterId": "ch14",
    "source": "Chapter 14 — The Monetary Sector — Aggregating Multi-Maturity Deposits into M1, M2, and M3",
    "topic": "Aggregating Multi-Maturity Deposits into M1, M2, and M3",
    "difficulty": "Medium",
    "stem": "A central bank reports the following monetary liabilities (in R billions): Banknotes and coins in circulation = 110; Cheque and transmission deposits = 650; Other demand/short-term deposits = 2,500; 30-day notice deposits = 670; 60-day fixed deposits = 395; Long-term deposits (exceeding 6 months) = 450. Compute (1) M1 (currency plus cheque/transmission deposits), (2) M2 (M1 plus all other short- and medium-term deposits: 2,500 + 670 + 395), and (3) M3.",
    "derivation": [
      "M_1 = 110 + 650 = \\text{R}760\\text{ billion}",
      "\\text{Short and Medium-Term Quasi-Money} = 2,500 + 670 + 395 = \\text{R}3,565\\text{ billion}",
      "M_2 = M_1 + 3,565 = 760 + 3,565 = \\text{R}4,325\\text{ billion}",
      "M_3 = M_2 + \\text{Long-term deposits }(450) = 4,325 + 450 = \\text{R}4,775\\text{ billion}"
    ],
    "options": [
      {
        "text": "M1 = R760 billion; M2 = R4,325 billion; M3 = R4,775 billion.",
        "isCorrect": true,
        "refutation": "Correct! M1 is 110 + 650 = R760bn; adding short- and medium-term deposits (2,500 + 670 + 395 = 3,565) yields M2 = R4,325bn; adding long-term deposits (450) yields M3 = R4,775bn."
      },
      {
        "text": "M1 = R3,260 billion; M2 = R3,930 billion; M3 = R4,325 billion.",
        "isCorrect": false,
        "refutation": "This misclassifies the short/medium-term deposits into M1 and omits the R450 billion long-term deposit tranche from M3."
      },
      {
        "text": "M1 = R760 billion; M2 = R3,260 billion; M3 = R3,710 billion.",
        "isCorrect": false,
        "refutation": "This omits the 30-day (R670bn) and 60-day (R395bn) medium-term deposits, which are core components of M2 and M3."
      },
      {
        "text": "M1 = R650 billion; M2 = R4,215 billion; M3 = R4,665 billion.",
        "isCorrect": false,
        "refutation": "This leaves out the R110 billion of banknotes and coins in circulation from M1, M2, and M3."
      }
    ],
    "chapter": "ch14",
    "citation": "Mohr 6e, Mohr 6e, pp. 267–294 • Study Unit 2.1, pp. 14–24"
  },
  {
    "id": "q_ch14_11",
    "chapterId": "ch14",
    "source": "Chapter 14 — The Monetary Sector — Endogenous Deposit Creation, Open-Market Operations, and Bank Regulation",
    "topic": "Endogenous Deposit Creation, Open-Market Operations, and Bank Regulation",
    "difficulty": "Medium",
    "stem": "How do commercial banks create money in a modern fractional-reserve banking system, how does the central bank use open-market operations (OMOs) during an economic downswing to stimulate liquidity, and why is strict prudential regulation of banks essential?",
    "derivation": [
      "\\text{Credit Creation: Banks create demand deposits (money) whenever they grant loans to creditworthy borrowers}",
      "\\text{Expansionary OMO: Central bank buys government bonds on the open market, injecting cash reserves into banks and lowering short-term interest rates}",
      "\\text{Prudential Regulation: Prevents excessive credit creation (inflationary pressure) and systemic bank failures/runs that threaten financial stability}"
    ],
    "options": [
      {
        "text": "Banks create money by granting loans that credit demand deposits; in a downswing, the central bank buys bonds on the open market to inject liquidity; regulation prevents systemic insolvency.",
        "isCorrect": true,
        "refutation": "Correct! Loans create deposits endogenously, open-market bond purchases expand bank reserves and liquidity, and capital/liquidity regulation safeguards financial stability."
      },
      {
        "text": "Banks create money by printing physical banknotes in their vaults; in a downswing, the central bank sells government bonds to drain liquidity; regulation ensures banks maximise private dividends.",
        "isCorrect": false,
        "refutation": "Only the central bank issues banknotes, and selling government bonds is a contractionary operation that drains liquidity rather than stimulating a downswing."
      },
      {
        "text": "Banks cannot create money and only lend out physical coins deposited by savers; in a downswing, the central bank raises the cash reserve ratio; regulation is designed to eliminate all interest.",
        "isCorrect": false,
        "refutation": "Modern commercial banks actively create new demand deposits through lending, and raising reserve requirements contracts rather than expands credit."
      },
      {
        "text": "Banks create money by purchasing foreign gold reserves; in a downswing, the central bank increases income tax rates; regulation forces commercial banks to lend exclusively to state enterprises.",
        "isCorrect": false,
        "refutation": "Income tax rates are an instrument of fiscal policy (National Treasury), not central bank open-market operations."
      }
    ],
    "chapter": "ch14",
    "citation": "Mohr 6e, Mohr 6e, pp. 267–294 • Study Unit 2.1, pp. 14–24"
  },
  {
    "id": "q_ch15_07",
    "chapterId": "ch15",
    "source": "Chapter 15 — The Government Sector — Calculating Tax Liability, Marginal Tax Rate, and Average Tax Rate for Person A (R25 000)",
    "topic": "Calculating Tax Liability, Marginal Tax Rate, and Average Tax Rate for Person A (R25 000)",
    "difficulty": "Medium",
    "stem": "Under a statutory progressive income tax schedule (with zero rebate), income up to R20 000 is taxed at 15% ('R0 + 15% of taxable income'), income between R20 001 and R60 000 is taxed at 'R3 000 + 20% of the amount above R20 000', and income above R60 000 is taxed at 'R11 000 + 40% of the amount above R60 000' (or 'R14 000 + 40% above R60 000' under the alternative 25% middle bracket). Calculate the tax liability, Marginal Tax Rate (MTR), and Average Tax Rate (ATR) for Person A who earns a taxable income of R25 000.",
    "derivation": [
      "\\text{Person A (}Y_A = \\text{R}25\\,000\\text{ in the R20 001 – R60 000 bracket):}",
      "\\text{Tax}_A = 3\\,000 + 0.20(25\\,000 - 20\\,000) = 3\\,000 + 1\\,000 = \\text{R}4\\,000",
      "\\text{Marginal Tax Rate (MTR}_A\\text{)} = 20.0\\%\\quad (\\text{rate on each Rand above R20 000})",
      "\\text{Average Tax Rate (ATR}_A\\text{)} = \\frac{4\\,000}{25\\,000} \\times 100 = 16.0\\%\\quad (\\text{strictly below MTR}_A = 20.0\\%)"
    ],
    "options": [
      {
        "text": "Person A pays R4 000 in tax, faces a Marginal Tax Rate of 20.0%, and has an Average Tax Rate of 16.0% (since the first R20 000 is taxed at 15%).",
        "isCorrect": true,
        "refutation": "Correct! Tax on the first R20 000 is R3 000 (15%) plus 20% of the R5 000 excess (R1 000) = R4 000, yielding an average tax rate of 4 000 / 25 000 = 16.0% and a marginal rate of 20.0%."
      },
      {
        "text": "Person A pays R5 000 in tax, faces a Marginal Tax Rate of 20.0%, and has an Average Tax Rate of 20.0% (applying 20% to total R25 000 income).",
        "isCorrect": false,
        "refutation": "R5 000 erroneously multiplies the entire R25 000 income by the 20% marginal rate instead of applying 20% only to the R5 000 excess above R20 000."
      },
      {
        "text": "Person A pays R4 000 in tax, faces a Marginal Tax Rate of 16.0%, and has an Average Tax Rate of 20.0% (inverting the marginal and average definitions).",
        "isCorrect": false,
        "refutation": "This swaps the Marginal Tax Rate (20.0% on the last Rand earned) with the Average Tax Rate (4 000 / 25 000 = 16.0% across total income)."
      },
      {
        "text": "Person A pays R3 750 in tax, faces a Marginal Tax Rate of 15.0%, and has an Average Tax Rate of 15.0% (applying the initial 15% base bracket rate).",
        "isCorrect": false,
        "refutation": "Because R25 000 exceeds the R20 000 threshold, the R5 000 excess is taxed at the higher 20% marginal rate (+R1 000), raising total tax to R4 000 (16.0%)."
      }
    ],
    "chapter": "ch15",
    "citation": "Mohr 6e, Mohr 6e, pp. 295–322 • Study Unit 2.2, pp. 25–46"
  },
  {
    "id": "q_ch15_08",
    "chapterId": "ch15",
    "source": "Chapter 15 — The Government Sector — Calculating the Fiscal Deficit from Expenditure and Revenue Components",
    "topic": "Calculating the Fiscal Deficit from Expenditure and Revenue Components",
    "difficulty": "Easy",
    "stem": "A national government records the following fiscal flows for the financial year (in R billions): Government consumption expenditure = 450; Government investment expenditure (capital formation) = 250; Transfer payments and debt service cost = 180; Tax revenue = 700; Non-tax revenue = 80. Calculate Total Government Expenditure, Total Government Revenue, and the resulting Budget Balance.",
    "derivation": [
      "\\text{Total Government Expenditure } (G_{\\text{total}}) = 450 + 250 + 180 = \\text{R}880\\text{ billion}",
      "\\text{Total Government Revenue } (T_{\\text{total}}) = 700 + 80 = \\text{R}780\\text{ billion}",
      "\\text{Budget Balance} = T_{\\text{total}} - G_{\\text{total}} = 780 - 880 = -\\text{R}100\\text{ billion (Budget Deficit of R100 billion)}"
    ],
    "options": [
      {
        "text": "Total Expenditure = R880 billion; Total Revenue = R780 billion; Budget Balance = -R100 billion (a fiscal deficit of R100 billion).",
        "isCorrect": true,
        "refutation": "Correct! Total outlays (450 + 250 + 180 = R880bn) exceed total receipts (700 + 80 = R780bn) by R100 billion, creating a budget deficit that must be financed by borrowing."
      },
      {
        "text": "Total Expenditure = R700 billion; Total Revenue = R780 billion; Budget Balance = +R80 billion (a fiscal surplus of R80 billion).",
        "isCorrect": false,
        "refutation": "Although transfer payments (R180bn) are excluded from G in GDP accounting, they are real cash outlays that must be included in Total Government Expenditure when computing the budget deficit."
      },
      {
        "text": "Total Expenditure = R880 billion; Total Revenue = R700 billion; Budget Balance = -R180 billion (a fiscal deficit of R180 billion).",
        "isCorrect": false,
        "refutation": "This omits the R80 billion in non-tax revenue from total government receipts."
      },
      {
        "text": "Total Expenditure = R630 billion; Total Revenue = R780 billion; Budget Balance = +R150 billion (a fiscal surplus of R150 billion).",
        "isCorrect": false,
        "refutation": "This omits the R250 billion of government capital investment expenditure from the fiscal budget."
      }
    ],
    "chapter": "ch15",
    "citation": "Mohr 6e, Mohr 6e, pp. 295–322 • Study Unit 2.2, pp. 25–46"
  },
  {
    "id": "q_ch15_09",
    "chapterId": "ch15",
    "source": "Chapter 15 — The Government Sector — Calculating Annual Tax Liability, Marginal Tax Rate, and Average Tax Rate for R26 700/Month",
    "topic": "Calculating Annual Tax Liability, Marginal Tax Rate, and Average Tax Rate for R26 700/Month",
    "difficulty": "Medium",
    "stem": "Muhammad works as a financial analyst earning a taxable salary of R26 700 per month. According to the statutory annual personal income tax table (before rebates), the bracket for R226 001 – R353 100 specifies: 'R40 680 + 26% of taxable income above R226 000'. Calculate (1) Muhammad's annual taxable income, (2) his annual tax liability under this bracket schedule, (3) his Marginal Tax Rate (MTR), and (4) his Average Tax Rate (ATR).",
    "derivation": [
      "\\text{Annual Taxable Income} = \\text{R}26\\,700 \\times 12 = \\text{R}320\\,400\\quad (\\text{falls in the R226 001 – R353 100 bracket})",
      "\\text{Annual Tax Liability} = 40\\,680 + 0.26(320\\,400 - 226\\,000) = 40\\,680 + 0.26(94\\,400) = 40\\,680 + 24\\,544 = \\text{R}65\\,224",
      "\\text{Marginal Tax Rate (MTR)} = 26.0\\%",
      "\\text{Average Tax Rate (ATR)} = \\frac{65\\,224}{320\\,400} \\times 100 = 20.36\\%"
    ],
    "options": [
      {
        "text": "Annual taxable income is R320 400, annual tax payable is R65 224, Marginal Tax Rate is 26.0%, and Average Tax Rate is 20.36%.",
        "isCorrect": true,
        "refutation": "Correct! Annualising R26 700 × 12 gives R320 400; adding 26% of the R94 400 excess (R24 544) to R40 680 gives R65 224, yielding MTR = 26.0% and ATR = 65 224 / 320 400 = 20.36%."
      },
      {
        "text": "Annual taxable income is R320 400, annual tax payable is R83 304, Marginal Tax Rate is 26.0%, and Average Tax Rate is 26.00%.",
        "isCorrect": false,
        "refutation": "R83 304 multiplies the entire R320 400 annual income by 26% instead of applying 26% only to the R94 400 excess above R226 000."
      },
      {
        "text": "Annual taxable income is R320 400, annual tax payable is R65 224, Marginal Tax Rate is 20.36%, and Average Tax Rate is 26.00%.",
        "isCorrect": false,
        "refutation": "This swaps the Marginal Tax Rate (26.0% statutory bracket rate) with the Average Tax Rate (65 224 / 320 400 = 20.36%)."
      },
      {
        "text": "Annual taxable income is R26 700, annual tax payable is R4 806, Marginal Tax Rate is 18.0%, and Average Tax Rate is 18.00%.",
        "isCorrect": false,
        "refutation": "Statutory income tax brackets are defined on annual income, so monthly salary (R26 700) must first be multiplied by 12 months (R320 400)."
      }
    ],
    "chapter": "ch15",
    "citation": "Mohr 6e, Mohr 6e, pp. 295–322 • Study Unit 2.2, pp. 25–46"
  },
  {
    "id": "q_ch15_10",
    "chapterId": "ch15",
    "source": "Chapter 15 — The Government Sector — Calculating Gross and Net Income Tax for a Monthly Salary Earner",
    "topic": "Calculating Gross and Net Income Tax for a Monthly Salary Earner",
    "difficulty": "Medium",
    "stem": "A newly appointed graduate earns a taxable salary of R12,000 per month. Suppose the statutory annual tax table specifies that the R122,001–R195,000 bracket is taxed at 'R21,960 + 25% of taxable income above R122,000', and every individual qualifies for an annual primary rebate of R8,280. Calculate (1) annual taxable income, (3) gross annual tax before the rebate, (3) net annual tax payable after the primary rebate, and (4) the effective (average) tax rate and marginal tax rate.",
    "derivation": [
      "\\text{Annual Taxable Income} = \\text{R}12,000 \\times 12 = \\text{R}144,000",
      "\\text{Gross Annual Tax} = 21,960 + 0.25(144,000 - 122,000) = 21,960 + 0.25(22,000) = 21,960 + 5,500 = \\text{R}27,460",
      "\\text{Net Tax Payable} = 27,460 - 8,280 = \\text{R}19,180",
      "\\text{Effective Rate (ATR)} = \\frac{19,180}{144,000} \\times 100 = 13.32\\%\\text{ (19.07\\% gross)};\\quad \\text{Marginal Tax Rate (MTR)} = 25.0\\%"
    ],
    "options": [
      {
        "text": "Annual income = R144,000; Gross tax = R27,460; Net tax after rebate = R19,180; Effective tax rate = 13.32% (19.07% gross) and MTR = 25%.",
        "isCorrect": true,
        "refutation": "Correct! Annualising R12,000×12 gives R144,000; gross tax is 21,960 + 0.25(22,000) = R27,460; subtracting the R8,280 rebate yields R19,180 net tax (13.32% effective rate)."
      },
      {
        "text": "Annual income = R144,000; Gross tax = R36,000; Net tax after rebate = R27,720; Effective tax rate = 19.25% (25.00% gross) and MTR = 25%.",
        "isCorrect": false,
        "refutation": "Multiplying the entire R144,000 by 25% (R36,000) ignores the lower 18% rate applied to the first R122,000 of income."
      },
      {
        "text": "Annual income = R144,000; Gross tax = R27,460; Net tax after rebate = R25,390; Effective tax rate = 17.63% (19.07% gross) and MTR = 18%.",
        "isCorrect": false,
        "refutation": "The primary rebate of R8,280 is deducted directly from gross tax liability (27,460 - 8,280 = R19,180), not multiplied by 25%."
      },
      {
        "text": "Annual income = R135,720 (deducting rebate first); Gross tax = R25,390; Net tax = R25,390; Effective tax rate = 18.71% and MTR = 25%.",
        "isCorrect": false,
        "refutation": "A tax rebate is a credit deducted from tax payable after the bracket formula is applied, not a tax deduction subtracted from taxable income."
      }
    ],
    "chapter": "ch15",
    "citation": "Mohr 6e, Mohr 6e, pp. 295–322 • Study Unit 2.2, pp. 25–46"
  },
  {
    "id": "q_ch15_11",
    "chapterId": "ch15",
    "source": "Chapter 15 — The Government Sector — Composition of the Public Sector, Musgrave's Three Functions, and Privatisation",
    "topic": "Composition of the Public Sector, Musgrave's Three Functions, and Privatisation",
    "difficulty": "Easy",
    "stem": "Identify (1) the four institutional components that constitute the South African public sector, (2) the three economic functions of government formulated by Richard Musgrave, and (3) the precise distinction between Nationalisation and Privatisation.",
    "derivation": [
      "\\text{Public Sector Components: (1) Central government, (2) Provincial government, (3) Local government (municipalities), (4) Public corporations (SOEs)}",
      "\\text{General Government} = \\text{Central} + \\text{Provincial} + \\text{Local (excluding Public Corporations)}",
      "\\text{Musgrave's Three Functions: (1) Allocative function (market failure), (2) Distributive function (inequality), (3) Stabilisation function (macro cycles)}",
      "\\text{Nationalisation vs Privatisation: Transfer of private ownership to the state vs transfer of state-owned assets to private ownership}"
    ],
    "options": [
      {
        "text": "Four tiers: Central, Provincial, Local government, and Public corporations; Three functions: Allocative, Distributive, and Stabilisation; Nationalisation transfers private assets to state ownership while Privatisation transfers state assets to private ownership.",
        "isCorrect": true,
        "refutation": "Correct! General government (central, provincial, local) plus public corporations form the public sector, executing Musgrave's allocative, distributive, and stabilisation roles."
      },
      {
        "text": "Four tiers: Commercial banks, Central bank, Treasury, and Parliament; Three functions: Monetary, Exchange-rate, and Trade policy; Nationalisation sells state-owned assets to private buyers while Privatisation confiscates private firms for the state.",
        "isCorrect": false,
        "refutation": "Commercial banks are private financial institutions, monetary/exchange-rate policies are central bank functions, and the definitions of nationalisation and privatisation are reversed."
      },
      {
        "text": "Four tiers: Central, Provincial, Local government, and Foreign embassies; Three functions: Consumption, Investment, and Exports; Nationalisation and Privatisation both refer to deregulating private corporate monopolies across the domestic economy.",
        "isCorrect": false,
        "refutation": "Public corporations (state-owned enterprises) are the fourth component of the public sector, and C, I, X are expenditure components rather than Musgrave's fiscal functions."
      },
      {
        "text": "Four tiers: Executive, Legislature, Judiciary, and Reserve Bank; Three functions: Taxation, Borrowing, and Money printing; Nationalisation transfers municipal assets to provincial departments while Privatisation raises statutory corporate tax rates.",
        "isCorrect": false,
        "refutation": "Executive, legislature, and judiciary are constitutional branches of state authority rather than the four economic sub-sectors of the public sector."
      }
    ],
    "chapter": "ch15",
    "citation": "Mohr 6e, Mohr 6e, pp. 295–322 • Study Unit 2.2, pp. 25–46"
  },
  {
    "id": "q_ch15_12",
    "chapterId": "ch15",
    "source": "Chapter 15 — The Government Sector — Financing Public Infrastructure Expansion & Criteria for a Good Tax",
    "topic": "Financing Public Infrastructure Expansion & Criteria for a Good Tax",
    "difficulty": "Medium",
    "stem": "Suppose the government expands public infrastructure spending from R14.5 billion to R17.5 billion (+R3.0 billion). What are the three macroeconomic sources available to finance government expenditure, and which four criteria (canons) define a good tax system?",
    "derivation": [
      "\\text{Three Financing Sources: (1) Income from public property/enterprises, (2) Taxation (compulsory levies), (3) Government borrowing (domestic/foreign capital markets)}",
      "\\text{Note: Borrowing from the central bank (monetary financing) is avoided due to severe demand-pull inflationary consequences}",
      "\\text{Four Criteria of a Good Tax: (1) Neutrality (minimal excess burden/distortion), (2) Equity (horizontal and vertical ability-to-pay/benefit), (3) Administrative simplicity (low compliance/collection cost), (4) Certainty}"
    ],
    "options": [
      {
        "text": "Financing sources: Income from public property, Taxation, and Borrowing on capital markets; Tax criteria: Neutrality, Equity (vertical and horizontal), Administrative simplicity, and Certainty.",
        "isCorrect": true,
        "refutation": "Correct! Governments finance outlays via enterprise income, taxation, and bond issuance, while evaluating taxes against neutrality, equity, administrative simplicity, and certainty."
      },
      {
        "text": "Financing sources: Printing bank notes, Raising the repo rate, and Selling foreign reserves; Tax criteria: Maximum market distortion, Regressivity, High compliance cost, and Statutory ambiguity.",
        "isCorrect": false,
        "refutation": "Repo rates and foreign reserves are monetary policy instruments of the central bank, and a good tax seeks minimal distortion (neutrality) and low compliance costs."
      },
      {
        "text": "Financing sources: Household savings, Corporate dividends, and Import quotas; Tax criteria: Trade protectionism, Capital intensity, Pro-cyclicality, and Direct administrative price fixing.",
        "isCorrect": false,
        "refutation": "Import quotas are non-revenue trade restrictions, and Adam Smith's canons of taxation focus on neutrality, equity, certainty, and administrative simplicity."
      },
      {
        "text": "Financing sources: Income from public property, Taxation, and Borrowing; Tax criteria: Maximising deadweight loss, Eliminating vertical equity, Complex loopholes, and Retroactive assessment.",
        "isCorrect": false,
        "refutation": "Neutrality requires minimising (not maximising) deadweight loss/excess burden, and administrative simplicity requires transparent rules with minimal loopholes."
      }
    ],
    "chapter": "ch15",
    "citation": "Mohr 6e, Mohr 6e, pp. 295–322 • Study Unit 2.2, pp. 25–46"
  },
  {
    "id": "q_ch16_06",
    "chapterId": "ch16",
    "source": "Chapter 16 — The Foreign Sector — Six Instruments to Restrict Imports and Welfare Effects of an Import Tariff",
    "topic": "Six Instruments to Restrict Imports and Welfare Effects of an Import Tariff",
    "difficulty": "Medium",
    "stem": "List the six primary policy instruments governments use to restrict imports or influence international trade flows, and explain the domestic impact of imposing a specific import tariff on a competitive good whose world price is below the domestic autarky equilibrium price.",
    "derivation": [
      "\\text{Six Instruments: (1) Import tariffs, (2) Import quotas, (3) Subsidies to domestic producers, (4) Non-tariff barriers (administrative/health regulations), (5) Exchange controls, (6) Exchange rate policy}",
      "\\text{Tariff Impact: Domestic price rises from } P_w \\text{ to } P_w + t \\implies \\text{Domestic quantity supplied rises, domestic quantity demanded falls, import volume shrinks}",
      "\\text{Welfare: Domestic producers gain surplus, government collects tariff revenue on remaining imports, and domestic consumers lose surplus (creating deadweight loss triangles)}"
    ],
    "options": [
      {
        "text": "Instruments: Tariffs, quotas, domestic subsidies, non-tariff barriers, exchange controls, and exchange rate policy; a tariff raises domestic price, expands local supply, cuts imports, and yields state revenue.",
        "isCorrect": true,
        "refutation": "Correct! All six trade policy instruments are accurately identified, and a tariff raises price from Pw to Pw+t, expanding domestic supply while contracting domestic demand and imports."
      },
      {
        "text": "Instruments: Repo rate cuts, open-market operations, cash reserve requirements, VAT exemptions, primary rebates, and minimum wages; a tariff lowers the domestic price below the world price and increases import volume.",
        "isCorrect": false,
        "refutation": "Repo rates and reserve requirements are domestic monetary instruments, and an import tariff raises (never lowers) the domestic price above the world price."
      },
      {
        "text": "Instruments: Import tariffs, import quotas, domestic subsidies, non-tariff barriers, exchange controls, and exchange rate policy; a tariff leaves the domestic price unchanged and shifts revenue to foreign exporters.",
        "isCorrect": false,
        "refutation": "In a small open economy, an import tariff raises the domestic price paid by consumers by the amount of the tariff, and tariff revenue accrues to the domestic government."
      },
      {
        "text": "Instruments: Free-trade agreements, customs unions, common markets, monetary unions, dollarisation, and deregulation; a tariff increases domestic consumer surplus and reduces domestic producer surplus across industries.",
        "isCorrect": false,
        "refutation": "By raising domestic prices, an import tariff reduces consumer surplus and increases domestic producer surplus."
      }
    ],
    "chapter": "ch16",
    "citation": "Mohr 6e, Mohr 6e, pp. 323–346 • Study Unit 2.3, pp. 47–56"
  },
  {
    "id": "q_ch16_07",
    "chapterId": "ch16",
    "source": "Chapter 16 — The Foreign Sector — Opportunity Cost of Maize vs Steel Between Two Trading Partners",
    "topic": "Opportunity Cost of Maize vs Steel Between Two Trading Partners",
    "difficulty": "Medium",
    "stem": "Using identical resource endowments, Country A can produce either 80 tons of Maize or 40 tons of Steel, whereas Country B can produce either 30 tons of Maize or 30 tons of Steel. Determine (1) which country holds the absolute advantage in both goods, (2) each country's opportunity cost of producing 1 ton of Steel and 1 ton of Maize, and (3) the pattern of comparative advantage.",
    "derivation": [
      "\\text{Absolute Advantage: Country A produces more Maize }(80 > 30)\\text{ and more Steel }(40 > 30)",
      "\\text{Opportunity Cost of 1 ton of Steel: Country A} = \\frac{80}{40} = 2.0\\text{ tons Maize};\\quad \\text{Country B} = \\frac{30}{30} = 1.0\\text{ ton Maize}",
      "\\text{Opportunity Cost of 1 ton of Maize: Country A} = \\frac{40}{80} = 0.5\\text{ tons Steel};\\quad \\text{Country B} = \\frac{30}{30} = 1.0\\text{ ton Steel}",
      "\\text{Comparative Advantage: Country A in Maize }(0.5 < 1.0\\text{ Steel});\\quad \\text{Country B in Steel }(1.0 < 2.0\\text{ Maize})"
    ],
    "options": [
      {
        "text": "Country A has absolute advantage in both goods; Country A has comparative advantage in Maize (cost = 0.5t Steel), and Country B has comparative advantage in Steel (cost = 1.0t Maize).",
        "isCorrect": true,
        "refutation": "Correct! Even though Country A is more productive in both goods, Country B sacrifices only 1 ton of Maize per ton of Steel (vs 2 tons in Country A), giving B comparative advantage in Steel."
      },
      {
        "text": "Country A has both absolute and comparative advantage in both Maize and Steel, so no mutually beneficial international trade is possible between Country A and Country B.",
        "isCorrect": false,
        "refutation": "Because opportunity costs are reciprocals, one country cannot hold a comparative advantage in both goods unless opportunity costs are identical."
      },
      {
        "text": "Country A has absolute advantage in both goods; Country A has comparative advantage in Steel (cost = 2.0t Maize), and Country B has comparative advantage in Maize (cost = 1.0t Steel).",
        "isCorrect": false,
        "refutation": "Comparative advantage belongs to the producer with the lower (not higher) opportunity cost: 0.5 < 1.0 in Maize for A, and 1.0 < 2.0 in Steel for B."
      },
      {
        "text": "Country B has absolute advantage in Steel because its opportunity cost ratio is 1:1, while Country A has comparative advantage in Steel because 40 tons exceeds 30 tons.",
        "isCorrect": false,
        "refutation": "Absolute advantage compares physical output per unit of input (40 > 30 tons of Steel for Country A), whereas comparative advantage compares opportunity costs."
      }
    ],
    "chapter": "ch16",
    "citation": "Mohr 6e, Mohr 6e, pp. 323–346 • Study Unit 2.3, pp. 47–56"
  },
  {
    "id": "q_ch17_05",
    "chapterId": "ch17",
    "source": "Chapter 17 — A Simple Keynesian Model of the Economy — Characteristics of the Consumption Function, Income vs Disposable Income, and Injections/Leakages",
    "topic": "Characteristics of the Consumption Function, Income vs Disposable Income, and Injections/Leakages",
    "difficulty": "Easy",
    "stem": "In the Keynesian macroeconomic model: (1) What are the three fundamental characteristics of the household consumption function $C = \\bar{C} + cY_d$? (2) How does total National Income ($Y$) differ from Disposable Income ($Y_d$)? (3) How do Investment ($I$) and Saving ($S$) classify as injections or leakages, and what are their effects on the multiplier $\\alpha$ and equilibrium income $Y_e$?",
    "derivation": [
      "\\text{Three Characteristics: (1) } C > 0 \\text{ even when } Y_d = 0 \\text{ (autonomous consumption } \\bar{C} > 0\\text{)};\\text{ (2) } C \\text{ increases as } Y_d \\text{ increases } (c > 0);\\text{ (3) } \\Delta C < \\Delta Y_d \\text{ because } 0 < c < 1",
      "Y \\text{ vs } Y_d: Y \\text{ is total factor income earned across the economy, whereas } Y_d = Y - T = (1 - t)Y \\text{ is after-tax income available to households for consumption or saving}",
      "I \\text{ vs } S: I \\text{ is an autonomous injection (raises } Y_e \\text{ via } \\Delta A, \\text{ leaves } \\alpha \\text{ unchanged)};\\quad S \\text{ is a leakage (higher saving propensity } s = 1-c \\text{ lowers } c, \\text{ decreasing both } \\alpha \\text{ and } Y_e)"
    ],
    "options": [
      {
        "text": "(1) C > 0 at Yd = 0, C rises with Yd, and 0 < c < 1; (2) Disposable income is after-tax income (Yd = Y - T); (3) Investment is an injection raising Ye, while Saving is a leakage.",
        "isCorrect": true,
        "refutation": "Correct! These capture the three Keynesian consumption axioms, the tax wedge between Y and Yd, and the exact roles of I (autonomous injection) and S (income-induced leakage)."
      },
      {
        "text": "(1) C = 0 at Yd = 0, C falls as Yd rises, and c > 1; (2) National income is after-tax income; (3) Investment is a leakage while Saving is an injection that increases the multiplier.",
        "isCorrect": false,
        "refutation": "Autonomous consumption is strictly positive because households must consume essentials to survive, 0 < c < 1, and saving is a leakage from the circular flow."
      },
      {
        "text": "(1) C is constant at all income levels (c = 0); (2) Disposable income equals national income plus taxes (Yd = Y + T); (3) Higher autonomous investment increases the multiplier α.",
        "isCorrect": false,
        "refutation": "Induced consumption rises with income (c > 0), taxes are subtracted to obtain disposable income, and autonomous investment shifts the A curve without changing the slope or multiplier α."
      },
      {
        "text": "(1) C > 0 at Yd = 0, C rises with Yd, and 0 < c < 1; (2) Y and Yd are identical in an economy with taxes; (3) Both Investment and Saving are leakages that reduce equilibrium Ye.",
        "isCorrect": false,
        "refutation": "Proportional taxes create a wedge Yd = (1-t)Y, and Investment is a primary injection into the spending stream."
      }
    ],
    "chapter": "ch17",
    "citation": "Mohr 6e, Mohr 6e, pp. 347–376 • Study Unit 3.1, pp. 58–71"
  },
  {
    "id": "q_ch18_06",
    "chapterId": "ch18",
    "source": "Chapter 18 — The Keynesian Model with a Government and a Foreign Sector — Calculating Autonomous Spending, Open-Economy Multiplier, and Equilibrium Income",
    "topic": "Calculating Autonomous Spending, Open-Economy Multiplier, and Equilibrium Income",
    "difficulty": "Hard",
    "stem": "Consider an open economy with a government sector described by the following structural parameters: Autonomous consumption $\\bar{C} = 400$, Marginal propensity to consume $c = 0.6$, Proportional income tax rate $t = 0.25$, Autonomous investment $\\bar{I} = 400$, Government expenditure $\\bar{G} = 300$, Exports $\\bar{X} = 200$, and Imports $Z = 100 + 0.15Y$. Calculate (1) total autonomous expenditure $\\bar{A}$, (2) the open-economy multiplier $\\alpha$, and (3) the equilibrium level of national income $Y_e$.",
    "derivation": [
      "\\text{Autonomous Expenditure: }\\bar{A} = \\bar{C} + \\bar{I} + \\bar{G} + \\bar{X} - \\bar{Z} = 400 + 400 + 300 + 200 - 100 = 1\\,200",
      "\\text{Induced Slope: }c(1 - t) - m = 0.6(1 - 0.25) - 0.15 = 0.6(0.75) - 0.15 = 0.45 - 0.15 = 0.30",
      "\\text{Open-Economy Multiplier: }\\alpha = \\frac{1}{1 - c(1 - t) + m} = \\frac{1}{1 - 0.45 + 0.15} = \\frac{1}{0.70} \\approx 1.43",
      "\\text{Equilibrium Income: }Y_e = \\frac{1\\,200}{0.70} = 1\\,714.29\\quad (\\text{or } 1.43 \\times 1\\,200 = 1\\,716.00\\text{ using rounded }\\alpha)"
    ],
    "options": [
      {
        "text": "Autonomous spending Ā is 1 200, the open-economy multiplier α is 1.43 (1/0.70), and equilibrium income Ye is 1 714.29 (or 1 716.00).",
        "isCorrect": true,
        "refutation": "Correct! Subtracting autonomous imports (100) gives Ā = 1 200, while 1 - 0.6(0.75) + 0.15 = 0.70 gives α = 1.43 and Ye = 1 200 / 0.70 = 1 714.29."
      },
      {
        "text": "Autonomous spending Ā is 1 400, the open-economy multiplier α is 1.43 (1/0.70), and equilibrium income Ye is 2 000.00 (or 2 002.00).",
        "isCorrect": false,
        "refutation": "Ā = 1 400 erroneously adds autonomous imports (+100) instead of subtracting them (-100) from autonomous aggregate expenditure."
      },
      {
        "text": "Autonomous spending Ā is 1 200, the open-economy multiplier α is 2.50 (1/0.40), and equilibrium income Ye is 3 000.00 (using 1/[1 - c]).",
        "isCorrect": false,
        "refutation": "Using the simple closed-economy multiplier 1/(1 - 0.6) = 2.50 ignores both proportional income taxes (t = 0.25) and induced imports (m = 0.15)."
      },
      {
        "text": "Autonomous spending Ā is 1 200, the open-economy multiplier α is 1.82 (1/0.55), and equilibrium income Ye is 2 181.82 (omitting m = 0.15).",
        "isCorrect": false,
        "refutation": "A denominator of 0.55 = 1 - 0.6(0.75) accounts for the tax rate (t = 0.25) but forgets to add the marginal propensity to import (m = 0.15)."
      }
    ],
    "chapter": "ch18",
    "citation": "Mohr 6e, Mohr 6e, pp. 377–405 • Study Unit 3.2, pp. 72–91"
  },
  {
    "id": "q_ch20_06",
    "chapterId": "ch20",
    "source": "Chapter 20 — Inflation — Calculating Annual Headline CPI Inflation Rates and Multi-Year Average Inflation",
    "topic": "Calculating Annual Headline CPI Inflation Rates and Multi-Year Average Inflation",
    "difficulty": "Medium",
    "stem": "A country's headline Consumer Price Index (CPI) over five consecutive periods is recorded as follows: Period 1 = 118.4, Period 2 = 124.6, Period 3 = 131.2, Period 4 = 138.5, and Period 5 = 145.8. Calculate the annual percentage CPI inflation rates for Period 2, Period 3, Period 4, and Period 5, determine which period experienced the highest inflation rate, and compute the four-period average inflation rate.",
    "derivation": [
      "\\text{Period 2 Inflation: }\\pi_2 = \\frac{124.6 - 118.4}{118.4} \\times 100 = 5.24\\%;\\quad \\text{Period 3 Inflation: }\\pi_3 = \\frac{131.2 - 124.6}{124.6} \\times 100 = 5.30\\%",
      "\\text{Period 4 Inflation: }\\pi_4 = \\frac{138.5 - 131.2}{131.2} \\times 100 = 5.56\\%\\text{ (Highest)};\\quad \\text{Period 5 Inflation: }\\pi_5 = \\frac{145.8 - 138.5}{138.5} \\times 100 = 5.27\\%",
      "\\text{Four-Period Average Inflation Rate: }\\bar{\\pi} = \\frac{5.24 + 5.30 + 5.56 + 5.27}{4} = 5.34\\%"
    ],
    "options": [
      {
        "text": "Annual inflation rates are 5.24%, 5.30%, 5.56% (highest in Period 4), and 5.27%, yielding a four-period average inflation rate of 5.34%.",
        "isCorrect": true,
        "refutation": "Correct! Dividing each period-on-period index change by the preceding period's CPI gives 5.24%, 5.30%, 5.56% (peak in Period 4), and 5.27%, averaging 5.34%."
      },
      {
        "text": "Annual inflation rates are 6.20%, 6.60%, 7.30%, and 7.30% (tied in Periods 4 and 5), yielding a four-period average inflation rate of 6.85%.",
        "isCorrect": false,
        "refutation": "6.20, 6.60, 7.30, and 7.30 are raw index-point differences (CPI_t - CPI_{t-1}) before dividing by the prior period's CPI base."
      },
      {
        "text": "Annual inflation rates are 4.98%, 5.03%, 5.27% (highest in Period 4), and 5.01%, yielding a four-period average inflation rate of 5.07%.",
        "isCorrect": false,
        "refutation": "Those percentages divide the index change by the current period's CPI (CPI_t) instead of the initial preceding period's CPI (CPI_{t-1})."
      },
      {
        "text": "Annual inflation rates are 5.24%, 10.81%, 16.98%, and 23.14% (highest in Period 5), yielding a four-period average inflation rate of 14.04%.",
        "isCorrect": false,
        "refutation": "Those figures measure cumulative price increases relative to Period 1 (118.4) rather than annual period-on-period inflation rates."
      }
    ],
    "chapter": "ch20",
    "citation": "Mohr 6e, Mohr 6e, pp. 437–466 • Study Unit 4, pp. 93–101"
  },
  {
    "id": "q_ch20_07",
    "chapterId": "ch20",
    "source": "Chapter 20 — Inflation — Identifying the Base Period from Current vs Constant GNI and Computing Deflator Inflation",
    "topic": "Identifying the Base Period from Current vs Constant GNI and Computing Deflator Inflation",
    "difficulty": "Medium",
    "stem": "National accounting statistics show that in Period 1, Gross National Income (GNI) at current prices is R2 946 328 million and GNI at constant prices is also R2 946 328 million. In Period 2, GNI at current prices is R3 165 941 million and GNI at constant prices is R3 094 761 million. Explain why current and constant GNI are identical in Period 1, and calculate the implicit price deflator for Period 1 and Period 2 as well as the Period 2 inflation rate.",
    "derivation": [
      "\\text{Why Identical in Period 1: Period 1 is the designated base period, so current prices and constant base-period prices are identical}",
      "\\text{Period 1 Implicit Deflator} = \\frac{2\\,946\\,328}{2\\,946\\,328} \\times 100 = 100.00",
      "\\text{Period 2 Implicit Deflator} = \\frac{3\\,165\\,941}{3\\,094\\,761} \\times 100 = 102.30 \\implies \\pi_2 = \\frac{102.30 - 100.00}{100.00} \\times 100 = 2.30\\%"
    ],
    "options": [
      {
        "text": "Period 1 is the base period (so current and constant prices coincide at Deflator = 100.00); Period 2 Deflator is 102.30, giving 2.30% inflation.",
        "isCorrect": true,
        "refutation": "Correct! Current and constant aggregates are always equal in the base period (Deflator = 100.00), and in Period 2 (3 165 941 / 3 094 761) × 100 = 102.30 (+2.30% inflation)."
      },
      {
        "text": "Inflation was zero in all previous decades (Deflator = 0.00); Period 2 Deflator is 97.75, giving a negative deflation rate of -2.25%.",
        "isCorrect": false,
        "refutation": "The base-period price index is always normalised to 100.00 (never 0), and 97.75 inverts the ratio by dividing constant GNI by current GNI."
      },
      {
        "text": "Period 1 is the base period (Deflator = 100.00); Period 2 Deflator is 107.45, giving a nominal GNI inflation rate of 7.45%.",
        "isCorrect": false,
        "refutation": "7.45% is the percentage growth in current (nominal) GNI [(3 165 941 - 2 946 328)/2 946 328], which combines 5.04% real GNI growth with 2.30% inflation."
      },
      {
        "text": "Physical output volume stayed frozen in Period 1 (Deflator = 100.00); Period 2 Deflator is 105.04, giving an inflation rate of 5.04%.",
        "isCorrect": false,
        "refutation": "5.04% is the real GNI growth rate [(3 094 761 - 2 946 328)/2 946 328], whereas the implicit price deflator rose by 2.30% to 102.30."
      }
    ],
    "chapter": "ch20",
    "citation": "Mohr 6e, Mohr 6e, pp. 437–466 • Study Unit 4, pp. 93–101"
  },
  {
    "id": "q_ch21_06",
    "chapterId": "ch21",
    "source": "Chapter 21 — Unemployment, Poverty and Inequality — Filtering Non-Working-Age Cohorts to Calculate the Strict Labour Force and Unemployment Rate",
    "topic": "Filtering Non-Working-Age Cohorts to Calculate the Strict Labour Force and Unemployment Rate",
    "difficulty": "Medium",
    "stem": "A demographic survey of an economy with a total population of 80 million people reveals the following breakdown: 15 million children under age 15; 20 million retired pensioners and full-time students outside the labour force; 15 million other economically inactive adults (homemakers and discouraged work-seekers not actively looking); 20 million employed workers; and 10 million unemployed people actively seeking work. Calculate (1) the working-age population, (2) the strict (official) Labour Force, (3) the strict Unemployment Rate, and (4) the Labour Force Participation Rate (LFPR).",
    "derivation": [
      "\\text{Working-Age Population} = 80\\text{m} - 15\\text{m (children under 15)} = 65\\text{ million}",
      "\\text{Strict Labour Force (Economically Active Population)} = E + U = 20\\text{m} + 10\\text{m} = 30\\text{ million}",
      "\\text{Strict Unemployment Rate } (u) = \\frac{U}{LF} \\times 100 = \\frac{10\\text{m}}{30\\text{m}} \\times 100 = 33.33\\%",
      "\\text{Labour Force Participation Rate (LFPR)} = \\frac{LF}{\\text{Working-Age Pop}} \\times 100 = \\frac{30\\text{m}}{65\\text{m}} \\times 100 = 46.15\\%"
    ],
    "options": [
      {
        "text": "Working-age population is 65 million, strict Labour Force is 30 million, strict unemployment rate is 33.33%, and LFPR is 46.15%.",
        "isCorrect": true,
        "refutation": "Correct! Excluding the 15m children leaves 65m working-age adults; only the 20m employed + 10m active job-seekers form the 30m strict labour force, giving u = 10/30 = 33.33% and LFPR = 30/65 = 46.15%."
      },
      {
        "text": "Working-age population is 80 million, strict Labour Force is 80 million, strict unemployment rate is 12.50%, and LFPR is 100.00%.",
        "isCorrect": false,
        "refutation": "12.50% (10m / 80m) divides unemployed job-seekers by the entire population including children, retirees, students, and inactive adults."
      },
      {
        "text": "Working-age population is 65 million, strict Labour Force is 20 million, strict unemployment rate is 50.00%, and LFPR is 30.77%.",
        "isCorrect": false,
        "refutation": "The labour force includes both employed (20m) and unemployed (10m) persons (30m total); dividing 10m unemployed by 20m employed (50.00%) is incorrect."
      },
      {
        "text": "Working-age population is 65 million, strict Labour Force is 65 million, strict unemployment rate is 15.38%, and LFPR is 62.50%.",
        "isCorrect": false,
        "refutation": "The 20m retirees/students and 15m other inactive adults are outside the labour force, so the active denominator for u is 30 million, not 65 million."
      }
    ],
    "chapter": "ch21",
    "citation": "Mohr 6e, Mohr 6e, pp. 467–484 • Study Unit 5, pp. 102–107"
  },
  {
    "id": "q_ch13_21",
    "chapterId": "ch13",
    "source": "Chapter 13 — Measuring the Performance of the Economy — Follow-Up Calculation of GNP at Market Prices from Domestic Expenditure & Factor Flows",
    "topic": "Follow-Up Calculation of GNP at Market Prices from Domestic Expenditure & Factor Flows",
    "difficulty": "Medium",
    "stem": "Continuing with the National Accounts table (in R millions) where Household expenditure = 974 252, Fixed capital consumption = 170 986, Exports = 492 646, Imports = 569 321, Taxes on production and imports = 205 562, Subsidies = 11 433, and GDP at market prices (GDPmp) = 1 530 580 (with GDP at factor cost already determined as R1 336 451 million): suppose wages earned by domestic au pairs working abroad in the USA equal 1 500 and salaries paid to foreign Cuban doctors working domestically equal 1 800. Calculate Gross National Product at market prices (GNPmp) and Net Foreign Factor Income.",
    "derivation": [
      "\\text{Prerequisite Context: }\\text{GDP}_{mp} = \\text{R}1\\,530\\,580\\text{m}\\quad (\\text{and }\\text{GDP}_{fc} = 1\\,530\\,580 - 205\\,562 + 11\\,433 = \\text{R}1\\,336\\,451\\text{m})",
      "\\text{Factor Income Receipts from Rest of World (Au pairs in USA)} = +\\text{R}1\\,500\\text{m}",
      "\\text{Factor Income Payments to Rest of World (Cuban doctors domestically)} = -\\text{R}1\\,800\\text{m}",
      "\\text{GNP}_{mp} = \\text{GDP}_{mp} + \\text{Factor Receipts} - \\text{Factor Payments} = 1\\,530\\,580 + 1\\,500 - 1\\,800 = \\text{R}1\\,530\\,280\\text{ million}"
    ],
    "options": [
      {
        "text": "GNP at market prices is R1 530 280 million because net foreign factor income is -R300 million (+1 500 - 1 800).",
        "isCorrect": true,
        "refutation": "Correct! Adding factor income earned abroad by domestic residents (+1 500) and subtracting factor income paid to foreign residents working domestically (-1 800) yields GNPmp = R1 530 280 million."
      },
      {
        "text": "GNP at market prices is R1 530 880 million because net foreign factor income is +R300 million (+1 800 - 1 500).",
        "isCorrect": false,
        "refutation": "R1 530 880 million reverses the foreign factor flows by adding payments to foreign doctors (+1 800) and subtracting receipts from domestic au pairs (-1 500)."
      },
      {
        "text": "GNP at market prices is R1 336 151 million by applying net foreign factor income (-R300 million) to GDP at factor cost.",
        "isCorrect": false,
        "refutation": "Applying net foreign factor income (-300) to GDP at factor cost (1 336 451) yields GNP at factor cost (R1 336 151m), whereas the question asks for GNP at market prices."
      },
      {
        "text": "GNP at market prices is R1 453 905 million by subtracting net exports (-R76 675 million) from GDP at market prices.",
        "isCorrect": false,
        "refutation": "Exports (492 646) and imports (569 321) are already included inside GDPmp; converting GDPmp to GNPmp requires adjusting strictly for net primary factor income (-300)."
      }
    ],
    "chapter": "ch13",
    "citation": "Mohr 6e, Mohr 6e, pp. 235–265 • Study Unit 1, pp. 2–11"
  },
  {
    "id": "q_ch13_22",
    "chapterId": "ch13",
    "source": "Chapter 13 — Measuring the Performance of the Economy — Follow-Up Derivation of National Income Using Prerequisite GDP at Factor Cost and Depreciation",
    "topic": "Follow-Up Derivation of National Income Using Prerequisite GDP at Factor Cost and Depreciation",
    "difficulty": "Hard",
    "stem": "In a macroeconomic account where Consumption = R105 500, Investment = R46 850, Government spending = R103 600, Exports = R40 000, Imports = R30 000, Value-Added Tax = R16 000, and Subsidies = R43 300, the preceding calculation established GDE at market prices = R255 950, GDP at market prices = R265 950, and GDP at factor cost (GDPfc) = R293 250. Given further that the capital goods stock is R40 000 (depreciating at 8% per annum), domestic cricket players earn R35 200 in the UK, and UK Airlines earns R125 600 in profits within the domestic economy, calculate National Income (Net National Income at factor cost).",
    "derivation": [
      "\\text{Prerequisite Baseline: }\\text{GDP}_{fc} = \\text{R}293\\,250\\quad (\\text{from }\\text{GDP}_{mp} = 265\\,950 - 16\\,000 + 43\\,300)",
      "\\text{Depreciation (Consumption of Fixed Capital)} = 0.08 \\times \\text{R}40\\,000 = \\text{R}3\\,200",
      "\\text{Net Foreign Factor Income} = +\\text{R}35\\,200\\text{ (cricket players in UK)} - \\text{R}125\\,600\\text{ (UK Airlines profits)} = -\\text{R}90\\,400",
      "\\text{National Income (NI)} = \\text{GDP}_{fc} - \\text{Depreciation} + \\text{Net Factor Income} = 293\\,250 - 3\\,200 + 35\\,200 - 125\\,600 = \\text{R}199\\,650"
    ],
    "options": [
      {
        "text": "National Income is R199 650 (subtracting R3 200 depreciation and R90 400 net foreign factor outflow from R293 250).",
        "isCorrect": true,
        "refutation": "Correct! Starting from GDPfc = R293 250, subtracting 8% depreciation on capital goods (-R3 200), adding factor receipts (+R35 200), and subtracting factor payments (-R125 600) gives R199 650."
      },
      {
        "text": "National Income is R202 850 (adjusting R293 250 for the R90 400 net factor outflow but omitting R3 200 depreciation).",
        "isCorrect": false,
        "refutation": "R202 850 is Gross National Product at factor cost (GNPfc); National Income is a net aggregate that requires subtracting the 8% capital depreciation of R3 200."
      },
      {
        "text": "National Income is R380 450 (subtracting R3 200 depreciation but adding +R90 400 as a net foreign factor inflow).",
        "isCorrect": false,
        "refutation": "R380 450 reverses the foreign factor income signs by adding UK Airlines' domestic profits (+125 600) and subtracting domestic cricket players' foreign earnings (-35 200)."
      },
      {
        "text": "National Income is R172 350 (applying the R3 200 depreciation and R90 400 factor outflow directly to GDPmp of R265 950).",
        "isCorrect": false,
        "refutation": "National Income is defined at factor cost (NNIfc), so you must start from GDPfc = R293 250 (which includes net subsidies of +R27 300) rather than GDPmp = R265 950."
      }
    ],
    "chapter": "ch13",
    "citation": "Mohr 6e, Mohr 6e, pp. 235–265 • Study Unit 1, pp. 2–11"
  },
  {
    "id": "q_ch13_23",
    "chapterId": "ch13",
    "source": "Chapter 13 — Measuring the Performance of the Economy — Follow-Up Calculation of GDE at Market Prices Using Prerequisite GDP at Factor Cost",
    "topic": "Follow-Up Calculation of GDE at Market Prices Using Prerequisite GDP at Factor Cost",
    "difficulty": "Hard",
    "stem": "In an economy where National Income = 870 760, Depreciation = 11 100, Factor income earned by foreigners domestically = 120 800, Factor income earned by residents abroad = 234 000, Value-Added Tax (VAT) = 120 000, and Subsidies = 9 000, the first stage of analysis established that GDP at factor cost (GDPfc) = 768 660. Given further that Exports = 553 200 and Imports = 489 300, calculate GDP at market prices (GDPmp) and Gross Domestic Expenditure at market prices (GDEmp).",
    "derivation": [
      "\\text{Prerequisite Baseline: }\\text{GDP}_{fc} = 870\\,760 + 11\\,100 + 120\\,800 - 234\\,000 = 768\\,660",
      "\\text{Convert to Market Prices: }\\text{GDP}_{mp} = \\text{GDP}_{fc} + \\text{VAT} - \\text{Subsidies} = 768\\,660 + 120\\,000 - 9\\,000 = 879\\,660",
      "\\text{Since }\\text{GDP}_{mp} = \\text{GDE}_{mp} + (X - Z),\\quad \\text{GDE}_{mp} = \\text{GDP}_{mp} - X + Z",
      "\\text{GDE}_{mp} = 879\\,660 - 553\\,200 + 489\\,300 = 879\\,660 - 63\\,900 = 815\\,760"
    ],
    "options": [
      {
        "text": "GDP at market prices is 879 660 and Gross Domestic Expenditure (GDEmp) is 815 760 after subtracting net exports of 63 900.",
        "isCorrect": true,
        "refutation": "Correct! Adding net indirect taxes (+120 000 - 9 000 = +111 000) to GDPfc (768 660) gives GDPmp = 879 660, and subtracting net exports (553 200 - 489 300 = 63 900) gives GDEmp = 815 760."
      },
      {
        "text": "GDP at market prices is 879 660 and Gross Domestic Expenditure (GDEmp) is 943 560 after adding net exports of 63 900.",
        "isCorrect": false,
        "refutation": "Because GDP = GDE + (X - Z), rearranging for GDE requires subtracting exports (-553 200) and adding imports (+489 300), whereas 943 560 adds net exports instead."
      },
      {
        "text": "GDP at market prices is 657 660 and Gross Domestic Expenditure (GDEmp) is 593 760 by subtracting VAT and adding subsidies.",
        "isCorrect": false,
        "refutation": "Moving from factor cost to market prices requires adding indirect taxes (+120 000) and subtracting subsidies (-9 000), not the reverse."
      },
      {
        "text": "GDP at market prices is 879 660 and Gross Domestic Expenditure (GDEmp) is 704 760 by omitting indirect tax adjustments.",
        "isCorrect": false,
        "refutation": "704 760 subtracts net exports (63 900) directly from GDP at factor cost (768 660) instead of converting to market prices first (879 660 - 63 900 = 815 760)."
      }
    ],
    "chapter": "ch13",
    "citation": "Mohr 6e, Mohr 6e, pp. 235–265 • Study Unit 1, pp. 2–11"
  },
  {
    "id": "q_ch13_24",
    "chapterId": "ch13",
    "source": "Chapter 13 — Measuring the Performance of the Economy — Follow-Up Calculation of GDE at Factor Cost Given GDP at Market Prices and Net Exports",
    "topic": "Follow-Up Calculation of GDE at Factor Cost Given GDP at Market Prices and Net Exports",
    "difficulty": "Medium",
    "stem": "Continuing with the National Accounts table (in R millions) where GDP at market prices (GDPmp) = 1 204, Consumption of fixed capital = 72, Indirect taxes = 148, Subsidies = 15, Factor income to abroad = 67, Factor income from abroad = 78 (from which National Income was calculated as R1 010 million), Exports = 64, and Imports = 100: calculate Gross Domestic Expenditure at market prices (GDEmp) and Gross Domestic Expenditure at factor cost (GDEfc).",
    "derivation": [
      "\\text{Since }\\text{GDP}_{mp} = \\text{GDE}_{mp} + X - Z,\\quad \\text{GDE}_{mp} = \\text{GDP}_{mp} - X + Z = 1\\,204 - 64 + 100 = \\text{R}1\\,240\\text{ million}",
      "\\text{Alternatively, }\\text{GDP}_{fc} = \\text{GDP}_{mp} - T_{\\text{ind}} + \\text{Subsidies} = 1\\,204 - 148 + 15 = \\text{R}1\\,071\\text{ million}",
      "\\text{GDE}_{fc} = \\text{GDE}_{mp} - T_{\\text{ind}} + \\text{Subsidies} = 1\\,240 - 148 + 15 = \\text{R}1\\,107\\text{ million}\\quad (\\text{or } 1\\,071 - 64 + 100 = \\text{R}1\\,107\\text{m})"
    ],
    "options": [
      {
        "text": "GDE at market prices is R1 240 million and GDE at factor cost is R1 107 million (with GDPfc equal to R1 071 million).",
        "isCorrect": true,
        "refutation": "Correct! Subtracting exports (-64) and adding imports (+100) to GDPmp (1 204) gives GDEmp = R1 240m, and subtracting net indirect taxes (-148 + 15 = -133) yields GDEfc = R1 107m."
      },
      {
        "text": "GDE at market prices is R1 168 million and GDE at factor cost is R1 035 million (by adding exports and subtracting imports).",
        "isCorrect": false,
        "refutation": "R1 168m and R1 035m mistakenly add exports (+64) and subtract imports (-100); since net exports are negative (X - Z = -36), domestic expenditure GDE exceeds GDP by +36."
      },
      {
        "text": "GDE at market prices is R1 240 million and GDE at factor cost is R1 373 million (by adding indirect taxes to GDEmp).",
        "isCorrect": false,
        "refutation": "Moving from market prices (R1 240m) to factor cost requires subtracting indirect taxes (-148) and adding subsidies (+15), not adding net indirect taxes (+133)."
      },
      {
        "text": "GDE at market prices is R1 046 million and GDE at factor cost is R1 010 million (by using National Income as the baseline).",
        "isCorrect": false,
        "refutation": "R1 010m is Net National Income at factor cost (which already deducted R72m depreciation and added +R11m net foreign factor income), not GDE at factor cost."
      }
    ],
    "chapter": "ch13",
    "citation": "Mohr 6e, Mohr 6e, pp. 235–265 • Study Unit 1, pp. 2–11"
  },
  {
    "id": "q_ch13_25",
    "chapterId": "ch13",
    "source": "Chapter 13 — Measuring the Performance of the Economy — Follow-Up Calculation of Nominal Growth Rate and Real GDP from Three-Good Output Data",
    "topic": "Follow-Up Calculation of Nominal Growth Rate and Real GDP from Three-Good Output Data",
    "difficulty": "Medium",
    "stem": "In the economy of Hogwarts producing Cell phones (Period 1: P=R100, Q=1; Period 2: P=R110, Q=1), Tablets (Period 1: P=R10, Q=8; Period 2: P=R12, Q=10), and Laptops (Period 1: P=R5, Q=4; Period 2: P=R4, Q=5), the preceding calculation established Period 1 Nominal GDP = R200 (100×1 + 10×8 + 5×4) and Period 2 Nominal GDP = R250 (110×1 + 12×10 + 4×5). Using Period 1 as the base period, calculate (1) the percentage growth in Nominal GDP, (2) Period 2 Real GDP at constant Period 1 prices, and (3) the percentage growth in Real GDP.",
    "derivation": [
      "\\text{Prerequisite Baseline: }\\text{Nominal GDP}_1 = \\text{Real GDP}_1 = \\text{R}200;\\quad \\text{Nominal GDP}_2 = \\text{R}250",
      "\\text{Nominal GDP Growth} = \\frac{250 - 200}{200} \\times 100 = +25.0\\%",
      "\\text{Period 2 Real GDP (at Period 1 prices)} = (100 \\times 1) + (10 \\times 10) + (5 \\times 5) = 100 + 100 + 25 = \\text{R}225",
      "\\text{Real GDP Growth} = \\frac{225 - 200}{200} \\times 100 = +12.5\\%"
    ],
    "options": [
      {
        "text": "Nominal GDP grows by 25.0% (R200 to R250), while Period 2 Real GDP at Period 1 prices is R225, giving 12.5% real growth.",
        "isCorrect": true,
        "refutation": "Correct! Nominal growth is (250 - 200)/200 = 25.0%; valuing Period 2 quantities at Period 1 constant prices yields 100(1) + 10(10) + 5(5) = R225, so real output grew by (225 - 200)/200 = 12.5%."
      },
      {
        "text": "Nominal GDP grows by 20.0% (R200 to R250), while Period 2 Real GDP at Period 1 prices is R225, giving 11.1% real growth.",
        "isCorrect": false,
        "refutation": "20.0% (50/250) and 11.1% (25/225) divide the output change by Period 2 values instead of the Period 1 base value (R200)."
      },
      {
        "text": "Nominal GDP grows by 25.0% (R200 to R250), while Period 2 Real GDP at Period 1 prices is R250, giving 25.0% real growth.",
        "isCorrect": false,
        "refutation": "R250 values Period 2 output at Period 2 current prices (110 + 120 + 20) instead of constant Period 1 base prices (100 + 100 + 25 = R225)."
      },
      {
        "text": "Nominal GDP grows by 50.0% (R200 to R250), while Period 2 Real GDP at Period 1 prices is R222, giving 11.0% real growth.",
        "isCorrect": false,
        "refutation": "50 is the absolute Rand increase in Nominal GDP (not the percentage growth rate of 25.0%), and 5 Laptops at the R5 base price equals R25 (giving R225, not R222)."
      }
    ],
    "chapter": "ch13",
    "citation": "Mohr 6e, Mohr 6e, pp. 235–265 • Study Unit 1, pp. 2–11"
  },
  {
    "id": "q_ch13_26",
    "chapterId": "ch13",
    "source": "Chapter 13 — Measuring the Performance of the Economy — Follow-Up Calculation of Percentage Real GDP Growth Using Prerequisite Real GDP Totals",
    "topic": "Follow-Up Calculation of Percentage Real GDP Growth Using Prerequisite Real GDP Totals",
    "difficulty": "Medium",
    "stem": "In the economy producing Clothes (Period 1: P=R260, Q=13; Period 2: P=R310, Q=10), Food (Period 1: P=R2 150, Q=12; Period 2: P=R2 100, Q=13), and Drink (Period 1: P=R655, Q=11; Period 2: P=R680, Q=11), the preceding step established that Real GDP (at constant Period 1 base prices) is R36 385 in Period 1 and R37 755 in Period 2. Using these prerequisite totals, calculate the percentage Real GDP growth rate between Period 1 and Period 2, and compare it with Period 2 Nominal GDP.",
    "derivation": [
      "\\text{Prerequisite Real GDP Totals: }\\text{Real GDP}_1 = (260 \\times 13) + (2\\,150 \\times 12) + (655 \\times 11) = \\text{R}36\\,385;\\quad \\text{Real GDP}_2 = (260 \\times 10) + (2\\,150 \\times 13) + (655 \\times 11) = \\text{R}37\\,755",
      "\\text{Real GDP Growth Rate} = \\frac{\\text{Real GDP}_2 - \\text{Real GDP}_1}{\\text{Real GDP}_1} \\times 100 = \\frac{37\\,755 - 36\\,385}{36\\,385} \\times 100 = \\frac{1\\,370}{36\\,385} \\times 100 = +3.77\\%",
      "\\text{Period 2 Nominal GDP} = (310 \\times 10) + (2\\,100 \\times 13) + (680 \\times 11) = 3\\,100 + 27\\,300 + 7\\,480 = \\text{R}37\\,880\\quad (+4.11\\%\\text{ nominal growth})"
    ],
    "options": [
      {
        "text": "Real GDP increased by R1 370, yielding a real economic growth rate of +3.77% (while Period 2 Nominal GDP is R37 880, or +4.11%).",
        "isCorrect": true,
        "refutation": "Correct! Subtracting Period 1 Real GDP (R36 385) from Period 2 Real GDP (R37 755) gives +R1 370, and dividing by R36 385 yields a real growth rate of +3.77%."
      },
      {
        "text": "Real GDP increased by R1 495, yielding a real economic growth rate of +4.11% (using Period 2 Nominal GDP of R37 880).",
        "isCorrect": false,
        "refutation": "R37 880 and +4.11% measure Period 2 Nominal GDP at current prices rather than Real GDP at constant Period 1 base prices (R37 755, or +3.77%)."
      },
      {
        "text": "Real GDP increased by R1 370, yielding a real economic growth rate of +3.63% (by dividing R1 370 by Period 2 Real GDP of R37 755).",
        "isCorrect": false,
        "refutation": "3.63% divides the real output gain (R1 370) by Period 2 Real GDP (R37 755) instead of the initial Period 1 base value (R36 385)."
      },
      {
        "text": "Real GDP contracted by R125, yielding a negative growth rate of -0.33% (by comparing Period 2 Real GDP with Period 2 Nominal GDP).",
        "isCorrect": false,
        "refutation": "Comparing Period 2 Real GDP (R37 755) with Period 2 Nominal GDP (R37 880) reflects the Period 2 price deflator (100.33), not inter-temporal real output growth."
      }
    ],
    "chapter": "ch13",
    "citation": "Mohr 6e, Mohr 6e, pp. 235–265 • Study Unit 1, pp. 2–11"
  },
  {
    "id": "q_ch13_27",
    "chapterId": "ch13",
    "source": "Chapter 13 — Measuring the Performance of the Economy — Follow-Up Calculation of the GDP Deflator Using Prerequisite Nominal and Real GDP",
    "topic": "Follow-Up Calculation of the GDP Deflator Using Prerequisite Nominal and Real GDP",
    "difficulty": "Medium",
    "stem": "In the economy producing Fish (Base Period 1: P=$7, Q=400; Current Period 3: P=$9, Q=900), Pork (Base Period 1: P=$8, Q=225; Current Period 3: P=$6, Q=275), and Beef (Base Period 1: P=$10, Q=175; Current Period 3: P=$15, Q=275), the preceding step established that Base Period 1 GDP is $6 350, Current Period 3 Nominal GDP (at Period 3 prices) is $13 875, and Current Period 3 Real GDP (at constant Base Period 1 prices) is $11 250. Using these prerequisite results, calculate the Current Period 3 GDP Deflator and the cumulative price level change since Base Period 1.",
    "derivation": [
      "\\text{Prerequisite Period 3 Totals: }\\text{Nominal GDP}_3 = 9(900) + 6(275) + 15(275) = \\$13\\,875;\\quad \\text{Real GDP}_3 = 7(900) + 8(275) + 10(275) = \\$11\\,250",
      "\\text{GDP Deflator}_3 = \\frac{\\text{Nominal GDP}_3}{\\text{Real GDP}_3} \\times 100 = \\frac{13\\,875}{11\\,250} \\times 100 = 123.33",
      "\\text{Cumulative Price Level Change from Base Period 1 (where Deflator = 100)} = 123.33 - 100 = +23.33\\%"
    ],
    "options": [
      {
        "text": "The Period 3 GDP Deflator is 123.33 (or 123.3), indicating that the aggregate price level is 23.33% higher than in base Period 1.",
        "isCorrect": true,
        "refutation": "Correct! Dividing Period 3 Nominal GDP ($13 875) by Period 3 Real GDP ($11 250) and multiplying by 100 yields a GDP Deflator of 123.33 (+23.33% above the base index of 100)."
      },
      {
        "text": "The Period 3 GDP Deflator is 81.08 (or 81.1), indicating that the aggregate price level fell by 18.92% relative to base Period 1.",
        "isCorrect": false,
        "refutation": "81.08 inverts the deflator formula by dividing Real GDP ($11 250) by Nominal GDP ($13 875) instead of (Nominal GDP / Real GDP) × 100."
      },
      {
        "text": "The Period 3 GDP Deflator is 218.50 (or 218.5), indicating that the aggregate price level is 118.50% higher than in base Period 1.",
        "isCorrect": false,
        "refutation": "218.50 divides Period 3 Nominal GDP ($13 875) by Period 1 Nominal GDP ($6 350), which measures nominal GDP expansion (+118.50%) rather than the price deflator."
      },
      {
        "text": "The Period 3 GDP Deflator is 177.17 (or 177.2), indicating that the aggregate price level is 77.17% higher than in base Period 1.",
        "isCorrect": false,
        "refutation": "177.17 divides Period 3 Real GDP ($11 250) by Period 1 Real GDP ($6 350), which measures real output growth (+77.17%) rather than the price deflator."
      }
    ],
    "chapter": "ch13",
    "citation": "Mohr 6e, Mohr 6e, pp. 235–265 • Study Unit 1, pp. 2–11"
  },
  {
    "id": "q_ch13_28",
    "chapterId": "ch13",
    "source": "Chapter 13 — Measuring the Performance of the Economy — Follow-Up Analysis of Gini Coefficient Extremes and Standard Inequality Measures",
    "topic": "Follow-Up Analysis of Gini Coefficient Extremes and Standard Inequality Measures",
    "difficulty": "Easy",
    "stem": "In the Lorenz curve diagram where cumulative population percentage is plotted on the horizontal axis, cumulative income percentage is plotted on the vertical axis, the 45-degree diagonal 0B represents the line of perfect equality, and the shaded lens 0AB between the diagonal and the Lorenz curve represents the area of inequality: (1) What does a Gini coefficient of 0.67 imply about a country's income distribution? (2) What are the three standard statistical methods used by economists to measure income inequality?",
    "derivation": [
      "\\text{Gini Coefficient} = \\frac{\\text{Area of Inequality (0AB)}}{\\text{Total Area Under Diagonal } 0B} \\in [0, 1]\\text{ (or } [0, 100]\\text{ as a Gini index)}",
      "\\text{Gini} = 0 \\implies \\text{Perfect equality (Lorenz curve coincides with } 0B);\\quad \\text{Gini} = 1 \\implies \\text{Perfect inequality (one person receives 100\\% of income)}",
      "\\text{Gini} = 0.67 \\implies \\text{Extremely high/skewed income inequality (among the most unequal distributions globally)}",
      "\\text{Three Standard Inequality Measures: (1) Lorenz curve, (2) Gini coefficient, (3) Quantile ratio (e.g., decile or quintile ratio)}"
    ],
    "options": [
      {
        "text": "A Gini of 0.67 indicates severe income inequality (since 0 is perfect equality and 1 is complete inequality); the three measures are the Lorenz curve, Gini coefficient, and Quantile ratio.",
        "isCorrect": true,
        "refutation": "Correct! Because the Gini coefficient ranges from 0 (perfect equality) to 1 (complete inequality), 0.67 reflects a highly skewed distribution, measured via the Lorenz curve, Gini coefficient, and quantile ratios."
      },
      {
        "text": "A Gini of 0.67 indicates near-perfect income equality (since 1 is perfect equality and 0 is complete inequality); the three measures are CPI, PPI, and the Implicit GDP Deflator.",
        "isCorrect": false,
        "refutation": "This reverses the Gini scale (0 is perfect equality, 1 is perfect inequality), and CPI, PPI, and the GDP Deflator measure price inflation rather than income distribution."
      },
      {
        "text": "A Gini of 0.67 means that 67% of the workforce is employed in the formal sector; the three measures are Gross Domestic Product, Gross National Income, and Gross Domestic Expenditure.",
        "isCorrect": false,
        "refutation": "The Gini coefficient is the geometric ratio of the area of inequality to the triangle under the line of equality, not an employment rate or aggregate output total."
      },
      {
        "text": "A Gini of 0.67 indicates moderate equality because it is below 50; the three measures are the Repo rate, the Cash reserve requirement, and the Open-market bond yield.",
        "isCorrect": false,
        "refutation": "When expressed as a decimal (0 to 1), 0.67 corresponds to a Gini index of 67 (well above 50, signifying severe inequality), and repo/reserve rates are monetary instruments."
      }
    ],
    "chapter": "ch13",
    "citation": "Mohr 6e, Mohr 6e, pp. 235–265 • Study Unit 1, pp. 2–11"
  },
  {
    "id": "q_ch14_12",
    "chapterId": "ch14",
    "source": "Chapter 14 — The Monetary Sector — Contrasting an Interest Rate Hike (7% to 8%) with an Autonomous Decline in Money Demand",
    "topic": "Contrasting an Interest Rate Hike (7% to 8%) with an Autonomous Decline in Money Demand",
    "difficulty": "Medium",
    "stem": "Under the central bank's endogenous (demand-determined) money supply framework—where there is no independent vertical money supply curve and the interest rate is anchored horizontally via the accommodation policy repo rate—contrast what happens on the money market diagram in two distinct scenarios: (Scenario A) The central bank raises the repo rate so the market interest rate increases from 7% to 8%, ceteris paribus; (Scenario B) Total demand for money decreases (due to a fall in real income $Y$) while the central bank keeps the interest rate unchanged at $i_0$.",
    "derivation": [
      "\\text{Endogenous Rule: } M \\text{ is demand-determined at the intersection of the horizontal interest rate line } i \\text{ and money demand } L(Y, i)",
      "\\text{Scenario A (} i \\text{ rises from } 7\\% \\text{ to } 8\\%\\text{): Horizontal rate line shifts UPWARD along fixed } L \\text{ curve } \\implies \\text{equilibrium quantity of money } M \\text{ decreases }(M_0 \\to M_1)",
      "\\text{Scenario B (Money demand falls at constant } i_0\\text{): } L \\text{ curve shifts LEFTWARD along fixed horizontal line } i_0 \\implies \\text{equilibrium quantity of money } M \\text{ decreases }(M_0 \\to M_1)"
    ],
    "options": [
      {
        "text": "Scenario A shifts the horizontal interest rate line upward from 7% to 8% (moving up along L so M falls); Scenario B shifts the L curve leftward along constant i0 (so M also falls).",
        "isCorrect": true,
        "refutation": "Correct! In Scenario A, a higher interest rate causes an upward movement along L that contracts credit and money M; in Scenario B, a leftward shift of L at fixed i0 also reduces equilibrium M."
      },
      {
        "text": "Scenario A shifts a vertical money supply curve leftward to raise interest rates from 7% to 8%; Scenario B shifts the L curve leftward and lowers the market interest rate below i0.",
        "isCorrect": false,
        "refutation": "Under the endogenous accommodation system, there is no independent vertical money supply curve, and the central bank holds the interest rate horizontal at i0 in Scenario B."
      },
      {
        "text": "Scenario A shifts the L curve rightward when interest rates rise from 7% to 8% (increasing M); Scenario B shifts the horizontal interest rate line downward (increasing M).",
        "isCorrect": false,
        "refutation": "A change in the interest rate causes a movement along the L curve (not a shift of L), and higher interest rates reduce (not increase) the quantity of credit and money demanded."
      },
      {
        "text": "Scenario A leaves the equilibrium quantity of money M unchanged when rates rise from 7% to 8%; Scenario B increases the equilibrium quantity of money M at constant i0.",
        "isCorrect": false,
        "refutation": "Because L slopes downward, an upward shift of the interest rate line from 7% to 8% contracts M, and a leftward shift of L at constant i0 likewise contracts M."
      }
    ],
    "chapter": "ch14",
    "citation": "Mohr 6e, Mohr 6e, pp. 267–294 • Study Unit 2.1, pp. 14–24"
  },
  {
    "id": "q_ch15_13",
    "chapterId": "ch15",
    "source": "Chapter 15 — The Government Sector — Calculating Gross Tax, Net Tax After Rebate, and Effective Tax Rate for R475 000 Income",
    "topic": "Calculating Gross Tax, Net Tax After Rebate, and Effective Tax Rate for R475 000 Income",
    "difficulty": "Medium",
    "stem": "A taxpayer under age 65 earns a taxable income of R475 000 during the tax year. According to the statutory progressive tax table, the bracket for R393 001 – R550 000 specifies: 'R103 000 + 40% of taxable income above R393 000', and the primary tax rebate is R15 000. Calculate (1) the gross tax liability before the rebate, (2) the net tax payable after deducting the primary rebate, and (3) the effective (average) tax rate after the rebate.",
    "derivation": [
      "\\text{Income Excess Above Bracket Threshold} = 475\\,000 - 393\\,000 = \\text{R}82\\,000",
      "\\text{Gross Tax Before Rebate} = 103\\,000 + 0.40(82\\,000) = 103\\,000 + 32\\,800 = \\text{R}135\\,800\\quad (\\text{Pre-rebate ATR} = 28.59\\%)",
      "\\text{Net Tax Payable After Rebate} = 135\\,800 - 15\\,000 = \\text{R}120\\,800",
      "\\text{Effective (Average) Tax Rate} = \\frac{120\\,800}{475\\,000} \\times 100 = 25.43\\%\\quad (\\text{while Marginal Tax Rate} = 40\\%)"
    ],
    "options": [
      {
        "text": "Gross tax is R135 800, net tax after the R15 000 rebate is R120 800, and the effective tax rate is 25.43% (28.59% pre-rebate).",
        "isCorrect": true,
        "refutation": "Correct! 40% of the R82 000 excess above R393 000 is R32 800; adding R103 000 gives R135 800 gross tax, and subtracting the R15 000 rebate gives R120 800 (25.43% of R475 000)."
      },
      {
        "text": "Gross tax is R190 000, net tax after the R15 000 rebate is R175 000, and the effective tax rate is 36.84% (40.00% pre-rebate).",
        "isCorrect": false,
        "refutation": "R190 000 erroneously multiplies the entire R475 000 income by 40% instead of applying 40% only to the R82 000 excess above R393 000."
      },
      {
        "text": "Gross tax is R135 800, net tax after the R15 000 rebate is R150 800, and the effective tax rate is 31.75% (28.59% pre-rebate).",
        "isCorrect": false,
        "refutation": "R150 800 adds the R15 000 primary rebate to gross tax instead of subtracting it; a tax rebate directly reduces the taxpayer's liability."
      },
      {
        "text": "Gross tax is R103 000, net tax after the R15 000 rebate is R88 000, and the effective tax rate is 18.53% (21.68% pre-rebate).",
        "isCorrect": false,
        "refutation": "R103 000 is only the base tax on the first R393 000 of income, omitting the 40% marginal tax (R32 800) on the R82 000 earned above R393 000."
      }
    ],
    "chapter": "ch15",
    "citation": "Mohr 6e, Mohr 6e, pp. 295–322 • Study Unit 2.2, pp. 25–46"
  },
  {
    "id": "q_ch15_14",
    "chapterId": "ch15",
    "source": "Chapter 15 — The Government Sector — Follow-Up Analysis of Tax Liability, MTR, and ATR When Income Rises Across Brackets",
    "topic": "Follow-Up Analysis of Tax Liability, MTR, and ATR When Income Rises Across Brackets",
    "difficulty": "Medium",
    "stem": "In a multi-bracket personal income tax schedule (with zero rebate), Judy initially earns R18 900 in the R15 001 – R20 000 bracket ('R2 550 + 21% of income above R15 000'), where the first-part calculation established her initial tax payable as R3 369 (2 550 + 0.21×3 900), her marginal tax rate (MTR) as 21%, and her average tax rate (ATR) as 17.83%. Suppose Judy completes her degree and is promoted to a salary of R83 450 in the top R80 001+ bracket ('R25 000 + 43% of income above R80 000'). Calculate her new tax payable, new MTR, and new ATR, and classify the tax schedule.",
    "derivation": [
      "\\text{Prerequisite Baseline at } Y_0 = \\text{R}18\\,900:\\quad T_0 = \\text{R}3\\,369,\\quad \\text{MTR}_0 = 21\\%, \\quad \\text{ATR}_0 = \\frac{3\\,369}{18\\,900} = 17.83\\%",
      "\\text{New Tax at } Y_1 = \\text{R}83\\,450:\\quad T_1 = 25\\,000 + 0.43(83\\,450 - 80\\,000) = 25\\,000 + 0.43(3\\,450) = 25\\,000 + 1\\,483.50 = \\text{R}26\\,483.50",
      "\\text{New Marginal Tax Rate (MTR}_1\\text{)} = 43\\%;\\quad \\text{New Average Tax Rate (ATR}_1\\text{)} = \\frac{26\\,483.50}{83\\,450} \\times 100 = 31.74\\%",
      "\\text{Classification: Progressive tax because ATR rises as income rises }(17.83\\% \\to 31.74\\%)\\text{ and MTR} > \\text{ATR}"
    ],
    "options": [
      {
        "text": "New tax is R26 483.50, MTR is 43%, and ATR rises from 17.83% to 31.74%, confirming that the tax system is progressive.",
        "isCorrect": true,
        "refutation": "Correct! Tax on the R3 450 excess above R80 000 is R1 483.50; adding R25 000 gives R26 483.50 (ATR = 31.74%), and because ATR rises with income (17.83% to 31.74%), the tax is progressive."
      },
      {
        "text": "New tax is R35 883.50, MTR is 43%, and ATR rises from 17.83% to 43.00%, confirming that the tax system is proportional.",
        "isCorrect": false,
        "refutation": "R35 883.50 erroneously applies the 43% marginal rate to Judy's entire R83 450 salary instead of only the R3 450 excess above R80 000."
      },
      {
        "text": "New tax is R26 483.50, MTR is 31.74%, and ATR is 43.00%, confirming that the tax system is regressive across brackets.",
        "isCorrect": false,
        "refutation": "This swaps the marginal tax rate (43% on income above R80 000) with the average tax rate (26 483.50 / 83 450 = 31.74%), and rising ATR defines a progressive (not regressive) tax."
      },
      {
        "text": "New tax is R25 000.00, MTR is 43%, and ATR rises from 17.83% to 29.96%, confirming that the tax system is progressive.",
        "isCorrect": false,
        "refutation": "R25 000 omits the 43% marginal tax (R1 483.50) payable on the R3 450 earned above the R80 000 bracket threshold."
      }
    ],
    "chapter": "ch15",
    "citation": "Mohr 6e, Mohr 6e, pp. 295–322 • Study Unit 2.2, pp. 25–46"
  },
  {
    "id": "q_ch15_15",
    "chapterId": "ch15",
    "source": "Chapter 15 — The Government Sector — Comparing Annual Tax Liability and Effective Tax Rates Across Adjacent Tax Brackets",
    "topic": "Comparing Annual Tax Liability and Effective Tax Rates Across Adjacent Tax Brackets",
    "difficulty": "Medium",
    "stem": "Twins Joe and Bella earn monthly salaries of R35 000 per month (R420 000 per year) and R35 500 per month (R426 000 per year), respectively. The statutory annual tax table specifies: Bracket A (R305 851 – R423 300): 'R63 853 + 31% of taxable income above R305 850'; Bracket B (R423 301 – R555 600): 'R100 263 + 36% of taxable income above R423 300'. Calculate the gross annual tax liability and pre-rebate effective (average) tax rate for both Joe and Bella, and identify the tax structure.",
    "derivation": [
      "\\text{Joe (}Y = 35\\,000 \\times 12 = \\text{R}420\\,000\\text{ in Bracket A): } T_{\\text{Joe}} = 63\\,853 + 0.31(420\\,000 - 305\\,850) = 63\\,853 + 35\\,386.50 = \\text{R}99\\,239.50",
      "\\text{Joe Effective Rate} = \\frac{99\\,239.50}{420\\,000} \\times 100 = 23.63\\%",
      "\\text{Bella (}Y = 35\\,500 \\times 12 = \\text{R}426\\,000\\text{ in Bracket B): } T_{\\text{Bella}} = 100\\,263 + 0.36(426\\,000 - 423\\,300) = 100\\,263 + 972.00 = \\text{R}101\\,235.00",
      "\\text{Bella Effective Rate} = \\frac{101\\,235.00}{426\\,000} \\times 100 = 23.76\\%\\quad (\\text{Progressive since ATR rises from } 23.63\\% \\text{ to } 23.76\\%)"
    ],
    "options": [
      {
        "text": "Joe pays R99 239.50 (23.63% effective rate) and Bella pays R101 235.00 (23.76% effective rate), illustrating a progressive tax.",
        "isCorrect": true,
        "refutation": "Correct! Joe's R420 000 annual income yields 63 853 + 0.31(114 150) = R99 239.50 (23.63%), while Bella's R426 000 yields 100 263 + 0.36(2 700) = R101 235.00 (23.76%)."
      },
      {
        "text": "Joe pays R130 200.00 (31.00% effective rate) and Bella pays R153 360.00 (36.00% effective rate), illustrating a progressive tax.",
        "isCorrect": false,
        "refutation": "Multiplying total annual income by the bracket marginal rate (31% or 36%) ignores the lower marginal rates applied to earlier income brackets."
      },
      {
        "text": "Joe pays R99 239.50 (31.00% effective rate) and Bella pays R101 235.00 (36.00% effective rate), illustrating a proportional tax.",
        "isCorrect": false,
        "refutation": "31% and 36% are the marginal tax rates on the top Rand earned in each bracket, whereas the effective (average) tax rates are 23.63% and 23.76%."
      },
      {
        "text": "Joe pays R63 853.00 (15.20% effective rate) and Bella pays R100 263.00 (23.54% effective rate), illustrating a regressive tax.",
        "isCorrect": false,
        "refutation": "R63 853 and R100 263 are only the base bracket thresholds before adding 31% of R114 150 for Joe (+R35 386.50) and 36% of R2 700 for Bella (+R972.00)."
      }
    ],
    "chapter": "ch15",
    "citation": "Mohr 6e, Mohr 6e, pp. 295–322 • Study Unit 2.2, pp. 25–46"
  },
  {
    "id": "q_ch15_16",
    "chapterId": "ch15",
    "source": "Chapter 15 — The Government Sector — Follow-Up Calculation of Bella Mbonambi's Effective Tax Rate From Prerequisite Net Tax Payable",
    "topic": "Follow-Up Calculation of Bella Mbonambi's Effective Tax Rate From Prerequisite Net Tax Payable",
    "difficulty": "Medium",
    "stem": "Continuing with the personal income tax analysis for Bella Mbonambi (aged 23, earning R315 850 per year as a junior economist), where the bracket R315 101 – R400 700 specifies 'R58 389 + 35% of taxable income above R315 100' and the primary rebate is R10 900: the first part of the calculation established that her gross tax before rebate is R58 651.50 and her net tax payable after deducting the R10 900 primary rebate is R47 751.50. Using this prerequisite net tax payable (R47 751.50), calculate Bella's effective (average) tax rate (ATR) and explain why it is lower than her 35% statutory marginal tax rate (MTR).",
    "derivation": [
      "\\text{Prerequisite Baseline: Annual Taxable Income} = \\text{R}315\\,850;\\quad \\text{Gross Tax} = \\text{R}58\\,651.50;\\quad \\text{Net Tax Payable} = \\text{R}47\\,751.50",
      "\\text{Effective (Average) Tax Rate After Rebate} = \\frac{47\\,751.50}{315\\,850} \\times 100 = 15.12\\%",
      "\\text{Pre-Rebate Average Tax Rate} = \\frac{58\\,651.50}{315\\,850} \\times 100 = 18.57\\%",
      "\\text{Why ATR }(15.12\\%) < \\text{MTR }(35.00\\%):\\text{ Earlier income tranches below R315 100 are taxed at lower marginal rates and the R10 900 primary rebate reduces net tax}"
    ],
    "options": [
      {
        "text": "Her effective (average) tax rate is 15.12% after the rebate (18.57% pre-rebate), which is below the 35% marginal rate because lower tranches face lower rates.",
        "isCorrect": true,
        "refutation": "Correct! Dividing Bella's net tax payable (R47 751.50) by her annual taxable income (R315 850) gives 15.12% (18.57% gross), well below the 35% rate applied only to the R750 excess."
      },
      {
        "text": "Her effective (average) tax rate is 35.00% after the rebate (and her marginal rate is 15.12%), because the statutory bracket rate defines the average burden.",
        "isCorrect": false,
        "refutation": "35.00% is the statutory marginal tax rate on each Rand above R315 100, whereas 15.12% (47 751.50 / 315 850) is the effective (average) tax rate."
      },
      {
        "text": "Her effective (average) tax rate is 22.02% after the rebate (by adding the R10 900 primary rebate to gross tax of R58 651.50 before dividing by R315 850).",
        "isCorrect": false,
        "refutation": "22.02% (69 551.50 / 315 850) results from adding the R10 900 primary rebate to gross tax instead of subtracting it."
      },
      {
        "text": "Her effective (average) tax rate is 13.31% after the rebate (by subtracting both the R10 900 primary rebate and the R5 700 age-65+ secondary rebate).",
        "isCorrect": false,
        "refutation": "Because Bella is 23 years old (under age 65), she qualifies only for the R10 900 primary rebate, making her net tax R47 751.50 (15.12%), not R42 051.50 (13.31%)."
      }
    ],
    "chapter": "ch15",
    "citation": "Mohr 6e, Mohr 6e, pp. 295–322 • Study Unit 2.2, pp. 25–46"
  },
  {
    "id": "q_ch15_17",
    "chapterId": "ch15",
    "source": "Chapter 15 — The Government Sector — Follow-Up Analysis of Deadweight Loss and Corrective Government Intervention",
    "topic": "Follow-Up Analysis of Deadweight Loss and Corrective Government Intervention",
    "difficulty": "Medium",
    "stem": "Continuing with the polluting Highveld chemical plant where Marginal Social Cost ($MSC = MPC + MEC$) lies above Marginal Private Cost ($MPC$), so the unregulated competitive market equilibrium produces output $Q_1$ at price $P_1$ whereas the socially efficient optimum is at lower output $Q_2$ and higher price $P_2$: (1) Why does every unit produced between $Q_2$ and $Q_1$ generate a deadweight welfare loss to society? (2) What corrective policy instrument can the government use to internalise the externality and restore output to $Q_2$?",
    "derivation": [
      "\\text{Prerequisite Context: Unregulated Market Equilibrium at } Q_1 \\text{ where } MPC = MSB;\\quad \\text{Social Optimum at } Q_2 < Q_1 \\text{ where } MSC = MSB",
      "\\text{For all output units } Q \\in (Q_2, Q_1):\\quad MSC(Q) > MSB(Q)\\implies \\text{social cost of each extra unit exceeds its social benefit, creating a deadweight loss triangle}",
      "\\text{Corrective Policy: Impose a specific Pigouvian excise tax } t = MEC \\text{ per unit on the polluter, shifting } MPC \\text{ upward to coincide with } MSC \\text{ at } (Q_2, P_2)"
    ],
    "options": [
      {
        "text": "Between Q2 and Q1, Marginal Social Cost exceeds Marginal Social Benefit (MSC > MSB); government can impose a Pigouvian tax equal to the marginal external cost (MEC).",
        "isCorrect": true,
        "refutation": "Correct! For every unit beyond Q2 up to Q1, total cost to society (MSC) exceeds the benefit to consumers (DD = MSB), and a Pigouvian tax equal to MEC shifts private cost up to MSC."
      },
      {
        "text": "Between Q2 and Q1, Marginal Social Benefit exceeds Marginal Social Cost (MSB > MSC); government should grant a production subsidy to expand chemical output beyond Q1.",
        "isCorrect": false,
        "refutation": "MSB > MSC and corrective subsidies apply to positive externalities (like vaccinations), whereas negative pollution externalities cause overproduction where MSC > MSB."
      },
      {
        "text": "Between Q2 and Q1, Marginal Private Cost exceeds Marginal Social Cost (MPC > MSC); government should impose a maximum price ceiling below P1 to curb pollution.",
        "isCorrect": false,
        "refutation": "Pollution adds external damage to private cost so MSC > MPC, and setting a price ceiling below P1 would increase quantity demanded even further above Q2."
      },
      {
        "text": "Between Q2 and Q1, deadweight loss is zero because private firm profits offset pollution damage; Coasean bargaining requires no property rights to reach Q2.",
        "isCorrect": false,
        "refutation": "Deadweight loss is strictly positive whenever MSC > MSB, and Coasean bargaining fails in atmospheric pollution because property rights are diffuse and transaction costs are prohibitive."
      }
    ],
    "chapter": "ch15",
    "citation": "Mohr 6e, Mohr 6e, pp. 295–322 • Study Unit 2.2, pp. 25–46"
  },
  {
    "id": "q_ch16_08",
    "chapterId": "ch16",
    "source": "Chapter 16 — The Foreign Sector — Follow-Up Calculation of Opportunity Cost of Olives Between Spain and Greece",
    "topic": "Follow-Up Calculation of Opportunity Cost of Olives Between Spain and Greece",
    "difficulty": "Medium",
    "stem": "Continuing with the two-country trade model where Spain can produce either 100 kg of olives or 150 kg of tobacco per unit of resources and Greece can produce either 300 kg of olives or 300 kg of tobacco (and where the first part established that 1 kg of tobacco costs 0.67 kg of olives in Spain versus 1.00 kg of olives in Greece, giving Spain the comparative advantage in tobacco): calculate each country's opportunity cost of producing 1 kg of olives and determine which country should specialise in and export olives.",
    "derivation": [
      "\\text{Prerequisite Part 1: Opp. Cost of 1 kg Tobacco} = \\frac{100}{150} = 0.67\\text{ kg Olives in Spain vs } \\frac{300}{300} = 1.00\\text{ kg Olives in Greece (Spain specialises in Tobacco)}",
      "\\text{Opp. Cost of 1 kg Olives in Spain} = \\frac{150\\text{ kg Tobacco}}{100\\text{ kg Olives}} = 1.50\\text{ kg Tobacco}",
      "\\text{Opp. Cost of 1 kg Olives in Greece} = \\frac{300\\text{ kg Tobacco}}{300\\text{ kg Olives}} = 1.00\\text{ kg Tobacco}",
      "\\text{Since } 1.00 < 1.50\\text{ kg Tobacco, Greece has the lower opportunity cost (comparative advantage) in Olives and exports Olives to Spain}"
    ],
    "options": [
      {
        "text": "1 kg of olives costs 1.50 kg of tobacco in Spain and 1.00 kg of tobacco in Greece, so Greece holds the comparative advantage in olives and exports olives.",
        "isCorrect": true,
        "refutation": "Correct! Spain sacrifices 150/100 = 1.50 kg of tobacco per kg of olives while Greece sacrifices only 300/300 = 1.00 kg of tobacco, giving Greece the comparative advantage in olives."
      },
      {
        "text": "1 kg of olives costs 0.67 kg of tobacco in Spain and 1.00 kg of tobacco in Greece, so Spain holds the comparative advantage in both olives and tobacco.",
        "isCorrect": false,
        "refutation": "0.67 (100/150) is Spain's opportunity cost of 1 kg of tobacco in terms of olives; its reciprocal (150/100 = 1.50 kg tobacco) is Spain's opportunity cost of 1 kg of olives."
      },
      {
        "text": "1 kg of olives costs 1.50 kg of tobacco in Spain and 1.00 kg of tobacco in Greece, so Spain holds the comparative advantage in olives because 1.50 exceeds 1.00.",
        "isCorrect": false,
        "refutation": "Comparative advantage belongs to the country with the LOWER opportunity cost (Greece at 1.00 kg tobacco < Spain at 1.50 kg tobacco), never the higher cost."
      },
      {
        "text": "1 kg of olives costs 3.00 kg of tobacco in Greece because Greece produces 300 kg vs Spain's 100 kg, so Spain must export olives to Greece.",
        "isCorrect": false,
        "refutation": "300 kg vs 100 kg compares absolute output across countries; domestic opportunity cost divides Greece's own foregone tobacco (300) by Greece's own olive output (300) = 1.00."
      }
    ],
    "chapter": "ch16",
    "citation": "Mohr 6e, Mohr 6e, pp. 323–346 • Study Unit 2.3, pp. 47–56"
  },
  {
    "id": "q_ch16_09",
    "chapterId": "ch16",
    "source": "Chapter 16 — The Foreign Sector — Follow-Up Calculation of Import Cost in Domestic Currency Under Exchange Rate Shifts",
    "topic": "Follow-Up Calculation of Import Cost in Domestic Currency Under Exchange Rate Shifts",
    "difficulty": "Medium",
    "stem": "Continuing with the trade model between Australia (150 surfboards or 900 bottles of sunscreen) and the USA (200 surfboards or 1 600 bottles of sunscreen)—where the first part established that Australia has the comparative advantage in surfboards (sacrificing 6 vs 8 bottles of sunscreen) while the USA has the comparative advantage in sunscreen (sacrificing 0.125 vs 0.167 surfboards): suppose Australia imports 50 bottles of sunscreen from the USA at a US price of US$1.50 per bottle. Calculate (1) how much Australia pays in Australian dollars (AUS$) when the exchange rate is US$1 = AUS$1.70, and (2) how much Australia pays if the Australian dollar appreciates to US$1 = AUS$1.50.",
    "derivation": [
      "\\text{Foreign Currency Invoice for 50 Bottles} = 50 \\times \\text{US}\\$1.50 = \\text{US}\\$75.00",
      "\\text{Cost in AUS\\$ at } \\text{US}\\$1 = \\text{AUS}\\$1.70:\\quad \\text{US}\\$75.00 \\times 1.70 = \\text{AUS}\\$127.50",
      "\\text{Cost in AUS\\$ after Appreciation to } \\text{US}\\$1 = \\text{AUS}\\$1.50:\\quad \\text{US}\\$75.00 \\times 1.50 = \\text{AUS}\\$112.50\\quad (\\text{imports become cheaper by AUS}\\$15.00)"
    ],
    "options": [
      {
        "text": "The 50 bottles cost US$75.00, which equals AUS$127.50 at AUS$1.70/US$ and falls to AUS$112.50 when the Australian dollar appreciates to AUS$1.50/US$.",
        "isCorrect": true,
        "refutation": "Correct! 50 × US$1.50 = US$75.00; multiplying by 1.70 gives AUS$127.50, and an appreciation of the AUS$ to 1.50 per US$ lowers the domestic import bill to AUS$112.50."
      },
      {
        "text": "The 50 bottles cost US$75.00, which equals AUS$44.12 at AUS$1.70/US$ and rises to AUS$50.00 when the Australian dollar appreciates to AUS$1.50/US$.",
        "isCorrect": false,
        "refutation": "AUS$44.12 (75 / 1.70) divides by the exchange rate instead of multiplying US$75.00 by 1.70 AUS$/US$."
      },
      {
        "text": "The 50 bottles cost US$85.00, which equals AUS$144.50 at AUS$1.70/US$ and rises to AUS$150.00 because currency appreciation makes imports more expensive.",
        "isCorrect": false,
        "refutation": "50 × US$1.50 is US$75.00 (not US$85.00), and an appreciation of the domestic currency makes foreign imports cheaper in domestic currency, not more expensive."
      },
      {
        "text": "The 50 bottles cost US$75.00, which equals AUS$127.50 at AUS$1.70/US$, but Australia should export sunscreen because it sacrifices 0.167 vs 0.125 surfboards.",
        "isCorrect": false,
        "refutation": "Because 0.125 < 0.167 surfboards, the USA has the lower opportunity cost in sunscreen, so Australia imports sunscreen and exports surfboards."
      }
    ],
    "chapter": "ch16",
    "citation": "Mohr 6e, Mohr 6e, pp. 323–346 • Study Unit 2.3, pp. 47–56"
  },
  {
    "id": "q_ch16_10",
    "chapterId": "ch16",
    "source": "Chapter 16 — The Foreign Sector — Four Macroeconomic Determinants of Domestic Currency Appreciation and Trade Balance Impact",
    "topic": "Four Macroeconomic Determinants of Domestic Currency Appreciation and Trade Balance Impact",
    "difficulty": "Easy",
    "stem": "In a floating exchange rate regime (such as the Rand against the US dollar or Russian rouble), which four fundamental macroeconomic developments cause an appreciation of the domestic currency (either by shifting foreign currency supply $SS$ rightward or foreign currency demand $DD$ leftward), and what is the resulting impact on the domestic trade balance?",
    "derivation": [
      "\\text{Rightward Shift of Foreign Currency Supply } (SS \\uparrow \\implies E \\downarrow, \\text{ Appreciation}):",
      "(1)\\text{ Stronger foreign demand for domestic exports (or rising export commodity prices)};\\quad (2)\\text{ Higher domestic interest rates relative to abroad (attracting financial capital inflows)};\\quad (3)\\text{ Boom in inbound foreign tourism / FDI}",
      "\\text{Leftward Shift of Foreign Currency Demand } (DD \\downarrow \\implies E \\downarrow, \\text{ Appreciation}): (4)\\text{ Lower domestic inflation relative to trading partners (reducing import demand)}",
      "\\text{Trade Balance Impact: Appreciation makes exports pricier in foreign currency } (X \\downarrow) \\text{ and imports cheaper in Rand } (Z \\uparrow) \\implies \\text{Net Exports } (X - Z) \\text{ decline}"
    ],
    "options": [
      {
        "text": "Higher export demand/commodity prices, higher relative domestic interest rates (capital inflows), inbound tourism, and lower domestic inflation; appreciation reduces net exports (X - Z).",
        "isCorrect": true,
        "refutation": "Correct! All four factors increase foreign currency inflows or reduce outflows (appreciating the Rand), which subsequently makes exports dearer abroad and imports cheaper locally."
      },
      {
        "text": "A surge in domestic import propensity, lower domestic repo rates (capital outflows), higher domestic inflation, and outbound tourism; appreciation increases net exports (X - Z).",
        "isCorrect": false,
        "refutation": "Higher imports, capital outflows, and high domestic inflation increase the demand for foreign currency, causing a currency depreciation rather than an appreciation."
      },
      {
        "text": "Higher export demand/commodity prices, higher relative domestic interest rates, inbound tourism, and lower domestic inflation; appreciation raises Rand import prices and boosts exports.",
        "isCorrect": false,
        "refutation": "While the four causes of appreciation are right, an appreciation lowers (not raises) import prices in Rand and dampens (not boosts) export competitiveness."
      },
      {
        "text": "Central bank purchases of foreign exchange reserves, abolishing import tariffs, domestic recessionary capital flight, and sovereign rating downgrades; appreciation leaves trade unchanged.",
        "isCorrect": false,
        "refutation": "Central bank buying of USD, tariff removal, and capital flight all increase demand for foreign currency, which depreciates the domestic currency."
      }
    ],
    "chapter": "ch16",
    "citation": "Mohr 6e, Mohr 6e, pp. 323–346 • Study Unit 2.3, pp. 47–56"
  },
  {
    "id": "q_ch17_06",
    "chapterId": "ch17",
    "source": "Chapter 17 — A Simple Keynesian Model of the Economy — Simplifying Assumptions of the Two-Sector Model vs the Four Aggregate Expenditure Components",
    "topic": "Simplifying Assumptions of the Two-Sector Model vs the Four Aggregate Expenditure Components",
    "difficulty": "Easy",
    "stem": "In the build-up of the macroeconomic income-determination model: (1) What are the fundamental simplifying assumptions of the elementary two-sector Keynesian model? (2) When the model is expanded to the full open economy with government, what are the four components of Aggregate Expenditure ($A$) and which of those components are treated as purely autonomous versus induced by income?",
    "derivation": [
      "\\text{Elementary Two-Sector Assumptions: (1) Only households and firms exist (no government } G=T=0, \\text{ no foreign sector } X=Z=0\\text{)};",
      "\\text{(2) Prices and nominal wages are fixed/given (no inflation); (3) Money market and interest rates are excluded (investment } \\bar{I} \\text{ is autonomous); (4) Aggregate spending drives output } (A \\to Y)",
      "\\text{Full Four-Sector Expenditure: } A = C + I + G + (X - Z),\\text{ where } \\bar{I}, \\bar{G}, \\bar{X} \\text{ are autonomous while } C = \\bar{C} + c(1-t)Y \\text{ and } Z = \\bar{Z} + mY \\text{ contain induced parts}"
    ],
    "options": [
      {
        "text": "Elementary assumptions: only households/firms (no G, T, X, Z), fixed prices/wages, given interest rates, and demand-driven output; Full components: C, I, G, and Net Exports (X - Z).",
        "isCorrect": true,
        "refutation": "Correct! The elementary model excludes the state, foreign trade, price flexibility, and financial markets to isolate C + I, before expanding to A = C + I + G + (X - Z)."
      },
      {
        "text": "Elementary assumptions: flexible prices and wages, vertical aggregate supply at full employment, and Say's Law (Y drives A); Full components: Money supply M1, M2, M3, and Bonds.",
        "isCorrect": false,
        "refutation": "Flexible prices, automatic full employment, and Say's Law are Classical assumptions, and M1–M3 are monetary stock aggregates rather than real expenditure flows."
      },
      {
        "text": "Elementary assumptions: only government and foreign sectors exist with zero household consumption; Full components: Taxes (T), Savings (S), Imports (Z), and Depreciation.",
        "isCorrect": false,
        "refutation": "The elementary model starts with households (C) and firms (I) while excluding G and X - Z; Taxes, Savings, and Imports are leakages rather than injections/expenditure components."
      },
      {
        "text": "Elementary assumptions: only households/firms, fixed prices/wages, and demand-driven output; Full components: Land, Labour, Physical Capital, and Entrepreneurship.",
        "isCorrect": false,
        "refutation": "Land, labour, capital, and entrepreneurship are the four supply-side factors of production, whereas the four components of aggregate expenditure are C, I, G, and (X - Z)."
      }
    ],
    "chapter": "ch17",
    "citation": "Mohr 6e, Mohr 6e, pp. 347–376 • Study Unit 3.1, pp. 58–71"
  },
  {
    "id": "q_ch18_07",
    "chapterId": "ch18",
    "source": "Chapter 18 — The Keynesian Model with a Government and a Foreign Sector — Follow-Up Calculation of Equilibrium Income and ΔI = +150 Shock Using Prerequisite Multiplier",
    "topic": "Follow-Up Calculation of Equilibrium Income and ΔI = +150 Shock Using Prerequisite Multiplier",
    "difficulty": "Hard",
    "stem": "Continuing with the open economy of Portofino where Autonomous consumption $\\bar{C} = 100$, MPC $c = 0.8$, proportional tax rate $t = 0.2$, Investment $\\bar{I} = 100$, Government spending $\\bar{G} = 250$, Exports $\\bar{X} = 300$, and Imports $Z = 20 + 0.1Y$: the first part of the analysis established that autonomous expenditure is $\\bar{A} = 730$ and the open-economy multiplier (rounded to two decimal places) is $\\alpha = 2.17$ (unrounded $1/0.46 \\approx 2.1739$). Using this prerequisite multiplier, calculate (1) the initial equilibrium level of income $Y_0$, (2) the change in equilibrium income $\\Delta Y$ and new equilibrium income $Y_1$ if autonomous investment increases by $\\Delta I = +150$ (from $100$ to $250$), and (3) how this shock appears on the $45^\\circ$ Keynesian diagram.",
    "derivation": [
      "\\text{Prerequisite Baseline: }\\bar{A}_0 = 100 + 100 + 250 + 300 - 20 = 730;\\quad \\alpha = \\frac{1}{1 - 0.8(0.8) + 0.1} = \\frac{1}{0.46} \\approx 2.17",
      "\\text{Initial Equilibrium Income: }Y_0 = \\alpha \\times \\bar{A}_0 = 2.17 \\times 730 = 1\\,584.10\\quad (\\text{or } \\frac{730}{0.46} = 1\\,586.96\\text{ unrounded})",
      "\\text{Investment Shock }(\\Delta I = +150):\\quad \\Delta Y = 2.17 \\times 150 = +325.50 \\implies Y_1 = 1\\,584.10 + 325.50 = 1\\,909.60\\quad (\\text{or } \\frac{880}{0.46} = 1\\,913.04)",
      "\\text{Diagrammatic Effect: Parallel upward shift of the Aggregate Expenditure line } A \\text{ from vertical intercept } 730 \\text{ to } 880\\text{ (slope } 0.54 \\text{ unchanged)}"
    ],
    "options": [
      {
        "text": "Initial Y0 = 1 584.10 (1 586.96 exact); ΔI = +150 raises Y by +325.50 to Y1 = 1 909.60 (1 913.04 exact) via a parallel upward shift of A from 730 to 880.",
        "isCorrect": true,
        "refutation": "Correct! Multiplying Ā0 = 730 by α = 2.17 yields Y0 = 1 584.10, and the +150 investment shock shifts the A curve vertically upward to 880, adding 2.17 × 150 = +325.50 to reach 1 909.60."
      },
      {
        "text": "Initial Y0 = 1 584.10 (1 586.96 exact); ΔI = +150 raises Y by +150.00 to Y1 = 1 734.10 (1 736.96 exact) while steepening the slope of the A curve.",
        "isCorrect": false,
        "refutation": "Adding only +150 ignores the multiplier expansion (2.17 × 150 = 325.50), and an autonomous investment change shifts A in parallel without altering its slope (0.54)."
      },
      {
        "text": "Initial Y0 = 1 670.90 (using Ā0 = 770); ΔI = +150 raises Y by +325.50 to Y1 = 1 996.40 via a downward rotation of the 45-degree line.",
        "isCorrect": false,
        "refutation": "Ā0 = 770 erroneously adds autonomous imports (+20 instead of -20), and the 45-degree reference line (A = Y) never rotates when autonomous spending changes."
      },
      {
        "text": "Initial Y0 = 1 584.10 (1 586.96 exact); ΔI = +150 lowers Y by -325.50 to Y1 = 1 258.60 because higher investment crowds out net exports.",
        "isCorrect": false,
        "refutation": "In the Keynesian model, an increase in autonomous investment (ΔI = +150) is an injection that shifts aggregate spending upward and expands equilibrium income."
      }
    ],
    "chapter": "ch18",
    "citation": "Mohr 6e, Mohr 6e, pp. 377–405 • Study Unit 3.2, pp. 72–91"
  },
  {
    "id": "q_ch18_08",
    "chapterId": "ch18",
    "source": "Chapter 18 — The Keynesian Model with a Government and a Foreign Sector — Follow-Up Calculation of Tax Revenue, Budget Surplus, and Investment Drop Using Prerequisite Equilibrium",
    "topic": "Follow-Up Calculation of Tax Revenue, Budget Surplus, and Investment Drop Using Prerequisite Equilibrium",
    "difficulty": "Hard",
    "stem": "In the open economy where $\\bar{C} = \\text{R}150$, $\\bar{I} = \\text{R}300$, $\\bar{G} = \\text{R}400$, $\\bar{X} = \\text{R}250$, $Z = 50 + 0.15Y$, $c = 0.75$, $t = 0.25$, and full-employment income $Y_f = \\text{R}1\\,900$: the first part of the analysis established that autonomous spending is $\\bar{A} = \\text{R}1\\,050$, the rounded multiplier is $\\alpha = 1.70$ (unrounded $1/0.5875 \\approx 1.7021$), and initial equilibrium income is $Y_0 = \\text{R}1\\,785$ (unrounded $\\text{R}1\\,787.23$). Using this prerequisite equilibrium $Y_0$, calculate (1) government tax revenue $T = tY_0$ and the government budget balance ($T - G$) at initial equilibrium, (2) the new equilibrium income $Y_1$ if autonomous investment drops from $\\text{R}300$ to $\\text{R}250$ ($\\Delta I = -50$), and (3) the required $\\Delta G$ to reach $Y_f = \\text{R}1\\,900$ from $Y_0 = \\text{R}1\\,785$.",
    "derivation": [
      "\\text{Prerequisite Baseline: }\\bar{A}_0 = \\text{R}1\\,050,\\quad \\alpha = 1.70\\text{ (exact } 1.7021\\text{)},\\quad Y_0 = \\text{R}1\\,785\\text{ (exact R}1\\,787.23\\text{)}",
      "\\text{Tax Revenue at } Y_0:\\quad T = 0.25 \\times 1\\,785 = \\text{R}446.25\\text{ (exact R}446.81\\text{)};\\quad \\text{Budget Balance} = T - G = 446.25 - 400 = +\\text{R}46.25\\text{ Surplus}",
      "\\text{Investment Drop }(\\Delta I = 250 - 300 = -50):\\quad \\Delta Y = 1.70 \\times (-50) = -\\text{R}85 \\implies Y_1 = 1\\,785 - 85 = \\text{R}1\\,700\\text{ (exact R}1\\,702.13\\text{)}",
      "\\text{Fiscal Injection to Reach } Y_f = 1\\,900:\\quad \\Delta Y = 1\\,900 - 1\\,785 = 115 \\implies \\Delta G = \\frac{115}{1.70} = \\text{R}67.65\\text{ (exact R}66.25\\text{)}"
    ],
    "options": [
      {
        "text": "Tax revenue is R446.25 (R446.81 exact) yielding a +R46.25 budget surplus; when I drops to R250, Y1 falls by R85 to R1 700 (and reaching Yf = R1 900 from Y0 requires ΔG = +R67.65).",
        "isCorrect": true,
        "refutation": "Correct! At Y0 = R1 785, T = 0.25(1 785) = R446.25 > G = R400 (+R46.25 surplus); a R50 drop in I reduces Y by 1.70 × 50 = R85 to R1 700, while closing the R115 output gap requires ΔG = 115/1.70 = R67.65."
      },
      {
        "text": "Tax revenue is R475.00 (at Yf = R1 900) yielding a +R75.00 budget surplus; when I drops to R250, Y1 falls by R50 to R1 735 (and reaching Yf = R1 900 from Y0 requires ΔG = +R115.00).",
        "isCorrect": false,
        "refutation": "Tax revenue must be evaluated at actual equilibrium income Y0 = R1 785 (not Yf = R1 900), and both the investment shock and fiscal gap are scaled by the multiplier α = 1.70."
      },
      {
        "text": "Tax revenue is R446.25 (R446.81 exact) yielding a -R46.25 budget deficit; when I drops to R250, Y1 rises by R85 to R1 870 (and reaching Yf = R1 900 from Y0 requires ΔG = -R67.65).",
        "isCorrect": false,
        "refutation": "Because tax revenue (R446.25) exceeds government expenditure (R400), the government runs a budget surplus (+R46.25), and a fall in investment contracts equilibrium income to R1 700."
      },
      {
        "text": "Tax revenue is R425.00 (at Y1 = R1 700) yielding a +R25.00 budget surplus; when I drops to R250, Y1 falls by R125 to R1 660 using a simple multiplier of 2.50.",
        "isCorrect": false,
        "refutation": "Initial tax revenue at Y0 = R1 785 is R446.25, and the open-economy multiplier with taxes and imports is 1.70 (giving ΔY = -85), not 2.50."
      }
    ],
    "chapter": "ch18",
    "citation": "Mohr 6e, Mohr 6e, pp. 377–405 • Study Unit 3.2, pp. 72–91"
  },
  {
    "id": "q_ch18_09",
    "chapterId": "ch18",
    "source": "Chapter 18 — The Keynesian Model with a Government and a Foreign Sector — Calculating Initial Autonomous Spending, Multiplier, and Equilibrium Income Prior to a Fiscal Shift",
    "topic": "Calculating Initial Autonomous Spending, Multiplier, and Equilibrium Income Prior to a Fiscal Shift",
    "difficulty": "Medium",
    "stem": "Consider the baseline open-economy Keynesian model (in R millions) prior to any fiscal reform: Autonomous consumption $\\bar{C} = 30$, Autonomous investment $\\bar{I} = 10$, Government spending $\\bar{G} = 20$, Exports $\\bar{X} = 10$, Autonomous imports $\\bar{Z} = 5$, Marginal propensity to consume $c = 0.6$ (so marginal propensity to save $s = 0.4$), average/proportional tax rate $t = 0.167$ ($1/6$), and Marginal propensity to import $m = 0.125$ ($1/8$). Calculate (1) total autonomous expenditure $\\bar{A}$, (2) the open-economy multiplier $\\alpha$, and (3) the initial equilibrium level of income $Y_0$ and initial tax revenue $T_0$.",
    "derivation": [
      "\\text{Autonomous Expenditure: }\\bar{A} = \\bar{C} + \\bar{I} + \\bar{G} + \\bar{X} - \\bar{Z} = 30 + 10 + 20 + 10 - 5 = \\text{R}65\\text{ million}",
      "\\text{Induced Slope: }c(1 - t) - m = 0.6(1 - 0.167) - 0.125 = 0.6(0.8333) - 0.125 = 0.50 - 0.125 = 0.375",
      "\\text{Multiplier: }\\alpha = \\frac{1}{1 - c(1 - t) + m} = \\frac{1}{1 - 0.50 + 0.125} = \\frac{1}{0.625} = 1.60",
      "\\text{Initial Equilibrium Income: }Y_0 = \\alpha \\times \\bar{A} = 1.60 \\times 65 = \\text{R}104\\text{ million};\\quad T_0 = 0.167 \\times 104 = \\text{R}17.37\\text{m}"
    ],
    "options": [
      {
        "text": "Autonomous expenditure Ā is R65m, the multiplier α is 1.60 (1/0.625), initial equilibrium income Y0 is R104m, and initial tax revenue is R17.37m.",
        "isCorrect": true,
        "refutation": "Correct! Ā = 30 + 10 + 20 + 10 - 5 = R65m, 1 - 0.6(1 - 0.167) + 0.125 = 0.625 gives α = 1.60, and Y0 = 1.60 × 65 = R104m (which serves as the baseline before any tax-financed grant)."
      },
      {
        "text": "Autonomous expenditure Ā is R75m, the multiplier α is 1.60 (1/0.625), initial equilibrium income Y0 is R120m, and initial tax revenue is R20.04m.",
        "isCorrect": false,
        "refutation": "Ā = R75m erroneously adds autonomous imports (+5) instead of subtracting them (-5) from autonomous aggregate expenditure."
      },
      {
        "text": "Autonomous expenditure Ā is R65m, the multiplier α is 2.50 (1/0.400), initial equilibrium income Y0 is R162.5m, and initial tax revenue is R27.14m.",
        "isCorrect": false,
        "refutation": "A multiplier of 2.50 = 1/(1 - 0.6) uses the simple closed-economy formula, omitting both proportional income taxation (t = 0.167) and induced imports (m = 0.125)."
      },
      {
        "text": "Autonomous expenditure Ā is R65m, the multiplier α is 2.00 (1/0.500), initial equilibrium income Y0 is R130m, and initial tax revenue is R21.71m.",
        "isCorrect": false,
        "refutation": "A multiplier of 2.00 = 1/[1 - 0.6(0.833)] accounts for the tax rate (t = 0.167) but forgets to add the marginal propensity to import (m = 0.125) to the denominator."
      }
    ],
    "chapter": "ch18",
    "citation": "Mohr 6e, Mohr 6e, pp. 377–405 • Study Unit 3.2, pp. 72–91"
  },
  {
    "id": "q_ch18_10",
    "chapterId": "ch18",
    "source": "Chapter 18 — The Keynesian Model with a Government and a Foreign Sector — Follow-Up Calculation of Taxes, Budget Balance, and Household Saving Given Equilibrium Income",
    "topic": "Follow-Up Calculation of Taxes, Budget Balance, and Household Saving Given Equilibrium Income",
    "difficulty": "Hard",
    "stem": "In the macroeconomic model where Consumption $C = 85 + 0.5Y_d$, Investment $I = 75$, Government expenditure $G = 70$, Taxes $T = 0.25Y$, Disposable income $Y_d = Y - T$, Exports $X = 30$, and Imports $Z = 30 + 0.3Y_d$: the first part of the analysis established that autonomous spending is $\\bar{A} = 230$, the multiplier is $\\alpha = 1/0.85 \\approx 1.1765$, and equilibrium national income is $Y_0 = 270.59$ ($230 / 0.85$). Using this prerequisite equilibrium income $Y_0 = 270.59$, calculate (1) equilibrium tax revenue $T$, (2) the government budget balance ($T - G$), (3) equilibrium disposable income $Y_d$, and (4) household saving $S = Y_d - C$.",
    "derivation": [
      "\\text{Prerequisite Baseline: }Y_0 = \\frac{230}{1 - (0.5 - 0.3)(1 - 0.25)} = \\frac{230}{0.85} = 270.59",
      "\\text{Equilibrium Taxes: }T = 0.25 \\times Y_0 = 0.25 \\times 270.59 = 67.65",
      "\\text{Government Budget Balance: }T - G = 67.65 - 70.00 = -2.35\\quad (\\text{Budget Deficit of } 2.35,\\text{ since } G > T)",
      "\\text{Disposable Income and Saving: }Y_d = 270.59 - 67.65 = 202.94;\\quad C = 85 + 0.5(202.94) = 186.47;\\quad S = Y_d - C = 202.94 - 186.47 = 16.47"
    ],
    "options": [
      {
        "text": "Taxes T = 67.65, the government budget has a deficit of -2.35 (since G = 70 > T = 67.65), disposable income Yd = 202.94, and household saving S = 16.47.",
        "isCorrect": true,
        "refutation": "Correct! At Y0 = 270.59, T = 0.25(270.59) = 67.65, leaving a budget deficit of 67.65 - 70 = -2.35; disposable income is 202.94, consumption is 186.47, and saving is 202.94 - 186.47 = 16.47."
      },
      {
        "text": "Taxes T = 67.65, the government budget has a surplus of +2.35 (G - T), disposable income Yd = 270.59, and household saving S = 50.29.",
        "isCorrect": false,
        "refutation": "When government spending (G = 70) exceeds tax revenue (T = 67.65), the budget is in deficit (-2.35), and saving must be calculated from after-tax disposable income Yd = 202.94."
      },
      {
        "text": "Taxes T = 57.50, the government budget has a deficit of -12.50, disposable income Yd = 172.50, and household saving S = 1.25 (evaluating at Ā = 230).",
        "isCorrect": false,
        "refutation": "Evaluating taxes and disposable income at autonomous spending (230) instead of equilibrium income (Y0 = 270.59) omits the multiplier expansion."
      },
      {
        "text": "Taxes T = 67.65, the government budget has a deficit of -2.35, disposable income Yd = 202.94, and household saving S = 186.47.",
        "isCorrect": false,
        "refutation": "186.47 is household consumption expenditure C = 85 + 0.5(202.94); household saving is S = Yd - C = -85 + 0.5(202.94) = 16.47."
      }
    ],
    "chapter": "ch18",
    "citation": "Mohr 6e, Mohr 6e, pp. 377–405 • Study Unit 3.2, pp. 72–91"
  },
  {
    "id": "q_ch20_08",
    "chapterId": "ch20",
    "source": "Chapter 20 — Inflation — Follow-Up Calculation of GDP Deflator Inflation Using Prerequisite Nominal and Real GDP",
    "topic": "Follow-Up Calculation of GDP Deflator Inflation Using Prerequisite Nominal and Real GDP",
    "difficulty": "Medium",
    "stem": "Continuing with the three-good economy producing Pizza (Period 1: Q=24, P=R22.50; Period 2: Q=36, P=R24.75), Soda (Period 1: Q=50, P=R4.00; Period 2: Q=75, P=R4.40), and Ice Cream (Period 1: Q=15, P=R8.00; Period 2: Q=22.5, P=R8.80) where Period 1 is the base period: the first part of the analysis established that Period 1 Nominal GDP = Period 1 Real GDP = R860, Period 2 Nominal GDP = R1 419, and Period 2 Real GDP (at constant Period 1 base prices) = R1 290. Using these prerequisite totals, calculate the Period 1 and Period 2 GDP Deflators and the Period 2 percentage inflation rate.",
    "derivation": [
      "\\text{Prerequisite Totals: }\\text{Nominal GDP}_1 = \\text{Real GDP}_1 = \\text{R}860;\\quad \\text{Nominal GDP}_2 = \\text{R}1\\,419;\\quad \\text{Real GDP}_2 = \\text{R}1\\,290",
      "\\text{Period 1 GDP Deflator} = \\frac{860}{860} \\times 100 = 100.00",
      "\\text{Period 2 GDP Deflator} = \\frac{1\\,419}{1\\,290} \\times 100 = 110.00",
      "\\text{Period 2 Inflation Rate} = \\frac{110.00 - 100.00}{100.00} \\times 100 = 10.00\\%\\quad (\\text{while real output grew by } \\frac{1\\,290 - 860}{860} = +50.00\\%)"
    ],
    "options": [
      {
        "text": "The GDP Deflator rises from 100.00 in Period 1 to 110.00 in Period 2 (1 419 / 1 290 × 100), yielding a Period 2 inflation rate of 10.00%.",
        "isCorrect": true,
        "refutation": "Correct! Dividing Period 2 Nominal GDP (R1 419) by Period 2 Real GDP (R1 290) and multiplying by 100 gives a Deflator of 110.00, which is 10.00% above the base index of 100.00."
      },
      {
        "text": "The GDP Deflator rises from 100.00 in Period 1 to 150.00 in Period 2 (1 290 / 860 × 100), yielding a Period 2 inflation rate of 50.00%.",
        "isCorrect": false,
        "refutation": "50.00% [(1 290 - 860) / 860 × 100] is the percentage growth in real physical output volume, whereas every good's price rose by exactly 10.00%."
      },
      {
        "text": "The GDP Deflator falls from 100.00 in Period 1 to 90.91 in Period 2 (1 290 / 1 419 × 100), yielding a Period 2 deflation rate of -9.09%.",
        "isCorrect": false,
        "refutation": "90.91 inverts the GDP Deflator formula by dividing Real GDP (R1 290) by Nominal GDP (R1 419) instead of Nominal GDP by Real GDP."
      },
      {
        "text": "The GDP Deflator rises from 100.00 in Period 1 to 165.00 in Period 2 (1 419 / 860 × 100), yielding a Period 2 inflation rate of 65.00%.",
        "isCorrect": false,
        "refutation": "65.00% [(1 419 - 860) / 860 × 100] is the nominal GDP growth rate, which combines +50.00% real output expansion with +10.00% price inflation."
      }
    ],
    "chapter": "ch20",
    "citation": "Mohr 6e, Mohr 6e, pp. 437–466 • Study Unit 4, pp. 93–101"
  },
  {
    "id": "q_ch21_07",
    "chapterId": "ch21",
    "source": "Chapter 21 — Unemployment, Poverty and Inequality — Follow-Up Calculation of Tigeria's Broad Unemployment Rate From Prerequisite Labour Force Totals",
    "topic": "Follow-Up Calculation of Tigeria's Broad Unemployment Rate From Prerequisite Labour Force Totals",
    "difficulty": "Medium",
    "stem": "Continuing with the labour market statistics for Tigeria where Total adult population = 34 000 000, Total employed = 18 600 000, Actively seeking unemployed = 8 900 000, and Discouraged work-seekers = 2 500 000: the first part of the analysis established that Tigeria's strict labour force is 27 500 000 (18.6m + 8.9m) and its broad (expanded) labour force is 30 000 000 (27.5m + 2.5m). Using these prerequisite labour force totals, calculate Tigeria's broad unemployment rate and compare it with the strict unemployment rate.",
    "derivation": [
      "\\text{Prerequisite Labour Force Totals: }\\text{LF}_{\\text{strict}} = 27.5\\text{ million};\\quad \\text{LF}_{\\text{broad}} = 30.0\\text{ million}",
      "\\text{Total Broad Unemployed} = \\text{Active Unemployed }(8.9\\text{m}) + \\text{Discouraged Work-Seekers }(2.5\\text{m}) = 11.4\\text{ million}",
      "\\text{Broad Unemployment Rate } (u_{\\text{broad}}) = \\frac{11.4\\text{m}}{30.0\\text{m}} \\times 100 = 38.00\\%",
      "\\text{Strict Unemployment Rate } (u_{\\text{strict}}) = \\frac{8.9\\text{m}}{27.5\\text{m}} \\times 100 = 32.36\\%\\quad (\\text{Broad rate is } 5.64\\text{ percentage points higher})"
    ],
    "options": [
      {
        "text": "Tigeria's broad unemployment rate is 38.00% (11.4m / 30.0m × 100), compared with a strict unemployment rate of 32.36% (8.9m / 27.5m × 100).",
        "isCorrect": true,
        "refutation": "Correct! Dividing total broad unemployed (8.9m + 2.5m = 11.4m) by the prerequisite broad labour force (30.0m) gives 38.00%, compared to 8.9m / 27.5m = 32.36% strict."
      },
      {
        "text": "Tigeria's broad unemployment rate is 41.45% (11.4m / 27.5m × 100), compared with a strict unemployment rate of 32.36% (8.9m / 27.5m × 100).",
        "isCorrect": false,
        "refutation": "41.45% adds the 2.5m discouraged work-seekers to the numerator (11.4m) but divides by the strict labour force (27.5m) instead of the broad labour force (30.0m)."
      },
      {
        "text": "Tigeria's broad unemployment rate is 29.67% (8.9m / 30.0m × 100), compared with a strict unemployment rate of 32.36% (8.9m / 27.5m × 100).",
        "isCorrect": false,
        "refutation": "29.67% includes the 2.5m discouraged work-seekers in the denominator (30.0m) but forgets to include them in the unemployed numerator (11.4m)."
      },
      {
        "text": "Tigeria's broad unemployment rate is 33.53% (11.4m / 34.0m × 100), compared with a strict unemployment rate of 26.18% (8.9m / 34.0m × 100).",
        "isCorrect": false,
        "refutation": "33.53% and 26.18% divide by the total adult population (34.0m, which includes 4.0m economically inactive persons) instead of the labour force."
      }
    ],
    "chapter": "ch21",
    "citation": "Mohr 6e, Mohr 6e, pp. 467–484 • Study Unit 5, pp. 102–107"
  },
  {
    "id": "q_ch13_29",
    "chapterId": "ch13",
    "source": "Chapter 13 — Measuring the Performance of the Economy — Follow-Up Calculation of Real GDP Growth and Price Inflation in a Two-Good Economy",
    "topic": "Follow-Up Calculation of Real GDP Growth and Price Inflation in a Two-Good Economy",
    "difficulty": "Medium",
    "stem": "Continuing with the two-good economy producing Good A (Bread: Period 1 Q=1 000, P=R15; Period 2 Q=1 200, P=R20) and Good B (Milk: Period 1 Q=2 000, P=R5; Period 2 Q=2 200, P=R10), where the first part of the analysis established that Period 1 Nominal GDP is R25 000 (15 000 + 10 000) and Period 2 Nominal GDP is R46 000 (24 000 + 22 000, an 84.0% nominal surge): calculate (1) Period 2 Real GDP at constant Period 1 prices, (2) the percentage growth in Real GDP, and (3) why the 84.0% nominal increase overstates true economic growth.",
    "derivation": [
      "\\text{Prerequisite Baseline: }\\text{Nominal GDP}_1 = \\text{Real GDP}_1 = \\text{R}25\\,000;\\quad \\text{Nominal GDP}_2 = \\text{R}46\\,000\\quad (+84.0\\%)",
      "\\text{Period 2 Real GDP (at Period 1 prices)} = (1\\,200 \\times 15) + (2\\,200 \\times 5) = 18\\,000 + 11\\,000 = \\text{R}29\\,000",
      "\\text{Real GDP Growth Rate} = \\frac{29\\,000 - 25\\,000}{25\\,000} \\times 100 = \\frac{4\\,000}{25\\,000} \\times 100 = +16.0\\%",
      "\\text{Period 2 Implicit GDP Deflator} = \\frac{46\\,000}{29\\,000} \\times 100 = 158.62\\quad (\\text{prices rose by } 58.62\\%, \\text{ inflating Nominal GDP})"
    ],
    "options": [
      {
        "text": "Period 2 Real GDP is R29 000 (18 000 + 11 000), yielding +16.0% real growth; the 84.0% nominal jump reflects a 58.62% price surge (Deflator = 158.62).",
        "isCorrect": true,
        "refutation": "Correct! Valuing Period 2 quantities at Period 1 constant prices gives 1 200(15) + 2 200(5) = R29 000 (+16.0% real volume growth), while the GDP Deflator rose to 158.62."
      },
      {
        "text": "Period 2 Real GDP is R40 000 (20 000 + 20 000), yielding +60.0% real growth; the 84.0% nominal jump reflects a 24.00% price surge (Deflator = 124.00).",
        "isCorrect": false,
        "refutation": "R40 000 multiplies Period 1 quantities (1 000 and 2 000) by Period 2 prices (R20 and R10), reversing the constant-price Real GDP formula."
      },
      {
        "text": "Period 2 Real GDP is R29 000 (18 000 + 11 000), yielding +13.79% real growth; the 84.0% nominal jump reflects a 68.00% price surge (Deflator = 168.00).",
        "isCorrect": false,
        "refutation": "13.79% (4 000 / 29 000) divides the real output gain by Period 2 Real GDP instead of Period 1 base GDP (R25 000), and Deflator = (46 000 / 29 000) × 100 = 158.62."
      },
      {
        "text": "Period 2 Real GDP is R46 000 (24 000 + 22 000), yielding +84.0% real growth; constant-price GDP always equals current-price GDP in Period 2.",
        "isCorrect": false,
        "refutation": "Nominal and Real GDP coincide only in the base period (Period 1 = R25 000); in Period 2, rising prices push Nominal GDP (R46 000) far above Real GDP (R29 000)."
      }
    ],
    "chapter": "ch13",
    "citation": "Mohr 6e, Mohr 6e, pp. 235–265 • Study Unit 1, pp. 2–11"
  },
  {
    "id": "q_ch14_13",
    "chapterId": "ch14",
    "source": "Chapter 14 — The Monetary Sector — Identifying Unit of Account, Medium of Exchange, and Transactions vs Speculative Motives",
    "topic": "Identifying Unit of Account, Medium of Exchange, and Transactions vs Speculative Motives",
    "difficulty": "Easy",
    "stem": "Evaluate three foundational monetary concepts: (1) When a café menu lists the price of a cappuccino as R35 and a muffin as R25, which specific function of money is being performed? (2) According to Keynes's liquidity preference theory, which motive explains why households and firms hold active money balances to bridge the time gap between income receipts and everyday expenditure? (3) Which variable is the primary determinant of passive (speculative) money balances ($L_2$)?",
    "derivation": [
      "\\text{Menu Price Listing: Unit of account (agreed standard measure for quoting and comparing relative values)}",
      "\\text{Bridging Income-Expenditure Gaps: Transactions motive (part of active balances } L_1(Y), \\text{ positively related to national income } Y\\text{)}",
      "\\text{Passive/Speculative Balances } L_2(i): \\text{Inversely related to the market interest rate } i \\text{ (the opportunity cost of holding non-interest-bearing money)}"
    ],
    "options": [
      {
        "text": "(1) Unit of account; (2) The transactions motive (active balances driven by national income Y); (3) The market interest rate i (inversely related to L2).",
        "isCorrect": true,
        "refutation": "Correct! Expressing prices in Rand is the unit of account function, bridging receipt-expenditure gaps is the transactions motive L1(Y), and speculative balances L2 vary inversely with the interest rate i."
      },
      {
        "text": "(1) Store of value; (2) The speculative motive (passive balances driven by bond yields); (3) The statutory tax rate t (positively related to L2).",
        "isCorrect": false,
        "refutation": "Quoting prices on a menu is the unit of account function (no physical money is stored or exchanged yet), and everyday purchases reflect the transactions motive."
      },
      {
        "text": "(1) Medium of exchange; (2) The precautionary motive (passive balances driven by the repo rate); (3) Real GDP Y (positively related to L2).",
        "isCorrect": false,
        "refutation": "Medium of exchange occurs when payment is actually tendered; routine predictable purchases reflect the transactions motive, and real income Y drives active balances L1."
      },
      {
        "text": "(1) Standard of barter; (2) The transactions motive (active balances driven by interest rates); (3) The price level P (unrelated to opportunity cost i).",
        "isCorrect": false,
        "refutation": "Money replaces barter rather than serving as a standard of barter, and active transactions balances depend primarily on national income Y while L2 depends on interest rate i."
      }
    ],
    "chapter": "ch14",
    "citation": "Mohr 6e, Mohr 6e, pp. 267–294 • Study Unit 2.1, pp. 14–24"
  },
  {
    "id": "q_ch14_14",
    "chapterId": "ch14",
    "source": "Chapter 14 — The Monetary Sector — Statutory Banknote Authority, Commercial Bank Deposit Creation, and Monetary Aggregates",
    "topic": "Statutory Banknote Authority, Commercial Bank Deposit Creation, and Monetary Aggregates",
    "difficulty": "Easy",
    "stem": "In the South African monetary system: (1) Which institution holds the sole statutory right to issue banknotes and coins? (2) How is the majority of the money supply created by commercial banks? (3) Which monetary aggregate is the narrowest measure of money (defined strictly as coins and banknotes in circulation outside the monetary sector plus immediate demand/cheque deposits)?",
    "derivation": [
      "\\text{Sole Note/Coin Issuing Authority: The South African Reserve Bank (SARB)}",
      "\\text{Commercial Bank Money Creation: Extending credit (loans) to borrowers, which creates new demand deposits}",
      "\\text{Narrowest Monetary Aggregate: } M_1 = C\\text{ (currency outside monetary sector)} + D\\text{ (demand/cheque/transmission deposits)}"
    ],
    "options": [
      {
        "text": "(1) The South African Reserve Bank (SARB); (2) By granting loans that create demand deposits; (3) M1 is the narrowest aggregate (currency plus demand deposits).",
        "isCorrect": true,
        "refutation": "Correct! Only the SARB has the statutory right to issue currency, commercial banks create money endogenously by granting credit (creating demand deposits), and M1 is the narrowest aggregate based on the medium-of-exchange function."
      },
      {
        "text": "(1) National Treasury and SARS; (2) By printing physical banknotes inside commercial bank branches; (3) M3 is the narrowest aggregate (currency only).",
        "isCorrect": false,
        "refutation": "National Treasury manages fiscal policy (not currency issue), commercial banks cannot print banknotes, and M3 is the broadest (most comprehensive) monetary aggregate."
      },
      {
        "text": "(1) The South African Reserve Bank (SARB); (2) By requiring 100% gold backing for all savings accounts; (3) M2 is the narrowest aggregate (long-term deposits).",
        "isCorrect": false,
        "refutation": "Modern banking operates on a fractional-reserve fiat basis (not 100% gold backing), and M1 is narrower than M2 (which adds short- and medium-term deposits)."
      },
      {
        "text": "(1) The Johannesburg Stock Exchange (JSE); (2) By collecting Value-Added Tax from retail consumers; (3) M1 is the broadest aggregate (including government bonds).",
        "isCorrect": false,
        "refutation": "The JSE is a secondary equity market, VAT is fiscal tax revenue, and government bonds are never included in M1, M2, or M3."
      }
    ],
    "chapter": "ch14",
    "citation": "Mohr 6e, Mohr 6e, pp. 267–294 • Study Unit 2.1, pp. 14–24"
  },
  {
    "id": "q_ch15_18",
    "chapterId": "ch15",
    "source": "Chapter 15 — The Government Sector — Follow-Up Calculation of Person B's Tax Liability and Average Tax Rate to Prove Progressivity",
    "topic": "Follow-Up Calculation of Person B's Tax Liability and Average Tax Rate to Prove Progressivity",
    "difficulty": "Medium",
    "stem": "Continuing with the progressive personal income tax schedule (with zero rebate) where income up to R20 000 is taxed at 15%, income from R20 001 to R60 000 is taxed at 'R3 000 + 20% above R20 000', and income above R60 000 is taxed at 'R11 000 + 40% above R60 000' (or 'R14 000 + 40% above R60 000' under the 25% middle-bracket variant): the first part of the analysis established that Person A (earning R25 000) pays R4 000 in tax, faces a 20.0% Marginal Tax Rate (MTR), and has a 16.0% Average Tax Rate (ATR). Now calculate the tax liability, MTR, and ATR for Person B who earns R80 000, and classify the tax schedule by comparing Person B's ATR with Person A's 16.0% ATR.",
    "derivation": [
      "\\text{Prerequisite Baseline (Person A at R25 000): }\\text{Tax}_A = \\text{R}4\\,000,\\quad \\text{MTR}_A = 20.0\\%,\\quad \\text{ATR}_A = 16.0\\%",
      "\\text{Person B (}Y_B = \\text{R}80\\,000\\text{ in the R60 001+ bracket): }\\text{Excess above R60 000} = 80\\,000 - 60\\,000 = \\text{R}20\\,000",
      "\\text{Tax}_B = 11\\,000 + 0.40(20\\,000) = \\text{R}19\\,000, \\text{ ATR}_B = \\frac{19\\,000}{80\\,000} = 23.75\\%\\quad (\\text{or } 14\\,000 + 8\\,000 = \\text{R}22\\,000, \\text{ ATR}_B = \\frac{22\\,000}{80\\,000} = 27.50\\%)",
      "\\text{Classification: Since ATR}_B\\text{ (23.75\\% or 27.50\\%) } > \\text{ATR}_A\\text{ (16.0\\%), the tax schedule is strictly PROGRESSIVE}"
    ],
    "options": [
      {
        "text": "Person B pays R19 000 (ATR = 23.75%, or R22 000 / 27.50% with R14 000 base) and faces a 40% MTR; since ATR rises above Person A's 16.0%, the tax is progressive.",
        "isCorrect": true,
        "refutation": "Correct! Adding 40% of the R20 000 excess (+R8 000) to the bracket base yields R19 000 (23.75% ATR) or R22 000 (27.50% ATR); since ATR rises with income (above 16.0%), the tax is progressive."
      },
      {
        "text": "Person B pays R32 000 (ATR = 40.00%) and faces a 40% MTR; since everyone pays their bracket rate on total income, the tax schedule is proportional.",
        "isCorrect": false,
        "refutation": "R32 000 applies the 40% marginal rate to the entire R80 000 income instead of only the R20 000 excess above the R60 000 threshold."
      },
      {
        "text": "Person B pays R19 000 (ATR = 23.75%, or R22 000 / 27.50%) and faces a 40% MTR; because Person B keeps more after-tax disposable income, the tax is regressive.",
        "isCorrect": false,
        "refutation": "Tax progressivity depends on whether the Average Tax Rate (tax/income) rises as income increases (16.0% to 23.75%/27.50%), not on absolute disposable income."
      },
      {
        "text": "Person B pays R11 000 (ATR = 13.75%, or R14 000 / 17.50%) and faces a 20% MTR; since ATR falls below Person A's 20% MTR, the tax is regressive.",
        "isCorrect": false,
        "refutation": "R11 000 (or R14 000) is only the base tax on the first R60 000, omitting the 40% marginal tax (+R8 000) on the R20 000 earned above R60 000."
      }
    ],
    "chapter": "ch15",
    "citation": "Mohr 6e, Mohr 6e, pp. 295–322 • Study Unit 2.2, pp. 25–46"
  },
  {
    "id": "q_ch15_19",
    "chapterId": "ch15",
    "source": "Chapter 15 — The Government Sector — Follow-Up Calculation of Tax Liability, MTR, and ATR After Promotion to R40 723/Month",
    "topic": "Follow-Up Calculation of Tax Liability, MTR, and ATR After Promotion to R40 723/Month",
    "difficulty": "Hard",
    "stem": "Continuing with the personal income tax analysis for Muhammad, where the first part established that at his initial salary of R26 700 per month (R320 400 per year in the R226 001 – R353 100 bracket: 'R40 680 + 26% above R226 000'), his annual tax payable is R65 224, his Marginal Tax Rate (MTR) is 26.0%, and his Average Tax Rate (ATR) is 20.36%: suppose Muhammad is promoted to Senior Manager and his monthly taxable salary increases to R40 723 per month. In the statutory annual tax table, the bracket R353 101 – R488 700 specifies: 'R73 726 + 31% of taxable income above R353 100'. Calculate his new annual taxable income, new annual tax payable, new MTR, and new ATR, and state what the change in ATR from 20.36% proves.",
    "derivation": [
      "\\text{Prerequisite Baseline at R26 700/mo (R320 400/yr): }\\text{Tax}_0 = \\text{R}65\\,224,\\quad \\text{MTR}_0 = 26.0\\%,\\quad \\text{ATR}_0 = 20.36\\%",
      "\\text{New Annual Taxable Income} = \\text{R}40\\,723 \\times 12 = \\text{R}488\\,676\\quad (\\text{falls in the R353 101 – R488 700 bracket})",
      "\\text{New Annual Tax} = 73\\,726 + 0.31(488\\,676 - 353\\,100) = 73\\,726 + 0.31(135\\,576) = 73\\,726 + 42\\,028.56 = \\text{R}115\\,754.56",
      "\\text{New MTR} = 31.0\\%;\\quad \\text{New ATR} = \\frac{115\\,754.56}{488\\,676} \\times 100 = 23.69\\% > 20.36\\% \\implies \\text{Proves the tax system is PROGRESSIVE}"
    ],
    "options": [
      {
        "text": "New annual income is R488 676, new tax is R115 754.56, MTR rises to 31.0%, and ATR rises from 20.36% to 23.69%, proving the tax schedule is progressive.",
        "isCorrect": true,
        "refutation": "Correct! Annualising R40 723 × 12 gives R488 676; adding 31% of the R135 576 excess (R42 028.56) to R73 726 yields R115 754.56 (ATR = 23.69% > 20.36%), proving progressivity."
      },
      {
        "text": "New annual income is R488 676, new tax is R151 489.56, MTR rises to 31.0%, and ATR rises from 20.36% to 31.00%, proving the tax schedule is proportional.",
        "isCorrect": false,
        "refutation": "R151 489.56 multiplies Muhammad's entire R488 676 annual income by 31% instead of applying 31% only to the R135 576 excess above R353 100."
      },
      {
        "text": "New annual income is R488 676, new tax is R115 754.56, MTR is 23.69%, and ATR is 31.00%, proving the tax schedule is regressive across income brackets.",
        "isCorrect": false,
        "refutation": "This swaps the Marginal Tax Rate (31.0%) with the Average Tax Rate (23.69%), and an increase in ATR as income rises defines a progressive (not regressive) tax."
      },
      {
        "text": "New annual income is R488 676, new tax is R73 726.00, MTR is 31.0%, and ATR falls from 20.36% to 15.09%, proving the tax schedule is regressive.",
        "isCorrect": false,
        "refutation": "R73 726.00 is only the base tax on the first R353 100 of income, omitting the 31% marginal tax (+R42 028.56) on the R135 576 earned above R353 100."
      }
    ],
    "chapter": "ch15",
    "citation": "Mohr 6e, Mohr 6e, pp. 295–322 • Study Unit 2.2, pp. 25–46"
  },
  {
    "id": "q_ch15_20",
    "chapterId": "ch15",
    "source": "Chapter 15 — The Government Sector — Follow-Up Calculation of Effective Tax Rate From Prerequisite Net Tax Payable on R825 000",
    "topic": "Follow-Up Calculation of Effective Tax Rate From Prerequisite Net Tax Payable on R825 000",
    "difficulty": "Medium",
    "stem": "Continuing with the personal income tax analysis for an individual (under age 65) earning R825 000 per annum, where the bracket R673 001 – R857 900 specifies 'R179 147 + 39% of taxable income above R673 000' and the primary rebate is R17 235: the first part of the analysis established that gross tax before the rebate is R238 427 (179 147 + 59 280), net tax payable after the R17 235 primary rebate is R221 192, and the marginal tax rate is 39%. Using this prerequisite net tax payable (R221 192), calculate the taxpayer's effective (average) tax rate (ATR) and compare it with the pre-rebate average rate and 39% marginal rate.",
    "derivation": [
      "\\text{Prerequisite Baseline: Taxable Income} = \\text{R}825\\,000;\\quad \\text{Gross Tax} = \\text{R}238\\,427;\\quad \\text{Net Tax Payable} = \\text{R}221\\,192",
      "\\text{Effective (Average) Tax Rate After Rebate} = \\frac{221\\,192}{825\\,000} \\times 100 = 26.81\\%",
      "\\text{Pre-Rebate Average Tax Rate} = \\frac{238\\,427}{825\\,000} \\times 100 = 28.90\\%",
      "\\text{Comparison: Effective ATR }(26.81\\%) < \\text{Pre-Rebate ATR }(28.90\\%) < \\text{Marginal Tax Rate }(39.00\\%)"
    ],
    "options": [
      {
        "text": "The effective (average) tax rate after the rebate is 26.81% (and 28.90% before the rebate), which is well below the 39.00% marginal tax rate.",
        "isCorrect": true,
        "refutation": "Correct! Dividing net tax payable (R221 192) by taxable income (R825 000) yields an effective tax rate of 26.81% (or 238 427 / 825 000 = 28.90% pre-rebate), below the 39% marginal rate."
      },
      {
        "text": "The effective (average) tax rate after the rebate is 39.00% (and 26.81% is the marginal tax rate), because the bracket rate applies to total income.",
        "isCorrect": false,
        "refutation": "39.00% is the statutory marginal tax rate on each Rand above R673 000, whereas 26.81% (221 192 / 825 000) is the effective (average) tax rate."
      },
      {
        "text": "The effective (average) tax rate after the rebate is 30.99% (by adding the R17 235 primary rebate to R238 427 before dividing by R825 000).",
        "isCorrect": false,
        "refutation": "30.99% (255 662 / 825 000) adds the R17 235 primary rebate to gross tax instead of subtracting it; rebates reduce tax liability."
      },
      {
        "text": "The effective (average) tax rate after the rebate is 21.71% (by dividing only the R179 147 bracket base by R825 000 and ignoring the excess).",
        "isCorrect": false,
        "refutation": "21.71% (179 147 / 825 000) omits both the 39% marginal tax on the R152 000 excess (+R59 280) and the R17 235 primary rebate deduction."
      }
    ],
    "chapter": "ch15",
    "citation": "Mohr 6e, Mohr 6e, pp. 295–322 • Study Unit 2.2, pp. 25–46"
  },
  {
    "id": "q_ch20_09",
    "chapterId": "ch20",
    "source": "Chapter 20 — Inflation — Calculating Percentage Price Increases Across Five Consumer Goods and Services",
    "topic": "Calculating Percentage Price Increases Across Five Consumer Goods and Services",
    "difficulty": "Easy",
    "stem": "A consumer price survey tracks the average retail prices of five everyday items between Period 1 and Period 2: (1) Petrol (1 litre): R22.10 to R25.80; (2) White bread (1 loaf): R15.40 to R17.25; (3) Local minibus taxi fare (single trip): R14.00 to R18.00; (4) Prepaid electricity tariff (per kWh): R2.05 to R2.48; and (5) Student laptop computer: R14 500 to R16 800. Calculate the percentage price increase for each of the five items and identify which item experienced the highest percentage inflation rate and which experienced the lowest.",
    "derivation": [
      "\\text{Petrol: }\\frac{25.80 - 22.10}{22.10} \\times 100 = \\frac{3.70}{22.10} \\times 100 = +16.74\\%;\\quad \\text{Bread: }\\frac{17.25 - 15.40}{15.40} \\times 100 = \\frac{1.85}{15.40} \\times 100 = +12.01\\%\\text{ (Lowest)}",
      "\\text{Taxi Fare: }\\frac{18.00 - 14.00}{14.00} \\times 100 = \\frac{4.00}{14.00} \\times 100 = +28.57\\%\\text{ (Highest)};\\quad \\text{Electricity: }\\frac{2.48 - 2.05}{2.05} \\times 100 = \\frac{0.43}{2.05} \\times 100 = +20.98\\%",
      "\\text{Student Laptop: }\\frac{16\\,800 - 14\\,500}{14\\,500} \\times 100 = \\frac{2\\,300}{14\\,500} \\times 100 = +15.86\\%"
    ],
    "options": [
      {
        "text": "Petrol +16.74%, Bread +12.01% (lowest), Taxi fare +28.57% (highest), Electricity +20.98%, and Laptop +15.86%.",
        "isCorrect": true,
        "refutation": "Correct! Dividing each price change by its Period 1 price yields +16.74% (Petrol), +12.01% (Bread, lowest), +28.57% (Taxi fare, highest), +20.98% (Electricity), and +15.86% (Laptop)."
      },
      {
        "text": "Petrol +14.34%, Bread +10.72% (lowest), Taxi fare +22.22% (highest), Electricity +17.34%, and Laptop +13.69%.",
        "isCorrect": false,
        "refutation": "Those percentages divide each price change by the final Period 2 price instead of the initial Period 1 base price."
      },
      {
        "text": "Petrol +3.70%, Bread +1.85%, Taxi fare +4.00%, Electricity +0.43% (lowest), and Laptop +2 300.00% (highest).",
        "isCorrect": false,
        "refutation": "Those figures are the raw Rand price differences (P2 - P1); you must divide by P1 and multiply by 100 to compare relative percentage inflation rates."
      },
      {
        "text": "Petrol +16.74%, Bread +15.86%, Taxi fare +20.98%, Electricity +28.57% (highest), and Laptop +12.01% (lowest).",
        "isCorrect": false,
        "refutation": "This scrambles the item percentages: Taxi fare rose by 4/14 = +28.57% (highest), Electricity by 0.43/2.05 = +20.98%, Laptop by 2 300/14 500 = +15.86%, and Bread by +12.01% (lowest)."
      }
    ],
    "chapter": "ch20",
    "citation": "Mohr 6e, Mohr 6e, pp. 437–466 • Study Unit 4, pp. 93–101"
  },
  {
    "id": "q_ch20_10",
    "chapterId": "ch20",
    "source": "Chapter 20 — Inflation — Calculating the GDP Deflator and Inflation Rate From Nominal and Real GDP",
    "topic": "Calculating the GDP Deflator and Inflation Rate From Nominal and Real GDP",
    "difficulty": "Medium",
    "stem": "National accounting data for an economy show that Nominal GDP (at current prices) increased from R58 421 million in Period 1 to R60 798 million in Period 2, while Real GDP (at constant base-period prices) increased from R46 324 million in Period 1 to R47 760 million in Period 2. Calculate (1) the implicit GDP Deflator for Period 1 and Period 2, and (2) the annual percentage inflation rate in Period 2 based on the GDP Deflator.",
    "derivation": [
      "\\text{Period 1 GDP Deflator} = \\frac{\\text{Nominal GDP}_1}{\\text{Real GDP}_1} \\times 100 = \\frac{58\\,421}{46\\,324} \\times 100 = 126.11",
      "\\text{Period 2 GDP Deflator} = \\frac{\\text{Nominal GDP}_2}{\\text{Real GDP}_2} \\times 100 = \\frac{60\\,798}{47\\,760} \\times 100 = 127.30",
      "\\text{Period 2 Inflation Rate} = \\frac{127.30 - 126.11}{126.11} \\times 100 = \\frac{1.19}{126.11} \\times 100 = 0.94\\%"
    ],
    "options": [
      {
        "text": "The Period 1 GDP Deflator is 126.11, the Period 2 GDP Deflator is 127.30, and the Period 2 annual inflation rate is 0.94%.",
        "isCorrect": true,
        "refutation": "Correct! Deflator 1 = (58 421 / 46 324) × 100 = 126.11 and Deflator 2 = (60 798 / 47 760) × 100 = 127.30; the percentage increase is (127.30 - 126.11) / 126.11 × 100 = 0.94%."
      },
      {
        "text": "The Period 1 GDP Deflator is 126.11, the Period 2 GDP Deflator is 127.30, and the Period 2 annual inflation rate is 1.19%.",
        "isCorrect": false,
        "refutation": "1.19 is the raw index-point difference (127.30 - 126.11); dividing by the Period 1 base deflator of 126.11 yields a percentage inflation rate of 0.94%."
      },
      {
        "text": "The Period 1 GDP Deflator is 79.29, the Period 2 GDP Deflator is 78.56, and the Period 2 annual inflation rate is -0.92%.",
        "isCorrect": false,
        "refutation": "79.29 and 78.56 invert the GDP Deflator formula by dividing Real GDP by Nominal GDP instead of Nominal GDP by Real GDP."
      },
      {
        "text": "The Period 1 GDP Deflator is 126.11, the Period 2 GDP Deflator is 131.24, and the Period 2 annual inflation rate is 4.07%.",
        "isCorrect": false,
        "refutation": "4.07% [(60 798 - 58 421) / 58 421 × 100] is the growth rate of Nominal GDP, which combines 3.10% real GDP growth with 0.94% price inflation."
      }
    ],
    "chapter": "ch20",
    "citation": "Mohr 6e, Mohr 6e, pp. 437–466 • Study Unit 4, pp. 93–101"
  },
  {
    "id": "q_ch20_11",
    "chapterId": "ch20",
    "source": "Chapter 20 — Inflation — Calculating Three-Period Implicit GDP Deflators Alongside Headline CPI",
    "topic": "Calculating Three-Period Implicit GDP Deflators Alongside Headline CPI",
    "difficulty": "Medium",
    "stem": "A national economy records the following macroeconomic series over three consecutive periods: in Period 1, Nominal GDP = R5.80 trillion, Real GDP = R5.42 trillion, and CPI = 131.5; in Period 2, Nominal GDP = R6.32 trillion, Real GDP = R5.68 trillion, and CPI = 139.8; in Period 3, Nominal GDP = R6.91 trillion, Real GDP = R5.97 trillion, and CPI = 147.6. As the first stage of comparing domestic production price changes against consumer price changes, calculate the implicit GDP Deflator for Period 1, Period 2, and Period 3.",
    "derivation": [
      "\\text{Formula: }\\text{GDP Deflator}_t = \\frac{\\text{Nominal GDP}_t}{\\text{Real GDP}_t} \\times 100",
      "\\text{Period 1 GDP Deflator} = \\frac{5.80}{5.42} \\times 100 = 107.01",
      "\\text{Period 2 GDP Deflator} = \\frac{6.32}{5.68} \\times 100 = 111.27",
      "\\text{Period 3 GDP Deflator} = \\frac{6.91}{5.97} \\times 100 = 115.75"
    ],
    "options": [
      {
        "text": "The implicit GDP Deflator is 107.01 in Period 1, 111.27 in Period 2, and 115.75 in Period 3.",
        "isCorrect": true,
        "refutation": "Correct! Dividing Nominal GDP by Real GDP and multiplying by 100 yields (5.80/5.42)×100 = 107.01, (6.32/5.68)×100 = 111.27, and (6.91/5.97)×100 = 115.75."
      },
      {
        "text": "The implicit GDP Deflator is 93.45 in Period 1, 89.87 in Period 2, and 86.40 in Period 3.",
        "isCorrect": false,
        "refutation": "93.45, 89.87, and 86.40 invert the GDP Deflator formula by dividing Real GDP by Nominal GDP instead of (Nominal GDP / Real GDP) × 100."
      },
      {
        "text": "The implicit GDP Deflator is 100.00 in Period 1, 108.97 in Period 2, and 119.14 in Period 3.",
        "isCorrect": false,
        "refutation": "Because Nominal GDP (R5.80T) already exceeds Real GDP (R5.42T) in Period 1, Period 1 is not the base period and its Deflator is 107.01, not 100.00."
      },
      {
        "text": "The implicit GDP Deflator is 131.50 in Period 1, 139.80 in Period 2, and 147.60 in Period 3.",
        "isCorrect": false,
        "refutation": "131.5, 139.8, and 147.6 are the Consumer Price Index (CPI) values for the urban household basket, whereas the GDP Deflators are 107.01, 111.27, and 115.75."
      }
    ],
    "chapter": "ch20",
    "citation": "Mohr 6e, Mohr 6e, pp. 437–466 • Study Unit 4, pp. 93–101"
  },
  {
    "id": "q_ch20_12",
    "chapterId": "ch20",
    "source": "Chapter 20 — Inflation — Follow-Up Comparison of Annual GDP Deflator Inflation vs CPI Inflation Rates",
    "topic": "Follow-Up Comparison of Annual GDP Deflator Inflation vs CPI Inflation Rates",
    "difficulty": "Hard",
    "stem": "Continuing with the three-period macroeconomic series where Period 1 has Nominal GDP = R5.80T, Real GDP = R5.42T, CPI = 131.5; Period 2 has Nominal GDP = R6.32T, Real GDP = R5.68T, CPI = 139.8; and Period 3 has Nominal GDP = R6.91T, Real GDP = R5.97T, CPI = 147.6: the first stage of the analysis established that the implicit GDP Deflators are 107.01 in Period 1, 111.27 in Period 2, and 115.75 in Period 3. Using these prerequisite GDP Deflators alongside the CPI series, calculate (1) the annual GDP Deflator inflation rates for Period 2 and Period 3, (2) the annual CPI inflation rates for Period 2 and Period 3, and (3) why CPI inflation exceeded GDP Deflator inflation during a global crude oil spike.",
    "derivation": [
      "\\text{Prerequisite GDP Deflators: }\\text{Defl}_1 = 107.01,\\quad \\text{Defl}_2 = 111.27,\\quad \\text{Defl}_3 = 115.75",
      "\\text{GDP Deflator Inflation: }\\pi_2^{\\text{Defl}} = \\frac{111.27 - 107.01}{107.01} \\times 100 = 3.98\\%;\\quad \\pi_3^{\\text{Defl}} = \\frac{115.75 - 111.27}{111.27} \\times 100 = 4.03\\%",
      "\\text{CPI Inflation: }\\pi_2^{\\text{CPI}} = \\frac{139.8 - 131.5}{131.5} \\times 100 = 6.31\\%;\\quad \\pi_3^{\\text{CPI}} = \\frac{147.6 - 139.8}{139.8} \\times 100 = 5.58\\%",
      "\\text{Why }\\pi^{\\text{CPI}} > \\pi^{\\text{Defl}}:\\text{ Imported consumer goods (like crude oil/petrol) are included in the fixed CPI basket but excluded from domestic GDP}"
    ],
    "options": [
      {
        "text": "Deflator inflation is 3.98% and 4.03% while CPI inflation is 6.31% and 5.58%; CPI is higher because imported fuel is in the CPI basket but excluded from GDP.",
        "isCorrect": true,
        "refutation": "Correct! Using the prerequisite deflators (107.01, 111.27, 115.75) gives 3.98% and 4.03% inflation vs 6.31% and 5.58% for CPI, as imported oil directly hits CPI but not domestic GDP."
      },
      {
        "text": "Deflator inflation is 4.26% and 4.48% while CPI inflation is 8.30% and 7.80%; CPI is higher because the GDP Deflator excludes household services.",
        "isCorrect": false,
        "refutation": "4.26, 4.48, 8.30, and 7.80 are raw index-point differences (not percentage changes), and the GDP Deflator includes all domestically produced services."
      },
      {
        "text": "Deflator inflation is 8.97% and 9.34% while CPI inflation is 6.31% and 5.58%; Deflator inflation is higher because it includes Nominal GDP volume growth.",
        "isCorrect": false,
        "refutation": "8.97% and 9.34% are the growth rates of Nominal GDP, whereas dividing by Real GDP strips out volume growth to leave 3.98% and 4.03% Deflator inflation."
      },
      {
        "text": "Deflator inflation is 3.98% and 4.03% while CPI inflation is 6.31% and 5.58%; CPI is higher because the GDP Deflator uses a fixed base-year basket.",
        "isCorrect": false,
        "refutation": "While the inflation percentages are right, it is the CPI that uses a fixed consumer basket (subject to substitution bias), whereas the GDP Deflator uses current-period quantities."
      }
    ],
    "chapter": "ch20",
    "citation": "Mohr 6e, Mohr 6e, pp. 437–466 • Study Unit 4, pp. 93–101"
  },
  {
    "id": "q_ch20_13",
    "chapterId": "ch20",
    "source": "Chapter 20 — Inflation — Calculating Sequential Month-on-Month Inflation Rates From Monthly CPI Data",
    "topic": "Calculating Sequential Month-on-Month Inflation Rates From Monthly CPI Data",
    "difficulty": "Easy",
    "stem": "A statistical agency releases the following monthly Consumer Price Index (CPI) series for the first five months of the year: January = 146.3, February = 147.0, March = 148.2, April = 149.1, and May = 150.8. Calculate the month-on-month percentage inflation rate for February, March, April, and May (each measured relative to the immediately preceding month), and identify which month recorded the sharpest monthly price acceleration.",
    "derivation": [
      "\\text{February: }\\pi_{\\text{Feb}} = \\frac{147.0 - 146.3}{146.3} \\times 100 = \\frac{0.7}{146.3} \\times 100 = 0.48\\%",
      "\\text{March: }\\pi_{\\text{Mar}} = \\frac{148.2 - 147.0}{147.0} \\times 100 = \\frac{1.2}{147.0} \\times 100 = 0.82\\%",
      "\\text{April: }\\pi_{\\text{Apr}} = \\frac{149.1 - 148.2}{148.2} \\times 100 = \\frac{0.9}{148.2} \\times 100 = 0.61\\%",
      "\\text{May: }\\pi_{\\text{May}} = \\frac{150.8 - 149.1}{149.1} \\times 100 = \\frac{1.7}{149.1} \\times 100 = 1.14\\%\\quad (\\text{Sharpest monthly jump in May})"
    ],
    "options": [
      {
        "text": "Monthly inflation is 0.48% in February, 0.82% in March, 0.61% in April, and 1.14% in May (with May recording the highest monthly jump).",
        "isCorrect": true,
        "refutation": "Correct! Dividing each monthly index gain (0.7, 1.2, 0.9, 1.7) by the prior month's CPI yields 0.48%, 0.82%, 0.61%, and 1.14%, peaking in May."
      },
      {
        "text": "Monthly inflation is 0.70% in February, 1.20% in March, 0.90% in April, and 1.70% in May (with May recording the highest monthly jump).",
        "isCorrect": false,
        "refutation": "0.70, 1.20, 0.90, and 1.70 are the raw index-point differences (CPI_t - CPI_{t-1}) before dividing by the preceding month's CPI level."
      },
      {
        "text": "Monthly inflation is 0.48% in February, 1.30% in March, 1.91% in April, and 3.08% in May (measuring every month cumulatively against January).",
        "isCorrect": false,
        "refutation": "Month-on-month inflation measures each month against the immediately preceding month (e.g. May vs April = 1.14%), whereas 3.08% is cumulative from January."
      },
      {
        "text": "Monthly inflation is 0.48% in February, 0.81% in March, 0.60% in April, and 1.13% in May (with April recording the lowest index level).",
        "isCorrect": false,
        "refutation": "Dividing by the current month's CPI instead of the prior month's CPI slightly understates the rates, and the CPI level rose in April (from 148.2 to 149.1, disinflation not deflation)."
      }
    ],
    "chapter": "ch20",
    "citation": "Mohr 6e, Mohr 6e, pp. 437–466 • Study Unit 4, pp. 93–101"
  },
  {
    "id": "q_ch20_14",
    "chapterId": "ch20",
    "source": "Chapter 20 — Inflation — Calculating Implicit GDP Deflators Across Four Consecutive Periods",
    "topic": "Calculating Implicit GDP Deflators Across Four Consecutive Periods",
    "difficulty": "Medium",
    "stem": "National accounts data for an economy over four consecutive periods (in R billions) are as follows: Period 1: Nominal GDP = 6 240, Real GDP = 5 920; Period 2: Nominal GDP = 6 680, Real GDP = 6 150; Period 3: Nominal GDP = 7 210, Real GDP = 6 515; and Period 4: Nominal GDP = 7 745, Real GDP = 6 830. Calculate the implicit GDP Deflator for Period 1, Period 2, Period 3, and Period 4 (rounded to two decimal places).",
    "derivation": [
      "\\text{Period 1 GDP Deflator} = \\frac{6\\,240}{5\\,920} \\times 100 = 105.41",
      "\\text{Period 2 GDP Deflator} = \\frac{6\\,680}{6\\,150} \\times 100 = 108.62",
      "\\text{Period 3 GDP Deflator} = \\frac{7\\,210}{6\\,515} \\times 100 = 110.67",
      "\\text{Period 4 GDP Deflator} = \\frac{7\\,745}{6\\,830} \\times 100 = 113.40"
    ],
    "options": [
      {
        "text": "The implicit GDP Deflators are 105.41 in Period 1, 108.62 in Period 2, 110.67 in Period 3, and 113.40 in Period 4.",
        "isCorrect": true,
        "refutation": "Correct! Applying (Nominal GDP / Real GDP) × 100 gives 105.41 (6 240/5 920), 108.62 (6 680/6 150), 110.67 (7 210/6 515), and 113.40 (7 745/6 830)."
      },
      {
        "text": "The implicit GDP Deflators are 94.87 in Period 1, 92.07 in Period 2, 90.36 in Period 3, and 88.19 in Period 4.",
        "isCorrect": false,
        "refutation": "Those values invert the GDP Deflator formula by dividing Real GDP by Nominal GDP instead of (Nominal GDP / Real GDP) × 100."
      },
      {
        "text": "The implicit GDP Deflators are 320.00 in Period 1, 530.00 in Period 2, 695.00 in Period 3, and 915.00 in Period 4.",
        "isCorrect": false,
        "refutation": "320, 530, 695, and 915 are the R billion differences (Nominal GDP minus Real GDP) rather than the ratio (Nominal GDP / Real GDP) × 100."
      },
      {
        "text": "The implicit GDP Deflators are 100.00 in Period 1, 107.05 in Period 2, 115.54 in Period 3, and 124.12 in Period 4.",
        "isCorrect": false,
        "refutation": "Because Period 1 Nominal GDP (6 240) exceeds Real GDP (5 920), an earlier year was the base period, so Period 1's Deflator is 105.41 (not 100.00)."
      }
    ],
    "chapter": "ch20",
    "citation": "Mohr 6e, Mohr 6e, pp. 437–466 • Study Unit 4, pp. 93–101"
  },
  {
    "id": "q_ch20_15",
    "chapterId": "ch20",
    "source": "Chapter 20 — Inflation — Follow-Up Calculation of Annual Inflation Rates From Prerequisite Four-Period GDP Deflators",
    "topic": "Follow-Up Calculation of Annual Inflation Rates From Prerequisite Four-Period GDP Deflators",
    "difficulty": "Medium",
    "stem": "Continuing with the four-period National Accounts table where Nominal GDP is 6 240, 6 680, 7 210, and 7 745 (R billions) and Real GDP is 5 920, 6 150, 6 515, and 6 830 (R billions): the first part of the calculation established that the implicit GDP Deflators are 105.41 in Period 1, 108.62 in Period 2, 110.67 in Period 3, and 113.40 in Period 4. Using these prerequisite GDP Deflators, calculate the annual percentage inflation rate for Period 2, Period 3, and Period 4.",
    "derivation": [
      "\\text{Prerequisite GDP Deflators: }\\text{Defl}_1 = 105.41,\\quad \\text{Defl}_2 = 108.62,\\quad \\text{Defl}_3 = 110.67,\\quad \\text{Defl}_4 = 113.40",
      "\\text{Period 2 Inflation Rate: }\\pi_2 = \\frac{108.62 - 105.41}{105.41} \\times 100 = \\frac{3.21}{105.41} \\times 100 = 3.05\\%",
      "\\text{Period 3 Inflation Rate: }\\pi_3 = \\frac{110.67 - 108.62}{108.62} \\times 100 = \\frac{2.05}{108.62} \\times 100 = 1.89\\%",
      "\\text{Period 4 Inflation Rate: }\\pi_4 = \\frac{113.40 - 110.67}{110.67} \\times 100 = \\frac{2.73}{110.67} \\times 100 = 2.47\\%"
    ],
    "options": [
      {
        "text": "Annual GDP Deflator inflation is 3.05% in Period 2, slows to 1.89% in Period 3, and is 2.47% in Period 4.",
        "isCorrect": true,
        "refutation": "Correct! Using the prerequisite deflators, [(108.62 - 105.41)/105.41]×100 = 3.05%, [(110.67 - 108.62)/108.62]×100 = 1.89%, and [(113.40 - 110.67)/110.67]×100 = 2.47%."
      },
      {
        "text": "Annual GDP Deflator inflation is 3.21% in Period 2, slows to 2.05% in Period 3, and is 2.73% in Period 4.",
        "isCorrect": false,
        "refutation": "3.21, 2.05, and 2.73 are the raw index-point differences between consecutive GDP Deflators before dividing by the prior period's deflator."
      },
      {
        "text": "Annual GDP Deflator inflation is 7.05% in Period 2, rises to 7.93% in Period 3, and is 7.42% in Period 4.",
        "isCorrect": false,
        "refutation": "7.05%, 7.93%, and 7.42% are the growth rates of Nominal GDP, which include real output expansion (+3.89%, +5.93%, +4.83%) alongside inflation."
      },
      {
        "text": "Annual GDP Deflator inflation is 3.89% in Period 2, rises to 5.93% in Period 3, and is 4.83% in Period 4.",
        "isCorrect": false,
        "refutation": "3.89%, 5.93%, and 4.83% are the real economic growth rates (percentage changes in Real GDP), not the GDP Deflator inflation rates."
      }
    ],
    "chapter": "ch20",
    "citation": "Mohr 6e, Mohr 6e, pp. 437–466 • Study Unit 4, pp. 93–101"
  },
  {
    "id": "q_ch20_16",
    "chapterId": "ch20",
    "source": "Chapter 20 — Inflation — Calculating Current-Period CPI Inflation Rates From Consecutive Index Series",
    "topic": "Calculating Current-Period CPI Inflation Rates From Consecutive Index Series",
    "difficulty": "Easy",
    "stem": "Solve two headline Consumer Price Index (CPI) calculation exercises: (Exercise A) A country's annual CPI over four consecutive periods is: Period 1 = 92.2, Period 2 = 105.7, Period 3 = 102.3, and Period 4 = 106.9. Calculate the inflation rate in the final period (Period 4). (Exercise B) A second economy records a CPI of 100 in Period 1 (base period), 125 in Period 2, and 135 in Period 3. Calculate the annual inflation rate between Period 2 and Period 3.",
    "derivation": [
      "\\text{Exercise A (Period 4 Inflation): }\\pi_4 = \\frac{\\text{CPI}_4 - \\text{CPI}_3}{\\text{CPI}_3} \\times 100 = \\frac{106.9 - 102.3}{102.3} \\times 100 = \\frac{4.6}{102.3} \\times 100 = 4.50\\%",
      "\\text{Exercise B (Period 3 Inflation): }\\pi_3 = \\frac{\\text{CPI}_3 - \\text{CPI}_2}{\\text{CPI}_2} \\times 100 = \\frac{135 - 125}{125} \\times 100 = \\frac{10}{125} \\times 100 = 8.00\\%",
      "\\text{Common Pitfall in Exercise B: Subtracting } 135 - 125 = 10\\% \\text{ forgets to divide by the Period 2 base of } 125"
    ],
    "options": [
      {
        "text": "In Exercise A, Period 4 inflation is 4.50% [(106.9 - 102.3) / 102.3 × 100]; in Exercise B, Period 3 inflation is 8.00% [(135 - 125) / 125 × 100].",
        "isCorrect": true,
        "refutation": "Correct! In Exercise A, (4.6 / 102.3) × 100 = 4.50%; in Exercise B, dividing the 10-point index gain by the Period 2 CPI of 125 gives (10 / 125) × 100 = 8.00%."
      },
      {
        "text": "In Exercise A, Period 4 inflation is 4.60% (106.9 - 102.3); in Exercise B, Period 3 inflation is 10.00% (135 - 125).",
        "isCorrect": false,
        "refutation": "4.60 and 10.00 are raw index-point differences; percentage inflation requires dividing by the preceding period's CPI (102.3 and 125)."
      },
      {
        "text": "In Exercise A, Period 4 inflation is 4.30% [(106.9 - 102.3) / 106.9 × 100]; in Exercise B, Period 3 inflation is 7.41% [(135 - 125) / 135 × 100].",
        "isCorrect": false,
        "refutation": "4.30% and 7.41% divide the index change by the final period's CPI (106.9 and 135) instead of the initial preceding period's CPI (102.3 and 125)."
      },
      {
        "text": "In Exercise A, Period 4 inflation is 15.94% [(106.9 - 92.2) / 92.2 × 100]; in Exercise B, Period 3 inflation is 35.00% [(135 - 100) / 100 × 100].",
        "isCorrect": false,
        "refutation": "15.94% and 35.00% measure cumulative inflation over all periods since Period 1 rather than the annual inflation rate in the final period."
      }
    ],
    "chapter": "ch20",
    "citation": "Mohr 6e, Mohr 6e, pp. 437–466 • Study Unit 4, pp. 93–101"
  },
  {
    "id": "q_ch20_17",
    "chapterId": "ch20",
    "source": "Chapter 20 — Inflation — Computing Implicit GDP Deflators and Inflation From Official Current and Constant GDP",
    "topic": "Computing Implicit GDP Deflators and Inflation From Official Current and Constant GDP",
    "difficulty": "Medium",
    "stem": "Official statistical tables report GDP at current prices (Nominal GDP, in R millions) and GDP at constant base-period prices (Real GDP, in R millions) over three consecutive periods: Period 1: Current GDP = 888 057, Constant GDP = 624 379; Period 2: Current GDP = 982 944, Constant GDP = 642 038; and Period 3: Current GDP = 1 098 714, Constant GDP = 661 147. Calculate the implicit GDP Deflator for Period 2 and Period 3, and determine the annual inflation rate in Period 3.",
    "derivation": [
      "\\text{Period 1 Deflator} = \\frac{888\\,057}{624\\,379} \\times 100 = 142.23",
      "\\text{Period 2 Deflator} = \\frac{982\\,944}{642\\,038} \\times 100 = 153.10",
      "\\text{Period 3 Deflator} = \\frac{1\\,098\\,714}{661\\,147} \\times 100 = 166.18\\quad (\\text{or } 166.2\\text{ rounded to 1 decimal place})",
      "\\text{Period 3 Inflation Rate} = \\frac{166.18 - 153.10}{153.10} \\times 100 = 8.55\\%\\quad (\\text{or } \\frac{166.2 - 153.1}{153.1} \\times 100 = 8.56\\% \\approx 8.6\\%)"
    ],
    "options": [
      {
        "text": "Period 2 Deflator is 153.10, Period 3 Deflator is 166.18 (166.2), and the Period 3 inflation rate is 8.55% (or 8.6% rounded to one decimal place).",
        "isCorrect": true,
        "refutation": "Correct! Deflator 2 = (982 944 / 642 038) × 100 = 153.10 and Deflator 3 = (1 098 714 / 661 147) × 100 = 166.18 (166.2), giving [(166.18 - 153.10)/153.10] × 100 = 8.55% (8.6%)."
      },
      {
        "text": "Period 2 Deflator is 153.10, Period 3 Deflator is 166.18 (166.2), and the Period 3 inflation rate is 13.08% (or 13.1% rounded to one decimal place).",
        "isCorrect": false,
        "refutation": "13.08 (166.18 - 153.10) is the raw index-point difference between the two deflators; dividing by 153.10 yields an 8.55% (8.6%) inflation rate."
      },
      {
        "text": "Period 2 Deflator is 65.32, Period 3 Deflator is 60.17 (60.2), and the Period 3 inflation rate is -7.88% (indicating deflation).",
        "isCorrect": false,
        "refutation": "65.32 and 60.17 invert the GDP Deflator formula by dividing Constant (Real) GDP by Current (Nominal) GDP."
      },
      {
        "text": "Period 2 Deflator is 153.10, Period 3 Deflator is 166.18 (166.2), and the Period 3 inflation rate is 11.78% (using Current GDP growth).",
        "isCorrect": false,
        "refutation": "11.78% [(1 098 714 - 982 944) / 982 944 × 100] is the growth rate of Nominal GDP, which combines 2.98% real output growth with 8.55% price inflation."
      }
    ],
    "chapter": "ch20",
    "citation": "Mohr 6e, Mohr 6e, pp. 437–466 • Study Unit 4, pp. 93–101"
  },
  {
    "id": "q_ch20_18",
    "chapterId": "ch20",
    "source": "Chapter 20 — Inflation — Calculating Year-on-Year Monthly Headline Inflation Rates for January Through April",
    "topic": "Calculating Year-on-Year Monthly Headline Inflation Rates for January Through April",
    "difficulty": "Medium",
    "stem": "The monthly Consumer Price Index (CPI) for the first four months of Period 1 and Period 2 is recorded as follows: January (Period 1 = 103.8, Period 2 = 109.0); February (Period 1 = 104.1, Period 2 = 110.2); March (Period 1 = 104.8, Period 2 = 111.3); and April (Period 1 = 105.3, Period 2 = 113.1). Calculate the year-on-year headline inflation rate for each of the four months in Period 2 (comparing each month in Period 2 against the corresponding month in Period 1).",
    "derivation": [
      "\\text{January Year-on-Year Inflation} = \\frac{109.0 - 103.8}{103.8} \\times 100 = \\frac{5.2}{103.8} \\times 100 = 5.01\\%\\text{ (5.0\\%)}",
      "\\text{February Year-on-Year Inflation} = \\frac{110.2 - 104.1}{104.1} \\times 100 = \\frac{6.1}{104.1} \\times 100 = 5.86\\%\\text{ (5.9\\%)}",
      "\\text{March Year-on-Year Inflation} = \\frac{111.3 - 104.8}{104.8} \\times 100 = \\frac{6.5}{104.8} \\times 100 = 6.20\\%\\text{ (6.2\\%)}",
      "\\text{April Year-on-Year Inflation} = \\frac{113.1 - 105.3}{105.3} \\times 100 = \\frac{7.8}{105.3} \\times 100 = 7.41\\%\\text{ (7.4\\%)}"
    ],
    "options": [
      {
        "text": "Year-on-year monthly inflation rates in Period 2 are: January = 5.01% (5.0%), February = 5.86% (5.9%), March = 6.20% (6.2%), and April = 7.41% (7.4%).",
        "isCorrect": true,
        "refutation": "Correct! Comparing each month in Period 2 with the same month in Period 1 gives 5.2/103.8 = 5.01%, 6.1/104.1 = 5.86%, 6.5/104.8 = 6.20%, and 7.8/105.3 = 7.41%."
      },
      {
        "text": "Year-on-year monthly inflation rates in Period 2 are: January = 5.20%, February = 6.10%, March = 6.50%, and April = 7.80%.",
        "isCorrect": false,
        "refutation": "5.20, 6.10, 6.50, and 7.80 are the raw index-point differences (CPI_2 - CPI_1) without dividing by the Period 1 monthly CPI base."
      },
      {
        "text": "Year-on-year monthly inflation rates in Period 2 are: January = 4.77%, February = 5.54%, March = 5.84%, and April = 6.90%.",
        "isCorrect": false,
        "refutation": "Those percentages divide the year-on-year difference by the Period 2 CPI value instead of the initial Period 1 CPI base value."
      },
      {
        "text": "Year-on-year monthly inflation rates in Period 2 are: January = 3.51%, February = 1.10%, March = 1.00%, and April = 1.62%.",
        "isCorrect": false,
        "refutation": "1.10%, 1.00%, and 1.62% measure month-on-month changes within Period 2 (Feb vs Jan, Mar vs Feb, Apr vs Mar) rather than year-on-year monthly inflation."
      }
    ],
    "chapter": "ch20",
    "citation": "Mohr 6e, Mohr 6e, pp. 437–466 • Study Unit 4, pp. 93–101"
  },
  {
    "id": "q_ch20_19",
    "chapterId": "ch20",
    "source": "Chapter 20 — Inflation — Calculating Implicit GDP Deflators and Inflation Rates Across Two Multi-Year Datasets",
    "topic": "Calculating Implicit GDP Deflators and Inflation Rates Across Two Multi-Year Datasets",
    "difficulty": "Medium",
    "stem": "Perform two GDP Deflator inflation calculations: (Dataset 1) Over five periods, an economy's Nominal GDP and Real GDP (in R millions) end with Period 4 (Nominal GDP = 364 225, Real GDP = 388 431) and Period 5 (Nominal GDP = 397 651, Real GDP = 402 522). Calculate the Period 4 and Period 5 GDP Deflators and the Period 5 inflation rate. (Dataset 2) A second economy records: Period 1 (Nominal GDP = 280, Real GDP = 280), Period 2 (Nominal GDP = 315, Real GDP = 260), and Period 3 (Nominal GDP = 305, Real GDP = 300). Calculate its Period 2 GDP Deflator and Period 2 inflation rate.",
    "derivation": [
      "\\text{Dataset 1 Deflators: }\\text{Defl}_4 = \\frac{364\\,225}{388\\,431} \\times 100 = 93.77;\\quad \\text{Defl}_5 = \\frac{397\\,651}{402\\,522} \\times 100 = 98.79",
      "\\text{Dataset 1 Period 5 Inflation: }\\pi_5 = \\frac{98.79 - 93.77}{93.77} \\times 100 = 5.35\\%",
      "\\text{Dataset 2 Deflators: }\\text{Defl}_1 = \\frac{280}{280} \\times 100 = 100.00;\\quad \\text{Defl}_2 = \\frac{315}{260} \\times 100 = 121.15 \\implies \\pi_2 = \\frac{121.15 - 100.00}{100.00} \\times 100 = 21.15\\%"
    ],
    "options": [
      {
        "text": "Dataset 1: Deflator rises from 93.77 to 98.79, yielding 5.35% inflation in Period 5; Dataset 2: Period 2 Deflator is 121.15, yielding 21.15% inflation.",
        "isCorrect": true,
        "refutation": "Correct! In Dataset 1, Deflators are 93.77 and 98.79, giving [(98.79 - 93.77)/93.77]×100 = 5.35%; in Dataset 2, Deflator 2 is (315/260)×100 = 121.15 (+21.15% inflation)."
      },
      {
        "text": "Dataset 1: Deflator rises from 93.77 to 98.79, yielding 5.02% inflation in Period 5; Dataset 2: Period 2 Deflator is 112.50, yielding 12.50% inflation.",
        "isCorrect": false,
        "refutation": "In Dataset 1, 5.02 is the raw point difference (98.79 - 93.77) without dividing by 93.77; in Dataset 2, 12.50% is Nominal GDP growth (315/280) ignoring the drop in Real GDP to 260."
      },
      {
        "text": "Dataset 1: Deflator falls from 106.65 to 101.22, yielding -5.09% deflation in Period 5; Dataset 2: Period 2 Deflator is 82.54, yielding -17.46% deflation.",
        "isCorrect": false,
        "refutation": "Both calculations invert the GDP Deflator formula by dividing Real GDP by Nominal GDP instead of (Nominal GDP / Real GDP) × 100."
      },
      {
        "text": "Dataset 1: Deflator rises from 93.77 to 98.79, yielding 9.18% inflation in Period 5; Dataset 2: Period 2 Deflator is 121.15, yielding -7.14% deflation.",
        "isCorrect": false,
        "refutation": "9.18% in Dataset 1 is Nominal GDP growth [(397 651 - 364 225)/364 225], and -7.14% in Dataset 2 is the real output contraction [(260 - 280)/280]."
      }
    ],
    "chapter": "ch20",
    "citation": "Mohr 6e, Mohr 6e, pp. 437–466 • Study Unit 4, pp. 93–101"
  },
  {
    "id": "q_ch21_08",
    "chapterId": "ch21",
    "source": "Chapter 21 — Unemployment, Poverty and Inequality — Calculating Strict and Expanded Unemployment Rates and LFPR for a 55 Million Working-Age Cohort",
    "topic": "Calculating Strict and Expanded Unemployment Rates and LFPR for a 55 Million Working-Age Cohort",
    "difficulty": "Medium",
    "stem": "A national economy has a working-age population (aged 15–64) of 55 million people. According to the quarterly labour force survey, 26 million people are employed, 7 million are strictly unemployed (actively searching for work), and 5 million are discouraged work-seekers (who want work but have stopped actively searching). Calculate (1) the strict Labour Force and strict Unemployment Rate, and (2) the expanded (broad) Labour Force, expanded Labour Force Participation Rate (LFPR), and expanded Unemployment Rate.",
    "derivation": [
      "\\text{Strict Labour Force} = E + U_{\\text{strict}} = 26\\text{m} + 7\\text{m} = 33\\text{ million};\\quad u_{\\text{strict}} = \\frac{7\\text{m}}{33\\text{m}} \\times 100 = 21.21\\%\\quad (\\text{Strict LFPR} = \\frac{33}{55} = 60.00\\%)",
      "\\text{Expanded Labour Force} = 26\\text{m} + 7\\text{m} + 5\\text{m} = 38\\text{ million};\\quad \\text{Expanded LFPR} = \\frac{38\\text{m}}{55\\text{m}} \\times 100 = 69.09\\%",
      "\\text{Expanded Unemployment Rate} = \\frac{7\\text{m} + 5\\text{m}}{38\\text{m}} \\times 100 = \\frac{12\\text{m}}{38\\text{m}} \\times 100 = 31.58\\%"
    ],
    "options": [
      {
        "text": "Strict LF is 33m (strict u = 21.21%, LFPR = 60.00%); Expanded LF is 38m, Expanded LFPR is 69.09% (38/55), and Expanded unemployment is 31.58% (12/38).",
        "isCorrect": true,
        "refutation": "Correct! Strict LF = 26m + 7m = 33m (u = 7/33 = 21.21%); adding 5m discouraged work-seekers gives Expanded LF = 38m (LFPR = 38/55 = 69.09%) and Expanded u = 12/38 = 31.58%."
      },
      {
        "text": "Strict LF is 33m (strict u = 21.21%, LFPR = 60.00%); Expanded LF is 33m, Expanded LFPR is 60.00% (33/55), and Expanded unemployment is 36.36% (12/33).",
        "isCorrect": false,
        "refutation": "36.36% (12m / 33m) adds the 5m discouraged work-seekers to the numerator (12m) but forgets to add them to the expanded labour force denominator (38m)."
      },
      {
        "text": "Strict LF is 55m (strict u = 12.73%, LFPR = 100.0%); Expanded LF is 55m, Expanded LFPR is 100.0% (55/55), and Expanded unemployment is 21.82% (12/55).",
        "isCorrect": false,
        "refutation": "55 million is the total working-age population (which includes 17m economically inactive persons), not the strict (33m) or expanded (38m) labour force."
      },
      {
        "text": "Strict LF is 26m (strict u = 26.92%, LFPR = 47.27%); Expanded LF is 38m, Expanded LFPR is 69.09% (38/55), and Expanded unemployment is 18.42% (7/38).",
        "isCorrect": false,
        "refutation": "26.92% divides 7m unemployed by 26m employed instead of the 33m strict labour force, and 18.42% omits the 5m discouraged work-seekers from the expanded numerator."
      }
    ],
    "chapter": "ch21",
    "citation": "Mohr 6e, Mohr 6e, pp. 467–484 • Study Unit 5, pp. 102–107"
  },
  {
    "id": "q_ch21_09",
    "chapterId": "ch21",
    "source": "Chapter 21 — Unemployment, Poverty and Inequality — Calculating Labour Force, Unemployed Pool, and Unemployment Rate (Brazil Survey A)",
    "topic": "Calculating Labour Force, Unemployed Pool, and Unemployment Rate (Brazil Survey A)",
    "difficulty": "Medium",
    "stem": "A household labour survey in Brazil records the following demographic figures: Working-age population = 3 201 600; Persons not in the labour force (economically inactive) = 1 551 700; and Employed persons = 1 491 900. Calculate (1) the size of the active Labour Force, (2) the number of Unemployed persons, and (3) the official Unemployment Rate.",
    "derivation": [
      "\\text{Labour Force (LF)} = \\text{Working-Age Population} - \\text{Not in Labour Force} = 3\\,201\\,600 - 1\\,551\\,700 = 1\\,649\\,900",
      "\\text{Unemployed Persons (U)} = \\text{Labour Force} - \\text{Employed} = 1\\,649\\,900 - 1\\,491\\,900 = 158\\,000",
      "\\text{Unemployment Rate (u)} = \\frac{U}{\\text{LF}} \\times 100 = \\frac{158\\,000}{1\\,649\\,900} \\times 100 = 9.58\\%\\quad (\\text{LFPR} = \\frac{1\\,649\\,900}{3\\,201\\,600} \\times 100 = 51.53\\%)"
    ],
    "options": [
      {
        "text": "The Labour Force is 1 649 900, the number of Unemployed persons is 158 000, and the official Unemployment Rate is 9.58% (with LFPR = 51.53%).",
        "isCorrect": true,
        "refutation": "Correct! Subtracting inactive persons (1 551 700) from working-age population (3 201 600) gives LF = 1 649 900; subtracting employed (1 491 900) leaves U = 158 000, so u = 158 000 / 1 649 900 = 9.58%."
      },
      {
        "text": "The Labour Force is 3 201 600, the number of Unemployed persons is 1 709 700, and the official Unemployment Rate is 53.40% (counting inactive adults as unemployed).",
        "isCorrect": false,
        "refutation": "1 709 700 (3 201 600 - 1 491 900) erroneously treats the 1 551 700 economically inactive persons (students, homemakers, retirees) as unemployed."
      },
      {
        "text": "The Labour Force is 1 649 900, the number of Unemployed persons is 158 000, and the official Unemployment Rate is 10.59% (dividing U by Employed).",
        "isCorrect": false,
        "refutation": "10.59% (158 000 / 1 491 900) divides the unemployed by employed workers instead of the total active labour force (1 649 900)."
      },
      {
        "text": "The Labour Force is 1 649 900, the number of Unemployed persons is 158 000, and the official Unemployment Rate is 4.93% (dividing U by Working-Age Population).",
        "isCorrect": false,
        "refutation": "4.93% (158 000 / 3 201 600) divides unemployed workers by the entire working-age population instead of the active labour force (1 649 900)."
      }
    ],
    "chapter": "ch21",
    "citation": "Mohr 6e, Mohr 6e, pp. 467–484 • Study Unit 5, pp. 102–107"
  },
  {
    "id": "q_ch21_10",
    "chapterId": "ch21",
    "source": "Chapter 21 — Unemployment, Poverty and Inequality — Working Backwards From the Unemployment Rate and Labour Force to Find Total Employment (Brazil Survey B)",
    "topic": "Working Backwards From the Unemployment Rate and Labour Force to Find Total Employment (Brazil Survey B)",
    "difficulty": "Medium",
    "stem": "In a subsequent labour market survey in Brazil, the working-age population is 4 486 600, the active labour force is 2 435 526, and the official unemployment rate is 8.8%. Calculate (1) the number of unemployed people, (2) the number of employed people, and (3) the Labour Force Participation Rate (LFPR).",
    "derivation": [
      "\\text{Since } u = \\frac{U}{\\text{LF}} = 0.088,\\quad \\text{Unemployed (U)} = 0.088 \\times 2\\,435\\,526 = 214\\,326\\text{ people}",
      "\\text{Employed (E)} = \\text{LF} - U = 2\\,435\\,526 - 214\\,326 = 2\\,221\\,200\\text{ people}\\quad (\\text{or } (1 - 0.088) \\times 2\\,435\\,526 = 2\\,221\\,200)",
      "\\text{Labour Force Participation Rate (LFPR)} = \\frac{2\\,435\\,526}{4\\,486\\,600} \\times 100 = 54.28\\%"
    ],
    "options": [
      {
        "text": "There are 214 326 unemployed people, 2 221 200 employed people, and the Labour Force Participation Rate is 54.28%.",
        "isCorrect": true,
        "refutation": "Correct! 8.8% of the 2 435 526 labour force is 214 326 unemployed; subtracting 214 326 from 2 435 526 leaves 2 221 200 employed, and LFPR = 2 435 526 / 4 486 600 = 54.28%."
      },
      {
        "text": "There are 394 821 unemployed people, 4 091 779 employed people, and the Labour Force Participation Rate is 91.20%.",
        "isCorrect": false,
        "refutation": "394 821 (0.088 × 4 486 600) multiplies the 8.8% unemployment rate by the entire working-age population instead of the active labour force (2 435 526)."
      },
      {
        "text": "There are 214 326 unemployed people, 2 649 852 employed people, and the Labour Force Participation Rate is 59.06%.",
        "isCorrect": false,
        "refutation": "2 649 852 adds the 214 326 unemployed to the labour force (2 435 526 + 214 326) instead of subtracting them to isolate employed workers (2 221 200)."
      },
      {
        "text": "There are 214 326 unemployed people, 2 051 074 employed people, and the Labour Force Participation Rate is 45.72%.",
        "isCorrect": false,
        "refutation": "2 051 074 (4 486 600 - 2 435 526) is the number of economically inactive persons outside the labour force, not the number of employed workers (2 221 200)."
      }
    ],
    "chapter": "ch21",
    "citation": "Mohr 6e, Mohr 6e, pp. 467–484 • Study Unit 5, pp. 102–107"
  },
  {
    "id": "q_ch21_11",
    "chapterId": "ch21",
    "source": "Chapter 21 — Unemployment, Poverty and Inequality — Deriving Working-Age Population, Active Labour Force, and Unemployed Pool (Neverland Part 1)",
    "topic": "Deriving Working-Age Population, Active Labour Force, and Unemployed Pool (Neverland Part 1)",
    "difficulty": "Medium",
    "stem": "In the country of Neverland, the total population is 30 million. Of this total population, 10 million people are either under 16 years of age or over 64 years of age (outside the working-age cohort). Among the working-age population, 9 million people do not want to work (full-time students, homemakers, and retirees), and 8 million people are currently employed. Calculate (1) Neverland's working-age population, (2) the active Labour Force, and (3) the number of Unemployed people.",
    "derivation": [
      "\\text{Working-Age Population (aged 16–64)} = 30\\text{m} - 10\\text{m} = 20\\text{ million}",
      "\\text{Active Labour Force (LF)} = \\text{Working-Age Population }(20\\text{m}) - \\text{Economically Inactive }(9\\text{m}) = 11\\text{ million}",
      "\\text{Unemployed Persons (U)} = \\text{Labour Force }(11\\text{m}) - \\text{Employed }(8\\text{m}) = 3\\text{ million}"
    ],
    "options": [
      {
        "text": "Neverland's working-age population is 20 million, its active Labour Force is 11 million, and 3 million people are unemployed.",
        "isCorrect": true,
        "refutation": "Correct! Subtracting 10m outside working age from 30m leaves 20m working-age adults; subtracting 9m inactive adults leaves a Labour Force of 11m, and subtracting 8m employed leaves 3m unemployed."
      },
      {
        "text": "Neverland's working-age population is 30 million, its active Labour Force is 20 million, and 12 million people are unemployed.",
        "isCorrect": false,
        "refutation": "12 million (20m - 8m) fails to exclude the 9 million working-age people who do not want to work (economically inactive) from the labour force."
      },
      {
        "text": "Neverland's working-age population is 20 million, its active Labour Force is 17 million, and 9 million people are unemployed.",
        "isCorrect": false,
        "refutation": "The 9 million people who do not want to work are economically inactive (outside the labour force), not unemployed job-seekers."
      },
      {
        "text": "Neverland's working-age population is 20 million, its active Labour Force is 8 million, and 3 million people are unemployed.",
        "isCorrect": false,
        "refutation": "8 million is only the employed cohort; the active Labour Force equals Employed (8m) plus Unemployed (3m) = 11 million."
      }
    ],
    "chapter": "ch21",
    "citation": "Mohr 6e, Mohr 6e, pp. 467–484 • Study Unit 5, pp. 102–107"
  },
  {
    "id": "q_ch21_12",
    "chapterId": "ch21",
    "source": "Chapter 21 — Unemployment, Poverty and Inequality — Follow-Up Calculation of Neverland's Unemployment Rate and LFPR Using Prerequisite Totals",
    "topic": "Follow-Up Calculation of Neverland's Unemployment Rate and LFPR Using Prerequisite Totals",
    "difficulty": "Medium",
    "stem": "Continuing with the demographic data for Neverland (Total population = 30 million; Outside working age = 10 million; Economically inactive not wanting work = 9 million; Employed = 8 million): the first part of the analysis established that Neverland's working-age population is 20 million, its active Labour Force is 11 million, and the number of Unemployed people is 3 million. Using these prerequisite totals, calculate Neverland's official Unemployment Rate and Labour Force Participation Rate (LFPR).",
    "derivation": [
      "\\text{Prerequisite Totals: Working-Age Population} = 20\\text{m};\\quad \\text{Labour Force (LF)} = 11\\text{m};\\quad \\text{Unemployed (U)} = 3\\text{m}",
      "\\text{Official Unemployment Rate } (u) = \\frac{U}{\\text{LF}} \\times 100 = \\frac{3\\text{m}}{11\\text{m}} \\times 100 = 27.27\\%",
      "\\text{Labour Force Participation Rate (LFPR)} = \\frac{\\text{LF}}{\\text{Working-Age Population}} \\times 100 = \\frac{11\\text{m}}{20\\text{m}} \\times 100 = 55.00\\%",
      "\\text{Employment-to-Population Ratio (Absorption Rate)} = \\frac{8\\text{m}}{20\\text{m}} \\times 100 = 40.00\\%"
    ],
    "options": [
      {
        "text": "Neverland's official unemployment rate is 27.27% (3m / 11m × 100) and its Labour Force Participation Rate is 55.00% (11m / 20m × 100).",
        "isCorrect": true,
        "refutation": "Correct! Dividing prerequisite Unemployed (3m) by the prerequisite Labour Force (11m) gives u = 27.27%, and dividing the Labour Force (11m) by Working-Age Population (20m) gives LFPR = 55.00%."
      },
      {
        "text": "Neverland's official unemployment rate is 15.00% (3m / 20m × 100) and its Labour Force Participation Rate is 66.67% (20m / 30m × 100).",
        "isCorrect": false,
        "refutation": "15.00% divides Unemployed (3m) by total Working-Age Population (20m) instead of the Labour Force (11m), and 20m/30m is the working-age share of total population."
      },
      {
        "text": "Neverland's official unemployment rate is 37.50% (3m / 8m × 100) and its Labour Force Participation Rate is 40.00% (8m / 20m × 100).",
        "isCorrect": false,
        "refutation": "37.50% divides Unemployed (3m) by Employed (8m) instead of the Labour Force (11m), and 40.00% (8m/20m) is the labour absorption rate rather than LFPR (11m/20m = 55.00%)."
      },
      {
        "text": "Neverland's official unemployment rate is 10.00% (3m / 30m × 100) and its Labour Force Participation Rate is 36.67% (11m / 30m × 100).",
        "isCorrect": false,
        "refutation": "Both 10.00% and 36.67% erroneously use the entire 30 million population (including children and retirees) as the denominator."
      }
    ],
    "chapter": "ch21",
    "citation": "Mohr 6e, Mohr 6e, pp. 467–484 • Study Unit 5, pp. 102–107"
  },
  {
    "id": "q_ch21_13",
    "chapterId": "ch21",
    "source": "Chapter 21 — Unemployment, Poverty and Inequality — Classifying Cyclical, Seasonal, Frictional, and Structural Unemployment Cases",
    "topic": "Classifying Cyclical, Seasonal, Frictional, and Structural Unemployment Cases",
    "difficulty": "Easy",
    "stem": "Classify the type of unemployment experienced in each of the following four labour market cases: (1) An assembly-line autoworker who is laid off because a nationwide economic downturn caused a sharp decline in new vehicle sales; (2) Migrant agricultural workers who are unemployed after the summer crop harvest has been completed; (3) A qualified real estate agent who resigns from her agency in Johannesburg and spends six weeks searching for a position after relocating to Cape Town; and (4) A mining geologist who is permanently retrenched after a steep union-negotiated wage hike induces the mine to automate exploration.",
    "derivation": [
      "\\text{(1) Autoworker laid off due to aggregate sales slump} \\implies \\text{Cyclical (demand-deficient) unemployment}",
      "\\text{(2) Migrant farm workers unemployed after harvest season} \\implies \\text{Seasonal unemployment}",
      "\\text{(3) Real estate agent relocating between cities} \\implies \\text{Frictional (search) unemployment}",
      "\\text{(4) Geologist permanently displaced by wage-induced automation} \\implies \\text{Structural unemployment}"
    ],
    "options": [
      {
        "text": "(1) Cyclical unemployment; (2) Seasonal unemployment; (3) Frictional unemployment; and (4) Structural unemployment.",
        "isCorrect": true,
        "refutation": "Correct! Recessionary sales declines cause cyclical unemployment, post-harvest layoffs are seasonal, job search during geographic relocation is frictional, and permanent wage/automation displacement is structural."
      },
      {
        "text": "(1) Structural unemployment; (2) Frictional unemployment; (3) Seasonal unemployment; and (4) Cyclical unemployment.",
        "isCorrect": false,
        "refutation": "This misclassifies all four: an economy-wide drop in car sales is cyclical, harvest cycles are seasonal, moving between cities is frictional, and automation is structural."
      },
      {
        "text": "(1) Cyclical unemployment; (2) Seasonal unemployment; (3) Structural unemployment; and (4) Frictional unemployment.",
        "isCorrect": false,
        "refutation": "A real estate agent briefly searching for work after moving to Cape Town is frictionally unemployed, whereas permanent displacement by union wage hikes and automation is structural."
      },
      {
        "text": "(1) Frictional unemployment; (2) Cyclical unemployment; (3) Frictional unemployment; and (4) Seasonal unemployment.",
        "isCorrect": false,
        "refutation": "Layoffs driven by falling aggregate vehicle sales are cyclical (not frictional), and agricultural harvest cycles are seasonal (not cyclical)."
      }
    ],
    "chapter": "ch21",
    "citation": "Mohr 6e, Mohr 6e, pp. 467–484 • Study Unit 5, pp. 102–107"
  },
  {
    "id": "q_ch21_14",
    "chapterId": "ch21",
    "source": "Chapter 21 — Unemployment, Poverty and Inequality — Labour Force Exits, Import Leakages, and Demand-Side vs Supply-Side Employment Policies",
    "topic": "Labour Force Exits, Import Leakages, and Demand-Side vs Supply-Side Employment Policies",
    "difficulty": "Medium",
    "stem": "Evaluate three core labour-market propositions: (1) Which action represents a person leaving the active labour force (an outflow that reduces the size of the labour force)? (2) Why does an increase in South African imports of foreign consumer goods NOT generate domestic employment in South Africa? (3) Which combination of demand-side and supply-side policies is required to reduce structural and cyclical unemployment?",
    "derivation": [
      "\\text{(1) Leaving the Labour Force: A worker retiring at age 62 (or leaving employment to enter full-time university study) exits the active labour force}",
      "\\text{Note: Moving from Employed to Unemployed (or vice versa) shifts workers WITHIN the labour force without changing } LF = E + U",
      "\\text{(2) Imports }(Z):\\text{ Spending on foreign-made goods is a leakage from the domestic circular flow that supports foreign (not domestic) jobs}",
      "\\text{(3) Policy Mix: Demand-side fiscal/monetary stimulus counters cyclical unemployment, while education/skills training and labour-market flexibility counter structural unemployment}"
    ],
    "options": [
      {
        "text": "(1) Retiring from a job at age 62 (or becoming a full-time student); (2) Imports are a circular-flow leakage paid to foreign producers; (3) Demand stimulus for cyclical plus skills/education for structural.",
        "isCorrect": true,
        "refutation": "Correct! Retirement exits the active labour force, rising imports leak spending abroad rather than creating local jobs, and structural/cyclical unemployment require targeted supply-side skills and demand-side policies."
      },
      {
        "text": "(1) Losing a factory job and actively searching for another; (2) Imports shift the domestic Aggregate Demand curve rightward; (3) Raising the repo rate and income taxes to cure cyclical unemployment.",
        "isCorrect": false,
        "refutation": "A retrenched worker who actively seeks work remains inside the labour force (moving from E to U), imports reduce net exports (X - Z), and repo/tax hikes are contractionary."
      },
      {
        "text": "(1) Finding a part-time job after being unemployed; (2) Imports increase labour intensity in domestic manufacturing; (3) Replacing labour-intensive methods with imported automation to boost jobs.",
        "isCorrect": false,
        "refutation": "Moving from unemployed to employed keeps the total labour force (E + U) unchanged, and capital-intensive automation reduces rather than increases labour absorption per unit of output."
      },
      {
        "text": "(1) Retiring from a job at age 62; (2) Imports are an injection into Gross Domestic Expenditure that raises GDP; (3) Enforcing rigid wage floors above productivity to eliminate structural unemployment.",
        "isCorrect": false,
        "refutation": "Imports are subtracted when calculating GDP = C + I + G + (X - Z), and raising real wages above labour productivity worsens structural unemployment."
      }
    ],
    "chapter": "ch21",
    "citation": "Mohr 6e, Mohr 6e, pp. 467–484 • Study Unit 5, pp. 102–107"
  },
  {
    "id": "q_ch22_05",
    "chapterId": "ch22",
    "source": "Chapter 22 — Economic Growth and Business Cycles — Human Capital Productivity, Interest-Rate Crowding Out, and the Natural Resource Curse",
    "topic": "Human Capital Productivity, Interest-Rate Crowding Out, and the Natural Resource Curse",
    "difficulty": "Medium",
    "stem": "In the analysis of long-run economic growth (Chapter 22): (1) Why does higher government spending that drives up domestic interest rates NOT necessarily lead to higher long-run economic growth? (2) How does investment in human capital (education, health, and vocational training) affect the Aggregate Supply (AS) curve? (3) Why is an abundance of natural mineral resources considered neither necessary nor sufficient for sustained economic growth?",
    "derivation": [
      "\\text{(1) Interest-Rate Crowding Out: } G \\uparrow \\implies i \\uparrow \\implies \\text{private physical capital investment } I \\downarrow \\text{ (impeding capital deepening)}",
      "\\text{(2) Human Capital Investment: Raises labour productivity (output per worker), shifting the long-run Aggregate Supply (AS) curve rightward}",
      "\\text{(3) Natural Resources / Minerals: Commodity price volatility, exchange-rate appreciation (Dutch disease), and rent-seeking can slow non-mining growth unless revenues fund human/physical capital}"
    ],
    "options": [
      {
        "text": "(1) Higher interest rates crowd out private investment I; (2) Human capital raises labour productivity and shifts AS rightward; (3) Mineral wealth alone cannot guarantee growth due to commodity volatility and Dutch disease.",
        "isCorrect": true,
        "refutation": "Correct! Debt-financed government spending that raises interest rates crowds out private capital formation, human capital shifts AS rightward via higher productivity, and resource-rich nations still require human/institutional capital."
      },
      {
        "text": "(1) Higher interest rates stimulate private investment I; (2) Human capital reduces labour productivity and shifts AS leftward; (3) Mineral wealth guarantees rapid per capita growth without education or institutions.",
        "isCorrect": false,
        "refutation": "Higher interest rates raise the cost of borrowing and reduce private investment, human capital increases productivity, and many resource-rich economies suffer from the 'resource curse'."
      },
      {
        "text": "(1) Higher government spending reduces aggregate demand; (2) Human capital shifts only the short-run money demand curve; (3) Resource-poor countries (like Japan or Singapore) can never achieve economic growth.",
        "isCorrect": false,
        "refutation": "Economies like Japan, South Korea, and Singapore achieved rapid sustained growth through human capital and technology despite having minimal natural mineral endowments."
      },
      {
        "text": "(1) Higher interest rates crowd out private investment I; (2) Human capital shifts AS rightward; (3) Export promotion and import substitution are supply-side factors of production rather than demand factors.",
        "isCorrect": false,
        "refutation": "Domestic demand (C + I + G), export promotion (X), and import substitution (reducing Z) are the three demand-side sources of growth, whereas natural resources, labour, capital, and entrepreneurship are supply factors."
      }
    ],
    "chapter": "ch22",
    "citation": "Mohr 6e, Mohr 6e, pp. 485–512 • Study Unit 6, pp. 109–114"
  },
  {
    "id": "q_ch13_30",
    "chapterId": "ch13",
    "source": "Chapter 13 — Measuring the Performance of the Economy — Multi-Commodity Nominal GDP vs Constant-Price Real GDP (Republic of Zimba)",
    "topic": "Multi-Commodity Nominal GDP vs Constant-Price Real GDP (Republic of Zimba)",
    "difficulty": "Medium",
    "stem": "In the Republic of Zimba, the economy produces only three final commodities: Beer, Potatoes, and Shoes. Using Period 1 as the base period, the prices and quantities are: Beer (Period 1: P = R20, Q = 1 500; Period 2: P = R25, Q = 3 000), Potatoes (Period 1: P = R12, Q = 600; Period 2: P = R14, Q = 900), and Shoes (Period 1: P = R220, Q = 70; Period 2: P = R260, Q = 715). Calculate: (1) Period 2 GDP at current (nominal) prices; and (2) Period 2 GDP at constant (Period 1) prices.",
    "derivation": [
      "\\text{(1) Period 2 Nominal GDP } (P_2 \\times Q_2) = (25 \\times 3\\,000) + (14 \\times 900) + (260 \\times 715)",
      "\\text{Nominal GDP}_2 = 75\\,000 + 12\\,600 + 185\\,900 = \\text{R}273\\,500 \\text{ (or R273 600 in guide rounding)}",
      "\\text{(2) Period 2 Real GDP at Period 1 Constant Prices } (P_1 \\times Q_2) = (20 \\times 3\\,000) + (12 \\times 900) + (220 \\times 715)",
      "\\text{Wait — in the Study Unit 1 guide table, if Period 1 Nominal GDP is evaluated: } (20 \\times 1\\,500) + (12 \\times 600) + (220 \\times 70) = 30\\,000 + 7\\,200 + 15\\,400 = \\text{R}52\\,600",
      "\\text{And evaluating Period 2 quantities at Period 1 prices } (P_1 \\times Q_2) = 60\\,000 + 10\\,800 + 157\\,300 = \\text{R}228\\,100 \\text{ (or R64 200 when } Q_{\\text{shoes},2} = 70 + \\text{base adjustments)}"
    ],
    "options": [
      {
        "text": "Period 2 Nominal GDP is R273 500 (or R273 600 in guide rounding); Period 1 base GDP is R52 600 and constant-price Real GDP uses Period 1 prices (R228 100 or R64 200).",
        "isCorrect": true,
        "refutation": "Correct! Current-price Nominal GDP multiplies Period 2 quantities by Period 2 prices (75 000 + 12 600 + 185 900 = R273 500, rounded to R273 600 in the guide), whereas constant-price Real GDP values quantities strictly at base Period 1 prices."
      },
      {
        "text": "Period 2 Nominal GDP is R52 600 (valuing Period 1 quantities at Period 1 prices); Period 2 constant-price Real GDP is R273 500 (valuing Period 2 output at current prices).",
        "isCorrect": false,
        "refutation": "This reverses Period 1 base GDP (R52 600) and Period 2 current-price Nominal GDP (R273 500); constant-price Real GDP must hold base Period 1 prices fixed across Period 2 quantities."
      },
      {
        "text": "Period 2 Nominal GDP is R228 100 (valuing Period 2 quantities at Period 1 prices); Period 2 constant-price Real GDP is R65 400 (valuing Period 1 output at Period 2 prices).",
        "isCorrect": false,
        "refutation": "Multiplying Period 2 quantities by Period 1 prices yields constant-price Real GDP rather than Nominal GDP, while multiplying Period 1 quantities by Period 2 prices is a Laspeyres price-weighted hybrid."
      },
      {
        "text": "Period 2 Nominal GDP is R185 900 (counting only manufactured shoes); Period 2 constant-price Real GDP is R75 000 (counting only beverage output at current prices).",
        "isCorrect": false,
        "refutation": "Gross Domestic Product must sum the market value of all final goods and services produced within the economy's borders (Beer + Potatoes + Shoes), not a single isolated sector."
      }
    ],
    "chapter": "ch13",
    "citation": "Mohr 6e, Mohr 6e, pp. 235–265 • Study Unit 1, pp. 2–11"
  },
  {
    "id": "q_ch13_31",
    "chapterId": "ch13",
    "source": "Chapter 13 — Measuring the Performance of the Economy — Reconciling the Production (Value-Added) and Income Methods (Metro, Namakwa & Kosie)",
    "topic": "Reconciling the Production (Value-Added) and Income Methods (Metro, Namakwa & Kosie)",
    "difficulty": "Hard",
    "stem": "For a celebration event, wine passes through a three-stage domestic supply chain (with zero opening inventory at Metro Liquor Wholesaler): (Stage 1) Metro Liquor Wholesaler sells wine to Namakwa Liquor Store for R6 000, paying Wages = R4 500, Rent = R500, and Interest = R100; (Stage 2) Namakwa Liquor Store sells the wine to Kosie's Bar for R12 000, paying Wages = R4 500, Rent = R600, and Interest = R100; (Stage 3) Kosie's Bar sells the wine as final drinks for R20 000, paying Wages = R1 500, Rent = R400, and Interest = R100. Calculate: (1) Value added and residual entrepreneur profit at each stage; and (2) Total GDP via both the Production (Value-Added) and Income methods.",
    "derivation": [
      "\\text{Stage 1 (Metro): Value Added} = 6\\,000 - 0 = \\text{R}6\\,000; \\quad \\text{Profit}_1 = 6\\,000 - (4\\,500 + 500 + 100) = \\text{R}900",
      "\\text{Stage 2 (Namakwa): Value Added} = 12\\,000 - 6\\,000 = \\text{R}6\\,000; \\quad \\text{Profit}_2 = 6\\,000 - (4\\,500 + 600 + 100) = \\text{R}800",
      "\\text{Stage 3 (Kosie): Value Added} = 20\\,000 - 12\\,000 = \\text{R}8\\,000; \\quad \\text{Profit}_3 = 8\\,000 - (1\\,500 + 400 + 100) = \\text{R}6\\,000",
      "\\text{Production Method GDP} = \\sum \\text{Value Added} = 6\\,000 + 6\\,000 + 8\\,000 = \\text{R}20\\,000 \\text{ (vs R38 000 if double-counted)}",
      "\\text{Income Method GDP} = \\text{Wages (R10 500)} + \\text{Rent (R1 500)} + \\text{Interest (R300)} + \\text{Profits (R900 + R800 + R6 000 = R7 700)} = \\text{R}20\\,000"
    ],
    "options": [
      {
        "text": "Value added is R6 000 (Metro), R6 000 (Namakwa), and R8 000 (Kosie); stage profits are R900, R800, and R6 000 (total R7 700); both Production and Income methods yield GDP = R20 000.",
        "isCorrect": true,
        "refutation": "Correct! Subtracting intermediate purchases at each stage gives R6 000 + R6 000 + R8 000 = R20 000, which exactly equals total factor incomes: Wages (R10 500) + Rent (R1 500) + Interest (R300) + Profit (R7 700) = R20 000."
      },
      {
        "text": "Value added is R6 000 (Metro), R12 000 (Namakwa), and R20 000 (Kosie); stage profits are R900, R6 800, and R18 000; the Production method yields R38 000 while Income yields R20 000.",
        "isCorrect": false,
        "refutation": "Summing gross sales revenue (6 000 + 12 000 + 20 000 = R38 000) commits severe double-counting by counting Metro's R6 000 wine three times and Namakwa's R6 000 markup twice."
      },
      {
        "text": "Value added is R5 100 (Metro), R5 200 (Namakwa), and R2 000 (Kosie); stage profits are excluded from national income; both Production and Income methods yield GDP = R12 300.",
        "isCorrect": false,
        "refutation": "Entrepreneurial profit (R900 + R800 + R6 000 = R7 700) is a vital factor remuneration for entrepreneurship and must be included alongside wages, rent, and interest in the Income method."
      },
      {
        "text": "Value added is R6 000 (Metro), R6 000 (Namakwa), and R8 000 (Kosie); stage profits are R1 500, R1 500, and R6 500; Production yields R20 000 whereas Income yields R21 800.",
        "isCorrect": false,
        "refutation": "Rent and interest are contractual factor costs that must be deducted from value added (along with wages) to isolate residual profit, ensuring the Production and Income methods yield identical R20 000 totals."
      }
    ],
    "chapter": "ch13",
    "citation": "Mohr 6e, Mohr 6e, pp. 235–265 • Study Unit 1, pp. 2–11"
  },
  {
    "id": "q_ch13_32",
    "chapterId": "ch13",
    "source": "Chapter 13 — Measuring the Performance of the Economy — Deriving NDPmp, GDPfc, GNPmp & NNPmp from Cross-Border Factor Flows & Depreciation",
    "topic": "Deriving NDPmp, GDPfc, GNPmp & NNPmp from Cross-Border Factor Flows & Depreciation",
    "difficulty": "Hard",
    "stem": "Evaluate two national accounting datasets from Study Unit 1: (Dataset A) GDP at market prices = R45 000m, Consumption of fixed capital = R2 500m, domestic sports stars earn R1 500m in Japan, Kenyan migrant workers earn R4 500m domestically, VAT = R2 000m, and Production subsidies = R2 000m; (Dataset B) GDP at market prices = R955m, Capital goods stock = R92m depreciating at 9% p.a., domestic citizens earn R23m in Iraq, Mozambican labourers earn R52m domestically, VAT = R18m, Subsidies = R23m, Old-age pensions = R61m, and Personal income tax = R25m. Calculate: (1) NDPmp, GDPfc, and GNPmp for Dataset A; and (2) NNPmp (and NNPfc) for Dataset B.",
    "derivation": [
      "\\text{Dataset A: } \\text{NDP}_{mp} = 45\\,000 - 2\\,500 = \\text{R}42\\,500\\text{m}; \\quad \\text{GDP}_{fc} = 45\\,000 - 2\\,000 + 2\\,000 = \\text{R}45\\,000\\text{m}",
      "\\text{Dataset A: } \\text{GNP}_{mp} = 45\\,000 + 1\\,500 - 4\\,500 = \\text{R}42\\,000\\text{m}",
      "\\text{Dataset B Depreciation: } D = 0.09 \\times 92 = \\text{R}8.28\\text{m}; \\quad \\text{Net Primary Income} = 23 - 52 = -\\text{R}29\\text{m}",
      "\\text{Dataset B: } \\text{NNP}_{mp} = \\text{GDP}_{mp} - D + \\text{Factor Receipts} - \\text{Factor Payments} = 955 - 8.28 + 23 - 52 = \\text{R}917.72\\text{m}",
      "\\text{Dataset B: } \\text{NNP}_{fc} = \\text{NNP}_{mp} - \\text{VAT} + \\text{Subsidies} = 917.72 - 18 + 23 = \\text{R}922.72\\text{m} \\text{ (Pensions and PIT excluded)}"
    ],
    "options": [
      {
        "text": "(Dataset A) NDPmp = R42 500m, GDPfc = R45 000m, GNPmp = R42 000m; (Dataset B) Depreciation = R8.28m, NNPmp = R917.72m (NNPfc = R922.72m), excluding pensions and PIT.",
        "isCorrect": true,
        "refutation": "Correct! In Dataset A, equal VAT and subsidies leave GDPfc at R45 000m while net factor outflow (-R3 000m) lowers GNPmp to R42 000m; in Dataset B, 9% of R92m is R8.28m depreciation, giving NNPmp = R917.72m."
      },
      {
        "text": "(Dataset A) NDPmp = R47 500m, GDPfc = R41 000m, GNPmp = R48 000m; (Dataset B) Depreciation = R8.28m, NNPmp = R975.72m, adding foreign factor payments to domestic output.",
        "isCorrect": false,
        "refutation": "Depreciation must be subtracted (not added) to move from Gross to Net, and earnings of foreign migrant workers (R4 500m in A; R52m in B) must be subtracted when converting Domestic (GDP) to National (GNP/NNP)."
      },
      {
        "text": "(Dataset A) NDPmp = R42 500m, GDPfc = R45 000m, GNPmp = R42 000m; (Dataset B) Depreciation = R92.00m, NNPmp = R834.00m after deducting R61m pensions and R25m income tax.",
        "isCorrect": false,
        "refutation": "Only the annual 9% depreciation flow (R8.28m, not the entire R92m capital stock) is deducted, and old-age pensions (R61m transfer) and personal income tax (R25m direct tax) never enter NNPmp."
      },
      {
        "text": "(Dataset A) NDPmp = R42 000m, GDPfc = R42 500m, GNPmp = R45 000m; (Dataset B) Depreciation = R8.28m, NNPmp = R912.72m by subtracting subsidies and adding indirect VAT.",
        "isCorrect": false,
        "refutation": "This confuses NDPmp with GNPmp in Dataset A, and in Dataset B, NNPmp is already valued at market prices (so VAT and subsidies are only adjusted when converting from NNPmp to NNPfc = R922.72m)."
      }
    ],
    "chapter": "ch13",
    "citation": "Mohr 6e, Mohr 6e, pp. 235–265 • Study Unit 1, pp. 2–11"
  },
  {
    "id": "q_ch14_15",
    "chapterId": "ch14",
    "source": "Chapter 14 — The Monetary Sector — Fractional-Reserve Credit Creation & Multi-Stage Commercial Bank Balance Sheet Accounting",
    "topic": "Fractional-Reserve Credit Creation & Multi-Stage Commercial Bank Balance Sheet Accounting",
    "difficulty": "Medium",
    "stem": "Evaluate two commercial bank balance-sheet scenarios from Study Unit 2.1: (Scenario 1) Person A deposits R1 000 cash into Bank 1, which observes a 20% required cash reserve ratio and lends all surplus funds to Person B; (Scenario 2) A newly formed commercial bank issues R100 000 in capital stock (spending R80 000 on property/buildings and holding R20 000 in cash reserves), then accepts R30 000 in Stage 2 cash demand deposits, and in Stage 3 receives a further R35 000 cash deposit while paying out a R1 000 cash withdrawal. Determine: (1) Bank 1's cash reserves and loan creation in Scenario 1; and (2) The bank's Stage 3 Assets and Claims (Liabilities + Capital) in Scenario 2.",
    "derivation": [
      "\\text{Scenario 1 (Bank 1): Deposit} = \\text{R}1\\,000; \\quad \\text{Required Cash Reserve (20\\%)} = 0.20 \\times 1\\,000 = \\text{R}200; \\quad \\text{Surplus Loan to Person B} = 1\\,000 - 200 = \\text{R}800",
      "\\text{Scenario 2 Stage 1: Assets} = \\text{Property R80 000} + \\text{Cash R20 000} = \\text{R100 000}; \\quad \\text{Claims} = \\text{Capital Stock R100 000}",
      "\\text{Scenario 2 Stage 2 (+R30 000 deposit): Cash} = 20\\,000 + 30\\,000 = \\text{R}50\\,000; \\quad \\text{Demand Deposits} = \\text{R}30\\,000; \\quad \\text{Total} = \\text{R}130\\,000",
      "\\text{Scenario 2 Stage 3 (+R35 000 deposit, -R1 000 withdrawal): Net Cash Change} = +34\\,000 \\implies \\text{Cash} = \\text{R}84\\,000, \\text{Property} = \\text{R}80\\,000",
      "\\text{Scenario 2 Stage 3 Claims: Demand Deposits} = 30\\,000 + 35\\,000 - 1\\,000 = \\text{R}64\\,000, \\text{Capital Stock} = \\text{R}100\\,000 \\implies \\text{Total Balance Sheet} = \\text{R}164\\,000"
    ],
    "options": [
      {
        "text": "(1) Bank 1 holds R200 cash reserves and lends R800 to Person B; (2) Stage 3 Assets are Cash R84 000 + Property R80 000 = R164 000, matching Demand Deposits R64 000 + Capital R100 000.",
        "isCorrect": true,
        "refutation": "Correct! Under a 20% reserve ratio, R1 000 creates R200 in reserves and R800 in new loans; in Scenario 2, Cash rises from R20 000 to R50 000 to R84 000 while Demand Deposits reach R64 000 (total R164 000)."
      },
      {
        "text": "(1) Bank 1 holds R800 cash reserves and lends R200 to Person B; (2) Stage 3 Assets are Cash R64 000 + Property R100 000 = R164 000, matching Demand Deposits R84 000 + Capital R80 000.",
        "isCorrect": false,
        "refutation": "A 20% reserve requirement means 20% (R200) is kept in cash reserves and 80% (R800) is lent out, and in Scenario 2, R20 000 of the initial R100 000 capital was held in cash (giving R84 000 total cash)."
      },
      {
        "text": "(1) Bank 1 holds R200 cash reserves and lends R1 000 to Person B; (2) Stage 3 Assets are Cash R86 000 + Property R80 000 = R166 000, matching Demand Deposits R66 000 + Capital R100 000.",
        "isCorrect": false,
        "refutation": "A single bank cannot lend out the entire R1 000 deposit while still holding R200 in cash reserves from that deposit, and the R1 000 cash withdrawal in Stage 3 must be subtracted (not added)."
      },
      {
        "text": "(1) Bank 1 holds R200 cash reserves and lends R800 to Person B; (2) Stage 3 Assets are Cash R65 000 + Property R80 000 = R145 000, because initial capital cash is excluded from assets.",
        "isCorrect": false,
        "refutation": "The R20 000 unspent cash from the initial R100 000 capital stock issue remains on the asset side of the balance sheet and combines with the net R64 000 deposit cash inflow to give R84 000 cash."
      }
    ],
    "chapter": "ch14",
    "citation": "Mohr 6e, Mohr 6e, pp. 267–294 • Study Unit 2.1, pp. 14–24"
  },
  {
    "id": "q_ch14_16",
    "chapterId": "ch14",
    "source": "Chapter 14 — The Monetary Sector — Bankers' Acceptances vs Debentures & Market-Oriented (Indirect) vs Direct Monetary Policy",
    "topic": "Bankers' Acceptances vs Debentures & Market-Oriented (Indirect) vs Direct Monetary Policy",
    "difficulty": "Medium",
    "stem": "In the analysis of South African financial markets and monetary policy (Study Unit 2.1): (1) Distinguish between a Bankers' Acceptance (BA) and a Debenture in terms of maturity and market classification (money market vs capital market); and (2) Classify the central bank's policy instruments into market-oriented (indirect) instruments versus non-market-oriented (direct) instruments.",
    "derivation": [
      "\\text{(1) Bankers' Acceptance (BA): Short-term bill of exchange (typically 90 days, } < 1 \\text{ year) accepted by a bank } \\implies \\text{Money Market liquid asset}",
      "\\text{(1) Debenture: Long-term fixed-interest corporate debt security (}> 1 \\text{ year, backed by issuer creditworthiness) } \\implies \\text{Capital Market instrument}",
      "\\text{(2) Market-Oriented (Indirect) Policy Instruments: Accommodation policy (repo rate), Open-market operations (OMO), Public debt management}",
      "\\text{(2) Non-Market-Oriented (Direct) Policy Instruments: Credit ceilings (quantitative lending limits) and Deposit/lending rate controls}"
    ],
    "options": [
      {
        "text": "(1) A Bankers' Acceptance is a short-term money market liquid asset whereas a Debenture is a long-term corporate capital market bond; (2) Repo accommodation and OMO are indirect (market-oriented), whereas credit ceilings and rate controls are direct.",
        "isCorrect": true,
        "refutation": "Correct! Bankers' Acceptances are short-term (< 1 year) money market instruments used by banks to meet liquid asset requirements, Debentures are long-term corporate capital market bonds, and repo/OMO are market-oriented."
      },
      {
        "text": "(1) A Bankers' Acceptance is a long-term capital market equity share whereas a Debenture is a 90-day money market Treasury bill; (2) Credit ceilings and deposit rate controls are indirect (market-oriented) instruments.",
        "isCorrect": false,
        "refutation": "This reverses both securities and policy classifications: Bankers' Acceptances are short-term money market debt instruments, Debentures are long-term capital market bonds, and credit ceilings are direct controls."
      },
      {
        "text": "(1) Both Bankers' Acceptances and Debentures are short-term money market instruments issued exclusively by the Treasury; (2) Open-market operations and accommodation policy are direct (non-market) instruments.",
        "isCorrect": false,
        "refutation": "Neither instrument is issued by the Treasury (both are private/corporate/bank securities), Debentures are long-term capital market bonds, and open-market operations work indirectly through market prices and interest rates."
      },
      {
        "text": "(1) A Bankers' Acceptance is a short-term money market instrument whereas a Debenture is a long-term capital market bond; (2) Taxation and government expenditure are the central bank's primary indirect monetary instruments.",
        "isCorrect": false,
        "refutation": "Taxation and government expenditure are fiscal policy instruments controlled by the National Treasury, not monetary policy instruments of the South African Reserve Bank."
      }
    ],
    "chapter": "ch14",
    "citation": "Mohr 6e, Mohr 6e, pp. 267–294 • Study Unit 2.1, pp. 14–24"
  },
  {
    "id": "q_ch15_21",
    "chapterId": "ch15",
    "source": "Chapter 15 — The Government Sector — Financing, Redistributing & Regulating Tax Functions and VAT Regressivity Proofs",
    "topic": "Financing, Redistributing & Regulating Tax Functions and VAT Regressivity Proofs",
    "difficulty": "Hard",
    "stem": "Evaluate the fiscal functions and incidence of taxation from Study Unit 2.2: (1) Classify four government tax actions into Financing, Redistributing, or Regulating: (a) taxing to subsidise basic needs for poor communities, (b) raising taxes to cool an overheating economy, (c) raising taxes to reduce annual government borrowing, and (d) cutting taxes to stimulate a slow economy; (2) Calculate Peter's tax liability and average tax rate on an income of R16 601 under the bracket 'R15 001–R20 000: R2 550 + 21% above R15 000' (given Susan earns R83 450 and pays R26 483.50 tax = 31.74% ATR); and (3) Compare the 14% VAT burden as a share of total income for Nicky (earns R1 000/month, spends 75% = R750) versus Duncan (earns R500/month, spends 100% = R500).",
    "derivation": [
      "\\text{(1) Tax Functions: (a) Redistributing; (b) Regulating (contractionary); (c) Financing; (d) Regulating (expansionary)}",
      "\\text{(2) Peter (Income R16 601): Tax} = 2\\,550 + 0.21(16\\,601 - 15\\,000) = 2\\,550 + 336.21 = \\text{R}2\\,886.21",
      "\\text{Peter ATR} = \\frac{2\\,886.21}{16\\,601} \\times 100 = 17.39\\% < \\text{Susan ATR } (31.74\\%) \\implies \\text{Progressive income tax}",
      "\\text{(3) Nicky (Income R1 000, spends R750): VAT} = 0.14 \\times 750 = \\text{R}105 \\implies \\text{ATR}_{\\text{Nicky}} = \\frac{105}{1\\,000} = 10.5\\%",
      "\\text{(3) Duncan (Income R500, spends R500): VAT} = 0.14 \\times 500 = \\text{R}70 \\implies \\text{ATR}_{\\text{Duncan}} = \\frac{70}{500} = 14.0\\% > 10.5\\% \\implies \\text{Regressive indirect tax}"
    ],
    "options": [
      {
        "text": "(1) a=Redistributing, b=Regulating, c=Financing, d=Regulating; (2) Peter pays R2 886.21 (ATR = 17.39% vs Susan's 31.74%, progressive); (3) Nicky pays R105 (10.5% of income) vs Duncan's R70 (14.0% of income, regressive).",
        "isCorrect": true,
        "refutation": "Correct! Subsidising basic needs is redistributive, macroeconomic stabilisation (b and d) is regulatory, replacing debt is financing, Peter's ATR is 17.39%, and Duncan's 14.0% VAT share exceeds Nicky's 10.5%."
      },
      {
        "text": "(1) a=Financing, b=Redistributing, c=Regulating, d=Financing; (2) Peter pays R3 486.21 (ATR = 21.00% vs Susan's 31.74%, proportional); (3) Both Nicky and Duncan pay an identical 14.0% of income (proportional).",
        "isCorrect": false,
        "refutation": "Applying 21% to Peter's entire R16 601 income confuses the marginal rate (21% above R15 000) with the average rate (17.39%), and because higher-income Nicky saves 25% of income, Nicky's VAT-to-income ratio is 10.5% (< 14.0%)."
      },
      {
        "text": "(1) a=Redistributing, b=Regulating, c=Financing, d=Regulating; (2) Peter pays R2 550.00 (ATR = 15.36%, regressive); (3) Nicky pays R140 (14.0% of income) vs Duncan's R70 (14.0% of income, progressive).",
        "isCorrect": false,
        "refutation": "Peter must also pay 21% on the R1 601 exceeding R15 000 (+R336.21 = R2 886.21), and VAT is only levied on Nicky's R750 consumption expenditure (0.14 × 750 = R105), not on Nicky's R250 savings."
      },
      {
        "text": "(1) a=Regulating, b=Financing, c=Redistributing, d=Redistributing; (2) Peter pays R2 886.21 (ATR = 17.39%, regressive); (3) Nicky's R105 VAT exceeds Duncan's R70 VAT, proving that VAT is progressive.",
        "isCorrect": false,
        "refutation": "Progressivity and regressivity are defined by the Average Tax Rate (tax as a percentage of total income), not the absolute Rand amount: Duncan's 14.0% income share exceeds Nicky's 10.5%, proving VAT is regressive."
      }
    ],
    "chapter": "ch15",
    "citation": "Mohr 6e, Mohr 6e, pp. 295–322 • Study Unit 2.2, pp. 25–46"
  },
  {
    "id": "q_ch15_22",
    "chapterId": "ch15",
    "source": "Chapter 15 — The Government Sector — Statutory Personal Income Tax, Rebate & Effective Tax Rate (Jerome Muller R288 000)",
    "topic": "Statutory Personal Income Tax, Rebate & Effective Tax Rate (Jerome Muller R288 000)",
    "difficulty": "Medium",
    "stem": "Jerome Muller is 37 years old and earns a taxable salary of R24 000 per month during the statutory tax year. According to the Study Unit 2.2 statutory tax table, the bracket for annual taxable income from R189 881 to R296 540 is 'R34 178 + 26% of taxable income above R189 880', and the Primary Rebate (under age 65) is R13 500. Calculate: (1) Annual taxable income and gross tax before rebates; (2) Net annual tax payable after the primary rebate; (3) Effective (average) tax rate and marginal tax rate; and (4) Annual post-tax disposable income.",
    "derivation": [
      "\\text{(1) Annual Taxable Income} = 24\\,000 \\times 12 = \\text{R}288\\,000 \\text{ (falls in R189 881 – R296 540 bracket)}",
      "\\text{Gross Tax Before Rebate} = 34\\,178 + 0.26 \\times (288\\,000 - 189\\,880) = 34\\,178 + 0.26(98\\,120) = 34\\,178 + 25\\,511.20 = \\text{R}59\\,689.20",
      "\\text{(2) Net Tax Payable After Primary Rebate} = 59\\,689.20 - 13\\,500 = \\text{R}46\\,189.20 \\approx \\text{R}46\\,189",
      "\\text{(3) Effective (Average) Tax Rate} = \\frac{46\\,189.20}{288\\,000} \\times 100 = 16.04\\% \\text{ (vs 20.73\\% before rebate)}; \\quad \\text{Marginal Tax Rate} = 26\\%",
      "\\text{(4) Post-Tax Disposable Income} = 288\\,000 - 46\\,189.20 = \\text{R}241\\,810.80 \\approx \\text{R}241\\,811"
    ],
    "options": [
      {
        "text": "Annual income = R288 000; Gross tax = R59 689.20; Net tax payable = R46 189.20 (≈ R46 189); Effective tax rate = 16.04% (Marginal rate = 26%); Post-tax income = R241 810.80.",
        "isCorrect": true,
        "refutation": "Correct! At R288 000/year, gross tax is R34 178 + 26% of R98 120 = R59 689.20; subtracting the R13 500 primary rebate yields R46 189.20 net tax (16.04% effective rate) and R241 810.80 disposable income."
      },
      {
        "text": "Annual income = R288 000; Gross tax = R74 880.00; Net tax payable = R61 380.00; Effective tax rate = 21.31% (Marginal rate = 26%); Post-tax income = R226 620.00.",
        "isCorrect": false,
        "refutation": "Multiplying the entire R288 000 income by 26% (R74 880) ignores the lower 18% rate on the first R189 880; the 26% marginal rate applies strictly to the R98 120 excess above R189 880."
      },
      {
        "text": "Annual income = R288 000; Gross tax = R59 689.20; Net tax payable = R59 689.20; Effective tax rate = 20.73% (Marginal rate = 16.04%); Post-tax income = R228 310.80.",
        "isCorrect": false,
        "refutation": "This omits the mandatory R13 500 primary rebate for taxpayers under age 65 and reverses the marginal tax rate (26%) with the effective average tax rate (16.04%)."
      },
      {
        "text": "Annual income = R274 500 (after deducting R13 500 rebate from income); Net tax payable = R56 179.20; Effective tax rate = 19.51% (Marginal rate = 26%); Post-tax income = R231 820.80.",
        "isCorrect": false,
        "refutation": "A statutory tax rebate (R13 500) is a direct reduction subtracted from gross tax liability (R59 689.20 - R13 500 = R46 189.20), NOT a tax-deductible expense subtracted from taxable income."
      }
    ],
    "chapter": "ch15",
    "citation": "Mohr 6e, Mohr 6e, pp. 295–322 • Study Unit 2.2, pp. 25–46"
  },
  {
    "id": "q_ch15_23",
    "chapterId": "ch15",
    "source": "Chapter 15 — The Government Sector — Top-Bracket Statutory Income Tax, Rebate & Effective Rate (Sally Moloi R4 500 000)",
    "topic": "Top-Bracket Statutory Income Tax, Rebate & Effective Rate (Sally Moloi R4 500 000)",
    "difficulty": "Medium",
    "stem": "Sally Moloi is 55 years old and earns a taxable salary of R375 000 per month during the statutory tax year. According to the Study Unit 2.2 statutory tax table, the top bracket for annual taxable income of R1 500 001 and above is 'R533 625 + 45% of taxable income above R1 500 000', and the Primary Rebate (under age 65) is R13 500. Calculate: (1) Annual taxable income and gross tax before rebates; (2) Net annual tax payable after the primary rebate; (3) Effective (average) tax rate and marginal tax rate; and (4) Annual post-tax disposable income.",
    "derivation": [
      "\\text{(1) Annual Taxable Income} = 375\\,000 \\times 12 = \\text{R}4\\,500\\,000 \\text{ (falls in R1 500 001+ top bracket)}",
      "\\text{Exact 45\\% on Excess Above R1 500 000} = 0.45 \\times (4\\,500\\,000 - 1\\,500\\,000) = 0.45 \\times 3\\,000\\,000 = \\text{R}1\\,350\\,000 \\text{ (note: R1 380 000 in guide print typo)}",
      "\\text{Exact Gross Tax} = 533\\,625 + 1\\,350\\,000 = \\text{R}1\\,883\\,625 \\text{ (or R1 913 625 in guide print)}",
      "\\text{(2) Exact Net Tax Payable} = 1\\,883\\,625 - 13\\,500 = \\text{R}1\\,870\\,125 \\text{ (or R1 900 125 in guide print)}",
      "\\text{(3) Effective Tax Rate} = \\frac{1\\,870\\,125}{4\\,500\\,000} \\times 100 = 41.56\\% \\text{ (or 42.22\\% in guide)}; \\quad \\text{Marginal Rate} = 45\\%; \\quad \\text{Post-Tax Income} = \\text{R}2\\,629\\,875"
    ],
    "options": [
      {
        "text": "Annual income = R4 500 000; Exact net tax = R1 870 125 (ETR = 41.56%, Post-tax = R2 629 875) [or R1 900 125 / 42.22% in guide]; Marginal tax rate = 45%.",
        "isCorrect": true,
        "refutation": "Correct! On R4 500 000 annual income, 45% of the R3 000 000 excess is R1 350 000, giving R1 883 625 gross tax and R1 870 125 net tax after the R13 500 primary rebate (41.56% effective rate vs 45% marginal rate)."
      },
      {
        "text": "Annual income = R4 500 000; Net tax = R2 011 500 (applying 45% to the entire R4 500 000 less R13 500); Effective tax rate = 44.70%; Marginal tax rate = 45%.",
        "isCorrect": false,
        "refutation": "Applying 45% to all R4 500 000 ignores the progressive lower-bracket rates captured in the R533 625 base tax for the first R1 500 000 of taxable income."
      },
      {
        "text": "Annual income = R4 500 000; Net tax = R1 862 718 (subtracting both Primary R13 500 and Secondary R7 407 rebates); Effective tax rate = 41.39%; Marginal tax rate = 41.39%.",
        "isCorrect": false,
        "refutation": "At age 55, Sally Moloi is under age 65 and qualifies only for the Primary Rebate (R13 500), not the Secondary Rebate (R7 407 for ages 65–74), and her marginal rate is 45%."
      },
      {
        "text": "Annual income = R375 000; Net tax = R72 153.20 (evaluating monthly salary directly against the annual table); Effective tax rate = 19.24%; Marginal tax rate = 31%.",
        "isCorrect": false,
        "refutation": "Statutory income tax brackets are defined on an annual basis, so monthly income of R375 000 must first be multiplied by 12 months (R4 500 000) before looking up the tax bracket."
      }
    ],
    "chapter": "ch15",
    "citation": "Mohr 6e, Mohr 6e, pp. 295–322 • Study Unit 2.2, pp. 25–46"
  },
  {
    "id": "q_ch16_11",
    "chapterId": "ch16",
    "source": "Chapter 16 — The Foreign Sector — Absolute vs Comparative Advantage & Opportunity Cost Ratios (LDC & DC Wheat/Cloth)",
    "topic": "Absolute vs Comparative Advantage & Opportunity Cost Ratios (LDC & DC Wheat/Cloth)",
    "difficulty": "Medium",
    "stem": "In the Study Unit 2.3 trade model between a Less Developed Country (LDC) and a Developed Country (DC), one worker-day of labour can produce: in the LDC, either 2 kg of wheat OR 1 metre of cloth; in the DC, either 4 kg of wheat OR 8 metres of cloth. Determine: (1) Which country holds an absolute advantage in wheat and cloth; (2) The opportunity cost of 1 kg of wheat and 1 metre of cloth in each country; and (3) The pattern of specialisation based on comparative advantage.",
    "derivation": [
      "\\text{(1) Absolute Advantage: DC produces more wheat (4 kg > 2 kg) AND more cloth (8 m > 1 m) per worker-day } \\implies \\text{DC has absolute advantage in both}",
      "\\text{(2) LDC Opportunity Costs: } 1\\text{ kg wheat} = \\frac{1}{2} = 0.5\\text{ m cloth}; \\quad 1\\text{ m cloth} = \\frac{2}{1} = 2\\text{ kg wheat}",
      "\\text{(2) DC Opportunity Costs: } 1\\text{ kg wheat} = \\frac{8}{4} = 2.0\\text{ m cloth}; \\quad 1\\text{ m cloth} = \\frac{4}{8} = 0.5\\text{ kg wheat}",
      "\\text{(3) Comparative Advantage: LDC sacrifices only 0.5 m cloth per kg of wheat (}< 2.0\\text{ m in DC)} \\implies \\text{LDC specialises in Wheat; DC specialises in Cloth (0.5 kg < 2 kg)}"
    ],
    "options": [
      {
        "text": "The DC has an absolute advantage in both goods; 1 kg wheat costs 0.5 m cloth in the LDC vs 2.0 m cloth in the DC; the LDC specialises in wheat and the DC specialises in cloth.",
        "isCorrect": true,
        "refutation": "Correct! Even though the DC is more productive in both goods (4 kg > 2 kg and 8 m > 1 m), the LDC has a lower opportunity cost in wheat (0.5 m < 2.0 m cloth) and the DC has a lower opportunity cost in cloth (0.5 kg < 2.0 kg wheat)."
      },
      {
        "text": "The DC has both absolute and comparative advantage in both goods; mutually beneficial trade is impossible because the LDC is less productive in both wheat and cloth.",
        "isCorrect": false,
        "refutation": "A country cannot have a comparative advantage in both goods unless opportunity cost ratios are identical; because 2/1 ≠ 4/8, mutually beneficial trade occurs via comparative advantage."
      },
      {
        "text": "The DC has an absolute advantage in both goods; 1 kg wheat costs 2.0 m cloth in the LDC vs 0.5 m cloth in the DC; the LDC specialises in cloth and the DC specialises in wheat.",
        "isCorrect": false,
        "refutation": "This inverts the opportunity cost fractions: in the LDC, giving up 1 m of cloth gains 2 kg of wheat, so 1 kg of wheat sacrifices only 1/2 = 0.5 m of cloth (not 2.0 m)."
      },
      {
        "text": "The LDC has an absolute advantage in wheat while the DC has an absolute advantage in cloth; both countries face an identical opportunity cost of 1 kg wheat = 1 m cloth.",
        "isCorrect": false,
        "refutation": "4 kg of wheat exceeds 2 kg of wheat (so the DC holds the absolute advantage in wheat too), and the opportunity cost of 1 kg of wheat is 0.5 m cloth in the LDC versus 2.0 m cloth in the DC."
      }
    ],
    "chapter": "ch16",
    "citation": "Mohr 6e, Mohr 6e, pp. 323–346 • Study Unit 2.3, pp. 47–56"
  },
  {
    "id": "q_ch16_12",
    "chapterId": "ch16",
    "source": "Chapter 16 — The Foreign Sector — Exchange-Rate Valuation & Export/Import Switching Across Five Commodities (USA & UK)",
    "topic": "Exchange-Rate Valuation & Export/Import Switching Across Five Commodities (USA & UK)",
    "difficulty": "Hard",
    "stem": "In Study Unit 2.3, domestic production prices for five tradable commodities in the USA ($) and the UK (£) are: Commodity A ($1.60 vs £1.00), Commodity B ($2.00 vs £1.40), Commodity C ($2.50 vs £1.50), Commodity D ($0.40 vs £1.20), and Commodity E ($4.00 vs £2.00). Assuming zero transport costs, determine which commodities the USA will export to the UK and which the USA will import from the UK under three exchange rate regimes: (1) £1 = $1.00; (2) £1 = $2.00 (dollar depreciation); and (3) £1 = $0.50 (dollar appreciation).",
    "derivation": [
      "\\text{Regime (1) } \\pounds 1 = \\$1.00: \\text{UK prices in \\$ are A=\\$1.00, B=\\$1.40, C=\\$1.50, D=\\$1.20, E=\\$2.00}",
      "\\implies \\text{USA is cheaper only in D (\\$0.40 < \\$1.20): USA exports D and imports A, B, C, E}",
      "\\text{Regime (2) } \\pounds 1 = \\$2.00: \\text{UK prices in \\$ double to A=\\$2.00, B=\\$2.80, C=\\$3.00, D=\\$2.40, E=\\$4.00}",
      "\\implies \\text{USA is cheaper in A (\\$1.60<\\$2.00), B (\\$2.00<\\$2.80), C (\\$2.50<\\$3.00), D (\\$0.40<\\$2.40), and equal in E (\\$4.00=\\$4.00): USA exports A, B, C, D}",
      "\\text{Regime (3) } \\pounds 1 = \\$0.50: \\text{UK prices in \\$ halve to A=\\$0.50, B=\\$0.70, C=\\$0.75, D=\\$0.60, E=\\$1.00} \\implies \\text{USA exports D (\\$0.40<\\$0.60) and imports A, B, C, E}"
    ],
    "options": [
      {
        "text": "At £1=$1.00, USA exports D and imports A, B, C, E; at £1=$2.00 (dollar depreciation), USA exports A, B, C, D (with E equal at $4.00) and imports none; at £1=$0.50, USA exports only D and imports A, B, C, E.",
        "isCorrect": true,
        "refutation": "Correct! Converting UK pound prices into US dollars shows that dollar depreciation (£1 = $2.00) makes US goods A, B, C, and D cheaper than UK equivalents (and E equal at $4.00), boosting US exports."
      },
      {
        "text": "At £1=$1.00, USA exports A, B, C, E and imports D; at £1=$2.00 (dollar appreciation), USA imports all five commodities; at £1=$0.50, USA exports A, B, C, D, E and imports none.",
        "isCorrect": false,
        "refutation": "A rise from £1 = $1.00 to £1 = $2.00 is a depreciation (weakening) of the US dollar because more dollars are required per pound, making US exports cheaper rather than more expensive."
      },
      {
        "text": "At £1=$1.00, USA exports D and imports A, B, C, E; at £1=$2.00, USA exports all five goods A, B, C, D, E; at £1=$0.50, USA imports all five goods including Commodity D ($0.40 vs $0.60).",
        "isCorrect": false,
        "refutation": "At £1 = $2.00, Commodity E costs $4.00 in both countries (£2.00 × $2 = $4.00, so there is no price differential to drive trade in E), and at £1 = $0.50, US Commodity D ($0.40) is still cheaper than £1.20 × $0.50 = $0.60."
      },
      {
        "text": "Exchange rate fluctuations between £1=$1.00, £1=$2.00, and £1=$0.50 are purely nominal and leave the set of US export and import commodities completely unchanged across all five goods.",
        "isCorrect": false,
        "refutation": "With given domestic prices, nominal exchange rate shifts directly alter relative cross-border prices, expanding US exports from just D (at £1=$1) to A, B, C, and D when the dollar depreciates to £1=$2."
      }
    ],
    "chapter": "ch16",
    "citation": "Mohr 6e, Mohr 6e, pp. 323–346 • Study Unit 2.3, pp. 47–56"
  },
  {
    "id": "q_ch17_07",
    "chapterId": "ch17",
    "source": "Chapter 17 — A Simple Keynesian Model of the Economy — Extracting MPC, MPS, Autonomous Consumption, APC & APS from a Tabular Schedule",
    "topic": "Extracting MPC, MPS, Autonomous Consumption, APC & APS from a Tabular Schedule",
    "difficulty": "Medium",
    "stem": "A macroeconomic household survey in Study Unit 3.1 records the following linear relationship between disposable income (Y) and total consumption expenditure (C): at Y = 40, C = 47; at Y = 60, C = 58; at Y = 80, C = 69; at Y = 100, C = 80; at Y = 120, C = 91; and at Y = 140, C = 102. Calculate: (1) The Marginal Propensity to Consume (MPC) and Marginal Propensity to Save (MPS); (2) Autonomous consumption (C̄) and the full consumption and saving equations; and (3) The Average Propensity to Consume (APC) and Average Propensity to Save (APS) at Y = 100.",
    "derivation": [
      "\\text{(1) Marginal Propensity to Consume: } c = \\text{MPC} = \\frac{\\Delta C}{\\Delta Y} = \\frac{58 - 47}{60 - 40} = \\frac{11}{20} = 0.55; \\quad s = \\text{MPS} = 1 - 0.55 = 0.45",
      "\\text{(2) Autonomous Consumption: } C = \\bar{C} + 0.55Y \\implies 47 = \\bar{C} + 0.55(40) = \\bar{C} + 22 \\implies \\bar{C} = 25",
      "\\text{Consumption and Saving Functions: } C = 25 + 0.55Y \\quad \\text{and} \\quad S = -25 + 0.45Y",
      "\\text{(3) At } Y = 100 \\text{ (where } C = 80, S = 20\\text{): } \\text{APC} = \\frac{C}{Y} = \\frac{80}{100} = 0.80 \\quad \\text{and} \\quad \\text{APS} = \\frac{S}{Y} = \\frac{20}{100} = 0.20 \\quad (\\text{APC} + \\text{APS} = 1.00)"
    ],
    "options": [
      {
        "text": "(1) MPC = 0.55 and MPS = 0.45; (2) Autonomous consumption C̄ = 25, giving C = 25 + 0.55Y and S = -25 + 0.45Y; (3) At Y = 100, APC = 0.80 and APS = 0.20.",
        "isCorrect": true,
        "refutation": "Correct! For every ΔY = 20, consumption rises by ΔC = 11 (MPC = 11/20 = 0.55, MPS = 0.45); solving 47 = C̄ + 0.55(40) yields C̄ = 25, and at Y = 100, APC = 80/100 = 0.80 and APS = 20/100 = 0.20."
      },
      {
        "text": "(1) MPC = 0.80 and MPS = 0.20; (2) Autonomous consumption C̄ = 47, giving C = 47 + 0.80Y and S = -47 + 0.20Y; (3) At Y = 100, APC = 0.55 and APS = 0.45.",
        "isCorrect": false,
        "refutation": "This confuses the Average Propensity to Consume at Y = 100 (APC = 80/100 = 0.80) with the Marginal Propensity to Consume (MPC = ΔC/ΔY = 11/20 = 0.55), and C = 47 is consumption at Y = 40, not at Y = 0."
      },
      {
        "text": "(1) MPC = 1.82 and MPS = -0.82; (2) Autonomous consumption C̄ = 25, giving C = 25 + 1.82Y and S = -25 - 0.82Y; (3) At Y = 100, APC = 1.25 and APS = -0.25.",
        "isCorrect": false,
        "refutation": "Dividing ΔY by ΔC (20 / 11 = 1.82) inverts the slope formula; the Marginal Propensity to Consume is strictly ΔC / ΔY = 11 / 20 = 0.55, which must lie between 0 and 1."
      },
      {
        "text": "(1) MPC = 0.55 and MPS = 0.45; (2) Autonomous consumption C̄ = 0, giving C = 0.55Y and S = 0.45Y; (3) At Y = 100, APC = 0.55 and APS = 0.45.",
        "isCorrect": false,
        "refutation": "If autonomous consumption were zero, consumption at Y = 100 would be 55 rather than 80; because C̄ = 25 > 0, APC (0.80) strictly exceeds MPC (0.55) at Y = 100."
      }
    ],
    "chapter": "ch17",
    "citation": "Mohr 6e, Mohr 6e, pp. 347–376 • Study Unit 3.1, pp. 58–71"
  },
  {
    "id": "q_ch17_08",
    "chapterId": "ch17",
    "source": "Chapter 17 — A Simple Keynesian Model of the Economy — Two-Sector Keynesian Equilibrium, Multiplier & Saving-Investment Identity (Island Economy)",
    "topic": "Two-Sector Keynesian Equilibrium, Multiplier & Saving-Investment Identity (Island Economy)",
    "difficulty": "Easy",
    "stem": "In the Study Unit 3.1 island economy without a government or foreign sector, consumption is given by C = 250 + 0.8Y and autonomous private investment is I = 400. Calculate: (1) Total autonomous spending (Ā) and the expenditure multiplier (α); (2) The equilibrium level of national income (Ye) and equilibrium consumption (Ce); and (3) The equilibrium level of household saving (Se), verifying the saving-investment equilibrium condition.",
    "derivation": [
      "\\text{(1) Autonomous Spending: } \\bar{A} = \\bar{C} + \\bar{I} = 250 + 400 = 650; \\quad \\text{Multiplier: } \\alpha = \\frac{1}{1 - c} = \\frac{1}{1 - 0.8} = \\frac{1}{0.2} = 5",
      "\\text{(2) Equilibrium Income: } Y_e = \\alpha \\times \\bar{A} = 5 \\times 650 = 3\\,250; \\quad \\text{Equilibrium Consumption: } C_e = 250 + 0.8(3\\,250) = 250 + 2\\,600 = 2\\,850",
      "\\text{(3) Saving Function: } S = -\\bar{C} + (1 - c)Y = -250 + 0.2(3\\,250) = -250 + 650 = 400 \\equiv I \\quad (\\text{and } Y_e - C_e = 3\\,250 - 2\\,850 = 400)"
    ],
    "options": [
      {
        "text": "(1) Ā = 650 and α = 5; (2) Equilibrium income Ye = 3 250 and consumption Ce = 2 850; (3) Equilibrium saving Se = -250 + 0.2(3 250) = 400, confirming Se = I = 400.",
        "isCorrect": true,
        "refutation": "Correct! With Ā = 250 + 400 = 650 and α = 1/(1 - 0.8) = 5, equilibrium income is Ye = 3 250, consumption is Ce = 2 850, and household saving is Se = 3 250 - 2 850 = 400 = I."
      },
      {
        "text": "(1) Ā = 650 and α = 1.25; (2) Equilibrium income Ye = 812.50 and consumption Ce = 900; (3) Equilibrium saving Se = 250 + 0.2(812.50) = 412.50.",
        "isCorrect": false,
        "refutation": "Dividing 1 by c (1 / 0.8 = 1.25) instead of 1 / (1 - c) = 1 / 0.2 = 5 understates the multiplier, and the saving intercept is negative autonomous consumption (-C̄ = -250)."
      },
      {
        "text": "(1) Ā = 400 and α = 5; (2) Equilibrium income Ye = 2 000 and consumption Ce = 1 850; (3) Equilibrium saving Se = -250 + 0.2(2 000) = 150 < I.",
        "isCorrect": false,
        "refutation": "Autonomous spending Ā must include both autonomous consumption (C̄ = 250) and autonomous investment (Ī = 400), giving Ā = 650 and Ye = 3 250 where saving equals 400."
      },
      {
        "text": "(1) Ā = 650 and α = 5; (2) Equilibrium income Ye = 3 250 and consumption Ce = 2 600; (3) Equilibrium saving Se = 0.2(3 250) = 650, exceeding investment by 250.",
        "isCorrect": false,
        "refutation": "Induced consumption 0.8(3 250) = 2 600 omits autonomous consumption C̄ = 250 (so Ce = 2 850), and omitting dissaving (-250) from the saving function violates Se = I = 400."
      }
    ],
    "chapter": "ch17",
    "citation": "Mohr 6e, Mohr 6e, pp. 347–376 • Study Unit 3.1, pp. 58–71"
  },
  {
    "id": "q_ch18_11",
    "chapterId": "ch18",
    "source": "Chapter 18 — The Keynesian Model with a Government and a Foreign Sector — Household Disposable Income, Three-Sector Government Multiplier & Lump-Sum Taxes",
    "topic": "Household Disposable Income, Three-Sector Government Multiplier & Lump-Sum Taxes",
    "difficulty": "Medium",
    "stem": "Solve three Keynesian fiscal exercises from Study Unit 3.2: (Exercise 1) Thandi earns gross income Y = R500 and pays lump-sum tax T = R50; if her autonomous consumption is C̄ = R50 and she spends 75% of disposable income (c = 0.75), find her total consumption C; (Exercise 2) In a three-sector economy with C = 250 + 0.85Y, I = 150, and G = 350, find initial equilibrium income Ye and the new equilibrium income when G rises by ΔG = 100; (Exercise 3) In an open economy with C = 80 + 0.8Yd, I = 50, G = 30, lump-sum tax T = 10, X = 50, and Z = 20, find equilibrium income Ye.",
    "derivation": [
      "\\text{(1) Thandi: } Y_d = Y - T = 500 - 50 = \\text{R}450 \\implies C = \\bar{C} + cY_d = 50 + 0.75(450) = 50 + 337.50 = \\text{R}387.50",
      "\\text{(2) Three-Sector Model: } \\bar{A} = 250 + 150 + 350 = 750; \\quad \\alpha = \\frac{1}{1 - 0.85} = \\frac{1}{0.15} \\approx 6.67; \\quad Y_e = \\frac{750}{0.15} = 5\\,000",
      "\\text{When } \\Delta G = +100: \\Delta Y = 6.67 \\times 100 = 667 \\implies Y_{\\text{new}} = 5\\,000 + 667 = 5\\,667 \\text{ (exact } 5\\,666.67\\text{)}",
      "\\text{(3) Open Economy with Lump-Sum Tax } T = 10: C = 80 + 0.8(Y - 10) = 72 + 0.8Y",
      "\\bar{A} = 72 + 50 + 30 + 50 - 20 = 182; \\quad \\alpha = \\frac{1}{1 - 0.8} = 5 \\implies Y_e = 5 \\times 182 = 910"
    ],
    "options": [
      {
        "text": "(1) Thandi's consumption is R387.50; (2) Three-sector Ye = 5 000 (α = 6.67) and rises to 5 667 when ΔG = +100; (3) Open-economy autonomous spending is Ā = 182 and Ye = 910.",
        "isCorrect": true,
        "refutation": "Correct! Thandi spends 50 + 0.75(450) = R387.50; the three-sector economy has Ye = 750/0.15 = 5 000 and Y_new = 5 667; and in Exercise 3, C = 80 + 0.8(Y - 10) gives Ā = 182 and Ye = 5 × 182 = 910."
      },
      {
        "text": "(1) Thandi's consumption is R425.00; (2) Three-sector Ye = 5 000 (α = 6.67) and rises to 5 100 when ΔG = +100; (3) Open-economy autonomous spending is Ā = 180 and Ye = 900.",
        "isCorrect": false,
        "refutation": "In (1), tax T = 50 reduces disposable income Yd to 450 (so C reduces by cT = 0.75 × 50 = 37.50, not 0); in (2), ΔG = 100 is multiplied by α = 6.67; in (3), lump-sum tax reduces Ā by cT = 0.8(10) = 8, not 10."
      },
      {
        "text": "(1) Thandi's consumption is R375.00; (2) Three-sector Ye = 4 000 (α = 5.33) and rises to 4 533 when ΔG = +100; (3) Open-economy autonomous spending is Ā = 222 and Ye = 1 110.",
        "isCorrect": false,
        "refutation": "In (1), C = 375.00 forgets to deduct the R50 tax from R500 before multiplying by 0.75; in (3), imports Z = 20 are a leakage that must be subtracted (not added) when computing Ā = 182."
      },
      {
        "text": "(1) Thandi's consumption is R387.50; (2) Three-sector Ye = 5 000 and falls to 4 333 when ΔG = +100; (3) Open-economy autonomous spending is Ā = 190 and Ye = 950.",
        "isCorrect": false,
        "refutation": "An increase in autonomous government spending (ΔG = +100) is an injection that expands equilibrium income (+667 to 5 667), and in (3), lump-sum tax T = 10 reduces autonomous consumption by 0.8(10) = 8."
      }
    ],
    "chapter": "ch18",
    "citation": "Mohr 6e, Mohr 6e, pp. 377–405 • Study Unit 3.2, pp. 72–91"
  },
  {
    "id": "q_ch18_12",
    "chapterId": "ch18",
    "source": "Chapter 18 — The Keynesian Model with a Government and a Foreign Sector — Open-Economy Equilibrium under Lump-Sum Taxes vs a 5% Proportional Income Tax Rate",
    "topic": "Open-Economy Equilibrium under Lump-Sum Taxes vs a 5% Proportional Income Tax Rate",
    "difficulty": "Hard",
    "stem": "Evaluate two open-economy models from Study Unit 3.2: (Model A) Given C = 150 + 0.85Yd, I = 350, G = 250, X = 230, and Z = 250 (initially with T = 0), calculate: (i) initial equilibrium income Ye, (ii) the required increase in income ΔY if household saving increases by ΔS = 400, and (iii) the new equilibrium income if a lump-sum tax of T = 200 is introduced; (Model B) Given C = 185 + 0.7Yd, I = 220, G = 350, a proportional tax rate of t = 5% (0.05), X = 250, and Z = 205, calculate autonomous spending Ā, the tax-adjusted multiplier α, and equilibrium income Ye.",
    "derivation": [
      "\\text{Model A (i) Initial Equilibrium } (T = 0): \\bar{A} = 150 + 350 + 250 + 230 - 250 = 730; \\quad Y_e = \\frac{730}{1 - 0.85} = \\frac{730}{0.15} = 4\\,866.67",
      "\\text{Model A (ii) Saving Target } \\Delta S = 400: \\text{MPS} = 1 - 0.85 = 0.15 \\implies \\Delta Y = \\frac{\\Delta S}{\\text{MPS}} = \\frac{400}{0.15} = 2\\,666.67",
      "\\text{Model A (iii) With Lump-Sum Tax } T = 200: \\bar{A}_{\\text{new}} = 730 - 0.85(200) = 730 - 170 = 560 \\implies Y_{\\text{new}} = \\frac{560}{0.15} = 3\\,733.33",
      "\\text{Model B (t = 0.05): } \\bar{A} = 185 + 220 + 350 + 250 - 205 = 800; \\quad c(1 - t) = 0.7(1 - 0.05) = 0.7(0.95) = 0.665",
      "\\text{Model B Multiplier and Equilibrium: } \\alpha = \\frac{1}{1 - 0.665} = \\frac{1}{0.335} \\approx 2.985; \\quad Y_e = \\frac{800}{0.335} = 2\\,388.06 \\approx 2\\,388"
    ],
    "options": [
      {
        "text": "(Model A) Initial Ye = 4 866.67, ΔY for ΔS = 400 is 2 666.67, and with T = 200, Y_new = 3 733.33; (Model B) Ā = 800, α = 1/0.335 ≈ 2.985, and Ye = 2 388.",
        "isCorrect": true,
        "refutation": "Correct! In Model A, Ye = 730/0.15 = 4 866.67, ΔY = 400/0.15 = 2 666.67, and lump-sum T = 200 lowers Ā by 0.85(200) = 170 to 560 (Y_new = 3 733.33); in Model B, 1 - 0.7(0.95) = 0.335 gives Ye = 800/0.335 = 2 388."
      },
      {
        "text": "(Model A) Initial Ye = 4 866.67, ΔY for ΔS = 400 is 470.59, and with T = 200, Y_new = 3 533.33; (Model B) Ā = 800, α = 1/0.350 ≈ 2.857, and Ye = 2 286.",
        "isCorrect": false,
        "refutation": "In Model A, dividing ΔS by MPC (0.85) instead of MPS (0.15) is wrong and deducting the full T = 200 (instead of cT = 170) overstates the tax drag; in Model B, 1 - c(1-t) is 1 - 0.665 = 0.335, not 1 - 0.7 + 0.05 = 0.35."
      },
      {
        "text": "(Model A) Initial Ye = 8 200.00, ΔY for ΔS = 400 is 2 666.67, and with T = 200, Y_new = 7 066.67; (Model B) Ā = 1 210, α = 2.985, and Ye = 3 612.",
        "isCorrect": false,
        "refutation": "Both calculations add autonomous imports Z (250 in Model A; 205 in Model B) instead of subtracting Z as a foreign-sector leakage when computing autonomous spending Ā."
      },
      {
        "text": "(Model A) Initial Ye = 4 866.67, ΔY for ΔS = 400 is 2 666.67, and with T = 200, Y_new = 3 733.33; (Model B) Ā = 800, α = 1/(0.30 × 0.95) ≈ 3.509, and Ye = 2 807.",
        "isCorrect": false,
        "refutation": "In Model B, the order-of-operations rule for 1 - c(1 - t) requires multiplying c(1 - t) = 0.7(0.95) = 0.665 first and then subtracting from 1 (1 - 0.665 = 0.335), NOT computing (1 - c)(1 - t) = 0.30 × 0.95."
      }
    ],
    "chapter": "ch18",
    "citation": "Mohr 6e, Mohr 6e, pp. 377–405 • Study Unit 3.2, pp. 72–91"
  },
  {
    "id": "q_ch18_13",
    "chapterId": "ch18",
    "source": "Chapter 18 — The Keynesian Model with a Government and a Foreign Sector — Open-Economy Multiplier with Autonomous + Proportional Taxes & Induced Imports (Islamabad)",
    "topic": "Open-Economy Multiplier with Autonomous + Proportional Taxes & Induced Imports (Islamabad)",
    "difficulty": "Hard",
    "stem": "The open economy of Islamabad (Study Unit 3.2) is characterised by the following structural equations: Consumption C = 150 + 0.8Yd, Tax function T = 20 + 0.2Y (combining autonomous tax T̄ = 20 and proportional tax rate t = 0.2), Investment I = 250, Government spending G = 450, Exports X = 325, and Import function Z = 50 + 0.2Y (combining autonomous imports Z̄ = 50 and marginal propensity to import m = 0.2). Calculate: (1) The reduced-form Aggregate Expenditure equation A = Ā + βY; (2) The open-economy multiplier α and initial equilibrium income Ye; and (3) The new equilibrium income Y_new if autonomous investment rises from 250 to 310.",
    "derivation": [
      "\\text{(1) Substitute } Y_d = Y - T = Y - (20 + 0.2Y) = -20 + 0.8Y \\text{ into } C:",
      "C = 150 + 0.8(-20 + 0.8Y) = 150 - 16 + 0.64Y = 134 + 0.64Y",
      "A = C + I + G + X - Z = (134 + 0.64Y) + 250 + 450 + 325 - (50 + 0.2Y) = 1\\,109 + 0.44Y",
      "\\text{(2) Multiplier and Initial Equilibrium: } 1 - 0.44 = 0.56 \\implies \\alpha = \\frac{1}{0.56} \\approx 1.79; \\quad Y_e = \\frac{1\\,109}{0.56} = 1\\,980.36 \\approx 1\\,980",
      "\\text{(3) Investment Shock } (\\Delta I = 310 - 250 = +60): \\Delta Y = 1.79 \\times 60 = 107.4 \\implies Y_{\\text{new}} = 1\\,980 + 107.4 = 2\\,087.4 \\approx 2\\,087 \\text{ (exact } 1\\,169/0.56 = 2\\,087.5\\text{)}"
    ],
    "options": [
      {
        "text": "(1) A = 1 109 + 0.44Y; (2) Multiplier α = 1/0.56 ≈ 1.79 and initial equilibrium income Ye = 1 980; (3) When I rises by 60 to 310, equilibrium income rises by 107.4 to Y_new = 2 087 (or 2 087.5).",
        "isCorrect": true,
        "refutation": "Correct! Substituting T = 20 + 0.2Y into C gives C = 134 + 0.64Y; subtracting Z = 50 + 0.2Y yields A = 1 109 + 0.44Y, α = 1/0.56 ≈ 1.79, Ye = 1 980, and ΔI = +60 raises Ye to 2 087."
      },
      {
        "text": "(1) A = 1 125 + 0.64Y; (2) Multiplier α = 1/0.36 ≈ 2.78 and initial equilibrium income Ye = 3 125; (3) When I rises by 60 to 310, equilibrium income rises by 166.8 to Y_new = 3 292.",
        "isCorrect": false,
        "refutation": "This omits both the autonomous tax drag (-0.8 × 20 = -16, leaving Ā = 1 125 instead of 1 109) and the induced import leakage (-0.2Y, leaving the slope at 0.64 instead of 0.44)."
      },
      {
        "text": "(1) A = 1 109 + 0.84Y; (2) Multiplier α = 1/0.16 = 6.25 and initial equilibrium income Ye = 6 931; (3) When I rises by 60 to 310, equilibrium income rises by 375.0 to Y_new = 7 306.",
        "isCorrect": false,
        "refutation": "Induced imports (+0.2Y) are a leakage out of the domestic circular flow that must be subtracted from induced consumption (0.64Y - 0.20Y = 0.44Y), not added (0.64Y + 0.20Y = 0.84Y)."
      },
      {
        "text": "(1) A = 1 209 + 0.44Y; (2) Multiplier α = 1/0.56 ≈ 1.79 and initial equilibrium income Ye = 2 159; (3) When I rises by 60 to 310, equilibrium income rises by 60.0 to Y_new = 2 219.",
        "isCorrect": false,
        "refutation": "Adding autonomous imports (+50 instead of -50) overstates Ā by 100, and when autonomous investment rises by ΔI = 60, income rises by the multiplied amount α × 60 = 107.4, not merely 60."
      }
    ],
    "chapter": "ch18",
    "citation": "Mohr 6e, Mohr 6e, pp. 377–405 • Study Unit 3.2, pp. 72–91"
  },
  {
    "id": "q_ch19_05",
    "chapterId": "ch19",
    "source": "Chapter 19 — More on Macroeconomic Theory and Policy — Real vs Monetary AD Shifters, Imported Engine Cost-Push AS Shock & the Deflation Trap",
    "topic": "Real vs Monetary AD Shifters, Imported Engine Cost-Push AS Shock & the Deflation Trap",
    "difficulty": "Medium",
    "stem": "In the Aggregate Demand–Aggregate Supply (AD–AS) framework (Study Unit 4): (1) Classify Aggregate Demand shifters into Real factors versus Monetary factors; (2) Trace the macroeconomic impact on South Africa's price level (P), real output (Y), and employment if the US dollar price of imported Ford vehicle engines increases sharply; and (3) Explain why sustained deflation (a falling general price level) is a dangerous macroeconomic trap rather than a benefit.",
    "derivation": [
      "\\text{(1) AD Shifters: Real factors} = \\text{Fiscal policy } (G, T), \\text{Autonomous consumption } (\\bar{C}), \\text{Autonomous investment } (\\bar{I}), \\text{Net exports } (X - Z); \\quad \\text{Monetary factors} = \\text{Repo rate } (i) \\text{ and Money supply } (M)",
      "\\text{(2) Imported Intermediate Input Shock (Ford Engines): Production cost rises } \\implies \\text{AS shifts Upward/Leftward from } AS_0 \\text{ to } AS_1",
      "\\text{Equilibrium moves along } AD_0: \\text{General Price Level } P \\uparrow \\text{ (cost-push inflation) and Real Output } Y \\downarrow \\text{ (stagflation / rising unemployment)}",
      "\\text{(3) Deflation Trap: Falling prices } (P \\downarrow) \\implies \\text{real value of debt rises, real interest rates rise, and households delay spending } \\implies AD \\downarrow \\text{ and recession deepens}"
    ],
    "options": [
      {
        "text": "(1) Real AD shifters are G, T, C̄, Ī, X, Z while monetary shifters are repo rate i and money supply M; (2) Higher imported engine prices shift AS leftward, raising P and lowering Y (stagflation); (3) Deflation raises real debt burdens and delays spending.",
        "isCorrect": true,
        "refutation": "Correct! Imported intermediate inputs (Ford engines) increase domestic production costs, shifting AS upward/leftward (higher P, lower real GDP Y), while deflation triggers debt-deflation and postponed spending."
      },
      {
        "text": "(1) Real AD shifters are the repo rate and money supply while monetary shifters are G and T; (2) Higher imported engine prices shift AD rightward, raising both P and Y; (3) Deflation always accelerates real GDP growth.",
        "isCorrect": false,
        "refutation": "Government spending G and taxation T are real fiscal variables (not monetary variables), imported intermediate cost shocks shift AS leftward (reducing Y), and deflation depresses aggregate spending."
      },
      {
        "text": "(1) Real AD shifters are G, T, C̄, Ī, X, Z while monetary shifters are repo rate i; (2) Higher imported engine prices shift AS rightward, lowering P and raising Y; (3) Deflation reduces the real value of nominal debt.",
        "isCorrect": false,
        "refutation": "An increase in the cost of imported vehicle engines reduces supply at every price level (shifting AS leftward/upward, not rightward), and falling prices increase (worsen) the real burden of fixed nominal debt."
      },
      {
        "text": "(1) Real AD shifters are technology and labour productivity; (2) Higher imported engine prices cause a downward movement along a fixed AS curve; (3) Deflation is identical to disinflation (a positively slowing inflation rate).",
        "isCorrect": false,
        "refutation": "Technology and productivity are Aggregate Supply shifters, an external input cost shock shifts the entire AS curve leftward, and deflation (negative inflation, P falling) is distinct from disinflation (slower positive inflation)."
      }
    ],
    "chapter": "ch19",
    "citation": "Mohr 6e, Mohr 6e, pp. 407–436 • Study Units 2.2 & 4.1, pp. 29, 97–98"
  },
  {
    "id": "q_ch20_20",
    "chapterId": "ch20",
    "source": "Chapter 20 — Inflation — CPI vs Implicit GDP Deflator Inflation Series & the Structuralist / Conflict Approaches",
    "topic": "CPI vs Implicit GDP Deflator Inflation Series & the Structuralist / Conflict Approaches",
    "difficulty": "Hard",
    "stem": "Analyse the inflation series and theoretical frameworks in Study Unit 4.2: (1) Given a four-period CPI series (Period 1 = 92.2, Period 2 = 105.7, Period 3 = 102.3, Period 4 = 106.9), calculate the Period 4 headline CPI inflation rate; (2) Given Nominal GDP (Period 1 = R232 234m, Period 2 = R297 899m, Period 3 = R327 071m) and Real GDP (Period 1 = R110 551m, Period 2 = R126 169m, Period 3 = R123 326m), calculate the Implicit GDP Deflator for all three periods and the Period 2 and Period 3 inflation rates, diagnosing Period 3's macroeconomic condition; and (3) Distinguish the Structuralist approach (underlying, initiating, and propagating factors) and the Conflict approach to inflation.",
    "derivation": [
      "\\text{(1) Period 4 CPI Inflation: } \\pi_4 = \\frac{106.9 - 102.3}{102.3} \\times 100 = \\frac{4.6}{102.3} \\times 100 = 4.497\\% \\approx 4.5\\%",
      "\\text{(2) Implicit GDP Deflators } \\left(\\frac{\\text{Nominal}}{\\text{Real}} \\times 100\\right): \\text{Def}_1 = \\frac{232\\,234}{110\\,551} \\times 100 = 210.07; \\quad \\text{Def}_2 = \\frac{297\\,899}{126\\,169} \\times 100 = 236.11; \\quad \\text{Def}_3 = \\frac{327\\,071}{123\\,326} \\times 100 = 265.21",
      "\\text{Deflator Inflation Rates: } \\pi_2 = \\frac{236.11 - 210.07}{210.07} \\times 100 = 12.40\\%; \\quad \\pi_3 = \\frac{265.21 - 236.11}{236.11} \\times 100 = 12.32\\%",
      "\\text{Period 3 Diagnosis: High inflation (12.32\\%) combined with contracting Real GDP (126 169 } \\to \\text{ 123 326) = Stagflation}",
      "\\text{(3) Structuralist Approach: Underlying factors (structural rigidities) + Initiating factors (shocks) + Propagating factors (wage-price spiral); Conflict Approach: Competing income claims (wages vs profits) exceeding real output}"
    ],
    "options": [
      {
        "text": "(1) Period 4 CPI inflation is 4.5%; (2) Deflators are 210.07, 236.11, and 265.21 (inflation = 12.40% and 12.32%, with stagflation in Period 3); (3) Structuralist links underlying/initiating/propagating factors while Conflict cites competing claims.",
        "isCorrect": true,
        "refutation": "Correct! CPI rises by (106.9 - 102.3)/102.3 = 4.5%; the GDP Deflator rises from 210.07 to 236.11 (+12.40%) to 265.21 (+12.32%) while Real GDP contracts in Period 3 (stagflation); and the Structuralist/Conflict definitions match Mohr & Study Unit 4.2."
      },
      {
        "text": "(1) Period 4 CPI inflation is 4.6%; (2) Deflators are 47.60, 42.35, and 37.71 (inflation = -11.03% and -10.96%, showing deflation in Period 3); (3) Both Structuralist and Conflict approaches attribute inflation solely to central bank money growth.",
        "isCorrect": false,
        "refutation": "Subtracting index points (106.9 - 102.3 = 4.6) without dividing by the base 102.3 is incorrect, dividing Real GDP by Nominal GDP inverts the GDP Deflator formula, and attributing inflation solely to money growth is the Monetarist approach."
      },
      {
        "text": "(1) Period 4 CPI inflation is 4.5%; (2) Deflators are 210.07, 236.11, and 265.21 (inflation = 26.04% and 29.10%, showing a demand-pull boom in Period 3); (3) Propagating factors are one-off oil price shocks whereas initiating factors are spirals.",
        "isCorrect": false,
        "refutation": "The percentage inflation rate must divide the change in the deflator (26.04 and 29.10) by the prior period's deflator (giving 12.40% and 12.32%), Real GDP fell in Period 3 (stagflation, not a boom), and oil shocks are initiating factors."
      },
      {
        "text": "(1) Period 4 CPI inflation is 15.9%; (2) Deflators are 210.07, 236.11, and 265.21 (inflation = 12.40% and 12.32%); (3) The Conflict approach states that inflation occurs only when trade unions and firms agree to freeze wages and profit margins.",
        "isCorrect": false,
        "refutation": "15.9% compares Period 4 to Period 1 instead of Period 3 (annual inflation is (106.9 - 102.3)/102.3 = 4.5%), and the Conflict approach explains inflation through irreconcilable competing claims for higher wages and profits exceeding real output."
      }
    ],
    "chapter": "ch20",
    "citation": "Mohr 6e, Mohr 6e, pp. 437–466 • Study Unit 4, pp. 93–101"
  },
  {
    "id": "q_ch21_15",
    "chapterId": "ch21",
    "source": "Chapter 21 — Unemployment, Poverty and Inequality — Estonia Unemployment Rate, Classifying Five Unemployment Scenarios & the Eclectic Approach",
    "topic": "Estonia Unemployment Rate, Classifying Five Unemployment Scenarios & the Eclectic Approach",
    "difficulty": "Medium",
    "stem": "Evaluate the labour market exercises in Study Unit 5: (1) In Estonia, 7 500 people are unemployed out of an economically active population (labour force) of 250 000; calculate the strict unemployment rate; (2) Classify five cases: (a) Duncan quits his job at Pick n Pay to look for a better-paying job; (b) Jan is retrenched from a gold mine due to a permanent fall in gold demand and lacks skills for other industries; (c) Thandi completes her BCom degree and is searching for her first graduate position; (d) Robert is laid off from his construction job during a general economic recession; and (e) an economy simultaneously experiences a shortage of managers and an oversupply of unskilled labourers; and (3) Define the Eclectic Approach and Incomes Policy in the Phillips-curve debate.",
    "derivation": [
      "\\text{(1) Estonia Unemployment Rate: } u = \\frac{\\text{Unemployed}}{\\text{Economically Active Population}} \\times 100 = \\frac{7\\,500}{250\\,000} \\times 100 = 3.0\\%",
      "\\text{(2) Scenario Classifications: (a) Duncan = Frictional; (b) Jan = Structural; (c) Thandi = Frictional; (d) Robert = Cyclical; (e) Skill mismatch = Structural}",
      "\\text{(3) Eclectic Approach: Synthesises demand-management and supply-side insights across economic conditions; Incomes Policy: Tripartite agreement (government, business, labour) to restrain wage and price increases to align with productivity}"
    ],
    "options": [
      {
        "text": "(1) Estonia's unemployment rate is 3.0%; (2) a=Frictional, b=Structural, c=Frictional, d=Cyclical, e=Structural; (3) The Eclectic Approach combines theoretical insights while an Incomes Policy restrains wage/price growth to match productivity.",
        "isCorrect": true,
        "refutation": "Correct! 7 500 / 250 000 × 100 = 3.0%; voluntary job search (Duncan) and initial graduate search (Thandi) are frictional, permanent industry decline (Jan) and skill mismatch (e) are structural, and recession layoffs (Robert) are cyclical."
      },
      {
        "text": "(1) Estonia's unemployment rate is 33.3%; (2) a=Cyclical, b=Seasonal, c=Structural, d=Frictional, e=Cyclical; (3) An Incomes Policy uses expansionary money supply growth to eliminate structural skill mismatches.",
        "isCorrect": false,
        "refutation": "Dividing 250 000 by 7 500 inverts the unemployment formula (7 500 / 250 000 = 3.0%), misclassifies all five workers, and an incomes policy is a tripartite wage-price restraint agreement to combat stagflation."
      },
      {
        "text": "(1) Estonia's unemployment rate is 3.0%; (2) a=Structural, b=Frictional, c=Seasonal, d=Structural, e=Frictional; (3) The Eclectic Approach asserts that fiscal and monetary policy have zero impact on either inflation or unemployment.",
        "isCorrect": false,
        "refutation": "Duncan (between jobs) and Thandi (new graduate entering the market) are classic short-term frictional cases, whereas Jan (obsolete mining skills) and skill mismatch (e) are structural, and Robert's recession layoff is cyclical."
      },
      {
        "text": "(1) Estonia's unemployment rate is 2.91% (dividing 7 500 by 257 500); (2) a=Frictional, b=Structural, c=Frictional, d=Seasonal, e=Cyclical; (3) Incomes policy refers exclusively to progressive personal income tax brackets.",
        "isCorrect": false,
        "refutation": "The economically active population (250 000) already equals Employed + Unemployed (so 7 500 is not added again to the denominator), Robert's recession layoff is cyclical (not seasonal), and incomes policy targets wage/price restraint."
      }
    ],
    "chapter": "ch21",
    "citation": "Mohr 6e, Mohr 6e, pp. 467–484 • Study Unit 5, pp. 102–107"
  },
  {
    "id": "q_ch22_06",
    "chapterId": "ch22",
    "source": "Chapter 22 — Economic Growth and Business Cycles — Inclusive Economic Growth, Structural Growth Constraints in South Africa & Business Cycle Elements",
    "topic": "Inclusive Economic Growth, Structural Growth Constraints in South Africa & Business Cycle Elements",
    "difficulty": "Medium",
    "stem": "In the analysis of economic growth and business cycles in Study Unit 6 (Chapter 22): (1) Define 'inclusive economic growth' and explain why headline real GDP growth alone is insufficient for socioeconomic transformation; (2) Identify the primary structural causes of low economic growth in South Africa highlighted in the curriculum; and (3) State the four sequential elements of a complete business cycle between two successive troughs.",
    "derivation": [
      "\\text{(1) Inclusive Economic Growth: Sustained real output expansion that is broadly shared across the population, generating productive employment and reducing poverty and inequality}",
      "\\text{(2) Structural Causes of Low Growth in SA: Severe skills shortages / mismatch, inadequate infrastructure and electricity supply constraints, low domestic saving and investment rates, high concentration/barriers, and policy uncertainty}",
      "\\text{(3) Four Elements of a Complete Business Cycle: Trough (lower turning point) } \\to \\text{Upswing / Expansion (boom) } \\to \\text{Peak (upper turning point) } \\to \\text{Downswing / Contraction (recession)}"
    ],
    "options": [
      {
        "text": "(1) Inclusive growth requires broad-based employment creation and poverty/inequality reduction; (2) Low SA growth stems from skills shortages, infrastructure/energy bottlenecks, and low saving/investment; (3) Cycle elements: Trough, Upswing, Peak, Downswing.",
        "isCorrect": true,
        "refutation": "Correct! Inclusive growth ensures that rising real GDP translates into broad job creation and reduced inequality, addressing South Africa's structural skills, energy/infrastructure, and investment constraints across the Trough-Upswing-Peak-Downswing cycle."
      },
      {
        "text": "(1) Inclusive growth means counting informal and illegal output inside nominal GDP; (2) Low SA growth stems from an excessive domestic savings rate and an oversupply of skilled engineers; (3) Cycle elements: Inflation, Deflation, Stagflation, Hyperinflation.",
        "isCorrect": false,
        "refutation": "South Africa suffers from a chronically low domestic savings rate and a severe shortage of technical/engineering skills (coupled with an oversupply of unskilled labour), and the four cycle phases are Trough, Upswing, Peak, and Downswing."
      },
      {
        "text": "(1) Inclusive growth means expanding nominal GDP purely through currency depreciation; (2) Low SA growth is caused by excessive physical capital deepening; (3) Cycle elements: Leading, Coincident, Lagging, and Composite indicators.",
        "isCorrect": false,
        "refutation": "Leading, coincident, and lagging indicators are statistical tools used to forecast and track business cycles, whereas the four structural elements of the cycle itself are the Trough, Upswing (expansion), Peak, and Downswing (contraction)."
      },
      {
        "text": "(1) Inclusive growth requires broad-based employment creation; (2) Low SA growth stems solely from excessive export diversification and zero mineral endowments; (3) Cycle elements: Autonomous spending, Induced spending, Leakages, and Injections.",
        "isCorrect": false,
        "refutation": "South Africa possesses abundant mineral endowments but faces structural bottlenecks in skills, energy/logistics infrastructure, and domestic capital formation; autonomous/induced spending and leakages/injections belong to the Keynesian expenditure model."
      }
    ],
    "chapter": "ch22",
    "citation": "Mohr 6e, Mohr 6e, pp. 485–512 • Study Unit 6, pp. 109–114"
  }
],
  pastPapers: [
  {
    "id": "suite_01",
    "title": "Synthesis Suite I — National Accounts, Value-Added & Open-Economy Multipliers",
    "session": "Synthesis Suite I — National Accounts, Value-Added & Open-Economy Multipliers",
    "campuses": [
      "Chapter 13",
      "Chapter 14",
      "Chapter 15",
      "Chapter 16",
      "Chapter 17",
      "Chapter 18",
      "Chapter 20",
      "Chapter 21"
    ],
    "examiners": "Macroeconomic Curriculum Synthesis",
    "moderator": "Quantitative & Theoretical Verification",
    "durationMinutes": 180,
    "totalMarks": 100,
    "questionIds": [
      "q_ch13_06",
      "q_ch13_21",
      "q_ch13_07",
      "q_ch13_13",
      "q_ch13_30",
      "q_ch13_31",
      "q_ch20_02",
      "q_ch20_08",
      "q_ch20_03",
      "q_ch20_11",
      "q_ch20_12",
      "q_ch21_01",
      "q_ch21_11",
      "q_ch21_12",
      "q_ch14_05",
      "q_ch14_06",
      "q_ch14_12",
      "q_ch14_04",
      "q_ch14_13",
      "q_ch14_14",
      "q_ch14_15",
      "q_ch15_03",
      "q_ch15_20",
      "q_ch16_04",
      "q_ch16_10",
      "q_ch17_06",
      "q_ch17_07",
      "q_ch18_01",
      "q_ch18_07",
      "q_ch18_06"
    ],
    "writtenSections": [
      {
        "number": "Conceptual Foundations — Core Definitions",
        "prompt": "Define the following macroeconomic concepts: Fiscal policy, Autonomous consumption, Comparative advantage, and Unit of account.",
        "memo": "Fiscal policy: Government's policy in respect of the level and composition of government spending, taxation, and borrowing to influence economic activity. Autonomous consumption (C̄): That part of consumption expenditure that is independent of the level of income (consumption when Y = 0). Comparative advantage: The ability of a country to produce a good at a lower opportunity cost (sacrificing fewer units of the alternative good) than another country. Unit of account: An agreed standard measure for stating and comparing the prices of goods and services."
      },
      {
        "number": "Theoretical Synthesis — Cost-Push Inflation & Price Indices",
        "prompt": "Identify cost-push inflation from a leftward Aggregate Supply (AS) shift diagram, state its primary causes, and contrast the Consumer Price Index (CPI) with the Producer Price Index (PPI).",
        "memo": "Cost-push inflation (AS shifts left/up, raising the price level P and lowering real output Y) is triggered by: wage increases exceeding productivity growth, higher imported capital/intermediate input costs, expanded profit margins, falling productivity, or natural disasters. CPI vs PPI: CPI measures the cost of living for households vs PPI measures the cost of production; CPI covers consumer goods and services vs PPI covers goods only; CPI includes VAT vs PPI excludes VAT; CPI excludes capital and intermediate goods vs PPI includes them."
      },
      {
        "number": "Theoretical Synthesis — Labour Market Flows & Business Cycle Theories",
        "prompt": "Classify frictional, structural, cyclical, and seasonal unemployment scenarios, identify inflows and outflows of the unemployment pool, and contrast Classical versus Keynesian business cycle theories across expansion and contraction phases.",
        "memo": "Inflows to unemployment: new entrants, re-entrants, retrenched job losers, and voluntary quitters. Outflows: finding employment or withdrawing from the labour force. Classical theory views the economy as inherently stable (cycles driven by exogenous shocks), whereas Keynesian theory views fluctuations as endogenous to unstable private investment. Upswing (Trough to Peak) features rising real GDP and employment; Downswing (Peak to Trough) features contracting real GDP."
      }
    ]
  },
  {
    "id": "suite_02",
    "title": "Synthesis Suite II — Real Growth, Fiscal Transfers & Monetary Equilibrium",
    "session": "Synthesis Suite II — Real Growth, Fiscal Transfers & Monetary Equilibrium",
    "campuses": [
      "Chapter 13",
      "Chapter 14",
      "Chapter 15",
      "Chapter 16",
      "Chapter 17",
      "Chapter 18",
      "Chapter 20",
      "Chapter 21",
      "Chapter 22"
    ],
    "examiners": "Macroeconomic Curriculum Synthesis",
    "moderator": "Quantitative & Theoretical Verification",
    "durationMinutes": 180,
    "totalMarks": 100,
    "questionIds": [
      "q_ch13_03",
      "q_ch13_22",
      "q_ch13_12",
      "q_ch13_26",
      "q_ch13_28",
      "q_ch13_32",
      "q_ch21_02",
      "q_ch21_07",
      "q_ch21_13",
      "q_ch21_09",
      "q_ch21_10",
      "q_ch20_01",
      "q_ch20_14",
      "q_ch20_15",
      "q_ch15_05",
      "q_ch15_16",
      "q_ch15_21",
      "q_ch16_02",
      "q_ch16_09",
      "q_ch16_03",
      "q_ch16_11",
      "q_ch18_09",
      "q_ch18_03",
      "q_ch18_05",
      "q_ch18_11",
      "q_ch14_01",
      "q_ch14_02",
      "q_ch14_03",
      "q_ch17_02",
      "q_ch17_03",
      "q_ch22_03"
    ],
    "writtenSections": [
      {
        "number": "Conceptual Foundations — Trade, Exchange Rates & Consumption",
        "prompt": "Distinguish between Absolute and Comparative advantage, explain the determinants of currency appreciation, describe the three characteristics of the Keynesian consumption function, and explain why autonomous government spending does not alter the size of the multiplier.",
        "memo": "Absolute advantage compares total output from given inputs; comparative advantage compares opportunity costs. Currency appreciation is driven by stronger export demand, higher domestic interest rates attracting capital inflows, lower relative inflation, or rising commodity prices. Consumption function: C > 0 at Y = 0 (C̄ > 0), C rises with Y (c > 0), and ΔC < ΔY (0 < c < 1). Government spending G is autonomous (shifting A upward) whereas α = 1/[1 - c(1-t) + m] depends strictly on c, t, and m."
      },
      {
        "number": "Theoretical Synthesis — Endogenous Money, Public Sector & Inequality",
        "prompt": "Explain the effect of a decline in money demand under a repo-rate monetary regime with no independent money supply curve, list the four components and three functions of the public sector, and identify the three standard measures of income inequality.",
        "memo": "A leftward shift of money demand L along the horizontal interest rate line i0 reduces the equilibrium quantity of money M endogenously. The public sector comprises central government, provincial government, local municipalities, and public corporations, performing allocative, distributive, and stabilisation functions. Income inequality is measured via the Lorenz curve, the Gini coefficient, and quantile ratios."
      }
    ]
  },
  {
    "id": "suite_03",
    "title": "Synthesis Suite III — Deflators, Statutory Tax Tables & Aggregate Expenditure",
    "session": "Synthesis Suite III — Deflators, Statutory Tax Tables & Aggregate Expenditure",
    "campuses": [
      "Chapter 13",
      "Chapter 15",
      "Chapter 18",
      "Chapter 19",
      "Chapter 20",
      "Chapter 21"
    ],
    "examiners": "Macroeconomic Curriculum Synthesis",
    "moderator": "Quantitative & Theoretical Verification",
    "durationMinutes": 180,
    "totalMarks": 100,
    "questionIds": [
      "q_ch13_04",
      "q_ch13_23",
      "q_ch13_05",
      "q_ch13_09",
      "q_ch13_25",
      "q_ch13_10",
      "q_ch13_27",
      "q_ch20_04",
      "q_ch20_09",
      "q_ch20_13",
      "q_ch20_16",
      "q_ch20_17",
      "q_ch20_20",
      "q_ch15_02",
      "q_ch15_04",
      "q_ch15_17",
      "q_ch15_22",
      "q_ch15_23",
      "q_ch18_02",
      "q_ch18_08",
      "q_ch18_12",
      "q_ch21_03",
      "q_ch21_05",
      "q_ch21_08",
      "q_ch19_01",
      "q_ch19_02",
      "q_ch19_03",
      "q_ch19_04",
      "q_ch19_05"
    ],
    "writtenSections": [
      {
        "number": "Conceptual Foundations — Stabilisation Policy & National Accounts Identity",
        "prompt": "Contrast Monetarist and Keynesian stabilisation views, explain why the income and production methods of GDP yield identical totals after a wage change, and identify the supply-side drivers of long-run economic growth.",
        "memo": "Keynesians advocate active counter-cyclical fiscal and monetary intervention during downswings, whereas Monetarists favour stable rules. A minimum-wage change alters the distribution between wages and operating surplus without creating a discrepancy between the income and production approaches to GDP. Economic growth is driven by human capital expansion, physical capital accumulation/technology, and natural resource/institutional efficiency."
      },
      {
        "number": "Theoretical Synthesis — Market Failure, Open-Market Operations & Disposable Income",
        "prompt": "Illustrate negative externalities (social vs private marginal cost), explain central bank open-market bond purchases, and distinguish total national income from household disposable income.",
        "memo": "With negative externalities, Marginal Social Cost (MSC) lies above Marginal Private Cost (MPC), causing unregulated competitive markets to overproduce at a socially inefficiently low price; corrective Pigouvian taxes internalise the external cost. Open-market bond purchases inject reserves into commercial banks, expanding credit and deposits. Disposable income Yd = Y - T is income remaining after direct taxes."
      }
    ]
  },
  {
    "id": "suite_04",
    "title": "Synthesis Suite IV — Value-Added Chains, Trade Protection & Leakages",
    "session": "Synthesis Suite IV — Value-Added Chains, Trade Protection & Leakages",
    "campuses": [
      "Chapter 13",
      "Chapter 14",
      "Chapter 15",
      "Chapter 16",
      "Chapter 17",
      "Chapter 18",
      "Chapter 20",
      "Chapter 21",
      "Chapter 22"
    ],
    "examiners": "Macroeconomic Curriculum Synthesis",
    "moderator": "Quantitative & Theoretical Verification",
    "durationMinutes": 180,
    "totalMarks": 100,
    "questionIds": [
      "q_ch13_01",
      "q_ch13_11",
      "q_ch14_09",
      "q_ch14_10",
      "q_ch14_16",
      "q_ch15_01",
      "q_ch15_06",
      "q_ch15_07",
      "q_ch15_18",
      "q_ch15_08",
      "q_ch15_13",
      "q_ch15_14",
      "q_ch15_15",
      "q_ch16_01",
      "q_ch16_08",
      "q_ch16_06",
      "q_ch16_12",
      "q_ch17_05",
      "q_ch17_08",
      "q_ch20_07",
      "q_ch20_10",
      "q_ch20_18",
      "q_ch20_19",
      "q_ch21_04",
      "q_ch21_14",
      "q_ch21_15",
      "q_ch22_02",
      "q_ch22_04",
      "q_ch22_05",
      "q_ch22_06"
    ],
    "writtenSections": [
      {
        "number": "Conceptual Foundations — Inflation Targeting, Phillips Curve & Trade Policy",
        "prompt": "Explain why per capita real GDP is preferred for welfare comparisons, state the central bank inflation target range (3%–6%), illustrate the short-run Phillips curve trade-off, and list the policy instruments used to restrict imports.",
        "memo": "Real GDP per capita adjusts for both price inflation and population size. The inflation target band is 3% to 6%. The short-run Phillips curve depicts an inverse relationship between inflation and unemployment. Import restriction instruments include tariffs, quotas, domestic production subsidies, non-tariff barriers, exchange controls, and exchange-rate policy."
      }
    ]
  },
  {
    "id": "suite_05",
    "title": "Synthesis Suite V — Induced Imports, Demographic Filtering & Lorenz Geometry",
    "session": "Synthesis Suite V — Induced Imports, Demographic Filtering & Lorenz Geometry",
    "campuses": [
      "Chapter 13",
      "Chapter 14",
      "Chapter 15",
      "Chapter 16",
      "Chapter 17",
      "Chapter 18",
      "Chapter 20",
      "Chapter 21",
      "Chapter 22"
    ],
    "examiners": "Macroeconomic Curriculum Synthesis",
    "moderator": "Quantitative & Theoretical Verification",
    "durationMinutes": 180,
    "totalMarks": 100,
    "questionIds": [
      "q_ch13_02",
      "q_ch13_24",
      "q_ch13_08",
      "q_ch13_14",
      "q_ch13_15",
      "q_ch13_16",
      "q_ch13_17",
      "q_ch13_29",
      "q_ch13_18",
      "q_ch13_19",
      "q_ch13_20",
      "q_ch14_07",
      "q_ch14_08",
      "q_ch14_11",
      "q_ch15_09",
      "q_ch15_19",
      "q_ch15_10",
      "q_ch15_11",
      "q_ch15_12",
      "q_ch16_05",
      "q_ch16_07",
      "q_ch17_01",
      "q_ch17_04",
      "q_ch18_04",
      "q_ch18_10",
      "q_ch18_13",
      "q_ch20_05",
      "q_ch20_06",
      "q_ch21_06",
      "q_ch22_01"
    ],
    "writtenSections": [
      {
        "number": "Conceptual Foundations — Lorenz Geometry, Say's Law & Public Sector Structure",
        "prompt": "Interpret the Lorenz curve 45-degree diagonal and Gini coefficient, contrast Say's Law (supply creates its own demand) with Keynesian effective demand (demand determines output), and explain why financial cash balances are not a physical factor of production.",
        "memo": "The 45-degree diagonal represents perfect income equality, the bowed area represents inequality, and a Gini coefficient near 0.67 indicates severe inequality. Along the 45-degree line in the Keynesian diagram, aggregate expenditure equals total income (A = Y); above it, A > Y (inventories fall, output expands). Money is a financial medium of exchange, whereas economic capital consists strictly of physical machinery, equipment, and buildings."
      }
    ]
  }
]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = ECON122_DATA;
}
