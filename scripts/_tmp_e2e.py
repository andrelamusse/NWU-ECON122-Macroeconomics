import json
import os
import sys
import time
from playwright.sync_api import sync_playwright

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8")

ROOT = r"c:\NWU\SM2\ECON122"
URL = "file:///" + os.path.join(ROOT, "index.html").replace(os.sep, "/")
ADMIN_URL = "file:///" + os.path.join(ROOT, "admin.html").replace(os.sep, "/")
fails = []
posts = []


def check(cond, msg):
    print(("PASS " if cond else "FAIL ") + msg)
    if not cond:
        fails.append(msg)


with sync_playwright() as p:
    try:
        browser = p.chromium.launch(channel="msedge", headless=True)
    except Exception:
        browser = p.chromium.launch(headless=True)
    page = browser.new_page(viewport={"width": 1280, "height": 900})
    errors = []
    page.on("pageerror", lambda e: errors.append(str(e)))

    def on_route(route):
        req = route.request
        if req.method == "POST":
            try:
                posts.append(json.loads(req.post_data or "{}"))
            except Exception:
                posts.append({})
        route.fulfill(status=200, body="{}")

    page.route("**/ntfy.sh/**", on_route)
    page.route("**/api.ipify.org/**", lambda r: r.fulfill(status=200, content_type="application/json", body='{"ip":"203.0.113.7"}'))
    page.route("**/api64.ipify.org/**", lambda r: r.fulfill(status=200, content_type="application/json", body='{"ip":"203.0.113.7"}'))
    page.goto(URL)
    page.wait_for_timeout(2000)

    check(page.evaluate("typeof window.MiniSearch === 'function'"), "MiniSearch global loaded")
    check(page.evaluate("!!(window.FloatingUIDOM && window.FloatingUIDOM.computePosition)"), "FloatingUIDOM loaded")

    # Module 1: Vault decoder & per-formula variable decoder pills
    check(page.locator("#chapter-stage-container .variable-decoder-grid .variable-decoder-card").count() >= 4, "Vault chapter Plain-English Variable Decoder rendered")
    check(page.locator("#chapter-stage-container .formula-card .formula-var-decoder").count() >= 1, "Vault per-formula Plain-English Variable Decoder pills rendered")

    tel = page.evaluate("JSON.parse(localStorage.getItem('econ122_telemetry_v1'))")
    secs0 = tel["activeSeconds"]
    check(tel["isTimerPaused"] is True, "Telemetry starts paused on load without click")
    page.wait_for_timeout(1800)
    tel = page.evaluate("JSON.parse(localStorage.getItem('econ122_telemetry_v1'))")
    check(tel["activeSeconds"] == secs0, f"No active seconds accrue before first click ({secs0} -> {tel['activeSeconds']})")

    # Module 2: SVG Lab decoder & interactive SVG handle drag
    page.click("#nav-lab")
    page.wait_for_timeout(400)
    check(page.locator("#lab-canvas-panel .model-decoder-card").count() == 1, "SVG Lab Plain-English Variable Decoder rendered")
    drag_handle = page.locator("#lab-canvas-panel .svg-drag-handle").first
    check(drag_handle.count() == 1, "SVG Lab interactive drag handle rendered")
    hb = drag_handle.bounding_box()
    if hb:
        page.mouse.move(hb["x"] + hb["width"] / 2, hb["y"] + hb["height"] / 2)
        page.mouse.down()
        page.mouse.move(hb["x"] + hb["width"] / 2, hb["y"] - 25)
        page.mouse.up()
        page.wait_for_timeout(200)

    # Module 3: Quantitative Solvers decoder & zero-input safety
    page.click("#nav-solvers")
    page.wait_for_timeout(400)
    check(page.locator("#solver-stage-container .model-decoder-card").count() == 1, "Solver Plain-English Variable Decoder rendered")
    page.fill("#ks-t", "0")
    page.fill("#ks-m", "0")
    page.wait_for_timeout(200)
    check("5.00" in (page.locator("#ks-output").text_content() or ""), "Solver zero-input t=0, m=0 yields multiplier 5.00 (no || fallback bug)")

    # Module 6: Cheat Sheet decoder & per-formula variable decoder pills
    page.click("#nav-cheatsheet")
    page.wait_for_timeout(400)
    check(page.locator("#cheatsheet-stage-container .beginner-decoder-panel").count() == 10, "Cheat Sheet renders Plain-English Variable Decoder for all 10 chapters")
    check(page.locator("#cheatsheet-stage-container .formula-var-decoder").count() >= 25, "Cheat Sheet renders per-formula Plain-English Variable Decoder pills")

    # Module 7: Exam Scope decoder, scope_progress_${deviceId} key, and legacy migration
    page.click("#nav-scope")
    page.wait_for_timeout(400)
    check(page.locator("#scope-stage-container .scope-item-guide .formula-var-decoder").count() == 46, "Exam Scope renders Plain-English Variable Decoder on all 46 items")
    dev_id = tel["deviceId"]
    page.click("#scope-chk-calc_1_1")
    page.wait_for_timeout(200)
    scope_saved = page.evaluate(f"JSON.parse(localStorage.getItem('scope_progress_{dev_id}'))")
    check(scope_saved and scope_saved["checked"].get("calc_1_1") is True, f"Exam Scope saves under scope_progress_{dev_id}")
    # Test legacy migration in real browser
    page.evaluate(f"""() => {{
      localStorage.removeItem('scope_progress_{dev_id}');
      localStorage.setItem('econ122_scope_progress_{dev_id}', JSON.stringify({{
        deviceId: '{dev_id}',
        checked: {{ calc_1_2: true, theo_1_1: true }},
        levels: {{ calc_1_2: 'well', theo_1_1: 'well' }},
        priorities: {{ calc_1: 'Migrated in browser', calc_2: '', calc_3: '', theo_1: '', theo_2: '', theo_3: '' }}
      }}));
      window.ECON122_ENGINE.ScopeEngine.loadScopeState();
    }}""")
    migrated = page.evaluate(f"JSON.parse(localStorage.getItem('scope_progress_{dev_id}'))")
    check(migrated and migrated["checked"].get("calc_1_2") is True and migrated["priorities"]["calc_1"] == "Migrated in browser", "Browser legacy migration from econ122_scope_progress_ to scope_progress_ succeeded")

    # Module 8: Extreme Exam workbench, Section C
    page.click("#nav-extreme")
    page.wait_for_timeout(500)
    tel = page.evaluate("JSON.parse(localStorage.getItem('econ122_telemetry_v1'))")
    check(tel["status"] == "Active", "Click resumes telemetry (status Active)")
    page.wait_for_timeout(2500)
    tel2 = page.evaluate("JSON.parse(localStorage.getItem('econ122_telemetry_v1'))")
    check(1 <= tel2["activeSeconds"] - tel["activeSeconds"] <= 4, f"Active time ticks ~1/s after click (+{tel2['activeSeconds'] - tel['activeSeconds']})")

    page.click("[data-extreme-sec='C']")
    page.wait_for_timeout(400)
    check(page.locator("#extreme-active-page .formula-var-decoder").count() >= 1, "Section C calculation part renders Plain-English Variable Decoder")
    ta = page.locator("#extreme-active-page textarea[data-text-part]").first
    ta_id = ta.get_attribute("id")
    ta.click()
    ta.fill("GDE = C + I + G")
    page.wait_for_timeout(300)
    pv = page.locator(f"[data-preview-for='{ta_id}']")
    check(pv.is_visible(), "Live preview visible after typing")
    check(pv.locator(".katex").count() >= 1, "Live preview rendered with KaTeX")

    # caret insertion: put caret after 'GDE', insert ×
    ta.evaluate("el => { el.focus(); el.setSelectionRange(3, 3); }")
    btn = page.locator(f"[data-target-input='{ta_id}'][data-insert-symbol=' × ']").first
    btn.click()
    val = ta.input_value()
    check(val.startswith("GDE × "), f"Symbol inserted at caret: {val!r}")
    # inequality escaping survives re-render
    ta.fill("MSC > MPC & GNI < GDP")
    btn_hover = page.locator(f"[data-target-input='{ta_id}'][data-insert-symbol='Δ']").first
    btn_hover.hover()
    page.wait_for_timeout(350)
    tip = page.locator("#fx-tooltip")
    check(tip.is_visible(), "Tooltip visible on toolbar hover")
    check("change in" in (tip.text_content() or ""), "Tooltip shows plain-English decoder for Δ")
    tb = tip.bounding_box()
    bb = btn_hover.bounding_box()
    check(tb is not None and bb is not None and tb["y"] + tb["height"] <= bb["y"] + 1, "Tooltip anchored above the button")
    page.mouse.move(5, 5)
    page.wait_for_timeout(200)
    check(not tip.is_visible(), "Tooltip hides on pointer leave")

    page.click("#btn-extreme-check")
    page.wait_for_timeout(500)
    check(page.locator("#extreme-active-page .extreme-memo-box").count() >= 1, "Memo revealed after Check Answer")
    check(page.locator("#extreme-active-page textarea[data-text-part]").first.input_value() == "MSC > MPC & GNI < GDP", "Inequality text intact after re-render")
    check(page.locator("#extreme-active-page input[type=checkbox]").count() >= 1, "Rubric checkboxes rendered")

    # Section B theory pills
    page.click("[data-extreme-sec='B']")
    page.wait_for_timeout(400)
    tta = page.locator("#extreme-active-page textarea[data-text-part]").first
    tta.fill("Economic growth, full employment and price stabilty")
    page.click("#btn-extreme-check")
    page.wait_for_timeout(500)
    pills = page.locator("#extreme-active-page .kw-pill[data-tip]")
    check(pills.count() >= 1, f"Keyword pills rendered with tooltips ({pills.count()})")
    check(page.locator("#extreme-active-page [data-theory-full-toggle]").count() >= 1, "Self-mark override checkbox present")
    check(page.locator("#extreme-active-page .extreme-memo-box .formula-var-decoder").count() >= 1, "Section B memo renders Plain-English Variable Decoder")

    # Section A grouped page & Final Summary
    page.evaluate("window.ECON122_ENGINE.ExtremeExamEngine.jumpToPageId('A_44_45')")
    page.wait_for_timeout(300)
    check(page.locator("#extreme-active-page .extreme-part-block").count() == 2, "Grouped page A_44_45 renders both linked questions on a single page")
    page.click("#btn-extreme-view-summary")
    page.wait_for_timeout(300)
    check(page.locator("#extreme-summary-view").count() == 1, "Final Score Summary view rendered")
    page.click("#btn-extreme-summary-retry")
    page.wait_for_timeout(300)
    check("0 / 500" in (page.locator("#extreme-live-score").text_content() or ""), "Retry Exam resets live score to 0 / 500")

    # Theme toggle & Mobile 375px layout check
    page.click("#btn-theme-toggle")
    page.wait_for_timeout(200)
    check(page.evaluate("document.documentElement.getAttribute('data-theme')") == "light", "Theme toggles to light")
    page.click("#btn-theme-toggle")
    page.wait_for_timeout(200)
    page.set_viewport_size({"width": 375, "height": 812})
    page.wait_for_timeout(300)
    overflow = page.evaluate("document.documentElement.scrollWidth > document.documentElement.clientWidth + 2")
    check(not overflow, "Mobile 375px viewport has no horizontal overflow")
    page.set_viewport_size({"width": 1280, "height": 900})

    # Blur pauses immediately
    page.evaluate("window.dispatchEvent(new Event('blur'))")
    page.wait_for_timeout(300)
    tel = page.evaluate("JSON.parse(localStorage.getItem('econ122_telemetry_v1'))")
    check(tel["isTimerPaused"] is True, "Blur pauses the timer")
    s1 = tel["activeSeconds"]
    page.evaluate("window.dispatchEvent(new Event('focus'))")
    page.wait_for_timeout(1800)
    tel = page.evaluate("JSON.parse(localStorage.getItem('econ122_telemetry_v1'))")
    check(tel["activeSeconds"] == s1, "Focus alone does not resume; only a click does")

    check(len(posts) >= 1 and all(p.get("deviceIp") == "203.0.113.7" for p in posts[1:]), f"Heartbeats posted with resolved IP ({len(posts)} posts)")

    # Verify admin.html isolation & minimal telemetry view
    posts_before_admin = len(posts)
    page.goto(ADMIN_URL)
    page.wait_for_timeout(1200)
    check(len(posts) == posts_before_admin, "admin.html sends zero telemetry POST heartbeats")
    check(page.locator("#admin-table-body tr").count() >= 1, "admin.html renders tracked device row")
    check("203.0.113.7" in (page.locator("#admin-table-body").text_content() or ""), "admin.html displays Device IP")

    check(not errors, f"No page errors: {errors}")
    browser.close()

print("E2E_FAILS:", len(fails))
sys.exit(1 if fails else 0)
