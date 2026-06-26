"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#1a1a1a]/95 backdrop-blur-md border-b border-[#333330]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between" aria-label="Main navigation">
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          className="text-lg font-medium text-[#e0ddd5] tracking-tight"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          aria-label="Shadhin — home"
        >
          Shadhin
        </a>

        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className="text-xs uppercase tracking-[0.15em] text-[#8a8680] hover:text-[#e0ddd5] transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}
            className="text-xs uppercase tracking-[0.15em] font-medium px-5 py-2 rounded border border-[#e0ddd5] text-[#e0ddd5] hover:bg-[#e0ddd5] hover:text-[#1a1a1a] transition-all duration-200"
          >
            Book a Call
          </a>
        </div>

        <button
          className="md:hidden flex flex-col justify-center items-center gap-[5px] w-8 h-8"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span className={`block w-5 h-[1px] bg-[#e0ddd5] transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-[6px]" : ""}`} />
          <span className={`block w-5 h-[1px] bg-[#e0ddd5] transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-[1px] bg-[#e0ddd5] transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-[6px]" : ""}`} />
        </button>
      </nav>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-[#1a1a1a]/98 backdrop-blur-md border-b border-[#333330] ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
        aria-hidden={!menuOpen}
      >
        <ul className="flex flex-col px-6 py-4 gap-4" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="block text-sm uppercase tracking-[0.12em] text-[#8a8680] hover:text-[#e0ddd5] transition-colors py-1"
                tabIndex={menuOpen ? 0 : -1}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); handleNavClick("#contact"); }}
              className="inline-block text-xs uppercase tracking-[0.15em] font-medium px-5 py-2 rounded border border-[#e0ddd5] text-[#e0ddd5] hover:bg-[#e0ddd5] hover:text-[#1a1a1a] transition-all duration-200 mt-1"
              tabIndex={menuOpen ? 0 : -1}
            >
              Book a Call
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
