"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const staggerContainer = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

const cardHoverSmall = {
  whileHover: { scale: 1.02 },
  whileTap: { scale: 0.98 },
};

const projects = [
  {
    title: "Mobile and PC Accessories and Repair Management System",
    description: "Built a system, allowing customers to shop, book, and track repairs.",
    image: "/images/p5.png",
    technologies: ["React", "Tailwind", "MongoDB"],
    githubLink: "https://github.com/Manekapiyu/FoodDeliveryApp.git",
  },
  {
    title: "Smart Home Electricity Bill Tracker with AI Insights ",
    description: "Manage electricity bills and receive AI- driven insights to reduce costs.",
    image: "/images/p2.png",
    technologies: ["Next.js", "Node.js", "MongoDB"],
    githubLink: "https://github.com/DineshPriyanthaGH/voltbuddy-Smart-Home-Electricity-Bill-Tracker-with-AI-Insights.git",

  },
  {
    title: "Chat Application",
    description: "Real-time chat application with authentication and live messaging.",
    image: "/images/p3.png",
    technologies: ["Socket.io", "Express", "Firebase"],
    githubLink: "https://github.com/yourusername/chatapp",
    demoLink: "https://chatapp-demo.vercel.app",
  },
];

const Project = () => {
  return (
    <div id="projects" className="scroll-mt-24 pl-20 pr-20 pt-16 pb-16 ">
      <h1 className="text-center text-2xl md:text-4xl xl:text-5xl font-bold text-white mb-12">
        Featured <span className="text-cyan-400 font-semibold">Projects</span>
      </h1>

      <motion.p
        className="text-lg text-gray-200 mb-16 text-center max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Here are some of my recent projects. Click on the links to view the code
        or live demo.
      </motion.p>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 rounded-lg shadow-md overflow-hidden backdrop-blur-md"
            variants={fadeInUp}
            {...cardHoverSmall}
          >
            {/* Project Image */}
            <motion.div
              className="aspect-video bg-gray-200 border-cyan-400 dark:bg-gray-100"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Image
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-full"
                width={500}
                height={300}
              />
            </motion.div>

            {/* Project Info */}
            <div className="p-6">
              <motion.h3
                className="text-xl font-semibold mb-2 text-cyan-500"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {project.title}
              </motion.h3>
              <p className="text-gray-200 mb-4">{project.description}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <motion.span
                    key={techIndex}
                    className="px-3 py-1 bg-cyan-500/10 text-cyan-300 rounded-full text-sm"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-6">
                <motion.a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub className="h-5 w-5" />
                  <span>Code</span>
                </motion.a>
                <motion.a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors"
                  whileHover={{ x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaExternalLinkAlt className="h-5 w-5" />
                  <span>Live Demo</span>
                </motion.a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Project;
