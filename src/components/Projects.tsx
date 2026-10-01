"use client";

import React, { useState } from "react";
import { FolderGit2, ExternalLink, Github, Sparkles, CheckCircle2, ChevronRight, Layers } from "lucide-react";
import { PROJECTS, Project } from "@/data/portfolioData";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "AI / Mobile", "Web Application", "SaaS / Full-Stack"];

  const filteredProjects =
    selectedCategory === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-cyan-500/30 text-xs font-mono text-cyan-400">
            <FolderGit2 className="w-4 h-4 text-cyan-400" />
            <span>Portfolio Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Featured Projects
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            Real-world full-stack web applications, AI-integrated mobile solutions, and enterprise SaaS platforms built using modern engineering standards.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                selectedCategory === cat
                  ? "bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/20"
                  : "bg-slate-900/60 text-slate-400 hover:text-white border border-slate-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-slate-900/80 backdrop-blur-md border border-slate-800 hover:border-cyan-500/50 rounded-3xl p-6 sm:p-8 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-cyan-950/50 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                
                {/* Header Tag & Title */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-xs font-mono text-cyan-400 font-semibold uppercase tracking-wider bg-slate-950 px-3 py-1 rounded-full border border-slate-800 inline-block mb-2">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-indigo-400 font-mono mt-0.5">
                      {project.subtitle}
                    </p>
                  </div>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-colors"
                    title="View GitHub Repository"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed">
                  {project.description}
                </p>

                {/* Key Highlights */}
                <div className="space-y-2 pt-2 border-t border-slate-800/80">
                  <span className="text-xs font-semibold text-slate-400 font-mono flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                    Key Architecture & Features:
                  </span>
                  <ul className="space-y-1.5">
                    {project.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Technologies Badges */}
              <div className="pt-4 border-t border-slate-800/80">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg bg-slate-950 border border-slate-800 text-[11px] font-mono text-cyan-300/90 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
