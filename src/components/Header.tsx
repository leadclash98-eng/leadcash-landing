"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-4 left-4 right-4 z-50 transition-all duration-500 rounded-2xl ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-[0_0_24px_rgba(0,0,0,0.06)] border border-white/50"
          : "bg-white/50 backdrop-blur-md border border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="Lead Clash" width={36} height={36} />
          <span className="text-lg font-bold tracking-tight text-foreground">Lead Clash</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/60 hover:text-primary transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="gradient-btn text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 cursor-pointer"
          >
            Get Started
          </Link>
        </nav>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-0.5 bg-foreground transition-all duration-300 origin-center ${
              mobileOpen ? "rotate-45 translate-y-[4px]" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-foreground transition-all duration-300 ${
              mobileOpen ? "opacity-0 scale-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-foreground transition-all duration-300 origin-center ${
              mobileOpen ? "-rotate-45 -translate-y-[4px]" : ""
            }`}
          />
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="md:hidden overflow-hidden border-t border-border/30"
          >
            <div className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-base font-medium text-foreground/60 hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="gradient-btn text-white px-6 py-3 rounded-full text-sm font-semibold text-center hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
              >
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
