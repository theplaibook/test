import Link from "next/link";
import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeading } from "@/components/SectionHeading";

const features = [
  {
    title: "Instant Sign-Ups",
    description:
      "Bootyfull greets every visitor and walks them through sign-up in seconds. No forms, no friction — just a conversation that converts.",
    price: "0 forms",
    icon: "01",
  },
  {
    title: "Lead Qualifying",
    description:
      "She asks the right questions, sorts the hot leads from the tire-kickers, and hands your team only the people worth calling.",
    price: "Filters noise",
    icon: "02",
  },
  {
    title: "24/7 Reception",
    description:
      "Never sleeps, never takes lunch, never puts anyone on hold. Every lead at 3am gets the same warm welcome as the ones at noon.",
    price: "Always on",
    icon: "03",
  },
  {
    title: "Speaks Everyone's Language",
    description:
      "English, Spanish, Portuguese — Bootyfull switches mid-sentence without missing a beat. Habla con todos los clientes.",
    price: "3+ languages",
    icon: "04",
  },
  {
    title: "Books Appointments",
    description:
      "She checks your calendar, offers open slots, and locks in the meeting — all inside the chat, before the lead cools off.",
    price: "Auto-schedule",
    icon: "05",
  },
  {
    title: "Syncs Your CRM",
    description:
      "Every new customer lands in your system automatically — name, number, and the whole conversation. Nothing gets dropped.",
    price: "Zero copy-paste",
    icon: "06",
  },
];

const stats = [
  { value: "2M+", label: "Chats Handled" },
  { value: "12k", label: "Customers Signed Up" },
  { value: "24/7", label: "Always Online" },
  { value: "0", label: "Coffee Breaks" },
];

const reviews = [
  {
    name: "Mateo R.",
    vehicle: "Founder, Loja Verde",
    text: "We were losing leads overnight. Bootyfull signed up 40 customers while we slept the first week. My co-founder cried a little.",
    rating: 5,
  },
  {
    name: "Valentina S.",
    vehicle: "Owner, Studio Flora",
    text: "She replies in Portuguese and Spanish faster than my whole front desk. Clients think she's a real person. Honestly, better.",
    rating: 5,
  },
  {
    name: "Diego M.",
    vehicle: "Director, RapidFit Gyms",
    text: "Set it up in an afternoon. Now every DM turns into a signed-up member. Bootyfull works harder than my sales team, no offense to them.",
    rating: 5,
  },
];

