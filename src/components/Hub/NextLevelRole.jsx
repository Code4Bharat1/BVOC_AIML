"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const NextLevelRole = () => {
  const topRoles = [
    "AI \nSOFTWARE \nENGINEER",
    "ROBOTICS \nENGINEER \n(AI/ML FOCUS)",
    "DATA \nSCIENTIST",
    "AI \nCONSULTANT",
  ];

  const bottomRoles = [
    "AI \nRESEARCH \nSCIENTIST",
    "DEEP \nLEARNING \nENGINEER",
    "NLP \nENGINEER",
    "AI ETHICIST",
    "AUTONOMOUS \nSYSTEMS ENGINEER",
  ];

  // Split roles roughly in half for two columns
  const splitArray = (arr) => {
    const middle = Math.ceil(arr.length / 2);
    return [arr.slice(0, middle), arr.slice(middle)];
  };

  const [topLeft, topRight] = splitArray(topRoles);
  const [bottomLeft, bottomRight] = splitArray(bottomRoles);

  // Refs and InView hooks
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  // Variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div
      className="bg-white relative w-full overflow-hidden bg-[url('/CareerDemand_Home-mob-bg.svg')] lg:bg-[url('/CareerDemand_Home-bg.svg')] bg-no-repeat bg-cover bg-center min-h-screen py-16"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* SVG Elements */}
        <Image
          src="/elements/CareerStarElement_Home.svg"
          alt="Top Star"
          width={100}
          height={100}
          className="absolute top-12 right-10 lg:top-9 lg:right-2/6 w-6 h-16 lg:w-10 lg:h-24 z-0"
        />
        <Image
          src="/elements/PlanetElement_Home.svg"
          alt="Planet Element"
          width={100}
          height={100}
          className="absolute top-[420px] -left-14 lg:top-1/2 lg:-left-10 transform -translate-y-1/2 w-48 h-48 lg:w-56 lg:h-56 z-10 lg:z-0"
        />
        <Image
          src="/elements/NextLevelElement_Home.svg"
          alt="Next Level BG"
          width={100}
          height={100}
          className="absolute -bottom-44 lg:top-80 right-0 transform translate-x-1/4 -translate-y-1/2 w-72 h-72 lg:w-[30rem] lg:h-[30rem] z-0"
        />
        <Image
          src="/elements/CareerStarElement_Home.svg"
          alt="Bottom Star"
          width={100}
          height={100}
          className="absolute bottom-36 right-16 lg:bottom-28 lg:left-10 w-6 h-6 lg:w-8 lg:h-7 z-0"
        />

        {/* Title */}
        <motion.h2
          className="text-center text-white text-2xl md:text-4xl font-bold mb-16 z-10 relative"
          variants={titleVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          NEXT-LEVEL ROLES
        </motion.h2>

        {/* MOBILE: Top Section */}
        <div className="lg:hidden mb-16">
          <div className="flex gap-6 px-4">
            {/* Left column */}
            <motion.div
              className="flex flex-col gap-6 flex-1"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {topLeft.map((role, i) => (
                <motion.div
                  key={i}
                  style={{ zIndex: 20 - i }}
                  className="bg-[#EADAFF] rounded-3xl px-4 py-6 flex items-center justify-center min-h-[100px] sm:min-h-[120px] text-center relative"
                  variants={itemVariants}
                >
                  <p className="text-[#06071B] font-extrabold whitespace-pre-line leading-snug break-words">
                    {role}
                  </p>
                </motion.div>
              ))}
            </motion.div>
            {/* Right column with padding top */}
            <motion.div
              className="flex flex-col gap-6 flex-1 pt-10"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {topRight.map((role, i) => (
                <motion.div
                  key={i}
                  style={{ zIndex: 10 - i }}
                  className="bg-[#EADAFF] rounded-3xl px-4 py-6 flex items-center justify-center min-h-[100px] sm:min-h-[120px] text-center relative"
                  variants={itemVariants}
                >
                  <p className="text-[#06071B] font-extrabold whitespace-pre-line leading-snug break-words">
                    {role}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* MOBILE: Bottom Section */}
        <motion.div
          className="lg:hidden pb-20"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h3
            className="text-center text-white text-2xl font-bold mb-8 relative z-10 "
            variants={titleVariants}
          >
            GO BIG WITH IMPACT
          </motion.h3>
          <div className="flex gap-6 px-4">
            {/* Left column */}
            <motion.div className="flex flex-col gap-6 flex-1" variants={containerVariants}>
              {bottomLeft.map((role, i) => (
                <motion.div
                  key={i}
                  style={{ zIndex: 30 - i }}
                  className="bg-[#EADAFF] rounded-3xl px-4 py-6 flex items-center justify-center min-h-[100px] sm:min-h-[120px] text-center relative"
                  variants={itemVariants}
                >
                  <p className="text-[#06071B] font-extrabold whitespace-pre-line leading-snug break-words">
                    {role}
                  </p>
                </motion.div>
              ))}
            </motion.div>
            {/* Right column with padding top */}
            <motion.div className="flex flex-col gap-6 flex-1 pt-10" variants={containerVariants}>
              {bottomRight.map((role, i) => (
                <motion.div
                  key={i}
                  style={{ zIndex: 20 - i }}
                  className="bg-[#EADAFF] rounded-3xl px-4 py-6 flex items-center justify-center min-h-[100px] sm:min-h-[120px] text-center relative"
                  variants={itemVariants}
                >
                  <p className="text-[#06071B] font-extrabold whitespace-pre-line leading-snug break-words">
                    {role}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* DESKTOP: Keep original layout */}
        <div className="hidden lg:block">
          {/* Top Roles */}
          <motion.div
            className="grid grid-cols-4 gap-6 mb-16 px-44 relative z-20"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {topRoles.map((role, index) => (
              <motion.div
                key={index}
                className="bg-[#EADAFF] rounded-3xl px-4 py-6 flex items-center justify-center min-h-[100px] sm:min-h-[120px] text-center z-20"
                variants={itemVariants}
              >
                <p className="text-[#06071B] font-extrabold whitespace-pre-line leading-snug break-words">
                  {role}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Impact Title */}
          <motion.h3
            className="text-center text-white text-2xl md:text-3xl font-bold mb-12 pt-8 z-10 relative"
            variants={titleVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            GO BIG WITH IMPACT
          </motion.h3>

          {/* Bottom Roles */}
          <motion.div
            className="grid grid-cols-5 gap-6 px-20 relative z-10 mt-12"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {bottomRoles.map((role, index) => (
              <motion.div
                key={index}
                className="bg-[#EADAFF] rounded-3xl px-4 py-6 flex items-center justify-center min-h-[100px] sm:min-h-[120px] text-center"
                variants={itemVariants}
              >
                <p className="text-[#06071B] font-extrabold whitespace-pre-line leading-snug break-words">
                  {role}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default NextLevelRole;
