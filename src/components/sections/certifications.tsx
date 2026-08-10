"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ExternalLink, ShieldCheck, Award } from "lucide-react";

const certificationsData = [
  {
    title: "Deloitte Certified Virtual program",
    issuer: "Deloitte",
    date: "June 2025",
    skills: ["Python", "Data Structures", "Software Development"],
    id: "ouX4BZmYrnE8iq6hP",
    link: "#",
  },
  {
    title: "Web Development with HTML5, CSS3, and JavaScript",
    issuer: "edX",
    date: "August 2024",
    skills: ["JavaScript", "HTML5", "CSS3"],
    id: "5b87de7794c547229339a133798c08f1",
    link: "#",
  },
  {
    title: "Office Master Certification on PowerBI",
    issuer: "Office Master",
    date: "July 2024",
    skills: ["Microsoft Power BI", "Data Visualization", "Data Analysis", "Dashboard Design"],
    id: "OM-PBI-2024-91",
    link: "#",
  },
  {
    title: "Certificate for devops on aws: Code Build and Test",
    issuer: "AWS / Microsoft",
    date: "September 2023",
    skills: ["Azure Services", "Cloud Computing", "AWS CodeBuild", "DevOps Pipelines"],
    id: "AWS-DEVOPS-3921",
    link: "#",
  },
  {
    title: "Career Essentials in Software Development",
    issuer: "Microsoft and LinkedIn",
    date: "February 2024",
    skills: ["Software Development", "Data Structures", "Algorithms", "Problem Solving"],
    id: "5a4a7d7f1d44c1a49b41a301c2ea3f6a6d74c396f3beef68358bb98895655ca5",
    link: "#",
  },
  {
    title: "Python Programming Certification",
    issuer: "BitLabs",
    date: "November 2023",
    skills: ["Python", "Containerization", "Algorithms"],
    id: "gROb7za4MV",
    link: "#",
  },
  {
    title: "Full Stack Web Development",
    issuer: "Udemy",
    date: "Jan 2025 - Present",
    skills: ["HTML/CSS", "JavaScript", "Node.js", "React", "MongoDB"],
    id: "UD-FSWD-9912",
    link: "#",
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="py-20">
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
            Certifications & Achievements
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto"
          >
            Professional credentials validating my technical competency, knowledge, and commitment to learning
          </motion.p>
        </div>

        {/* Info Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
          {[
            { label: "Total Certifications", val: "7+" },
            { label: "Cloud Platforms", val: "AWS / Azure" },
            { label: "Verified Skills", val: "20+" },
            { label: "Status", val: "100% Active" },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-card border border-border/80 p-4 md:p-6 rounded-2xl text-center shadow-sm"
            >
              <div className="text-primary text-xl md:text-2xl font-extrabold mb-1">{item.val}</div>
              <div className="text-muted-foreground text-[10px] md:text-xs font-semibold uppercase tracking-wider">{item.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {certificationsData.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-card border border-border/80 p-6 rounded-3xl flex flex-col justify-between h-full glow-card shadow-sm"
            >
              {/* Card Top */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-9 h-9 bg-primary/10 rounded-xl flex items-center justify-center">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <span className="flex items-center gap-1 text-[11px] font-bold text-green-600 bg-green-500/10 px-2.5 py-0.5 rounded-full dark:text-green-400">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Verified
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-extrabold text-sm md:text-base leading-snug text-foreground/95">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-muted-foreground font-semibold">
                    Issued by <span className="text-primary">{cert.issuer}</span> • {cert.date}
                  </p>
                </div>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {cert.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-0.5 bg-muted text-muted-foreground text-[10px] rounded-md font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Bottom / Footer Actions */}
              <div className="pt-6 mt-6 border-t border-border/40 flex items-center justify-between text-xs">
                {cert.id && (
                  <span className="text-muted-foreground font-mono">
                    ID: {cert.id}
                  </span>
                )}
                <a
                  href={cert.link}
                  className="flex items-center gap-1.5 text-primary hover:text-primary-hover font-bold tracking-tight transition-colors cursor-pointer"
                >
                  Verify Certificate
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
