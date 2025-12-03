"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";

const SkillCategory = ({ title, items }: { title: string; items: string[] }) => (
  <div className="space-y-3">
    <h3 className="text-xl font-semibold text-purple-400">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {items.map((skill, index) => (
        <motion.span
          key={skill}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.05 }}
          whileHover={{ scale: 1.05, y: -2 }}
          className="px-4 py-2 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/30 rounded-full text-sm text-white-200 hover:border-purple-400 transition-all cursor-default"
        >
          {skill}
        </motion.span>
      ))}
    </div>
  </div>
);

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <p className="text-white-200 text-lg max-w-2xl mx-auto">
              A comprehensive toolkit built through hands-on projects and continuous learning
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <SkillCategory title="Frontend" items={skills.frontend} />
            <SkillCategory title="Backend" items={skills.backend} />
            <SkillCategory title="Databases" items={skills.databases} />
            <SkillCategory title="Blockchain" items={skills.blockchain} />
            <SkillCategory title="ML & AI" items={skills.ml_ai} />
            <SkillCategory title="Tools & DevOps" items={skills.tools} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
