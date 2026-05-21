"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollRevealManager() {
  const pathname = usePathname();

  useEffect(() => {
    let lastScrollY = window.scrollY;

    function revealElement(el: Element) {
      el.classList.add("reveal");
      el.querySelectorAll("[data-reveal-child]").forEach((child, i) => {
        setTimeout(() => child.classList.add("reveal"), i * 100);
      });
    }

    // Reset all elements so they animate in fresh on each navigation
    const elements = document.querySelectorAll<Element>("[data-scroll-reveal]");
    elements.forEach((el) => {
      el.classList.remove("reveal");
      el.querySelectorAll("[data-reveal-child]").forEach((child) => child.classList.remove("reveal"));
    });

    // Small delay so the DOM settles before observing
    const timer = setTimeout(() => {
      const freshElements = document.querySelectorAll<Element>("[data-scroll-reveal]");

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              revealElement(entry.target);
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.08, rootMargin: "0px 0px -60px 0px" }
      );

      freshElements.forEach((el) => observer.observe(el));

      const onScroll = () => { lastScrollY = window.scrollY; };
      window.addEventListener("scroll", onScroll, { passive: true });

      return () => {
        observer.disconnect();
        window.removeEventListener("scroll", onScroll);
      };
    }, 80);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}
