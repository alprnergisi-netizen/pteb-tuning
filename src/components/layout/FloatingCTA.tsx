"use client";

import { usePathname } from "next/navigation";
import { Phone, MessageCircle } from "lucide-react";

export function FloatingCTA() {
  const pathname = usePathname();
  if (pathname === "/") return null;

  return (
    <>
      {/* Mobile — full-width bottom bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden flex border-t border-white/10 shadow-2xl">
        <a
          href="tel:+61422300859"
          className="flex-1 flex items-center justify-center gap-2.5 py-4 bg-[#111] text-white text-sm font-bold tracking-wider uppercase active:bg-[#222] transition-colors"
          aria-label="Call PTEB Tuning"
        >
          <Phone size={17} aria-hidden="true" />
          Call Us
        </a>
        <a
          href="https://wa.me/61422300859?text=Hi%20PTEB%2C%20I%27d%20like%20to%20enquire%20about%20a%20tune%20for%20my%20car."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2.5 py-4 bg-[#25D366] text-white text-sm font-bold tracking-wider uppercase active:bg-[#1ebe5d] transition-colors"
          aria-label="WhatsApp PTEB Tuning"
        >
          <MessageCircle size={17} aria-hidden="true" />
          WhatsApp
        </a>
      </div>

      {/* Desktop — floating pill on right edge */}
      <div className="hidden md:flex fixed right-0 bottom-12 z-50 flex-col gap-0 shadow-2xl">
        <a
          href="tel:+61422300859"
          className="group flex items-center gap-3 pl-4 pr-5 py-3.5 bg-[#111] text-white text-xs font-bold tracking-widest uppercase hover:bg-[#FC222D] transition-colors"
          aria-label="Call PTEB Tuning"
        >
          <Phone size={15} aria-hidden="true" />
          <span className="hidden group-hover:inline transition-all">0422 300 859</span>
          <span className="group-hover:hidden">Call</span>
        </a>
        <a
          href="https://wa.me/61422300859?text=Hi%20PTEB%2C%20I%27d%20like%20to%20enquire%20about%20a%20tune%20for%20my%20car."
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 pl-4 pr-5 py-3.5 bg-[#25D366] text-white text-xs font-bold tracking-widest uppercase hover:bg-[#1ebe5d] transition-colors"
          aria-label="WhatsApp PTEB Tuning"
        >
          <MessageCircle size={15} aria-hidden="true" />
          <span className="hidden group-hover:inline">Chat Now</span>
          <span className="group-hover:hidden">WhatsApp</span>
        </a>
      </div>
    </>
  );
}
