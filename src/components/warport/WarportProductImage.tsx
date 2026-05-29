"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Warport3DViewerClient } from "./Warport3DViewerClient";

export function WarportProductImage() {
  const [hovered, setHovered] = useState(false);
  const router = useRouter();

  return (
    <div
      role="link"
      tabIndex={0}
      aria-label="View PTEB Warport product page"
      onClick={() => router.push("/warport")}
      onKeyDown={(e) => e.key === "Enter" && router.push("/warport")}
      className="relative min-h-[420px] lg:min-h-[640px] bg-[#111111] overflow-hidden cursor-pointer block"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Badge */}
      <div className="absolute top-4 left-4 z-20 bg-[#FC222D] text-white text-[10px] font-black tracking-[0.2em] uppercase px-3 py-1.5">
        Most Popular
      </div>

      {/* Static image — fades out on hover */}
      <div
        className="absolute inset-0 flex items-center justify-center transition-opacity duration-500"
        style={{ opacity: hovered ? 0 : 1 }}
        aria-hidden={hovered}
      >
        <div className="relative w-[58%] aspect-square">
          <Image
            src="/products/warport-hero.jpg"
            alt="PTEB Warport OBD2 remote tuning device"
            fill
            sizes="(max-width: 1024px) 50vw, 30vw"
            className="object-contain"
            priority
            itemProp="image"
          />
        </div>
      </div>

      {/* 3D viewer — always mounted so it pre-inits; fades in on hover */}
      <div
        className="absolute inset-0 transition-opacity duration-500 pointer-events-none"
        style={{ opacity: hovered ? 1 : 0, pointerEvents: hovered ? 'auto' : 'none' }}
        aria-hidden={!hovered}
      >
        <Warport3DViewerClient variant="dark" height="100%" />
      </div>
    </div>
  );
}
