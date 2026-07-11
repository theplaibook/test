import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "The story behind Bootyfull — the AI chatbot call center built to sign up customers 24/7. Why we built a bot that never sleeps, never fumbles, and speaks everyone's language.",
};

const values = [
  {
    title: "Warmth",
    description:
      "A sign-up should feel like a chat with a friend, not a form at the DMV. Bootyfull is built to be the friendliest first impression your business has.",
  },
  {
    title: "Speed",
    description:
      "A lead cools off in minutes. Bootyfull replies in milliseconds — day or night — so nobody waits and nobody wanders off to a competitor.",
  },
  {
    title: "Honesty",
    description:
      "She quotes real prices, answers real questions, and never oversells. A customer she signs up is a customer who actually wanted to.",
  },
  {
    title: "Fun",
    description:
      "Business software is boring. Bootyfull isn't. She's charming, a little cheeky, and somehow that gets more people across the line.",
  },
];

const timeline = [
  {
    year: "Idea",
    title: "The 3AM Lead",
    description:
      "A friend lost a customer because nobody answered a midnight message. We thought: what if someone always did?",
  },
  {
    year: "Day 1",
    title: "Bootyfull Is Born",
    description:
      "We named the bot Bootyfull because it made us laugh — and because customers remember a name that makes them smile.",
  },
  {
    year: "Beta",
    title: "First Sign-Up",
    description:
      "At 2:47am, Bootyfull greeted a stranger, answered three questions, and signed them up. Nobody was awake. It just worked.",
  },
  {
    year: "Launch",
    title: "She Learned to Travel",
    description:
      "WhatsApp, Instagram, SMS. Bootyfull went wherever customers already were — and started signing them up right there.",
  },
  {
    year: "Now",
    title: "Habla Con Todos",
    description:
      "English, Spanish, Portuguese, and counting. Bootyfull signs up customers on three continents while their owners sleep.",
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
            THE BOT THAT NEVER <span className="text-gold">SLEEPS</span>
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
                  A SIGN-UP SHOULDN&apos;T FEEL<br />
                  <span className="text-gold">LIKE PAPERWORK.</span>
                </h2>
                <div className="space-y-4 text-sm text-gray-400 leading-relaxed">
                  <p>
                    Bootyfull started with a simple, slightly ridiculous idea:
                    what if the friendliest, fastest salesperson at your business
                    was a chatbot with a name that made people smile?
                  </p>
                  <p>
                    Every business loses customers in the gaps — the message that
                    comes in at midnight, the question nobody answered fast
                    enough, the form that felt like too much work. Bootyfull
                    lives in those gaps and turns them into sign-ups.
                  </p>
                  <p>
                    She greets, she qualifies, she books, she signs people up —
                    in English, Spanish, or Portuguese — and drops every new
                    customer straight into your system. No coffee breaks, no bad
                    days, no leads left on read.
                  </p>
                </div>
              </div>
              <div className="relative aspect-square border border-slate overflow-hidden">
                <Image
                  src="/customer-call.png"
                  alt="A happy customer chatting from home, connected any time of day"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 text-[10px] uppercase tracking-[0.3em] text-off-white">
                  Signed up from her couch
                </span>
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
              label="What Drives Her"
              title="BOOTYFULL VALUES"
              goldWord="BOOTYFULL"
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
              label="How She Grew"
              title="THE BOOTYFULL STORY"
              goldWord="BOOTYFULL"
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

      {/* Trust markers */}
      <section className="bg-charcoal py-16 border-t border-slate">
        <div className="max-w-5xl mx-auto px-6">
          <ScrollReveal>
            <SectionHeading
              label="The Fine Print"
              title="SAFE & SERIOUS (MOSTLY)"
              description="Silly name, serious engineering. Bootyfull is built on infrastructure that treats your customers' data like it matters — because it does."
            />
          </ScrollReveal>

          <div className="flex flex-wrap justify-center gap-6 mt-12">
            {[
              "GDPR Ready",
              "Data Encrypted",
              "99.9% Uptime",
              "No Lead Left Behind",
              "Human Handoff",
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
              LET HER SIGN UP YOUR <span className="text-gold">CUSTOMERS</span>
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
