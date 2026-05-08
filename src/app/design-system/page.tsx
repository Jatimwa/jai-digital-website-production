import type { Metadata } from "next";
import { Container, Eyebrow, Button, Badge, Rule, Input, Card } from "@/components/atoms";
import { SiteHeader, Footer, SectionHead, SpecRow } from "@/components/system";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Design System · Human Strategy × AI Speed · JAi Digital",
  description: "The technical foundation of the JAi Digital brand. A production-grade component library and case study in systematic, zero-rot engineering.",
  openGraph: {
    title: "JAi Digital · Systematic Design System",
    description: "Built for senior digital practitioners. 0 agency rot. 100% technical depth.",
    type: "website",
  },
  robots: { index: true, follow: true },
};

const SECTIONS = [
  { id: "foundation-typography", label: "Typography" },
  { id: "study-headings", label: "Heading Study" },
  { id: "atoms-functional", label: "Atoms (Functional)" },
  { id: "primitives-wayfinding", label: "Primitives (Wayfinding)" },
  { id: "patterns-sections", label: "Interface Patterns" },
  { id: "motion-scroll", label: "Motion & Scroll" },
  { id: "foundation-colour", label: "Colour Infrastructure" },
  { id: "foundation-spacing", label: "Spacing & Rhythm" },
];

