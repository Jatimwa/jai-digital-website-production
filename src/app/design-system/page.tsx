import type { Metadata } from "next";
import { Container, Eyebrow, Button, Badge, Rule, Input, Card } from "@/components/atoms";
import { SiteHeader, Footer, SectionHead, SpecRow } from "@/components/system";
import { BigBoldCTA } from "@/components/system/BigBoldCTA";
import { TestimonialSection } from "@/components/system/TestimonialSection";
import { ServiceGrid } from "@/components/system/ServiceGrid";
import { SoftwareShowcase } from "@/components/system/SoftwareShowcase";
import { AboutBio } from "@/components/system/AboutBio";
import { CaseStudyGrid } from "@/components/system/CaseStudyGrid";
import { FAQBlock } from "@/components/system/FAQBlock";
import { KineticStance } from "@/components/system/KineticStance";
import { PinnedPhilosophy } from "@/components/system/PinnedPhilosophy";
import { StatStrip } from "@/components/system/StatStrip";
import { InnerHero, InlineCTA } from "@/components/system/Archetypes";
import { GenerativeInterlude } from "@/components/system/GenerativeInterlude";
import { Reveal, SplitText } from "@/components/system/MotionPrimitives";
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
  { id: "foundation-colour", label: "Colour" },
  { id: "foundation-spacing", label: "Spacing" },
  { id: "atoms-functional", label: "Atoms" },
  { id: "patterns-sections", label: "Sections" },
];

