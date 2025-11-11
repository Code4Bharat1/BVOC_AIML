"use client";
import { MapPin, Phone, Mail, Heart } from "lucide-react";
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
    <footer className="relative bg-white text-slate-900 overflow-hidden border-t border-slate-200">
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 0.4, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Soft Glowing Orbs */}
      <motion.div 
        className="absolute top-0 left-0 w-96 h-96 bg-blue-100/10 blur-[180px] rounded-full"
        animate={{ 
          scale: [1, 1.2, 1],
          x: [0, 40, 0]
        }}
        transition={{ duration: 22, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-indigo-100/8 blur-[200px] rounded-full"
        animate={{ 
          scale: [1, 1.25, 1],
          x: [0, -40, 0]
        }}
        transition={{ duration: 25, repeat: Infinity }}
      />

      <div className="mx-auto w-full max-w-7xl px-6 md:px-12 lg:px-20 relative z-10">
        {/* Top Divider */}
        <motion.div 
          className="h-0.5 bg-gradient-to-r from-transparent via-blue-300 to-transparent rounded-full my-8"
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
              <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif" }}>
                <span className="text-blue-600">Bachelor's</span> in{" "}
                <span className="text-blue-600">AI</span> &{" "}
                <span className="text-indigo-600">ML</span>
              </h3>
            </div>
            <p className="text-base md:text-lg leading-relaxed text-slate-600" style={{ fontFamily: "'Inter', -apple-system, system-ui, sans-serif" }}>
              A next-gen undergraduate program designed to equip students with real-world AI skills. Co-developed with industry leaders, it blends theory with hands-on training to launch tech-driven careers.
            </p>

            {/* Decorative Element */}
            <div className="flex items-center gap-3 mt-6">
              <motion.div 
                className="h-1 w-16 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div 
                className="w-2 h-2 rounded-full bg-indigo-500"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div 
                className="h-1 w-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
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
              <h2 className="mb-6 text-lg font-bold text-blue-600" style={{ fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif" }}>
                Explore More
              </h2>
              <ul className="space-y-3 text-slate-600">
                <li>
                  <Link
                    href="/infrastructure"
                    className={`transition-all duration-300 flex items-center gap-2 group ${
                      mounted && pathname === "/infrastructure" 
                        ? "text-blue-600 font-semibold" 
                        : "hover:text-blue-600"
                    }`}
                    style={{ fontFamily: "'Inter', -apple-system, system-ui, sans-serif" }}
                  >
                    <span className={`w-0 h-0.5 bg-blue-600 transition-all duration-300 ${
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
                        ? "text-blue-600 font-semibold" 
                        : "hover:text-blue-600"
                    }`}
                    style={{ fontFamily: "'Inter', -apple-system, system-ui, sans-serif" }}
                  >
                    <span className={`w-0 h-0.5 bg-blue-600 transition-all duration-300 ${
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
                        ? "text-blue-600 font-semibold" 
                        : "hover:text-blue-600"
                    }`}
                    style={{ fontFamily: "'Inter', -apple-system, system-ui, sans-serif" }}
                  >
                    <span className={`w-0 h-0.5 bg-blue-600 transition-all duration-300 ${
                      mounted && pathname === "/whychooseus" ? "w-4" : "group-hover:w-4"
                    }`}></span>
                    Why We're Different
                  </Link>
                </li>
              </ul>
            </div>

            {/* Policies */}
            <div>
              <h2 className="mb-6 text-lg font-bold text-indigo-600" style={{ fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif" }}>
                Policies
              </h2>
              <ul className="space-y-3 text-slate-600">
                <li>
                  <Link
                    href="/selection-policy"
                    className={`transition-all duration-300 flex items-center gap-2 group ${
                      mounted && pathname === "/selection-policy" 
                        ? "text-blue-600 font-semibold" 
                        : "hover:text-blue-600"
                    }`}
                    style={{ fontFamily: "'Inter', -apple-system, system-ui, sans-serif" }}
                  >
                    <span className={`w-0 h-0.5 bg-blue-600 transition-all duration-300 ${
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
                        ? "text-blue-600 font-semibold" 
                        : "hover:text-blue-600"
                    }`}
                    style={{ fontFamily: "'Inter', -apple-system, system-ui, sans-serif" }}
                  >
                    <span className={`w-0 h-0.5 bg-blue-600 transition-all duration-300 ${
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
                        ? "text-blue-600 font-semibold" 
                        : "hover:text-blue-600"
                    }`}
                    style={{ fontFamily: "'Inter', -apple-system, system-ui, sans-serif" }}
                  >
                    <span className={`w-0 h-0.5 bg-blue-600 transition-all duration-300 ${
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
                        ? "text-blue-600 font-semibold" 
                        : "hover:text-blue-600"
                    }`}
                    style={{ fontFamily: "'Inter', -apple-system, system-ui, sans-serif" }}
                  >
                    <span className={`w-0 h-0.5 bg-blue-600 transition-all duration-300 ${
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
                        ? "text-blue-600 font-semibold" 
                        : "hover:text-blue-600"
                    }`}
                    style={{ fontFamily: "'Inter', -apple-system, system-ui, sans-serif" }}
                  >
                    <span className={`w-0 h-0.5 bg-blue-600 transition-all duration-300 ${
                      mounted && pathname === "/fees-policy" ? "w-4" : "group-hover:w-4"
                    }`}></span>
                    Fees Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h2 className="mb-6 text-lg font-bold text-blue-700" style={{ fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif" }}>
                Contact Us
              </h2>
              <ul className="space-y-4 text-slate-600">
                <li className="flex items-start gap-3 group">
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-blue-600" />
                  <a
                    href="https://maps.app.goo.gl/prUqufdGwFhtm6DFA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 transition-all duration-300"
                    style={{ fontFamily: "'Inter', -apple-system, system-ui, sans-serif" }}
                  >
                    Kurla West, Mumbai, Maharashtra 400070
                  </a>
                </li>
                <li className="flex items-start gap-3 group">
                  <Phone className="w-5 h-5 mt-0.5 flex-shrink-0 text-blue-600" />
                  <a
                    href="tel:+919892398976"
                    className="hover:text-blue-600 transition-all duration-300"
                    style={{ fontFamily: "'Inter', -apple-system, system-ui, sans-serif" }}
                  >
                    +91 9892398976
                  </a>
                </li>
                <li className="flex items-start gap-3 group">
                  <Mail className="w-5 h-5 mt-0.5 flex-shrink-0 text-blue-600" />
                  <a
                    href="mailto:bvoc@nexcorealliance.com"
                    className="hover:text-blue-600 transition-all duration-300"
                    style={{ fontFamily: "'Inter', -apple-system, system-ui, sans-serif" }}
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
          className="h-0.5 bg-gradient-to-r from-transparent via-blue-300 to-transparent rounded-full my-8"
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
          <div className="text-center text-sm md:text-base text-slate-600" style={{ fontFamily: "'Inter', -apple-system, system-ui, sans-serif" }}>
            Built with{" "}
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="inline-block"
            >
              <Heart className="inline w-4 h-4 text-red-500 fill-red-500" />
            </motion.span>{" "}
            and passion by{" "}
            <a
              href="https://code4bharat.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-indigo-600 font-semibold transition-all duration-300"
            >
              Code4Bharat
            </a>
          </div>
          <div className="text-center text-slate-500 text-sm" style={{ fontFamily: "'Inter', -apple-system, system-ui, sans-serif" }}>
            © 2025{" "}
            <Link
              href="/"
              className="text-indigo-600 hover:text-blue-600 font-semibold transition-all duration-300"
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