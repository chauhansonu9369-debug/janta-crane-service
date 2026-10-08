"use client";

import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "होम", href: "#home" },
    { name: "सेवाएं", href: "#services" },
    { name: "हमारे बारे में", href: "#about" },
    { name: "सेवा क्षेत्र", href: "#area" },
    { name: "गैलरी", href: "#gallery" },
    { name: "संपर्क", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a2540]/95 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-18">
          <a href="#home" className="flex items-center gap-2">
            <span className="text-2xl">🏗️</span>
            <div>
              <h1 className="text-white font-bold text-lg leading-tight">
                जनता क्रेन सर्विस
              </h1>
              <p className="text-sky-300 text-xs">24 घंटे सेवा</p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white/90 hover:text-amber-400 transition font-medium text-sm"
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:9838770115"
              className="bg-amber-500 hover:bg-amber-600 text-white px-5 py-2 rounded-full font-semibold text-sm transition shadow-md"
            >
              📞 Call Now
            </a>
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
            aria-label="Menu"
          >
            {isOpen ? (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#0a2540] border-t border-white/10">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-white/90 hover:text-amber-400 py-2 font-medium"
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:9838770115"
              className="block bg-amber-500 text-white text-center py-3 rounded-full font-semibold mt-2"
            >
              📞 Call Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
