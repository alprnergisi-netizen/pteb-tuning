'use client';

import { useActionState } from 'react';
import { submitEnquiry, type EnquiryState } from '@/app/contact/actions';
import { CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

const INITIAL: EnquiryState = { status: 'idle' };

export function ContactForm() {
  const [state, action, pending] = useActionState(submitEnquiry, INITIAL);

  if (state.status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 px-6 border border-[#2A2A2A] bg-[#0D0D0D]">
        <div className="w-14 h-14 bg-green-500/10 border border-green-500/30 flex items-center justify-center mb-5">
          <CheckCircle size={26} className="text-green-400" aria-hidden="true" />
        </div>
        <h3 className="text-xl font-black uppercase text-white mb-2">Enquiry Sent</h3>
        <p className="text-sm text-[#9CA3AF] max-w-sm leading-relaxed">
          We&apos;ll review your vehicle details and get back to you within 24 hours.
          For urgent requests, WhatsApp us on 0422 300 859.
        </p>
      </div>
    );
  }

  return (
    <form action={action} className="space-y-4" aria-label="Tune enquiry form" noValidate>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-xs font-medium tracking-wider uppercase text-[#9CA3AF] mb-1.5">
            Full Name <span className="text-[#FC222D]" aria-label="required">*</span>
          </label>
          <input
            id="name" name="name" type="text" required autoComplete="name"
            className="w-full bg-[#111111] border border-[#2A2A2A] text-white text-sm px-4 py-3 focus:border-[#FC222D] focus:outline-none focus:ring-1 focus:ring-[#FC222D] transition-colors placeholder:text-[#4B5563]"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-xs font-medium tracking-wider uppercase text-[#9CA3AF] mb-1.5">
            Phone
          </label>
          <input
            id="phone" name="phone" type="tel" autoComplete="tel"
            className="w-full bg-[#111111] border border-[#2A2A2A] text-white text-sm px-4 py-3 focus:border-[#FC222D] focus:outline-none focus:ring-1 focus:ring-[#FC222D] transition-colors placeholder:text-[#4B5563]"
            placeholder="04XX XXX XXX"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-xs font-medium tracking-wider uppercase text-[#9CA3AF] mb-1.5">
          Email <span className="text-[#FC222D]" aria-label="required">*</span>
        </label>
        <input
          id="email" name="email" type="email" required autoComplete="email"
          className="w-full bg-[#111111] border border-[#2A2A2A] text-white text-sm px-4 py-3 focus:border-[#FC222D] focus:outline-none focus:ring-1 focus:ring-[#FC222D] transition-colors placeholder:text-[#4B5563]"
          placeholder="you@email.com"
        />
      </div>

      <div>
        <label htmlFor="car" className="block text-xs font-medium tracking-wider uppercase text-[#9CA3AF] mb-1.5">
          Vehicle (Year, Make, Model, Engine) <span className="text-[#FC222D]" aria-label="required">*</span>
        </label>
        <input
          id="car" name="car" type="text" required
          className="w-full bg-[#111111] border border-[#2A2A2A] text-white text-sm px-4 py-3 focus:border-[#FC222D] focus:outline-none focus:ring-1 focus:ring-[#FC222D] transition-colors placeholder:text-[#4B5563]"
          placeholder="e.g. 2018 Audi S3 8V 2.0 TFSI"
        />
      </div>

      <div>
        <label htmlFor="mods" className="block text-xs font-medium tracking-wider uppercase text-[#9CA3AF] mb-1.5">
          Current Modifications
        </label>
        <input
          id="mods" name="mods" type="text"
          className="w-full bg-[#111111] border border-[#2A2A2A] text-white text-sm px-4 py-3 focus:border-[#FC222D] focus:outline-none focus:ring-1 focus:ring-[#FC222D] transition-colors placeholder:text-[#4B5563]"
          placeholder="e.g. Intake, downpipe, intercooler"
        />
      </div>

      <div>
        <label htmlFor="fuel" className="block text-xs font-medium tracking-wider uppercase text-[#9CA3AF] mb-1.5">
          Fuel Type
        </label>
        <select
          id="fuel" name="fuel"
          className="w-full bg-[#111111] border border-[#2A2A2A] text-white text-sm px-4 py-3 focus:border-[#FC222D] focus:outline-none focus:ring-1 focus:ring-[#FC222D] transition-colors"
        >
          <option value="">Select fuel type</option>
          <option value="98ron">98 RON Premium</option>
          <option value="95ron">95 RON</option>
          <option value="e85">E85 Ethanol</option>
          <option value="flex">Flex Fuel (blend)</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="goals" className="block text-xs font-medium tracking-wider uppercase text-[#9CA3AF] mb-1.5">
          Goals &amp; Notes <span className="text-[#FC222D]" aria-label="required">*</span>
        </label>
        <textarea
          id="goals" name="goals" required rows={4}
          className="w-full bg-[#111111] border border-[#2A2A2A] text-white text-sm px-4 py-3 focus:border-[#FC222D] focus:outline-none focus:ring-1 focus:ring-[#FC222D] transition-colors placeholder:text-[#4B5563] resize-none"
          placeholder="Power goals, daily driver vs track, features needed (launch control, flex fuel, anti-lag), etc."
        />
      </div>

      {state.status === 'error' && (
        <div className="flex items-start gap-3 p-4 border border-red-500/30 bg-red-500/5" role="alert">
          <AlertCircle size={15} className="text-red-400 mt-0.5 shrink-0" aria-hidden="true" />
          <p className="text-sm text-red-300">{state.message}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={pending}
        className="w-full py-4 bg-[#FC222D] text-white text-sm font-bold tracking-widest uppercase hover:bg-[#CC1B25] transition-colors focus-visible:ring-2 focus-visible:ring-[#FC222D] focus-visible:ring-offset-2 focus-visible:ring-offset-black disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {pending ? (
          <>
            <Loader2 size={15} className="animate-spin" aria-hidden="true" />
            Sending…
          </>
        ) : (
          'Send Enquiry'
        )}
      </button>

      <p className="text-xs text-[#4B5563] text-center">
        We aim to respond within 24 hours. Remote tuning requires vehicle pre-approval.
      </p>
    </form>
  );
}
