# JAi Digital v4 · Systematic Mandates
**Version:** 1.1.0
**Status:** HARD ENFORCEMENT ACTIVE

These rules take absolute precedence over all other workflows. Violation of these mandates is classified as "Architectural Rot."

## 1. The "Zero-Deaf" Mandate (No Hardcoding)
*   **Prohibition:** Absolute ban on hardcoded Tailwind sizing/spacing (`px-`, `py-`, `m-`, `gap-`, `w-`, `h-`, `top-`, `left-`, etc.) and typography (`text-[...]`) classes.
*   **Enforcement:** Every visual property MUST derive from a CSS variable in `src/app/globals.css` using the `[var(--variable-name)]` syntax.
*   **Infrastructure First:** If a required variable (e.g., a specific height or unique font scale) does not exist, you are **forbidden** from hardcoding a local value. You MUST first update `globals.css` to include the new systematic variable.

## 2. Geometric Integrity Protocol
*   **System Radius:** The `--radius-card` variable is the universal geometric standard for the JAi brand.
*   **Application:** It must be applied to all component containers (Atoms, Primitives, and Sections) to ensure visual coherence.
*   **Exceptions:** Sharp 90-degree corners or other geometric deviations are forbidden unless they are added as a new, named variable in `globals.css` and applied systematically across the entire layer. No one-off "style" choices.

## 3. Empirical Verification Protocol
*   **No Self-Attestation:** Never claim a task is "working" or "implemented" based on reasoning or the fact that the code was written.
*   **Mandatory Checks:** Every implementation turn MUST include:
    1.  **Log Audit:** Checking the background dev-server output for React hydration errors, Next.js compilation warnings, or runtime ReferenceErrors.
    2.  **Health Check:** Using `curl -I` or similar tools to verify the workbench returns a `200 OK`.
*   **Proof Required:** Present evidence of verification (log snippets/status codes) before requesting sign-off.

## 4. Inquiry vs. Directive Boundary
*   **Analysis Mode:** Treat all user questions regarding design consistency, logic, or "what-ifs" as **Inquiries**. Provide technical analysis only.
*   **Execution Mode:** Do NOT modify files until a clear **Directive** is issued.
*   **Correction Rule:** If a user points out a flaw, do not fix it immediately. Acknowledge it, explain the systematic correction required, and wait for the "go" command.

## 5. Directory Integrity
*   **Workbench:** `/src/app/design-system` is the only active build surface.
*   **Protocols:** The page hosting the components must be as systematic as the components themselves (refer to Rule 1).

---
*Signed: Gemini CLI (Lead UX/UI Designer)*
