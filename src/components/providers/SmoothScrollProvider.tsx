"use client";

import { ReactNode, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const handleScroll = () => ScrollTrigger.update();
    const handleResize = () => ScrollTrigger.refresh();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    const timer = setTimeout(() => ScrollTrigger.refresh(), 100);

    if (prefersReducedMotion) {
      return () => {
        clearTimeout(timer);
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", handleResize);
      };
    }

    const proxy = { y: 0 };
    const clamp = (num: number, min: number, max: number) => Math.min(Math.max(num, min), max);
    const maxScroll = () => document.documentElement.scrollHeight - window.innerHeight;
    let animationActive = false;

    const handleWheel = (e: WheelEvent) => {
      proxy.y -= e.deltaY;
      proxy.y = clamp(proxy.y, 0, maxScroll());
      gsap.killTweensOf(proxy);
      if (!animationActive) {
        animationActive = true;
        gsap.to(proxy, {
          y: proxy.y,
          duration: 0.8,
          ease: "power3.out",
          onUpdate: () => window.scrollTo(0, proxy.y),
          onComplete: () => { animationActive = false; },
        });
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      gsap.killTweensOf(proxy);
    };
  }, []);

  return <>{children}</>;
}
