"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/portfolio";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useState } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
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

// Pixel art icons for each category
const categoryIcons: Record<string, string> = {
  "Blockchain": "⛓️",
  "Machine Learning": "🧠",
  "Web Development": "🌐",
  "Tools": "🔧",
};

const categoryColors: Record<string, string> = {
  "Blockchain": "text-yellow-400 border-yellow-500/30 bg-yellow-500/10",
  "Machine Learning": "text-cyan-400 border-cyan-500/30 bg-cyan-500/10",
  "Web Development": "text-green-400 border-green-500/30 bg-green-500/10",
  "Tools": "text-purple-400 border-purple-500/30 bg-purple-500/10",
};

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const colorClass = categoryColors[project.category] || "text-green-400 border-green-500/30 bg-green-500/10";
  const icon = categoryIcons[project.category] || "📦";
  
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -4 }}
      className="group bg-[#0d1117] border border-gray-800 rounded-lg overflow-hidden hover:border-green-500/40 transition-all"
    >
      {/* Project Header with Pixel Art Style */}
      <div className="relative h-28 border-b border-gray-800 bg-[#161b22] overflow-hidden">
        {/* Pixel grid background */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `linear-gradient(rgba(34,197,94,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,0.1) 1px, transparent 1px)`,
          backgroundSize: '8px 8px'
        }} />
        
        {/* Large icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-4xl opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all">
            {icon}
          </span>
        </div>
        
        {/* Category badge */}
        <div className="absolute top-2 left-2">
          <span className={`text-[10px] px-2 py-0.5 rounded font-mono ${colorClass}`}>
            {project.category}
          </span>
        </div>
        
        {project.featured && (
          <div className="absolute top-2 right-2 px-2 py-0.5 rounded text-[10px] bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 font-mono">
            ★ FEATURED
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        <div>
          <h3 className="text-base font-bold text-green-400 font-mono">{project.name}</h3>
          <p className="text-cyan-400 text-xs font-mono">// {project.tagline}</p>
        </div>

        <p className="text-gray-400 text-xs leading-relaxed line-clamp-2">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1 pt-1">
          {project.tech_stack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="text-[10px] px-1.5 py-0.5 bg-[#1a1f26] rounded text-gray-300 border border-gray-700 font-mono"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3 pt-2 border-t border-gray-800">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-gray-400 hover:text-green-400 transition-colors text-xs font-mono"
            >
              <FaGithub /> <span className="text-yellow-400">$</span> code
            </a>
          )}
          {project.live_url && (
            <a
              href={project.live_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-gray-400 hover:text-green-400 transition-colors text-xs font-mono"
            >
              <FaExternalLinkAlt className="text-[10px]" /> demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default function ProjectsSection() {
  const [filter, setFilter] = useState<string>("All");
  const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

  const filteredProjects = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-16 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-10"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center space-y-3">
            <h2 className="text-2xl md:text-3xl font-bold font-mono">
              <span className="text-green-400">~/</span><span className="text-white">projects</span><span className="text-yellow-400">/</span><span className="text-cyan-400">featured</span>
            </h2>
            <p className="text-gray-500 text-sm max-w-xl mx-auto font-mono">
              <span className="text-yellow-400">$</span> ls -la ./portfolio <span className="text-gray-600">// practical systems</span>
            </p>
          </motion.div>

          {/* Filter Tabs */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setFilter(category)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`px-3 py-1 rounded transition-all duration-300 text-xs font-mono ${
                  filter === category
                    ? "bg-green-500/20 text-green-400 border border-green-500/50"
                    : "bg-[#161b22] text-gray-400 border border-gray-800 hover:border-green-500/30 hover:text-green-400"
                }`}
              >
                {category === "All" ? "*" : categoryIcons[category] || ""} {category.toLowerCase()}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div 
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
