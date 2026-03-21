import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - Get Started with Lead Clash",
  description:
    "Ready to grow your business? Contact Lead Clash for LinkedIn optimization, lead generation, graphic design, and virtual assistance. Book a free discovery call.",
  alternates: {
    canonical: "https://leadclash.com/contact",
  },
  openGraph: {
    title: "Contact Lead Clash",
    description:
      "Get in touch to discuss how we can help your business grow with outbound marketing solutions.",
    url: "https://leadclash.com/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
