import { Container, Button } from "@/components/atoms";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-[var(--color-surface-2)] bg-[var(--color-surface-sage)]/80 backdrop-blur-md">
      <Container className="h-[var(--space-7)] flex items-center justify-between">
        {/* Wordmark */}
        <Link href="/" className="font-display font-extralight text-xl tracking-tighter hover:opacity-70 transition-opacity group">
          JAi <span className="accent transition-all group-hover:tracking-normal">Digital</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-[var(--space-6)]">
          {["Services", "Infrastructure", "Case Studies", "Contact"].map((item) => (
            <Link 
              key={item} 
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="font-mono font-bold uppercase text-[14px] tracking-[0.2em] text-[color:var(--color-ink-2)] hover:text-[color:var(--color-brand)] transition-colors underline-reveal"
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="flex items-center">
          <Button variant="primary">
            Enquire
          </Button>
        </div>
      </Container>
    </header>
  );
}
