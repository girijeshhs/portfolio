"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

export default function AchievementsSection() {
  const achievements = [
    {
      icon: "🏆",
      category: "Competition",
      year: "2024",
      title: "3rd Prize Winner — Creonix Hackathon",
      description:
        "Built a working prototype under pressure and secured 3rd place among competing engineering teams.",
      skills: ["Prototyping", "Team Collaboration", "Problem Solving"],
      highlight: "Top 3 Finish"
    },
    {
      icon: "💼",
      category: "Experience",
      year: "2023",
      title: "Full Stack Developer Intern — Plant Green",
      description:
        "Delivered core LMS + web features with React, Node.js, APIs, and databases, boosting usability and scalability.",
      skills: ["React", "Node.js", "Database Design", "API Development"],
      highlight: "Production Impact"
    },
    {
      icon: "🎤",
      category: "Leadership",
      year: "2023",
      title: "Event Coordinator — AI Zypher (100+)",
      description:
        "Led the 'Code Auction' event end-to-end: logistics, engagement, and execution — strong leadership + communication flex.",
      skills: ["Event Management", "Communication", "Leadership"],
      highlight: "100+ Attendees"
    }
  ];

  const stats = [
    { label: "Achievements", value: "3+" },
    { label: "Experience", value: "2023-24" },
    { label: "Impact", value: "100+" }
  ];

  return (
    <section
      id="achievements"
      className="min-h-screen py-24 relative flex items-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-12"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white font-mono">
              My <span className="text-purple-400">Achievements</span>
            </h2>
            <p className="text-sm uppercase tracking-[0.3em] text-gray-400 font-mono">
              Milestones & Experience
            </p>
            
            {/* Stats Bar */}
            <motion.div 
              variants={itemVariants}
              className="flex justify-center gap-8 pt-4"
            >
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-2xl md:text-3xl font-black text-purple-400 font-mono">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Achievements Box */}
          <motion.div 
            variants={itemVariants} 
            className="relative overflow-hidden rounded-2xl border border-white/15 bg-black/30 backdrop-blur-sm shadow-xl shadow-black/30"
          >
            <div className="flex flex-col md:flex-row h-full relative">
              {/* Left: Image (40%) */}
              <div className="md:w-[40%] relative min-h-[250px] md:min-h-full bg-black/40 backdrop-blur-sm">
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <div className="relative w-full h-full rounded-xl overflow-hidden ring-1 ring-white/10">
                    <Image
                      src="/assets/images/contact-image.jpg"
                      alt="Achievements visual"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 40vw"
                    />
                  </div>
                </div>
              </div>

              {/* Right: Achievements (60%) */}
              <div className="md:w-[60%] p-6 md:p-8 lg:p-10 flex flex-col justify-center">
                <div className="space-y-6">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="group relative"
                    >
                      {/* Achievement Card */}
                      <div className="relative p-4 rounded-xl border border-white/5 bg-black/20 backdrop-blur-sm hover:border-purple-500/30 hover:bg-black/30 transition-all duration-300">
                        <div className="flex items-start gap-4">
                          {/* Icon */}
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 flex items-center justify-center text-2xl">
                              {achievement.icon}
                            </div>
                          </div>
                          
                          {/* Content */}
                          <div className="flex-1 min-w-0">
                            {/* Header Row */}
                            <div className="flex items-start justify-between gap-2 mb-2">
                              <div className="flex items-center gap-2 flex-wrap">
                                <span className="text-[10px] px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20 font-medium uppercase tracking-wider">
                                  {achievement.category}
                                </span>
                                <span className="text-xs text-gray-500 font-mono">
                                  {achievement.year}
                                </span>
                              </div>
                              <span className="text-[10px] px-2 py-0.5 rounded bg-green-500/10 text-green-300 border border-green-500/20 font-medium whitespace-nowrap">
                                {achievement.highlight}
                              </span>
                            </div>
                            
                            {/* Title */}
                            <h4 className="text-white font-black text-base md:text-lg leading-tight font-mono mb-2">
                              {achievement.title}
                            </h4>
                            
                            {/* Description */}
                            <p className="text-gray-300 text-sm leading-relaxed mb-3">
                              {achievement.description}
                            </p>
                            
                            {/* Skills */}
                            <div className="flex flex-wrap gap-1.5">
                              {achievement.skills.map((skill, idx) => (
                                <span 
                                  key={idx}
                                  className="text-[10px] px-2 py-1 rounded bg-gray-800/50 text-gray-400 border border-gray-700/50"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
