"use client";

import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`max-w-[var(--container-max)] mx-auto px-[var(--space-5)] md:px-[var(--space-7)] ${className}`}>
      {children}
    </div>
  );
}
