"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useCallback } from "react";
import AnimateIn from "@/components/AnimateIn";
import Counter from "@/components/Counter";

const features = [
  {
    title: "Fast Delivery",
    description: "Lightning-fast turnaround without compromising quality.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    title: "Skilled Team",
    description: "Skilled professionals with years of industry experience.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
  {
    title: "Global Reach",
    description: "Supporting clients across 15+ countries worldwide.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
      </svg>
    ),
  },
  {
    title: "Modern Tools",
    description: "Using modern technologies and industry-proven methods.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

const services = [
  {
    title: "LinkedIn Profile Optimization",
    price: "$70/ per profile",
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
    title: "LinkedIn Lead Generation",
    price: "$10/ per hour",
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
    title: "Graphic Design & Video Editing",
    price: "$10/ per hour",
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
    title: "Virtual Assistance & Outreach",
    price: "$10/ per hour",
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

const steps = [
  {
    step: "01",
    title: "Discovery Call",
    description: "We start with a conversation to understand your business, goals, and challenges. This helps us tailor solutions that deliver real results.",
  },
  {
    step: "02",
    title: "Strategy & Planning",
    description: "We create a personalized plan for your outbound marketing, LinkedIn growth, content, or operational support designed to maximize impact.",
  },
  {
    step: "03",
    title: "Execution & Management",
    description: "Our team implements the strategy: LinkedIn optimization, lead generation, graphic/video content, and virtual assistance all aligned with your goals.",
  },
  {
    step: "04",
    title: "Review & Optimization",
    description: "We monitor results, refine campaigns, and provide insights so your business keeps growing and your outreach stays effective.",
  },
];

const testimonials = [
  {
    name: "Michal Bohanes",
    role: "CEO & Founder at Alpha Lead Academy",
    quote: "Yasiru did a stellar job applying my qualitative criteria to my list. Every person I approached was spot-on, and the call booking rate of these highly personalized emails was 5.2%, which is the highest I've ever heard of in Cold email.",
    initials: "MB",
    image: "/testimonials/michal.png",
  },
  {
    name: "Greg Tran",
    role: "CEO & Co-Founder at Trace",
    quote: "Yasiru is a very talented collaborator and a great person to work with! I would definitely recommend his services since he is helpful, smart, flexible and ambitious.",
    initials: "GT",
    image: "/testimonials/greg.png",
  },
  {
    name: "Ken LaCorte",
    role: "A Former Fox News Executive",
    quote: "Great work! Yasiru is extremely professional and I look forward to working with him in the future.",
    initials: "KL",
    image: "/testimonials/ken.png",
  },
  {
    name: "Emma Valahu",
    role: "Founder at Inbox Journeys",
    quote: "Yasiru is a dynamo! He produces really high quality work extremely fast. Want a revision? No problem - it's done before you can even go and make a cup of coffee!",
    initials: "EV",
    image: "/testimonials/emma.png",
  },
  {
    name: "Dave Jawryluk",
    role: "Certified Financial Planner",
    quote: "Yasir was very responsive and accommodating to my requests. He was truly a pleasure to work with and I will certainly be using him again in the future.",
    initials: "DJ",
    image: "/testimonials/dave.png",
  },
  {
    name: "Timea Sebestyen",
    role: "Managing Director at Yobogu",
    quote: "Yasiru is super friendly, cooperative, and professional. I tell him my vision and give him an idea and he just runs with it. He executes every time.",
    initials: "TS",
    image: "/testimonials/timea.png",
  },
  {
    name: "Amila Gunawardhana",
    role: "Executive Director at UPSTAP",
    quote: "Thank you! Your service is great and very professional. Also your team is well skilled. I highly recommend it and thanks again for your great service.",
    initials: "AG",
    image: "/testimonials/amila.png",
  },
  {
    name: "Ravindu Dhananjaya",
    role: "Founder at BR.LK",
    quote: "I highly recommend Lead Clash for anyone looking to level up their LinkedIn strategy. Their expertise in profile optimization and outreach is top-notch!",
    initials: "RD",
    image: "/testimonials/ravindu.png",
  },
];

const faqs = [
  {
    q: "What is included in LinkedIn Profile Optimization?",
    a: "Our LinkedIn Profile Optimization service includes a full profile makeover: headline, summary, experience, skills, and recommendations. We also design a custom LinkedIn banner, optimize your profile for keywords, and provide actionable suggestions to increase visibility and credibility.",
  },
  {
    q: "How long does it take to optimize a LinkedIn profile?",
    a: "Typically, we complete a full profile optimization within 3–5 business days, depending on the complexity of your existing profile and the amount of content provided.",
  },
  {
    q: "What kind of leads will I get from LinkedIn Lead Generation?",
    a: "We provide verified B2B leads tailored to your target audience. Leads include names, job titles, company information, email addresses, and industry-specific details. We focus on quality over quantity to help you generate meaningful connections.",
  },
  {
    q: "Can you handle LinkedIn outreach on my behalf?",
    a: "Yes! Along with lead generation, we can create and manage your LinkedIn outreach campaigns, including connection requests, follow-ups, and engagement strategies designed to convert prospects into opportunities.",
  },
  {
    q: "Do you offer custom graphics and video editing for social media?",
    a: "Absolutely. We create scroll-stopping visuals including carousel posts, short-form and long-form videos, and personalized video edits for outreach campaigns, tailored to your brand style and audience.",
  },
  {
    q: "How is the Virtual Assistance & Outreach Support service structured?",
    a: "You can hire our VA services by the hour. We manage LinkedIn and email campaigns, CRM updates, calendar management, data entry, and other operational tasks, giving you more time to focus on high-impact business work.",
  },
  {
    q: "How do you ensure lead quality for LinkedIn Lead Generation?",
    a: "We use a combination of verified databases, LinkedIn filters, and manual quality checks to ensure each lead meets your specified criteria. This ensures you only get relevant and actionable contacts.",
  },
  {
    q: "Can I see examples of your previous work?",
    a: "Yes! Each service page includes a \"View Previous Work\" link where you can see real samples of profiles, outreach campaigns, graphics, and videos we've created for other clients.",
  },
  {
    q: "How do I start working with you?",
    a: "Simply select the service you need, share your requirements via our contact form or email, and we'll provide a tailored plan with pricing and timelines. Once agreed, we start working immediately.",
  },
  {
    q: "What if I'm not satisfied with the results?",
    a: "We prioritize client satisfaction. For services like LinkedIn optimization and graphics/video editing, we offer revisions until you are happy. For ongoing services like lead generation or VA support, we continuously adapt our approach based on your feedback.",
  },
];

function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 200 : -200, opacity: 0, scale: 0.95 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (dir: number) => ({ x: dir < 0 ? 200 : -200, opacity: 0, scale: 0.95 }),
  };

  return (
    <div className="relative max-w-3xl mx-auto">
      <div className="overflow-hidden rounded-3xl bg-white border border-border/50 p-8 md:p-14 min-h-[300px] flex items-center card-shadow">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={current}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="w-full"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 p-0.5 mb-8">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <Image
                    src={testimonials[current].image}
                    alt={testimonials[current].name}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <blockquote className="text-foreground/70 text-lg leading-relaxed mb-8">
                &ldquo;{testimonials[current].quote}&rdquo;
              </blockquote>
              <div>
                <p className="font-bold text-foreground text-lg">{testimonials[current].name}</p>
                <p className="text-sm text-muted mt-1">{testimonials[current].role}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex items-center justify-center gap-4 mt-10">
        <button
          onClick={prev}
          className="w-11 h-11 rounded-full bg-white border border-border/50 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 card-shadow cursor-pointer"
          aria-label="Previous testimonial"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > current ? 1 : -1);
                setCurrent(i);
              }}
              className={`h-2 rounded-full transition-all duration-400 cursor-pointer ${i === current ? "bg-primary w-8" : "bg-border w-2 hover:bg-primary/30"
                }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
        <button
          onClick={next}
          className="w-11 h-11 rounded-full bg-white border border-border/50 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 card-shadow cursor-pointer"
          aria-label="Next testimonial"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>
    </div>
  );
}

function FAQ({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <AnimateIn delay={index * 0.05}>
      <div className={`rounded-2xl border transition-all duration-300 mb-4 ${open ? "border-primary/20 bg-primary/[0.02] shadow-sm" : "border-border/50 bg-white"}`}>
        <button
          onClick={() => setOpen(!open)}
          className="w-full p-6 flex items-center justify-between text-left group cursor-pointer"
        >
          <span className="text-base font-semibold pr-8 group-hover:text-primary transition-colors">{question}</span>
          <motion.div
            animate={{ rotate: open ? 135 : 0 }}
            transition={{ duration: 0.3 }}
            className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${open ? "bg-primary text-white" : "bg-surface text-muted"
              }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          </motion.div>
        </button>
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="overflow-hidden"
            >
              <p className="px-6 pb-6 text-muted leading-relaxed">{answer}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </AnimateIn>
  );
}

export default function Home() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 overflow-hidden gradient-hero">
        {/* Decorative blurred circles */}
        <div className="absolute top-20 right-[10%] w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-20 left-[5%] w-[400px] h-[400px] rounded-full bg-accent/10 blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-border/50 text-primary text-sm font-semibold mb-8 card-shadow">
                <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                Available Now, Let&apos;s Talk
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight"
            >
              From Leads to{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Conversions</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 text-lg md:text-xl text-muted leading-relaxed max-w-xl mx-auto"
            >
              We help your outbound marketing drive growth, accelerate your
              sales pipeline, and maximize impact.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-10 flex flex-wrap justify-center gap-4"
            >
              <Link
                href="/contact"
                className="gradient-btn text-white px-8 py-4 rounded-full text-base font-semibold hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
              >
                Get Started
              </Link>
              <a
                href="https://calendly.com/yasiru-dasanayaka/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border border-border/50 px-8 py-4 rounded-full text-base font-semibold hover:border-primary hover:text-primary transition-all duration-300 card-shadow hover:-translate-y-0.5 cursor-pointer"
              >
                Book a Call
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-4xl mx-auto"
          >
            <Counter target={80} suffix="+" label="Happy Clients" delay={0} />
            <Counter target={120} suffix="+" label="Projects Completed" delay={0.1} />
            <Counter target={8000} suffix="+" label="Working Hours" delay={0.2} />
            <Counter target={100} suffix="%" label="Client Satisfaction" delay={0.3} />
          </motion.div>
        </div>
      </section>

      {/* Why Lead Clash */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <AnimateIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">Why Choose Us</span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Why Lead Clash?</h2>
              <p className="mt-5 text-muted text-lg leading-relaxed">
                We&apos;re your trusted partner in driving outbound marketing success. Smart strategies, seamless execution, measurable growth.
              </p>
            </div>
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <AnimateIn key={feature.title} delay={i * 0.1}>
                <div className="group p-8 rounded-3xl border border-border/50 hover:border-primary/20 bg-white hover:bg-surface-alt transition-all duration-500 card-shadow card-shadow-hover cursor-pointer">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 text-primary flex items-center justify-center mb-6 group-hover:from-primary group-hover:to-primary-dark group-hover:text-white transition-all duration-500">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{feature.description}</p>
                </div>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn>
            <div className="text-center mt-14">
              <Link href="/about" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300 cursor-pointer">
                Learn more about us
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 md:py-32 bg-surface relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-[90rem] mx-auto px-6 relative z-10">
          <AnimateIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">What We Offer</span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Our Services</h2>
              <p className="mt-5 text-muted text-lg leading-relaxed">
                End-to-end support to grow your business, drive outbound marketing, and amplify your digital presence.
              </p>
            </div>
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <AnimateIn key={service.title} delay={i * 0.1}>
                <div className="group p-8 md:p-10 rounded-3xl border border-border/50 bg-white hover:border-primary/20 transition-all duration-500 hover:-translate-y-1 h-full flex flex-col card-shadow card-shadow-hover cursor-pointer">
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 text-primary flex items-center justify-center group-hover:from-primary group-hover:to-primary-dark group-hover:text-white transition-all duration-500">
                      {service.icon}
                    </div>
                    <span className="gradient-btn text-white font-bold text-lg px-5 py-2 rounded-full">{service.price}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted text-sm leading-relaxed mb-6">{service.description}</p>
                  <ul className="space-y-3 mb-8 flex-1">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3 text-sm">
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                        </div>
                        <span className="text-foreground/70">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/work" className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all duration-300 cursor-pointer">
                    View Previous Work
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <AnimateIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">Our Process</span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">How It Works</h2>
              <p className="mt-5 text-muted text-lg leading-relaxed">Our streamlined process gets you results without the complexity.</p>
            </div>
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <AnimateIn key={s.step} delay={i * 0.15}>
                <div className="relative p-8 rounded-3xl bg-white border border-border/50 card-shadow hover:border-primary/20 transition-all duration-500 group cursor-pointer">
                  <div className="w-12 h-12 rounded-2xl gradient-btn text-white flex items-center justify-center text-lg font-bold mb-6">
                    {s.step}
                  </div>
                  <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">{s.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{s.description}</p>
                  {i < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-border" />
                  )}
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 md:py-32 bg-surface relative overflow-hidden">
        <div className="absolute top-0 right-[20%] w-[400px] h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <AnimateIn>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">Testimonials</span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Client Testimonials</h2>
              <p className="mt-5 text-muted text-lg leading-relaxed">Don&apos;t just take our word for it, here are a few of our many satisfied clients.</p>
            </div>
          </AnimateIn>
          <AnimateIn>
            <TestimonialCarousel />
          </AnimateIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute bottom-0 left-[30%] w-[500px] h-[300px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <AnimateIn>
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">FAQ</span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Frequently Asked Questions</h2>
              <p className="mt-5 text-muted text-lg leading-relaxed">Got questions? We&apos;ve got answers.</p>
            </div>
          </AnimateIn>

          <div>
            {faqs.map((faq, i) => (
              <FAQ key={i} question={faq.q} answer={faq.a} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-[#3060c0]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(156,195,255,0.3)_0%,_transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <AnimateIn>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">Ready to Grow Your Business?</h2>
              <p className="mt-6 text-white/70 text-lg leading-relaxed">
                Join 80+ satisfied clients who have boosted their outbound marketing, built powerful LinkedIn profiles, and scaled their digital presence with our end-to-end support.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <a
                  href="https://calendly.com/yasiru-dasanayaka/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-primary px-8 py-4 rounded-full text-base font-bold hover:shadow-xl hover:shadow-black/20 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
                >
                  Let&apos;s Talk
                </a>
                <Link
                  href="/services"
                  className="border border-white/30 text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm cursor-pointer"
                >
                  View Services
                </Link>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
