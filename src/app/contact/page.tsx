import type { Metadata } from "next";
import Link from "next/link";
import { Waves } from "@/components/ui/Waves";
import { ContactForm } from "@/components/contact/ContactForm";
import { Phone, MessageCircle, Instagram, ChevronRight, MapPin, Clock, Star, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Book a Tune Melbourne — Contact PTEB Tuning | 0422 300 859",
  description: "Ready to book a custom ECU tune? Contact PTEB Tuning by phone, WhatsApp, or enquiry form. Tell us your car, mods, and goals — we'll pre-approve your vehicle and confirm what your tune will deliver. Free pre-approval, no obligation.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Book a Tune Melbourne — Contact PTEB | 0422 300 859",
    description: "Book your custom ECU tune with PTEB. Free pre-approval check. Call or WhatsApp 0422 300 859, or fill in the enquiry form. Response within 24 hours.",
    url: "/contact",
    images: [{ url: "/dynoimage.jpg", width: 1200, height: 630, alt: "Book a tune — PTEB Tuning Melbourne workshop" }],
  },
};

const contactSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://ptebtuning.com" },
        { "@type": "ListItem", position: 2, name: "Contact", item: "https://ptebtuning.com/contact" },
      ],
    },
    {
      "@type": "LocalBusiness",
      name: "PTEB Tuning",
      telephone: "+61422300859",
      email: "prestigeteamhelp@gmail.com",
      url: "https://ptebtuning.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "168 McIntyre Rd",
        addressLocality: "Sunshine North",
        addressRegion: "VIC",
        postalCode: "3020",
        addressCountry: "AU",
      },
      openingHoursSpecification: [
        { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "08:00", closes: "17:00" },
        { "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday"], opens: "09:00", closes: "14:00" },
      ],
      contactPoint: [
        { "@type": "ContactPoint", telephone: "+61422300859", contactType: "reservations", description: "Book a custom dyno tune" },
        { "@type": "ContactPoint", url: "https://wa.me/61422300859", contactType: "customer support" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How do I book an ECU tune with PTEB?",
          acceptedAnswer: { "@type": "Answer", text: "Contact PTEB Tuning by phone (0422 300 859), WhatsApp, or the online enquiry form. Tell us your vehicle, current modifications, fuel type, and power goals. We'll pre-approve your vehicle and confirm exactly what your tune will deliver before you commit to anything." },
        },
        {
          "@type": "Question",
          name: "Where is PTEB Tuning located?",
          acceptedAnswer: { "@type": "Answer", text: "PTEB Tuning is located at 168 McIntyre Rd, Sunshine North VIC 3020, Melbourne, Australia. Open Monday to Friday 8am–5pm and Saturday 9am–2pm. Contact us via phone or WhatsApp at 0422 300 859 to arrange a booking." },
        },
        {
          "@type": "Question",
          name: "How long does a dyno tune take?",
          acceptedAnswer: { "@type": "Answer", text: "A full custom dyno tune typically takes 4–8 hours depending on the platform. This includes a pre-health inspection, baseline pull, iterative calibration, repeatability verification, and road validation. You receive full data logs and a dyno graph." },
        },
        {
          "@type": "Question",
          name: "Does PTEB offer remote ECU tuning?",
          acceptedAnswer: { "@type": "Answer", text: "Yes. PTEB offers remote ECU tuning Australia-wide via the PTEB Warport — an OBD2 device that ships to you and allows our tuners to calibrate your engine remotely through the PTEB app. No workshop visit required. Available for BMW, Audi, VW, Mercedes, and Porsche platforms." },
        },
      ],
    },
  ],
};

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />
      {/* ── Hero ────────────────────────────────────────────────────── */}
      <section
        className="relative pt-28 pb-16 md:pt-36 md:pb-20 bg-black border-b border-[#1E1E1E] overflow-hidden"
        aria-labelledby="contact-heading"
      >
        <Waves
          lineColor="rgba(252,34,45,0.6)"
          backgroundColor="transparent"
          waveSpeedX={0.02}
          waveSpeedY={0.008}
          waveAmpX={60}
          waveAmpY={30}
          xGap={16}
          yGap={22}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.5) 50%, transparent 100%)' }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
          <nav className="flex items-center gap-2 text-xs text-[#6B7280] mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={12} aria-hidden="true" />
            <span className="text-[#9CA3AF]">Contact</span>
          </nav>
          <p className="eyebrow mb-4">
            Get In Touch
          </p>
          <h1
            id="contact-heading"
            className="text-3xl sm:text-5xl md:text-7xl font-black uppercase text-white leading-none mb-6"
          >
            Book a Tune
          </h1>
          <p className="text-base text-[#9CA3AF] max-w-xl leading-relaxed">
            Tell us your platform, current mods, fuel type, and goals. We assess compatibility and
            pre-approve your vehicle before confirming any booking.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24 grid lg:grid-cols-2 gap-12 lg:gap-16">

        {/* ── Enquiry form ────────────────────────────────────────────── */}
        <section aria-labelledby="form-heading">
          <h2
            id="form-heading"
            className="text-2xl font-black uppercase text-white mb-6"
           
          >
            Enquiry Form
          </h2>
          <ContactForm />
        </section>

        {/* ── Contact info ────────────────────────────────────────────── */}
        <section aria-labelledby="contact-info-heading">
          <h2
            id="contact-info-heading"
            className="text-2xl font-black uppercase text-white mb-6"
           
          >
            Get In Touch
          </h2>

          <div className="space-y-6 mb-10">
            <a
              href="tel:+61422300859"
              className="flex items-center gap-4 p-5 border border-[#1E1E1E] bg-[#111111] hover:border-[#FC222D]/50 transition-colors group"
              aria-label="Call PTEB Tuning on 0422 300 859"
            >
              <div className="w-10 h-10 bg-[#FC222D]/10 flex items-center justify-center border border-[#FC222D]/20 group-hover:bg-[#FC222D]/20 transition-colors">
                <Phone size={18} className="text-[#FC222D]" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs text-[#6B7280] uppercase tracking-wider mb-0.5">Phone</p>
                <p className="text-white font-semibold">0422 300 859</p>
              </div>
            </a>

            <a
              href="https://wa.me/61422300859"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 border border-[#1E1E1E] bg-[#111111] hover:border-[#FC222D]/50 transition-colors group"
              aria-label="WhatsApp PTEB Tuning"
            >
              <div className="w-10 h-10 bg-[#FC222D]/10 flex items-center justify-center border border-[#FC222D]/20 group-hover:bg-[#FC222D]/20 transition-colors">
                <MessageCircle size={18} className="text-[#FC222D]" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs text-[#6B7280] uppercase tracking-wider mb-0.5">WhatsApp</p>
                <p className="text-white font-semibold">Message us directly</p>
              </div>
            </a>

            <a
              href="https://instagram.com/ptebtuning"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 border border-[#1E1E1E] bg-[#111111] hover:border-[#FC222D]/50 transition-colors group"
              aria-label="PTEB Tuning on Instagram"
            >
              <div className="w-10 h-10 bg-[#FC222D]/10 flex items-center justify-center border border-[#FC222D]/20 group-hover:bg-[#FC222D]/20 transition-colors">
                <Instagram size={18} className="text-[#FC222D]" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs text-[#6B7280] uppercase tracking-wider mb-0.5">Instagram</p>
                <p className="text-white font-semibold">@ptebtuning</p>
              </div>
            </a>

            <a
              href="https://www.google.com/maps/search/?api=1&query=PTEB+Tuning+Melbourne"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 border border-[#1E1E1E] bg-[#111111] hover:border-[#FC222D]/50 transition-colors group"
              aria-label="Find PTEB Tuning on Google Maps"
            >
              <div className="w-10 h-10 bg-white/5 flex items-center justify-center border border-[#2A2A2A] group-hover:bg-white/10 transition-colors shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-[#6B7280] uppercase tracking-wider mb-0.5">Google</p>
                <p className="text-white font-semibold">Find us on Google Maps</p>
                <div className="flex items-center gap-1 mt-1" aria-label="5 star rating">
                  {[1,2,3,4,5].map((s) => (
                    <Star key={s} size={10} className="fill-yellow-400 text-yellow-400" aria-hidden="true" />
                  ))}
                  <span className="text-[10px] text-[#6B7280] ml-1">5.0 stars</span>
                </div>
              </div>
              <ExternalLink
                size={14}
                className="text-[#4B5563] group-hover:text-[#FC222D] transition-colors shrink-0"
                aria-hidden="true"
              />
            </a>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3 text-sm text-[#9CA3AF]">
              <Clock size={15} className="text-[#FC222D] mt-0.5 shrink-0" aria-hidden="true" />
              <div>
                <p className="text-white font-medium mb-0.5">Response Time</p>
                <p>We aim to respond to all enquiries within 24 hours.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 text-sm text-[#9CA3AF]">
              <MapPin size={15} className="text-[#FC222D] mt-0.5 shrink-0" aria-hidden="true" />
              <div>
                <p className="text-white font-medium mb-0.5">Workshop Address</p>
                <address className="not-italic">
                  <a
                    href="https://maps.google.com/?q=168+McIntyre+Rd+Sunshine+North+VIC+3020"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors underline underline-offset-2"
                  >
                    168 McIntyre Rd, Sunshine North VIC 3020
                  </a>
                </address>
                <p className="mt-1 text-xs text-[#6B7280]">Remote tuning via PTEB Warport — Australia-wide.</p>
              </div>
            </div>
          </div>

          <div className="mt-8 p-5 border border-[#FC222D]/20 bg-[#FC222D]/5">
            <h3
              className="text-base font-black uppercase text-white mb-2"
             
            >
              Important — Remote Tune Disclaimer
            </h3>
            <p className="text-xs text-[#9CA3AF] leading-relaxed">
              Remote ECU tuning carries inherent risk. All vehicles must be pre-approved for platform
              compatibility before ordering a Warport. A battery stabiliser is strongly recommended.
              PTEB Tuning provides no warranty on third-party hardware faults.
            </p>
          </div>
        </section>
      </div>

      {/* Google Maps Embed */}
      <section className="border-t border-[#1E1E1E]" aria-labelledby="map-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="eyebrow mb-2">Find Us</p>
              <h2
                id="map-heading"
                className="text-2xl font-black uppercase text-white"
               
              >
                PTEB Tuning — Melbourne
              </h2>
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=PTEB+Tuning+Melbourne"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 border border-[#2A2A2A] text-white text-xs font-bold tracking-widest uppercase hover:border-[#FC222D] hover:bg-[#FC222D]/5 transition-all"
              aria-label="Open PTEB Tuning in Google Maps"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              Get Directions
            </a>
          </div>
          <div className="relative w-full overflow-hidden border border-[#1E1E1E]" style={{ height: "420px" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3154.319710004108!2d144.8298584761626!3d-37.75910107198939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65f462904d5c7%3A0xfdac566b3d98122a!2sPTEB!5e0!3m2!1sen!2sau!4v1779071100795!5m2!1sen!2sau"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(0.85) contrast(1.1)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="PTEB Tuning location on Google Maps"
              aria-label="Map showing PTEB Tuning location in Melbourne"
            />
          </div>
          <p className="text-xs text-[#4B5563] mt-3 text-center">
            View on{" "}
            <a
              href="https://www.google.com/maps/search/?api=1&query=PTEB+Tuning+Melbourne"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#FC222D] hover:underline"
            >
              Google Maps
            </a>{" "}
            for directions and reviews.
          </p>
        </div>
      </section>
    </>
  );
}
