"use client";

import Link from "next/link";
import Image from "next/image";
import AnimateIn from "@/components/AnimateIn";
import Counter from "@/components/Counter";

const philosophy = [
  {
    title: "Strategic Impact First",
    description: "Every LinkedIn profile, campaign, lead list, creative asset, or VA service we deliver helps grow your brand and open new opportunities.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.58-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
  },
  {
    title: "Human-Centered Approach",
    description: "Data-driven strategies combined with content that resonates with your audience.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  {
    title: "Transparent Partnership",
    description: "We work as an extension of your team, not just a service provider.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    title: "Long-Term Growth",
    description: "Long-term business growth prioritized over short-lived metrics.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
  },
];

const team = [
  {
    name: "Yasiru Dasanayaka",
    role: "Founder",
    bio: "7+ years in digital marketing, specializing in B2B lead generation, LinkedIn, cold outreach, social media growth, and brand development - helping businesses scale, connect with the right audience, and achieve measurable results.",
    image: "/team/yasiru.png",
    initials: "YD",
  },
  {
    name: "Bihesha Dissanayake",
    role: "Virtual Assistant",
    bio: "Supports outreach campaigns, manages CRM and calendars, and handles operational tasks so clients can focus on high-impact business decisions.",
    image: "/team/bihesha.png",
    initials: "BD",
  },
  {
    name: "Pamith Senuja",
    role: "Virtual Assistant",
    bio: "Builds and organizes lead lists, manages outreach tasks, and ensures smooth execution of daily operations for effective client campaigns.",
    image: "/team/pamith.png",
    initials: "PS",
  },
  {
    name: "Malshan Irosh",
    role: "Graphic Designer",
    bio: "Creates visually compelling designs for social media, campaigns, and branding. Brings concepts to life with creativity and precision.",
    image: "/team/malshan.png",
    initials: "MI",
  },
  {
    name: "Yohan Dissanayaka",
    role: "Video Editor",
    bio: "Transforms raw footage into engaging videos that capture attention and convey brand stories effectively.",
    image: "/team/yohan.png",
    initials: "YD",
  },
];

const industries = [
  "SaaS & Tech Companies",
  "Consulting & Professional Services",
  "Recruitment & HR Services",
  "Finance & Investment Firms",
  "Marketing & Creative Agencies",
];

