"use client";

import { Container, Eyebrow } from "@/components/atoms";
import { Reveal, SplitText } from "./MotionPrimitives";

export function TestimonialSection() {
  return (
    <section className="py-[var(--space-9)] border-b border-[var(--color-subtle)] bg-[var(--color-surface-sage-0)] overflow-hidden">
      <Container>
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-[var(--space-9)] items-center">
          <Reveal variant="slide-right">
            <div className="space-y-[var(--space-6)] border-l border-[var(--color-brand)] pl-[var(--space-6)]">
               <div className="space-y-1">
                  <p className="font-display font-extralight text-[length:var(--type-stat-lg)] leading-none text-[color:var(--color-brand)]">42%</p>
                  <p className="font-mono text-[length:var(--type-mono-xs)] text-[color:var(--color-ink-2)] uppercase tracking-widest">CAC Reduction</p>
               </div>
               <div className="space-y-1">
                  <p className="font-display font-extralight text-[length:var(--type-stat-md)] text-[color:var(--color-ink-0)] leading-none">90 days</p>
                  <p className="font-mono text-[length:var(--type-mono-xs)] text-[color:var(--color-ink-2)] uppercase tracking-widest">To Sovereignty</p>
               </div>
            </div>
          </Reveal>

          <div className="space-y-[var(--space-8)]">
            <Reveal>
              <Eyebrow>The Client Voice</Eyebrow>
            </Reveal>
            
            <blockquote className="space-y-[var(--space-7)]">
              <SplitText 
                text="JAi didn't just audit our stack; they rebuilt our understanding of what digital speed actually looks like. The efficiency gains were immediate."
                className="font-editorial italic font-light text-[length:var(--type-body-l)] leading-relaxed text-[color:var(--color-ink-0)]"
              />
              
              <Reveal variant="fade-up" delay={0.8}>
                <footer className="flex items-center gap-[var(--space-5)]">
                  <div className="w-[var(--space-8)] h-[var(--space-8)] rounded-full bg-[var(--color-surface-sage-3)] border border-[var(--color-brand)]/20 flex items-center justify-center font-mono text-[color:var(--color-brand)] text-[length:var(--type-mono-xs)]">TH</div>
                  <div>
                    <p className="font-display font-bold text-[length:var(--type-body-xs)] text-[color:var(--color-ink-0)] uppercase tracking-tighter">Thomas H.</p>
                    <p className="font-mono text-[length:var(--type-mono-tiny)] text-[color:var(--color-ink-2)] uppercase tracking-widest">Managing Director, GLOBAL_RETAIL</p>
                  </div>
                </footer>
              </Reveal>
            </blockquote>
          </div>
        </div>
      </Container>
    </section>
  );
}
