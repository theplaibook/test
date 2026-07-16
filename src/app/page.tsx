import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeading } from "@/components/SectionHeading";

const services = [
  {
    title: "Exterior Detail",
    description:
      "Hand wash, clay bar, polish, and sealant. Your paint restored to showroom condition.",
    price: "From $149",
    icon: "01",
  },
  {
    title: "Interior Detail",
    description:
      "Deep vacuum, steam clean, leather conditioning, and odor elimination. Like new inside.",
    price: "From $129",
    icon: "02",
  },
  {
    title: "Full Detail",
    description:
      "Complete interior and exterior treatment. The full Superior experience, inside and out.",
    price: "From $249",
    icon: "03",
  },
  {
    title: "Ceramic Coating",
    description:
      "Professional-grade ceramic protection. Years of defense against Arizona's brutal sun.",
    price: "From $599",
    icon: "04",
  },
  {
    title: "Paint Correction",
    description:
      "Multi-stage compounding and polishing to remove swirls, scratches, and oxidation.",
    price: "From $399",
    icon: "05",
  },
  {
    title: "Fleet Services",
    description:
      "Volume pricing for dealerships, rental agencies, and corporate fleets. On-site service.",
    price: "Custom",
    icon: "06",
  },
];

const stats = [
  { value: "5,000+", label: "Cars Detailed" },
  { value: "156", label: "5-Star Reviews" },
  { value: "8+", label: "Years Experience" },
  { value: "100%", label: "Satisfaction Rate" },
];

const reviews = [
  {
    name: "Marcus T.",
    vehicle: "2024 BMW X5",
    text: "Absolutely blown away. My X5 looks better than the day I drove it off the lot. The ceramic coating is flawless.",
    rating: 5,
  },
  {
    name: "Jennifer R.",
    vehicle: "2023 Mercedes GLE",
    text: "They came to my office in Paradise Valley and detailed my car while I worked. Superior is the only detailer I trust with my Mercedes.",
    rating: 5,
  },
  {
    name: "David K.",
    vehicle: "2022 Porsche 911",
    text: "The paint correction was incredible. Swirl marks I thought were permanent are completely gone. These guys know what they're doing.",
    rating: 5,
  },
];

