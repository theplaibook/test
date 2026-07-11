import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Conversations",
  description:
    "Real-style conversations showing Bootyfull, the AI chatbot, greeting and signing up customers across gyms, salons, e-commerce, real estate, restaurants and more.",
};

type Msg = { from: "bot" | "user"; text: string };

const conversations: {
  category: string;
  business: string;
  outcome: string;
  chat: Msg[];
}[] = [
  {
    category: "E-Commerce",
    business: "Loja Verde",
    outcome: "Signed up + first order",
    chat: [
      { from: "bot", text: "Oi! First time here? I've got a code that'll make this even better." },
      { from: "user", text: "ooh yes please" },
      { from: "bot", text: "Drop your email and it's yours — plus free shipping today." },
      { from: "user", text: "cami@email.com" },
      { from: "bot", text: "Done! Code applied. You're officially one of us." },
    ],
  },
  {
    category: "Fitness",
    business: "RapidFit Gyms",
    outcome: "New member enrolled",
    chat: [
      { from: "bot", text: "Looking to start training? I can get you a free trial pass right now." },
      { from: "user", text: "how much after that?" },
      { from: "bot", text: "$29/mo, no joining fee this week. Want me to lock it in?" },
      { from: "user", text: "yeah do it" },
      { from: "bot", text: "You're in! See you at the front desk, Diego." },
    ],
  },
  {
    category: "Beauty",
    business: "Studio Flora",
    outcome: "Appointment booked",
    chat: [
      { from: "bot", text: "Hola! Want to book with us? I've got openings this week." },
      { from: "user", text: "friday afternoon?" },
      { from: "bot", text: "Friday 3pm is free with Ana. Shall I book it?" },
      { from: "user", text: "perfect" },
      { from: "bot", text: "Booked! Confirmation on its way. Nos vemos el viernes." },
    ],
  },
  {
    category: "Real Estate",
    business: "Casa Nova Realty",
    outcome: "Viewing scheduled",
    chat: [
      { from: "bot", text: "Hey! Interested in the downtown loft? I can set up a viewing." },
      { from: "user", text: "is it still available?" },
      { from: "bot", text: "It is! Saturday morning works — what's the best number to text you?" },
      { from: "user", text: "555-0110" },
      { from: "bot", text: "Got it. Viewing confirmed for Saturday 10am." },
    ],
  },
  {
    category: "Restaurant",
    business: "El Rincón",
    outcome: "Reservation + waitlist",
    chat: [
      { from: "bot", text: "Buenas! Table for tonight? We fill up fast on Fridays." },
      { from: "user", text: "table for 4 at 8" },
      { from: "bot", text: "8pm for 4 — done. Want to join our VIP list for early booking?" },
      { from: "user", text: "sure" },
      { from: "bot", text: "Added! See you at 8, table's under Mateo." },
    ],
  },
  {
    category: "Agency",
    business: "Bright Studio",
    outcome: "Qualified lead booked",
    chat: [
      { from: "bot", text: "Hi! Tell me a bit about your project and I'll set up a call." },
      { from: "user", text: "need a new website, small budget" },
      { from: "bot", text: "Got it. Our starter builds fit that. Free intro call Thursday?" },
      { from: "user", text: "works for me" },
      { from: "bot", text: "Booked for Thursday 11am. The team's excited." },
    ],
  },
];

const categories = [
  "All",
  "E-Commerce",
  "Fitness",
  "Beauty",
  "Real Estate",
  "Restaurant",
];

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 noise-bg overflow-hidden">
        {/* Background photo */}
        <Image
          src="/restaurant.png"
          alt="Friends laughing over dinner and drinks at a beachside restaurant"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/80 to-black" />
        <div className="gold-stripe right-[25%] top-[-20%]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <p className="text-xs uppercase tracking-[0.5em] text-gold/80 mb-4 animate-fade-in-up stagger-1">
            She Never Misses
          </p>
          <h1 className="font-display text-6xl md:text-8xl text-off-white animate-fade-in-up stagger-2">
            <span className="text-gold">BOOTYFULL</span> AT WORK
          </h1>
          <div className="animate-expand mx-auto mt-6 h-[1px] max-w-xs bg-gradient-to-r from-transparent via-gold to-transparent" />
          <p className="text-gray-400 mt-6 max-w-xl mx-auto animate-fade-in-up stagger-3">
            Real-style chats from real kinds of businesses. Every one of these
            ended the same way — a new customer signed up, no human required.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-black border-b border-slate sticky top-20 z-30">
        <div className="max-w-7xl mx-auto px-6 py-4 flex gap-3 overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`text-xs uppercase tracking-wider px-4 py-2 border whitespace-nowrap transition-colors ${
                cat === "All"
                  ? "border-gold text-gold bg-gold/10"
                  : "border-slate text-gray-500 hover:border-gold/40 hover:text-gold"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Conversations Grid */}
      <section className="bg-black py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {conversations.map((item, i) => (
              <ScrollReveal key={item.business} delay={i * 80}>
                <div className="group border border-slate hover:border-gold/30 transition-colors flex flex-col h-full">
                  {/* Header */}
                  <div className="flex items-center justify-between px-5 py-4 border-b border-slate bg-charcoal">
                    <div>
                      <p className="text-off-white text-sm font-semibold">
                        {item.business}
                      </p>
                      <p className="text-xs text-gold mt-1">{item.category}</p>
                    </div>
                    <span className="text-[9px] text-cyan uppercase tracking-wider border border-cyan/30 px-2 py-1">
                      Live
                    </span>
                  </div>

                  {/* Chat */}
                  <div className="flex-1 p-5 space-y-3 bg-black/40">
                    {item.chat.map((m, j) => (
                      <div
                        key={j}
                        className={`flex ${
                          m.from === "bot" ? "justify-start" : "justify-end"
                        }`}
                      >
                        <div
                          className={`max-w-[82%] px-3.5 py-2 text-[13px] leading-relaxed ${
                            m.from === "bot"
                              ? "bg-gradient-to-br from-gold to-violet text-black font-medium"
                              : "bg-slate text-off-white"
                          }`}
                        >
                          {m.text}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Outcome */}
                  <div className="px-5 py-3 border-t border-slate flex items-center gap-2">
                    <span className="w-2 h-2 bg-cyan" />
                    <span className="text-xs uppercase tracking-wider text-gray-400">
                      {item.outcome}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal py-20 border-t border-slate">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">
              Your Business Could Be Next
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-off-white mb-6">
              WANT CHATS LIKE <span className="text-gold">THESE?</span>
            </h2>
            <Link
              href="/book"
              className="inline-block bg-gold text-black px-10 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-gold-light transition-colors"
            >
              Get Bootyfull
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
