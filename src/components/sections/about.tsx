"use client";

import * as React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Code, Lightbulb, Target, Heart } from "lucide-react";

const cards = [
  {
    icon: Code,
    title: "Clean Code",
    desc: "Writing maintainable, scalable, and efficient code is my passion.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    desc: "Always exploring new technologies and creative solutions.",
  },
  {
    icon: Target,
    title: "Goal-Oriented",
    desc: "Focused on delivering results that exceed expectations.",
  },
  {
    icon: Heart,
    title: "User-Centric",
    desc: "Creating experiences that users love and find intuitive.",
  },
];

export function About() {
  return (
    <section
      id="about"
      className="py-20 bg-muted/10 relative overflow-hidden"
    >
      {/* Decorative Blobs */}
      <div className="absolute top-20 right-10 w-52 h-52 rounded-full bg-primary/5 blur-3xl floating-element" />
      <div className="absolute bottom-20 left-10 w-40 h-40 rounded-full bg-rose-400/5 blur-3xl floating-element-delayed" />

      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight"
          >
            About Me
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto"
          >
            Passionate developer with a love for creating digital experiences that make a difference
          </motion.p>
        </div>

        {/* Bio Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Photo */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-rose-500 rounded-3xl blur-md opacity-25 group-hover:opacity-40 transition-opacity duration-300" />
              <div className="relative w-full h-full rounded-3xl border border-border bg-card p-2 shadow-xl overflow-hidden">
                <div className="w-full h-full rounded-2xl overflow-hidden relative">
                  <Image
                    src="/profile.png"
                    alt="Yaswanth Profile"
                    fill
                    sizes="(max-width: 768px) 256px, 320px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    priority
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio details */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            <h3 className="text-xl md:text-2xl font-bold tracking-tight text-foreground/90">
              CSE Undergraduate at Baba Institute of Technology and Sciences
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed text-sm md:text-base">
              <p>
                Hi, I'm Yaswanth, a computer science undergraduate passionate about full-stack web engineering. I thrive on constructing robust, responsive interfaces and solving complex engineering challenges.
              </p>
              <p>
                My development journey started with vanilla javascript, quickly transitioning into modern frameworks like React, Next.js, and backend web APIs. I constantly update my toolkit to match modern industry best-practices and patterns.
              </p>
              <p>
                Outside of coding, I participate in open-source projects, explore emerging technologies, write technical blogs, and share knowledge with fellow coders in my tech community.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Education History */}
        <div className="mt-20">
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl font-bold mb-8 text-center lg:text-left text-foreground/90"
          >
            Education History
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card border border-border/80 p-6 rounded-3xl shadow-sm hover:border-primary/30 transition-all duration-300"
            >
              <span className="text-xs font-bold text-primary">2022 - 2026</span>
              <h4 className="font-extrabold text-base mt-2 text-foreground/95">B.Tech in Computer Science</h4>
              <p className="text-xs text-muted-foreground mt-1">Baba Institute Of Technology And Sciences</p>
              <p className="text-xs text-primary font-bold mt-4">Percentage: 72.02%</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-card border border-border/80 p-6 rounded-3xl shadow-sm hover:border-primary/30 transition-all duration-300"
            >
              <span className="text-xs font-bold text-primary">2019 - 2021</span>
              <h4 className="font-extrabold text-base mt-2 text-foreground/95">Intermediate (MPC)</h4>
              <p className="text-xs text-muted-foreground mt-1">Sri Chaitanya Junior College</p>
              <p className="text-xs text-primary font-bold mt-4">Percentage: 91.02%</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-card border border-border/80 p-6 rounded-3xl shadow-sm hover:border-primary/30 transition-all duration-300"
            >
              <span className="text-xs font-bold text-primary">2018 - 2019</span>
              <h4 className="font-extrabold text-base mt-2 text-foreground/95">SSC</h4>
              <p className="text-xs text-muted-foreground mt-1">Saraswathi Vidya Vihar</p>
              <p className="text-xs text-primary font-bold mt-4">Percentage: 98.00%</p>
            </motion.div>
          </div>
        </div>

        {/* Highlights Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-border/80 p-6 rounded-2xl shadow-sm text-center group glow-card"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h4 className="font-bold text-base md:text-lg mb-2 text-foreground/90">
                  {card.title}
                </h4>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                  {card.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
