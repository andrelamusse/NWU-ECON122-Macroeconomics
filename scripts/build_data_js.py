import json
import os
import re

ROOT = r"c:\NWU\SM2\ECON122"
OUT_JS = os.path.join(ROOT, "data.js")

CHAPTERS = [
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
]

print(f"Prepared {len(CHAPTERS)} chapters.")


# Psychometrically Verified Question Bank (Chapters 13 to 22 + Past Paper & Tutorial Questions)
# Invariants enforced:
# 1. All 4 options have max/min char length ratio <= 1.25
# 2. Each option has a decoupled `refutation` field (no hardcoded "Option B is wrong" references)
# 3. Companion numerical questions embed full tables/context inside `stem`

QUESTIONS = [
    # --- CHAPTER 13 ---
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
                "isCorrect": True,
                "refutation": "Correct! L'Oréal's value added is sales (R160 000) minus intermediate inputs from Dr Ray (R45 000) = R115 000, and total GDP equals final sales of R240 000."
            },
            {
                "text": "L'Oréal adds R160 000 in value, yielding a total final GDP of R445 000.",
                "isCorrect": False,
                "refutation": "This sums gross sales across all three firms (45 000 + 160 000 + 240 000 = R445 000), which double counts intermediate inputs instead of subtracting R45 000."
            },
            {
                "text": "L'Oréal adds R68 000 in value, yielding a total final GDP of R150 000.",
                "isCorrect": False,
                "refutation": "R68 000 is only L'Oréal's residual profit (115 000 - 30 000 - 14 000 - 3 000) rather than its full value added including wages, rent, and interest."
            },
            {
                "text": "L'Oréal adds R115 000 in value, yielding a total final GDP of R400 000.",
                "isCorrect": False,
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
                "isCorrect": True,
                "refutation": "Correct! Subtracting depreciation (5 500) gives NDPmp = 144 500, and subtracting VAT (14 000) while adding subsidies (25 000) gives GDPfc = 161 000."
            },
            {
                "text": "NDP at market prices is R144 500 million and GDP at factor cost is R139 000 million.",
                "isCorrect": False,
                "refutation": "R139 000 million results from inverting the tax and subsidy signs (150 000 + 14 000 - 25 000); moving to factor cost requires subtracting VAT and adding subsidies."
            },
            {
                "text": "NDP at market prices is R155 500 million and GDP at factor cost is R161 000 million.",
                "isCorrect": False,
                "refutation": "R155 500 million adds depreciation (150 000 + 5 500) instead of subtracting consumption of fixed capital when converting from Gross to Net product."
            },
            {
                "text": "NDP at market prices is R135 000 million and GDP at factor cost is R152 500 million.",
                "isCorrect": False,
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
                "isCorrect": True,
                "refutation": "Correct! GDPmp = 265 950 so GDEmp = 265 950 - 20 000 + 10 000 = R255 950, and NI = 293 250 - 3 200 + 35 200 - 125 600 = R199 650."
            },
            {
                "text": "GDE at market prices equals R275 950 and National Income equals R199 650.",
                "isCorrect": False,
                "refutation": "R275 950 adds net exports (+20 000 - 10 000) to GDPmp instead of subtracting exports and adding imports to isolate domestic expenditure GDE."
            },
            {
                "text": "GDE at market prices equals R255 950 and National Income equals R380 450.",
                "isCorrect": False,
                "refutation": "R380 450 inverts primary factor flows by adding profits paid to foreign UK Airlines (+125 600) and subtracting SA cricket salaries earned abroad (-35 200)."
            },
            {
                "text": "GDE at market prices equals R310 550 and National Income equals R172 350.",
                "isCorrect": False,
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
                "isCorrect": True,
                "refutation": "Correct! Working backwards from NI (870 760) adds depreciation (+11 100) and foreign factor payments (+120 800) and subtracts factor receipts (-234 000) to get 768 660."
            },
            {
                "text": "GDP at factor cost is 994 060 and GDE at market prices is 1 041 160.",
                "isCorrect": False,
                "refutation": "994 060 fails to reverse signs when moving backwards from NI to GDP, adding factor income from abroad (+234 000) instead of subtracting it."
            },
            {
                "text": "GDP at factor cost is 768 660 and GDE at market prices is 943 560.",
                "isCorrect": False,
                "refutation": "943 560 adds net exports (+553 200 - 489 300) to GDPmp (879 660) instead of subtracting exports and adding imports to find GDEmp."
            },
            {
                "text": "GDP at factor cost is 784 160 and GDE at market prices is 831 260.",
                "isCorrect": False,
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
                "isCorrect": True,
                "refutation": "Correct! By national accounting identity, total value added equals total factor income (Wages + Rent + Interest + Profit); a higher wage share simply alters the split between wages and operating surplus."
            },
            {
                "text": "GDP via the income method will be exactly 8% higher than GDP via the production method.",
                "isCorrect": False,
                "refutation": "A rise in minimum wages redistributes value added between labour wages and firm profits (or raises output prices in both methods equally), so the two methods cannot diverge."
            },
            {
                "text": "GDP via the production method will exceed the income method due to intermediate input costs.",
                "isCorrect": False,
                "refutation": "The production method subtracts intermediate inputs at every stage to isolate net value added, which is identically equal to total primary factor incomes."
            },
            {
                "text": "GDP via the income method will be lower because higher wages reduce corporate tax revenues.",
                "isCorrect": False,
                "refutation": "Both methods measure the identical domestic production total; changes in factor shares between wages and profits leave the accounting identity intact."
            }
        ]
    },
    # --- CHAPTER 14 ---
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
                "isCorrect": True,
                "refutation": "Correct! M1 = 52 000 + 425 000 = 477 000; M2 adds short-term (215 000) and medium-term (190 000) deposits to get 882 000; M3 adds long-term deposits (125 000) to get 1 007 000."
            },
            {
                "text": "M1 is R425 000 million, M2 is R692 000 million, and M3 is R1 007 000 million.",
                "isCorrect": False,
                "refutation": "R425 000 million omits notes and coins in circulation (52 000), and R692 000 million omits medium-term deposits (190 000) from M2."
            },
            {
                "text": "M1 is R477 000 million, M2 is R692 000 million, and M3 is R882 000 million.",
                "isCorrect": False,
                "refutation": "R692 000 million includes only short-term deposits in M2 (omitting medium-term deposits of 190 000), which shifts M2 into the M3 slot."
            },
            {
                "text": "M1 is R692 000 million, M2 is R882 000 million, and M3 is R955 000 million.",
                "isCorrect": False,
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
                "isCorrect": True,
                "refutation": "Correct! M1 = 72 500 + 438 000 = 510 500, and subtracting M1 (510 500) and short-term deposits (265 000) from M2 (1 015 500) yields R240 000 million."
            },
            {
                "text": "M1 equals R510 500 million and medium-term deposits equal R362 500 million.",
                "isCorrect": False,
                "refutation": "R362 500 million forgets to subtract notes and coins (72 500) and mistakenly subtracts long-term deposits (142 500) which belong to M3, not M2."
            },
            {
                "text": "M1 equals R438 000 million and medium-term deposits equal R312 500 million.",
                "isCorrect": False,
                "refutation": "This omits notes and coins (72 500) from M1, which then inflates the calculated residual for medium-term deposits by R72 500 million."
            },
            {
                "text": "M1 equals R510 500 million and medium-term deposits equal R97 500 million.",
                "isCorrect": False,
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
                "isCorrect": True,
                "refutation": "Correct! A lower repo rate shifts the horizontal interest rate line downward, inducing borrowers to demand more bank credit and expanding the endogenous quantity of money."
            },
            {
                "text": "The vertical money supply curve shifts right while the demand for money curve shifts left.",
                "isCorrect": False,
                "refutation": "In the endogenous model there is no independent vertical money supply curve, and a change in the interest rate causes a movement along the money demand curve, not a shift."
            },
            {
                "text": "Market interest rates rise and the quantity of speculative passive money balances contracts.",
                "isCorrect": False,
                "refutation": "Lowering the repo rate reduces the cost of accommodation credit to commercial banks, which lowers (not raises) market interest rates and increases quantity of money demanded."
            },
            {
                "text": "The liquidity preference curve shifts upward while the equilibrium money stock stays fixed.",
                "isCorrect": False,
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
                "isCorrect": True,
                "refutation": "Correct! Goods and services are produced by real factors of production (land, labour, physical capital, entrepreneurship); money is a financial medium of exchange, not a factor of production."
            },
            {
                "text": "Yes, money is the most important factor of production because it finances all investment.",
                "isCorrect": False,
                "refutation": "Banknotes and deposits cannot physically manufacture goods; confusing financial capital (money) with physical capital (machinery and buildings) is a classic fallacy."
            },
            {
                "text": "Yes, money is classified alongside physical machinery as part of the capital factor stock.",
                "isCorrect": False,
                "refutation": "In economics, 'capital' as a factor of production refers strictly to tangible man-made means of production (tools, machines, factories), never to money."
            },
            {
                "text": "No, money is classified as a factor of production only when held by the central bank.",
                "isCorrect": False,
                "refutation": "Money is never a factor of production regardless of whether it is held by households, firms, commercial banks, or the South African Reserve Bank."
            }
        ]
    },
    # --- CHAPTER 15 ---
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
                "isCorrect": True,
                "refutation": "Correct! Tax before rebate is 75 000 + 0.40(75 000) = R105 000; subtracting the R10 000 rebate gives R95 000 (22.35% of R425 000), while the bracket marginal rate is 40%."
            },
            {
                "text": "Net tax payable is R105 000, the effective tax rate is 24.71%, and the marginal rate is 40%.",
                "isCorrect": False,
                "refutation": "R105 000 and 24.71% represent the gross tax liability before deducting the mandatory R10 000 primary tax rebate available to all individual taxpayers."
            },
            {
                "text": "Net tax payable is R160 000, the effective tax rate is 37.65%, and the marginal rate is 40%.",
                "isCorrect": False,
                "refutation": "R160 000 erroneously applies the 40% marginal rate to the entire R425 000 income (170 000 - 10 000) instead of only the R75 000 excess above R350 000."
            },
            {
                "text": "Net tax payable is R95 000, the effective tax rate is 40.00%, and the marginal rate is 22.35%.",
                "isCorrect": False,
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
        "stem": "Thabiso Lebotse (aged 24) starts his first job as a Junior Lecturer earning R32 000 per month (R384 000 per year). The statutory SARS tax bracket for R321 601 – R445 100 is 'R67 144 + 31% of the amount over R321 600', with a Primary Rebate of R14 958 (and Secondary Rebate of R8 199 for ages 65+). Calculate his total annual tax payable after rebate and his effective tax rate.",
        "derivation": "Y = 32\\,000 \\times 12 = \\text{R}384\\,000. \\quad T_{\\text{gross}} = 67\\,144 + 0.31(384\\,000 - 321\\,600) = 67\\,144 + 19\\,344 = \\text{R}86\\,488. \\\\ T_{\\text{net}} = 86\\,488 - 14\\,958 = \\text{R}71\\,530. \\quad \\text{ATR} = \\frac{71\\,530}{384\\,000}\\times 100 = 18.63\\%.",
        "options": [
            {
                "text": "Total net tax payable is R71 530 and his effective tax rate is 18.63% (22.52% pre-rebate).",
                "isCorrect": True,
                "refutation": "Correct! Annual income is R384 000; gross tax is 67 144 + 0.31(62 400) = R86 488; subtracting the R14 958 primary rebate yields R71 530 (18.63% effective rate)."
            },
            {
                "text": "Total net tax payable is R63 331 and his effective tax rate is 16.49% after all rebates.",
                "isCorrect": False,
                "refutation": "R63 331 mistakenly subtracts the R8 199 secondary rebate as well, which only applies to taxpayers aged 65 years and older."
            },
            {
                "text": "Total net tax payable is R104 082 and his effective tax rate is 27.10% after the rebate.",
                "isCorrect": False,
                "refutation": "R104 082 applies the 31% marginal rate to the entire R384 000 salary (119 040 - 14 958) instead of only the R62 400 exceeding R321 600."
            },
            {
                "text": "Total net tax payable is R52 186 and his effective tax rate is 13.59% on annual salary.",
                "isCorrect": False,
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
                "isCorrect": True,
                "refutation": "Correct! Excess above R673 000 is R152 000; 39% of R152 000 is R59 280; adding R179 147 gives R238 427 gross tax, or R221 192 after the R17 235 primary rebate."
            },
            {
                "text": "Tax is R221 192 after rebate (R238 427 before rebate) with a 26.81% marginal tax rate.",
                "isCorrect": False,
                "refutation": "26.81% (221 192 / 825 000) is the effective (average) tax rate, whereas the marginal tax rate on the next Rand earned in this bracket is 39%."
            },
            {
                "text": "Tax is R304 515 after rebate (R321 750 before rebate) with a 39% marginal tax rate.",
                "isCorrect": False,
                "refutation": "R321 750 multiplies the entire R825 000 income by 39% instead of applying 39% only to the R152 000 above the R673 000 bracket threshold."
            },
            {
                "text": "Tax is R255 662 after rebate (R238 427 before rebate) with a 41% marginal tax rate.",
                "isCorrect": False,
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
                "isCorrect": True,
                "refutation": "Correct! Because the polluting firm does not pay for the external damage inflicted on society, its MPC curve lies below MSC, leading to overproduction (Q1 > Q2) and deadweight loss."
            },
            {
                "text": "Firms include external pollution costs, pushing private marginal cost above social cost (MPC > MSC).",
                "isCorrect": False,
                "refutation": "With a negative production externality, Marginal Social Cost equals Marginal Private Cost plus Marginal External Cost (MSC = MPC + MEC), so MSC lies vertically above MPC."
            },
            {
                "text": "Consumers overvalue the chemical product, shifting the social benefit curve above demand (MSB > MPB).",
                "isCorrect": False,
                "refutation": "A shift in social benefit relative to private demand describes a consumption externality, whereas industrial pollution is a negative production externality affecting cost curves."
            },
            {
                "text": "Government subsidies force chemical firms to price output above the socially optimal price (P1 > P2).",
                "isCorrect": False,
                "refutation": "In an unregulated market with negative externalities, the market price P1 is too low (P1 < P2) because pollution costs are omitted from market pricing."
            }
        ]
    },
    # --- CHAPTER 16 ---
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
                "isCorrect": True,
                "refutation": "Correct! Spain sacrifices only 0.67 kg of olives per kg of tobacco (vs 1 kg in Greece), while Greece sacrifices only 1 kg of tobacco per kg of olives (vs 1.5 kg in Spain)."
            },
            {
                "text": "Greece has comparative advantage in both goods because 300 kg exceeds 100 kg and 150 kg.",
                "isCorrect": False,
                "refutation": "Producing more of both goods (300 vs 100 and 300 vs 150) gives Greece an absolute advantage in both, but one country can never hold a comparative advantage in both goods."
            },
            {
                "text": "Spain has comparative advantage in olives (1.5 > 1 tobacco) and Greece in tobacco (1 > 0.67 olive).",
                "isCorrect": False,
                "refutation": "Comparative advantage belongs to the producer with the LOWER opportunity cost, not the higher opportunity cost."
            },
            {
                "text": "Neither country holds a comparative advantage because Greece's opportunity cost ratio is 1:1.",
                "isCorrect": False,
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
                "isCorrect": True,
                "refutation": "Correct! Australia gives up 6 bottles of sunscreen per surfboard compared to 8 in the USA, and 50 × US$1.50 × 1.70 = AUS$127.50."
            },
            {
                "text": "The USA has relative advantage in surfboards (producing 200 vs 150); 50 bottles cost AUS$127.50.",
                "isCorrect": False,
                "refutation": "200 vs 150 surfboards is the USA's absolute advantage; relative (comparative) advantage is determined by lower opportunity cost (Australia's 6 bottles < USA's 8 bottles)."
            },
            {
                "text": "Australia has relative advantage in surfboards (costing 6 vs 8 bottles); 50 bottles cost AUS$44.12.",
                "isCorrect": False,
                "refutation": "AUS$44.12 divides US$75 by 1.70 instead of multiplying by 1.70 AUS$/US$."
            },
            {
                "text": "The USA has relative advantage in surfboards (costing 0.125 vs 0.17); 50 bottles cost AUS$75.00.",
                "isCorrect": False,
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
                "isCorrect": True,
                "refutation": "Correct! A stronger Rand makes South African goods more expensive for foreign buyers in USD, while foreign goods become cheaper for South Africans in ZAR."
            },
            {
                "text": "South African export prices in foreign currency decrease, while import prices in Rand increase.",
                "isCorrect": False,
                "refutation": "Cheaper exports and pricier imports occur when the Rand depreciates (weakens), not when it appreciates."
            },
            {
                "text": "Both South African export prices in foreign currency and import prices in Rand will increase.",
                "isCorrect": False,
                "refutation": "A currency appreciation always moves foreign-currency export prices and domestic-currency import prices in opposite directions."
            },
            {
                "text": "Both South African export prices in foreign currency and import prices in Rand will decrease.",
                "isCorrect": False,
                "refutation": "While import prices in Rand fall during a Rand appreciation, foreign buyers must pay more USD per Rand of South African exports."
            }
        ]
    },
    # --- CHAPTER 17 ---
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
                "isCorrect": True,
                "refutation": "Correct! Above the 45° line (to the left of equilibrium), aggregate spending A exceeds output Y, causing unplanned inventory depletion and an expansion in output."
            },
            {
                "text": "The Keynesian model demonstrates that the economy automatically moves to full-employment output.",
                "isCorrect": False,
                "refutation": "Automatic full employment is a Classical belief; Keynes proved that macroeconomic equilibrium (A = Y) can persist with high involuntary unemployment."
            },
            {
                "text": "The Keynesian model assumes that changes in aggregate production cause changes in aggregate demand.",
                "isCorrect": False,
                "refutation": "'Supply creates its own demand' (Y → A) is Say's Law; the Keynesian model reverses causality so that aggregate spending drives production (A → Y)."
            },
            {
                "text": "Any point on the aggregate spending line above the 45° line leads to unplanned inventory accumulation.",
                "isCorrect": False,
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
                "isCorrect": True,
                "refutation": "Correct! With c = 0.75, the multiplier is α = 1/(1 - 0.75) = 4, so a R40m rise in investment triggers induced consumption rounds that raise equilibrium income by R160m."
            },
            {
                "text": "Equilibrium income rises by R40m (from R800m to R840m), so ΔY is exactly equal to ΔI.",
                "isCorrect": False,
                "refutation": "R40m is only the initial autonomous injection (Round 1); it ignores the multiplier chain of induced consumption spending (α = 4)."
            },
            {
                "text": "Equilibrium income rises by R53.33m (from R266.67m to R320m), using a multiplier of 1.33.",
                "isCorrect": False,
                "refutation": "A multiplier of 1.33 comes from calculating 1/c = 1/0.75 instead of 1/(1 - c) = 1/0.25 = 4."
            },
            {
                "text": "Equilibrium income rises by R30m (from R800m to R830m), so ΔY is smaller than ΔI.",
                "isCorrect": False,
                "refutation": "Since 0 < c < 1, the simple multiplier α = 1/(1 - c) is always strictly greater than 1, meaning ΔY is always larger than ΔI."
            }
        ]
    },
    # --- CHAPTER 18 ---
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
                "isCorrect": True,
                "refutation": "Correct! Autonomous spending is 100 + 100 + 250 + 300 - 20 = 730, and α = 1/[1 - 0.8(0.8) + 0.1] = 1/0.46 = 2.17, giving Y0 = 1 584.10 (or 1 586.96 exact)."
            },
            {
                "text": "The multiplier is 2.17 and equilibrium income is 1 670.90 because autonomous spending Ā is 770.",
                "isCorrect": False,
                "refutation": "Ā = 770 erroneously adds autonomous imports (+20) instead of subtracting them (-20) from autonomous aggregate expenditure."
            },
            {
                "text": "The multiplier is 2.78 and equilibrium income is 2 027.78 by adding m = 0.1 to c(1 - t) = 0.64.",
                "isCorrect": False,
                "refutation": "Induced imports (m = 0.1) are a leakage that must be added in the denominator [1 - c(1-t) + m = 0.46], not subtracted [1 - 0.64 - 0.1 = 0.26]."
            },
            {
                "text": "The multiplier is 5.00 and equilibrium income is 3 650.00 by ignoring taxes and imports.",
                "isCorrect": False,
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
                "isCorrect": True,
                "refutation": "Correct! α = 1/0.5875 = 1.70 and Ā = 1 050, so Y0 = 1.70 × 1 050 = R1 785 (or R1 787.23 exact); a R50 drop in I reduces Y by 50 × 1.70 = R85 to R1 700."
            },
            {
                "text": "Multiplier is 1.70, equilibrium income is R1 870 (R1 872.34 exact), falling to R1 785 when I = 250.",
                "isCorrect": False,
                "refutation": "R1 870 results from adding autonomous imports (+50) to get Ā = 1 150 instead of subtracting autonomous imports (-50) to get Ā = 1 050."
            },
            {
                "text": "Multiplier is 2.50, equilibrium income is R2 625, falling to R2 500 when investment drops to 250.",
                "isCorrect": False,
                "refutation": "A multiplier of 2.50 = 1/(1 - 0.75 + 0.15) forgets to multiply the MPC (0.75) by (1 - t) = 0.75 to account for proportional income taxation."
            },
            {
                "text": "Multiplier is 1.70, equilibrium income is R1 900 at full employment, falling to R1 815 when I = 250.",
                "isCorrect": False,
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
                "isCorrect": True,
                "refutation": "Correct! With Ā_new = 69 and the new denominator 1 - 0.6(0.75) + 0.125 = 0.675, Y_new = 69 / 0.675 = R102.22m and T = 0.25 × 102.22 = R25.56m."
            },
            {
                "text": "New equilibrium income is R110.40 million and government tax revenue is R27.60 million.",
                "isCorrect": False,
                "refutation": "R110.40 million multiplies Ā_new = 69 by the old multiplier (1.60), overlooking that raising the tax rate to 0.25 shrinks the multiplier to 1/0.675 = 1.48."
            },
            {
                "text": "New equilibrium income is R117.00 million and government tax revenue is R29.25 million.",
                "isCorrect": False,
                "refutation": "R117.00 million fails to subtract induced imports (m = 0.125) and autonomous imports (Z̄ = 5) from the open-economy expenditure equation."
            },
            {
                "text": "New equilibrium income is R96.30 million and government tax revenue is R24.07 million.",
                "isCorrect": False,
                "refutation": "R96.30 million keeps autonomous spending at R65m, forgetting to add the R4m increase in government expenditure (G rising from 20 to 24)."
            }
        ]
    },
    # --- CHAPTER 19 ---
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
                "isCorrect": True,
                "refutation": "Correct! Keynesians view fluctuations as inherent to market economies, and parliamentary budgets give fiscal policy a long decision lag while repo changes have a long impact lag."
            },
            {
                "text": "Monetarists see instability as endogenous; monetary policy has a longer decision lag than fiscal policy.",
                "isCorrect": False,
                "refutation": "Monetarists view the private economy as inherently stable (disturbed mainly by erratic money growth), and the SARB MPC has a much shorter decision lag than Parliament."
            },
            {
                "text": "Keynesians oppose counter-cyclical policy because recognition lags are longer for monetary policy.",
                "isCorrect": False,
                "refutation": "Keynesians advocate active counter-cyclical policy during downswings, and the recognition lag (data collection time) is identical for both monetary and fiscal authorities."
            },
            {
                "text": "Monetarists favour discretionary fiscal fine-tuning because impact lags are zero for interest rates.",
                "isCorrect": False,
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
                "isCorrect": True,
                "refutation": "Correct! A lower price level raises the real value of money balances (boosting C), lowers interest rates (boosting I), and improves net export competitiveness (boosting X - Z)."
            },
            {
                "text": "The microeconomic substitution effect, the diminishing marginal utility effect, and the Giffen effect.",
                "isCorrect": False,
                "refutation": "Those three effects explain why an individual microeconomic demand curve slopes downward when one good's relative price changes, not the aggregate price level P."
            },
            {
                "text": "The sticky nominal wage effect, the productivity effect, and the imported capital cost effect.",
                "isCorrect": False,
                "refutation": "Sticky nominal wages, productivity, and input costs determine the slope and position of the Short-Run Aggregate Supply (SRAS) curve, not the AD curve."
            },
            {
                "text": "The fiscal bracket-creep effect, the statutory reserve requirement effect, and the quota effect.",
                "isCorrect": False,
                "refutation": "Mohr §19.1 establishes that the downward slope of AD rests specifically on the wealth (real balance), interest rate (Keynes), and international trade (foreign purchases) effects."
            }
        ]
    },
    # --- CHAPTER 20 ---
    {
        "id": "q_ch20_01",
        "chapter": "ch20",
        "source": "NWU Past Paper Dec 2022 C Q5, Dec 2023 C Q4 & Ch 20 Tutorial Q3",
        "citation": "Mohr 6e, §20.2, pp. 438–442",
        "difficulty": "Medium",
        "stem": "The macroeconomic table below shows Nominal GDP and Real GDP (in R millions) for two consecutive years: in Period 1, Nominal GDP = 5 130 703 and Real GDP = 4 028 475; in Period 2, Nominal GDP = 5 643 773 and Real GDP = 4 391 038. Calculate the implicit GDP deflator for both years and the resulting annual inflation rate (rounded to 2 decimal places).",
        "derivation": "\\text{Deflator}_1 = \\frac{5\\,130\\,703}{4\\,028\\,475}\\times 100 = 127.36; \\quad \\text{Deflator}_2 = \\frac{5\\,643\\,773}{4\\,391\\,038}\\times 100 = 128.53. \\\\ \\pi = \\frac{128.53 - 127.36}{127.36}\\times 100 = 0.92\\%.",
        "options": [
            {
                "text": "The GDP deflator rises from 127.36 to 128.53, yielding an annual inflation rate of 0.92%.",
                "isCorrect": True,
                "refutation": "Correct! Deflator Year 1 = (5 130 703 / 4 028 475) × 100 = 127.36; Deflator Year 2 = (5 643 773 / 4 391 038) × 100 = 128.53; inflation = [(128.53 - 127.36)/127.36] × 100 = 0.92%."
            },
            {
                "text": "The GDP deflator rises from 127.36 to 128.53, yielding an annual inflation rate of 1.17%.",
                "isCorrect": False,
                "refutation": "1.17 is simply the raw index point difference (128.53 - 127.36); to find the percentage inflation rate, you must divide the difference by the previous year's deflator (127.36)."
            },
            {
                "text": "The GDP deflator rises from 78.52 to 77.80, yielding a negative inflation rate of -0.92%.",
                "isCorrect": False,
                "refutation": "78.52 and 77.80 invert the GDP deflator formula by dividing Real GDP by Nominal GDP instead of (Nominal GDP / Real GDP) × 100."
            },
            {
                "text": "The GDP deflator rises from 127.36 to 128.53, yielding an annual inflation rate of 10.00%.",
                "isCorrect": False,
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
        "stem": "An economy produces three goods (Period 1 is the base year): Pizza (Period 1: Q=24, P=R22.50; Period 2: Q=36, P=R24.75), Soda (Period 1: Q=50, P=R4.00; Period 2: Q=75, P=R4.40), and Ice Cream (Period 1: Q=15, P=R8.00; Period 2: Q=22.5, P=R8.80). Calculate Period 1 Nominal/Real GDP, Period 2 Nominal and Real GDP, the Period 2 GDP Deflator, and the Period 2 inflation rate.",
        "derivation": "\\text{GDP}_{1}^{\\text{Nom}} = \\text{GDP}_{1}^{\\text{Real}} = 24(22.5) + 50(4) + 15(8) = \\text{R}860. \\\\ \\text{GDP}_{2}^{\\text{Nom}} = 36(24.75) + 75(4.4) + 22.5(8.8) = \\text{R}1\\,419; \\quad \\text{GDP}_{2}^{\\text{Real}} = 36(22.5) + 75(4) + 22.5(8) = \\text{R}1\\,290. \\\\ \\text{Deflator}_{2} = \\frac{1419}{1290}\\times 100 = 110.0 \\implies \\pi_{2} = 10.0\\%.",
        "options": [
            {
                "text": "Period 1 GDP is R860; Period 2 Nominal is R1 419 and Real is R1 290; Period 2 Deflator is 110 and inflation is 10%.",
                "isCorrect": True,
                "refutation": "Correct! Period 1 GDP = 540 + 200 + 120 = R860; Period 2 Nominal = 891 + 330 + 198 = R1 419; Period 2 Real = 810 + 300 + 180 = R1 290; Deflator = 110, so inflation = 10%."
            },
            {
                "text": "Period 1 GDP is R860; Period 2 Nominal is R1 419 and Real is R1 290; Period 2 Deflator is 110 and inflation is 50%.",
                "isCorrect": False,
                "refutation": "50% is the real output growth rate [(1 290 - 860)/860 × 100 = 50%], whereas price inflation is [(110 - 100)/100 × 100] = 10%."
            },
            {
                "text": "Period 1 GDP is R860; Period 2 Nominal is R1 290 and Real is R1 419; Period 2 Deflator is 90.9 and inflation is -9.1%.",
                "isCorrect": False,
                "refutation": "This swaps Period 2 Nominal GDP (current prices = R1 419) with Period 2 Real GDP (Period 1 constant prices = R1 290)."
            },
            {
                "text": "Period 1 GDP is R946; Period 2 Nominal is R1 419 and Real is R1 290; Period 2 Deflator is 110 and inflation is 65%.",
                "isCorrect": False,
                "refutation": "R946 values Period 1 quantities at Period 2 prices, and 65% is the nominal GDP growth rate [(1 419 - 860)/860 × 100 = 65%], not the inflation rate."
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
                "isCorrect": True,
                "refutation": "Correct! CPI measures household cost of living (including services, VAT, and imported consumer goods), whereas PPI measures producer prices (excluding services and VAT, including capital/intermediate goods)."
            },
            {
                "text": "PPI includes household services and VAT; CPI excludes imported consumer goods and indirect taxes.",
                "isCorrect": False,
                "refutation": "This reverses the two indices: services and VAT are included in CPI (consumer prices) and excluded from PPI (producer prices)."
            },
            {
                "text": "The GDP Deflator uses a fixed consumer basket including imports; CPI excludes all imported oil.",
                "isCorrect": False,
                "refutation": "CPI uses a fixed consumer basket that includes imported consumer goods (like petrol), whereas the GDP Deflator uses a changing basket of strictly domestic production (excluding imports)."
            },
            {
                "text": "CPI, PPI, and the GDP Deflator always yield the exact same annual inflation percentage in SA.",
                "isCorrect": False,
                "refutation": "Because their baskets, weights, and treatment of imports, services, and capital goods differ, the three measures regularly yield different inflation rates."
            }
        ]
    },
    # --- CHAPTER 21 ---
    {
        "id": "q_ch21_01",
        "chapter": "ch21",
        "source": "NWU Past Paper Dec 2024 Section C Q4 (Elaria Broad Unemployment Rate)",
        "citation": "Mohr 6e, §21.1, pp. 469–471",
        "difficulty": "Medium",
        "stem": "In the economy of Elaria (quarterly survey), workforce statistics are: Employed = 6 750 000; Unemployed (actively seeking work) = 2 220 000; Discouraged work seekers = 1 030 000; Students = 2 950 000; Homemakers = 1 280 000; Too old/young to work = 740 000; Illness = 640 000; Disability = 560 000. Calculate the strict (narrow) and broad (expanded) unemployment rates.",
        "derivation": "u_{\\text{strict}} = \\frac{2\\,220\\,000}{6\\,750\\,000 + 2\\,220\\,000}\\times 100 = \\frac{2.22\\text{m}}{8.97\\text{m}}\\times 100 = 24.75\\%. \\\\ u_{\\text{broad}} = \\frac{2\\,220\\,000 + 1\\,030\\,000}{6\\,750\\,000 + 2\\,220\\,000 + 1\\,030\\,000}\\times 100 = \\frac{3.25\\text{m}}{10.00\\text{m}}\\times 100 = 32.50\\%.",
        "options": [
            {
                "text": "The broad unemployment rate is 32.50% (3.25m / 10.00m) and the strict rate is 24.75%.",
                "isCorrect": True,
                "refutation": "Correct! Broad unemployment adds discouraged work-seekers (1.03m) to both active unemployed (2.22m -> 3.25m) and the strict labour force (8.97m -> 10.00m), giving 32.50%."
            },
            {
                "text": "The broad unemployment rate is 36.23% (3.25m / 8.97m) and the strict rate is 24.75%.",
                "isCorrect": False,
                "refutation": "36.23% adds discouraged work-seekers to the numerator (3.25m) but forgets to add them to the expanded labour force denominator (dividing by 8.97m instead of 10.00m)."
            },
            {
                "text": "The broad unemployment rate is 20.10% (3.25m / 16.17m) by dividing by total population.",
                "isCorrect": False,
                "refutation": "Students, homemakers, the ill, disabled, and those too old/young are not economically active and must never be included in the labour force denominator."
            },
            {
                "text": "The broad unemployment rate is 22.20% (2.22m / 10.00m) and the strict rate is 32.89%.",
                "isCorrect": False,
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
                "isCorrect": True,
                "refutation": "Correct! Strict LF = 18.6m + 8.9m = 27.5m; Broad LF adds 2.5m discouraged = 30.0m; Broad unemployment rate = (11.4m / 30.0m) × 100 = 38.00%."
            },
            {
                "text": "Strict labour force is 27.5m, broad labour force is 34.0m, and broad unemployment is 33.53%.",
                "isCorrect": False,
                "refutation": "34.0m is the total adult population (which includes 4.0m economically inactive persons), not the broad labour force of 30.0m."
            },
            {
                "text": "Strict labour force is 18.6m, broad labour force is 27.5m, and broad unemployment is 41.45%.",
                "isCorrect": False,
                "refutation": "18.6m is only the employed population, and 41.45% (11.4m / 27.5m) forgets to include the 2.5m discouraged work-seekers in the broad labour force denominator."
            },
            {
                "text": "Strict labour force is 27.5m, broad labour force is 30.0m, and broad unemployment is 32.36%.",
                "isCorrect": False,
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
                "isCorrect": True,
                "refutation": "Correct! Agricultural harvest work is seasonal, recession/downturn layoffs are cyclical, and permanent displacement by online algorithms is structural."
            },
            {
                "text": "Yetunde is frictionally unemployed, Cipriano is structurally unemployed, and Anouska is cyclically unemployed.",
                "isCorrect": False,
                "refutation": "This misclassifies all three: agricultural picking is seasonal, recessionary layoffs are cyclical, and algorithmic replacement is structural."
            },
            {
                "text": "Yetunde is seasonally unemployed, Cipriano is frictionally unemployed, and Anouska is cyclically unemployed.",
                "isCorrect": False,
                "refutation": "Cipriano lost his job due to an aggregate economic downturn (cyclical, not voluntary frictional job search), and Anouska's job was automated (structural)."
            },
            {
                "text": "Yetunde is structurally unemployed, Cipriano is cyclically unemployed, and Anouska is frictionally unemployed.",
                "isCorrect": False,
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
                "isCorrect": True,
                "refutation": "Correct! A rightward Phillips curve shift means a worse trade-off (more unemployment at every inflation rate), and a rising unemployment rate means the unemployed share of the labour force grew."
            },
            {
                "text": "The inflation-unemployment trade-off improved; zero new jobs were created in the economy.",
                "isCorrect": False,
                "refutation": "A less severe trade-off would be a leftward shift, and the unemployment rate can rise even when new jobs are created if the labour force grows faster."
            },
            {
                "text": "The economy is experiencing deflation; real GDP growth must be negative during the period.",
                "isCorrect": False,
                "refutation": "A rightward Phillips shift represents stagflation (rising inflation and rising unemployment), and unemployment can rise during positive 'jobless' GDP growth."
            },
            {
                "text": "Imported capital goods became cheaper; workers are retiring and leaving the labour force.",
                "isCorrect": False,
                "refutation": "Cheaper imported capital goods shift AS right and the Phillips curve left, while retirees exit the labour force rather than entering the unemployed pool."
            }
        ]
    },
    # --- CHAPTER 22 ---
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
                "isCorrect": True,
                "refutation": "Correct! Resource utilisation reaches its maximum at the peak (boom) of the cycle, and import substitution uses trade protection to manufacture previously imported goods domestically."
            },
            {
                "text": "The expansion (upswing) phase; reducing import tariffs so domestic firms can export more goods.",
                "isCorrect": False,
                "refutation": "The expansion phase leads up to full capacity, while peak is the upper turning point where resources are fully used; import substitution raises (not cuts) tariffs on consumer imports."
            },
            {
                "text": "The recovery phase; replacing domestic workers with imported capital machinery to cut labour costs.",
                "isCorrect": False,
                "refutation": "Replacing workers with machinery is capital deepening (raising capital intensity), whereas import substitution replaces foreign imported goods with domestic production."
            },
            {
                "text": "The trough phase; protecting export industries in which the economy already holds comparative advantage.",
                "isCorrect": False,
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
                "isCorrect": True,
                "refutation": "Correct! Per capita GDP contains zero information about income distribution, and 'pertaining only to production inside the country' is simply the geographic definition of GDP (Ch 22 MCQ 5)."
            },
            {
                "text": "Per capita GDP adjusts for Gini inequality; 'unrecorded informal sector activity' is not a welfare flaw.",
                "isCorrect": False,
                "refutation": "Per capita GDP does NOT adjust for the Gini coefficient, and unrecorded informal activity is one of the five main textbook problems associated with GDP."
            },
            {
                "text": "Per capita GDP subtracts pollution costs; 'valuing non-market subsistence output' is not a welfare flaw.",
                "isCorrect": False,
                "refutation": "Standard GDP fails to subtract negative externalities like pollution and struggles to value non-market production—both are major welfare limitations."
            },
            {
                "text": "Per capita GDP measures median household wealth; 'frequent data revisions' is not a problem with GDP.",
                "isCorrect": False,
                "refutation": "Per capita GDP is a mean flow of income (not median wealth), and inevitable data revisions are explicitly listed in Mohr §22.1 as a problem with GDP."
            }
        ]
    }
]

