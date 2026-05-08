"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";

export function GenerativeInterlude() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let p5Instance: any;

    const initP5 = () => {
      if (!window.p5 || !containerRef.current) return;

      const sketch = (p: any) => {
        let particles: any[] = [];
        const numParticles = 200;

        p.setup = () => {
          const canvas = p.createCanvas(containerRef.current!.offsetWidth, 400);
          canvas.parent(containerRef.current!);
          p.background(20, 20, 17); // Sage 0
          for (let i = 0; i < numParticles; i++) {
            particles.push(new Particle(p));
          }
        };

        p.draw = () => {
          p.background(20, 20, 17, 10);
          particles.forEach(part => {
            part.update();
            part.display();
          });
        };

        p.windowResized = () => {
          p.resizeCanvas(containerRef.current!.offsetWidth, 400);
        };

        class Particle {
          p: any;
          pos: any;
          vel: any;
          acc: any;
          maxSpeed: number;

          constructor(p: any) {
            this.p = p;
            this.pos = p.createVector(p.random(p.width), p.random(p.height));
            this.vel = p.createVector(p.random(-1, 1), p.random(-1, 1));
            this.acc = p.createVector(0, 0);
            this.maxSpeed = 2;
          }

          update() {
            this.vel.add(this.acc);
            this.vel.limit(this.maxSpeed);
            this.pos.add(this.vel);
            this.acc.mult(0);

            if (this.pos.x > this.p.width) this.pos.x = 0;
            if (this.pos.x < 0) this.pos.x = this.p.width;
            if (this.pos.y > this.p.height) this.pos.y = 0;
            if (this.pos.y < 0) this.pos.y = this.p.height;
          }

          display() {
            this.p.stroke(201, 217, 0, 100); // Brand color with opacity
            this.p.strokeWeight(1);
            this.p.point(this.pos.x, this.pos.y);
          }
        }
      };

      p5Instance = new window.p5(sketch);
    };

    const interval = setInterval(() => {
      if (window.p5) {
        initP5();
        clearInterval(interval);
      }
    }, 100);

    return () => {
      clearInterval(interval);
      if (p5Instance) p5Instance.remove();
    };
  }, []);

  return (
    <section className="py-[var(--space-8)] bg-[var(--color-surface-sage-0)] border-b border-[var(--color-subtle)] overflow-hidden">
      <div ref={containerRef} className="w-full opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-1000" />
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.9.0/p5.min.js" strategy="lazyOnload" />
    </section>
  );
}

declare global {
  interface Window {
    p5: any;
  }
}
