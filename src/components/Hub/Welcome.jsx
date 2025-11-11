"use client";
import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X, Sparkles, Zap, Rocket, ArrowRight } from "lucide-react";

const Welcome = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [isPdfModalOpen, setPdfModalOpen] = useState(false);

  return (
    <section
      ref={ref}
      className="relative lg:mt-0 py-24 px-6 lg:px-24 flex flex-col lg:flex-row items-center gap-16 overflow-hidden bg-white"
    >
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 opacity-[0.015]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#cbd5e1 1px, transparent 1px), linear-gradient(90deg, #cbd5e1 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-300/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Very Soft Ambient Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full blur-[180px]"
          style={{
            background: "radial-gradient(circle, rgba(59,130,246,0.04) 0%, transparent 70%)",
            top: "-10%",
            left: "-10%",
          }}
          animate={{ 
            scale: [1, 1.15, 1],
            x: [0, 40, 0],
            y: [0, -40, 0]
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-[450px] h-[450px] rounded-full blur-[160px]"
          style={{
            background: "radial-gradient(circle, rgba(99,102,241,0.03) 0%, transparent 70%)",
            bottom: "-10%",
            right: "-5%",
          }}
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, -40, 0],
            y: [0, 40, 0]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Text Section */}
      <motion.div
        className="relative z-10 lg:w-1/2 text-center lg:text-left"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* Badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-5 py-2 mb-6 rounded-full bg-blue-50/60 border border-blue-100 backdrop-blur-sm shadow-sm"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          <Sparkles className="w-4 h-4 text-blue-600" />
          <span className="text-blue-700 text-xs font-semibold tracking-[0.12em] uppercase">Future of Education</span>
        </motion.div>

        <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-[1.15]" style={{ fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif" }}>
          <span className="text-slate-900">Welcome to</span>
          <br />
          <span className="text-slate-900">the Future of</span>
          <br />
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">
              Learning
            </span>
            <motion.div
              className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-600 rounded-full"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.8, duration: 0.8 }}
            />
          </span>
        </h1>

        <motion.p
          className="text-slate-700 mb-10 leading-relaxed text-base lg:text-lg max-w-2xl"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.7 }}
          style={{ fontFamily: "'Inter', -apple-system, system-ui, sans-serif" }}
        >
          We're excited to announce a strategic partnership with{" "}
          <span className="text-blue-700 font-semibold">Nexcore Alliance LLP</span>, empowering the launch of{" "}
          <span className="text-indigo-700 font-semibold">B.Voc</span> degree programs that seamlessly integrate industry expertise with academic excellence.
        </motion.p>

        {/* Feature Pills */}
        <motion.div
          className="flex flex-wrap gap-3 mb-10 justify-center lg:justify-start"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
        >
          {[
            { icon: Zap, text: "Industry Ready", color: "#2563eb" },
            { icon: Rocket, text: "Future Skills", color: "#4f46e5" },
            { icon: Sparkles, text: "AI Powered", color: "#3b82f6" }
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 backdrop-blur-sm shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300"
            >
              <item.icon className="w-4 h-4" style={{ color: item.color }} />
              <span className="text-sm text-slate-800 font-medium">{item.text}</span>
            </div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
        >
          <motion.button
            className="group relative px-10 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl font-semibold text-base text-white overflow-hidden shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 transition-shadow duration-300"
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 flex items-center gap-2 justify-center">
              Enroll Now
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-4 h-4" />
              </motion.span>
            </span>
            
            {/* Shimmer Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1.5 }}
            />
          </motion.button>
        </motion.div>
      </motion.div>

      {/* 3D Illustration Section */}
      <motion.div
        className="hidden lg:flex lg:w-1/2 justify-center items-center relative z-10"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: 0.4, duration: 0.9 }}
      >
        <div className="relative w-full max-w-[500px]">
          {/* Floating Cards */}
          <motion.div
            className="absolute -left-20 top-20 w-32 h-32 bg-white rounded-2xl backdrop-blur-sm border border-slate-100 p-4 rotate-12 shadow-lg"
            animate={{ 
              y: [0, -20, 0],
              rotate: [12, 18, 12]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <div className="text-4xl">🎓</div>
          </motion.div>

          <motion.div
            className="absolute -right-16 top-40 w-28 h-28 bg-white rounded-2xl backdrop-blur-sm border border-slate-100 p-4 -rotate-12 shadow-lg"
            animate={{ 
              y: [0, 20, 0],
              rotate: [-12, -18, -12]
            }}
            transition={{ duration: 3.5, repeat: Infinity }}
          >
            <div className="text-4xl">🚀</div>
          </motion.div>

          <motion.div
            className="absolute left-10 bottom-10 w-24 h-24 bg-white rounded-2xl backdrop-blur-sm border border-slate-100 p-4 rotate-6 shadow-lg"
            animate={{ 
              y: [0, -15, 0],
              rotate: [6, 12, 6]
            }}
            transition={{ duration: 4.5, repeat: Infinity }}
          >
            <div className="text-3xl">⚡</div>
          </motion.div>

          {/* Main Card */}
          <motion.div
            className="relative bg-white backdrop-blur-xl rounded-3xl p-12 border border-slate-100 shadow-xl"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 via-transparent to-indigo-50/15 rounded-3xl" />
            
            <svg width="100%" height="100%" viewBox="0 0 400 400" className="drop-shadow-lg">
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: "#3b82f6", stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: "#2563eb", stopOpacity: 1 }} />
                </linearGradient>
                <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: "#6366f1", stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: "#4f46e5", stopOpacity: 1 }} />
                </linearGradient>
              </defs>
              
              <g transform="translate(200, 200)">
                {/* Robot Head */}
                <motion.g
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <rect x="-50" y="-100" width="100" height="80" rx="20" fill="url(#grad1)" opacity="0.95"/>
                  
                  {/* Antenna */}
                  <line x1="0" y1="-100" x2="0" y2="-125" stroke="#3b82f6" strokeWidth="4"/>
                  <motion.circle 
                    cx="0" 
                    cy="-125" 
                    r="8" 
                    fill="url(#grad2)"
                    animate={{ scale: [1, 1.4, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  
                  {/* Eyes */}
                  <motion.g
                    animate={{ scaleY: [1, 0.1, 1] }}
                    transition={{ duration: 4, repeat: Infinity, repeatDelay: 2 }}
                  >
                    <circle cx="-25" cy="-65" r="12" fill="#3b82f6"/>
                    <circle cx="25" cy="-65" r="12" fill="#3b82f6"/>
                    <circle cx="-25" cy="-65" r="6" fill="#fff"/>
                    <circle cx="25" cy="-65" r="6" fill="#fff"/>
                  </motion.g>
                  
                  {/* Smile */}
                  <path 
                    d="M -25,-40 Q 0,-25 25,-40" 
                    stroke="#3b82f6" 
                    strokeWidth="4" 
                    fill="none"
                    strokeLinecap="round"
                  />
                </motion.g>
                
                {/* Body */}
                <rect x="-60" y="-15" width="120" height="100" rx="20" fill="url(#grad1)" opacity="0.9"/>
                
                {/* Display Panel */}
                <rect x="-40" y="5" width="80" height="50" rx="10" fill="#1e293b"/>
                <g>
                  <motion.line 
                    x1="-30" y1="20" x2="25" y2="20" 
                    stroke="#3b82f6" 
                    strokeWidth="3"
                    animate={{ x2: [-30, 25] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <line x1="-30" y1="33" x2="15" y2="33" stroke="#6366f1" strokeWidth="3"/>
                  <line x1="-30" y1="46" x2="30" y2="46" stroke="#4f46e5" strokeWidth="3"/>
                </g>
                
                {/* Arms */}
                <motion.g
                  animate={{ rotate: [0, 10, 0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  style={{ transformOrigin: "-75px 20px" }}
                >
                  <rect x="-80" y="0" width="15" height="60" rx="8" fill="url(#grad2)"/>
                  <circle cx="-72" cy="65" r="10" fill="#3b82f6"/>
                </motion.g>
                
                <motion.g
                  animate={{ rotate: [0, -10, 0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  style={{ transformOrigin: "75px 20px" }}
                >
                  <rect x="65" y="0" width="15" height="60" rx="8" fill="url(#grad2)"/>
                  <circle cx="72" cy="65" r="10" fill="#3b82f6"/>
                </motion.g>
                
                {/* Legs */}
                <g>
                  <rect x="-40" y="85" width="25" height="45" rx="12" fill="url(#grad1)"/>
                  <rect x="-40" y="130" width="28" height="12" rx="6" fill="#3b82f6"/>
                  
                  <rect x="15" y="85" width="25" height="45" rx="12" fill="url(#grad1)"/>
                  <rect x="12" y="130" width="28" height="12" rx="6" fill="#3b82f6"/>
                </g>
                
                {/* Floating Elements */}
                <motion.g
                  animate={{ 
                    y: [-5, 5, -5],
                    rotate: [0, 10, 0]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <circle cx="100" cy="-50" r="15" fill="url(#grad2)" opacity="0.7"/>
                  <text x="93" y="-42" fontSize="18" fill="#fff" fontWeight="600">AI</text>
                </motion.g>
                
                <motion.g
                  animate={{ 
                    y: [5, -5, 5],
                    rotate: [0, -10, 0]
                  }}
                  transition={{ duration: 3.5, repeat: Infinity }}
                >
                  <circle cx="-100" cy="50" r="15" fill="url(#grad1)" opacity="0.7"/>
                  <text x="-111" y="57" fontSize="17" fill="#fff" fontWeight="600">ML</text>
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
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-md flex justify-center items-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPdfModalOpen(false)}
          >
            <motion.div
              className="relative w-full max-w-5xl h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden"
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setPdfModalOpen(false)}
                className="absolute -top-3 -right-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform z-10"
              >
                <X size={18} />
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