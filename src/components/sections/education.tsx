"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { GraduationCap, BookOpen, Award } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="py-20 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-10 max-w-7xl">
        {/* Education History */}
        <div className="space-y-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight text-center"
          >
            Education History
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto text-center pb-8"
          >
            My academic foundation and educational milestones
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {/* Card 1: B.Tech */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-card/70 backdrop-blur-md border border-border/80 p-7 rounded-3xl shadow-sm hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 relative group overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="flex items-center justify-between mb-5">
              <span className="text-[11px] font-bold tracking-wider text-primary bg-primary/10 px-3 py-1.5 rounded-full uppercase">
                2022 - 2026
              </span>
              <div className="w-10 h-10 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                <GraduationCap className="w-5 h-5" />
              </div>
            </div>
            <h4 className="font-extrabold text-lg text-foreground/95 group-hover:text-primary transition-colors duration-300">
              B.Tech in Computer Science
            </h4>
            <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">
              Baba Institute Of Technology And Sciences
            </p>
            <div className="mt-6 pt-4 border-t border-border/50 flex items-center justify-between">
              <span className="text-xs text-muted-foreground font-medium">Result</span>
              <span className="text-xs font-extrabold text-primary bg-primary/10 px-2.5 py-1 rounded-lg">
                72.02%
              </span>
            </div>
          </motion.div>
          
          {/* Card 2: Intermediate */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-card/70 backdrop-blur-md border border-border/80 p-7 rounded-3xl shadow-sm hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 relative group overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="flex items-center justify-between mb-5">
              <span className="text-[11px] font-bold tracking-wider text-primary bg-primary/10 px-3 py-1.5 rounded-full uppercase">
                2019 - 2021
              </span>
              <div className="w-10 h-10 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                <BookOpen className="w-5 h-5" />
              </div>
            </div>
            <h4 className="font-extrabold text-lg text-foreground/95 group-hover:text-primary transition-colors duration-300">
              Intermediate (MPC)
            </h4>
            <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">
              Sri Chaitanya Junior College
            </p>
            <div className="mt-6 pt-4 border-t border-border/50 flex items-center justify-between">
              <span className="text-xs text-muted-foreground font-medium">Result</span>
              <span className="text-xs font-extrabold text-primary bg-primary/10 px-2.5 py-1 rounded-lg">
                91.02%
              </span>
            </div>
          </motion.div>
          
          {/* Card 3: SSC */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-card/70 backdrop-blur-md border border-border/80 p-7 rounded-3xl shadow-sm hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 relative group overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="flex items-center justify-between mb-5">
              <span className="text-[11px] font-bold tracking-wider text-primary bg-primary/10 px-3 py-1.5 rounded-full uppercase">
                2018 - 2019
              </span>
              <div className="w-10 h-10 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                <Award className="w-5 h-5" />
              </div>
            </div>
            <h4 className="font-extrabold text-lg text-foreground/95 group-hover:text-primary transition-colors duration-300">
              SSC Schooling
            </h4>
            <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">
              Saraswathi Vidya Vihar
            </p>
            <div className="mt-6 pt-4 border-t border-border/50 flex items-center justify-between">
              <span className="text-xs text-muted-foreground font-medium">Result</span>
              <span className="text-xs font-extrabold text-primary bg-primary/10 px-2.5 py-1 rounded-lg">
                98.00%
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
