"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase } from "lucide-react";
import Image from "next/image";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const fadeInDown = {
  initial: { opacity: 0, y: -20 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const slideInRight = {
  initial: { x: 60, opacity: 0 },
  whileInView: { x: 0, opacity: 1, transition: { duration: 0.6 } },
};

const About = () => {
  const [colorMode, setColorMode] = useState("cyan");

  const toggleColor = () => {
    setColorMode((prev) => (prev === "cyan" ? "pink" : "cyan"));
  };

  const themeColor = colorMode === "cyan" ? "text-cyan-400" : "text-pink-400";
  const borderColor =
    colorMode === "cyan" ? "border-cyan-400/30" : "border-pink-400/30";
  const glowColor =
    colorMode === "cyan" ? "shadow-cyan-400/30" : "shadow-pink-400/30";

  return (
    <div id="about" className="scroll-mt-24 pl-16 pr-16 pt-16 pb-16 ">
      <motion.div
        {...fadeInDown}
        viewport={{ once: true, amount: 0.3 }}
        className="text-center mb-14"
      >
        <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white mb-2">
          About <span className="text-cyan-400 font-semibold">Me</span>
        </h1>

        <div
          className={`w-28 h-1 mx-auto mt-3 bg-gradient-to-r from-transparent via-${colorMode}-400 to-transparent rounded-full`}
        ></div>
        <p className="text-gray-400 text-sm md:text-base">
          Calm creativity meets thoughtful technology.
        </p>
      </motion.div>

      {/* --- Main Content --- */}
      <div className="w-[90%] sm:w-[80%] mx-auto grid md:grid-cols-2 gap-16 items-start">
        {/* LEFT SIDE - Profile & Description */}
        <motion.div {...fadeInUp} viewport={{ once: true, amount: 0.3 }}>
          <div className="flex flex-col items-center text-center">
            {/* Profile Image */}
            <motion.div
              {...fadeInUp}
              className={`relative w-56 h-56 rounded-full overflow-hidden border-4 ${borderColor} ${glowColor} hover:scale-105 transition-transform duration-500`}
            >
              <Image
                src="/images/2.jpg"
                alt="Profile"
                width={300}
                height={300}
                className="object-cover w-full h-full"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b1a]/60 to-transparent"></div>
            </motion.div>

            {/* Description */}
            <motion.h3
              {...fadeInUp}
              className={`text-2xl font-semibold ${themeColor} mt-6 mb-3`}
            >
              Hi, I’m Maneka
            </motion.h3>

            <motion.p className="text-sm text-gray-300 leading-relaxed mb-8 text-justify">
              I’m a passionate developer who loves turning creative ideas into
              meaningful digital experiences. I enjoy combining{" "}
              <span className="text-cyan-300 font-medium">
                design, logic, and clean code
              </span>
               to craft web applications that are both{" "}
              <span className="font-medium text-white">
                modern, efficient, and user-focused
              </span>
              . Every project I build is driven by curiosity, creativity, and a
              desire to make technology more impactful and accessible.
            </motion.p>
          </div>
        </motion.div>

        {/* RIGHT SIDE - Education & Training */}
        <motion.div
          {...slideInRight}
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-8"
        >
          {/* Education */}
          <motion.div
  {...fadeInUp}
  className={`bg-[#141428] p-6 rounded-2xl border ${borderColor} ${glowColor} hover:shadow-xl hover:scale-[1.03] transition-all duration-300`}
>
  {/* Header */}
  <div className="flex items-center gap-3 mb-4">
    <GraduationCap className={`${themeColor} w-7 h-7`} />
    <h3 className={`text-2xl font-semibold ${themeColor}`}>
      Academic Background
    </h3>
  </div>

  {/* University Info */}
  <div className="mb-4">
    <p className="text-gray-300 text-base font-medium">
      BSc (Hons) Computing & Information Systems
    </p>
    <p className="text-gray-400 text-sm">
      Sabaragamuwa University — <span className="italic">2023 - Present</span>
    </p>
  </div>

  {/* Divider Line */}
  <div
    className={`w-full h-[1px] bg-gradient-to-r from-transparent via-${colorMode}-400/40 to-transparent mb-4`}
  ></div>

  {/* Skills Section */}
  <p className="text-gray-300 text-sm mb-3 font-medium">
    Core Skills & Focus Areas:
  </p>

  <div className="flex flex-wrap gap-3">
    {["OOP", "DSA", "Quality Assurance", "Project Management", "ADBM"].map(
      (skill, index) => (
        <span
          key={index}
          className={`px-4 py-2 text-xs  text-blue-300 rounded-full border ${borderColor} ${glowColor} bg-[#040456] hover:bg-[#223444] hover:scale-105 transition-all`}
        >
          {skill}
        </span>
      )
    )}
  </div>
</motion.div>

          {/* Experience */}
          <motion.div
            {...fadeInUp}
            className={`bg-[#141428] p-6 rounded-xl border ${borderColor} ${glowColor} hover:shadow-lg hover:scale-[1.02] transition-all duration-300`}
          >
            <div className="flex items-center gap-3 mb-3">
              <Briefcase className={`${themeColor} w-6 h-6`} />
              <h3 className={`text-2xl font-semibold ${themeColor}`}>
               Work Experience
              </h3>
            </div>
            <p className="text-sm text-gray-400">
              <span className="font-medium text-white">
                Banking Trainee
              </span>
            </p>
            <p className="text-gray-400 text-sm mb-3">
              Regional Development Bank – Minuwangoda Branch <span className="italic">2022 - 2023</span>
    </p>
            <p className="text-gray-400 text-sm">
             Developed teamwork, adaptability, communication, and data management skills while assisting with banking processes.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
