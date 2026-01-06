"use client";
import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Brain, Code, Shield } from "lucide-react";

const degrees = [
  {
    id: 1,
    name: "AI & ML",
    icon: Brain,
    color: "#007BFF"
  },
  {
    id: 2,
    name: "Computer Science",
    icon: Code,
    color: "#FF7F00"
  },
  {
    id: 3,
    name: "Cyber Security",
    icon: Shield,
    color: "#80C8F7"
  }
];

const Welcome = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [isPdfModalOpen, setPdfModalOpen] = useState(false);

  return (
    <section
      ref={ref}
      className="relative lg:mt-0 py-32 px-6 lg:px-24 flex flex-col lg:flex-row items-center gap-20 overflow-hidden"
      style={{ backgroundColor: '#2C2C2C' }}
    >
      {/* Minimal Grid Background */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#007BFF 1px, transparent 1px), linear-gradient(90deg, #007BFF 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}></div>
      </div>

      {/* Subtle Ambient Glow */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full blur-[200px] opacity-20"
        style={{
          background: "radial-gradient(circle, #007BFF 0%, transparent 70%)",
          top: "20%",
          left: "10%",
        }}
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.15, 0.25, 0.15]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Text Section */}
      <motion.div
        className="relative z-10 lg:w-1/2 text-left"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Minimal Badge */}
        <motion.div
          className="inline-block mb-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          <div 
            className="text-xs font-medium tracking-wider uppercase px-4 py-2 rounded-full"
            style={{ 
              color: '#007BFF',
              backgroundColor: 'rgba(0, 123, 255, 0.08)',
              border: '1px solid rgba(0, 123, 255, 0.2)'
            }}
          >
            Future of Education
          </div>
        </motion.div>

        <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-[1.1]" style={{ fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif" }}>
          <span className="text-white block mb-2">Welcome to</span>
          <span className="text-white block mb-2">the Future of</span>
          <span className="relative inline-block">
            <span 
              style={{
                background: 'linear-gradient(120deg, #007BFF 0%, #FF7F00 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Learning
            </span>
            <motion.div
              className="absolute -bottom-2 left-0 h-1 rounded-full"
              style={{
                background: 'linear-gradient(90deg, #007BFF 0%, #FF7F00 100%)',
                width: '100%'
              }}
              initial={{ scaleX: 0, originX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
            />
          </span>
        </h1>

        <motion.p
          className="mb-12 leading-relaxed text-lg max-w-xl"
          style={{ 
            color: 'rgba(255, 255, 255, 0.7)',
            fontFamily: "'Inter', -apple-system, system-ui, sans-serif"
          }}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Strategic partnership with <span className="font-medium" style={{ color: '#007BFF' }}>Nexcore Alliance LLP</span>, launching <span className="font-medium" style={{ color: '#FF7F00' }}>B.Voc</span> degree programs that integrate industry expertise with academic excellence.
        </motion.p>

        {/* Minimal Stats */}
        <motion.div
          className="flex gap-12 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
        >
          {[
            { number: "100%", label: "Industry Ready" },
            { number: "AI/ML", label: "Focused" },
            { number: "UGC", label: "Approved" }
          ].map((stat, i) => (
            <div key={i}>
              <div 
                className="text-2xl font-bold mb-1"
                style={{ 
                  background: i === 0 ? '#007BFF' : i === 1 ? '#FF7F00' : '#80C8F7',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                {stat.number}
              </div>
              <div className="text-sm" style={{ color: 'rgba(255, 255, 255, 0.5)' }}>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Degree Programs */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
        >
          <div className="text-xs mb-4" style={{ color: 'rgba(255, 255, 255, 0.5)' }}>
            AVAILABLE PROGRAMS
          </div>
          <div className="flex flex-wrap gap-3">
            {degrees.map((degree, i) => (
              <motion.div
                key={degree.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.7 + i * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex items-center gap-2 px-4 py-2.5 rounded-lg"
                style={{
                  backgroundColor: `${degree.color}15`,
                  border: `1px solid ${degree.color}30`
                }}
              >
                <degree.icon className="w-4 h-4" style={{ color: degree.color }} />
                <span className="text-sm font-medium text-white">{degree.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Minimal CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9 }}
        >
          <motion.button
            className="group relative px-8 py-4 rounded-lg font-medium text-base text-white overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #007BFF 0%, #FF7F00 100%)',
            }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10 flex items-center gap-3">
              Enroll Now
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Minimal Robot Illustration */}
      <motion.div
        className="hidden lg:flex lg:w-1/2 justify-center items-center relative z-10"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: 0.3, duration: 0.9 }}
      >
        <div className="relative w-full max-w-[450px]">
          {/* Main Minimal Card */}
          <motion.div
            className="relative rounded-2xl p-16"
            style={{ 
              backgroundColor: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.08)'
            }}
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg width="100%" height="100%" viewBox="0 0 350 350">
              <defs>
                <linearGradient id="minimalGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: "#007BFF", stopOpacity: 0.9 }} />
                  <stop offset="100%" style={{ stopColor: "#80C8F7", stopOpacity: 0.9 }} />
                </linearGradient>
                <linearGradient id="minimalGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: "#FF7F00", stopOpacity: 0.9 }} />
                  <stop offset="100%" style={{ stopColor: "#FFCD00", stopOpacity: 0.9 }} />
                </linearGradient>
              </defs>
              
              <g transform="translate(175, 175)">
                {/* Minimal Robot Head */}
                <motion.g
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <rect x="-45" y="-90" width="90" height="70" rx="18" fill="url(#minimalGrad1)"/>
                  
                  {/* Antenna */}
                  <line x1="0" y1="-90" x2="0" y2="-110" stroke="#007BFF" strokeWidth="3"/>
                  <motion.circle 
                    cx="0" 
                    cy="-110" 
                    r="6" 
                    fill="#FF7F00"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  
                  {/* Minimal Eyes */}
                  <circle cx="-20" cy="-60" r="8" fill="#fff" opacity="0.9"/>
                  <circle cx="20" cy="-60" r="8" fill="#fff" opacity="0.9"/>
                  
                  {/* Smile */}
                  <path 
                    d="M -20,-35 Q 0,-25 20,-35" 
                    stroke="#FF7F00" 
                    strokeWidth="3" 
                    fill="none"
                    strokeLinecap="round"
                  />
                </motion.g>
                
                {/* Minimal Body */}
                <rect x="-50" y="-15" width="100" height="85" rx="18" fill="url(#minimalGrad1)" opacity="0.85"/>
                
                {/* Display Panel */}
                <rect x="-35" y="0" width="70" height="45" rx="8" fill="rgba(0, 0, 0, 0.3)"/>
                <motion.line 
                  x1="-25" y1="15" x2="20" y2="15" 
                  stroke="#007BFF" 
                  strokeWidth="2"
                  animate={{ x2: [-25, 20] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <line x1="-25" y1="25" x2="10" y2="25" stroke="#80C8F7" strokeWidth="2"/>
                <line x1="-25" y1="35" x2="25" y2="35" stroke="#FF7F00" strokeWidth="2"/>
                
                {/* Minimal Arms */}
                <rect x="-65" y="-5" width="12" height="50" rx="6" fill="url(#minimalGrad2)" opacity="0.8"/>
                <rect x="53" y="-5" width="12" height="50" rx="6" fill="url(#minimalGrad2)" opacity="0.8"/>
                
                {/* Minimal Legs */}
                <rect x="-35" y="70" width="20" height="40" rx="10" fill="url(#minimalGrad1)" opacity="0.85"/>
                <rect x="15" y="70" width="20" height="40" rx="10" fill="url(#minimalGrad1)" opacity="0.85"/>
                
                {/* Floating Badge */}
                <motion.g
                  animate={{ 
                    y: [-3, 3, -3],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <circle cx="85" cy="-40" r="18" fill="url(#minimalGrad2)" opacity="0.9"/>
                  <text x="77" y="-34" fontSize="16" fill="#fff" fontWeight="600">AI</text>
                </motion.g>
              </g>
            </svg>
          </motion.div>
        </div>
      </motion.div>

      {/* PDF Modal */}
      <AnimatePresence>
        {isPdfModalOpen && (
          <motion.div
            className="fixed inset-0 backdrop-blur-sm flex justify-center items-center z-50 p-4"
            style={{ backgroundColor: 'rgba(44, 44, 44, 0.95)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPdfModalOpen(false)}
          >
            <motion.div
              className="relative w-full max-w-5xl h-[90vh] bg-white rounded-xl shadow-2xl overflow-hidden"
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setPdfModalOpen(false)}
                className="absolute top-4 right-4 text-white p-2 rounded-lg hover:scale-105 transition-transform z-10"
                style={{ background: 'linear-gradient(135deg, #007BFF 0%, #FF7F00 100%)' }}
              >
                <X size={20} />
              </button>
              <iframe
                src="/brochure/b.pdf"
                className="w-full h-full"
                style={{ border: "none" }}
                title="PDF Viewer"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Welcome;