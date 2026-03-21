import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy",
  description:
    "Lead Clash Refund Policy - Understand our refund terms for hourly and fixed-price services.",
  alternates: {
    canonical: "https://leadclash.com/refund",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RefundLayout({ children }: { children: React.ReactNode }) {
  return children;
}
