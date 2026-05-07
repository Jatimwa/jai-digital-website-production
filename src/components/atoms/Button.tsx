"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-[var(--radius-pill)] font-mono font-bold uppercase tracking-[0.2em] text-[14px] transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[var(--color-brand)] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-[var(--color-brand)] text-[var(--color-surface-sage)] hover:bg-[var(--color-brand-hover)] hover:scale-[1.02] active:scale-[0.98]",
        secondary:
          "border border-[var(--color-ink-3)] bg-transparent text-[var(--color-ink-1)] hover:border-[var(--color-ink-0)] hover:text-[var(--color-ink-0)]",
        ghost:
          "bg-transparent text-[var(--color-ink-2)] hover:bg-[var(--color-surface-2)] hover:text-[var(--color-brand)]",
        outline:
          "border border-[var(--color-brand)] bg-transparent text-[var(--color-brand)] hover:bg-[var(--color-brand)]/10",
        tension:
          "font-editorial italic normal-case tracking-tight font-light text-[20px] text-[var(--color-brand)] hover:text-[var(--color-brand-hover)] gap-2 underline-reveal p-0 rounded-none h-auto min-h-0",
      },
      size: {
        default: "h-12 px-8 py-2",
        sm: "h-9 px-4 text-[14px]",
        lg: "h-14 px-10",
        icon: "h-10 w-10",
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
  ({ className, variant, size, asChild = false, showArrow, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
        {(variant === "tension" || showArrow) && (
          <ArrowUpRight className="w-4 h-4 ml-1 opacity-70 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        )}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
