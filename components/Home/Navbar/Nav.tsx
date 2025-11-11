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
  const [activeLink, setActiveLink] = useState<string>("#home");

  useEffect(() => {
    const handleScroll = () => {
      setNavBg(window.scrollY >= 90);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("section[id], [id]")
    );

    const onScroll = () => {
      const offset = window.innerHeight * 0.25;
      let current = "#home";

      for (const sec of sections) {
        const id = sec.getAttribute("id");
        if (!id) continue;
        const rect = sec.getBoundingClientRect();
        if (rect.top <= offset && rect.bottom > offset) {
          current = `#${id}`;
          break;
        }
      }

      if (location.hash) {
        setActiveLink(location.hash);
      } else {
        setActiveLink(current);
      }
    };

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("hashchange", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("hashchange", onScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full h-[12vh] z-[10000] transition-all duration-200 
      ${navBg ? "bg-[#0e1641d9] shadow-md backdrop-blur-sm" : ""}`}
    >
      <div className="flex items-center justify-between h-full w-[90%] mx-auto">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <FaCode className="w-5 h-5 text-black" />
          </div>
          <Link
            href="/"
            className="text-xl md:text-2xl font-bold text-white hidden sm:block"
            aria-label="Home"
          >
            <span className="sr-only">Home</span>
          </Link>
        </div>

        <nav className="  hidden lg:flex items-center space-x-10">
          {NavLinks.map((link) => {
            const isActive = activeLink === link.url;
            return (
              <Link
                key={link.id}
                href={link.url}
                className={`text-base font-medium transition-all duration-200 ${
                  isActive
                    ? "text-cyan-300 font-semibold border-b-2 border-cyan-400 pb-1"
                    : "text-white hover:text-cyan-300"
                }`}
                onClick={() => setActiveLink(link.url)}
              >
                {link.Label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center space-x-4">
          <a
            href="/images/cv.pdf"
            download
            aria-label="Download CV"
            className="group inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-700 to-blue-800 text-white font-semibold shadow-md transform hover:-translate-y-0.5 hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-cyan-300/20 border border-white/6"
          >
            <span className="flex items-center justify-center w-9 h-9 bg-white/6 rounded-full transition-transform duration-300 group-hover:rotate-12">
              <BiDownload className="w-5 h-5 text-white" />
            </span>
            <span className="hidden sm:inline">Download CV</span>
          </a>

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
