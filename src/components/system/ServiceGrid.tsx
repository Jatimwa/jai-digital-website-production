"use client";

import { Container, Eyebrow, Card } from "@/components/atoms";
import { Reveal } from "./MotionPrimitives";

export function ServiceGrid() {
  const services = [
    {
      title: "Technical Audit",
      desc: "Deep-tier forensic analysis of your marketing stack and infrastructure. We find the rot that agencies hide.",
      tokens: ["INFRA", "LATENCY", "DATA"]
    },
    {
      title: "Revenue Ops",
      desc: "Aligning marketing, sales, and customer success around a single source of truth and optimized attribution.",
      tokens: ["PIPELINE", "ATTRIBUTION", "ROI"]
    },
    {
      title: "AI Strategy",
      desc: "Moving beyond hype to implement autonomous digital operations that actually move the needle.",
      tokens: ["AUTONOMOUS", "LLM", "EFFICIENCY"]
    },
    {
      title: "Surgical Implementation",
      desc: "High-speed, high-integrity deployment of digital infrastructure without the agency overhead.",
      tokens: ["NEXT.JS", "GSAP", "TYPESCRIPT"]
    }
  ];

  return (
    <section className="py-[var(--space-9)] border-b border-[var(--color-subtle)] bg-[var(--color-surface-engineer-0)]">
      <Container>
        <Reveal>
          <Eyebrow className="mb-[var(--space-6)]">Capabilities</Eyebrow>
          <h2 className="font-display font-extralight text-[length:var(--type-fluid-h2)] leading-[1.05] tracking-[-0.04em] text-[color:var(--color-ink-0)] mb-[var(--space-8)]">
            Precision <span className="accent">Performance.</span>
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-[var(--space-6)]">
          {services.map((s, i) => (
            <Reveal key={s.title} variant="fade-up" delay={i * 0.1}>
              <Card variant="engineer" className="group h-full flex flex-col justify-between hover:border-[var(--color-brand)]/40 transition-all duration-700">
                <div>
                   <div className="flex justify-between items-start mb-[var(--space-6)]">
                      <div className="flex gap-[var(--space-1)]">
                         {s.tokens.map(t => (
                           <span key={t} className="font-mono text-[10px] text-[color:var(--color-ink-3)] border border-[var(--color-subtle)] px-2 py-0.5 rounded-full">{t}</span>
                         ))}
                      </div>
                      <span className="font-mono text-[length:var(--type-mono-xs)] text-[color:var(--color-brand)] opacity-0 group-hover:opacity-100 transition-opacity">0{i+1}</span>
                   </div>
                   <h3 className="font-display text-[length:var(--type-fluid-h3)] text-[color:var(--color-ink-0)] mb-[var(--space-4)]">{s.title}</h3>
                   <p className="font-body text-[length:var(--type-body-s)] text-[color:var(--color-ink-1)] leading-relaxed">{s.desc}</p>
                </div>
                <div className="mt-[var(--space-8)] pt-[var(--space-4)] border-t border-[var(--color-subtle)] flex items-center justify-between">
                   <span className="font-mono text-[length:var(--type-mono-tiny)] text-[color:var(--color-ink-2)] uppercase tracking-widest">Fixed Retainer</span>
                   <div className="w-8 h-8 rounded-full border border-[var(--color-subtle)] flex items-center justify-center text-[color:var(--color-brand)] group-hover:bg-[var(--color-brand)] group-hover:text-[color:var(--color-surface-sage-0)] transition-all">→</div>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