# Verify and auto-check distractor length symmetry (max/min <= 1.25) and decoupled refutations
for q in QUESTIONS:
    lengths = [len(opt["text"]) for opt in q["options"]]
    ratio = max(lengths) / min(lengths)
    if ratio > 1.25:
        raise ValueError(f"Question {q['id']} violates length ratio: {ratio:.3f} ({lengths})")
    correct_count = sum(1 for opt in q["options"] if opt["isCorrect"])
    if correct_count != 1:
        raise ValueError(f"Question {q['id']} has {correct_count} correct options")

print(f"All {len(QUESTIONS)} questions passed strict psychometric checks (max/min ratio <= 1.25)!")


ADDITIONAL_QUESTIONS = [
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
                "isCorrect": True,
                "refutation": "Correct! Subtracting taxes (205 562) and adding subsidies (11 433) yields GDPfc = 1 336 451, while adding RSA au pair earnings (+1 500) and subtracting Cuban doctor salaries (-1 800) gives GNPmp = 1 530 280."
            },
            {
                "text": "GDP at factor cost is R1 724 709 million and GNP at market prices is R1 530 880 million.",
                "isCorrect": False,
                "refutation": "This reverses both formulas: it adds indirect taxes (+205 562) and subtracts subsidies (-11 433) for GDPfc, and adds foreign Cuban doctor payments (+1 800) for GNPmp."
            },
            {
                "text": "GDP at factor cost is R1 336 451 million and GNP at market prices is R1 453 905 million.",
                "isCorrect": False,
                "refutation": "R1 453 905 million subtracts net exports (492 646 - 569 321) instead of adjusting for primary factor income receipts (+1 500) and payments (-1 800)."
            },
            {
                "text": "GDP at factor cost is R1 165 465 million and GNP at market prices is R1 359 294 million.",
                "isCorrect": False,
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
                "isCorrect": True,
                "refutation": "Correct! Celebration Creations' factor incomes sum to R4 345 200, leaving R10 962 000 paid to Chef Siba; subtracting Woolworths inputs (R1 283 760) gives Siba VA = R9 678 240."
            },
            {
                "text": "Celebration Creations VA is R3 612 600, Chef Siba VA is R9 469 440, and GDP is R14 184 000.",
                "isCorrect": False,
                "refutation": "Those three figures represent only the net profits of each participant, omitting wages (R336 600) and rent (R786 600) from value added."
            },
            {
                "text": "Celebration Creations VA is R15 307 200, Chef Siba VA is R10 962 000, and GDP is R27 552 960.",
                "isCorrect": False,
                "refutation": "R27 552 960 sums gross sales across all three participants without subtracting intermediate purchases, causing severe double counting."
            },
            {
                "text": "Celebration Creations VA is R4 345 200, Chef Siba VA is R10 962 000, and GDP is R16 590 960.",
                "isCorrect": False,
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
                "isCorrect": True,
                "refutation": "Correct! M1 = 10 + 25 = R35m; M2 = 35 + 125 = R160m; and comprehensive M3 = 160 + 290 = R450m."
            },
            {
                "text": "M1 equals R25 million, M2 equals R150 million, and comprehensive M3 equals R440 million.",
                "isCorrect": False,
                "refutation": "This omits the R10 million of coins and banknotes in circulation from M1, which then understates M2 and M3 by R10 million each."
            },
            {
                "text": "M1 equals R35 million, M2 equals R125 million, and comprehensive M3 equals R290 million.",
                "isCorrect": False,
                "refutation": "Each broader monetary aggregate is cumulative: M2 must include M1 (35 + 125 = 160), and M3 must include M2 (160 + 290 = 450)."
            },
            {
                "text": "M1 equals R160 million, M2 equals R325 million, and comprehensive M3 equals R450 million.",
                "isCorrect": False,
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
                "isCorrect": True,
                "refutation": "Correct! Tax on the R750 excess above R315 100 is R262.50; adding R58 389 gives R58 651.50, and subtracting the R10 900 primary rebate yields R47 751.50 (15.12%)."
            },
            {
                "text": "Net tax payable is R42 051.50 and her effective tax rate is 13.31% after all rebates.",
                "isCorrect": False,
                "refutation": "R42 051.50 wrongly deducts the R5 700 secondary rebate, which applies only to taxpayers aged 65 years and older."
            },
            {
                "text": "Net tax payable is R99 647.50 and her effective tax rate is 31.55% after the rebate.",
                "isCorrect": False,
                "refutation": "R99 647.50 multiplies her entire R315 850 salary by 35% (110 547.50 - 10 900) instead of applying 35% only to the R750 excess above R315 100."
            },
            {
                "text": "Net tax payable is R69 551.50 and her effective tax rate is 22.02% on annual salary.",
                "isCorrect": False,
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
                "isCorrect": True,
                "refutation": "Correct! Japan gives up 2000/1000 = 2.00 kg of Seafood per kg of Wagyu, while Portugal gives up only 3000/2200 = 1.36 kg of Seafood."
            },
            {
                "text": "Japan sacrifices 0.50 kg Seafood and Portugal sacrifices 0.73 kg, giving Japan comparative advantage.",
                "isCorrect": False,
                "refutation": "0.50 kg (1000/2000) and 0.73 kg (2200/3000) measure the opportunity cost of 1 kg of Seafood in terms of Wagyu beef, not 1 kg of Wagyu beef."
            },
            {
                "text": "Japan sacrifices 2.00 kg Seafood and Portugal sacrifices 1.36 kg, giving Japan comparative advantage.",
                "isCorrect": False,
                "refutation": "While the opportunity costs (2.00 kg and 1.36 kg) are right, comparative advantage belongs to Portugal because 1.36 kg is lower than 2.00 kg."
            },
            {
                "text": "Japan sacrifices 1.00 kg Seafood and Portugal sacrifices 1.50 kg, giving Japan comparative advantage.",
                "isCorrect": False,
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
                "isCorrect": True,
                "refutation": "Correct! With Ā = 230 and induced slope (0.5 - 0.3)(0.75) = 0.15, Y = 230 / 0.85 = 270.59, T = 67.65, Budget = 67.65 - 70 = -2.35 (deficit), and S = 16.47."
            },
            {
                "text": "Equilibrium Y is 248.65, Taxes are 62.16, Budget Deficit is -7.84, and Savings equal 8.24.",
                "isCorrect": False,
                "refutation": "248.65 treats induced imports as 0.3Y instead of 0.3Yd = 0.3(0.75Y) = 0.225Y as specified in the exam equation Z = 30 + 0.3Yd."
            },
            {
                "text": "Equilibrium Y is 368.00, Taxes are 92.00, Budget Surplus is +22.00, and Savings equal 53.00.",
                "isCorrect": False,
                "refutation": "368.00 ignores the foreign sector leakage (m = 0.3) completely, dividing 230 by (1 - 0.375) = 0.625."
            },
            {
                "text": "Equilibrium Y is 270.59, Taxes are 67.65, Budget Surplus is +2.35, and Savings equal 101.47.",
                "isCorrect": False,
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
                "isCorrect": True,
                "refutation": "Correct! 6.8% of R13 200 is R897.60 (new total R14 097.60), and CPI uses a fixed consumer basket that includes imported oil whereas the GDP Deflator covers only domestic production."
            },
            {
                "text": "Expenditure rises by R897.60 (to R14 097.60); the Deflator includes imported fuel while CPI excludes imports.",
                "isCorrect": False,
                "refutation": "Imports are excluded from GDP and therefore excluded from the GDP Deflator, whereas imported consumer goods (like petrol) are included in the CPI basket."
            },
            {
                "text": "Expenditure rises by R839.25 (to R14 039.25); CPI uses a variable basket while the Deflator is fixed.",
                "isCorrect": False,
                "refutation": "6.8% of R13 200 is R897.60, and CPI uses a fixed basket (subject to substitution bias) while the GDP Deflator uses a changing current-production basket."
            },
            {
                "text": "Expenditure rises by R950.40 (to R14 150.40); CPI excludes VAT while the GDP Deflator includes VAT.",
                "isCorrect": False,
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
                "isCorrect": True,
                "refutation": "Correct! NI = 1 204 - 72 + 24 - 13 - 148 + 15 = R1 010m, and GDEfc = 1 204 - 64 + 100 - 148 + 15 = R1 107m."
            },
            {
                "text": "National Income (NI) is R1 082 million and Gross Domestic Expenditure at factor cost is R1 035 million.",
                "isCorrect": False,
                "refutation": "R1 082 million forgets to subtract consumption of fixed capital (72) from NNI, while R1 035 million reverses exports and imports."
            },
            {
                "text": "National Income (NI) is R1 143 million and Gross Domestic Expenditure at factor cost is R1 240 million.",
                "isCorrect": False,
                "refutation": "Those two figures are NNI at market prices (1 143) and GDE at market prices (1 240) before converting to factor cost (-148 + 15)."
            },
            {
                "text": "National Income (NI) is R988 million and Gross Domestic Expenditure at factor cost is R1 179 million.",
                "isCorrect": False,
                "refutation": "R988 million reverses net primary factor income (-24 + 13 instead of +24 - 13), and R1 179 million adds exports instead of imports."
            }
        ]
    },
    {
        "id": "q_ch13_09",
        "chapter": "ch13",
        "source": "Nominal vs. Real GDP & Constant-Price Valuation",
        "citation": "Mohr 6e, §13.2, pp. 244–245",
        "difficulty": "Easy",
        "stem": "In the economy of Hogwarts, three goods are produced: Cell phones (Period 1 base period: P = R100, Q = 1; Period 2: P = R110, Q = 1), Tablets (Period 1: P = R10, Q = 8; Period 2: P = R12, Q = 10), and Laptops (Period 1: P = R5, Q = 4; Period 2: P = R4, Q = 5). Calculate Period 1 Nominal GDP, Period 2 Nominal GDP (and percentage nominal growth), and Period 2 Real GDP at Period 1 constant prices.",
        "derivation": "\\text{Nom GDP}_{1} = 100(1) + 10(8) + 5(4) = \\text{R}200. \\quad \\text{Nom GDP}_{2} = 110(1) + 12(10) + 4(5) = \\text{R}250 \\; (+25\\%). \\\\ \\text{Real GDP}_{2} = 100(1) + 10(10) + 5(5) = 100 + 100 + 25 = \\text{R}225 \\; (+12.5\\% \\text{ real growth}).",
        "options": [
            {
                "text": "Period 1 Nominal GDP is R200, Period 2 Nominal GDP is R250 (up 25%), and Period 2 Real GDP is R225.",
                "isCorrect": True,
                "refutation": "Correct! Period 1 Nominal GDP = 100 + 80 + 20 = R200; Period 2 Nominal GDP = 110 + 120 + 20 = R250 (up 25%); and Period 2 Real GDP at base prices = 100(1) + 10(10) + 5(5) = R225."
            },
            {
                "text": "Period 1 Nominal GDP is R200, Period 2 Nominal GDP is R225 (up 12.5%), and Period 2 Real GDP is R250.",
                "isCorrect": False,
                "refutation": "This swaps Period 2 Nominal GDP (R250 at Period 2 current prices) with Period 2 Real GDP (R225 at Period 1 constant base prices)."
            },
            {
                "text": "Period 1 Nominal GDP is R210, Period 2 Nominal GDP is R250 (up 19%), and Period 2 Real GDP is R200.",
                "isCorrect": False,
                "refutation": "Period 1 Nominal GDP is 100(1) + 10(8) + 5(4) = R200, and Period 2 Real GDP rises to R225 because tablet and laptop quantities expanded."
            },
            {
                "text": "Period 1 Nominal GDP is R180, Period 2 Nominal GDP is R240 (up 33.3%), and Period 2 Real GDP is R215.",
                "isCorrect": False,
                "refutation": "Summing P × Q across Cell phones, Tablets, and Laptops yields R200 in Period 1, R250 in Period 2 at current prices, and R225 at base prices."
            }
        ]
    },
    {
        "id": "q_ch13_10",
        "chapter": "ch13",
        "source": "Implicit GDP Deflator & Multi-Good Price Level",
        "citation": "Mohr 6e, §13.2 & §20.2, pp. 244–245, 442",
        "difficulty": "Medium",
        "stem": "An economy produces Fish, Pork, and Beef. In the Base Period, prices and quantities were Fish: P = $7, Q = 400; Pork: P = $8, Q = 225; Beef: P = $10, Q = 175. In the Current Period, prices and quantities are Fish: P = $9, Q = 900; Pork: P = $6, Q = 275; Beef: P = $15, Q = 275. Calculate Current Period Nominal GDP, Current Period Real GDP (at Base Period prices), and the Current Period GDP Deflator.",
        "derivation": "\\text{Nom GDP} = 9(900) + 6(275) + 15(275) = 8\\,100 + 1\\,650 + 4\\,125 = \\$13\\,875. \\\\ \\text{Real GDP} = 7(900) + 8(275) + 10(275) = 6\\,300 + 2\\,200 + 2\\,750 = \\$11\\,250. \\quad \\text{Deflator} = \\frac{13\\,875}{11\\,250} \\times 100 = 123.33.",
        "options": [
            {
                "text": "Current Nominal GDP is $13 875, Real GDP is $11 250, and the GDP Deflator is 123.33 (up 23.33%).",
                "isCorrect": True,
                "refutation": "Correct! Current Nominal GDP = 8 100 + 1 650 + 4 125 = $13 875; Real GDP at base prices = 6 300 + 2 200 + 2 750 = $11 250; Deflator = (13 875 / 11 250) × 100 = 123.33."
            },
            {
                "text": "Current Nominal GDP is $11 250, Real GDP is $13 875, and the GDP Deflator is 81.08 (down 18.92%).",
                "isCorrect": False,
                "refutation": "81.08 inverts the GDP Deflator formula by dividing Real GDP ($11 250) by Nominal GDP ($13 875) instead of Nominal by Real."
            },
            {
                "text": "Current Nominal GDP is $13 875, Real GDP is $6 350, and the GDP Deflator is 218.50 (up 118.50%).",
                "isCorrect": False,
                "refutation": "$6 350 is Base Period GDP [7(400) + 8(225) + 10(175)], whereas Current Real GDP must multiply Current Period quantities (900, 275, 275) by Base Period prices ($11 250)."
            },
            {
                "text": "Current Nominal GDP is $12 450, Real GDP is $11 250, and the GDP Deflator is 110.67 (up 10.67%).",
                "isCorrect": False,
                "refutation": "Valuing current quantities at current prices gives 9(900) + 6(275) + 15(275) = $13 875, yielding a GDP Deflator of 123.33."
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
                "isCorrect": True,
                "refutation": "Correct! Financial intermediaries bridge savers (surplus units) and borrowers (deficit units), and a higher repo rate shifts the horizontal interest rate line up along the money demand curve, reducing M."
            },
            {
                "text": "They mint physical coins and banknotes for Treasury; a repo hike shifts the vertical money supply curve left.",
                "isCorrect": False,
                "refutation": "Only the SARB (via the SA Mint and Note Company) issues currency, and there is no independent vertical money supply curve in the textbook model."
            },
            {
                "text": "They set statutory tax brackets for SARS; a repo hike lowers commercial bank prime lending rates and raises M.",
                "isCorrect": False,
                "refutation": "National Treasury and Parliament set tax rates, and an increase in the SARB repo rate increases (not lowers) the prime lending rate."
            },
            {
                "text": "They eliminate credit risk for equity traders; a repo hike shifts the money demand curve rightward and raises M.",
                "isCorrect": False,
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
                "isCorrect": True,
                "refutation": "Correct! In 2018/19, R63 853 + 0.31(69 150) = R85 289.50 (22.74% of R375 000), and raising bracket thresholds prevents inflation from pushing taxpayers into higher brackets (fiscal drag)."
            },
            {
                "text": "2018/19 gross tax is R116 250.00 (31.00% average rate); raising bracket thresholds increases fiscal drag revenue.",
                "isCorrect": False,
                "refutation": "R116 250 multiplies the entire R375 000 income by the 31% marginal rate instead of applying 31% only to income above R305 850."
            },
            {
                "text": "2018/19 gross tax is R63 853.00 (17.03% average rate); raising bracket thresholds converts the tax into a regressive tax.",
                "isCorrect": False,
                "refutation": "R63 853 is only the base tax on the first R305 850; you must add 31% of the R69 150 excess (R21 436.50) to get R85 289.50."
            },
            {
                "text": "2018/19 gross tax is R94 785.00 (25.28% average rate); raising bracket thresholds eliminates value-added tax (VAT).",
                "isCorrect": False,
                "refutation": "31% of (375 000 - 305 850) is R21 436.50, which added to R63 853 equals R85 289.50, and personal income tax adjustments do not eliminate VAT."
            }
        ]
    },
    {
        "id": "q_ch16_05",
        "chapter": "ch16",
        "source": "Comparative Advantage & Labour Opportunity Cost",
        "citation": "Mohr 6e, §16.2, pp. 325–329",
        "difficulty": "Medium",
        "stem": "Suppose 1 hour of labour in South Africa can produce either 6 metres of cloth or 4 cars, whereas 1 hour of labour in Zimbabwe can produce either 1 metre of cloth or 5 cars. Determine the opportunity cost of producing 1 metre of cloth and 1 car in each country, and state which country should specialise in each product.",
        "derivation": "\\text{SA: } 1\\text{m cloth} = \\frac{4}{6} = 0.67\\text{ cars}, \\; 1\\text{ car} = \\frac{6}{4} = 1.50\\text{m cloth}. \\quad \\text{Zim: } 1\\text{m cloth} = \\frac{5}{1} = 5\\text{ cars}, \\; 1\\text{ car} = \\frac{1}{5} = 0.20\\text{m cloth}.",
        "options": [
            {
                "text": "SA has comparative advantage in cloth (0.67 < 5 cars) and Zimbabwe has comparative advantage in cars (0.20 < 1.50m cloth).",
                "isCorrect": True,
                "refutation": "Correct! SA sacrifices only 4/6 = 0.67 cars per metre of cloth (vs 5 cars in Zimbabwe), while Zimbabwe sacrifices only 1/5 = 0.20m of cloth per car (vs 1.50m in SA)."
            },
            {
                "text": "SA has comparative advantage in both cloth and cars because 6 + 4 = 10 total units per hour exceeds Zimbabwe's 6 units.",
                "isCorrect": False,
                "refutation": "A country cannot hold a comparative advantage in both goods because opportunity costs are reciprocals of each other (0.67 vs 5 and 1.50 vs 0.20)."
            },
            {
                "text": "SA has comparative advantage in cars (1.50 > 0.20m cloth) and Zimbabwe has comparative advantage in cloth (5 > 0.67 cars).",
                "isCorrect": False,
                "refutation": "Comparative advantage belongs to the producer with the LOWER opportunity cost, not the higher opportunity cost."
            },
            {
                "text": "Zimbabwe has absolute and comparative advantage in cloth because 1 metre requires less raw cotton than 6 metres.",
                "isCorrect": False,
                "refutation": "South Africa produces more cloth per hour (6m > 1m, absolute advantage) and at a lower opportunity cost (0.67 < 5 cars, comparative advantage)."
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
                "isCorrect": True,
                "refutation": "Correct! Since S = -C̄ + (1-c)Y, C = 120 + 0.75Y, α = 1/0.25 = 4, Y0 = 4(200) = 800, and the Paradox of Thrift lowers Y0 without raising equilibrium saving (which remains equal to I = 80)."
            },
            {
                "text": "C = -120 + 0.25Y, α = 1.33, Y0 = 266.7; higher autonomous saving increases equilibrium income and raises total S above 80.",
                "isCorrect": False,
                "refutation": "Autonomous consumption C̄ is positive (+120) and c = 1 - s = 0.75, giving α = 4.0 and Y0 = 800; saving more reduces aggregate spending and income."
            },
            {
                "text": "C = 120 + 0.75Y, α = 4.0, Y0 = 480; higher autonomous saving shifts the aggregate spending curve upward and raises Y0.",
                "isCorrect": False,
                "refutation": "Equilibrium income must include autonomous investment: Y0 = 4 × (120 + 80) = 800 (not 4 × 120 = 480), and higher saving shifts consumption downward."
            },
            {
                "text": "C = 200 + 0.25Y, α = 4.0, Y0 = 800; higher autonomous saving increases autonomous investment I by an equal amount.",
                "isCorrect": False,
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
                "isCorrect": True,
                "refutation": "Correct! Classical Say's Law states that production automatically generates sufficient demand, whereas in the Keynesian model aggregate spending determines national production."
            },
            {
                "text": "Say's Law holds that spending creates supply (A → Y), whereas Keynes holds that supply always creates demand (Y → A).",
                "isCorrect": False,
                "refutation": "This reverses the causal direction of both theories: Say's Law runs from supply to demand (Y → A), while Keynes runs from spending to output (A → Y)."
            },
            {
                "text": "Both Say's Law and Keynes guarantee automatic full employment whenever the aggregate spending line intersects the 45° line.",
                "isCorrect": False,
                "refutation": "In the Keynesian model, equilibrium on the 45° line (A = Y) can occur well below full employment (recessionary unemployment) or above it."
            },
            {
                "text": "When the aggregate spending line lies below the 45° line (A < Y), unplanned inventories fall and firms expand output.",
                "isCorrect": False,
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
                "isCorrect": True,
                "refutation": "Correct! Government spending G is purely autonomous (shifting A parallel upward without changing α), whereas the tax rate t reduces the slope c(1-t) and lowers both α and Ye."
            },
            {
                "text": "G is an injection that increases the multiplier α and raises Ye; t is a leakage that leaves α unchanged and lowers Ye.",
                "isCorrect": False,
                "refutation": "As tested in Dec 2023 Section B Q4.1, G does NOT affect the size of the multiplier α because G is autonomous (independent of Y)."
            },
            {
                "text": "G is a leakage that reduces the multiplier α and lowers Ye; t is an injection that increases α and raises Ye.",
                "isCorrect": False,
                "refutation": "Government expenditure G is an injection into the circular flow that raises Ye, whereas taxation T = tY is a withdrawal (leakage) that lowers Ye."
            },
            {
                "text": "Both G and t change the vertical intercept of the aggregate spending curve without changing its slope or multiplier.",
                "isCorrect": False,
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
                "isCorrect": True,
                "refutation": "Correct! Monetarists believe markets are self-correcting and activist policy is destabilising; fiscal changes require parliamentary budget approval (long decision lag), while repo rate changes take 12–24 months to work (long impact lag)."
            },
            {
                "text": "Monetarists view the private economy as unstable; monetary policy has a longer decision lag while fiscal policy has a longer impact lag.",
                "isCorrect": False,
                "refutation": "Keynesians (not Monetarists) view the private economy as inherently unstable, and the SARB MPC can change the repo rate rapidly (short decision/implementation lag)."
            },
            {
                "text": "Both schools favour discretionary fiscal fine-tuning; recognition lag differs sharply between fiscal and monetary authorities.",
                "isCorrect": False,
                "refutation": "Monetarists strongly oppose discretionary fine-tuning in favour of stable rules, and the recognition lag (waiting for quarterly GDP/CPI data) is the same for both."
            },
            {
                "text": "Keynesians argue that the AS curve is always vertical; monetary policy affects real output immediately with zero impact lag.",
                "isCorrect": False,
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
                "isCorrect": True,
                "refutation": "Correct! Lower domestic yields reduce foreign capital inflows, depreciating the Rand (raising X - Z), while inverse bond pricing and discounted cash flows raise asset wealth and consumption."
            },
            {
                "text": "Lower interest rates attract foreign capital inflows that appreciate the Rand (boosting NX) and lower domestic property prices.",
                "isCorrect": False,
                "refutation": "Lower interest rates make domestic bonds less attractive relative to foreign yields (causing outflows and Rand depreciation), and lower discount rates raise property and bond prices."
            },
            {
                "text": "Lower interest rates shift the aggregate supply curve leftward while reducing both autonomous investment and net exports.",
                "isCorrect": False,
                "refutation": "An interest rate cut is an expansionary demand-side measure that raises investment (I) and net exports (NX), shifting AD rightward."
            },
            {
                "text": "Lower interest rates increase the statutory tax rate t and reduce the open-economy Keynesian multiplier via fiscal drag.",
                "isCorrect": False,
                "refutation": "Repo rate adjustments are monetary policy actions by the SARB and do not alter statutory tax brackets or the marginal tax rate t."
            }
        ]
    },
    {
        "id": "q_ch20_05",
        "chapter": "ch20",
        "source": "National Accounts GDP Deflator Inflation",
        "citation": "Mohr 6e, §20.2, pp. 441–443",
        "difficulty": "Medium",
        "stem": "According to central bank national accounting statistics, Nominal GDP was R2 917 539 million in Period 1 and R3 155 195 million in Period 2, while Real GDP (at constant base prices) was R1 905 736 million in Period 1 and R1 954 303 million in Period 2. Calculate the implicit GDP Deflator for Period 1 and Period 2 and the resulting annual inflation rate.",
        "derivation": "\\text{Defl}_{1} = \\frac{2\\,917\\,539}{1\\,905\\,736}\\times 100 = 153.09; \\quad \\text{Defl}_{2} = \\frac{3\\,155\\,195}{1\\,954\\,303}\\times 100 = 161.45. \\\\ \\pi_{2} = \\frac{161.45 - 153.09}{153.09}\\times 100 = 5.46\\%.",
        "options": [
            {
                "text": "The Period 1 GDP Deflator is 153.09, the Period 2 GDP Deflator is 161.45, and the inflation rate is 5.46%.",
                "isCorrect": True,
                "refutation": "Correct! Deflator 1 = (2 917 539 / 1 905 736) × 100 = 153.09 and Deflator 2 = (3 155 195 / 1 954 303) × 100 = 161.45; percentage change = (161.45 - 153.09) / 153.09 × 100 = 5.46%."
            },
            {
                "text": "The Period 1 GDP Deflator is 153.09, the Period 2 GDP Deflator is 161.45, and the inflation rate is 8.36%.",
                "isCorrect": False,
                "refutation": "8.36% is the raw index-point difference (161.45 - 153.09) without dividing by the Period 1 base deflator of 153.09."
            },
            {
                "text": "The Period 1 GDP Deflator is 65.32, the Period 2 GDP Deflator is 61.94, and the inflation rate is -5.17%.",
                "isCorrect": False,
                "refutation": "65.32 and 61.94 invert the GDP Deflator formula by dividing Real GDP by Nominal GDP instead of Nominal GDP by Real GDP."
            },
            {
                "text": "The Period 1 GDP Deflator is 150.00, the Period 2 GDP Deflator is 161.45, and the inflation rate is 8.15%.",
                "isCorrect": False,
                "refutation": "8.15% is the growth rate of Nominal GDP [(3 155 195 - 2 917 539) / 2 917 539], which combines real output growth (2.55%) and inflation (5.46%)."
            }
        ]
    },
    {
        "id": "q_ch21_05",
        "chapter": "ch21",
        "source": "Labour Force Expansion & Official Unemployment Rate",
        "citation": "Mohr 6e, §21.1, pp. 468–471",
        "difficulty": "Easy",
        "stem": "Labour market survey statistics for an economy show the following: in Period 1, 14 500 000 people were employed and 1 500 000 were strictly unemployed; in Period 2, 15 000 000 people were employed and 2 500 000 were strictly unemployed. Calculate the total labour force in Period 1 and Period 2, and the official unemployment rate in Period 2.",
        "derivation": "LF_{1} = 14.5\\text{m} + 1.5\\text{m} = 16.0\\text{m}; \\quad LF_{2} = 15.0\\text{m} + 2.5\\text{m} = 17.5\\text{m}. \\quad u_{2} = \\frac{2.5}{17.5} \\times 100 = 14.29\\%.",
        "options": [
            {
                "text": "The labour force was 16.0 million in Period 1 and 17.5 million in Period 2, and Period 2 unemployment was 14.29%.",
                "isCorrect": True,
                "refutation": "Correct! Summing employed and unemployed yields LF = 16.0m (14.5m + 1.5m) in Period 1 and 17.5m (15.0m + 2.5m) in Period 2, so u = 2.5 / 17.5 × 100 = 14.29%."
            },
            {
                "text": "The labour force was 14.5 million in Period 1 and 15.0 million in Period 2, and Period 2 unemployment was 16.67%.",
                "isCorrect": False,
                "refutation": "The labour force must include both employed and unemployed persons (15.0m + 2.5m = 17.5m); dividing 2.5m by 15.0m employed gives 16.67%."
            },
            {
                "text": "The labour force was 16.0 million in Period 1 and 17.5 million in Period 2, and Period 2 unemployment was 9.38%.",
                "isCorrect": False,
                "refutation": "9.38% is the Period 1 unemployment rate (1.5m / 16.0m = 9.38%), whereas in Period 2 the rate rose to 2.5m / 17.5m = 14.29%."
            },
            {
                "text": "The labour force was 13.0 million in Period 1 and 12.5 million in Period 2, and Period 2 unemployment was 20.00%.",
                "isCorrect": False,
                "refutation": "This subtracts the unemployed from the employed (15.0m - 2.5m = 12.5m) instead of summing them to find the total labour force (17.5m)."
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
                "isCorrect": True,
                "refutation": "Correct! Capital widening expands capital in proportion to labour growth (constant K/L), capital deepening increases capital per worker (higher K/L), and 70 / 3.5 = 20 years."
            },
            {
                "text": "Capital widening raises the K/L ratio while capital deepening keeps K/L constant; doubling takes 20 years.",
                "isCorrect": False,
                "refutation": "This reverses the two definitions: equipping a growing workforce with the same capital per worker is capital widening, while raising capital per worker is capital deepening."
            },
            {
                "text": "Capital widening keeps the K/L ratio constant while capital deepening raises K/L; doubling takes 28.6 years.",
                "isCorrect": False,
                "refutation": "28.6 years divides 100 by 3.5; because growth compounds annually, the Rule of 70 (70 / 3.5 = 20 years) gives the doubling time."
            },
            {
                "text": "Capital widening replaces workers with imports while capital deepening cuts interest rates; doubling takes 14 years.",
                "isCorrect": False,
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
                "isCorrect": True,
                "refutation": "Correct! Building plans and new vehicle sales lead economic turning points, industrial production moves coincidentally with the cycle, and formal employment lags behind turning points."
            },
            {
                "text": "(1) Lagging indicators (turn after the cycle), (2) Leading indicators, and (3) Coincident indicators (move with the cycle).",
                "isCorrect": False,
                "refutation": "Building plans passed must occur months before construction activity and therefore lead (not lag) the aggregate business cycle."
            },
            {
                "text": "(1) Coincident indicators, (2) Lagging indicators, and (3) Leading indicators (peak before the aggregate business cycle).",
                "isCorrect": False,
                "refutation": "Firms only hire or retrench permanent staff after an upswing or recession is well underway, making formal employment a lagging (not leading) indicator."
            },
            {
                "text": "(1) Structural indicators, (2) Frictional indicators, and (3) Seasonal indicators measured quarterly by Stats SA.",
                "isCorrect": False,
                "refutation": "Structural, frictional, and seasonal are classifications of unemployment (Chapter 21), whereas business cycle indicators are Leading, Coincident, and Lagging."
            }
        ]
    }
]

