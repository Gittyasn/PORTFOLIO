"use client";

import * as React from "react";
import { motion } from "framer-motion";

export function Education() {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        {/* Education History */}
        <div className="space-y-4 text-center lg:text-left">
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-card border border-border/80 p-6 rounded-3xl shadow-sm hover:border-primary/30 transition-all duration-300 glow-card"
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
            className="bg-card border border-border/80 p-6 rounded-3xl shadow-sm hover:border-primary/30 transition-all duration-300 glow-card"
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
            className="bg-card border border-border/80 p-6 rounded-3xl shadow-sm hover:border-primary/30 transition-all duration-300 glow-card"
          >
            <span className="text-xs font-bold text-primary">2018 - 2019</span>
            <h4 className="font-extrabold text-base mt-2 text-foreground/95">SSC</h4>
            <p className="text-xs text-muted-foreground mt-1">Saraswathi Vidya Vihar</p>
            <p className="text-xs text-primary font-bold mt-4">Percentage: 98.00%</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
