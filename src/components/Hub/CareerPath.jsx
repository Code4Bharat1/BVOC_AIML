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
      className="relative overflow-hidden w-full py-16 px-6 bg-gradient-to-br from-[#1a1f4d] via-[#2d1b4e] to-[#4a1f6b]"
    >
      {/* Background Circle Element */}
      <div className="absolute top-24 lg:top-[55%] left-0 -translate-y-1/2 z-0 opacity-70 blur-sm">
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
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-[#00d4ff33] via-[#AC6CFF33] to-[#ff6b3533] blur-2xl -z-10" />
            <Image
              src="/CareerPath1.png"
              alt="Career Path"
              width={500}
              height={500}
              className="w-full h-auto rounded-3xl bg-cover shadow-[0_0_30px_rgba(0,212,255,0.3)]"
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
          {/* Star Element */}
          <div className="absolute right-2 top-10 lg:right-20 lg:top-32 opacity-80">
            <Image
              src="/elements/CareerStarElement_Home.svg"
              alt="Star Element"
              width={40}
              height={120}
              className="object-contain"
            />
          </div>

          <div className="relative z-10 space-y-6">
            {/* Desktop Text */}
            <h3 className="hidden lg:block text-[#00d4ff] text-5xl font-bold leading-tight">
              Where Will Your Journey Take You?
            </h3>
            <p className="hidden lg:block text-white text-2xl leading-relaxed">
              The best part? You're not limited. <br />
              Whether you're just starting or aiming for an advanced role,
              the Bachelor's in AI & ML degree offers a clear path to
              exciting opportunities at every stage of your career.
            </p>

            {/* Mobile Text */}
            <div className="lg:hidden">
              <h3 className="text-[#00d4ff] text-2xl font-bold leading-snug">
                Where Will Your Journey <br /> Take You?
              </h3>
              <p className="text-white text-lg leading-8 mt-4">
                The best part? You're not limited. Whether you're just starting
                or aiming for an advanced role, the Bachelor's in AI & ML
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
