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
              lede="Thin display weights signal technical authority. The system employs a hybrid approach: geometric sans for infrastructure, light italic for pause."
            />

            <div className="space-y-[var(--space-8)] mt-[var(--space-8)]">
              <SpecRow label="H1 / Hero" meta="Unbounded 200" first>
                <h2 className="font-display font-extralight text-[length:var(--type-fluid-h1)] leading-[1.0] tracking-[-0.04em]">
                  Human Insight. <span className="accent">AI Speed.</span>
                </h2>
              </SpecRow>

              <SpecRow label="H2 / Section" meta="Unbounded 200">
                <h3 className="font-display font-extralight text-[length:var(--type-fluid-h2)] leading-[1.05] tracking-[-0.04em]">
                  Twenty years. <span className="accent">Seven at scale.</span>
                </h3>
              </SpecRow>

              <SpecRow label="Standfirst" meta="Newsreader 300">
                <p className="standfirst text-[color:var(--color-ink-0)]">
                  If I cannot help you, I will tell you directly. Diagnostics before prescriptions.
                </p>
              </SpecRow>

              <SpecRow label="Body" meta="Geist 400 · 18px Floor">
                <p className="font-body text-[length:var(--type-body-s)] leading-relaxed text-[color:var(--color-ink-1)] max-w-[var(--prose-max)]">
                  Senior digital marketing consultancy for UK SMEs. 20 years in the algorithm. Not an agency. A senior practitioner building infrastructure.
                </p>
              </SpecRow>
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
              <SpecRow label="Button Primitive" meta="variants: primary | secondary | tension | outline" first>
                <div className="flex flex-wrap items-center gap-[var(--space-6)]">
                  <Button variant="primary">Primary Action</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="tension">The Statement</Button>
                  <Button variant="outline">Outline</Button>
                </div>
              </SpecRow>

              <SpecRow label="Badge Units" meta="variants: default | signal | outline | destructive">
                <div className="flex flex-wrap items-center gap-[var(--space-4)]">
                  <Badge>Active</Badge>
                  <Badge variant="signal">Signal Badge</Badge>
                  <Badge variant="outline">Metadata</Badge>
                  <Badge variant="destructive">Critical Error</Badge>
                </div>
              </SpecRow>

              <SpecRow label="Input Primitive" meta="Type: Technical Minimal">
                <div className="max-w-[var(--prose-max)]">
                  <Input placeholder="Enter technical requirement..." />
                </div>
              </SpecRow>

              <SpecRow label="Card Base" meta="variants: sage | engineer | elevated">
                <div className="grid md:grid-cols-2 gap-[var(--space-6)]">
                  <Card variant="sage">
                    <Eyebrow tone="muted" className="mb-[var(--space-4)]">Sage Register</Eyebrow>
                    <p className="font-display text-[length:var(--type-fluid-h3)] mb-[var(--space-4)] text-[color:var(--color-ink-0)]">Philosophy Card</p>
                    <Button variant="outline" size="sm">Learn More</Button>
                  </Card>
                  <Card variant="engineer">
                    <Eyebrow tone="muted" className="mb-[var(--space-4)]">Engineer Register</Eyebrow>
                    <p className="font-display text-[length:var(--type-fluid-h3)] mb-[var(--space-4)] text-[color:var(--color-ink-0)]">Infrastructure Card</p>
                    <Button variant="primary" size="sm">View Specs</Button>
                  </Card>
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
              lede="The JAi palette is engineered for maximum authority. A 9-token technical ladder anchored by Sage and Engineer registers."
            />

            {/* BRAND HERO CARD */}
            <div className="relative w-full aspect-[21/9] md:aspect-[3/1] rounded-[var(--radius-card)] bg-[var(--color-brand)] p-[var(--space-8)] flex flex-col justify-between overflow-hidden shadow-2xl mb-[var(--space-9)]">
              <div className="relative z-10">
                <p className="font-mono font-bold uppercase text-[length:var(--type-mono-tiny)] tracking-[0.3em] text-[color:var(--color-surface-sage-0)]">Brand</p>
                <h3 className="font-display font-extralight text-[length:var(--type-stat-xl)] leading-none tracking-tighter text-[color:var(--color-surface-sage-0)] mt-[var(--space-4)]">
                  #c9d900
                </h3>
              </div>
              <div className="absolute inset-[var(--space-0)] bg-grid opacity-5 pointer-events-none" />
            </div>

            {/* SURFACE LADDERS */}
            <div className="space-y-[var(--space-9)] mb-[var(--space-9)]">
              <div>
                <h4 className="font-display font-extralight text-[length:var(--type-fluid-h3)] mb-[var(--space-6)] border-b border-[var(--color-subtle)] pb-[var(--space-4)]">05a · Sage Ladder (Warm)</h4>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-[var(--space-4)]">
                  <Swatch name="Sage 0" token="--color-surface-sage-0" value="#141411" color="var(--color-surface-sage-0)" />
                  <Swatch name="Sage 1" token="--color-surface-sage-1" value="#1c1c18" color="var(--color-surface-sage-1)" />
                  <Swatch name="Sage 2" token="--color-surface-sage-2" value="#252520" color="var(--color-surface-sage-2)" />
                  <Swatch name="Sage 3" token="--color-surface-sage-3" value="#2f2f29" color="var(--color-surface-sage-3)" />
                </div>
              </div>

              <div>
                <h4 className="font-display font-extralight text-[length:var(--type-fluid-h3)] mb-[var(--space-6)] border-b border-[var(--color-subtle)] pb-[var(--space-4)]">05b · Engineer Ladder (Cool)</h4>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-[var(--space-4)]">
                  <Swatch name="Engineer 0" token="--color-surface-engineer-0" value="#0c0d0f" color="var(--color-surface-engineer-0)" />
                  <Swatch name="Engineer 1" token="--color-surface-engineer-1" value="#141518" color="var(--color-surface-engineer-1)" />
                  <Swatch name="Engineer 2" token="--color-surface-engineer-2" value="#1c1e22" color="var(--color-surface-engineer-2)" />
                  <Swatch name="Engineer 3" token="--color-surface-engineer-3" value="#25282e" color="var(--color-surface-engineer-3)" />
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* 06 · SPACING */}
        <section id="foundation-spacing" className="py-[var(--space-9)] bg-[var(--color-surface-engineer-0)]">
          <Container>
            <SectionHead idx="06" kicker="Foundations · Spacing Ladder" title={<>Fibonacci <span className="accent">Rhythm.</span></>} lede="Non-linear spacing." />
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

function Swatch({ name, token, value, color }: { name: string; token: string; value: string; color: string }) {
  return (
    <div className="rounded-[var(--radius-card)] border border-[var(--color-subtle)] bg-[var(--color-surface-1)] p-[var(--space-4)] aspect-square flex flex-col justify-between overflow-hidden relative shadow-lg">
      <div className="absolute inset-[var(--space-0)] pointer-events-none" style={{ background: color }} />
      <div className="relative z-10 flex flex-col justify-between h-full">
         <p className="font-mono font-bold uppercase text-[length:var(--type-mono-tiny)] tracking-widest text-[color:var(--color-ink-2)] opacity-40">{name}</p>
         <div className="space-y-[var(--space-1)]">
            <p className="font-mono text-[length:var(--type-mono-tiny)] text-[color:var(--color-ink-2)] opacity-40 truncate">{token}</p>
            <p className="font-mono text-[length:var(--type-mono-tiny)] text-[color:var(--color-ink-2)] opacity-40 uppercase">{value}</p>
         </div>
      </div>
    </div>
  );
}
