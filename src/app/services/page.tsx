import type { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Plans & Pricing",
  description:
    "Bootyfull plans start at $99/mo. Pick Starter, Growth, or Unlimited and let the AI chatbot greet, qualify, and sign up your customers 24/7 across every channel.",
};

const packages = [
  {
    id: "starter",
    name: "Starter",
    tagline: "Get her live on your site",
    price: 99,
    duration: "per month",
    features: [
      "Bootyfull on your website",
      "Up to 500 chats / month",
      "Instant customer sign-ups",
      "Lead capture (name + number)",
      "English + Spanish",
      "Email lead summaries",
      "One-line install",
      "Cancel anytime",
    ],
  },
  {
    id: "growth",
    name: "Growth",
    tagline: "The one most businesses pick",
    price: 249,
    duration: "per month",
    popular: true,
    features: [
      "Everything in Starter",
      "Up to 5,000 chats / month",
      "WhatsApp, Instagram & Messenger",
      "English, Spanish & Portuguese",
      "Calendar booking inside chat",
      "Lead qualifying & routing",
      "CRM sync (any major CRM)",
      "Custom personality & tone",
    ],
  },
  {
    id: "unlimited",
    name: "Unlimited",
    tagline: "Let her run the whole front desk",
    price: 599,
    duration: "per month",
    features: [
      "Everything in Growth",
      "Unlimited chats",
      "Every channel, every language",
      "Payments & deposits in chat",
      "A/B tested sign-up scripts",
      "Team handoff to a human",
      "Priority support (from humans)",
      "Dedicated success manager",
    ],
  },
];

const addOns = [
  { name: "Extra Language Pack", price: 29 },
  { name: "Voice Calls (she talks too)", price: 89 },
  { name: "Custom Avatar & Name", price: 49 },
  { name: "WhatsApp Business Setup", price: 69 },
  { name: "CRM Integration Build", price: 99 },
  { name: "Payments in Chat", price: 79 },
  { name: "Analytics Dashboard", price: 39 },
  { name: "White-Label (your brand)", price: 149 },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-b from-charcoal to-black pt-32 pb-20 noise-bg overflow-hidden">
        <div className="gold-stripe left-[20%] top-[-30%]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <p className="text-xs uppercase tracking-[0.5em] text-gold/80 mb-4 animate-fade-in-up stagger-1">
            Simple Pricing
          </p>
          <h1 className="font-display text-6xl md:text-8xl text-off-white animate-fade-in-up stagger-2">
            <span className="text-gold">BOOTYFULL</span> PLANS
          </h1>
          <div className="animate-expand mx-auto mt-6 h-[1px] max-w-xs bg-gradient-to-r from-transparent via-gold to-transparent" />
          <p className="text-gray-400 mt-6 max-w-xl mx-auto animate-fade-in-up stagger-3">
            One flat monthly price — no per-lead fees, no per-seat nonsense.
            Bootyfull signs up as many customers as she can and never asks for
            a raise. Cancel anytime.
          </p>
        </div>
      </section>

      {/* Packages */}
      <section className="bg-black py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg, i) => (
              <ScrollReveal key={pkg.id} delay={i * 100}>
                <div
                  id={pkg.id}
                  className={`service-card p-8 h-full flex flex-col ${
                    pkg.popular ? "border-gold/40" : ""
                  }`}
                >
                  {pkg.popular && (
                    <div className="bg-gold text-black text-[10px] font-bold uppercase tracking-wider px-3 py-1 self-start mb-4">
                      Most Popular
                    </div>
                  )}
                  <p className="text-xs uppercase tracking-[0.3em] text-gold mb-2">
                    {pkg.tagline}
                  </p>
                  <h3 className="font-display text-3xl text-off-white mb-4">
                    {pkg.name.toUpperCase()}
                  </h3>
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="font-display text-5xl text-gold">
                        ${pkg.price}
                      </span>
                      <span className="text-xs text-gray-500 uppercase">
                        {pkg.duration}
                      </span>
                    </div>
                  </div>
                  <ul className="space-y-3 flex-1">
                    {pkg.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm text-gray-400"
                      >
                        <span className="text-gold mt-0.5 text-xs">--</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/book"
                    className={`mt-8 block text-center py-3 text-sm font-semibold uppercase tracking-wider transition-all ${
                      pkg.popular
                        ? "bg-gold text-black hover:bg-gold-light"
                        : "border border-gold/40 text-gold hover:bg-gold hover:text-black"
                    }`}
                  >
                    Get {pkg.name}
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Add-Ons */}
      <section className="bg-charcoal py-24 border-t border-slate">
        <div className="max-w-5xl mx-auto px-6">
          <ScrollReveal>
            <SectionHeading
              label="Extras"
              title="POWER-UPS"
              description="Bolt these onto any plan and give Bootyfull a few more tricks."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-16">
            {addOns.map((addon, i) => (
              <ScrollReveal key={addon.name} delay={i * 50}>
                <div className="flex justify-between items-center border border-slate p-5 hover:border-gold/30 transition-colors">
                  <span className="text-sm text-off-white">
                    {addon.name}
                  </span>
                  <span className="font-display text-xl text-gold">
                    ${addon.price}/mo
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="bg-black py-16 border-t border-slate">
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <div className="border border-gold/20 p-8">
              <h3 className="font-display text-2xl text-gold mb-4">
                THE BOOTYFULL PROMISE
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
                <div>
                  <p className="text-off-white font-semibold mb-1">
                    Live in a Day
                  </p>
                  <p className="text-gray-400">
                    She&apos;s answering chats before your coffee&apos;s cold.
                  </p>
                </div>
                <div>
                  <p className="text-off-white font-semibold mb-1">
                    No Contracts
                  </p>
                  <p className="text-gray-400">
                    Month to month. Leave whenever, no hard feelings.
                  </p>
                </div>
                <div>
                  <p className="text-off-white font-semibold mb-1">
                    14-Day Free Trial
                  </p>
                  <p className="text-gray-400">
                    Watch her sign up customers before you pay a cent.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
