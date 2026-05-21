import { ShieldCheck, Star, Clock, Phone } from "lucide-react";

export function TrustStrip() {
  return (
    <div className="bg-[#0a0a0a] border-b border-[#1a1a1a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-center md:justify-between gap-6 py-2.5 overflow-x-auto scrollbar-none">
          {[
            { icon: Star,        text: "5.0 Google Rating · 47+ Reviews" },
            { icon: ShieldCheck, text: "500+ Cars Dyno Verified" },
            { icon: Clock,       text: "Response Within 24 Hours" },
            { icon: Phone,       text: "Call 0422 300 859" },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2 shrink-0 text-[#9CA3AF]">
              <Icon size={13} className="text-[#FC222D] shrink-0" aria-hidden="true" />
              <span className="text-[11px] font-medium tracking-wide whitespace-nowrap">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
