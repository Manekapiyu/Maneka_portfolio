"use client";

import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiFigma,
  SiGithub,
  SiPython,
  SiMysql,
  SiAngular,
  SiNextdotjs,
  SiExpress,
  SiSpringboot,
  SiPostgresql,
  SiIntellijidea,
  SiPostman,
  SiXampp,
  SiSupabase,
} from "react-icons/si";
import { motion } from "framer-motion";
import { FaJava } from "react-icons/fa";
import { TbBrandCSharp, TbBrandVisualStudio } from "react-icons/tb";

// Separate skill rows
const row1Skills = [
  { name: "Java", icon: <FaJava className="text-orange-400" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },
  { name: "HTML", icon: <SiHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <SiCss3 className="text-blue-400" /> },
  { name: "Python", icon: <SiPython className="text-yellow-300" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-500" /> },
];

const row2Skills = [
  { name: "ReactJS", icon: <SiReact className="text-cyan-400" /> },
  { name: "Angular", icon: <SiAngular className="text-red-400" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-gray-200" /> },
  { name: "Node.js", icon: <SiNodedotjs className="text-green-400" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-400" /> },
  { name: "Spring Boot", icon: <SiSpringboot className="text-green-500" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "Supabase", icon: <SiSupabase className="text-emerald-400" /> },
  { name: "VS Code", icon: <TbBrandVisualStudio className="text-blue-500" /> },
  { name: "IntelliJ IDEA", icon: <SiIntellijidea className="text-pink-400" /> },
  { name: "GitHub", icon: <SiGithub className="text-gray-300" /> },
  { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
  { name: "XAMPP", icon: <SiXampp className="text-orange-500" /> },
  { name: "Figma", icon: <SiFigma className="text-pink-400" /> },
];

const Skills = () => {
  return (
    <div
      id="skills"
      className="scroll-mt-24 py-20 text-white overflow-hidden px-6 md:px-16"
    >
      {/* Section Title */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center text-3xl md:text-4xl xl:text-5xl font-bold mb-12"
      >
        My <span className="text-cyan-400 ">Skills </span>
        <p className="text-gray-400 text-sm md:text-base mt-2 font-light">
          Passionate About AI, Web Development, and Innovative Tech Solutions
        </p>
      </motion.h1>

      {/* First Row: Programming Languages & Databases */}
      <div className="border-2 border-cyan-800 rounded-3xl p-4 mb-10 bg-[#04102b] ">
        <h2 className="text-xl md:text-2xl font-semibold text-cyan-400 mb-6 text-center">
          Programming Languages & Databases
        </h2>
        <div className="relative w-full overflow-x-hidden">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            }}
            className="flex gap-8 w-max"
          >
            {[...row1Skills, ...row1Skills].map((skill, index) => (
              <motion.div
                key={index}
                whileHover={{
                  scale: 1.2,
                  rotate: 5,
                  y: -5,
                  boxShadow: "0px 10px 30px rgba(6,182,212,0.3)",
                }}
                transition={{ type: "spring", stiffness: 200 }}
                className="flex flex-col items-center justify-center bg-[#03038945] w-40 h-40 rounded-2xl shadow-md border border-cyan-300/20 hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="text-5xl mb-3">{skill.icon}</div>
                <p className="text-sm font-medium text-gray-300 text-center">
                  {skill.name}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Second Row: Technologies & Tools */}
      <div className="border-2 border-cyan-800 rounded-3xl p-6">
        <h2 className="text-xl md:text-2xl font-semibold text-cyan-400 mb-6 text-center">
          Technologies & Tools
        </h2>
        <div className="relative w-full overflow-x-hidden">
          <motion.div
            initial={{ x: "-50%" }}
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            }}
            className="flex gap-8 w-max"
          >
            {[...row2Skills, ...row2Skills].map((skill, index) => (
              <motion.div
                key={`row2-${index}`}
                whileHover={{
                  scale: 1.1,
                  rotate: -2,
                  y: -5,
                  boxShadow: "0px 0px 20px 2px rgba(6,182,212,0.3)",
                }}
                transition={{ type: "spring", stiffness: 200 }}
                className="flex flex-col items-center justify-center bg-[#0c1b3f] w-40 h-40 rounded-2xl shadow-md border border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300"
              >
                <div className="text-5xl mb-3">{skill.icon}</div>
                <p className="text-sm font-medium text-gray-300 text-center">
                  {skill.name}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
