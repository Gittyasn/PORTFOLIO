"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Monitor, Server, Cloud, Hammer, CheckCircle2 } from "lucide-react";

const skillGroups = [
  {
    title: "Programming Languages",
    icon: Monitor,
    skills: ["C", "C++", "Python", "Java (Basic)"],
    color: "text-blue-500",
  },
  {
    title: "Web Technologies",
    icon: Server,
    skills: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "React.js", "Node.js", "Express.js"],
    color: "text-green-500",
  },
  {
    title: "Databases & Developer Tools",
    icon: Hammer,
    skills: ["MongoDB", "SQL", "Supabase", "VS Code", "Git", "GitHub"],
    color: "text-purple-500",
  },
];

const additionalSkills = [
  "Team Management",
  "Leadership",
  "Problem Solving",
  "Adaptability",
  "Data Analysis",
  "AI Automation",
];

export function Skills() {
  return (
    <section
      id="skills"
      className="py-20 bg-muted/10 relative overflow-hidden bg-dot-pattern"
    >
      {/* Decorative Blobs */}
      <div className="absolute inset-0 glow-radial-rose pointer-events-none" />
      <div className="absolute top-20 right-10 w-44 h-44 rounded-full bg-primary/5 blur-3xl floating-element" />
      <div className="absolute bottom-20 left-10 w-60 h-60 rounded-full bg-rose-400/5 blur-3xl floating-element-delayed" />

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
            Skills & Expertise
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto"
          >
            A comprehensive overview of my technical capabilities, languages, tools, and practices
          </motion.p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
          {[
            { label: "Projects Completed", val: "5+" },
            { label: "Technologies Used", val: "15+" },
            { label: "Years Programming", val: "3+" },
            { label: "Clean Code Quality", val: "90%" },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-card border border-border/80 p-5 rounded-2xl text-center shadow-sm"
            >
              <div className="text-primary text-xl md:text-2xl font-extrabold mb-1">{stat.val}</div>
              <div className="text-muted-foreground text-[10px] md:text-xs font-semibold uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillGroups.map((group, groupIdx) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: groupIdx * 0.1 }}
                className="bg-card border border-border p-6 md:p-8 rounded-3xl shadow-sm glow-card flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center space-x-3 mb-6">
                    <div className={`p-2.5 bg-muted rounded-xl ${group.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-extrabold text-base md:text-lg text-foreground/95">
                      {group.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2.5">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3.5 py-1.5 bg-muted hover:bg-primary/5 hover:text-primary border border-border/60 hover:border-primary/20 text-xs md:text-sm font-semibold rounded-2xl text-muted-foreground transition-all duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Competencies */}
        <div className="mt-16 bg-card border border-border p-8 rounded-3xl shadow-sm">
          <h3 className="font-extrabold text-lg md:text-xl mb-6 text-foreground/95 border-b border-border/60 pb-3">
            Additional Competencies & Methodologies
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {additionalSkills.map((skill, idx) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="flex items-center gap-2.5 text-xs md:text-sm text-muted-foreground"
              >
                <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                <span className="font-medium leading-relaxed">{skill}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
