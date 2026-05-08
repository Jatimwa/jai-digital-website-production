"use client";

import { useState } from "react";
import { Container, Eyebrow, Rule } from "@/components/atoms";
import { Reveal } from "./MotionPrimitives";
import { ChevronDown } from "lucide-react";

export function FAQBlock() {
  const faqs = [
    {
      q: "How is this different from a standard agency audit?",
      a: "Most agencies look at your front-end. We look at your database structure, your API latency, and your attribution logic. It's forensic, not aesthetic. We don't want to sell you a rebrand; we want to fix your engine."
    },
    {
      q: "Do you offer ongoing execution?",
      a: "Only as a fractional CTO or practitioner lead. I don't provide teams of juniors. I build the system and the governance; your team (or a specialist partner) runs it. This ensures you own the sovereignty of your stack."
    },
    {
      q: "What is 'Agency Rot' exactly?",
      a: "The accumulation of technical debt, unverified scripts, and duplicated tracking that slows down your site and your decision-making. It's often incentivized by agencies who profit from the complexity they create."
    },
    {
      q: "How long does a typical diagnostics phase take?",
      a: "Diagnostics take exactly 21 days. We provide a full report with prioritized remediation steps, expected ROI, and a roadmap to technical sovereignty. No filler, no fluff."
    }
  ];

  return (
    <section className="py-[var(--space-9)] border-b border-[var(--color-subtle)] bg-[var(--color-surface-engineer-0)]">
      <Container>
        <Reveal>
          <Eyebrow tone="muted">Objection Infrastructure</Eyebrow>
          <h2 className="mt-[var(--space-5)] font-display font-extralight text-[length:var(--type-fluid-h2)] leading-[1.05] tracking-[-0.04em] text-[color:var(--color-ink-0)] mb-[var(--space-8)]">
            Forensic <span className="accent">Clarity.</span>
          </h2>
        </Reveal>

        <div className="max-w-[var(--prose-max)] space-y-[var(--space-2)]">
          {faqs.map((faq, i) => (
            <Reveal key={i} variant="fade-up" delay={i * 0.05}>
              <AccordionItem question={faq.q} answer={faq.a} idx={i + 1} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function AccordionItem({ question, answer, idx }: { question: string; answer: string; idx: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`border border-[var(--color-subtle)] rounded-[var(--radius-card)] overflow-hidden transition-all duration-500 ${isOpen ? 'bg-[var(--color-surface-engineer-1)] border-[var(--color-brand)]/20' : 'bg-transparent'}`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-[var(--space-6)] text-left group"
      >
        <div className="flex gap-[var(--space-5)] items-center">
          <span className="font-mono text-[length:var(--type-mono-xs)] text-[color:var(--color-brand)] opacity-40">0{idx}</span>
          <h4 className="font-display text-[length:var(--type-body-m)] text-[color:var(--color-ink-0)] group-hover:text-[color:var(--color-brand)] transition-colors">
            {question}
          </h4>
        </div>
        <ChevronDown className={`w-[var(--size-icon-sm)] h-[var(--size-icon-sm)] text-[color:var(--color-ink-3)] transition-transform duration-500 ${isOpen ? 'rotate-180 text-[color:var(--color-brand)]' : ''}`} />
      </button>
      
      <div className={`overflow-hidden transition-all duration-500 ease-out-expo ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-[var(--space-6)] pb-[var(--space-6)] pl-[var(--space-9)] ml-[var(--space-1)]">
           <p className="font-body text-[length:var(--type-body-s)] text-[color:var(--color-ink-1)] leading-relaxed border-l border-[var(--color-subtle)] pl-[var(--space-5)]">
             {answer}
           </p>
        </div>
      </div>
    </div>
  );
}
