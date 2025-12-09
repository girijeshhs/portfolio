"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

const achievements = [
  {
    id: 1,
    title: "3rd Prize Winner – Creonix Hackathon",
    category: "Competition",
    year: "2024",
    description: "Built a working prototype under pressure and secured 3rd place among competing engineering teams.",
    highlight: "Competed against 50+ teams",
    skills: ["Prototyping", "Team Collaboration", "Problem Solving"],
    impact: "Top 3 Finish",
    image: "/achievements-image/achievement-image 1.png"
  },
  {
    id: 2,
    title: "Full Stack Developer Intern – Plant Green",
    category: "Experience",
    year: "2023",
    description: "Delivered core LMS + web features with React, Node.js, APIs, and database, boosting usability and scalability.",
    highlight: "6-month internship",
    skills: ["React", "Node.js", "Database Design", "API Development"],
    impact: "Production Impact",
    image: "/achievements-image/achievement-image 2.png"
  },
  {
    id: 3,
    title: "Event Coordinator – AI Zypher",
    category: "Leadership",
    year: "2023",
    description: "Led the 'Code Auction' event end-to-end: logistics, engagement, and execution – strong leadership + communication flex.",
    highlight: "Managed 100+ attendees",
    skills: ["Event Management", "Communication", "Leadership"],
    impact: "100+ Attendees",
    image: "/achievements-image/achievement-image 3.jpg"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

export default function AchievementsSection() {
  const [terminalLines, setTerminalLines] = useState<string[]>([]);
  
  useEffect(() => {
        const lines = [
          "$ initializing achievement_module...",
          "> loading credentials...",
          "[OK] user authenticated",
          "> scanning timeline...",
          "[INFO] 3 achievements detected",
          "> calculating impact score...",
          "[OK] metrics compiled",
          "> rendering visualization...",
          "[SUCCESS] timeline rendered",
          "$ awaiting next command...",
          "",
          "$ cat achievements.log",
          "> 2024: Competition victory",
          "> 2023: Production experience",
          "> 2023: Leadership proven",
          "[INFO] total impact: 100+",
          "",
          "$ git log --oneline",
          "a3c7f2e feat: hackathon prototype",
          "b91e4d5 fix: lms optimization",
          "c5d8a12 docs: event coordination",
          "",
          "$ system status",
          "[✓] skills: up to date",
          "[✓] projects: deployed",
          "[✓] network: connected",
          "",
        ];    let index = 0;
    const interval = setInterval(() => {
      setTerminalLines(prev => {
        const next = [...prev, lines[index % lines.length]];
        if (next.length > 12) next.shift();
        return next;
      });
      index++;
    }, 800);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="achievements"
      className="py-20 relative overflow-hidden bg-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="mb-16">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white font-mono mb-3">
              <span className="text-purple-400">~/</span>achievements
            </h2>
                <p className="text-white font-mono text-sm">
              <span className="text-purple-400">$</span> Milestones & experience
            </p>
          </motion.div>

          {/* Stats bar removed per user request */}
          
          {/* Main Grid Layout - 70/30 */}
          <div className="grid lg:grid-cols-[70%_30%] gap-8">
            {/* Left: Single Achievement Box */}
            <motion.div
              variants={itemVariants}
              className="group"
            >
              <div className="relative bg-black/60 border border-gray-800/80 hover:border-purple-500/30 rounded-lg overflow-hidden transition-all duration-500 group-hover:shadow-[0_0_30px_-5px_rgba(168,85,247,0.15)]">
                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Content */}
                <div className="relative p-6 md:p-8">
                  <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left: Image Column */}
                    <div className="flex flex-col gap-6 lg:w-1/3">
                      {achievements.map((achievement) => (
                        <div
                          key={achievement.id}
                          className="relative w-full h-40 md:h-56 lg:h-64 rounded-lg overflow-hidden border border-gray-800/60 hover:border-purple-500/30 transition-all duration-300"
                        >
                          <Image
                            src={encodeURI(achievement.image)}
                            alt={achievement.title}
                            fill
                            sizes="(min-width:1024px) 220px, 33vw"
                            className="object-cover"
                          />
                        </div>
                      ))}
                    </div>

                    {/* Right: Descriptions */}
                    <div className="flex-1 space-y-8">
                      {achievements.map((achievement, index) => (
                        <div
                          key={achievement.id}
                          className={`${index !== achievements.length - 1 ? 'pb-8 border-b border-gray-800/50' : ''}`}
                        >
                          {/* Header */}
                          <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                            <div className="flex flex-wrap items-center gap-2">
                              <span className="px-2 py-1 bg-gray-900/50 border border-gray-800 rounded text-xs text-white font-mono uppercase tracking-wider">
                                {achievement.category}
                              </span>
                              <span className="text-xs text-purple-400 font-mono">
                                {achievement.highlight}
                              </span>
                            </div>
                            {/* year badge removed to avoid empty/floaty boxes */}
                          </div>

                          {/* Title */}
                          <h3 className="text-xl md:text-2xl font-black text-white font-mono leading-tight mb-3 group-hover:text-purple-50 transition-colors duration-300">
                            {achievement.title}
                          </h3>

                          {/* Description */}
                          <p className="text-gray-400 leading-relaxed text-sm mb-4">
                            {achievement.description}
                          </p>

                          {/* Skills */}
                          <div className="flex flex-wrap gap-2 mb-3">
                            {achievement.skills.map((skill, idx) => (
                              <span
                                key={idx}
                                className="px-2 py-1 bg-black/40 border border-gray-800/60 rounded text-xs text-gray-500 font-mono hover:text-gray-300 hover:border-purple-500/30 hover:bg-purple-500/5 transition-all duration-300"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>

                          {/* Impact Badge */}
                          <div className="flex items-center gap-2">
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                              <span className="text-xs text-white font-mono uppercase tracking-wide">Impact:</span>
                            </div>
                            <span className="text-xs text-gray-400 font-mono font-bold">
                              {achievement.impact}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>          {/* Right: Live Terminal */}
          <motion.div 
            variants={itemVariants}
            className="hidden lg:block sticky top-24 h-fit"
          >
            <div className="border border-gray-800 rounded-lg overflow-hidden bg-black/80 backdrop-blur-sm">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-gray-900/50 border-b border-gray-800">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-xs text-gray-500 font-mono ml-2">~/terminal</span>
              </div>
              
              {/* Terminal Content */}
              <div className="p-4 h-[400px] overflow-hidden font-mono text-xs">
                <div className="space-y-1">
                  {terminalLines.map((line, idx) => (
                    <div 
                      key={idx} 
                      className={`
                        ${line.startsWith('$') ? 'text-purple-400' : ''}
                        ${line.startsWith('>') ? 'text-gray-500' : ''}
                        ${line.startsWith('[OK]') || line.startsWith('[SUCCESS]') ? 'text-green-400' : ''}
                        ${line.startsWith('[INFO]') ? 'text-blue-400' : ''}
                        ${line.startsWith('[✓]') ? 'text-green-500' : ''}
                        ${!line.startsWith('$') && !line.startsWith('>') && !line.startsWith('[') && line ? 'text-gray-400' : ''}
                        ${!line ? 'text-transparent' : ''}
                        animate-pulse
                      `}
                      style={{ animationDuration: '0.5s' }}
                    >
                      {line || '\u00A0'}
                    </div>
                  ))}
                  <div className="flex items-center gap-1 mt-2">
                    <span className="text-purple-400">$</span>
                    <span className="w-2 h-4 bg-purple-400 animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        </motion.div>
      </div>
    </section>
  );
}
