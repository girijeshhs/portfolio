"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Terminal from "./Terminal";
import { FaLocationArrow, FaArrowDown } from "react-icons/fa";
import ParticlesComponent from "@/components/Particles";
import { Spotlight } from "@/components/ui/spotlight";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import MagicButton from "@/components/MagicButton";
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
    className="pb-16 pt-20 relative min-h-[85vh] flex items-center"
    variants={animations.fadeIn}
    initial="hidden"
    animate="visible"
  >
    <SpotlightGrid />
    
    {/* Subtle gradient glow behind hero content */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />
    
    <div className="flex justify-center relative z-10 w-full">
      <ParticlesComponent />
      <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[55vw] flex flex-col items-center justify-center">
        <motion.div
          className="space-y-5 text-center"
          variants={animations.staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Name badge */}
          <motion.div variants={animations.fadeInUp}>
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 text-xs uppercase tracking-[0.2em] text-purple-300 border border-purple-500/20">
              {personalInfo.name}
            </span>
          </motion.div>
          
          {/* Main headline */}
          <motion.div variants={animations.fadeInUp} className="relative">
            <TextGenerateEffect
              words={`${personalInfo.title} — ${personalInfo.tagline}`}
              className="text-white-100 text-[32px] md:text-4xl lg:text-5xl font-bold leading-tight"
            />
          </motion.div>
          
          {/* Bio */}
          <motion.p 
            variants={animations.fadeInUp}
            className="text-gray-400 text-sm md:text-base max-w-xl mx-auto leading-relaxed"
          >
            {personalInfo.bio}
          </motion.p>
          
          {/* CTA buttons */}
          <motion.div 
            variants={animations.fadeInUp}
            className="flex gap-4 justify-center flex-wrap pt-2"
          >
            <a href="#projects">
              <MagicButton title="View Projects" icon={<FaLocationArrow />} position="right" />
            </a>
            <a href="#contact">
              <MagicButton title="Get In Touch" icon={<FaLocationArrow />} position="right" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
    
    {/* Scroll indicator */}
    <motion.div 
      className="absolute bottom-6 left-1/2 -translate-x-1/2"
      animate={{ y: [0, 8, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    >
      <a href="#terminal-skills" className="flex flex-col items-center gap-1 text-gray-500 hover:text-purple-400 transition-colors">
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
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
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
          Explore My <span className="text-purple-400">Skills</span>
        </h2>
        <p className="text-gray-500 text-sm">
          Interactive terminal — type commands to see my tech stack
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6 items-start">
        {/* Terminal on the Left */}
        <div className="flex-1 w-full">
          <Terminal />
        </div>
        
        {/* Prompts on the Right */}
        <div className="lg:w-48 w-full p-4 rounded-lg bg-[#0a0a0a] border border-gray-800">
          <SkillsSection />
        </div>
      </div>
    </div>
  </section>
);

const EntryAnimation = ({ onComplete }: { onComplete: () => void }) => (
  <motion.div
    className="fixed inset-0 flex items-center justify-center bg-black z-50"  
    initial={{ opacity: 1 }}
    animate={{ opacity: 0 }}
    transition={{ duration: 2, ease: "easeInOut" }}
    onAnimationComplete={onComplete}
  >
    <div className="text-center space-y-4">
      <motion.h1 
        className="text-4xl md:text-6xl text-white-200 font-bold gradient-text-glow"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {personalInfo.name}
      </motion.h1>
      <motion.p 
        className="text-lg sm:text-xl md:text-2xl text-gray-300"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {personalInfo.title}
      </motion.p>
      <motion.p 
        className="text-base sm:text-lg md:text-xl text-purple-400"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {personalInfo.tagline}
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
