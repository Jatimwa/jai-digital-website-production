# Design System: JAi Digital v4
**Project Status:** Foundations Locked
**Posture:** FT-Level Technical Authority

## 1. Visual Theme & Atmosphere
The JAi Digital v4 aesthetic is **Systematic, Authoritative, and Extreme**. It is built on a philosophy of "Zero Rot," prioritizing structural integrity and technical precision over decorative trends.

*   **Mood:** Engineered, Utilitarian, Sophisticated.
*   **Aesthetic:** High-contrast technical noir. Large fluid typography paired with thin hairlines and geometric grids.
*   **Density:** Airy with high-impact "Chapter" transitions.

## 2. Color Palette & Roles
The palette is a 9-token technical ladder anchored by two registers: **Sage** (Warm/Philosophy) and **Engineer** (Cool/Technical).

### The Signal
*   **Signal Green (#c9d900):** The primary brand core. Used for critical actions, accents, and high-visibility status.
*   **Signal Hover (#d4e533):** Interactive state for primary elements.
*   **Signal Deep (#a8b400):** Active/Pressed states or secondary branding.

### Surface Registers
*   **Sage Base (#141411):** The primary site-wide canvas. Warm, narrative-focused.
*   **Engineer Base (#0c0d0f):** Deeper technical black. Used for data-heavy or infrastructure sections.
*   **Surface Elevation 1 (#1c1c18):** Standard card/container background.
*   **Surface Elevation 2 (#252520):** Hover state for components.
*   **Surface Elevation 3 (#2f2f29):** High-visibility component lift.

### Typography (The Ink)
*   **High-Contrast Ink (#f5f5f5):** Primary headings and lede text.
*   **Standard Prose (#d4d4d4):** Body copy and general content.
*   **Muted Metadata (#a3a3a3):** Labels, secondary info, and tertiary text.
*   **Furniture Ink (#525252):** Grid lines, hairlines, and decorative UI elements.

## 3. Typography Rules
Typography is fluid and employs extreme scale contrast.

*   **Display (Unbounded):** Thin weights (200/300). Fluid scaling from 48px to 104px for H1. Used for authoritative statements.
*   **Editorial (Newsreader):** Light italic (300). Used for "Pauses" (accents, standfirsts). Provides human sophisticated contrast to the engineered sans.
*   **Infrastructure (Geist):** Standard geometric sans (400). Used for all functional body copy and interface elements.
*   **Technical (Geist Mono):** Monospaced (Bold). Used for labels, eyebrows, and "Metadata" tracking.

## 4. Component Stylings
*   **Buttons:**
    *   **Shape:** Pill-shaped rounded corners (`--radius-card`: 1.5rem).
    *   **Interaction:** Subtle scale lift (`1.02` hover) and arrow nudge (`2px`).
    *   **Tension Variant:** Underline-reveal with editorial serif font.
*   **Cards/Containers:**
    *   **Shape:** Subtly rounded generous corners (`24px`).
    *   **Elevation:** Flat design. Depth is communicated via color ladders (Sage 0 → Sage 1), not shadows.
*   **Inputs:**
    *   **Style:** Minimalist under-line border. No boxes. High-visibility brand focus state.

## 5. Layout Principles
*   **Rhythm:** Based on a Fibonacci spacing ladder (4px, 8px, 12px, 16px, 24px, 40px, 64px, 104px, 168px).
*   **Grid:** Explicit background grid (64px) used as a brand texture to reinforce the "engineered" concept.
*   **Responsive:** Zero-breakpoint logic. The system relies on fluid `clamp()` and container-relative units where possible.
