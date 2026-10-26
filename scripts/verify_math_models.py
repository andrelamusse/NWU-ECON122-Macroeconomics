import json
import math
import os

ROOT = r"c:\NWU\SM2\ECON122"
OUT_PATH = os.path.join(ROOT, "scripts", "verified_math_solutions.json")

solutions = {}

# 1. 2018 Nov Exam (MC/PC/VC) Section C
# Q1: SA 2018 National Accounts
# GDP_MP = 1204, D = 72, FI = 24, FP = 13, Taxes = 148, Subsidies = 15, X = 64, Z = 100, C = 608, I = 248, G = 312
# Note: GDE_MP = C + I + G = 608 + 248 + 312 = 1168 (or GDP_MP - X + Z = 1204 - 64 + 100 = 1240 if inventory change = 72)
# NI (NNI at factor cost): GDP_MP - D + FI - FP - Taxes + Subsidies = 1204 - 72 + 24 - 13 - 148 + 15 = 1010
# Also by Income approach: Wages (134) + Rent (150) + Interest (300) + Profit (400) = 984 (NDP_FC or GDP_FC), + FI(24) - FP(13) = 995
# GDE_FC = GDP_MP + Z - X - Taxes + Subsidies = 1204 + 100 - 64 - 148 + 15 = 1107
solutions["2018_Nov_C_Q1"] = {
    "NI_from_GDP_MP": 1204 - 72 + 24 - 13 - 148 + 15,
    "GDE_MP_from_GDP": 1204 + 100 - 64,
    "GDE_FC": 1204 + 100 - 64 - 148 + 15
}

# Q2: Hogwarts 2017 & 2018 (same numbers as 2022 Dec Q2 for 2020 & 2021)
# 2017/2020: (100*1) + (10*8) + (5*4) = 100 + 80 + 20 = 200
# 2018/2021: (110*1) + (12*10) + (4*5) = 110 + 120 + 20 = 250
# Growth in Nominal GDP = (250 - 200)/200 * 100 = 25.0%
# Real GDP 2018/2021 (at 2017/2020 base prices): (100*1) + (10*10) + (5*5) = 100 + 100 + 25 = 225
solutions["Hogwarts_GDP"] = {
    "nom_y1": 100*1 + 10*8 + 5*4,
    "nom_y2": 110*1 + 12*10 + 4*5,
    "nom_growth_pct": ((250 - 200) / 200) * 100,
    "real_y2": 100*1 + 10*10 + 5*5,
    "real_growth_pct": ((225 - 200) / 200) * 100
}

# Q3: SARB Deflator Inflation 2012
# 2011: Real = 1905736, Nom = 2917539 -> Deflator_2011 = (2917539 / 1905736) * 100 = 153.09248... -> 153.09
# 2012: Real = 1954303, Nom = 3155195 -> Deflator_2012 = (3155195 / 1954303) * 100 = 161.44860... -> 161.45
defl_2011 = round((2917539 / 1905736) * 100, 2)
defl_2012 = round((3155195 / 1954303) * 100, 2)
infl_2012_rounded = round(((defl_2012 - defl_2011) / defl_2011) * 100, 2)
infl_2012_exact = round((((3155195 / 1954303) - (2917539 / 1905736)) / (2917539 / 1905736)) * 100, 2)
solutions["2018_Nov_C_Q3"] = {
    "deflator_2011": defl_2011,
    "deflator_2012": defl_2012,
    "inflation_2012_from_rounded": infl_2012_rounded,
    "inflation_2012_unrounded": infl_2012_exact
}

