"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Download, Mail, ChevronDown } from "lucide-react";
import { Github, Linkedin } from "@/components/icons";

const roles = ["Full Stack Developer", "Software Engineer", "Problem Solver"];

export function Hero() {
  const [roleIndex, setRoleIndex] = React.useState(0);
  const [displayText, setDisplayText] = React.useState("");
  const [isDeleting, setIsDeleting] = React.useState(false);
  const typingSpeed = 120;
  const deletingSpeed = 60;
  const delayBetweenRoles = 2000;

  React.useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
      }, deletingSpeed);
    } else {
      timer = setTimeout(() => {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
      }, typingSpeed);
    }

    if (!isDeleting && displayText === currentRole) {
      timer = setTimeout(() => setIsDeleting(true), delayBetweenRoles);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById("projects");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToAbout = () => {
    const target = document.getElementById("about");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden py-20"
    >
      {/* Background Decorative Blobs */}
      <div className="absolute top-20 left-10 w-44 h-44 rounded-full bg-primary/5 blur-3xl floating-element" />
      <div className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-rose-400/5 blur-3xl floating-element-delayed" />

      <div className="container mx-auto px-4 md:px-8 relative z-10 flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6 max-w-3xl"
        >
          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ delay: 0.2 }}
            className="text-primary font-medium tracking-wide text-sm md:text-base uppercase"
          >
            Greetings, I am
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight"
          >
            Yaswanth
          </motion.h1>

          {/* Typewriter Role */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="h-10 md:h-12 flex items-center justify-center"
          >
            <span className="text-xl md:text-3xl text-muted-foreground font-semibold">
              I am a{" "}
              <span className="text-primary border-r-2 border-primary pr-1 typing-cursor font-bold">
                {displayText}
              </span>
            </span>
          </motion.div>

          {/* Bio Summary */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto leading-relaxed"
          >
            Passionate about creating innovative digital solutions and turning ideas into reality through clean, optimized code.
          </motion.p>

          {/* Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <a
              href="#"
              className="flex items-center gap-2 px-7 py-3.5 bg-primary hover:bg-primary-hover text-primary-foreground rounded-2xl font-semibold shadow-lg shadow-primary/20 hover:shadow-xl hover:scale-[1.02] transition-all cursor-pointer"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
            <a
              href="#projects"
              onClick={handleScrollToProjects}
              className="flex items-center gap-2 px-7 py-3.5 bg-card hover:bg-muted border border-border rounded-2xl font-semibold hover:border-primary/50 hover:scale-[1.02] transition-all cursor-pointer"
            >
              <Github className="w-4 h-4" />
              View Projects
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex items-center justify-center space-x-5 pt-8"
          >
            <a
              href="https://github.com/vamsipaul1"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-card border border-border/80 rounded-2xl text-muted-foreground hover:text-primary hover:border-primary/40 hover:scale-110 transition-all shadow-sm"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/vamsi-rangumudri"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-card border border-border/80 rounded-2xl text-muted-foreground hover:text-primary hover:border-primary/40 hover:scale-110 transition-all shadow-sm"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:vamsi.rangumudri.dev@gmail.com"
              className="p-3 bg-card border border-border/80 rounded-2xl text-muted-foreground hover:text-primary hover:border-primary/40 hover:scale-110 transition-all shadow-sm"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 1.1 }}
          onClick={handleScrollToAbout}
          className="absolute bottom-6 flex flex-col items-center space-y-1 text-muted-foreground hover:text-primary cursor-pointer transition-colors"
        >
          <span className="text-xs uppercase tracking-widest font-medium">Scroll Down</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}
