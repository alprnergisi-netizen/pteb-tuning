'use client';

import { useEffect, useRef, useState } from 'react';

/* eslint-disable @typescript-eslint/no-explicit-any */

const DEPARTMENTS = [
  {
    id: 'tuning' as const,
    namespace: 'dyno-tune',
    label: 'Dyno Tuning',
    desc: 'Custom ECU / TCU calibration, flex fuel, anti-lag, launch control',
    calLink: 'prestige-team-euroboost-stxpvl/dyno-tune',
    cssVars: { 'cal-brand': '#ca1313' },
  },
  {
    id: 'mechanic' as const,
    namespace: 'mechanic',
    label: 'Mechanic Services',
    desc: 'Engine builds, servicing, diagnostics, DSG / mechatronic repair',
    calLink: 'prestige-team-euroboost-stxpvl/mechanic',
    cssVars: {},
  },
] as const;

type DeptId = (typeof DEPARTMENTS)[number]['id'];

declare global {
  interface Window { Cal?: any; }
}

function setupCal() {
  if (window.Cal) return;
  (function (C: any, A: string, L: string) {
    const p = (a: any, ar: any) => { a.q.push(ar); };
    const d = document;
    C.Cal = C.Cal || function (...args: any[]) {
      const cal = C.Cal;
      if (!cal.loaded) {
        cal.ns = {};
        cal.q = cal.q || [];
        d.head.appendChild(d.createElement('script')).src = A;
        cal.loaded = true;
      }
      if (args[0] === L) {
        const api = (...a: any[]) => p(api, a);
        const ns = args[1];
        (api as any).q = [];
        if (typeof ns === 'string') {
          cal.ns[ns] = cal.ns[ns] || api;
          p(cal.ns[ns], args);
          p(cal, ['initNamespace', ns]);
        } else {
          p(cal, args);
        }
        return;
      }
      p(cal, args);
    };
  })(window, 'https://app.cal.com/embed/embed.js', 'init');
}

export function BookingWidget() {
  const [selected, setSelected] = useState<DeptId>('tuning');
  const initialised = useRef(new Set<DeptId>());

  const initDept = (deptId: DeptId) => {
    if (initialised.current.has(deptId)) return;
    initialised.current.add(deptId);

    const dept = DEPARTMENTS.find((d) => d.id === deptId)!;
    const elId = `cal-embed-${deptId}`;

    const tryInit = () => {
      if (!window.Cal) { setTimeout(() => tryInit(), 50); return; }
      window.Cal('init', dept.namespace, { origin: 'https://app.cal.com' });
      window.Cal.ns[dept.namespace]('inline', {
        elementOrSelector: `#${elId}`,
        config: { layout: 'month_view', useSlotsViewOnSmallScreen: 'true' },
        calLink: dept.calLink,
      });
      window.Cal.ns[dept.namespace]('ui', {
        cssVarsPerTheme: { dark: dept.cssVars },
        hideEventTypeDetails: true,
        layout: 'month_view',
      });
    };
    tryInit();
  };

  useEffect(() => {
    setupCal();
    // Pre-initialize all departments immediately so they're ready before user picks
    DEPARTMENTS.forEach((d) => initDept(d.id));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <p className="text-xs font-bold uppercase tracking-widest text-white/80 mb-4">Select department</p>
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
              <p className="text-xs text-white/80 leading-relaxed">{dept.desc}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Always in DOM so Cal can find the element by ID */}
      {DEPARTMENTS.map((dept) => (
        <div
          key={dept.id}
          className={selected === dept.id ? 'block border border-[#1E1E1E]' : 'hidden'}
        >
          <div id={`cal-embed-${dept.id}`} style={{ width: '100%', height: '700px', overflow: 'scroll' }} />
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
