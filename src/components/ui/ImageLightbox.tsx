"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { X } from "lucide-react";

interface Props {
  src: string;
  alt: string;
  onClose: () => void;
}

export function ImageLightbox({ src, alt, onClose }: Props) {
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [handleKey]);

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={alt}
    >
      {/* Close button — top right, always visible */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 w-11 h-11 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 active:scale-95 transition-transform shadow-xl focus-visible:ring-2 focus-visible:ring-white"
        aria-label="Close image"
        autoFocus
      >
        <X size={20} strokeWidth={2.5} aria-hidden="true" />
      </button>

      {/* Dismiss hint */}
      <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-white/40 tracking-wider pointer-events-none whitespace-nowrap">
        Tap anywhere to close
      </p>

      {/* Image — stop propagation so clicking the image itself doesn't close */}
      <div
        className="relative max-w-5xl w-full"
        style={{ height: '90dvh' }}
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, 90vw"
          priority
        />
      </div>
    </div>
  );
}
