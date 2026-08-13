"use client";

import * as React from "react";
import { Mail, Heart, Phone, MapPin } from "lucide-react";
import { Github, Linkedin } from "@/components/icons";

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

  return (
    <footer className="relative overflow-hidden border-t border-zinc-900 bg-zinc-950 text-zinc-100 py-12 md:py-16">
      {/* Subtle top spotlight flare */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(244,63,94,0.03)_0%,transparent_50%)] pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold tracking-tight bg-gradient-to-r from-primary to-rose-400 bg-clip-text text-transparent">
              Bandaru Yaswanth
            </h3>
            <p className="text-sm text-zinc-400 max-w-xs leading-relaxed">
              Passionate developer dedicated to engineering sleek web experiences and creating high-performance software.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-200">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="#home"
                  onClick={(e) => handleNavClick(e, "home")}
                  className="text-zinc-400 hover:text-primary transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleNavClick(e, "about")}
                  className="text-zinc-400 hover:text-primary transition-colors"
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  onClick={(e) => handleNavClick(e, "projects")}
                  className="text-zinc-400 hover:text-primary transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#education"
                  onClick={(e) => handleNavClick(e, "education")}
                  className="text-zinc-400 hover:text-primary transition-colors"
                >
                  Education
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "contact")}
                  className="text-zinc-400 hover:text-primary transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details & Socials */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-zinc-200">
              Get in Touch
            </h4>
            <div className="space-y-2 text-sm text-zinc-400">
              <a
                href="mailto:yaswanthbandaruu@gmail.com"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                yaswanthbandaruu@gmail.com
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Visakhapatnam, India
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-4 pt-2">
              <a
                href="https://github.com/Gittyasn"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 text-zinc-400 hover:text-primary transition-all duration-350 hover:scale-105"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/yaswanth-bandaru-98912b"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 text-zinc-400 hover:text-primary transition-all duration-350 hover:scale-105"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
          <p>© {currentYear} Bandaru Yaswanth. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Designed with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 animate-pulse" /> using Next.js & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