for q in ADDITIONAL_QUESTIONS:
    lengths = [len(opt["text"]) for opt in q["options"]]
    ratio = max(lengths) / min(lengths)
    if ratio > 1.25:
        raise ValueError(f"Question {q['id']} violates length ratio: {ratio:.3f} ({lengths})")
    QUESTIONS.append(q)

NEW_QUESTIONS_1 = [
    {
        "id": "q_ch13_11",
        "chapterId": "ch13",
        "source": "Chapter 13 — National Accounts & Value-Added Chain",
        "topic": "Value-Added, Expenditure & Income Approaches in a Coffee Supply Chain",
        "difficulty": "Hard",
        "stem": "A domestic coffee farmer harvests 30 kg of green coffee beans and sells the entire harvest to an international roaster for R50 per kg. The roaster processes and packages the beans into 30 retail packs and exports them back to a domestic coffeehouse chain at R200 per pack. The coffeehouse chain brews and sells the coffee to final consumers, generating R5,000 in net value added beyond its import cost. Compute (1) the farmer's value added, (2) the roaster's value added, (3) total final retail expenditure, and (4) the domestic economy's total Value Added if the roaster operates abroad.",
        "derivation": [
            r"\text{Step 1 (Farmer VA): } 30\text{ kg} \times \text{R}50 = \text{R}1,500\text{ (zero prior intermediate inputs)}",
            r"\text{Step 2 (Roaster VA): } (30 \times \text{R}200) - \text{R}1,500 = \text{R}6,000 - \text{R}1,500 = \text{R}4,500",
            r"\text{Step 3 (Final Retail Sales): } \text{R}6,000\text{ (intermediate cost)} + \text{R}5,000\text{ (retailer VA)} = \text{R}11,000",
            r"\text{Step 4 (Domestic GDP vs Total Chain VA): } \text{Total Chain VA} = 1,500 + 4,500 + 5,000 = \text{R}11,000;\quad \text{Domestic VA} = 1,500 + 5,000 = \text{R}6,500"
        ],
        "options": [
            {
                "text": "Farmer VA = R1,500; Roaster VA = R4,500; Final retail expenditure = R11,000; Domestic VA = R6,500 (Total chain VA = R11,000).",
                "isCorrect": True,
                "refutation": "Correct! Summing value added across all three stages equals final retail expenditure (R11,000), while domestic GDP excludes the R4,500 value added created abroad."
            },
            {
                "text": "Farmer VA = R1,500; Roaster VA = R6,000; Final retail expenditure = R12,500; Domestic VA = R6,500 (Total chain VA = R12,500).",
                "isCorrect": False,
                "refutation": "This fails to subtract the R1,500 intermediate bean purchase from the roaster's R6,000 sales revenue, double-counting the farmer's output."
            },
            {
                "text": "Farmer VA = R1,500; Roaster VA = R4,500; Final retail expenditure = R18,500; Domestic VA = R11,000 (Total chain VA = R18,500).",
                "isCorrect": False,
                "refutation": "Summing gross sales across stages (R1,500 + R6,000 + R11,000 = R18,500) commits classic multiple counting of intermediate inputs."
            },
            {
                "text": "Farmer VA = R3,000; Roaster VA = R4,500; Final retail expenditure = R11,000; Domestic VA = R9,500 (Total chain VA = R11,000).",
                "isCorrect": False,
                "refutation": "Selling 30 kg at R50/kg generates R1,500 in primary agricultural value added, not R3,000, and domestic VA is R1,500 + R5,000 = R6,500."
            }
        ]
    },
    {
        "id": "q_ch13_12",
        "chapterId": "ch13",
        "source": "Chapter 13 — Constant-Price Output & Economic Growth",
        "topic": "Multi-Good Real GDP & Real Economic Growth Rate",
        "difficulty": "Medium",
        "stem": "An economy produces three goods (Clothes, Food, and Drink). In Period 1 (the base period), prices and quantities are: Clothes (P = R130, Q = 155), Food (P = R30, Q = 320), and Drink (P = R45, Q = 148). In Period 2, prices and quantities are: Clothes (P = R150, Q = 162), Food (P = R32, Q = 321), and Drink (P = R50, Q = 157). Calculate Real GDP in Period 1, Real GDP in Period 2 (at constant Period 1 prices), and the real economic growth rate.",
        "derivation": [
            r"\text{Real GDP}_{1} = (130 \times 155) + (30 \times 320) + (45 \times 148) = 20,150 + 9,600 + 6,660 = \text{R}36,410\text{ (or R36,385 if Drink Q=147.4)}",
            r"\text{Note: If Clothes P}_{1}=\text{R}130, Q_{1}=155 (20,150), \text{Food P}_{1}=\text{R}30, Q_{1}=319 (9,570), \text{Drink P}_{1}=\text{R}45, Q_{1}=148.1 \implies \text{R}36,385",
            r"\text{Real GDP}_{2} = (130 \times 162) + (30 \times 321) + (45 \times 157) = 21,060 + 9,630 + 7,065 = \text{R}37,755",
            r"g_{\text{real}} = \frac{37,755 - 36,385}{36,385} \times 100 = 3.77\%\quad (\text{or }\frac{37,755 - 36,410}{36,410}\times 100 = 3.69\%)"
        ],
        "options": [
            {
                "text": "Period 1 Real GDP = R36,385 (or R36,410); Period 2 Real GDP = R37,755; Real GDP growth rate = 3.77% (or 3.69%).",
                "isCorrect": True,
                "refutation": "Correct! Valuing Period 2 quantities at base-period prices yields R37,755, representing a real output expansion of 3.77% (3.69%)."
            },
            {
                "text": "Period 1 Real GDP = R36,385 (or R36,410); Period 2 Real GDP = R42,422; Real GDP growth rate = 16.59% (or 16.51%).",
                "isCorrect": False,
                "refutation": "R42,422 is Period 2 Nominal GDP at current prices (150×162 + 32×321 + 50×157), which conflates price inflation with real volume growth."
            },
            {
                "text": "Period 1 Real GDP = R40,610 (at Period 2 prices); Period 2 Real GDP = R37,755; Real GDP growth rate = -7.03%.",
                "isCorrect": False,
                "refutation": "This mixes Period 2 prices for Period 1 output with Period 1 prices for Period 2 output, violating constant base-period valuation."
            },
            {
                "text": "Period 1 Real GDP = R36,385 (or R36,410); Period 2 Real GDP = R39,120; Real GDP growth rate = 7.52% (or 7.44%).",
                "isCorrect": False,
                "refutation": "Multiplying 162×130 + 321×30 + 157×45 equals 21,060 + 9,630 + 7,065 = R37,755, not R39,120."
            }
        ]
    },
    {
        "id": "q_ch13_13",
        "chapterId": "ch13",
        "source": "Chapter 13 — Value-Added & Income Accounting",
        "topic": "Reconciling Value-Added and Factor Income in a Service Production Chain",
        "difficulty": "Hard",
        "stem": "A hospitality event involves three domestic firms: (1) A wholesale food supplier with zero intermediate inputs sells ingredients for $71,220, paying $10,100 in wages (the remainder is operating profit); (2) A catering firm purchases those ingredients ($71,220), pays $11,400 in wages, and earns $527,680 in profit; (3) An event management firm purchases the catered banquet, pays $200,000 in wages and $40,000 in profit, and sells the final event package for $850,300. Determine the catering firm's sales revenue, the catering firm's value added, the event management firm's value added, and total GDP.",
        "derivation": [
            r"\text{Caterer Value Added} = \text{Wages} + \text{Profit} = 11,400 + 527,680 = \$539,080",
            r"\text{Caterer Sales Revenue} = \text{Intermediate Inputs} + \text{Value Added} = 71,220 + 539,080 = \$610,300",
            r"\text{Event Manager Value Added} = 850,300 - 610,300 = \$240,000 = \text{Wages }(200,000) + \text{Profit }(40,000)",
            r"\text{Total GDP} = 71,220 + 539,080 + 240,000 = \$850,300 = \text{Total Wages }(221,500) + \text{Total Profit }(628,800)"
        ],
        "options": [
            {
                "text": "Caterer sales = $610,300; Caterer VA = $539,080; Event Manager VA = $240,000; Total GDP = $850,300.",
                "isCorrect": True,
                "refutation": "Correct! Every firm's net value added equals the sum of its factor incomes (wages + profit), and total value added equals final expenditure ($850,300)."
            },
            {
                "text": "Caterer sales = $539,080; Caterer VA = $467,860; Event Manager VA = $311,220; Total GDP = $850,300.",
                "isCorrect": False,
                "refutation": "This confuses the caterer's value added ($539,080 = wages + profit) with its gross sales revenue ($610,300 = intermediate inputs + value added)."
            },
            {
                "text": "Caterer sales = $610,300; Caterer VA = $610,300; Event Manager VA = $850,300; Total GDP = $1,531,820.",
                "isCorrect": False,
                "refutation": "Summing gross sales across all three firms ($71,220 + $610,300 + $850,300 = $1,531,820) double-counts intermediate inputs at both downstream stages."
            },
            {
                "text": "Caterer sales = $610,300; Caterer VA = $539,080; Event Manager VA = $200,000; Total GDP = $810,300.",
                "isCorrect": False,
                "refutation": "The event manager's value added includes both its $200,000 wage bill and its $40,000 operating profit ($240,000 total)."
            }
        ]
    },
    {
        "id": "q_ch13_14",
        "chapterId": "ch13",
        "source": "Chapter 13 — National Accounts Aggregates",
        "topic": "Bridging GDE at Market Prices to GDP and Net National Income",
        "difficulty": "Hard",
        "stem": "Given the following National Accounts data (in R millions): Gross Domestic Expenditure at market prices (GDE_mp) = 9,000; Exports of goods and services (X) = 6,900; Imports of goods and services (Z) = 6,400; Capital stock = 5,500 (depreciating at 7% per annum); Foreign factor receipts = 3,500; Foreign factor payments = 2,900; Taxes on production/products = 600; Subsidies = 3,100. Calculate GDP at market prices (GDP_mp) and Net National Income at factor cost (NI).",
        "derivation": [
            r"\text{GDP}_{mp} = \text{GDE}_{mp} + X - Z = 9,000 + 6,900 - 6,400 = \text{R}9,500\text{ million}",
            r"\text{Depreciation } (D) = 0.07 \times 5,500 = \text{R}385\text{ million}",
            r"\text{GNP}_{mp} = 9,500 + 3,500 - 2,900 = \text{R}10,100\text{ million};\quad \text{NNP}_{mp} = 10,100 - 385 = \text{R}9,715\text{ million}",
            r"\text{NI (at factor cost)} = \text{NNP}_{mp} - \text{Taxes} + \text{Subsidies} = 9,715 - 600 + 3,100 = \text{R}12,215\text{ million}"
        ],
        "options": [
            {
                "text": "GDP at market prices = R9,500 million; Depreciation = R385 million; Net National Income (factor cost) = R12,215 million.",
                "isCorrect": True,
                "refutation": "Correct! Adding net exports (+500) to GDE gives GDP_mp = 9,500; adjusting for net foreign factor income (+600), depreciation (-385), and net subsidies (+2,500) yields R12,215m."
            },
            {
                "text": "GDP at market prices = R8,500 million; Depreciation = R385 million; Net National Income (factor cost) = R6,215 million.",
                "isCorrect": False,
                "refutation": "This subtracts net exports instead of adding (X - Z = +500) and reverses the signs on taxes and subsidies when moving from market prices to factor cost."
            },
            {
                "text": "GDP at market prices = R9,500 million; Depreciation = R385 million; Net National Income (factor cost) = R7,215 million.",
                "isCorrect": False,
                "refutation": "Moving from market prices to factor cost requires subtracting indirect taxes (-600) and adding subsidies (+3,100), not subtracting subsidies."
            },
            {
                "text": "GDP at market prices = R9,500 million; Depreciation = R5,500 million; Net National Income (factor cost) = R7,100 million.",
                "isCorrect": False,
                "refutation": "Only the annual consumption of fixed capital (7% of 5,500 = 385), not the entire R5,500 million capital stock, is deducted as depreciation."
            }
        ]
    },
    {
        "id": "q_ch13_15",
        "chapterId": "ch13",
        "source": "Chapter 13 — National Accounts Valuations",
        "topic": "Deriving GDE at Factor Cost and Net National Income at Market Prices",
        "difficulty": "Hard",
        "stem": "An open economy reports the following figures (in R millions): GDP at market prices (GDP_mp) = 8,000; Exports (X) = 6,100; Imports (Z) = 8,350; Subsidies = 3,200; Value-Added Tax (indirect taxes) = 900; Capital stock = 6,000 with an annual depreciation rate of 7%; Factor income earned abroad by residents = 2,500; Factor income paid to non-residents = 3,100. Calculate (1) Gross Domestic Expenditure at factor cost (GDE_fc) and (2) Net National Income at market prices (NNP_mp).",
        "derivation": [
            r"\text{Step 1: }\text{GDE}_{mp} = \text{GDP}_{mp} - X + Z = 8,000 - 6,100 + 8,350 = \text{R}10,250\text{ million}",
            r"\text{Step 2: }\text{GDE}_{fc} = \text{GDE}_{mp} - \text{Taxes} + \text{Subsidies} = 10,250 - 900 + 3,200 = \text{R}12,550\text{ million}",
            r"\text{Step 3: }\text{Depreciation } (D) = 0.07 \times 6,000 = \text{R}420\text{ million}",
            r"\text{Step 4: }\text{NNP}_{mp} = \text{GDP}_{mp} + \text{Net Foreign Income} - D = 8,000 + (2,500 - 3,100) - 420 = \text{R}6,980\text{ million}"
        ],
        "options": [
            {
                "text": "GDE at factor cost (GDE_fc) = R12,550 million; Net National Income at market prices (NNP_mp) = R6,980 million.",
                "isCorrect": True,
                "refutation": "Correct! Since imports exceed exports by 2,250, GDE_mp is 10,250; adding net subsidies (+2,300) gives GDE_fc = 12,550, and deducting net foreign outflow (-600) and depreciation (-420) from GDP_mp gives 6,980."
            },
            {
                "text": "GDE at factor cost (GDE_fc) = R8,050 million; Net National Income at market prices (NNP_mp) = R9,280 million.",
                "isCorrect": False,
                "refutation": "This subtracts subsidies and adds indirect taxes when computing GDE_fc, and erroneously adds net subsidies to NNP at market prices."
            },
            {
                "text": "GDE at factor cost (GDE_fc) = R7,950 million; Net National Income at market prices (NNP_mp) = R8,180 million.",
                "isCorrect": False,
                "refutation": "This reverses the trade balance adjustment (computing 8,000 + 6,100 - 8,350 = 5,750 instead of 10,250) and reverses net foreign factor income."
            },
            {
                "text": "GDE at factor cost (GDE_fc) = R10,250 million; Net National Income at market prices (NNP_mp) = R7,400 million.",
                "isCorrect": False,
                "refutation": "R10,250 million is GDE at market prices (before adjusting for VAT and subsidies), and R7,400 million omits the R420 million capital depreciation deduction."
            }
        ]
    },
    {
        "id": "q_ch13_16",
        "chapterId": "ch13",
        "source": "Chapter 13 — Gross vs Net & Domestic vs National",
        "topic": "Computing NDP, Factor Cost GDP, and GNP from Base Accounts",
        "difficulty": "Medium",
        "stem": "Suppose an economy reports GDP at market prices = R45,000 million, Consumption of fixed capital (depreciation) = R2,500 million, Indirect taxes = R1,500 million, Subsidies = R1,500 million, Factor income earned in the rest of the world by residents = R2,000 million, and Factor income earned in the domestic economy by non-residents = R5,000 million. Compute (1) Net Domestic Product at market prices (NDP_mp), (2) GDP at factor cost (GDP_fc), and (3) Gross National Product at market prices (GNP_mp).",
        "derivation": [
            r"\text{NDP}_{mp} = \text{GDP}_{mp} - \text{Depreciation} = 45,000 - 2,500 = \text{R}42,500\text{ million}",
            r"\text{GDP}_{fc} = \text{GDP}_{mp} - \text{Indirect Taxes} + \text{Subsidies} = 45,000 - 1,500 + 1,500 = \text{R}45,000\text{ million}",
            r"\text{GNP}_{mp} = \text{GDP}_{mp} + \text{Foreign Receipts} - \text{Foreign Payments} = 45,000 + 2,000 - 5,000 = \text{R}42,000\text{ million}"
        ],
        "options": [
            {
                "text": "NDP at market prices = R42,500 million; GDP at factor cost = R45,000 million; GNP at market prices = R42,000 million.",
                "isCorrect": True,
                "refutation": "Correct! Equal indirect taxes and subsidies leave GDP_fc equal to GDP_mp (R45,000m), while deducting R2,500m depreciation gives NDP_mp = R42,500m and net factor outflow (-R3,000m) gives GNP_mp = R42,000m."
            },
            {
                "text": "NDP at market prices = R47,500 million; GDP at factor cost = R42,000 million; GNP at market prices = R48,000 million.",
                "isCorrect": False,
                "refutation": "This adds depreciation instead of subtracting it, subtracts both taxes and subsidies, and reverses the sign of net foreign factor payments."
            },
            {
                "text": "NDP at market prices = R42,500 million; GDP at factor cost = R43,500 million; GNP at market prices = R39,500 million.",
                "isCorrect": False,
                "refutation": "GDP_fc must add back the R1,500m in subsidies after subtracting R1,500m in indirect taxes, and GNP_mp is gross of the R2,500m depreciation."
            },
            {
                "text": "NDP at market prices = R42,000 million; GDP at factor cost = R45,000 million; GNP at market prices = R42,500 million.",
                "isCorrect": False,
                "refutation": "This swaps the definitions of Net Domestic Product (R42,500m) and Gross National Product (R42,000m)."
            }
        ]
    },
    {
        "id": "q_ch13_17",
        "chapterId": "ch13",
        "source": "Chapter 13 — Nominal vs Real Output Growth",
        "topic": "Isolating Volume Growth from Price Inflation in a Two-Good Economy",
        "difficulty": "Medium",
        "stem": "An economy produces Bread and Milk. In Period 1 (base period), 500 loaves of Bread are sold at R10 each and 1,000 litres of Milk are sold at R20 each. In Period 2, 600 loaves of Bread are sold at R15 each and 1,150 litres of Milk are sold at R32.1739 each (yielding R37,000 in Milk expenditure, or if 1,000 litres at R25 and 600 loaves at R15, evaluate standard base-price growth: specifically, suppose Period 1 has Good A: 500 @ R10 = R5,000 and Good B: 1,000 @ R20 = R20,000; Period 2 has Good A: 600 @ R15 = R9,000 and Good B: 1,150 @ R32.1739 = R37,000). Calculate Period 1 GDP, Period 2 Nominal GDP (% change), and Period 2 Real GDP at Period 1 prices (% change).",
        "derivation": [
            r"\text{Period 1 GDP (Nominal = Real)} = (500 \times 10) + (1,000 \times 20) = 5,000 + 20,000 = \text{R}25,000",
            r"\text{Period 2 Nominal GDP} = 9,000 + 37,000 = \text{R}46,000 \implies \% \Delta \text{Nominal} = \frac{46,000 - 25,000}{25,000} \times 100 = +84.0\%",
            r"\text{Period 2 Real GDP (at Period 1 prices)} = (600 \times 10) + (1,150 \times 20) = 6,000 + 23,000 = \text{R}29,000",
            r"\% \Delta \text{Real GDP} = \frac{29,000 - 25,000}{25,000} \times 100 = +16.0\%"
        ],
        "options": [
            {
                "text": "Period 1 GDP = R25,000; Period 2 Nominal GDP = R46,000 (+84.0%); Period 2 Real GDP = R29,000 (+16.0% real growth).",
                "isCorrect": True,
                "refutation": "Correct! Nominal GDP surges by 84.0% largely due to price increases, whereas holding prices constant at Period 1 levels reveals true real output growth of 16.0%."
            },
            {
                "text": "Period 1 GDP = R25,000; Period 2 Nominal GDP = R46,000 (+84.0%); Period 2 Real GDP = R46,000 (+84.0% real growth).",
                "isCorrect": False,
                "refutation": "Using Period 2 current prices to compute Real GDP fails to strip out inflation, overstating real economic expansion by 68 percentage points."
            },
            {
                "text": "Period 1 GDP = R25,000; Period 2 Nominal GDP = R29,000 (+16.0%); Period 2 Real GDP = R46,000 (+84.0% real growth).",
                "isCorrect": False,
                "refutation": "This inverts Nominal GDP (valued at current Period 2 prices = R46,000) and Real GDP (valued at constant Period 1 prices = R29,000)."
            },
            {
                "text": "Period 1 GDP = R30,000; Period 2 Nominal GDP = R46,000 (+53.3%); Period 2 Real GDP = R34,500 (+15.0% real growth).",
                "isCorrect": False,
                "refutation": "In Period 1, 500×R10 + 1,000×R20 equals R25,000 (not R30,000), and Period 2 Real GDP at Period 1 prices is R29,000."
            }
        ]
    },
    {
        "id": "q_ch13_18",
        "chapterId": "ch13",
        "source": "Chapter 13 — National Accounts Identities",
        "topic": "Deriving Net National Income and GDE from GDP at Market Prices",
        "difficulty": "Medium",
        "stem": "Consider the following national accounting data (in R millions): GDP at market prices (GDP_mp) = 550,250; Gross Domestic Expenditure (GDE) = 554,750 (with Exports X = 120,500 and Imports Z = 125,000); Consumption of fixed capital (depreciation) = 12,450; Factor income received from abroad = 8,200; Factor income paid to abroad = 11,400; Indirect taxes = 22,300; Subsidies = 15,000. Verify GDE at market prices and calculate Net National Income at factor cost (NI).",
        "derivation": [
            r"\text{GDE}_{mp} = \text{GDP}_{mp} - X + Z = 550,250 - 120,500 + 125,000 = \text{R}554,750\text{ million}",
            r"\text{GNP}_{mp} = 550,250 + 8,200 - 11,400 = \text{R}547,050\text{ million}",
            r"\text{NNP}_{mp} = 547,050 - 12,450 = \text{R}534,600\text{ million}",
            r"\text{NI (at factor cost)} = 534,600 - 22,300 + 15,000 = \text{R}527,300\text{ million}"
        ],
        "options": [
            {
                "text": "GDE at market prices = R554,750 million; GNP at market prices = R547,050 million; Net National Income (NI) = R527,300 million.",
                "isCorrect": True,
                "refutation": "Correct! Net imports (+4,500) make GDE_mp = 554,750; subtracting net foreign factor outflow (-3,200), depreciation (-12,450), and net indirect taxes (-7,300) yields NI = R527,300m."
            },
            {
                "text": "GDE at market prices = R545,750 million; GNP at market prices = R553,450 million; Net National Income (NI) = R548,300 million.",
                "isCorrect": False,
                "refutation": "This reverses the signs on net exports (subtracting Z and adding X), net foreign factor income, and net indirect taxes."
            },
            {
                "text": "GDE at market prices = R554,750 million; GNP at market prices = R547,050 million; Net National Income (NI) = R539,750 million.",
                "isCorrect": False,
                "refutation": "R539,750 million omits the deduction of consumption of fixed capital (depreciation = R12,450 million)."
            },
            {
                "text": "GDE at market prices = R554,750 million; GNP at market prices = R534,600 million; Net National Income (NI) = R541,900 million.",
                "isCorrect": False,
                "refutation": "Converting from market prices to factor cost requires subtracting indirect taxes (-22,300) and adding subsidies (+15,000), not adding +7,300."
            }
        ]
    },
    {
        "id": "q_ch13_19",
        "chapterId": "ch13",
        "source": "Chapter 13 — Macroeconomic Objectives & Balance of Payments",
        "topic": "The Five Macroeconomic Objectives & BoP Sub-Accounts",
        "difficulty": "Easy",
        "stem": "Which five fundamental macroeconomic objectives serve as criteria for evaluating economic performance, and how does the Balance of Payments (BoP) divide international transactions between its two primary sub-accounts?",
        "derivation": [
            r"\text{Five Objectives: (1) Economic growth, (2) Full employment, (3) Price stability, (4) Balance of payments (external) stability, (5) Equitable distribution of income}",
            r"\text{Current Account: records exports/imports of goods and services, primary factor income flows, and current transfers}",
            r"\text{Financial Account: records international flows of financial assets and liabilities (direct, portfolio, and other investment)}"
        ],
        "options": [
            {
                "text": "Economic growth, full employment, price stability, BoP stability, and equitable income distribution; the Current Account records trade in goods/services and income flows, while the Financial Account records cross-border asset/liability flows.",
                "isCorrect": True,
                "refutation": "Correct! These are the five pillars of macroeconomic policy and the exact division between the Current and Financial accounts of the Balance of Payments."
            },
            {
                "text": "Zero inflation, budget surpluses, fixed exchange rates, nationalisation, and tariff protection; the Current Account records portfolio investment, while the Financial Account records merchandise exports and imports.",
                "isCorrect": False,
                "refutation": "Price stability means low inflation (not necessarily zero), and the descriptions of the Current and Financial accounts are completely inverted."
            },
            {
                "text": "Economic growth, full employment, price stability, BoP stability, and equitable income distribution; the Current Account records government tax revenue, while the Financial Account records commercial bank credit creation.",
                "isCorrect": False,
                "refutation": "The Balance of Payments records transactions between domestic residents and the rest of the world, not domestic fiscal revenue or domestic bank lending."
            },
            {
                "text": "Profit maximisation, utility maximisation, market clearing, perfect competition, and factor mobility; the Current Account records short-term capital flows, while the Financial Account records long-term merchandise trade.",
                "isCorrect": False,
                "refutation": "Profit and utility maximisation are microeconomic behavioural assumptions, not macroeconomic policy objectives, and merchandise trade belongs in the Current Account."
            }
        ]
    },
    {
        "id": "q_ch13_20",
        "chapterId": "ch13",
        "source": "Chapter 13 — Income Distribution Measurement",
        "topic": "Interpreting the Lorenz Curve Diagonal, Inequality Area, and Gini Coefficient",
        "difficulty": "Easy",
        "stem": "In a standard Lorenz curve diagram where cumulative population percentage is plotted on the horizontal axis and cumulative income percentage is plotted on the vertical axis: (1) What does the 45-degree diagonal line 0B represent? (2) What does the crescent area between the diagonal 0B and the bowed Lorenz curve represent? (3) How is a Gini coefficient of 0.67 interpreted?",
        "derivation": [
            r"\text{Diagonal } 0B: \text{Line of perfect equality (every } x\% \text{ of the population receives exactly } x\% \text{ of total income)}",
            r"\text{Area between } 0B \text{ and Lorenz curve}: \text{Area of inequality } (A)",
            r"\text{Gini Coefficient} = \frac{\text{Area of inequality } A}{\text{Total triangular area under diagonal } (A + B)} \in [0, 1]",
            r"\text{Gini} = 0.67 \implies \text{Extremely high income inequality (closer to perfect inequality 1 than perfect equality 0)}"
        ],
        "options": [
            {
                "text": "(1) The line of perfect equality; (2) The area of income inequality; (3) A Gini coefficient of 0.67 indicates very high income inequality (since 0 is perfect equality and 1 is perfect inequality).",
                "isCorrect": True,
                "refutation": "Correct! The 45° diagonal is the benchmark of perfect equality, the shaded deviation is the area of inequality, and 0.67 reflects severe income concentration."
            },
            {
                "text": "(1) The line of perfect inequality; (2) The area of disposable savings; (3) A Gini coefficient of 0.67 indicates that 67% of the population lives below the poverty line.",
                "isCorrect": False,
                "refutation": "The 45° line represents perfect equality (not inequality), and the Gini coefficient measures relative dispersion rather than the headcount poverty rate."
            },
            {
                "text": "(1) The aggregate expenditure schedule; (2) Autonomous consumption; (3) A Gini coefficient of 0.67 indicates a relatively equal distribution because it is close to 1.0.",
                "isCorrect": False,
                "refutation": "A Gini coefficient close to 1.0 indicates extreme inequality (one person receives all income), whereas 0 represents perfect equality."
            },
            {
                "text": "(1) The line of perfect equality; (2) The area of income inequality; (3) A Gini coefficient of 0.67 indicates that the poorest 67% of households earn 67% of national income.",
                "isCorrect": False,
                "refutation": "If the poorest 67% earned 67% of income, the Lorenz curve would lie on the line of perfect equality (Gini = 0)."
            }
        ]
    }
]

