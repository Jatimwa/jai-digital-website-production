"use client";

import { useEffect, useRef } from "react";

/**
 * Reveal Component
 * Handles scroll-triggered reveals (fade, rise, stagger)
 */
export function Reveal({ 
  children, 
  variant = "fade-up", 
  delay = 0, 
  duration = 0.8,
  stagger = 0,
  className = "" 
}: { 
  children: React.ReactNode; 
  variant?: "fade-up" | "fade-in" | "slide-left" | "slide-right";
  delay?: number;
  duration?: number;
  stagger?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.gsap || !ref.current) return;
    const gsap = window.gsap;

    let fromVars: any = { opacity: 0 };
    let toVars: any = { 
      opacity: 1, 
      duration, 
      delay, 
      ease: "power3.out",
      scrollTrigger: {
        trigger: ref.current,
        start: "top 85%",
        toggleActions: "play none none none",
      }
    };

    if (variant === "fade-up") fromVars.y = 40;
    if (variant === "slide-left") fromVars.x = 100;
    if (variant === "slide-right") fromVars.x = -100;

    if (stagger > 0) {
      const elements = ref.current.children;
      gsap.fromTo(elements, fromVars, { ...toVars, stagger });
    } else {
      gsap.fromTo(ref.current, fromVars, toVars);
    }
  }, [variant, delay, duration, stagger]);

  return <div ref={ref} className={className}>{children}</div>;
}

/**
 * SplitText Component
 * Uses SplitType and GSAP to animate text by lines/words
 */
export function SplitText({ 
  text, 
  type = "lines", 
  className = "" 
}: { 
  text: string; 
  type?: "lines" | "words" | "chars"; 
  className?: string;
}) {
  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!window.gsap || !window.SplitType || !ref.current) return;
    const gsap = window.gsap;
    const SplitType = window.SplitType;

    const split = new SplitType(ref.current, { types: type as any });
    const targets = type === "lines" ? split.lines : type === "words" ? split.words : split.chars;

    gsap.fromTo(targets, 
      { opacity: 0, y: 50 }, 
      { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        stagger: 0.1, 
        ease: "power4.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
        }
      }
    );

    return () => {
      split.revert();
    };
  }, [text, type]);

  return <div ref={ref} className={className}>{text}</div>;
}

/**
 * Magnetic Component
 * Button/element follows cursor in a small radius
 */
export function Magnetic({ children, strength = 0.5 }: { children: React.ReactNode; strength?: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.gsap || !ref.current) return;
    const gsap = window.gsap;

    const moveElement = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = ref.current!.getBoundingClientRect();
      const x = (clientX - (left + width / 2)) * strength;
      const y = (clientY - (top + height / 2)) * strength;

      gsap.to(ref.current, { x, y, duration: 0.6, ease: "power2.out" });
    };

    const resetElement = () => {
      gsap.to(ref.current, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.3)" });
    };

    const parent = ref.current.parentElement;
    if (parent) {
      parent.addEventListener("mousemove", moveElement);
      parent.addEventListener("mouseleave", resetElement);
    }

    return () => {
      if (parent) {
        parent.removeEventListener("mousemove", moveElement);
        parent.removeEventListener("mouseleave", resetElement);
      }
    };
  }, [strength]);

  return <div ref={ref}>{children}</div>;
}

/**
 * Marquee Component
 * Infinite horizontal scroll
 */
export function Marquee({ 
  children, 
  speed = 1, 
  direction = "left", 
  className = "" 
}: { 
  children: React.ReactNode; 
  speed?: number; 
  direction?: "left" | "right";
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.gsap || !ref.current) return;
    const gsap = window.gsap;

    const xPercent = direction === "left" ? -100 : 100;
    
    // Create the loop
    gsap.to(ref.current, {
      xPercent,
      repeat: -1,
      duration: 20 / speed,
      ease: "none",
    }).totalProgress(0.5);

  }, [speed, direction]);

  return (
    <div className={`flex whitespace-nowrap overflow-hidden ${className}`}>
      <div ref={ref} className="flex">
        {children}
        {children} {/* Duplicate for seamless loop */}
      </div>
    </div>
  );
}
