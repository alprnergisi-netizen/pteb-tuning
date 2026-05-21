/**
 * PTEB Tuning Website - Animation Engine
 * Implementation of Section 2 of the Full Rebuild Specification.
 * Handles Intersection Observer reveals, Parallax, Magnetic Buttons, and Counters.
 */

const initAnimationEngine = () => {
  // 2.1 Core Observer Setup
  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -60px 0px'
  };

  const animationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        
        // 2.3 Trigger counter animation if the element has data-target
        if (entry.target.hasAttribute('data-target')) {
          animateCounter(entry.target);
        }
        
        // Optional: unobserve after animation for performance
        // animationObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all elements with data-animate attribute
  document.querySelectorAll('[data-animate]').forEach(el => {
    animationObserver.observe(el);
  });

  // 2.3 Parallax Scroll (Hero background & section images)
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    document.querySelectorAll('[data-parallax]').forEach(el => {
      const speed = parseFloat(el.dataset.parallax) || 0.3;
      el.style.transform = `translateY(${scrolled * speed}px)`;
    });
  }, { passive: true });

  // 2.3 Magnetic Cursor on CTAs
  document.querySelectorAll('.btn-primary, .btn-ghost').forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = '';
    });
  });
};

/**
 * 2.3 Number Counter (Stats)
 * Animates numeric text content from 0 to a target value using ease-out cubic.
 */
function animateCounter(el) {
  if (el.dataset.animated === 'true') return;
  el.dataset.animated = 'true';

  const target = parseInt(el.dataset.target);
  const suffix = el.dataset.suffix || '';
  const duration = 2000;
  const start = performance.now();

  function update(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
    el.textContent = Math.floor(eased * target) + suffix;
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAnimationEngine);
} else {
  initAnimationEngine();
}