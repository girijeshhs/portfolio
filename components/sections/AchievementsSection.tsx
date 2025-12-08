"use client";

import { motion } from "framer-motion";
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

export default function AchievementsSection() {
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
      id="achievements"
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
              My <span className="text-purple-400">Achievements</span>
            </h2>
            <p className="text-sm uppercase tracking-[0.3em] text-gray-400 font-mono mt-2">
              Milestones & Experience
            </p>
          </motion.div>

          {/* Achievements Box */}
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
                      alt="Achievements visual"
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
        </motion.div>
      </div>
    </section>
  );
}
