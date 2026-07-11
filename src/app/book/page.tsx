"use client";

import { useState, useEffect, useRef } from "react";

/* ── Plans ── */
const plans = [
  {
    id: "starter",
    name: "Starter",
    price: 99,
    duration: "per month",
    desc: "Bootyfull on your website, up to 500 chats",
  },
  {
    id: "growth",
    name: "Growth",
    price: 249,
    duration: "per month",
    desc: "Every channel, 3 languages, calendar booking",
    popular: true,
  },
  {
    id: "unlimited",
    name: "Unlimited",
    price: 599,
    duration: "per month",
    desc: "Unlimited chats, payments, human handoff",
  },
];

const businessTypes = [
  "E-Commerce",
  "Agency",
  "Gym / Fitness",
  "Salon / Beauty",
  "Restaurant",
  "Real Estate",
  "Something Else",
];

const timeSlots = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
  "6:00 PM",
];

/* ── Calendar helpers ── */
function getCalendarDays(year: number, month: number) {
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const days: (number | null)[] = [];
  for (let i = 0; i < firstDay; i++) days.push(null);
  for (let d = 1; d <= daysInMonth; d++) days.push(d);
  return days;
}

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];
const DAY_HEADERS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

/* ── Smooth scroll into view ── */
function useScrollInto(dep: string | boolean) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (dep && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [dep]);
  return ref;
}

