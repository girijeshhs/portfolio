"use client";

import { motion } from "framer-motion";
import { personalInfo, social_links } from "@/data/portfolio";
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter, FaFileDownload } from "react-icons/fa";
import MagicButton from "@/components/MagicButton";

export default function ContactSection() {
  const socials = [
    { name: "GitHub", icon: FaGithub, url: social_links.github },
    { name: "LinkedIn", icon: FaLinkedin, url: social_links.linkedin },
    { name: "Email", icon: FaEnvelope, url: social_links.email },
    ...(social_links.twitter ? [{ name: "Twitter", icon: FaTwitter, url: social_links.twitter }] : []),
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-12 text-center"
        >
          {/* Header */}
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <p className="text-white-200 text-lg max-w-2xl mx-auto">
              Open to collaborations, interesting projects, and engineering discussions
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 flex-wrap">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -4 }}
                  className="flex flex-col items-center gap-2 group"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30 flex items-center justify-center group-hover:border-purple-400 transition-colors">
                    <Icon className="text-2xl text-white-200 group-hover:text-purple-400 transition-colors" />
                  </div>
                  <span className="text-sm text-white-200 group-hover:text-purple-400 transition-colors">
                    {social.name}
                  </span>
                </motion.a>
              );
            })}
          </div>

          {/* Resume Download */}
          <div className="flex justify-center">
            <a href={personalInfo.resume_url} download>
              <MagicButton title="Download Resume" icon={<FaFileDownload />} position="right" />
            </a>
          </div>

          {/* Contact Info */}
          <div className="space-y-2 text-white-200">
            <p>📧 {personalInfo.email}</p>
            <p>📍 {personalInfo.location}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
