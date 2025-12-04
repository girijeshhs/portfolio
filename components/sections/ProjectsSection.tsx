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
    whileHover={{ 
      y: -8, 
      rotateX: 2,
      rotateY: -2,
    }}
    className="group relative glass-card rounded-2xl overflow-hidden hover-lift"
    style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
  >
    {/* Hover glow effect */}
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10" />
    </div>
    
    {/* Project Image/Header */}
    <div className="relative h-48 overflow-hidden bg-gradient-to-br from-purple-500/10 to-blue-500/10 border-b border-purple-500/10">
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.span 
          className="text-7xl font-bold text-white/5 group-hover:text-purple-500/10 transition-colors duration-500"
          whileHover={{ scale: 1.1 }}
        >
          {project.name.charAt(0)}
        </motion.span>
      </div>
      {project.featured && (
        <div className="absolute top-4 right-4 glass-light px-4 py-1.5 rounded-full border border-purple-500/30">
          <span className="text-xs font-medium text-purple-300 uppercase tracking-wider">Featured</span>
        </div>
      )}
      
      {/* Category Badge */}
      <div className="absolute bottom-4 left-4">
        <span className="text-xs px-3 py-1 glass-light rounded-full text-white-200 border border-white/10">
          {project.category}
        </span>
      </div>
    </div>

    {/* Content */}
    <div className="p-6 space-y-4">
      <div className="space-y-2">
        <h3 className="text-2xl font-bold text-white-100 group-hover:text-glow-subtle transition-all duration-300">
          {project.name}
        </h3>
        <p className="text-purple-400 text-sm font-medium">{project.tagline}</p>
      </div>

      <p className="text-white-200 text-sm leading-relaxed line-clamp-3">
        {project.description}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2">
        {project.tech_stack.slice(0, 4).map((tech) => (
          <span
            key={tech}
            className="text-xs px-3 py-1.5 glass-light rounded-full text-purple-300 border border-purple-500/20"
          >
            {tech}
          </span>
        ))}
        {project.tech_stack.length > 4 && (
          <span className="text-xs px-3 py-1.5 text-purple-400/70">
            +{project.tech_stack.length - 4} more
          </span>
        )}
      </div>

      {/* Links */}
      <div className="flex gap-4 pt-2 border-t border-white/5">
        {project.github && (
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white-200/70 hover:text-purple-400 transition-all duration-300"
            whileHover={{ x: 3 }}
          >
            <FaGithub className="text-lg" />
            <span className="text-sm font-medium">Code</span>
          </motion.a>
        )}
        {project.live_url && (
          <motion.a
            href={project.live_url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white-200/70 hover:text-purple-400 transition-all duration-300"
            whileHover={{ x: 3 }}
          >
            <FaExternalLinkAlt className="text-sm" />
            <span className="text-sm font-medium">Live Demo</span>
          </motion.a>
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
    <section id="projects" className="py-32 relative">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-16"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center space-y-6">
            <div className="flex justify-center">
              <div className="accent-bar" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold gradient-text-glow">
              Featured Projects
            </h2>
            <p className="text-white-200 text-lg max-w-2xl mx-auto leading-relaxed">
              A selection of practical systems and experiments across web, blockchain, and ML
            </p>
          </motion.div>

          {/* Filter Tabs */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setFilter(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2.5 rounded-full transition-all duration-300 font-medium text-sm ${
                  filter === category
                    ? "bg-purple-500/20 text-purple-300 border border-purple-500/50 shadow-[0_0_20px_rgba(139,92,246,0.3)]"
                    : "glass-light text-white-200 border border-white/10 hover:border-purple-500/30"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div 
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
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
