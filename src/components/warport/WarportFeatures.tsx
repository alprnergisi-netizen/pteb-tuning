"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Wrench, Wifi, Gauge, RefreshCw, Headphones, Cpu, type LucideIcon } from "lucide-react";

const FEATURES: { title: string; desc: string; icon: LucideIcon }[] = [
  { icon: Wrench,      title: "Full Custom (No OTS)",     desc: "Every tune is custom-built for your car. Not a generic off-the-shelf file." },
  { icon: Wifi,        title: "Remote Read & Write",      desc: "No workshop visit needed. ECU & TCU data read and written from your phone." },
  { icon: Gauge,       title: "Live Data Logging",        desc: "Real-time monitoring of boost, lambda, IATs, ignition timing, and more." },
  { icon: RefreshCw,   title: "Ongoing Revisions",        desc: "We refine the tune based on your logs until performance is perfect." },
  { icon: Headphones,  title: "Direct PTEB Support",      desc: "Work directly with PTEB engineers. No middlemen, no generic support tickets." },
  { icon: Cpu,         title: "Device Stays With You",    desc: "Warport remains in your car for future revisions and live data pulls." },
];

export function WarportFeatures() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0, scale: 1 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const dx = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
    const dy = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
    setTransform({ rotateX: -dy * 16, rotateY: dx * 16, scale: 1.04 });
  };

  const handleMouseLeave = () => setTransform({ rotateX: 0, rotateY: 0, scale: 1 });

  return (
    <section
      className="py-20 md:py-28 border-b border-[#E5E7EB]"
      style={{ backgroundColor: "#ffffff" }}
      aria-labelledby="features-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Features list — left */}
          <div>
            <p className="text-[11px] font-black tracking-[0.3em] uppercase text-[#FC222D] mb-3">
              Why Warport
            </p>
            <h2
              id="features-heading"
              className="text-4xl md:text-5xl font-black uppercase text-black leading-none mb-10"
             
            >
              Tuning. Simplified.
            </h2>

            <ul className="space-y-4">
              {FEATURES.map(({ title, desc, icon: Icon }) => (
                <li key={title} className="flex items-start gap-4 group p-3 hover:bg-black/[0.03] transition-colors rounded">
                  <div className="w-11 h-11 bg-[#FC222D] flex items-center justify-center shrink-0 group-hover:bg-[#CC1B25] transition-colors">
                    <Icon size={20} className="text-white" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm font-black uppercase text-black mb-0.5">
                      {title}
                    </p>
                    <p className="text-sm text-[#6B7280] leading-relaxed">{desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Reactive image — right */}
          <div
            ref={containerRef}
            className="flex items-center justify-center"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ perspective: "900px" }}
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
                src="/products/warportcase.png"
                alt="PTEB Warport case and packaging"
                width={520}
                height={520}
                className="w-[300px] sm:w-[380px] lg:w-[460px] h-auto object-contain"
                style={{ backgroundColor: "#ffffff" }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
