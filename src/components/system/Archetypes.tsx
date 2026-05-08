"use client";

import { Container, Eyebrow, Button } from "@/components/atoms";
import { Reveal, SplitText } from "./MotionPrimitives";

export function InnerHero({ 
  kicker, 
  title, 
  lede 
}: { 
  kicker: string; 
  title: string; 
  lede: string;
}) {
  return (
    <section className="relative pt-[var(--space-9)] pb-[var(--space-8)] border-b border-[var(--color-subtle)] bg-[var(--color-surface-sage-0)] overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none" />
      <Container className="relative z-[var(--z-base)]">
        <Reveal>
          <Eyebrow>{kicker}</Eyebrow>
        </Reveal>
        
        <SplitText 
          text={title}
          className="mt-[var(--space-5)] font-display font-extralight text-[length:var(--type-fluid-h2)] leading-[1.05] tracking-[-0.04em] text-[color:var(--color-ink-0)] text-balance"
        />

        <Reveal variant="fade-up" delay={0.4}>
          <p className="mt-[var(--space-6)] font-body text-[length:var(--type-body-m)] text-[color:var(--color-ink-1)] leading-relaxed max-w-[var(--prose-max)] text-balance">
            {lede}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}

export function InlineCTA({ 
  title, 
  label, 
  href = "#" 
}: { 
  title: string; 
  label: string; 
  href?: string;
}) {
  return (
    <Reveal variant="fade-up">
      <div className="p-[var(--space-8)] border border-[var(--color-brand)]/20 bg-[var(--color-surface-sage-1)] rounded-[var(--radius-card)] flex flex-col md:flex-row items-center justify-between gap-[var(--space-8)] group hover:border-[var(--color-brand)]/40 transition-all duration-700">
        <h4 className="font-display text-[length:var(--type-fluid-h3)] text-[color:var(--color-ink-0)] leading-tight text-center md:text-left">
          {title}
        </h4>
        <Button variant="tension" size="lg">{label}</Button>
      </div>
    </Reveal>
  );
}
