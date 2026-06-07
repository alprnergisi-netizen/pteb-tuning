import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, CheckCircle, X } from "lucide-react";

export const metadata: Metadata = {
  title: "Remote ECU Tuning vs Workshop Dyno Tune — Which Is Right for You? | PTEB",
  description: "Comparing remote ECU tuning (PTEB Warport) vs in-person dyno tuning. Understand the differences in cost, quality, car compatibility, and turnaround — so you can choose the right tune for your build.",
  alternates: { canonical: "/remote-tuning/remote-vs-workshop" },
  openGraph: {
    title: "Remote ECU Tuning vs Workshop Dyno Tune | PTEB",
    description: "Which is better — remote tuning or a workshop dyno tune? PTEB explains the real differences in quality, cost, and compatibility so you can make the right call.",
    url: "/remote-tuning/remote-vs-workshop",
    images: [{ url: "/dynoimage.jpg", width: 1200, height: 630, alt: "Remote tuning vs workshop dyno tune — PTEB comparison" }],
  },
};

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://ptebtuning.com" },
        { "@type": "ListItem", position: 2, name: "Remote Tuning", item: "https://ptebtuning.com/remote-tuning" },
        { "@type": "ListItem", position: 3, name: "Remote vs Workshop", item: "https://ptebtuning.com/remote-tuning/remote-vs-workshop" },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "@id": "https://ptebtuning.com/remote-tuning/remote-vs-workshop#article",
      headline: "Remote ECU Tuning vs Workshop Dyno Tune — Which Is Right for You?",
      description: "A direct comparison of remote OBD2 ECU tuning vs in-person dyno tuning: cost, quality, compatibility, turnaround, and which suits different build levels.",
      image: "https://ptebtuning.com/dynoimage.jpg",
      datePublished: "2026-06-01",
      dateModified: "2026-06-01",
      author: { "@id": "https://ptebtuning.com/#besim" },
      publisher: { "@id": "https://ptebtuning.com/#business" },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is remote ECU tuning as good as a dyno tune?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Remote ECU tuning via the PTEB Warport delivers the same custom calibration file as a workshop tune — built specifically for your car, fuel type, and modification level. The difference is the tuner uses OBD2 data logs instead of a rolling road dyno. For Stage 1 and Stage 2 builds, remote tuning produces equivalent results. Stage 3 builds with large turbos typically benefit from in-person dyno time to fine-tune the top-end power curve.",
          },
        },
        {
          "@type": "Question",
          name: "What is the PTEB Warport?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The PTEB Warport is an OBD2 device that ships worldwide. You plug it into your car's OBD diagnostic port, connect via PTEB's software, and our tuner accesses your ECU remotely to build and load a fully custom calibration. It supports live data logging and over-the-air revisions. The device costs $499 AUD and includes your first custom calibration file.",
          },
        },
        {
          "@type": "Question",
          name: "Which tune is cheaper — remote or workshop?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The PTEB Warport remote tune starts at $499 AUD and includes the device and your first custom calibration. Workshop dyno tunes are priced based on the platform and complexity — contact PTEB for a quote. For drivers outside Melbourne or outside Australia, remote tuning is significantly more cost-effective once travel costs are factored in.",
          },
        },
        {
          "@type": "Question",
          name: "Which cars are compatible with remote ECU tuning?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Most modern Audi, Volkswagen, BMW, Mercedes-AMG, and Porsche platforms are compatible with remote ECU tuning via the PTEB Warport. PTEB offers a free compatibility check before purchase. Some older or more complex platforms may require in-person tuning. Contact PTEB with your specific engine code to confirm.",
          },
        },
      ],
    },
  ],
};

