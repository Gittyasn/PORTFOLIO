"use client";

import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Eye } from "lucide-react";
import { Github } from "@/components/icons";

const categories = ["All", "Full Stack", "Analytics"];

const projectsData = [
  {
    title: "Student Club & Event Management System",
    category: "Full Stack",
    desc: "A full-stack club and event coordination system built with React, Vite, and Supabase, supporting attendee tracking, registrations, and scheduling.",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["React", "Vite", "Supabase", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/Gittyasn/student-club-and-event-management-system",
    demo: "#",
  },
  {
    title: "LinkedIn Job Posting Data Analysis",
    category: "Analytics",
    desc: "Exploratory data analysis of 2023-2024 job postings, mining local trends, key recruiter skills, and location distributions using statistical Python scripts.",
    image: "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Python", "Pandas", "Matplotlib", "Seaborn", "Data Mining"],
    github: "https://github.com/Gittyasn/linkedin-job-posting",
    demo: "#",
  },
  {
    title: "Sales Forecasting Project",
    category: "Analytics",
    desc: "Time-series machine learning models built in Python to predict future sales trends and analyze seasonal demands for commercial retail sectors.",
    image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Python", "Machine Learning", "Scikit-Learn", "Time-Series"],
    github: "https://github.com/Gittyasn/sales-forecasting-project",
    demo: "#",
  },
  {
    title: "Titanic Survival Prediction",
    category: "Analytics",
    desc: "Classic classification modeling in Python predicting passenger survival probabilities based on demographic, ticket, and cabin parameters.",
    image: "https://images.pexels.com/photos/209831/pexels-photo-209831.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Python", "Classification", "Data Cleaning", "Scikit-Learn"],
    github: "https://github.com/Gittyasn/titanic",
    demo: "#",
  },
  {
    title: "Airbnb Data Analysis & Visualization",
    category: "Analytics",
    desc: "Investigated Airbnb travel listings, reviewing pricing distributions, customer reviews, and geographical demand hotspots via visual plotting.",
    image: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Python", "Matplotlib", "Data Visualization", "Pandas"],
    github: "https://github.com/Gittyasn/airbnb",
    demo: "#",
  },
  {
    title: "Health Insurance Cost Prediction",
    category: "Analytics",
    desc: "Predictive health economics project modeling insurance costs using linear regression and tree algorithms based on patient medical profiles.",
    image: "https://images.pexels.com/photos/4056816/pexels-photo-4056816.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Python", "Regression", "Feature Engineering", "Data Science"],
    github: "https://github.com/Gittyasn/health-insurance",
    demo: "#",
  },
  {
    title: "Student Performance Analysis",
    category: "Analytics",
    desc: "Statistical regression analysis measuring key influences (study habits, demographics, family support) on final academic student grades.",
    image: "https://images.pexels.com/photos/301920/pexels-photo-301920.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Python", "Data Analytics", "Pandas", "Statistical Modeling"],
    github: "https://github.com/Gittyasn/student_performance",
    demo: "#",
  },
];

export function Projects() {
  const [activeCategory, setActiveCategory] = React.useState("All");

  const filteredProjects = projectsData.filter((project) => {
    if (activeCategory === "All") return true;
    return project.category === activeCategory;
  });

  return (
    <section id="projects" className="py-20 relative overflow-hidden bg-background bg-dot-pattern border-b border-border/20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(244,63,94,0.06)_0%,transparent_70%)] pointer-events-none" />
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
            Featured Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto"
          >
            A showcase of my recent work and creative software solutions
          </motion.p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-md shadow-primary/25 scale-102"
                  : "bg-card border border-border text-muted-foreground hover:text-foreground hover:bg-muted/70"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="bg-card border border-border/80 rounded-3xl overflow-hidden group flex flex-col h-full glow-card shadow-sm"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden bg-muted">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-3">
                    {project.demo !== "#" && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/95 rounded-full text-zinc-900 hover:bg-primary hover:text-primary-foreground transition-all duration-200 transform scale-90 group-hover:scale-100"
                        aria-label="View demo"
                      >
                        <Eye className="w-5 h-5" />
                      </a>
                    )}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/95 rounded-full text-zinc-900 hover:bg-primary hover:text-primary-foreground transition-all duration-200 transform scale-90 group-hover:scale-100"
                      aria-label="GitHub Repository"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Card Info */}
                <div className="p-6 flex flex-col flex-grow space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-bold">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold tracking-tight text-foreground/95">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-xs md:text-sm leading-relaxed flex-grow">
                    {project.desc}
                  </p>
                  
                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 bg-muted border border-border/50 text-muted-foreground text-[10px] md:text-xs rounded-lg font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Ongoing Tag */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.8 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12 text-sm text-muted-foreground"
        >
          More exciting projects under active development! Stay tuned.
        </motion.div>
      </div>
    </section>
  );
}
