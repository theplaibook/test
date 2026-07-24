import type { Metadata } from "next";
import { Bebas_Neue, Outfit } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { BRAND } from "@/lib/brand";

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: BRAND.seoTitle,
    template: `%s | ${BRAND.legalName}`,
  },
  description: BRAND.seoDescription,
  keywords: [...BRAND.seoKeywords],
  openGraph: {
    title: BRAND.seoTitle,
    description: BRAND.seoDescription,
    url: BRAND.url,
    siteName: BRAND.legalName,
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BRAND.url,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": BRAND.url,
  name: BRAND.legalName,
  description: BRAND.seoDescription,
  url: BRAND.url,
  telephone: BRAND.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: BRAND.city,
    addressRegion: BRAND.stateAbbr,
    postalCode: BRAND.postalCode,
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: BRAND.geo.latitude,
    longitude: BRAND.geo.longitude,
  },
  areaServed: BRAND.serviceAreas.map((name) => ({ "@type": "City", name })),
  openingHoursSpecification: [
    ...BRAND.hoursSchema.map((h) => ({
      "@type": "OpeningHoursSpecification",
      ...h,
    })),
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "00:00",
      closes: "00:00",
      description: "By appointment only",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: BRAND.rating,
    reviewCount: BRAND.reviewCount,
    bestRating: "5",
  },
  priceRange: BRAND.priceRange,
  image: `${BRAND.url}/og-image.jpg`,
  sameAs: [...BRAND.sameAs],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${bebasNeue.variable} ${outfit.variable} antialiased`}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
