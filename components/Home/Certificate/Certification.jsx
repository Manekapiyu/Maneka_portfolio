"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const certifications = [
  {
    name: "Python for Beginners",
    issuer: "University of Moratuwa",
    description: "Learned Python basics, programming logic, and problem-solving skills.",
    image: "/images/certificates/python.jpeg",
    link: "https://www.linkedin.com/posts/maneka-piyumawali_python-programming-certification-activity-7293228770839150592-C9EG",
  },
  {
    name: "Diploam in Information Technology",
    issuer: "Esoft Metro Campus",
    description: "Learned Python, MySQL, Java, and data analysis techniques.",
    image: "/images/certificates/DiplomaIT.jpg",
    link: "https://drive.google.com/file/d/13SjR1eH5KDDdvr_qIPsIDvOPkL0agLKP/view",
  },
  {
    name: "Postman API Fundamentals",
    issuer: "Postman Academy",
    description: "Gained hands-on skills in API design, testing, and automation.",
    image: "/images/certificates/Postman.jpg",
    link: "https://www.linkedin.com/posts/maneka-piyumawali_postman-api-apitesting-activity-7383140177587671040--Kzz",
  },

  {
    name: "Machine Learning",
    issuer: "Cambridge International Qualifications (UK)",
    description: "Built ML models and explored AI-driven problem-solving.",
    image: "/images/certificates/ML.jpg",
    link: "https://drive.google.com/file/d/1LfG7AjF4OpIsIKofKR39iaG-fCRmn227/view",
  },
  {
    name: "PixelWave 2025",
    issuer: "KDU University",
    description: "Showcased creativity in digital art and tech innovation.",
    image: "/images/certificates/art.png",
    link: "https://www.linkedin.com/posts/maneka-piyumawali_digitalart-ieee-creativity-activity-7379154274473177092-dn8l",
  },
  {
    name: "Diploma in English",
    issuer: "Aquinas College, Colombo",
    description: "Certified English proficiency in communication and writing.",
    image: "/images/certificates/DiplomaEnglish.jpg",
    link: "https://drive.google.com/file/d/1LfG7AjF4OpIsIKofKR39iaG-fCRmn227/view",
  },
  {
    name: "AWS ",
    issuer: "Simplilearn",
    description: "Studied AWS core services and cloud infrastructure basics.",
    image: "/images/certificates/aws.jpeg",
    link: "https://www.linkedin.com/posts/maneka-piyumawali_aws-amazonwebservices-cloudcomputing-activity-7362847122251030528-bp0i",
  },
  {
    name: "Web Design for Begineers",
    issuer: "University of Moratuwa",
    description: "Learned basic html,css,javascript and designing tools and frameworks.",
    image: "/images/certificates/webdesign.jpg",
    link: "https://drive.google.com/file/d/1Jg61zvoHix6wR5sjvYzPa-PlB6Q4HDHQ/view?usp=sharing",
  },
  {
    name: "OOP in Java ",
    issuer: "Simplilearn",
    description: "Learned basic knowledge about OOP concepts and coding knowledge.",
    image: "/images/certificates/oop.png",
    link: "https://drive.google.com/file/d/1JKZ6eWBPkZxH22iLBRd2tugGL_gi-rTB/view?usp=sharing",
  },
  {
    name: "Crash Course: AWS Basics ",
    issuer: "KodeKloud",
    description: "Gained practical knowledge of core AWS services, cloud architecture, and deployment fundamentals.",
    image: "/images/certificates/aws.png",
    link: "https://drive.google.com/file/d/1-EOOLDuQzREPm26aDnh0iWNzNvXUuQ5Z/view?usp=sharing",
  },
  {
  name: "Java Programming",
  issuer: "Great Learning Academy",
  description: "Completed hands-on training in Java fundamentals, OOP concepts and basic application development.",
  image: "/images/certificates/java.jpg",
  link: "https://drive.google.com/file/d/1RUl6lo3SvL192P9OxhGFcqvC1XhLMcmg/view?usp=sharing",
},

];

