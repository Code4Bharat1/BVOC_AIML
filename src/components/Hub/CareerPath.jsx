"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

function CareerPath() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const leftVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      ref={ref}
      className="relative overflow-hidden w-full py-16 px-6 bg-[#2C2C2C]"
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

      {/* Animated Particles */}
      <motion.div
        className="absolute top-20 left-[10%] w-2 h-2 rounded-full bg-[#80C8F7]"
        animate={{ 
          y: [0, -30, 0],
          opacity: [0.3, 0.8, 0.3]
        }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-40 right-[15%] w-3 h-3 rounded-full bg-[#FF7F00]"
        animate={{ 
          y: [0, 40, 0],
          opacity: [0.4, 1, 0.4]
        }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
      />
      <motion.div
        className="absolute bottom-32 left-[20%] w-2 h-2 rounded-full bg-[#FF5733]"
        animate={{ 
          y: [0, -25, 0],
          opacity: [0.3, 0.7, 0.3]
        }}
        transition={{ duration: 3.5, repeat: Infinity, delay: 2 }}
      />
      <motion.div
        className="absolute bottom-20 right-[25%] w-2.5 h-2.5 rounded-full bg-[#80C8F7]"
        animate={{ 
          y: [0, 35, 0],
          opacity: [0.4, 0.9, 0.4]
        }}
        transition={{ duration: 4.5, repeat: Infinity, delay: 0.5 }}
      />

      {/* Glowing Orbs with Brand Colors */}
      <motion.div
        className="absolute top-10 left-10 w-64 h-64 rounded-full blur-[100px] bg-[#007BFF]/10"
        animate={{ scale: [1, 1.3, 1], x: [0, 30, 0], y: [0, -30, 0] }}
        transition={{ duration: 15, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-80 h-80 rounded-full blur-[120px] bg-[#FF7F00]/8"
        animate={{ scale: [1, 1.4, 1], x: [0, -30, 0], y: [0, 30, 0] }}
        transition={{ duration: 18, repeat: Infinity }}
      />

      {/* Background Circle Element */}
      <div className="absolute top-24 lg:top-[55%] left-0 -translate-y-1/2 z-0 opacity-5">
        <Image
          src="/elements/CircleElement_Home.svg"
          alt="Circle Element"
          width={140}
          height={100}
          className="object-contain w-16 md:w-28 lg:w-40"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
        {/* Left Side */}
        <motion.div
          variants={leftVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col items-center lg:items-start"
        >
          <h2 className="text-white text-4xl md:text-5xl font-extrabold mb-8 text-center lg:text-left">
            Professional Journey
          </h2>

          <div className="relative w-full max-w-[500px]">
            {/* Glow Effect with Brand Colors */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-[#007BFF]/20 via-[#FF7F00]/15 to-[#007BFF]/20 blur-2xl -z-10" />
            
            {/* Border Glow */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#007BFF] via-[#FF7F00] to-[#007BFF] opacity-20 blur-sm" />
            
            <Image
              src="/CareerPath1.png"
              alt="Career Path"
              width={500}
              height={500}
              className="relative w-full h-auto rounded-3xl bg-cover shadow-[0_0_40px_rgba(0,123,255,0.3)]"
              priority
            />
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          variants={rightVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative text-center lg:text-left"
        >
          {/* Sparkle/Star Elements with Brand Colors */}
          <motion.div 
            className="absolute right-2 top-10 lg:right-20 lg:top-32"
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          >
            <div className="w-8 h-8 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#FFCD00] to-[#FF7F00] opacity-40 blur-md rounded-full" />
              <Image
                src="/elements/CareerStarElement_Home.svg"
                alt="Star Element"
                width={32}
                height={32}
                className="relative object-contain"
              />
            </div>
          </motion.div>

          <div className="relative z-10 space-y-6">
            {/* Desktop Text with Gradient */}
            <h3 className="hidden lg:block text-transparent bg-clip-text bg-gradient-to-r from-[#007BFF] via-[#80C8F7] to-[#007BFF] text-5xl font-bold leading-tight">
              Where Will Your Journey Take You?
            </h3>
            <p className="hidden lg:block text-gray-300 text-2xl leading-relaxed">
              The best part? You're not limited. <br />
              Whether you're just starting or aiming for an advanced role,
              the Bachelor's in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7F00] to-[#FFCD00] font-semibold">
                AI & ML , Cyber Security & Computer Science
              </span>{" "}
              degree offers a clear path to exciting opportunities at every stage of your career.
            </p>

            {/* Mobile Text */}
            <div className="lg:hidden">
              <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-[#007BFF] via-[#80C8F7] to-[#007BFF] text-2xl font-bold leading-snug">
                Where Will Your Journey <br /> Take You?
              </h3>
              <p className="text-gray-300 text-lg leading-8 mt-4">
                The best part? You're not limited. Whether you're just starting
                or aiming for an advanced role, the Bachelor's in{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7F00] to-[#FFCD00] font-semibold">
                  AI & ML
                </span>{" "}
                degree opens doors to exciting opportunities at every stage of
                your career.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CareerPath;