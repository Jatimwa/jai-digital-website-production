# JAi Digital · v4 Handover & Context
**Version:** 4.0.0
**Last Sync:** May 6, 2026
**Workbench:** `jai-digital-v4/`

## 1. The Mandate (Why this exists)
v3.1 suffered from context collapse and legacy contamination. v4 is a **Hard Reboot**.
- **Rule 1:** Zero legacy crossover. If it's not in Phase 1-5 of the v4 Roadmap, it doesn't exist.
- **Rule 2:** No hardcoding. Everything must derive from CSS variables in `globals.css`.
- **Rule 3:** Owen-Primary. The target is the SME MD/Owner. Posture: FT-Level Technical Authority.
- [x] **Rule 4 (Visual Sign-Off):** Nothing is "Locked" until it is rendered on the Design System page and James gives explicit visual sign-off. I am a technical advisor, but you have the final visual veto. Reasoning: Decisions must be seen in-situ, not just defined in code.
- [x] **Rule 5 (Empirical Verification):** Never claim a fix is resolved until it has been double-checked against the root cause. If I cannot verify it visually (since I am an AI), I must explain the technical logic of the fix and the specific failure mode it addresses before asking for sign-off.

## 2. Our Active Role
We are the **Lead UX/UI Designer**. We do not just build; we advise. We prioritize "High-Fidelity Authority" over user-driven "safe" calls if they dilute the brand's premium position.

## 3. Current System State (Locked)

### A. Typography (Antigravity v4 - LOCKED)
- **Display:** Unbounded (200/300 weights). Extremely thin for authority.
- **Editorial:** Newsreader (300 Italic). Used for accents and "The Statement" segments.
- **Tension Rule:** Hybrid A signed off. Main header text is Unbounded; Signal/Green accents are Newsreader Italic.
- **Body:** Geist (400 weight). 18px floor.

### B. Colour Registers (Technical Editorial - LOCKED)
We do not use random blacks. We use two specific atmospheric registers:
- **Sage (Warm/Philosophy):** `#141411` background. Used for narrative/about/intro.
- **Engineer (Cool/Technical):** `#0c0d0f` background. Used for case studies/data/specs.
- **The Signal Core:** `#c9d900` (Lime). Reserved for status, numerals, and primary CTAs.

### C. Layout & Rhythm (LOCKED)
- **Container:** 1600px max width.
- **Prose Lane:** 1100px readable floor.
- **Spacing:** Fibonacci Ladder (`--space-1` to `--space-9`).

## 4. Roadmap Progress
1. **Phase 1 (Foundations):** COMPLETE. Foundations locked and signed off.
2. **Phase 2 (Atoms):** COMPLETE. Rule, Input, Card, Button, Badge verified and locked.
3. **Phase 3 (Primitives):** IN-PROGRESS. Wayfinding (Header/Footer) implemented.

## 5. Directory Structure
```
jai-digital-v4/
├── ROADMAP_V4.md             <-- The Systematic Plan
├── HANDOVER_V4.md            <-- This File (Context Buffer)
├── state.json                <-- Machine-readable progress
└── src/                      <-- Current build surface
```

## 6. How to Resume
1. Open `ROADMAP_V4.md` to see the next task.
2. Ensure `globals.css` remains the single source of truth for color and type.
3. NEVER peek at the legacy `jai-digital-website-production` folder for code; only for visual layout reference.
