"use client";

import { useEffect } from "react";
import { X, Gauge, TrendingUp, Zap } from "lucide-react";

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
}

export function BuildDetailModal({
  build,
  onClose,
}: {
  build: Build;
  onClose: () => void;
}) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="build-modal-title"
    >
      <div
        className="relative bg-[#0A0A0A] border border-[#1E1E1E] rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-[#FC222D] text-white flex items-center justify-center hover:bg-[#CC1B25] transition-colors"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {/* Content */}
        <div className="p-6 md:p-8">
          {/* Header */}
          <div className="mb-8">
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#FC222D] mb-2 block">
              {build.stage}
            </span>
            <h2
              id="build-modal-title"
              className="text-3xl md:text-4xl font-black uppercase text-white mb-1"
             
            >
              {build.car}
            </h2>
            <p className="text-sm text-[#9CA3AF]">{build.variant}</p>
          </div>

          {/* What Happened Section */}
          <div className="mb-8 p-5 border border-[#FC222D]/30 bg-[#FC222D]/5">
            <h3
              className="text-lg font-black uppercase text-[#FC222D] mb-3"
             
            >
              What Happened
            </h3>
            <p className="text-sm text-[#9CA3AF] leading-relaxed mb-3">
              This {build.car} came in for a {build.stage} custom ECU tune. We performed a full
              pre-health check, baseline dyno pull, and calibrated the engine management for
              optimal power delivery while maintaining safety margins.
            </p>
            <p className="text-sm text-[#9CA3AF] leading-relaxed">
              The tune was validated on our rolling road dyno and road-tested to ensure real-world
              drivability and consistency across varying conditions.
            </p>
          </div>

          {/* Power & Torque Grid */}
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {/* Power */}
            <div className="p-4 border border-[#1E1E1E] bg-black/50">
              <div className="flex items-center gap-2 mb-2">
                <Gauge size={14} className="text-[#FC222D]" />
                <span className="text-[10px] tracking-wider uppercase text-[#6B7280]">Power</span>
              </div>
              <p className="text-2xl font-black text-white mb-1">
                {build.power}
              </p>
              <p className="text-xs text-[#6B7280]">{build.powerRPM}</p>
            </div>

            {/* Torque */}
            <div className="p-4 border border-[#1E1E1E] bg-black/50">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp size={14} className="text-[#FC222D]" />
                <span className="text-[10px] tracking-wider uppercase text-[#6B7280]">Torque</span>
              </div>
              <p className="text-2xl font-black text-white mb-1">
                {build.torque}
              </p>
              <p className="text-xs text-[#6B7280]">{build.torqueRPM}</p>
            </div>
          </div>

          {/* Gains */}
          <div className="mb-8 p-4 border border-[#FC222D]/40 bg-[#FC222D]/10">
            <div className="flex items-center gap-2 mb-2">
              <Zap size={14} className="text-[#FC222D]" />
              <span className="text-[10px] tracking-wider uppercase text-[#FC222D] font-bold">
                Performance Gain
              </span>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-[#6B7280] mb-1">Power Gain</p>
                <p className="text-xl font-black text-[#FC222D]">{build.gain}</p>
              </div>
              <div>
                <p className="text-sm text-[#6B7280] mb-1">Torque Gain</p>
                <p className="text-xl font-black text-[#FC222D]">{build.gainTorque}</p>
              </div>
            </div>
          </div>

          {/* Modifications */}
          <div className="mb-6">
            <h4
              className="text-sm font-bold uppercase text-white mb-3"
             
            >
              Modifications & Specs
            </h4>
            <ul className="space-y-2">
              {build.mods.map((mod) => (
                <li key={mod} className="flex items-start gap-2 text-sm text-[#9CA3AF]">
                  <span className="text-[#FC222D] font-bold mt-0.5 shrink-0">›</span>
                  <span>{mod}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Footer CTA */}
          <div className="pt-6 border-t border-[#1E1E1E]">
            <p className="text-xs text-[#6B7280] mb-4">
              Interested in a similar tune for your car? Get in touch with us.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#FC222D] text-white text-sm font-bold tracking-widest uppercase hover:bg-[#CC1B25] transition-colors"
            >
              Book Your Tune
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
