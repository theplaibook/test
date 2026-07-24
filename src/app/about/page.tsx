import type { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeading } from "@/components/SectionHeading";
import { BRAND, BRAND_UPPER } from "@/lib/brand";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${BRAND.legalName} — ${BRAND.city}'s trusted ${BRAND.industry} professionals.`,
};

const values = [
  {
    title: "Precision",
    description:
      "Every panel, every seam, every surface gets individual attention. We don't cut corners — we detail them.",
  },
  {
    title: "Integrity",
    description:
      "Honest pricing, realistic expectations, and transparent communication. We tell you what your vehicle needs, not what pads our bill.",
  },
  {
    title: "Excellence",
    description:
      "We use the best products, the best techniques, and hold ourselves to the highest standard on every single vehicle.",
  },
  {
    title: "Convenience",
    description:
      "Your time is valuable. We built our entire business around coming to you, so you never have to rearrange your day.",
  },
];

const timeline = [
  {
    year: "2016",
    title: "The Beginning",
    description:
      "Started with a pressure washer, a bucket of supplies, and a commitment to doing detail work the right way.",
  },
  {
    year: "2018",
    title: "Going Mobile",
    description:
      `Invested in a fully equipped mobile rig to bring professional-grade detailing directly to clients across ${BRAND.city}.`,
  },
  {
    year: "2020",
    title: "Ceramic Certification",
    description:
      "Became certified installers for Gtechniq and Gyeon ceramic coatings, expanding our protection services.",
  },
  {
    year: "2022",
    title: "Fleet Contracts",
    description:
      `Partnered with luxury dealerships and rental agencies across ${BRAND.metroNickname} for recurring fleet maintenance.`,
  },
  {
    year: "2024",
    title: "5,000 Vehicles",
    description:
      "Reached the milestone of 5,000 vehicles detailed with a perfect 5-star rating across all platforms.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-b from-charcoal to-black pt-32 pb-20 noise-bg overflow-hidden">
        <div className="gold-stripe left-[60%] top-[-40%]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <p className="text-xs uppercase tracking-[0.5em] text-gold/80 mb-4 animate-fade-in-up stagger-1">
            Our Story
          </p>
          <h1 className="font-display text-6xl md:text-8xl text-off-white animate-fade-in-up stagger-2">
            BUILT ON <span className="text-gold">{BRAND_UPPER}</span> STANDARDS
          </h1>
          <div className="animate-expand mx-auto mt-6 h-[1px] max-w-xs bg-gradient-to-r from-transparent via-gold to-transparent" />
        </div>
      </section>

      {/* Story */}
      <section className="bg-black py-24">
        <div className="max-w-4xl mx-auto px-6">
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-gold mb-6">
                  Who We Are
                </p>
                <h2 className="font-display text-4xl text-off-white mb-6">
                  DETAILING ISN&apos;T A JOB.<br />
                  <span className="text-gold">IT&apos;S A CRAFT.</span>
                </h2>
                <div className="space-y-4 text-sm text-gray-400 leading-relaxed">
                  <p>
                    {BRAND.legalName} was founded on a simple belief:
                    your vehicle deserves the same level of care and attention
                    that went into building it. Every curve, every surface, every
                    detail matters.
                  </p>
                  <p>
                    We started in {BRAND.city} with one truck and a relentless
                    commitment to quality. Today, we serve clients across
                    {" "}{BRAND.metroNickname} — but our approach hasn&apos;t changed.
                    Every vehicle gets the same meticulous, hands-on treatment.
                  </p>
                  <p>
                    In {BRAND.state}, your paint faces unique challenges from
                    the local climate. We&apos;ve spent years perfecting techniques
                    and selecting products specifically designed to protect
                    against it.
                  </p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-charcoal to-slate aspect-square flex items-center justify-center border border-slate">
                <div className="text-center">
                  <span className="font-display text-7xl text-gold/15 block">
                    PHOTO
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-gray-600">
                    Coming Soon
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Values */}
      <section className="bg-charcoal py-24 border-t border-slate noise-bg relative overflow-hidden">
        <div className="gold-stripe left-[30%] top-[-20%]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <SectionHeading
              label="What Drives Us"
              title={`${BRAND_UPPER} VALUES`}
              goldWord={BRAND_UPPER}
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {values.map((value, i) => (
              <ScrollReveal key={value.title} delay={i * 100}>
                <div className="border border-slate p-8 h-full hover:border-gold/30 transition-colors">
                  <span className="font-display text-5xl text-gold/20">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-2xl text-off-white mt-4 mb-3">
                    {value.title.toUpperCase()}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-black py-24">
        <div className="max-w-3xl mx-auto px-6">
          <ScrollReveal>
            <SectionHeading
              label="Our Journey"
              title={`THE ${BRAND_UPPER} TIMELINE`}
              goldWord={BRAND_UPPER}
            />
          </ScrollReveal>

          <div className="mt-16 relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-[1px] bg-gradient-to-b from-gold via-gold/30 to-transparent" />

            <div className="space-y-12">
              {timeline.map((item, i) => (
                <ScrollReveal key={item.year} delay={i * 150}>
                  <div className="flex gap-8">
                    {/* Year marker */}
                    <div className="flex-shrink-0 w-16 flex items-start justify-center relative">
                      <div className="w-3 h-3 border border-gold bg-black mt-1" />
                    </div>
                    <div className="pb-4">
                      <span className="font-display text-3xl text-gold">
                        {item.year}
                      </span>
                      <h3 className="font-display text-xl text-off-white mt-2 mb-2">
                        {item.title.toUpperCase()}
                      </h3>
                      <p className="text-sm text-gray-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-charcoal py-16 border-t border-slate">
        <div className="max-w-5xl mx-auto px-6">
          <ScrollReveal>
            <SectionHeading
              label="Credentials"
              title="CERTIFIED & INSURED"
              description="Fully insured with professional certifications from leading detailing product manufacturers."
            />
          </ScrollReveal>

          <div className="flex flex-wrap justify-center gap-6 mt-12">
            {[
              "Gtechniq Accredited",
              "Gyeon Certified",
              "IDA Member",
              "Fully Insured",
              "Background Checked",
            ].map((cert, i) => (
              <ScrollReveal key={cert} delay={i * 80}>
                <div className="border border-gold/20 px-6 py-4 text-center">
                  <p className="text-xs uppercase tracking-wider text-gold">
                    {cert}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black py-16 border-t border-slate">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <ScrollReveal>
            <h2 className="font-display text-4xl md:text-5xl text-off-white mb-6">
              EXPERIENCE THE <span className="text-gold">DIFFERENCE</span>
            </h2>
            <Link
              href="/book"
              className="inline-block bg-gold text-black px-10 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-gold-light transition-colors"
            >
              Book Your First Detail
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
