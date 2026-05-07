"use client";

import { Container, Rule, Eyebrow } from "@/components/atoms";

export function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="py-[var(--space-9)] bg-[var(--color-surface-engineer)] border-t border-[var(--color-subtle)]">
      <Container>
        <div className="grid md:grid-cols-2 gap-[var(--space-8)] mb-[var(--space-8)]">
          <div className="space-y-[var(--space-6)]">
            <h2 className="font-display font-extralight text-[length:var(--type-fluid-h2)] leading-none tracking-tight">
              Ready to <span className="accent italic">Engineer</span> your growth?
            </h2>
            <p className="standfirst max-w-md">
              Senior digital marketing consultancy for UK SMEs. No agencies. Just high-performance infrastructure.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <Eyebrow tone="muted">Navigation</Eyebrow>
              <ul className="space-y-2 font-mono text-[12px] uppercase tracking-widest text-[color:var(--color-ink-2)]">
                <li><a href="#" className="hover:text-[color:var(--color-brand)]">Services</a></li>
                <li><a href="#" className="hover:text-[color:var(--color-brand)]">Case Studies</a></li>
                <li><a href="#" className="hover:text-[color:var(--color-brand)]">Manifesto</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <Eyebrow tone="muted">Authority</Eyebrow>
              <ul className="space-y-2 font-mono text-[12px] uppercase tracking-widest text-[color:var(--color-ink-2)]">
                <li><a href="#" className="hover:text-[color:var(--color-brand)]">LinkedIn</a></li>
                <li><a href="#" className="hover:text-[color:var(--color-brand)]">Design System</a></li>
                <li><a href="#" className="hover:text-[color:var(--color-brand)]">Legal</a></li>
              </ul>
            </div>
          </div>
        </div>

        <Rule tone="subtle" className="mb-[var(--space-6)]" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-[10px] uppercase tracking-[0.3em] text-[color:var(--color-ink-3)]">
          <p>© {year} JAi DIGITAL LTD · CARDIFF, UK</p>
          <p>ESTABLISHED 2025 · SENIOR CONSULTANCY</p>
        </div>
      </Container>
    </footer>
  );
}
