"use client";

import { useEffect } from "react";
import Script from "next/script";

declare global {
  interface Window {
    gsap: any;
    ScrollTrigger: any;
    SplitType: any;
  }
}

export function MotionInfrastructure() {
  useEffect(() => {
    const initMotion = () => {
      if (!window.gsap || !window.ScrollTrigger) return;

      const gsap = window.gsap;
      const ScrollTrigger = window.ScrollTrigger;

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
    };

    const interval = setInterval(() => {
      if (window.gsap && window.ScrollTrigger) {
        initMotion();
        clearInterval(interval);
      }
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <Script 
        src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js" 
        strategy="afterInteractive"
      />
      <Script 
        src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js" 
        strategy="afterInteractive"
      />
      <Script 
        src="https://unpkg.com/split-type" 
        strategy="afterInteractive"
      />
    </>
  );
}
