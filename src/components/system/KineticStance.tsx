"use client";

import { Container, Eyebrow } from "@/components/atoms";
import { Reveal } from "./MotionPrimitives";

export function KineticStance() {
  const takeOn = [
    "SMEs with £1M+ revenue ready for technical maturity.",
    "Complex marketing-ops audits and stack refactors.",
    "Direct founder-to-practitioner relationships.",
    "Projects where 'Senior' means 20 years, not 2."
  ];

  const avoid = [
    "B2C e-commerce startups with zero budget.",
    "Logo design or 'purely creative' agency work.",
    "Committees, middle-management, and corporate bloat.",
    "Anything requiring 'leverage' or 'synergy' in the brief."
  ];

  return (
    <section className="py-[var(--space-9)] border-b border-[var(--color-subtle)] bg-[var(--color-surface-sage-0)] overflow-hidden">
      <Container>
        <div className="grid lg:grid-cols-2 gap-[var(--space-9)]">
          {/* TAKE ON */}
          <div className="space-y-[var(--space-7)]">
            <Reveal variant="fade-up">
              <div className="flex items-center gap-[var(--space-3)] mb-[var(--space-6)]">
                <div className="w-2 h-2 rounded-full bg-[var(--color-brand)]" />
                <Eyebrow>What I take on</Eyebrow>
              </div>
            </Reveal>
            <div className="space-y-[var(--space-5)]">
              {takeOn.map((item, i) => (
                <Reveal key={i} variant="slide-right" delay={i * 0.1}>
                  <div className="p-[var(--space-5)] border border-[var(--color-subtle)] bg-[var(--color-surface-sage-1)] rounded-[var(--radius-card)] hover:border-[var(--color-brand)]/40 transition-colors">
                    <p className="font-body text-[length:var(--type-body-s)] text-[color:var(--color-ink-0)] leading-relaxed">
                      {item}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* AVOID */}
          <div className="space-y-[var(--space-7)]">
            <Reveal variant="fade-up">
              <div className="flex items-center gap-[var(--space-3)] mb-[var(--space-6)]">
                <div className="w-2 h-2 rounded-full bg-[var(--color-error)]" />
                <Eyebrow tone="muted">What I avoid</Eyebrow>
              </div>
            </Reveal>
            <div className="space-y-[var(--space-5)]">
              {avoid.map((item, i) => (
                <Reveal key={i} variant="slide-left" delay={i * 0.1}>
                  <div className="p-[var(--space-5)] border border-[var(--color-subtle)] bg-[var(--color-surface-engineer-1)] rounded-[var(--radius-card)] hover:border-[var(--color-error)]/40 transition-colors">
                    <p className="font-body text-[length:var(--type-body-s)] text-[color:var(--color-ink-2)] leading-relaxed">
                      {item}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
