"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { TrendingUp, Gauge, Award, ZoomIn, ChevronRight } from "lucide-react";
import { ImageLightbox } from "./ImageLightbox";

interface Build {
  car: string;
  variant: string;
  stage: string;
  power: string;
  torque: string;
  powerRPM: string;
  torqueRPM: string;
  gain: string;
  gainTorque: string;
  mods: string[];
  highlight: boolean;
  image: string | null;
  imageAlt: string;
  detailHref?: string;
}

export function BuildsGrid({ builds }: { builds: Build[] }) {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {builds.map((build) => (
          <article
            key={build.car + build.variant}
            className={`border bg-[#0D0D0D] overflow-hidden transition-all duration-300 ${
              build.highlight
                ? "border-[#FC222D]/60 shadow-[0_0_30px_rgba(252,34,45,0.1)]"
                : "border-[#1E1E1E] hover:border-[#FC222D]/40"
            }`}
          >
            {build.highlight && (
              <div className="bg-[#FC222D] text-white text-[10px] font-black tracking-[0.2em] uppercase px-4 py-1.5 flex items-center gap-2">
                <Award size={11} /> Top Build
              </div>
            )}
            {!build.highlight && <div className="h-px bg-[#FC222D]/40" />}

            {build.image ? (
              <button
                onClick={() => setLightbox({ src: build.image!, alt: build.imageAlt })}
                className="group relative w-full aspect-[4/3] bg-[#111111] overflow-hidden block focus-visible:ring-2 focus-visible:ring-[#FC222D]"
                aria-label={`View: ${build.imageAlt}`}
              >
                <Image src={build.image} alt={build.imageAlt} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-contain p-2 group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                    <ZoomIn size={18} />
                  </div>
                </div>
              </button>
            ) : (
              <div className="w-full aspect-[4/3] bg-[#111111] flex items-center justify-center">
                <p className="text-xs text-[#2A2A2A] uppercase tracking-widest">Dyno graph coming soon</p>
              </div>
            )}

            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="text-[10px] font-black tracking-[0.2em] uppercase text-[#FC222D]">{build.stage}</span>
                  <h3 className="text-2xl font-black uppercase text-white leading-tight">{build.car}</h3>
                  <p className="text-xs text-white/80">{build.variant}</p>
                </div>
                <div className="text-right">
                  <span className="block text-xs font-bold text-[#FC222D]">{build.gain}</span>
                  <span className="block text-[10px] text-white/80">{build.gainTorque}</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 mb-4 p-3 bg-black/50 border border-[#1A1A1A]">
                <div>
                  <div className="flex items-center gap-1.5 mb-1"><Gauge size={11} className="text-[#FC222D]" /><span className="text-[10px] uppercase tracking-wider text-white/80">Power</span></div>
                  <p className="text-xl font-black text-white">{build.power}</p>
                  <p className="text-[10px] text-[#4B5563]">{build.powerRPM}</p>
                </div>
                <div>
                  <div className="flex items-center gap-1.5 mb-1"><TrendingUp size={11} className="text-[#FC222D]" /><span className="text-[10px] uppercase tracking-wider text-white/80">Torque</span></div>
                  <p className="text-xl font-black text-white">{build.torque}</p>
                  <p className="text-[10px] text-[#4B5563]">{build.torqueRPM}</p>
                </div>
              </div>
              <ul className="space-y-1.5 mb-4">
                {build.mods.map((mod) => (
                  <li key={mod} className="flex items-start gap-2 text-xs text-white/90">
                    <span className="text-[#FC222D] shrink-0">›</span>{mod}
                  </li>
                ))}
              </ul>
              {build.detailHref && (
                <Link
                  href={build.detailHref}
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-[#FC222D] hover:gap-2.5 transition-all"
                >
                  View Full Build <ChevronRight size={12} aria-hidden="true" />
                </Link>
              )}
            </div>
          </article>
        ))}
      </div>

      {lightbox && <ImageLightbox src={lightbox.src} alt={lightbox.alt} onClose={() => setLightbox(null)} />}
    </>
  );
}