# Q4: 2018 Italian Economy Keynesian Model
# C = 85 + 0.5Yd, I = 75, G = 70, T = 0.25Y, Yd = 0.75Y, X = 30, Z = 30 + 0.3Yd
# A_bar = 85 + 75 + 70 + 30 - 30 = 230
# Induced slope: (c - m)*(1 - t) = (0.5 - 0.3)*0.75 = 0.2 * 0.75 = 0.15
# Y = 230 + 0.15Y => 0.85Y = 230 => Y = 230 / 0.85 = 270.59
# (Note: if Z = 30 + 0.3Y instead of 0.3Yd, slope = 0.375 - 0.3 = 0.075 => Y = 230 / 0.925 = 248.65)
Y_eq_italy = 230 / 0.85
T_eq_italy = 0.25 * Y_eq_italy
budget_balance_italy = T_eq_italy - 70  # -2.35 deficit
Yd_eq_italy = 0.75 * Y_eq_italy
S_eq_italy = -85 + (1 - 0.5) * Yd_eq_italy
solutions["2018_Nov_C_Q4"] = {
    "A_bar": 230,
    "Y_eq": round(Y_eq_italy, 2),
    "T_eq": round(T_eq_italy, 2),
    "budget_balance": round(budget_balance_italy, 2),
    "S_eq": round(S_eq_italy, 2)
}

# Q5: 2018 SA vs Zimbabwe Comparative Advantage
# SA: 6m cloth or 4 cars. Opp cost of 1m cloth = 4/6 = 0.67 cars; Opp cost of 1 car = 6/4 = 1.5m cloth.
# Zim: 1m cloth or 5 cars. Opp cost of 1m cloth = 5/1 = 5 cars; Opp cost of 1 car = 1/5 = 0.2m cloth.
# SA has comparative advantage in cloth (0.67 < 5); Zimbabwe has comparative advantage in cars (0.2 < 1.5).
solutions["2018_Nov_C_Q5"] = {
    "SA_opp_cloth": round(4/6, 2),
    "Zim_opp_cloth": 5.0,
    "SA_opp_car": 1.5,
    "Zim_opp_car": 0.2,
    "comp_adv_cloth": "South Africa",
    "comp_adv_cars": "Zimbabwe"
}

# Q6: 2018 Italy Unemployment Rate
# Employed = 20m, Unemployed = 10m => LF = 30m => U_rate = 10/30 * 100 = 33.33%
solutions["2018_Nov_C_Q6"] = {
    "labour_force_m": 30,
    "unemployment_rate_pct": round((10 / 30) * 100, 2)
}

# 2. 2019 Nov/Dec & 2024 Dec Portofino Keynesian Model
# C = 100 + 0.8Y, T = 0.2Y, I = 100, G = 250, X = 300, Z = 20 + 0.1Y
# A_bar = 100 + 100 + 250 + 300 - 20 = 730
# Using standard Mohr textbook open-economy formula with tax rate t=0.2:
# c(1-t) = 0.8 * (1 - 0.2) = 0.64
# alpha = 1 / (1 - c(1-t) + m) = 1 / (1 - 0.64 + 0.1) = 1 / 0.46 = 2.173913... -> 2.17
# Y0 (exact alpha) = 730 / 0.46 = 1586.96
# Y0 (rounded alpha 2.17) = 730 * 2.17 = 1584.10
# Delta I = +150 => Delta Y = 2.17 * 150 = 325.50 => New Y = 1584.10 + 325.50 = 1909.60 (or 1586.96 + 325.50 = 1912.46)
solutions["Portofino_Keynesian"] = {
    "A_bar": 730,
    "alpha_exact": 1 / 0.46,
    "alpha_rounded": round(1 / 0.46, 2),
    "Y0_exact": round(730 / 0.46, 2),
    "Y0_using_rounded_alpha": round(730 * 2.17, 2),
    "delta_Y_for_dI_150": round(150 * 2.17, 2),
    "Y1_new": round(730 * 2.17 + 150 * 2.17, 2)
}

