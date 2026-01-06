"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Sparkles } from "lucide-react";

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

const InDemandCareer = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const headingVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <>
      {/* Section Header with Gradient Background */}
      <motion.div
        variants={headingVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="hidden md:block relative py-12 bg-[#ffffff] overflow-hidden border-b-2 border-[#007BFF]"
      >
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="header-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#007BFF" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#header-grid)" />
          </svg>
        </div>

        {/* Glowing Orb */}
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full blur-[120px] opacity-30"
          style={{ background: 'radial-gradient(circle, #FF7F00 0%, transparent 70%)' }}
          animate={{ 
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />

        <div className="relative z-10 flex items-center justify-center gap-3">
          <Sparkles className="text-[#FFCD00]" size={28} />
          <h2
            className="text-4xl lg:text-5xl font-bold text-center"
            style={{ 
              fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif",
              background: 'linear-gradient(135deg, #FF7F00 0%, #FFCD00 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            In-Demand Careers in AI & Emerging Tech
          </h2>
          <Sparkles className="text-[#FFCD00]" size={28} />
        </div>
      </motion.div>

      <section
        ref={sectionRef}
        className="hidden md:block relative py-16 px-4 bg-[#ffffff] overflow-hidden border-b-2 border-[#007BFF]"
      >
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="demand-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#007BFF" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#demand-grid)" />
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

        <div className="text-center relative z-10 flex justify-center">
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative border-2 border-[#007BFF] rounded-2xl p-8 shadow-[0_8px_32px_rgba(0,123,255,0.3)] max-w-5xl w-full mx-4 transition-all duration-500 hover:shadow-[0_12px_40px_rgba(0,123,255,0.5)] hover:scale-[1.02]"
            style={{
              background: 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)',
            }}
          >
            {/* Card Glow Effect */}
            <motion.div
              className="absolute inset-0 rounded-2xl opacity-20 blur-xl"
              style={{ background: 'linear-gradient(135deg, #007BFF 0%, #FF7F00 100%)' }}
              animate={{ opacity: [0.15, 0.3, 0.15] }}
              transition={{ duration: 3, repeat: Infinity }}
            />

            {/* Corner Sparkles */}
            <motion.div
              className="absolute top-4 left-4"
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Sparkles className="text-[#FFCD00]" size={20} />
            </motion.div>
            <motion.div
              className="absolute top-4 right-4"
              animate={{ 
                rotate: [360, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
            >
              <Sparkles className="text-[#80C8F7]" size={20} />
            </motion.div>

            {/* Image Container */}
            <div className="relative">
              <img
                src="/Career-demand-imgs.svg"
                alt="In-Demand Careers"
                className="w-full h-auto relative z-10"
              />
              
              {/* Image Border Glow */}
              <div 
                className="absolute bottom-0 left-0 right-0 h-[3px] rounded-b-2xl"
                style={{
                  background: 'linear-gradient(90deg, transparent, #FF7F00, #FFCD00, transparent)',
                }}
              />
            </div>

            {/* Top Edge Glow */}
            <div 
              className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl"
              style={{
                background: 'linear-gradient(90deg, transparent, #007BFF, #80C8F7, transparent)',
              }}
            />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default InDemandCareer;