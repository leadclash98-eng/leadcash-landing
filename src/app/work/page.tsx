"use client";

import Link from "next/link";
import AnimateIn from "@/components/AnimateIn";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  "All",
  "LinkedIn Optimization",
  "Lead Generation",
  "Graphic Design",
  "Video Editing",
];

const projects = [
  {
    title: "Alpha Lead Academy - LinkedIn Profile Overhaul",
    category: "LinkedIn Optimization",
    description: "Complete profile transformation resulting in a 5.2% cold email booking rate — the highest the client had ever achieved.",
    result: "5.2% booking rate",
  },
  {
    title: "Trace - B2B Lead Generation Campaign",
    category: "Lead Generation",
    description: "Built a targeted prospect list of 2,000+ verified B2B leads with detailed filtering by industry and job title.",
    result: "2,000+ verified leads",
  },
  {
    title: "Inbox Journeys - Brand Visual Identity",
    category: "Graphic Design",
    description: "Designed social media templates, carousel posts, and brand assets that increased engagement by 3x.",
    result: "3x engagement increase",
  },
  {
    title: "UPSTAP - Outreach Campaign Management",
    category: "Lead Generation",
    description: "Managed end-to-end LinkedIn and cold email outreach campaigns, generating consistent meeting bookings.",
    result: "40+ meetings booked",
  },
  {
    title: "Yobogu - Video Content Creation",
    category: "Video Editing",
    description: "Produced short-form and long-form video content for social media marketing and brand storytelling.",
    result: "50+ videos delivered",
  },
  {
    title: "Financial Planning Firm - LinkedIn Optimization",
    category: "LinkedIn Optimization",
    description: "Optimized LinkedIn profiles for an entire team, boosting connection acceptance rates and inbound inquiries.",
    result: "85% acceptance rate",
  },
];

export default function WorkPage() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 gradient-hero relative overflow-hidden">
        <div className="absolute top-20 right-[15%] w-[400px] h-[400px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <AnimateIn>
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-border/50 text-primary text-sm font-semibold mb-8 card-shadow">Our Work</span>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1]">
                Results That <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Speak</span>
              </h1>
              <p className="mt-6 text-lg text-muted leading-relaxed max-w-xl mx-auto">
                See how we&apos;ve helped businesses grow their outbound marketing, build powerful LinkedIn profiles, and scale their digital presence.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Filters */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <AnimateIn>
            <div className="flex flex-wrap justify-center gap-3 mb-14">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
                    active === cat
                      ? "gradient-btn text-white shadow-lg shadow-primary/20"
                      : "bg-white border border-border/50 text-muted hover:text-primary hover:border-primary card-shadow"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </AnimateIn>

          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <div className="group p-8 rounded-3xl border border-border/50 bg-white card-shadow card-shadow-hover transition-all duration-500 hover:-translate-y-1 h-full flex flex-col cursor-pointer">
                    <div className="flex-1">
                      <span className="text-xs font-semibold text-primary gradient-btn text-white px-3 py-1 rounded-full">{project.category}</span>
                      <h3 className="text-lg font-bold mt-5 mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                      <p className="text-muted text-sm leading-relaxed">{project.description}</p>
                    </div>
                    <div className="mt-6 pt-6 border-t border-border/30">
                      <div className="text-xs font-semibold text-muted uppercase tracking-wider">Key Result</div>
                      <div className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mt-1">{project.result}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-[#3060c0]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(156,195,255,0.3)_0%,_transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <AnimateIn>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-white">Want Similar Results?</h2>
            <p className="text-white/70 text-lg max-w-xl mx-auto mb-10">
              Let&apos;s talk about how we can deliver the same impact for your business.
            </p>
            <a href="https://calendly.com/yasiru-dasanayaka/30min" target="_blank" rel="noopener noreferrer" className="bg-white text-primary px-8 py-4 rounded-full text-base font-bold hover:shadow-xl hover:shadow-black/20 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer inline-block">
              Start Your Project
            </a>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
