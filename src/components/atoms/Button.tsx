"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-[var(--radius-card)] font-mono font-bold uppercase tracking-[0.2em] text-[length:var(--type-body-xs)] transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--color-brand)] disabled:pointer-events-none disabled:opacity-50 hover:scale-[var(--scale-hover)] active:scale-[var(--scale-active)]",
  {
    variants: {
      variant: {
        primary:
          "bg-[var(--color-brand)] text-[var(--color-surface-0)] hover:bg-[var(--color-brand-hover)]",
        secondary:
          "bg-[var(--color-surface-2)] text-[var(--color-ink-0)] hover:bg-[var(--color-surface-3)]",
        outline:
          "border border-[var(--color-brand)] bg-transparent text-[var(--color-brand)] hover:bg-[var(--color-brand)]/10",
        tension:
          "font-editorial italic normal-case tracking-tight font-light text-[length:var(--type-body-m)] text-[var(--color-brand)] hover:text-[var(--color-brand-hover)] gap-[var(--space-2)] underline-reveal p-[var(--space-0)] rounded-none h-auto min-h-[var(--space-0)] hover:scale-100",
      },
      size: {
        default: "h-[var(--size-input-h)] px-[var(--space-8)] py-[var(--space-2)]",
        sm: "h-[var(--size-input-h-sm)] px-[var(--space-4)] text-[length:var(--type-body-xs)]",
        lg: "h-[var(--size-input-h-lg)] px-[var(--space-8)]",
        icon: "h-[var(--size-input-h)] w-[var(--size-input-h)]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  showArrow?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, showArrow = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }), "group")}
        ref={ref}
        {...props}
      >
        {children}
        {(variant === "tension" || showArrow) && (
          <ArrowUpRight className="w-[var(--size-icon-sm)] h-[var(--size-icon-sm)] ml-[var(--space-1)] transition-transform group-hover:translate-x-[var(--space-arrow-nudge)] group-hover:-translate-y-[var(--space-arrow-nudge)]" />
        )}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
