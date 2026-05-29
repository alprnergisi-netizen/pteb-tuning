"use client";

import { Wrench, Wifi, Gauge, RefreshCw, Headphones, Cpu, type LucideIcon } from "lucide-react";
import { Warport3DViewerClient } from "./Warport3DViewerClient";

const FEATURES: { title: string; desc: string; icon: LucideIcon }[] = [
  { icon: Wrench,      title: "Full Custom (No OTS)",     desc: "Every tune is custom-built for your car. Not a generic off-the-shelf file." },
  { icon: Wifi,        title: "Remote Read & Write",      desc: "No workshop visit needed. ECU & TCU data read and written from your phone." },
  { icon: Gauge,       title: "Live Data Logging",        desc: "Real-time monitoring of boost, lambda, IATs, ignition timing, and more." },
  { icon: RefreshCw,   title: "Ongoing Revisions",        desc: "We refine the tune based on your logs until performance is perfect." },
  { icon: Headphones,  title: "Direct PTEB Support",      desc: "Work directly with PTEB engineers. No middlemen, no generic support tickets." },
  { icon: Cpu,         title: "Device Stays With You",    desc: "Warport remains in your car for future revisions and live data pulls." },
];

export function WarportFeatures() {
  return (
    <section
      className="border-b border-[#E5E7EB] overflow-hidden"
      style={{ backgroundColor: "#ffffff" }}
      aria-labelledby="features-heading"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 items-stretch min-h-[600px]">

          {/* Features list — left */}
          <div className="px-6 sm:px-10 lg:px-14 py-20 md:py-28">
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
                    <p className="text-sm font-black uppercase text-black mb-0.5">{title}</p>
                    <p className="text-sm text-[#6B7280] leading-relaxed">{desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* 3D viewer — right, fills the full column height */}
          <div className="relative min-h-[480px] lg:min-h-0">
            <div className="absolute inset-0">
              <Warport3DViewerClient variant="light" height="100%" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
