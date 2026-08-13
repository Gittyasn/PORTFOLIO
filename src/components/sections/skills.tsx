"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Monitor,
  Server,
  Hammer,
  LineChart,
  Atom,
  Triangle,
  Palette,
  Layers,
  Heart,
  Terminal,
  Code2,
  Cpu,
  FileCode,
  Database,
  GitBranch,
  PieChart,
  Search,
  Zap,
  Braces,
  BarChart3,
  CheckCircle2
} from "lucide-react";
import { Github } from "@/components/icons";

// Skill Icons mapping helper
function getSkillIcon(name: string) {
  const cleanName = name.toLowerCase().trim();
  if (cleanName.includes("react")) {
    return <Atom className="w-4 h-4 text-cyan-400 animate-[spin_12s_linear_infinite]" />;
  }
  if (cleanName.includes("next.js") || cleanName.includes("nextjs")) {
    return <Triangle className="w-4 h-4 rotate-180 fill-current text-foreground" />;
  }
  if (cleanName.includes("typescript")) {
    return <Braces className="w-4 h-4 text-blue-400" />;
  }
  if (cleanName.includes("tailwind")) {
    return <Palette className="w-4 h-4 text-teal-400" />;
  }
  if (cleanName.includes("bootstrap")) {
    return <Layers className="w-4 h-4 text-purple-500" />;
  }
  if (cleanName.includes("responsive")) {
    return <Heart className="w-4 h-4 text-emerald-500 fill-emerald-500/20" />;
  }
  if (cleanName.includes("python")) {
    return <Terminal className="w-4 h-4 text-yellow-500" />;
  }
  if (cleanName.includes("java")) {
    return <Cpu className="w-4 h-4 text-orange-500" />;
  }
  if (cleanName === "c") {
    return <Code2 className="w-4 h-4 text-sky-500" />;
  }
  if (cleanName.includes("c++")) {
    return <Code2 className="w-4 h-4 text-blue-500" />;
  }
  if (cleanName.includes("html")) {
    return <FileCode className="w-4 h-4 text-orange-600" />;
  }
  if (cleanName.includes("css")) {
    return <FileCode className="w-4 h-4 text-blue-600" />;
  }
  if (cleanName.includes("javascript") || cleanName.includes("js")) {
    return <FileCode className="w-4 h-4 text-yellow-400" />;
  }
  if (cleanName.includes("node")) {
    return <Cpu className="w-4 h-4 text-emerald-500" />;
  }
  if (cleanName.includes("express")) {
    return <Zap className="w-4 h-4 text-yellow-500 fill-yellow-500/20" />;
  }
  if (cleanName.includes("mongo")) {
    return <Database className="w-4 h-4 text-emerald-600" />;
  }
  if (cleanName.includes("sql") || cleanName === "postgres" || cleanName.includes("postgresql")) {
    return <Database className="w-4 h-4 text-cyan-500" />;
  }
  if (cleanName.includes("supabase")) {
    return <Zap className="w-4 h-4 text-emerald-400 fill-emerald-400/20" />;
  }
  if (cleanName.includes("code")) {
    return <Monitor className="w-4 h-4 text-sky-500" />;
  }
  if (cleanName === "git") {
    return <GitBranch className="w-4 h-4 text-orange-500" />;
  }
  if (cleanName.includes("github")) {
    return <Github className="w-4 h-4 text-zinc-400" />;
  }
  if (cleanName.includes("pandas")) {
    return <LineChart className="w-4 h-4 text-purple-400" />;
  }
  if (cleanName.includes("numpy")) {
    return <Layers className="w-4 h-4 text-blue-400" />;
  }
  if (cleanName.includes("power bi") || cleanName.includes("powerbi")) {
    return <BarChart3 className="w-4 h-4 text-amber-500" />;
  }
  if (cleanName.includes("visualization")) {
    return <PieChart className="w-4 h-4 text-rose-400" />;
  }
  if (cleanName.includes("analysis") || cleanName.includes("analytics")) {
    return <Search className="w-4 h-4 text-emerald-400" />;
  }
  return <CheckCircle2 className="w-4 h-4 text-primary" />;
}

const skillGroups = [
  {
    title: "Programming Languages",
    icon: Monitor,
    skills: ["C", "C++", "Python", "Java (Basic)"],
    color: "bg-blue-600 text-white",
  },
  {
    title: "Web Technologies",
    icon: Server,
    skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Node.js", "Express.js", "Bootstrap"],
    color: "bg-green-600 text-white",
  },
  {
    title: "Databases & Tools",
    icon: Hammer,
    skills: ["MongoDB", "SQL", "Supabase", "Git", "GitHub", "VS Code"],
    color: "bg-purple-600 text-white",
  },
  {
    title: "Data Science & Analytics",
    icon: LineChart,
    skills: ["Python", "SQL", "Power BI", "Data Visualization", "Data Analysis"],
    color: "bg-amber-600 text-white",
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
      className="py-20 bg-gradient-to-br from-[#fdf8ff] via-[#f9f1ff] to-[#f4ebff] relative overflow-hidden border-b border-zinc-200/50 text-zinc-900"
    >
      {/* Decorative Violet Glow Blur */}
      <div className="absolute bottom-10 right-10 w-72 h-72 rounded-full bg-violet-400/15 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-10 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent font-poppins pb-1"
          >
            Skills & Expertise
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-zinc-500 text-sm md:text-base max-w-2xl mx-auto"
          >
            A comprehensive overview of my technical capabilities, languages, tools, and practices
          </motion.p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
          {[
            { label: "Projects Completed", val: "5+", emoji: "🚀" },
            { label: "Technologies Used", val: "15+", emoji: "💻" },
            { label: "Years Programming", val: "3+", emoji: "📅" },
            { label: "Code Quality", val: "80%", emoji: "⭐" },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-white border border-zinc-200/80 p-5 rounded-2xl text-center shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="text-3xl mb-2">{stat.emoji}</div>
              <div className="text-zinc-900 text-xl md:text-2xl font-extrabold mb-1">{stat.val}</div>
              <div className="text-zinc-500 text-[10px] md:text-xs font-semibold uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {skillGroups.map((group, groupIdx) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: groupIdx * 0.1 }}
                className="bg-white border border-zinc-200/80 p-6 md:p-8 rounded-3xl shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div>
                  {/* Header box style */}
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${group.color} shadow-md`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-extrabold text-base md:text-lg text-zinc-900">
                      {group.title}
                    </h3>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-2 gap-3">
                    {group.skills.map((skill) => (
                      <div
                        key={skill}
                        className="flex items-center gap-2.5 p-3 md:p-3.5 bg-zinc-50 hover:bg-primary/5 border border-zinc-200/50 hover:border-primary/20 text-xs md:text-sm font-semibold rounded-2xl text-zinc-700 hover:text-zinc-900 transition-all duration-200 shadow-sm"
                      >
                        <div className="flex-shrink-0">
                          {getSkillIcon(skill)}
                        </div>
                        <span className="truncate">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Competencies */}
        <div className="mt-16 bg-white border border-zinc-200/80 p-8 rounded-3xl shadow-md">
          <h3 className="font-extrabold text-lg md:text-xl mb-6 text-zinc-900 border-b border-zinc-100 pb-3">
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
                className="flex items-center gap-2.5 text-xs md:text-sm text-zinc-600"
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
