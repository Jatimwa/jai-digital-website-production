import type { Metadata } from "next";
import { Container, Eyebrow, Button, Badge, Rule, Input, Card } from "@/components/atoms";
import { SiteHeader, Footer, SectionHead, SpecRow } from "@/components/system";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Design System · JAi Digital v4",
  description: "The technical workbench for JAi Digital v4. Systematic, zero-rot engineering.",
  robots: { index: false, follow: false },
};

const SECTIONS = [
  { id: "foundation-typography", label: "Typography" },
  { id: "study-headings", label: "Heading Study" },
  { id: "atoms-functional", label: "Atoms (Functional)" },
  { id: "primitives-wayfinding", label: "Primitives (Wayfinding)" },
  { id: "foundation-colour", label: "Colour & Registers" },
  { id: "foundation-spacing", label: "Spacing & Rhythm" },
];

export default function DesignSystemPage() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="bg-[var(--color-surface-sage)] min-h-screen">
        {/* ─────────────────────────────────────────────────────────────
            HERO · THE v4 BENCH
            ───────────────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden border-b border-[var(--color-subtle)]">
          <div className="absolute inset-0 bg-grid pointer-events-none opacity-20" aria-hidden />
          <Container className="relative pt-[var(--space-9)] pb-[var(--space-9)]">
            <Eyebrow>JAi Digital · Workbench · v4.0</Eyebrow>
            <h1 className="mt-[var(--space-5)] font-display font-extralight text-[length:var(--type-fluid-h1)] leading-[1.0] tracking-[-0.04em] text-balance max-w-[var(--prose-max)]">
              Systematic. <span className="accent">Zero Rot.</span>
            </h1>
            <p className="standfirst mt-[var(--space-6)] max-w-[var(--prose-max)]">
              This is the production-grade engine room for the JAi brand. No hardcoding. No legacy fragments. Built for senior digital practitioners who value structural integrity.
            </p>

            <nav aria-label="v4 Foundation index" className="mt-[var(--space-8)] flex flex-wrap gap-2">
              {SECTIONS.map((s) => (
                <a 
                  key={s.id} 
                  href={`#${s.id}`} 
                  className="inline-flex items-center px-4 py-2 rounded-full border border-[var(--color-subtle)] bg-[var(--color-surface-1)] font-mono font-bold uppercase text-[length:var(--type-mono-xs)] tracking-[0.2em] text-[color:var(--color-ink-2)] hover:text-[color:var(--color-brand)] hover:border-[var(--color-brand)] transition-all"
                >
                  {s.label}
                </a>
              ))}
            </nav>
          </Container>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            01 · TYPOGRAPHY
            ───────────────────────────────────────────────────────────── */}
        <section id="foundation-typography" className="py-[var(--space-9)] border-b border-[var(--color-subtle)]">
          <Container>
            <SectionHead
              idx="01"
              kicker="Foundations · Typography"
              title={<>Extreme contrast <span className="accent">and authority.</span></>}
              lede="We use thin display weights to signal technical authority. The system employs a hybrid approach: geometric sans for infrastructure, light italic for pause."
            />

            <div className="space-y-[var(--space-8)] mt-[var(--space-8)]">
              <SpecRow label="H1 / Hero · Unbounded 200" meta="--type-fluid-h1 · 48px to 104px" first>
                <h2 className="font-display font-extralight text-[length:var(--type-fluid-h1)] leading-[1.0] tracking-[-0.04em]">
                  Human Insight. <span className="accent">AI Speed.</span>
                </h2>
              </SpecRow>

              <SpecRow label="H2 / Section · Unbounded 200" meta="--type-fluid-h2 · 36px to 72px">
                <h3 className="font-display font-extralight text-[length:var(--type-fluid-h2)] leading-[1.05] tracking-[-0.04em]">
                  Twenty years. <span className="accent">Seven at scale.</span>
                </h3>
              </SpecRow>

              <SpecRow label="Standfirst · Newsreader 300" meta="--type-body-l · 24px to 36px">
                <p className="standfirst">
                  If I cannot help you, I will tell you directly. Diagnostics before prescriptions.
                </p>
              </SpecRow>

              <SpecRow label="Body · Geist 400" meta="--type-body-s · 18px Floor">
                <p className="font-body text-[length:var(--type-body-s)] leading-relaxed text-[color:var(--color-ink-1)] max-w-[var(--prose-max)]">
                  Senior digital marketing consultancy for UK SMEs. 20 years in the algorithm. Not an agency. A senior practitioner building infrastructure.
                </p>
              </SpecRow>

              <SpecRow label="Eyebrow · Mono 700" meta="--type-mono-xs · 12px · 0.3em tracking">
                <p className="font-mono font-bold uppercase text-[length:var(--type-mono-xs)] tracking-[0.3em] text-[color:var(--color-ink-2)]">
                  JAI DIGITAL · CARDIFF · ESTABLISHED 2025
                </p>
              </SpecRow>
            </div>
          </Container>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            STUDY · HEADINGS
            ───────────────────────────────────────────────────────────── */}
        <section id="study-headings" className="py-[var(--space-9)] border-b border-[var(--color-subtle)] bg-[var(--color-surface-engineer)]">
          <Container>
            <SectionHead
              idx="S1"
              kicker="Design Study · Heading Tension"
              title={<>The "Statement" <span className="accent">Variable.</span></>}
              lede="Comparing how different font choices for the 'Signal' (Green) text change the brand's perceived authority."
            />

            <div className="space-y-[var(--space-9)] mt-[var(--space-8)]">
              {/* Option 1: The Hybrid (Current) */}
              <div className="space-y-4">
                <Eyebrow tone="muted">Option A: The Hybrid (Technical Tension)</Eyebrow>
                <h3 className="font-display font-extralight text-[length:var(--type-fluid-h2)] leading-[1.1] tracking-[-0.04em]">
                  Systematic. <span className="accent">Zero Rot.</span>
                </h3>
                <p className="text-[length:var(--type-body-xs)] text-[color:var(--color-ink-2)] max-w-xl">
                  <strong>Advice:</strong> This creates a "clash" between the engineered sans and the editorial serif. It suggests that while the build is technical, the thinking is human and sophisticated.
                </p>
              </div>

              {/* Option 2: Full Display */}
              <div className="space-y-4">
                <Eyebrow tone="muted">Option B: Full Display (Pure Infrastructure)</Eyebrow>
                <h3 className="font-display font-extralight text-[length:var(--type-fluid-h2)] leading-[1.1] tracking-[-0.04em]">
                  Systematic. <span className="text-[color:var(--color-brand)]">Zero Rot.</span>
                </h3>
                <p className="text-[length:var(--type-body-xs)] text-[color:var(--color-ink-2)] max-w-xl">
                  <strong>Advice:</strong> Removing the serif makes the brand feel more "SaaS" or "Platform." It’s colder, more precise, and highly modern, but loses that "Senior Consultant" signature.
                </p>
              </div>

              {/* Option 3: Full Editorial Signal */}
              <div className="space-y-4">
                <Eyebrow tone="muted">Option C: Full Editorial Signal (The Statement)</Eyebrow>
                <h3 className="font-editorial italic font-light text-[length:var(--type-fluid-h2)] leading-[1.1] text-[color:var(--color-brand)]">
                  Systematic Zero Rot.
                </h3>
                <p className="text-[length:var(--type-body-xs)] text-[color:var(--color-ink-2)] max-w-xl">
                  <strong>Advice:</strong> Using Newsreader for the entire "Statement" is a high-confidence move. It signals deep prestige and intellectual authority, though it can feel less "technical" if overused.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            02 · ATOMS (FUNCTIONAL)
            ───────────────────────────────────────────────────────────── */}
        <section id="atoms-functional" className="py-[var(--space-9)] border-b border-[var(--color-subtle)] bg-[var(--color-surface-sage)]">
          <Container>
            <SectionHead
              idx="02"
              kicker="Atoms · Functional Units"
              title={<>Precision <span className="accent">Interface.</span></>}
              lede="Every atom is built to respond to the atmospheric register of its parent container. Zero hardcoded colors; total systemic integrity."
            />

            <div className="space-y-[var(--space-8)] mt-[var(--space-8)]">
              {/* BUTTONS */}
              <SpecRow label="Button Primitive" meta="variants: primary | secondary | tension | ghost" first>
                <div className="flex flex-wrap items-center gap-6">
                  <Button variant="primary">Primary Action</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="tension">The Statement Accent</Button>
                  <Button variant="ghost">Ghost Action</Button>
                </div>
              </SpecRow>

              {/* BADGES */}
              <SpecRow label="Badge Units" meta="variants: default | secondary | signal | outline">
                <div className="flex flex-wrap items-center gap-4">
                  <Badge>Active</Badge>
                  <Badge variant="secondary">Draft</Badge>
                  <Badge variant="signal">System Signal</Badge>
                  <Badge variant="outline">Metadata</Badge>
                </div>
              </SpecRow>

              {/* REGISTER TEST (ENGINEER) */}
              <SpecRow label="Register Response" meta="Testing Sage atoms on Engineer surface">
                <div className="p-8 rounded-[var(--radius-card)] bg-[var(--color-surface-engineer)] border border-[var(--color-subtle)]">
                  <div className="flex flex-wrap items-center gap-6">
                    <Button variant="primary">Primary</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Badge variant="signal">Signal Badge</Badge>
                  </div>
                </div>
              </SpecRow>

              {/* RULES */}
              <SpecRow label="Rule Divider" meta="variants: default | brand | subtle">
                <div className="space-y-8">
                  <div className="space-y-2">
                    <p className="font-mono text-[10px] text-[color:var(--color-ink-3)] uppercase tracking-widest">Default Rule</p>
                    <Rule />
                  </div>
                  <div className="space-y-2">
                    <p className="font-mono text-[10px] text-[color:var(--color-ink-3)] uppercase tracking-widest">Brand Signal Rule</p>
                    <Rule tone="brand" />
                  </div>
                </div>
              </SpecRow>

              {/* INPUTS */}
              <SpecRow label="Input Primitive" meta="Type: Technical Minimal">
                <div className="max-w-md space-y-4">
                  <Input placeholder="Enter technical requirement..." />
                  <p className="font-mono text-[10px] text-[color:var(--color-ink-3)] uppercase tracking-widest">Hover or focus to see the signal border</p>
                </div>
              </SpecRow>

              {/* CARDS */}
              <SpecRow label="Card Base" meta="variants: sage | engineer | elevated">
                <div className="grid md:grid-cols-2 gap-6">
                  <Card variant="sage">
                    <Eyebrow tone="muted" className="mb-4">Sage Register</Eyebrow>
                    <p className="font-display text-xl mb-4">Philosophy & Narrative Card</p>
                    <Button variant="outline" size="sm">Learn More</Button>
                  </Card>
                  <Card variant="engineer">
                    <Eyebrow tone="muted" className="mb-4">Engineer Register</Eyebrow>
                    <p className="font-display text-xl mb-4 text-white">Technical Infrastructure Card</p>
                    <Button variant="primary" size="sm">View Specs</Button>
                  </Card>
                </div>
              </SpecRow>
            </div>
          </Container>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            03 · PRIMITIVES (WAYFINDING)
            ───────────────────────────────────────────────────────────── */}
        <section id="primitives-wayfinding" className="py-[var(--space-9)] border-b border-[var(--color-subtle)] bg-[var(--color-surface-engineer)]">
          <Container>
            <SectionHead
              idx="03"
              kicker="Primitives · Wayfinding"
              title={<>Navigation and <span className="accent italic">Structure.</span></>}
              lede="Wayfinding components define the site's permanent boundaries. They are optimized for high-velocity navigation and technical authority."
            />

            <div className="space-y-[var(--space-8)] mt-[var(--space-8)]">
              <SpecRow label="Site Header" meta="Fixed · Backdrop Blur · Wordmark Reveal" first>
                <div className="p-4 rounded-[var(--radius-card)] bg-[var(--color-surface-sage)] border border-[var(--color-subtle)]">
                  <p className="font-mono text-[length:var(--type-mono-xs)] text-[color:var(--color-ink-3)] uppercase tracking-widest mb-4">Header is currently active at top of viewport</p>
                  <Button variant="outline" size="sm">Inspect wordmark behavior</Button>
                </div>
              </SpecRow>

              <SpecRow label="Footer Infrastructure" meta="Data-rich · Register Switch · Legal Context">
                <p className="font-mono text-[length:var(--type-mono-xs)] text-[color:var(--color-ink-3)] uppercase tracking-widest mb-4">Footer is rendered at the bottom of this page</p>
                <Link href="#footer-demo" className="accent underline-reveal">Scroll to bottom to inspect</Link>
              </SpecRow>
            </div>
          </Container>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            04 · COLOUR REGISTERS
            ───────────────────────────────────────────────────────────── */}
        <section id="foundation-colour" className="py-[var(--space-9)] border-b border-[var(--color-subtle)] bg-[var(--color-surface-sage)]">
          <Container>
            <SectionHead
              idx="04"
              kicker="Foundations · Colour Registers"
              title={<>The Sage and the <span className="accent">Engineer.</span></>}
              lede="We shift the register of the page to signal different mental modes. Sage for philosophy and history; Engineer for data and technical modules."
            />

            <div className="grid md:grid-cols-2 gap-[var(--space-8)] mt-[var(--space-8)]">
              {/* REGISTER A · SAGE */}
              <div className="space-y-[var(--space-6)]">
                <div className="p-8 rounded-[var(--radius-card)] bg-[var(--color-surface-sage)] border border-[var(--color-subtle)] shadow-xl">
                  <Eyebrow className="mb-4">Register A · Sage (Warm)</Eyebrow>
                  <p className="font-display font-light text-2xl mb-6">Philosophy & Narrative</p>
                  <div className="grid grid-cols-2 gap-4">
                    <Swatch name="Surface" token="--color-surface-sage" value="#141411" />
                    <Swatch name="Card Base" token="--color-card-sage" value="#1c1d18" />
                  </div>
                </div>
                <p className="font-body text-[length:var(--type-body-xs)] text-[color:var(--color-ink-2)] leading-relaxed italic">
                  Usage: Hero sections, About, Services index, and deep-dive narrative content.
                </p>
              </div>

              {/* REGISTER B · ENGINEER */}
              <div className="space-y-[var(--space-6)]">
                <div className="p-8 rounded-[var(--radius-card)] bg-[var(--color-surface-engineer)] border border-[var(--color-subtle)] shadow-xl">
                  <Eyebrow className="mb-4">Register B · Engineer (Cool)</Eyebrow>
                  <p className="font-display font-light text-2xl mb-6 text-white">Data & Infrastructure</p>
                  <div className="grid grid-cols-2 gap-4">
                    <Swatch name="Surface" token="--color-surface-engineer" value="#0c0d0f" dark />
                    <Swatch name="Card Base" token="--color-card-engineer" value="#111317" dark />
                  </div>
                </div>
                <p className="font-body text-[length:var(--type-body-xs)] text-[color:var(--color-ink-2)] leading-relaxed italic">
                  Usage: Case studies, technical specs, automation grids, and high-velocity sprint modules.
                </p>
              </div>
            </div>

            <div className="mt-[var(--space-9)] space-y-[var(--space-5)]">
              <Eyebrow tone="muted">The Signal Core</Eyebrow>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Swatch name="Brand Lime" token="--color-brand" value="#c9d900" bg="#c9d900" text="#141411" />
                <Swatch name="Success" token="--color-success" value="#22c55e" bg="#22c55e" text="#141411" />
                <Swatch name="Error" token="--color-error" value="#ef4444" bg="#ef4444" />
                <Swatch name="Warning" token="--color-warning" value="#f59e0b" bg="#f59e0b" text="#141411" />
              </div>
            </div>
          </Container>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            05 · SPACING
            ───────────────────────────────────────────────────────────── */}
        <section id="foundation-spacing" className="py-[var(--space-9)] bg-[var(--color-surface-engineer)]">
          <Container>
            <SectionHead
              idx="05"
              kicker="Foundations · Spacing Ladder"
              title={<>Fibonacci <span className="accent">Rhythm.</span></>}
              lede="Layouts breathe through a non-linear spacing ladder. Generous vertical air is a requirement for high-end technical positioning."
            />

            <div className="space-y-[var(--space-6)] mt-[var(--space-8)]">
              {[
                { token: "--space-4", px: 16, label: "Inline units" },
                { token: "--space-5", px: 24, label: "Internal padding" },
                { token: "--space-6", px: 40, label: "Standard gutters" },
                { token: "--space-7", px: 64, label: "Component separation" },
                { token: "--space-8", px: 104, label: "Section gutters" },
                { token: "--space-9", px: 168, label: "Chapter transitions" },
              ].map((s) => (
                <div key={s.token} className="grid grid-cols-[14rem_1fr_10rem] items-center gap-[var(--space-4)]">
                  <span className="font-mono text-[length:var(--type-mono-xs)] text-[color:var(--color-ink-2)] uppercase tracking-[0.2em]">{s.token}</span>
                  <div className="h-4 bg-[var(--color-brand)]/20 border-x border-[var(--color-brand)]/40 rounded-full" style={{ width: s.px }} />
                  <span className="font-mono text-[length:var(--type-mono-xs)] text-[color:var(--color-ink-2)] text-right uppercase tracking-[0.1em]">{s.px}px</span>
                </div>
              ))}
            </div>
          </Container>
        </section>
      </main>
      <div id="footer-demo">
        <Footer />
      </div>
    </>
  );
}

function Swatch({ name, token, value, bg, text, dark }: { name: string; token: string; value: string; bg?: string; text?: string; dark?: boolean }) {
  return (
    <div className="rounded-[var(--radius-sm)] border border-[var(--color-subtle)] overflow-hidden">
      <div 
        className="h-12 flex items-center px-4" 
        style={{ background: bg ?? value, color: text ?? (dark ? "#fff" : "#e6e6e1") }}
      >
        <span className="font-mono text-[10px] font-bold uppercase tracking-widest">{name}</span>
      </div>
      <div className="p-2 bg-[var(--color-surface-2)]">
        <p className="font-mono text-[9px] text-[color:var(--color-ink-2)] truncate m-0">{token}</p>
        <p className="font-mono text-[9px] text-[color:var(--color-ink-1)] m-0">{value}</p>
      </div>
    </div>
  );
}
