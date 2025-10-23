"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const leftVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const rightVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative w-full min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden 
      bg-gradient-to-b from-[#1a1f4d] via-[#2d1b4e] to-[#4a1f6b]"
    >
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(#00d4ff 1px, transparent 1px), linear-gradient(90deg, #00d4ff 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#00d4ff] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Glowing Orbs - Unified Theme */}
      <motion.div
        className="absolute top-20 left-16 w-56 h-56 bg-[#00d4ff]/30 blur-3xl rounded-full"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 50, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 20, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-24 w-60 h-60 bg-[#ff6b35]/30 blur-3xl rounded-full"
        animate={{
          scale: [1, 1.4, 1],
          x: [0, -50, 0],
          y: [0, 50, 0],
        }}
        transition={{ duration: 25, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-1/3 right-1/3 w-48 h-48 bg-[#AC6CFF]/30 blur-3xl rounded-full"
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 15, repeat: Infinity }}
      />

      <div className="relative flex flex-col lg:flex-row justify-between items-center gap-12 z-10 w-full max-w-7xl">
        {/* LEFT SIDE */}
        <motion.div
          variants={leftVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="lg:w-[65%] w-full text-center lg:text-left"
        >
          <h1 className="lg:hidden text-4xl md:text-5xl font-extrabold leading-snug text-white">
            Where Innovation <br /> Meets World-Class <br />
            <span className="bg-gradient-to-r from-[#00d4ff] via-[#AC6CFF] to-[#ff6b35] bg-clip-text text-transparent">
              Infrastructure.
            </span>
          </h1>

          <p className="lg:hidden my-8 text-lg text-center text-white/80 leading-relaxed">
            <span className="text-[#00d4ff] font-semibold">High-Tech</span> Learning Spaces, and{" "}
            <span className="text-[#AC6CFF] font-semibold">Smart Classrooms</span>. Built to empower
            hands-on learning, creativity, and real-world simulation.
          </p>

          {/* Desktop Heading */}
          <motion.h1
            className="hidden lg:block text-6xl md:text-7xl font-extrabold leading-snug text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Where Innovation Meets <br /> World-Class{" "}
            <span className="bg-gradient-to-r from-[#00d4ff] via-[#AC6CFF] to-[#ff6b35] bg-clip-text text-transparent">
              Infrastructure.
            </span>
          </motion.h1>

          <motion.p
            className="hidden lg:block mt-10 text-xl lg:text-2xl text-white/80 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="text-[#00d4ff] font-semibold">High-Tech</span> Learning Spaces, and{" "}
            <span className="text-[#AC6CFF] font-semibold">Smart Classrooms</span>. <br />
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
              { text: "State-of-the-art Labs", color: "#00d4ff" },
              { text: "Smart Classrooms", color: "#ff6b35" },
              { text: "Innovation Hub", color: "#AC6CFF" },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
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
          <div className="absolute -top-10 -left-10 w-72 h-72 bg-[#00d4ff]/25 blur-[120px] rounded-full" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#ff6b35]/25 blur-[120px] rounded-full" />

          {/* Animated Box Elements */}
          <motion.div
            className="absolute top-0 left-10 w-20 h-20 bg-[#00d4ff]/30 border border-[#00d4ff]/50 rounded-2xl"
            animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-10 right-10 w-24 h-24 bg-[#ff6b35]/30 border border-[#ff6b35]/50 rounded-2xl"
            animate={{ y: [0, 25, 0], rotate: [0, -8, 0] }}
            transition={{ duration: 7, repeat: Infinity }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 w-16 h-16 bg-[#AC6CFF]/30 border border-[#AC6CFF]/50 rounded-xl transform -translate-x-1/2 -translate-y-1/2"
            animate={{ y: [0, -15, 0], rotate: [0, 15, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
          />

          {/* Static Decorative Image */}
          <Image
            src="/elements/SubtractInfraElement.svg"
            alt="Decorative Element"
            width={180}
            height={180}
            className="absolute -bottom-20 left-0 opacity-90"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;