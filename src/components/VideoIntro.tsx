'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

export function VideoIntro() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Effect 1: decide whether to show — runs once on mount
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
  }, []);

  // Effect 2: wire up video events — only runs after isVisible becomes true
  useEffect(() => {
    if (!isVisible) return;
    const video = videoRef.current;
    if (!video) return;

    const onError = () => setTimeout(dismiss, 1000);
    video.addEventListener('ended', dismiss);
    video.addEventListener('error', onError);

    return () => {
      video.removeEventListener('ended', dismiss);
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
        poster="/poster.jpg"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>
      {/* onClick directly on button — no getElementById needed */}
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
          opacity: 1;
          visibility: visible;
          transition: opacity 0.8s ease, visibility 0.8s ease;
        }

        #intro-overlay.done {
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
        }

        body:not(.intro-active) main {
          animation: pageReveal 1.2s ease-out forwards;
        }

        @keyframes pageReveal {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
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
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.2);
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
          background: rgba(255, 255, 255, 0.2);
        }

        body.intro-active {
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}
