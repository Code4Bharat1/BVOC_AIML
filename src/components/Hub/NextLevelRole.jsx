"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const NextLevelRole = () => {
  const topRoles = [
    "AI \nSOFTWARE \nENGINEER",
    "ROBOTICS \nENGINEER \n(AI/ML FOCUS)",
    "DATA \nSCIENTIST",
    "AI \nCONSULTANT",
  ];

  const bottomRoles = [
    "AI \nRESEARCH \nSCIENTIST",
    "DEEP \nLEARNING \nENGINEER",
    "NLP \nENGINEER",
    "AI ETHICIST",
    "AUTONOMOUS \nSYSTEMS ENGINEER",
  ];

  const splitArray = (arr) => {
    const middle = Math.ceil(arr.length / 2);
    return [arr.slice(0, middle), arr.slice(middle)];
  };

  const [topLeft, topRight] = splitArray(topRoles);
  const [bottomLeft, bottomRight] = splitArray(bottomRoles);

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-screen py-16 overflow-hidden bg-[#2C2C2C]"
    >
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `linear-gradient(#007BFF 1px, transparent 1px), linear-gradient(90deg, #007BFF 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Glowing Orbs with Brand Colors */}
      <motion.div
        className="absolute top-0 -left-20 w-72 h-72 bg-[#007BFF]/10 blur-[140px] rounded-full"
        animate={{ scale: [1, 1.2, 1], x: [0, 25, 0], y: [0, -25, 0] }}
        transition={{ duration: 18, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 -right-20 w-80 h-80 bg-[#FF7F00]/8 blur-[150px] rounded-full"
        animate={{ scale: [1, 1.25, 1], x: [0, -25, 0], y: [0, 25, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
      />

      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-1 h-1 rounded-full ${
              i % 3 === 0 ? 'bg-[#80C8F7]/30' : i % 3 === 1 ? 'bg-[#FF7F00]/30' : 'bg-[#FF5733]/30'
            }`}
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            animate={{ y: [0, -30, 0], opacity: [0, 0.7, 0] }}
            transition={{ duration: 4 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
          />
        ))}
      </div>

      {/* Floating Decorative Images */}
      <motion.img
        src="/elements/CareerStarElement_Home.svg"
        alt="Top Star"
        className="absolute top-12 right-10 lg:top-9 lg:right-2/6 w-6 h-16 lg:w-10 lg:h-24 opacity-20"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.img
        src="/elements/PlanetElement_Home.svg"
        alt="Planet Element"
        className="absolute top-[420px] -left-14 lg:top-1/2 lg:-left-10 transform -translate-y-1/2 w-48 h-48 lg:w-56 lg:h-56 opacity-10"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />

      {/* Title */}
      <motion.h2
        className="text-center bg-gradient-to-r from-[#007BFF] via-[#80C8F7] to-[#007BFF] bg-clip-text text-transparent text-3xl md:text-5xl font-bold mb-16 tracking-wide"
        variants={titleVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        style={{ fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif" }}
      >
        NEXT-LEVEL ROLES
      </motion.h2>

      {/* MOBILE TOP SECTION */}
      <div className="lg:hidden mb-16">
        <div className="flex gap-6 px-4">
          <motion.div
            className="flex flex-col gap-6 flex-1"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {topLeft.map((role, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="group relative bg-[#1a1a1a] border border-[#007BFF]/30 shadow-[0_0_20px_rgba(0,123,255,0.1)] rounded-2xl px-4 py-6 backdrop-blur-sm flex items-center justify-center min-h-[100px] sm:min-h-[120px] text-center hover:shadow-[0_0_30px_rgba(0,123,255,0.2)] hover:border-[#007BFF]/50 transition-all duration-300 overflow-hidden"
              >
                {/* Gradient Border on Hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#007BFF]/20 via-transparent to-[#FF7F00]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <p className="relative z-10 text-white font-bold whitespace-pre-line leading-snug break-words tracking-wide text-sm group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#80C8F7] group-hover:to-[#007BFF] transition-all duration-300" style={{ fontFamily: "'Inter', -apple-system, system-ui, sans-serif" }}>{role}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="flex flex-col gap-6 flex-1 pt-10"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {topRight.map((role, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="group relative bg-[#1a1a1a] border border-[#FF7F00]/30 shadow-[0_0_20px_rgba(255,127,0,0.1)] rounded-2xl px-4 py-6 backdrop-blur-sm flex items-center justify-center min-h-[100px] sm:min-h-[120px] text-center hover:shadow-[0_0_30px_rgba(255,127,0,0.2)] hover:border-[#FF7F00]/50 transition-all duration-300 overflow-hidden"
              >
                {/* Gradient Border on Hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#FF7F00]/20 via-transparent to-[#007BFF]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <p className="relative z-10 text-white font-bold whitespace-pre-line leading-snug break-words tracking-wide text-sm group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#FF7F00] group-hover:to-[#FFCD00] transition-all duration-300" style={{ fontFamily: "'Inter', -apple-system, system-ui, sans-serif" }}>{role}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* MOBILE BOTTOM SECTION */}
      <motion.div
        className="lg:hidden pb-20"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.h3
          className="text-center bg-gradient-to-r from-[#FF7F00] via-[#FFCD00] to-[#FF7F00] bg-clip-text text-transparent text-2xl font-bold mb-8"
          variants={titleVariants}
          style={{ fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif" }}
        >
          GO BIG WITH IMPACT
        </motion.h3>

        <div className="flex gap-6 px-4">
          <motion.div className="flex flex-col gap-6 flex-1" variants={containerVariants}>
            {bottomLeft.map((role, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="group relative bg-[#1a1a1a] border border-[#007BFF]/30 shadow-[0_0_20px_rgba(0,123,255,0.1)] rounded-2xl px-4 py-6 backdrop-blur-sm flex items-center justify-center min-h-[100px] sm:min-h-[120px] text-center hover:shadow-[0_0_30px_rgba(0,123,255,0.2)] hover:border-[#007BFF]/50 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#007BFF]/20 via-transparent to-[#FF7F00]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <p className="relative z-10 text-white font-bold whitespace-pre-line leading-snug break-words tracking-wide text-sm group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#80C8F7] group-hover:to-[#007BFF] transition-all duration-300" style={{ fontFamily: "'Inter', -apple-system, system-ui, sans-serif" }}>{role}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="flex flex-col gap-6 flex-1 pt-10" variants={containerVariants}>
            {bottomRight.map((role, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="group relative bg-[#1a1a1a] border border-[#FF7F00]/30 shadow-[0_0_20px_rgba(255,127,0,0.1)] rounded-2xl px-4 py-6 backdrop-blur-sm flex items-center justify-center min-h-[100px] sm:min-h-[120px] text-center hover:shadow-[0_0_30px_rgba(255,127,0,0.2)] hover:border-[#FF7F00]/50 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#FF7F00]/20 via-transparent to-[#007BFF]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <p className="relative z-10 text-white font-bold whitespace-pre-line leading-snug break-words tracking-wide text-sm group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#FF7F00] group-hover:to-[#FFCD00] transition-all duration-300" style={{ fontFamily: "'Inter', -apple-system, system-ui, sans-serif" }}>{role}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* DESKTOP */}
      <div className="hidden lg:block">
        <motion.div className="grid grid-cols-4 gap-6 mb-16 px-44" variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
          {topRoles.map((role, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="group relative bg-[#1a1a1a] border border-[#007BFF]/30 shadow-[0_0_20px_rgba(0,123,255,0.1)] rounded-2xl px-4 py-6 backdrop-blur-sm flex items-center justify-center text-center min-h-[120px] hover:shadow-[0_0_30px_rgba(0,123,255,0.2)] hover:border-[#007BFF]/50 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#007BFF]/20 via-transparent to-[#FF7F00]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <p className="relative z-10 text-white font-bold whitespace-pre-line leading-snug break-words tracking-wide group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#80C8F7] group-hover:to-[#007BFF] transition-all duration-300" style={{ fontFamily: "'Inter', -apple-system, system-ui, sans-serif" }}>{role}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.h3 className="text-center bg-gradient-to-r from-[#FF7F00] via-[#FFCD00] to-[#FF7F00] bg-clip-text text-transparent text-3xl font-bold mb-12 pt-8" variants={titleVariants} initial="hidden" animate={isInView ? "visible" : "hidden"} style={{ fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif" }}>
          GO BIG WITH IMPACT
        </motion.h3>

        <motion.div className="grid grid-cols-5 gap-6 px-20" variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
          {bottomRoles.map((role, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="group relative bg-[#1a1a1a] border border-[#FF7F00]/30 shadow-[0_0_20px_rgba(255,127,0,0.1)] rounded-2xl px-4 py-6 backdrop-blur-sm flex items-center justify-center text-center min-h-[120px] hover:shadow-[0_0_30px_rgba(255,127,0,0.2)] hover:border-[#FF7F00]/50 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#FF7F00]/20 via-transparent to-[#007BFF]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <p className="relative z-10 text-white font-bold whitespace-pre-line leading-snug break-words tracking-wide group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#FF7F00] group-hover:to-[#FFCD00] transition-all duration-300" style={{ fontFamily: "'Inter', -apple-system, system-ui, sans-serif" }}>{role}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default NextLevelRole;