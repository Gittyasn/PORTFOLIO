"use client";

import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Eye } from "lucide-react";
import { Github } from "@/components/icons";

const categories = ["All", "Full Stack", "Web App", "Frontend", "Analytics", "Portfolio"];

const projectsData = [
  {
    title: "E-Commerce Platform",
    category: "Full Stack",
    desc: "A full-stack e-commerce solution with React, Node.js, and Stripe integration.",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["React", "Node.js", "MongoDB", "Stripe", "Express"],
    github: "https://github.com/vamsipaul1",
    demo: "#",
  },
  {
    title: "Task Management App",
    category: "Web App",
    desc: "A collaborative task management application with real-time updates and task delegation.",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Next.js", "TypeScript", "Prisma", "Supabase", "Tailwind"],
    github: "https://github.com/vamsipaul1",
    demo: "#",
  },
  {
    title: "Weather Dashboard",
    category: "Frontend",
    desc: "A responsive weather dashboard featuring location-based mapping and 7-day forecast APIs.",
    image: "https://images.pexels.com/photos/209831/pexels-photo-209831.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["React", "Chart.js", "Weather API", "CSS Grid"],
    github: "https://github.com/vamsipaul1",
    demo: "#",
  },
  {
    title: "Social Media Analytics",
    category: "Analytics",
    desc: "Real-time analytics tracker visualizing visitor metrics and platform growth ratios. (Ongoing)",
    image: "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Vue.js", "D3.js", "Python", "FastAPI", "PostgreSQL"],
    github: "https://github.com/vamsipaul1",
    demo: "#",
  },
  {
    title: "Portfolio Website",
    category: "Portfolio",
    desc: "A modern, responsive portfolio website featuring fluid layouts, dark themes, and MDX.",
    image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Next.js", "Framer Motion", "Tailwind CSS", "MDX"],
    github: "https://github.com/vamsipaul1",
    demo: "#",
  },
  {
    title: "Booking System",
    category: "Full Stack",
    desc: "Client-service real-time calendar syncing, schedule booking, and payment processing. (Ongoing)",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["React", "Express", "MySQL", "Socket.io", "Stripe"],
    github: "https://github.com/vamsipaul1",
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
    <section id="projects" className="py-20">
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
                    <a
                      href={project.demo}
                      className="p-3 bg-white/95 rounded-full text-zinc-900 hover:bg-primary hover:text-primary-foreground transition-all duration-200 transform scale-90 group-hover:scale-100"
                      aria-label="View demo"
                    >
                      <Eye className="w-5 h-5" />
                    </a>
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
          🚀 More exciting projects under active development! Stay tuned.
        </motion.div>
      </div>
    </section>
  );
}
