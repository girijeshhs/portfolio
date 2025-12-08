"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { personalInfo, social_links } from "@/data/portfolio";
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter, FaTerminal, FaCheckCircle, FaPaperPlane, FaSpinner } from "react-icons/fa";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.4 }
  }
};

export default function TerminalContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [formStatus, setFormStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('en-US', { hour12: false }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (touched[name]) {
      setErrors({ ...errors, [name]: validateField(name, value) });
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setTouched({ ...touched, [name]: true });
    setErrors({ ...errors, [name]: validateField(name, value) });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
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
    <section id="contact" className="py-20 relative overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Terminal Header */}
          <motion.div variants={itemVariants} className="mb-8">
            <div className="flex items-center gap-3 mb-2">
              <FaTerminal className="text-green-400 text-2xl" />
              <h2 className="text-3xl md:text-4xl font-black text-white font-mono">
                <span className="text-green-400">~/</span>contact
              </h2>
            </div>
            <p className="text-gray-400 font-mono text-sm ml-11">
              <span className="text-purple-400">$</span> Send me a message and let&apos;s collaborate
            </p>
          </motion.div>

          {/* Terminal Window */}
          <motion.div variants={itemVariants} className="relative">
            {/* Window Chrome */}
            <div className="rounded-t-lg bg-gradient-to-r from-gray-800 to-gray-900 border-t border-x border-gray-700 px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="text-gray-400 text-xs font-mono">contact@terminal</div>
              <div className="text-gray-500 text-xs font-mono">{currentTime}</div>
            </div>

            {/* Terminal Content */}
            <div className="bg-black/95 border border-gray-700 rounded-b-lg p-6 md:p-8 font-mono text-sm backdrop-blur-sm">
              <AnimatePresence mode="wait">
                {formStatus === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-4"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-green-400">✓</span>
                      <div>
                        <p className="text-green-400 mb-2">Message sent successfully!</p>
                        <p className="text-gray-400 text-xs">
                          <span className="text-purple-400">info:</span> I&apos;ll get back to you within 24 hours
                        </p>
                        <p className="text-gray-400 text-xs mt-1">
                          <span className="text-blue-400">email:</span> {personalInfo.email}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="grid md:grid-cols-3 gap-6">
                      {/* Left Column - Form */}
                      <div className="md:col-span-2 space-y-4">
                        {/* Name & Email */}
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-green-400 text-xs mb-2">
                              <span className="text-purple-400">$</span> --name
                            </label>
                            <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              className={`w-full bg-black/50 border ${
                                touched.name && errors.name ? 'border-red-500' : 'border-gray-700'
                              } rounded px-3 py-2 text-white focus:outline-none focus:border-green-500 transition-colors`}
                              placeholder="John Doe"
                            />
                            {touched.name && errors.name && (
                              <p className="text-red-400 text-xs mt-1">! {errors.name}</p>
                            )}
                          </div>
                          <div>
                            <label className="block text-green-400 text-xs mb-2">
                              <span className="text-purple-400">$</span> --email
                            </label>
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              className={`w-full bg-black/50 border ${
                                touched.email && errors.email ? 'border-red-500' : 'border-gray-700'
                              } rounded px-3 py-2 text-white focus:outline-none focus:border-green-500 transition-colors`}
                              placeholder="john@example.com"
                            />
                            {touched.email && errors.email && (
                              <p className="text-red-400 text-xs mt-1">! {errors.email}</p>
                            )}
                          </div>
                        </div>

                        {/* Subject */}
                        <div>
                          <label className="block text-green-400 text-xs mb-2">
                            <span className="text-purple-400">$</span> --subject
                          </label>
                          <select
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className={`w-full bg-black/50 border ${
                              touched.subject && errors.subject ? 'border-red-500' : 'border-gray-700'
                            } rounded px-3 py-2 text-white focus:outline-none focus:border-green-500 transition-colors cursor-pointer`}
                          >
                            <option value="" className="bg-black">Select option...</option>
                            <option value="freelance" className="bg-black">freelance_project</option>
                            <option value="fulltime" className="bg-black">fulltime_opportunity</option>
                            <option value="parttime" className="bg-black">parttime_work</option>
                            <option value="collaboration" className="bg-black">collaboration</option>
                            <option value="other" className="bg-black">other</option>
                          </select>
                          {touched.subject && errors.subject && (
                            <p className="text-red-400 text-xs mt-1">! {errors.subject}</p>
                          )}
                        </div>

                        {/* Message */}
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <label className="block text-green-400 text-xs">
                              <span className="text-purple-400">$</span> --message
                            </label>
                            <span className="text-gray-600 text-xs">
                              {messageLength}/{maxLength}
                            </span>
                          </div>
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            rows={6}
                            maxLength={maxLength}
                            className={`w-full bg-black/50 border ${
                              touched.message && errors.message ? 'border-red-500' : 'border-gray-700'
                            } rounded px-3 py-2 text-white focus:outline-none focus:border-green-500 transition-colors resize-none`}
                            placeholder="Your message here..."
                          />
                          {touched.message && errors.message && (
                            <p className="text-red-400 text-xs mt-1">! {errors.message}</p>
                          )}
                        </div>

                        {/* Submit Button */}
                        <button
                          type="submit"
                          disabled={formStatus === "loading"}
                          className="group relative w-full md:w-auto px-6 py-3 bg-green-500/10 border border-green-500/50 rounded text-green-400 font-semibold hover:bg-green-500/20 hover:border-green-400 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          <span className="flex items-center justify-center gap-2">
                            {formStatus === "loading" ? (
                              <>
                                <FaSpinner className="animate-spin" />
                                <span>Sending...</span>
                              </>
                            ) : (
                              <>
                                <span className="text-purple-400">$</span>
                                <span>send_message</span>
                                <FaPaperPlane className="group-hover:translate-x-1 transition-transform" />
                              </>
                            )}
                          </span>
                        </button>
                      </div>

                      {/* Right Column - Info */}
                      <div className="space-y-4">
                        {/* Status */}
                        <div className="bg-green-500/5 border border-green-500/20 rounded p-4">
                          <div className="flex items-center gap-2 mb-3">
                            <div className="relative w-2 h-2">
                              <div className="absolute inset-0 rounded-full bg-green-400 animate-ping" />
                              <div className="relative rounded-full w-2 h-2 bg-green-400" />
                            </div>
                            <span className="text-green-400 text-xs font-bold">ONLINE</span>
                          </div>
                          <div className="space-y-2 text-xs text-gray-400">
                            <div className="flex justify-between">
                              <span className="text-gray-500">response:</span>
                              <span>&lt; 24h</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-500">timezone:</span>
                              <span>IST</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-500">location:</span>
                              <span>{personalInfo.location}</span>
                            </div>
                          </div>
                        </div>

                        {/* Quick Links */}
                        <div className="bg-purple-500/5 border border-purple-500/20 rounded p-4">
                          <p className="text-purple-400 text-xs mb-3 font-bold">QUICK_LINKS</p>
                          <div className="space-y-2">
                            <a
                              href={`mailto:${personalInfo.email}`}
                              className="flex items-center gap-2 text-gray-400 hover:text-white text-xs transition-colors group"
                            >
                              <FaEnvelope className="text-purple-400 group-hover:scale-110 transition-transform" />
                              <span className="truncate">email</span>
                            </a>
                            <a
                              href={social_links.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 text-gray-400 hover:text-white text-xs transition-colors group"
                            >
                              <FaGithub className="text-purple-400 group-hover:scale-110 transition-transform" />
                              <span>github</span>
                            </a>
                            <a
                              href={social_links.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 text-gray-400 hover:text-white text-xs transition-colors group"
                            >
                              <FaLinkedin className="text-purple-400 group-hover:scale-110 transition-transform" />
                              <span>linkedin</span>
                            </a>
                            <a
                              href={social_links.twitter}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 text-gray-400 hover:text-white text-xs transition-colors group"
                            >
                              <FaTwitter className="text-purple-400 group-hover:scale-110 transition-transform" />
                              <span>twitter</span>
                            </a>
                          </div>
                        </div>

                        {/* Fun Stats */}
                        <div className="bg-blue-500/5 border border-blue-500/20 rounded p-4">
                          <p className="text-blue-400 text-xs mb-3 font-bold">DEBUG_INFO</p>
                          <div className="space-y-1 text-xs text-gray-400">
                            <div className="flex justify-between">
                              <span className="text-gray-500">coffee:</span>
                              <span className="text-yellow-400">∞</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-500">bugs_fixed:</span>
                              <span className="text-green-400">{new Date().getDate()}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-gray-500">uptime:</span>
                              <span className="text-blue-400">24/7</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Terminal Footer */}
          <motion.div variants={itemVariants} className="mt-4 flex items-center gap-2 text-xs text-gray-600 font-mono">
            <span className="text-green-400">●</span>
            <span>Press Ctrl+C to copy • Ctrl+V to paste</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
