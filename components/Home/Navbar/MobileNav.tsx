import React from "react";
import Link from "next/link";
import { NavLinks } from "../../../constant/constant";
import { CgClose } from "react-icons/cg";

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ closeNav, showNav }: Props) => {
  // Conditional translate-x class
  const navOpen = showNav ? "translate-x-0" : "translate-x-[100%]";

  return (
    <div>
      {/* Overlay */}
      <div
        className={`fixed inset-0 transform transition-all duration-500 z-[100002] bg-black opacity-70 w-full h-screen ${
          showNav ? "opacity-70 visible" : "opacity-0 invisible"
        }`}
        onClick={closeNav}
      ></div>

      {/* Sidebar with slide-in animation */}
      <div
        className={`text-white fixed top-0 right-0 h-full w-[80%] sm:w-[60%] bg-cyan-800 z-[100050] p-6 transform transition-transform duration-500 ${navOpen}`}
      >
        {/* Close Button */}
        <CgClose
          className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 cursor-pointer"
          onClick={closeNav}
        />

        {/* Nav Links */}
        <div className="flex flex-col space-y-6 mt-18">
          {NavLinks.map((link) => (
            <Link key={link.id} href={link.url} onClick={closeNav}>
              <p className="text-white w-fit text-xl ml-12 border-b pb-1 border-white sm:text-[30px] ">
                {link.Label}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
