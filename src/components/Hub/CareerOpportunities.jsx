"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Sparkles } from "lucide-react";

const careers = [
  { img: "/career1.svg", alt: "Career 1", label: "Adoption" },
  { img: "/career2.svg", alt: "Career 2", label: "Opportunities" },
  { img: "/career3.svg", alt: "Career 3", label: "Preparedness" },
  { img: "/career4.svg", alt: "Career 4", label: "Innovation" },
  { img: "/career5.svg", alt: "Career 5", label: "Practicality" },
  { img: "/career6.svg", alt: "Career 6", label: "Integration" },
];

const Particle = ({ delay }) => {
  const colors = ["#007BFF", "#FF7F00", "#FF5733"];
  const color = colors[Math.floor(Math.random() * colors.length)];
  const startX = Math.random() * 100;
  const endX = startX + (Math.random() - 0.5) * 30;
  const duration = 8 + Math.random() * 6;

  return (
    <motion.div
      className="absolute w-1 h-1 rounded-full"
      style={{ 
        backgroundColor: color,
        left: `${startX}%`,
        top: '-10px',
        boxShadow: `0 0 8px ${color}`,
      }}
      animate={{
        y: ['0vh', '110vh'],
        x: [`0vw`, `${endX - startX}vw`],
        opacity: [0, 0.8, 0.8, 0],
        scale: [0, 1.5, 1, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
};

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
      className="relative py-24 px-6 lg:px-24 overflow-hidden bg-[#2C2C2C] text-white border-b-2 border-[#007BFF]"
    >
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="career-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#007BFF" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#career-grid)" />
        </svg>
      </div>

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <Particle key={i} delay={i * 0.4} />
      ))}

      {/* Glowing Orbs */}
      <motion.div
        className="absolute top-20 left-10 w-96 h-96 rounded-full blur-[120px] opacity-30"
        style={{ background: 'radial-gradient(circle, #007BFF 0%, transparent 70%)' }}
        animate={{ 
          scale: [1, 1.3, 1],
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 18, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-80 h-80 rounded-full blur-[130px] opacity-25"
        style={{ background: 'radial-gradient(circle, #FF7F00 0%, transparent 70%)' }}
        animate={{ 
          scale: [1, 1.4, 1],
          x: [0, -25, 0],
          y: [0, 25, 0],
        }}
        transition={{ duration: 20, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-72 h-72 rounded-full blur-[110px] opacity-20"
        style={{ background: 'radial-gradient(circle, #80C8F7 0%, transparent 70%)' }}
        animate={{ 
          scale: [1.2, 1, 1.2],
          rotate: [0, 360],
        }}
        transition={{ duration: 22, repeat: Infinity }}
      />

      {/* Section Heading */}
      <motion.div
        className="relative z-10 text-center mb-16"
        variants={headingVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <h1 
          className="text-4xl lg:text-6xl font-bold mb-4"
          style={{ 
            fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif",
            background: 'linear-gradient(135deg, #FF7F00 0%, #FFCD00 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Career & Opportunities
        </h1>
        <div className="flex items-center justify-center gap-2">
          <Sparkles className="text-[#FFCD00]" size={20} />
          <p 
            className="text-xl lg:text-2xl text-[#80C8F7] font-semibold"
            style={{ fontFamily: "'Inter', -apple-system, system-ui, sans-serif" }}
          >
            Step Into High-Demand Tech Careers
          </p>
          <Sparkles className="text-[#FFCD00]" size={20} />
        </div>
      </motion.div>

      {/* Career Cards */}
      <motion.div
        className="relative z-10 grid grid-cols-2 lg:grid-cols-6 gap-8 justify-items-center max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {careers.map((career, i) => (
          <motion.div
            key={i}
            variants={itemVariants}
            className="group flex flex-col items-center w-full max-w-[160px] transition-transform hover:scale-110"
          >
            {/* Card Container with Glow */}
            <motion.div
              className="relative w-28 h-28 flex justify-center items-center rounded-2xl border-2 border-[#007BFF]/40 transition-all duration-300 group-hover:border-[#007BFF] group-hover:shadow-[0_0_30px_rgba(0,123,255,0.4)]"
              style={{
                background: 'linear-gradient(135deg, #2C2C2C 0%, #1a1a1a 100%)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.4), inset 0 1px 1px rgba(128,200,247,0.05)',
              }}
              whileHover={{ y: -8 }}
            >
              {/* Sparkle Icon */}
              <motion.div
                className="absolute top-2 right-2"
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.2, 1],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Sparkles className="text-[#FFCD00]" size={14} />
              </motion.div>

              {/* Card Glow Effect on Hover */}
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"
                style={{ background: 'linear-gradient(135deg, #007BFF 0%, #FF7F00 100%)' }}
              />

              <img
                src={career.img}
                alt={career.alt}
                className="w-16 h-16 transition-transform group-hover:scale-110 relative z-10"
              />

              {/* Bottom Edge Glow */}
              <div 
                className="absolute bottom-0 left-0 right-0 h-[2px] rounded-b-2xl opacity-50 group-hover:opacity-100 transition-opacity"
                style={{
                  background: 'linear-gradient(90deg, transparent, #FF7F00, transparent)',
                }}
              />
            </motion.div>

            {/* Label */}
            <motion.p 
              className="mt-4 text-base font-semibold text-center"
              style={{ 
                fontFamily: "'Inter', -apple-system, system-ui, sans-serif",
                color: '#80C8F7',
              }}
              whileHover={{ 
                scale: 1.05,
                color: '#FFCD00',
              }}
            >
              {career.label}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default CareerOpportunities;