"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const InDemandCareer = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const headingVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <>
      <motion.h2
        variants={headingVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="hidden md:block text-white text-center font-bold text-4xl lg:text-5xl pt-8 pb-4 bg-slate-900"
        style={{ fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif" }}
      >
        In-Demand Careers in AI & Emerging Tech
      </motion.h2>

      <section
        ref={sectionRef}
        className="hidden md:block relative py-16 px-4 bg-white overflow-hidden text-slate-900"
      >
        
        {/* Subtle Grid overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.015]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(#cbd5e1 1px, transparent 1px),
                linear-gradient(90deg, #cbd5e1 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
            }}
          ></div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{ y: [0, -30, 0], opacity: [0, 0.5, 0] }}
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
          className="absolute top-10 left-10 w-64 h-64 rounded-full blur-[140px] bg-blue-100/15"
          animate={{ scale: [1, 1.2, 1], x: [0, 25, 0], y: [0, -25, 0] }}
          transition={{ duration: 18, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-72 h-72 rounded-full blur-[150px] bg-indigo-100/12"
          animate={{ scale: [1, 1.25, 1], x: [0, -25, 0], y: [0, 25, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
        />

        <div className="text-center relative z-10 flex justify-center">
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="bg-white border border-slate-200 rounded-2xl p-8 shadow-lg max-w-5xl w-full mx-4"
          >
            <img
              src="/Career-demand-imgs.svg"
              alt="In-Demand Careers"
              className="w-full h-auto"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default InDemandCareer;