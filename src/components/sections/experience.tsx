"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, Award } from "lucide-react";

const experienceData = [
  {
    company: "APSSDC",
    role: "Data Analysis Using Python Intern",
    period: "May 2025 - July 2025",
    location: "Visakhapatnam, India",
    desc: "Applied Python for data cleaning, transformation, and exploratory data analysis. Generated statistics and visualizations to interpret trends and insights from various practice datasets.",
    achievements: [
      "Applied Python for data cleaning, transformation, and exploratory data analysis on practice datasets.",
      "Generated summary statistics and visualizations to interpret trends and insights.",
      "Strengthened core Python skills through analysis scripts, plotting libraries, and data exercises.",
    ],
    color: "from-blue-500 to-indigo-500",
  },
  {
    company: "XCEEDIQ",
    role: "Full Stack Web Development Intern",
    period: "May 2024 - Aug 2024",
    location: "Visakhapatnam, India",
    desc: "Contributed to School Management System V1 using the MERN stack, working on React front-end views and Node.js REST API integrations.",
    achievements: [
      "Contributed to School Management System V1 using the MERN stack.",
      "Worked on React front-end features and supported Node.js/Express REST API integration.",
      "Assisted MongoDB CRUD operations, schema design, and debugging using Git version control.",
    ],
    color: "from-purple-500 to-rose-500",
  },
];

export function Experience() {
  return (
    <section
      id="internships"
      className="py-20 bg-background bg-dot-pattern relative overflow-hidden border-b border-border/20"
    >
      {/* Decorative Blobs */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(244,63,94,0.06)_0%,transparent_65%)] pointer-events-none" />
      <div className="absolute top-20 left-10 w-44 h-44 rounded-full bg-primary/5 blur-3xl floating-element" />
      <div className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-rose-400/5 blur-3xl floating-element-delayed" />

      <div className="container mx-auto px-4 md:px-10 max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight"
          >
            Professional Experience
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto"
          >
            My professional development journey through internships and software engineering practice
          </motion.p>
        </div>

        {/* Timeline container */}
        <div className="relative border-l border-border/80 ml-4 md:ml-6 lg:mx-auto lg:border-l-0 lg:flex lg:flex-col lg:items-center space-y-12">
          {/* Middle vertical line for desktop */}
          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-border" />

          {experienceData.map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div
                key={item.company}
                className={`relative w-full lg:w-1/2 flex flex-col items-start ${
                  isLeft ? "lg:items-end lg:pr-12 lg:mr-auto" : "lg:items-start lg:pl-12 lg:ml-auto"
                }`}
              >
                {/* Timeline node icon */}
                <div
                  className={`absolute -left-[17px] md:-left-[25px] lg:left-1/2 lg:-translate-x-1/2 top-4 w-9 h-9 md:w-11 md:h-11 rounded-full bg-card border border-border flex items-center justify-center shadow-md z-10`}
                >
                  <Briefcase className="w-4 h-4 text-primary" />
                </div>

                {/* Card Container */}
                <motion.div
                  initial={{ opacity: 0, x: isLeft ? -40 : 40, y: 20 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, type: "spring", bounce: 0.2 }}
                  className="w-[calc(100%-24px)] ml-8 md:ml-10 lg:ml-0 lg:w-[90%] bg-card border border-border p-6 md:p-8 rounded-3xl shadow-sm glow-card hover:border-primary/30"
                >
                  {/* Company & Role Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-2xl flex items-center justify-center font-semibold text-lg text-primary">
                        💼
                      </div>
                      <div>
                        <h3 className="font-extrabold text-lg md:text-xl text-foreground">
                          {item.company}
                        </h3>
                        <p className="text-sm font-semibold text-primary">{item.role}</p>
                      </div>
                    </div>
                  </div>

                  {/* Date and Location Badges */}
                  <div className="flex flex-wrap items-center gap-3 text-xs md:text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.period}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-muted-foreground/40 hidden sm:inline" />
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {item.location}
                    </span>
                  </div>

                  {/* Summary Text */}
                  <p className="text-muted-foreground text-xs md:text-sm leading-relaxed mb-6">
                    {item.desc}
                  </p>

                  {/* Achievements Checklist */}
                  <div className="space-y-3">
                    <h4 className="text-xs md:text-sm font-bold text-foreground flex items-center gap-2">
                      <Award className="w-4 h-4 text-primary" /> Key Achievements:
                    </h4>
                    <ul className="space-y-2.5 text-xs md:text-sm">
                      {item.achievements.map((ach, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span className="leading-relaxed">{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
