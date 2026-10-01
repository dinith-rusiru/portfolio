"use client";

import React from "react";
import { ArrowUp, Code2, Heart } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-10 border-t border-slate-800/80 bg-slate-950/90 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand */}
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 text-slate-950">
            <Code2 className="w-5 h-5 text-slate-950" />
          </div>
          <div>
            <span className="text-base font-bold text-white block">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-xs font-mono text-slate-400">
              Full-Stack Developer & Software Engineer
            </span>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-xs text-slate-400 text-center font-mono">
          © {new Date().getFullYear()} {PERSONAL_INFO.name}. Built with Next.js, Tailwind CSS & Three.js.
        </div>

        {/* Back to top */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 hover:border-cyan-500/40 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors shadow-lg"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-4 h-4" />
        </button>

      </div>
    </footer>
  );
}