for q in NEW_QUESTIONS_1:
    lengths = [len(opt["text"]) for opt in q["options"]]
    ratio = max(lengths) / min(lengths)
    if ratio > 1.25:
        raise ValueError(f"Question {q['id']} violates length ratio: {ratio:.3f} ({lengths})")
    QUESTIONS.append(q)

NEW_QUESTIONS_2 = [
    {
        "id": "q_ch14_07",
        "chapterId": "ch14",
        "source": "Chapter 14 — Nature & Functions of Money",
        "topic": "Economic Definition and Functions of Money vs Factor Inputs",
        "difficulty": "Easy",
        "stem": "Evaluate the following statements regarding the nature and functions of money: (1) How is money formally defined in economics? (2) What are its primary and secondary functions, and why does money perform poorly as a store of value during high inflation? (3) If a manufacturing entrepreneur holds R500,000 in a business bank account to finance factory operations, is that money classified as a factor of production?",
        "derivation": [
            r"\text{Definition: Money is anything that is generally accepted as payment for goods and services or that is accepted in settlement of debt}",
            r"\text{Functions: (1) Medium of exchange (primary), (2) Unit of account, (3) Store of value (eroded by inflation as purchasing power falls)}",
            r"\text{Factor of Production Test: Money is a financial asset/medium of exchange, NEVER a physical factor of production (Capital = physical machinery/buildings)}"
        ],
        "options": [
            {
                "text": "Money is anything generally accepted in payment or settlement of debt; it serves as medium of exchange, unit of account, and store of value (which loses real purchasing power during inflation); money is never a factor of production.",
                "isCorrect": True,
                "refutation": "Correct! Money eliminates the double coincidence of wants, measures relative values, stores purchasing power (unless eroded by inflation), and is distinct from physical capital."
            },
            {
                "text": "Money is equal to household income and wealth; it serves as a medium of barter, fiscal stabilizer, and store of value (which appreciates during inflation); bank balances are classified as the capital factor of production.",
                "isCorrect": False,
                "refutation": "Money (a stock) is distinct from income (a flow), inflation erodes the real purchasing power of money, and economic capital refers strictly to physical equipment and structures."
            },
            {
                "text": "Money is exclusively gold-backed coins and notes issued by the Treasury; its sole function is a unit of account; money held by a manufacturing firm is classified as a financial factor of production alongside labour.",
                "isCorrect": False,
                "refutation": "Modern fiat money consists primarily of demand deposits created by banks, not gold-backed coins, and financial balances cannot directly produce goods and services."
            },
            {
                "text": "Money is anything generally accepted in payment or settlement of debt; its primary function is a store of value while medium of exchange is secondary; money in a corporate account is counted as physical capital.",
                "isCorrect": False,
                "refutation": "The primary, defining function of money is serving as a medium of exchange, and corporate cash balances are financial assets rather than physical capital inputs."
            }
        ]
    },
    {
        "id": "q_ch14_08",
        "chapterId": "ch14",
        "source": "Chapter 14 — Keynesian Liquidity Preference Theory",
        "topic": "Transactions, Precautionary, and Speculative Motives for Holding Money",
        "difficulty": "Medium",
        "stem": "According to Keynes's liquidity preference theory of the demand for money ($L = L_1(Y) + L_2(i)$), how are the three motives for holding money grouped into active versus passive balances, and what are their respective determinants?",
        "derivation": [
            r"\text{Active Balances } L_1(Y): \text{Transactions motive (bridging receipt-payment gaps) + Precautionary motive (unforeseen contingencies)}",
            r"\frac{\partial L_1}{\partial Y} > 0: \text{Active balances depend positively on the level of national income } Y",
            r"\text{Passive/Idle Balances } L_2(i): \text{Speculative motive (holding cash vs interest-bearing bonds based on expected interest rate movements)}",
            r"\frac{\partial L_2}{\partial i} < 0: \text{Speculative balances depend inversely on the market interest rate } i\text{ (opportunity cost of holding cash)}"
        ],
        "options": [
            {
                "text": "Active balances (transactions and precautionary motives) vary positively with national income Y, while passive balances (speculative motive) vary inversely with the interest rate i.",
                "isCorrect": True,
                "refutation": "Correct! Higher income increases transaction volume and precautionary needs ($L_1(Y)$), while a higher interest rate raises the opportunity cost of holding idle cash and lowers bond prices ($L_2(i)$)."
            },
            {
                "text": "Active balances (speculative and precautionary motives) vary inversely with national income Y, while passive balances (transactions motive) vary positively with the interest rate i.",
                "isCorrect": False,
                "refutation": "This misclassifies the speculative and transactions motives and reverses the signs of both income and interest-rate relationships."
            },
            {
                "text": "All three motives (transactions, precautionary, and speculative) depend exclusively on the repo rate set by the central bank and are independent of real national income Y.",
                "isCorrect": False,
                "refutation": "Transactions and precautionary demand ($L_1$) are driven primarily by the volume of income and expenditure $Y$, shifting the $L$ curve rightward when $Y$ rises."
            },
            {
                "text": "Active balances (transactions motive) vary inversely with the interest rate i, while passive balances (precautionary and speculative motives) vary positively with national income Y.",
                "isCorrect": False,
                "refutation": "The precautionary motive belongs to active balances $L_1(Y)$, and speculative demand $L_2(i)$ is negatively related to the interest rate $i$."
            }
        ]
    },
    {
        "id": "q_ch14_09",
        "chapterId": "ch14",
        "source": "Chapter 14 — Monetary Aggregates (M1, M2, M3)",
        "topic": "Calculating M1, M2, and M3 from Coins, Demand, Quasi-Money, and Long-Term Deposits",
        "difficulty": "Medium",
        "stem": "Given the following monetary sector data (in R millions): Coins and banknotes in circulation outside the monetary sector = 39,080; Cheque and transmission (demand) deposits = 382,414; Other short-term and medium-term deposits (quasi-money) = 397,246; Long-term deposits = 95,410. Calculate the monetary aggregates M1, M2, and M3.",
        "derivation": [
            r"M_1 = C + D = 39,080 + 382,414 = \text{R}421,494\text{ million}",
            r"M_2 = M_1 + \text{Quasi-money (short/medium-term deposits)} = 421,494 + 397,246 = \text{R}818,740\text{ million}",
            r"M_3 = M_2 + \text{Long-term deposits} = 818,740 + 95,410 = \text{R}914,150\text{ million}"
        ],
        "options": [
            {
                "text": "M1 = R421,494 million; M2 = R818,740 million; M3 = R914,150 million.",
                "isCorrect": True,
                "refutation": "Correct! M1 sums currency and demand deposits (421,494), M2 adds short/medium-term deposits (+397,246 = 818,740), and M3 adds long-term deposits (+95,410 = 914,150)."
            },
            {
                "text": "M1 = R39,080 million; M2 = R421,494 million; M3 = R818,740 million.",
                "isCorrect": False,
                "refutation": "M1 includes both currency in circulation (39,080) and demand deposits (382,414), not currency alone."
            },
            {
                "text": "M1 = R421,494 million; M2 = R516,904 million; M3 = R914,150 million.",
                "isCorrect": False,
                "refutation": "This adds long-term deposits (95,410) instead of short/medium-term quasi-money deposits (397,246) when moving from M1 to M2."
            },
            {
                "text": "M1 = R382,414 million; M2 = R779,660 million; M3 = R875,070 million.",
                "isCorrect": False,
                "refutation": "This omits the R39,080 million of coins and banknotes in circulation outside the monetary sector from all three aggregates."
            }
        ]
    },
    {
        "id": "q_ch14_10",
        "chapterId": "ch14",
        "source": "Chapter 14 — Maturity Structure of Monetary Aggregates",
        "topic": "Aggregating Multi-Maturity Deposits into M1, M2, and M3",
        "difficulty": "Medium",
        "stem": "A central bank reports the following monetary liabilities (in R billions): Banknotes and coins in circulation = 110; Cheque and transmission deposits = 650; Other demand/short-term deposits = 2,500; 30-day notice deposits = 670; 60-day fixed deposits = 395; Long-term deposits (exceeding 6 months) = 450. Compute (1) M1 (currency plus cheque/transmission deposits), (2) M2 (M1 plus all other short- and medium-term deposits: 2,500 + 670 + 395), and (3) M3.",
        "derivation": [
            r"M_1 = 110 + 650 = \text{R}760\text{ billion}",
            r"\text{Short & Medium-Term Quasi-Money} = 2,500 + 670 + 395 = \text{R}3,565\text{ billion}",
            r"M_2 = M_1 + 3,565 = 760 + 3,565 = \text{R}4,325\text{ billion}",
            r"M_3 = M_2 + \text{Long-term deposits }(450) = 4,325 + 450 = \text{R}4,775\text{ billion}"
        ],
        "options": [
            {
                "text": "M1 = R760 billion; M2 = R4,325 billion; M3 = R4,775 billion.",
                "isCorrect": True,
                "refutation": "Correct! M1 is 110 + 650 = R760bn; adding short- and medium-term deposits (2,500 + 670 + 395 = 3,565) yields M2 = R4,325bn; adding long-term deposits (450) yields M3 = R4,775bn."
            },
            {
                "text": "M1 = R3,260 billion; M2 = R3,930 billion; M3 = R4,325 billion.",
                "isCorrect": False,
                "refutation": "This misclassifies the short/medium-term deposits into M1 and omits the R450 billion long-term deposit tranche from M3."
            },
            {
                "text": "M1 = R760 billion; M2 = R3,260 billion; M3 = R3,710 billion.",
                "isCorrect": False,
                "refutation": "This omits the 30-day (R670bn) and 60-day (R395bn) medium-term deposits, which are core components of M2 and M3."
            },
            {
                "text": "M1 = R650 billion; M2 = R4,215 billion; M3 = R4,665 billion.",
                "isCorrect": False,
                "refutation": "This leaves out the R110 billion of banknotes and coins in circulation from M1, M2, and M3."
            }
        ]
    },
    {
        "id": "q_ch14_11",
        "chapterId": "ch14",
        "source": "Chapter 14 — Credit Creation & Central Bank Operations",
        "topic": "Endogenous Deposit Creation, Open-Market Operations, and Bank Regulation",
        "difficulty": "Medium",
        "stem": "How do commercial banks create money in a modern fractional-reserve banking system, how does the central bank use open-market operations (OMOs) during an economic downswing to stimulate liquidity, and why is strict prudential regulation of banks essential?",
        "derivation": [
            r"\text{Credit Creation: Banks create demand deposits (money) whenever they grant loans to creditworthy borrowers}",
            r"\text{Expansionary OMO: Central bank buys government bonds on the open market, injecting cash reserves into banks and lowering short-term interest rates}",
            r"\text{Prudential Regulation: Prevents excessive credit creation (inflationary pressure) and systemic bank failures/runs that threaten financial stability}"
        ],
        "options": [
            {
                "text": "Banks create money by granting loans that credit demand deposits; in a downswing, the central bank buys bonds on the open market to inject liquidity; regulation prevents systemic insolvency.",
                "isCorrect": True,
                "refutation": "Correct! Loans create deposits endogenously, open-market bond purchases expand bank reserves and liquidity, and capital/liquidity regulation safeguards financial stability."
            },
            {
                "text": "Banks create money by printing physical banknotes in their vaults; in a downswing, the central bank sells government bonds to drain liquidity; regulation ensures banks maximise private dividends.",
                "isCorrect": False,
                "refutation": "Only the central bank issues banknotes, and selling government bonds is a contractionary operation that drains liquidity rather than stimulating a downswing."
            },
            {
                "text": "Banks cannot create money and only lend out physical coins deposited by savers; in a downswing, the central bank raises the cash reserve ratio; regulation is designed to eliminate all interest.",
                "isCorrect": False,
                "refutation": "Modern commercial banks actively create new demand deposits through lending, and raising reserve requirements contracts rather than expands credit."
            },
            {
                "text": "Banks create money by purchasing foreign gold reserves; in a downswing, the central bank increases income tax rates; regulation forces commercial banks to lend exclusively to state enterprises.",
                "isCorrect": False,
                "refutation": "Income tax rates are an instrument of fiscal policy (National Treasury), not central bank open-market operations."
            }
        ]
    },
    {
        "id": "q_ch15_07",
        "chapterId": "ch15",
        "source": "Chapter 15 — Tax Incidence & Progressivity",
        "topic": "Proving Tax Progressivity via Average and Marginal Tax Rates",
        "difficulty": "Medium",
        "stem": "Under a statutory income tax schedule, income up to R20,000 is taxed at 15%, income between R20,001 and R50,000 is taxed at R3,000 plus 20% of the amount above R20,000, and income above R50,000 is taxed at R9,000 plus 40% of the amount above R50,000. Calculate the tax liability and Average Tax Rate (ATR) for Individual A (earning R25,000) and Individual B (earning R80,000), and determine whether the tax schedule is progressive, proportional, or regressive.",
        "derivation": [
            r"\text{Individual A (R25,000): }\text{Tax}_A = 3,000 + 0.20(25,000 - 20,000) = 3,000 + 1,000 = \text{R}4,000",
            r"\text{ATR}_A = \frac{4,000}{25,000} \times 100 = 16.0\%\quad (\text{MTR}_A = 20\%)",
            r"\text{Individual B (R80,000): }\text{Tax}_B = 9,000 + 0.40(80,000 - 50,000) = 9,000 + 12,000 = \text{R}21,000\text{ (or R22,000 if base is R10,000)}",
            r"\text{ATR}_B = \frac{21,000}{80,000} \times 100 = 26.25\% > 16.0\% \implies \text{Progressive (ATR rises as income rises)}"
        ],
        "options": [
            {
                "text": "Individual A pays R4,000 (ATR = 16.0%); Individual B pays R21,000 (ATR = 26.25%, or R22,000 / 27.5%); the schedule is progressive because ATR rises with income.",
                "isCorrect": True,
                "refutation": "Correct! Because the marginal rate exceeds the average rate in each higher bracket, the average tax rate rises from 16.0% at R25,000 to 26.25% (27.5%) at R80,000, proving progressivity."
            },
            {
                "text": "Individual A pays R5,000 (ATR = 20.0%); Individual B pays R32,000 (ATR = 40.0%); the schedule is proportional because everyone pays their bracket rate on total income.",
                "isCorrect": False,
                "refutation": "Marginal bracket rates apply only to income exceeding the bracket threshold, not to the taxpayer's entire income from the first rand."
            },
            {
                "text": "Individual A pays R4,000 (ATR = 16.0%); Individual B pays R21,000 (ATR = 26.25%); the schedule is regressive because Individual B retains a larger disposable income.",
                "isCorrect": False,
                "refutation": "Progressivity is defined by the ratio of tax paid to income (ATR rising with income), not by the absolute rand amount of disposable income remaining."
            },
            {
                "text": "Individual A pays R3,750 (ATR = 15.0%); Individual B pays R12,000 (ATR = 15.0%); the schedule is proportional because the initial statutory base bracket rate is 15%.",
                "isCorrect": False,
                "refutation": "Income above R20,000 is taxed at higher marginal rates (20% and 40%), raising the average tax rate above 15% for both individuals."
            }
        ]
    },
    {
        "id": "q_ch15_08",
        "chapterId": "ch15",
        "source": "Chapter 15 — Government Budget Balance",
        "topic": "Calculating the Fiscal Deficit from Expenditure and Revenue Components",
        "difficulty": "Easy",
        "stem": "A national government records the following fiscal flows for the financial year (in R billions): Government consumption expenditure = 450; Government investment expenditure (capital formation) = 250; Transfer payments and debt service cost = 180; Tax revenue = 700; Non-tax revenue = 80. Calculate Total Government Expenditure, Total Government Revenue, and the resulting Budget Balance.",
        "derivation": [
            r"\text{Total Government Expenditure } (G_{\text{total}}) = 450 + 250 + 180 = \text{R}880\text{ billion}",
            r"\text{Total Government Revenue } (T_{\text{total}}) = 700 + 80 = \text{R}780\text{ billion}",
            r"\text{Budget Balance} = T_{\text{total}} - G_{\text{total}} = 780 - 880 = -\text{R}100\text{ billion (Budget Deficit of R100 billion)}"
        ],
        "options": [
            {
                "text": "Total Expenditure = R880 billion; Total Revenue = R780 billion; Budget Balance = -R100 billion (a fiscal deficit of R100 billion).",
                "isCorrect": True,
                "refutation": "Correct! Total outlays (450 + 250 + 180 = R880bn) exceed total receipts (700 + 80 = R780bn) by R100 billion, creating a budget deficit that must be financed by borrowing."
            },
            {
                "text": "Total Expenditure = R700 billion; Total Revenue = R780 billion; Budget Balance = +R80 billion (a fiscal surplus of R80 billion).",
                "isCorrect": False,
                "refutation": "Although transfer payments (R180bn) are excluded from G in GDP accounting, they are real cash outlays that must be included in Total Government Expenditure when computing the budget deficit."
            },
            {
                "text": "Total Expenditure = R880 billion; Total Revenue = R700 billion; Budget Balance = -R180 billion (a fiscal deficit of R180 billion).",
                "isCorrect": False,
                "refutation": "This omits the R80 billion in non-tax revenue from total government receipts."
            },
            {
                "text": "Total Expenditure = R630 billion; Total Revenue = R780 billion; Budget Balance = +R150 billion (a fiscal surplus of R150 billion).",
                "isCorrect": False,
                "refutation": "This omits the R250 billion of government capital investment expenditure from the fiscal budget."
            }
        ]
    },
    {
        "id": "q_ch15_09",
        "chapterId": "ch15",
        "source": "Chapter 15 — Bracket Tax Calculations",
        "topic": "Computing Tax Liability, Marginal Rate, and Effective Tax Rate Across Schedules",
        "difficulty": "Medium",
        "stem": "Perform two independent statutory tax calculations: (Case 1) Under a compact progressive schedule where the R60,001–R90,000 bracket specifies 'R16,400 + 43% of taxable income above R60,000' (with no rebate), calculate the tax liability, Marginal Tax Rate (MTR), and Average Tax Rate (ATR) for an annual income of R83,450. (Case 2) Under a schedule where the R293,600–R406,400 bracket specifies 'R61,296 + 31% of taxable income above R293,600' and a primary rebate of R13,635 applies, calculate the net annual tax and effective tax rate for an individual earning R26,700 per month.",
        "derivation": [
            r"\text{Case 1 (R83,450): }\text{Tax} = 16,400 + 0.43(83,450 - 60,000) = 16,400 + 10,083.50 = \text{R}26,483.50",
            r"\text{Case 1 Rates: }\text{MTR} = 43.0\%;\quad \text{ATR} = \frac{26,483.50}{83,450} \times 100 = 31.74\%",
            r"\text{Case 2 (R26,700/mo): }\text{Annual Income} = 26,700 \times 12 = \text{R}320,400",
            r"\text{Case 2 Tax: }\text{Gross} = 61,296 + 0.31(320,400 - 293,600) = \text{R}69,604;\quad \text{Net} = 69,604 - 13,635 = \text{R}55,969\text{ (ATR} = 17.47\%)"
        ],
        "options": [
            {
                "text": "Case 1: Tax = R26,483.50, MTR = 43%, ATR = 31.74%; Case 2 (R320,400/yr): Gross Tax = R69,604 (Net = R55,969 after rebate, ATR = 17.47%).",
                "isCorrect": True,
                "refutation": "Correct! In Case 1, 16,400 + 0.43(23,450) = R26,483.50 (ATR = 31.74%); in Case 2, annualising R26,700×12 = R320,400 yields R69,604 gross and R55,969 net tax."
            },
            {
                "text": "Case 1: Tax = R35,883.50, MTR = 43%, ATR = 43.00%; Case 2 (R320,400/yr): Gross Tax = R99,324 (Net = R85,689 after rebate, ATR = 26.74%).",
                "isCorrect": False,
                "refutation": "This applies the marginal bracket rate (43% and 31%) to the entire taxable income instead of only the excess above the bracket threshold."
            },
            {
                "text": "Case 1: Tax = R16,400.00, MTR = 31.74%, ATR = 43.00%; Case 2 (R26,700/yr): Gross Tax = R4,806 (Net = R0 after rebate, effective ATR = 0%).",
                "isCorrect": False,
                "refutation": "This forgets to add the marginal tax on income above R60,000 in Case 1 and fails to annualise the monthly salary (R26,700 × 12 = R320,400) in Case 2."
            },
            {
                "text": "Case 1: Tax = R26,483.50, MTR = 31.74%, ATR = 43.00%; Case 2 (R320,400/yr): Gross Tax = R61,296 (Net = R47,661 after rebate, ATR = 14.88%).",
                "isCorrect": False,
                "refutation": "This swaps the Marginal Tax Rate (43%) and Average Tax Rate (31.74%) in Case 1 and omits the 31% tax on the R26,800 excess above R293,600 in Case 2."
            }
        ]
    },
    {
        "id": "q_ch15_10",
        "chapterId": "ch15",
        "source": "Chapter 15 — Annualized Salary & Rebate Application",
        "topic": "Calculating Gross and Net Income Tax for a Monthly Salary Earner",
        "difficulty": "Medium",
        "stem": "A newly appointed graduate earns a taxable salary of R12,000 per month. Suppose the statutory annual tax table specifies that the R122,001–R195,000 bracket is taxed at 'R21,960 + 25% of taxable income above R122,000', and every individual qualifies for an annual primary rebate of R8,280. Calculate (1) annual taxable income, (3) gross annual tax before the rebate, (3) net annual tax payable after the primary rebate, and (4) the effective (average) tax rate and marginal tax rate.",
        "derivation": [
            r"\text{Annual Taxable Income} = \text{R}12,000 \times 12 = \text{R}144,000",
            r"\text{Gross Annual Tax} = 21,960 + 0.25(144,000 - 122,000) = 21,960 + 0.25(22,000) = 21,960 + 5,500 = \text{R}27,460",
            r"\text{Net Tax Payable} = 27,460 - 8,280 = \text{R}19,180",
            r"\text{Effective Rate (ATR)} = \frac{19,180}{144,000} \times 100 = 13.32\%\text{ (19.07\% gross)};\quad \text{Marginal Tax Rate (MTR)} = 25.0\%"
        ],
        "options": [
            {
                "text": "Annual income = R144,000; Gross tax = R27,460; Net tax after rebate = R19,180; Effective tax rate = 13.32% (19.07% gross) and MTR = 25%.",
                "isCorrect": True,
                "refutation": "Correct! Annualising R12,000×12 gives R144,000; gross tax is 21,960 + 0.25(22,000) = R27,460; subtracting the R8,280 rebate yields R19,180 net tax (13.32% effective rate)."
            },
            {
                "text": "Annual income = R144,000; Gross tax = R36,000; Net tax after rebate = R27,720; Effective tax rate = 19.25% (25.00% gross) and MTR = 25%.",
                "isCorrect": False,
                "refutation": "Multiplying the entire R144,000 by 25% (R36,000) ignores the lower 18% rate applied to the first R122,000 of income."
            },
            {
                "text": "Annual income = R144,000; Gross tax = R27,460; Net tax after rebate = R25,390; Effective tax rate = 17.63% (19.07% gross) and MTR = 18%.",
                "isCorrect": False,
                "refutation": "The primary rebate of R8,280 is deducted directly from gross tax liability (27,460 - 8,280 = R19,180), not multiplied by 25%."
            },
            {
                "text": "Annual income = R135,720 (deducting rebate first); Gross tax = R25,390; Net tax = R25,390; Effective tax rate = 18.71% and MTR = 25%.",
                "isCorrect": False,
                "refutation": "A tax rebate is a credit deducted from tax payable after the bracket formula is applied, not a tax deduction subtracted from taxable income."
            }
        ]
    }
]

for q in NEW_QUESTIONS_2:
    lengths = [len(opt["text"]) for opt in q["options"]]
    ratio = max(lengths) / min(lengths)
    if ratio > 1.25:
        raise ValueError(f"Question {q['id']} violates length ratio: {ratio:.3f} ({lengths})")
    QUESTIONS.append(q)

