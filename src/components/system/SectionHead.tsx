import { cn } from "@/lib/utils";
import { Eyebrow } from "@/components/atoms";
import { ReactNode } from "react";

interface SectionHeadProps {
  idx?: string;
  kicker: string;
  title: ReactNode;
  lede: string;
}

export function SectionHead({ idx, kicker, title, lede }: SectionHeadProps) {
  return (
    <div className="max-w-[var(--prose-max)] mb-[var(--space-8)]">
      <div className="flex items-start gap-[var(--space-4)] mb-[var(--space-5)]">
        {idx && (
          <span className="font-mono text-[length:var(--type-mono-xs)] text-[color:var(--color-ink-3)] mt-[var(--space-1)]">
            {idx}
          </span>
        )}
        <Eyebrow tone="default">{kicker}</Eyebrow>
      </div>
      
      <h2 className="font-display font-extralight text-[length:var(--type-fluid-h2)] leading-[1.05] tracking-[-0.04em] text-balance mb-[var(--space-6)] text-[color:var(--color-ink-0)]">
        {title}
      </h2>
      
      <p className="font-body text-[length:var(--type-body-m)] text-[color:var(--color-ink-1)] leading-relaxed text-balance">
        {lede}
      </p>
    </div>
  );
}
