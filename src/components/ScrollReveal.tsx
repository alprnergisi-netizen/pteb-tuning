'use client';

import { useEffect, useRef } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  duration?: number;
  delay?: number;
}

export function ScrollReveal({ children, duration = 0.8, delay = 0 }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Set initial state
    element.style.opacity = '0';
    element.style.transform = 'translateY(40px)';
    element.style.transition = `opacity ${duration}s ease, transform ${duration}s ease`;
    element.style.transitionDelay = `${delay}s`;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Check if scrolling down
            const currentScrollY = window.scrollY;
            const isScrollingDown = currentScrollY > lastScrollY.current;

            if (isScrollingDown) {
              // Trigger animation only when scrolling down
              element.style.opacity = '1';
              element.style.transform = 'translateY(0)';
            } else {
              // Reset when scrolling up (but don't animate)
              element.style.opacity = '1';
              element.style.transform = 'translateY(0)';
            }

            lastScrollY.current = currentScrollY;
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px',
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
