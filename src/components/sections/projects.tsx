"use client";

import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Eye } from "lucide-react";
import { Github } from "@/components/icons";

const categories = ["All", "Full Stack", "Analytics", "Portfolio"];

const projectsData = [
  {
    title: "Personal Portfolio Website",
    category: "Portfolio",
    desc: "A personal developer portfolio website showcasing my skills, projects, and experience. Built with Next.js, React, Tailwind CSS, and Framer Motion.",
    image: "https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/Gittyasn/portfolio",
    demo: "#home",
  },
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
    image: "https://images.pexels.com/photos/4064244/pexels-photo-4064244.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Python", "Pandas", "Matplotlib", "Seaborn", "Data Mining"],
    github: "https://github.com/Gittyasn/linkedin-job-posting",
    demo: "#",
  },
  {
    title: "Sales Forecasting Project",
    category: "Analytics",
    desc: "Time-series machine learning models built in Python to predict future sales trends and analyze seasonal demands for commercial retail sectors.",
    image: "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Python", "Machine Learning", "Scikit-Learn", "Time-Series"],
    github: "https://github.com/Gittyasn/sales-forecasting-project",
    demo: "#",
  },
  {
    title: "Titanic Survival Prediction",
    category: "Analytics",
    desc: "Classic classification modeling in Python predicting passenger survival probabilities based on demographic, ticket, and cabin parameters.",
    image: "https://images.pexels.com/photos/1117210/pexels-photo-1117210.jpeg?auto=compress&cs=tinysrgb&w=800",
    tags: ["Python", "Classification", "Data Cleaning", "Scikit-Learn"],
    github: "https://github.com/Gittyasn/titanic",
    demo: "#",
  },
  {
    title: "Airbnb Data Analysis & Visualization",
    category: "Analytics",
    desc: "Investigated Airbnb travel listings, reviewing pricing distributions, customer reviews, and geographical demand hotspots via visual plotting.",
    image: "https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&w=800",
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

// Helper Component for Project Card to handle image load errors smoothly
function ProjectCard({ project }: { project: typeof projectsData[0] }) {
  const [hasError, setHasError] = React.useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="bg-white border border-zinc-200/80 rounded-3xl overflow-hidden group flex flex-col h-full shadow-md hover:shadow-lg transition-all duration-300"
    >
      {/* Project Image Container */}
      <div className="relative h-40 overflow-hidden bg-gradient-to-br from-sky-50 to-indigo-100 flex items-center justify-center">
        {!hasError ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            onError={() => setHasError(true)}
          />
        ) : (
          <div className="text-3xl text-sky-600/40 font-extrabold select-none tracking-wider">
            {project.title.split(" ").slice(0, 2).map(w => w[0]).join("").toUpperCase()}
          </div>
        )}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-3 z-20">
          {project.demo !== "#" && (
            <a
              href={project.demo}
              className="p-3 bg-white/95 rounded-full text-zinc-900 hover:bg-primary hover:text-primary-foreground transition-all duration-200 transform scale-90 group-hover:scale-100"
              aria-label="View demo"
            >
              <Eye className="w-4 h-4" />
            </a>
          )}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/95 rounded-full text-zinc-900 hover:bg-primary hover:text-primary-foreground transition-all duration-200 transform scale-90 group-hover:scale-100"
            aria-label="GitHub Repository"
          >
            <Github className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Card Info */}
      <div className="p-4 flex flex-col flex-grow space-y-2">
        <div className="flex items-center justify-between">
          <span className="px-2.5 py-0.5 bg-primary/10 text-primary text-[10px] rounded-full font-bold uppercase tracking-wider">
            {project.category}
          </span>
        </div>
        <h3 className="text-base md:text-lg font-bold tracking-tight text-zinc-900 line-clamp-1">
          {project.title}
        </h3>
        <p className="text-zinc-600 text-xs leading-relaxed line-clamp-2 flex-grow">
          {project.desc}
        </p>
        
        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 bg-zinc-50 border border-zinc-200/60 text-zinc-500 text-[10px] rounded-md font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  const [activeCategory, setActiveCategory] = React.useState("All");

  const filteredProjects = projectsData.filter((project) => {
    if (activeCategory === "All") return true;
    return project.category === activeCategory;
  });

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-[#fdf8ff] via-[#f9f1ff] to-[#f4ebff] relative overflow-hidden border-b border-zinc-200/50 text-zinc-900"
    >
      {/* Decorative Violet Glow Blur */}
      <div className="absolute bottom-10 right-10 w-72 h-72 rounded-full bg-violet-400/15 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 max-w-[1360px] relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight text-zinc-900 pb-1"
          >
            Featured Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-zinc-500 text-sm md:text-base max-w-2xl mx-auto"
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
                  : "bg-white border border-zinc-200 text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Ongoing Tag */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.8 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12 text-sm text-zinc-500"
        >
          More exciting projects under active development! Stay tuned.
        </motion.div>
      </div>
    </section>
  );
}
