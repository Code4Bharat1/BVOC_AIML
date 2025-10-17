"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const AboutUs = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.2 });

  // Unified fade-in animation for all elements
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Container variant for staggered children animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.div
      ref={sectionRef}
      className="relative overflow-hidden rounded-2xl p-8 lg:p-12 min-h-[500px] flex flex-col lg:flex-row justify-between items-center gap-8
      bg-gradient-to-b from-[#1a1f4d] via-[#2d1b4e] to-[#4a1f6b] text-white shadow-[0_0_30px_rgba(172,108,255,0.2)]"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {/* Decorative glowing orbs */}
      <div className="absolute top-8 left-10 w-4 h-4 bg-[#00d4ff] rounded-full blur-md animate-pulse" />
      <div className="absolute bottom-12 right-12 w-6 h-6 bg-[#ff6b35] rounded-full blur-lg animate-ping" />
      <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-[#AC6CFF] rounded-full blur-md opacity-80" />

      {/* Heading at top for mobile only */}
      <motion.h2
        className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] via-[#AC6CFF] to-[#ff6b35] block lg:hidden text-center"
        variants={fadeInVariants}
        transition={{ duration: 0.6 }}
      >
        Our Story
      </motion.h2>

      {/* Left (Image) */}
      <motion.div
        className="w-full lg:w-1/2 flex justify-center items-center"
        variants={fadeInVariants}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#00d4ff]/30 via-[#AC6CFF]/30 to-[#ff6b35]/30 blur-2xl rounded-full" />
          <Image
            src="/Hub/AboutUs_Home.png"
            alt="About Us Image"
            width={500}
            height={384}
            className="relative rounded-2xl w-full max-w-md h-auto shadow-[0_0_20px_rgba(0,212,255,0.3)]"
          />
        </div>
      </motion.div>

      {/* Right (Text) */}
      <motion.div
        className="w-full lg:w-1/2 text-center lg:text-left"
        variants={fadeInVariants}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {/* Desktop heading only */}
        <motion.h2
          className="hidden lg:block text-5xl font-extrabold mb-4 bg-gradient-to-r from-[#00d4ff] via-[#AC6CFF] to-[#ff6b35] text-transparent bg-clip-text"
          variants={fadeInVariants}
        >
          Our Story
        </motion.h2>

        <motion.h3
          className="text-2xl lg:text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#00d4ff] via-[#AC6CFF] to-[#ff6b35]"
          variants={fadeInVariants}
        >
          Our Vision
        </motion.h3>

        <motion.p
          className="text-lg lg:text-3xl text-white mb-4 font-medium"
          variants={fadeInVariants}
        >
          Empowering You for the Future
        </motion.p>

        <motion.p
          className="text-base lg:text-lg text-gray-200 leading-6 lg:leading-8"
          variants={fadeInVariants}
        >
          At{" "}
          <span className="font-bold text-[#00d4ff]">Nexcore Alliance LLP</span>
          , we're dedicated to shaping India's next generation of digital
          leaders by offering cutting-edge programs designed for the real world.
          {/* In partnership with{" "}
          <span className="font-bold text-[#ff6b35]">
            Guru Kashi University (GKU)
          </span> */}
          We bring you a{" "}
          <span className="font-bold text-[#AC6CFF]">Bachelor's in AI & ML</span>{" "}
          program that's built to make you industry-ready and globally
          competitive.
        </motion.p>
      </motion.div>

      {/* Decorative gradient bar bottom */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#00d4ff] via-[#AC6CFF] to-[#ff6b35]" />
    </motion.div>
  );
};

export default AboutUs;
