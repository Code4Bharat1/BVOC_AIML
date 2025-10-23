"use client";
import React, { useRef } from "react";
import Image from "next/image";
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
      className="relative w-full min-h-screen py-16 overflow-hidden bg-gradient-to-br from-[#1A287E] via-[#2C3560] to-[#212121]"
    >
      {/* Grid Lines Background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(#26C6DA 1px, transparent 1px), linear-gradient(90deg, #26C6DA 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      {/* Glowing Orbs */}
      <motion.div
        className="absolute top-0 -left-20 w-72 h-72 bg-[#26C6DA]/20 blur-[120px] rounded-full"
        animate={{ scale: [1, 1.3, 1], x: [0, 30, 0], y: [0, -30, 0] }}
        transition={{ duration: 15, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 -right-20 w-96 h-96 bg-[#FF6F00]/20 blur-[140px] rounded-full"
        animate={{ scale: [1, 1.4, 1], x: [0, -30, 0], y: [0, 30, 0] }}
        transition={{ duration: 18, repeat: Infinity }}
      />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#26C6DA] rounded-full"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            animate={{ y: [0, -40, 0], opacity: [0, 1, 0] }}
            transition={{ duration: 4 + Math.random() * 3, repeat: Infinity, delay: Math.random() * 3 }}
          />
        ))}
      </div>

      {/* Floating Decorative Images */}
      <Image
        src="/elements/CareerStarElement_Home.svg"
        alt="Top Star"
        width={100}
        height={100}
        className="absolute top-12 right-10 lg:top-9 lg:right-2/6 w-6 h-16 lg:w-10 lg:h-24 opacity-80"
      />
      <Image
        src="/elements/PlanetElement_Home.svg"
        alt="Planet Element"
        width={100}
        height={100}
        className="absolute top-[420px] -left-14 lg:top-1/2 lg:-left-10 transform -translate-y-1/2 w-48 h-48 lg:w-56 lg:h-56 opacity-70"
      />

      {/* Title */}
      <motion.h2
        className="text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 text-3xl md:text-5xl font-extrabold mb-16 tracking-wide drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
        variants={titleVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
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
                className="bg-white/10 border border-cyan-400/30 shadow-[0_0_20px_rgba(0,255,255,0.15)] rounded-3xl px-4 py-6 backdrop-blur-xl flex items-center justify-center min-h-[100px] sm:min-h-[120px] text-center hover:shadow-[0_0_30px_rgba(0,255,255,0.4)] transition-all duration-300"
              >
                <p className="text-white font-extrabold whitespace-pre-line leading-snug break-words tracking-wide">{role}</p>
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
                className="bg-white/10 border border-purple-400/30 shadow-[0_0_20px_rgba(200,100,255,0.15)] rounded-3xl px-4 py-6 backdrop-blur-xl flex items-center justify-center min-h-[100px] sm:min-h-[120px] text-center hover:shadow-[0_0_30px_rgba(200,100,255,0.4)] transition-all duration-300"
              >
                <p className="text-white font-extrabold whitespace-pre-line leading-snug break-words tracking-wide">{role}</p>
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
          className="text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-cyan-300 text-2xl font-bold mb-8"
          variants={titleVariants}
        >
          GO BIG WITH IMPACT
        </motion.h3>

        <div className="flex gap-6 px-4">
          <motion.div className="flex flex-col gap-6 flex-1" variants={containerVariants}>
            {bottomLeft.map((role, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="bg-white/10 border border-cyan-400/30 shadow-[0_0_20px_rgba(0,255,255,0.15)] rounded-3xl px-4 py-6 backdrop-blur-xl flex items-center justify-center min-h-[100px] sm:min-h-[120px] text-center hover:shadow-[0_0_30px_rgba(0,255,255,0.4)] transition-all duration-300"
              >
                <p className="text-white font-extrabold whitespace-pre-line leading-snug break-words tracking-wide">{role}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="flex flex-col gap-6 flex-1 pt-10" variants={containerVariants}>
            {bottomRight.map((role, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="bg-white/10 border border-purple-400/30 shadow-[0_0_20px_rgba(200,100,255,0.15)] rounded-3xl px-4 py-6 backdrop-blur-xl flex items-center justify-center min-h-[100px] sm:min-h-[120px] text-center hover:shadow-[0_0_30px_rgba(200,100,255,0.4)] transition-all duration-300"
              >
                <p className="text-white font-extrabold whitespace-pre-line leading-snug break-words tracking-wide">{role}</p>
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
              className="bg-white/10 border border-cyan-400/30 shadow-[0_0_20px_rgba(0,255,255,0.15)] rounded-3xl px-4 py-6 backdrop-blur-xl flex items-center justify-center text-center min-h-[120px] hover:shadow-[0_0_30px_rgba(0,255,255,0.4)] transition-all duration-300"
            >
              <p className="text-white font-extrabold whitespace-pre-line leading-snug break-words tracking-wide">{role}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.h3 className="text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 text-3xl font-bold mb-12 pt-8" variants={titleVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
          GO BIG WITH IMPACT
        </motion.h3>

        <motion.div className="grid grid-cols-5 gap-6 px-20" variants={containerVariants} initial="hidden" animate={isInView ? "visible" : "hidden"}>
          {bottomRoles.map((role, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="bg-white/10 border border-purple-400/30 shadow-[0_0_20px_rgba(200,100,255,0.15)] rounded-3xl px-4 py-6 backdrop-blur-xl flex items-center justify-center text-center min-h-[120px] hover:shadow-[0_0_30px_rgba(200,100,255,0.4)] transition-all duration-300"
            >
              <p className="text-white font-extrabold whitespace-pre-line leading-snug break-words tracking-wide">{role}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default NextLevelRole;
