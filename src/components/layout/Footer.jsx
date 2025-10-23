"use client";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";
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
    <footer className="relative bg-gradient-to-br from-[#1A287E] via-[#2C3560] to-[#212121] text-white overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#26C6DA 1px, transparent 1px), linear-gradient(90deg, #26C6DA 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#26C6DA] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Glowing Orbs */}
      <motion.div 
        className="absolute top-0 left-0 w-96 h-96 bg-[#26C6DA]/10 blur-[150px] rounded-full"
        animate={{ 
          scale: [1, 1.3, 1],
          x: [0, 50, 0]
        }}
        transition={{ duration: 20, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#FF6F00]/10 blur-[180px] rounded-full"
        animate={{ 
          scale: [1, 1.4, 1],
          x: [0, -50, 0]
        }}
        transition={{ duration: 25, repeat: Infinity }}
      />

      <div className="mx-auto w-full max-w-7xl px-6 md:px-12 lg:px-20 relative z-10">
        {/* Top Divider */}
        <motion.div 
          className="h-1 bg-gradient-to-r from-transparent via-[#26C6DA] to-transparent rounded-full my-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />

        {/* Main Content */}
        <div className="flex flex-col md:flex-row justify-between gap-12 py-8">
          {/* Left - Description */}
          <motion.div 
            className="md:w-1/3"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-6">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                <span className="text-[#26C6DA]">Bachelor's</span> in{" "}
                <span className="text-[#26C6DA]">AI</span> &{" "}
                <span className="text-[#FF6F00]">ML</span>
              </h3>
            </div>
            <p className="text-base md:text-lg leading-relaxed text-gray-300">
              A next-gen undergraduate program designed to equip students with real-world AI skills. Co-developed with industry leaders, it blends theory with hands-on training to launch tech-driven careers.
            </p>

            {/* Decorative Element */}
            <div className="flex items-center gap-3 mt-6">
              <motion.div 
                className="h-1 w-16 bg-gradient-to-r from-[#26C6DA] to-[#00BCD4] rounded-full"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div 
                className="w-2 h-2 rounded-full bg-[#FF6F00]"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div 
                className="h-1 w-16 bg-gradient-to-r from-[#00BCD4] to-[#FF6F00] rounded-full"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              />
            </div>
          </motion.div>

          {/* Right - Links Section */}
          <motion.div 
            className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Explore More */}
            <div>
              <h2 className="mb-6 text-lg font-bold text-[#26C6DA]">
                Explore More
              </h2>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <Link
                    href="/infrastructure"
                    className={`transition-all duration-300 flex items-center gap-2 group ${
                      mounted && pathname === "/infrastructure" 
                        ? "text-[#26C6DA] font-semibold" 
                        : "hover:text-[#26C6DA]"
                    }`}
                  >
                    <span className={`w-0 h-0.5 bg-[#26C6DA] transition-all duration-300 ${
                      mounted && pathname === "/infrastructure" ? "w-4" : "group-hover:w-4"
                    }`}></span>
                    Infrastructure
                  </Link>
                </li>
                <li>
                  <Link
                    href="/learn-grow"
                    className={`transition-all duration-300 flex items-center gap-2 group ${
                      mounted && pathname === "/learn-grow" 
                        ? "text-[#26C6DA] font-semibold" 
                        : "hover:text-[#26C6DA]"
                    }`}
                  >
                    <span className={`w-0 h-0.5 bg-[#26C6DA] transition-all duration-300 ${
                      mounted && pathname === "/learn-grow" ? "w-4" : "group-hover:w-4"
                    }`}></span>
                    Learn and Grow
                  </Link>
                </li>
                <li>
                  <Link
                    href="/whychooseus"
                    className={`transition-all duration-300 flex items-center gap-2 group ${
                      mounted && pathname === "/whychooseus" 
                        ? "text-[#26C6DA] font-semibold" 
                        : "hover:text-[#26C6DA]"
                    }`}
                  >
                    <span className={`w-0 h-0.5 bg-[#26C6DA] transition-all duration-300 ${
                      mounted && pathname === "/whychooseus" ? "w-4" : "group-hover:w-4"
                    }`}></span>
                    Why We're Different
                  </Link>
                </li>
              </ul>
            </div>

            {/* Policies */}
            <div>
              <h2 className="mb-6 text-lg font-bold text-[#00BCD4]">
                Policies
              </h2>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <Link
                    href="/selection-policy"
                    className={`transition-all duration-300 flex items-center gap-2 group ${
                      mounted && pathname === "/selection-policy" 
                        ? "text-[#26C6DA] font-semibold" 
                        : "hover:text-[#26C6DA]"
                    }`}
                  >
                    <span className={`w-0 h-0.5 bg-[#26C6DA] transition-all duration-300 ${
                      mounted && pathname === "/selection-policy" ? "w-4" : "group-hover:w-4"
                    }`}></span>
                    Selection Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/eligibility-criteria"
                    className={`transition-all duration-300 flex items-center gap-2 group ${
                      mounted && pathname === "/eligibility-criteria" 
                        ? "text-[#26C6DA] font-semibold" 
                        : "hover:text-[#26C6DA]"
                    }`}
                  >
                    <span className={`w-0 h-0.5 bg-[#26C6DA] transition-all duration-300 ${
                      mounted && pathname === "/eligibility-criteria" ? "w-4" : "group-hover:w-4"
                    }`}></span>
                    Eligibility Criteria
                  </Link>
                </li>
                <li>
                  <Link
                    href="/placement-policy"
                    className={`transition-all duration-300 flex items-center gap-2 group ${
                      mounted && pathname === "/placement-policy" 
                        ? "text-[#26C6DA] font-semibold" 
                        : "hover:text-[#26C6DA]"
                    }`}
                  >
                    <span className={`w-0 h-0.5 bg-[#26C6DA] transition-all duration-300 ${
                      mounted && pathname === "/placement-policy" ? "w-4" : "group-hover:w-4"
                    }`}></span>
                    Placement Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/scholarship-policy"
                    className={`transition-all duration-300 flex items-center gap-2 group ${
                      mounted && pathname === "/scholarship-policy" 
                        ? "text-[#26C6DA] font-semibold" 
                        : "hover:text-[#26C6DA]"
                    }`}
                  >
                    <span className={`w-0 h-0.5 bg-[#26C6DA] transition-all duration-300 ${
                      mounted && pathname === "/scholarship-policy" ? "w-4" : "group-hover:w-4"
                    }`}></span>
                    Scholarship Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/fees-policy"
                    className={`transition-all duration-300 flex items-center gap-2 group ${
                      mounted && pathname === "/fees-policy" 
                        ? "text-[#26C6DA] font-semibold" 
                        : "hover:text-[#26C6DA]"
                    }`}
                  >
                    <span className={`w-0 h-0.5 bg-[#26C6DA] transition-all duration-300 ${
                      mounted && pathname === "/fees-policy" ? "w-4" : "group-hover:w-4"
                    }`}></span>
                    Fees Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h2 className="mb-6 text-lg font-bold text-[#FF6F00]">
                Contact Us
              </h2>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start gap-3 group">
                  <FaMapMarkerAlt className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#26C6DA]" />
                  <a
                    href="https://maps.app.goo.gl/prUqufdGwFhtm6DFA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#26C6DA] transition-all duration-300"
                  >
                    Kurla West, Mumbai, Maharashtra 400070
                  </a>
                </li>
                <li className="flex items-start gap-3 group">
                  <FaPhone className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#26C6DA]" />
                  <a
                    href="tel:+919892398976"
                    className="hover:text-[#26C6DA] transition-all duration-300"
                  >
                    +91 9892398976
                  </a>
                </li>
                <li className="flex items-start gap-3 group">
                  <FaEnvelope className="w-5 h-5 mt-0.5 flex-shrink-0 text-[#26C6DA]" />
                  <a
                    href="mailto:bvoc@nexcorealliance.com"
                    className="hover:text-[#26C6DA] transition-all duration-300"
                  >
                    bvoc@nexcorealliance.com
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Bottom Divider */}
        <motion.div 
          className="h-1 bg-gradient-to-r from-transparent via-[#26C6DA] to-transparent rounded-full my-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />

        {/* Footer Bottom */}
        <motion.div 
          className="pb-8 space-y-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-center text-sm md:text-base text-gray-300">
            Built with{" "}
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="inline-block"
            >
              <FaHeart className="inline text-[#FF6F00]" />
            </motion.span>{" "}
            and passion by{" "}
            <a
              href="https://code4bharat.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#26C6DA] hover:text-[#FF6F00] font-semibold transition-all duration-300"
            >
              Code4Bharat
            </a>
          </div>
          <div className="text-center text-gray-400 text-sm">
            © 2025{" "}
            <Link
              href="/"
              className="text-[#00BCD4] hover:text-[#26C6DA] font-semibold transition-all duration-300"
            >
              BVOC™
            </Link>
            . All Rights Reserved.
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;