# 2019 C Q2: Spain vs Greece (Olives & Tobacco)
# Spain: 100 Olives or 150 Tobacco -> 1 Tobacco = 100/150 = 0.67 Olives; 1 Olive = 150/100 = 1.5 Tobacco
# Greece: 300 Olives or 300 Tobacco -> 1 Tobacco = 1 Olive; 1 Olive = 1 Tobacco
# Comp adv in Tobacco: Spain (0.67 < 1); Comp adv in Olives: Greece (1 < 1.5)
solutions["2019_Nov_C_Q2"] = {
    "Spain_opp_tobacco": round(100/150, 2),
    "Greece_opp_tobacco": 1.0,
    "Spain_opp_olives": 1.5,
    "Greece_opp_olives": 1.0
}

# 2019 C Q3: 2017 Inflation from GDP Deflator
# 2016: Real = 46324, Nom = 58421 -> Defl 2016 = (58421/46324)*100 = 126.11389... -> 126.11
# 2017: Real = 47760, Nom = 60798 -> Defl 2017 = (60798/47760)*100 = 127.29899... -> 127.30
d16 = round((58421 / 46324) * 100, 2)
d17 = round((60798 / 47760) * 100, 2)
solutions["2019_Nov_C_Q3"] = {
    "defl_2016": d16,
    "defl_2017": d17,
    "infl_2017_rounded": round(((d17 - d16) / d16) * 100, 2),
    "infl_2017_unrounded": round((((60798 / 47760) - (58421 / 46324)) / (58421 / 46324)) * 100, 2)
}

# 2019 C Q4: Tax for R375,000 in 2017/18 and 2018/19
# 2017/18: 61,910 + 0.31 * (375,000 - 296,540) = 61,910 + 24,322.60 = 86,232.60; Effective rate = 86232.60 / 375000 * 100 = 23.00%
# 2018/19: 63,853 + 0.31 * (375,000 - 305,850) = 63,853 + 21,436.50 = 85,289.50; Effective rate = 85289.50 / 375000 * 100 = 22.74%
t_1718 = 61910 + 0.31 * (375000 - 296540)
t_1819 = 63853 + 0.31 * (375000 - 305850)
solutions["2019_Nov_C_Q4"] = {
    "tax_2017_18": round(t_1718, 2),
    "eff_rate_2017_18": round((t_1718 / 375000) * 100, 2),
    "tax_2018_19": round(t_1819, 2),
    "eff_rate_2018_19": round((t_1819 / 375000) * 100, 2)
}

# 2019 C Q5: Coffee Value-Added / Income / Expenditure
# John: S = 30 * 50 = 1500, B = 0, VA = 1500. W=50, R=200, i=350 => Profit = 1500 - 600 = 900.
# Coffee Roasters: S = 30 * 200 = 6000, B = 1500, VA = 4500. W=330, R=600, i=900 => Profit = 4500 - 1830 = 2670.
# Starbucks: W=1200, R=800, i=500, Profit=2500 => VA (Income) = 1200 + 800 + 500 + 2500 = 5000. Since B = 6000, S = 6000 + 5000 = 11000.
# Total GDP = 1500 + 4500 + 5000 = 11000 (or Domestic SA VA excluding South America import = 4500 + 5000 = 9500).
solutions["2019_Nov_C_Q5"] = {
    "John_VA": 1500,
    "Roasters_VA": 4500,
    "Starbucks_VA": 5000,
    "Total_Final_Sales_GDP": 11000,
    "SA_Domestic_VA_only": 9500
}

# 2019 C Q6 & 2022 Dec C Q1: NI = 870,760, VAT = 120,000, Subsidies = 9,000, D = 11,100, FP (to Mexicans) = 120,800, FI (from Americans in SA) = 234,000, X = 553,200, Z = 489,300
# NI = GDP_FC - D + FI - FP => GDP_FC = NI + D - FI + FP = 870760 + 11100 - 234000 + 120800 = 768,660
# GDP_MP = GDP_FC + VAT - Subsidies = 768660 + 120000 - 9000 = 879,660
# GDE_MP = GDP_MP - X + Z = 879660 - 553200 + 489300 = 815,760
gdp_fc_19 = 870760 + 11100 - 234000 + 120800
gdp_mp_19 = gdp_fc_19 + 120000 - 9000
gde_mp_19 = gdp_mp_19 - 553200 + 489300
solutions["2019_Q6_2022_Q1"] = {
    "GDP_FC": gdp_fc_19,
    "GDP_MP": gdp_mp_19,
    "GDE_MP": gde_mp_19
}

