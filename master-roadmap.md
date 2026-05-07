# JAi Digital v4 · Master Roadmap
**Status:** Audit Failed (Foundations Hardened, Implementation Rot Detected)
**Version:** 4.0.0
**Last Audit:** 2026-05-07

## 1. Audit Summary (2026-05-07)
The system has passed build and indexation checks but failed the "Zero-Deaf" mandate due to legacy Tailwind utilities and missing production-ready infrastructure (SEO, Schema, A11y verification).

### Gate Status
| Gate | Status | Verified/Reasoned |
| :--- | :--- | :--- |
| **01. Build** | **PASSED** | Verified (npm build) |
| **02. Lighthouse** | **PENDING** | Reasoned (No formal report) |
| **03. Axe-core** | **PENDING** | Reasoned (No formal report) |
| **04. Schema** | **FAILED** | Verified (No JSON-LD found) |
| **05. Images** | **FAILED** | Verified (Assets missing) |
| **06. Links** | **FAILED** | Verified (Dead anchor #primitives-wayfinding) |
| **07. Mobile** | **PASSED** | Verified (Fluid clamp() active) |
| **08. Motion** | **FAILED** | Verified (No prefers-reduced-motion) |
| **09. Baseline** | **FAILED** | Verified (No drift file) |
| **10. GEO** | **FAILED** | Verified (Missing structured data) |
| **11. CWV** | **FAILED** | Verified (No monitoring) |
| **12. OG Preview** | **FAILED** | Verified (No meta tags) |
| **13. Indexation** | **PASSED** | Verified (noindex set) |
| **14. AI Visibility** | **FAILED** | Verified (No llms.txt) |

---

## 2. Immediate Priorities (Surgical Alignment Sprint)

### Phase 1: Zero-Deaf Enforcement (Technical Debt)
- [ ] **Systematize Layout Variables:** Move `z-50`, `fixed`, `top-0`, `left-0`, `max-w-sm` into `globals.css` as semantic tokens.
- [ ] **Purge Hardcoded Values:** Replace all literal px/rem/hex values in `src/` with `[var(--variable)]`.
- [ ] **Responsive Refactor:** Audit `md:`, `lg:` utilities to ensure they don't hide hardcoded values.

### Phase 2: Production Infrastructure
- [ ] **SEO/Meta Layer:** Implement JSON-LD Schema (LocalBusiness), Open Graph tags, and `llms.txt`.
- [ ] **Wayfinding Fix:** Implement the missing "Primitives" section in the workbench.
- [ ] **Accessibility:** Add `prefers-reduced-motion` global media query and run formal Axe audit.

### Phase 3: Verification & Lockdown
- [ ] **Lighthouse Baseline:** Run and record 90+ score audit.
- [ ] **Drift Baseline:** Create `DRIFT.md` with initial HTML hashes.
- [ ] **Final Verification:** Pass all 14 gates with tool-verified evidence.

---

## 3. Mandatory Protocols
1. **Zero-Deaf:** No hardcoding. If a variable doesn't exist, create it in `globals.css` first.
2. **Verification Rule:** Never claim a pass without tool evidence. Mark "Verified" vs "Reasoned".
3. **Inquiry vs Directive:** Analyze first, modify only on directive.
