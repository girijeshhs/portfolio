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
    <section id="contact" className="py-32 relative">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-purple-500/10 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6">
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
              Let's Connect
            </h2>
            <p className="text-white-200 text-lg max-w-2xl mx-auto leading-relaxed">
              Open to collaborations, interesting projects, and engineering discussions
            </p>
          </motion.div>

          {/* Content Card */}
          <motion.div 
            variants={itemVariants}
            className="glass-card rounded-2xl p-8 md:p-12 space-y-10"
          >
            {/* Social Links */}
            <div className="flex justify-center gap-8 flex-wrap">
              {socials.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ 
                      scale: 1.1, 
                      y: -4,
                    }}
                    className="flex flex-col items-center gap-3 group"
                  >
                    <div className="relative w-16 h-16 rounded-full glass-light border border-purple-500/20 flex items-center justify-center group-hover:border-purple-400/50 transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]">
                      <Icon className="text-2xl text-white-200/70 group-hover:text-purple-400 transition-colors duration-300" />
                    </div>
                    <span className="text-sm text-white-200/70 group-hover:text-purple-400 transition-colors duration-300 font-medium">
                      {social.name}
                    </span>
                  </motion.a>
                );
              })}
            </div>

            <div className="section-divider w-1/3 mx-auto" />

            {/* Resume Download */}
            <motion.div 
              variants={itemVariants}
              className="flex justify-center"
            >
              <a href={personalInfo.resume_url} download>
                <MagicButton title="Download Resume" icon={<FaFileDownload />} position="right" />
              </a>
            </motion.div>

            {/* Contact Info */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col md:flex-row justify-center gap-6 md:gap-12 text-center"
            >
              <div className="flex items-center justify-center gap-2 text-white-200/70 hover:text-purple-400 transition-colors">
                <FaEnvelope className="text-purple-400" />
                <span>{personalInfo.email}</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-white-200/70">
                <span className="text-purple-400">📍</span>
                <span>{personalInfo.location}</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
