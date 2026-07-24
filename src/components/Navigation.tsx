"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { BRAND, BRAND_UPPER } from "@/lib/brand";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/book", label: "Book Now" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/95 backdrop-blur-sm border-b border-gold/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="font-display text-3xl tracking-wider text-gold group-hover:text-gold-light transition-colors">
              {BRAND_UPPER}
            </span>
            <span className="hidden sm:block text-[10px] uppercase tracking-[0.3em] text-gray-400 leading-tight max-w-[90px]">
              {BRAND.descriptor}
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) =>
              link.label === "Book Now" ? (
                <Link
                  key={link.href}
                  href={link.href}
                  className="bg-gold text-black px-6 py-2.5 text-sm font-semibold uppercase tracking-wider hover:bg-gold-light transition-colors"
                >
                  {link.label}
                </Link>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm uppercase tracking-[0.2em] text-gray-400 hover:text-gold transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full" />
                </Link>
              )
            )}
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-[1.5px] bg-gold transition-all duration-300 ${
                mobileOpen ? "rotate-45 translate-y-[7.5px]" : ""
              }`}
            />
            <span
              className={`w-6 h-[1.5px] bg-gold transition-all duration-300 ${
                mobileOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`w-6 h-[1.5px] bg-gold transition-all duration-300 ${
                mobileOpen ? "-rotate-45 -translate-y-[7.5px]" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-black/98 transition-all duration-500 flex flex-col items-center justify-center gap-8 ${
          mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {navLinks.map((link, i) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setMobileOpen(false)}
            className={`font-display text-4xl tracking-wider transition-all duration-300 ${
              link.label === "Book Now"
                ? "text-gold"
                : "text-off-white hover:text-gold"
            }`}
            style={{ transitionDelay: mobileOpen ? `${i * 80}ms` : "0ms" }}
          >
            {link.label.toUpperCase()}
          </Link>
        ))}
      </div>
    </>
  );
}
