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
  <div className="w-full py-8 flex justify-center">
    <div className="section-divider-glow w-1/3 max-w-md" />
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
    className="pb-32 pt-20 relative min-h-screen flex items-center"
    variants={animations.fadeIn}
    initial="hidden"
    animate="visible"
  >
    <SpotlightGrid />
    
    {/* Subtle gradient glow behind hero content */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />
    
    <div className="flex justify-center relative z-10 w-full">
      <ParticlesComponent />
      <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
        <motion.div
          className="space-y-8 text-center"
          variants={animations.staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Name badge with glow */}
          <motion.div variants={animations.fadeInUp}>
            <span className="inline-block px-6 py-2 rounded-full glass-light text-sm uppercase tracking-[0.3em] text-purple-300 border border-purple-500/20">
              {personalInfo.name}
            </span>
          </motion.div>
          
          {/* Main headline with enhanced styling */}
          <motion.div variants={animations.fadeInUp} className="relative">
            <TextGenerateEffect
              words={`${personalInfo.title} — ${personalInfo.tagline}`}
              className="text-white-100 text-[36px] md:text-5xl lg:text-6xl font-bold leading-tight text-glow-subtle"
            />
            {/* Animated underline accent */}
            <motion.div 
              className="mx-auto mt-6 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-full"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: "40%", opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.8, ease: "easeOut" }}
            />
          </motion.div>
          
          {/* Bio with better readability */}
          <motion.p 
            variants={animations.fadeInUp}
            className="text-white-200 md:tracking-wide text-base md:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            {personalInfo.bio}
          </motion.p>
          
          {/* Premium CTA buttons */}
          <motion.div 
            variants={animations.fadeInUp}
            className="flex gap-6 justify-center flex-wrap pt-4"
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
      className="absolute bottom-10 left-1/2 -translate-x-1/2"
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    >
      <a href="#terminal-skills" className="flex flex-col items-center gap-2 text-white-200/50 hover:text-purple-400 transition-colors">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <FaArrowDown className="text-sm" />
      </a>
    </motion.div>
  </motion.div>
);

// Combined Terminal + Skills Section (Side by Side)
const TerminalSkillsSection = () => (
  <motion.section
    id="terminal-skills"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    className="relative py-16"
  >
    <div className="max-w-6xl mx-auto px-6">
      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Explore My <span className="text-purple-400">Skills</span>
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          An interactive terminal to discover my technical expertise. Type commands to explore.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-5 gap-6 items-start">
        {/* Terminal on the Left - Takes more space */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="lg:col-span-3"
        >
          <Terminal />
        </motion.div>
        
        {/* Command Guide on the Right */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
          className="lg:col-span-2"
        >
          <SkillsSection />
        </motion.div>
      </div>
    </div>
  </motion.section>
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
