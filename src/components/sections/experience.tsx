"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Award } from "lucide-react";

const experienceData = [
  {
    company: "Adverk Technologies",
    role: "Data Science Intern",
    period: "August 2025 - Present",
    location: "Remote",
    desc: "Applying machine learning models and statistical analysis to extract insights from raw datasets. Building data pipelines and visual reports to support decision making.",
    achievements: [
      "Designed and implemented predictive modeling pipelines using Python, Pandas, and Scikit-Learn.",
      "Developed automated ETL scripts to clean and ingest structured data, improving pipeline efficiency by 25%.",
      "Built interactive data visualization dashboards in Power BI to present business metrics to stakeholders."
    ],
    emoji: "📊",
    color: "bg-amber-600 text-white shadow-amber-500/20"
  },
  {
    company: "APSSDC",
    role: "Data Analysis Using Python Intern",
    period: "May 2025 - July 2025",
    location: "Visakhapatnam, India",
    desc: "Applied Python for data cleaning, transformation, and exploratory data analysis. Generated statistics and visualizations to interpret trends and insights from various practice datasets.",
    achievements: [
      "Applied Python for data cleaning, transformation, and exploratory data analysis on practice datasets.",
      "Generated summary statistics and visualizations to interpret trends and insights.",
      "Strengthened core Python skills through analysis scripts, plotting libraries, and data exercises."
    ],
    emoji: "📈",
    color: "bg-rose-600 text-white shadow-rose-500/20"
  },
  {
    company: "XCEEDIQ",
    role: "Full Stack Web Development Intern",
    period: "May 2024 - August 2024",
    location: "Visakhapatnam, India",
    desc: "Contributed to School Management System V1 using the MERN stack, working on React front-end views and Node.js REST API integrations.",
    achievements: [
      "Contributed to School Management System V1 using the MERN stack.",
      "Worked on React front-end features and supported Node.js/Express REST API integration.",
      "Assisted MongoDB CRUD operations, schema design, and debugging using Git version control."
    ],
    emoji: "🚀",
    color: "bg-blue-600 text-white shadow-blue-500/20"
  }
];

export function Experience() {
  return (
    <section
      id="internships"
      className="py-20 bg-gradient-to-br from-blue-50/60 via-sky-50/30 to-blue-50/60 dark:from-zinc-950 dark:via-zinc-900/40 dark:to-zinc-950 relative overflow-hidden border-b border-border/20"
    >
      {/* Dot Pattern Overlay */}
      <div className="absolute inset-0 bg-dot-pattern opacity-70 pointer-events-none" />

      {/* Decorative Blobs */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(244,63,94,0.06)_0%,transparent_65%)] pointer-events-none" />
      <div className="absolute top-20 left-10 w-44 h-44 rounded-full bg-primary/5 blur-3xl floating-element" />
      <div className="absolute bottom-20 right-10 w-60 h-60 rounded-full bg-rose-400/5 blur-3xl floating-element-delayed" />

      <div className="container mx-auto px-4 md:px-10 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-violet-600 to-indigo-600 dark:from-violet-400 dark:to-indigo-400 bg-clip-text text-transparent font-poppins pb-1"
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
        <div className="relative ml-4 md:ml-6 lg:mx-auto lg:flex lg:flex-col lg:items-center space-y-12">
          {/* Vertical timeline line */}
          <div className="absolute left-4 md:left-6 lg:left-1/2 -translate-x-[1.5px] top-0 bottom-0 w-[3px] bg-gradient-to-b from-blue-500 to-purple-500" />

          {experienceData.map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div
                key={item.company}
                className={`relative w-full lg:w-1/2 flex flex-col items-start ${
                  isLeft ? "lg:items-end lg:pr-12 lg:mr-auto" : "lg:items-start lg:pl-12 lg:ml-auto"
                }`}
              >
                {/* Timeline node dot */}
                <div
                  className="absolute left-4 md:left-6 lg:left-1/2 -translate-x-1/2 top-7 w-4 h-4 bg-blue-600 rounded-full border-[3px] border-white dark:border-zinc-950 shadow z-10"
                />

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
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-xl shadow-md ${item.color}`}>
                        {item.emoji}
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
