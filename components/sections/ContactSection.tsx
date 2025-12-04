"use client";

import { motion } from "framer-motion";
import { personalInfo, social_links } from "@/data/portfolio";
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from "react-icons/fa";

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

export default function ContactSection() {
  const socials = [
    { name: "GitHub", icon: FaGithub, url: social_links.github },
    { name: "LinkedIn", icon: FaLinkedin, url: social_links.linkedin },
    { name: "Email", icon: FaEnvelope, url: social_links.email },
    ...(social_links.twitter ? [{ name: "Twitter", icon: FaTwitter, url: social_links.twitter }] : []),
  ];

  return (
    <section id="contact" className="py-16 relative">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-8"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center space-y-2 font-mono">
            <h2 className="text-xl md:text-2xl font-bold">
              <span className="text-yellow-400">$</span> <span className="text-cyan-400">git</span> <span className="text-green-400">connect</span> <span className="text-gray-500">--with-me</span>
            </h2>
            <p className="text-gray-500 text-xs">
              // open to collaborations and interesting projects
            </p>
          </motion.div>

          {/* Content */}
          <motion.div 
            variants={itemVariants}
            className="bg-[#0d1117] border border-gray-800 rounded-lg p-5 space-y-5"
          >
            {/* Social Links */}
            <div className="flex justify-center gap-5">
              {socials.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-1.5 group"
                  >
                    <div className="w-10 h-10 rounded bg-[#161b22] border border-gray-800 flex items-center justify-center group-hover:border-green-500/50 group-hover:bg-green-500/10 transition-all">
                      <Icon className="text-lg text-gray-400 group-hover:text-green-400 transition-colors" />
                    </div>
                    <span className="text-[10px] text-gray-500 group-hover:text-green-400 transition-colors font-mono">
                      {social.name.toLowerCase()}
                    </span>
                  </a>
                );
              })}
            </div>

            <div className="w-12 h-px bg-gray-800 mx-auto" />

            {/* Resume */}
            <div className="flex justify-center">
              <a 
                href={personalInfo.resume_url} 
                download
                className="px-5 py-2 bg-green-500/10 border border-green-500/50 rounded text-green-400 font-mono text-xs hover:bg-green-500/20 transition-all"
              >
                <span className="text-yellow-400">$</span> download resume.pdf
              </a>
            </div>

            {/* Info */}
            <div className="flex flex-col sm:flex-row justify-center gap-3 text-center text-xs font-mono">
              <span className="text-gray-400">
                <span className="text-cyan-400">email:</span> {personalInfo.email}
              </span>
              <span className="text-gray-400">
                <span className="text-cyan-400">loc:</span> {personalInfo.location}
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