export default function DesignSystemPage() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="bg-[var(--color-surface-0)] min-h-screen">
        {/* HERO (Zone B - Item 1) */}
        <section className="relative min-h-[80vh] flex items-center overflow-hidden border-b border-[var(--color-subtle)]">
          <div className="absolute inset-[var(--space-0)] bg-grid pointer-events-none opacity-20" aria-hidden />
          <Container className="relative pt-[var(--space-9)] pb-[var(--space-9)]">
            <Reveal variant="fade-up">
              <Eyebrow>JAi Digital · Workbench · v4.0</Eyebrow>
            </Reveal>
            <h1 className="mt-[var(--space-5)] font-display font-extralight text-[length:var(--type-fluid-h1)] leading-[1.0] tracking-[-0.04em] text-balance max-w-[var(--prose-max)]">
              <SplitText text="Systematic." className="inline" /> <br />
              <span className="accent"><SplitText text="Zero Rot." className="inline" /></span>
            </h1>
            <Reveal variant="fade-up" delay={0.2}>
              <p className="standfirst mt-[var(--space-6)] max-w-[var(--prose-max)] text-[color:var(--color-ink-0)]">
                This is the production-grade engine room for the JAi brand. No hardcoding. No legacy fragments. Built for senior digital practitioners who value structural integrity.
              </p>
            </Reveal>

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

        {/* Zone A - Foundations */}

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

        {/* 02 · COLOUR INFRASTRUCTURE */}
        <section id="foundation-colour" className="py-[var(--space-9)] border-b border-[var(--color-subtle)] bg-[var(--color-surface-0)]">
          <Container>
            <SectionHead
              idx="02"
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

        {/* 03 · SPACING */}
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
                <div key={s.token} className="grid grid-cols-[var(--grid-ratio-spacing)] items-center gap-[var(--space-4)]">
                  <span className="font-mono text-[length:var(--type-mono-xs)] text-[color:var(--color-ink-2)] uppercase tracking-[0.2em]">{s.token}</span>
                  <div className="h-[var(--space-4)] bg-[var(--color-brand)]/20 border-x border-[var(--color-brand)]/40 rounded-[var(--radius-card)]" style={{ width: s.px }} />
                  <span className="font-mono text-[length:var(--type-mono-xs)] text-[color:var(--color-ink-2)] text-right uppercase tracking-[0.1em]">{s.px}px</span>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* 04 · ATOMS */}
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
                      className="w-full bg-[var(--color-surface-sage-1)] border border-[var(--color-subtle)] rounded-[var(--radius-card)] p-[var(--space-4)] font-body text-[length:var(--type-body-s)] text-[color:var(--color-ink-1)] focus:border-[var(--color-brand)] transition-all min-h-[var(--min-h-textarea)] outline-none"
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
            </div>
          </Container>
        </section>

        {/* Zone B - Section Patterns */}
        <section id="patterns-sections">
          <StatStrip />
          
          <GenerativeInterlude />

          <div className="py-[var(--space-9)] border-b border-[var(--color-subtle)] bg-[var(--color-surface-0)]">
            <Container>
              <Reveal>
                <div className="flex items-center gap-[var(--space-4)] mb-[var(--space-8)]">
                  <Eyebrow tone="muted">04 · Service Infrastructure</Eyebrow>
                  <Badge variant="outline">Service Grid Pattern</Badge>
                </div>
              </Reveal>
            </Container>
            <ServiceGrid />
          </div>

          <div className="py-[var(--space-9)] border-b border-[var(--color-subtle)] bg-[var(--color-surface-0)]">
            <Container>
              <Reveal>
                <div className="flex items-center gap-[var(--space-4)] mb-[var(--space-8)]">
                  <Eyebrow tone="muted">05 · Technical Workbench</Eyebrow>
                  <Badge variant="outline">Software Showcase Pattern</Badge>
                </div>
              </Reveal>
            </Container>
            <SoftwareShowcase />
          </div>

          <div className="py-[var(--space-9)] border-b border-[var(--color-subtle)] bg-[var(--color-surface-0)]">
            <Container>
              <Reveal>
                <div className="flex items-center gap-[var(--space-4)] mb-[var(--space-8)]">
                  <Eyebrow tone="muted">06 · Kinetic Stance</Eyebrow>
                  <Badge variant="outline">Slide-in Pattern</Badge>
                </div>
              </Reveal>
            </Container>
            <KineticStance />
          </div>

          <div className="py-[var(--space-9)] border-b border-[var(--color-subtle)] bg-[var(--color-surface-0)]">
            <Container>
              <Reveal>
                <div className="flex items-center gap-[var(--space-4)] mb-[var(--space-8)]">
                  <Eyebrow tone="muted">07 · Pinned Philosophy</Eyebrow>
                  <Badge variant="outline">Scroll Pin Pattern</Badge>
                </div>
              </Reveal>
            </Container>
            <PinnedPhilosophy />
          </div>

          <div className="py-[var(--space-9)] border-b border-[var(--color-subtle)] bg-[var(--color-surface-0)]">
            <Container>
              <Reveal>
                <div className="flex items-center gap-[var(--space-4)] mb-[var(--space-8)]">
                  <Eyebrow tone="muted">08 · Client Voice</Eyebrow>
                  <Badge variant="outline">Testimonial Pattern</Badge>
                </div>
              </Reveal>
            </Container>
            <TestimonialSection />
          </div>

          <div className="py-[var(--space-9)] border-b border-[var(--color-subtle)] bg-[var(--color-surface-0)]">
            <Container>
              <Reveal>
                <div className="flex items-center gap-[var(--space-4)] mb-[var(--space-8)]">
                  <Eyebrow tone="muted">09 · Proven at Scale</Eyebrow>
                  <Badge variant="outline">Case Study Grid Pattern</Badge>
                </div>
              </Reveal>
            </Container>
            <CaseStudyGrid />
          </div>

          <div className="py-[var(--space-9)] border-b border-[var(--color-subtle)] bg-[var(--color-surface-0)]">
            <Container>
              <Reveal>
                <div className="flex items-center gap-[var(--space-4)] mb-[var(--space-8)]">
                  <Eyebrow tone="muted">10 · Practitioner Bio</Eyebrow>
                  <Badge variant="outline">Profile Pattern</Badge>
                </div>
              </Reveal>
            </Container>
            <AboutBio />
          </div>

          <div className="py-[var(--space-9)] border-b border-[var(--color-subtle)] bg-[var(--color-surface-0)]">
            <Container>
              <Reveal>
                <div className="flex items-center gap-[var(--space-4)] mb-[var(--space-8)]">
                  <Eyebrow tone="muted">11 · Forensic Clarity</Eyebrow>
                  <Badge variant="outline">FAQ Accordion Pattern</Badge>
                </div>
              </Reveal>
            </Container>
            <FAQBlock />
          </div>

          <BigBoldCTA />
        </section>

        {/* 11 · ARCHETYPES (Zone A style documentation) */}
        <section className="py-[var(--space-9)] border-b border-[var(--color-subtle)] bg-[var(--color-surface-0)]">
           <Container>
              <Reveal>
                <SectionHead
                  idx="11"
                  kicker="System · Page Archetypes"
                  title={<>Reusable <span className="accent">Infrastructure.</span></>}
                  lede="Atomic units and page-level archetypes for rapid, consistent deployment."
                />
              </Reveal>

              <div className="space-y-[var(--space-8)] mt-[var(--space-8)]">
                <SpecRow label="Inner Hero Archetype" meta="Eyebrow + Fluid H2 + Lede" first>
                   <div className="border border-[var(--color-subtle)] rounded-[var(--radius-card)] overflow-hidden">
                      <InnerHero 
                        kicker="Service Detail" 
                        title="Technical Infrastructure Audit." 
                        lede="We find the rot that agencies hide in the shadows of the build."
                      />
                   </div>
                </SpecRow>

                <SpecRow label="Inline CTA Archetype" meta="Horizontal | High-Visibility">
                   <InlineCTA 
                     title="Ready to fix your engine?" 
                     label="Book Briefing" 
                   />
                </SpecRow>
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
