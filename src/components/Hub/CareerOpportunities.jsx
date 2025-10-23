"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const careers = [
  { img: "/career1.svg", alt: "Career 1", label: "Adoption" },
  { img: "/career2.svg", alt: "Career 2", label: "Opportunities" },
  { img: "/career3.svg", alt: "Career 3", label: "Preparedness" },
  { img: "/career4.svg", alt: "Career 4", label: "Innovation" },
  { img: "/career5.svg", alt: "Career 5", label: "Practicality" },
  { img: "/career6.svg", alt: "Career 6", label: "Integration" },
];

const CareerOpportunities = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const headingVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-24 px-6 lg:px-24 overflow-hidden bg-gradient-to-br from-[#1A287E] via-[#2C3560] to-[#212121] text-white"
    >
      {/* Animated Grid Background */}
     <div className="absolute inset-0 pointer-events-none opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(38,198,218,0.4) 1px, transparent 1px),
                linear-gradient(90deg, rgba(38,198,218,0.4) 1px, transparent 1px)
              `,
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>


      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#26C6DA] rounded-full"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            animate={{ y: [0, -30, 0], opacity: [0, 1, 0] }}
            transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
          />
        ))}
      </div>

      {/* Glowing Orbs */}
      <motion.div
        className="absolute top-10 left-10 w-64 h-64 rounded-full blur-[100px] bg-[#26C6DA]/20"
        animate={{ scale: [1, 1.3, 1], x: [0, 30, 0], y: [0, -30, 0] }}
        transition={{ duration: 15, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-80 h-80 rounded-full blur-[120px] bg-[#FF6F00]/20"
        animate={{ scale: [1, 1.4, 1], x: [0, -30, 0], y: [0, 30, 0] }}
        transition={{ duration: 18, repeat: Infinity }}
      />

      {/* Section Heading */}
      <motion.div
        className="relative z-10 text-center mb-16"
        variants={headingVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <h1 className="text-4xl lg:text-6xl font-extrabold">
          Career & Opportunities
        </h1>
        <p className="text-xl lg:text-2xl mt-4 text-[#26C6DA]">
          Step Into High-Demand Tech Careers
        </p>
      </motion.div>

      {/* Career Cards */}
      <motion.div
        className="relative z-10 grid grid-cols-2 lg:grid-cols-6 gap-8 justify-items-center"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {careers.map((career, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            className="group flex flex-col items-center w-full max-w-[140px] transition-transform hover:scale-110"
          >
            <div className="w-24 h-24 flex justify-center items-center bg-gradient-to-br from-[#00d4ff]/10 via-[#AC6CFF]/10 to-[#ff6b35]/10 rounded-2xl shadow-lg hover:shadow-xl transition-all">
              <Image
                src={career.img}
                alt={career.alt}
                width={100}
                height={100}
                className="transition-transform group-hover:scale-110"
              />
            </div>
            <p className="mt-4 text-lg font-bold bg-gradient-to-r from-[#00d4ff] via-[#AC6CFF] to-[#ff6b35] bg-clip-text text-transparent">
              {career.label}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default CareerOpportunities;
