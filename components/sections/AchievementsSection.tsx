"use client";

import { motion } from "framer-motion";
import { FaTrophy, FaBriefcase, FaMicrophone, FaAward, FaCode, FaRocket } from "react-icons/fa";

const achievements = [
  {
    id: 1,
    icon: FaTrophy,
    title: "3rd Prize Winner – Creonix Hackathon",
    category: "Competition",
    year: "2024",
    description: "Built a working prototype under pressure and secured 3rd place among competing engineering teams.",
    skills: ["Prototyping", "Team Collaboration", "Problem Solving"],
    impact: "Top 3 Finish",
    color: "from-yellow-500 to-orange-500",
    borderColor: "border-yellow-500/30",
    bgColor: "from-yellow-500/10 to-orange-500/10",
    accentColor: "text-yellow-400"
  },
  {
    id: 2,
    icon: FaBriefcase,
    title: "Full Stack Developer Intern – Plant Green",
    category: "Experience",
    year: "2023",
    description: "Delivered core LMS + web features with React, Node.js, APIs, and database, boosting usability and scalability.",
    skills: ["React", "Node.js", "Database Design", "API Development"],
    impact: "Production Impact",
    color: "from-blue-500 to-cyan-500",
    borderColor: "border-blue-500/30",
    bgColor: "from-blue-500/10 to-cyan-500/10",
    accentColor: "text-blue-400"
  },
  {
    id: 3,
    icon: FaMicrophone,
    title: "Event Coordinator – AI Zypher (100+)",
    category: "Leadership",
    year: "2023",
    description: "Led the 'Code Auction' event end-to-end: logistics, engagement, and execution – strong leadership + communication flex.",
    skills: ["Event Management", "Communication", "Leadership"],
    impact: "100+ Attendees",
    color: "from-purple-500 to-pink-500",
    borderColor: "border-purple-500/30",
    bgColor: "from-purple-500/10 to-pink-500/10",
    accentColor: "text-purple-400"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

export default function AchievementsSection() {
  const stats = [
    { label: "achievements", value: "3+", icon: FaAward, color: "text-purple-400" },
    { label: "experience", value: "2023-24", icon: FaCode, color: "text-blue-400" },
    { label: "impact", value: "100+", icon: FaRocket, color: "text-pink-400" }
  ];

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
          {/* Terminal Header */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="flex items-center gap-3 mb-2">
              <FaTrophy className="text-purple-400 text-2xl" />
              <h2 className="text-3xl md:text-4xl font-black text-white font-mono">
                <span className="text-purple-400">~/</span>achievements
              </h2>
            </div>
            <p className="text-gray-400 font-mono text-sm ml-11">
              <span className="text-purple-400">$</span> Milestones & experience
            </p>
          </motion.div>

          {/* Stats Dashboard */}
          <motion.div variants={itemVariants} className="grid grid-cols-3 gap-4 mb-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative bg-black/50 border border-gray-800 rounded-lg p-4 backdrop-blur-sm hover:border-purple-500/30 transition-all">
                  <div className="flex items-center gap-2 mb-1">
                    <stat.icon className={`text-sm ${stat.color}`} />
                    <span className="text-xs text-gray-500 font-mono uppercase">{stat.label}</span>
                  </div>
                  <div className={`text-2xl md:text-3xl font-black ${stat.color} font-mono`}>
                    {stat.value}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Achievements Grid */}
          <div className="space-y-4">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.id}
                variants={itemVariants}
                className="group relative"
              >
                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${achievement.bgColor} rounded-xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`} />
                
                {/* Card */}
                <div className={`relative bg-black/80 border ${achievement.borderColor} rounded-xl overflow-hidden backdrop-blur-sm hover:border-opacity-60 transition-all`}>
                  <div className="p-6 md:p-8">
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      {/* Left: Icon & Meta */}
                      <div className="flex md:flex-col items-center md:items-start gap-4 md:gap-3 md:w-32 flex-shrink-0">
                        {/* Icon */}
                        <div className={`relative w-16 h-16 rounded-lg bg-gradient-to-br ${achievement.bgColor} border ${achievement.borderColor} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                          <achievement.icon className={`text-2xl ${achievement.accentColor}`} />
                        </div>
                        
                        {/* Meta Info */}
                        <div className="flex md:flex-col gap-2 text-xs font-mono">
                          <div className={`px-2 py-1 rounded ${achievement.accentColor} bg-current/10 border border-current/20`}>
                            {achievement.year}
                          </div>
                          <div className="px-2 py-1 rounded text-gray-400 bg-gray-800/50 border border-gray-700/50">
                            {achievement.category}
                          </div>
                        </div>
                      </div>

                      {/* Right: Content */}
                      <div className="flex-1 space-y-4">
                        {/* Title & Impact */}
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                          <h3 className="text-xl md:text-2xl font-black text-white font-mono leading-tight">
                            {achievement.title}
                          </h3>
                          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full ${achievement.accentColor} bg-current/10 border border-current/30 text-xs font-bold font-mono whitespace-nowrap self-start`}>
                            <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                            {achievement.impact}
                          </span>
                        </div>

                        {/* Description */}
                        <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                          {achievement.description}
                        </p>

                        {/* Skills */}
                        <div className="flex flex-wrap gap-2">
                          {achievement.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="px-3 py-1 bg-black/50 border border-gray-800 rounded text-xs text-gray-400 font-mono hover:border-gray-600 hover:text-white transition-all"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Accent Line */}
                  <div className={`h-1 bg-gradient-to-r ${achievement.color} opacity-50 group-hover:opacity-100 transition-opacity`} />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Footer */}
          <motion.div variants={itemVariants} className="mt-8 text-center">
            <p className="text-gray-600 text-xs font-mono">
              <span className="text-purple-400">●</span> Scroll down for more
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
