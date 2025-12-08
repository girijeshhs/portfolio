"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { personalInfo, social_links } from "@/data/portfolio";
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter, FaMapMarkerAlt, FaClock, FaCheckCircle, FaPaperPlane, FaSpinner } from "react-icons/fa";
import ParticlesComponent from "@/components/Particles";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});

  const validateField = (name: string, value: string) => {
    switch (name) {
      case "name":
        return value.trim().length < 2 ? "Name must be at least 2 characters" : "";
      case "email":
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? "Please enter a valid email" : "";
      case "subject":
        return !value ? "Please select a subject" : "";
      case "message":
        return value.trim().length < 10 ? "Message must be at least 10 characters" : "";
      default:
        return "";
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setTouched({ ...touched, [name]: true });
    setErrors({ ...errors, [name]: validateField(name, value) });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (touched[name]) {
      setErrors({ ...errors, [name]: validateField(name, value) });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors: { [key: string]: string } = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key as keyof typeof formData]);
      if (error) newErrors[key] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setTouched({ name: true, email: true, subject: true, message: true });
      return;
    }

    setFormStatus("loading");
    
    // Simulate API call
    setTimeout(() => {
      setFormStatus("success");
      setTimeout(() => {
        setFormStatus("idle");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTouched({});
        setErrors({});
      }, 4000);
    }, 1500);
  };

  const messageLength = formData.message.length;
  const maxLength = 500;

  return (
    <section className="h-screen flex items-center justify-center relative overflow-hidden">
      <ParticlesComponent />
      
      {/* Dynamic Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/20 rounded-lg rotate-12 blur-xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-32 right-20 w-24 h-24 bg-pink-500/20 rounded-full blur-2xl pointer-events-none animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-500/10 rounded-full blur-xl pointer-events-none animate-pulse" style={{ animationDelay: '2s' }} />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-[320px_1fr_280px] gap-8 items-center"
        >
          {/* LEFT SIDEBAR - Pixel Art & Status */}
          <motion.div variants={itemVariants} className="hidden lg:flex flex-col gap-6">
            {/* Pixel Art Placeholder */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
              <div className="relative aspect-square rounded-2xl border-2 border-purple-500/30 bg-black/60 backdrop-blur-sm p-6 flex flex-col items-center justify-center overflow-hidden">
                {/* Pixel Art Grid */}
                <div className="grid grid-cols-8 gap-1 mb-4">
                  {[...Array(64)].map((_, i) => (
                    <div 
                      key={i}
                      className={`w-3 h-3 rounded-sm transition-all duration-300 ${
                        [0,7,8,15,16,23,56,63].includes(i) ? 'bg-purple-500/40' :
                        [27,28,35,36].includes(i) ? 'bg-pink-500/60' :
                        [18,19,20,21,26,29,34,37,42,43,44,45].includes(i) ? 'bg-purple-400/50' :
                        'bg-gray-800/30'
                      } hover:bg-purple-500/80 hover:scale-110`}
                      style={{ transitionDelay: `${i * 10}ms` }}
                    />
                  ))}
                </div>
                <p className="text-xs text-gray-400 font-mono text-center">pixel_developer.png</p>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="rounded-xl border border-green-500/20 bg-gradient-to-br from-green-500/5 to-emerald-500/5 backdrop-blur-sm p-4">
              <div className="flex items-center gap-2 mb-3">
                <div className="relative w-2 h-2">
                  <div className="absolute inset-0 rounded-full bg-green-400 animate-ping" />
                  <div className="relative rounded-full w-2 h-2 bg-green-400" />
                </div>
                <span className="text-green-400 text-sm font-bold font-mono">ONLINE</span>
              </div>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-gray-500">Response</span>
                  <span className="text-white font-medium">&lt; 24h</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Timezone</span>
                  <span className="text-white font-medium">IST</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CENTER - Compact Form */}
          <motion.div variants={itemVariants} className="relative">
            <AnimatePresence mode="wait">
              {formStatus === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="rounded-2xl border border-green-500/30 bg-black/50 backdrop-blur-xl p-8 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center"
                  >
                    <FaCheckCircle className="text-3xl text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-black text-white mb-2 font-mono">Sent!</h3>
                  <p className="text-gray-400 text-sm">I'll reply within 24 hours ✨</p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="rounded-2xl border border-white/10 bg-black/50 backdrop-blur-xl p-6 lg:p-8 shadow-2xl relative overflow-hidden"
                >
                  {/* Decorative Corner Elements */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-500/10 to-transparent rounded-bl-full" />
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-pink-500/10 to-transparent rounded-tr-full" />
                  
                  <div className="relative">
                    <h2 className="text-3xl font-black text-white font-mono mb-1">
                      Let's Talk<span className="text-purple-400">.</span>
                    </h2>
                    <p className="text-gray-400 text-sm mb-6">Got a cool idea? Drop me a message</p>

                    {/* Compact Grid - Name & Email */}
                    <div className="grid grid-cols-2 gap-3 mb-3">
                      <div>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={`w-full px-3 py-2.5 rounded-lg bg-black/40 border ${
                            touched.name && errors.name ? 'border-red-500/50' : 'border-white/10'
                          } text-white text-sm placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-all`}
                          placeholder="Name"
                        />
                        {touched.name && errors.name && (
                          <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                        )}
                      </div>
                      <div>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={`w-full px-3 py-2.5 rounded-lg bg-black/40 border ${
                            touched.email && errors.email ? 'border-red-500/50' : 'border-white/10'
                          } text-white text-sm placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-all`}
                          placeholder="Email"
                        />
                        {touched.email && errors.email && (
                          <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    {/* Subject */}
                    <div className="mb-3">
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`w-full px-3 py-2.5 rounded-lg bg-black/40 border ${
                          touched.subject && errors.subject ? 'border-red-500/50' : 'border-white/10'
                        } text-white text-sm focus:outline-none focus:border-purple-500/50 transition-all appearance-none cursor-pointer`}
                      >
                        <option value="" className="bg-black">What's this about?</option>
                        <option value="freelance" className="bg-black">💼 Freelance Gig</option>
                        <option value="fulltime" className="bg-black">🚀 Full-time Role</option>
                        <option value="parttime" className="bg-black">⏰ Part-time Work</option>
                        <option value="collaboration" className="bg-black">🤝 Let's Collab</option>
                        <option value="other" className="bg-black">💬 Just Saying Hi</option>
                      </select>
                      {touched.subject && errors.subject && (
                        <p className="text-red-400 text-xs mt-1">{errors.subject}</p>
                      )}
                    </div>

                    {/* Message */}
                    <div className="mb-4">
                      <div className="relative">
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          rows={4}
                          maxLength={maxLength}
                          className={`w-full px-3 py-2.5 rounded-lg bg-black/40 border ${
                            touched.message && errors.message ? 'border-red-500/50' : 'border-white/10'
                          } text-white text-sm placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-all resize-none`}
                          placeholder="Your message here..."
                        />
                        <span className="absolute bottom-2 right-2 text-xs text-gray-600">
                          {messageLength}/{maxLength}
                        </span>
                      </div>
                      {touched.message && errors.message && (
                        <p className="text-red-400 text-xs mt-1">{errors.message}</p>
                      )}
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={formStatus === "loading"}
                      className="group relative w-full py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold text-sm overflow-hidden transition-all hover:shadow-lg hover:shadow-purple-500/40 disabled:opacity-50"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span className="relative flex items-center justify-center gap-2">
                        {formStatus === "loading" ? (
                          <>
                            <FaSpinner className="animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <FaPaperPlane />
                            Send Message
                          </>
                        )}
                      </span>
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

          {/* RIGHT SIDEBAR - Info Cards */}
          <motion.div variants={itemVariants} className="hidden lg:flex flex-col gap-4">
            {/* Contact Info */}
            <div className="rounded-xl border border-white/10 bg-black/50 backdrop-blur-sm p-4">
              <h3 className="text-sm font-black text-white font-mono mb-3 flex items-center gap-2">
                <span className="w-1 h-4 bg-purple-500 rounded-full" />
                Quick Links
              </h3>
              <div className="space-y-2">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="group flex items-center gap-2 p-2 rounded-lg hover:bg-white/5 transition-all"
                >
                  <FaEnvelope className="text-purple-400 text-sm group-hover:scale-110 transition-transform" />
                  <span className="text-xs text-gray-400 group-hover:text-white truncate">{personalInfo.email}</span>
                </a>
                <div className="flex items-center gap-2 p-2 rounded-lg">
                  <FaMapMarkerAlt className="text-purple-400 text-sm" />
                  <span className="text-xs text-gray-400">{personalInfo.location}</span>
                </div>
              </div>
            </div>

            {/* Social Grid */}
            <div className="rounded-xl border border-white/10 bg-black/50 backdrop-blur-sm p-4">
              <h3 className="text-sm font-black text-white font-mono mb-3 flex items-center gap-2">
                <span className="w-1 h-4 bg-pink-500 rounded-full" />
                Socials
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { href: social_links.github, icon: FaGithub, label: "GitHub", color: "hover:bg-gray-700/20" },
                  { href: social_links.linkedin, icon: FaLinkedin, label: "LinkedIn", color: "hover:bg-blue-700/20" },
                  { href: social_links.twitter, icon: FaTwitter, label: "Twitter", color: "hover:bg-sky-700/20" },
                  { href: personalInfo.resume_url, icon: FaEnvelope, label: "Resume", color: "hover:bg-purple-700/20" }
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex flex-col items-center gap-1.5 p-3 rounded-lg border border-white/5 bg-black/30 transition-all ${item.color} group`}
                  >
                    <item.icon className="text-lg text-gray-400 group-hover:text-white group-hover:scale-110 transition-all" />
                    <span className="text-xs text-gray-600 group-hover:text-gray-400">{item.label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Random Fun Element */}
            <div className="rounded-xl border border-white/10 bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-gray-400">coffee_consumed</span>
                <span className="text-xs font-mono text-purple-400">∞</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-gray-400">bugs_fixed_today</span>
                <span className="text-xs font-mono text-green-400">{new Date().getDate()}</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
