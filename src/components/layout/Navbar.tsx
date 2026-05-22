"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type NavChild = { href: string; label: string; desc: string };
type NavItem = { href: string; label: string; children?: NavChild[] };

const NAV_LINKS: NavItem[] = [
  { href: "/", label: "Home" },
  {
    href: "/our-work",
    label: "Our Work",
    children: [
      { href: "/our-work",           label: "Customer Builds",     desc: "Gallery of tuned cars & dyno results" },
      { href: "/melbourne-tuning",   label: "Melbourne Tuning",    desc: "In-person dyno tuning at the workshop" },
    ],
  },
  {
    href: "/tuning-guide",
    label: "Tuning Guide",
    children: [
      { href: "/tuning-guide",       label: "Tuning Guide",        desc: "Platform guide, services & ECU overview" },
      { href: "/melbourne-tuning",   label: "Melbourne Tuning",    desc: "Book an in-person dyno session" },
      { href: "/remote-tuning",      label: "Remote Tuning",       desc: "Full custom tune anywhere in Australia" },
    ],
  },
  {
    href: "/products",
    label: "Products",
    children: [
      { href: "/products",           label: "All Products",        desc: "Shop PTEB tools & merchandise" },
      { href: "/warport",            label: "PTEB Warport",        desc: "Remote ECU tuning device" },
      { href: "/products#hoodie",    label: "PTEB Hoodie",         desc: "Official PTEB merchandise" },
    ],
  },
  {
    href: "/contact",
    label: "Contact",
    children: [
      { href: "/contact",            label: "Book a Tune",         desc: "Enquire about a custom ECU calibration" },
      { href: "/book",               label: "Book Online",         desc: "Select a date & confirm your dyno slot" },
    ],
  },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); setActiveDropdown(null); }, [pathname]);

  const openDropdown = (href: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveDropdown(href);
  };

  const closeDropdown = () => {
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 120);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "backdrop-blur-md border-b bg-black/95 border-[#222]" : "bg-transparent"
      )}
      role="banner"
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-[#FC222D] focus:text-white focus:px-4 focus:py-2 focus:text-sm focus:font-medium"
      >
        Skip to main content
      </a>

      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 h-16 md:h-20 flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <Link href="/" className="flex items-center hover:opacity-80 transition-opacity shrink-0" aria-label="PTEB Tuning — Home">
          <Image
            src="/logo.png"
            alt="PTEB Tuning — Prestige Team Euro Boost"
            width={200}
            height={80}
            className="w-40 md:w-56 h-auto"
            priority
          />
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {NAV_LINKS.map(({ href, label, children }) => {
            const isActive = pathname === href || (href !== "/" && pathname.startsWith(href));
            const isOpen = activeDropdown === href;

            return (
              <li
                key={href}
                className="relative"
                onMouseEnter={() => children && openDropdown(href)}
                onMouseLeave={() => children && closeDropdown()}
              >
                <Link
                  href={href}
                  className={cn(
                    "flex items-center gap-1 text-sm font-medium tracking-wider uppercase transition-colors duration-200 relative group py-2",
                    isActive ? "text-[#FC222D]" : "text-[#9CA3AF] hover:text-white"
                  )}
                  aria-expanded={children ? isOpen : undefined}
                  aria-haspopup={children ? "true" : undefined}
                >
                  {label}
                  {children && (
                    <ChevronDown
                      size={12}
                      aria-hidden="true"
                      className={cn("transition-transform duration-200 mt-px", isOpen ? "rotate-180" : "")}
                    />
                  )}
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 h-px bg-[#FC222D] transition-all duration-300",
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    )}
                  />
                </Link>

                {/* Dropdown panel */}
                {children && (
                  <div
                    className={cn(
                      "absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-black border border-[#1E1E1E] shadow-2xl transition-all duration-200 origin-top",
                      isOpen ? "opacity-100 scale-y-100 pointer-events-auto" : "opacity-0 scale-y-95 pointer-events-none"
                    )}
                    role="menu"
                    onMouseEnter={() => openDropdown(href)}
                    onMouseLeave={() => closeDropdown()}
                  >
                    {/* Red top accent */}
                    <div className="h-0.5 bg-[#FC222D]" aria-hidden="true" />
                    <ul className="py-2">
                      {children.map((child) => (
                        <li key={child.href} role="menuitem">
                          <Link
                            href={child.href}
                            className="flex flex-col px-5 py-3 hover:bg-[#111] group/item transition-colors"
                          >
                            <span className="text-white text-xs font-black uppercase tracking-widest group-hover/item:text-[#FC222D] transition-colors">
                              {child.label}
                            </span>
                            <span className="text-[#6B7280] text-[11px] mt-0.5 leading-snug">
                              {child.desc}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4 shrink-0">
          <a
            href="tel:+61422300859"
            className="flex items-center gap-2 text-sm text-[#9CA3AF] hover:text-white transition-colors"
            aria-label="Call PTEB Tuning"
          >
            <Phone size={14} aria-hidden="true" />
            <span>0422 300 859</span>
          </a>
          <Link
            href="/book"
            className="px-5 py-2.5 bg-[#FC222D] text-white text-sm font-bold tracking-widest uppercase hover:bg-[#CC1B25] transition-colors focus-visible:ring-2 focus-visible:ring-[#FC222D] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            Book a Tune
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-white p-3 min-h-[44px] min-w-[44px] flex items-center justify-center focus-visible:ring-2 focus-visible:ring-[#FC222D]"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>
      </nav>

      {/* Mobile drawer — flat list of all pages */}
      <div
        id="mobile-menu"
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 border-b bg-black/98 border-[#222]",
          open ? "max-h-screen pb-6" : "max-h-0"
        )}
        role="navigation"
        aria-label="Mobile navigation menu"
      >
        <ul className="px-4 pt-4 flex flex-col gap-1" role="list">
          {NAV_LINKS.flatMap(({ href, label, children }) =>
            children
              ? children.map((child) => ({ href: child.href, label: child.label, parent: label }))
              : [{ href, label, parent: null as string | null }]
          ).map(({ href, label, parent }) => (
            <li key={href + label}>
              <Link
                href={href}
                className={cn(
                  "flex items-center justify-between px-3 py-3 text-sm font-medium tracking-wider uppercase border-l-2 transition-all",
                  pathname === href
                    ? "border-[#FC222D] text-white pl-5"
                    : "border-transparent text-[#9CA3AF] hover:text-white hover:border-[#FC222D] hover:pl-5"
                )}
              >
                <span>{label}</span>
                {parent && <span className="text-[10px] text-[#4B5563] normal-case tracking-normal font-normal">{parent}</span>}
              </Link>
            </li>
          ))}
        </ul>
        <div className="px-7 pt-4 flex flex-col gap-3">
          <a href="tel:+61422300859" className="flex items-center gap-2 text-sm text-[#9CA3AF]">
            <Phone size={14} aria-hidden="true" />
            <span>0422 300 859</span>
          </a>
          <Link href="/book" className="block text-center py-3 bg-[#FC222D] text-white text-sm font-bold tracking-widest uppercase">
            Book a Tune
          </Link>
        </div>
      </div>
    </header>
  );
}
