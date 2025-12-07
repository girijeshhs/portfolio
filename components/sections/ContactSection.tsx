"use client";

import { motion } from "framer-motion";
import { personalInfo, social_links } from "@/data/portfolio";
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from "react-icons/fa";
import Image from "next/image";

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
  const achievements = [
    {
      title: "3RD PRIZE WINNER – CREONIX HACKATHON",
      description:
        "Built a working prototype under pressure and secured 3rd place among competing engineering teams."
    },
    {
      title: "FULL STACK DEVELOPER INTERN – PLANT GREEN",
      description:
        "Delivered core LMS + web features with React, Node.js, APIs, and databases, boosting usability and scalability."
    },
    {
      title: "EVENT COORDINATOR – AI ZYPHER (100+)",
      description:
        "Led the 'Code Auction' event end-to-end: logistics, engagement, and execution — strong leadership + communication flex."
    }
  ];

  return (
    <section
      id="contact"
      className="min-h-screen py-24 relative flex items-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-12"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center space-y-3">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white font-mono">
              Let's <span className="text-white">Work</span> Together
            </h2>
            <p className="text-sm uppercase tracking-[0.3em] text-gray-400 font-mono mt-2">
              Collab / Hire / Build
            </p>
          </motion.div>

          {/* 2 Box Layout */}
          <div className="grid lg:grid-cols-[70%_30%] gap-6">
            
            {/* BOX 1: Image (40%) + Achievements (60%) */}
            <motion.div 
              variants={itemVariants} 
              className="relative overflow-hidden rounded-2xl border border-white/15 bg-black/30 backdrop-blur-sm shadow-xl shadow-black/30"
            >
              <div className="flex flex-col md:flex-row h-full relative">
                {/* Left: Image (40%) */}
                <div className="md:w-[40%] relative min-h-[250px] md:min-h-full bg-black/40 backdrop-blur-sm">
                  <div className="absolute inset-0 flex items-center justify-center p-4">
                    <div className="relative w-full h-full rounded-xl overflow-hidden ring-1 ring-white/10">
                      <Image
                        src="/assets/images/contact-image.jpg"
                        alt="Visual representation"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 40vw"
                      />
                    </div>
                  </div>
                </div>

                {/* Right: Achievements (60%) */}
                <div className="md:w-[60%] p-8 flex flex-col justify-center">
                  <div className="space-y-7">
                    {achievements.map((achievement, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="group"
                      >
                        <h4 className="text-white font-black text-lg md:text-xl leading-tight font-mono">
                          {achievement.title}
                        </h4>
                        <p className="text-gray-300 text-sm leading-relaxed mt-2">
                          {achievement.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* BOX 2: Card-based Layout */}
            <motion.div 
              variants={itemVariants} 
              className="relative overflow-hidden rounded-2xl border border-white/15 bg-black/25 backdrop-blur-sm p-5 space-y-4 shadow-xl shadow-black/25"
            >
              {/* Info Cards */}
              <div className="space-y-2">
                {[ 
                  { label: "Location", value: "Chennai" },
                  { label: "Status", value: "Available" },
                  { label: "Response", value: "Within 24h" },
                  { label: "Timezone", value: "IST (UTC+5:30)" }
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between rounded-lg border border-white/10 bg-black/20 px-4 py-2.5 backdrop-blur-sm"
                  >
                    <span className="text-gray-400 font-medium text-sm">{item.label}</span>
                    <span className="text-white font-medium text-sm">{item.value}</span>
                  </div>
                ))}
              </div>

              {/* Opportunities Section */}
              <div className="pt-2 border-t border-white/10">
                <h4 className="text-white font-semibold text-base mb-3">
                  Opportunities I'm Open To
                </h4>
                <div className="flex flex-wrap gap-2">
                  {["Freelance", "Full-time", "Part-time", "Consulting", "Open Source"].map(
                    (item) => (
                      <span
                        key={item}
                        className="px-3 py-1.5 rounded-lg border border-white/20 bg-black/30 text-gray-200 text-xs font-medium backdrop-blur-sm hover:border-white/30 hover:text-white transition-colors"
                      >
                        {item}
                      </span>
                    )
                  )}
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-2 border-t border-white/10">
                <div className="grid grid-cols-4 gap-2">
                  {[ 
                    { href: social_links.github, label: "GITHUB", icon: <FaGithub className="text-xl" /> },
                    { href: social_links.linkedin, label: "LINKEDIN", icon: <FaLinkedin className="text-xl" /> },
                    { href: social_links.email, label: "EMAIL", icon: <FaEnvelope className="text-xl" /> },
                    { href: social_links.twitter, label: "TWITTER", icon: <FaTwitter className="text-xl" /> }
                  ].map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col items-center justify-center gap-1.5 rounded-lg border border-white/10 bg-black/20 py-3 px-2 backdrop-blur-sm transition-all duration-150 hover:border-white/25 hover:bg-black/30"
                    >
                      <span className="text-gray-300 group-hover:text-white transition-colors">{item.icon}</span>
                      <span className="text-[9px] font-semibold uppercase tracking-wider text-gray-400 group-hover:text-gray-200">
                        {item.label}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Resume Download */}
              <div className="pt-2 border-t border-white/10">
                <a
                  href={personalInfo.resume_url}
                  download
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-black/30 text-white font-semibold text-sm border border-white/20 backdrop-blur-sm hover:border-white/30 hover:bg-black/40 transition-all duration-200"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Resume
                </a>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
