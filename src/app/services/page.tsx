"use client";

import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";

const services = [
  {
    id: "linkedin-optimization",
    title: "LinkedIn Profile Optimization",
    price: "$70",
    priceNote: "Per Profile",
    description: "Transform your LinkedIn into a powerful personal brand that attracts opportunities and builds credibility.",
    benefits: [
      "Complete LinkedIn profile optimization",
      "Custom LinkedIn banner/graphic design",
      "Keyword optimization for LinkedIn search",
      "Profile review and improvement suggestions",
    ],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
  {
    id: "lead-generation",
    title: "LinkedIn Lead Generation",
    price: "$10",
    priceNote: "Per Hour",
    description: "Build targeted prospect lists with verified contacts to fuel your sales pipeline with qualified B2B leads.",
    benefits: [
      "LinkedIn prospect list building",
      "Lead data collection (Name, Email, Job, Industry, Company, etc.)",
      "Lead filtering based on industry, job title, location, etc.",
      "LinkedIn Outreach Strategy Development",
    ],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    id: "graphic-design",
    title: "Graphic Design & Video Editing",
    price: "$10",
    priceNote: "Per Hour",
    description: "Create scroll-stopping visual content that builds your authority and drives engagement.",
    benefits: [
      "Personalized Video Editing for Outreach Campaigns",
      "Long-form video editing",
      "Short-form video editing",
      "Social Media & Carousel post design",
    ],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
  },
  {
    id: "virtual-assistance",
    title: "Virtual Assistance & Outreach Support",
    price: "$10",
    priceNote: "Per Hour",
    description: "Delegate your daily operational tasks so you can focus on high-impact business activities.",
    benefits: [
      "LinkedIn & Cold email campaign management",
      "Calendar & CRM management",
      "Data entry & database management",
      "All kinds of general VA tasks",
    ],
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 gradient-hero relative overflow-hidden">
        <div className="absolute top-20 left-[10%] w-[400px] h-[400px] rounded-full bg-accent/10 blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <AnimateIn>
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-border/50 text-primary text-sm font-semibold mb-8 card-shadow">Our Services</span>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1]">
                End-to-End <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Solutions</span>
              </h1>
              <p className="mt-6 text-lg text-muted leading-relaxed max-w-xl mx-auto">
                End-to-end support to grow your business, drive outbound marketing, and amplify your digital presence.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 space-y-8">
          {services.map((service, i) => (
            <AnimateIn key={service.id} delay={i * 0.1}>
              <div id={service.id} className="scroll-mt-28 p-8 md:p-12 rounded-3xl border border-border/50 bg-white card-shadow card-shadow-hover transition-all duration-500 group">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 text-primary flex items-center justify-center flex-shrink-0 group-hover:from-primary group-hover:to-primary-dark group-hover:text-white transition-all duration-500">
                      {service.icon}
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold">{service.title}</h2>
                      <p className="mt-3 text-muted text-lg leading-relaxed max-w-xl">{service.description}</p>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="gradient-btn text-white font-bold text-lg px-6 py-3 rounded-full text-center">
                      {service.price}
                      <span className="text-sm font-medium text-white/80 ml-1">/{service.priceNote}</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 pl-0 md:pl-[76px]">
                  {service.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                      </div>
                      <span className="text-foreground/70">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4 pl-0 md:pl-[76px]">
                  <Link href="/contact" className="gradient-btn text-white px-6 py-3 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 cursor-pointer">
                    Get Started
                  </Link>
                  <Link href="/work" className="bg-white border border-border/50 px-6 py-3 rounded-full text-sm font-semibold hover:border-primary hover:text-primary transition-all duration-300 card-shadow cursor-pointer">
                    View Previous Work
                  </Link>
                </div>
              </div>
            </AnimateIn>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-[#3060c0]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(156,195,255,0.3)_0%,_transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <AnimateIn>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-white">Not Sure Which Service You Need?</h2>
            <p className="text-white/70 text-lg max-w-xl mx-auto mb-10">
              Book a free discovery call and we&apos;ll help you find the perfect solution for your business.
            </p>
            <a href="https://calendly.com/yasiru-dasanayaka/30min" target="_blank" rel="noopener noreferrer" className="bg-white text-primary px-8 py-4 rounded-full text-base font-bold hover:shadow-xl hover:shadow-black/20 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer inline-block">
              Book a Call
            </a>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
