"use client";

import { useState } from "react";
import Image from "next/image";

const IMAGES = [
  { src: "/lifestyle.jpg",       alt: "Tuned By PTEB hoodie — lifestyle shot" },
  { src: "/products/hoodie.jpg", alt: "Tuned By PTEB hoodie — front view" },
];

export function HoodieGallery() {
  const [active, setActive] = useState(0);

  return (
    <div className="flex flex-col gap-3 h-full">
      {/* Main image */}
      <div className="relative flex-1 min-h-[500px] bg-[#F5F5F5] overflow-hidden">
        {IMAGES.map((img, i) => (
          <div
            key={img.src}
            className="absolute inset-0 transition-opacity duration-400"
            style={{ opacity: i === active ? 1 : 0, pointerEvents: i === active ? "auto" : "none" }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-top"
              priority={i === 0}
              quality={90}
            />
          </div>
        ))}
      </div>

      {/* Thumbnails */}
      <div className="flex gap-2 pb-1">
        {IMAGES.map((img, i) => (
          <button
            key={img.src}
            onClick={() => setActive(i)}
            className={`relative w-20 h-20 shrink-0 bg-[#F5F5F5] overflow-hidden transition-all ${
              i === active ? "ring-2 ring-[#111] ring-offset-1" : "opacity-50 hover:opacity-80"
            }`}
            aria-label={`View image ${i + 1}`}
          >
            <Image src={img.src} alt="" fill className="object-cover object-top" sizes="80px" />
          </button>
        ))}
      </div>
    </div>
  );
}
