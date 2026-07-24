import type { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeading } from "@/components/SectionHeading";
import { BRAND, BRAND_UPPER } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Services & Pricing",
  description: `Premium ${BRAND.industry} services in ${BRAND.city}, ${BRAND.stateAbbr}. View packages and pricing.`,
};

const packages = [
  {
    id: "exterior",
    name: "Exterior Detail",
    tagline: "Showroom shine, every time",
    price: 149,
    duration: "2-3 hours",
    features: [
      "Hand wash with pH-neutral soap",
      "Iron decontamination",
      "Clay bar treatment",
      "One-step machine polish",
      "Carnauba wax or spray sealant",
      "Tire & wheel deep clean",
      "Trim restoration",
      "Glass cleaning & water repellent",
    ],
  },
  {
    id: "interior",
    name: "Interior Detail",
    tagline: "Breathe new life inside",
    price: 129,
    duration: "2-3 hours",
    features: [
      "Full vacuum (seats, carpet, trunk)",
      "Steam cleaning all surfaces",
      "Leather cleaning & conditioning",
      "Dashboard & console deep clean",
      "Door jamb cleaning",
      "Air vent detailing",
      "Odor elimination treatment",
      "Interior glass cleaning",
    ],
  },
  {
    id: "full",
    name: "Full Detail",
    tagline: `The complete ${BRAND.name} experience`,
    price: 249,
    duration: "4-5 hours",
    popular: true,
    features: [
      "Everything in Exterior Detail",
      "Everything in Interior Detail",
      "Engine bay cleaning",
      "Headlight restoration",
      "Paint sealant upgrade",
      "Leather UV protection",
      "Trunk detail",
      "Final inspection walkthrough",
    ],
  },
  {
    id: "ceramic",
    name: "Ceramic Coating",
    tagline: "Years of protection in one session",
    price: 599,
    duration: "Full day",
    features: [
      "Multi-stage paint correction",
      "Surface decontamination",
      "IPA wipe-down",
      "Professional ceramic coating application",
      "9H hardness rated",
      "2-5 year protection",
      "Hydrophobic finish",
      "Complimentary maintenance wash",
    ],
  },
  {
    id: "paint",
    name: "Paint Correction",
    tagline: "Restore what the sun took",
    price: 399,
    duration: "6-8 hours",
    features: [
      "Paint depth measurement",
      "Multi-stage compound & polish",
      "Swirl mark removal",
      "Scratch reduction",
      "Oxidation removal",
      "Panel-by-panel correction",
      "Final sealant application",
      "Before & after documentation",
    ],
  },
  {
    id: "fleet",
    name: "Fleet Services",
    tagline: `Volume pricing, ${BRAND.name} quality`,
    price: null,
    duration: "Varies",
    features: [
      "Custom packages per vehicle type",
      "On-site service at your location",
      "Scheduled recurring service",
      "Volume discounts available",
      "Dedicated account manager",
      "Priority scheduling",
      "Monthly billing options",
      "Dealership & rental agency rates",
    ],
  },
];

const addOns = [
  { name: "Headlight Restoration", price: 79 },
  { name: "Engine Bay Detail", price: 69 },
  { name: "Pet Hair Removal", price: 49 },
  { name: "Odor Elimination (Ozone)", price: 89 },
  { name: "Wheel Ceramic Coating", price: 149 },
  { name: "Windshield Ceramic Coating", price: 79 },
  { name: "Trim Ceramic Coating", price: 99 },
  { name: "Scratch Touch-Up", price: 59 },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-b from-charcoal to-black pt-32 pb-20 noise-bg overflow-hidden">
        <div className="gold-stripe left-[20%] top-[-30%]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <p className="text-xs uppercase tracking-[0.5em] text-gold/80 mb-4 animate-fade-in-up stagger-1">
            Our Services
          </p>
          <h1 className="font-display text-6xl md:text-8xl text-off-white animate-fade-in-up stagger-2">
            <span className="text-gold">{BRAND_UPPER}</span> PACKAGES
          </h1>
          <div className="animate-expand mx-auto mt-6 h-[1px] max-w-xs bg-gradient-to-r from-transparent via-gold to-transparent" />
          <p className="text-gray-400 mt-6 max-w-xl mx-auto animate-fade-in-up stagger-3">
            Every package includes our mobile service — we come to you anywhere
            in the {BRAND.city} area. Prices shown are for
            sedans; SUVs and trucks may vary.
          </p>
        </div>
      </section>

      {/* Packages */}
      <section className="bg-black py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                    {pkg.price ? (
                      <div className="flex items-baseline gap-2">
                        <span className="font-display text-5xl text-gold">
                          ${pkg.price}
                        </span>
                        <span className="text-xs text-gray-500 uppercase">
                          starting
                        </span>
                      </div>
                    ) : (
                      <span className="font-display text-3xl text-gold">
                        CUSTOM QUOTE
                      </span>
                    )}
                    <p className="text-xs text-gray-500 mt-1">
                      {pkg.duration}
                    </p>
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
                    {pkg.price ? "Book Now" : "Get A Quote"}
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
              title="ADD-ON SERVICES"
              description="Enhance any package with these additional services."
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
                    ${addon.price}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Size Pricing Note */}
      <section className="bg-black py-16 border-t border-slate">
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <div className="border border-gold/20 p-8">
              <h3 className="font-display text-2xl text-gold mb-4">
                VEHICLE SIZE PRICING
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
                <div>
                  <p className="text-off-white font-semibold mb-1">
                    Sedans & Coupes
                  </p>
                  <p className="text-gray-400">Base pricing as shown</p>
                </div>
                <div>
                  <p className="text-off-white font-semibold mb-1">
                    SUVs & Crossovers
                  </p>
                  <p className="text-gray-400">+$30 - $50 per service</p>
                </div>
                <div>
                  <p className="text-off-white font-semibold mb-1">
                    Trucks & Large SUVs
                  </p>
                  <p className="text-gray-400">+$50 - $75 per service</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
