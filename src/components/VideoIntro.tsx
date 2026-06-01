'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

export function VideoIntro() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!sessionStorage.getItem('pteb-intro-seen')) {
      setIsVisible(true);
      document.body.classList.add('intro-active');
    }
  }, []);

  const dismiss = useCallback(() => {
    setIsVisible(false);
    document.body.classList.remove('intro-active');
    sessionStorage.setItem('pteb-intro-seen', '1');

    // Stagger-reveal nav → hero → each subsequent section
    const nav = document.querySelector('nav');
    const sections = Array.from(document.querySelectorAll('main > section'));
    const rows = [nav, ...sections].filter(Boolean) as HTMLElement[];

    rows.forEach((el, i) => {
      // Nav: quick at 0.1s delay. Hero (i=1): 0.35s delay with long duration.
      // Each subsequent section adds 0.18s more.
      const delay = i === 0 ? 0.1 : 0.35 + (i - 1) * 0.18;
      const duration = i === 0 ? 0.7 : 1.2;
      const easing = 'cubic-bezier(0.16, 1, 0.3, 1)';
      el.style.transition = `opacity ${duration}s ${easing} ${delay}s, transform ${duration}s ${easing} ${delay}s`;
      el.classList.add('intro-revealed');
    });
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const video = videoRef.current;
    if (!video) return;

    // Auto-dismiss if video doesn't start playing within 2.5s (autoplay blocked, slow network, etc.)
    let started = false;
    const fallback = setTimeout(() => { if (!started) dismiss(); }, 2500);

    const onPlaying = () => { started = true; };
    const onEnded = () => { clearTimeout(fallback); dismiss(); };
    const onError = () => { clearTimeout(fallback); setTimeout(dismiss, 400); };

    video.addEventListener('playing', onPlaying);
    video.addEventListener('ended', onEnded);
    video.addEventListener('error', onError);
    return () => {
      clearTimeout(fallback);
      video.removeEventListener('playing', onPlaying);
      video.removeEventListener('ended', onEnded);
      video.removeEventListener('error', onError);
    };
  }, [isVisible, dismiss]);

  if (!isVisible) return null;

  return (
    <div id="intro-overlay">
      <video
        ref={videoRef}
        id="intro-video"
        autoPlay
        muted
        playsInline
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>
      <button id="intro-skip" onClick={dismiss}>Skip</button>

      <style>{`
        #intro-overlay {
          position: fixed;
          inset: 0;
          z-index: 9999;
          background: #000;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        #intro-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        #intro-skip {
          position: absolute;
          bottom: 32px;
          right: 32px;
          background: rgba(255,255,255,0.1);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1px solid rgba(255,255,255,0.2);
          color: #fff;
          font-family: sans-serif;
          font-size: 0.8rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          padding: 10px 24px;
          cursor: pointer;
          transition: background 0.3s;
        }

        #intro-skip:hover {
          background: rgba(255,255,255,0.2);
        }

        /* Hide all rows while intro plays */
        body.intro-active nav,
        body.intro-active main > section {
          opacity: 0;
          transform: translateY(22px);
        }

        /* Revealed state */
        .intro-revealed {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }

        body.intro-active {
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}
