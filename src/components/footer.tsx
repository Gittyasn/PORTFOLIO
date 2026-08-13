"use client";

import * as React from "react";
import { Heart, ArrowUp } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = `/#${id}`;
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden border-t border-zinc-900 bg-zinc-950 text-white py-8">
      {/* Subtle top spotlight flare */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.03)_0%,transparent_50%)] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Scroll To Top Button */}
        <div className="text-center mb-4.5">
          <button
            onClick={scrollToTop}
            className="inline-flex items-center justify-center w-9.5 h-9.5 bg-gradient-to-r from-primary to-sky-400 rounded-full hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 cursor-pointer text-white"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4.5 h-4.5" />
          </button>
        </div>

        {/* Central Brand Info */}
        <div className="text-center space-y-4.5">
          <div className="text-xl font-bold text-white font-poppins tracking-tight">
            Bandaru Yaswanth
          </div>
          <p className="text-zinc-400 max-w-xl mx-auto text-sm leading-relaxed">
            Full-Stack Developer & Data Analyst passionate about creating exceptional digital experiences.
          </p>

          {/* Centered Navigation Links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-zinc-400 text-sm">
            <a
              href="#about"
              onClick={(e) => handleNavClick(e, "about")}
              className="hover:text-white transition-colors duration-200 relative group"
            >
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </a>
            <a
              href="#education"
              onClick={(e) => handleNavClick(e, "education")}
              className="hover:text-white transition-colors duration-200 relative group"
            >
              Education
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </a>
            <a
              href="#internships"
              onClick={(e) => handleNavClick(e, "internships")}
              className="hover:text-white transition-colors duration-200 relative group"
            >
              Experience
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </a>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "contact")}
              className="hover:text-white transition-colors duration-200 relative group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </a>
          </div>

          {/* Copyright Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-zinc-500 text-xs max-w-2xl mx-auto !mt-2">
            <p>© {currentYear} Bandaru Yaswanth. All rights reserved.</p>
            <span className="hidden sm:inline text-zinc-700">•</span>
            <p className="flex items-center gap-1.5">
              Built with <Heart className="w-3.5 h-3.5 text-sky-400 fill-sky-400 animate-pulse" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
