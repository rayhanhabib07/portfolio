"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
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
          ? "bg-[#09090b]/90 backdrop-blur-md border-b border-[#27272a]"
          : "bg-transparent"
      }`}
    >
      <nav
        className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between"
        aria-label="Main navigation"
      >
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="text-lg font-semibold text-white tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3b82f6] rounded"
          aria-label="Shadhin — home"
        >
          shadhin<span className="text-[#3b82f6]">.</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8" role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="text-sm text-[#a1a1aa] hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#contact");
            }}
            className="text-sm font-medium px-4 py-2 rounded-lg bg-[#3b82f6] text-white hover:bg-[#2563eb] transition-colors duration-200"
          >
            Book a Call
          </a>
        </div>

        <button
          className="md:hidden flex flex-col justify-center items-center gap-[5px] w-8 h-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3b82f6] rounded"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span
            className={`block w-5 h-0.5 bg-white transition-all duration-300 origin-center ${
              menuOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-white transition-all duration-200 ${
              menuOpen ? "opacity-0 scale-x-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-white transition-all duration-300 origin-center ${
              menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-all duration-300 bg-[#09090b]/95 backdrop-blur-md border-b border-[#27272a] ${
          menuOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
        }`}
        aria-hidden={!menuOpen}
      >
        <ul className="flex flex-col px-6 py-4 gap-4" role="list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="block text-base text-[#a1a1aa] hover:text-white transition-colors duration-200 py-1"
                tabIndex={menuOpen ? 0 : -1}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#contact");
              }}
              className="inline-block text-sm font-medium px-4 py-2 rounded-lg bg-[#3b82f6] text-white hover:bg-[#2563eb] transition-colors duration-200 mt-1"
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
