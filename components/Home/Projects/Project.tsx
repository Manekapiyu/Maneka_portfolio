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
  whileHover: {
    scale: 1.03,
    boxShadow: "0 0 25px rgba(6,182,212,0.6)",
    borderColor: "rgba(6,182,212,0.7)",
  },
  whileTap: {
    scale: 0.98,
  },
};

const projects = [
  {
    title: "Smart Home Electricity Tracker",
    description: "Track bills & get AI insights to reduce electricity costs.",
    image: "/images/projects/p1.png",
    technologies: ["Next.js", "Node.js", "MongoDB"],
    githubLink:
      "https://github.com/DineshPriyanthaGH/voltbuddy-Smart-Home-Electricity-Bill-Tracker-with-AI-Insights.git",
  },
  {
    title: "AI Interview Voice Agent",
    description:
      "Voice interaction platform to conduct interviews & auto-generate feedback.",
    image: "/images/projects/p2.png",
    technologies: ["Next.js", "React", "Vapi", "Supabase"],
    githubLink: "https://github.com/Manekapiyu/voice-ai-interview-platform.git",
  },
  {
    title: "Full Stack Food Delivery App",
    description:
      "Real‑time cart updates & modern UX for a smooth ordering experience.",
    image: "/images/projects/p3.png",
    technologies: ["React", "Tailwind", "MongoDB", "Node.js"],
    githubLink: "https://github.com/Manekapiyu/FoodDeliveryApp.git",
    demoLink:
      "https://www.linkedin.com/posts/maneka-piyumawali_mernstack-reactjs-webdevelopment-activity-7316780879379353600-41Ml",
  },
  {
    title: "Ecommerce Website",
    description:
      "Animated React landing page with light/dark mode & modern UI.",
    image: "/images/projects/p4.png",
    technologies: ["React", "Tailwind"],
    githubLink: "https://github.com/Manekapiyu/ecommerce-website.git",
  },
  {
    title: "Task Management System",
    description:
      "A full-stack web application for managing organizational tasks with role-based access.",
    image: "/images/projects/p5.png",
    technologies: ["Spring Boot", "Angular", "MySQL"],
    githubLink: "https://github.com/Manekapiyu/Task_Management_System.git",
  },
  {
    title: "Library Management System",
    description:
      "A web application managing library books and borrow/return operations.",
    image: "/images/projects/p6.jpg",
    technologies: ["Laravel", "MySQL"],
    githubLink: "https://github.com/Manekapiyu/laravel-book-management.git",
  },

  
];

const Project = () => {
  return (
    <div
      id="projects"
      className="scroll-mt-24 px-4 sm:px-8 md:px-20 pt-16 pb-16"
    >
      <h1 className="text-center text-3xl md:text-4xl xl:text-5xl font-bold text-white">
        Featured <span className="text-cyan-400 font-semibold">Projects</span>
        <div className="w-28 h-1 mx-auto mt-3 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full"></div>
      </h1>

      <motion.p
        className="text-base md:text-lg text-gray-200 mb-10 mt-2 text-center max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Here are some of my recent projects. Click to view the code or live
        demo.
      </motion.p>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-900 rounded-2xl shadow-xl overflow-hidden border border-cyan-500 flex flex-col transition-all duration-300"
            variants={fadeInUp}
            {...cardHover}
          >
            <div className="relative w-full h-48 sm:h-56 lg:h-60 bg-blue-50">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-5 flex flex-col flex-1">
              <div className="flex flex-wrap gap-2 mb-3">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-cyan-500/20 text-cyan-300 text-xs px-2 py-1 rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <h3 className="text-xl font-bold text-cyan-400 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                {project.description}
              </p>

              <div className="flex gap-3 mt-auto">
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    className="flex items-center gap-2 bg-blue-800 hover:bg-cyan-500 text-gray-200 hover:text-black px-3 py-1 rounded-full text-sm transition"
                  >
                    <FaGithub /> Code
                  </a>
                )}
                {project.demoLink && (
                  <a
                    href={project.demoLink}
                    target="_blank"
                    className="flex items-center gap-2 bg-blue-800 hover:bg-cyan-500 text-gray-200 hover:text-black px-3 py-1 rounded-full text-sm transition"
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
