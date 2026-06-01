'use client';

import { useEffect, useRef } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  duration?: number;
  delay?: number;
}

export function ScrollReveal({ children, duration = 0.25, delay = 0 }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Set initial state
    element.style.opacity = '0';
    element.style.transform = 'translateY(8px)';
    element.style.transition = `opacity ${duration}s ease-out, transform ${duration}s ease-out`;
    element.style.transitionDelay = `${delay}s`;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const currentScrollY = window.scrollY;
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
            lastScrollY.current = currentScrollY;
          }
        });
      },
      {
        threshold: 0,
        rootMargin: '0px 0px 250px 0px',
      }
    );

    observer.observe(element);

    const handleScroll = () => {
      lastScrollY.current = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.unobserve(element);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [duration, delay]);

  return <div ref={ref}>{children}</div>;
}