const COMPARISON = [
  {
    feature: "Tune quality",
    remote: "Fully custom calibration built from your OBD2 data logs",
    workshop: "Fully custom calibration built from live dyno pulls",
    remoteWins: false,
    workshopWins: false,
    tie: true,
  },
  {
    feature: "Cost",
    remote: "$499 AUD including device + calibration",
    workshop: "Varies by platform — contact for quote",
    remoteWins: true,
    workshopWins: false,
    tie: false,
  },
  {
    feature: "Location",
    remote: "Anywhere in the world — ships internationally",
    workshop: "Melbourne, VIC — in person at 168 McIntyre Rd",
    remoteWins: true,
    workshopWins: false,
    tie: false,
  },
  {
    feature: "Turnaround",
    remote: "1–3 days after device setup",
    workshop: "Same day, typically 4–8 hours on the dyno",
    remoteWins: false,
    workshopWins: true,
    tie: false,
  },
  {
    feature: "Stage 1 & 2 builds",
    remote: "Excellent — equivalent results to workshop for most platforms",
    workshop: "Excellent — with live dyno verification",
    remoteWins: false,
    workshopWins: false,
    tie: true,
  },
  {
    feature: "Stage 3 / large turbo builds",
    remote: "Suitable for many Stage 3 platforms with good OBD2 coverage",
    workshop: "Preferred — live rolling road allows fine-tuning at peak power",
    remoteWins: false,
    workshopWins: true,
    tie: false,
  },
  {
    feature: "Live data logging",
    remote: "Yes — via PTEB Warport over OBD2",
    workshop: "Yes — via Dyno Innovations rolling road",
    remoteWins: false,
    workshopWins: false,
    tie: true,
  },
  {
    feature: "Revisions",
    remote: "Included — over-the-air via the device",
    workshop: "Included — return to workshop for revisions",
    remoteWins: true,
    workshopWins: false,
    tie: false,
  },
];

