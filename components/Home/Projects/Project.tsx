"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const staggerContainer = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

const cardHover = {
  whileHover: { scale: 1.03 },
  whileTap: { scale: 0.97 },
};

const projects = [
   {
    title: "Smart Home Electricity Tracker",
    description: "Track bills & get AI insights to reduce electricity costs.",
    image: "/images/projects/p1.png",
    technologies: ["Next.js", "Node.js", "MongoDB"],
    githubLink: "https://github.com/DineshPriyanthaGH/voltbuddy-Smart-Home-Electricity-Bill-Tracker-with-AI-Insights.git",
  },
  {
    title: "AI Interview Voice Agent ",
    description: "Developed  uses voice interaction to conduct job interviews, manage candidates, and generate automated feedback.",
    image: "/images/projects/p2.png",
    technologies: [" Next.js", "React", "Vapi","Supabase"],
    githubLink: "https://github.com/Manekapiyu/voice-ai-interview-platform.git",
  },

  {
    title: "Full Stack Food Delivery App",
    description:  "Developed a responsive interface, real-time cart updates, and a smooth checkout flow for an effortless user experience.",
    image: "/images/projects/p3.png",
    technologies: ["React", "Tailwind", "MongoDB" , "Node.js" ],
    githubLink: "https://github.com/Manekapiyu/FoodDeliveryApp.git",
    demoLink: "https://www.linkedin.com/posts/maneka-piyumawali_mernstack-reactjs-webdevelopment-activity-7316780879379353600-41Ml?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEuYEP8B_f_y8je2bMeVj_dsjLUdyXmUHQ0",
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
            className="bg-gray-900 rounded-2xl shadow-xl overflow-hidden border border-cyan-500 flex flex-col"
            variants={fadeInUp}
            {...cardHover}
          >
            {/* Project Image */}
            <div className="relative w-full h-48 md:h-56 bg-blue-950">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-contain p-2 transition-transform duration-500 hover:scale-105"
              />
            </div>

            <div className="p-5 flex flex-col flex-1 justify-between">
              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-2 mb-2 mt-3">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-cyan-500/20 text-cyan-300 text-xs px-2 py-1 rounded-full font-medium backdrop-blur-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-bold text-cyan-400 mb-2">{project.title}</h3>
              <p className="text-gray-300 text-sm mb-4">{project.description}</p>

              {/* Links */}
              <div className="flex gap-3 mt-auto">
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-800 hover:bg-cyan-500 text-gray-300 hover:text-black px-3 py-1 rounded-full text-sm transition-all duration-300"
                  >
                    <FaGithub /> Code
                  </a>
                )}
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-800 hover:bg-cyan-500 text-gray-300 hover:text-black px-3 py-1 rounded-full text-sm transition-all duration-300"
                  >
                    <FaExternalLinkAlt /> Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Project;
