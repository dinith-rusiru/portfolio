"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Download, ArrowRight, MapPin, Mail, Phone, Sparkles, Terminal, Code } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolioData";
import HeroCanvas from "./3d/HeroCanvas";

const ROLES = [
  "Full-Stack Developer",
  "Software Engineer",
  "Next.js & React Specialist",
  "Node.js Backend Engineer",
  "SaaS Application Architect"
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    const speed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        if (displayText === currentRole) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        if (displayText === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % ROLES.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-xs font-mono text-cyan-300 shadow-lg shadow-cyan-500/10">
              <Sparkles className="w-4 h-4 text-cyan-400 animate-spin" />
              <span>Full-Stack & Software Engineering</span>
            </div>

            {/* Main Greeting */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
                  {PERSONAL_INFO.name}
                </span>
              </h1>

              {/* Typewriter Effect */}
              <div className="h-10 flex items-center justify-center lg:justify-start gap-2 text-xl sm:text-2xl font-mono text-cyan-400">
                <Terminal className="w-6 h-6 text-indigo-400" />
                <span>{displayText}</span>
                <span className="w-2.5 h-6 bg-cyan-400 animate-pulse inline-block" />
              </div>
            </div>

            {/* Summary Text */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {PERSONAL_INFO.summary}
            </p>

            {/* Location & Contact Meta Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs sm:text-sm font-mono text-slate-400 pt-2">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800 hover:border-cyan-500/50 hover:text-cyan-300 transition-colors"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>{PERSONAL_INFO.email}</span>
              </a>
              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900/60 border border-slate-800 hover:border-cyan-500/50 hover:text-cyan-300 transition-colors"
              >
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>{PERSONAL_INFO.phone}</span>
              </a>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="#projects"
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-400 to-indigo-400 hover:from-cyan-300 hover:to-indigo-300 shadow-xl shadow-cyan-500/25 hover:scale-105 active:scale-95 transition-all duration-300"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-slate-900/80 border border-cyan-500/30 hover:border-cyan-400 hover:bg-slate-800 hover:text-cyan-300 transition-all duration-300 shadow-lg"
              >
                <span>Contact Me</span>
              </a>
            </div>
          </div>

          {/* Right Column: 3D Interactive Canvas & Profile Avatar */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center">
            
            {/* Profile Avatar Frame Overlay */}
            <div className="relative group z-20 mb-6">
              {/* Animated glowing border effect */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-sky-400 opacity-75 blur group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse" />
              
              <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-full overflow-hidden border-4 border-slate-900 shadow-2xl shadow-cyan-500/30">
                <Image
                  src={PERSONAL_INFO.photoUrl}
                  alt={PERSONAL_INFO.name}
                  fill
                  className="object-cover object-top group-hover:scale-110 transition-transform duration-500"
                  priority
                />
              </div>

              {/* Status Badge */}
              <div className="absolute bottom-2 right-2 bg-slate-900/90 backdrop-blur-md border border-cyan-500/40 px-3 py-1 rounded-full text-[11px] font-mono text-cyan-300 shadow-lg flex items-center gap-1.5">
                <Code className="w-3.5 h-3.5 text-cyan-400" />
                <span>Full-Stack Dev</span>
              </div>
            </div>

            {/* 3D R3F Interactive Canvas */}
            <div className="w-full absolute inset-0 z-10 pointer-events-auto opacity-80 lg:opacity-100">
              <HeroCanvas />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
