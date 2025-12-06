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
            <p className="text-sm uppercase tracking-[0.3em] text-gray-400 font-mono">
              Collab / Hire / Build
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white font-mono">
              Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-300 to-purple-400 drop-shadow-[0_0_18px_rgba(56,189,248,0.35)]">Work</span> Together
            </h2>
            <div className="mx-auto h-px w-32 bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent" />
          </motion.div>

          {/* 2 Box Layout */}
          <div className="grid lg:grid-cols-[60%_35%] gap-6">
            
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
                        <div className="flex items-center gap-3 text-cyan-300 text-xs font-semibold tracking-[0.2em] uppercase font-mono">
                          <span className="h-[1px] w-6 bg-gradient-to-r from-cyan-400 to-purple-400" />
                          Milestone {index + 1}
                        </div>
                        <h4 className="text-white font-black text-lg md:text-xl mt-2 leading-tight font-mono">
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

            {/* BOX 2: Unified Layout (Aligned Labels & Headings) */}
            <motion.div 
              variants={itemVariants} 
              className="relative overflow-hidden rounded-2xl border border-white/15 bg-black/25 backdrop-blur-sm p-8 space-y-7 shadow-xl shadow-black/25"
            >
              {/* Top Section: Info (inline arrow + tilde, single-line rows) */}
              <div className="space-y-5 relative">
                <div className="grid gap-3">
                  {[ 
                    { label: "Location", value: "TN, Chennai" },
                    { label: "Status", value: "Available for work" },
                    { label: "Response", value: "Within 24 hours" },
                    { label: "Timezone", value: "IST (UTC+5:30)" }
                  ].map((item, idx) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between gap-4 rounded-lg border border-white/10 bg-black/20 px-4 py-3 backdrop-blur-sm transition-colors hover:border-cyan-400/25"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-green-400">➜</span>
                        <span className="text-cyan-400">~</span>
                        <span className="text-white font-semibold font-mono tracking-wide text-sm">{item.label}</span>
                      </div>
                      <p className="text-gray-200 text-sm font-medium">{item.value}</p>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-white/10">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="h-px w-8 bg-white/30" />
                    <h4 className="text-white font-semibold text-base font-mono tracking-wide">Opportunities I'm Seeking</h4>
                  </div>
                  <div className="space-y-2 pl-3">
                    {["Freelance Projects", "Full-time Roles", "Part-time Work", "Consulting", "Open Source Collaboration"].map(
                      (item) => (
                        <p key={item} className="text-gray-200 text-sm flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                          {item}
                        </p>
                      )
                    )}
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-4 border-t border-white/10 relative">
                <div className="grid grid-cols-4 gap-3">
                  {[ 
                    { href: social_links.github, label: "GitHub", icon: <FaGithub className="text-xl" /> },
                    { href: social_links.linkedin, label: "LinkedIn", icon: <FaLinkedin className="text-xl" /> },
                    { href: social_links.email, label: "Email", icon: <FaEnvelope className="text-xl" /> },
                    { href: social_links.twitter, label: "Twitter", icon: <FaTwitter className="text-xl" /> }
                  ].map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col items-center justify-center gap-2 rounded-xl border border-white/10 bg-black/20 px-4 py-4 text-gray-100 shadow-sm shadow-black/40 backdrop-blur-sm transition-all duration-150 hover:-translate-y-1 hover:border-cyan-300/30"
                    >
                      <span className="text-2xl text-white/90 group-hover:text-cyan-300 transition-colors">{item.icon}</span>
                      <span className="text-xs font-semibold uppercase tracking-wide text-gray-200 group-hover:text-white">
                        {item.label}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Resume Download */}
              <div className="pt-4 border-t border-white/10 flex flex-col items-center space-y-3 relative">
                <div className="flex items-center gap-3 text-gray-300 font-mono uppercase tracking-[0.2em] text-xs">
                  <span className="h-px w-10 bg-white/30" />
                  Resume
                  <span className="h-px w-10 bg-white/30" />
                </div>
                <h4 className="text-white font-black text-xl text-center font-mono">Download my resume</h4>
                <a
                  href={personalInfo.resume_url}
                  download
                  className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-black/20 text-white font-semibold shadow-sm shadow-black/40 border border-white/10 backdrop-blur-sm hover:border-cyan-300/30 hover:-translate-y-[2px] transition-all duration-200 text-sm"
                >
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
