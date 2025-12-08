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
    <section className="min-h-screen py-20 md:py-24 relative overflow-hidden">
      <ParticlesComponent />
      
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-pink-500/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="h-full"
        >
          {/* Page Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white font-mono mb-4">
              Get In <span className="text-purple-400">Touch</span>
            </h1>
            <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
              Have a project in mind? Let's discuss how we can work together.
            </p>
          </motion.div>

          {/* Split Layout: 70-30 */}
          <div className="grid lg:grid-cols-[1fr_380px] xl:grid-cols-[1fr_400px] gap-6 lg:gap-8 items-start">
            
            {/* LEFT COLUMN - Contact Form (70%) */}
            <motion.div 
              variants={itemVariants}
              className="relative"
            >
              <div className="lg:sticky lg:top-24">
                <AnimatePresence mode="wait">
                  {formStatus === "success" ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="rounded-2xl border border-green-500/30 bg-black/40 backdrop-blur-md p-12 text-center min-h-[600px] flex flex-col items-center justify-center"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                        className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center"
                      >
                        <FaCheckCircle className="text-4xl text-white" />
                      </motion.div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Message Sent!</h3>
                      <p className="text-gray-300 mb-2 max-w-md">
                        Thanks for reaching out. I'll get back to you within 24 hours.
                      </p>
                      <p className="text-sm text-gray-500">
                        You can also reach me directly at{" "}
                        <a href={`mailto:${personalInfo.email}`} className="text-purple-400 hover:underline">
                          {personalInfo.email}
                        </a>
                      </p>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md p-6 md:p-8 lg:p-10 shadow-2xl"
                      noValidate
                    >
                      <h2 className="text-2xl md:text-3xl font-black text-white font-mono mb-8">
                        Send a Message
                      </h2>

                      {/* Name & Email Grid */}
                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        {/* Name Field */}
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                            Your Name <span className="text-red-400">*</span>
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={`w-full px-4 py-3.5 rounded-lg bg-black/50 border ${
                              touched.name && errors.name 
                                ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/20' 
                                : 'border-white/10 focus:border-purple-500/50 focus:ring-purple-500/20'
                            } text-white placeholder-gray-500 focus:outline-none focus:ring-2 transition-all`}
                            placeholder="John Doe"
                            aria-invalid={touched.name && !!errors.name}
                            aria-describedby={errors.name ? "name-error" : undefined}
                          />
                          {touched.name && errors.name && (
                            <motion.p
                              initial={{ opacity: 0, y: -5 }}
                              animate={{ opacity: 1, y: 0 }}
                              id="name-error"
                              className="text-red-400 text-xs mt-1.5"
                              role="alert"
                            >
                              {errors.name}
                            </motion.p>
                          )}
                        </div>

                        {/* Email Field */}
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                            Email Address <span className="text-red-400">*</span>
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={`w-full px-4 py-3.5 rounded-lg bg-black/50 border ${
                              touched.email && errors.email 
                                ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/20' 
                                : 'border-white/10 focus:border-purple-500/50 focus:ring-purple-500/20'
                            } text-white placeholder-gray-500 focus:outline-none focus:ring-2 transition-all`}
                            placeholder="john@example.com"
                            aria-invalid={touched.email && !!errors.email}
                            aria-describedby={errors.email ? "email-error" : undefined}
                          />
                          {touched.email && errors.email && (
                            <motion.p
                              initial={{ opacity: 0, y: -5 }}
                              animate={{ opacity: 1, y: 0 }}
                              id="email-error"
                              className="text-red-400 text-xs mt-1.5"
                              role="alert"
                            >
                              {errors.email}
                            </motion.p>
                          )}
                        </div>
                      </div>

                      {/* Subject Field */}
                      <div className="mb-6">
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                          Subject <span className="text-red-400">*</span>
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={`w-full px-4 py-3.5 rounded-lg bg-black/50 border ${
                            touched.subject && errors.subject 
                              ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/20' 
                              : 'border-white/10 focus:border-purple-500/50 focus:ring-purple-500/20'
                          } text-white focus:outline-none focus:ring-2 transition-all appearance-none cursor-pointer`}
                          aria-invalid={touched.subject && !!errors.subject}
                          aria-describedby={errors.subject ? "subject-error" : undefined}
                        >
                          <option value="" className="bg-black">Select a subject</option>
                          <option value="freelance" className="bg-black">Freelance Project</option>
                          <option value="fulltime" className="bg-black">Full-time Opportunity</option>
                          <option value="parttime" className="bg-black">Part-time Work</option>
                          <option value="consulting" className="bg-black">Consulting</option>
                          <option value="collaboration" className="bg-black">Collaboration</option>
                          <option value="other" className="bg-black">Other</option>
                        </select>
                        {touched.subject && errors.subject && (
                          <motion.p
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            id="subject-error"
                            className="text-red-400 text-xs mt-1.5"
                            role="alert"
                          >
                            {errors.subject}
                          </motion.p>
                        )}
                      </div>

                      {/* Message Field */}
                      <div className="mb-6">
                        <div className="flex items-center justify-between mb-2">
                          <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                            Message <span className="text-red-400">*</span>
                          </label>
                          <span className={`text-xs ${messageLength > maxLength ? 'text-red-400' : 'text-gray-500'}`}>
                            {messageLength}/{maxLength}
                          </span>
                        </div>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          rows={6}
                          maxLength={maxLength}
                          className={`w-full px-4 py-3.5 rounded-lg bg-black/50 border ${
                            touched.message && errors.message 
                              ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500/20' 
                              : 'border-white/10 focus:border-purple-500/50 focus:ring-purple-500/20'
                          } text-white placeholder-gray-500 focus:outline-none focus:ring-2 transition-all resize-none`}
                          placeholder="Tell me about your project, timeline, and any specific requirements..."
                          aria-invalid={touched.message && !!errors.message}
                          aria-describedby={errors.message ? "message-error" : undefined}
                        />
                        {touched.message && errors.message && (
                          <motion.p
                            initial={{ opacity: 0, y: -5 }}
                            animate={{ opacity: 1, y: 0 }}
                            id="message-error"
                            className="text-red-400 text-xs mt-1.5"
                            role="alert"
                          >
                            {errors.message}
                          </motion.p>
                        )}
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        disabled={formStatus === "loading"}
                        className="group relative w-full py-4 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold text-base overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:ring-offset-2 focus:ring-offset-black disabled:opacity-50 disabled:cursor-not-allowed"
                        aria-live="polite"
                      >
                        <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <span className="relative flex items-center justify-center gap-2">
                          {formStatus === "loading" ? (
                            <>
                              <FaSpinner className="animate-spin" aria-hidden="true" />
                              Sending...
                            </>
                          ) : (
                            <>
                              <FaPaperPlane aria-hidden="true" />
                              Send Message
                            </>
                          )}
                        </span>
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* RIGHT COLUMN - Information Sidebar (30%) */}
            <div className="space-y-6">
              
              {/* Direct Contact Card */}
              <motion.div
                variants={itemVariants}
                className="rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md p-6 shadow-xl"
              >
                <h3 className="text-lg font-black text-white font-mono mb-4">
                  Direct Contact
                </h3>
                <div className="space-y-4">
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="group flex items-start gap-3 p-3 rounded-lg bg-black/30 border border-white/5 hover:border-purple-500/30 hover:bg-black/50 transition-all"
                    aria-label={`Send email to ${personalInfo.email}`}
                  >
                    <FaEnvelope className="text-purple-400 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" aria-hidden="true" />
                    <div className="flex-1 min-w-0">
                      <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Email</div>
                      <div className="text-white text-sm font-medium truncate">{personalInfo.email}</div>
                    </div>
                  </a>
                  
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-black/30 border border-white/5">
                    <FaMapMarkerAlt className="text-purple-400 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <div className="flex-1">
                      <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Location</div>
                      <div className="text-white text-sm font-medium">{personalInfo.location}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-3 rounded-lg bg-black/30 border border-white/5">
                    <FaClock className="text-purple-400 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <div className="flex-1">
                      <div className="text-xs text-gray-500 uppercase tracking-wider mb-1">Timezone</div>
                      <div className="text-white text-sm font-medium">IST (UTC+5:30)</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Availability Status */}
              <motion.div
                variants={itemVariants}
                className="rounded-2xl border border-green-500/30 bg-gradient-to-br from-green-500/10 to-emerald-500/10 backdrop-blur-md p-6 shadow-xl"
                role="status"
                aria-live="polite"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="relative">
                    <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" aria-hidden="true" />
                    <div className="absolute inset-0 w-3 h-3 rounded-full bg-green-400 animate-ping" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-black text-white font-mono">
                    Available for Work
                  </h3>
                </div>
                <p className="text-sm text-gray-300 mb-4">
                  Currently open to freelance projects and full-time opportunities.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Working Hours</span>
                    <span className="text-white font-medium">Mon-Fri, 9AM-6PM</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Response Time</span>
                    <span className="text-green-400 font-medium">Within 24 hours</span>
                  </div>
                </div>
              </motion.div>

              {/* Social Links */}
              <motion.div
                variants={itemVariants}
                className="rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md p-6 shadow-xl"
              >
                <h3 className="text-lg font-black text-white font-mono mb-4">
                  Connect
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { href: social_links.github, label: "GitHub", icon: FaGithub, color: "hover:bg-gray-700/30 hover:border-gray-500/30" },
                    { href: social_links.linkedin, label: "LinkedIn", icon: FaLinkedin, color: "hover:bg-blue-700/30 hover:border-blue-500/30" },
                    { href: social_links.email, label: "Email", icon: FaEnvelope, color: "hover:bg-purple-700/30 hover:border-purple-500/30" },
                    { href: social_links.twitter, label: "Twitter", icon: FaTwitter, color: "hover:bg-sky-700/30 hover:border-sky-500/30" }
                  ].map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Connect on ${item.label}`}
                      className={`group flex flex-col items-center justify-center gap-2 p-4 rounded-lg border border-white/5 bg-black/30 transition-all ${item.color}`}
                    >
                      <item.icon className="text-2xl text-gray-400 group-hover:text-white group-hover:scale-110 transition-all" aria-hidden="true" />
                      <span className="text-xs text-gray-500 group-hover:text-gray-300 font-medium">
                        {item.label}
                      </span>
                    </a>
                  ))}
                </div>
              </motion.div>

              {/* Download Resume */}
              <motion.div variants={itemVariants}>
                <a
                  href={personalInfo.resume_url}
                  download
                  className="group flex items-center justify-center gap-3 w-full py-4 rounded-xl border border-white/10 bg-black/40 backdrop-blur-md text-white font-semibold text-base hover:border-purple-500/30 hover:bg-black/60 transition-all focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:ring-offset-2 focus:ring-offset-black"
                  aria-label="Download resume PDF"
                >
                  <svg className="w-5 h-5 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
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
