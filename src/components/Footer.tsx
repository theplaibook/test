import Link from "next/link";

const channels = [
  "Website",
  "WhatsApp",
  "Instagram",
  "Messenger",
  "SMS",
  "Email",
  "Slack",
  "Telegram",
];

const plans = [
  { label: "Starter", href: "/services#starter" },
  { label: "Growth", href: "/services#growth" },
  { label: "Unlimited", href: "/services#unlimited" },
  { label: "Book a Demo", href: "/book" },
  { label: "Conversations", href: "/gallery" },
  { label: "About Bootyfull", href: "/about" },
];

export function Footer() {
  return (
    <footer className="bg-black border-t border-slate">
      {/* CTA Banner */}
      <div className="relative overflow-hidden noise-bg">
        <div className="gold-stripe left-[20%] top-[-50%]" />
        <div className="gold-stripe right-[30%] top-[-30%]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-gold mb-4">
            Ready to Sign Up More Customers?
          </p>
          <h2 className="font-display text-5xl md:text-7xl text-off-white mb-6">
            MEET <span className="text-gold">BOOTYFULL</span> TODAY
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-8">
            She greets every visitor, answers every question, and signs them up
            while you sleep. Set up in minutes. Cancel anytime she disappoints
            you (she won&apos;t).
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="bg-gold text-black px-10 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-gold-light transition-colors inline-block"
            >
              Get Bootyfull
            </Link>
            <a
              href="mailto:hola@bootyfull.ai"
              className="border border-gold text-gold px-10 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-gold hover:text-black transition-colors inline-block"
            >
              Talk to a Human
            </a>
          </div>
        </div>
      </div>

      {/* Footer Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <span className="font-display text-3xl text-gold tracking-wider">
              BOOTYFULL
            </span>
            <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mt-1 mb-4">
              AI Chatbot Call Center
            </p>
            <p className="text-sm text-gray-400 leading-relaxed">
              The always-on AI chatbot that greets, qualifies, and signs up your
              customers 24/7. A whole call center in one beautiful bot.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.3em] text-gold mb-6">
              Explore
            </h3>
            <ul className="space-y-3">
              {plans.map((p) => (
                <li key={p.label}>
                  <Link
                    href={p.href}
                    className="text-sm text-gray-400 hover:text-gold transition-colors"
                  >
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Channels */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.3em] text-gold mb-6">
              Works On
            </h3>
            <ul className="space-y-3">
              {channels.map((c) => (
                <li key={c} className="text-sm text-gray-400">
                  {c}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.3em] text-gold mb-6">
              Say Hola
            </h3>
            <div className="space-y-4 text-sm text-gray-400">
              <div>
                <p className="text-off-white mb-1">Email</p>
                <a
                  href="mailto:hola@bootyfull.ai"
                  className="hover:text-gold transition-colors"
                >
                  hola@bootyfull.ai
                </a>
              </div>
              <div>
                <p className="text-off-white mb-1">Ask the Bot</p>
                <p>Tap the chat bubble anywhere</p>
              </div>
              <div>
                <p className="text-off-white mb-1">Hours</p>
                <p>24 / 7 / 365</p>
                <p>She never sleeps</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} Bootyfull AI. Signing up customers
            while you sleep.
          </p>
          <div className="flex gap-6">
            <Link href="/book" className="text-xs text-gray-600 hover:text-gold transition-colors">
              Privacy Policy
            </Link>
            <Link href="/book" className="text-xs text-gray-600 hover:text-gold transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
