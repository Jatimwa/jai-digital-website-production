"use client";

import { Container, Eyebrow } from "@/components/atoms";
import { Reveal } from "./MotionPrimitives";

export function SoftwareShowcase() {
  return (
    <section className="py-[var(--space-9)] border-b border-[var(--color-subtle)] bg-[var(--color-surface-engineer-0)]">
      <Container>
        <div className="grid lg:grid-cols-2 gap-[var(--space-9)] items-center">
          <div className="space-y-[var(--space-7)]">
            <Reveal>
              <Eyebrow tone="muted">Technical Infrastructure</Eyebrow>
              <h2 className="mt-[var(--space-5)] font-display font-extralight text-[length:var(--type-fluid-h2)] leading-[1.05] tracking-[-0.04em] text-[color:var(--color-ink-0)]">
                The Zero-Rot <br /><span className="accent">Workbench.</span>
              </h2>
              <p className="mt-[var(--space-6)] font-body text-[length:var(--type-body-m)] text-[color:var(--color-ink-1)] leading-relaxed">
                I build using a locked primitive architecture. No one-off styles. No hidden technical debt. Every component is audited for performance and accessibility before it hits your production branch.
              </p>
            </Reveal>

            <div className="grid grid-cols-2 gap-[var(--space-6)] pt-[var(--space-4)]">
              {[
                { label: "API Latency", value: "<40ms", signal: "success" },
                { label: "Build Speed", value: "1.2s", signal: "default" },
                { label: "Type Safety", value: "100%", signal: "success" },
                { label: "A11y Score", value: "98/100", signal: "default" },
              ].map((stat, i) => (
                <Reveal key={stat.label} variant="fade-up" delay={i * 0.1}>
                  <div className="p-[var(--space-4)] border border-[var(--color-subtle)] bg-[var(--color-surface-engineer-1)] rounded-[var(--radius-card)] group hover:border-[var(--color-brand)]/40 transition-colors">
                     <p className="font-mono text-[length:var(--type-mono-tiny)] text-[color:var(--color-ink-2)] uppercase tracking-widest mb-1">{stat.label}</p>
                     <p className={`font-display font-bold text-[length:var(--type-fluid-h3)] ${stat.signal === 'success' ? 'text-[color:var(--color-brand)]' : 'text-[color:var(--color-ink-0)]'}`}>
                       {stat.value}
                     </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal variant="slide-left" className="relative aspect-square lg:aspect-auto lg:h-[600px] bg-[var(--color-surface-engineer-1)] border border-[var(--color-subtle)] rounded-[var(--radius-card)] overflow-hidden">
            <div className="absolute inset-0 bg-grid opacity-20" />
            <div className="absolute inset-[var(--space-8)] border border-[var(--color-subtle)] bg-[var(--color-surface-engineer-0)]/50 backdrop-blur-sm rounded-[var(--radius-card)] flex flex-col p-[var(--space-6)]">
               <div className="flex gap-2 mb-[var(--space-6)]">
                  <div className="w-3 h-3 rounded-full bg-[var(--color-error)]/20" />
                  <div className="w-3 h-3 rounded-full bg-[var(--color-warning)]/20" />
                  <div className="w-3 h-3 rounded-full bg-[var(--color-success)]/20" />
               </div>
               <div className="flex-1 space-y-[var(--space-4)]">
                  <div className="h-4 w-3/4 bg-[var(--color-surface-engineer-3)] rounded animate-pulse" />
                  <div className="h-4 w-1/2 bg-[var(--color-surface-engineer-3)] rounded animate-pulse delay-75" />
                  <div className="h-4 w-5/6 bg-[var(--color-surface-engineer-3)] rounded animate-pulse delay-150" />
               </div>
               <div className="mt-auto h-[var(--size-input-h)] bg-[var(--color-brand)]/10 border border-[var(--color-brand)]/20 rounded flex items-center justify-center font-mono text-[length:var(--type-mono-xs)] text-[color:var(--color-brand)] uppercase tracking-widest">
                  [ System Active ]
               </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
