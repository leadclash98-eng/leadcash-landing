import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  Company: [
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/work", label: "Our Work" },
    { href: "/contact", label: "Contact" },
  ],
  Services: [
    { href: "/services#linkedin-optimization", label: "LinkedIn Optimization" },
    { href: "/services#lead-generation", label: "Lead Generation" },
    { href: "/services#graphic-design", label: "Graphic & Video" },
    { href: "/services#virtual-assistance", label: "Virtual Assistance" },
  ],
  Legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms & Conditions" },
    { href: "/refund", label: "Refund Policy" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-foreground text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <Image src="/logo-white.png" alt="Lead Clash" width={36} height={36} />
              <span className="text-xl font-bold tracking-tight">Lead Clash</span>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed max-w-sm">
              We help your outbound marketing drive growth, accelerate your
              sales pipeline, and maximize impact. Proudly delivering
              world-class services from Sri Lanka.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="https://www.linkedin.com/company/leadclash"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-all duration-300 cursor-pointer"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="mailto:hello@leadclash.com"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-all duration-300 cursor-pointer"
                aria-label="Email"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-bold uppercase tracking-wider mb-5 text-white/80">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/50 hover:text-white transition-colors duration-200 cursor-pointer"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 mt-14 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/30">
            &copy; {new Date().getFullYear()} Lead Clash. All rights reserved.
          </p>
          <p className="text-sm text-white/30">
            Development by{" "}
            <a href="https://falconet.io" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white transition-colors duration-200 cursor-pointer">
              Falconet
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