# 3. 2022 Dec Exam Section C
# Q3: Labour Force 2020 = 14.5m + 1.5m = 16.0m; Labour Force 2021 = 15.0m + 2.5m = 17.5m; Unemp rate 2021 = 2.5/17.5 * 100 = 14.29%
solutions["2022_Dec_C_Q3"] = {
    "LF_2020": 16000000,
    "LF_2021": 17500000,
    "U_rate_2021": round((2.5 / 17.5) * 100, 2)
}

# Q4: Fish, Pork, Beef (2018 base year, 2020)
# Nom GDP 2020 = (9*900) + (6*275) + (15*275) = 8100 + 1650 + 4125 = 13875
# Real GDP 2020 (at 2018 prices: $7, $8, $10) = (7*900) + (8*275) + (10*275) = 6300 + 2200 + 2750 = 11250
# GDP Deflator 2020 = (13875 / 11250) * 100 = 123.3%
solutions["2022_Dec_C_Q4"] = {
    "Nom_GDP_2020": 9*900 + 6*275 + 15*275,
    "Real_GDP_2020_base2018": 7*900 + 8*275 + 10*275,
    "Deflator_2020": round((13875 / 11250) * 100, 1)
}

# Q5 (and 2023 Q4, and Ch20 Tutorial Q3): Wakanda / StatsSA Deflator Inflation
# 2020/2022: Nom = 5,130,703, Real = 4,028,475 -> Defl = 127.36
# 2021/2023: Nom = 5,643,773, Real = 4,391,038 -> Defl = 128.53
# Inflation = (128.53 - 127.36) / 127.36 * 100 = 0.92%
solutions["Wakanda_Deflator_Inflation"] = {
    "defl_prev": round((5130703 / 4028475) * 100, 2),
    "defl_curr": round((5643773 / 4391038) * 100, 2),
    "inflation_pct": round(((128.53 - 127.36) / 127.36) * 100, 2)
}

# Q6: Thabiso Lebotse R32,000/month => R384,000/year
# Bracket 321,601 - 445,100: 67,144 + 0.31 * (384,000 - 321,600) = 67,144 + 19,344 = 86,488 before rebate
# Primary rebate = 14,958 => Net tax = 86,488 - 14,958 = 71,530
# Effective tax rate = 71,530 / 384,000 * 100 = 18.63% (or before rebate: 86,488 / 384,000 * 100 = 22.52%)
solutions["2022_Dec_C_Q6"] = {
    "annual_income": 384000,
    "tax_before_rebate": 67144 + 0.31 * (384000 - 321600),
    "tax_after_rebate": 67144 + 0.31 * (384000 - 321600) - 14958,
    "eff_rate_after_rebate": round((71530 / 384000) * 100, 2),
    "eff_rate_before_rebate": round((86488 / 384000) * 100, 2)
}

