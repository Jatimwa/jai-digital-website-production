"use client";

import { ReactNode } from "react";

interface EyebrowProps {
  children: ReactNode;
  className?: string;
  tone?: "default" | "muted";
}

export function Eyebrow({ children, className = "", tone = "default" }: EyebrowProps) {
  const toneClasses = tone === "muted" ? "text-[color:var(--color-ink-2)]" : "text-[color:var(--color-brand)]";
  
  return (
    <p className={`font-mono font-bold uppercase text-[length:var(--type-mono-xs)] tracking-[0.3em] ${toneClasses} ${className}`}>
      {children}
    </p>
  );
}
