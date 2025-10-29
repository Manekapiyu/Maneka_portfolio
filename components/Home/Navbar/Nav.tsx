"use client";
import React, { useEffect, useState } from "react";
import { FaCode } from "react-icons/fa";
import Link from "next/link";
import { NavLinks } from "@/constant/constant";
import { BiDownload } from "react-icons/bi";
import { HiBars3BottomRight } from "react-icons/hi2";

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setNavBg(window.scrollY >= 90);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full h-[12vh] z-[10000] transition-all duration-200 
      ${navBg ? "bg-[#0e1641d9] shadow-md backdrop-blur-sm" : ""}`}
    >
      <div className="flex items-center justify-between h-full w-[90%] mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <FaCode className="w-5 h-5 text-black" />
          </div>
          <Link
            href="/"
            className="text-xl md:text-2xl font-bold text-white hidden sm:block"
          >
            MANEKA&trade;
          </Link>
        </div>

        {/* Nav Links (Desktop) */}
        <nav className="  hidden lg:flex items-center space-x-10">
          {NavLinks.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className=" text-base font-medium text-white hover:text-cyan-300 transition-all duration-200"
            >
              {link.Label}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-4">
          {/* Download CV */}
          <a
            href="/cv.pdf"
            download
            className="px-6 py-3 text-sm rounded-lg bg-blue-600 hover:bg-blue-800 transition-all duration-200 text-white flex items-center space-x-2 "
          >
            <BiDownload className="w-5 h-5" />
            <span>Download CV</span>
          </a>

          {/* Mobile Menu */}
          <HiBars3BottomRight
            onClick={openNav}
            className="lg:hidden w-8 h-8 cursor-pointer text-white"
          />
        </div>
      </div>
    </header>
  );
};

export default Nav;
