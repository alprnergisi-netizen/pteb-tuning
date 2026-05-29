"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function WarportHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0, scale: 1 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    setTransform({ rotateX: -dy * 18, rotateY: dx * 18, scale: 1.06 });
  };

  const handleMouseLeave = () => {
    setTransform({ rotateX: 0, rotateY: 0, scale: 1 });
  };

  return (
    <section
      className="relative pt-28 pb-0 md:pt-36 overflow-hidden"
      style={{ backgroundColor: "#ffffff", isolation: "isolate" }}
      aria-labelledby="warport-hero-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[520px]">

          {/* Text — left */}
          <div className="pb-16 lg:pb-24">
            <nav className="flex items-center gap-2 text-xs text-[#9CA3AF] mb-8" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-black transition-colors text-[#6B7280]">Home</Link>
              <ChevronRight size={12} aria-hidden="true" className="text-[#D1D5DB]" />
              <Link href="/products" className="hover:text-black transition-colors text-[#6B7280]">Products</Link>
              <ChevronRight size={12} aria-hidden="true" className="text-[#D1D5DB]" />
              <span className="text-black">Warport</span>
            </nav>

            <p className="text-[11px] font-black tracking-[0.3em] uppercase text-[#FC222D] mb-3">
              Remote Tuning
            </p>
            <h1
              id="warport-hero-heading"
              className="text-6xl sm:text-7xl md:text-8xl font-black uppercase text-black leading-none mb-6"
            >
              Warport
            </h1>
            <p className="text-base text-[#374151] max-w-lg leading-relaxed mb-10">
              Custom ECU &amp; TCU tuning without the workshop visit. Plug the Warport device into your OBD port, pair it with your phone, and we calibrate your car remotely with live data logging and ongoing revisions.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#FC222D] text-white text-sm font-black tracking-widest uppercase hover:bg-[#CC1B25] transition-colors"
              >
                Get Pre-Approval <ChevronRight size={14} aria-hidden="true" />
              </Link>
              <Link
                href="/products#warport"
                className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-black text-black text-sm font-black tracking-widest uppercase hover:bg-black hover:text-white transition-all"
              >
                Buy Now — $499
              </Link>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-6 mt-10 pt-10 border-t border-[#E5E7EB]">
              {["Worldwide", "7-Day Delivery", "Direct Support", "Custom Tune"].map((t) => (
                <div key={t} className="flex items-center gap-2 text-xs font-bold text-[#6B7280] uppercase tracking-widest">
                  <div className="w-1.5 h-1.5 bg-[#FC222D] rounded-full" aria-hidden="true" />
                  {t}
                </div>
              ))}
            </div>
          </div>

          {/* Device — right, 3D hover */}
          <div
            ref={containerRef}
            className="relative flex items-center justify-center h-full pb-0 cursor-none"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ perspective: "900px", backgroundColor: "#ffffff" }}
          >
            <div
              style={{
                transform: `rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg) scale(${transform.scale})`,
                transition: transform.scale === 1
                  ? "transform 0.6s cubic-bezier(0.34,1.56,0.64,1)"
                  : "transform 0.1s ease-out",
                transformStyle: "preserve-3d",
                willChange: "transform",
              }}
            >
              <Image
                src="/products/warport-hero.jpg"
                alt="PTEB Warport OBD2 remote tuning device"
                width={480}
                height={480}
                className="w-[320px] sm:w-[380px] lg:w-[440px] h-auto object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      <div className="h-px bg-[#E5E7EB]" aria-hidden="true" />
    </section>
  );
}
