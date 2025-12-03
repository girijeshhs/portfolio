"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/portfolio";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { useState } from "react";

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    whileHover={{ y: -8 }}
    className="group relative bg-gradient-to-br from-black-200 to-black-100 border border-white-300 rounded-xl overflow-hidden hover:border-purple-400 transition-all duration-300"
  >
    {/* Project Image */}
    <div className="relative h-48 overflow-hidden bg-gradient-to-br from-purple-500/20 to-blue-500/20">
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-6xl opacity-20">{project.name.charAt(0)}</span>
      </div>
      {project.featured && (
        <div className="absolute top-4 right-4 bg-purple-500 text-white text-xs px-3 py-1 rounded-full">
          Featured
        </div>
      )}
    </div>

    {/* Content */}
    <div className="p-6 space-y-4">
      <div>
        <h3 className="text-2xl font-bold text-white mb-1">{project.name}</h3>
        <p className="text-purple-400 text-sm">{project.tagline}</p>
      </div>

      <p className="text-white-200 text-sm leading-relaxed">{project.description}</p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2">
        {project.tech_stack.slice(0, 4).map((tech) => (
          <span
            key={tech}
            className="text-xs px-2 py-1 bg-purple-500/10 border border-purple-500/30 rounded text-purple-300"
          >
            {tech}
          </span>
        ))}
        {project.tech_stack.length > 4 && (
          <span className="text-xs px-2 py-1 text-purple-400">+{project.tech_stack.length - 4}</span>
        )}
      </div>

      {/* Links */}
      <div className="flex gap-4 pt-2">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white-200 hover:text-purple-400 transition-colors"
          >
            <FaGithub className="text-lg" />
            <span className="text-sm">Code</span>
          </a>
        )}
        {project.live_url && (
          <a
            href={project.live_url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white-200 hover:text-purple-400 transition-colors"
          >
            <FaExternalLinkAlt className="text-sm" />
            <span className="text-sm">Live Demo</span>
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
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-white-200 text-lg max-w-2xl mx-auto">
              A selection of practical systems and experiments across web, blockchain, and ML
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full transition-all ${
                  filter === category
                    ? "bg-purple-500 text-white"
                    : "bg-white-300/10 text-white-200 hover:bg-white-300/20"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
