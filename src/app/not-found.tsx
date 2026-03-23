import Link from "next/link";

export default function NotFound() {
  return (
    <section className="pt-36 pb-24 min-h-[70vh] flex items-center">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 text-primary flex items-center justify-center mx-auto mb-8">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
          </svg>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">404</h1>
        <h2 className="text-xl md:text-2xl font-bold mb-4">Page Not Found</h2>
        <p className="text-muted text-lg mb-10 max-w-md mx-auto">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="gradient-btn text-white px-8 py-4 rounded-full text-base font-bold hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer inline-block"
          >
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="px-8 py-4 rounded-full text-base font-bold border border-border/50 hover:border-primary hover:text-primary transition-all duration-300 cursor-pointer inline-block"
          >
            Contact Us
          </Link>
        </div>
        <div className="mt-16">
          <p className="text-muted text-sm mb-4">Popular Pages</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/services" className="px-4 py-2 rounded-full bg-surface text-sm font-medium hover:text-primary transition-colors">Services</Link>
            <Link href="/about" className="px-4 py-2 rounded-full bg-surface text-sm font-medium hover:text-primary transition-colors">About Us</Link>
            <Link href="/work" className="px-4 py-2 rounded-full bg-surface text-sm font-medium hover:text-primary transition-colors">Our Work</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