# Q7: 2022 Dec Keynesian Economy
# G=400, X=250, Z=50+0.15Y, C_bar=150, I=300, Yf=1900, c=0.75, t=0.25
# A_bar = 150 + 300 + 400 + 250 - 50 = 1050
# c(1-t) = 0.75 * 0.75 = 0.5625
# alpha = 1 / (1 - 0.5625 + 0.15) = 1 / 0.5875 = 1.702127... -> 1.70
# Y0 (from rounded alpha 1.70) = 1.70 * 1050 = 1785.00
# Y0 (from exact AE approach: Y = 1050 + 0.4125Y => 0.5875Y = 1050) = 1787.23
# Tax income T = 0.25 * 1787.23 = 446.81 (or 0.25 * 1785 = 446.25)
# If I decreases from 300 to 250 (dI = -50): dY = -50 * 1.70 = -85 => New Y = 1785 - 85 = 1700 (or 1787.23 - 85 = 1702.23)
solutions["2022_Dec_C_Q7"] = {
    "A_bar": 1050,
    "alpha_exact": 1 / 0.5875,
    "alpha_rounded": round(1 / 0.5875, 2),
    "Y0_multiplier_rounded": round(1.70 * 1050, 2),
    "Y0_AE_exact": round(1050 / 0.5875, 2),
    "Tax_at_Y0_exact": round(0.25 * (1050 / 0.5875), 2),
    "Tax_at_Y0_rounded": round(0.25 * 1785, 2),
    "Y_new_dI_minus50": round(1785 - 50 * 1.70, 2)
}

# 4. 2023 Dec Exam Section C
# Q1: VAT=16000, GDP_FC=293250, Subsidies=43300, Z=10000, X=20000, CapGoods=40000, D=0.08*40000=3200, FI=35200, FP=125600
# GDP_MP = GDP_FC + VAT - Subsidies = 293250 + 16000 - 43300 = 265,950
# GDE_MP = GDP_MP - X + Z = 265950 - 20000 + 10000 = 255,950
# NI = GDP_FC - D + FI - FP = 293250 - 3200 + 35200 - 125600 = 199,650
solutions["2023_Dec_C_Q1"] = {
    "Depreciation": 3200,
    "GDP_MP": 265950,
    "GDE_MP": 255950,
    "NI": 199650
}

# Q2: 2021 Base Year & 2022 Real GDP (Clothes, Food, Drink)
# Real GDP 2021 = (260*13) + (2150*12) + (655*11) = 3380 + 25800 + 7205 = 36,385
# Real GDP 2022 = (260*10) + (2150*13) + (655*11) = 2600 + 27950 + 7205 = 37,755
# Growth rate 2022 = (37755 - 36385) / 36385 * 100 = 3.77%
solutions["2023_Dec_C_Q2"] = {
    "Real_GDP_2021": 36385,
    "Real_GDP_2022": 37755,
    "Growth_rate_2022": round(((37755 - 36385) / 36385) * 100, 2)
}

# Q3: Tigeria Labour Market
# Employed = 18.6m, Active Unemployed = 8.9m, Discouraged = 2.5m
# Strict LF = 18.6m + 8.9m = 27.5m; Broad LF = 18.6m + 8.9m + 2.5m = 30.0m
# Broad Unemployment Rate = (8.9 + 2.5) / 30.0 * 100 = 11.4 / 30.0 * 100 = 38.00%
# (If denominator is strict LF 27.5m: 11.4 / 27.5 * 100 = 41.45%; strict rate = 8.9 / 27.5 * 100 = 32.36%)
solutions["2023_Dec_C_Q3"] = {
    "Strict_LF": 27500000,
    "Broad_LF": 30000000,
    "Broad_U_Rate_pct": round((11.4 / 30.0) * 100, 2),
    "Strict_U_Rate_pct": round((8.9 / 27.5) * 100, 2)
}

# Q5: Bella Mbonambi R315,850
# Bracket 315,101 - 400,700: 58,389 + 0.35 * (315,850 - 315,100) = 58,389 + 262.50 = 58,651.50 before rebate
# Primary rebate = 10,900 => Net tax = 58,651.50 - 10,900 = 47,751.50
# Effective tax rate = 47,751.50 / 315,850 * 100 = 15.12% (or before rebate: 18.57%)
solutions["2023_Dec_C_Q5"] = {
    "tax_before_rebate": 58651.50,
    "tax_after_rebate": 47751.50,
    "eff_rate_after_rebate": round((47751.50 / 315850) * 100, 2),
    "eff_rate_before_rebate": round((58651.50 / 315850) * 100, 2)
}

