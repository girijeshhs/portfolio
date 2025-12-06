"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";
import { FaMapMarkerAlt, FaClock, FaCheckCircle, FaBolt, FaFileDownload } from "react-icons/fa";
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
      description: "Developed a working prototype under time pressure and secured 3rd place among competing engineering teams."
    },
    { 
      title: "FULL STACK DEVELOPER INTERN AT PLANT GREEN", 
      description: "Built core features for their LMS and official website using React, Node.js, APIs, and databases — improving platform scalability and usability."
    },
    { 
      title: "EVENT COORDINATOR – AI ZYPHER (100+ PARTICIPANTS)", 
      description: "Led the 'Code Auction' event, handled logistics, engagement, and execution — strong leadership + communication flex."
    }
  ];

  return (
    <section id="contact" className="min-h-screen py-20 relative flex items-center">
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
              Let's <span className="text-cyan-400">Work</span> Together
            </h2>
          </motion.div>

          {/* 2 Box Layout */}
          <div className="grid lg:grid-cols-[60%_35%] gap-6">
            
            {/* BOX 1: Image (40%) + Achievements (60%) */}
            <motion.div 
              variants={itemVariants} 
              className="bg-[#0a0a0a]/80 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden"
            >
              <div className="flex flex-col md:flex-row h-full">
                {/* Left: Image (40%) */}
                <div className="md:w-[40%] relative min-h-[250px] md:min-h-full bg-gradient-to-br from-purple-900/20 to-cyan-900/20">
                  <div className="absolute inset-0 flex items-center justify-center p-4">
                    <div className="relative w-full h-full">
                      <Image
                        src="/assets/images/contact-image.jpg"
                        alt="Visual representation"
                        fill
                        className="object-cover rounded-lg"
                        sizes="(max-width: 768px) 100vw, 40vw"
                      />
                    </div>
                  </div>
                </div>

                {/* Right: Achievements (60%) */}
                <div className="md:w-[60%] p-8 flex flex-col justify-center">
                  <div className="space-y-8">
                    {achievements.map((achievement, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="group"
                      >
                        <h4 className="text-white font-bold text-base mb-2">
                          {achievement.title}
                        </h4>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {achievement.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* BOX 2: Details */}
            <motion.div 
              variants={itemVariants} 
              className="bg-[#0a0a0a]/80 backdrop-blur-sm border border-gray-800 rounded-xl p-6"
            >
              <h3 className="text-2xl font-bold text-white mb-6 border-b border-gray-800 pb-3">
                Details
              </h3>
              
              <div className="space-y-5">
                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-cyan-600/20 border border-cyan-700/40 flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt className="w-5 h-5 text-cyan-300" />
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm font-medium">Location</div>
                    <div className="text-white text-base mt-1">TN, India</div>
                  </div>
                </div>

                {/* Status */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-600/20 border border-green-700/40 flex items-center justify-center flex-shrink-0">
                    <FaCheckCircle className="w-5 h-5 text-green-300" />
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm font-medium">Status</div>
                    <div className="text-white text-base mt-1">Available for work</div>
                  </div>
                </div>

                {/* Response Time */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-yellow-600/20 border border-yellow-700/40 flex items-center justify-center flex-shrink-0">
                    <FaBolt className="w-5 h-5 text-yellow-300" />
                  </div>
                  <div>
                    <div className="text-gray-400 text-sm font-medium">Response Time</div>
                    <div className="text-white text-base mt-1">Within 24 hrs</div>
                  </div>
                </div>

                {/* Download Resume Button */}
                <div className="pt-6 border-t border-gray-800">
                  <a
                    href={personalInfo.resume_url}
                    download
                    className="flex items-center justify-center gap-3 w-full px-6 py-3.5 bg-gradient-to-r from-purple-600 to-purple-500 text-white font-semibold rounded-lg shadow-lg hover:from-purple-700 hover:to-purple-600 transition-all duration-300 hover:shadow-purple-500/30"
                  >
                    <FaFileDownload className="w-5 h-5" />
                    Download Resume
                  </a>
                </div>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
