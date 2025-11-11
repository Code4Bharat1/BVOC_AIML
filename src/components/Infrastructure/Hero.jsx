"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const leftVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <section
      ref={ref}
      className="relative w-full min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden bg-white"
    >
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 0.5, 0],
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
        className="absolute top-20 left-16 w-56 h-56 bg-blue-100/15 blur-[140px] rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 40, 0],
          y: [0, -40, 0],
        }}
        transition={{ duration: 22, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-24 w-60 h-60 bg-indigo-100/12 blur-[150px] rounded-full"
        animate={{
          scale: [1, 1.25, 1],
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{ duration: 25, repeat: Infinity }}
      />

      <div className="relative flex flex-col lg:flex-row justify-between items-center gap-12 z-10 w-full max-w-7xl">
        {/* LEFT SIDE */}
        <motion.div
          variants={leftVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="lg:w-[65%] w-full text-center lg:text-left"
        >
          <h1 className="lg:hidden text-4xl md:text-5xl font-bold leading-snug text-slate-900" style={{ fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif" }}>
            Where Innovation <br /> Meets World-Class <br />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">
              Infrastructure.
            </span>
          </h1>

          <p className="lg:hidden my-8 text-lg text-center text-slate-700 leading-relaxed" style={{ fontFamily: "'Inter', -apple-system, system-ui, sans-serif" }}>
            <span className="text-blue-700 font-semibold">High-Tech</span> Learning Spaces, and{" "}
            <span className="text-indigo-700 font-semibold">Smart Classrooms</span>. Built to empower
            hands-on learning, creativity, and real-world simulation.
          </p>

          {/* Desktop Heading */}
          <motion.h1
            className="hidden lg:block text-5xl md:text-6xl font-bold leading-snug text-slate-900"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif" }}
          >
            Where Innovation Meets <br /> World-Class{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">
              Infrastructure.
            </span>
          </motion.h1>

          <motion.p
            className="hidden lg:block mt-10 text-xl lg:text-2xl text-slate-700 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ fontFamily: "'Inter', -apple-system, system-ui, sans-serif" }}
          >
            <span className="text-blue-700 font-semibold">High-Tech</span> Learning Spaces, and{" "}
            <span className="text-indigo-700 font-semibold">Smart Classrooms</span>. <br />
            Built to empower hands-on learning, creativity, and real-world simulation.
          </motion.p>

          {/* Feature Pills */}
          <motion.div
            className="hidden lg:flex flex-wrap gap-4 mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {[
              { text: "State-of-the-art Labs", color: "#2563eb" },
              { text: "Smart Classrooms", color: "#4f46e5" },
              { text: "Innovation Hub", color: "#3b82f6" },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="px-5 py-2 rounded-full bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <span className="text-sm font-medium" style={{ color: item.color }}>
                  {item.text}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE (Animated Boxes) */}
        <motion.div
          variants={rightVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="hidden lg:block lg:w-[30%] w-full relative h-[300px]"
        >
          {/* Glow Layers */}
          <div className="absolute -top-10 -left-10 w-72 h-72 bg-blue-100/20 blur-[140px] rounded-full" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-100/15 blur-[150px] rounded-full" />

          {/* Animated Box Elements */}
          <motion.div
            className="absolute top-0 left-10 w-20 h-20 bg-blue-100 border border-blue-300 rounded-2xl"
            animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-10 right-10 w-24 h-24 bg-indigo-100 border border-indigo-300 rounded-2xl"
            animate={{ y: [0, 25, 0], rotate: [0, -8, 0] }}
            transition={{ duration: 7, repeat: Infinity }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 w-16 h-16 bg-blue-50 border border-blue-200 rounded-xl transform -translate-x-1/2 -translate-y-1/2"
            animate={{ y: [0, -15, 0], rotate: [0, 15, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
          />

          {/* Static Decorative Image */}
          <img
            src="/elements/SubtractInfraElement.svg"
            alt="Decorative Element"
            className="absolute -bottom-20 left-0 opacity-30 w-[180px] h-[180px]"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;