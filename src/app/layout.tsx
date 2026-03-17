import type { Metadata } from "next";
import { Bebas_Neue, Outfit } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

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
    default: "Superior Mobile Detailing | Premium Car Detailing in Scottsdale, AZ",
    template: "%s | Superior Mobile Detailing",
  },
  description:
    "Scottsdale's premier mobile car detailing service. Ceramic coating, paint correction, interior & exterior detailing. We come to you. Serving Scottsdale, Paradise Valley, Phoenix, Tempe & Mesa.",
  keywords: [
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
  openGraph: {
    title: "Superior Mobile Detailing | Premium Car Detailing in Scottsdale, AZ",
    description:
      "Scottsdale's premier mobile car detailing service. We come to you. Ceramic coating, paint correction, full interior & exterior detailing.",
    url: "https://superiormobiledetailing.com",
    siteName: "Superior Mobile Detailing",
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
    canonical: "https://superiormobiledetailing.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://superiormobiledetailing.com",
  name: "Superior Mobile Detailing",
  description:
    "Premium mobile car detailing service in Scottsdale, AZ. Ceramic coating, paint correction, interior and exterior detailing. We come to you.",
  url: "https://superiormobiledetailing.com",
  telephone: "(480) 555-0199",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Scottsdale",
    addressRegion: "AZ",
    postalCode: "85251",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 33.4942,
    longitude: -111.9261,
  },
  areaServed: [
    { "@type": "City", name: "Scottsdale" },
    { "@type": "City", name: "Paradise Valley" },
    { "@type": "City", name: "Phoenix" },
    { "@type": "City", name: "Tempe" },
    { "@type": "City", name: "Mesa" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "07:00",
      closes: "18:00",
    },
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
    ratingValue: "5.0",
    reviewCount: "156",
    bestRating: "5",
  },
  priceRange: "$$",
  image: "https://superiormobiledetailing.com/og-image.jpg",
  sameAs: [
    "https://www.yelp.com/biz/superior-mobile-detailing-and-car-wash-phoenix-3",
  ],
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
