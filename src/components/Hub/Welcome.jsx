"use client";
import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X, Sparkles, Zap, Rocket } from "lucide-react";
import Link from "next/link";

const Welcome = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [isPdfModalOpen, setPdfModalOpen] = useState(false);

  return (
    <section
      ref={ref}
      className="relative lg:mt-0 py-24 px-6 lg:px-24 flex flex-col lg:flex-row items-center gap-16 overflow-hidden bg-gradient-to-br from-[#1A287E] via-[#2C3560] to-[#212121]"
    >
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#26C6DA 1px, transparent 1px), linear-gradient(90deg, #26C6DA 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#26C6DA] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full blur-[150px]"
          style={{
            background: "radial-gradient(circle, rgba(38,198,218,0.15) 0%, transparent 70%)",
            top: "-10%",
            left: "-10%",
          }}
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -50, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full blur-[120px]"
          style={{
            background: "radial-gradient(circle, rgba(255,111,0,0.15) 0%, transparent 70%)",
            bottom: "-10%",
            right: "-5%",
          }}
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, 50, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Text Section */}
      <motion.div
        className="relative z-10 lg:w-1/2 text-center lg:text-left"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-[#26C6DA]/10 border border-[#26C6DA]/30 backdrop-blur-xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          <Sparkles className="w-4 h-4 text-[#26C6DA]" />
          <span className="text-[#26C6DA] text-sm font-semibold tracking-wider">FUTURE OF EDUCATION</span>
        </motion.div>

        <h1 className="text-5xl lg:text-7xl font-black mb-6 leading-tight">
          <span className="text-white">Welcome to</span>
          <br />
          <span className="text-white">the Future of</span>
          <br />
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-[#26C6DA] via-[#00BCD4] to-[#FF6F00] bg-clip-text text-transparent">
              Learning
            </span>
            <motion.div
              className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-[#26C6DA] via-[#00BCD4] to-[#FF6F00] rounded-full"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.8, duration: 0.8 }}
            />
          </span>
        </h1>

        <motion.p
          className="text-gray-300 mb-10 leading-relaxed text-lg lg:text-xl max-w-2xl"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          We're excited to announce a strategic partnership with{" "}
          <span className="text-[#26C6DA] font-bold">Nexcore Alliance LLP</span>, empowering the launch of{" "}
          <span className="text-[#FF6F00] font-bold">B.Voc</span> degree programs that seamlessly integrate industry expertise with academic excellence.
        </motion.p>

        {/* Feature Pills */}
        <motion.div
          className="flex flex-wrap gap-3 mb-10 justify-center lg:justify-start"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
        >
          {[
            { icon: Zap, text: "Industry Ready", color: "#26C6DA" },
            { icon: Rocket, text: "Future Skills", color: "#FF6F00" },
            { icon: Sparkles, text: "AI Powered", color: "#00BCD4" }
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
            >
              <item.icon className="w-4 h-4" style={{ color: item.color }} />
              <span className="text-sm text-gray-200 font-medium">{item.text}</span>
            </div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
        >
          <Link href="/contact">
            <motion.button
              className="group relative px-10 py-5 bg-gradient-to-r from-[#FF6F00] to-[#FF8A65] rounded-2xl font-bold text-lg text-white overflow-hidden shadow-2xl shadow-[#FF6F00]/30"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF8A65] to-[#FF6F00] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 flex items-center gap-2">
                Enroll Now
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
              
              {/* Shimmer Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
              />
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>

      {/* 3D Illustration Section */}
      <motion.div
        className="hidden lg:flex lg:w-1/2 justify-center items-center relative z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: 0.4, duration: 1 }}
      >
        <div className="relative w-full max-w-[500px]">
          {/* Floating Cards */}
          <motion.div
            className="absolute -left-20 top-20 w-32 h-32 bg-gradient-to-br from-[#26C6DA]/20 to-[#00BCD4]/20 rounded-3xl backdrop-blur-xl border border-[#26C6DA]/30 p-4 rotate-12"
            animate={{ 
              y: [0, -20, 0],
              rotate: [12, 18, 12]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <div className="text-4xl">🎓</div>
          </motion.div>

          <motion.div
            className="absolute -right-16 top-40 w-28 h-28 bg-gradient-to-br from-[#FF6F00]/20 to-[#FF8A65]/20 rounded-3xl backdrop-blur-xl border border-[#FF6F00]/30 p-4 -rotate-12"
            animate={{ 
              y: [0, 20, 0],
              rotate: [-12, -18, -12]
            }}
            transition={{ duration: 3.5, repeat: Infinity }}
          >
            <div className="text-4xl">🚀</div>
          </motion.div>

          <motion.div
            className="absolute left-10 bottom-10 w-24 h-24 bg-gradient-to-br from-[#00BCD4]/20 to-[#26C6DA]/20 rounded-3xl backdrop-blur-xl border border-[#00BCD4]/30 p-4 rotate-6"
            animate={{ 
              y: [0, -15, 0],
              rotate: [6, 12, 6]
            }}
            transition={{ duration: 4.5, repeat: Infinity }}
          >
            <div className="text-3xl">⚡</div>
          </motion.div>

          {/* Main Card */}
          <motion.div
            className="relative bg-gradient-to-br from-[#1A287E]/40 to-[#2C3560]/40 backdrop-blur-2xl rounded-[2rem] p-12 border border-[#26C6DA]/20 shadow-2xl"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Holographic Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#26C6DA]/10 via-transparent to-[#FF6F00]/10 rounded-[2rem]" />
            
            <svg width="100%" height="100%" viewBox="0 0 400 400" className="drop-shadow-2xl">
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: "#26C6DA", stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: "#00BCD4", stopOpacity: 1 }} />
                </linearGradient>
                <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: "#FF6F00", stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: "#FF8A65", stopOpacity: 1 }} />
                </linearGradient>
              </defs>
              
              <g transform="translate(200, 200)">
                {/* Robot Head */}
                <motion.g
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <rect x="-50" y="-100" width="100" height="80" rx="20" fill="url(#grad1)" opacity="0.9"/>
                  
                  {/* Antenna */}
                  <line x1="0" y1="-100" x2="0" y2="-125" stroke="#26C6DA" strokeWidth="4"/>
                  <motion.circle 
                    cx="0" 
                    cy="-125" 
                    r="8" 
                    fill="url(#grad2)"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  
                  {/* Eyes */}
                  <motion.g
                    animate={{ scaleY: [1, 0.1, 1] }}
                    transition={{ duration: 4, repeat: Infinity, repeatDelay: 2 }}
                  >
                    <circle cx="-25" cy="-65" r="12" fill="#26C6DA"/>
                    <circle cx="25" cy="-65" r="12" fill="#26C6DA"/>
                    <circle cx="-25" cy="-65" r="6" fill="#fff"/>
                    <circle cx="25" cy="-65" r="6" fill="#fff"/>
                  </motion.g>
                  
                  {/* Smile */}
                  <path 
                    d="M -25,-40 Q 0,-25 25,-40" 
                    stroke="#26C6DA" 
                    strokeWidth="4" 
                    fill="none"
                    strokeLinecap="round"
                  />
                </motion.g>
                
                {/* Body */}
                <rect x="-60" y="-15" width="120" height="100" rx="20" fill="url(#grad1)" opacity="0.8"/>
                
                {/* Display Panel */}
                <rect x="-40" y="5" width="80" height="50" rx="10" fill="#212121"/>
                <g>
                  <motion.line 
                    x1="-30" y1="20" x2="25" y2="20" 
                    stroke="#26C6DA" 
                    strokeWidth="3"
                    animate={{ x2: [-30, 25] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <line x1="-30" y1="33" x2="15" y2="33" stroke="#FF6F00" strokeWidth="3"/>
                  <line x1="-30" y1="46" x2="30" y2="46" stroke="#00BCD4" strokeWidth="3"/>
                </g>
                
                {/* Arms */}
                <motion.g
                  animate={{ rotate: [0, 10, 0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  style={{ transformOrigin: "-75px 20px" }}
                >
                  <rect x="-80" y="0" width="15" height="60" rx="8" fill="url(#grad2)"/>
                  <circle cx="-72" cy="65" r="10" fill="#26C6DA"/>
                </motion.g>
                
                <motion.g
                  animate={{ rotate: [0, -10, 0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  style={{ transformOrigin: "75px 20px" }}
                >
                  <rect x="65" y="0" width="15" height="60" rx="8" fill="url(#grad2)"/>
                  <circle cx="72" cy="65" r="10" fill="#26C6DA"/>
                </motion.g>
                
                {/* Legs */}
                <g>
                  <rect x="-40" y="85" width="25" height="45" rx="12" fill="url(#grad1)"/>
                  <rect x="-40" y="130" width="28" height="12" rx="6" fill="#26C6DA"/>
                  
                  <rect x="15" y="85" width="25" height="45" rx="12" fill="url(#grad1)"/>
                  <rect x="12" y="130" width="28" height="12" rx="6" fill="#26C6DA"/>
                </g>
                
                {/* Floating Elements */}
                <motion.g
                  animate={{ 
                    y: [-5, 5, -5],
                    rotate: [0, 10, 0]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <circle cx="100" cy="-50" r="15" fill="url(#grad2)" opacity="0.6"/>
                  <text x="93" y="-42" fontSize="20">AI</text>
                </motion.g>
                
                <motion.g
                  animate={{ 
                    y: [5, -5, 5],
                    rotate: [0, -10, 0]
                  }}
                  transition={{ duration: 3.5, repeat: Infinity }}
                >
                  <circle cx="-100" cy="50" r="15" fill="url(#grad1)" opacity="0.6"/>
                  <text x="-109" y="57" fontSize="20">ML</text>
                </motion.g>
              </g>
            </svg>
          </motion.div>
        </div>
      </motion.div>

      {/* PDF Modal */}
      <AnimatePresence>
        {isPdfModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-md flex justify-center items-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPdfModalOpen(false)}
          >
            <motion.div
              className="relative w-full max-w-5xl h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setPdfModalOpen(false)}
                className="absolute -top-4 -right-4 bg-gradient-to-r from-[#FF6F00] to-[#FF8A65] text-white p-3 rounded-full shadow-xl hover:scale-110 transition-transform z-10"
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