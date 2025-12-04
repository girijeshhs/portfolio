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

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => (
  <motion.div
    variants={itemVariants}
    whileHover={{ y: -4 }}
    className="group bg-[#0a0a0a] border border-gray-800 rounded-lg overflow-hidden hover:border-purple-500/30 transition-all"
  >
    {/* Project Header */}
    <div className="relative h-32 bg-gradient-to-br from-purple-500/5 to-blue-500/5 border-b border-gray-800 flex items-center justify-center">
      <span className="text-5xl font-bold text-white/5 group-hover:text-purple-500/10 transition-colors">
        {project.name.charAt(0)}
      </span>
      {project.featured && (
        <div className="absolute top-2 right-2 px-2 py-0.5 rounded text-[10px] bg-purple-500/20 text-purple-300 border border-purple-500/30">
          Featured
        </div>
      )}
      <div className="absolute bottom-2 left-2">
        <span className="text-[10px] px-2 py-0.5 bg-white/5 rounded text-gray-400 border border-gray-800">
          {project.category}
        </span>
      </div>
    </div>

    {/* Content */}
    <div className="p-4 space-y-3">
      <div>
        <h3 className="text-lg font-bold text-white">{project.name}</h3>
        <p className="text-purple-400 text-xs">{project.tagline}</p>
      </div>

      <p className="text-gray-400 text-xs leading-relaxed line-clamp-2">
        {project.description}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-1">
        {project.tech_stack.slice(0, 3).map((tech) => (
          <span
            key={tech}
            className="text-[10px] px-2 py-0.5 bg-purple-500/10 rounded text-purple-300 border border-purple-500/20"
          >
            {tech}
          </span>
        ))}
        {project.tech_stack.length > 3 && (
          <span className="text-[10px] text-gray-500">+{project.tech_stack.length - 3}</span>
        )}
      </div>

      {/* Links */}
      <div className="flex gap-3 pt-2 border-t border-gray-800">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-gray-400 hover:text-purple-400 transition-colors text-xs"
          >
            <FaGithub /> Code
          </a>
        )}
        {project.live_url && (
          <a
            href={project.live_url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-gray-400 hover:text-purple-400 transition-colors text-xs"
          >
            <FaExternalLinkAlt className="text-[10px]" /> Demo
          </a>
        )}
      </div>
    </div>
  </motion.div>
);

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
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Featured <span className="text-purple-400">Projects</span>
            </h2>
            <p className="text-gray-400 text-sm max-w-xl mx-auto">
              Practical systems across web, blockchain, and ML
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
                className={`px-4 py-1.5 rounded-full transition-all duration-300 text-xs ${
                  filter === category
                    ? "bg-purple-500/20 text-purple-300 border border-purple-500/50"
                    : "bg-white/5 text-gray-400 border border-gray-800 hover:border-purple-500/30"
                }`}
              >
                {category}
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
