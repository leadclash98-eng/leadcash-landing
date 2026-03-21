import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services - LinkedIn Optimization, Lead Generation & More",
  description:
    "LinkedIn Profile Optimization ($70), LinkedIn Lead Generation ($10/hr), Graphic Design & Video Editing ($10/hr), Virtual Assistance ($10/hr). End-to-end outbound marketing support.",
  alternates: {
    canonical: "https://leadclash.com/services",
  },
  openGraph: {
    title: "Our Services - Lead Clash",
    description:
      "End-to-end outbound marketing solutions: LinkedIn optimization, B2B lead generation, graphic design, video editing, and virtual assistance.",
    url: "https://leadclash.com/services",
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
