import React from "react";
import Link from "next/link";
import { NavLinks } from "../../../constant/constant";
import { CgClose } from "react-icons/cg";
import { FaFolderOpen } from "react-icons/fa";
import Image from "next/image";

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ closeNav, showNav }: Props) => {
  const navOpen = showNav ? "translate-x-0" : "translate-x-[100%]";

  return (
    <div>
      {/* Overlay */}
      <div
        className={`fixed inset-0 transition-all duration-500 z-[100002] bg-black ${
          showNav ? "opacity-60 visible" : "opacity-0 invisible"
        }`}
        onClick={closeNav}
      ></div>

      {/* Sidebar */}
      <div
        className={`text-white fixed top-0 right-0 h-full w-[80%] sm:w-[60%] 
        bg-gradient-to-b from-cyan-900 via-cyan-800 to-blue-900 
        shadow-2xl z-[100050] p-6 transform transition-transform duration-500 ${navOpen}`}
      >
        {/* Close Button */}
        <CgClose
          className="absolute top-[1rem] right-[1.4rem] sm:w-7 sm:h-7 w-6 h-6 cursor-pointer hover:text-cyan-300 transition"
          onClick={closeNav}
        />

        {/* Profile Section */}
        <div className="flex flex-col items-center mt-5 mb-8 text-center">
          <div className="w-20 h-20 rounded-full border-2 border-cyan-500 overflow-hidden shadow-lg">
            <Image
              src="/images/profile2.jpg"
              alt="Profile"
              width={80}
              height={80}
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-xl font-semibold mt-3">Maneka Piyumawali</h2>
          <p className="text-sm text-gray-300">manekapiyumawali299@gmail.com</p>
        </div>

        {/* Divider */}
        <div className="border-t border-cyan-500/30 mb-4"></div>

        {/* Nav Links */}
        <div className="flex flex-col space-y-5">
          {NavLinks.map((link) => (
            <Link key={link.id} href={link.url} onClick={closeNav}>
              <div className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-cyan-700/30 transition">
                <FaFolderOpen className="text-cyan-300" />
                <p className="text-lg font-medium tracking-wide">{link.Label}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