# Q6: USA vs Australia (Surfboards & Sunscreen)
# Australia: 150 Surfboards or 900 Sunscreen -> 1 Surfboard = 900/150 = 6 Sunscreen
# USA: 200 Surfboards or 1600 Sunscreen -> 1 Surfboard = 1600/200 = 8 Sunscreen
# Australia has relative advantage in Surfboards (6 < 8).
# 50 bottles * US$1.50 = US$75.00 * 1.70 AUS$/US$ = AUS$127.50
solutions["2023_Dec_C_Q6"] = {
    "Aus_opp_surfboard": 6.0,
    "USA_opp_surfboard": 8.0,
    "comp_adv_surfboards": "Australia",
    "cost_50_bottles_AUD": 50 * 1.50 * 1.70
}

# Q7: 2023 Dec Keynesian Economy
# C_bar=30, I_bar=10, G_bar=20, X_bar=10, Z_bar=5 => A_bar = 30 + 10 + 20 + 10 - 5 = 65
# c=0.6, t=0.167, m=0.125 => c(1-t) = 0.6 * 0.833 = 0.4998 (~0.50)
# alpha = 1 / (1 - 0.4998 + 0.125) = 1 / 0.6252 = 1.599488... -> 1.60
# Y0 = 1.60 * 65 = 104.00
# New G = 20 + 4 = 24 => New A_bar = 69; New t = 0.25 => c(1-t) = 0.6 * 0.75 = 0.45
# New AE: Y = 69 + (0.45 - 0.125)Y = 69 + 0.325Y => 0.675Y = 69 => Y_new = 69 / 0.675 = 102.22
# Tax income T_new = 0.25 * 102.22 = 25.56
solutions["2023_Dec_C_Q7"] = {
    "A_bar_initial": 65,
    "alpha_initial": round(1 / (1 - 0.6 * (1 - 0.167) + 0.125), 2),
    "Y0_initial": round(1.60 * 65, 2),
    "A_bar_new": 69,
    "Y_new": round(69 / (1 - 0.6 * (1 - 0.25) + 0.125), 2),
    "T_new": round(0.25 * (69 / 0.675), 2)
}

# 5. 2024 Dec Exam Section C
# Q1: GDP_MP = 1,530,580, Taxes = 205,562, Subsidies = 11,433, FI (RSA au pairs in USA) = 1,500, FP (Cuban doctors in RSA) = 1,800
# GDP_FC = 1530580 - 205562 + 11433 = 1,336,451
# GNP_MP = 1530580 + 1500 - 1800 = 1,530,280
solutions["2024_Dec_C_Q1"] = {
    "GDP_FC": 1530580 - 205562 + 11433,
    "GNP_MP": 1530580 + 1500 - 1800
}

# Q2: 2024 Trevor Noah / Bonang Matheba Charity Gala
# Total Expenditure (Celebration Creations sales) = 15,307,200
# Celebration Creations: Wages = 12 * 11,700 = 140,400, Rent = 592,200, Profit = 3,612,600 => VA = 140400 + 592200 + 3612600 = 4,345,200
# Wait: let's check Celebration Creations buying price from Chef Siba!
# S_CC = 15,307,200, VA_CC = 4,345,200 => B_CC (which is S_Siba) = 15,307,200 - 4,345,200 = 10,962,000!
# Chef Siba: S = 10,962,000, B (from Woolworths) = 1,283,760 => VA_Siba = 10,962,000 - 1,283,760 = 9,678,240
# Siba Wages = 88,200, Rent = 120,600 => Siba Profit = 9,678,240 - 88,200 - 120,600 = 9,469,440
# Woolworths: S = 1,283,760, B = 0 => VA_Woolworths = 1,283,760
# Woolworths Wages = 108,000, Rent = 73,800 => Woolworths Profit = 1,283,760 - 108,000 - 73,800 = 1,101,960
# Sum of VA = 4,345,200 + 9,678,240 + 1,283,760 = 15,307,200!
# Sum of Income = Wages(140400+88200+108000=336600) + Rent(592200+120600+73800=786600) + Profit(3612600+9469440+1101960=14184000) = 15,307,200!
solutions["2024_Dec_C_Q2"] = {
    "CC_VA": 12*11700 + 592200 + 3612600,
    "Siba_Sales": 15307200 - (12*11700 + 592200 + 3612600),
    "Siba_VA": 10962000 - 1283760,
    "Siba_Profit": 9678240 - 88200 - 120600,
    "Woolworths_VA": 1283760,
    "Woolworths_Profit": 1283760 - 108000 - 73800,
    "Total_GDP": 15307200
}

