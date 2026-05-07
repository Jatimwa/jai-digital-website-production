"use client";

import { ReactNode } from "react";

interface SpecRowProps {
  label: string;
  meta: string;
  children: ReactNode;
  first?: boolean;
}

export function SpecRow({ label, meta, children, first }: SpecRowProps) {
  return (
    <div className={`grid lg:grid-cols-[20rem_1fr] gap-[var(--space-6)] py-[var(--space-7)] ${!first ? 'border-t border-[var(--color-surface-2)]' : ''}`}>
      <div className="space-y-1">
        <p className="font-mono font-bold uppercase text-[length:var(--type-mono-xs)] tracking-[0.1em] text-[color:var(--color-ink-0)]">
          {label}
        </p>
        <p className="font-mono text-[length:var(--type-mono-xs)] text-[color:var(--color-ink-2)]">
          {meta}
        </p>
      </div>
      <div className="overflow-x-auto">
        {children}
      </div>
    </div>
  );
}
