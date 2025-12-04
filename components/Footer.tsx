"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";
import { personalInfo, social_links } from "@/data/portfolio";

const Footer = () => {
  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: FaLinkedin, label: "LinkedIn", url: social_links.linkedin },
    { icon: FaGithub, label: "GitHub", url: social_links.github },
    { icon: FaEnvelope, label: "Email", url: social_links.email },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-black text-white pt-16 pb-8 overflow-hidden">
      {/* Gradient line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
      
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white-100">
              {personalInfo.name}<span className="text-purple-400">.</span>
            </h3>
            <p className="text-white-200/60 text-sm leading-relaxed max-w-xs">
              {personalInfo.title} crafting digital experiences with code and creativity.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-purple-400 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white-200/60 hover:text-purple-400 transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-purple-400 uppercase tracking-wider">
              Connect
            </h4>
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, label, url }) => (
                <motion.a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white-200/60 hover:text-purple-400 hover:border-purple-500/50 transition-all duration-300"
                  aria-label={label}
                >
                  <Icon className="text-lg" />
                </motion.a>
              ))}
            </div>
            <div className="space-y-2 text-sm text-white-200/60">
              <p>{personalInfo.email}</p>
              <p>{personalInfo.location}</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="section-divider mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white-200/40">
            © {new Date().getFullYear()} {personalInfo.name}. Built with Next.js & ❤️
          </p>
          
          {/* Back to top button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-sm text-white-200/40 hover:text-purple-400 transition-colors duration-300"
          >
            <span>Back to top</span>
            <FaArrowUp className="text-xs" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;