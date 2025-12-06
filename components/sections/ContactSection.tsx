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

            {/* BOX 2: Unified Layout */}
            <motion.div 
              variants={itemVariants} 
              className="bg-[#0a0a0a]/80 backdrop-blur-sm border border-gray-800 rounded-xl p-8 space-y-6"
            >
              {/* Section 1 & 2 Combined: Info + Opportunities */}
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-3 p-5 bg-white/5 rounded-lg border border-gray-700/50">
                  <p className="text-gray-300 text-sm"><span className="text-cyan-400 font-semibold">Location:</span> TN, Chennai</p>
                  <p className="text-gray-300 text-sm"><span className="text-green-400 font-semibold">Status:</span> Available for work</p>
                  <p className="text-gray-300 text-sm"><span className="text-yellow-400 font-semibold">Response:</span> Within 24 hours</p>
                  <p className="text-gray-300 text-sm"><span className="text-purple-400 font-semibold">Timezone:</span> IST (UTC+5:30)</p>
                </div>

                <div className="space-y-3 p-5 bg-white/5 rounded-lg border border-gray-700/50">
                  <h5 className="text-white text-sm font-bold mb-3">Opportunities I'm Seeking</h5>
                  <p className="text-gray-300 text-sm">• Freelance Projects</p>
                  <p className="text-gray-300 text-sm">• Full-time Roles</p>
                  <p className="text-gray-300 text-sm">• Part-time Work</p>
                  <p className="text-gray-300 text-sm">• Consulting</p>
                  <p className="text-gray-300 text-sm">• Open Source Collaboration</p>
                </div>
              </div>

              {/* Section 3: Social Links - Full Width */}
              <div className="p-5 bg-white/5 rounded-lg border border-gray-700/50">
                <div className="grid grid-cols-4 gap-4">
                  <a
                    href={social_links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center gap-2 p-4 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-lg hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all"
                  >
                    <FaGithub className="text-2xl text-gray-300" />
                    <span className="text-xs text-gray-300 font-medium">GitHub</span>
                  </a>
                  <a
                    href={social_links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center gap-2 p-4 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-lg hover:border-blue-500/50 hover:bg-blue-500/10 transition-all"
                  >
                    <FaLinkedin className="text-2xl text-gray-300" />
                    <span className="text-xs text-gray-300 font-medium">LinkedIn</span>
                  </a>
                  <a
                    href={social_links.email}
                    className="flex flex-col items-center justify-center gap-2 p-4 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-lg hover:border-purple-500/50 hover:bg-purple-500/10 transition-all"
                  >
                    <FaEnvelope className="text-2xl text-gray-300" />
                    <span className="text-xs text-gray-300 font-medium">Email</span>
                  </a>
                  <a
                    href={social_links.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center gap-2 p-4 bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-lg hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all"
                  >
                    <FaTwitter className="text-2xl text-gray-300" />
                    <span className="text-xs text-gray-300 font-medium">Twitter</span>
                  </a>
                </div>
              </div>

              {/* Section 4: Resume Download - Full Width */}
              <div className="flex flex-col items-center justify-center space-y-4 p-6 bg-white/5 rounded-lg border border-gray-700/50">
                <p className="text-gray-300 text-sm font-medium">Download my resume here</p>
                <a
                  href={personalInfo.resume_url}
                  download
                  className="flex items-center justify-center px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-500 text-white font-semibold rounded-lg shadow-lg hover:from-purple-700 hover:to-purple-600 transition-all duration-300 hover:shadow-purple-500/30 text-sm"
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
