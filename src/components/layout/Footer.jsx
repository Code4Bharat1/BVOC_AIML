"use client";
import React from "react";
import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#1a1f4d] via-[#2d1b4e] to-[#4a1f6b] text-white relative overflow-hidden">
      <div className="mx-auto w-full lg:px-20 px-7">
        {/* Decorative glowing stars (cyan, orange, purple) */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-2 h-2 bg-[#00d4ff] rounded-full blur-sm animate-pulse" />
          <div className="absolute top-16 right-20 w-3 h-3 bg-[#ff6b35] rounded-full blur-sm animate-ping" />
          <div className="absolute bottom-10 left-1/3 w-2 h-2 bg-[#AC6CFF] rounded-full blur-sm animate-pulse" />
          <div className="absolute bottom-16 right-1/4 w-4 h-4 bg-[#00d4ff] rounded-full blur-sm animate-ping" />
        </div>

        <hr className="my-6 border-[#00d4ff]/50" />

        {/* Main layout: description left, links right */}
        <div className="flex flex-col md:flex-row justify-between gap-8 relative z-10">
          {/* Left - Description */}
          <div className="md:w-1/3 mb-8 md:mb-0">
            <p className="text-base md:text-lg leading-relaxed text-white">
              <strong className="text-xl">
                <span className="text-[#AC6CFF]">B.</span>Voc in{" "}
                <span className="text-[#00d4ff]">AI</span> &{" "}
                <span className="text-[#ff6b35]">ML</span>
              </strong>{" "}
              is a next-gen undergraduate program designed to equip students
              with real-world AI skills. Co-developed with industry leaders, it
              blends theory with hands-on training to launch tech-driven
              careers.
            </p>
          </div>

          {/* Right - Links section */}
          <div className="md:w-2/3 lg:ml-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {/* Explore More */}
            <div>
              <h2 className="mb-4 text-lg font-semibold bg-gradient-to-r from-[#00d4ff] via-[#AC6CFF] to-[#ff6b35] bg-clip-text text-transparent">
                Explore More
              </h2>
              <ul className="space-y-3 text-white text-base">
                <li>
                  <Link
                    href="/infrastructure"
                    className="hover:text-[#00d4ff] transition-colors duration-300"
                  >
                    Infrastructure
                  </Link>
                </li>
                <li>
                  <Link
                    href="/learn-grow"
                    className="hover:text-[#ff6b35] transition-colors duration-300"
                  >
                    Learn and Grow
                  </Link>
                </li>
                <li>
                  <Link
                    href="/whychooseus"
                    className="hover:text-[#AC6CFF] transition-colors duration-300"
                  >
                    Why We're Different
                  </Link>
                </li>
              </ul>
            </div>

            {/* Policies */}
            <div>
              <h2 className="mb-4 text-lg font-semibold bg-gradient-to-r from-[#00d4ff] via-[#AC6CFF] to-[#ff6b35] bg-clip-text text-transparent">
                Policies
              </h2>
              <ul className="space-y-3 text-white text-base">
                <li>
                  <Link
                    href="/selection-policy"
                    className="hover:text-[#00d4ff] transition-colors duration-300"
                  >
                    Selection Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/eligibility-criteria"
                    className="hover:text-[#AC6CFF] transition-colors duration-300"
                  >
                    Eligibility Criteria
                  </Link>
                </li>
                <li>
                  <Link
                    href="/placement-policy"
                    className="hover:text-[#ff6b35] transition-colors duration-300"
                  >
                    Placement Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/internship-policy"
                    className="hover:text-[#00d4ff] transition-colors duration-300"
                  >
                    Paid Internship Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/scholarship-policy"
                    className="hover:text-[#AC6CFF] transition-colors duration-300"
                  >
                    Scholarship Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/fees-policy"
                    className="hover:text-[#ff6b35] transition-colors duration-300"
                  >
                    Fees Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h2 className="mb-4 text-lg font-semibold bg-gradient-to-r from-[#00d4ff] via-[#AC6CFF] to-[#ff6b35] bg-clip-text text-transparent">
                Contact Us
              </h2>
              <ul className="space-y-3 text-white text-base">
                <li className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#00d4ff]" />
                  <a
                    href="https://www.google.com/maps/place/Nexcore+Alliance+LLP"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#ff6b35] transition-colors duration-300"
                  >
                    Kurla West, Mumbai, Maharashtra 400070
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <Phone className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#AC6CFF]" />
                  <a
                    href="tel:+919892398976"
                    className="hover:text-[#00d4ff] transition-colors duration-300"
                  >
                    +91 9892398976
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <Mail className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#ff6b35]" />
                  <a
                    href="mailto:bvoc@nexcorealliance.com"
                    className="hover:text-[#AC6CFF] transition-colors duration-300"
                  >
                    bvoc@nexcorealliance.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-8 border-[#00d4ff]/50" />

        <div className="text-center mb-2 text-sm sm:text-base text-gray-300">
          Built with ❤️ and passion by{" "}
          <a
            href="https://code4bharat.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#00d4ff] hover:text-[#ff6b35] transition-colors duration-300"
          >
            Code4Bharat
          </a>
        </div>
        <div className="text-center text-gray-400 pb-5 text-sm">
          © 2025{" "}
          <Link
            href="#"
            className="hover:text-[#AC6CFF] transition-colors duration-300"
          >
            BVOC™
          </Link>
          . All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
