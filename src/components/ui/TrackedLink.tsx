"use client";

import { trackWhatsApp, trackPhone, trackCTA } from "@/lib/analytics";

interface TrackedLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  trackAs: "whatsapp" | "phone" | "cta";
  trackLabel?: string;
}

export function TrackedLink({ trackAs, trackLabel = "unknown", onClick, children, ...props }: TrackedLinkProps) {
  return (
    <a
      {...props}
      onClick={(e) => {
        if (trackAs === "whatsapp") trackWhatsApp(trackLabel);
        else if (trackAs === "phone") trackPhone(trackLabel);
        else trackCTA(trackLabel);
        onClick?.(e);
      }}
    >
      {children}
    </a>
  );
}
