import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/3d/ParticleBackground";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-slate-950 text-slate-100 overflow-hidden selection:bg-cyan-500 selection:text-slate-950">
      {/* Background Interactive Particle Field */}
      <ParticleBackground />

      {/* Floating Header Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <div className="relative z-10 space-y-12">
        <Hero />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
