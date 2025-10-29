import React from 'react'
import Link from 'next/link'



const Footer = () => {
  return (
    <footer className="bg-[#0f142ed9] dark:bg-dark border-t border-gray-200 dark:border-gray-800">
      <div className="container max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          
          {/* Brand */}
          <div className="mb-4 md:mb-0">
            <Link
              href="/"
              className="text-2xl font-bold text-white tracking-wide hover:text-cyan-300 transition-colors"
            >
              MANEKA&trade;
            </Link>
            <p className="text-gray-300 text-sm mt-1">
              © {new Date().getFullYear()} MANEKA. All rights reserved.
            </p>
          </div>

          {/* Extra Links */}
          <div className="flex space-x-6 text-gray-300 text-sm">
            <Link href="/about" className="hover:text-cyan-300 transition-colors">
              About
            </Link>
            <Link href="/contact" className="hover:text-cyan-300 transition-colors">
              Contact
            </Link>
            <Link href="/privacy" className="hover:text-cyan-300 transition-colors">
              Privacy Policy
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
