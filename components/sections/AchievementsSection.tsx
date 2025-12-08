"use client";

import { motion } from "framer-motion";

const achievements = [
  {
    id: 1,
    title: "3rd Prize Winner – Creonix Hackathon",
    category: "Competition",
    year: "2024",
    description: "Built a working prototype under pressure and secured 3rd place among competing engineering teams.",
    skills: ["Prototyping", "Team Collaboration", "Problem Solving"],
    impact: "Top 3 Finish"
  },
  {
    id: 2,
    title: "Full Stack Developer Intern – Plant Green",
    category: "Experience",
    year: "2023",
    description: "Delivered core LMS + web features with React, Node.js, APIs, and database, boosting usability and scalability.",
    skills: ["React", "Node.js", "Database Design", "API Development"],
    impact: "Production Impact"
  },
  {
    id: 3,
    title: "Event Coordinator – AI Zypher (100+)",
    category: "Leadership",
    year: "2023",
    description: "Led the 'Code Auction' event end-to-end: logistics, engagement, and execution – strong leadership + communication flex.",
    skills: ["Event Management", "Communication", "Leadership"],
    impact: "100+ Attendees"
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
  return (
    <section
      id="achievements"
      className="py-20 relative overflow-hidden bg-black"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <p className="text-gray-500 font-mono text-sm">
              <span className="text-purple-400">$</span> Milestones & experience
            </p>
          </motion.div>

          {/* Stats Bar */}
          <motion.div 
            variants={itemVariants} 
            className="grid grid-cols-3 gap-6 mb-16 pb-8 border-b border-gray-800/50"
          >
            <div className="text-center md:text-left">
              <div className="text-3xl md:text-4xl font-black text-white font-mono mb-1">3+</div>
              <div className="text-xs text-gray-600 font-mono uppercase tracking-wider">Achievements</div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-3xl md:text-4xl font-black text-white font-mono mb-1">2023-24</div>
              <div className="text-xs text-gray-600 font-mono uppercase tracking-wider">Experience</div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-3xl md:text-4xl font-black text-white font-mono mb-1">100+</div>
              <div className="text-xs text-gray-600 font-mono uppercase tracking-wider">Impact</div>
            </div>
          </motion.div>

          {/* Achievements Grid */}
          <div className="space-y-6">
            {achievements.map((achievement) => (
              <motion.div
                key={achievement.id}
                variants={itemVariants}
                className="group"
              >
                <div className="relative bg-black/60 border border-gray-800/80 hover:border-gray-700/80 rounded-lg overflow-hidden transition-all duration-300">
                  {/* Top Meta Bar */}
                  <div className="flex items-center justify-between px-6 py-3 bg-gray-900/30 border-b border-gray-800/50">
                    <div className="flex items-center gap-4">
                      <span className="text-xs text-gray-500 font-mono">[{achievement.year}]</span>
                      <span className="text-xs text-gray-600 font-mono uppercase tracking-wide">
                        {achievement.category}
                      </span>
                    </div>
                    <span className="text-xs text-gray-500 font-mono">
                      {achievement.impact}
                    </span>
                  </div>

                  {/* Main Content Area */}
                  <div className="p-6 md:p-8">
                    <div className="grid md:grid-cols-[1fr_auto] gap-6">
                      {/* Left: Title & Description */}
                      <div className="space-y-4">
                        <h3 className="text-xl md:text-2xl font-black text-white font-mono leading-tight">
                          {achievement.title}
                        </h3>
                        
                        <p className="text-gray-400 leading-relaxed text-sm md:text-base">
                          {achievement.description}
                        </p>
                      </div>

                      {/* Right: Skills (Desktop) */}
                      <div className="hidden md:flex flex-col gap-2 min-w-[200px]">
                        {achievement.skills.map((skill, idx) => (
                          <div
                            key={idx}
                            className="px-3 py-2 bg-black/40 border border-gray-800 rounded text-xs text-gray-500 font-mono hover:text-gray-300 hover:border-gray-700 transition-all text-right"
                          >
                            {skill}
                          </div>
                        ))}
                      </div>

                      {/* Skills (Mobile) */}
                      <div className="flex md:hidden flex-wrap gap-2 pt-2">
                        {achievement.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1.5 bg-black/40 border border-gray-800 rounded text-xs text-gray-500 font-mono hover:text-gray-300 hover:border-gray-700 transition-all"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Subtle Left Accent */}
                  <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-800 group-hover:bg-purple-500/40 transition-all duration-500" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
