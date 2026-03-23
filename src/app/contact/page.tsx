"use client";

import { useState } from "react";
import AnimateIn from "@/components/AnimateIn";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <section className="pt-36 pb-24 gradient-hero relative overflow-hidden">
        <div className="absolute top-20 right-[10%] w-[400px] h-[400px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-[5%] w-[300px] h-[300px] rounded-full bg-accent/10 blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left */}
            <AnimateIn>
              <div>
                <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-border/50 text-primary text-sm font-semibold mb-8 card-shadow">Contact Us</span>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-6">
                  Let&apos;s Build Something <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Great</span>
                </h1>
                <p className="text-lg text-muted leading-relaxed mb-12">
                  Ready to grow your business? Fill out the form or reach out directly. We typically respond within 24 hours.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-border/50 card-shadow cursor-pointer hover:border-primary/20 transition-all duration-300">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 text-primary flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Email Us</h3>
                      <p className="text-muted text-sm">yasiru@leadclash.com</p>
                    </div>
                  </div>

                  <a href="https://www.linkedin.com/company/leadclash/" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-border/50 card-shadow cursor-pointer hover:border-primary/20 transition-all duration-300">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 text-primary flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Connect on LinkedIn</h3>
                      <p className="text-muted text-sm">linkedin.com/company/leadclash</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-border/50 card-shadow cursor-pointer hover:border-primary/20 transition-all duration-300">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 text-primary flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Location</h3>
                      <p className="text-muted text-sm">Sri Lanka (Serving Globally)</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimateIn>

            {/* Right - Form */}
            <AnimateIn delay={0.2}>
              <div className="p-8 md:p-10 rounded-3xl border border-border/50 bg-white card-shadow">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center mx-auto mb-6">
                      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                    <p className="text-muted">We&apos;ll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSubmitted(true);
                    }}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold mb-2">Name</label>
                        <input
                          type="text"
                          id="name"
                          required
                          className="w-full px-4 py-3.5 rounded-xl border border-border/50 bg-surface-alt text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold mb-2">Email</label>
                        <input
                          type="email"
                          id="email"
                          required
                          className="w-full px-4 py-3.5 rounded-xl border border-border/50 bg-surface-alt text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                          placeholder="you@company.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-semibold mb-2">Company</label>
                      <input
                        type="text"
                        id="company"
                        className="w-full px-4 py-3.5 rounded-xl border border-border/50 bg-surface-alt text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        placeholder="Your company"
                      />
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-semibold mb-2">Service Interested In</label>
                      <select
                        id="service"
                        className="w-full px-4 py-3.5 rounded-xl border border-border/50 bg-surface-alt text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      >
                        <option value="">Select a service</option>
                        <option value="linkedin-optimization">LinkedIn Profile Optimization</option>
                        <option value="lead-generation">LinkedIn Lead Generation</option>
                        <option value="graphic-design">Graphic Design & Video Editing</option>
                        <option value="virtual-assistance">Virtual Assistance & Outreach</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold mb-2">Message</label>
                      <textarea
                        id="message"
                        rows={4}
                        required
                        className="w-full px-4 py-3.5 rounded-xl border border-border/50 bg-surface-alt text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                        placeholder="Tell us about your project..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full gradient-btn text-white py-4 rounded-full text-base font-bold hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>
    </>
  );
}
