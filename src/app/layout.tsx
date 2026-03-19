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
  title: "Lead Clash - From Leads to Conversions",
  description:
    "We help your outbound marketing drive growth, accelerate your sales pipeline, and maximize impact. LinkedIn optimization, lead generation, and more.",
  keywords:
    "lead generation, LinkedIn optimization, outbound marketing, B2B leads, virtual assistance",
  openGraph: {
    title: "Lead Clash - From Leads to Conversions",
    description:
      "We help your outbound marketing drive growth, accelerate your sales pipeline, and maximize impact.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jakarta.variable} font-sans antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
