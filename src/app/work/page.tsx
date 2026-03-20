import AnimateIn from "@/components/AnimateIn";

const projects = [
  {
    title: "LinkedIn Profile Optimization",
    description: "Discover how a powerful LinkedIn profile can attract opportunities and grow your personal brand.",
    pdfUrl: "https://drive.google.com/file/d/1rEzopzyRw1p_KWyH6ZgSYTeIJCtvFxv3/view?usp=sharing",
  },
  {
    title: "LinkedIn Lead Generation",
    description: "See how we connect businesses with the right prospects to drive real results.",
    pdfUrl: "https://drive.google.com/file/d/1qEWOQ8xe69CwANZEA21UF1p4P9H18jP6/view?usp=sharing",
  },
  {
    title: "Graphic Design & Video Editing",
    description: "Explore our designs and videos that captivate audiences and make brands shine.",
    pdfUrl: "https://drive.google.com/file/d/1A2WOmCrrZl35IisNdJfI0Fdv5CG1BdgW/view?usp=sharing",
  },
  {
    title: "Virtual Assistance & Outreach Support",
    description: "Check out how we help businesses save time and grow through smart support.",
    pdfUrl: "https://drive.google.com/file/d/1_b-AEe-EcIk_jPQBf9qM8kAEbNwVHeDJ/view?usp=sharing",
  },
];

export default function WorkPage() {
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

      {/* Projects */}
      <section className="pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <AnimateIn key={project.title} delay={i * 0.1}>
                <div className="group p-8 md:p-10 rounded-3xl border border-border/50 bg-white card-shadow card-shadow-hover transition-all duration-500 hover:-translate-y-1 h-full flex flex-col cursor-pointer">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                    <p className="text-muted text-sm leading-relaxed">{project.description}</p>
                  </div>
                  <div className="mt-6">
                    <a
                      href={project.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="gradient-btn text-white px-6 py-3 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 inline-flex items-center gap-2 cursor-pointer"
                    >
                      View Results
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </a>
                  </div>
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
