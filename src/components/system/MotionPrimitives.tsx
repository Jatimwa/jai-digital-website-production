"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitTypeLib from "split-type";

// Register ScrollTrigger once on the client
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

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
  className = "",
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
    if (!ref.current) return;

    const fromVars: gsap.TweenVars = { opacity: 0 };
    const toVars: gsap.TweenVars = {
      opacity: 1,
      duration,
      delay,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ref.current,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    };

    if (variant === "fade-up") fromVars.y = 40;
    if (variant === "slide-left") fromVars.x = 100;
    if (variant === "slide-right") fromVars.x = -100;

    let tween: gsap.core.Tween;
    if (stagger > 0) {
      const elements = ref.current.children;
      tween = gsap.fromTo(elements, fromVars, { ...toVars, stagger });
    } else {
      tween = gsap.fromTo(ref.current, fromVars, toVars);
    }

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [variant, delay, duration, stagger]);

  return <div ref={ref} className={className}>{children}</div>;
}

/**
 * SplitText Component
 * Uses SplitType and GSAP to animate text by lines/words/chars
 */
export function SplitText({
  text,
  type = "lines",
  className = "",
}: {
  text: string;
  type?: "lines" | "words" | "chars";
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const split = new SplitTypeLib(ref.current, { types: type });
    const targets =
      type === "lines" ? split.lines :
      type === "words" ? split.words :
      split.chars;

    if (!targets) return;

    const tween = gsap.fromTo(
      targets,
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
        },
      }
    );

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
      split.revert();
    };
  }, [text, type]);

  return <div ref={ref} className={className}>{text}</div>;
}

/**
 * Magnetic Component
 * Button/element follows cursor in a small radius
 */
export function Magnetic({
  children,
  strength = 0.5,
}: {
  children: React.ReactNode;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const el = ref.current;
    const parent = el.parentElement;
    if (!parent) return;

    const moveElement = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = el.getBoundingClientRect();
      const x = (clientX - (left + width / 2)) * strength;
      const y = (clientY - (top + height / 2)) * strength;
      gsap.to(el, { x, y, duration: 0.6, ease: "power2.out" });
    };

    const resetElement = () => {
      gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.3)" });
    };

    parent.addEventListener("mousemove", moveElement);
    parent.addEventListener("mouseleave", resetElement);

    return () => {
      parent.removeEventListener("mousemove", moveElement);
      parent.removeEventListener("mouseleave", resetElement);
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
  className = "",
}: {
  children: React.ReactNode;
  speed?: number;
  direction?: "left" | "right";
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const xPercent = direction === "left" ? -100 : 100;
    const tween = gsap
      .to(ref.current, {
        xPercent,
        repeat: -1,
        duration: 20 / speed,
        ease: "none",
      })
      .totalProgress(0.5);

    return () => {
      tween.kill();
    };
  }, [speed, direction]);

  return (
    <div className={`flex whitespace-nowrap overflow-hidden ${className}`}>
      <div ref={ref} className="flex">
        {children}
        {children}
      </div>
    </div>
  );
}
