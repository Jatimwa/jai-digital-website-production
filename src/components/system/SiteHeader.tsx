import { Container } from "@/components/atoms";
import Link from "next/link";

export function SiteHeader() {
  const navItems = ["Services", "Case Studies", "Manifesto"];

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-[var(--color-subtle)] bg-[var(--color-surface-0)] backdrop-blur-md opacity-90">
      <Container className="h-[var(--space-7)] flex items-center justify-between">
        {/* Wordmark */}
        <Link href="/" className="font-display font-extralight text-[length:var(--type-body-m)] tracking-tighter hover:opacity-70 transition-opacity group">
          JAi <span className="accent transition-all group-hover:tracking-normal">Digital</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-[var(--space-8)]">
          {navItems.map((item) => (
            <Link 
              key={item} 
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="font-mono font-bold uppercase text-[length:var(--type-body-xs)] tracking-[0.2em] text-[color:var(--color-ink-2)] hover:text-[color:var(--color-brand)] transition-colors underline-reveal"
            >
              {item}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
}