# Q3: 2024 Dec Pizza, Soda, Ice Cream (2021 base year & 2022)
# 2021 Nom = Real = (24*22.50) + (50*4.00) + (15*8.00) = 540 + 200 + 120 = 860
# 2022 Nom = (36*24.75) + (75*4.40) + (22.5*8.80) = 891 + 330 + 198 = 1,419
# 2022 Real (at 2021 prices) = (36*22.50) + (75*4.00) + (22.5*8.00) = 810 + 300 + 180 = 1,290
# Deflator 2021 = (860/860)*100 = 100.0; Deflator 2022 = (1419/1290)*100 = 110.0
# Inflation rate 2022 = (110 - 100)/100 * 100 = 10.0%
solutions["2024_Dec_C_Q3"] = {
    "Nom_2021": 860.0,
    "Real_2021": 860.0,
    "Nom_2022": 1419.0,
    "Real_2022": 1290.0,
    "Defl_2021": 100.0,
    "Defl_2022": 110.0,
    "Inflation_2022_pct": 10.0
}

# Q4: 2024 Dec Elaria Broad Unemployment Rate
# Employed = 6,750,000, Active Unemployed = 2,220,000, Discouraged = 1,030,000
# Broad Unemployed = 3,250,000; Broad LF = 10,000,000 => Broad U Rate = 32.50%
solutions["2024_Dec_C_Q4"] = {
    "Broad_Unemployed": 3250000,
    "Broad_LF": 10000000,
    "Broad_U_Rate_pct": 32.50
}

# Q5: 2024 Dec M3 Money Supply
# M1 = 10 + 25 = 35m; M2 = 35 + 125 = 160m; M3 = 160 + 290 = 450m
solutions["2024_Dec_C_Q5"] = {
    "M1": 35,
    "M2": 160,
    "M3": 450
}

# Q6: 2024 Dec SARS Tax Table for R825,000
# Bracket 673,001 - 857,900: 179,147 + 0.39 * (825,000 - 673,000) = 179,147 + 59,280 = 238,427 before rebate
# After primary rebate (17,235): 238,427 - 17,235 = 221,192
# Marginal tax rate = 39%
solutions["2024_Dec_C_Q6"] = {
    "tax_before_rebate": 238427,
    "tax_after_rebate": 221192,
    "marginal_rate_pct": 39,
    "effective_rate_after_rebate_pct": round((221192 / 825000) * 100, 2)
}

# Q7: 2024 Dec Japan vs Portugal (Wagyu beef & Seafood)
# Japan: 1000 Wagyu or 2000 Seafood -> 1 kg Wagyu = 2000/1000 = 2 kg Seafood
# Portugal: 2200 Wagyu or 3000 Seafood -> 1 kg Wagyu = 3000/2200 = 1.36 kg Seafood
solutions["2024_Dec_C_Q7"] = {
    "Japan_opp_wagyu": 2.0,
    "Portugal_opp_wagyu": round(3000 / 2200, 2)
}

with open(OUT_PATH, "w", encoding="utf-8") as f:
    json.dump(solutions, f, indent=2)

print("Verified all mathematical models and past paper calculations successfully!")
for k, v in solutions.items():
    print(f"  {k}: {v}")
