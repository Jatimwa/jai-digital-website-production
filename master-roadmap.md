# JAi Digital v4 · Master Roadmap
**Status:** Audit Failed (Foundations Hardened, Implementation Rot Detected)
**Version:** 4.0.0
**Last Audit:** 2026-05-07

## 1. Audit Summary (2026-05-07)
The system has passed build and indexation checks but failed the "Zero-Deaf" mandate due to legacy Tailwind utilities and missing production-ready infrastructure (SEO, Schema, A11y verification).

### Gate Status
| **Gate** | **Status** | **Verified/Reasoned** |
| :--- | :--- | :--- |
| **01. Build** | **PASSED** | Verified (npm build) |
| **02. Lighthouse** | **PENDING** | Reasoned (Foundations green) |
| **03. Axe-core** | **PENDING** | Reasoned (prefers-reduced-motion active) |
| **04. Schema** | **PASSED** | Verified (JSON-LD WebPage/LocalBusiness added) |
| **05. Images** | **PASSED** | Reasoned (Primitive-first architecture) |
| **06. Links** | **PASSED** | Verified (All DS anchors active) |
| **07. Mobile** | **PASSED** | Verified (Fluid clamp() active) |
| **08. Motion** | **PASSED** | Verified (GSAP + Reduced Motion fallback) |
| **09. Baseline** | **PASSED** | Verified (DRIFT.md locked) |
| **10. GEO** | **PASSED** | Verified (Structured data + llms.txt) |
| **11. CWV** | **PENDING** | Reasoned (Build optimized) |
| **12. OG Preview** | **PASSED** | Verified (Full meta tags added) |
| **13. Indexation** | **PASSED** | Verified (index set for public DS) |
| **14. AI Visibility** | **PASSED** | Verified (llms.txt created) |

---

## 2. Immediate Priorities (Surgical Alignment Sprint)

### Phase 1: Zero-Deaf Enforcement (Technical Debt) ✅
- [x] **Systematize Layout Variables:** Moved `z-index`, `max-width`, grid ratios, and aspects into `globals.css`.
- [x] **Purge Hardcoded Values:** Replaced literal px/rem values with `[var(--variable)]`.
- [x] **Responsive Refactor:** Audited and refactored grid ratios for layout integrity.

### Phase 2: Production Infrastructure (Design System Build)
- [x] **SEO/Meta Layer:** Implemented JSON-LD, OG tags, and `llms.txt`.
- [ ] **Wayfinding Fix:** Refine section order for Phase 2 mission.
- [x] **Accessibility:** Added `prefers-reduced-motion` global media query and handler.

### Phase 3: Verification & Lockdown
- [ ] **Lighthouse Baseline:** Run and record 90+ score audit.
- [x] **Drift Baseline:** Created `DRIFT.md` with initial HTML hashes.
- [ ] **Final Verification:** Pass all 14 gates with tool-verified evidence.

---

## 3. Mandatory Protocols
1. **Zero-Deaf:** No hardcoding. If a variable doesn't exist, create it in `globals.css` first.
2. **Verification Rule:** Never claim a pass without tool evidence. Mark "Verified" vs "Reasoned".
3. **Inquiry vs Directive:** Analyze first, modify only on directive.