export default function DesignSystemPage() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="bg-[var(--color-surface-0)] min-h-screen">
        {/* HERO */}
        <section className="relative overflow-hidden border-b border-[var(--color-subtle)]">
          <div className="absolute inset-[var(--space-0)] bg-grid pointer-events-none opacity-20" aria-hidden />
          <Container className="relative pt-[var(--space-9)] pb-[var(--space-9)]">
            <Eyebrow>JAi Digital · Workbench · v4.0</Eyebrow>
            <h1 className="mt-[var(--space-5)] font-display font-extralight text-[length:var(--type-fluid-h1)] leading-[1.0] tracking-[-0.04em] text-balance max-w-[var(--prose-max)]">
              Systematic. <span className="accent">Zero Rot.</span>
            </h1>
            <p className="standfirst mt-[var(--space-6)] max-w-[var(--prose-max)] text-[color:var(--color-ink-0)]">
              This is the production-grade engine room for the JAi brand. No hardcoding. No legacy fragments. Built for senior digital practitioners who value structural integrity.
            </p>

            <nav aria-label="v4 Foundation index" className="mt-[var(--space-8)] flex flex-wrap gap-[var(--space-2)]">
              {SECTIONS.map((s) => (
                <a 
                  key={s.id} 
                  href={`#${s.id}`} 
                  className="inline-flex items-center px-[var(--space-4)] py-[var(--space-2)] rounded-[var(--radius-card)] border border-[var(--color-subtle)] bg-[var(--color-surface-1)] font-mono font-bold uppercase text-[length:var(--type-mono-xs)] tracking-[0.2em] text-[color:var(--color-ink-2)] hover:text-[color:var(--color-brand)] hover:border-[var(--color-brand)] transition-all"
                >
                  {s.label}
                </a>
              ))}
            </nav>
          </Container>
        </section>

        {/* 01 · TYPOGRAPHY */}
        <section id="foundation-typography" className="py-[var(--space-9)] border-b border-[var(--color-subtle)]">
          <Container>
            <SectionHead
              idx="01"
              kicker="Foundations · Typography"
              title={<>Extreme contrast <span className="accent">and authority.</span></>}
              lede="Thin display weights signal technical authority. The system employs a hybrid approach: geometric sans for infrastructure (Geist), light italic for pause (Newsreader), and Unbounded for display."
            />

            <div className="space-y-[var(--space-8)] mt-[var(--space-8)]">
              {/* DISPLAY SCALE */}
              <div className="pt-[var(--space-6)] border-t border-[var(--color-subtle)]">
                <Eyebrow tone="muted" className="mb-[var(--space-6)]">01a · Display Scale (Unbounded)</Eyebrow>
                <div className="space-y-[var(--space-8)]">
                  <SpecRow label="H1 / Hero" meta="var(--type-fluid-h1) | clamp(48px-104px)">
                    <h2 className="font-display font-extralight text-[length:var(--type-fluid-h1)] leading-[1.0] tracking-[-0.04em]">
                      Human Insight. <span className="accent">AI Speed.</span>
                    </h2>
                  </SpecRow>
                  <SpecRow label="H2 / Section" meta="var(--type-fluid-h2) | clamp(36px-72px)">
                    <h3 className="font-display font-extralight text-[length:var(--type-fluid-h2)] leading-[1.05] tracking-[-0.04em]">
                      Twenty years. <span className="accent">Seven at scale.</span>
                    </h3>
                  </SpecRow>
                  <SpecRow label="H3 / Subhead" meta="var(--type-fluid-h3) | clamp(20px-28px)">
                    <h4 className="font-display font-extralight text-[length:var(--type-fluid-h3)] leading-[1.2] tracking-[-0.02em]">
                      The senior practitioner <span className="accent">advantage.</span>
                    </h4>
                  </SpecRow>
                </div>
              </div>

              {/* BODY & EDITORIAL SCALE */}
              <div className="pt-[var(--space-6)] border-t border-[var(--color-subtle)]">
                <Eyebrow tone="muted" className="mb-[var(--space-6)]">01b · Body & Editorial Scale (Geist / Newsreader)</Eyebrow>
                <div className="space-y-[var(--space-8)]">
                  <SpecRow label="Body L / Lede" meta="var(--type-body-l) | Newsreader 300">
                    <p className="standfirst text-[color:var(--color-ink-0)]">
                      If I cannot help you, I will tell you directly. Diagnostics before prescriptions.
                    </p>
                  </SpecRow>
                  <SpecRow label="Body M" meta="var(--type-body-m) | Geist 400 | 20px">
                    <p className="font-body text-[length:var(--type-body-m)] leading-relaxed text-[color:var(--color-ink-1)] max-w-[var(--prose-max)]">
                      Technical consultancy for UK SMEs. Senior-practitioner depth. Zero agency rot.
                    </p>
                  </SpecRow>
                  <SpecRow label="Body S (Floor)" meta="var(--type-body-s) | Geist 400 | 18px">
                    <p className="font-body text-[length:var(--type-body-s)] leading-relaxed text-[color:var(--color-ink-1)] max-w-[var(--prose-max)]">
                      The floor for all body text. Optimized for high-density information without sacrificing legibility on standard displays.
                    </p>
                  </SpecRow>
                  <SpecRow label="Body XS" meta="var(--type-body-xs) | Geist 400 | 14px">
                    <p className="font-body text-[length:var(--type-body-xs)] leading-relaxed text-[color:var(--color-ink-2)] max-w-[var(--prose-max)]">
                      Used for metadata, fine print, and supplementary information that requires a secondary hierarchy.
                    </p>
                  </SpecRow>
                </div>
              </div>

              {/* MONO SCALE */}
              <div className="pt-[var(--space-6)] border-t border-[var(--color-subtle)]">
                <Eyebrow tone="muted" className="mb-[var(--space-6)]">01c · Mono Scale (Geist Mono)</Eyebrow>
                <div className="space-y-[var(--space-8)]">
                  <SpecRow label="Mono XS" meta="var(--type-mono-xs) | 12px">
                    <p className="font-mono text-[length:var(--type-mono-xs)] uppercase tracking-[0.3em] text-[color:var(--color-brand)]">
                      Systemic Infrastructure
                    </p>
                  </SpecRow>
                  <SpecRow label="Mono Tiny" meta="var(--type-mono-tiny) | 10px">
                    <p className="font-mono text-[length:var(--type-mono-tiny)] uppercase tracking-[0.2em] text-[color:var(--color-ink-2)]">
                      v4.0.0-PROD
                    </p>
                  </SpecRow>
                </div>
              </div>

              {/* STAT SCALE */}
              <div className="pt-[var(--space-6)] border-t border-[var(--color-subtle)]">
                <Eyebrow tone="muted" className="mb-[var(--space-6)]">01d · Stat Scale (Unbounded)</Eyebrow>
                <div className="space-y-[var(--space-8)]">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-[var(--space-8)]">
                    <div className="space-y-[var(--space-2)]">
                      <p className="font-display font-extralight text-[length:var(--type-stat-md)] leading-none text-[color:var(--color-brand)]">20+</p>
                      <p className="font-mono text-[length:var(--type-mono-xs)] text-[color:var(--color-ink-2)] uppercase tracking-widest">Years Depth</p>
                    </div>
                    <div className="space-y-[var(--space-2)]">
                      <p className="font-display font-extralight text-[length:var(--type-stat-lg)] leading-none text-[color:var(--color-brand)]">£1M</p>
                      <p className="font-mono text-[length:var(--type-mono-xs)] text-[color:var(--color-ink-2)] uppercase tracking-widest">Optimized</p>
                    </div>
                    <div className="space-y-[var(--space-2)]">
                      <p className="font-display font-extralight text-[length:var(--type-stat-xl)] leading-none text-[color:var(--color-brand)]">14</p>
                      <p className="font-mono text-[length:var(--type-mono-xs)] text-[color:var(--color-ink-2)] uppercase tracking-widest">Gates Passed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* STUDY · HEADINGS */}
        <section id="study-headings" className="py-[var(--space-9)] border-b border-[var(--color-subtle)] bg-[var(--color-surface-engineer-0)]">
          <Container>
            <SectionHead
              idx="S1"
              kicker="Design Study · Heading Tension"
              title={<>The "Statement" <span className="accent">Variable.</span></>}
              lede="Comparing how different font choices for the 'Signal' (Green) text change the brand's perceived authority."
            />

            <div className="space-y-[var(--space-9)] mt-[var(--space-8)]">
              <div className="space-y-[var(--space-4)]">
                <Eyebrow tone="muted">Option A: The Hybrid (Technical Tension)</Eyebrow>
                <h3 className="font-display font-extralight text-[length:var(--type-fluid-h2)] leading-[1.1] tracking-[-0.04em]">
                  Systematic. <span className="accent">Zero Rot.</span>
                </h3>
                <p className="text-[length:var(--type-body-xs)] text-[color:var(--color-ink-2)] max-w-[var(--prose-max)]">
                  <strong>Advice:</strong> This creates a "clash" between the engineered sans and the editorial serif. It suggests that while the build is technical, the thinking is human and sophisticated.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* 02 · ATOMS */}
        <section id="atoms-functional" className="py-[var(--space-9)] border-b border-[var(--color-subtle)] bg-[var(--color-surface-0)]">
          <Container>
            <SectionHead
              idx="02"
              kicker="Atoms · Functional Units"
              title={<>Precision <span className="accent">Interface.</span></>}
              lede="Total systemic integrity. Every atom derives from the technical ladder."
            />

            <div className="space-y-[var(--space-8)] mt-[var(--space-8)]">
              <SpecRow label="Button Primitive" meta="variants: primary | secondary | tension | outline | ghost" first>
                <div className="space-y-[var(--space-8)]">
                  {/* VARIANTS */}
                  <div>
                    <Eyebrow tone="muted" className="mb-[var(--space-4)]">Variants</Eyebrow>
                    <div className="flex flex-wrap items-center gap-[var(--space-4)]">
                      <Button variant="primary">Primary Action</Button>
                      <Button variant="secondary">Secondary</Button>
                      <Button variant="tension">The Statement</Button>
                      <Button variant="outline">Outline</Button>
                    </div>
                  </div>

                  {/* SIZES */}
                  <div>
                    <Eyebrow tone="muted" className="mb-[var(--space-4)]">Sizes</Eyebrow>
                    <div className="flex flex-wrap items-end gap-[var(--space-4)]">
                      <Button variant="primary" size="lg">Large Action</Button>
                      <Button variant="primary">Default Size</Button>
                      <Button variant="primary" size="sm">Small Action</Button>
                    </div>
                  </div>

                  {/* STATES */}
                  <div>
                    <Eyebrow tone="muted" className="mb-[var(--space-4)]">Functional States</Eyebrow>
                    <div className="flex flex-wrap items-center gap-[var(--space-4)]">
                      <Button variant="primary" disabled>Disabled State</Button>
                      <Button variant="outline" disabled>Outline Disabled</Button>
                    </div>
                  </div>
                </div>
              </SpecRow>

              <SpecRow label="Badge Units" meta="variants: default | signal | outline | destructive">
                <div className="space-y-[var(--space-6)]">
                  <div>
                    <Eyebrow tone="muted" className="mb-[var(--space-2)]">Status Signaling</Eyebrow>
                    <div className="flex flex-wrap items-center gap-[var(--space-4)]">
                      <Badge>Production Ready</Badge>
                      <Badge variant="signal">Active System</Badge>
                      <Badge variant="destructive">Audit Failed</Badge>
                    </div>
                  </div>
                  <div>
                    <Eyebrow tone="muted" className="mb-[var(--space-2)]">Metadata & Tags</Eyebrow>
                    <div className="flex flex-wrap items-center gap-[var(--space-2)]">
                      <Badge variant="outline">v4.0.0</Badge>
                      <Badge variant="outline">Next.js 15</Badge>
                      <Badge variant="outline">TypeScript</Badge>
                    </div>
                  </div>
                </div>
              </SpecRow>

              <SpecRow label="Divider (Rule)" meta="Subtle | Geometric | Hair-line">
                <div className="space-y-[var(--space-6)] max-w-[var(--prose-max)]">
                  <p className="font-body text-[length:var(--type-body-xs)] text-[color:var(--color-ink-2)] italic">
                    Dividing technical segments without introducing heavy visual weight.
                  </p>
                  <Rule />
                  <p className="font-body text-[length:var(--type-body-xs)] text-[color:var(--color-ink-2)] italic">
                    The Rule atom uses var(--color-subtle) and maintains 1px height.
                  </p>
                </div>
              </SpecRow>

              <SpecRow label="Input Primitive" meta="Type: Technical Minimal | Geist 400">
                <div className="space-y-[var(--space-6)] max-w-[var(--prose-max)]">
                  <div>
                    <Eyebrow tone="muted" className="mb-[var(--space-2)]">Text Input</Eyebrow>
                    <Input placeholder="Enter technical requirement..." />
                  </div>
                  <div>
                    <Eyebrow tone="muted" className="mb-[var(--space-2)]">Textarea / Multi-line</Eyebrow>
                    <textarea 
                      placeholder="Describe the scope of the audit..."
                      className="w-full bg-[var(--color-surface-sage-1)] border border-[var(--color-subtle)] rounded-[var(--radius-card)] p-[var(--space-4)] font-body text-[length:var(--type-body-s)] text-[color:var(--color-ink-1)] focus:border-[var(--color-brand)] transition-all min-h-[120px] outline-none"
                    />
                  </div>
                  <div className="opacity-50 pointer-events-none">
                    <Eyebrow tone="muted" className="mb-[var(--space-2)]">Disabled State</Eyebrow>
                    <Input placeholder="Input locked during processing..." disabled />
                  </div>
                </div>
              </SpecRow>

              <SpecRow label="Card Base" meta="variants: sage | engineer | elevated">
                <div className="space-y-[var(--space-8)]">
                  <div className="grid md:grid-cols-2 gap-[var(--space-6)]">
                    <Card variant="sage" className="group flex flex-col h-full justify-between">
                      <div>
                        <Eyebrow tone="muted" className="mb-[var(--space-4)]">Service Register</Eyebrow>
                        <h4 className="font-display text-[length:var(--type-fluid-h3)] mb-[var(--space-4)] text-[color:var(--color-ink-0)] leading-tight">
                          Technical <span className="accent">Audit.</span>
                        </h4>
                        <p className="font-body text-[length:var(--type-body-s)] text-[color:var(--color-ink-1)] leading-relaxed mb-[var(--space-6)]">
                          Deep-tier infrastructure analysis. We find the rot that agencies hide in the shadows of the build.
                        </p>
                      </div>
                      <Button variant="outline" size="sm" className="w-fit">Learn More</Button>
                    </Card>

                    <Card variant="engineer" className="group flex flex-col h-full justify-between">
                      <div>
                        <Eyebrow tone="muted" className="mb-[var(--space-4)]">Case Study Register</Eyebrow>
                        <h4 className="font-display text-[length:var(--type-fluid-h3)] mb-[var(--space-4)] text-[color:var(--color-ink-0)] leading-tight">
                          Global <span className="accent">Scale.</span>
                        </h4>
                        <p className="font-body text-[length:var(--type-body-s)] text-[color:var(--color-ink-1)] leading-relaxed mb-[var(--space-6)]">
                          Optimizing a £1.2M ad spend for a London-based fintech disruptor. 42% CAC reduction in 90 days.
                        </p>
                      </div>
                      <Button variant="primary" size="sm" className="w-fit">View Case Study</Button>
                    </Card>
                  </div>

                  <Card variant="elevated" className="max-w-[var(--prose-max)]">
                    <div className="flex flex-col md:flex-row gap-[var(--space-8)] items-center">
                      <div className="flex-1">
                        <Eyebrow tone="default" className="mb-[var(--space-4)]">Featured Insight</Eyebrow>
                        <h4 className="font-display text-[length:var(--type-fluid-h2)] mb-[var(--space-4)] text-[color:var(--color-ink-0)] leading-[1.1]">
                          The "Agency Rot" <span className="accent">Whitepaper.</span>
                        </h4>
                        <p className="font-body text-[length:var(--type-body-m)] text-[color:var(--color-ink-1)] leading-relaxed">
                          Why your current agency is incentivized to keep your technical debt high—and how to break the cycle.
                        </p>
                      </div>
                      <Button variant="tension">Download Report</Button>
                    </div>
                  </Card>
                </div>
              </SpecRow>

              <SpecRow label="Editorial Quote" meta="Newsreader 300 | Italic | Accent">
                <blockquote className="max-w-[var(--prose-max)] py-[var(--space-6)] border-l-2 border-[var(--color-brand)] pl-[var(--space-6)]">
                  <p className="font-editorial italic font-light text-[length:var(--type-body-l)] leading-relaxed text-[color:var(--color-ink-0)]">
                    "The difference between an <span className="accent">agency</span> and a <span className="accent">practitioner</span> is the willingness to tell you that your project is failing before you spend another penny."
                  </p>
                  <footer className="mt-[var(--space-4)]">
                    <p className="font-mono text-[length:var(--type-mono-xs)] text-[color:var(--color-ink-2)] uppercase tracking-widest">— James Watkins, Founder</p>
                  </footer>
                </blockquote>
              </SpecRow>

              <SpecRow label="Quantified Proof" meta="Unbounded | Stat Scale | Brand Signal">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[var(--space-8)]">
                  <div className="space-y-[var(--space-2)] group">
                    <p className="font-display font-extralight text-[length:var(--type-stat-lg)] leading-none text-[color:var(--color-brand)] transition-transform duration-500 group-hover:translate-x-1">
                      24%
                    </p>
                    <p className="font-mono text-[length:var(--type-mono-xs)] text-[color:var(--color-ink-2)] uppercase tracking-widest leading-tight">
                      Average Efficiency <br /> Gain in Q1
                    </p>
                  </div>
                  <div className="space-y-[var(--space-2)] group">
                    <p className="font-display font-extralight text-[length:var(--type-stat-lg)] leading-none text-[color:var(--color-brand)] transition-transform duration-500 group-hover:translate-x-1">
                      90<span className="text-[0.5em] ml-1">days</span>
                    </p>
                    <p className="font-mono text-[length:var(--type-mono-xs)] text-[color:var(--color-ink-2)] uppercase tracking-widest leading-tight">
                      To Technical <br /> Sovereignty
                    </p>
                  </div>
                </div>
              </SpecRow>

              <SpecRow label="Proof Infrastructure" meta="Trust Signaling | Monochrome | Authority">
                <div className="space-y-[var(--space-6)]">
                  <p className="font-mono text-[length:var(--type-mono-xs)] text-[color:var(--color-ink-2)] uppercase tracking-[0.3em] mb-[var(--space-4)]">Recognised Technical Authority</p>
                  <div className="flex flex-wrap items-center gap-x-[var(--space-9)] gap-y-[var(--space-6)] opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700">
                    <div className="font-display font-bold text-[length:var(--type-body-l)] tracking-tighter text-[color:var(--color-ink-0)]">FINTECH_OS</div>
                    <div className="font-display font-bold text-[length:var(--type-body-l)] tracking-tighter text-[color:var(--color-ink-0)]">GLOBAL_RETAIL</div>
                    <div className="font-display font-bold text-[length:var(--type-body-l)] tracking-tighter text-[color:var(--color-ink-0)]">SME_LOGISTICS</div>
                    <div className="font-display font-bold text-[length:var(--type-body-l)] tracking-tighter text-[color:var(--color-ink-0)]">V4_INFRA</div>
                  </div>
                </div>
              </SpecRow>
            </div>
          </Container>
        </section>

        {/* 03 · PRIMITIVES & WAYFINDING */}
        <section id="primitives-wayfinding" className="py-[var(--space-9)] border-b border-[var(--color-subtle)] bg-[var(--color-surface-engineer-0)]">
          <Container>
            <SectionHead
              idx="03"
              kicker="System · Wayfinding Primitives"
              title={<>Persistent <span className="accent">Guidance.</span></>}
              lede="Navigation is governed by the Layering register. Backdrops use high-utility blur and systematic opacity to maintain context without visual noise."
            />

            <div className="space-y-[var(--space-8)] mt-[var(--space-8)]">
              <SpecRow label="Site Header" meta="fixed | z-[var(--z-header)] | backdrop-blur" first>
                <div className="relative h-[var(--space-9)] border border-[var(--color-subtle)] rounded-[var(--radius-card)] overflow-hidden bg-[var(--color-surface-0)]">
                  {/* Mock SiteHeader for documentation */}
                  <div className="absolute top-0 left-0 w-full h-[var(--space-7)] flex items-center justify-between px-[var(--space-5)] border-b border-[var(--color-subtle)] bg-[var(--color-surface-0)]/90 backdrop-blur-md">
                    <div className="font-display font-extralight text-[length:var(--type-body-m)] tracking-tighter">
                      JAi <span className="accent">Digital</span>
                    </div>
                    <div className="flex gap-[var(--space-5)]">
                      {["Services", "Case Studies", "Manifesto"].map(item => (
                        <span key={item} className="font-mono text-[length:var(--type-mono-xs)] text-[color:var(--color-ink-2)] uppercase tracking-widest">{item}</span>
                      ))}
                    </div>
                  </div>
                  <div className="p-[var(--space-8)] pt-[var(--space-9)]">
                    <p className="font-body text-[length:var(--type-body-s)] text-[color:var(--color-ink-2)] italic">
                      Header persistent behavior demonstration. Scroll for fixed interaction.
                    </p>
                  </div>
                </div>
              </SpecRow>

              <SpecRow label="Section Navigation" meta="dynamic index | interactive">
                <nav aria-label="Documentation Wayfinding" className="flex flex-wrap gap-[var(--space-2)]">
                  {SECTIONS.slice(0, 3).map((s) => (
                    <div 
                      key={s.id} 
                      className="inline-flex items-center px-[var(--space-4)] py-[var(--space-2)] rounded-[var(--radius-card)] border border-[var(--color-brand)] bg-[var(--color-surface-1)] font-mono font-bold uppercase text-[length:var(--type-mono-xs)] tracking-[0.2em] text-[color:var(--color-brand)]"
                    >
                      {s.label} (Active)
                    </div>
                  ))}
                </nav>
              </SpecRow>

              <SpecRow label="Global Footer" meta="structural | 3-column | social-proof">
                <div className="border border-[var(--color-subtle)] rounded-[var(--radius-card)] overflow-hidden">
                  <div className="relative pointer-events-none opacity-80">
                    <Footer />
                  </div>
                </div>
              </SpecRow>
            </div>
          </Container>
        </section>

        {/* 04 · INTERFACE PATTERNS (SECTIONS) */}
        <section id="patterns-sections" className="py-[var(--space-9)] border-b border-[var(--color-subtle)] bg-[var(--color-surface-0)]">
          <Container>
            <SectionHead
              idx="04"
              kicker="Patterns · Interface Sections"
              title={<>Production <span className="accent">Templates.</span></>}
              lede="Validated patterns for assembly. Every section follows the grid and layering protocols."
            />

            <div className="space-y-[var(--space-9)] mt-[var(--space-8)]">
              {/* HERO VARIANTS */}
              <div className="space-y-[var(--space-8)]">
                <Eyebrow tone="muted">04a · Hero Register</Eyebrow>
                
                <SpecRow label="Bold Typographic Hero" meta="Fluid H1 | Centered/Left | Signal-Lead" first>
                  <div className="relative border border-[var(--color-subtle)] rounded-[var(--radius-card)] overflow-hidden bg-[var(--color-surface-sage-0)] p-[var(--space-8)] py-[var(--space-9)]">
                    <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" aria-hidden />
                    <div className="relative z-[var(--z-base)] max-w-[var(--prose-max)]">
                      <Eyebrow>Diagnostics before prescriptions.</Eyebrow>
                      <h2 className="mt-[var(--space-5)] font-display font-extralight text-[length:var(--type-fluid-h1)] leading-[1.0] tracking-[-0.04em] text-balance">
                        Human Insight. <br /><span className="accent">AI Speed.</span>
                      </h2>
                      <p className="standfirst mt-[var(--space-6)] text-[color:var(--color-ink-0)]">
                        Technical marketing-ops for UK SMEs who value structural integrity over agency hype.
                      </p>
                      <div className="mt-[var(--space-8)] flex flex-wrap gap-[var(--space-4)]">
                        <Button variant="tension">Start Audit</Button>
                        <Button variant="outline">View Capability</Button>
                      </div>
                    </div>
                  </div>
                </SpecRow>

                <SpecRow label="Split Layout Hero" meta="Visual Right | Meta-Lead">
                   <div className="relative border border-[var(--color-subtle)] rounded-[var(--radius-card)] overflow-hidden bg-[var(--color-surface-engineer-0)] p-[var(--space-8)]">
                      <div className="grid md:grid-cols-[1.5fr_1fr] gap-[var(--space-8)] items-center">
                        <div className="relative z-[var(--z-base)]">
                          <Eyebrow tone="muted">v4.0.0 Infrastructure</Eyebrow>
                          <h2 className="mt-[var(--space-4)] font-display font-extralight text-[length:var(--type-fluid-h2)] leading-[1.1] tracking-[-0.04em]">
                            Systematic. <br /><span className="accent">Zero Rot.</span>
                          </h2>
                          <p className="font-body text-[length:var(--type-body-m)] text-[color:var(--color-ink-1)] mt-[var(--space-6)] leading-relaxed">
                            We build digital infrastructure that doesn't decay. High-performance, type-safe, and ready for production.
                          </p>
                        </div>
                        <div className="aspect-[4/5] bg-[var(--color-surface-engineer-1)] rounded-[var(--radius-card)] border border-[var(--color-subtle)] flex items-center justify-center relative overflow-hidden">
                           <div className="absolute inset-0 bg-grid opacity-20" aria-hidden />
                           <p className="font-mono text-[length:var(--type-mono-xs)] text-[color:var(--color-ink-3)] uppercase tracking-widest">[ Visual Asset ]</p>
                        </div>
                      </div>
                   </div>
                </SpecRow>

                <SpecRow label="Testimonial Infrastructure" meta="Social Proof | Grid | Sage Register">
                  <div className="grid md:grid-cols-2 gap-[var(--space-6)]">
                    <Card variant="sage" className="relative">
                      <div className="absolute top-[var(--space-6)] right-[var(--space-6)] opacity-10">
                        <span className="font-display text-[length:var(--type-stat-md)] leading-none text-[color:var(--color-brand)]">“</span>
                      </div>
                      <blockquote className="space-y-[var(--space-6)]">
                        <p className="font-body text-[length:var(--type-body-m)] text-[color:var(--color-ink-0)] leading-relaxed italic">
                          "JAi didn't just audit our stack; they rebuilt our understanding of what digital speed actually looks like. The efficiency gains were immediate."
                        </p>
                        <footer className="flex items-center gap-[var(--space-4)] border-t border-[var(--color-subtle)] pt-[var(--space-4)]">
                          <div className="w-[var(--space-7)] h-[var(--space-7)] rounded-full bg-[var(--color-surface-sage-3)] border border-[var(--color-brand)]/20 flex items-center justify-center font-mono text-[color:var(--color-brand)] text-[length:var(--type-mono-xs)]">TH</div>
                          <div>
                            <p className="font-display font-bold text-[length:var(--type-body-xs)] text-[color:var(--color-ink-0)] uppercase tracking-tighter">Thomas H.</p>
                            <p className="font-mono text-[length:var(--type-mono-tiny)] text-[color:var(--color-ink-2)] uppercase tracking-widest">MD, GLOBAL_RETAIL</p>
                          </div>
                        </footer>
                      </blockquote>
                    </Card>

                    <Card variant="sage" className="relative">
                      <div className="absolute top-[var(--space-6)] right-[var(--space-6)] opacity-10">
                        <span className="font-display text-[length:var(--type-stat-md)] leading-none text-[color:var(--color-brand)]">“</span>
                      </div>
                      <blockquote className="space-y-[var(--space-6)]">
                        <p className="font-body text-[length:var(--type-body-m)] text-[color:var(--color-ink-0)] leading-relaxed italic">
                          "A level of technical depth you usually only find in Silicon Valley. Having this caliber of thinking in Cardiff is a game-changer."
                        </p>
                        <footer className="flex items-center gap-[var(--space-4)] border-t border-[var(--color-subtle)] pt-[var(--space-4)]">
                          <div className="w-[var(--space-7)] h-[var(--space-7)] rounded-full bg-[var(--color-surface-sage-3)] border border-[var(--color-brand)]/20 flex items-center justify-center font-mono text-[color:var(--color-brand)] text-[length:var(--type-mono-xs)]">SM</div>
                          <div>
                            <p className="font-display font-bold text-[length:var(--type-body-xs)] text-[color:var(--color-ink-0)] uppercase tracking-tighter">Sarah M.</p>
                            <p className="font-mono text-[length:var(--type-mono-tiny)] text-[color:var(--color-ink-2)] uppercase tracking-widest">CTO, FINTECH_OS</p>
                          </div>
                        </footer>
                      </blockquote>
                    </Card>
                  </div>
                </SpecRow>

                <SpecRow label="Case Study Preview" meta="Capability Proof | Stats | Engineer Register">
                   <div className="relative border border-[var(--color-subtle)] rounded-[var(--radius-card)] overflow-hidden bg-[var(--color-surface-engineer-0)] p-[var(--space-8)]">
                      <div className="flex flex-col lg:flex-row gap-[var(--space-9)]">
                        <div className="flex-1 space-y-[var(--space-6)]">
                          <div className="flex items-center gap-[var(--space-3)]">
                            <Badge variant="signal">Fintech</Badge>
                            <Badge variant="outline">Infrastructure</Badge>
                          </div>
                          <h3 className="font-display font-extralight text-[length:var(--type-fluid-h2)] leading-[1.1] tracking-[-0.04em]">
                             Eliminating <span className="accent">Agency Rot.</span>
                          </h3>
                          <p className="font-body text-[length:var(--type-body-m)] text-[color:var(--color-ink-1)] leading-relaxed">
                             A London-based fintech disruptor was bleeding £40k/month in technical debt and unoptimized ad-tech. We refactored the entire stack in 90 days.
                          </p>
                          <Button variant="primary" className="w-fit">Read Full Technical Case Study</Button>
                        </div>
                        <div className="lg:w-[320px] space-y-[var(--space-8)] border-l border-[var(--color-subtle)] pl-[var(--space-8)]">
                           <div className="space-y-[var(--space-1)]">
                              <p className="font-display font-extralight text-[length:var(--type-stat-md)] text-[color:var(--color-brand)] leading-none">42%</p>
                              <p className="font-mono text-[length:var(--type-mono-xs)] text-[color:var(--color-ink-2)] uppercase tracking-widest">CAC Reduction</p>
                           </div>
                           <div className="space-y-[var(--space-1)]">
                              <p className="font-display font-extralight text-[length:var(--type-stat-md)] text-[color:var(--color-brand)] leading-none">£480k</p>
                              <p className="font-mono text-[length:var(--type-mono-xs)] text-[color:var(--color-ink-2)] uppercase tracking-widest">Annualised Saving</p>
                           </div>
                        </div>
                      </div>
                   </div>
                </SpecRow>

                <SpecRow label="Service Infrastructure" meta="Service Grid | Sage Register | High-Density">
                  <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-[var(--space-6)]">
                    {[
                      { title: "Technical Audit", lede: "Deep-tier forensic analysis of your marketing stack and infrastructure." },
                      { title: "Revenue Ops", lede: "Aligning marketing, sales, and customer success around a single source of truth." },
                      { title: "AI Strategy", lede: "Moving beyond hype to implement autonomous digital operations at scale." },
                    ].map((s) => (
                      <Card key={s.title} variant="sage" className="group flex flex-col justify-between">
                        <div>
                          <Eyebrow tone="muted" className="mb-[var(--space-4)]">Capability</Eyebrow>
                          <h4 className="font-display text-[length:var(--type-fluid-h3)] text-[color:var(--color-ink-0)] leading-tight mb-[var(--space-4)]">
                            {s.title.split(' ')[0]} <span className="accent">{s.title.split(' ')[1]}.</span>
                          </h4>
                          <p className="font-body text-[length:var(--type-body-s)] text-[color:var(--color-ink-1)] leading-relaxed">
                            {s.lede}
                          </p>
                        </div>
                        <div className="mt-[var(--space-8)] pt-[var(--space-4)] border-t border-[var(--color-subtle)] flex items-center justify-between">
                           <span className="font-mono text-[length:var(--type-mono-xs)] text-[color:var(--color-ink-2)] uppercase tracking-widest">Fixed Retainer</span>
                           <div className="w-8 h-8 rounded-full border border-[var(--color-subtle)] flex items-center justify-center text-[color:var(--color-brand)] group-hover:bg-[var(--color-brand)] group-hover:text-[color:var(--color-surface-sage-0)] transition-all">→</div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </SpecRow>

                <SpecRow label="Practitioner Profile" meta="Bio Pattern | Split-Layout | Editorial Register">
                  <div className="relative border border-[var(--color-subtle)] rounded-[var(--radius-card)] overflow-hidden bg-[var(--color-surface-sage-0)] p-[var(--space-8)]">
                    <div className="grid md:grid-cols-[1fr_2fr] gap-[var(--space-9)] items-start">
                      <div className="aspect-square bg-[var(--color-surface-sage-1)] rounded-[var(--radius-card)] border border-[var(--color-subtle)] flex items-center justify-center relative overflow-hidden group">
                         <div className="absolute inset-0 bg-grid opacity-20" aria-hidden />
                         <p className="font-mono text-[length:var(--type-mono-xs)] text-[color:var(--color-ink-3)] uppercase tracking-widest">[ Image: James Watkins ]</p>
                      </div>
                      <div className="space-y-[var(--space-6)]">
                        <Eyebrow tone="default">Senior Practitioner</Eyebrow>
                        <h3 className="font-display font-extralight text-[length:var(--type-fluid-h2)] leading-[1.1] tracking-[-0.04em]">
                           James <span className="accent">Watkins.</span>
                        </h3>
                        <p className="standfirst text-[color:var(--color-ink-0)]">
                           20 years in the algorithm. 7 years at scale. 0 agency rot.
                        </p>
                        <p className="font-body text-[length:var(--type-body-m)] text-[color:var(--color-ink-1)] leading-relaxed">
                           I don't lead teams of juniors. I don't "leverage synergies." I build technical marketing infrastructure for high-growth SMEs who need senior-practitioner depth without the overhead of a traditional agency.
                        </p>
                        <div className="pt-[var(--space-6)] border-t border-[var(--color-subtle)]">
                           <Button variant="outline">View Full Manifesto</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </SpecRow>

                <SpecRow label="Global Call-to-Action" meta="Conversion Pattern | High-Visibility | Sage 3 Register">
                   <div className="relative border border-[var(--color-brand)]/20 rounded-[var(--radius-card)] overflow-hidden bg-[var(--color-surface-sage-3)] p-[var(--space-8)] py-[var(--space-9)]">
                      <div className="absolute inset-0 bg-grid opacity-10" aria-hidden />
                      <div className="relative z-[var(--z-base)] flex flex-col items-center text-center space-y-[var(--space-8)]">
                        <div className="space-y-[var(--space-4)] max-w-[var(--prose-max)]">
                           <Eyebrow tone="default">The Final Gate</Eyebrow>
                           <h2 className="font-display font-extralight text-[length:var(--type-fluid-h2)] leading-[1.05] tracking-[-0.04em]">
                              Ready to eliminate <span className="accent">agency rot?</span>
                           </h2>
                           <p className="standfirst text-[color:var(--color-ink-0)]">
                              I only take on three audits per month. Secure your diagnostics slot before the next cycle begins.
                           </p>
                        </div>
                        <div className="flex flex-wrap justify-center gap-[var(--space-4)]">
                           <Button variant="tension" size="lg">Start Technical Audit</Button>
                           <Button variant="outline" size="lg">Book 15-Min Briefing</Button>
                        </div>
                        <p className="font-mono text-[length:var(--type-mono-xs)] text-[color:var(--color-ink-2)] uppercase tracking-widest">Next Available Slot: June 2026</p>
                      </div>
                   </div>
                </SpecRow>

                <SpecRow label="Objection Infrastructure" meta="FAQ Pattern | High-Density | Systematic Hierarchy">
                   <div className="max-w-[var(--prose-max)] space-y-[var(--space-8)]">
                      {[
                        { q: "How is this different from a standard audit?", a: "Most agencies look at your front-end. We look at your database structure, your API latency, and your attribution logic. It's forensic, not aesthetic." },
                        { q: "Do you offer ongoing execution?", a: "Only as a fractional CTO/practitioner lead. I don't provide teams of juniors. I build the system; your team (or a specialist partner) runs it." },
                        { q: "What is 'Agency Rot' exactly?", a: "The accumulation of technical debt, unverified scripts, and duplicated tracking that slows down your site and your decision-making." },
                      ].map((faq, i) => (
                        <div key={i} className="space-y-[var(--space-4)] group">
                           <h4 className="font-display font-extralight text-[length:var(--type-body-m)] text-[color:var(--color-ink-0)] flex gap-[var(--space-4)]">
                              <span className="text-[color:var(--color-brand)] font-mono">0{i+1}.</span>
                              {faq.q}
                           </h4>
                           <p className="font-body text-[length:var(--type-body-s)] text-[color:var(--color-ink-1)] leading-relaxed pl-[var(--space-8)]">
                              {faq.a}
                           </p>
                           {i < 2 && <Rule className="mt-[var(--space-8)] opacity-50" />}
                        </div>
                      ))}
                   </div>
                </SpecRow>
              </div>
            </div>
          </Container>
        </section>

        {/* 07 · MOTION & SCROLL */}
        <section id="motion-scroll" className="py-[var(--space-9)] border-b border-[var(--color-subtle)] bg-[var(--color-surface-engineer-0)]">
          <Container>
            <SectionHead
              idx="07"
              kicker="Motion · Interaction Protocols"
              title={<>Hardware <span className="accent">Acceleration.</span></>}
              lede="Motion is functional, not decorative. Every transition is anchored to the technical easing ladder (--ease-out-expo)."
            />

            <div className="space-y-[var(--space-8)] mt-[var(--space-8)]">
              <SpecRow label="Link Underline" meta="scale-x | transform-origin | 0.45s" first>
                <div className="flex flex-wrap gap-[var(--space-9)]">
                   <a href="#" className="font-mono text-[length:var(--type-body-s)] text-[color:var(--color-brand)] uppercase tracking-widest relative group">
                      Interactive link
                      <span className="absolute bottom-0 left-0 w-full h-[1px] bg-current scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                   </a>
                   <p className="font-body text-[length:var(--type-body-s)] text-[color:var(--color-ink-2)]">
                      Underlines scale from left to right on hover.
                   </p>
                </div>
              </SpecRow>

              <SpecRow label="Scale Transformations" meta="1.02x scale | 0.5s | ease-out">
                <div className="grid md:grid-cols-2 gap-[var(--space-6)]">
                   <div className="group cursor-pointer">
                      <Card variant="sage" className="transition-all duration-500 group-hover:scale-[1.02] group-hover:border-[var(--color-brand)]/40">
                         <Eyebrow tone="muted">Card Hover</Eyebrow>
                         <p className="mt-[var(--space-4)] font-body text-[length:var(--type-body-s)] text-[color:var(--color-ink-1)]">
                            Subtle 2% scale increase provides immediate feedback without breaking grid flow.
                         </p>
                      </Card>
                   </div>
                   <div className="group cursor-pointer">
                      <Button variant="primary" className="transition-transform duration-300 group-hover:scale-105">
                         Button Pulse
                      </Button>
                   </div>
                </div>
              </SpecRow>
            </div>
          </Container>
        </section>

        {/* 05 · COLOUR INFRASTRUCTURE */}
        <section id="foundation-colour" className="py-[var(--space-9)] border-b border-[var(--color-subtle)] bg-[var(--color-surface-0)]">
          <Container>
            <SectionHead
              idx="05"
              kicker="Foundations · Colour Infrastructure"
              title={<>Strategic <span className="accent">Signal.</span></>}
              lede="The JAi palette is engineered for maximum authority. A dual-register technical ladder anchored by Sage (Warm) and Engineer (Cool) registers. Semantic aliases allow for instant thematic switching."
            />

            {/* BRAND HERO CARD */}
            <div className="relative w-full aspect-[21/9] md:aspect-[3/1] rounded-[var(--radius-card)] bg-[var(--color-brand)] p-[var(--space-8)] flex flex-col justify-between overflow-hidden shadow-2xl mb-[var(--space-9)]">
              <div className="relative z-[var(--z-base)]">
                <p className="font-mono font-bold uppercase text-[length:var(--type-mono-tiny)] tracking-[0.3em] text-[color:var(--color-surface-sage-0)]">Core Brand Signal</p>
                <h3 className="font-display font-extralight text-[length:var(--type-stat-xl)] leading-none tracking-tighter text-[color:var(--color-surface-sage-0)] mt-[var(--space-4)]">
                  #c9d900
                </h3>
              </div>
              <div className="absolute inset-[var(--space-0)] bg-grid opacity-5 pointer-events-none" />
            </div>

            {/* SURFACE LADDERS */}
            <div className="space-y-[var(--space-9)] mb-[var(--space-9)]">
              <div>
                <div className="flex items-end justify-between mb-[var(--space-6)] border-b border-[var(--color-subtle)] pb-[var(--space-4)]">
                   <h4 className="font-display font-extralight text-[length:var(--type-fluid-h3)]">05a · Sage Ladder (Warm)</h4>
                   <p className="font-mono text-[length:var(--type-mono-tiny)] text-[color:var(--color-ink-2)] uppercase tracking-widest">Register A</p>
                </div>
                <p className="font-body text-[length:var(--type-body-xs)] text-[color:var(--color-ink-2)] mb-[var(--space-6)] max-w-[var(--prose-max)]">
                  The primary brand register. Warm, organic grays that feel grounded and human. Used for the default page canvas and core marketing assets.
                </p>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-[var(--space-4)]">
                  <Swatch name="Sage 0" token="--color-surface-sage-0" value="#141411" color="var(--color-surface-sage-0)" />
                  <Swatch name="Sage 1" token="--color-surface-sage-1" value="#1c1c18" color="var(--color-surface-sage-1)" />
                  <Swatch name="Sage 2" token="--color-surface-sage-2" value="#252520" color="var(--color-surface-sage-2)" />
                  <Swatch name="Swatch 3" token="--color-surface-sage-3" value="#2f2f29" color="var(--color-surface-sage-3)" />
                </div>
              </div>

              <div>
                <div className="flex items-end justify-between mb-[var(--space-6)] border-b border-[var(--color-subtle)] pb-[var(--space-4)]">
                   <h4 className="font-display font-extralight text-[length:var(--type-fluid-h3)]">05b · Engineer Ladder (Cool)</h4>
                   <p className="font-mono text-[length:var(--type-mono-tiny)] text-[color:var(--color-ink-2)] uppercase tracking-widest">Register B</p>
                </div>
                <p className="font-body text-[length:var(--type-body-xs)] text-[color:var(--color-ink-2)] mb-[var(--space-6)] max-w-[var(--prose-max)]">
                  The secondary register. Cool, clinical grays for technical documentation, dashboards, and deep-tech case studies.
                </p>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-[var(--space-4)]">
                  <Swatch name="Engineer 0" token="--color-surface-engineer-0" value="#0c0d0f" color="var(--color-surface-engineer-0)" />
                  <Swatch name="Engineer 1" token="--color-surface-engineer-1" value="#141518" color="var(--color-surface-engineer-1)" />
                  <Swatch name="Engineer 2" token="--color-surface-engineer-2" value="#1c1e22" color="var(--color-surface-engineer-2)" />
                  <Swatch name="Engineer 3" token="--color-surface-engineer-3" value="#25282e" color="var(--color-surface-engineer-3)" />
                </div>
              </div>

              <div>
                <div className="flex items-end justify-between mb-[var(--space-6)] border-b border-[var(--color-subtle)] pb-[var(--space-4)]">
                   <h4 className="font-display font-extralight text-[length:var(--type-fluid-h3)]">05c · Semantic Ink</h4>
                   <p className="font-mono text-[length:var(--type-mono-tiny)] text-[color:var(--color-ink-2)] uppercase tracking-widest">Typography Intensity</p>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-[var(--space-4)]">
                  <Swatch name="Ink 0" token="--color-ink-0" value="#f5f5f5" color="var(--color-ink-0)" text />
                  <Swatch name="Ink 1" token="--color-ink-1" value="#d4d4d4" color="var(--color-ink-1)" text />
                  <Swatch name="Ink 2" token="--color-ink-2" value="#a3a3a3" color="var(--color-ink-2)" text />
                  <Swatch name="Ink 3" token="--color-ink-3" value="#525252" color="var(--color-ink-3)" text />
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* 06 · SPACING */}
        <section id="foundation-spacing" className="py-[var(--space-9)] bg-[var(--color-surface-engineer-0)]">
          <Container>
            <SectionHead idx="06" kicker="Foundations · Spacing Ladder" title={<>Fibonacci <span className="accent">Rhythm.</span></>} lede="Non-linear spacing for natural, organic transitions." />
            <div className="space-y-[var(--space-6)] mt-[var(--space-8)]">
              {[
                { token: "--space-1", px: 4, label: "Micro" },
                { token: "--space-2", px: 8, label: "Tight" },
                { token: "--space-3", px: 12, label: "Compact" },
                { token: "--space-4", px: 16, label: "Inline" },
                { token: "--space-5", px: 24, label: "Internal Padding" },
                { token: "--space-6", px: 40, label: "Standard Gutter" },
                { token: "--space-7", px: 64, label: "Component Separation" },
                { token: "--space-8", px: 104, label: "Section Gutter" },
                { token: "--space-9", px: 168, label: "Chapter Transition" },
              ].map((s) => (
                <div key={s.token} className="grid grid-cols-[14rem_1fr_10rem] items-center gap-[var(--space-4)]">
                  <span className="font-mono text-[length:var(--type-mono-xs)] text-[color:var(--color-ink-2)] uppercase tracking-[0.2em]">{s.token}</span>
                  <div className="h-[var(--space-4)] bg-[var(--color-brand)]/20 border-x border-[var(--color-brand)]/40 rounded-[var(--radius-card)]" style={{ width: s.px }} />
                  <span className="font-mono text-[length:var(--type-mono-xs)] text-[color:var(--color-ink-2)] text-right uppercase tracking-[0.1em]">{s.px}px</span>
                </div>
              ))}
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}

function Swatch({ name, token, value, color, text }: { name: string; token: string; value: string; color: string; text?: boolean }) {
  return (
    <div className="rounded-[var(--radius-card)] border border-[var(--color-subtle)] bg-[var(--color-surface-1)] p-[var(--space-4)] aspect-square flex flex-col justify-between overflow-hidden relative shadow-lg">
      <div className={`absolute inset-[var(--space-0)] pointer-events-none ${text ? 'bg-transparent flex items-center justify-center' : ''}`} style={{ background: text ? 'transparent' : color }}>
        {text && <span className="font-display font-extralight text-[length:var(--type-fluid-h2)]" style={{ color }}>Aa</span>}
      </div>
      <div className="relative z-[var(--z-base)] flex flex-col justify-between h-full">
         <p className="font-mono font-bold uppercase text-[length:var(--type-mono-tiny)] tracking-widest text-[color:var(--color-ink-2)] opacity-40">{name}</p>
         <div className="space-y-[var(--space-1)]">
            <p className="font-mono text-[length:var(--type-mono-tiny)] text-[color:var(--color-ink-2)] opacity-40 truncate">{token}</p>
            <p className="font-mono text-[length:var(--type-mono-tiny)] text-[color:var(--color-ink-2)] opacity-40 uppercase">{value}</p>
         </div>
      </div>
    </div>
  );
}
