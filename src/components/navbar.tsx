"use client";

import * as React from "react";
import { usePathname, useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { Menu, X, Sun, Moon, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Experience", href: "#internships" },
  { name: "Certifications", href: "#certifications" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("home");
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Scroll handler to add background blur/shadow when scrolling down
  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer to highlight current section
  React.useEffect(() => {
    if (pathname !== "/" && !pathname.startsWith("/#")) return;

    const observers = navItems.map((item) => {
      const el = document.getElementById(item.href.substring(1));
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(item.href.substring(1));
          }
        },
        { threshold: 0.05, rootMargin: "-30% 0px -30% 0px" }
      );

      observer.observe(el);
      return { observer, el };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) obs.observer.unobserve(obs.el);
      });
    };
  }, [pathname]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    const sectionId = href.substring(1);
    setActiveSection(sectionId);

    if (pathname === "/" || pathname.startsWith("/#")) {
      const target = document.getElementById(sectionId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", href);
      }
    } else {
      router.push("/" + href);
    }
  };

  const handleBlogClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    router.push("/blog");
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glassmorphism shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="flex items-center group"
        >
          <Image
            src="/logo.jpg"
            alt="Portfolio Logo"
            width={120}
            height={32}
            className="h-8 w-auto object-contain group-hover:scale-[1.02] transition-transform duration-300 rounded-lg"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1) && (pathname === "/" || pathname.startsWith("/#"));
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-250 rounded-lg ${
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/55"
                }`}
              >
                {item.name}
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-3 right-3 h-0.5 bg-primary rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
          
          {/* Blog Page Link */}
          <a
            href="/blog"
            onClick={handleBlogClick}
            className={`px-4 py-2 text-sm font-medium transition-colors duration-250 rounded-lg ${
              pathname.startsWith("/blog")
                ? "text-primary bg-primary/10"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/55"
            }`}
          >
            Blog
          </a>
        </div>

        {/* Theme Toggle & Mobile Menu Trigger */}
        <div className="flex items-center space-x-3">
          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className="w-[38px] h-[38px] rounded-xl border border-border/60 hover:bg-muted/65 transition-colors cursor-pointer flex items-center justify-center"
            aria-label="Toggle Theme"
          >
            {mounted ? (
              resolvedTheme === "dark" ? (
                <Moon className="w-4.5 h-4.5 text-rose-400" />
              ) : (
                <Sun className="w-4.5 h-4.5 text-amber-500" />
              )
            ) : (
              <div className="w-4.5 h-4.5" />
            )}
          </button>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl border border-border/60 hover:bg-muted/65 transition-colors cursor-pointer"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-4.5 h-4.5" /> : <Menu className="w-4.5 h-4.5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-border/40 glassmorphism"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-2">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.substring(1) && (pathname === "/" || pathname.startsWith("/#"));
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                      isActive
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    }`}
                  >
                    {item.name}
                  </a>
                );
              })}
              
              <a
                href="/blog"
                onClick={handleBlogClick}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  pathname.startsWith("/blog")
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                Blog
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
