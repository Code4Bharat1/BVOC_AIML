"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { HiSparkles } from "react-icons/hi";

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
      className="relative overflow-hidden rounded-2xl p-8 lg:p-12 min-h-[600px] flex flex-col lg:flex-row justify-between items-center gap-8
      bg-gradient-to-br from-[#1A287E] via-[#2C3560] to-[#212121] text-white shadow-[0_0_30px_rgba(38,198,218,0.2)]"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        visible: { transition: { staggerChildren: 0.2 } },
      }}
    >
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(#26C6DA 1px, transparent 1px), linear-gradient(90deg, #26C6DA 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-[#26C6DA] rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{ y: [0, -20, 0], opacity: [0, 1, 0] }}
          transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
        />
      ))}

      {/* Glowing Orbs */}
      <motion.div
        className="absolute top-0 left-0 w-72 h-72 bg-[#26C6DA]/20 blur-[120px] rounded-full"
        animate={{ scale: [1, 1.3, 1], x: [0, 30, 0], y: [0, -30, 0] }}
        transition={{ duration: 15, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-[#FF6F00]/20 blur-[140px] rounded-full"
        animate={{ scale: [1, 1.4, 1], x: [0, -30, 0], y: [0, 30, 0] }}
        transition={{ duration: 18, repeat: Infinity }}
      />

      {/* Left Image */}
      <motion.div
        className="w-full lg:w-1/2 flex justify-center items-center relative"
        variants={fadeInVariants}
        transition={{ duration: 0.8 }}
      >
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#26C6DA]/20 via-[#AC6CFF]/20 to-[#FF6F00]/20 blur-2xl rounded-full" />
          <Image
            src="/Hub/AboutUs_Home.png"
            alt="About Us Image"
            width={500}
            height={384}
           
          />
        </div>
      </motion.div>

      {/* Right Text */}
      <motion.div className="w-full lg:w-1/2 text-center lg:text-left" variants={fadeInVariants}>
        <motion.h2
          className="text-5xl lg:text-6xl font-extrabold mb-4 bg-gradient-to-r from-[#26C6DA] via-[#AC6CFF] to-[#FF6F00] text-transparent bg-clip-text"
          variants={fadeInVariants}
        >
          Our Story
        </motion.h2>
        <motion.h3
          className="text-3xl lg:text-4xl font-bold mb-2 bg-gradient-to-r from-[#26C6DA] via-[#AC6CFF] to-[#FF6F00] text-transparent bg-clip-text"
          variants={fadeInVariants}
        >
          Our Vision
        </motion.h3>
        <motion.p className="text-lg lg:text-2xl text-white mb-4 font-medium" variants={fadeInVariants}>
          Empowering You for the Future
        </motion.p>
        <motion.p className="text-base lg:text-lg text-gray-300 leading-6 lg:leading-8" variants={fadeInVariants}>
          At <span className="font-bold text-[#26C6DA]">Nexcore Alliance LLP</span>, we're dedicated to shaping India's next generation of digital leaders by offering cutting-edge programs designed for the real world. We bring you a <span className="font-bold text-[#AC6CFF]">Bachelor's in AI & ML</span> program that's built to make you industry-ready and globally competitive.
        </motion.p>

        {/* Badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 mt-6 rounded-full bg-[#26C6DA]/10 border border-[#26C6DA]/30 backdrop-blur-xl"
          variants={fadeInVariants}
        >
          <HiSparkles className="text-[#26C6DA]" />
          <span className="text-[#26C6DA] font-semibold text-sm">NEXT-GEN EDUCATION</span>
        </motion.div>
      </motion.div>

      {/* Gradient Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#26C6DA] via-[#AC6CFF] to-[#FF6F00]" />
    </motion.div>
  );
};

export default AboutUs;
