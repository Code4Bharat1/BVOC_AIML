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

// ✅ Mobile View
const MobileSemesterCards = () => {
  return (
    <div className="lg:hidden relative mt-44">
      {/* Nexcore logo section */}
      <div className="absolute w-full flex justify-center" style={{ top: "-150px" }}>
        <div className="relative w-full h-[300px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[200px] h-[350px] z-[-10]"
          >
            <Image
              src="/elements/Nexcore-learngrow-bg.svg"
              alt="Background Circle"
              fill
              className="object-contain"
              priority
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="relative z-10 w-[160px] h-[160px] mx-auto"
          >
            <Image
              src="/elements/Nexcore_Alliance.svg"
              alt="Nexcore Alliance"
              fill
              className="object-contain rounded-full"
              priority
            />
          </motion.div>
        </div>
      </div>

      {/* Background gradient & cards */}
      <div className="min-h-screen bg-gradient-to-t from-[#AC6CFF] via-[#6929B6] to-[#460E73] py-10 mt-24 px-4 m-8 rounded-4xl text-center shadow-2xl overflow-hidden">
        <h2 className="text-3xl font-bold text-white mb-10">
          Our <span className="text-[#AC6CFF]">Programs</span>
        </h2>

        <div className="flex flex-col gap-6 max-w-md mx-auto pt-8">
          {cardsData
            .slice()
            .reverse()
            .map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`${card.bg} ${card.text} rounded-[2rem] p-6 backdrop-blur-sm border border-white/10 hover:scale-105 transition-all duration-300 ease-in-out shadow-md`}
              >
                <div className="space-y-2">
                  <h2 className="text-xl font-bold">{card.title}</h2>
                  <p className="text-base font-semibold">{card.duration}</p>
                  <p className="text-base font-medium">{card.description}</p>
                </div>
              </motion.div>
            ))}
        </div>
      </div>
    </div>
  );
};

// ✅ Desktop View
const DesktopSemesterCards = () => {
  return (
    <div className="hidden lg:block relative min-h-screen bg-gradient-to-t from-[#33135B] via-[#460E73] to-[#8E1DBA] py-20 px-4 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: -80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="absolute top-[44%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 z-20"
      >
        <Image
          src="/elements/Nexcore_Alliance.svg"
          alt="Nexcore Alliance"
          width={288}
          height={288}
          className="object-contain"
          priority
        />
      </motion.div>

      <h2 className="text-5xl font-bold text-center text-white mb-20">
        Our <span className="text-[#AC6CFF]">Programs</span>
      </h2>

      <div className="grid grid-cols-2 gap-x-32 gap-y-20 max-w-7xl mx-auto">
        {cardsData.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`
              ${card.bg} ${card.text} rounded-[2rem] p-8 
              transform transition-all duration-300 ease-in-out 
              hover:bg-[#AC6CFF]/90 hover:shadow-lg hover:scale-105 
              backdrop-blur-sm border border-white/10 flex items-center
              ${index % 2 === 0 ? "hover:pr-16" : "hover:pl-16"}
            `}
          >
            <div className="max-w-sm mx-auto space-y-3">
              <h2 className="text-2xl font-bold">{card.title}</h2>
              <p className="text-lg font-medium">{card.duration}</p>
              <p className="text-lg">{card.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

// ✅ Combined Component
const SemesterCards = () => {
  return (
    <>
      <DesktopSemesterCards />
      <MobileSemesterCards />
    </>
  );
};

export default SemesterCards;
