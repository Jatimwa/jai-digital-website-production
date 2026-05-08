"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal } from "./MotionPrimitives";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function StatStrip() {
  const stats = [
    { label: "Years Depth", value: 20, suffix: "+" },
    { label: "Ad Spend Optimized", value: 1.2, prefix: "£", suffix: "M" },
    { label: "Efficiency Gain", value: 42, suffix: "%" },
    { label: "Technical Sovereignty", value: 100, suffix: "%" }
  ];

  return (
    <section className="py-[var(--space-8)] border-b border-[var(--color-subtle)] bg-[var(--color-surface-sage-0)]">
      <div className="max-w-[var(--container-max)] mx-auto px-[var(--space-5)]">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-[var(--space-8)]">
          {stats.map((s, i) => (
            <Reveal key={s.label} variant="fade-up" delay={i * 0.1}>
              <div className="space-y-1">
                 <p className="font-mono text-[length:var(--type-mono-tiny)] text-[color:var(--color-ink-2)] uppercase tracking-[0.2em]">{s.label}</p>
                 <div className="flex items-baseline">
                    {s.prefix && <span className="font-display font-extralight text-[length:var(--type-fluid-h3)] text-[color:var(--color-brand)] mr-1">{s.prefix}</span>}
                    <Counter value={s.value} />
                    {s.suffix && <span className="font-display font-extralight text-[length:var(--type-fluid-h3)] text-[color:var(--color-brand)] ml-1">{s.suffix}</span>}
                 </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Counter({ value }: { value: number }) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const obj = { val: 0 };
    const tween = gsap.to(obj, {
      val: value,
      duration: 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ref.current,
        start: "top 90%",
      },
      onUpdate: () => {
        setDisplayValue(Number(obj.val.toFixed(value % 1 === 0 ? 0 : 1)));
      }
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [value]);

  return <span ref={ref} className="font-display font-extralight text-[length:var(--type-stat-md)] leading-none text-[color:var(--color-brand)]">{displayValue}</span>;
}
