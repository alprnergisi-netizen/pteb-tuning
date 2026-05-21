"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { TrendingUp, Gauge, Award, ZoomIn, X, ChevronLeft, ChevronRight, Layers } from "lucide-react";
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
}

// ── Single swipeable card ────────────────────────────────────────────────────
function SwipeCard({
  build,
  onSwipe,
  isTop,
  stackOffset,
}: {
  build: Build;
  onSwipe: (dir: "left" | "right") => void;
  isTop: boolean;
  stackOffset: number;
}) {
  const [dragX, setDragX] = useState(0);
  const [dragging, setDragging] = useState(false);
  const startX = useRef(0);
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  const commit = useCallback((dx: number) => {
    setDragging(false);
    if (Math.abs(dx) > 90) { onSwipe(dx > 0 ? "right" : "left"); setDragX(0); }
    else setDragX(0);
  }, [onSwipe]);

  // Mouse
  const onMD = (e: React.MouseEvent) => { if (!isTop) return; startX.current = e.clientX; setDragging(true); };
  useEffect(() => {
    if (!dragging) return;
    const mm = (e: MouseEvent) => setDragX(e.clientX - startX.current);
    const mu = (e: MouseEvent) => commit(e.clientX - startX.current);
    window.addEventListener("mousemove", mm);
    window.addEventListener("mouseup", mu);
    return () => { window.removeEventListener("mousemove", mm); window.removeEventListener("mouseup", mu); };
  }, [dragging, commit]);

  // Touch
  const onTS = (e: React.TouchEvent) => { if (!isTop) return; startX.current = e.touches[0].clientX; setDragging(true); };
  const onTM = (e: React.TouchEvent) => { if (!dragging) return; setDragX(e.touches[0].clientX - startX.current); };
  const onTE = (e: React.TouchEvent) => commit(e.changedTouches[0].clientX - startX.current);

  const rotate = isTop ? dragX * 0.07 : 0;
  const scale = isTop ? 1 : Math.max(0.88, 1 - stackOffset * 0.04);
  const ty = isTop ? 0 : stackOffset * 14;

  return (
    <>
      <div
        className={`absolute inset-0 ${isTop ? "cursor-grab active:cursor-grabbing" : "pointer-events-none"} select-none`}
        style={{
          transform: `translateX(${isTop ? dragX : 0}px) rotate(${rotate}deg) scale(${scale}) translateY(${ty}px)`,
          transition: dragging ? "none" : "transform 0.3s cubic-bezier(0.34,1.56,0.64,1)",
          zIndex: 20 - stackOffset,
        }}
        onMouseDown={onMD}
        onTouchStart={onTS}
        onTouchMove={onTM}
        onTouchEnd={onTE}
      >
        <div className="h-full bg-[#0D0D0D] border border-[#1E1E1E] overflow-hidden flex flex-col relative">

          {build.highlight && (
            <div className="bg-[#FC222D] text-white text-[10px] font-black tracking-[0.2em] uppercase px-4 py-1.5 flex items-center gap-2 shrink-0">
              <Award size={11} aria-hidden="true" /> Top Build
            </div>
          )}

          {build.image ? (
            <button
              className="relative w-full shrink-0 bg-[#111111] overflow-hidden focus-visible:ring-2 focus-visible:ring-[#FC222D]"
              style={{ aspectRatio: "16/9" }}
              onClick={(e) => { e.stopPropagation(); setLightbox({ src: build.image!, alt: build.imageAlt }); }}
              aria-label={`View dyno graph: ${build.imageAlt}`}
            >
              <Image src={build.image} alt={build.imageAlt} fill sizes="520px" className="object-contain p-3" />
              <div className="absolute inset-0 bg-black/0 hover:bg-black/25 transition-colors flex items-center justify-center">
                <div className="w-9 h-9 rounded-full bg-white text-black flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                  <ZoomIn size={16} />
                </div>
              </div>
            </button>
          ) : (
            <div className="w-full shrink-0 bg-[#111111] flex items-center justify-center" style={{ aspectRatio: "16/9" }}>
              <p className="text-xs text-[#2A2A2A] uppercase tracking-widest">Dyno graph coming soon</p>
            </div>
          )}

          <div className="p-5 flex flex-col flex-1 overflow-y-auto">
            <div className="flex items-start justify-between mb-3">
              <div>
                <span className="text-[10px] font-black tracking-[0.2em] uppercase text-[#FC222D]">{build.stage}</span>
                <h3 className="text-2xl font-black uppercase text-white leading-tight">
                  {build.car}
                </h3>
                <p className="text-xs text-[#6B7280]">{build.variant}</p>
              </div>
              <div className="text-right shrink-0">
                <span className="block text-sm font-black text-[#FC222D]">{build.gain}</span>
                <span className="block text-[10px] text-[#6B7280]">{build.gainTorque}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-3 p-3 bg-black/60 border border-[#1A1A1A]">
              <div>
                <div className="flex items-center gap-1 mb-0.5"><Gauge size={10} className="text-[#FC222D]" /><span className="text-[9px] uppercase tracking-wider text-[#6B7280]">Power</span></div>
                <p className="text-xl font-black text-white">{build.power}</p>
                <p className="text-[9px] text-[#4B5563]">{build.powerRPM}</p>
              </div>
              <div>
                <div className="flex items-center gap-1 mb-0.5"><TrendingUp size={10} className="text-[#FC222D]" /><span className="text-[9px] uppercase tracking-wider text-[#6B7280]">Torque</span></div>
                <p className="text-xl font-black text-white">{build.torque}</p>
                <p className="text-[9px] text-[#4B5563]">{build.torqueRPM}</p>
              </div>
            </div>

            <ul className="space-y-1">
              {build.mods.slice(0, 4).map((mod) => (
                <li key={mod} className="flex items-start gap-2 text-xs text-[#9CA3AF]">
                  <span className="text-[#FC222D] shrink-0">›</span>{mod}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {lightbox && (
        <ImageLightbox src={lightbox.src} alt={lightbox.alt} onClose={() => setLightbox(null)} />
      )}
    </>
  );
}

// ── Swipe overlay ────────────────────────────────────────────────────────────
function SwipeOverlay({ builds, onClose }: { builds: Build[]; onClose: () => void }) {
  const [stack, setStack] = useState([...builds]);
  const [exiting, setExiting] = useState<{ dir: "left" | "right" } | null>(null);

  const handleSwipe = useCallback((dir: "left" | "right") => {
    if (stack.length === 0) return;
    setExiting({ dir });
    setTimeout(() => { setStack((p) => p.slice(1)); setExiting(null); }, 280);
  }, [stack]);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  // Lock scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <div className="fixed inset-0 z-[49] flex flex-col items-center justify-center">
      {/* Backdrop — click to close */}
      <div
        className="absolute inset-0 bg-black/90 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Close swipe mode"
      />

      {/* Panel — stop propagation so clicking card doesn't close */}
      <div
        className="relative z-10 flex flex-col items-center w-full max-w-[540px] px-4"
        style={{ maxHeight: '100dvh', paddingTop: 'max(16px, env(safe-area-inset-top))' }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-end w-full mb-3 px-1 shrink-0">
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            aria-label="Exit swipe mode"
          >
            <X size={16} />
          </button>
        </div>

        {/* Card stack */}
        {stack.length > 0 ? (
          <>
            <div className="relative w-full shrink-0" style={{ height: 'clamp(380px, calc(100dvh - 200px), 620px)' }}>
              {stack.slice(0, 3).map((build, i) => {
                const isTop = i === 0;
                const isExiting = isTop && exiting !== null;
                return (
                  <div
                    key={build.car + build.variant}
                    className="absolute inset-0"
                    style={isExiting ? {
                      transform: `translateX(${exiting.dir === "right" ? "130%" : "-130%"}) rotate(${exiting.dir === "right" ? 22 : -22}deg)`,
                      transition: "transform 0.28s ease-in",
                      zIndex: 20,
                      opacity: 0,
                    } : undefined}
                  >
                    <SwipeCard build={build} onSwipe={handleSwipe} isTop={isTop} stackOffset={i} />
                  </div>
                );
              })}
            </div>

            {/* Left / Right navigation */}
            <div className="flex items-center gap-5 mt-4 shrink-0">
              <button
                onClick={() => handleSwipe("left")}
                className="w-20 h-20 rounded-full bg-[#111] border-2 border-[#333] flex items-center justify-center text-white hover:border-[#FC222D] hover:bg-[#FC222D]/10 hover:text-[#FC222D] transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg"
                aria-label="Previous build"
              >
                <ChevronLeft size={36} strokeWidth={2.5} />
              </button>
              <button
                onClick={() => handleSwipe("right")}
                className="w-20 h-20 rounded-full bg-[#FC222D] border-2 border-[#FC222D] flex items-center justify-center text-white hover:bg-[#CC1B25] hover:border-[#CC1B25] transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg shadow-[#FC222D]/20"
                aria-label="Next build"
              >
                <ChevronRight size={36} strokeWidth={2.5} />
              </button>
            </div>
            <p className="text-[11px] text-white/30 mt-2 mb-2 tracking-wide shrink-0">
              ← drag or tap arrows to browse →
            </p>
          </>
        ) : (
          /* Done state */
          <div className="w-full text-center py-14 border border-[#1E1E1E] bg-[#0D0D0D]">
            <Layers size={36} className="text-[#2A2A2A] mx-auto mb-4" />
            <h3 className="text-3xl font-black uppercase text-white mb-2">
              All done.
            </h3>
            <p className="text-[#9CA3AF] text-sm mb-6 px-6">You&apos;ve seen all our builds. Ready to get tuned?</p>
            <div className="flex flex-col gap-3 px-8">
              <Link
                href="/contact"
                className="py-3 bg-[#FC222D] text-white text-sm font-black tracking-widest uppercase hover:bg-[#CC1B25] transition-colors flex items-center justify-center gap-2"
                onClick={onClose}
              >
                Book Your Tune <ChevronRight size={14} />
              </Link>
              <button
                onClick={() => { setStack([...builds]); setExiting(null); }}
                className="py-3 border border-[#2A2A2A] text-white text-sm font-bold tracking-widest uppercase hover:border-white transition-all"
              >
                Start Over
              </button>
              <button onClick={onClose} className="py-2 text-[#4B5563] text-xs font-bold tracking-widest uppercase hover:text-white transition-colors">
                View All Builds
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// ── Main export ──────────────────────────────────────────────────────────────
export function BuildsGrid({ builds }: { builds: Build[] }) {
  const [swipeOpen, setSwipeOpen] = useState(true);
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  return (
    <>
      {/* Swipe overlay — auto-opens on mount */}
      {swipeOpen && (
        <SwipeOverlay builds={builds} onClose={() => setSwipeOpen(false)} />
      )}

      {/* Normal grid — always rendered underneath */}
      <div className="flex justify-end mb-6">
        <button
          onClick={() => setSwipeOpen(true)}
          className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#9CA3AF] hover:text-white transition-colors border border-[#2A2A2A] hover:border-white px-4 py-2"
        >
          <Layers size={13} /> Swipe Mode
        </button>
      </div>

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
                <Image src={build.image} alt={build.imageAlt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-contain p-2 group-hover:scale-105 transition-transform duration-300" />
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
                  <p className="text-xs text-[#6B7280]">{build.variant}</p>
                </div>
                <div className="text-right">
                  <span className="block text-xs font-bold text-[#FC222D]">{build.gain}</span>
                  <span className="block text-[10px] text-[#6B7280]">{build.gainTorque}</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 mb-4 p-3 bg-black/50 border border-[#1A1A1A]">
                <div>
                  <div className="flex items-center gap-1.5 mb-1"><Gauge size={11} className="text-[#FC222D]" /><span className="text-[10px] uppercase tracking-wider text-[#6B7280]">Power</span></div>
                  <p className="text-xl font-black text-white">{build.power}</p>
                  <p className="text-[10px] text-[#4B5563]">{build.powerRPM}</p>
                </div>
                <div>
                  <div className="flex items-center gap-1.5 mb-1"><TrendingUp size={11} className="text-[#FC222D]" /><span className="text-[10px] uppercase tracking-wider text-[#6B7280]">Torque</span></div>
                  <p className="text-xl font-black text-white">{build.torque}</p>
                  <p className="text-[10px] text-[#4B5563]">{build.torqueRPM}</p>
                </div>
              </div>
              <ul className="space-y-1.5">
                {build.mods.map((mod) => (
                  <li key={mod} className="flex items-start gap-2 text-xs text-[#9CA3AF]">
                    <span className="text-[#FC222D] shrink-0">›</span>{mod}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

      {lightbox && <ImageLightbox src={lightbox.src} alt={lightbox.alt} onClose={() => setLightbox(null)} />}
    </>
  );
}
