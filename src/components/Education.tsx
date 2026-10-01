"use client";

import React from "react";
import { GraduationalCap, GraduationCap, Calendar, Award, BookOpen } from "lucide-react";
import { EDUCATION_LIST } from "@/data/portfolioData";

export default function Education() {
  return (
    <section id="education" className="py-20 relative z-10 bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-cyan-500/30 text-xs font-mono text-cyan-400">
            <GraduationCap className="w-4 h-4 text-cyan-400" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Education & Qualifications
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            Degree specialization and academic history in Information Technology and Mathematics.
          </p>
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {EDUCATION_LIST.map((edu, idx) => (
            <div
              key={idx}
              className="group bg-slate-900/70 border border-slate-800 hover:border-cyan-500/40 rounded-3xl p-6 sm:p-8 transition-all duration-300 shadow-xl hover:shadow-cyan-950/40 space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                
                {/* Institution Icon & Period */}
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 text-cyan-400 group-hover:scale-110 transition-transform">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono text-cyan-400 font-semibold bg-slate-950 px-3 py-1 rounded-full border border-slate-800 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {edu.period}
                  </span>
                </div>

                {/* Degree & Institution */}
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {edu.degree}
                  </h3>
                  <p className="text-sm font-medium text-slate-400 mt-1">
                    {edu.institution}
                  </p>
                </div>

                {/* Details */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/80 pt-3">
                  {edu.details}
                </p>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
