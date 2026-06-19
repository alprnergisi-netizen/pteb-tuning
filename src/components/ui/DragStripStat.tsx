export function DragStripStat() {
  return (
    <section className="py-10 sm:py-16 bg-black border-y border-[#1E1E1E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Label */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-8 h-px bg-[#FC222D]" aria-hidden="true" />
          <p className="text-[10px] font-black tracking-[0.3em] uppercase text-[#FC222D]">
            Real Track Data · Drag Strip Verified
          </p>
        </div>

        {/* Main stat card */}
        <div className="relative overflow-hidden border border-[#FC222D]/30 bg-[#0D0D0D]">
          {/* Red accent bar */}
          <div className="h-1 w-full bg-[#FC222D]" aria-hidden="true" />

          <div className="p-6 sm:p-10 grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-8 items-center">

            {/* Car name + context */}
            <div>
              <p className="text-[10px] font-black tracking-[0.3em] uppercase text-white/80 mb-2">
                Volkswagen Tiguan R · PTEB Stage 3 Flex
              </p>
              <h2 className="text-3xl sm:text-5xl font-black uppercase text-white leading-none mb-4">
                Quarter Mile.<br />
                <span className="text-[#FC222D]">11.35 sec @ 198 km/h.</span>
              </h2>
              <p className="text-sm text-white/90 max-w-md leading-relaxed">
                <strong className="text-white">11.35 seconds at 198 km/h</strong> — fully built, fully tuned by PTEB. Every number on this card is real, logged, and verified at the strip.
              </p>
            </div>

            {/* Stat blocks */}
            <div className="grid grid-cols-2 sm:grid-cols-1 gap-3 sm:min-w-[180px]">
              <div className="border border-[#1E1E1E] bg-black p-4 text-center">
                <p className="text-[9px] font-black tracking-[0.25em] uppercase text-white/80 mb-1">¼ Mile Time</p>
                <p className="text-3xl sm:text-4xl font-black text-white tabular-nums leading-none">11.35</p>
                <p className="text-[10px] text-[#FC222D] font-bold mt-1">seconds</p>
              </div>
              <div className="border border-[#1E1E1E] bg-black p-4 text-center">
                <p className="text-[9px] font-black tracking-[0.25em] uppercase text-white/80 mb-1">Trap Speed</p>
                <p className="text-3xl sm:text-4xl font-black text-white tabular-nums leading-none">198</p>
                <p className="text-[10px] text-[#FC222D] font-bold mt-1">km/h</p>
              </div>
            </div>

          </div>

          {/* Bottom strip */}
          <div className="border-t border-[#1E1E1E] px-6 sm:px-10 py-3 flex flex-wrap gap-6 text-[10px] font-bold uppercase tracking-widest text-[#4B5563]">
            <span>60ft — 1.770s</span>
            <span>⅛ Mile — 7.355s @ 156 km/h</span>
            <span>1000ft — 9.518s</span>
            <span className="text-[#FC222D]">¼ Mile — 11.35s @ 198 km/h</span>
          </div>
        </div>

      </div>
    </section>
  );
}
