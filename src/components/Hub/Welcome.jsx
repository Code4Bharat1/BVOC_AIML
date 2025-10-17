"use client";
import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { FileText, X } from "lucide-react";
import Link from "next/link";
const Welcome = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [isPdfModalOpen, setPdfModalOpen] = useState(false);

  // const handleBrochureClick = () => {
  //   if (typeof window !== "undefined" && window.innerWidth <= 768) {
  //     window.open("/brochure/b.pdf", "_blank");
  //   } else {
  //     setPdfModalOpen(true);
  //   }
  // };

  return (
    <section
      ref={ref}
      className="relative lg:mt-6 py-16 px-6 lg:px-24 flex flex-col lg:flex-row items-center gap-12 overflow-hidden bg-gradient-to-br from-[#1a1f4d] via-[#2d1b4e] to-[#4a1f6b]"
    >
      {/* Background Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(0,212,255,0.6) 0%, transparent 70%)",
            top: "10%",
            left: "5%",
          }}
          animate={{ x: [0, 100, 0], y: [0, -100, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-80 h-80 rounded-full opacity-20 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(255,107,53,0.6) 0%, transparent 70%)",
            bottom: "10%",
            right: "10%",
          }}
          animate={{ x: [0, -80, 0], y: [0, 80, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Text Section */}
      <motion.div
        className="relative z-10 lg:w-1/2 text-center lg:text-left"
        initial={{ opacity: 0, x: -60 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1 className="text-white text-4xl lg:text-6xl font-bold mb-6 mt-6 lg:mt-14 drop-shadow-2xl">
          Welcome to <br />
          the Future of <br />
          <span className="bg-gradient-to-r from-[#00d4ff] via-[#AC6CFF] to-[#ff6b35] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(0,212,255,0.6)]">
            Learning!
          </span>
        </h1>

        <motion.p
          className="text-gray-100 mb-8 leading-relaxed text-lg lg:text-[28px]"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 1 }}
        >
          We’re excited to announce a strategic partnership with{" "}
          <span className="text-[#00d4ff] font-semibold">Nexcore Alliance LLP</span>,{" "}
          empowering the launch of{" "}
          <span className="text-[#AC6CFF] font-semibold">B.Voc (Bachelor of Vocation)</span>{" "}
          degree programs that seamlessly integrate industry expertise with academic excellence.
        </motion.p>

        {/* Buttons */}
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-center lg:justify-start">
          <Link href="/contact">
            <motion.button
              className="bg-gradient-to-r from-[#ff6b35] to-[#ff8c42] hover:from-[#ff5722] hover:to-[#ff6b35] text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
              style={{ boxShadow: "0 10px 30px rgba(255, 107, 53, 0.5)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.8 }}
              whileHover={{ y: -2, boxShadow: "0 15px 40px rgba(255, 107, 53, 0.6)" }}
              whileTap={{ scale: 0.95 }}
            >
              Enroll Now ✨
            </motion.button>
          </Link>

          {/* Brochure Button */}
          {/* <motion.button
            onClick={handleBrochureClick}
            className="group relative px-8 py-4 bg-white text-cyan-500 rounded-xl font-semibold overflow-hidden shadow-xl"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors">
              <FileText size={20} />
              Our Brochure
            </span>
          </motion.button> */}
        </div>
      </motion.div>

      {/* Image Section - AI Robot Assistant */}
      <motion.div
        className="hidden lg:flex md:w-1/2 justify-center items-center relative z-10"
        initial={{ opacity: 0, x: 100 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: 0.4, duration: 1 }}
      >
        <div className="relative">
          {/* Decorative rotating circles */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          >
            <div className="w-96 h-96 rounded-full border-2 border-[#00d4ff]/30"></div>
          </motion.div>
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{ rotate: -360 }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          >
            <div className="w-80 h-80 rounded-full border-2 border-[#ff6b35]/30"></div>
          </motion.div>
          
          {/* Central Robot Icon with glass effect */}
          <div className="relative z-10 bg-white/10 backdrop-blur-md rounded-3xl p-12 border border-[#00d4ff]/30">
            <svg width="300" height="300" viewBox="0 0 300 300" className="drop-shadow-2xl">
              <g transform="translate(150, 150)">
                
                {/* Robot Head */}
                <rect x="-40" y="-80" width="80" height="70" rx="10" fill="#2d1b4e"/>
                <rect x="-35" y="-75" width="70" height="60" rx="8" fill="#4a1f6b"/>
                
                {/* Antenna */}
                <line x1="0" y1="-80" x2="0" y2="-100" stroke="#00d4ff" strokeWidth="3"/>
                <motion.circle 
                  cx="0" 
                  cy="-100" 
                  r="6" 
                  fill="#ff6b35"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
                
                {/* Eyes with animation */}
                <motion.g
                  animate={{ scaleY: [1, 0.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                >
                  <circle cx="-20" cy="-50" r="8" fill="#00d4ff"/>
                  <circle cx="20" cy="-50" r="8" fill="#00d4ff"/>
                  <circle cx="-20" cy="-50" r="4" fill="#0ea5e9"/>
                  <circle cx="20" cy="-50" r="4" fill="#0ea5e9"/>
                </motion.g>
                
                {/* Smile */}
                <path 
                  d="M -20,-30 Q 0,-20 20,-30" 
                  stroke="#00d4ff" 
                  strokeWidth="3" 
                  fill="none"
                  strokeLinecap="round"
                />
                
                {/* Body */}
                <rect x="-45" y="-5" width="90" height="85" rx="12" fill="#2d1b4e"/>
                <rect x="-40" y="0" width="80" height="75" rx="10" fill="#4a1f6b"/>
                
                {/* Chest Display Screen */}
                <rect x="-25" y="15" width="50" height="35" rx="5" fill="#1a1f4d"/>
                <g>
                  {/* Code lines on screen */}
                  <line x1="-20" y1="25" x2="15" y2="25" stroke="#00d4ff" strokeWidth="2"/>
                  <line x1="-20" y1="33" x2="10" y2="33" stroke="#ff6b35" strokeWidth="2"/>
                  <line x1="-20" y1="41" x2="20" y2="41" stroke="#AC6CFF" strokeWidth="2"/>
                </g>
                
                {/* Arms */}
                <g>
                  {/* Left Arm */}
                  <rect x="-60" y="10" width="12" height="50" rx="6" fill="#2d1b4e"/>
                  <circle cx="-54" cy="65" r="8" fill="#00d4ff"/>
                  
                  {/* Right Arm */}
                  <rect x="48" y="10" width="12" height="50" rx="6" fill="#2d1b4e"/>
                  <circle cx="54" cy="65" r="8" fill="#00d4ff"/>
                </g>
                
                {/* Legs */}
                <g>
                  {/* Left Leg */}
                  <rect x="-30" y="80" width="18" height="35" rx="9" fill="#2d1b4e"/>
                  <rect x="-30" y="115" width="20" height="10" rx="5" fill="#00d4ff"/>
                  
                  {/* Right Leg */}
                  <rect x="12" y="80" width="18" height="35" rx="9" fill="#2d1b4e"/>
                  <rect x="10" y="115" width="20" height="10" rx="5" fill="#00d4ff"/>
                </g>
                
                {/* Floating Tech Elements */}
                <motion.g
                  animate={{ 
                    y: [-3, 3, -3],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  {/* Book icon */}
                  <rect x="70" y="-40" width="20" height="15" rx="2" fill="#ff6b35" opacity="0.8"/>
                  <line x1="72" y1="-35" x2="88" y2="-35" stroke="#1a1f4d" strokeWidth="1"/>
                  <line x1="72" y1="-30" x2="85" y2="-30" stroke="#1a1f4d" strokeWidth="1"/>
                </motion.g>
                
                <motion.g
                  animate={{ 
                    y: [3, -3, 3],
                    rotate: [0, -5, 5, 0]
                  }}
                  transition={{ duration: 3.5, repeat: Infinity }}
                >
                  {/* Gear icon */}
                  <circle cx="-70" cy="50" r="10" fill="none" stroke="#AC6CFF" strokeWidth="3" opacity="0.8"/>
                  <circle cx="-70" cy="50" r="5" fill="#AC6CFF" opacity="0.8"/>
                </motion.g>
                
                {/* Sparkles */}
                <motion.g
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <circle cx="-80" cy="-70" r="3" fill="#ff6b35"/>
                  <circle cx="85" cy="-60" r="4" fill="#00d4ff"/>
                  <circle cx="-75" cy="80" r="3" fill="#AC6CFF"/>
                  <circle cx="80" cy="70" r="3" fill="#00d4ff"/>
                </motion.g>
              </g>
            </svg>
          </div>
        </div>
      </motion.div>

      {/* PDF Modal */}
      <AnimatePresence>
        {isPdfModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPdfModalOpen(false)}
          >
            <motion.div
              className="relative w-full max-w-5xl h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setPdfModalOpen(false)}
                className="absolute -top-4 -right-4 bg-red-500 text-white p-3 rounded-full shadow-lg hover:bg-red-600 transition-colors z-10"
              >
                <X size={20} />
              </button>
              <iframe
                src="/brochure/b.pdf"
                className="w-full h-full"
                style={{ border: "none" }}
                title="PDF Viewer"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Welcome;
