"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Sparkles } from "lucide-react";

const AboutUs = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.2 });

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={sectionRef}
      className="relative overflow-hidden  p-8 lg:p-12 min-h-[600px] flex flex-col lg:flex-row justify-between items-center gap-8
      bg-white text-slate-900 shadow-xl border border-slate-200"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        visible: { transition: { staggerChildren: 0.2 } },
      }}
    >
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(#cbd5e1 1px, transparent 1px), linear-gradient(90deg, #cbd5e1 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Floating Particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-blue-400/20 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{ y: [0, -20, 0], opacity: [0, 0.5, 0] }}
          transition={{ duration: 4 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
        />
      ))}

      {/* Soft Glowing Orbs */}
      <motion.div
        className="absolute top-0 left-0 w-72 h-72 bg-blue-100/15 blur-[140px] rounded-full"
        animate={{ scale: [1, 1.2, 1], x: [0, 25, 0], y: [0, -25, 0] }}
        transition={{ duration: 18, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-100/12 blur-[150px] rounded-full"
        animate={{ scale: [1, 1.25, 1], x: [0, -25, 0], y: [0, 25, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
      />

      {/* Left Image */}
      <motion.div
        className="w-full lg:w-1/2 flex justify-center items-center relative z-10"
        variants={fadeInVariants}
        transition={{ duration: 0.8 }}
      >
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-100/30 via-indigo-100/30 to-blue-100/30 blur-2xl rounded-full" />
          <img
            src="/Hub/AboutUs_Home.png"
            alt="About Us Image"
            className="relative z-10 rounded-2xl shadow-lg w-full max-w-[500px]"
          />
        </div>
      </motion.div>

      {/* Right Text */}
      <motion.div 
        className="w-full lg:w-1/2 text-center lg:text-left relative z-10" 
        variants={fadeInVariants}
      >
        <motion.h2
          className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-transparent bg-clip-text"
          variants={fadeInVariants}
          style={{ fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif" }}
        >
          Our Story
        </motion.h2>
        <motion.h3
          className="text-2xl lg:text-3xl font-semibold mb-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text"
          variants={fadeInVariants}
          style={{ fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif" }}
        >
          Our Vision
        </motion.h3>
        <motion.p 
          className="text-lg lg:text-xl text-slate-800 mb-4 font-semibold" 
          variants={fadeInVariants}
          style={{ fontFamily: "'Inter', -apple-system, system-ui, sans-serif" }}
        >
          Empowering You for the Future
        </motion.p>
        <motion.p 
          className="text-base lg:text-lg text-slate-700 leading-7 lg:leading-8" 
          variants={fadeInVariants}
          style={{ fontFamily: "'Inter', -apple-system, system-ui, sans-serif" }}
        >
          At <span className="font-semibold text-blue-700">Nexcore Alliance LLP</span>, we're dedicated to shaping India's next generation of digital leaders by offering cutting-edge programs designed for the real world. We bring you a <span className="font-semibold text-indigo-700">Bachelor's in AI & ML</span> program that's built to make you industry-ready and globally competitive.
        </motion.p>

        {/* Badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-5 py-2 mt-6 rounded-full bg-blue-50/80 border border-blue-200/50 backdrop-blur-sm shadow-sm"
          variants={fadeInVariants}
        >
          <Sparkles className="w-4 h-4 text-blue-600" />
          <span className="text-blue-700 font-semibold text-xs tracking-[0.12em] uppercase">Next-Gen Education</span>
        </motion.div>
      </motion.div>

      {/* Gradient Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-600 rounded-b-3xl" />
    </motion.div>
  );
};

export default AboutUs;