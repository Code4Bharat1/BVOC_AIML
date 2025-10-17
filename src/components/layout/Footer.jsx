"use client";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaHeart } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

const Footer = () => {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  
  return (
    <footer className="relative bg-gradient-to-br from-[#1A0B3C] via-[#301C73] to-[#5D1E9E] text-white overflow-hidden">
      {/* Background effects removed */}

      <div className="mx-auto w-full max-w-7xl px-6 md:px-12 lg:px-20 relative z-10">
        {/* Top Divider */}
        <div className="h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent rounded-full my-8" />

        {/* Main Content */}
        <div className="flex flex-col md:flex-row justify-between gap-12 py-8">
          {/* Left - Description */}
          <div className="md:w-1/3">
            <div className="mb-6">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                <span className="text-cyan-400">Bachelor's</span> in{" "}
                <span className="text-cyan-400">AI</span> &{" "}
                <span className="text-orange-400">ML</span>
              </h3>
            </div>
            <p className="text-base md:text-lg leading-relaxed text-gray-300">
              A next-gen undergraduate program designed to equip students with real-world AI skills. Co-developed with industry leaders, it blends theory with hands-on training to launch tech-driven careers.
            </p>

            {/* Decorative Element */}
            <div className="flex items-center gap-3 mt-6">
              <div className="h-1 w-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full" />
              <div className="w-2 h-2 rounded-full bg-orange-500" />
              <div className="h-1 w-16 bg-gradient-to-r from-purple-500 to-orange-500 rounded-full" />
            </div>
          </div>

          {/* Right - Links Section */}
          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Explore More */}
            <div>
              <h2 className="mb-6 text-lg font-bold text-cyan-400">
                Explore More
              </h2>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <Link
                    href="/infrastructure"
                    className={`transition-all duration-300 flex items-center gap-2 group ${
                      mounted && pathname === "/infrastructure" 
                        ? "text-cyan-400 font-semibold underline decoration-cyan-400 decoration-2 underline-offset-4" 
                        : "hover:text-cyan-400"
                    }`}
                  >
                    Infrastructure
                  </Link>
                </li>
                <li>
                  <Link
                    href="/learn-grow"
                    className={`transition-all duration-300 flex items-center gap-2 group ${
                      mounted && pathname === "/learn-grow" 
                        ? "text-orange-400 font-semibold underline decoration-orange-400 decoration-2 underline-offset-4" 
                        : "hover:text-orange-400"
                    }`}
                  >
                    Learn and Grow
                  </Link>
                </li>
                <li>
                  <Link
                    href="/whychooseus"
                    className={`transition-all duration-300 flex items-center gap-2 group ${
                      mounted && pathname === "/whychooseus" 
                        ? "text-purple-400 font-semibold underline decoration-purple-400 decoration-2 underline-offset-4" 
                        : "hover:text-purple-400"
                    }`}
                  >
                    Why We're Different
                  </Link>
                </li>
              </ul>
            </div>

            {/* Policies */}
            <div>
              <h2 className="mb-6 text-lg font-bold text-purple-400">
                Policies
              </h2>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <Link
                    href="/selection-policy"
                    className={`transition-all duration-300 ${
                      mounted && pathname === "/selection-policy" 
                        ? "text-cyan-400 font-semibold underline decoration-cyan-400 decoration-2 underline-offset-4" 
                        : "hover:text-cyan-400"
                    }`}
                  >
                    Selection Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/eligibility-criteria"
                    className={`transition-all duration-300 ${
                      mounted && pathname === "/eligibility-criteria" 
                        ? "text-purple-400 font-semibold underline decoration-purple-400 decoration-2 underline-offset-4" 
                        : "hover:text-purple-400"
                    }`}
                  >
                    Eligibility Criteria
                  </Link>
                </li>
                <li>
                  <Link
                    href="/placement-policy"
                    className={`transition-all duration-300 ${
                      mounted && pathname === "/placement-policy" 
                        ? "text-orange-400 font-semibold underline decoration-orange-400 decoration-2 underline-offset-4" 
                        : "hover:text-orange-400"
                    }`}
                  >
                    Placement Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/scholarship-policy"
                    className={`transition-all duration-300 ${
                      mounted && pathname === "/scholarship-policy" 
                        ? "text-purple-400 font-semibold underline decoration-purple-400 decoration-2 underline-offset-4" 
                        : "hover:text-purple-400"
                    }`}
                  >
                    Scholarship Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/fees-policy"
                    className={`transition-all duration-300 ${
                      mounted && pathname === "/fees-policy" 
                        ? "text-orange-400 font-semibold underline decoration-orange-400 decoration-2 underline-offset-4" 
                        : "hover:text-orange-400"
                    }`}
                  >
                    Fees Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h2 className="mb-6 text-lg font-bold text-orange-400">
                Contact Us
              </h2>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-3 group">
                  <FaMapMarkerAlt className="w-5 h-5 mt-0.5 flex-shrink-0 text-cyan-400" />
                  <a
                    href="https://maps.app.goo.gl/prUqufdGwFhtm6DFA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-cyan-400 transition-all duration-300"
                  >
                    Kurla West, Mumbai, Maharashtra 400070
                  </a>
                </li>
                <li className="flex items-start gap-3 group">
                  <FaPhone className="w-5 h-5 mt-0.5 flex-shrink-0 text-purple-400" />
                  <a
                    href="tel:+919892398976"
                    className="hover:text-purple-400 transition-all duration-300"
                  >
                    +91 9892398976
                  </a>
                </li>
                <li className="flex items-start gap-3 group">
                  <FaEnvelope className="w-5 h-5 mt-0.5 flex-shrink-0 text-orange-400" />
                  <a
                    href="mailto:bvoc@nexcorealliance.com"
                    className="hover:text-orange-400 transition-all duration-300"
                  >
                    bvoc@nexcorealliance.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent rounded-full my-8" />

        {/* Footer Bottom */}
        <div className="pb-8 space-y-3">
          <div className="text-center text-sm md:text-base text-gray-300">
            Built with <FaHeart className="inline text-orange-500 animate-pulse" /> and passion by{" "}
            <a
              href="https://code4bharat.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-orange-400 font-semibold transition-all duration-300"
            >
              Code4Bharat
            </a>
          </div>
          <div className="text-center text-gray-400 text-sm">
            © 2025{" "}
            <Link
              href="/"
              className="text-purple-400 hover:text-cyan-400 font-semibold transition-all duration-300"
            >
              BVOC™
            </Link>
            . All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;