const whyUs = [
  {
    title: "We Come To You",
    description:
      "No drop-offs, no waiting rooms. We bring our full detail setup to your home, office, or wherever your vehicle is.",
  },
  {
    title: "Premium Products Only",
    description:
      "We use exclusively professional-grade products — Gtechniq, Gyeon, and Chemical Guys. No shortcuts, no cheap substitutes.",
  },
  {
    title: "Trained & Insured",
    description:
      "Every technician is fully trained, background-checked, and insured. Your vehicle is in expert hands.",
  },
  {
    title: "Arizona Specialists",
    description:
      "We understand what the desert sun, dust, and heat do to paint and interiors. Our processes are built for this climate.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden noise-bg">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-charcoal to-black" />

        {/* Decorative stripes */}
        <div className="gold-stripe left-[15%] top-[-20%]" />
        <div className="gold-stripe left-[75%] top-[-40%]" />
        <div className="gold-stripe left-[45%] top-[-60%]" />

        {/* Diagonal gold line bottom-left */}
        <div className="absolute bottom-0 left-0 w-[300px] h-[1px] bg-gradient-to-r from-gold to-transparent origin-bottom-left -rotate-[30deg]" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          {/* Eyebrow */}
          <p className="animate-fade-in-up stagger-1 text-xs uppercase tracking-[0.5em] text-gold/80 mb-8">
            Scottsdale&apos;s Premier Mobile Detailing
          </p>

          {/* Main title */}
          <h1 className="animate-fade-in-up stagger-2 font-display leading-[0.9]">
            <span className="block text-7xl sm:text-8xl md:text-[10rem] gold-shimmer">
              SUPERIOR
            </span>
            <span className="block text-4xl sm:text-5xl md:text-7xl text-off-white mt-2">
              MOBILE DETAILING
            </span>
          </h1>

          {/* Gold divider */}
          <div className="animate-expand mx-auto mt-8 mb-8 h-[1px] max-w-xs bg-gradient-to-r from-transparent via-gold to-transparent" />

          {/* Subtitle */}
          <p className="animate-fade-in-up stagger-3 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Premium car detailing that comes to you. Ceramic coating, paint
            correction, and meticulous detailing — delivered to your door
            anywhere in the Scottsdale area.
          </p>

          {/* CTAs */}
          <div className="animate-fade-in-up stagger-4 flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Link
              href="/book"
              className="bg-gold text-black px-10 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-gold-light transition-all hover:translate-y-[-2px]"
            >
              Book Your Detail
            </Link>
            <Link
              href="/services"
              className="border border-gold/40 text-gold px-10 py-4 text-sm font-semibold uppercase tracking-wider hover:border-gold hover:bg-gold/10 transition-all"
            >
              View Services
            </Link>
          </div>

          {/* Trust badge */}
          <div className="animate-fade-in-up stagger-5 mt-16 flex items-center justify-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-4 h-4 text-gold"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-sm text-gray-400">
              5.0 from 156+ reviews
            </span>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent" />
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <section className="bg-charcoal border-y border-slate">
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <ScrollReveal key={stat.label} className="text-center">
              <p className="font-display text-4xl md:text-5xl text-gold">
                {stat.value}
              </p>
              <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mt-2">
                {stat.label}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="bg-black py-24">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <SectionHeading
              label="What We Do"
              title="SUPERIOR SERVICES"
              goldWord="SUPERIOR"
              description="From a quick exterior refresh to multi-stage paint correction, every service is performed with meticulous attention to detail."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {services.map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 100}>
                <div className="service-card p-8 h-full">
                  <span className="font-display text-5xl text-gold/20">
                    {service.icon}
                  </span>
                  <h3 className="font-display text-2xl text-off-white mt-4 mb-3">
                    {service.title.toUpperCase()}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <p className="text-gold text-sm font-semibold uppercase tracking-wider">
                    {service.price}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-block border border-gold/40 text-gold px-10 py-4 text-sm font-semibold uppercase tracking-wider hover:border-gold hover:bg-gold/10 transition-all"
            >
              View All Services & Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* ===== WHY SUPERIOR ===== */}
      <section className="relative bg-charcoal py-24 overflow-hidden noise-bg">
        <div className="gold-stripe left-[10%] top-[-30%]" />
        <div className="gold-stripe right-[20%] top-[-50%]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <SectionHeading
              label="The Difference"
              title="WHY SUPERIOR?"
              goldWord="SUPERIOR"
              description="We're not just another mobile wash. We're detailing professionals who happen to come to you."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            {whyUs.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 100}>
                <div className="flex gap-6 p-6">
                  <div className="flex-shrink-0 w-12 h-12 border border-gold flex items-center justify-center">
                    <span className="font-display text-xl text-gold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-display text-xl text-off-white mb-2">
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
      </section>

      {/* ===== REVIEWS ===== */}
      <section className="bg-black py-24">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <SectionHeading
              label="Testimonials"
              title="SUPERIOR RESULTS"
              goldWord="SUPERIOR"
              description="Don't take our word for it. Here's what our clients have to say."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            {reviews.map((review, i) => (
              <ScrollReveal key={review.name} delay={i * 150}>
                <div className="border border-slate p-8 h-full flex flex-col">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, j) => (
                      <svg
                        key={j}
                        className="w-4 h-4 text-gold"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed flex-1 italic">
                    &ldquo;{review.text}&rdquo;
                  </p>
                  <div className="mt-6 pt-6 border-t border-slate">
                    <p className="text-off-white font-semibold text-sm">
                      {review.name}
                    </p>
                    <p className="text-gold text-xs mt-1">{review.vehicle}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICE AREAS ===== */}
      <section className="bg-charcoal py-24 border-t border-slate">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <SectionHeading
              label="Coverage"
              title="SERVING THE VALLEY"
              description="We bring Superior detailing to your doorstep across the Phoenix metropolitan area."
            />
          </ScrollReveal>

          <div className="flex flex-wrap justify-center gap-4 mt-12">
            {[
              "Scottsdale",
              "Paradise Valley",
              "Phoenix",
              "Tempe",
              "Mesa",
              "Chandler",
              "Gilbert",
              "Fountain Hills",
              "Cave Creek",
              "Carefree",
            ].map((area, i) => (
              <ScrollReveal key={area} delay={i * 50}>
                <div className="border border-slate px-6 py-3 text-sm uppercase tracking-wider text-gray-400 hover:border-gold hover:text-gold transition-colors cursor-default">
                  {area}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
