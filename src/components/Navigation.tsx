"use client";

import { useState, useEffect } from "react";
import { Anchor } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
        scrolled 
          ? "bg-[#fcfcfc]/80 backdrop-blur-md border-b border-navy-900/5 py-0" 
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <Anchor className="text-[#a8d4e6] transition-colors duration-700" size={28} />
            <span className={`text-2xl font-serif tracking-wide transition-colors duration-700 ${scrolled ? "text-navy-900" : "text-white"}`}>
              SFC Travel
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10">
            <a href="#benefits" className={`text-xs md:text-sm font-medium tracking-widest uppercase transition-colors duration-500 ${scrolled ? "text-navy-900/70 hover:text-navy-900" : "text-white/80 hover:text-white"}`}>
              Member Benefits
            </a>
            <a href="#packages" className={`text-xs md:text-sm font-medium tracking-widest uppercase transition-colors duration-500 ${scrolled ? "text-navy-900/70 hover:text-navy-900" : "text-white/80 hover:text-white"}`}>
              Experiences
            </a>
            <a href="/login" className={`text-xs md:text-sm font-semibold tracking-widest uppercase py-3.5 px-8 rounded-full transition-all duration-500 ${scrolled ? "bg-navy-900 text-white hover:bg-navy-800" : "bg-[#a8d4e6] text-navy-900 hover:bg-white shadow-[0_0_20px_rgba(168,212,230,0.3)]"}`}>
              Sign In
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={`md:hidden transition-colors duration-500 ${scrolled ? "text-navy-900" : "text-white"}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="text-xs font-light tracking-[0.2em] uppercase">
              {isOpen ? "CLOSE" : "MENU"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div 
          className="md:hidden fixed inset-0 top-0 z-40 bg-navy-900"
          onClick={() => setIsOpen(false)}
        >
          <div className="flex flex-col items-center justify-center h-full gap-10 px-8" onClick={(e) => e.stopPropagation()}>
            <a 
              href="#benefits" 
              onClick={() => setIsOpen(false)}
              className="text-lg font-light tracking-[0.3em] uppercase text-white/70 hover:text-white transition-colors"
            >
              Member Benefits
            </a>
            <a 
              href="#packages" 
              onClick={() => setIsOpen(false)}
              className="text-lg font-light tracking-[0.3em] uppercase text-white/70 hover:text-white transition-colors"
            >
              Experiences
            </a>
            <a 
              href="/login" 
              className="text-sm font-medium tracking-widest uppercase text-navy-900 bg-[#a8d4e6] py-4 px-12 rounded-full text-center mt-4 shadow-[0_0_20px_rgba(168,212,230,0.3)]"
            >
              Sign In
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
