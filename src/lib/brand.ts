/**
 * BRAND CONFIG — the single source of truth for the whole site.
 *
 * Change the values here and every page, nav, footer, metadata block,
 * and JSON-LD schema updates automatically. No other file needs editing
 * to rebrand this template.
 */
export const BRAND = {
  /* ── Identity ── */
  name: "Superior",               // primary brand word — the big gold word everywhere
  descriptor: "Mobile Detailing", // secondary line shown under/next to the name
  legalName: "Superior Mobile Detailing", // full name for copyright, metadata, schema

  /* ── Positioning ── */
  heroEyebrow: "Scottsdale's Premier Mobile Detailing",
  heroSubtitle:
    "Premium car detailing that comes to you. Ceramic coating, paint correction, and meticulous detailing — delivered to your door anywhere in the Scottsdale area.",
  industry: "car detailing",      // used in prose and SEO copy

  /* ── Location ── */
  city: "Scottsdale",
  state: "Arizona",
  stateAbbr: "AZ",
  metro: "Phoenix metropolitan area", // "we serve the ___"
  metroNickname: "the Valley",        // casual name for the region
  postalCode: "85251",
  geo: { latitude: 33.4942, longitude: -111.9261 },
  serviceAreas: [
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
  ],

  /* ── Contact ── */
  phone: "(480) 555-0199",
  phoneHref: "tel:+14805550199",
  email: "info@superiormobiledetailing.com",
  url: "https://superiormobiledetailing.com",
  sameAs: [
    "https://www.yelp.com/biz/superior-mobile-detailing-and-car-wash-phoenix-3",
  ],

  /* ── Hours ── */
  hours: [
    { days: "Mon - Sat", time: "7:00 AM - 6:00 PM" },
    { days: "Sun", time: "By Appointment" },
  ],
  hoursSchema: [
    {
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "07:00",
      closes: "18:00",
    },
  ],

  /* ── Social proof ── */
  rating: "5.0",
  reviewCount: "156",
  priceRange: "$$",

  /* ── SEO ── */
  seoTitle: "Superior Mobile Detailing | Premium Car Detailing in Scottsdale, AZ",
  seoDescription:
    "Scottsdale's premier mobile car detailing service. Ceramic coating, paint correction, interior & exterior detailing. We come to you. Serving Scottsdale, Paradise Valley, Phoenix, Tempe & Mesa.",
  seoKeywords: [
    "car detailing scottsdale",
    "mobile detailing scottsdale az",
    "ceramic coating scottsdale",
    "paint correction phoenix",
    "auto detailing paradise valley",
    "mobile car wash scottsdale",
    "interior detailing scottsdale",
    "car detail near me",
    "premium car detailing arizona",
    "superior mobile detailing",
  ],
} as const;

/** The brand word in display caps — used in headings, nav, and gold-word slots. */
export const BRAND_UPPER = BRAND.name.toUpperCase();

/** The descriptor in display caps — used in hero and footer lockups. */
export const DESCRIPTOR_UPPER = BRAND.descriptor.toUpperCase();
