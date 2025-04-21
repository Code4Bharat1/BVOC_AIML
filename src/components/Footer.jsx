import React from 'react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa'; // Importing React Icons

const Footer = () => {
  return (
    <div className="bg-[#0f0f0f] text-lime-400 p-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start">
        {/* Left Section: Description */}
        <div className="flex items-start space-x-2 mb-4 md:mb-0">
          <div className="text-xl font-semibold">
            <span className="text-green-400">C</span>
            <span className="text-white">Tech</span>
          </div>
          <p className="text-font-lg text-lime-500 max-w-md">
            This platform is the result of a visionary collaboration between Code4Bharat and Guru Kashi University—united by a shared mission to empower India’s youth with cutting-edge skills in Artificial Intelligence & Machine Learning.
          </p>
        </div>
  
        {/* Middle Section: Other Links */}
        <div className="flex flex-col space-y-2 text-lime-500 md:mr-16">
          <h3 className="text-lg font-semibold">Other Links</h3>
          <ul className="space-y-1">
            <li>
              <a href="#" className="hover:text-lime-500 text-sm">Code4Bharat</a>
            </li>
            <li>
              <a href="#" className="hover:text-lime-500 text-sm">Guru Kashi University</a>
            </li>
          </ul>
        </div>
  
        {/* Right Section: Social Media Links */}
        <div className="flex flex-col space-y-2">
          <h3 className="text-lg font-semibold text-lime-500">Socials</h3>
          <div className="flex space-x-4">
            {/* Replaced FontAwesome with React Icons */}
            <a href="#" className="hover:text-lime-400">
              <FaInstagram className="text-xl text-white" /> {/* Instagram icon */}
            </a>
            <a href="#" className="hover:text-lime-400">
              <FaLinkedin className="text-xl text-white" /> {/* LinkedIn icon */}
            </a>
          </div>
        </div>
      </div>
      <hr className="border-white mt-4" />
    </div>
  );
};

export default Footer;
