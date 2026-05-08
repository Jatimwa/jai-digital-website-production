"use client";

import { Container, Eyebrow, Button } from "@/components/atoms";
import { Reveal, SplitText } from "./MotionPrimitives";

export function AboutBio() {
  return (
    <section className="py-[var(--space-9)] border-b border-[var(--color-subtle)] bg-[var(--color-surface-sage-0)] overflow-hidden">
      <Container>
        <div className="grid lg:grid-cols-[1fr_2fr] gap-[var(--space-9)] items-start">
          <Reveal variant="slide-right">
             <div className="aspect-square bg-[var(--color-surface-sage-1)] rounded-[var(--radius-card)] border border-[var(--color-subtle)] relative overflow-hidden group">
                <div className="absolute inset-0 bg-grid opacity-20 transition-opacity group-hover:opacity-40" />
                <div className="absolute inset-0 flex items-center justify-center font-mono text-[length:var(--type-mono-xs)] text-[color:var(--color-ink-3)] uppercase tracking-widest">
                   [ JAMES_WATKINS ]
                </div>
             </div>
          </Reveal>

          <div className="space-y-[var(--space-8)]">
            <Reveal>
              <Eyebrow>The Practitioner</Eyebrow>
              <h2 className="mt-[var(--space-5)] font-display font-extralight text-[length:var(--type-fluid-h2)] leading-[1.05] tracking-[-0.04em] text-[color:var(--color-ink-0)]">
                James <span className="accent">Watkins.</span>
              </h2>
            </Reveal>

            <SplitText 
              text="20 years in the algorithm. 7 years at scale. 0 agency rot."
              className="standfirst text-[color:var(--color-ink-0)]"
            />

            <Reveal variant="fade-up" delay={0.4} className="space-y-[var(--space-6)] max-w-[var(--prose-max)]">
              <p className="font-body text-[length:var(--type-body-m)] text-[color:var(--color-ink-1)] leading-relaxed">
                I don't lead teams of juniors. I don't "leverage synergies." I build technical marketing infrastructure for high-growth SMEs who need senior-practitioner depth without the overhead of a traditional agency.
              </p>
              <p className="font-body text-[length:var(--type-body-m)] text-[color:var(--color-ink-1)] leading-relaxed">
                My work is forensic, systematic, and proven. I only take on three audits per month to ensure every build hits the JAi technical bar.
              </p>
              
              <div className="pt-[var(--space-6)] border-t border-[var(--color-subtle)] flex flex-wrap gap-[var(--space-6)]">
                 <div className="space-y-1">
                    <p className="font-mono text-[length:var(--type-mono-xs)] text-[color:var(--color-brand)] uppercase tracking-widest">Experience</p>
                    <p className="font-display font-bold text-[length:var(--type-body-l)] text-[color:var(--color-ink-0)] tracking-tighter">20+ YEARS</p>
                 </div>
                 <div className="space-y-1">
                    <p className="font-mono text-[length:var(--type-mono-xs)] text-[color:var(--color-brand)] uppercase tracking-widest">Optimization</p>
                    <p className="font-display font-bold text-[length:var(--type-body-l)] text-[color:var(--color-ink-0)] tracking-tighter">£1.2M SPEND</p>
                 </div>
                 <div className="space-y-1">
                    <p className="font-mono text-[length:var(--type-mono-xs)] text-[color:var(--color-brand)] uppercase tracking-widest">Sovereignty</p>
                    <p className="font-display font-bold text-[length:var(--type-body-l)] text-[color:var(--color-ink-0)] tracking-tighter">100% DEPTH</p>
                 </div>
              </div>

              <div className="pt-[var(--space-4)]">
                 <Button variant="outline">View Full Manifesto</Button>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
