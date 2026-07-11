import type { Metadata } from "next";
import { Bebas_Neue, Outfit } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ChatWidget } from "@/components/ChatWidget";

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
    default: "Bootyfull | The AI Chatbot Call Center That Signs Up Your Customers",
    template: "%s | Bootyfull",
  },
  description:
    "Bootyfull is the always-on AI chatbot that greets, qualifies, and signs up your customers 24/7. A whole call center in one beautiful bot. No hold music. No missed leads.",
  keywords: [
    "ai chatbot for business",
    "chatbot call center",
    "customer sign up chatbot",
    "lead generation chatbot",
    "24/7 customer chatbot",
    "automated customer onboarding",
    "whatsapp chatbot business",
    "multilingual chatbot",
    "conversational sign up",
    "bootyfull",
  ],
  openGraph: {
    title: "Bootyfull | The AI Chatbot Call Center That Signs Up Your Customers",
    description:
      "Meet Bootyfull — the always-on AI chatbot that signs up your customers 24/7. A whole call center in one beautiful bot.",
    url: "https://bootyfull.ai",
    siteName: "Bootyfull",
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
    canonical: "https://bootyfull.ai",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": "https://bootyfull.ai",
  name: "Bootyfull",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web, WhatsApp, Instagram, SMS",
  description:
    "Bootyfull is an AI chatbot call center that greets, qualifies, and signs up customers 24/7 across your website, WhatsApp, Instagram, and SMS.",
  url: "https://bootyfull.ai",
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "USD",
    lowPrice: "99",
    highPrice: "599",
    offerCount: "3",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "156",
    bestRating: "5",
  },
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
        <ChatWidget />
      </body>
    </html>
  );
}
