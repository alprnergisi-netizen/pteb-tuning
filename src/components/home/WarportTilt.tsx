"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export function WarportTilt() {
  const ref = useRef<HTMLAnchorElement>(null);
  const [t, setT] = useState({ rx: 0, ry: 0, scale: 1 });

  const onMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const dx = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
    const dy = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);
    setT({ rx: -dy * 18, ry: dx * 18, scale: 1.06 });
  };

  const onLeave = () => setT({ rx: 0, ry: 0, scale: 1 });

  return (
    <Link
      href="/warport"
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="flex items-center justify-center"
      style={{ perspective: "900px" }}
      aria-label="Learn more about the PTEB Warport"
    >
      <div
        style={{
          transform: `rotateX(${t.rx}deg) rotateY(${t.ry}deg) scale(${t.scale})`,
          transition: t.scale === 1
            ? "transform 0.6s cubic-bezier(0.34,1.56,0.64,1)"
            : "transform 0.1s ease-out",
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
      >
        <Image
          src="/products/warport-hero.png"
          alt="PTEB Warport OBD2 remote tuning device"
          width={520}
          height={520}
          className="w-[280px] sm:w-[360px] lg:w-[420px] h-auto object-contain"
        />
      </div>
    </Link>
  );
}