const purpose = [
  {
    title: "Empowering Professionals",
    description: "High-quality LinkedIn optimization, lead generation, and creative solutions accessible for all.",
  },
  {
    title: "Showcasing Local Talent",
    description: "Delivering world-class services proudly from Sri Lanka.",
  },
  {
    title: "Driving Real Results",
    description: "Helping businesses connect, engage, and grow with measurable impact.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-20 gradient-hero relative overflow-hidden">
        <div className="absolute top-20 right-[10%] w-[400px] h-[400px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <AnimateIn>
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-border/50 text-primary text-sm font-semibold mb-8 card-shadow">About Us</span>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1]">
                Where Professionalism Powers <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Opportunity</span>
              </h1>
              <p className="mt-6 text-lg text-muted leading-relaxed max-w-xl mx-auto">
                We&apos;re here to help businesses grow smarter with powerful outbound marketing, standout digital presence, and results-driven support, proudly delivering world-class services from Sri Lanka.
              </p>
            </div>
          </AnimateIn>

          <AnimateIn delay={0.2}>
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <Counter target={80} suffix="+" label="Happy Clients" />
              <Counter target={120} suffix="+" label="Projects Completed" />
              <Counter target={8000} suffix="+" label="Working Hours" />
              <Counter target={100} suffix="%" label="Client Satisfaction" />
            </div>
          </AnimateIn>

          <AnimateIn delay={0.3}>
            <div className="mt-16 p-8 md:p-12 rounded-3xl bg-white border border-border/50 card-shadow max-w-4xl mx-auto">
              <p className="text-foreground/70 text-lg leading-relaxed text-center">
                <strong className="text-foreground">Founded in 2021, Lead Clash</strong> has grown into a trusted partner for businesses looking to expand their reach and amplify their impact. We deliver high-quality projects with dedication and precision, ensuring every client experiences measurable results and lasting satisfaction. Our commitment to excellence and reliability makes us a go-to choice for businesses aiming to thrive in a competitive digital landscape.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <AnimateIn>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">Our Values</span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Our Philosophy</h2>
            </div>
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {philosophy.map((item, i) => (
              <AnimateIn key={item.title} delay={i * 0.1}>
                <div className="p-8 rounded-3xl bg-white border border-border/50 card-shadow card-shadow-hover transition-all duration-500 group cursor-pointer">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 text-primary flex items-center justify-center mb-6 group-hover:from-primary group-hover:to-primary-dark group-hover:text-white transition-all duration-500">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-3">{item.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{item.description}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Purpose */}
      <section className="py-24 md:py-32 bg-surface relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <AnimateIn>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">Our Mission</span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Our Purpose</h2>
            </div>
          </AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {purpose.map((item, i) => (
              <AnimateIn key={item.title} delay={i * 0.1}>
                <div className="p-8 rounded-3xl border border-border/50 bg-white hover:border-primary/20 card-shadow card-shadow-hover transition-all duration-500 cursor-pointer">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 text-primary flex items-center justify-center mb-5">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{item.description}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-br from-primary/8 to-accent/8 blur-[150px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <AnimateIn>
            <div className="text-center mb-20">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">The People</span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Meet Our Team</h2>
              <p className="mt-4 text-muted max-w-xl mx-auto">The talented people behind every successful campaign and happy client.</p>
            </div>
          </AnimateIn>

          {/* Founder - Featured */}
          <AnimateIn delay={0.1}>
            <div className="max-w-3xl mx-auto mb-12">
              <div className="p-10 rounded-3xl bg-white border border-border/50 card-shadow card-shadow-hover transition-all duration-500 group cursor-pointer flex flex-col md:flex-row items-center gap-8">
                <div className="relative flex-shrink-0">
                  <div className="w-32 h-32 rounded-full overflow-hidden ring-4 ring-primary/10 group-hover:ring-primary/25 transition-all duration-500">
                    <Image
                      src={team[0].image}
                      alt={team[0].name}
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                    </svg>
                  </div>
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-xl font-bold">{team[0].name}</h3>
                  <p className="text-primary font-semibold text-sm mb-3">{team[0].role}</p>
                  <p className="text-muted text-sm leading-relaxed">{team[0].bio}</p>
                </div>
              </div>
            </div>
          </AnimateIn>

          {/* Rest of Team */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.slice(1).map((member, i) => (
              <AnimateIn key={member.name} delay={0.2 + i * 0.1}>
                <div className="p-8 rounded-3xl bg-white border border-border/50 card-shadow card-shadow-hover transition-all duration-500 group cursor-pointer text-center h-full">
                  <div className="relative w-20 h-20 mx-auto mb-6">
                    <div className="w-20 h-20 rounded-full overflow-hidden ring-2 ring-primary/10 group-hover:ring-primary/25 transition-all duration-500">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={80}
                        height={80}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </div>
                  <h3 className="text-base font-bold">{member.name}</h3>
                  <p className="text-primary text-xs font-semibold mb-3">{member.role}</p>
                  <p className="text-muted text-sm leading-relaxed">{member.bio}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 md:py-32 bg-surface relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <AnimateIn>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">Expertise</span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Industries We Serve</h2>
            </div>
          </AnimateIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {industries.map((industry, i) => (
              <AnimateIn key={industry} delay={i * 0.1}>
                <div className="px-6 py-4 rounded-2xl bg-white border border-border/50 text-sm font-semibold hover:border-primary hover:text-primary transition-all duration-300 card-shadow card-shadow-hover cursor-pointer text-center">
                  {industry}
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-[#3060c0]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(156,195,255,0.3)_0%,_transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <AnimateIn>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-white">Want to Work With Us?</h2>
            <p className="text-white/70 text-lg max-w-xl mx-auto mb-10">
              Let&apos;s discuss how we can help grow your business with our end-to-end outbound marketing solutions.
            </p>
            <a href="https://calendly.com/yasiru-dasanayaka/30min" target="_blank" rel="noopener noreferrer" className="bg-white text-primary px-8 py-4 rounded-full text-base font-bold hover:shadow-xl hover:shadow-black/20 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer inline-block">
              Get in Touch
            </a>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
