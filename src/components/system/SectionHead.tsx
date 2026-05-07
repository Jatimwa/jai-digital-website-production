"use client";

import { ReactNode } from "react";
import { Eyebrow } from "../atoms/Eyebrow";

interface SectionHeadProps {
  idx?: string;
  kicker: string;
  title: ReactNode;
  lede: string;
}

export function SectionHead({ idx, kicker, title, lede }: SectionHeadProps) {
  return (
    <div className="max-w-[var(--prose-max)] mb-[var(--space-8)]">
      <div className="flex items-start gap-4 mb-[var(--space-5)]">
        {idx && (
          <span className="font-mono text-[length:var(--type-mono-xs)] text-[color:var(--color-ink-3)] mt-1">
            {idx}
          </span>
        )}
        <Eyebrow tone="muted">{kicker}</Eyebrow>
      </div>
      <h2 className="font-display font-extralight text-[length:var(--type-fluid-h2)] leading-[1.1] tracking-[-0.04em] mb-[var(--space-6)] text-balance">
        {title}
      </h2>
      <p className="standfirst">
        {lede}
      </p>
    </div>
  );
}
