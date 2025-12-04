"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Terminal from "./Terminal";
import { FaArrowDown } from "react-icons/fa";
import ParticlesComponent from "@/components/Particles";
import { Spotlight } from "@/components/ui/spotlight";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";
import { personalInfo } from "@/data/portfolio";

// Enhanced Animation variants
const animations = {
  fadeInUp: {
    hidden: { y: 40, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  },
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  },
  scaleIn: {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  }
};

// Section Divider Component
const SectionDivider = () => (
  <div className="w-full py-4 flex justify-center">
    <div className="w-16 h-px bg-gray-800" />
  </div>
);

// Components
const SpotlightGrid = () => (
  <>
    <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
    <Spotlight className="h-[80vh] w-[50vw] top-10 left-full" fill="purple" />
    <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
    <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
  </>
);

const Hero = () => (
  <motion.div 
    className="pb-8 pt-20 relative min-h-[90vh] flex items-center"
    variants={animations.fadeIn}
    initial="hidden"
    animate="visible"
  >
    <SpotlightGrid />
    
    {/* Terminal-style grid background */}
    <div className="absolute inset-0 opacity-30" style={{
      backgroundImage: `linear-gradient(rgba(34,197,94,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,0.03) 1px, transparent 1px)`,
      backgroundSize: '20px 20px'
    }} />
    
    <div className="flex justify-center relative z-10 w-full">
      <ParticlesComponent />
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center justify-center">
        <motion.div
          className="space-y-6 text-center w-full"
          variants={animations.staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* ASCII Art Style Header */}
          <motion.div variants={animations.fadeInUp} className="font-mono text-[10px] md:text-xs text-green-500/60 leading-tight hidden md:block">
            <pre>{`
  ██████╗ ██╗██████╗ ██╗     ██╗███████╗███████╗██╗  ██╗
 ██╔════╝ ██║██╔══██╗██║     ██║██╔════╝██╔════╝██║  ██║
 ██║  ███╗██║██████╔╝██║     ██║█████╗  ███████╗███████║
 ██║   ██║██║██╔══██╗██║██   ██║██╔══╝  ╚════██║██╔══██║
 ╚██████╔╝██║██║  ██║██║╚█████╔╝███████╗███████║██║  ██║
  ╚═════╝ ╚═╝╚═╝  ╚═╝╚═╝ ╚════╝ ╚══════╝╚══════╝╚═╝  ╚═╝
            `}</pre>
          </motion.div>

          {/* Mobile name */}
          <motion.div variants={animations.fadeInUp} className="md:hidden">
            <span className="text-3xl font-bold text-green-400 font-mono">GIRIJESH</span>
          </motion.div>
          
          {/* Terminal-style intro */}
          <motion.div variants={animations.fadeInUp} className="font-mono text-left max-w-xl mx-auto bg-[#0d1117] border border-gray-800 rounded-lg p-4 text-sm">
            <div className="flex items-center gap-2 mb-3 pb-2 border-b border-gray-800">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
              </div>
              <span className="text-gray-500 text-xs">~/girijesh/about</span>
            </div>
            <div className="space-y-1">
              <p><span className="text-yellow-400">$</span> <span className="text-cyan-400">whoami</span></p>
              <p className="text-green-400">→ {personalInfo.title}</p>
              <p className="text-gray-400 pl-2">{personalInfo.tagline}</p>
              <p className="mt-2"><span className="text-yellow-400">$</span> <span className="text-cyan-400">cat</span> <span className="text-gray-400">bio.txt</span></p>
              <p className="text-gray-300 pl-2 text-xs leading-relaxed">{personalInfo.bio}</p>
            </div>
          </motion.div>
          
          {/* Stats row */}
          <motion.div 
            variants={animations.fadeInUp}
            className="flex justify-center gap-6 font-mono text-xs"
          >
            <div className="text-center">
              <div className="text-green-400 text-lg font-bold">6+</div>
              <div className="text-gray-500">projects</div>
            </div>
            <div className="w-px bg-gray-800"></div>
            <div className="text-center">
              <div className="text-cyan-400 text-lg font-bold">5+</div>
              <div className="text-gray-500">tech stacks</div>
            </div>
            <div className="w-px bg-gray-800"></div>
            <div className="text-center">
              <div className="text-yellow-400 text-lg font-bold">∞</div>
              <div className="text-gray-500">curiosity</div>
            </div>
          </motion.div>
          
          {/* CTA buttons */}
          <motion.div 
            variants={animations.fadeInUp}
            className="flex gap-4 justify-center flex-wrap pt-2"
          >
            <a href="#projects" className="px-6 py-2.5 bg-green-500/10 border border-green-500/50 rounded text-green-400 font-mono text-sm hover:bg-green-500/20 transition-all">
              <span className="text-yellow-400">$</span> view_projects
            </a>
            <a href="#contact" className="px-6 py-2.5 bg-cyan-500/10 border border-cyan-500/50 rounded text-cyan-400 font-mono text-sm hover:bg-cyan-500/20 transition-all">
              <span className="text-yellow-400">$</span> contact_me
            </a>
          </motion.div>

          {/* Tech icons row */}
          <motion.div 
            variants={animations.fadeInUp}
            className="flex justify-center gap-4 pt-4"
          >
            {["⚛️", "🔷", "🐍", "⛓️", "🧠", "🐳"].map((icon, i) => (
              <span key={i} className="text-xl opacity-50 hover:opacity-100 transition-opacity cursor-default" title="Tech">
                {icon}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
    
    {/* Scroll indicator */}
    <motion.div 
      className="absolute bottom-4 left-1/2 -translate-x-1/2"
      animate={{ y: [0, 8, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    >
      <a href="#terminal-skills" className="flex flex-col items-center gap-1 text-gray-600 hover:text-green-400 transition-colors font-mono">
        <span className="text-[10px] uppercase tracking-widest">scroll</span>
        <FaArrowDown className="text-xs" />
      </a>
    </motion.div>
  </motion.div>
);

// Combined Terminal + Skills Section (Side by Side)
const TerminalSkillsSection = () => (
  <section id="terminal-skills" className="py-12">
    <div className="max-w-5xl mx-auto px-6">
      {/* Section Header */}
      <div className="text-center mb-8 font-mono">
        <h2 className="text-xl md:text-2xl font-bold mb-2">
          <span className="text-yellow-400">$</span> <span className="text-cyan-400">explore</span> <span className="text-green-400">--skills</span>
        </h2>
        <p className="text-gray-500 text-xs">
          interactive terminal — type commands to discover tech stack
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 items-start">
        {/* Terminal on the Left */}
        <div className="flex-1 w-full">
          <Terminal />
        </div>
        
        {/* Prompts on the Right */}
        <div className="lg:w-44 w-full p-3 rounded-lg bg-[#0d1117] border border-gray-800">
          <SkillsSection />
        </div>
      </div>
    </div>
  </section>
);

const EntryAnimation = ({ onComplete }: { onComplete: () => void }) => (
  <motion.div
    className="fixed inset-0 flex items-center justify-center bg-[#0a0a0a] z-50"  
    initial={{ opacity: 1 }}
    animate={{ opacity: 0 }}
    transition={{ duration: 1.5, ease: "easeInOut" }}
    onAnimationComplete={onComplete}
  >
    <div className="text-center space-y-3 font-mono">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="text-green-500 text-sm"
      >
        &gt; initializing...
      </motion.div>
      <motion.h1 
        className="text-3xl md:text-5xl text-green-400 font-bold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        {personalInfo.name}
      </motion.h1>
      <motion.p 
        className="text-base md:text-lg text-cyan-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.5 }}
      >
        {personalInfo.title}
      </motion.p>
      <motion.p 
        className="text-sm text-yellow-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.7 }}
      >
        [{personalInfo.tagline}]
      </motion.p>
    </div>
  </motion.div>
);

export default function Home() {
  const [showAnimation, setShowAnimation] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const hasVisited = localStorage.getItem("hasVisited");
    if (!hasVisited) {
      setShowAnimation(true);
      localStorage.setItem("hasVisited", "true");
    } else {
      setShowAnimation(false);
    }
  }, []);

  if (!mounted) {
    return (
      <main className="relative overflow-hidden bg-black min-h-screen" />
    );
  }

  return (
    <main className="relative overflow-hidden bg-black">
      {showAnimation && <EntryAnimation onComplete={() => setShowAnimation(false)} />}
      
      <Hero />
      <SectionDivider />
      
      <TerminalSkillsSection />
      <SectionDivider />
      
      <ProjectsSection />
      <SectionDivider />
      
      <ContactSection />
    </main>
  );
}
