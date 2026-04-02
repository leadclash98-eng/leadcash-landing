import AnimateIn from "@/components/AnimateIn";
import Breadcrumb from "@/components/Breadcrumb";

const stats = [
  { value: "80+", label: "Clients Served" },
  { value: "120+", label: "Projects Delivered" },
  { value: "15+", label: "Countries Reached" },
  { value: "100%", label: "Client Satisfaction" },
];

const projects = [
  {
    title: "LinkedIn Profile Optimization",
    description:
      "Discover how a powerful LinkedIn profile can attract opportunities and grow your personal brand.",
    buttonLabel: "Explore Results",
    pdfUrl:
      "https://drive.google.com/file/d/1rEzopzyRw1p_KWyH6ZgSYTeIJCtvFxv3/view?usp=sharing",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
  {
    title: "LinkedIn Lead Generation",
    description:
      "See how we connect businesses with the right prospects to drive real results.",
    buttonLabel: "View Results",
    pdfUrl:
      "https://drive.google.com/file/d/1qEWOQ8xe69CwANZEA21UF1p4P9H18jP6/view?usp=sharing",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
  {
    title: "Graphic Design & Video Editing",
    description:
      "Explore our designs and videos that captivate audiences and make brands shine.",
    buttonLabel: "View Results",
    pdfUrl:
      "https://drive.google.com/file/d/1A2WOmCrrZl35IisNdJfI0Fdv5CG1BdgW/view?usp=sharing",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
  },
  {
    title: "Virtual Assistance & Outreach Support",
    description:
      "Check out how we help businesses save time and grow through smart support.",
    buttonLabel: "View Results",
    pdfUrl:
      "https://drive.google.com/file/d/1_b-AEe-EcIk_jPQBf9qM8kAEbNwVHeDJ/view?usp=sharing",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
      </svg>
    ),
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery Call",
    description:
      "We learn about your business, goals, and target audience. This helps us understand exactly what success looks like for you and identify the best strategy to get there.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
  },
  {
    step: "02",
    title: "Strategy & Execution",
    description:
      "Our team builds and executes a tailored plan designed around your specific needs. From content creation to outreach campaigns, we handle every detail with precision.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    step: "03",
    title: "Results & Growth",
    description:
      "Track progress with measurable outcomes and transparent reporting. We continuously optimize campaigns to ensure you see real, sustainable growth month after month.",
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
  },
];

export default function WorkPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "Our Work" }]} />
      {/* Hero */}
      <section className="pt-8 pb-20 gradient-hero relative overflow-hidden">
        <div className="absolute top-20 right-[15%] w-[400px] h-[400px] rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-10 left-[10%] w-[300px] h-[300px] rounded-full bg-accent/10 blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <AnimateIn>
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-border/50 text-primary text-sm font-semibold mb-8 card-shadow">
                Our Work
              </span>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1]">
                Results That{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Speak
                </span>
              </h1>
              <p className="mt-6 text-lg text-muted leading-relaxed max-w-xl mx-auto">
                See how we&apos;ve helped businesses grow their outbound marketing, build
                powerful LinkedIn profiles, and scale their digital presence. Every project
                below represents measurable impact and real business growth.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 md:py-20 border-b border-border/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <AnimateIn key={stat.label} delay={i * 0.1}>
                <div className="text-center">
                  <div className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <p className="mt-2 text-sm md:text-base text-muted font-medium">
                    {stat.label}
                  </p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <AnimateIn>
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/5 border border-primary/10 text-primary text-sm font-semibold mb-6">
                Featured Projects
              </span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                What We Deliver
              </h2>
              <p className="mt-4 text-muted text-lg max-w-2xl mx-auto">
                From profile optimization to full-scale lead generation campaigns, here is
                a closer look at the services we have delivered and the results our clients
                have achieved.
              </p>
            </div>
          </AnimateIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {projects.map((project, i) => (
              <AnimateIn key={project.title} delay={i * 0.12}>
                <div className="group p-8 rounded-3xl border border-border/50 bg-white card-shadow card-shadow-hover transition-all duration-500 hover:-translate-y-1 h-full flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                    {project.icon}
                  </div>

                  <h3 className="text-lg font-bold group-hover:text-primary transition-colors mb-3">
                    {project.title}
                  </h3>

                  <p className="text-muted text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="mt-auto">
                    <a
                      href={project.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="gradient-btn text-white px-6 py-3 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 inline-flex items-center gap-2 cursor-pointer"
                    >
                      {project.buttonLabel}
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-white to-[#f8faff]">
        <div className="max-w-7xl mx-auto px-6">
          <AnimateIn>
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/5 border border-primary/10 text-primary text-sm font-semibold mb-6">
                Our Process
              </span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                How We Work
              </h2>
              <p className="mt-4 text-muted text-lg max-w-2xl mx-auto">
                We follow a proven three-step process that turns your business goals into
                measurable outcomes. No guesswork, no fluff &mdash; just a clear path from
                strategy to results.
              </p>
            </div>
          </AnimateIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {processSteps.map((step, i) => (
              <AnimateIn key={step.title} delay={i * 0.15}>
                <div className="relative p-8 md:p-10 rounded-3xl border border-border/50 bg-white card-shadow transition-all duration-500 hover:-translate-y-1 h-full flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-5">
                    {step.icon}
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-primary/60 mb-2">
                    Step {step.step}
                  </span>
                  <h3 className="text-lg font-bold mb-3">{step.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{step.description}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial / Social Proof */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <AnimateIn>
            <div className="max-w-3xl mx-auto text-center p-10 md:p-14 rounded-3xl border border-border/50 bg-white card-shadow">
              <svg
                className="w-10 h-10 text-primary/30 mx-auto mb-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
              </svg>
              <p className="text-lg md:text-xl text-foreground leading-relaxed font-medium mb-6">
                Lead Cash completely transformed our outreach strategy. Within the first
                month, we saw a dramatic increase in qualified leads and meaningful
                conversations. Their team is responsive, detail-oriented, and genuinely
                invested in our success.
              </p>
              <div>
                <p className="font-bold text-foreground">Happy Client</p>
                <p className="text-sm text-muted">B2B SaaS Founder</p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-dark to-[#3060c0]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(156,195,255,0.3)_0%,_transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <AnimateIn>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 text-white">
              Want Similar Results?
            </h2>
            <p className="text-white/70 text-lg max-w-xl mx-auto mb-10">
              Let&apos;s talk about how we can deliver the same impact for your business.
              Book a free discovery call and see what&apos;s possible.
            </p>
            <a
              href="https://calendly.com/yasiru-dasanayaka/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-primary px-8 py-4 rounded-full text-base font-bold hover:shadow-xl hover:shadow-black/20 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer inline-block"
            >
              Start Your Project
            </a>
          </AnimateIn>
        </div>
      </section>
    </>
  );
}
