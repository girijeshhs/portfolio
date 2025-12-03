"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ParticlesComponent from "@/components/Particles";

function About() {

  return (
    <div
      className="flex flex-col min-h-screen"
      style={{
        background:
          "radial-gradient(50% 50% at 50% 50%, #000000 0%, #000000 100%)",
      }}
    >
      

        <div className="relative z-10">
          <ParticlesComponent id="particles-background"/>
          <div className="max-w-7xl mx-auto px-4 py-16">
            

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col md:flex-row items-center gap-12 mb-20"
            >
              <motion.div
                className="w-full md:w-1/3"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
                  <Image
                    src="/assets/images/placeholder-profile.png" 
                    alt="Girijesh S Profile"
                    className="relative rounded-full w-full"
                    width={500}
                    height={300}
                    priority
                  />
                </div>
              </motion.div>

              <motion.div
                className="w-full md:w-2/3 text-white"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <h1 className="text-5xl font-bold mb-6 bg-clip-text text-gray-200">                 
                  About Me
                </h1>
                <p className="text-lg leading-relaxed text-gray-300">
                  I&apos;m Girijesh — a logical, detail-driven software engineer from Tamil Nadu. I enjoy building full-stack web apps, experimenting with blockchain, and applying ML to real problems. My work focuses on practical, well-tested systems and product-minded code. I favour clarity over cleverness, and I build things that are useful and maintainable. Trained in web development, I&apos;m learning deeper systems and ML every week. More strategic than emotional — I think like an engineer and act like a builder.
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col-reverse md:flex-row items-center gap-12"
            >
              <div className="w-full md:w-2/3">
                <h2 className="text-4xl font-bold mb-8 text-white">
                  Skills & Interests
                </h2>
                <motion.ul className="space-y-4">
                  {[
                    "Web: HTML, CSS, JavaScript, React, Node.js, Express",
                    "Backend / DB: PostgreSQL, MongoDB, REST APIs",
                    "Languages: Python, JavaScript, TypeScript",
                    "Tools & Misc: Git, Docker, Vercel, Linux",
                    "Interests: Blockchain, ML, Systems",
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      className="flex items-center space-x-3 text-gray-300"
                    >
                      <span className="text-purple-400">❯</span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>

              <motion.div
                className="w-full md:w-1/3"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
                  <Image
                    src="/about_computer.jpg" 
                    alt="Code Editor Visual"
                    className="relative rounded-lg w-full"
                    width={500}
                    height={300}
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
   
  );
}

export default About;
