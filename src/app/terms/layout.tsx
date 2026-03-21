import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Lead Clash Terms & Conditions - Read the terms governing the use of our website and services.",
  alternates: {
    canonical: "https://leadclash.com/terms",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
