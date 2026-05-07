import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-[var(--size-input-h)] w-full rounded-none border-b border-[var(--color-ink-3)] bg-transparent px-[var(--space-0)] py-[var(--space-2)] font-body text-[length:var(--type-body-s)] text-[color:var(--color-ink-0)] transition-all placeholder:text-[color:var(--color-ink-3)] focus:border-[var(--color-brand)] disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
