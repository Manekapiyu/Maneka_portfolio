'use client';

import React from "react";
import { motion } from "framer-motion";
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
  SiHtml5,
} from "react-icons/si";

const skills = [
  { name: "JavaScript", icon: <SiJavascript />, percentage: 89 },
  { name: "React", icon: <SiReact />, percentage: 85 },
  { name: "Node.js", icon: <SiNodedotjs />, percentage: 82 },
  { name: "MongoDB", icon: <SiMongodb />, percentage: 78 },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, percentage: 80 },
  { name: "HTML5", icon: <SiHtml5 />, percentage: 95 },
];

// Variants for staggered animations
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.25 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.8 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, type: "spring" },
  },
};

const Skills = () => {
  return (
    <div id="skills" className="scroll-mt-24 text-white pb-16 pt-16">
      {/* Heading Animation */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
        className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white"
      >
        My <span className="font-bold text-cyan-400">Skills</span>
      </motion.h1>

      {/* Cards with stagger animation on scroll */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-wrap justify-center gap-6 mt-16"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ scale: 1.1, rotate: 1 }}
            className="bg-[#0c0cef45] rounded-xl shadow-lg p-6 w-40 text-center"
          >
            {/* Icon with hover wiggle */}
            <motion.div
              whileHover={{ rotate: [0, -10, 10, 0], transition: { duration: 0.5 } }}
              className="text-5xl flex justify-center mb-4 text-gray-300"
            >
              {skill.icon}
            </motion.div>

            <h2 className="text-sm font-semibold mb-2">{skill.name}</h2>

            {/* Progress bar */}
            <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
              <motion.div
                className="bg-cyan-300 h-3 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.percentage}%` }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                  duration: 1.2,
                  delay: index * 0.3,
                  type: "spring",
                  stiffness: 80,
                }}
              />
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: index * 0.3 + 0.8 }}
              className="mt-2 text-sm"
            >
              {skill.percentage}%
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Skills;
