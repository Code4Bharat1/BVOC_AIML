"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronDown, Sparkles } from "lucide-react";

const cardData = [
  {
    title: "Strategic Partnerships with Industry Giants",
    content:
      "We've joined forces with Microsoft, Google, and Amazon, offering co-branded certifications recognized globally.",
  },
  {
    title: "Hands-on Learning with Real-World Impact",
    content:
      "Gain practical experience through projects, internships, and industry case studies.",
  },
  {
    title: "Career Guidance and Mentorship",
    content:
      "Our mentors and career advisors provide personalized support for your growth journey.",
  },
  {
    title: "NAAC A+ Accreditation – Excellence Recognized",
    content:
      "Achieving NAAC A+ accreditation showcases our commitment to academic excellence.",
  },
  {
    title: "Empowering India's Digital Future",
    content:
      "Our curriculum builds digital-first skills to drive innovation across India's tech ecosystem.",
  },
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

const FiveCards = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const toggleCard = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <div className="relative bg-[#ffffff] text-black py-20 px-6 lg:px-12 border-b-2 border-[#007BFF] overflow-hidden">
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#007BFF" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
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
        transition={{ duration: 12, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-80 h-80 rounded-full blur-[130px] opacity-25"
        style={{ background: 'radial-gradient(circle, #FF7F00 0%, transparent 70%)' }}
        animate={{ 
          scale: [1, 1.4, 1],
          x: [0, -30, 0],
          y: [0, 20, 0],
        }}
        transition={{ duration: 15, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-72 h-72 rounded-full blur-[110px] opacity-20"
        style={{ background: 'radial-gradient(circle, #80C8F7 0%, transparent 70%)' }}
        animate={{ 
          scale: [1.2, 1, 1.2],
          rotate: [0, 360],
        }}
        transition={{ duration: 20, repeat: Infinity }}
      />

      {/* Section Title with Gradient */}
      <motion.div
        className="text-center mb-16 relative z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 
          className="text-4xl md:text-5xl font-bold mb-4"
          style={{ 
            background: 'linear-gradient(135deg, #FF7F00 0%, #FFCD00 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Why Choose Us
        </h2>
        <div className="flex items-center justify-center gap-2">
          <Sparkles className="text-[#FFCD00]" size={20} />
          <p className="text-[#80C8F7] text-lg">Excellence in Education & Innovation</p>
          <Sparkles className="text-[#FFCD00]" size={20} />
        </div>
      </motion.div>

      {/* Cards Grid */}
      <motion.div
        ref={containerRef}
        className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto justify-items-center z-10"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {cardData.map((card, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={cardVariants}
            onClick={() => toggleCard(i)}
            className={`cursor-pointer relative w-full sm:w-[280px] md:w-[300px] p-6 rounded-2xl border-2 transition-all duration-500 ${
              activeIndex === i
                ? "scale-105 border-[#007BFF] shadow-[0_0_30px_rgba(0,123,255,0.4)]"
                : "border-[#007BFF]/30 hover:scale-[1.02] hover:border-[#007BFF]/60"
            }`}
            style={{
              background: activeIndex === i 
                ? 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)'
                : 'linear-gradient(135deg, #2C2C2C 0%, #1a1a1a 100%)',
              boxShadow: activeIndex === i 
                ? '0 8px 32px rgba(0,123,255,0.3), inset 0 1px 1px rgba(128,200,247,0.1)'
                : '0 4px 20px rgba(0,0,0,0.4), inset 0 1px 1px rgba(128,200,247,0.05)',
            }}
          >
            {/* Card Glow Effect */}
            {activeIndex === i && (
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-20 blur-xl"
                style={{ background: 'linear-gradient(135deg, #007BFF 0%, #FF7F00 100%)' }}
                animate={{ opacity: [0.2, 0.4, 0.2] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            )}

            {/* Sparkle Icon */}
            <motion.div
              className="absolute top-4 right-4"
              animate={activeIndex === i ? { 
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              } : {}}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Sparkles className="text-[#FFCD00]" size={18} />
            </motion.div>

            <h3
              className="text-lg font-semibold mb-2 text-center pr-6"
              style={{ 
                fontFamily: "'Inter', sans-serif",
                color: activeIndex === i ? '#80C8F7' : '#ffffff',
              }}
            >
              {card.title}
            </h3>

            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: activeIndex === i ? "auto" : 0,
                opacity: activeIndex === i ? 1 : 0,
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <p className="text-gray-300 text-sm leading-relaxed text-center mt-3">
                {card.content}
              </p>
            </motion.div>

            {/* Chevron Indicator */}
            <div
              className={`absolute bottom-4 right-4 transition-transform duration-300 ${
                activeIndex === i ? "rotate-180" : ""
              }`}
            >
              <ChevronDown 
                size={22} 
                className="text-[#007BFF]"
                style={{ filter: 'drop-shadow(0 0 4px rgba(0,123,255,0.6))' }}
              />
            </div>

            {/* Bottom Edge Glow */}
            <div 
              className="absolute bottom-0 left-0 right-0 h-[2px] rounded-b-2xl"
              style={{
                background: activeIndex === i 
                  ? 'linear-gradient(90deg, transparent, #FF7F00, transparent)'
                  : 'linear-gradient(90deg, transparent, #007BFF, transparent)',
                opacity: activeIndex === i ? 1 : 0.3,
              }}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Custom Grid Positioning for Last Row */}
      <style>{`
        @media (min-width: 1024px) {
          .grid-cols-3 > :nth-child(4) {
            grid-column: 1 / span 1;
            justify-self: center;
          }
          .grid-col-3 > :nth-child(5) {
            grid-column: 3 / span 1;
            justify-self: center;
          }
        }
      `}</style>
    </div>
  );
};

export default FiveCards;