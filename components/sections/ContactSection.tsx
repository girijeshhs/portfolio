"use client";

import { motion } from "framer-motion";
import { personalInfo, social_links } from "@/data/portfolio";
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter, FaFileDownload } from "react-icons/fa";
import MagicButton from "@/components/MagicButton";

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
          <motion.div variants={itemVariants} className="text-center space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Let's <span className="text-purple-400">Connect</span>
            </h2>
            <p className="text-gray-400 text-sm">
              Open to collaborations and interesting projects
            </p>
          </motion.div>

          {/* Content */}
          <motion.div 
            variants={itemVariants}
            className="bg-[#0a0a0a] border border-gray-800 rounded-lg p-6 space-y-6"
          >
            {/* Social Links */}
            <div className="flex justify-center gap-6">
              {socials.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-2 group"
                  >
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-gray-800 flex items-center justify-center group-hover:border-purple-500/50 transition-all">
                      <Icon className="text-xl text-gray-400 group-hover:text-purple-400 transition-colors" />
                    </div>
                    <span className="text-xs text-gray-500 group-hover:text-purple-400 transition-colors">
                      {social.name}
                    </span>
                  </a>
                );
              })}
            </div>

            <div className="w-16 h-px bg-gray-800 mx-auto" />

            {/* Resume */}
            <div className="flex justify-center">
              <a href={personalInfo.resume_url} download>
                <MagicButton title="Download Resume" icon={<FaFileDownload />} position="right" />
              </a>
            </div>

            {/* Info */}
            <div className="flex flex-col sm:flex-row justify-center gap-4 text-center text-xs">
              <span className="text-gray-400">
                <FaEnvelope className="inline mr-1 text-purple-400" />
                {personalInfo.email}
              </span>
              <span className="text-gray-400">
                📍 {personalInfo.location}
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
