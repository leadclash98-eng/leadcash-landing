import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Meet the Lead Clash Team",
  description:
    "Founded in 2021, Lead Clash delivers world-class LinkedIn optimization, lead generation, graphic design, and virtual assistance from Sri Lanka. Meet our team.",
  alternates: {
    canonical: "https://leadclash.com/about",
  },
  openGraph: {
    title: "About Lead Clash - Where Professionalism Powers Opportunity",
    description:
      "Meet the team behind Lead Clash. 80+ happy clients, 120+ projects completed, and 8000+ working hours. Founded in 2021, delivering world-class LinkedIn marketing and lead generation from Sri Lanka.",
    url: "https://leadclash.com/about",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
