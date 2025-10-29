"use client";

import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    icon: "/images/s2.png",
    name: "Web Development",
    description:
      "Building scalable and secure web applications with modern technologies.",
  },
  {
    icon: "/images/s1.png",
    name: "UI & UX Design",
    description: "Designing responsive front-end experiences for real users.",
  },
  {
    icon: "/images/s4.png",
    name: "Full-Stack Solutions",
    description: "Delivering complete end-to-end software solutions, from UI to deployment.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Services = () => {
  return (
    <section  id="services" className=" scroll-mt-24 pt-16 pb-16 ">
      <h1 className="text-center text-3xl md:text-4xl font-bold text-white">Services</h1>
      

      <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-15 mt-20">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-8 rounded-2xl text-center shadow-lg"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <img
              src={service.icon}
              alt={service.name}
              className="w-16 h-16 mx-auto mb-4"
            />
            <h2 className="text-xl font-semibold text-white mb-2">
              {service.name}
            </h2>
            <p className="text-gray-300">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
