"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-[var(--radius-pill)] border px-3 py-1 font-mono font-bold uppercase tracking-[0.15em] text-[10px] transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-[var(--color-brand)] text-[var(--color-surface-sage)]",
        secondary:
          "border-transparent bg-[var(--color-surface-2)] text-[var(--color-ink-1)]",
        destructive:
          "border-transparent bg-[var(--color-error)] text-white",
        outline: "border-[var(--color-ink-3)] text-[var(--color-ink-2)]",
        signal: "border-[var(--color-brand)] text-[var(--color-brand)] bg-[var(--color-brand)]/5",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant, className }))} {...props} />
  );
}

export { Badge, badgeVariants };