const whyUs = [
  {
    title: "She Never Sleeps",
    description:
      "Your competitors close at 6pm. Bootyfull is still out there signing up the customer who finally had a free minute at midnight.",
  },
  {
    title: "She's Never Awkward",
    description:
      "No dead air, no fumbled pricing questions, no 'let me check with my manager.' Bootyfull knows your business cold and answers instantly.",
  },
  {
    title: "She Sounds Human",
    description:
      "Warm, quick, a little charming. Customers relax and actually finish signing up — because it feels like a chat, not a form.",
  },
  {
    title: "Set Up in Minutes",
    description:
      "Tell Bootyfull what you sell and who you serve. Drop one line of code — or connect WhatsApp — and she's live. That's the whole setup.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden noise-bg">
        {/* Background photo */}
        <Image
          src="/beach-hero.png"
          alt="Friends laughing together on a sunny beach"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Darkening + brand tint overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/70 to-black/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60" />
        <div className="absolute inset-0 bg-gold/10 mix-blend-overlay" />

        {/* Decorative stripes */}
        <div className="gold-stripe left-[15%] top-[-20%]" />
        <div className="gold-stripe left-[75%] top-[-40%]" />
        <div className="gold-stripe left-[45%] top-[-60%]" />

        {/* Diagonal accent line bottom-left */}
        <div className="absolute bottom-0 left-0 w-[300px] h-[1px] bg-gradient-to-r from-gold to-transparent origin-bottom-left -rotate-[30deg]" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          {/* Eyebrow */}
          <p className="animate-fade-in-up stagger-1 text-xs uppercase tracking-[0.5em] text-gold/80 mb-8">
            The AI Chatbot Call Center
          </p>

          {/* Main title */}
          <h1 className="animate-fade-in-up stagger-2 font-display leading-[0.9]">
            <span className="block text-7xl sm:text-8xl md:text-[10rem] gold-shimmer">
              BOOTYFULL
            </span>
            <span className="block text-3xl sm:text-4xl md:text-6xl text-off-white mt-2">
              SIGNS UP YOUR CUSTOMERS
            </span>
          </h1>

          {/* Accent divider */}
          <div className="animate-expand mx-auto mt-8 mb-8 h-[1px] max-w-xs bg-gradient-to-r from-transparent via-gold to-transparent" />

          {/* Subtitle */}
          <p className="animate-fade-in-up stagger-3 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Meet Bootyfull — the always-on AI chatbot that greets, qualifies,
            and signs up your customers 24/7. A whole call center in one
            beautiful bot. No hold music. No missed leads.
          </p>

          {/* CTAs */}
          <div className="animate-fade-in-up stagger-4 flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Link
              href="/book"
              className="bg-gold text-black px-10 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-gold-light transition-all hover:translate-y-[-2px]"
            >
              Get Bootyfull
            </Link>
            <Link
              href="/services"
              className="border border-gold/40 text-gold px-10 py-4 text-sm font-semibold uppercase tracking-wider hover:border-gold hover:bg-gold/10 transition-all"
            >
              See Plans
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
              5.0 from 156+ businesses
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

      {/* ===== FEATURES ===== */}
      <section className="bg-black py-24">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <SectionHeading
              label="What She Does"
              title="MEET BOOTYFULL"
              goldWord="BOOTYFULL"
              description="From the first hello to the signed-up customer, Bootyfull runs the whole conversation — so you never lose a lead to a missed message again."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {features.map((feature, i) => (
              <ScrollReveal key={feature.title} delay={i * 100}>
                <div className="service-card p-8 h-full">
                  <span className="font-display text-5xl text-gold/20">
                    {feature.icon}
                  </span>
                  <h3 className="font-display text-2xl text-off-white mt-4 mb-3">
                    {feature.title.toUpperCase()}
                  </h3>
                  <p className="text-sm text-gray-400 leading-relaxed mb-6">
                    {feature.description}
                  </p>
                  <p className="text-gold text-sm font-semibold uppercase tracking-wider">
                    {feature.price}
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
              See Plans & Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* ===== WHY BOOTYFULL ===== */}
      <section className="relative bg-charcoal py-24 overflow-hidden noise-bg">
        <div className="gold-stripe left-[10%] top-[-30%]" />
        <div className="gold-stripe right-[20%] top-[-50%]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <SectionHeading
              label="The Difference"
              title="WHY BOOTYFULL?"
              goldWord="BOOTYFULL"
              description="She's not just another chat popup. She's a closer who happens to live in a chat window."
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
              title="BUSINESSES LOVE BOOTYFULL"
              goldWord="BOOTYFULL"
              description="Don't take our word for it. Here's what happened after they let her answer the chat."
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

      {/* ===== CHANNELS ===== */}
      <section className="bg-charcoal py-24 border-t border-slate">
        <div className="max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <SectionHeading
              label="Everywhere You Are"
              title="ONE BOT, EVERY CHANNEL"
              description="Bootyfull shows up wherever your customers already are — and signs them up right there."
            />
          </ScrollReveal>

          <div className="flex flex-wrap justify-center gap-4 mt-12">
            {[
              "Website",
              "WhatsApp",
              "Instagram",
              "Messenger",
              "SMS",
              "Email",
              "Slack",
              "Telegram",
              "Live Chat",
              "TikTok DMs",
            ].map((channel, i) => (
              <ScrollReveal key={channel} delay={i * 50}>
                <div className="border border-slate px-6 py-3 text-sm uppercase tracking-wider text-gray-400 hover:border-gold hover:text-gold transition-colors cursor-default">
                  {channel}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
