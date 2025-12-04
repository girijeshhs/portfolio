"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

const SkillCategory = ({ title, items, index }: { title: string; items: string[]; index: number }) => (
  <motion.div 
    variants={itemVariants}
    className="glass-card rounded-2xl p-6 space-y-4 hover-lift"
  >
    {/* Category Header */}
    <div className="flex items-center gap-3">
      <div className="accent-bar !h-6" />
      <h3 className="text-xl font-semibold text-white-100">{title}</h3>
    </div>
    
    {/* Skills Grid */}
    <div className="flex flex-wrap gap-2">
      {items.map((skill, skillIndex) => (
        <motion.span
          key={skill}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: skillIndex * 0.03 + index * 0.1 }}
          whileHover={{ 
            scale: 1.05, 
            y: -2,
            boxShadow: "0 0 20px rgba(139, 92, 246, 0.3)"
          }}
          className="px-4 py-2 glass-light rounded-full text-sm text-white-200 border border-purple-500/20 hover:border-purple-400/50 transition-all duration-300 cursor-default"
        >
          {skill}
        </motion.span>
      ))}
    </div>
  </motion.div>
);

export default function SkillsSection() {
  const skillCategories = [
    { title: "Frontend", items: skills.frontend },
    { title: "Backend", items: skills.backend },
    { title: "Databases", items: skills.databases },
    { title: "Blockchain", items: skills.blockchain },
    { title: "ML & AI", items: skills.ml_ai },
    { title: "Tools & DevOps", items: skills.tools },
  ];

  return (
    <div id="skills" className="relative">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-8"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="accent-bar" />
            <h2 className="text-2xl md:text-3xl font-bold gradient-text-glow">
              Skills & Technologies
            </h2>
          </div>
          <p className="text-white-200 text-sm leading-relaxed">
            A comprehensive toolkit built through hands-on projects and continuous learning
          </p>
        </motion.div>

        {/* Skills Grid - Single column to fit beside terminal */}
        <motion.div 
          variants={containerVariants}
          className="space-y-4"
        >
          {skillCategories.map((category, index) => (
            <SkillCategory 
              key={category.title}
              title={category.title}
              items={category.items}
              index={index}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
