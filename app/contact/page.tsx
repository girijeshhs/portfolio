"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { personalInfo, social_links, skills } from "@/data/portfolio";
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter, FaMapMarkerAlt, FaClock, FaCheckCircle, FaCode, FaLaptopCode, FaRocket } from "react-icons/fa";
import Image from "next/image";
import ParticlesComponent from "@/components/Particles";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setFormStatus("success");
    setTimeout(() => {
      setFormStatus("idle");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const expertise = [
    { icon: <FaCode />, title: "Full Stack Development", desc: "React, Node.js, Next.js, TypeScript" },
    { icon: <FaLaptopCode />, title: "Blockchain & Web3", desc: "Solidity, Smart Contracts, DApps" },
    { icon: <FaRocket />, title: "ML & AI Solutions", desc: "Python, TensorFlow, Data Analysis" }
  ];

  const availability = [
    { day: "Mon - Fri", hours: "9 AM - 6 PM IST", available: true },
    { day: "Saturday", hours: "10 AM - 2 PM IST", available: true },
    { day: "Sunday", hours: "Unavailable", available: false }
  ];

  return (
    <section className="min-h-screen py-24 relative overflow-hidden">
      <ParticlesComponent />
      
      {/* Background gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          {/* Hero Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white font-mono">
              Let's <span className="text-purple-400">Work</span> Together
            </h1>
            <p className="text-sm md:text-base uppercase tracking-[0.3em] text-gray-400 font-mono">
              Collab • Hire • Build
            </p>
            <p className="text-gray-300 text-base md:text-lg max-w-3xl mx-auto leading-relaxed pt-2">
              {personalInfo.extended_bio}
            </p>
          </motion.div>

          {/* Main Grid Layout */}
          <div className="grid lg:grid-cols-[1fr_400px] gap-8">
            
            {/* Left Column - Contact Form & Info */}
            <div className="space-y-8">
              
              {/* Contact Form */}
              <motion.div 
                variants={itemVariants}
                className="relative overflow-hidden rounded-2xl border border-white/15 bg-black/30 backdrop-blur-sm p-6 md:p-8 shadow-xl"
              >
                <h2 className="text-2xl md:text-3xl font-black text-white font-mono mb-6 flex items-center gap-3">
                  <FaEnvelope className="text-purple-400" />
                  Send a Message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white placeholder-gray-500 focus:border-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white placeholder-gray-500 focus:border-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white focus:border-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all"
                    >
                      <option value="">Select a subject</option>
                      <option value="freelance">Freelance Project</option>
                      <option value="fulltime">Full-time Opportunity</option>
                      <option value="consulting">Consulting</option>
                      <option value="collaboration">Collaboration</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-lg bg-black/40 border border-white/10 text-white placeholder-gray-500 focus:border-purple-500/50 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all resize-none"
                      placeholder="Tell me about your project or opportunity..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full py-4 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold text-base hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-200 flex items-center justify-center gap-2"
                  >
                    {formStatus === "success" ? (
                      <>
                        <FaCheckCircle /> Message Sent!
                      </>
                    ) : (
                      <>
                        <FaEnvelope /> Send Message
                      </>
                    )}
                  </button>
                </form>
              </motion.div>

              {/* Expertise Areas */}
              <motion.div 
                variants={itemVariants}
                className="relative overflow-hidden rounded-2xl border border-white/15 bg-black/30 backdrop-blur-sm p-6 md:p-8 shadow-xl"
              >
                <h2 className="text-2xl font-black text-white font-mono mb-6">
                  What I Can Help With
                </h2>
                
                <div className="grid md:grid-cols-3 gap-4">
                  {expertise.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl border border-white/10 bg-black/20 hover:border-purple-500/30 hover:bg-black/30 transition-all group"
                    >
                      <div className="text-3xl text-purple-400 mb-3 group-hover:scale-110 transition-transform">
                        {item.icon}
                      </div>
                      <h3 className="text-white font-bold text-sm mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 text-xs leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="space-y-6">
              
              {/* Profile Card */}
              <motion.div 
                variants={itemVariants}
                className="relative overflow-hidden rounded-2xl border border-white/15 bg-black/30 backdrop-blur-sm p-6 shadow-xl"
              >
                <div className="text-center mb-6">
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 animate-pulse" />
                    <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-black/50">
                      <Image
                        src="/assets/images/placeholder-profile.png"
                        alt={personalInfo.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-black text-white font-mono">
                    {personalInfo.name}
                  </h3>
                  <p className="text-purple-400 text-sm font-medium">
                    {personalInfo.title}
                  </p>
                </div>

                {/* Quick Info */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-sm">
                    <FaMapMarkerAlt className="text-purple-400 flex-shrink-0" />
                    <span className="text-gray-300">{personalInfo.location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <FaClock className="text-purple-400 flex-shrink-0" />
                    <span className="text-gray-300">IST (UTC+5:30)</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
                    <span className="text-green-400 font-medium">Available for work</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="grid grid-cols-2 gap-3">
                  {[ 
                    { href: social_links.github, label: "GitHub", icon: <FaGithub /> },
                    { href: social_links.linkedin, label: "LinkedIn", icon: <FaLinkedin /> },
                    { href: social_links.email, label: "Email", icon: <FaEnvelope /> },
                    { href: social_links.twitter, label: "Twitter", icon: <FaTwitter /> }
                  ].map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 py-3 rounded-lg border border-white/10 bg-black/20 text-gray-300 hover:text-white hover:border-purple-500/30 hover:bg-black/30 transition-all text-sm font-medium"
                    >
                      {item.icon}
                      <span>{item.label}</span>
                    </a>
                  ))}
                </div>
              </motion.div>

              {/* Availability */}
              <motion.div 
                variants={itemVariants}
                className="relative overflow-hidden rounded-2xl border border-white/15 bg-black/30 backdrop-blur-sm p-6 shadow-xl"
              >
                <h3 className="text-lg font-black text-white font-mono mb-4">
                  Availability
                </h3>
                <div className="space-y-3">
                  {availability.map((slot, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-3 rounded-lg bg-black/20 border border-white/5"
                    >
                      <div>
                        <div className="text-white text-sm font-medium">{slot.day}</div>
                        <div className="text-gray-400 text-xs">{slot.hours}</div>
                      </div>
                      <div className={`w-2 h-2 rounded-full ${slot.available ? 'bg-green-400' : 'bg-gray-600'}`} />
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-4 text-center">
                  Response time: Within 24 hours
                </p>
              </motion.div>

              {/* Opportunities */}
              <motion.div 
                variants={itemVariants}
                className="relative overflow-hidden rounded-2xl border border-white/15 bg-black/30 backdrop-blur-sm p-6 shadow-xl"
              >
                <h3 className="text-lg font-black text-white font-mono mb-4">
                  Open To
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {["Freelance", "Full-time", "Part-time", "Consulting", "Open Source", "Collaborations"].map(
                    (item) => (
                      <span
                        key={item}
                        className="px-3 py-2 rounded-lg border border-white/10 bg-black/20 text-gray-200 text-xs font-medium text-center hover:border-purple-500/30 hover:text-white transition-all"
                      >
                        {item}
                      </span>
                    )
                  )}
                </div>
              </motion.div>

              {/* Resume Download */}
              <motion.div variants={itemVariants}>
                <a
                  href={personalInfo.resume_url}
                  download
                  className="flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold text-base hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-200"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Resume
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
