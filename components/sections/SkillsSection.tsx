"use client";

import { motion } from "framer-motion";

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

const commands = [
  { cmd: "frontend", desc: "React, Next.js, TypeScript & more" },
  { cmd: "backend", desc: "Node.js, Express, Python, Flask" },
  { cmd: "databases", desc: "PostgreSQL, MongoDB, Redis" },
  { cmd: "blockchain", desc: "Solidity, Web3.js, Ethereum" },
  { cmd: "ml", desc: "Python, TensorFlow, scikit-learn" },
  { cmd: "tools", desc: "Git, Docker, Linux, DevOps" },
];

export default function SkillsSection() {
  return (
    <div id="skills" className="relative">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="space-y-6"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="space-y-2">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#27C93F]"></div>
            <h2 className="text-xl font-bold text-white">
              Command Reference
            </h2>
          </div>
          <p className="text-gray-400 text-sm pl-5">
            Type these commands in the terminal to explore my skills
          </p>
        </motion.div>

        {/* Commands List */}
        <motion.div 
          variants={containerVariants}
          className="space-y-2"
        >
          {commands.map((item, index) => (
            <motion.div
              key={item.cmd}
              variants={itemVariants}
              whileHover={{ x: 4 }}
              className="group flex items-start gap-3 p-3 rounded-lg bg-[#161b22] border border-gray-800 hover:border-purple-500/30 transition-all cursor-default"
            >
              <code className="text-purple-400 font-mono text-sm bg-purple-500/10 px-2 py-0.5 rounded">
                {item.cmd}
              </code>
              <span className="text-gray-400 text-sm">{item.desc}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Quick Tips */}
        <motion.div 
          variants={itemVariants}
          className="p-4 rounded-lg bg-[#0d1117] border border-gray-800 space-y-2"
        >
          <div className="flex items-center gap-2 text-yellow-500 text-sm">
            <span>💡</span>
            <span className="font-medium">Pro Tips</span>
          </div>
          <ul className="text-gray-400 text-xs space-y-1 pl-6">
            <li>• Type <code className="text-purple-400">skills all</code> to see everything</li>
            <li>• Type <code className="text-purple-400">help</code> for all commands</li>
            <li>• Type <code className="text-purple-400">clear</code> to reset terminal</li>
          </ul>
        </motion.div>
      </motion.div>
    </div>
  );
}
