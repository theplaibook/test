import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Before and after photos of Superior Mobile Detailing's work. See the results of our premium car detailing, ceramic coating, and paint correction services in Scottsdale, AZ.",
};

const galleryItems = [
  {
    category: "Ceramic Coating",
    vehicle: "2024 Mercedes-AMG GT",
    description: "Full paint correction + Gtechniq Crystal Serum Ultra ceramic coating. Mirror finish achieved after 12-hour process.",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80",
    tag: "AFTER",
  },
  {
    category: "Full Detail",
    vehicle: "2023 Porsche 911 Turbo S",
    description: "Complete interior and exterior detail. Paint restored to factory gloss, leather conditioned and protected.",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
    tag: "AFTER",
  },
  {
    category: "Paint Correction",
    vehicle: "2024 BMW M4 Competition",
    description: "Two-stage paint correction removing swirl marks and micro-scratches on Isle of Man Green metallic.",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80",
    tag: "AFTER",
  },
  {
    category: "Ceramic Coating",
    vehicle: "2023 Lamborghini Huracan EVO",
    description: "Full ceramic coating package with wheel coating and glass treatment. 5-year protection applied.",
    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80",
    tag: "AFTER",
  },
  {
    category: "Exterior Detail",
    vehicle: "2024 Audi RS7",
    description: "Hand wash, clay bar, single-stage polish and premium sealant. Nardo Gray never looked this good.",
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80",
    tag: "AFTER",
  },
  {
    category: "Interior Detail",
    vehicle: "2023 Range Rover Autobiography",
    description: "Full leather deep clean, steam extraction, and UV protection treatment on semi-aniline leather.",
    image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80",
    tag: "AFTER",
  },
  {
    category: "Paint Correction",
    vehicle: "2022 Ferrari F8 Tributo",
    description: "Rosso Corsa paint corrected to remove dealership wash marks. Three-stage correction process.",
    image: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?w=800&q=80",
    tag: "AFTER",
  },
  {
    category: "Full Detail",
    vehicle: "2024 Mercedes-Benz S-Class",
    description: "Complete showroom detail for client delivery. Interior and exterior brought to factory-new condition.",
    image: "https://images.unsplash.com/photo-1563720223185-11003d516935?w=800&q=80",
    tag: "AFTER",
  },
  {
    category: "Ceramic Coating",
    vehicle: "2023 Porsche Cayenne Turbo GT",
    description: "Paint correction + ceramic coating. Protected against Arizona sun with Gtechniq Crystal Serum Light.",
    image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80",
    tag: "AFTER",
  },
  {
    category: "Exterior Detail",
    vehicle: "2024 McLaren 720S",
    description: "Full exterior detail with paint decontamination, hand polish, and ceramic spray sealant.",
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80",
    tag: "AFTER",
  },
  {
    category: "Full Detail",
    vehicle: "2023 Bentley Continental GT",
    description: "Complete detail including engine bay, trunk, and full interior leather treatment.",
    image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&q=80",
    tag: "AFTER",
  },
  {
    category: "Paint Correction",
    vehicle: "2024 Aston Martin DB12",
    description: "Single-stage polish on Satin Titanium Grey. Removed light swirls from transport and dealer handling.",
    image: "https://images.unsplash.com/photo-1616422285623-13ff0162193c?w=800&q=80",
    tag: "AFTER",
  },
];

const categories = [
  "All",
  "Ceramic Coating",
  "Paint Correction",
  "Full Detail",
  "Interior Detail",
  "Exterior Detail",
];

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-b from-charcoal to-black pt-32 pb-20 noise-bg overflow-hidden">
        <div className="gold-stripe right-[25%] top-[-20%]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <p className="text-xs uppercase tracking-[0.5em] text-gold/80 mb-4 animate-fade-in-up stagger-1">
            Our Work
          </p>
          <h1 className="font-display text-6xl md:text-8xl text-off-white animate-fade-in-up stagger-2">
            <span className="text-gold">SUPERIOR</span> RESULTS
          </h1>
          <div className="animate-expand mx-auto mt-6 h-[1px] max-w-xs bg-gradient-to-r from-transparent via-gold to-transparent" />
          <p className="text-gray-400 mt-6 max-w-xl mx-auto animate-fade-in-up stagger-3">
            Real results on real vehicles. Every transformation shown here was
            performed by our team right here in the Scottsdale area.
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

      {/* Gallery Grid */}
      <section className="bg-black py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="group relative overflow-hidden border border-slate hover:border-gold/30 transition-colors">
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={`${item.vehicle} - ${item.category} by Superior Mobile Detailing Scottsdale`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />

                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                    {/* Tag */}
                    <div className="absolute top-4 left-4 bg-gold text-black text-[9px] font-bold uppercase tracking-wider px-2 py-1">
                      {item.tag}
                    </div>

                    {/* Category tag */}
                    <div className="absolute top-4 right-4 border border-white/20 bg-black/50 backdrop-blur-sm text-[9px] text-white uppercase tracking-wider px-2 py-1">
                      {item.category}
                    </div>

                    {/* Hover overlay with description */}
                    <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-8">
                      <div className="text-center">
                        <span className="text-xs uppercase tracking-[0.3em] text-gold block mb-3">
                          {item.category}
                        </span>
                        <p className="font-display text-2xl text-off-white mb-3">
                          {item.vehicle.toUpperCase()}
                        </p>
                        <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Info bar */}
                  <div className="p-5 bg-charcoal">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-off-white text-sm font-semibold">
                          {item.vehicle}
                        </p>
                        <p className="text-xs text-gold mt-1">
                          {item.category}
                        </p>
                      </div>
                    </div>
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
              Your Vehicle Could Be Next
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-off-white mb-6">
              READY FOR <span className="text-gold">SUPERIOR</span> RESULTS?
            </h2>
            <Link
              href="/book"
              className="inline-block bg-gold text-black px-10 py-4 text-sm font-semibold uppercase tracking-wider hover:bg-gold-light transition-colors"
            >
              Book Your Detail
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
