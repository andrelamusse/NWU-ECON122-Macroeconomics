---
description: Guardrails for interactive academic assessment engines, beginner-friendly explanations, and minimalist admin telemetry monitors.
trigger: always_on
---

# Academic Assessment Workbench & Telemetry Guardrails

## 1. UX Clarity & Beginner-Friendly Explanations
- Keep student-facing interfaces clean, spacious, and free of textbook author names, past-paper codes, campus codes, or administrative jargon.
- Include plain-English variable decoders and step-by-step intuition breakdowns so beginners understand what every symbol means and why each formula works.
- Maintain 100% isolation between `index.html` and `admin.html` (zero links or references to `admin.html` in student files).

## 2. Interactive Exam & Self-Marking Engine Invariants
- **Pagination & Grouping**: Render standalone questions one per page; group all linked follow-up or multi-part questions sharing a table, diagram, or scenario onto the same single page.
- **Page Flow**: Answer question(s) → Click "Check Answer" → Reveal official Memo + beginner-friendly explanation + grading controls → Click "Next Question →" → Final Score Summary at the end.
- **MCQ Shuffling**: Always shuffle MCQ options (Fisher-Yates) and compute the displayed correct letter (`A`/`B`/`C`/`D`) dynamically from the shuffled array so the memo always matches the current option order.
- **Theory & Definitions**: Grade via case-insensitive keyword/stem matching against core memo concepts, display matched vs. missed keywords, and provide a self-mark toggle for equivalent phrasing.
- **Calculations**: Provide an interactive Math & Symbol Toolbar above calculation inputs and render interactive checkboxes for each mark allocation step in the official memorandum.

## 3. Admin Telemetry Minimalism
- Never load student telemetry heartbeat scripts inside `admin.html`.
- Display only Device IP, Total Active Time (incremented only when clicked within 60s; paused when idle >= 60s), Live Status, Last Click, and Refresh/CSV/Reset controls.
