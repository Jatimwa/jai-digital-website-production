import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-[var(--radius-card)] border px-[var(--space-3)] py-[var(--space-1)] font-mono font-bold uppercase tracking-[0.15em] text-[length:var(--type-mono-tiny)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-brand)] focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-[var(--color-surface-2)] text-[var(--color-ink-1)] hover:bg-[var(--color-surface-3)]",
        secondary:
          "border-transparent bg-[var(--color-surface-1)] text-[var(--color-ink-2)]",
        signal:
          "border-[var(--color-brand)] bg-[var(--color-brand)]/10 text-[var(--color-brand)]",
        outline: "border-[var(--color-subtle)] text-[var(--color-ink-2)]",
        destructive:
          "border-transparent bg-[var(--color-error)] text-[var(--color-surface-0)]",
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
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