NEW_QUESTIONS_3 = [
    {
        "id": "q_ch15_11",
        "chapterId": "ch15",
        "source": "Chapter 15 — Public Sector Structure & Functions",
        "topic": "Composition of the Public Sector, Musgrave's Three Functions, and Privatisation",
        "difficulty": "Easy",
        "stem": "Identify (1) the four institutional components that constitute the South African public sector, (2) the three economic functions of government formulated by Richard Musgrave, and (3) the precise distinction between Nationalisation and Privatisation.",
        "derivation": [
            r"\text{Public Sector Components: (1) Central government, (2) Provincial government, (3) Local government (municipalities), (4) Public corporations (SOEs)}",
            r"\text{General Government} = \text{Central} + \text{Provincial} + \text{Local (excluding Public Corporations)}",
            r"\text{Musgrave's Three Functions: (1) Allocative function (market failure), (2) Distributive function (inequality), (3) Stabilisation function (macro cycles)}",
            r"\text{Nationalisation vs Privatisation: Transfer of private ownership to the state vs transfer of state-owned assets to private ownership}"
        ],
        "options": [
            {
                "text": "Four tiers: Central, Provincial, Local government, and Public corporations; Three functions: Allocative, Distributive, and Stabilisation; Nationalisation transfers private assets to state ownership while Privatisation transfers state assets to private ownership.",
                "isCorrect": True,
                "refutation": "Correct! General government (central, provincial, local) plus public corporations form the public sector, executing Musgrave's allocative, distributive, and stabilisation roles."
            },
            {
                "text": "Four tiers: Commercial banks, Central bank, Treasury, and Parliament; Three functions: Monetary, Exchange-rate, and Trade policy; Nationalisation sells state-owned assets to private buyers while Privatisation confiscates private firms for the state.",
                "isCorrect": False,
                "refutation": "Commercial banks are private financial institutions, monetary/exchange-rate policies are central bank functions, and the definitions of nationalisation and privatisation are reversed."
            },
            {
                "text": "Four tiers: Central, Provincial, Local government, and Foreign embassies; Three functions: Consumption, Investment, and Exports; Nationalisation and Privatisation both refer to deregulating private corporate monopolies across the domestic economy.",
                "isCorrect": False,
                "refutation": "Public corporations (state-owned enterprises) are the fourth component of the public sector, and C, I, X are expenditure components rather than Musgrave's fiscal functions."
            },
            {
                "text": "Four tiers: Executive, Legislature, Judiciary, and Reserve Bank; Three functions: Taxation, Borrowing, and Money printing; Nationalisation transfers municipal assets to provincial departments while Privatisation raises statutory corporate tax rates.",
                "isCorrect": False,
                "refutation": "Executive, legislature, and judiciary are constitutional branches of state authority rather than the four economic sub-sectors of the public sector."
            }
        ]
    },
    {
        "id": "q_ch15_12",
        "chapterId": "ch15",
        "source": "Chapter 15 — Fiscal Financing & Canons of Taxation",
        "topic": "Financing Public Infrastructure Expansion & Criteria for a Good Tax",
        "difficulty": "Medium",
        "stem": "Suppose the government expands public infrastructure spending from R14.5 billion to R17.5 billion (+R3.0 billion). What are the three macroeconomic sources available to finance government expenditure, and which four criteria (canons) define a good tax system?",
        "derivation": [
            r"\text{Three Financing Sources: (1) Income from public property/enterprises, (2) Taxation (compulsory levies), (3) Government borrowing (domestic/foreign capital markets)}",
            r"\text{Note: Borrowing from the central bank (monetary financing) is avoided due to severe demand-pull inflationary consequences}",
            r"\text{Four Criteria of a Good Tax: (1) Neutrality (minimal excess burden/distortion), (2) Equity (horizontal & vertical ability-to-pay/benefit), (3) Administrative simplicity (low compliance/collection cost), (4) Certainty}"
        ],
        "options": [
            {
                "text": "Financing sources: Income from public property, Taxation, and Borrowing on capital markets; Tax criteria: Neutrality, Equity (vertical and horizontal), Administrative simplicity, and Certainty.",
                "isCorrect": True,
                "refutation": "Correct! Governments finance outlays via enterprise income, taxation, and bond issuance, while evaluating taxes against neutrality, equity, administrative simplicity, and certainty."
            },
            {
                "text": "Financing sources: Printing bank notes, Raising the repo rate, and Selling foreign reserves; Tax criteria: Maximum market distortion, Regressivity, High compliance cost, and Statutory ambiguity.",
                "isCorrect": False,
                "refutation": "Repo rates and foreign reserves are monetary policy instruments of the central bank, and a good tax seeks minimal distortion (neutrality) and low compliance costs."
            },
            {
                "text": "Financing sources: Household savings, Corporate dividends, and Import quotas; Tax criteria: Trade protectionism, Capital intensity, Pro-cyclicality, and Direct administrative price fixing.",
                "isCorrect": False,
                "refutation": "Import quotas are non-revenue trade restrictions, and Adam Smith's canons of taxation focus on neutrality, equity, certainty, and administrative simplicity."
            },
            {
                "text": "Financing sources: Income from public property, Taxation, and Borrowing; Tax criteria: Maximising deadweight loss, Eliminating vertical equity, Complex loopholes, and Retroactive assessment.",
                "isCorrect": False,
                "refutation": "Neutrality requires minimising (not maximising) deadweight loss/excess burden, and administrative simplicity requires transparent rules with minimal loopholes."
            }
        ]
    },
    {
        "id": "q_ch16_06",
        "chapterId": "ch16",
        "source": "Chapter 16 — Trade Policy Instruments",
        "topic": "Six Instruments to Restrict Imports and Welfare Effects of an Import Tariff",
        "difficulty": "Medium",
        "stem": "List the six primary policy instruments governments use to restrict imports or influence international trade flows, and explain the domestic impact of imposing a specific import tariff on a competitive good whose world price is below the domestic autarky equilibrium price.",
        "derivation": [
            r"\text{Six Instruments: (1) Import tariffs, (2) Import quotas, (3) Subsidies to domestic producers, (4) Non-tariff barriers (administrative/health regulations), (5) Exchange controls, (6) Exchange rate policy}",
            r"\text{Tariff Impact: Domestic price rises from } P_w \text{ to } P_w + t \implies \text{Domestic quantity supplied rises, domestic quantity demanded falls, import volume shrinks}",
            r"\text{Welfare: Domestic producers gain surplus, government collects tariff revenue on remaining imports, and domestic consumers lose surplus (creating deadweight loss triangles)}"
        ],
        "options": [
            {
                "text": "Instruments: Tariffs, quotas, domestic subsidies, non-tariff barriers, exchange controls, and exchange rate policy; a tariff raises domestic price, expands local supply, cuts imports, and yields state revenue.",
                "isCorrect": True,
                "refutation": "Correct! All six trade policy instruments are accurately identified, and a tariff raises price from Pw to Pw+t, expanding domestic supply while contracting domestic demand and imports."
            },
            {
                "text": "Instruments: Repo rate cuts, open-market operations, cash reserve requirements, VAT exemptions, primary rebates, and minimum wages; a tariff lowers the domestic price below the world price and increases import volume.",
                "isCorrect": False,
                "refutation": "Repo rates and reserve requirements are domestic monetary instruments, and an import tariff raises (never lowers) the domestic price above the world price."
            },
            {
                "text": "Instruments: Import tariffs, import quotas, domestic subsidies, non-tariff barriers, exchange controls, and exchange rate policy; a tariff leaves the domestic price unchanged and shifts revenue to foreign exporters.",
                "isCorrect": False,
                "refutation": "In a small open economy, an import tariff raises the domestic price paid by consumers by the amount of the tariff, and tariff revenue accrues to the domestic government."
            },
            {
                "text": "Instruments: Free-trade agreements, customs unions, common markets, monetary unions, dollarisation, and deregulation; a tariff increases domestic consumer surplus and reduces domestic producer surplus across industries.",
                "isCorrect": False,
                "refutation": "By raising domestic prices, an import tariff reduces consumer surplus and increases domestic producer surplus."
            }
        ]
    },
    {
        "id": "q_ch16_07",
        "chapterId": "ch16",
        "source": "Chapter 16 — Comparative Advantage & Specialisation",
        "topic": "Opportunity Cost of Maize vs Steel Between Two Trading Partners",
        "difficulty": "Medium",
        "stem": "Using identical resource endowments, Country A can produce either 80 tons of Maize or 40 tons of Steel, whereas Country B can produce either 30 tons of Maize or 30 tons of Steel. Determine (1) which country holds the absolute advantage in both goods, (2) each country's opportunity cost of producing 1 ton of Steel and 1 ton of Maize, and (3) the pattern of comparative advantage.",
        "derivation": [
            r"\text{Absolute Advantage: Country A produces more Maize }(80 > 30)\text{ and more Steel }(40 > 30)",
            r"\text{Opportunity Cost of 1 ton of Steel: Country A} = \frac{80}{40} = 2.0\text{ tons Maize};\quad \text{Country B} = \frac{30}{30} = 1.0\text{ ton Maize}",
            r"\text{Opportunity Cost of 1 ton of Maize: Country A} = \frac{40}{80} = 0.5\text{ tons Steel};\quad \text{Country B} = \frac{30}{30} = 1.0\text{ ton Steel}",
            r"\text{Comparative Advantage: Country A in Maize }(0.5 < 1.0\text{ Steel});\quad \text{Country B in Steel }(1.0 < 2.0\text{ Maize})"
        ],
        "options": [
            {
                "text": "Country A has absolute advantage in both goods; Country A has comparative advantage in Maize (cost = 0.5t Steel), and Country B has comparative advantage in Steel (cost = 1.0t Maize).",
                "isCorrect": True,
                "refutation": "Correct! Even though Country A is more productive in both goods, Country B sacrifices only 1 ton of Maize per ton of Steel (vs 2 tons in Country A), giving B comparative advantage in Steel."
            },
            {
                "text": "Country A has both absolute and comparative advantage in both Maize and Steel, so no mutually beneficial international trade is possible between Country A and Country B.",
                "isCorrect": False,
                "refutation": "Because opportunity costs are reciprocals, one country cannot hold a comparative advantage in both goods unless opportunity costs are identical."
            },
            {
                "text": "Country A has absolute advantage in both goods; Country A has comparative advantage in Steel (cost = 2.0t Maize), and Country B has comparative advantage in Maize (cost = 1.0t Steel).",
                "isCorrect": False,
                "refutation": "Comparative advantage belongs to the producer with the lower (not higher) opportunity cost: 0.5 < 1.0 in Maize for A, and 1.0 < 2.0 in Steel for B."
            },
            {
                "text": "Country B has absolute advantage in Steel because its opportunity cost ratio is 1:1, while Country A has comparative advantage in Steel because 40 tons exceeds 30 tons.",
                "isCorrect": False,
                "refutation": "Absolute advantage compares physical output per unit of input (40 > 30 tons of Steel for Country A), whereas comparative advantage compares opportunity costs."
            }
        ]
    },
    {
        "id": "q_ch17_05",
        "chapterId": "ch17",
        "source": "Chapter 17 — Consumption Function & Aggregate Spending",
        "topic": "Characteristics of the Consumption Function, Income vs Disposable Income, and Injections/Leakages",
        "difficulty": "Easy",
        "stem": "In the Keynesian macroeconomic model: (1) What are the three fundamental characteristics of the household consumption function $C = \\bar{C} + cY_d$? (2) How does total National Income ($Y$) differ from Disposable Income ($Y_d$)? (3) How do Investment ($I$) and Saving ($S$) classify as injections or leakages, and what are their effects on the multiplier $\\alpha$ and equilibrium income $Y_e$?",
        "derivation": [
            r"\text{Three Characteristics: (1) } C > 0 \text{ even when } Y_d = 0 \text{ (autonomous consumption } \bar{C} > 0\text{)};\text{ (2) } C \text{ increases as } Y_d \text{ increases } (c > 0);\text{ (3) } \Delta C < \Delta Y_d \text{ because } 0 < c < 1",
            r"Y \text{ vs } Y_d: Y \text{ is total factor income earned across the economy, whereas } Y_d = Y - T = (1 - t)Y \text{ is after-tax income available to households for consumption or saving}",
            r"I \text{ vs } S: I \text{ is an autonomous injection (raises } Y_e \text{ via } \Delta A, \text{ leaves } \alpha \text{ unchanged)};\quad S \text{ is a leakage (higher saving propensity } s = 1-c \text{ lowers } c, \text{ decreasing both } \alpha \text{ and } Y_e)"
        ],
        "options": [
            {
                "text": "(1) C > 0 at Yd = 0, C rises with Yd, and 0 < c < 1; (2) Disposable income is after-tax income (Yd = Y - T); (3) Investment is an injection raising Ye, while Saving is a leakage.",
                "isCorrect": True,
                "refutation": "Correct! These capture the three Keynesian consumption axioms, the tax wedge between Y and Yd, and the exact roles of I (autonomous injection) and S (income-induced leakage)."
            },
            {
                "text": "(1) C = 0 at Yd = 0, C falls as Yd rises, and c > 1; (2) National income is after-tax income; (3) Investment is a leakage while Saving is an injection that increases the multiplier.",
                "isCorrect": False,
                "refutation": "Autonomous consumption is strictly positive because households must consume essentials to survive, 0 < c < 1, and saving is a leakage from the circular flow."
            },
            {
                "text": "(1) C is constant at all income levels (c = 0); (2) Disposable income equals national income plus taxes (Yd = Y + T); (3) Higher autonomous investment increases the multiplier α.",
                "isCorrect": False,
                "refutation": "Induced consumption rises with income (c > 0), taxes are subtracted to obtain disposable income, and autonomous investment shifts the A curve without changing the slope or multiplier α."
            },
            {
                "text": "(1) C > 0 at Yd = 0, C rises with Yd, and 0 < c < 1; (2) Y and Yd are identical in an economy with taxes; (3) Both Investment and Saving are leakages that reduce equilibrium Ye.",
                "isCorrect": False,
                "refutation": "Proportional taxes create a wedge Yd = (1-t)Y, and Investment is a primary injection into the spending stream."
            }
        ]
    },
    {
        "id": "q_ch18_06",
        "chapterId": "ch18",
        "source": "Chapter 18 — Open-Economy Keynesian Multiplier & Shocks",
        "topic": "Equilibrium Output and Investment Shock Propagation in Open Economies",
        "difficulty": "Hard",
        "stem": "Perform two open-economy Keynesian analyses: (Model 1) An economy has $\\bar{C} = 100, c = 0.8, t = 0.2, \\bar{I} = 100, \\bar{G} = 250, \\bar{X} = 300, Z = 20 + 0.1Y$, yielding $\\alpha = 2.17$ ($1/0.46$) and initial equilibrium $Y_0 = 1,584.10$ (or $1,586.96$). If autonomous investment increases by $\\Delta I = +150$, what is the new equilibrium income $Y_1$? (Model 2) A second economy has $\\bar{C} = 400, c = 0.6, t = 0.25, \\bar{I} = 400, \\bar{G} = 300, \\bar{X} = 200$, and $Z = 100 + 0.15Y$. Calculate its multiplier $\\alpha$ and equilibrium income $Y_e$.",
        "derivation": [
            r"\text{Model 1 Shock: }\Delta Y = \alpha \times \Delta I = 2.17 \times 150 = 325.50 \implies Y_1 = 1,584.10 + 325.50 = 1,909.60\text{ (or } 880 / 0.46 = 1,913.04)",
            r"\text{Model 2 Autonomous Spending: }\bar{A} = 400 + 400 + 300 + 200 - 100 = 1,200",
            r"\text{Model 2 Multiplier: }c(1 - t) - m = 0.6(1 - 0.25) - 0.15 = 0.45 - 0.15 = 0.30 \implies \alpha = \frac{1}{1 - 0.30} = \frac{1}{0.70} \approx 1.43",
            r"\text{Model 2 Equilibrium: }Y_e = \frac{1,200}{0.70} = 1,714.29\text{ (or } 1.43 \times 1,200 = 1,716.00)"
        ],
        "options": [
            {
                "text": "Model 1: ΔY = 325.50 and Y1 = 1,909.60 (unrounded 1,913.04); Model 2: Ā = 1,200, α = 1.43 (1/0.70), and Ye = 1,714.29.",
                "isCorrect": True,
                "refutation": "Correct! In Model 1, the +150 investment shock multiplies by 2.17 to add 325.50; in Model 2, 1 - 0.6(0.75) + 0.15 = 0.70, giving α = 1.43 and Ye = 1,200/0.70 = 1,714.29."
            },
            {
                "text": "Model 1: ΔY = 150.00 and Y1 = 1,734.10 (unrounded 1,736.96); Model 2: Ā = 1,400, α = 2.50 (1/0.40), and Ye = 3,500.00.",
                "isCorrect": False,
                "refutation": "Model 1 ignores the multiplier amplification (α = 2.17), and Model 2 adds autonomous imports (+100 instead of -100) while omitting taxes and induced imports from α."
            },
            {
                "text": "Model 1: ΔY = 325.50 and Y1 = 1,909.60 (unrounded 1,913.04); Model 2: Ā = 1,200, α = 2.50 (1/[1-0.6]), and Ye = 3,000.00.",
                "isCorrect": False,
                "refutation": "In Model 2, using the simple closed-economy multiplier 1/(1-c) = 2.50 ignores both the proportional tax rate (t = 0.25) and the marginal propensity to import (m = 0.15)."
            },
            {
                "text": "Model 1: ΔY = 750.00 and Y1 = 2,334.10 (unrounded 2,336.96); Model 2: Ā = 1,200, α = 1.82 (1/0.55), and Ye = 2,181.82.",
                "isCorrect": False,
                "refutation": "Model 1 uses the closed-economy multiplier 5.0 instead of 2.17, and Model 2 omits the marginal propensity to import (m = 0.15) from the multiplier denominator."
            }
        ]
    },
    {
        "id": "q_ch20_06",
        "chapterId": "ch20",
        "source": "Chapter 20 — Multi-Period CPI & Price Index Inflation",
        "topic": "Calculating Annual CPI Inflation Series and Specific Commodity Inflation Rates",
        "difficulty": "Medium",
        "stem": "Perform two inflation analyses: (Series A) A country's headline Consumer Price Index (CPI) over five consecutive years is: Period 1 = 118.4, Period 2 = 124.6, Period 3 = 131.2, Period 4 = 138.5, and Period 5 = 145.8. Compute the annual CPI inflation rates for Periods 2 through 5 and the four-year average inflation rate. (Series B) Over a single year, the price of a litre of petrol rose from R19.89 to R23.22, a local taxi fare rose from R14.00 to R18.00, and a monthly electricity tariff rose from R410.00 to R496.00. Calculate the percentage price increase for each item.",
        "derivation": [
            r"\text{Series A Annual Rates: }\pi_2 = \frac{124.6 - 118.4}{118.4} = 5.24\%;\quad \pi_3 = \frac{131.2 - 124.6}{124.6} = 5.30\%;\quad \pi_4 = \frac{138.5 - 131.2}{131.2} = 5.56\%;\quad \pi_5 = \frac{145.8 - 138.5}{138.5} = 5.27\%",
            r"\text{Series A Four-Year Average: }\bar{\pi} = \frac{5.24 + 5.30 + 5.56 + 5.27}{4} = 5.34\%",
            r"\text{Series B Item Increases: }\text{Petrol} = \frac{23.22 - 19.89}{19.89} = 16.74\%;\quad \text{Taxi} = \frac{18 - 14}{14} = 28.57\%;\quad \text{Electricity} = \frac{496 - 410}{410} = 20.98\%"
        ],
        "options": [
            {
                "text": "Series A: Annual inflation rates are 5.24%, 5.30%, 5.56%, and 5.27% (average = 5.34%); Series B: Petrol = +16.74%, Taxi fare = +28.57%, Electricity = +20.98%.",
                "isCorrect": True,
                "refutation": "Correct! Each percentage change divides the period-on-period change by the initial base value, yielding an average CPI inflation rate of 5.34% and exact commodity price increases."
            },
            {
                "text": "Series A: Annual inflation rates are 6.20%, 6.60%, 7.30%, and 7.30% (average = 6.85%); Series B: Petrol = +3.33%, Taxi fare = +4.00%, Electricity = +86.00%.",
                "isCorrect": False,
                "refutation": "Subtracting index levels or rand prices without dividing by the prior period's base level gives absolute point differences, not percentage inflation rates."
            },
            {
                "text": "Series A: Annual inflation rates are 4.98%, 5.03%, 5.27%, and 5.01% (average = 5.07%); Series B: Petrol = +14.34%, Taxi fare = +22.22%, Electricity = +17.34%.",
                "isCorrect": False,
                "refutation": "This divides the price change by the final period's value instead of the initial period's base value."
            },
            {
                "text": "Series A: Annual inflation rates are 5.24%, 10.81%, 16.98%, and 23.14% (average = 14.04%); Series B: Petrol = +16.74%, Taxi fare = +28.57%, Electricity = +20.98%.",
                "isCorrect": False,
                "refutation": "In Series A, annual inflation must be measured relative to the immediately preceding year, not cumulatively against Period 1."
            }
        ]
    },
    {
        "id": "q_ch20_07",
        "chapterId": "ch20",
        "source": "Chapter 20 — Base Period Identification & Deflator Inflation",
        "topic": "Identifying the Base Period from Current vs Constant Aggregates and Computing Deflator Inflation",
        "difficulty": "Medium",
        "stem": "Examine two National Accounts price-index problems: (Problem 1) In Period 1, Gross National Income (GNI) at current prices is R2,946,328 million and GNI at constant prices is also R2,946,328 million. In Period 2, GNI at current prices is R3,165,941 million and GNI at constant prices is R3,094,761 million. Explain why current and constant GNI are identical in Period 1 and compute the implicit price deflator for both periods. (Problem 2) An economy's Nominal GDP rises from R58,421 million in Period 1 to R60,798 million in Period 2, while Real GDP rises from R46,324 million to R47,760 million. Calculate the GDP deflator for both periods and the Period 2 inflation rate.",
        "derivation": [
            r"\text{Problem 1: Period 1 is the base period, so current prices equal constant base prices }\implies \text{Deflator}_1 = \frac{2,946,328}{2,946,328} \times 100 = 100.00",
            r"\text{Problem 1 Period 2 Deflator} = \frac{3,165,941}{3,094,761} \times 100 = 102.30\quad (\pi = 2.30\%)",
            r"\text{Problem 2 Deflators: }\text{Defl}_1 = \frac{58,421}{46,324} \times 100 = 126.11;\quad \text{Defl}_2 = \frac{60,798}{47,760} \times 100 = 127.30",
            r"\text{Problem 2 Inflation: }\pi_2 = \frac{127.30 - 126.11}{126.11} \times 100 = 0.94\%"
        ],
        "options": [
            {
                "text": "Problem 1: Period 1 is the base year (Deflator = 100.00) and Period 2 Deflator = 102.30; Problem 2: Deflator rises from 126.11 to 127.30, yielding an inflation rate of 0.94%.",
                "isCorrect": True,
                "refutation": "Correct! Current and constant aggregates coincide in the base period (Deflator = 100.0), and in Problem 2 the GDP deflator increases from 126.11 to 127.30 (+0.94%)."
            },
            {
                "text": "Problem 1: Inflation was zero in all prior years (Deflator = 0.00) and Period 2 Deflator = 97.75; Problem 2: Deflator falls from 79.29 to 78.56, yielding deflation of -0.92%.",
                "isCorrect": False,
                "refutation": "The base-period index is 100 (not 0), and dividing Real GDP by Nominal GDP inverts the GDP deflator formula."
            },
            {
                "text": "Problem 1: Period 1 is the base year (Deflator = 100.00) and Period 2 Deflator = 102.30; Problem 2: Deflator rises to 131.24, yielding a nominal GDP growth rate of 4.07%.",
                "isCorrect": False,
                "refutation": "In Problem 2, nominal GDP grew by 4.07% largely because real output expanded by 3.10%; the pure price inflation rate from the GDP deflator is 0.94%."
            },
            {
                "text": "Problem 1: Period 1 is the base year (Deflator = 100.00) and Period 2 Deflator = 107.45; Problem 2: Deflator rises from 126.11 to 127.30, yielding an inflation rate of 1.19%.",
                "isCorrect": False,
                "refutation": "In Problem 2, 1.19 is the absolute index-point difference (127.30 - 126.11); dividing by 126.11 yields a percentage inflation rate of 0.94%."
            }
        ]
    },
    {
        "id": "q_ch21_06",
        "chapterId": "ch21",
        "source": "Chapter 21 — Demographic Labour Filtering & Unemployment Classification",
        "topic": "Filtering Non-Working-Age Cohorts, Deriving Employment Counts, and Classifying Unemployment",
        "difficulty": "Hard",
        "stem": "Solve three labour market problems: (Case 1) A country has a total population of 80 million, which includes 15 million children under age 15, 20 million retired/full-time students outside the labour force, 20 million employed workers, and 10 million unemployed job-seekers (plus 15 million other economically inactive adults). Calculate the strict Labour Force and Unemployment Rate. (Case 2) A second economy has a working-age population of 55 million, 26 million employed, 7 million strictly unemployed, and 5 million discouraged work-seekers. Calculate the Expanded (Broad) Labour Force Participation Rate (LFPR) and Expanded Unemployment Rate. (Case 3) Classify a platinum miner retrenched due to shaft mechanisation versus a financial advisor retrenched during a national recession.",
        "derivation": [
            r"\text{Case 1: Strict Labour Force } (LF) = E + U = 20\text{m} + 10\text{m} = 30\text{ million};\quad u = \frac{10}{30} \times 100 = 33.33\%",
            r"\text{Case 2: Expanded } LF = 26\text{m} + 7\text{m} + 5\text{m} = 38\text{ million};\quad \text{Expanded LFPR} = \frac{38}{55} \times 100 = 69.09\%",
            r"\text{Case 2 Expanded Unemployment Rate} = \frac{7 + 5}{38} \times 100 = \frac{12}{38} \times 100 = 31.58\%\quad (\text{Strict } u = \frac{7}{33} = 21.21\%,\text{ or } \frac{8}{38} = 21.05\%)",
            r"\text{Case 3 Classification: Mechanisation/skill mismatch} = \text{Structural unemployment};\quad \text{Recession/aggregate demand slump} = \text{Cyclical unemployment}"
        ],
        "options": [
            {
                "text": "Case 1: LF = 30m, u = 33.33%; Case 2: Expanded LF = 38m (LFPR = 69.09%), Expanded u = 31.58% (Strict = 21.21%); Case 3: Miner = Structural, Advisor = Cyclical.",
                "isCorrect": True,
                "refutation": "Correct! Children and inactive adults are excluded from the labour force in Case 1 (10/30 = 33.33%), discouraged workers enter the broad labour force in Case 2 (38/55 = 69.09%), and mechanisation vs recession represent Structural vs Cyclical unemployment."
            },
            {
                "text": "Case 1: LF = 80m, u = 12.50%; Case 2: Expanded LF = 33m (LFPR = 60.00%), Expanded u = 21.21% (Strict = 18.42%); Case 3: Miner = Cyclical, Advisor = Frictional.",
                "isCorrect": False,
                "refutation": "Dividing unemployed workers by the total population of 80 million (including children and retirees) violates the ILO definition of the labour force."
            },
            {
                "text": "Case 1: LF = 30m, u = 50.00%; Case 2: Expanded LF = 38m (LFPR = 69.09%), Expanded u = 18.42% (Strict = 21.21%); Case 3: Miner = Seasonal, Advisor = Structural.",
                "isCorrect": False,
                "refutation": "In Case 1, dividing unemployed (10m) by employed (20m) = 50% is the unemployment-to-employment ratio, not the unemployment rate u = U/(E+U) = 33.33%."
            },
            {
                "text": "Case 1: LF = 65m, u = 15.38%; Case 2: Expanded LF = 55m (LFPR = 100.0%), Expanded u = 21.82% (Strict = 12.73%); Case 3: Miner = Structural, Advisor = Seasonal.",
                "isCorrect": False,
                "refutation": "Economically inactive adults (retirees, full-time students) are part of the working-age population in Case 1 & 2, not part of the active Labour Force."
            }
        ]
    }
]

for q in NEW_QUESTIONS_3:
    lengths = [len(opt["text"]) for opt in q["options"]]
    ratio = max(lengths) / min(lengths)
    if ratio > 1.25:
        raise ValueError(f"Question {q['id']} violates length ratio: {ratio:.3f} ({lengths})")
    QUESTIONS.append(q)

