"use client";

import { Container, Eyebrow, Badge, Button } from "@/components/atoms";
import { Reveal } from "./MotionPrimitives";

export function CaseStudyGrid() {
  const cases = [
    {
      title: "Eliminating Agency Rot",
      desc: "A London-based fintech disruptor was bleeding £40k/month in technical debt. We refactored the entire stack in 90 days.",
      tags: ["Fintech", "Audit"],
      stats: { val: "42%", label: "CAC Reduction" },
      size: "large"
    },
    {
      title: "Global Scale Optimization",
      desc: "Performance infrastructure for a £1.2M ad spend.",
      tags: ["Scale", "Ops"],
      stats: { val: "£480k", label: "Annual Saving" },
      size: "small"
    }
  ];

  return (
    <section className="py-[var(--space-9)] border-b border-[var(--color-subtle)] bg-[var(--color-surface-sage-0)]">
      <Container>
        <Reveal>
          <Eyebrow className="mb-[var(--space-6)]">Case Studies</Eyebrow>
          <h2 className="font-display font-extralight text-[length:var(--type-fluid-h2)] leading-[1.05] tracking-[-0.04em] text-[color:var(--color-ink-0)] mb-[var(--space-8)]">
            Proven <span className="accent">at Scale.</span>
          </h2>
        </Reveal>

        <div className="grid lg:grid-cols-3 gap-[var(--space-6)]">
          {cases.map((c, i) => (
            <Reveal key={c.title} variant="fade-up" delay={i * 0.1} className={c.size === 'large' ? 'lg:col-span-2' : ''}>
              <div className="group relative border border-[var(--color-subtle)] bg-[var(--color-surface-sage-1)] rounded-[var(--radius-card)] overflow-hidden h-full hover:border-[var(--color-brand)]/40 transition-all duration-700 hover:shadow-2xl hover:-translate-y-1">
                 <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
                 <div className="p-[var(--space-8)] h-full flex flex-col justify-between relative z-[var(--z-base)]">
                    <div>
                       <div className="flex gap-[var(--space-2)] mb-[var(--space-6)]">
                          {c.tags.map(t => <Badge key={t} variant="outline">{t}</Badge>)}
                       </div>
                       <h3 className={`font-display font-extralight ${c.size === 'large' ? 'text-[length:var(--type-fluid-h2)]' : 'text-[length:var(--type-fluid-h3)]'} text-[color:var(--color-ink-0)] mb-[var(--space-4)] leading-tight`}>
                          {c.title}
                       </h3>
                       <p className="font-body text-[length:var(--type-body-m)] text-[color:var(--color-ink-1)] leading-relaxed max-w-[var(--prose-max)]">
                          {c.desc}
                       </p>
                    </div>
                    
                    <div className={`mt-[var(--space-9)] flex ${c.size === 'large' ? 'flex-row items-end justify-between' : 'flex-col gap-[var(--space-6)]'}`}>
                       <div className="space-y-1">
                          <p className="font-display font-extralight text-[length:var(--type-stat-md)] text-[color:var(--color-brand)] leading-none">{c.stats.val}</p>
                          <p className="font-mono text-[length:var(--type-mono-xs)] text-[color:var(--color-ink-2)] uppercase tracking-widest">{c.stats.label}</p>
                       </div>
                       <Button variant="primary" size="sm" className="w-fit">View Technical Case Study</Button>
                    </div>
                 </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
