"use client";
import React from "react";
import {FaInstagram , FaFacebook } from "react-icons/fa"; 
import { RiTwitterXLine } from "react-icons/ri";


const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white rounded p-10">
      <nav className="footer-nav grid grid-flow-col gap-6 justify-center">
        <a className="text-lg hover:text-blue-500">Code4Bharat</a>
        <a className="text-lg hover:text-blue-500">Nexcore Alliance</a>
        <a className="text-lg hover:text-blue-500">Student Alliance</a>
        <a className="text-lg hover:text-blue-500">MarketingJunction</a>
        <a className="text-lg hover:text-blue-500">Guru Kashi University</a>
      </nav>
      <nav className="footer-social grid grid-flow-col gap-6 justify-center mt-4">
        {/* Twitter Icon */}
        <a href="#" className="text-twitter hover:text-black transition transform hover:scale-110">
          <RiTwitterXLine  size={24} />
        </a>
        
        {/* YouTube Icon */}
        <a href="#" className="text-white hover:text-pink-400 transition transform hover:scale-110">
       
        <FaInstagram size={24}/>

            
        </a>
        
        {/* Facebook Icon */}
        <a href="#" className="text-white hover:text-blue-600 transition transform hover:scale-110">
          <FaFacebook size={24} />
        </a>
      </nav>
      <aside className="footer-copyright text-center mt-4">
        <p className="text-sm text-lime-400">Copyright © {new Date().getFullYear()} - All right reserved by C4B</p>
      </aside>
    </footer>
  );
};

export default Footer;
