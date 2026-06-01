import Link from "next/link";
import { Instagram, Phone, MessageCircle, MapPin } from "lucide-react";

const LINKS = {
  services: [
    { href: "/melbourne-tuning", label: "Dyno Tuning Melbourne" },
    { href: "/remote-tuning", label: "Remote Tuning" },
    { href: "/warport", label: "Warport Device" },
    { href: "/our-work", label: "Our Work" },
    { href: "/tuning-guide", label: "Tuning Guide" },
    { href: "/products", label: "Shop" },
  ],
  company: [
    { href: "/team", label: "Our Team" },
    { href: "/book", label: "Book a Tune" },
    { href: "/contact", label: "Contact" },
    { href: "/tuning-guide#faq", label: "FAQ" },
  ],
};

export function Footer() {
  return (
    <footer
      className="bg-[#0A0A0A] border-t border-[#1E1E1E] text-[#9CA3AF]"
      role="contentinfo"
      aria-label="PTEB Tuning footer"
    >
      <div className="h-1 bg-[#FC222D]" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand + contact */}
        <div className="lg:col-span-2">
          <div className="mb-4">
            <span className="block text-[10px] font-medium tracking-[0.25em] uppercase text-[#6B7280]">
              Tuned By
            </span>
            <span className="block text-3xl font-extrabold tracking-tight text-[#FC222D]">
              PTEB
            </span>
          </div>
          <p className="text-sm leading-relaxed max-w-xs mb-6">
            Data-driven custom dyno tuning for European performance vehicles. Dyno-logged, road-verified, and built from scratch for your car.
          </p>

          {/* NAP — visible for local SEO */}
          <address className="not-italic mb-6 space-y-2">
            <a
              href="https://maps.google.com/?q=168+McIntyre+Rd+Sunshine+North+VIC+3020"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-2 text-sm hover:text-white transition-colors"
              aria-label="PTEB Tuning address: 168 McIntyre Rd, Sunshine North VIC 3020"
            >
              <MapPin size={14} className="shrink-0 mt-0.5" aria-hidden="true" />
              <span>168 McIntyre Rd, Sunshine North VIC 3020</span>
            </a>
            <a
              href="tel:+61422300859"
              className="flex items-center gap-2 text-sm hover:text-white transition-colors"
              aria-label="Call PTEB: 0422 300 859"
            >
              <Phone size={14} aria-hidden="true" />
              <span>0422 300 859</span>
            </a>
            <a
              href="https://wa.me/61422300859"
              className="flex items-center gap-2 text-sm hover:text-white transition-colors"
              aria-label="WhatsApp PTEB"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={14} aria-hidden="true" />
              <span>WhatsApp</span>
            </a>
          </address>

          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com/ptebtuning"
              className="hover:text-white transition-colors"
              aria-label="PTEB Tuning on Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram size={16} aria-hidden="true" />
            </a>
            <span className="text-xs text-[#4B5563]">Mon–Fri 8am–5pm · Sat 9am–2pm</span>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-white text-xs font-bold tracking-[0.2em] uppercase mb-4">
            Services
          </h3>
          <ul className="flex flex-col gap-2" role="list">
            {LINKS.services.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-sm hover:text-white hover:pl-1 transition-all duration-200"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white text-xs font-bold tracking-[0.2em] uppercase mb-4">
            Company
          </h3>
          <ul className="flex flex-col gap-2 mb-6" role="list">
            {LINKS.company.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-sm hover:text-white hover:pl-1 transition-all duration-200"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="p-4 border border-[#FC222D]/30 bg-[#FC222D]/5">
            <p className="text-xs font-bold text-white mb-1">Ready to tune?</p>
            <p className="text-xs text-[#6B7280] mb-3">Tell us your platform, mods, and goals.</p>
            <Link
              href="/contact"
              className="block text-center py-2 bg-[#FC222D] text-white text-xs font-bold tracking-widest uppercase hover:bg-[#CC1B25] transition-colors"
            >
              Enquire Now
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-[#1E1E1E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[#4B5563]">
          <p>© {new Date().getFullYear()} PTEB Tuning — Prestige Team Euro Boost. All rights reserved.</p>
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <p>
              Remote tuning involves risk. Pre-approval required.{" "}
              <Link href="/contact" className="hover:text-white transition-colors underline underline-offset-2">
                Get assessed
              </Link>
            </p>
            <p className="text-[#4B5563]">
              by{" "}
              <a
                href="https://nexiomarketing.com.au"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-400 transition-colors"
              >
                nexio marketing.com.au
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
