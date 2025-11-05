'use client';

import React from "react";
import Image from "next/image";
import Typewriter from "typewriter-effect";
import { BsArrowRight } from "react-icons/bs";
import { FaLinkedinIn, FaGithub, FaKaggle } from "react-icons/fa";
import ParticlesHero from "./ParticleBackground";
import { motion } from "framer-motion";

const Hero = () => {
  const socialLinks = [
    {
      Icon: FaLinkedinIn,
      link: "https://www.linkedin.com/in/maneka piyumawali",
      label: "LinkedIn",
      color: "#0A66C2",
    },
    {
      Icon: FaGithub,
      link: "https://github.com/Manekapiyu",
      label: "GitHub",
      color: "#ffffff",
    },
    {
      Icon: FaKaggle,
      link: "https://www.kaggle.com/manekapiyumawali",
      label: "Kaggle",
      color: "#20BEFF",
    },
    {
      Icon: "/images/medium1.png",
      link: "https://medium.com/@manekapiyumawali2099",
      label: "Medium",
      color: "#ffffff",
    },
  ];

  return (
    <div className="relative h-screen flex items-center justify-center text-white overflow-hidden flex-col">
      <ParticlesHero />

      <motion.div
        className="container mx-auto flex flex-col-reverse md:flex-row items-center gap-10"
        initial="hidden"
        animate="show"
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { staggerChildren: 0.3 } },
        }}
      >
        <motion.div
          className="flex-1 text-center md:text-left space-y-6"
          variants={{
            hidden: { opacity: 0, x: -50 },
            show: {
              opacity: 1,
              x: 0,
              transition: { duration: 0.8, ease: "easeOut" },
            },
          }}
        >
          <h2 className="text-2xl sm:text-3xl font-semibold">
            Hi! , I&apos;m{" "}
            <span className="text-cyan-400 font-bold">Maneka</span>
          </h2>

          <motion.h1
            className="text-2xl sm:text-5xl lg:text-6xl font-bold leading-tight"
            variants={{
              hidden: { opacity: 0, y: 40 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, ease: "easeOut" },
              },
            }}
          >
            <span className="text-cyan-200 font-bold">
              <Typewriter
                options={{
                  strings: [
                    "Full Stack Developer",
                    "Frontend Developer",
                    "Web Developer",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                  deleteSpeed: 50,
                }}
              />
            </span>
          </motion.h1>

          <motion.p
            className="text-gray-300 max-w-lg mx-auto md:mx-0"
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, delay: 0.2 },
              },
            }}
          >
            Passionate about crafting innovative, scalable, and user-centered web solutions that turn ideas into impactful digital experiences.

          </motion.p>

          {/*Social Media Links*/}
          <div className="flex justify-center md:justify-start gap-4 mt-8 border-cyan-400/20">
            {socialLinks.map(({ Icon, link, label, color }, i) => (
              <motion.a
                key={i}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
                className="group relative w-12 h-12 flex items-center justify-center rounded-full 
                           bg-[#0A0A2A]/70  border border-cyan-400/60
                           shadow-md shadow-cyan-900/30 transition-all duration-300 
                           hover:shadow-blue-400/50 hover:bg-blue-900 "
              >
                {typeof Icon === "string" ? (
                  <Image
                    src={Icon}
                    alt={label}
                    width={28}
                    height={28}
                    className="object-contain transition-transform duration-300 group-hover:rotate-[15deg]"
                  />
                ) : (
                  <Icon
                    className="text-2xl transition-transform duration-300 group-hover:rotate-[15deg]"
                    style={{ color }}
                  />
                )}
              </motion.a>
            ))}
          </div>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-6">
            <motion.button
              onClick={() => {
                const section = document.querySelector("#projects");
                section?.scrollIntoView({ behavior: "smooth" });
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-blue-700 hover:bg-blue-900 text-white font-semibold 
                         rounded-full shadow-md transition duration-300 flex items-center gap-2"
            >
              <span>Hire Me</span>
              <BsArrowRight className="w-5 h-5 ml-2" />
            </motion.button>

            <motion.button
              onClick={() => {
                const section = document.querySelector("#contact");
                section?.scrollIntoView({ behavior: "smooth" });
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 border border-blue-600 text-blue-400 hover:bg-blue-800 
                         hover:text-white rounded-full font-semibold shadow-md transition duration-300"
            >
              See My Work
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          className="flex-1 flex justify-center"
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            show: {
              opacity: 1,
              scale: 1,
              transition: { duration: 0.9, ease: "easeOut" },
            },
          }}
        >
          <div className="w-[160px] h-[160px] rounded-full overflow-hidden shadow-lg border-8 border-[#0c0c48aa] sm:w-[200px] sm:h-[200px] md:w-[380px] md:h-[380px]">
            <Image
              src="/images/profile.jpg"
              alt="Hero Image"
              width={350}
              height={350}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
