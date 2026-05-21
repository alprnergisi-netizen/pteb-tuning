"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export function WarportProductImage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hovered, setHovered] = useState(false);

  const handleEnter = () => {
    setHovered(true);
    videoRef.current?.play();
  };

  const handleLeave = () => {
    setHovered(false);
    const v = videoRef.current;
    if (v) {
      v.pause();
      v.currentTime = 0;
    }
  };

  return (
    <Link
      href="/warport"
      className="relative min-h-[420px] lg:min-h-[640px] bg-[#111111] overflow-hidden cursor-pointer block"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {/* Badge */}
      <div className="absolute top-4 left-4 z-20 bg-[#FC222D] text-white text-[10px] font-black tracking-[0.2em] uppercase px-3 py-1.5">
        Most Popular
      </div>

      {/* Static image — fades out on hover, constrained to same visual footprint as video */}
      <div
        className="absolute inset-0 flex items-center justify-center transition-opacity duration-500"
        style={{ opacity: hovered ? 0 : 1 }}
        aria-hidden={hovered}
      >
        <div className="relative w-[58%] aspect-square">
          <Image
            src="/products/warport-hero.png"
            alt="PTEB Warport OBD2 remote tuning device"
            fill
            sizes="(max-width: 1024px) 50vw, 30vw"
            className="object-contain"
            priority
            itemProp="image"
          />
        </div>
      </div>

      {/* Video — fades in on hover */}
      <div
        className="absolute inset-0 transition-opacity duration-500"
        style={{ opacity: hovered ? 1 : 0 }}
        aria-hidden={!hovered}
      >
        <video
          ref={videoRef}
          src="/products/warportanimation.mp4"
          muted
          playsInline
          loop
          preload="none"
          aria-label="PTEB Warport animation"
          className="w-full h-full object-contain"
        />
      </div>
    </Link>
  );
}
