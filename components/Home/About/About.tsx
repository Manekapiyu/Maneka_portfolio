"use client";

import React from "react";
import { motion } from "framer-motion";

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const fadeInDown = {
  initial: { opacity: 0, y: -20 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const scaleIn = {
  initial: { scale: 0.85, opacity: 0 },
  whileInView: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
};

const slideInRight = {
  initial: { x: 60, opacity: 0 },
  whileInView: { x: 0, opacity: 1, transition: { duration: 0.6 } },
};

const staggerContainer = {
  whileInView: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const About = () => {
  return (
    <div id="about" className="scroll-mt-24 py-20 text-white">
      <div className="w-[90%] sm:w-[80%] mx-auto grid md:grid-cols-2 gap-12 items-start">
        <div>
          <motion.h2
            {...fadeInDown}
            viewport={{ once: true, amount: 0.3 }}
            className="text-3xl md:text-4xl font-bold text-cyan-400 mb-6"
          >
            What I Do
          </motion.h2>

          <motion.p
            {...fadeInUp}
            viewport={{ once: true, amount: 0.3 }}
            className="text-gray-300 leading-relaxed mb-8"
          >
            As a developer, I bring ideas to life with a balance of{" "}
            <span className="text-cyan-300 font-semibold">
              design, code, and problem-solving
            </span>
            . My focus is on building applications that are{" "}
            <span className="font-semibold text-white">
              modern, scalable, and impactful
            </span>
            .
          </motion.p>

          {/* Skills */}
          <motion.div
            {...staggerContainer}
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-3 gap-4 text-sm"
          >
            {/* Frontend */}
            <motion.div
              {...scaleIn}
              className="bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg transition"
            >
              <h4 className="font-bold text-white text-xl mb-2">Frontend</h4>
              <ul className="text-gray-400 space-y-1">
                <li>React / Next.js</li>
                <li>HTML, CSS, JS</li>
                <li>Tailwind</li>
              </ul>
            </motion.div>

            {/* Backend */}
            <motion.div
              {...scaleIn}
              className="bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg transition"
            >
              <h4 className="font-semibold text-white mb-2 text-xl">Backend</h4>
              <ul className="text-gray-400 space-y-1">
                <li>Node.js</li>
                <li>Express.js</li>
              </ul>
            </motion.div>

            {/* Tools */}
            <motion.div
              {...scaleIn}
              className="bg-gray-800 p-4 rounded-lg shadow hover:shadow-lg transition"
            >
              <h4 className="font-semibold text-white mb-2 text-xl">Tools</h4>
              <ul className="text-gray-400 space-y-1">
                <li>Git & GitHub</li>
                <li>VS Code</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Side - Education Tree */}
        <motion.div {...slideInRight} viewport={{ once: true, amount: 0.3 }}>
          <h2 className="text-3xl md:text-3xl font-bold text-cyan-400 mb-6 ml-20">
            My Education
          </h2>

          <div className="relative border-l-4 border-cyan-400 pl-6 space-y-8 ml-20">
            {/* Node 1 */}
            <motion.div {...fadeInUp} viewport={{ once: true, amount: 0.3 }}>
              <h4 className="text-lg font-semibold text-white">
                Diploma in English Language & Literature
              </h4>
              <p className="text-sm text-gray-400">
                AQUINAS College (2020 - 2022)
              </p>
            </motion.div>

            {/* Node 2 */}
            <motion.div {...fadeInUp} viewport={{ once: true, amount: 0.3 }}>
              <h4 className="text-lg font-semibold text-white">
                DITEC Diploma in IT
              </h4>
              <p className="text-sm text-gray-400">
                ESOFT Metro Campus (2022 - 2023)
              </p>
            </motion.div>

            {/* Node 3 */}
            <motion.div {...fadeInUp} viewport={{ once: true, amount: 0.3 }}>
              <h4 className="text-lg font-semibold text-white">
                BSc (Hons) Computing & Information Systems
              </h4>
              <p className="text-sm text-gray-400">
                Sabaragamuwa University (2023 - Present)
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
