"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: "sage" | "engineer" | "elevated";
  padding?: "none" | "sm" | "md" | "lg";
}

export function Card({ 
  children, 
  className = "", 
  variant = "sage", 
  padding = "md" 
}: CardProps) {
  const variants = {
    sage: "bg-[var(--color-card-sage)] border-[var(--color-surface-2)]",
    engineer: "bg-[var(--color-card-engineer)] border-[var(--color-surface-2)]",
    elevated: "bg-[var(--color-surface-2)] border-[var(--color-surface-3)] shadow-2xl",
  };

  const paddings = {
    none: "p-0",
    sm: "p-[var(--space-4)]",
    md: "p-[var(--space-6)]",
    lg: "p-[var(--space-8)]",
  };

  return (
    <div className={cn(
      "rounded-[var(--radius-card)] border transition-all duration-500",
      variants[variant],
      paddings[padding],
      className
    )}>
      {children}
    </div>
  );
}
