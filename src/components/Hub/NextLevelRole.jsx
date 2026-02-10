"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const NextLevelRole = () => {
  const topRoles = [
    "AI SOFTWARE\nENGINEER",
    "ROBOTICS ENGINEER\n(AI/ML FOCUS)",
    "DATA\nSCIENTIST",
    "AI\nCONSULTANT",
  ];

  const bottomRoles = [
    "AI RESEARCH\nSCIENTIST",
    "DEEP LEARNING\nENGINEER",
    "NLP\nENGINEER",
    "AI ETHICIST",
    "AUTONOMOUS\nSYSTEMS ENGINEER",
  ];

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-80px" });

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: "easeOut" },
    },
  };

  return (
    <section
      ref={containerRef}
      className="relative py-10 px-6 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #F4F8FF 0%, #EEF3FB 60%, #F9FBFF 100%)",
      }}
    >
      {/* ===== Subtle Grid Background ===== */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(#007BFF 1px, transparent 1px),
            linear-gradient(90deg, #007BFF 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* ===== Decorative Blobs ===== */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-[#007BFF]/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 -right-24 w-[420px] h-[420px] bg-[#FF7F00]/10 blur-[140px] rounded-full" />

      <div className="relative max-w-7xl mx-auto">

        {/* ===== TITLE ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-[#007BFF] font-semibold tracking-wider mb-2">
            CAREER GROWTH
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-5">
            Next-Level Roles
          </h2>

          <div className="w-28 h-[3px] bg-[#FF7F00] mx-auto rounded-full mb-6" />

          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Unlock advanced career opportunities driven by artificial intelligence
            and emerging technologies.
          </p>
        </motion.div>

        {/* ===== TOP GRID ===== */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {topRoles.map((role, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="
                group relative
                bg-white/70 backdrop-blur-xl
                rounded-2xl
                border border-[#007BFF]/20
                shadow-[0_15px_40px_rgba(0,123,255,0.12)]
                px-6 py-10
                flex items-center justify-center
                text-center
                transition-all
              "
            >
              {/* Accent Top Bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#007BFF] rounded-t-2xl opacity-70" />

              <p className="font-semibold text-[#2C2C2C] whitespace-pre-line leading-snug text-base">
                {role}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* ===== SUB TITLE ===== */}
        <motion.h3
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center text-2xl lg:text-3xl font-semibold text-[#FF7F00] mb-14"
        >
          Go Big With Impact
        </motion.h3>

        {/* ===== BOTTOM GRID ===== */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {bottomRoles.map((role, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="
                group relative
                bg-white/70 backdrop-blur-xl
                rounded-2xl
                border border-[#FF7F00]/25
                shadow-[0_15px_40px_rgba(255,127,0,0.12)]
                px-6 py-10
                flex items-center justify-center
                text-center
                transition-all
              "
            >
              {/* Accent Top Bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-[#FF7F00] rounded-t-2xl opacity-70" />

              <p className="font-semibold text-[#2C2C2C] whitespace-pre-line leading-snug text-base">
                {role}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default NextLevelRole;