const Certification = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const thumbsRef = useRef(null);
  const hasInteracted = useRef(false);

  const prev = () =>
    setActiveIndex((i) => (i === 0 ? certifications.length - 1 : i - 1));
  const next = () =>
    setActiveIndex((i) => (i === certifications.length - 1 ? 0 : i + 1));

  useEffect(() => {
    const container = thumbsRef.current;
    if (!container) return;


    if (!hasInteracted.current) {
      hasInteracted.current = true;
      return;
    }

    const child = container.children[activeIndex];
    if (child && typeof child.scrollIntoView === "function") {

      setTimeout(() => {
        child.scrollIntoView({
          behavior: "smooth",
          inline: "center",
          block: "nearest",
        });
      }, 150);
    }
  }, [activeIndex]);

  const active = certifications[activeIndex];

  return (
    <motion.section
      id="certificates"
      className="scroll-mt-24 px-6 md:px-16 py-12"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >

      <motion.h2
        className="text-3xl md:text-4xl font-bold text-cyan-400 text-center mb-3"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Certifications
        <div className="w-28 h-1 mx-auto mt-3 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full"></div>
      </motion.h2>

      <motion.p
        className="text-center text-gray-300 mb-8 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        Acknowledgments of my technical skills, knowledge application, and
        dedication to learning.
      </motion.p>


      <div className="max-w-[1100px] mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center bg-[#04102b] border border-white/6 rounded-3xl p-3 md:p-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >

          <div className="relative flex items-center justify-center">

            <div className="relative w-full md:w-[520px] h-64 md:h-[420px] rounded-2xl bg-[#0b0d1a] shadow-2xl overflow-hidden border border-white/6">
              <Image
                src={active.image}
                alt={active.name}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 90vw, 520px"
                priority
              />
            </div>


            <button
              onClick={() => {
                hasInteracted.current = true;
                prev();
              }}
              aria-label="Previous certificate"
              className="absolute left-2 md:left-6 -translate-y-1/2 top-1/2 w-12 h-12 rounded-full bg-[#081029] border border-cyan-500/20 flex items-center justify-center text-cyan-300 shadow-lg hover:scale-105 transition"
            >
              <span className="text-2xl">‹</span>
            </button>

            <button
              onClick={() => {
                hasInteracted.current = true;
                next();
              }}
              aria-label="Next certificate"
              className="absolute right-2 md:right-6 -translate-y-1/2 top-1/2 w-12 h-12 rounded-full bg-[#081029] border border-cyan-500/20 flex items-center justify-center text-cyan-300 shadow-lg hover:scale-105 transition"
            >
              <span className="text-2xl">›</span>
            </button>
          </div>


          <motion.div
            className="px-2 md:px-6 py-6 rounded-2xl shadow-inner h-full flex flex-col justify-center"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-purple-300 mb-2">
              {active.name}
            </h3>
            <p className="text-sm text-cyan-300 font-semibold mb-4">
              {active.issuer}
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {active.description}
            </p>
            <div>
              <a
                href={active.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-[#06A6A3] to-[#0B3B92] text-white px-4 py-2 rounded-full shadow-lg"
              >
                <svg
                  className="w-4 h-4 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    d="M12 5v14"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5 12h14"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                View Certificate
              </a>
            </div>
          </motion.div>
        </motion.div>


        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <div
            ref={thumbsRef}
            className="flex items-center gap-3 overflow-x-auto no-scrollbar py-2 px-2 md:px-6"
          >
            {certifications.map((c, i) => (
              <motion.button
                key={i}
                onClick={() => {
                  hasInteracted.current = true;
                  setActiveIndex(i);
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`flex-shrink-0 w-20 h-14 md:w-28 md:h-20 rounded-md overflow-hidden border ${i === activeIndex
                    ? "ring-2 ring-cyan-900 scale-105"
                    : "border-white/6"
                  } transition-all bg-[#0b0d1a]`}
                aria-label={`Show ${c.name}`}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={c.image}
                    alt={c.name}
                    fill
                    className="object-contain"
                    sizes="80px"
                  />
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Certification;
