"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const cardData = [
  {
    id: 1,
    image: "/MachineLearning_Home.png",
    title: "Machine Learning\nEngineer",
  },
  {
    id: 2,
    image: "/AiSoftware_Home.png",
    title: "AI Software\nEngineer",
  },
  {
    id: 3,
    image: "/DA_Home.png",
    title: "Data Analyst\n(AI/ML Focus)",
  },
  {
    id: 4,
    image: "/AiHealthcare_Home.png",
    title: "AI Engineer\nin Healthcare",
  },
  {
    id: 5,
    image: "/AiSoftware_Home.png",
    title: "Speech Recognition\nEngineer",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.5, // delay so heading shows first
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const headingVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const KickStart = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="bg-[#EADAFF] p-3 lg:p-8 ">
      {/* Mobile Head */}
      <motion.h1
        variants={headingVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="lg:hidden text-center text-[#2B2038] text-5xl font-extrabold pb-16 pt-9 leading-tight"
      >
        Kickstart <br /> Your Career
      </motion.h1>

      {/* Desktop Head */}
      <motion.h1
        variants={headingVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="hidden lg:block text-center text-[#2B2038] text-3xl lg:text-6xl font-extrabold lg:pb-16 pt-9 leading-tight"
      >
        Kickstart Your Career
      </motion.h1>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="overflow-x-auto scrollbar-hidden"
      >
        <div className="flex gap-8 w-max pr-8">
          {cardData.map((card) => (
            <motion.div
              key={card.id}
              variants={cardVariants}
              className="w-[290px] lg:w-[350px] h-[340px] lg:h-[440px] bg-[#2B2038] rounded-4xl overflow-hidden shadow-lg flex-shrink-0 flex flex-col items-center justify-start p-6 mb-14 "
            >
              <div className="relative w-full h-[300px] rounded-4xl overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={350}
                  height={220}
                  className="object-cover w-full h-full rounded-2xl"
                />
              </div>
              <h3 className="text-white font-bold text-center text-xl lg:text-2xl mt-4 uppercase leading-snug whitespace-pre-line">
                {card.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default KickStart;
