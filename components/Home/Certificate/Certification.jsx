"use client";

import React, { useState } from "react";
import Image from "next/image";

const certifications = [
  {
    name: "Postman API Fundamentals",
    issuer: "Postman Academy",
    description: "Gained hands-on skills in API design, testing, and automation.",
    image: "/images/certificates/postman.jpg",
    link: "https://www.linkedin.com/posts/maneka-piyumawali_postman-api-apitesting-activity-7383140177587671040--Kzz",
  },
  {
    name: "Diploam in Information Technology",
    issuer: "Esoft Metro Campus",
    description: "Learned Python, MySQL, Java, and data analysis techniques.",
    image: "/images/certificates/DiplomaIT.jpg",
    link: "https://drive.google.com/file/d/13SjR1eH5KDDdvr_qIPsIDvOPkL0agLKP/view",
  },
  {
    name: "Python for Beginners",
    issuer: "University of Moratuwa",
    description: "Learned Python basics, programming logic, and problem-solving skills.",
    image: "/images/certificates/python.jpeg",
    link: "https://www.linkedin.com/posts/maneka-piyumawali_python-programming-certification-activity-7293228770839150592-C9EG?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEuYEP8B_f_y8je2bMeVj_dsjLUdyXmUHQ0",
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
    name: "AWS Cloud Foundations",
    issuer: "Amazon Web Services (AWS)",
    description: "Studied AWS core services and cloud infrastructure basics.",
    image: "/images/certificates/aws.png",
    link: "https://www.linkedin.com/posts/maneka-piyumawali_aws-amazonwebservices-cloudcomputing-activity-7362847122251030528-bp0i",
  },
];

const Certification = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 3;

  const prev = () =>
    setStartIndex((prev) =>
      prev === 0 ? certifications.length - visibleCount : prev - 1
    );

  const next = () =>
    setStartIndex((prev) =>
      prev + visibleCount >= certifications.length ? 0 : prev + 1
    );

  const activeDot =
    (startIndex + Math.floor(visibleCount / 2)) % certifications.length;

  return (
    <div id="certificates" className="scroll-mt-24 pl-16 pr-16 pt-16 pb-16 ">
      <h2 className="text-3xl md:text-4xl font-bold text-cyan-400 text-center mb-4">
       Certifications
      </h2>
      <p className="text-center text-gray-300 mb-12">
      RAcknowledgments of my technical skills, knowledge application, and dedication to learning..
      </p>

      <div className="flex items-center justify-center relative gap-4">
        {/* Left Arrow */}
        <button
          onClick={prev}
          className="bg-cyan-400 text-black p-2 rounded-full hover:bg-cyan-500 transition"
        >
          &#8592;
        </button>

        {/* Certificates Carousel */}
        <div className="flex gap-6 flex-wrap justify-center">
          {certifications
            .slice(startIndex, startIndex + visibleCount)
            .map((cert, index) => (
              <div
                key={index}
                className={`flex flex-col items-center bg-[#141428] w-72 h-[370px] rounded-2xl shadow-md border p-5 transition-all duration-300 ${
                  index === 1
                    ? "border-cyan-400/50 shadow-cyan-400/40 scale-105"
                    : "border-cyan-400/20"
                }`}
              >
                {/* Image */}
                <div className="relative w-full h-40 mb-3">
                  <Image
                    src={cert.image}
                    alt={cert.name}
                    fill
                    sizes="300px"
                    className="object-contain rounded-lg"
                    priority
                  />
                </div>

                {/* Details */}
                <div className="text-center flex-1">
                  <h3 className="text-lg font-semibold  text-gray-100 mb-1">{cert.name}</h3>
                  <p className="text-sm text-gray-400 mb-2">{cert.issuer}</p>
                  <p className="text-xs text-gray-300">{cert.description}</p>
                </div>

                {/* Type + Link */}
                <p className="text-xs text-cyan-300 mb-2">{cert.type}</p>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-cyan-400 text-black font-semibold px-3 py-1 rounded-lg hover:bg-cyan-500 transition-colors"
                >
                  View Certificate
                </a>
              </div>
            ))}
        </div>

        {/* Right Arrow */}
        <button
          onClick={next}
          aria-label="Next"
          className="bg-cyan-400 text-black p-2 rounded-full hover:bg-cyan-500 transition-colors"
        >
          &#8594;
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-6 gap-2">
        {certifications.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              index === activeDot ? "bg-cyan-400" : "bg-gray-600"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Certification;
