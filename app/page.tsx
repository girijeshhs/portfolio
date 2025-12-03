"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Terminal from "./Terminal";
import { FaLocationArrow } from "react-icons/fa";
import ParticlesComponent from "@/components/Particles";
import { Spotlight } from "@/components/ui/spotlight";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import MagicButton from "@/components/MagicButton";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ContactSection from "@/components/sections/ContactSection";
import { personalInfo } from "@/data/portfolio";

// Animation variants
const animations = {
  fadeInUp: {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
    transition: { duration: 0.8 }
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    transition: { duration: 0.5 }
  }
};

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
    className="pb-20 pt-10 relative min-h-screen flex items-center"
    variants={animations.fadeIn}
    initial="hidden"
    animate="visible"
  >
    <SpotlightGrid />
    <div className="flex justify-center relative z-10 w-full">
      <ParticlesComponent />
      <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
        <motion.div
          className="space-y-6 text-center"
          variants={animations.fadeInUp}
        >
          <p className="uppercase tracking-widest text-lg text-white-200">{personalInfo.name}</p>
          <TextGenerateEffect
            words={`${personalInfo.title} — ${personalInfo.tagline}`}
            className="text-white-100 text-[40px] md:text-5xl lg:text-6xl"
          />
          <p className="text-white-200 md:tracking-wider text-sm md:text-lg lg:text-2xl">
            {personalInfo.bio}
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="#projects">
              <MagicButton title="View Projects" icon={<FaLocationArrow />} position="right" />
            </a>
            <a href="#contact">
              <MagicButton title="Get In Touch" icon={<FaLocationArrow />} position="right" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  </motion.div>
);

const AboutSection = () => (
  <motion.section
    id="about"
    variants={animations.fadeInUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="relative text-white py-16 backdrop-blur-sm"
  >
    <div className="max-w-3xl mx-auto px-6 space-y-8">
      <h2 className="text-4xl text-white font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent text-center">
        About Me
      </h2>
      <div className="space-y-4 text-center">
        <p className="text-lg leading-relaxed text-white-200">
          {personalInfo.bio}
        </p>
        <p className="text-lg leading-relaxed text-white-200">
          {personalInfo.extended_bio}
        </p>
      </div>
    </div>
  </motion.section>
);

const EntryAnimation = ({ onComplete }: { onComplete: () => void }) => (
  <motion.div
    className="fixed inset-0 flex items-center justify-center bg-black z-50"  
    initial={{ opacity: 1 }}
    animate={{ opacity: 0 }}
    transition={{ duration: 2 }}
    onAnimationComplete={onComplete}
  >
    <div className="text-center">
      <h1 className="text-4xl md:text-6xl text-white-200 font-bold mb-4">
        {personalInfo.name}
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-2">
        {personalInfo.title}
      </p>
      <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300">
        {personalInfo.tagline}
      </p>
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
      <main className="relative overflow-hidden bg-gradient-to-b from-black via-black-100 to-black min-h-screen" />
    );
  }

  return (
    <main className="relative overflow-hidden bg-gradient-to-b from-black via-black-100 to-black">
      {showAnimation && <EntryAnimation onComplete={() => setShowAnimation(false)} />}
      <Hero />
      <AboutSection />
      <Terminal />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}