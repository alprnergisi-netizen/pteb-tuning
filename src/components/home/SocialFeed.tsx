"use client";

const REELS = [
  {
    id: "DX6aaOVPWu3",
    url: "https://www.instagram.com/reel/DX6aaOVPWu3/",
  },
  {
    id: "DXyoDMcPP4o",
    url: "https://www.instagram.com/reel/DXyoDMcPP4o/",
  },
  {
    id: "DVmUBRfE5WJ",
    url: "https://www.instagram.com/reel/DVmUBRfE5WJ/",
  },
];

export function SocialFeed() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
      {REELS.map((reel) => (
        <div
          key={reel.id}
          className="relative w-full overflow-hidden border border-[#1E1E1E] hover:border-[#FC222D]/50 transition-colors"
          style={{ aspectRatio: "9/16" }}
        >
          <iframe
            src={`https://www.instagram.com/reel/${reel.id}/embed/?autoplay=1&cr=1`}
            className="absolute inset-0 w-full h-full border-0"
            scrolling="no"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
            title="PTEB Tuning Instagram Reel"
          />
        </div>
      ))}
    </div>
  );
}