export default function BookPage() {
  // Selections
  const [selectedPlan, setSelectedPlan] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Calendar state
  const today = new Date();
  const [calYear, setCalYear] = useState(today.getFullYear());
  const [calMonth, setCalMonth] = useState(today.getMonth());

  const plan = plans.find((p) => p.id === selectedPlan);

  // Scroll refs
  const typeRef = useScrollInto(selectedPlan);
  const dateRef = useScrollInto(selectedType);
  const timeRef = useScrollInto(selectedDate);
  const contactRef = useScrollInto(selectedTime);

  const calDays = getCalendarDays(calYear, calMonth);

  function prevMonth() {
    if (calMonth === 0) { setCalMonth(11); setCalYear(calYear - 1); }
    else setCalMonth(calMonth - 1);
  }
  function nextMonth() {
    if (calMonth === 11) { setCalMonth(0); setCalYear(calYear + 1); }
    else setCalMonth(calMonth + 1);
  }

  function isDayDisabled(day: number) {
    const d = new Date(calYear, calMonth, day);
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    return d < now || d.getDay() === 0;
  }

  function formatDateKey(day: number) {
    return `${calYear}-${String(calMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
  }

  function formatSelectedDate() {
    if (!selectedDate) return "";
    const [y, m, d] = selectedDate.split("-").map(Number);
    const date = new Date(y, m - 1, d);
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
    });
  }

  function reset() {
    setSelectedPlan("");
    setSelectedType("");
    setSelectedDate("");
    setSelectedTime("");
    setName("");
    setPhone("");
    setSubmitted(false);
  }

  const canSubmit = name.trim() && phone.trim();

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-b from-charcoal to-black pt-32 pb-12 noise-bg overflow-hidden">
        <div className="gold-stripe left-[40%] top-[-30%]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <p className="text-xs uppercase tracking-[0.5em] text-gold/80 mb-4 animate-fade-in-up stagger-1">
            Start Your Free Trial
          </p>
          <h1 className="font-display text-6xl md:text-8xl text-off-white animate-fade-in-up stagger-2">
            GET <span className="text-gold">BOOTYFULL</span>
          </h1>
          <div className="animate-expand mx-auto mt-6 h-[1px] max-w-xs bg-gradient-to-r from-transparent via-gold to-transparent" />
        </div>
      </section>

      <section className="bg-black py-16 min-h-screen">
        <div className="max-w-4xl mx-auto px-6">
          {submitted ? (
            /* ── Confirmation ── */
            <div className="text-center py-12 animate-fade-in-up">
              <div className="border border-gold p-12 max-w-lg mx-auto">
                <span className="font-display text-6xl gold-shimmer block mb-4">
                  YOU&apos;RE IN
                </span>
                <p className="text-off-white text-lg mb-2">
                  Nice work{name ? `, ${name.split(" ")[0]}` : ""}. Bootyfull
                  can&apos;t wait to meet you.
                </p>
                <div className="border-t border-slate mt-6 pt-6 space-y-2 text-sm text-gray-400">
                  <p>
                    <span className="text-off-white">{plan?.name} plan</span>
                    {plan && ` -- $${plan.price}/mo`}
                  </p>
                  <p>Demo: {formatSelectedDate()} at {selectedTime}</p>
                </div>
                <p className="text-gray-500 text-xs mt-6">
                  We&apos;ll text {phone} to confirm — or honestly, Bootyfull
                  probably already has.
                </p>
                <button
                  onClick={reset}
                  className="mt-8 border border-gold/40 text-gold px-8 py-3 text-sm uppercase tracking-wider hover:bg-gold hover:text-black transition-all"
                >
                  Start Over
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-0">
              {/* ── Q1: Pick a plan ── */}
              <div className="pb-12">
                <h2 className="font-display text-3xl text-off-white mb-2">
                  PICK YOUR PLAN
                </h2>
                <p className="text-sm text-gray-500 mb-6">
                  Every plan starts with a 14-day free trial. No card to start.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {plans.map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => {
                        setSelectedPlan(p.id);
                        if (p.id !== selectedPlan) {
                          setSelectedType("");
                          setSelectedDate("");
                          setSelectedTime("");
                        }
                      }}
                      className={`relative p-6 border text-left transition-all ${
                        selectedPlan === p.id
                          ? "border-gold bg-gold/10"
                          : "border-slate hover:border-gold/40"
                      }`}
                    >
                      {p.popular && (
                        <div className="absolute top-0 right-0 bg-gold text-black text-[9px] font-bold uppercase tracking-wider px-2 py-0.5">
                          Popular
                        </div>
                      )}
                      {selectedPlan === p.id && (
                        <div className="absolute top-0 left-0 w-full h-[2px] bg-gold" />
                      )}
                      <p className="font-display text-xl text-off-white">
                        {p.name.toUpperCase()}
                      </p>
                      <p className="text-xs text-gray-500 mt-1 mb-3">
                        {p.desc}
                      </p>
                      <div className="flex items-baseline justify-between">
                        <span className="font-display text-2xl text-gold">
                          ${p.price}
                        </span>
                        <span className="text-[10px] text-gray-600 uppercase">
                          {p.duration}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* ── Q2: Business type ── */}
              {selectedPlan && (
                <div
                  ref={typeRef}
                  className="py-12 border-t border-slate animate-fade-in-up"
                >
                  <h2 className="font-display text-3xl text-off-white mb-2">
                    WHAT&apos;S YOUR BUSINESS?
                  </h2>
                  <p className="text-sm text-gray-500 mb-6">
                    So Bootyfull knows how to talk to your customers.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {businessTypes.map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => {
                          setSelectedType(t);
                          if (t !== selectedType) {
                            setSelectedDate("");
                            setSelectedTime("");
                          }
                        }}
                        className={`px-6 py-4 border text-sm transition-all ${
                          selectedType === t
                            ? "border-gold bg-gold/10 text-gold"
                            : "border-slate text-gray-400 hover:border-gold/40"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* ── Q3: Pick a date ── */}
              {selectedType && (
                <div
                  ref={dateRef}
                  className="py-12 border-t border-slate animate-fade-in-up"
                >
                  <h2 className="font-display text-3xl text-off-white mb-2">
                    BOOK YOUR SETUP CALL
                  </h2>
                  <p className="text-sm text-gray-500 mb-6">
                    Pick a day. We&apos;ll have Bootyfull live before it ends.
                  </p>

                  <div className="border border-slate p-6 max-w-md">
                    {/* Month nav */}
                    <div className="flex items-center justify-between mb-6">
                      <button
                        onClick={prevMonth}
                        className="text-gray-500 hover:text-gold transition-colors p-1"
                      >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="square" d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      <span className="font-display text-xl text-off-white">
                        {MONTH_NAMES[calMonth]} {calYear}
                      </span>
                      <button
                        onClick={nextMonth}
                        className="text-gray-500 hover:text-gold transition-colors p-1"
                      >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="square" d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>

                    {/* Day headers */}
                    <div className="grid grid-cols-7 gap-1 mb-2">
                      {DAY_HEADERS.map((d) => (
                        <div
                          key={d}
                          className="text-center text-[10px] uppercase tracking-wider text-gray-600 py-1"
                        >
                          {d}
                        </div>
                      ))}
                    </div>

                    {/* Days */}
                    <div className="grid grid-cols-7 gap-1">
                      {calDays.map((day, i) => {
                        if (day === null) return <div key={`e-${i}`} />;
                        const dateKey = formatDateKey(day);
                        const disabled = isDayDisabled(day);
                        const isSelected = selectedDate === dateKey;
                        const isToday =
                          day === today.getDate() &&
                          calMonth === today.getMonth() &&
                          calYear === today.getFullYear();

                        return (
                          <button
                            key={dateKey}
                            type="button"
                            disabled={disabled}
                            onClick={() => {
                              setSelectedDate(dateKey);
                              if (dateKey !== selectedDate) setSelectedTime("");
                            }}
                            className={`aspect-square flex items-center justify-center text-sm transition-all ${
                              disabled
                                ? "text-gray-700 cursor-not-allowed"
                                : isSelected
                                  ? "bg-gold text-black font-bold"
                                  : isToday
                                    ? "border border-gold/40 text-gold hover:bg-gold/10"
                                    : "text-gray-400 hover:bg-charcoal hover:text-off-white"
                            }`}
                          >
                            {day}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}

              {/* ── Q4: Pick a time ── */}
              {selectedDate && (
                <div
                  ref={timeRef}
                  className="py-12 border-t border-slate animate-fade-in-up"
                >
                  <h2 className="font-display text-3xl text-off-white mb-2">
                    PICK A TIME
                  </h2>
                  <p className="text-sm text-gray-500 mb-6">
                    {formatSelectedDate()}
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 max-w-xl">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setSelectedTime(time)}
                        className={`py-4 border text-sm font-semibold transition-all ${
                          selectedTime === time
                            ? "border-gold bg-gold text-black"
                            : "border-slate text-gray-400 hover:border-gold/40 hover:text-gold"
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* ── Q5: Name & phone ── */}
              {selectedTime && (
                <div
                  ref={contactRef}
                  className="py-12 border-t border-slate animate-fade-in-up"
                >
                  <h2 className="font-display text-3xl text-off-white mb-2">
                    LAST STEP
                  </h2>
                  <p className="text-sm text-gray-500 mb-6">
                    Just your name and number — Bootyfull takes it from here.
                  </p>

                  <div className="max-w-md">
                    <div className="space-y-4 mb-8">
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">
                          Your Name
                        </label>
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Camila Rodríguez"
                          autoFocus
                        />
                      </div>
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="(555) 555-0142"
                        />
                      </div>
                    </div>

                    {/* Summary */}
                    <div className="border border-gold/20 bg-gold/5 p-6 mb-8">
                      <p className="text-xs uppercase tracking-wider text-gold mb-3">
                        Your Setup
                      </p>
                      <div className="space-y-1 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-400">Plan</span>
                          <span className="text-off-white">{plan?.name}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Business</span>
                          <span className="text-off-white">{selectedType}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Setup call</span>
                          <span className="text-off-white">{formatSelectedDate()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Time</span>
                          <span className="text-off-white">{selectedTime}</span>
                        </div>
                        <div className="flex justify-between border-t border-slate pt-2 mt-2">
                          <span className="text-gold font-semibold">After trial</span>
                          <span className="font-display text-2xl text-gold">
                            {plan ? `$${plan.price}/mo` : "--"}
                          </span>
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => setSubmitted(true)}
                      disabled={!canSubmit}
                      className={`w-full py-4 text-sm font-bold uppercase tracking-wider transition-all ${
                        canSubmit
                          ? "bg-gold text-black hover:bg-gold-light"
                          : "bg-slate text-gray-600 cursor-not-allowed"
                      }`}
                    >
                      Start Free Trial
                    </button>
                    <p className="text-[10px] text-gray-600 text-center mt-3">
                      14 days free. No card required to start. Cancel anytime.
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
