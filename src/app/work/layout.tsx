import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Work - Results That Speak",
  description:
    "See how Lead Clash has helped businesses grow with LinkedIn optimization, lead generation, graphic design, and virtual assistance. View our portfolio and results.",
  alternates: {
    canonical: "https://leadclash.com/work",
  },
  openGraph: {
    title: "Our Work - Lead Clash Portfolio",
    description:
      "Browse our portfolio of LinkedIn optimization, lead generation, graphic design, and outreach campaigns.",
    url: "https://leadclash.com/work",
  },
};

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return children;
}
