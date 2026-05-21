"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { X, ChevronLeft, ChevronRight, Play, ExternalLink } from "lucide-react";

interface Post {
  type: "tiktok" | "instagram" | "facebook";
  id: string;
  caption: string;
  embedUrl: string;
  profileUrl: string;
}

const POSTS: Post[] = [
  {
    type: "instagram",
    id: "DX6aaOVPWu3",
    caption: "Reel by @ptebtuning — German Car Specialists",
    embedUrl: "https://www.instagram.com/reel/DX6aaOVPWu3/embed/captioned/",
    profileUrl: "https://www.instagram.com/reel/DX6aaOVPWu3/",
  },
  {
    type: "instagram",
    id: "DXyoDMcPP4o",
    caption: "Reel by @ptebtuning — German Car Specialists",
    embedUrl: "https://www.instagram.com/reel/DXyoDMcPP4o/embed/captioned/",
    profileUrl: "https://www.instagram.com/reel/DXyoDMcPP4o/",
  },
  {
    type: "instagram",
    id: "DVmUBRfE5WJ",
    caption: "Reel by @ptebtuning — German Car Specialists",
    embedUrl: "https://www.instagram.com/reel/DVmUBRfE5WJ/embed/captioned/",
    profileUrl: "https://www.instagram.com/reel/DVmUBRfE5WJ/",
  },
  {
    type: "tiktok",
    id: "7541378668547935508",
    caption: "We own this game #mechanic #s3 #exhaust #tuning #viralme",
    embedUrl: "https://www.tiktok.com/embed/v2/7541378668547935508",
    profileUrl: "https://www.tiktok.com/@prestigeteameuroboost/video/7541378668547935508",
  },
  {
    type: "tiktok",
    id: "7485931221176864021",
    caption: "Extremely impressed with the outcome on this with our MAXR Device! 😍🔥 #mechanic #tuning #bmw",
    embedUrl: "https://www.tiktok.com/embed/v2/7485931221176864021",
    profileUrl: "https://www.tiktok.com/@prestigeteameuroboost/video/7485931221176864021",
  },
  {
    type: "tiktok",
    id: "7525698660336717076",
    caption: "Going to perfect this tune even better before the water meth tune! #mechanic #tuning #dynotune #golfr",
    embedUrl: "https://www.tiktok.com/embed/v2/7525698660336717076",
    profileUrl: "https://www.tiktok.com/@prestigeteameuroboost/video/7525698660336717076",
  },
  {
    type: "facebook",
    id: "fb1",
    caption: "PTEB Tuning — Facebook post",
    embedUrl: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3Dpfbid02USJdKfm1fMy5NCbSU3U6szY5LNmP8NdobuZm4PxPkbPLWw1AdSGGgHkf6E8X5iQwl%26id%3D61552644926281&show_text=false&width=500",
    profileUrl: "https://www.facebook.com/permalink.php?story_fbid=pfbid02USJdKfm1fMy5NCbSU3U6szY5LNmP8NdobuZm4PxPkbPLWw1AdSGGgHkf6E8X5iQwl&id=61552644926281",
  },
  {
    type: "facebook",
    id: "fb2",
    caption: "PTEB Tuning — Facebook post",
    embedUrl: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fphoto%2F%3Ffbid%3D122184559694088164%26set%3Da.122096318534088164&show_text=false&width=500",
    profileUrl: "https://www.facebook.com/photo/?fbid=122184559694088164&set=a.122096318534088164",
  },
  {
    type: "facebook",
    id: "fb3",
    caption: "PTEB Tuning — Facebook post",
    embedUrl: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fphoto.php%3Ffbid%3D122251975964088164%26set%3Da.122114077676088164%26type%3D3&show_text=false&width=500",
    profileUrl: "https://www.facebook.com/photo.php?fbid=122251975964088164&set=a.122114077676088164&type=3",
  },
];

function TikTokIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.16 8.16 0 0 0 4.78 1.52V6.74a4.85 4.85 0 0 1-1.01-.05z" />
    </svg>
  );
}

function InstagramIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  );
}

function FacebookIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function PlatformIcon({ type, size = 20 }: { type: Post["type"]; size?: number }) {
  if (type === "tiktok") return <TikTokIcon size={size} />;
  if (type === "facebook") return <FacebookIcon size={size} />;
  return <InstagramIcon size={size} />;
}

function platformLabel(type: Post["type"]) {
  if (type === "tiktok") return "TikTok";
  if (type === "facebook") return "Facebook";
  return "Instagram";
}

function platformGradient(type: Post["type"]) {
  if (type === "tiktok") return "bg-gradient-to-br from-[#69C9D0] via-black to-[#EE1D52]";
  if (type === "facebook") return "bg-gradient-to-br from-[#1877F2] to-[#0a4fa8]";
  return "bg-gradient-to-br from-[#833ab4] via-[#fd1d1d] to-[#fcb045]";
}

function modalAspect(type: Post["type"]) {
  if (type === "tiktok") return "9/16";
  if (type === "facebook") return "4/3";
  return "4/5";
}

export function SocialFeed() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const dragStartX = useRef(0);
  const dragCurrentX = useRef(0);
  const [dragOffset, setDragOffset] = useState(0);
  const isDragging = useRef(false);
  const isOpen = activeIndex !== null;
  const activePost = activeIndex !== null ? POSTS[activeIndex] : null;

  const close = useCallback(() => {
    setActiveIndex(null);
    setDragOffset(0);
    isDragging.current = false;
  }, []);

  const navigate = useCallback((dir: "prev" | "next") => {
    setActiveIndex((i) => {
      if (i === null) return i;
      if (dir === "prev") return i === 0 ? null : i - 1;
      return i === POSTS.length - 1 ? null : i + 1;
    });
    setDragOffset(0);
    isDragging.current = false;
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") navigate("prev");
      if (e.key === "ArrowRight") navigate("next");
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, navigate, close]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const onTouchStart = (e: React.TouchEvent) => {
    dragStartX.current = e.touches[0].clientX;
    isDragging.current = true;
  };
  const onTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current) return;
    setDragOffset(e.touches[0].clientX - dragStartX.current);
  };
  const onTouchEnd = () => {
    isDragging.current = false;
    if (dragCurrentX.current < -60) navigate("next");
    else if (dragCurrentX.current > 60) navigate("prev");
    else setDragOffset(0);
    dragCurrentX.current = 0;
  };

  const onMouseDown = (e: React.MouseEvent) => {
    dragStartX.current = e.clientX;
    isDragging.current = true;
  };
  const onMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging.current) return;
    const dx = e.clientX - dragStartX.current;
    dragCurrentX.current = dx;
    setDragOffset(dx);
  }, []);
  const onMouseUp = useCallback(() => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const dx = dragCurrentX.current;
    if (dx < -60) navigate("next");
    else if (dx > 60) navigate("prev");
    else setDragOffset(0);
    dragCurrentX.current = 0;
  }, [navigate]);

  useEffect(() => {
    if (!isOpen) return;
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [isOpen, onMouseMove, onMouseUp]);

  return (
    <>
      {/* Grid */}
      <div className="grid grid-cols-3 gap-4" role="list" aria-label="PTEB social media posts">
        {POSTS.map((post, idx) => (
          <button
            key={post.id}
            onClick={() => setActiveIndex(idx)}
            className="group relative aspect-[9/16] bg-[#0D0D0D] border border-[#1E1E1E] hover:border-[#FC222D]/60 transition-all duration-300 overflow-hidden focus-visible:ring-2 focus-visible:ring-[#FC222D] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            role="listitem"
            aria-label={`Open ${platformLabel(post.type)} post`}
          >
            <div className={`absolute inset-0 opacity-10 group-hover:opacity-25 transition-opacity ${platformGradient(post.type)}`} aria-hidden="true" />
            <div className="absolute top-3 left-3 text-white/80 group-hover:text-white transition-colors">
              <PlatformIcon type={post.type} size={16} />
            </div>
            <div className="absolute top-3 right-3">
              <span className="text-[9px] font-bold tracking-widest uppercase px-2 py-0.5 bg-black/40 text-white">
                {platformLabel(post.type)}
              </span>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center border border-white/20 group-hover:bg-[#FC222D]/80 group-hover:border-[#FC222D] transition-all duration-300 group-hover:scale-110">
                <Play size={20} className="text-white fill-white ml-0.5" aria-hidden="true" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-3" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.5), transparent)' }}>
              <p className="text-[10px] text-white/70 leading-relaxed line-clamp-2">{post.caption}</p>
            </div>
          </button>
        ))}
      </div>

      {/* Swipe modal */}
      {isOpen && activePost && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-label={`Post ${(activeIndex ?? 0) + 1} of ${POSTS.length}`}
        >
          <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" onClick={close} aria-hidden="true" />

          <div className="relative z-10 w-full max-w-sm mx-4 select-none">

            {/* Top bar */}
            <div className="flex items-center justify-between mb-4 px-1">
              <span className="text-xs text-white/50">{(activeIndex ?? 0) + 1} / {POSTS.length}</span>
              <button
                onClick={close}
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                aria-label="Close"
              >
                <X size={16} aria-hidden="true" />
              </button>
            </div>

            {/* Card + nav arrows */}
            <div className="relative flex items-center">
              <button
                onClick={() => navigate("prev")}
                className="absolute -left-5 z-20 w-10 h-10 rounded-full bg-white text-black flex items-center justify-center shadow-xl hover:scale-110 hover:bg-[#FC222D] hover:text-white active:scale-95 transition-all"
                aria-label={activeIndex === 0 ? "Exit" : "Previous post"}
              >
                <ChevronLeft size={20} strokeWidth={2.5} aria-hidden="true" />
              </button>

              {/* Draggable post card */}
              <div
                className="w-full cursor-grab active:cursor-grabbing"
                style={{
                  transform: `translateX(${dragOffset}px) rotate(${dragOffset * 0.03}deg)`,
                  transition: isDragging.current ? "none" : "transform 0.3s cubic-bezier(0.34,1.56,0.64,1)",
                }}
                onTouchStart={onTouchStart}
                onTouchMove={onTouchMove}
                onTouchEnd={onTouchEnd}
                onMouseDown={onMouseDown}
              >
                <div className={`relative w-full aspect-[9/16] overflow-hidden border border-[#2A2A2A] ${platformGradient(activePost.type)} bg-opacity-20`}>
                  {/* Background gradient */}
                  <div className={`absolute inset-0 opacity-20 ${platformGradient(activePost.type)}`} aria-hidden="true" />
                  <div className="absolute inset-0 bg-[#0A0A0A]/70" aria-hidden="true" />

                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center gap-6">
                    {/* Platform icon */}
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-br ${platformGradient(activePost.type)}`}>
                      <PlatformIcon type={activePost.type} size={28} />
                    </div>

                    <div>
                      <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-white/40 mb-3">
                        {platformLabel(activePost.type)}
                      </p>
                      <p className="text-sm text-white/80 leading-relaxed">
                        {activePost.caption}
                      </p>
                    </div>

                    <a
                      href={activePost.profileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-2 px-6 py-3 bg-[#FC222D] text-white text-xs font-bold tracking-widest uppercase hover:bg-[#CC1B25] transition-colors"
                    >
                      Watch on {platformLabel(activePost.type)}
                      <ExternalLink size={12} aria-hidden="true" />
                    </a>
                  </div>

                  {/* Hint */}
                  <p className="absolute bottom-4 inset-x-0 text-center text-[9px] text-white/25 tracking-widest uppercase">
                    Swipe or use arrows
                  </p>
                </div>
              </div>

              <button
                onClick={() => navigate("next")}
                className="absolute -right-5 z-20 w-10 h-10 rounded-full bg-white text-black flex items-center justify-center shadow-xl hover:scale-110 hover:bg-[#FC222D] hover:text-white active:scale-95 transition-all"
                aria-label={activeIndex === POSTS.length - 1 ? "Exit" : "Next post"}
              >
                <ChevronRight size={20} strokeWidth={2.5} aria-hidden="true" />
              </button>
            </div>

            {/* Dot indicators */}
            <div className="flex items-center justify-center gap-1.5 mt-5">
              {POSTS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-200 ${i === activeIndex ? "w-6 bg-[#FC222D]" : "w-1.5 bg-white/20 hover:bg-white/40"}`}
                  aria-label={`Go to post ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
