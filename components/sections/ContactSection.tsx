"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { personalInfo, social_links } from "@/data/portfolio";
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter, FaFileDownload, FaMapMarkerAlt, FaClock, FaCheckCircle, FaBolt } from "react-icons/fa";

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

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: "", email: "", message: "" });
  };

  const socials = [
    { name: "GitHub", icon: FaGithub, url: social_links.github, handle: "@girijeshhs" },
    { name: "LinkedIn", icon: FaLinkedin, url: social_links.linkedin, handle: "girijesh-s" },
    { name: "Email", icon: FaEnvelope, url: social_links.email, handle: personalInfo.email },
    ...(social_links.twitter ? [{ name: "Twitter", icon: FaTwitter, url: social_links.twitter, handle: "@girijesh" }] : []),
  ];

  const availability = [
    { label: "Freelance", active: true },
    { label: "Full-time", active: true },
    { label: "Consulting", active: true },
  ];

  return (
    <section id="contact" className="py-20 relative">
      {/* Background accent */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-12"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              Let's Work <span className="text-purple-400">Together</span>
            </h2>
            <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
              Open to collaborations, freelance work, and full-time opportunities
            </p>
          </motion.div>

          {/* 3 Column Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Column 1: Contact Form */}
            <motion.div variants={itemVariants} className="bg-[#0a0a0a]/80 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white/5 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-cyan-500/20"
                >
                  Send Message
                </button>
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-green-400 text-sm text-center flex items-center justify-center gap-2"
                  >
                    <FaCheckCircle /> Message sent successfully!
                  </motion.div>
                )}
              </form>
            </motion.div>

            {/* Column 2: Social Links */}
            <motion.div variants={itemVariants} className="bg-[#0a0a0a]/80 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-6">Find Me Online</h3>
              <div className="space-y-4">
                {socials.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-3 rounded-lg bg-white/5 border border-gray-800 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-300 group"
                    >
                      <div className="w-10 h-10 rounded-full bg-white/5 border border-gray-700 flex items-center justify-center group-hover:border-purple-500/50 transition-colors">
                        <Icon className="text-lg text-gray-400 group-hover:text-purple-400 transition-colors" />
                      </div>
                      <div className="flex-1">
                        <div className="text-white font-medium text-sm">{social.name}</div>
                        <div className="text-gray-500 text-xs group-hover:text-purple-400 transition-colors">{social.handle}</div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </motion.div>

            {/* Column 3: Quick Details */}
            <motion.div variants={itemVariants} className="bg-[#0a0a0a]/80 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-6">Quick Details</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="text-purple-400 mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-gray-400 text-xs">Location</div>
                    <div className="text-white text-sm">{personalInfo.location}</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaClock className="text-purple-400 mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-gray-400 text-xs">Timezone</div>
                    <div className="text-white text-sm">IST (UTC+5:30)</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaCheckCircle className="text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-gray-400 text-xs">Status</div>
                    <div className="text-white text-sm">Available for work</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaBolt className="text-yellow-400 mt-1 flex-shrink-0" />
                  <div>
                    <div className="text-gray-400 text-xs">Response Time</div>
                    <div className="text-white text-sm">Within 24 hours</div>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-800">
                  <a 
                    href={personalInfo.resume_url} 
                    download
                    className="flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-purple-500/20 border border-purple-500/50 text-purple-300 font-medium rounded-lg hover:bg-purple-500/30 transition-all duration-300"
                  >
                    <FaFileDownload /> Download Resume
                  </a>
                </div>

                <div className="pt-4">
                  <div className="text-gray-400 text-xs mb-3">Currently open to:</div>
                  <div className="flex flex-wrap gap-2">
                    {availability.map((item) => (
                      <span
                        key={item.label}
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          item.active
                            ? "bg-green-500/20 text-green-300 border border-green-500/30"
                            : "bg-gray-500/20 text-gray-400 border border-gray-500/30"
                        }`}
                      >
                        {item.label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
