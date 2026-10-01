"use client";

import React, { useState } from "react";
import {
  Code2,
  Terminal,
  Server,
  Database,
  GitBranch,
  Cpu,
  Globe,
  Atom,
  Zap,
  Smartphone,
  Palette,
  Layout,
  Layers,
  Workflow,
  Flame,
  Box,
  Network,
  HardDrive,
  Cloud,
  CloudSun,
  Sliders,
  Monitor,
  Send,
  CheckSquare,
  Coffee,
  Sparkles
} from "lucide-react";
import { SKILL_CATEGORIES } from "@/data/portfolioData";

// Icon mapping helper
const ICON_MAP: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-5 h-5 text-cyan-400" />,
  FileCode: <Code2 className="w-5 h-5 text-blue-400" />,
  Terminal: <Terminal className="w-5 h-5 text-emerald-400" />,
  Coffee: <Coffee className="w-5 h-5 text-amber-500" />,
  Cpu: <Cpu className="w-5 h-5 text-indigo-400" />,
  Globe: <Globe className="w-5 h-5 text-purple-400" />,
  Atom: <Atom className="w-5 h-5 text-cyan-400" />,
  Zap: <Zap className="w-5 h-5 text-sky-400" />,
  Smartphone: <Smartphone className="w-5 h-5 text-emerald-400" />,
  Palette: <Palette className="w-5 h-5 text-teal-400" />,
  Layout: <Layout className="w-5 h-5 text-orange-400" />,
  Layers: <Layers className="w-5 h-5 text-purple-400" />,
  Server: <Server className="w-5 h-5 text-green-400" />,
  Workflow: <Workflow className="w-5 h-5 text-cyan-300" />,
  Flame: <Flame className="w-5 h-5 text-rose-400" />,
  Box: <Box className="w-5 h-5 text-red-400" />,
  Network: <Network className="w-5 h-5 text-blue-400" />,
  Database: <Database className="w-5 h-5 text-emerald-400" />,
  HardDrive: <HardDrive className="w-5 h-5 text-blue-500" />,
  Cloud: <Cloud className="w-5 h-5 text-amber-400" />,
  CloudSun: <CloudSun className="w-5 h-5 text-sky-300" />,
  Sliders: <Sliders className="w-5 h-5 text-indigo-300" />,
  GitBranch: <GitBranch className="w-5 h-5 text-orange-500" />,
  Monitor: <Monitor className="w-5 h-5 text-blue-400" />,
  Send: <Send className="w-5 h-5 text-amber-400" />,
  CheckSquare: <CheckSquare className="w-5 h-5 text-teal-400" />
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="skills" className="py-20 relative z-10 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-cyan-500/30 text-xs font-mono text-cyan-400">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>Tech Capabilities & Proficiency</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technical Skills
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            Core programming languages, modern frontend/backend frameworks, database systems, and deployment workflow tools.
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <button
              key={cat.title}
              onClick={() => setActiveTab(idx)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 ${
                activeTab === idx
                  ? "bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-lg shadow-cyan-500/25 scale-105"
                  : "bg-slate-900/80 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800"
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES[activeTab].skills.map((skill) => (
            <div
              key={skill.name}
              className="group bg-slate-900/70 border border-slate-800 hover:border-cyan-500/40 rounded-2xl p-5 hover:bg-slate-900 transition-all duration-300 shadow-lg hover:shadow-cyan-950/30 flex flex-col justify-between space-y-4"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 group-hover:border-cyan-500/30 transition-colors">
                    {ICON_MAP[skill.icon] || <Code2 className="w-5 h-5 text-cyan-400" />}
                  </div>
                  <span className="font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                    {skill.name}
                  </span>
                </div>
                <span className="text-xs font-mono text-cyan-400/90 font-semibold bg-slate-950 px-2.5 py-1 rounded-md border border-slate-800">
                  {skill.level}%
                </span>
              </div>

              {/* Animated Progress Bar */}
              <div className="w-full bg-slate-950 rounded-full h-2 overflow-hidden border border-slate-800/60 p-0.5">
                <div
                  className="bg-gradient-to-r from-cyan-500 to-indigo-500 h-full rounded-full transition-all duration-1000 ease-out group-hover:from-cyan-400 group-hover:to-indigo-400"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
