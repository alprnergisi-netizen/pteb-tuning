"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  q: string;
  a: string;
}

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <dl className="space-y-0 divide-y divide-[#1A1A1A]">
      {items.map(({ q, a }, index) => (
        <div key={q} className="py-5">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full flex items-center justify-between gap-3 text-left hover:text-[#FC222D] transition-colors group"
            aria-expanded={openIndex === index}
            aria-controls={`faq-answer-${index}`}
          >
            <dt className="flex items-start gap-3 flex-1">
              <span
                className="text-[#FC222D] mt-0.5 shrink-0 transition-transform group-hover:scale-110"
                aria-hidden="true"
              >
                {openIndex === index ? "−" : "+"}
              </span>
              <span className="text-base font-semibold text-white group-hover:text-[#FC222D]">
                {q}
              </span>
            </dt>
            <ChevronDown
              size={16}
              className={`text-[#FC222D] shrink-0 transition-transform ${
                openIndex === index ? "rotate-180" : ""
              }`}
              aria-hidden="true"
            />
          </button>
          {openIndex === index && (
            <dd
              id={`faq-answer-${index}`}
              className="mt-3 pl-7 text-sm text-white/90 leading-relaxed animate-in fade-in duration-200"
            >
              {a}
            </dd>
          )}
        </div>
      ))}
    </dl>
  );
}
