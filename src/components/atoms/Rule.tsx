"use client";

import { cn } from "@/lib/utils";

interface RuleProps {
  className?: string;
  tone?: "default" | "brand" | "subtle";
}

export function Rule({ className = "", tone = "default" }: RuleProps) {
  const toneClasses = {
    default: "border-[var(--color-surface-2)]",
    brand: "border-[var(--color-brand)]/30",
    subtle: "border-[var(--color-ink-3)]/20",
  };

  return (
    <hr className={cn("border-t w-full", toneClasses[tone], className)} />
  );
}