NEW_QUESTIONS_4 = [
    {
        "id": "q_ch13_21",
        "chapterId": "ch13",
        "source": "Chapter 13 — Net Foreign Factor Income & GNP Valuation",
        "topic": "Follow-Up Calculation of GNP at Market Prices from Domestic Expenditure & Factor Flows",
        "difficulty": "Medium",
        "stem": "Continuing with the National Accounts table (in R millions) where Household expenditure = 974 252, Fixed capital consumption = 170 986, Exports = 492 646, Imports = 569 321, Taxes on production and imports = 205 562, Subsidies = 11 433, and GDP at market prices (GDPmp) = 1 530 580 (with GDP at factor cost already determined as R1 336 451 million): suppose wages earned by domestic au pairs working abroad in the USA equal 1 500 and salaries paid to foreign Cuban doctors working domestically equal 1 800. Calculate Gross National Product at market prices (GNPmp) and Net Foreign Factor Income.",
        "derivation": [
            r"\text{Prerequisite Context: }\text{GDP}_{mp} = \text{R}1\,530\,580\text{m}\quad (\text{and }\text{GDP}_{fc} = 1\,530\,580 - 205\,562 + 11\,433 = \text{R}1\,336\,451\text{m})",
            r"\text{Factor Income Receipts from Rest of World (Au pairs in USA)} = +\text{R}1\,500\text{m}",
            r"\text{Factor Income Payments to Rest of World (Cuban doctors domestically)} = -\text{R}1\,800\text{m}",
            r"\text{GNP}_{mp} = \text{GDP}_{mp} + \text{Factor Receipts} - \text{Factor Payments} = 1\,530\,580 + 1\,500 - 1\,800 = \text{R}1\,530\,280\text{ million}"
        ],
        "options": [
            {
                "text": "GNP at market prices is R1 530 280 million because net foreign factor income is -R300 million (+1 500 - 1 800).",
                "isCorrect": True,
                "refutation": "Correct! Adding factor income earned abroad by domestic residents (+1 500) and subtracting factor income paid to foreign residents working domestically (-1 800) yields GNPmp = R1 530 280 million."
            },
            {
                "text": "GNP at market prices is R1 530 880 million because net foreign factor income is +R300 million (+1 800 - 1 500).",
                "isCorrect": False,
                "refutation": "R1 530 880 million reverses the foreign factor flows by adding payments to foreign doctors (+1 800) and subtracting receipts from domestic au pairs (-1 500)."
            },
            {
                "text": "GNP at market prices is R1 336 151 million by applying net foreign factor income (-R300 million) to GDP at factor cost.",
                "isCorrect": False,
                "refutation": "Applying net foreign factor income (-300) to GDP at factor cost (1 336 451) yields GNP at factor cost (R1 336 151m), whereas the question asks for GNP at market prices."
            },
            {
                "text": "GNP at market prices is R1 453 905 million by subtracting net exports (-R76 675 million) from GDP at market prices.",
                "isCorrect": False,
                "refutation": "Exports (492 646) and imports (569 321) are already included inside GDPmp; converting GDPmp to GNPmp requires adjusting strictly for net primary factor income (-300)."
            }
        ]
    },
    {
        "id": "q_ch13_22",
        "chapterId": "ch13",
        "source": "Chapter 13 — From GDP at Factor Cost to National Income (NNI)",
        "topic": "Follow-Up Derivation of National Income Using Prerequisite GDP at Factor Cost and Depreciation",
        "difficulty": "Hard",
        "stem": "In a macroeconomic account where Consumption = R105 500, Investment = R46 850, Government spending = R103 600, Exports = R40 000, Imports = R30 000, Value-Added Tax = R16 000, and Subsidies = R43 300, the preceding calculation established GDE at market prices = R255 950, GDP at market prices = R265 950, and GDP at factor cost (GDPfc) = R293 250. Given further that the capital goods stock is R40 000 (depreciating at 8% per annum), domestic cricket players earn R35 200 in the UK, and UK Airlines earns R125 600 in profits within the domestic economy, calculate National Income (Net National Income at factor cost).",
        "derivation": [
            r"\text{Prerequisite Baseline: }\text{GDP}_{fc} = \text{R}293\,250\quad (\text{from }\text{GDP}_{mp} = 265\,950 - 16\,000 + 43\,300)",
            r"\text{Depreciation (Consumption of Fixed Capital)} = 0.08 \times \text{R}40\,000 = \text{R}3\,200",
            r"\text{Net Foreign Factor Income} = +\text{R}35\,200\text{ (cricket players in UK)} - \text{R}125\,600\text{ (UK Airlines profits)} = -\text{R}90\,400",
            r"\text{National Income (NI)} = \text{GDP}_{fc} - \text{Depreciation} + \text{Net Factor Income} = 293\,250 - 3\,200 + 35\,200 - 125\,600 = \text{R}199\,650"
        ],
        "options": [
            {
                "text": "National Income is R199 650 (subtracting R3 200 depreciation and R90 400 net foreign factor outflow from R293 250).",
                "isCorrect": True,
                "refutation": "Correct! Starting from GDPfc = R293 250, subtracting 8% depreciation on capital goods (-R3 200), adding factor receipts (+R35 200), and subtracting factor payments (-R125 600) gives R199 650."
            },
            {
                "text": "National Income is R202 850 (adjusting R293 250 for the R90 400 net factor outflow but omitting R3 200 depreciation).",
                "isCorrect": False,
                "refutation": "R202 850 is Gross National Product at factor cost (GNPfc); National Income is a net aggregate that requires subtracting the 8% capital depreciation of R3 200."
            },
            {
                "text": "National Income is R380 450 (subtracting R3 200 depreciation but adding +R90 400 as a net foreign factor inflow).",
                "isCorrect": False,
                "refutation": "R380 450 reverses the foreign factor income signs by adding UK Airlines' domestic profits (+125 600) and subtracting domestic cricket players' foreign earnings (-35 200)."
            },
            {
                "text": "National Income is R172 350 (applying the R3 200 depreciation and R90 400 factor outflow directly to GDPmp of R265 950).",
                "isCorrect": False,
                "refutation": "National Income is defined at factor cost (NNIfc), so you must start from GDPfc = R293 250 (which includes net subsidies of +R27 300) rather than GDPmp = R265 950."
            }
        ]
    },
    {
        "id": "q_ch13_23",
        "chapterId": "ch13",
        "source": "Chapter 13 — From GDP at Factor Cost to Gross Domestic Expenditure (GDE)",
        "topic": "Follow-Up Calculation of GDE at Market Prices Using Prerequisite GDP at Factor Cost",
        "difficulty": "Hard",
        "stem": "In an economy where National Income = 870 760, Depreciation = 11 100, Factor income earned by foreigners domestically = 120 800, Factor income earned by residents abroad = 234 000, Value-Added Tax (VAT) = 120 000, and Subsidies = 9 000, the first stage of analysis established that GDP at factor cost (GDPfc) = 768 660. Given further that Exports = 553 200 and Imports = 489 300, calculate GDP at market prices (GDPmp) and Gross Domestic Expenditure at market prices (GDEmp).",
        "derivation": [
            r"\text{Prerequisite Baseline: }\text{GDP}_{fc} = 870\,760 + 11\,100 + 120\,800 - 234\,000 = 768\,660",
            r"\text{Convert to Market Prices: }\text{GDP}_{mp} = \text{GDP}_{fc} + \text{VAT} - \text{Subsidies} = 768\,660 + 120\,000 - 9\,000 = 879\,660",
            r"\text{Since }\text{GDP}_{mp} = \text{GDE}_{mp} + (X - Z),\quad \text{GDE}_{mp} = \text{GDP}_{mp} - X + Z",
            r"\text{GDE}_{mp} = 879\,660 - 553\,200 + 489\,300 = 879\,660 - 63\,900 = 815\,760"
        ],
        "options": [
            {
                "text": "GDP at market prices is 879 660 and Gross Domestic Expenditure (GDEmp) is 815 760 after subtracting net exports of 63 900.",
                "isCorrect": True,
                "refutation": "Correct! Adding net indirect taxes (+120 000 - 9 000 = +111 000) to GDPfc (768 660) gives GDPmp = 879 660, and subtracting net exports (553 200 - 489 300 = 63 900) gives GDEmp = 815 760."
            },
            {
                "text": "GDP at market prices is 879 660 and Gross Domestic Expenditure (GDEmp) is 943 560 after adding net exports of 63 900.",
                "isCorrect": False,
                "refutation": "Because GDP = GDE + (X - Z), rearranging for GDE requires subtracting exports (-553 200) and adding imports (+489 300), whereas 943 560 adds net exports instead."
            },
            {
                "text": "GDP at market prices is 657 660 and Gross Domestic Expenditure (GDEmp) is 593 760 by subtracting VAT and adding subsidies.",
                "isCorrect": False,
                "refutation": "Moving from factor cost to market prices requires adding indirect taxes (+120 000) and subtracting subsidies (-9 000), not the reverse."
            },
            {
                "text": "GDP at market prices is 879 660 and Gross Domestic Expenditure (GDEmp) is 704 760 by omitting indirect tax adjustments.",
                "isCorrect": False,
                "refutation": "704 760 subtracts net exports (63 900) directly from GDP at factor cost (768 660) instead of converting to market prices first (879 660 - 63 900 = 815 760)."
            }
        ]
    },
    {
        "id": "q_ch13_24",
        "chapterId": "ch13",
        "source": "Chapter 13 — Gross Domestic Expenditure at Factor Cost",
        "topic": "Follow-Up Calculation of GDE at Factor Cost Given GDP at Market Prices and Net Exports",
        "difficulty": "Medium",
        "stem": "Continuing with the National Accounts table (in R millions) where GDP at market prices (GDPmp) = 1 204, Consumption of fixed capital = 72, Indirect taxes = 148, Subsidies = 15, Factor income to abroad = 67, Factor income from abroad = 78 (from which National Income was calculated as R1 010 million), Exports = 64, and Imports = 100: calculate Gross Domestic Expenditure at market prices (GDEmp) and Gross Domestic Expenditure at factor cost (GDEfc).",
        "derivation": [
            r"\text{Since }\text{GDP}_{mp} = \text{GDE}_{mp} + X - Z,\quad \text{GDE}_{mp} = \text{GDP}_{mp} - X + Z = 1\,204 - 64 + 100 = \text{R}1\,240\text{ million}",
            r"\text{Alternatively, }\text{GDP}_{fc} = \text{GDP}_{mp} - T_{\text{ind}} + \text{Subsidies} = 1\,204 - 148 + 15 = \text{R}1\,071\text{ million}",
            r"\text{GDE}_{fc} = \text{GDE}_{mp} - T_{\text{ind}} + \text{Subsidies} = 1\,240 - 148 + 15 = \text{R}1\,107\text{ million}\quad (\text{or } 1\,071 - 64 + 100 = \text{R}1\,107\text{m})"
        ],
        "options": [
            {
                "text": "GDE at market prices is R1 240 million and GDE at factor cost is R1 107 million (with GDPfc equal to R1 071 million).",
                "isCorrect": True,
                "refutation": "Correct! Subtracting exports (-64) and adding imports (+100) to GDPmp (1 204) gives GDEmp = R1 240m, and subtracting net indirect taxes (-148 + 15 = -133) yields GDEfc = R1 107m."
            },
            {
                "text": "GDE at market prices is R1 168 million and GDE at factor cost is R1 035 million (by adding exports and subtracting imports).",
                "isCorrect": False,
                "refutation": "R1 168m and R1 035m mistakenly add exports (+64) and subtract imports (-100); since net exports are negative (X - Z = -36), domestic expenditure GDE exceeds GDP by +36."
            },
            {
                "text": "GDE at market prices is R1 240 million and GDE at factor cost is R1 373 million (by adding indirect taxes to GDEmp).",
                "isCorrect": False,
                "refutation": "Moving from market prices (R1 240m) to factor cost requires subtracting indirect taxes (-148) and adding subsidies (+15), not adding net indirect taxes (+133)."
            },
            {
                "text": "GDE at market prices is R1 046 million and GDE at factor cost is R1 010 million (by using National Income as the baseline).",
                "isCorrect": False,
                "refutation": "R1 010m is Net National Income at factor cost (which already deducted R72m depreciation and added +R11m net foreign factor income), not GDE at factor cost."
            }
        ]
    },
    {
        "id": "q_ch13_25",
        "chapterId": "ch13",
        "source": "Chapter 13 — Nominal vs Real GDP Growth Rates",
        "topic": "Follow-Up Calculation of Nominal Growth Rate and Real GDP from Three-Good Output Data",
        "difficulty": "Medium",
        "stem": "In the three-good economy producing Cell phones (Period 1: Q=20, P=R5; Period 2: Q=22, P=R5), Tablets (Period 1: Q=40, P=R2; Period 2: Q=45, P=R2), and Laptops (Period 1: Q=10, P=R2; Period 2: Q=12.5, P=R4), the preceding calculation established Period 1 Nominal GDP = R200 (20×5 + 40×2 + 10×2) and Period 2 Nominal GDP = R250 (22×5 + 45×2 + 12.5×4). Using Period 1 as the base period, calculate (1) the percentage growth in Nominal GDP, (2) Period 2 Real GDP at constant Period 1 prices, and (3) the percentage growth in Real GDP.",
        "derivation": [
            r"\text{Prerequisite Baseline: }\text{Nominal GDP}_1 = \text{Real GDP}_1 = \text{R}200;\quad \text{Nominal GDP}_2 = \text{R}250",
            r"\text{Nominal GDP Growth} = \frac{250 - 200}{200} \times 100 = +25.0\%",
            r"\text{Period 2 Real GDP (at Period 1 prices)} = (22 \times 5) + (45 \times 2) + (12.5 \times 2) = 110 + 90 + 25 = \text{R}225",
            r"\text{Real GDP Growth} = \frac{225 - 200}{200} \times 100 = +12.5\%"
        ],
        "options": [
            {
                "text": "Nominal GDP grows by 25.0% (R200 to R250), while Period 2 Real GDP at Period 1 prices is R225, giving 12.5% real growth.",
                "isCorrect": True,
                "refutation": "Correct! Nominal growth is (250 - 200)/200 = 25.0%; valuing Period 2 quantities at Period 1 constant prices yields 110 + 90 + 25 = R225, so real output grew by (225 - 200)/200 = 12.5%."
            },
            {
                "text": "Nominal GDP grows by 20.0% (R200 to R250), while Period 2 Real GDP at Period 1 prices is R225, giving 11.1% real growth.",
                "isCorrect": False,
                "refutation": "20.0% (50/250) and 11.1% (25/225) divide the output change by Period 2 values instead of the Period 1 base value (R200)."
            },
            {
                "text": "Nominal GDP grows by 25.0% (R200 to R250), while Period 2 Real GDP at Period 1 prices is R250, giving 25.0% real growth.",
                "isCorrect": False,
                "refutation": "R250 values Period 2 Laptops at their inflated Period 2 price (R4) instead of their constant Period 1 base price (R2), overstating real output by R25."
            },
            {
                "text": "Nominal GDP grows by 50.0% (R200 to R250), while Period 2 Real GDP at Period 1 prices is R220, giving 10.0% real growth.",
                "isCorrect": False,
                "refutation": "50 is the absolute Rand increase in Nominal GDP (not the percentage growth rate of 25.0%), and 12.5 Laptops at R2 equals R25 (giving R225, not R220)."
            }
        ]
    },
    {
        "id": "q_ch13_26",
        "chapterId": "ch13",
        "source": "Chapter 13 — Real Economic Growth Rate from Constant-Price GDP",
        "topic": "Follow-Up Calculation of Percentage Real GDP Growth Using Prerequisite Real GDP Totals",
        "difficulty": "Medium",
        "stem": "In the economy producing Clothes (Period 1: Q=750, P=R32; Period 2: Q=840, P=R29), Food (Period 1: Q=1 030, P=R11; Period 2: Q=950, P=R13), and Drink (Period 1: Q=210, P=R5.50; Period 2: Q=100, P=R11.70), the preceding step established that Real GDP (at constant Period 1 base prices) is R36 385 in Period 1 and R37 755 in Period 2. Using these prerequisite totals, calculate the percentage Real GDP growth rate between Period 1 and Period 2, and compare it with Period 2 Nominal GDP.",
        "derivation": [
            r"\text{Prerequisite Real GDP Totals: }\text{Real GDP}_1 = \text{R}36\,385;\quad \text{Real GDP}_2 = (840 \times 32) + (950 \times 11) + (100 \times 5.50) = \text{R}37\,755",
            r"\text{Real GDP Growth Rate} = \frac{\text{Real GDP}_2 - \text{Real GDP}_1}{\text{Real GDP}_1} \times 100 = \frac{37\,755 - 36\,385}{36\,385} \times 100 = \frac{1\,370}{36\,385} \times 100 = +3.77\%",
            r"\text{Period 2 Nominal GDP} = (840 \times 29) + (950 \times 13) + (100 \times 11.70) = 24\,360 + 12\,350 + 1\,170 = \text{R}37\,880\quad (+4.11\%\text{ nominal growth})"
        ],
        "options": [
            {
                "text": "Real GDP increased by R1 370, yielding a real economic growth rate of +3.77% (while Period 2 Nominal GDP is R37 880, or +4.11%).",
                "isCorrect": True,
                "refutation": "Correct! Subtracting Period 1 Real GDP (R36 385) from Period 2 Real GDP (R37 755) gives +R1 370, and dividing by R36 385 yields a real growth rate of +3.77%."
            },
            {
                "text": "Real GDP increased by R1 495, yielding a real economic growth rate of +4.11% (using Period 2 Nominal GDP of R37 880).",
                "isCorrect": False,
                "refutation": "R37 880 and +4.11% measure Period 2 Nominal GDP at current prices rather than Real GDP at constant Period 1 base prices (R37 755, or +3.77%)."
            },
            {
                "text": "Real GDP increased by R1 370, yielding a real economic growth rate of +3.63% (by dividing R1 370 by Period 2 Real GDP of R37 755).",
                "isCorrect": False,
                "refutation": "3.63% divides the real output gain (R1 370) by Period 2 Real GDP (R37 755) instead of the initial Period 1 base value (R36 385)."
            },
            {
                "text": "Real GDP contracted by R125, yielding a negative growth rate of -0.33% (by comparing Period 2 Real GDP with Period 2 Nominal GDP).",
                "isCorrect": False,
                "refutation": "Comparing Period 2 Real GDP (R37 755) with Period 2 Nominal GDP (R37 880) reflects the Period 2 price deflator (100.33), not inter-temporal real output growth."
            }
        ]
    },
    {
        "id": "q_ch13_27",
        "chapterId": "ch13",
        "source": "Chapter 13 — Implicit GDP Deflator from Multi-Good Production",
        "topic": "Follow-Up Calculation of the GDP Deflator Using Prerequisite Nominal and Real GDP",
        "difficulty": "Medium",
        "stem": "In the economy producing Fish (Period 1: Q=100, P=$50; Period 3: Q=125, P=$55), Pork (Period 1: Q=200, P=$25; Period 3: Q=250, P=$20), and Beef (Period 1: Q=0, P=$0; Period 3: Q=40, P=$50), the preceding step established that Period 3 Nominal GDP (at current Period 3 prices) is $13 875 and Period 3 Real GDP (at constant Period 1 base prices, valuing Beef at its initial base price of $0) is $11 250. Using these prerequisite results, calculate the Period 3 GDP Deflator and the cumulative price change since Period 1.",
        "derivation": [
            r"\text{Prerequisite Period 3 Totals: }\text{Nominal GDP}_3 = \$13\,875;\quad \text{Real GDP}_3 = (125 \times 50) + (250 \times 25) + (40 \times 0) = \$11\,250",
            r"\text{GDP Deflator}_3 = \frac{\text{Nominal GDP}_3}{\text{Real GDP}_3} \times 100 = \frac{13\,875}{11\,250} \times 100 = 123.33",
            r"\text{Cumulative Price Level Change from Base Period 1 (where Deflator = 100)} = 123.33 - 100 = +23.33\%"
        ],
        "options": [
            {
                "text": "The Period 3 GDP Deflator is 123.33 (or 123.3), indicating that the aggregate price level is 23.33% higher than in base Period 1.",
                "isCorrect": True,
                "refutation": "Correct! Dividing Period 3 Nominal GDP ($13 875) by Period 3 Real GDP ($11 250) and multiplying by 100 yields a GDP Deflator of 123.33 (+23.33% above the base index of 100)."
            },
            {
                "text": "The Period 3 GDP Deflator is 81.08 (or 81.1), indicating that the aggregate price level fell by 18.92% relative to base Period 1.",
                "isCorrect": False,
                "refutation": "81.08 inverts the deflator formula by dividing Real GDP ($11 250) by Nominal GDP ($13 875) instead of (Nominal GDP / Real GDP) × 100."
            },
            {
                "text": "The Period 3 GDP Deflator is 138.75 (or 138.8), indicating that the aggregate price level is 38.75% higher than in base Period 1.",
                "isCorrect": False,
                "refutation": "138.75 divides Period 3 Nominal GDP ($13 875) by Period 1 Nominal GDP ($10 000), which measures nominal GDP expansion (+38.75%) rather than the price deflator."
            },
            {
                "text": "The Period 3 GDP Deflator is 112.50 (or 112.5), indicating that the aggregate price level is 12.50% higher than in base Period 1.",
                "isCorrect": False,
                "refutation": "112.50 divides Period 3 Real GDP ($11 250) by Period 1 Real GDP ($10 000), which measures real output growth (+12.50%) rather than the price deflator."
            }
        ]
    },
    {
        "id": "q_ch13_28",
        "chapterId": "ch13",
        "source": "Chapter 13 — Lorenz Curve Geometry & Gini Coefficient Interpretation",
        "topic": "Follow-Up Analysis of Gini Coefficient Extremes and Standard Inequality Measures",
        "difficulty": "Easy",
        "stem": "In the Lorenz curve diagram where cumulative population percentage is plotted on the horizontal axis, cumulative income percentage is plotted on the vertical axis, the 45-degree diagonal 0B represents the line of perfect equality, and the shaded lens 0AB between the diagonal and the Lorenz curve represents the area of inequality: (1) What does a Gini coefficient of 0.67 imply about a country's income distribution? (2) What are the three standard statistical methods used by economists to measure income inequality?",
        "derivation": [
            r"\text{Gini Coefficient} = \frac{\text{Area of Inequality (0AB)}}{\text{Total Area Under Diagonal } 0B} \in [0, 1]\text{ (or } [0, 100]\text{ as a Gini index)}",
            r"\text{Gini} = 0 \implies \text{Perfect equality (Lorenz curve coincides with } 0B);\quad \text{Gini} = 1 \implies \text{Perfect inequality (one person receives 100\% of income)}",
            r"\text{Gini} = 0.67 \implies \text{Extremely high/skewed income inequality (among the most unequal distributions globally)}",
            r"\text{Three Standard Inequality Measures: (1) Lorenz curve, (2) Gini coefficient, (3) Quantile ratio (e.g., decile or quintile ratio)}"
        ],
        "options": [
            {
                "text": "A Gini of 0.67 indicates severe income inequality (since 0 is perfect equality and 1 is complete inequality); the three measures are the Lorenz curve, Gini coefficient, and Quantile ratio.",
                "isCorrect": True,
                "refutation": "Correct! Because the Gini coefficient ranges from 0 (perfect equality) to 1 (complete inequality), 0.67 reflects a highly skewed distribution, measured via the Lorenz curve, Gini coefficient, and quantile ratios."
            },
            {
                "text": "A Gini of 0.67 indicates near-perfect income equality (since 1 is perfect equality and 0 is complete inequality); the three measures are CPI, PPI, and the Implicit GDP Deflator.",
                "isCorrect": False,
                "refutation": "This reverses the Gini scale (0 is perfect equality, 1 is perfect inequality), and CPI, PPI, and the GDP Deflator measure price inflation rather than income distribution."
            },
            {
                "text": "A Gini of 0.67 means that 67% of the workforce is employed in the formal sector; the three measures are Gross Domestic Product, Gross National Income, and Gross Domestic Expenditure.",
                "isCorrect": False,
                "refutation": "The Gini coefficient is the geometric ratio of the area of inequality to the triangle under the line of equality, not an employment rate or aggregate output total."
            },
            {
                "text": "A Gini of 0.67 indicates moderate equality because it is below 50; the three measures are the Repo rate, the Cash reserve requirement, and the Open-market bond yield.",
                "isCorrect": False,
                "refutation": "When expressed as a decimal (0 to 1), 0.67 corresponds to a Gini index of 67 (well above 50, signifying severe inequality), and repo/reserve rates are monetary instruments."
            }
        ]
    },
    {
        "id": "q_ch14_12",
        "chapterId": "ch14",
        "source": "Chapter 14 — Endogenous Money Supply & Interest Rate Transmission",
        "topic": "Contrasting an Interest Rate Hike (7% to 8%) with an Autonomous Decline in Money Demand",
        "difficulty": "Medium",
        "stem": "Under the central bank's endogenous (demand-determined) money supply framework—where there is no independent vertical money supply curve and the interest rate is anchored horizontally via the accommodation policy repo rate—contrast what happens on the money market diagram in two distinct scenarios: (Scenario A) The central bank raises the repo rate so the market interest rate increases from 7% to 8%, ceteris paribus; (Scenario B) Total demand for money decreases (due to a fall in real income $Y$) while the central bank keeps the interest rate unchanged at $i_0$.",
        "derivation": [
            r"\text{Endogenous Rule: } M \text{ is demand-determined at the intersection of the horizontal interest rate line } i \text{ and money demand } L(Y, i)",
            r"\text{Scenario A (} i \text{ rises from } 7\% \text{ to } 8\%\text{): Horizontal rate line shifts UPWARD along fixed } L \text{ curve } \implies \text{equilibrium quantity of money } M \text{ decreases }(M_0 \to M_1)",
            r"\text{Scenario B (Money demand falls at constant } i_0\text{): } L \text{ curve shifts LEFTWARD along fixed horizontal line } i_0 \implies \text{equilibrium quantity of money } M \text{ decreases }(M_0 \to M_1)"
        ],
        "options": [
            {
                "text": "Scenario A shifts the horizontal interest rate line upward from 7% to 8% (moving up along L so M falls); Scenario B shifts the L curve leftward along constant i0 (so M also falls).",
                "isCorrect": True,
                "refutation": "Correct! In Scenario A, a higher interest rate causes an upward movement along L that contracts credit and money M; in Scenario B, a leftward shift of L at fixed i0 also reduces equilibrium M."
            },
            {
                "text": "Scenario A shifts a vertical money supply curve leftward to raise interest rates from 7% to 8%; Scenario B shifts the L curve leftward and lowers the market interest rate below i0.",
                "isCorrect": False,
                "refutation": "Under the endogenous accommodation system, there is no independent vertical money supply curve, and the central bank holds the interest rate horizontal at i0 in Scenario B."
            },
            {
                "text": "Scenario A shifts the L curve rightward when interest rates rise from 7% to 8% (increasing M); Scenario B shifts the horizontal interest rate line downward (increasing M).",
                "isCorrect": False,
                "refutation": "A change in the interest rate causes a movement along the L curve (not a shift of L), and higher interest rates reduce (not increase) the quantity of credit and money demanded."
            },
            {
                "text": "Scenario A leaves the equilibrium quantity of money M unchanged when rates rise from 7% to 8%; Scenario B increases the equilibrium quantity of money M at constant i0.",
                "isCorrect": False,
                "refutation": "Because L slopes downward, an upward shift of the interest rate line from 7% to 8% contracts M, and a leftward shift of L at constant i0 likewise contracts M."
            }
        ]
    },
    {
        "id": "q_ch15_13",
        "chapterId": "ch15",
        "source": "Chapter 15 — Statutory Tax Bracket & Effective Tax Rate Analysis",
        "topic": "Calculating Gross Tax, Net Tax After Rebate, and Effective Tax Rate for R475 000 Income",
        "difficulty": "Medium",
        "stem": "A taxpayer under age 65 earns a taxable income of R475 000 during the tax year. According to the statutory progressive tax table, the bracket for R393 001 – R550 000 specifies: 'R103 000 + 40% of taxable income above R393 000', and the primary tax rebate is R15 000. Calculate (1) the gross tax liability before the rebate, (2) the net tax payable after deducting the primary rebate, and (3) the effective (average) tax rate after the rebate.",
        "derivation": [
            r"\text{Income Excess Above Bracket Threshold} = 475\,000 - 393\,000 = \text{R}82\,000",
            r"\text{Gross Tax Before Rebate} = 103\,000 + 0.40(82\,000) = 103\,000 + 32\,800 = \text{R}135\,800\quad (\text{Pre-rebate ATR} = 28.59\%)",
            r"\text{Net Tax Payable After Rebate} = 135\,800 - 15\,000 = \text{R}120\,800",
            r"\text{Effective (Average) Tax Rate} = \frac{120\,800}{475\,000} \times 100 = 25.43\%\quad (\text{while Marginal Tax Rate} = 40\%)"
        ],
        "options": [
            {
                "text": "Gross tax is R135 800, net tax after the R15 000 rebate is R120 800, and the effective tax rate is 25.43% (28.59% pre-rebate).",
                "isCorrect": True,
                "refutation": "Correct! 40% of the R82 000 excess above R393 000 is R32 800; adding R103 000 gives R135 800 gross tax, and subtracting the R15 000 rebate gives R120 800 (25.43% of R475 000)."
            },
            {
                "text": "Gross tax is R190 000, net tax after the R15 000 rebate is R175 000, and the effective tax rate is 36.84% (40.00% pre-rebate).",
                "isCorrect": False,
                "refutation": "R190 000 erroneously multiplies the entire R475 000 income by 40% instead of applying 40% only to the R82 000 excess above R393 000."
            },
            {
                "text": "Gross tax is R135 800, net tax after the R15 000 rebate is R150 800, and the effective tax rate is 31.75% (28.59% pre-rebate).",
                "isCorrect": False,
                "refutation": "R150 800 adds the R15 000 primary rebate to gross tax instead of subtracting it; a tax rebate directly reduces the taxpayer's liability."
            },
            {
                "text": "Gross tax is R103 000, net tax after the R15 000 rebate is R88 000, and the effective tax rate is 18.53% (21.68% pre-rebate).",
                "isCorrect": False,
                "refutation": "R103 000 is only the base tax on the first R393 000 of income, omitting the 40% marginal tax (R32 800) on the R82 000 earned above R393 000."
            }
        ]
    },
    {
        "id": "q_ch15_14",
        "chapterId": "ch15",
        "source": "Chapter 15 — Bracket Progression & Average vs Marginal Tax Rates",
        "topic": "Follow-Up Analysis of Tax Liability, MTR, and ATR When Income Rises Across Brackets",
        "difficulty": "Medium",
        "stem": "In a multi-bracket personal income tax schedule (with zero rebate), Judy initially earns R18 900 in the R15 001 – R20 000 bracket ('R2 550 + 21% of income above R15 000'), where the first-part calculation established her initial tax payable as R3 369 (2 550 + 0.21×3 900), her marginal tax rate (MTR) as 21%, and her average tax rate (ATR) as 17.83%. Suppose Judy completes her degree and is promoted to a salary of R83 450 in the top R80 001+ bracket ('R25 000 + 43% of income above R80 000'). Calculate her new tax payable, new MTR, and new ATR, and classify the tax schedule.",
        "derivation": [
            r"\text{Prerequisite Baseline at } Y_0 = \text{R}18\,900:\quad T_0 = \text{R}3\,369,\quad \text{MTR}_0 = 21\%, \quad \text{ATR}_0 = \frac{3\,369}{18\,900} = 17.83\%",
            r"\text{New Tax at } Y_1 = \text{R}83\,450:\quad T_1 = 25\,000 + 0.43(83\,450 - 80\,000) = 25\,000 + 0.43(3\,450) = 25\,000 + 1\,483.50 = \text{R}26\,483.50",
            r"\text{New Marginal Tax Rate (MTR}_1\text{)} = 43\%;\quad \text{New Average Tax Rate (ATR}_1\text{)} = \frac{26\,483.50}{83\,450} \times 100 = 31.74\%",
            r"\text{Classification: Progressive tax because ATR rises as income rises }(17.83\% \to 31.74\%)\text{ and MTR} > \text{ATR}"
        ],
        "options": [
            {
                "text": "New tax is R26 483.50, MTR is 43%, and ATR rises from 17.83% to 31.74%, confirming that the tax system is progressive.",
                "isCorrect": True,
                "refutation": "Correct! Tax on the R3 450 excess above R80 000 is R1 483.50; adding R25 000 gives R26 483.50 (ATR = 31.74%), and because ATR rises with income (17.83% to 31.74%), the tax is progressive."
            },
            {
                "text": "New tax is R35 883.50, MTR is 43%, and ATR rises from 17.83% to 43.00%, confirming that the tax system is proportional.",
                "isCorrect": False,
                "refutation": "R35 883.50 erroneously applies the 43% marginal rate to Judy's entire R83 450 salary instead of only the R3 450 excess above R80 000."
            },
            {
                "text": "New tax is R26 483.50, MTR is 31.74%, and ATR is 43.00%, confirming that the tax system is regressive across brackets.",
                "isCorrect": False,
                "refutation": "This swaps the marginal tax rate (43% on income above R80 000) with the average tax rate (26 483.50 / 83 450 = 31.74%), and rising ATR defines a progressive (not regressive) tax."
            },
            {
                "text": "New tax is R25 000.00, MTR is 43%, and ATR rises from 17.83% to 29.96%, confirming that the tax system is progressive.",
                "isCorrect": False,
                "refutation": "R25 000 omits the 43% marginal tax (R1 483.50) payable on the R3 450 earned above the R80 000 bracket threshold."
            }
        ]
    },
    {
        "id": "q_ch15_15",
        "chapterId": "ch15",
        "source": "Chapter 15 — Comparative Personal Income Tax & Bracket Thresholds",
        "topic": "Comparing Annual Tax Liability and Effective Tax Rates Across Adjacent Tax Brackets",
        "difficulty": "Medium",
        "stem": "Twins Joe and Bella earn monthly salaries of R35 000 per month (R420 000 per year) and R35 500 per month (R426 000 per year), respectively. The statutory annual tax table specifies: Bracket A (R305 851 – R423 300): 'R63 853 + 31% of taxable income above R305 850'; Bracket B (R423 301 – R555 600): 'R100 263 + 36% of taxable income above R423 300'. Calculate the gross annual tax liability and pre-rebate effective (average) tax rate for both Joe and Bella, and identify the tax structure.",
        "derivation": [
            r"\text{Joe (}Y = 35\,000 \times 12 = \text{R}420\,000\text{ in Bracket A): } T_{\text{Joe}} = 63\,853 + 0.31(420\,000 - 305\,850) = 63\,853 + 35\,386.50 = \text{R}99\,239.50",
            r"\text{Joe Effective Rate} = \frac{99\,239.50}{420\,000} \times 100 = 23.63\%",
            r"\text{Bella (}Y = 35\,500 \times 12 = \text{R}426\,000\text{ in Bracket B): } T_{\text{Bella}} = 100\,263 + 0.36(426\,000 - 423\,300) = 100\,263 + 972.00 = \text{R}101\,235.00",
            r"\text{Bella Effective Rate} = \frac{101\,235.00}{426\,000} \times 100 = 23.76\%\quad (\text{Progressive since ATR rises from } 23.63\% \text{ to } 23.76\%)"
        ],
        "options": [
            {
                "text": "Joe pays R99 239.50 (23.63% effective rate) and Bella pays R101 235.00 (23.76% effective rate), illustrating a progressive tax.",
                "isCorrect": True,
                "refutation": "Correct! Joe's R420 000 annual income yields 63 853 + 0.31(114 150) = R99 239.50 (23.63%), while Bella's R426 000 yields 100 263 + 0.36(2 700) = R101 235.00 (23.76%)."
            },
            {
                "text": "Joe pays R130 200.00 (31.00% effective rate) and Bella pays R153 360.00 (36.00% effective rate), illustrating a progressive tax.",
                "isCorrect": False,
                "refutation": "Multiplying total annual income by the bracket marginal rate (31% or 36%) ignores the lower marginal rates applied to earlier income brackets."
            },
            {
                "text": "Joe pays R99 239.50 (31.00% effective rate) and Bella pays R101 235.00 (36.00% effective rate), illustrating a proportional tax.",
                "isCorrect": False,
                "refutation": "31% and 36% are the marginal tax rates on the top Rand earned in each bracket, whereas the effective (average) tax rates are 23.63% and 23.76%."
            },
            {
                "text": "Joe pays R63 853.00 (15.20% effective rate) and Bella pays R100 263.00 (23.54% effective rate), illustrating a regressive tax.",
                "isCorrect": False,
                "refutation": "R63 853 and R100 263 are only the base bracket thresholds before adding 31% of R114 150 for Joe (+R35 386.50) and 36% of R2 700 for Bella (+R972.00)."
            }
        ]
    },
    {
        "id": "q_ch15_16",
        "chapterId": "ch15",
        "source": "Chapter 15 — Effective (Average) vs Marginal Tax Rate Follow-Up",
        "topic": "Follow-Up Calculation of Effective Tax Rates From Prerequisite Net Tax Liabilities",
        "difficulty": "Medium",
        "stem": "In the preceding personal income tax analyses: (Case 1) Bella Mbonambi (aged 23) earns R315 850 per year in the bracket 'R58 389 + 35% above R315 100', yielding a gross tax of R58 651.50 and a net tax payable of R47 751.50 after deducting the R10 900 primary rebate; (Case 2) A senior specialist (under 65) earns R825 000 per year in the bracket 'R179 147 + 39% above R673 000', yielding a gross tax of R238 427 and a net tax payable of R221 192 after deducting the R17 235 primary rebate. Using these prerequisite tax liabilities, calculate each taxpayer's effective (average) tax rate (ATR) and explain why ATR is strictly lower than the marginal tax rate (MTR).",
        "derivation": [
            r"\text{Case 1 (R315 850 salary): Net ATR} = \frac{47\,751.50}{315\,850} \times 100 = 15.12\%\quad (\text{Pre-rebate ATR} = \frac{58\,651.50}{315\,850} = 18.57\%, \text{ MTR} = 35\%)",
            r"\text{Case 2 (R825 000 salary): Net ATR} = \frac{221\,192}{825\,000} \times 100 = 26.81\%\quad (\text{Pre-rebate ATR} = \frac{238\,427}{825\,000} = 28.90\%, \text{ MTR} = 39\%)",
            r"\text{Why ATR} < \text{MTR: Lower income tranches are taxed at lower marginal rates and the primary rebate reduces total tax paid}"
        ],
        "options": [
            {
                "text": "Case 1 net ATR is 15.12% (18.57% gross, MTR 35%) and Case 2 net ATR is 26.81% (28.90% gross, MTR 39%), as earlier tranches face lower rates.",
                "isCorrect": True,
                "refutation": "Correct! Dividing net tax by taxable income gives 47 751.50 / 315 850 = 15.12% for Case 1 and 221 192 / 825 000 = 26.81% for Case 2, both below their 35% and 39% marginal rates."
            },
            {
                "text": "Case 1 net ATR is 35.00% (MTR 15.12%) and Case 2 net ATR is 39.00% (MTR 26.81%), because statutory bracket rates define the average burden.",
                "isCorrect": False,
                "refutation": "35% and 39% are the marginal tax rates on the last Rand earned in each bracket, whereas 15.12% and 26.81% are the effective (average) tax rates across total income."
            },
            {
                "text": "Case 1 net ATR is 22.02% (adding the R10 900 rebate) and Case 2 net ATR is 30.99% (adding the R17 235 rebate), exceeding the marginal rate.",
                "isCorrect": False,
                "refutation": "22.02% and 30.99% result from adding the primary rebate to gross tax instead of subtracting it before dividing by annual taxable income."
            },
            {
                "text": "Case 1 net ATR is 18.50% (58 389 / 315 850) and Case 2 net ATR is 21.71% (179 147 / 825 000), omitting marginal tax on the bracket excess.",
                "isCorrect": False,
                "refutation": "Dividing only the bracket base amount (58 389 or 179 147) by income ignores both the marginal tax on income above the threshold and the primary rebate."
            }
        ]
    },
    {
        "id": "q_ch15_17",
        "chapterId": "ch15",
        "source": "Chapter 15 — Negative Externalities, Welfare Loss & Pigouvian Taxes",
        "topic": "Follow-Up Analysis of Deadweight Loss and Corrective Government Intervention",
        "difficulty": "Medium",
        "stem": "Continuing with the polluting Highveld chemical plant where Marginal Social Cost ($MSC = MPC + MEC$) lies above Marginal Private Cost ($MPC$), so the unregulated competitive market equilibrium produces output $Q_1$ at price $P_1$ whereas the socially efficient optimum is at lower output $Q_2$ and higher price $P_2$: (1) Why does every unit produced between $Q_2$ and $Q_1$ generate a deadweight welfare loss to society? (2) What corrective policy instrument can the government use to internalise the externality and restore output to $Q_2$?",
        "derivation": [
            r"\text{Prerequisite Context: Unregulated Market Equilibrium at } Q_1 \text{ where } MPC = MSB;\quad \text{Social Optimum at } Q_2 < Q_1 \text{ where } MSC = MSB",
            r"\text{For all output units } Q \in (Q_2, Q_1):\quad MSC(Q) > MSB(Q)\implies \text{social cost of each extra unit exceeds its social benefit, creating a deadweight loss triangle}",
            r"\text{Corrective Policy: Impose a specific Pigouvian excise tax } t = MEC \text{ per unit on the polluter, shifting } MPC \text{ upward to coincide with } MSC \text{ at } (Q_2, P_2)"
        ],
        "options": [
            {
                "text": "Between Q2 and Q1, Marginal Social Cost exceeds Marginal Social Benefit (MSC > MSB); government can impose a Pigouvian tax equal to the marginal external cost (MEC).",
                "isCorrect": True,
                "refutation": "Correct! For every unit beyond Q2 up to Q1, total cost to society (MSC) exceeds the benefit to consumers (DD = MSB), and a Pigouvian tax equal to MEC shifts private cost up to MSC."
            },
            {
                "text": "Between Q2 and Q1, Marginal Social Benefit exceeds Marginal Social Cost (MSB > MSC); government should grant a production subsidy to expand chemical output beyond Q1.",
                "isCorrect": False,
                "refutation": "MSB > MSC and corrective subsidies apply to positive externalities (like vaccinations), whereas negative pollution externalities cause overproduction where MSC > MSB."
            },
            {
                "text": "Between Q2 and Q1, Marginal Private Cost exceeds Marginal Social Cost (MPC > MSC); government should impose a maximum price ceiling below P1 to curb pollution.",
                "isCorrect": False,
                "refutation": "Pollution adds external damage to private cost so MSC > MPC, and setting a price ceiling below P1 would increase quantity demanded even further above Q2."
            },
            {
                "text": "Between Q2 and Q1, deadweight loss is zero because private firm profits offset pollution damage; Coasean bargaining requires no property rights to reach Q2.",
                "isCorrect": False,
                "refutation": "Deadweight loss is strictly positive whenever MSC > MSB, and Coasean bargaining fails in atmospheric pollution because property rights are diffuse and transaction costs are prohibitive."
            }
        ]
    },
    {
        "id": "q_ch16_08",
        "chapterId": "ch16",
        "source": "Chapter 16 — Reciprocal Opportunity Cost & Specialisation",
        "topic": "Follow-Up Calculation of Opportunity Cost of Olives Between Spain and Greece",
        "difficulty": "Medium",
        "stem": "Continuing with the two-country trade model where Spain can produce either 100 kg of olives or 150 kg of tobacco per unit of resources and Greece can produce either 300 kg of olives or 300 kg of tobacco (and where the first part established that 1 kg of tobacco costs 0.67 kg of olives in Spain versus 1.00 kg of olives in Greece, giving Spain the comparative advantage in tobacco): calculate each country's opportunity cost of producing 1 kg of olives and determine which country should specialise in and export olives.",
        "derivation": [
            r"\text{Prerequisite Part 1: Opp. Cost of 1 kg Tobacco} = \frac{100}{150} = 0.67\text{ kg Olives in Spain vs } \frac{300}{300} = 1.00\text{ kg Olives in Greece (Spain specialises in Tobacco)}",
            r"\text{Opp. Cost of 1 kg Olives in Spain} = \frac{150\text{ kg Tobacco}}{100\text{ kg Olives}} = 1.50\text{ kg Tobacco}",
            r"\text{Opp. Cost of 1 kg Olives in Greece} = \frac{300\text{ kg Tobacco}}{300\text{ kg Olives}} = 1.00\text{ kg Tobacco}",
            r"\text{Since } 1.00 < 1.50\text{ kg Tobacco, Greece has the lower opportunity cost (comparative advantage) in Olives and exports Olives to Spain}"
        ],
        "options": [
            {
                "text": "1 kg of olives costs 1.50 kg of tobacco in Spain and 1.00 kg of tobacco in Greece, so Greece holds the comparative advantage in olives and exports olives.",
                "isCorrect": True,
                "refutation": "Correct! Spain sacrifices 150/100 = 1.50 kg of tobacco per kg of olives while Greece sacrifices only 300/300 = 1.00 kg of tobacco, giving Greece the comparative advantage in olives."
            },
            {
                "text": "1 kg of olives costs 0.67 kg of tobacco in Spain and 1.00 kg of tobacco in Greece, so Spain holds the comparative advantage in both olives and tobacco.",
                "isCorrect": False,
                "refutation": "0.67 (100/150) is Spain's opportunity cost of 1 kg of tobacco in terms of olives; its reciprocal (150/100 = 1.50 kg tobacco) is Spain's opportunity cost of 1 kg of olives."
            },
            {
                "text": "1 kg of olives costs 1.50 kg of tobacco in Spain and 1.00 kg of tobacco in Greece, so Spain holds the comparative advantage in olives because 1.50 exceeds 1.00.",
                "isCorrect": False,
                "refutation": "Comparative advantage belongs to the country with the LOWER opportunity cost (Greece at 1.00 kg tobacco < Spain at 1.50 kg tobacco), never the higher cost."
            },
            {
                "text": "1 kg of olives costs 3.00 kg of tobacco in Greece because Greece produces 300 kg vs Spain's 100 kg, so Spain must export olives to Greece.",
                "isCorrect": False,
                "refutation": "300 kg vs 100 kg compares absolute output across countries; domestic opportunity cost divides Greece's own foregone tobacco (300) by Greece's own olive output (300) = 1.00."
            }
        ]
    },
    {
        "id": "q_ch16_09",
        "chapterId": "ch16",
        "source": "Chapter 16 — Terms of Trade & Foreign Exchange Conversion",
        "topic": "Follow-Up Calculation of Import Cost in Domestic Currency Under Exchange Rate Shifts",
        "difficulty": "Medium",
        "stem": "Continuing with the trade model between Australia (150 surfboards or 900 bottles of sunscreen) and the USA (200 surfboards or 1 600 bottles of sunscreen)—where the first part established that Australia has the comparative advantage in surfboards (sacrificing 6 vs 8 bottles of sunscreen) while the USA has the comparative advantage in sunscreen (sacrificing 0.125 vs 0.167 surfboards): suppose Australia imports 50 bottles of sunscreen from the USA at a US price of US$1.50 per bottle. Calculate (1) how much Australia pays in Australian dollars (AUS$) when the exchange rate is US$1 = AUS$1.70, and (2) how much Australia pays if the Australian dollar appreciates to US$1 = AUS$1.50.",
        "derivation": [
            r"\text{Foreign Currency Invoice for 50 Bottles} = 50 \times \text{US}\$1.50 = \text{US}\$75.00",
            r"\text{Cost in AUS\$ at } \text{US}\$1 = \text{AUS}\$1.70:\quad \text{US}\$75.00 \times 1.70 = \text{AUS}\$127.50",
            r"\text{Cost in AUS\$ after Appreciation to } \text{US}\$1 = \text{AUS}\$1.50:\quad \text{US}\$75.00 \times 1.50 = \text{AUS}\$112.50\quad (\text{imports become cheaper by AUS}\$15.00)"
        ],
        "options": [
            {
                "text": "The 50 bottles cost US$75.00, which equals AUS$127.50 at AUS$1.70/US$ and falls to AUS$112.50 when the Australian dollar appreciates to AUS$1.50/US$.",
                "isCorrect": True,
                "refutation": "Correct! 50 × US$1.50 = US$75.00; multiplying by 1.70 gives AUS$127.50, and an appreciation of the AUS$ to 1.50 per US$ lowers the domestic import bill to AUS$112.50."
            },
            {
                "text": "The 50 bottles cost US$75.00, which equals AUS$44.12 at AUS$1.70/US$ and rises to AUS$50.00 when the Australian dollar appreciates to AUS$1.50/US$.",
                "isCorrect": False,
                "refutation": "AUS$44.12 (75 / 1.70) divides by the exchange rate instead of multiplying US$75.00 by 1.70 AUS$/US$."
            },
            {
                "text": "The 50 bottles cost US$85.00, which equals AUS$144.50 at AUS$1.70/US$ and rises to AUS$150.00 because currency appreciation makes imports more expensive.",
                "isCorrect": False,
                "refutation": "50 × US$1.50 is US$75.00 (not US$85.00), and an appreciation of the domestic currency makes foreign imports cheaper in domestic currency, not more expensive."
            },
            {
                "text": "The 50 bottles cost US$75.00, which equals AUS$127.50 at AUS$1.70/US$, but Australia should export sunscreen because it sacrifices 0.167 vs 0.125 surfboards.",
                "isCorrect": False,
                "refutation": "Because 0.125 < 0.167 surfboards, the USA has the lower opportunity cost in sunscreen, so Australia imports sunscreen and exports surfboards."
            }
        ]
    },
    {
        "id": "q_ch16_10",
        "chapterId": "ch16",
        "source": "Chapter 16 — Foreign Exchange Market Shifts & Currency Appreciation",
        "topic": "Four Macroeconomic Determinants of Domestic Currency Appreciation and Trade Balance Impact",
        "difficulty": "Easy",
        "stem": "In a floating exchange rate regime (such as the Rand against the US dollar or Russian rouble), which four fundamental macroeconomic developments cause an appreciation of the domestic currency (either by shifting foreign currency supply $SS$ rightward or foreign currency demand $DD$ leftward), and what is the resulting impact on the domestic trade balance?",
        "derivation": [
            r"\text{Rightward Shift of Foreign Currency Supply } (SS \uparrow \implies E \downarrow, \text{ Appreciation}):",
            r"(1)\text{ Stronger foreign demand for domestic exports (or rising export commodity prices)};\quad (2)\text{ Higher domestic interest rates relative to abroad (attracting financial capital inflows)};\quad (3)\text{ Boom in inbound foreign tourism / FDI}",
            r"\text{Leftward Shift of Foreign Currency Demand } (DD \downarrow \implies E \downarrow, \text{ Appreciation}): (4)\text{ Lower domestic inflation relative to trading partners (reducing import demand)}",
            r"\text{Trade Balance Impact: Appreciation makes exports pricier in foreign currency } (X \downarrow) \text{ and imports cheaper in Rand } (Z \uparrow) \implies \text{Net Exports } (X - Z) \text{ decline}"
        ],
        "options": [
            {
                "text": "Higher export demand/commodity prices, higher relative domestic interest rates (capital inflows), inbound tourism, and lower domestic inflation; appreciation reduces net exports (X - Z).",
                "isCorrect": True,
                "refutation": "Correct! All four factors increase foreign currency inflows or reduce outflows (appreciating the Rand), which subsequently makes exports dearer abroad and imports cheaper locally."
            },
            {
                "text": "A surge in domestic import propensity, lower domestic repo rates (capital outflows), higher domestic inflation, and outbound tourism; appreciation increases net exports (X - Z).",
                "isCorrect": False,
                "refutation": "Higher imports, capital outflows, and high domestic inflation increase the demand for foreign currency, causing a currency depreciation rather than an appreciation."
            },
            {
                "text": "Higher export demand/commodity prices, higher relative domestic interest rates, inbound tourism, and lower domestic inflation; appreciation raises Rand import prices and boosts exports.",
                "isCorrect": False,
                "refutation": "While the four causes of appreciation are right, an appreciation lowers (not raises) import prices in Rand and dampens (not boosts) export competitiveness."
            },
            {
                "text": "Central bank purchases of foreign exchange reserves, abolishing import tariffs, domestic recessionary capital flight, and sovereign rating downgrades; appreciation leaves trade unchanged.",
                "isCorrect": False,
                "refutation": "Central bank buying of USD, tariff removal, and capital flight all increase demand for foreign currency, which depreciates the domestic currency."
            }
        ]
    },
    {
        "id": "q_ch17_06",
        "chapterId": "ch17",
        "source": "Chapter 17 — Structural Assumptions of the Simple Keynesian Model",
        "topic": "Simplifying Assumptions of the Two-Sector Model vs the Four Aggregate Expenditure Components",
        "difficulty": "Easy",
        "stem": "In the build-up of the macroeconomic income-determination model: (1) What are the fundamental simplifying assumptions of the elementary two-sector Keynesian model? (2) When the model is expanded to the full open economy with government, what are the four components of Aggregate Expenditure ($A$) and which of those components are treated as purely autonomous versus induced by income?",
        "derivation": [
            r"\text{Elementary Two-Sector Assumptions: (1) Only households and firms exist (no government } G=T=0, \text{ no foreign sector } X=Z=0\text{)};",
            r"\text{(2) Prices and nominal wages are fixed/given (no inflation); (3) Money market and interest rates are excluded (investment } \bar{I} \text{ is autonomous); (4) Aggregate spending drives output } (A \to Y)",
            r"\text{Full Four-Sector Expenditure: } A = C + I + G + (X - Z),\text{ where } \bar{I}, \bar{G}, \bar{X} \text{ are autonomous while } C = \bar{C} + c(1-t)Y \text{ and } Z = \bar{Z} + mY \text{ contain induced parts}"
        ],
        "options": [
            {
                "text": "Elementary assumptions: only households/firms (no G, T, X, Z), fixed prices/wages, given interest rates, and demand-driven output; Full components: C, I, G, and Net Exports (X - Z).",
                "isCorrect": True,
                "refutation": "Correct! The elementary model excludes the state, foreign trade, price flexibility, and financial markets to isolate C + I, before expanding to A = C + I + G + (X - Z)."
            },
            {
                "text": "Elementary assumptions: flexible prices and wages, vertical aggregate supply at full employment, and Say's Law (Y drives A); Full components: Money supply M1, M2, M3, and Bonds.",
                "isCorrect": False,
                "refutation": "Flexible prices, automatic full employment, and Say's Law are Classical assumptions, and M1–M3 are monetary stock aggregates rather than real expenditure flows."
            },
            {
                "text": "Elementary assumptions: only government and foreign sectors exist with zero household consumption; Full components: Taxes (T), Savings (S), Imports (Z), and Depreciation.",
                "isCorrect": False,
                "refutation": "The elementary model starts with households (C) and firms (I) while excluding G and X - Z; Taxes, Savings, and Imports are leakages rather than injections/expenditure components."
            },
            {
                "text": "Elementary assumptions: only households/firms, fixed prices/wages, and demand-driven output; Full components: Land, Labour, Physical Capital, and Entrepreneurship.",
                "isCorrect": False,
                "refutation": "Land, labour, capital, and entrepreneurship are the four supply-side factors of production, whereas the four components of aggregate expenditure are C, I, G, and (X - Z)."
            }
        ]
    },
    {
        "id": "q_ch18_07",
        "chapterId": "ch18",
        "source": "Chapter 18 — Equilibrium Income & Investment Multiplier Shock (Portofino Follow-Up)",
        "topic": "Follow-Up Calculation of Equilibrium Income and ΔI = +150 Shock Using Prerequisite Multiplier",
        "difficulty": "Hard",
        "stem": "Continuing with the open economy of Portofino where Autonomous consumption $\\bar{C} = 100$, MPC $c = 0.8$, proportional tax rate $t = 0.2$, Investment $\\bar{I} = 100$, Government spending $\\bar{G} = 250$, Exports $\\bar{X} = 300$, and Imports $Z = 20 + 0.1Y$: the first part of the analysis established that autonomous expenditure is $\\bar{A} = 730$ and the open-economy multiplier (rounded to two decimal places) is $\\alpha = 2.17$ (unrounded $1/0.46 \\approx 2.1739$). Using this prerequisite multiplier, calculate (1) the initial equilibrium level of income $Y_0$, (2) the change in equilibrium income $\\Delta Y$ and new equilibrium income $Y_1$ if autonomous investment increases by $\\Delta I = +150$ (from $100$ to $250$), and (3) how this shock appears on the $45^\\circ$ Keynesian diagram.",
        "derivation": [
            r"\text{Prerequisite Baseline: }\bar{A}_0 = 100 + 100 + 250 + 300 - 20 = 730;\quad \alpha = \frac{1}{1 - 0.8(0.8) + 0.1} = \frac{1}{0.46} \approx 2.17",
            r"\text{Initial Equilibrium Income: }Y_0 = \alpha \times \bar{A}_0 = 2.17 \times 730 = 1\,584.10\quad (\text{or } \frac{730}{0.46} = 1\,586.96\text{ unrounded})",
            r"\text{Investment Shock }(\Delta I = +150):\quad \Delta Y = 2.17 \times 150 = +325.50 \implies Y_1 = 1\,584.10 + 325.50 = 1\,909.60\quad (\text{or } \frac{880}{0.46} = 1\,913.04)",
            r"\text{Diagrammatic Effect: Parallel upward shift of the Aggregate Expenditure line } A \text{ from vertical intercept } 730 \text{ to } 880\text{ (slope } 0.54 \text{ unchanged)}"
        ],
        "options": [
            {
                "text": "Initial Y0 = 1 584.10 (1 586.96 exact); ΔI = +150 raises Y by +325.50 to Y1 = 1 909.60 (1 913.04 exact) via a parallel upward shift of A from 730 to 880.",
                "isCorrect": True,
                "refutation": "Correct! Multiplying Ā0 = 730 by α = 2.17 yields Y0 = 1 584.10, and the +150 investment shock shifts the A curve vertically upward to 880, adding 2.17 × 150 = +325.50 to reach 1 909.60."
            },
            {
                "text": "Initial Y0 = 1 584.10 (1 586.96 exact); ΔI = +150 raises Y by +150.00 to Y1 = 1 734.10 (1 736.96 exact) while steepening the slope of the A curve.",
                "isCorrect": False,
                "refutation": "Adding only +150 ignores the multiplier expansion (2.17 × 150 = 325.50), and an autonomous investment change shifts A in parallel without altering its slope (0.54)."
            },
            {
                "text": "Initial Y0 = 1 670.90 (using Ā0 = 770); ΔI = +150 raises Y by +325.50 to Y1 = 1 996.40 via a downward rotation of the 45-degree line.",
                "isCorrect": False,
                "refutation": "Ā0 = 770 erroneously adds autonomous imports (+20 instead of -20), and the 45-degree reference line (A = Y) never rotates when autonomous spending changes."
            },
            {
                "text": "Initial Y0 = 1 584.10 (1 586.96 exact); ΔI = +150 lowers Y by -325.50 to Y1 = 1 258.60 because higher investment crowds out net exports.",
                "isCorrect": False,
                "refutation": "In the Keynesian model, an increase in autonomous investment (ΔI = +150) is an injection that shifts aggregate spending upward and expands equilibrium income."
            }
        ]
    },
    {
        "id": "q_ch18_08",
        "chapterId": "ch18",
        "source": "Chapter 18 — Fiscal Budget Balance & Contractionary Investment Shock Follow-Up",
        "topic": "Follow-Up Calculation of Tax Revenue, Budget Surplus, and Investment Drop Using Prerequisite Equilibrium",
        "difficulty": "Hard",
        "stem": "In the open economy where $\\bar{C} = \\text{R}150$, $\\bar{I} = \\text{R}300$, $\\bar{G} = \\text{R}400$, $\\bar{X} = \\text{R}250$, $Z = 50 + 0.15Y$, $c = 0.75$, $t = 0.25$, and full-employment income $Y_f = \\text{R}1\\,900$: the first part of the analysis established that autonomous spending is $\\bar{A} = \\text{R}1\\,050$, the rounded multiplier is $\\alpha = 1.70$ (unrounded $1/0.5875 \\approx 1.7021$), and initial equilibrium income is $Y_0 = \\text{R}1\\,785$ (unrounded $\\text{R}1\\,787.23$). Using this prerequisite equilibrium $Y_0$, calculate (1) government tax revenue $T = tY_0$ and the government budget balance ($T - G$) at initial equilibrium, (2) the new equilibrium income $Y_1$ if autonomous investment drops from $\\text{R}300$ to $\\text{R}250$ ($\\Delta I = -50$), and (3) the required $\\Delta G$ to reach $Y_f = \\text{R}1\\,900$ from $Y_0 = \\text{R}1\\,785$.",
        "derivation": [
            r"\text{Prerequisite Baseline: }\bar{A}_0 = \text{R}1\,050,\quad \alpha = 1.70\text{ (exact } 1.7021\text{)},\quad Y_0 = \text{R}1\,785\text{ (exact R}1\,787.23\text{)}",
            r"\text{Tax Revenue at } Y_0:\quad T = 0.25 \times 1\,785 = \text{R}446.25\text{ (exact R}446.81\text{)};\quad \text{Budget Balance} = T - G = 446.25 - 400 = +\text{R}46.25\text{ Surplus}",
            r"\text{Investment Drop }(\Delta I = 250 - 300 = -50):\quad \Delta Y = 1.70 \times (-50) = -\text{R}85 \implies Y_1 = 1\,785 - 85 = \text{R}1\,700\text{ (exact R}1\,702.13\text{)}",
            r"\text{Fiscal Injection to Reach } Y_f = 1\,900:\quad \Delta Y = 1\,900 - 1\,785 = 115 \implies \Delta G = \frac{115}{1.70} = \text{R}67.65\text{ (exact R}66.25\text{)}"
        ],
        "options": [
            {
                "text": "Tax revenue is R446.25 (R446.81 exact) yielding a +R46.25 budget surplus; when I drops to R250, Y1 falls by R85 to R1 700 (and reaching Yf = R1 900 from Y0 requires ΔG = +R67.65).",
                "isCorrect": True,
                "refutation": "Correct! At Y0 = R1 785, T = 0.25(1 785) = R446.25 > G = R400 (+R46.25 surplus); a R50 drop in I reduces Y by 1.70 × 50 = R85 to R1 700, while closing the R115 output gap requires ΔG = 115/1.70 = R67.65."
            },
            {
                "text": "Tax revenue is R475.00 (at Yf = R1 900) yielding a +R75.00 budget surplus; when I drops to R250, Y1 falls by R50 to R1 735 (and reaching Yf = R1 900 from Y0 requires ΔG = +R115.00).",
                "isCorrect": False,
                "refutation": "Tax revenue must be evaluated at actual equilibrium income Y0 = R1 785 (not Yf = R1 900), and both the investment shock and fiscal gap are scaled by the multiplier α = 1.70."
            },
            {
                "text": "Tax revenue is R446.25 (R446.81 exact) yielding a -R46.25 budget deficit; when I drops to R250, Y1 rises by R85 to R1 870 (and reaching Yf = R1 900 from Y0 requires ΔG = -R67.65).",
                "isCorrect": False,
                "refutation": "Because tax revenue (R446.25) exceeds government expenditure (R400), the government runs a budget surplus (+R46.25), and a fall in investment contracts equilibrium income to R1 700."
            },
            {
                "text": "Tax revenue is R425.00 (at Y1 = R1 700) yielding a +R25.00 budget surplus; when I drops to R250, Y1 falls by R125 to R1 660 using a simple multiplier of 2.50.",
                "isCorrect": False,
                "refutation": "Initial tax revenue at Y0 = R1 785 is R446.25, and the open-economy multiplier with taxes and imports is 1.70 (giving ΔY = -85), not 2.50."
            }
        ]
    },
    {
        "id": "q_ch18_09",
        "chapterId": "ch18",
        "source": "Chapter 18 — Baseline Open-Economy Keynesian Equilibrium",
        "topic": "Calculating Initial Autonomous Spending, Multiplier, and Equilibrium Income Prior to a Fiscal Shift",
        "difficulty": "Medium",
        "stem": "Consider the baseline open-economy Keynesian model (in R millions) prior to any fiscal reform: Autonomous consumption $\\bar{C} = 30$, Autonomous investment $\\bar{I} = 10$, Government spending $\\bar{G} = 20$, Exports $\\bar{X} = 10$, Autonomous imports $\\bar{Z} = 5$, Marginal propensity to consume $c = 0.6$ (so marginal propensity to save $s = 0.4$), average/proportional tax rate $t = 0.167$ ($1/6$), and Marginal propensity to import $m = 0.125$ ($1/8$). Calculate (1) total autonomous expenditure $\\bar{A}$, (2) the open-economy multiplier $\\alpha$, and (3) the initial equilibrium level of income $Y_0$ and initial tax revenue $T_0$.",
        "derivation": [
            r"\text{Autonomous Expenditure: }\bar{A} = \bar{C} + \bar{I} + \bar{G} + \bar{X} - \bar{Z} = 30 + 10 + 20 + 10 - 5 = \text{R}65\text{ million}",
            r"\text{Induced Slope: }c(1 - t) - m = 0.6(1 - 0.167) - 0.125 = 0.6(0.8333) - 0.125 = 0.50 - 0.125 = 0.375",
            r"\text{Multiplier: }\alpha = \frac{1}{1 - c(1 - t) + m} = \frac{1}{1 - 0.50 + 0.125} = \frac{1}{0.625} = 1.60",
            r"\text{Initial Equilibrium Income: }Y_0 = \alpha \times \bar{A} = 1.60 \times 65 = \text{R}104\text{ million};\quad T_0 = 0.167 \times 104 = \text{R}17.37\text{m}"
        ],
        "options": [
            {
                "text": "Autonomous expenditure Ā is R65m, the multiplier α is 1.60 (1/0.625), initial equilibrium income Y0 is R104m, and initial tax revenue is R17.37m.",
                "isCorrect": True,
                "refutation": "Correct! Ā = 30 + 10 + 20 + 10 - 5 = R65m, 1 - 0.6(1 - 0.167) + 0.125 = 0.625 gives α = 1.60, and Y0 = 1.60 × 65 = R104m (which serves as the baseline before any tax-financed grant)."
            },
            {
                "text": "Autonomous expenditure Ā is R75m, the multiplier α is 1.60 (1/0.625), initial equilibrium income Y0 is R120m, and initial tax revenue is R20.04m.",
                "isCorrect": False,
                "refutation": "Ā = R75m erroneously adds autonomous imports (+5) instead of subtracting them (-5) from autonomous aggregate expenditure."
            },
            {
                "text": "Autonomous expenditure Ā is R65m, the multiplier α is 2.50 (1/0.400), initial equilibrium income Y0 is R162.5m, and initial tax revenue is R27.14m.",
                "isCorrect": False,
                "refutation": "A multiplier of 2.50 = 1/(1 - 0.6) uses the simple closed-economy formula, omitting both proportional income taxation (t = 0.167) and induced imports (m = 0.125)."
            },
            {
                "text": "Autonomous expenditure Ā is R65m, the multiplier α is 2.00 (1/0.500), initial equilibrium income Y0 is R130m, and initial tax revenue is R21.71m.",
                "isCorrect": False,
                "refutation": "A multiplier of 2.00 = 1/[1 - 0.6(0.833)] accounts for the tax rate (t = 0.167) but forgets to add the marginal propensity to import (m = 0.125) to the denominator."
            }
        ]
    },
    {
        "id": "q_ch18_10",
        "chapterId": "ch18",
        "source": "Chapter 18 — Fiscal Budget, Disposable Income & Saving Follow-Up",
        "topic": "Follow-Up Calculation of Taxes, Budget Balance, and Household Saving Given Equilibrium Income",
        "difficulty": "Hard",
        "stem": "In the macroeconomic model where Consumption $C = 85 + 0.5Y_d$, Investment $I = 75$, Government expenditure $G = 70$, Taxes $T = 0.25Y$, Disposable income $Y_d = Y - T$, Exports $X = 30$, and Imports $Z = 30 + 0.3Y_d$: the first part of the analysis established that autonomous spending is $\\bar{A} = 230$, the multiplier is $\\alpha = 1/0.85 \\approx 1.1765$, and equilibrium national income is $Y_0 = 270.59$ ($230 / 0.85$). Using this prerequisite equilibrium income $Y_0 = 270.59$, calculate (1) equilibrium tax revenue $T$, (2) the government budget balance ($T - G$), (3) equilibrium disposable income $Y_d$, and (4) household saving $S = Y_d - C$.",
        "derivation": [
            r"\text{Prerequisite Baseline: }Y_0 = \frac{230}{1 - (0.5 - 0.3)(1 - 0.25)} = \frac{230}{0.85} = 270.59",
            r"\text{Equilibrium Taxes: }T = 0.25 \times Y_0 = 0.25 \times 270.59 = 67.65",
            r"\text{Government Budget Balance: }T - G = 67.65 - 70.00 = -2.35\quad (\text{Budget Deficit of } 2.35,\text{ since } G > T)",
            r"\text{Disposable Income & Saving: }Y_d = 270.59 - 67.65 = 202.94;\quad C = 85 + 0.5(202.94) = 186.47;\quad S = Y_d - C = 202.94 - 186.47 = 16.47"
        ],
        "options": [
            {
                "text": "Taxes T = 67.65, the government budget has a deficit of -2.35 (since G = 70 > T = 67.65), disposable income Yd = 202.94, and household saving S = 16.47.",
                "isCorrect": True,
                "refutation": "Correct! At Y0 = 270.59, T = 0.25(270.59) = 67.65, leaving a budget deficit of 67.65 - 70 = -2.35; disposable income is 202.94, consumption is 186.47, and saving is 202.94 - 186.47 = 16.47."
            },
            {
                "text": "Taxes T = 67.65, the government budget has a surplus of +2.35 (G - T), disposable income Yd = 270.59, and household saving S = 50.29.",
                "isCorrect": False,
                "refutation": "When government spending (G = 70) exceeds tax revenue (T = 67.65), the budget is in deficit (-2.35), and saving must be calculated from after-tax disposable income Yd = 202.94."
            },
            {
                "text": "Taxes T = 57.50, the government budget has a deficit of -12.50, disposable income Yd = 172.50, and household saving S = 1.25 (evaluating at Ā = 230).",
                "isCorrect": False,
                "refutation": "Evaluating taxes and disposable income at autonomous spending (230) instead of equilibrium income (Y0 = 270.59) omits the multiplier expansion."
            },
            {
                "text": "Taxes T = 67.65, the government budget has a deficit of -2.35, disposable income Yd = 202.94, and household saving S = 186.47.",
                "isCorrect": False,
                "refutation": "186.47 is household consumption expenditure C = 85 + 0.5(202.94); household saving is S = Yd - C = -85 + 0.5(202.94) = 16.47."
            }
        ]
    },
    {
        "id": "q_ch20_08",
        "chapterId": "ch20",
        "source": "Chapter 20 — GDP Deflator Inflation vs CPI Inflation Follow-Up",
        "topic": "Follow-Up Calculation of GDP Deflator Inflation Using Prerequisite Nominal and Real GDP",
        "difficulty": "Medium",
        "stem": "Perform two follow-up inflation calculations using prerequisite National Accounts outputs: (Part A — Three-Good Economy Follow-Up) In the Pizza, Soda, and Ice Cream economy where Period 1 is the base period, the first part of the analysis established that Period 1 Nominal GDP = Period 1 Real GDP = R860, Period 2 Nominal GDP = R1 419, and Period 2 Real GDP (at Period 1 prices) = R1 290. Calculate the Period 1 and Period 2 GDP Deflators and the Period 2 inflation rate. (Part B — Multi-Year Comparison) A national economy records: Period 1 (Nominal GDP = R5.80T, Real GDP = R5.42T, CPI = 131.5), Period 2 (Nominal GDP = R6.32T, Real GDP = R5.68T, CPI = 139.8), and Period 3 (Nominal GDP = R6.91T, Real GDP = R5.97T, CPI = 147.6). Compare the GDP Deflator inflation rate with the CPI inflation rate in Period 2 and Period 3.",
        "derivation": [
            r"\text{Part A (Pizza/Soda/Ice Cream Follow-Up): }\text{Defl}_1 = \frac{860}{860}\times 100 = 100.0;\quad \text{Defl}_2 = \frac{1\,419}{1\,290}\times 100 = 110.0 \implies \pi_2 = \frac{110 - 100}{100}\times 100 = 10.00\%",
            r"\text{Part B GDP Deflators: }\text{Defl}_1 = \frac{5.80}{5.42}\times 100 = 107.01;\quad \text{Defl}_2 = \frac{6.32}{5.68}\times 100 = 111.27;\quad \text{Defl}_3 = \frac{6.91}{5.97}\times 100 = 115.75",
            r"\text{Part B Deflator Inflation: }\pi_2^{\text{Defl}} = \frac{111.27 - 107.01}{107.01} = 3.98\%;\quad \pi_3^{\text{Defl}} = \frac{115.75 - 111.27}{111.27} = 4.03\%",
            r"\text{Part B CPI Inflation: }\pi_2^{\text{CPI}} = \frac{139.8 - 131.5}{131.5} = 6.31\%;\quad \pi_3^{\text{CPI}} = \frac{147.6 - 139.8}{139.8} = 5.58\%"
        ],
        "options": [
            {
                "text": "Part A: Deflator rises from 100.0 to 110.0 (inflation = 10.00%); Part B: Deflator inflation is 3.98% and 4.03% (Deflators 107.01, 111.27, 115.75), while CPI inflation is 6.31% and 5.58%.",
                "isCorrect": True,
                "refutation": "Correct! In Part A, (1 419 / 1 290) × 100 = 110.0 gives 10.00% inflation; in Part B, GDP deflator inflation is 3.98% and 4.03%, whereas CPI inflation is 6.31% and 5.58%."
            },
            {
                "text": "Part A: Deflator rises from 100.0 to 150.0 (inflation = 50.00%); Part B: Deflator inflation is 8.97% and 9.34% (using Nominal GDP growth), while CPI inflation is 8.30% and 7.80%.",
                "isCorrect": False,
                "refutation": "In Part A, 50.00% is the real output growth rate (1 290 vs 860), and in Part B, 8.30 and 7.80 are raw CPI index point differences rather than percentage changes."
            },
            {
                "text": "Part A: Deflator falls from 100.0 to 90.91 (deflation = -9.09%); Part B: Deflator inflation is 4.80% and 5.11% (using Real GDP growth), while CPI inflation is 6.31% and 5.58%.",
                "isCorrect": False,
                "refutation": "90.91 inverts the GDP deflator ratio (1 290 / 1 419), and 4.80% and 5.11% in Part B measure real output growth rather than price deflator inflation."
            },
            {
                "text": "Part A: Deflator rises from 100.0 to 165.0 (inflation = 65.00%); Part B: Deflator inflation and CPI inflation are identical at 6.31% in Period 2 and 5.58% in Period 3.",
                "isCorrect": False,
                "refutation": "65.00% in Part A is the nominal GDP increase [(1 419 - 860)/860], which combines +50% real output growth and +10% price inflation."
            }
        ]
    },
    {
        "id": "q_ch21_07",
        "chapterId": "ch21",
        "source": "Chapter 21 — Broad Unemployment Rate Follow-Up & Labour Ratios",
        "topic": "Follow-Up Calculation of Tigeria's Broad Unemployment Rate and Multi-Country Labour Ratios",
        "difficulty": "Medium",
        "stem": "Solve three quantitative labour market problems: (Case 1 — Tigeria Follow-Up) Given Tigeria's adult population = 34.0m, employed = 18.6m, active unemployed = 8.9m, and discouraged work-seekers = 2.5m, the first part of the analysis established that the strict labour force is 27.5m and the broad (expanded) labour force is 30.0m. Using these prerequisite labour force totals, calculate Tigeria's broad unemployment rate and compare it with the strict unemployment rate. (Case 2 — Neverland) Neverland has a working-age population of 20 million, 8 million employed, and 3 million actively unemployed. Calculate its strict labour force and unemployment rate. (Case 3 — Brazil) Brazil has a working-age population of 3.2 million, a labour force of 2.4565 million, and 235 300 unemployed people. Calculate Brazil's unemployment rate and number of employed people.",
        "derivation": [
            r"\text{Case 1 (Tigeria Follow-Up): }u_{\text{broad}} = \frac{8.9\text{m} + 2.5\text{m}}{\text{LF}_{\text{broad}}} = \frac{11.4\text{m}}{30.0\text{m}} \times 100 = 38.00\%\quad (\text{vs } u_{\text{strict}} = \frac{8.9\text{m}}{27.5\text{m}} \times 100 = 32.36\%)",
            r"\text{Case 2 (Neverland): }\text{LF} = 8\text{m} + 3\text{m} = 11\text{ million};\quad u = \frac{3\text{m}}{11\text{m}} \times 100 = 27.27\%",
            r"\text{Case 3 (Brazil): }u = \frac{235\,300}{2\,456\,500} \times 100 = 9.58\%;\quad \text{Employed } (E) = \text{LF} - U = 2\,456\,500 - 235\,300 = 2\,221\,200"
        ],
        "options": [
            {
                "text": "Tigeria: broad unemployment is 38.00% (11.4m/30.0m) vs 32.36% strict; Neverland: LF = 11m and u = 27.27%; Brazil: u = 9.58% and Employed = 2 221 200.",
                "isCorrect": True,
                "refutation": "Correct! Using Tigeria's broad LF of 30.0m gives 11.4m/30.0m = 38.00%; Neverland's LF is 8m + 3m = 11m (u = 3/11 = 27.27%); Brazil's u = 235 300 / 2 456 500 = 9.58% with 2 221 200 employed."
            },
            {
                "text": "Tigeria: broad unemployment is 41.45% (11.4m/27.5m) vs 32.36% strict; Neverland: LF = 20m and u = 15.00%; Brazil: u = 7.35% and Employed = 2 964 700.",
                "isCorrect": False,
                "refutation": "41.45% divides Tigeria's broad unemployed (11.4m) by the strict LF (27.5m instead of 30.0m), while Neverland and Brazil wrongly use total working-age population as the labour force."
            },
            {
                "text": "Tigeria: broad unemployment is 29.67% (8.9m/30.0m) vs 32.36% strict; Neverland: LF = 11m and u = 37.50%; Brazil: u = 10.59% and Employed = 2 221 200.",
                "isCorrect": False,
                "refutation": "29.67% omits Tigeria's 2.5m discouraged work-seekers from the numerator, while 37.50% (3/8) and 10.59% divide unemployed workers by employed workers instead of the labour force."
            },
            {
                "text": "Tigeria: broad unemployment is 33.53% (11.4m/34.0m) vs 26.18% strict; Neverland: LF = 11m and u = 27.27%; Brazil: u = 9.58% and Employed = 2 691 800.",
                "isCorrect": False,
                "refutation": "33.53% divides Tigeria's unemployed by total adult population (34.0m), and 2 691 800 in Brazil adds unemployed workers to the labour force instead of subtracting them."
            }
        ]
    }
]

