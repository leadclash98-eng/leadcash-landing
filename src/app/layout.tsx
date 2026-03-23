import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://leadclash.com"),
  title: {
    default: "Lead Clash - From Leads to Conversions | Outbound Marketing Agency",
    template: "%s | Lead Clash",
  },
  description:
    "Lead Clash helps businesses drive growth with LinkedIn optimization, B2B lead generation, graphic design, video editing, and virtual assistance. Trusted by 80+ clients worldwide.",
  keywords: [
    "lead generation",
    "LinkedIn optimization",
    "outbound marketing",
    "B2B leads",
    "virtual assistance",
    "LinkedIn lead generation",
    "LinkedIn profile optimization",
    "graphic design",
    "video editing",
    "outreach support",
    "cold email campaigns",
    "sales pipeline",
  ],
  authors: [{ name: "Lead Clash", url: "https://leadclash.com" }],
  creator: "Lead Clash",
  publisher: "Lead Clash",
  openGraph: {
    title: "Lead Clash - From Leads to Conversions",
    description:
      "We help businesses drive growth with LinkedIn optimization, B2B lead generation, and end-to-end outbound marketing support. Trusted by 80+ clients worldwide.",
    url: "https://leadclash.com",
    siteName: "Lead Clash",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lead Clash - From Leads to Conversions",
    description:
      "LinkedIn optimization, B2B lead generation, and outbound marketing support. Trusted by 80+ clients worldwide.",
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
    canonical: "https://leadclash.com",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://leadclash.com/#organization",
      name: "Lead Clash",
      url: "https://leadclash.com",
      logo: "https://leadclash.com/logo.png",
      email: "yasiru@leadclash.com",
      foundingDate: "2021",
      description:
        "Lead Clash helps businesses drive growth with LinkedIn optimization, B2B lead generation, graphic design, video editing, and virtual assistance.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "24/A Samagi MW, Malwathuhiripitiya",
        addressLocality: "Buthpitiya",
        addressCountry: "LK",
      },
      sameAs: ["https://www.linkedin.com/company/leadclash"],
      contactPoint: {
        "@type": "ContactPoint",
        email: "yasiru@leadclash.com",
        contactType: "sales",
        availableLanguage: ["English"],
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://leadclash.com/#website",
      url: "https://leadclash.com",
      name: "Lead Clash",
      publisher: { "@id": "https://leadclash.com/#organization" },
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://leadclash.com/#service",
      name: "Lead Clash",
      url: "https://leadclash.com",
      image: "https://leadclash.com/logo.png",
      description:
        "Outbound marketing agency providing LinkedIn optimization, B2B lead generation, graphic design, video editing, and virtual assistance.",
      priceRange: "$10-$70",
      address: {
        "@type": "PostalAddress",
        streetAddress: "24/A Samagi MW, Malwathuhiripitiya",
        addressLocality: "Buthpitiya",
        addressCountry: "LK",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Marketing Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "LinkedIn Profile Optimization",
              description:
                "Complete LinkedIn profile optimization including banner design, keyword optimization, and profile review.",
            },
            price: "70",
            priceCurrency: "USD",
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "LinkedIn Lead Generation",
              description:
                "Targeted prospect list building with verified B2B leads, filtering by industry, job title, and location.",
            },
            price: "10",
            priceCurrency: "USD",
            unitText: "per hour",
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Graphic Design & Video Editing",
              description:
                "Social media design, carousel posts, short-form and long-form video editing for outreach campaigns.",
            },
            price: "10",
            priceCurrency: "USD",
            unitText: "per hour",
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Virtual Assistance & Outreach Support",
              description:
                "LinkedIn and cold email campaign management, CRM management, data entry, and general VA tasks.",
            },
            price: "10",
            priceCurrency: "USD",
            unitText: "per hour",
          },
        ],
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5",
        reviewCount: "80",
        bestRating: "5",
      },
    },
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
        <link rel="preconnect" href="https://calendly.com" />
        <link rel="preconnect" href="https://www.trustpilot.com" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
      </head>
      <body className={`${jakarta.variable} font-sans antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
