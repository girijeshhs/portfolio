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
    <footer className="bg-black/60 text-white py-6">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-white/80">{personalInfo.name} • © {new Date().getFullYear()}</div>

        <nav className="flex gap-6">
          {quickLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm text-white/60 hover:text-white transition-colors">
              {link.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <div className="flex gap-3">
            {socialLinks.map(({ icon: Icon, label, url }) => (
              <a key={label} href={url} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
                <Icon />
              </a>
            ))}
          </div>
          <button onClick={scrollToTop} className="text-white/50 hover:text-white text-sm">Top ↑</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;