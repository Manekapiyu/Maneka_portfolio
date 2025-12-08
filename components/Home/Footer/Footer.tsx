"use client";

import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#0f142e] to-[#090d1f] border-t border-cyan-800/20 py-10">
      <div className="container max-w-7xl mx-auto px-6 text-center flex flex-col items-center space-y-6">
        <p className="text-sm text-gray-200 font-black">
          ©2025{" "}
          <span className="font-semibold text-cyan-400">
            Maneka Piyumawali.
          </span>{" "}
          All Rights Reserved
        </p>

        <div className="flex justify-center space-x-4 mt-2">
          <Link
            href="https://github.com/manekapiyumawali"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-400 text-gray-400 hover:text-white hover:bg-cyan-500 hover:border-cyan-500 transition-all"
          >
            <FaGithub />
          </Link>

          <Link
            href="https://www.linkedin.com/in/maneka-piyumawali/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-400 text-gray-400 hover:text-white hover:bg-cyan-500 hover:border-cyan-500 transition-all"
          >
            <FaLinkedin />
          </Link>

          <Link
            href="https://www.instagram.com/maneka_piyumawali/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-400 text-gray-400 hover:text-white hover:bg-pink-500 hover:border-pink-500 transition-all"
          >
            <FaInstagram />
          </Link>

          <Link
            href="mailto:manekapiyumawali299@gmail.com"
            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-400 text-gray-400 hover:text-white hover:bg-cyan-500 hover:border-cyan-500 transition-all"
          >
            <FaEnvelope />
          </Link>
        </div>

        <p className="text-sm text-gray-500 font-light font-family-mono">
          Designed by{" "}
          <Link
            href="https://bootstrapmade.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-300 hover:underline"
          >
            Maneka
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
