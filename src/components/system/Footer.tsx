import { Container, Rule, Eyebrow } from "@/components/atoms";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-[var(--space-9)] bg-[var(--color-surface-engineer-0)] border-t border-[var(--color-subtle)]">
      <Container>
        <div className="grid md:grid-cols-[2fr_1fr_1fr] gap-[var(--space-8)] mb-[var(--space-9)]">
          <div className="space-y-[var(--space-6)]">
            <div className="font-display font-extralight text-[length:var(--type-body-l)] tracking-tighter">
              JAi <span className="accent">Digital</span>
            </div>
            <p className="font-body text-[length:var(--type-body-s)] text-[color:var(--color-ink-2)] max-w-[var(--width-narrow)] leading-relaxed">
              Technical consultancy for UK SMEs. Senior-practitioner depth. Zero agency rot.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-[var(--space-8)]">
            <div className="space-y-[var(--space-4)]">
              <Eyebrow tone="muted">Navigation</Eyebrow>
              <ul className="space-y-[var(--space-2)] font-mono text-[length:var(--type-mono-xs)] uppercase tracking-widest text-[color:var(--color-ink-2)]">
                <li><a href="#" className="hover:text-[color:var(--color-brand)] transition-colors">Services</a></li>
                <li><a href="#" className="hover:text-[color:var(--color-brand)] transition-colors">Case Studies</a></li>
                <li><a href="#" className="hover:text-[color:var(--color-brand)] transition-colors">Manifesto</a></li>
              </ul>
            </div>
            <div className="space-y-[var(--space-4)]">
              <Eyebrow tone="muted">Authority</Eyebrow>
              <ul className="space-y-[var(--space-2)] font-mono text-[length:var(--type-mono-xs)] uppercase tracking-widest text-[color:var(--color-ink-2)]">
                <li><a href="#" className="hover:text-[color:var(--color-brand)] transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-[color:var(--color-brand)] transition-colors">Design System</a></li>
                <li><a href="#" className="hover:text-[color:var(--color-brand)] transition-colors">Legal</a></li>
              </ul>
            </div>
          </div>
        </div>

        <Rule tone="subtle" className="mb-[var(--space-6)]" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-[var(--space-4)] font-mono text-[length:var(--type-mono-tiny)] uppercase tracking-[0.3em] text-[color:var(--color-ink-3)]">
          <p>© {year} JAi DIGITAL LTD · CARDIFF, UK</p>
          <p>ESTABLISHED 2025 · SENIOR CONSULTANCY</p>
        </div>
      </Container>
    </footer>
  );
}
