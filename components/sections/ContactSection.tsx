"use client";

import { motion } from "framer-motion";
import { personalInfo, social_links } from "@/data/portfolio";
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
              className="bg-[#0a0a0a]/80 backdrop-blur-sm border border-gray-800 rounded-xl p-6 flex flex-col justify-between"
            >
              {/* Top Half - Location & Resume */}
              <div className="space-y-6">
                {/* Location */}
                <div>
                  <p className="text-gray-400 text-sm">Location: TN, India</p>
                </div>

                {/* Open to Work */}
                <div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Open to work in Freelance projects, Full time roles, Consulting work, Open source collaboration
                  </p>
                </div>

                {/* Resume - Bold Title + Button */}
                <div className="space-y-3">
                  <h4 className="text-white font-bold text-base">CHECKOUT MY RESUME OVER HERE</h4>
                  <a
                    href={personalInfo.resume_url}
                    download
                    className="inline-flex items-center justify-center px-5 py-2.5 bg-gradient-to-r from-purple-600 to-purple-500 text-white font-semibold rounded-lg shadow-lg hover:from-purple-700 hover:to-purple-600 transition-all duration-300 hover:shadow-purple-500/30 text-sm"
                  >
                    Download Resume
                  </a>
                </div>
              </div>

              {/* Bottom Half - Social Links */}
              <div className="mt-8 pt-6 border-t border-gray-800">
                <div className="space-y-3">
                  <a 
                    href={social_links.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    GitHub: github.com/girijeshhs
                  </a>
                  <a 
                    href={social_links.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    LinkedIn: linkedin.com/in/girijesh-s
                  </a>
                  <a 
                    href={social_links.email}
                    className="block text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    Gmail: girijesh@example.com
                  </a>
                  <a 
                    href={social_links.twitter} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    Twitter: twitter.com/girijesh
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
