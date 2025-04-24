"use client";
import React from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white px-4 py-8 sm:px-10 sm:py-10 w-full overflow-hidden">
      {/* Navigation Links */}
      <nav className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-center text-sm sm:text-base">
  <a 
    href="https://code4bharat.com/" 
    className="hover:text-blue-400 transition duration-200"
    target="_blank"
    rel="noopener noreferrer"
  >
    Code4Bharat
  </a>
  <a 
    href="https://nexcorealliance.com/" 
    className="hover:text-blue-400 transition duration-200"
    target="_blank"
    rel="noopener noreferrer"
  >
    Nexcore Alliance
  </a>
  <a 
    href="https://studentalliance.in/" 
    className="hover:text-blue-400 transition duration-200"
    target="_blank"
    rel="noopener noreferrer"
  >
    Student Alliance
  </a>
  <a 
    href="https://marketiqjunction.com/" 
    className="hover:text-blue-400 transition duration-200"
    target="_blank"
    rel="noopener noreferrer"
  >
    MarketiqJunction
  </a>
  <a 
    href="https://www.gku.ac.in/" 
    className="hover:text-blue-400 transition duration-200"
    target="_blank"
    rel="noopener noreferrer"
  >
    Guru Kashi University
  </a>
</nav>


      {/* Social Media Icons */}
      <div className="flex justify-center items-center gap-6 mt-6">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition transform hover:scale-110">
          <RiTwitterXLine size={20} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition transform hover:scale-110">
          <FaInstagram size={20} />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition transform hover:scale-110">
          <FaFacebook size={20} />
        </a>
      </div>

      {/* Copyright */}
      <div className="text-center mt-6">
        <p className="text-sm text-lime-400">
          © {new Date().getFullYear()} All rights reserved by C4B
        </p>
      </div>
    </footer>
  );
};

export default Footer;
