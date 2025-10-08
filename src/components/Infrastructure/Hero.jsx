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
      bg-gradient-to-b from-[#3A0B57] via-[#3D0B67] to-[#160E6E]"
    >
      {/* Glowing Background Effects */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#AC6CFF]/20 blur-[160px] rounded-full animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#3D0B67]/25 blur-[200px] rounded-full animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#160E6E]/10 blur-[240px] rounded-full"></div>

      <div className="relative flex flex-col lg:flex-row justify-between items-center gap-12 z-10 w-full max-w-7xl">
        {/* LEFT SIDE */}
        <motion.div
          variants={leftVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="lg:w-[65%] w-full text-center lg:text-left"
        >
          {/* Mobile Heading */}
          <h1 className="lg:hidden text-4xl md:text-5xl font-extrabold leading-snug text-transparent bg-clip-text bg-gradient-to-r from-[#AC6CFF] via-[#CBA0FF] to-white drop-shadow-[0_0_30px_rgba(255,255,255,0.25)]">
            Where Innovation <br /> Meets World-Class <br />
            <span className="text-white">Infrastructure.</span>
          </h1>

          <p className="lg:hidden my-8 text-lg text-center text-white/80 leading-relaxed">
            <span className="text-[#AC6CFF] font-semibold">High-Tech</span> Learning Spaces, and{" "}
            <span className="text-[#CBA0FF] font-semibold">Smart Classrooms</span>. Built to empower
            hands-on learning, creativity, and real-world simulation.
          </p>

          {/* Desktop Heading */}
          <h1 className="hidden lg:block text-6xl md:text-7xl font-extrabold leading-snug text-transparent bg-clip-text bg-gradient-to-r from-[#AC6CFF] via-[#CBA0FF] to-white drop-shadow-[0_0_40px_rgba(255,255,255,0.25)]">
            Where Innovation Meets <br /> World-Class{" "}
            <span className="text-white">Infrastructure.</span>
          </h1>

          <p className="hidden lg:block mt-10 text-xl lg:text-2xl text-white/80 leading-relaxed">
            <span className="text-[#AC6CFF] font-semibold">High-Tech</span> Learning Spaces, and{" "}
            <span className="text-[#CBA0FF] font-semibold">Smart Classrooms</span>. <br />
            Built to empower hands-on learning, creativity, and real-world simulation.
          </p>
        </motion.div>

        {/* RIGHT SIDE (Decorative Elements) */}
        <motion.div
          variants={rightVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="hidden lg:block lg:w-[30%] w-full relative h-[300px]"
        >
          {/* Glow Layers */}
          <div className="absolute -top-10 -left-10 w-72 h-72 bg-[#AC6CFF]/25 blur-[120px] rounded-full animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#3D0B67]/25 blur-[120px] rounded-full animate-pulse"></div>

          {/* Decorative Elements (unchanged paths) */}
          <Image
            src="/elements/StarsElementWhiteBg.svg"
            alt="Icon 1"
            width={60}
            height={60}
            className="absolute top-0 left-0 opacity-90 hover:scale-110 transition-transform duration-300"
          />
          <Image
            src="/elements/StarsElement.svg"
            alt="Icon 2"
            width={60}
            height={60}
            className="absolute -top-8 -right-10 opacity-90 hover:scale-110 transition-transform duration-300"
          />
          <Image
            src="/elements/SubtractInfraElement.svg"
            alt="Icon 3"
            width={180}
            height={180}
            className="absolute -bottom-20 left-0 opacity-90 hover:scale-110 transition-transform duration-300"
          />
          <Image
            src="/elements/StarsElementWhiteBg.svg"
            alt="Icon 4"
            width={70}
            height={70}
            className="absolute bottom-0 right-8 opacity-90 hover:scale-110 transition-transform duration-300"
          />
          <Image
            src="/elements/StarsElement.svg"
            alt="Icon 5"
            width={50}
            height={50}
            className="absolute bottom-20 left-1/3 transform -translate-x-1/2 opacity-90 hover:scale-110 transition-transform duration-300"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
