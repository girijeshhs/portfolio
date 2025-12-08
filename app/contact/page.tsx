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

export default function ContactPage() {
  return (
    <section className="min-h-screen py-24 relative flex items-center overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 relative z-10 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center space-y-3">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white font-mono">
              Let's <span className="text-white">Work</span> Together
            </h1>
            <p className="text-sm uppercase tracking-[0.3em] text-gray-400 font-mono mt-2">
              Collab / Hire / Build
            </p>
          </motion.div>

          {/* Contact Card */}
          <motion.div 
            variants={itemVariants} 
            className="relative overflow-hidden rounded-2xl border border-white/15 bg-black/25 backdrop-blur-sm p-8 space-y-6 shadow-xl shadow-black/25"
          >
            {/* Info Cards */}
            <div className="grid md:grid-cols-2 gap-4">
              {[ 
                { label: "Location", value: "Chennai" },
                { label: "Status", value: "Available" },
                { label: "Response", value: "Within 24h" },
                { label: "Timezone", value: "IST (UTC+5:30)" }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between rounded-lg border border-white/10 bg-black/20 px-5 py-4 backdrop-blur-sm"
                >
                  <span className="text-gray-400 font-medium text-base">{item.label}</span>
                  <span className="text-white font-medium text-base">{item.value}</span>
                </div>
              ))}
            </div>

            {/* Opportunities Section */}
            <div className="pt-4 border-t border-white/10">
              <h3 className="text-white font-semibold text-xl mb-4">
                Opportunities I'm Open To
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {["Freelance", "Full-time", "Part-time", "Consulting", "Open Source"].map(
                  (item) => (
                    <span
                      key={item}
                      className="px-4 py-3 rounded-lg border border-white/20 bg-black/30 text-gray-200 text-sm font-medium backdrop-blur-sm hover:border-white/30 hover:text-white transition-colors text-center"
                    >
                      {item}
                    </span>
                  )
                )}
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-4 border-t border-white/10">
              <h3 className="text-white font-semibold text-xl mb-4">
                Connect With Me
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[ 
                  { href: social_links.github, label: "GITHUB", icon: <FaGithub className="text-2xl" /> },
                  { href: social_links.linkedin, label: "LINKEDIN", icon: <FaLinkedin className="text-2xl" /> },
                  { href: social_links.email, label: "EMAIL", icon: <FaEnvelope className="text-2xl" /> },
                  { href: social_links.twitter, label: "TWITTER", icon: <FaTwitter className="text-2xl" /> }
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center justify-center gap-2 rounded-lg border border-white/10 bg-black/20 py-5 px-3 backdrop-blur-sm transition-all duration-150 hover:border-white/25 hover:bg-black/30"
                  >
                    <span className="text-gray-300 group-hover:text-white transition-colors">{item.icon}</span>
                    <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 group-hover:text-gray-200">
                      {item.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Resume Download */}
            <div className="pt-4 border-t border-white/10">
              <a
                href={personalInfo.resume_url}
                download
                className="flex items-center justify-center gap-3 w-full py-4 rounded-lg bg-black/30 text-white font-semibold text-base border border-white/20 backdrop-blur-sm hover:border-white/30 hover:bg-black/40 transition-all duration-200"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
