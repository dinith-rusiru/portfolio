"use client";

import React from "react";
import { Briefcase, Calendar, CheckCircle2, Building2, ChevronRight, Award } from "lucide-react";
import { EXPERIENCES } from "@/data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-cyan-500/30 text-xs font-mono text-cyan-400">
            <Briefcase className="w-4 h-4 text-cyan-400" />
            <span>Career & Industry Experience</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Work Experience
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            Hands-on professional software engineering experience across full-stack applications, SaaS platforms, and Agile team setups.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-slate-800/80 md:mx-auto md:max-w-4xl pl-6 md:pl-8 space-y-12">
          {EXPERIENCES.map((exp, index) => (
            <div key={exp.id} className="relative group">
              
              {/* Timeline Marker Dot */}
              <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-6 h-6 rounded-full bg-slate-950 border-2 border-cyan-400 flex items-center justify-center group-hover:scale-125 group-hover:border-cyan-300 transition-transform duration-300 shadow-lg shadow-cyan-500/50">
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              </div>

              {/* Card Body */}
              <div className="bg-slate-900/70 backdrop-blur-md border border-slate-800 group-hover:border-cyan-500/40 rounded-2xl p-6 sm:p-8 transition-all duration-300 shadow-xl group-hover:shadow-cyan-950/40 space-y-4">
                
                {/* Role Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800/80 pb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors flex items-center gap-2">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-cyan-400 font-medium mt-1">
                      <Building2 className="w-4 h-4" />
                      <span>{exp.company}</span>
                      <span className="text-slate-600">•</span>
                      <span className="text-slate-400 text-xs px-2 py-0.5 rounded-full bg-slate-800">{exp.type}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-slate-950/60 px-3 py-1.5 rounded-xl border border-slate-800/80 w-fit">
                    <Calendar className="w-4 h-4 text-cyan-400" />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                {/* Bullet Points */}
                <ul className="space-y-3 pt-2">
                  {exp.highlights.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
