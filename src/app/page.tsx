"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Terminal from "./Terminal";
import { FaCalendarAlt, FaLocationArrow, FaWpexplorer } from "react-icons/fa";
import ParticlesComponent from "@/components/Particles";
import { Spotlight } from "@/components/ui/spotlight";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import MagicButton from "@/components/MagicButton";

// Animation variants with optimized durations
const animations = {
  fadeInUp: {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
    transition: { duration: 0.5 } // Faster animations
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    transition: { duration: 0.3 } // Faster animations
  }
};

// Components
const SpotlightGrid = () => (
  <>
    <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen opacity-10" fill="white" />
    <Spotlight className="h-[80vh] w-[50vw] top-10 left-full opacity-10" fill="purple" />
    <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
  </>
);

const Hero = () => (
  <motion.div 
    className="relative min-h-[85vh] flex items-center justify-center overflow-hidden"
    variants={animations.fadeIn}
    initial="hidden"
    animate="visible"
  >
    {/* Background Image */}
    <div className="absolute inset-0 z-0">
      <Image
        src="/main-bg.webp"
        alt="Hero background"
        fill
        className="object-cover opacity-5"
        priority
        quality={85}
      />
    </div>
    
    <SpotlightGrid />
    <div className="flex justify-center relative z-10 w-full">
      <ParticlesComponent />
      <div className="max-w-4xl mx-auto px-4 flex flex-col items-center justify-center text-center">
        <motion.div
          className="space-y-6 text-center"
          variants={animations.fadeInUp}
        >
          <p className="uppercase tracking-widest text-lg text-white-200">Girijesh S</p>
          <TextGenerateEffect
            words="Software Engineer — Web • Blockchain • ML"
            className="text-white-100 text-[40px] md:text-5xl lg:text-6xl"
          />
          <p className="text-white-200 md:tracking-wider text-sm md:text-lg lg:text-2xl">
            Building clean, practical web systems and ML-backed tools. Curious, logical, and obsessed with craft.
          </p>
          <Link href="/about"
           className=" flex justify-center">
            <MagicButton
              title="About Me"
              icon={<FaLocationArrow />}
              position="right"
            />
          </Link>
        </motion.div>
      </div>
    </div>
  </motion.div>
);

const AboutSection = () => (
  <motion.section
    variants={animations.fadeInUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    className="relative py-24 px-4"
  >
    {/* Background image with proper optimization */}
    <div className="absolute inset-0 z-0">
      <Image
        src="/about_computer.webp"
        alt=""
        fill
        className="object-cover opacity-5"
        quality={85}
      />
    </div>

    <div className="max-w-4xl mx-auto relative z-10 grid md:grid-cols-2 gap-12">
      {/* Left: Text */}
      <div className="space-y-6">
        <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent">
          About Me
        </h2>
        <div className="space-y-4">
          <p className="text-lg leading-relaxed text-slate-300 max-w-prose">
            I&apos;m Girijesh — a logical, detail-driven software engineer from Tamil Nadu. I enjoy building full-stack web apps, experimenting with blockchain, and applying ML to real problems.
          </p>
          <p className="text-lg leading-relaxed text-slate-300 max-w-prose">
            My work focuses on practical, well-tested systems and product-minded code. I favour clarity over cleverness, and I build things that are useful and maintainable. More strategic than emotional — I think like an engineer and act like a builder.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 pt-4">
          <Link href="/about">
            <MagicButton title="Learn More" icon={<FaWpexplorer />} position="right" />
          </Link>
          <Link href="/leads">
            <MagicButton title="View Projects" icon={<FaCalendarAlt />} position="right" />
          </Link>
        </div>
      </div>

      {/* Right: Stats or visual element */}
      <div className="flex flex-col justify-center gap-4">
        <div className="p-6 bg-slate-900/50 border border-slate-800 rounded-xl backdrop-blur-sm">
          <h3 className="text-xl font-semibold mb-4 text-white">Quick Facts</h3>
          <div className="space-y-3 text-slate-300">
            <div className="flex items-center gap-2">
              <span className="text-violet-400">▸</span>
              <span>Full-Stack Developer</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-violet-400">▸</span>
              <span>Web • Blockchain • ML</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-violet-400">▸</span>
              <span>Tamil Nadu, India</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </motion.section>
);

const EntryAnimation = ({ onComplete }: { onComplete: () => void }) => (
  <motion.div
    className="fixed inset-0 flex items-center justify-center bg-black z-50"  
    initial={{ opacity: 1 }}
    animate={{ opacity: 0 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 2.5 }} // Reduced to 2.5 seconds per PRD
    onAnimationComplete={onComplete}
  >
    <div className="text-center">
      <h1 className="text-4xl md:text-6xl text-white-200 font-bold mb-4">
        Girijesh S
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-2">
        Software Engineer
      </p>
      <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300">
        Web • Blockchain • ML
      </p>
    </div>
  </motion.div>
);

export default function Home() {
  const [showAnimation, setShowAnimation] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    const hasVisited = localStorage.getItem("hasVisited");
    if (!hasVisited) {
      setShowAnimation(true);
      localStorage.setItem("hasVisited", "true");
      
      // Auto-hide after 3 seconds
      setTimeout(() => setShowAnimation(false), 3000);
    }
  }, []);

  // Prevent hydration mismatch
  if (!mounted) {
    return null;
  }

  return (
    <main className="relative overflow-hidden bg-gradient-to-b from-dark-800 to-purple-400">
      <AnimatePresence>
        {showAnimation && <EntryAnimation onComplete={() => setShowAnimation(false)} />}
      </AnimatePresence>
      <Spotlight />
      <Hero />
      <Terminal />
      <AboutSection />
    </main>
  );
}