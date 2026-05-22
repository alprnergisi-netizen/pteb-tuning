'use client';

import { useEffect, useRef, useState } from 'react';
import env from '@/env';

const DEPARTMENTS = [
  {
    id: 'tuning',
    label: 'Dyno Tuning',
    desc: 'Custom ECU / TCU calibration, flex fuel, anti-lag, launch control',
    calLink: env.NEXT_PUBLIC_CALCOM_TUNING_LINK,
  },
  {
    id: 'mechanic',
    label: 'Mechanic Services',
    desc: 'Engine builds, servicing, diagnostics, supporting hardware',
    calLink: env.NEXT_PUBLIC_CALCOM_MECHANIC_LINK,
  },
] as const;

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Cal?: any;
  }
}

export function BookingWidget() {
  const [selected, setSelected] = useState<'tuning' | 'mechanic' | null>(null);
  const scriptLoaded = useRef(false);

  // Load Cal.com embed script once
  useEffect(() => {
    if (scriptLoaded.current) return;
    scriptLoaded.current = true;

    (function (C: Window, A: string, L: string) {
      const p = (a: { q: unknown[] }, ar: unknown) => { a.q.push(ar); };
      const d = document;
      C.Cal = C.Cal || function (...args: unknown[]) {
        const cal = C.Cal!;
        if (!cal.loaded) {
          cal.ns = {};
          cal.q = cal.q || [];
          const s = d.createElement('script') as HTMLScriptElement;
          s.src = A;
          d.head.appendChild(s);
          cal.loaded = true;
        }
        if (args[0] === L) {
          const api = (...a: unknown[]) => p(api as unknown as { q: unknown[] }, a);
          (api as unknown as { q: unknown[] }).q = [];
          const ns = args[1] as string;
          if (typeof ns === 'string') {
            cal.ns[ns] = api;
            p(api as unknown as { q: unknown[] }, args);
          } else {
            p(cal, args);
          }
          return;
        }
        p(cal, args);
      };
    })(window, 'https://app.cal.com/embed/embed.js', 'init');

    window.Cal?.('init', { origin: 'https://app.cal.com' });
  }, []);

  // Init the inline embed whenever a department is selected
  useEffect(() => {
    if (!selected) return;
    const dept = DEPARTMENTS.find((d) => d.id === selected)!;
    const elId = `cal-embed-${selected}`;

    const tryInit = () => {
      if (!window.Cal) { setTimeout(tryInit, 100); return; }
      window.Cal('inline', {
        elementOrSelector: `#${elId}`,
        calLink: dept.calLink,
        layout: 'month_view',
      });
      window.Cal('ui', {
        theme: 'dark',
        hideEventTypeDetails: false,
        layout: 'month_view',
        cssVarsPerTheme: {
          dark: {
            'cal-brand': '#FC222D',
            'cal-bg': '#0D0D0D',
            'cal-bg-subtle': '#111111',
            'cal-border': '#1E1E1E',
            'cal-text': '#ffffff',
            'cal-text-subtle': '#9CA3AF',
          },
        },
      });
    };

    tryInit();
  }, [selected]);

  return (
    <div className="max-w-4xl mx-auto">
      {/* Department selector */}
      <div className="mb-8">
        <p className="text-xs font-bold uppercase tracking-widest text-[#6B7280] mb-4">
          Select department
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          {DEPARTMENTS.map((dept) => (
            <button
              key={dept.id}
              type="button"
              onClick={() => setSelected(dept.id)}
              className={`text-left p-5 border transition-all ${
                selected === dept.id
                  ? 'border-[#FC222D] bg-[#FC222D]/5'
                  : 'border-[#1E1E1E] bg-[#0D0D0D] hover:border-[#FC222D]/40'
              }`}
            >
              <p className={`text-sm font-black uppercase tracking-wider mb-1 ${
                selected === dept.id ? 'text-[#FC222D]' : 'text-white'
              }`}>
                {dept.label}
              </p>
              <p className="text-xs text-[#6B7280] leading-relaxed">{dept.desc}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Cal.com inline embed */}
      {DEPARTMENTS.map((dept) => (
        <div
          key={dept.id}
          className={`border border-[#1E1E1E] overflow-hidden transition-all ${
            selected === dept.id ? 'block' : 'hidden'
          }`}
          style={{ minHeight: 700 }}
        >
          <div
            id={`cal-embed-${dept.id}`}
            style={{ width: '100%', height: '700px', overflow: 'scroll' }}
          />
        </div>
      ))}

      {!selected && (
        <div className="border border-[#1E1E1E] bg-[#0D0D0D] flex items-center justify-center" style={{ height: 300 }}>
          <p className="text-sm text-[#4B5563]">Select a department above to see available times</p>
        </div>
      )}
    </div>
  );
}
