'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Check, Calendar, Clock, User } from 'lucide-react';

const TIMESLOTS = ['09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'];

const SERVICES = [
  { value: 'dyno', label: 'Custom Dyno Tune' },
  { value: 'warport', label: 'Warport Remote Tuning' },
  { value: 'mechanic', label: 'Mechanic Services' },
  { value: 'consultation', label: 'Consultation' },
];

export function BookingWidget() {
  const today = new Date();
  const [currentDate, setCurrentDate] = useState(new Date(today.getFullYear(), today.getMonth()));
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [step, setStep] = useState<1 | 2>(1);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', carMakeModel: '', serviceType: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const daysInMonth = (d: Date) => new Date(d.getFullYear(), d.getMonth() + 1, 0).getDate();
  const firstDayRaw = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
  // Sunday=0 → shift so Monday is 0
  const firstDay = (firstDayRaw + 6) % 7;
  const days = Array.from({ length: daysInMonth(currentDate) }, (_, i) => i + 1);
  const monthName = currentDate.toLocaleString('default', { month: 'long', year: 'numeric' });

  const formatDate = (day: number) => {
    const d = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    return d.toISOString().split('T')[0];
  };

  const isPast = (day: number) => {
    const d = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    d.setHours(0, 0, 0, 0);
    const t = new Date(); t.setHours(0, 0, 0, 0);
    return d < t;
  };

  const prettyDate = selectedDate
    ? new Date(selectedDate + 'T00:00:00').toLocaleDateString('en-AU', { weekday: 'long', day: 'numeric', month: 'long' })
    : '';

  const handleContinue = () => {
    if (selectedDate && selectedTime) setStep(2);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.carMakeModel || !formData.serviceType) return;
    setLoading(true);
    try {
      const res = await fetch('/api/booking-calendar/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, preferredDate: selectedDate, preferredTime: selectedTime, message: '' }),
      });
      if (!res.ok) throw new Error();
      setSuccess(true);
    } catch {
      alert('Failed to submit. Please try WhatsApp instead.');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-6">
          <div className="w-20 h-20 bg-[#FC222D]/10 border border-[#FC222D]/30 flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-[#FC222D]" />
          </div>
          <h3 className="text-4xl font-black text-white mb-3 uppercase">
            Booking Received!
          </h3>
          <p className="text-[#9CA3AF] mb-1">Thanks <span className="text-white font-bold">{formData.name}</span>!</p>
          <p className="text-[#9CA3AF] mb-6">We&apos;ll contact you within 24 hours to confirm.</p>
          <div className="p-4 border border-[#1E1E1E] bg-[#0D0D0D] text-sm text-left space-y-1">
            <p className="text-[#6B7280] text-xs uppercase tracking-widest mb-2">Your Booking</p>
            <p className="text-white"><span className="text-[#6B7280]">Date:</span> {prettyDate}</p>
            <p className="text-white"><span className="text-[#6B7280]">Time:</span> {selectedTime}</p>
            <p className="text-white"><span className="text-[#6B7280]">Service:</span> {SERVICES.find(s => s.value === formData.serviceType)?.label}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">

      {/* Step indicators */}
      <div className="flex items-center gap-4 mb-10">
        {[
          { n: 1, icon: Calendar, label: 'Pick a Date & Time' },
          { n: 2, icon: User, label: 'Your Details' },
        ].map(({ n, icon: Icon, label }) => (
          <div key={n} className="flex items-center gap-3">
            <div className={`w-8 h-8 flex items-center justify-center border text-xs font-black transition-all ${step >= n ? 'bg-[#FC222D] border-[#FC222D] text-white' : 'border-[#2A2A2A] text-[#6B7280]'}`}>
              {step > n ? <Check size={14} /> : n}
            </div>
            <span className={`text-sm font-bold uppercase tracking-wider hidden sm:block ${step >= n ? 'text-white' : 'text-[#6B7280]'}`}>{label}</span>
            {n < 2 && <ChevronRight size={14} className="text-[#2A2A2A] ml-1" aria-hidden="true" />}
          </div>
        ))}
      </div>

      {/* ── STEP 1: Calendar ────────────────────────────────────── */}
      {step === 1 && (
        <div className="grid lg:grid-cols-5 gap-6">

          {/* Calendar — main focus */}
          <div className="lg:col-span-3 bg-[#0D0D0D] border border-[#1E1E1E] p-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-black text-white uppercase">
                {monthName}
              </h2>
              <div className="flex gap-1">
                <button
                  type="button"
                  onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1))}
                  className="w-9 h-9 flex items-center justify-center hover:bg-[#1E1E1E] transition text-[#FC222D]"
                  aria-label="Previous month"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  type="button"
                  onClick={() => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1))}
                  className="w-9 h-9 flex items-center justify-center hover:bg-[#1E1E1E] transition text-[#FC222D]"
                  aria-label="Next month"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-7 mb-3">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((d) => (
                <div key={d} className="text-center text-[10px] font-bold uppercase text-[#4B5563] py-2">{d}</div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-1.5">
              {Array(firstDay).fill(null).map((_, i) => <div key={`e${i}`} />)}
              {days.map((day) => {
                const dateStr = formatDate(day);
                const isSelected = selectedDate === dateStr;
                const past = isPast(day);
                return (
                  <button
                    key={day}
                    type="button"
                    disabled={past}
                    onClick={() => { setSelectedDate(dateStr); setSelectedTime(''); }}
                    className={`aspect-square text-sm font-bold transition-all ${
                      isSelected
                        ? 'bg-[#FC222D] text-white'
                        : past
                        ? 'text-[#2A2A2A] cursor-not-allowed'
                        : 'text-[#9CA3AF] hover:bg-[#1E1E1E] hover:text-white'
                    }`}
                  >
                    {day}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Time + Continue */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="bg-[#0D0D0D] border border-[#1E1E1E] p-6 flex-1">
              <div className="flex items-center gap-2 mb-5">
                <Clock size={14} className="text-[#FC222D]" aria-hidden="true" />
                <p className="text-xs font-bold uppercase tracking-widest text-[#9CA3AF]">
                  {selectedDate ? `Times for ${prettyDate}` : 'Select a date first'}
                </p>
              </div>

              {selectedDate ? (
                <div className="grid grid-cols-2 gap-2">
                  {TIMESLOTS.map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setSelectedTime(time)}
                      className={`py-3 text-xs font-bold uppercase tracking-wider transition-all border ${
                        selectedTime === time
                          ? 'bg-[#FC222D] border-[#FC222D] text-white'
                          : 'border-[#1E1E1E] text-[#9CA3AF] hover:border-[#FC222D]/50 hover:text-white'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-40 text-center">
                  <Calendar size={32} className="text-[#2A2A2A] mb-3" aria-hidden="true" />
                  <p className="text-xs text-[#4B5563]">Pick a date on the calendar to see available times</p>
                </div>
              )}
            </div>

            {/* Summary + CTA */}
            <div className="bg-[#0D0D0D] border border-[#1E1E1E] p-6">
              {selectedDate && selectedTime ? (
                <>
                  <div className="mb-5 space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar size={13} className="text-[#FC222D] shrink-0" />
                      <span className="text-white font-medium">{prettyDate}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Clock size={13} className="text-[#FC222D] shrink-0" />
                      <span className="text-white font-medium">{selectedTime}</span>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleContinue}
                    className="w-full py-4 bg-[#FC222D] text-white text-sm font-black tracking-widest uppercase hover:bg-[#CC1B25] transition-colors flex items-center justify-center gap-2"
                  >
                    Continue <ChevronRight size={16} />
                  </button>
                </>
              ) : (
                <p className="text-xs text-[#4B5563] text-center py-2">Select a date and time to continue</p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ── STEP 2: Details Form ─────────────────────────────────── */}
      {step === 2 && (
        <form onSubmit={handleSubmit} className="grid lg:grid-cols-5 gap-6">

          {/* Booking summary sidebar */}
          <div className="lg:col-span-2 order-2 lg:order-1">
            <div className="bg-[#0D0D0D] border border-[#1E1E1E] p-6 sticky top-24">
              <p className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#FC222D] mb-4">Your Booking</p>
              <div className="space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <Calendar size={14} className="text-[#FC222D] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-[10px] text-[#6B7280] uppercase tracking-wider">Date</p>
                    <p className="text-white text-sm font-bold">{prettyDate}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock size={14} className="text-[#FC222D] mt-0.5 shrink-0" />
                  <div>
                    <p className="text-[10px] text-[#6B7280] uppercase tracking-wider">Time</p>
                    <p className="text-white text-sm font-bold">{selectedTime}</p>
                  </div>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setStep(1)}
                className="text-xs text-[#FC222D] hover:text-white transition-colors font-bold uppercase tracking-wider"
              >
                ← Change Date / Time
              </button>
            </div>
          </div>

          {/* Form fields */}
          <div className="lg:col-span-3 order-1 lg:order-2 space-y-4">
            <h2 className="text-3xl font-black text-white uppercase mb-6">
              Your Details
            </h2>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="book-name" className="block text-[10px] font-bold text-[#6B7280] mb-2 uppercase tracking-widest">Full Name *</label>
                <input id="book-name" type="text" placeholder="Your name" required value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-[#111111] border border-[#2A2A2A] text-white placeholder-[#4B5563] text-sm focus:border-[#FC222D] focus:outline-none transition"
                />
              </div>
              <div>
                <label htmlFor="book-phone" className="block text-[10px] font-bold text-[#6B7280] mb-2 uppercase tracking-widest">Phone *</label>
                <input id="book-phone" type="tel" placeholder="04XX XXX XXX" required value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-[#111111] border border-[#2A2A2A] text-white placeholder-[#4B5563] text-sm focus:border-[#FC222D] focus:outline-none transition"
                />
              </div>
            </div>

            <div>
              <label htmlFor="book-email" className="block text-[10px] font-bold text-[#6B7280] mb-2 uppercase tracking-widest">Email *</label>
              <input id="book-email" type="email" placeholder="you@email.com" required value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-[#111111] border border-[#2A2A2A] text-white placeholder-[#4B5563] text-sm focus:border-[#FC222D] focus:outline-none transition"
              />
            </div>

            <div>
              <label htmlFor="book-car" className="block text-[10px] font-bold text-[#6B7280] mb-2 uppercase tracking-widest">Vehicle (Year, Make, Model, Engine) *</label>
              <input id="book-car" type="text" placeholder="e.g. 2020 VW Golf R 2.0 TSI" required value={formData.carMakeModel}
                onChange={(e) => setFormData({ ...formData, carMakeModel: e.target.value })}
                className="w-full px-4 py-3 bg-[#111111] border border-[#2A2A2A] text-white placeholder-[#4B5563] text-sm focus:border-[#FC222D] focus:outline-none transition"
              />
            </div>

            <div>
              <label htmlFor="book-service" className="block text-[10px] font-bold text-[#6B7280] mb-2 uppercase tracking-widest">Service *</label>
              <select id="book-service" required value={formData.serviceType}
                onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                className="w-full px-4 py-3 bg-[#111111] border border-[#2A2A2A] text-white text-sm focus:border-[#FC222D] focus:outline-none transition"
              >
                <option value="">Select service</option>
                {SERVICES.map((s) => <option key={s.value} value={s.value}>{s.label}</option>)}
              </select>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-[#FC222D] text-white text-sm font-black tracking-widest uppercase hover:bg-[#CC1B25] disabled:opacity-50 disabled:cursor-not-allowed transition-colors mt-2"
            >
              {loading ? 'Submitting...' : 'Confirm Booking'}
            </button>
            <p className="text-xs text-[#4B5563] text-center">We confirm within 24 hours · No payment required now</p>
          </div>
        </form>
      )}
    </div>
  );
}
