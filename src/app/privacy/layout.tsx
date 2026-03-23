import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Lead Clash Privacy Policy - Learn how we collect, use, and protect your personal data when you use our LinkedIn optimization, lead generation, and virtual assistance services.",
  alternates: {
    canonical: "https://leadclash.com/privacy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return children;
}
