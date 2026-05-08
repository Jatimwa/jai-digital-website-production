"use client";

import { useEffect, useRef } from "react";
import { Container, Eyebrow } from "@/components/atoms";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function PinnedPhilosophy() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const pin = ScrollTrigger.create({
      trigger: triggerRef.current,
      start: "top top",
      end: "+=2000",
      pin: true,
      scrub: 1,
    });

    return () => {
      pin.kill();
    };
  }, []);

  return (
    <div ref={triggerRef} className="relative">
      <section ref={sectionRef} className="h-screen flex items-center bg-[var(--color-surface-engineer-0)] overflow-hidden border-b border-[var(--color-subtle)]">
        <Container>
          <div className="grid lg:grid-cols-2 gap-[var(--space-9)] items-center">
            <div>
              <Eyebrow>The Practitioner Philosophy</Eyebrow>
              <h2 className="mt-[var(--space-5)] font-display font-extralight text-[length:var(--type-fluid-h2)] leading-[1.05] tracking-[-0.04em] text-[color:var(--color-ink-0)]">
                Diagnostics before <br /><span className="accent">prescriptions.</span>
              </h2>
              <p className="mt-[var(--space-6)] font-body text-[length:var(--type-body-m)] text-[color:var(--color-ink-1)] leading-relaxed max-w-[var(--prose-max)]">
                Most agencies start with a solution (theirs). We start with a forensic audit of your technical infrastructure. We don't guess; we measure.
              </p>
            </div>
            
            <div className="relative h-[60vh] flex flex-col justify-center space-y-[var(--space-8)]">
              {[
                { step: "01", title: "Infrastructure Audit", desc: "Forensic analysis of data integrity and API latency." },
                { step: "02", title: "Strategy Synthesis", desc: "Aligning technical capability with business goals." },
                { step: "03", title: "Systematic Build", desc: "Implementing zero-rot digital operations at scale." },
              ].map((item, i) => (
                <div key={i} className="space-y-[var(--space-2)] border-l border-[var(--color-subtle)] pl-[var(--space-6)]">
                  <span className="font-mono text-[length:var(--type-mono-xs)] text-[color:var(--color-brand)]">{item.step}</span>
                  <h4 className="font-display text-[length:var(--type-fluid-h3)] text-[color:var(--color-ink-0)]">{item.title}</h4>
                  <p className="font-body text-[length:var(--type-body-s)] text-[color:var(--color-ink-2)]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