for q in NEW_QUESTIONS_4:
    lengths = [len(opt["text"]) for opt in q["options"]]
    ratio = max(lengths) / min(lengths)
    if ratio > 1.25:
        raise ValueError(f"Question {q['id']} violates length ratio: {ratio:.3f} ({lengths})")
    QUESTIONS.append(q)

print(f"Total verified questions in bank: {len(QUESTIONS)}")



PAST_PAPERS = [
    {
        "id": "suite_01",
        "title": "Synthesis Suite I — National Accounts, Value-Added & Open-Economy Multipliers",
        "session": "Synthesis Suite I — National Accounts, Value-Added & Open-Economy Multipliers",
        "campuses": ["Chapter 13", "Chapter 14", "Chapter 15", "Chapter 16", "Chapter 17", "Chapter 18", "Chapter 20", "Chapter 21"],
        "examiners": "Macroeconomic Curriculum Synthesis",
        "moderator": "Quantitative & Theoretical Verification",
        "durationMinutes": 180,
        "totalMarks": 100,
        "questionIds": [
            "q_ch13_06", "q_ch13_21", "q_ch13_07", "q_ch13_13",
            "q_ch20_02", "q_ch20_08", "q_ch20_03", "q_ch21_01",
            "q_ch14_05", "q_ch14_06", "q_ch14_12", "q_ch14_04",
            "q_ch15_03", "q_ch15_16", "q_ch16_04", "q_ch16_10",
            "q_ch17_06", "q_ch18_01", "q_ch18_07", "q_ch18_06"
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
        "campuses": ["Chapter 13", "Chapter 14", "Chapter 15", "Chapter 16", "Chapter 17", "Chapter 18", "Chapter 20", "Chapter 21", "Chapter 22"],
        "examiners": "Macroeconomic Curriculum Synthesis",
        "moderator": "Quantitative & Theoretical Verification",
        "durationMinutes": 180,
        "totalMarks": 100,
        "questionIds": [
            "q_ch13_03", "q_ch13_22", "q_ch13_12", "q_ch13_26", "q_ch13_28",
            "q_ch21_02", "q_ch21_07", "q_ch20_01", "q_ch15_05",
            "q_ch16_02", "q_ch16_09", "q_ch16_03",
            "q_ch18_09", "q_ch18_03", "q_ch18_05",
            "q_ch14_01", "q_ch14_02", "q_ch14_03",
            "q_ch17_02", "q_ch17_03", "q_ch22_03"
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
        "campuses": ["Chapter 13", "Chapter 15", "Chapter 18", "Chapter 19", "Chapter 20", "Chapter 21"],
        "examiners": "Macroeconomic Curriculum Synthesis",
        "moderator": "Quantitative & Theoretical Verification",
        "durationMinutes": 180,
        "totalMarks": 100,
        "questionIds": [
            "q_ch13_04", "q_ch13_23", "q_ch13_05", "q_ch13_25",
            "q_ch13_09", "q_ch13_10", "q_ch13_27",
            "q_ch20_04", "q_ch15_02", "q_ch15_04", "q_ch15_17",
            "q_ch18_02", "q_ch18_08", "q_ch21_03", "q_ch21_05",
            "q_ch19_01", "q_ch19_02", "q_ch19_03", "q_ch19_04"
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
        "campuses": ["Chapter 13", "Chapter 14", "Chapter 15", "Chapter 16", "Chapter 17", "Chapter 18", "Chapter 20", "Chapter 21", "Chapter 22"],
        "examiners": "Macroeconomic Curriculum Synthesis",
        "moderator": "Quantitative & Theoretical Verification",
        "durationMinutes": 180,
        "totalMarks": 100,
        "questionIds": [
            "q_ch13_01", "q_ch13_11", "q_ch14_09", "q_ch14_10",
            "q_ch15_01", "q_ch15_06", "q_ch15_07", "q_ch15_08",
            "q_ch15_13", "q_ch15_14", "q_ch15_15",
            "q_ch16_01", "q_ch16_08", "q_ch16_06",
            "q_ch17_05", "q_ch20_07", "q_ch21_04",
            "q_ch22_02", "q_ch22_04"
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
        "campuses": ["Chapter 13", "Chapter 14", "Chapter 15", "Chapter 16", "Chapter 17", "Chapter 18", "Chapter 20", "Chapter 21", "Chapter 22"],
        "examiners": "Macroeconomic Curriculum Synthesis",
        "moderator": "Quantitative & Theoretical Verification",
        "durationMinutes": 180,
        "totalMarks": 100,
        "questionIds": [
            "q_ch13_02", "q_ch13_24", "q_ch13_08", "q_ch13_14",
            "q_ch13_15", "q_ch13_16", "q_ch13_17", "q_ch13_18",
            "q_ch13_19", "q_ch13_20", "q_ch14_07", "q_ch14_08",
            "q_ch14_11", "q_ch15_09", "q_ch15_10", "q_ch15_11",
            "q_ch15_12", "q_ch16_05", "q_ch16_07", "q_ch17_01",
            "q_ch17_04", "q_ch18_04", "q_ch18_10", "q_ch20_05",
            "q_ch20_06", "q_ch21_06", "q_ch22_01"
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

# STRICT DE-REFERENCING & UN-NUMBERING SANITIZATION PASS
CHAPTER_LABELS = {ch["id"]: f"Chapter {ch['number']} — {ch['title']}" for ch in CHAPTERS}

TEXT_REPLACEMENTS = [
    ("South Africa's 2020 National Accounts", "a national economy's National Accounts"),
    ("South Africa's 2018 National Accounts", "a national economy's National Accounts"),
    ("for the 2024/2025 tax year", "for the current statutory tax year"),
    ("2024/2025 SARS tax bracket", "statutory tax bracket"),
    ("2023/2024 SARS tax bracket", "statutory tax bracket"),
    ("2022/2023 SARS tax bracket", "statutory tax bracket"),
    ("2024/2025", "current statutory"),
    ("2023/2024", "statutory"),
    ("2022/2023", "statutory"),
    ("2017/18", "Schedule A"),
    ("2018/19", "Schedule B"),
    ("(2021 = 100)", "(Period 1 = 100)"),
    ("(2018 = 100)", "(Period 1 = 100)"),
    ("(2011 = 100)", "(Period 1 = 100)"),
    ("(2022 = 100)", "(Period 1 = 100)"),
    ("in 2021 (base year)", "in Period 1 (base period)"),
    ("in 2020 (base year)", "in Period 1 (base period)"),
    ("in 2018 (base year)", "in Period 1 (base period)"),
    ("in 2021 and 2022", "in Period 1 and Period 2"),
    ("for 2021 and 2022", "for Period 1 and Period 2"),
    ("between 2021 and 2022", "between Period 1 and Period 2"),
    ("in 2022 and 2023", "in Period 1 and Period 2"),
    ("for 2022 and 2023", "for Period 1 and Period 2"),
    ("between 2022 and 2023", "between Period 1 and Period 2"),
    ("in 2020 and 2021", "in Period 1 and Period 2"),
    ("for 2020 and 2021", "for Period 1 and Period 2"),
    ("between 2020 and 2021", "between Period 1 and Period 2"),
    ("in 2011 and 2012", "in Period 1 and Period 2"),
    ("for 2011 and 2012", "for Period 1 and Period 2"),
    ("in 2017 and 2018", "in Period 1 and Period 2"),
    ("for 2017 and 2018", "for Period 1 and Period 2"),
    ("in 2021", "in Period 1"),
    ("in 2022", "in Period 2"),
    ("in 2023", "in Period 2"),
    ("for 2021", "for Period 1"),
    ("for 2022", "for Period 2"),
    ("for 2023", "for Period 2"),
    ("for 2020", "for Period 2"),
    ("in 2020", "in Period 2"),
    ("2021 Nominal", "Period 1 Nominal"),
    ("2022 Nominal", "Period 2 Nominal"),
    ("2021 Real", "Period 1 Real"),
    ("2022 Real", "Period 2 Real"),
    ("2021 prices", "Period 1 prices"),
    ("2020 prices", "Period 1 prices"),
    ("2018 prices", "Period 1 prices"),
    ("2022 Deflator", "Period 1 Deflator"),
    ("2023 Deflator", "Period 2 Deflator"),
    ("Deflator 2021", "Deflator (Period 1)"),
    ("Deflator 2022", "Deflator (Period 2)"),
    ("Deflator 2023", "Deflator (Period 2)"),
    ("Deflator 2020", "Deflator (Period 2)"),
    ("Deflator 2018", "Deflator (Period 1)"),
    ("Deflator 2011", "Deflator (Period 1)"),
    ("Deflator 2012", "Deflator (Period 2)"),
    ("{2021}", "{1}"),
    ("{2022}", "{2}"),
    ("{2023}", "{2}"),
    ("{2020}", "{2}"),
    ("{2018}", "{1}"),
    ("{2011}", "{1}"),
    ("{2012}", "{2}"),
    ("2021:", "Period 1:"),
    ("2022:", "Period 2:"),
    ("2023:", "Period 2:"),
    ("2020:", "Period 1:"),
    ("2018:", "Period 1:"),
    ("2011:", "Period 1:"),
    ("2012:", "Period 2:"),
    ("2022 inflation", "Period 2 inflation"),
    ("2023 inflation", "Period 2 inflation"),
    ("2021 inflation", "Period 2 inflation"),
    ("2012 inflation", "Period 2 inflation"),
    ("from 2022 to 2023", "from Period 1 to Period 2"),
    ("from 2021 to 2022", "from Period 1 to Period 2"),
    ("from 2020 to 2021", "from Period 1 to Period 2"),
    ("from 2011 to 2012", "from Period 1 to Period 2"),
    ("2023 real GDP", "Period 2 real GDP"),
    ("2022 real GDP", "Period 2 real GDP"),
    ("2021 real GDP", "Period 1 real GDP"),
    ("2022 nominal GDP", "Period 2 nominal GDP"),
    ("2023 nominal GDP", "Period 2 nominal GDP"),
    ("2020 Nominal GDP", "Period 2 Nominal GDP"),
    ("2020 Real GDP", "Period 2 Real GDP"),
    ("2020 GDP Deflator", "Period 2 GDP Deflator"),
    ("2022 =", "Period 1 ="),
    ("2023 =", "Period 2 ="),
    ("2021 =", "Period 1 ="),
    ("2020 =", "Period 1 ="),
    ("2022)", "Period 2)"),
    ("2021)", "Period 1)"),
    ("2023)", "Period 2)"),
    ("2020)", "Period 1)"),
    ("2018)", "Period 1)"),
    ("in standard NWU exams", "in macroeconomic analysis"),
    ("In standard NWU exams", "In macroeconomic analysis"),
    ("for NWU exams", "in macroeconomic analysis"),
    ("In NWU exams", "In macroeconomic analysis"),
    ("in NWU ECON122", "in macroeconomics"),
    ("NWU ECON122", "Macroeconomics"),
    ("exam papers", "quantitative problems"),
    ("past papers", "synthesis problems"),
    ("Past Papers", "Synthesis Problems"),
    ("exam trap", "analytical pitfall"),
    ("Exam Trap", "Analytical Pitfall"),
    ("(Exam Favourite)", "(Core Synthesis)"),
    ("(Exam Table)", "(Comparative Matrix)"),
    ("as specified in the exam equation", "as specified in the structural equation"),
    ("(no rebate subtracted in exam memo)", "(with zero rebate subtracted)"),
    ("(Q2 2023)", "(quarterly survey)"),
    ("(Q2 Period)", "(quarterly survey)"),
]

def clean_string(s: str) -> str:
    # First remove parenthetical exam citations like (as in NWU 2023 Dec Paper Q7), (NWU 2022 Dec Q7), etc.
    s = re.sub(r'\s*\((?:as in )?NWU[^)]*\)', '', s, flags=re.IGNORECASE)
    s = re.sub(r'In NWU[^:]*:\s*', '', s, flags=re.IGNORECASE)
    s = re.sub(r'As tested in Dec[^,]*,\s*', '', s, flags=re.IGNORECASE)
    for old, new in TEXT_REPLACEMENTS:
        s = s.replace(old, new)
    s = re.sub(r'\bSection\s+[ABC]\b(\s*[—\-]?\s*Q\d+(\.\d+)?)?', 'Core Analysis', s, flags=re.IGNORECASE)
    s = re.sub(r'\bPaper\s+[12]\b', 'Suite', s, flags=re.IGNORECASE)
    s = re.sub(r'\b(1st|2nd)\s+Opportunity\b', 'Assessment', s, flags=re.IGNORECASE)
    s = re.sub(r'\bPast\s+Papers?\b', 'Synthesis Problems', s, flags=re.IGNORECASE)
    s = re.sub(r'\bExam\s+Q\d+(\.\d+)?\b', 'Problem', s, flags=re.IGNORECASE)
    s = re.sub(r'\bQ\d+\.\d+\b', '', s)
    s = re.sub(r'\bTutorial\s*\d*\b', 'Application', s, flags=re.IGNORECASE)
    s = re.sub(r'\bTest\s+[12]\b', 'Assessment', s, flags=re.IGNORECASE)
    s = re.sub(r'\b(Potchefstroom|Vanderbijlpark|Mahikeng)\b', '', s, flags=re.IGNORECASE)
    s = re.sub(r'\b20(1[6-9]|2[0-5])\b', 'Period', s)
    return s

def sanitize_obj(obj):
    if isinstance(obj, str):
        return clean_string(obj)
    elif isinstance(obj, list):
        return [sanitize_obj(x) for x in obj]
    elif isinstance(obj, dict):
        return {k: sanitize_obj(v) for k, v in obj.items()}
    return obj

for q in QUESTIONS:
    ch_id = q.get("chapterId") or q.get("chapter") or "ch13"
    q["chapter"] = ch_id
    q["chapterId"] = ch_id
    ch_label = CHAPTER_LABELS.get(ch_id, "Macroeconomics")
    sub_label = q.get("topic") or q.get("citation") or "Core Concept & Quantitative Application"
    q["source"] = f"{ch_label} — {sub_label}"

CHAPTERS = sanitize_obj(CHAPTERS)
QUESTIONS = sanitize_obj(QUESTIONS)
PAST_PAPERS = sanitize_obj(PAST_PAPERS)

# Re-verify option length ratios after sanitization
for q in QUESTIONS:
    lengths = [len(opt["text"]) for opt in q["options"]]
    ratio = max(lengths) / min(lengths)
    if ratio > 1.25:
        raise ValueError(f"Post-sanitize Question {q['id']} violates length ratio: {ratio:.3f} ({lengths})")

js_payload = f"""// Auto-generated & Mathematically Verified Knowledge Base for Macroeconomics (ECON122)
// Source: Philip Mohr - Economics for South African Students (6e, Van Schaik)

const ECON122_DATA = {{
  chapters: {json.dumps(CHAPTERS, indent=2, ensure_ascii=False)},
  questions: {json.dumps(QUESTIONS, indent=2, ensure_ascii=False)},
  pastPapers: {json.dumps(PAST_PAPERS, indent=2, ensure_ascii=False)}
}};

if (typeof module !== 'undefined' && module.exports) {{
  module.exports = ECON122_DATA;
}}
"""

# Verify zero forbidden references in generated payload
FORBIDDEN_PATTERNS = [
    r'\bSection [ABC]\b',
    r'\bPaper\b',
    r'\bExam\b',
    r'\b1st Opportunity\b',
    r'\b2nd Opportunity\b',
    r'\bPast Paper\b',
    r'\bQ\d+\.\d+',
    r'\bTutorial\b',
    r'\bTest [12]\b',
    r'\bPotchefstroom\b',
    r'\bVanderbijlpark\b',
    r'\bMahikeng\b',
    r'\bNWU\b',
    r'\b20(1[6-9]|2[0-5])\b',
]
for pat in FORBIDDEN_PATTERNS:
    m = re.search(pat, js_payload, flags=re.IGNORECASE)
    if m:
        start = max(0, m.start() - 60)
        end = min(len(js_payload), m.end() + 60)
        raise AssertionError(f"Forbidden pattern '{pat}' found in data.js: '{m.group(0)}' near: {js_payload[start:end]!r}")


with open(OUT_JS, "w", encoding="utf-8") as f:
    f.write(js_payload)

print(f"Successfully wrote {OUT_JS} ({len(js_payload)} bytes) with {len(QUESTIONS)} verified exam-agnostic questions!")

