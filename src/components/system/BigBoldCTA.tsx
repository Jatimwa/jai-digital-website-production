"use client";

import { Container, Eyebrow, Button } from "@/components/atoms";
import { Reveal, SplitText, Magnetic } from "./MotionPrimitives";

export function BigBoldCTA() {
  return (
    <section className="relative py-[var(--space-9)] border-b border-[var(--color-brand)]/20 bg-[var(--color-surface-sage-3)] overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
      <Container className="relative z-[var(--z-base)]">
        <div className="flex flex-col items-center text-center max-w-[var(--width-prose)] mx-auto">
          <Reveal variant="fade-up">
            <Eyebrow>The Final Gate</Eyebrow>
          </Reveal>
          
          <SplitText 
            text="Ready to eliminate agency rot?" 
            className="mt-[var(--space-5)] font-display font-extralight text-[length:var(--type-fluid-h1)] leading-[1.0] tracking-[-0.04em] text-[color:var(--color-ink-0)]"
          />

          <Reveal variant="fade-up" delay={0.4}>
            <p className="standfirst mt-[var(--space-7)] text-[color:var(--color-ink-1)]">
              I only take on three audits per month. Secure your diagnostics slot before the next cycle begins. Senior thinking, <span className="accent">zero overhead.</span>
            </p>

            <div className="mt-[var(--space-9)] flex flex-wrap justify-center gap-[var(--space-4)]">
              <Magnetic strength={0.3}>
                <Button variant="tension" size="lg" className="px-[var(--space-9)] py-[var(--space-6)] text-[length:var(--type-body-m)]">
                  Start Technical Audit
                </Button>
              </Magnetic>
              <Button variant="outline" size="lg">Book 15-Min Briefing</Button>
            </div>
            
            <p className="mt-[var(--space-8)] font-mono text-[length:var(--type-mono-xs)] text-[color:var(--color-ink-2)] uppercase tracking-[0.3em]">
              Next Available Slot: June 2026
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
