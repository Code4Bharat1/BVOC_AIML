"use client";
import React, { useRef } from "react";
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
      className="relative py-24 px-6 lg:px-24 overflow-hidden bg-white text-slate-900"
    >
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.015]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(#cbd5e1 1px, transparent 1px),
              linear-gradient(90deg, #cbd5e1 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/20 rounded-full"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            animate={{ y: [0, -30, 0], opacity: [0, 0.5, 0] }}
            transition={{ duration: 4 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
          />
        ))}
      </div>

      {/* Soft Glowing Orbs */}
      <motion.div
        className="absolute top-10 left-10 w-64 h-64 rounded-full blur-[140px] bg-blue-100/15"
        animate={{ scale: [1, 1.2, 1], x: [0, 25, 0], y: [0, -25, 0] }}
        transition={{ duration: 18, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-72 h-72 rounded-full blur-[150px] bg-indigo-100/12"
        animate={{ scale: [1, 1.25, 1], x: [0, -25, 0], y: [0, 25, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
      />

      {/* Section Heading */}
      <motion.div
        className="relative z-10 text-center mb-16"
        variants={headingVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <h1 
          className="text-4xl lg:text-6xl font-bold text-slate-900"
          style={{ fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif" }}
        >
          Career & Opportunities
        </h1>
        <p 
          className="text-xl lg:text-2xl mt-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-semibold"
          style={{ fontFamily: "'Inter', -apple-system, system-ui, sans-serif" }}
        >
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
            className="group flex flex-col items-center w-full max-w-[140px] transition-transform hover:scale-105"
          >
            <div className="w-24 h-24 flex justify-center items-center bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-md hover:shadow-lg transition-all border border-blue-100 hover:border-blue-200">
              <img
                src={career.img}
                alt={career.alt}
                className="w-16 h-16 transition-transform group-hover:scale-110"
              />
            </div>
            <p 
              className="mt-4 text-base font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent text-center"
              style={{ fontFamily: "'Inter', -apple-system, system-ui, sans-serif" }}
            >
              {career.label}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default CareerOpportunities;