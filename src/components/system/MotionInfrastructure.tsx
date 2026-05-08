"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function MotionInfrastructure() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Global prefers-reduced-motion handler
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleReducedMotion = (e: MediaQueryListEvent | MediaQueryList) => {
      if (e.matches) {
        gsap.ticker.sleep();
        document.documentElement.classList.add("reduced-motion");
      } else {
        gsap.ticker.wake();
        document.documentElement.classList.remove("reduced-motion");
      }
    };

    mediaQuery.addEventListener("change", handleReducedMotion);
    handleReducedMotion(mediaQuery);

    console.log("Motion Infrastructure Initialized: GSAP + ScrollTrigger (Native Scroll)");

    return () => {
      mediaQuery.removeEventListener("change", handleReducedMotion);
    };
  }, []);

  return null;
}
