"use client";

import { useState } from "react";
import { ChevronRight, CheckCircle, AlertCircle } from "lucide-react";

const MAKES = ["Audi", "BMW", "Mercedes-AMG", "Mercedes", "Volkswagen", "Porsche", "Skoda", "SEAT", "Cupra", "Other"];
const STAGES = ["Stock — no modifications", "Stage 1 — software only", "Stage 2 — intake, downpipe, intercooler", "Stage 2+ — turbo / fuelling upgrades"];
const FUELS = ["98 RON", "95 RON", "E85 / Ethanol", "Flex fuel (mixed)", "91 RON"];
const STATES = ["VIC", "NSW", "QLD", "SA", "WA", "TAS", "ACT", "NT"];

type Status = "idle" | "loading" | "success" | "error";

export function WarportLeadForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    name: "", email: "", phone: "",
    year: "", make: "", model: "", engine: "",
    stage: "", fuel: "", goals: "", state: "",
  });

  function set(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/warport-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 px-6">
        <div className="w-14 h-14 rounded-full bg-[#FC222D]/10 border border-[#FC222D]/30 flex items-center justify-center mb-6">
          <CheckCircle size={26} className="text-[#FC222D]" aria-hidden="true" />
        </div>
        <h3 className="text-2xl font-black uppercase text-white mb-3">Request received</h3>
        <p className="text-[#9CA3AF] text-sm max-w-sm leading-relaxed">
          We&apos;re checking compatibility for your vehicle and will be in touch within <strong className="text-white">24 hours</strong> with your pre-approval result.
        </p>
        <p className="text-xs text-[#6B7280] mt-6">No payment required until you&apos;re confirmed.</p>
      </div>
    );
  }

  const inputCls = "w-full bg-[#0a0a0a] border border-[#2a2a2a] text-white text-sm px-4 py-3 focus:border-[#FC222D] focus:outline-none focus:ring-1 focus:ring-[#FC222D] transition-colors placeholder:text-[#4B5563]";
  const selectCls = inputCls + " appearance-none cursor-pointer";
  const labelCls = "block text-xs font-medium tracking-wide text-[#6B7280] mb-1.5 uppercase";

  return (
    <form onSubmit={handleSubmit} className="space-y-6" aria-label="Warport pre-approval form">

      {/* Contact details */}
      <div>
        <p className="eyebrow mb-5">Your details</p>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="wl-name" className={labelCls}>Full name *</label>
            <input id="wl-name" type="text" required value={form.name} onChange={e => set("name", e.target.value)} className={inputCls} placeholder="Your name" autoComplete="name" />
          </div>
          <div>
            <label htmlFor="wl-phone" className={labelCls}>Phone *</label>
            <input id="wl-phone" type="tel" required value={form.phone} onChange={e => set("phone", e.target.value)} className={inputCls} placeholder="04XX XXX XXX" autoComplete="tel" />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="wl-email" className={labelCls}>Email *</label>
            <input id="wl-email" type="email" required value={form.email} onChange={e => set("email", e.target.value)} className={inputCls} placeholder="you@email.com" autoComplete="email" />
          </div>
          <div>
            <label htmlFor="wl-state" className={labelCls}>State / Territory</label>
            <select id="wl-state" value={form.state} onChange={e => set("state", e.target.value)} className={selectCls}>
              <option value="">Select state</option>
              {STATES.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-[#1a1a1a]" />

      {/* Vehicle details */}
      <div>
        <p className="eyebrow mb-5">Your vehicle</p>
        <div className="grid sm:grid-cols-3 gap-4">
          <div>
            <label htmlFor="wl-year" className={labelCls}>Year *</label>
            <input id="wl-year" type="text" required value={form.year} onChange={e => set("year", e.target.value)} className={inputCls} placeholder="2020" maxLength={4} pattern="\d{4}" />
          </div>
          <div>
            <label htmlFor="wl-make" className={labelCls}>Make *</label>
            <select id="wl-make" required value={form.make} onChange={e => set("make", e.target.value)} className={selectCls}>
              <option value="">Select make</option>
              {MAKES.map(m => <option key={m} value={m}>{m}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="wl-model" className={labelCls}>Model *</label>
            <input id="wl-model" type="text" required value={form.model} onChange={e => set("model", e.target.value)} className={inputCls} placeholder="e.g. Golf R, S3" />
          </div>
          <div className="sm:col-span-3">
            <label htmlFor="wl-engine" className={labelCls}>
              Engine code
              <span className="text-[#4B5563] normal-case font-normal ml-1">(optional but helps — e.g. EA888, B58, S55)</span>
            </label>
            <input id="wl-engine" type="text" value={form.engine} onChange={e => set("engine", e.target.value)} className={inputCls} placeholder="e.g. EA888 Gen3, DAZA, B58" />
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-[#1a1a1a]" />

      {/* Tune details */}
      <div>
        <p className="eyebrow mb-5">Tune details</p>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="wl-stage" className={labelCls}>Current stage *</label>
            <select id="wl-stage" required value={form.stage} onChange={e => set("stage", e.target.value)} className={selectCls}>
              <option value="">Select stage</option>
              {STAGES.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="wl-fuel" className={labelCls}>Fuel type *</label>
            <select id="wl-fuel" required value={form.fuel} onChange={e => set("fuel", e.target.value)} className={selectCls}>
              <option value="">Select fuel</option>
              {FUELS.map(f => <option key={f} value={f}>{f}</option>)}
            </select>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="wl-goals" className={labelCls}>Goals / notes
              <span className="text-[#4B5563] normal-case font-normal ml-1">(optional)</span>
            </label>
            <textarea id="wl-goals" value={form.goals} onChange={e => set("goals", e.target.value)} className={inputCls + " resize-none"} rows={3} placeholder="Power targets, features you want (anti-lag, flex fuel...), or anything else we should know." maxLength={500} />
          </div>
        </div>
      </div>

      {/* Error */}
      {status === "error" && (
        <div className="flex items-center gap-2 p-3 bg-red-900/20 border border-red-800/40 text-red-400 text-xs">
          <AlertCircle size={14} aria-hidden="true" />
          Something went wrong — please WhatsApp us directly on 0422 300 859.
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full flex items-center justify-center gap-2 py-4 bg-[#FC222D] text-white text-sm font-bold tracking-widest uppercase hover:bg-[#CC1B25] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "Submitting…" : "Check My Compatibility — Free"}
        {status !== "loading" && <ChevronRight size={15} aria-hidden="true" />}
      </button>
      <p className="text-center text-xs text-[#4B5563]">No payment · No obligation · Response within 24 hours</p>
    </form>
  );
}