export default function RemoteVsWorkshopPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <section className="pt-28 pb-16 md:pt-36 border-b border-[#1E1E1E]" style={{ backgroundColor: "#0a0a0a" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <nav className="flex items-center gap-2 text-xs mb-8" style={{ color: "#6B7280" }} aria-label="Breadcrumb">
            <Link href="/" style={{ color: "#6B7280" }}>Home</Link>
            <ChevronRight size={12} aria-hidden="true" />
            <Link href="/remote-tuning" style={{ color: "#6B7280" }}>Remote Tuning</Link>
            <ChevronRight size={12} aria-hidden="true" />
            <span style={{ color: "#9CA3AF" }}>Remote vs Workshop</span>
          </nav>

          <p className="eyebrow mb-5">Comparison Guide</p>
          <h1 className="font-black uppercase leading-none mb-6" style={{ fontSize: "clamp(2rem, 5vw, 4rem)", color: "#ffffff" }}>
            Remote Tuning<br />
            <span style={{ color: "#FC222D" }}>vs Dyno Tune</span>
          </h1>
          <p className="text-lg leading-relaxed max-w-2xl" style={{ color: "#9CA3AF" }}>
            Both deliver a fully custom ECU calibration. The right choice depends on your location, build level, and how you want to work with your tuner. Here&apos;s the honest breakdown.
          </p>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-20 border-b border-[#1E1E1E]" style={{ backgroundColor: "#111" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-black uppercase mb-8" style={{ color: "#ffffff" }}>Side-by-Side Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm" style={{ borderCollapse: "collapse" }}>
              <thead>
                <tr className="border-b border-[#1E1E1E]">
                  <th className="text-left py-4 pr-6 text-xs font-black tracking-widest uppercase" style={{ color: "#6B7280", width: "20%" }}>Feature</th>
                  <th className="text-left py-4 px-4 text-xs font-black tracking-widest uppercase" style={{ color: "#FC222D", width: "40%" }}>Remote (Warport)</th>
                  <th className="text-left py-4 pl-4 text-xs font-black tracking-widest uppercase" style={{ color: "#9CA3AF", width: "40%" }}>Workshop Dyno Tune</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map(({ feature, remote, workshop, remoteWins, workshopWins, tie }) => (
                  <tr key={feature} className="border-b border-[#1a1a1a]">
                    <td className="py-4 pr-6 text-xs font-bold uppercase tracking-wide" style={{ color: "#ffffff" }}>{feature}</td>
                    <td className={`py-4 px-4 text-xs leading-relaxed ${remoteWins ? "text-[#FC222D] font-semibold" : tie ? "text-[#9CA3AF]" : "text-[#6B7280]"}`}>{remote}</td>
                    <td className={`py-4 pl-4 text-xs leading-relaxed ${workshopWins ? "text-white font-semibold" : tie ? "text-[#9CA3AF]" : "text-[#6B7280]"}`}>{workshop}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* When to choose each */}
      <section className="py-20 border-b border-[#1E1E1E]" style={{ backgroundColor: "#0a0a0a" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-black uppercase mb-10" style={{ color: "#ffffff" }}>Which Should You Choose?</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="p-6 border border-[#FC222D]/30" style={{ backgroundColor: "#111" }}>
              <p className="text-xs font-black tracking-widest uppercase text-[#FC222D] mb-4">Choose Remote Tuning if…</p>
              <ul className="space-y-3">
                {[
                  "You're outside Melbourne or outside Australia",
                  "Your car is Stage 1 or Stage 2",
                  "You want an affordable entry point ($499 AUD)",
                  "Your platform is VAG, BMW, or Mercedes on a supported ECU",
                  "You want future revisions without returning to a workshop",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-xs" style={{ color: "#9CA3AF" }}>
                    <CheckCircle size={13} className="text-[#FC222D] shrink-0 mt-0.5" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-6 border border-[#1E1E1E]" style={{ backgroundColor: "#111" }}>
              <p className="text-xs font-black tracking-widest uppercase mb-4" style={{ color: "#9CA3AF" }}>Choose a Workshop Tune if…</p>
              <ul className="space-y-3">
                {[
                  "You're in Melbourne or willing to travel",
                  "You're doing a Stage 3 or large turbo build",
                  "You want live rolling road verification and a printed dyno graph",
                  "Your platform requires specialised in-car hardware work",
                  "You want the tuner present for engine or TCU work simultaneously",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-xs" style={{ color: "#9CA3AF" }}>
                    <CheckCircle size={13} className="text-white shrink-0 mt-0.5" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 border-b border-[#1E1E1E]" style={{ backgroundColor: "#111" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-black uppercase mb-8" style={{ color: "#ffffff" }}>Common Questions</h2>
          <div className="space-y-6">
            {[
              {
                q: "Is remote ECU tuning as good as a dyno tune?",
                a: "Remote ECU tuning via the PTEB Warport delivers the same custom calibration file as a workshop tune — built specifically for your car, fuel type, and modification level. The difference is the tuner uses OBD2 data logs instead of a rolling road dyno. For Stage 1 and Stage 2 builds, remote tuning produces equivalent results. Stage 3 builds with large turbos typically benefit from in-person dyno time to fine-tune the top-end power curve.",
              },
              {
                q: "What is the PTEB Warport?",
                a: "The PTEB Warport is an OBD2 device that ships worldwide. You plug it into your car's OBD diagnostic port, connect via PTEB's software, and our tuner accesses your ECU remotely to build and load a fully custom calibration. Includes live data logging and over-the-air revisions. Starts at $499 AUD including your first custom calibration.",
              },
              {
                q: "Which cars are compatible with remote ECU tuning?",
                a: "Most modern Audi, Volkswagen, BMW, Mercedes-AMG, and Porsche platforms are compatible with remote tuning via the PTEB Warport. PTEB offers a free compatibility check before purchase. Some older or more exotic platforms may require in-person tuning.",
              },
            ].map(({ q, a }) => (
              <div key={q} className="border-b border-[#1E1E1E] pb-6">
                <h3 className="text-white font-bold mb-2 text-sm">{q}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "#9CA3AF" }}>{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal links */}
      <section className="py-14 border-b border-[#1E1E1E]" style={{ backgroundColor: "#0a0a0a" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <p className="text-xs font-black tracking-widest uppercase mb-6" style={{ color: "#FC222D" }}>Related Guides</p>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { href: "/warport", label: "Order the PTEB Warport", desc: "Remote OBD2 ECU tuning device — $499 AUD" },
              { href: "/melbourne-tuning", label: "Workshop Dyno Tuning", desc: "In-person tuning at Sunshine North, Melbourne" },
              { href: "/tuning-guide", label: "ECU Tuning Guide", desc: "Stage 1 vs 2 vs 3 — how it all works" },
            ].map(({ href, label, desc }) => (
              <Link
                key={href}
                href={href}
                className="group block p-5 border border-[#1E1E1E] hover:border-[#FC222D]/40 transition-colors"
                style={{ backgroundColor: "#111" }}
              >
                <p className="text-white text-xs font-bold uppercase tracking-wide mb-1 group-hover:text-[#FC222D] transition-colors">{label}</p>
                <p className="text-[10px]" style={{ color: "#6B7280" }}>{desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center" style={{ backgroundColor: "#FC222D" }} aria-label="Get started">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-black uppercase mb-4" style={{ color: "#ffffff" }}>
            Not Sure Which Is Right?
          </h2>
          <p className="text-sm mb-8" style={{ color: "rgba(255,255,255,0.85)" }}>
            Send us your platform details and we will tell you exactly which option delivers the best result for your build.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-bold tracking-widest uppercase hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "#000000", color: "#ffffff" }}
            >
              Get Free Advice <ChevronRight size={14} aria-hidden="true" />
            </Link>
            <Link
              href="/warport"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/40 text-white text-sm font-bold tracking-widest uppercase hover:bg-white/10 transition-all"
            >
              View Warport Device
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
