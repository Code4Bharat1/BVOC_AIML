"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Shared data
const cardsData = [
  {
    title: "B.Voc Degree",
    duration: "(6 Semesters)",
    description:
      "Gain in-depth knowledge and industry-ready skills with a full 3-year vocational degree.",
    bg: "bg-[#460E73]/90",
    text: "text-white",
  },
  {
    title: "Advanced Diploma",
    duration: "(4 Semesters)",
    description:
      "Build strong practical expertise and step confidently into specialized career roles.",
    bg: "bg-[#6929B6]/90",
    text: "text-white",
  },
  {
    title: "Diploma",
    duration: "(2 Semesters)",
    description:
      "Kickstart your professional journey with core skills in just one year.",
    bg: "bg-[#AC6CFF]/90",
    text: "text-white",
  },
  {
    title: "Certificate",
    duration: "(1 Semester)",
    description:
      "Get a quick, focused introduction to essential vocational skills in just six months.",
    bg: "bg-[#D8BCFD]/90",
    text: "text-black",
  },
];

const SemesterCards = () => {
  return (
    <div className="relative mt-10 w-full min-h-screen bg-gradient-to-br from-[#33135B] via-[#460E73] to-[#8E1DBA] py-12 md:py-20 px-4 md:px-8 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-purple-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      {/* Nexcore Alliance Logo - Centered */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-30 w-32 h-32 md:w-48 md:h-48 lg:w-56 lg:h-56 mx-auto mb-8 md:mb-12"
      >
        <Image
          src="/elements/Nexcore_Alliance.svg"
          alt="Nexcore Alliance"
          fill
          className="object-contain drop-shadow-2xl"
          priority
        />
      </motion.div>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white mb-12 md:mb-16 lg:mb-20 relative z-10"
      >
        Our <span className="text-[#D8BCFD]">Programs</span>
      </motion.h2>

      {/* Cards Grid - Fully Responsive */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-6 max-w-7xl mx-auto">
        {cardsData.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: index * 0.15,
              ease: "easeOut",
            }}
            viewport={{ once: true }}
            whileHover={{ 
              scale: 1.05, 
              y: -8,
              transition: { duration: 0.3 }
            }}
            className={`
              ${card.bg} ${card.text}
              rounded-3xl p-6 md:p-7 lg:p-8
              backdrop-blur-md border-2 border-white/20
              shadow-xl hover:shadow-2xl
              transition-all duration-300 ease-out
              relative overflow-hidden
              group
            `}
          >
            {/* Hover gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl"></div>
            
            {/* Content */}
            <div className="relative z-10 space-y-3 md:space-y-4">
              <div className="flex flex-col gap-1">
                <h3 className="text-xl md:text-2xl font-bold leading-tight">
                  {card.title}
                </h3>
                <p className="text-sm md:text-base font-semibold opacity-90">
                  {card.duration}
                </p>
              </div>
              <p className="text-sm md:text-base leading-relaxed opacity-95">
                {card.description}
              </p>
            </div>

            {/* Decorative corner accent */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.div>
        ))}
      </div>

      {/* Bottom decorative text */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
        className="text-center mt-12 md:mt-16 text-white/60 text-sm md:text-base"
      >
        <p>Choose the path that fits your career goals</p>
      </motion.div>
    </div>
  );
};

export default SemesterCards;