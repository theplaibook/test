import Link from "next/link";
import { BRAND, BRAND_UPPER } from "@/lib/brand";

const serviceAreas = BRAND.serviceAreas.slice(0, 8);

const services = [
  { label: "Exterior Detail", href: "/services#exterior" },
  { label: "Interior Detail", href: "/services#interior" },
  { label: "Full Detail", href: "/services#full" },
  { label: "Ceramic Coating", href: "/services#ceramic" },
  { label: "Paint Correction", href: "/services#paint" },
  { label: "Fleet Services", href: "/services#fleet" },
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
            Ready for {BRAND.name} Results?
          </p>
          <h2 className="font-display text-5xl md:text-7xl text-off-white mb-6">
            BOOK YOUR <span className="text-gold">DETAIL</span> TODAY
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-8">
            We come to your home, office, or anywhere in the {BRAND.city} area.
            Premium results without the hassle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="bg-gold text-black px-10 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-gold-light transition-colors inline-block"
            >
              Schedule Now
            </Link>
            <a
              href={BRAND.phoneHref}
              className="border border-gold text-gold px-10 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-gold hover:text-black transition-colors inline-block"
            >
              {BRAND.phone}
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
              {BRAND_UPPER}
            </span>
            <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mt-1 mb-4">
              {BRAND.descriptor}
            </p>
            <p className="text-sm text-gray-400 leading-relaxed">
              Premium {BRAND.industry} serving {BRAND.city} and the
              greater {BRAND.metro}. We bring our full setup to you.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.3em] text-gold mb-6">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    className="text-sm text-gray-400 hover:text-gold transition-colors"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.3em] text-gold mb-6">
              Service Areas
            </h3>
            <ul className="space-y-3">
              {serviceAreas.map((area) => (
                <li key={area} className="text-sm text-gray-400">
                  {area}, {BRAND.stateAbbr}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.3em] text-gold mb-6">
              Contact
            </h3>
            <div className="space-y-4 text-sm text-gray-400">
              <div>
                <p className="text-off-white mb-1">Phone</p>
                <a href={BRAND.phoneHref} className="hover:text-gold transition-colors">
                  {BRAND.phone}
                </a>
              </div>
              <div>
                <p className="text-off-white mb-1">Email</p>
                <a
                  href={`mailto:${BRAND.email}`}
                  className="hover:text-gold transition-colors"
                >
                  {BRAND.email}
                </a>
              </div>
              <div>
                <p className="text-off-white mb-1">Hours</p>
                {BRAND.hours.map((h) => (
                  <p key={h.days}>{h.days}: {h.time}</p>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} {BRAND.legalName}. All
            rights reserved.
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
