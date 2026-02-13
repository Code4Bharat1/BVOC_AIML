"use client";
import { useState } from "react";
import { Award, BookOpen, GraduationCap, Brain, Code, Shield, Palette } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBrain, FaPalette } from "react-icons/fa";

 const degrees = [
    {
      name: "Bachelor of Data Science and Artificial Intelligence",
      icon: FaBrain,
      color: "text-slate-400",
    },
    {
      name: "Bachelor of Multimedia and Animation",
      icon: FaPalette,
      color: "text-slate-400",
    },
  ];

const HubHero = () => {
  const [activeDegree, setActiveDegree] = useState(1);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Mobile Hero Section */}
      <div className="lg:hidden relative overflow-hidden bg-gradient-to-b from-[#1a1a1a] via-[#252525] to-[#1a1a1a]">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-90"
          >
            <source src="/homevideo/hero.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/90 via-[#252525]/85 to-[#1a1a1a]/90"></div>
        </div>

        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(#007BFF 1px, transparent 1px), linear-gradient(90deg, #007BFF 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>

        {/* Ambient Glow */}
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#007BFF]/10 blur-[120px] rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />

        <div className="relative w-full min-h-[32rem] flex items-center justify-center text-center px-5 py-12">
          <div className="w-full">
            {/* 3 Year Badge - Mobile */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center mb-6"
            >
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#007BFF]/15 border border-[#007BFF]/30 backdrop-blur-sm">
                <GraduationCap className="w-4 h-4 text-[#007BFF]" />
                <span className="text-sm font-semibold text-[#80C8F7]">
                  3 Year Degree Programs
                </span>
              </div>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl font-bold leading-tight mb-10 text-white tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{ fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif" }}
            >
              Bachelor's Degree in
            </motion.h1>

            {/* Mobile Degree Selector */}
            <div className="space-y-3 max-w-sm mx-auto">
              {degrees.map((degree, index) => {
                const Icon = degree.icon;
                const isActive = activeDegree === index;
                return (
                  <motion.button
                    key={degree.id}
                    onClick={() => setActiveDegree(index)}
                    className={`w-full p-5 rounded-2xl border-2 transition-all duration-300 ${
                      isActive
                        ? "border-[#007BFF] bg-[#007BFF]/8 shadow-2xl shadow-[#007BFF]/25"
                        : "border-[#333]/50 bg-[#1a1a1a]/60 hover:border-[#444]/70 backdrop-blur-sm"
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.08 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-xl transition-all duration-300 ${
                        isActive 
                          ? "bg-[#007BFF] shadow-lg shadow-[#007BFF]/30" 
                          : "bg-[#2a2a2a]"
                      }`}>
                        <Icon className={`w-6 h-6 ${isActive ? "text-white" : "text-[#6B9BD1]"}`} />
                      </div>
                      <span className={`text-left font-semibold text-base ${
                        isActive ? "text-white" : "text-[#9CB4D8]"
                      }`}>
                        {degree.shortName}
                      </span>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Hero Section */}
      <div className="hidden lg:flex relative w-full min-h-screen items-center justify-center px-6 overflow-hidden bg-gradient-to-br from-[#1a1a1a] via-[#252525] to-[#1a1a1a]">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-90"
          >
            <source src="/homevideo/hero.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a]/70 via-[#252525]/60 to-[#1a1a1a]/80"></div>
        </div>

        {/* Minimal Grid */}
        <div className="absolute inset-0 opacity-[0.025]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(#007BFF 1px, transparent 1px), linear-gradient(90deg, #007BFF 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          ></div>
        </div>

        {/* Soft Ambient Glow */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#007BFF]/8 blur-[200px] rounded-full"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{ duration: 12, repeat: Infinity }}
        />

        <div className="text-center max-w-7xl z-10">
          {/* 3 Year Badge - Desktop */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-8"
          >
            <div className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#007BFF]/15 border border-[#007BFF]/30 backdrop-blur-md shadow-lg shadow-[#007BFF]/10">
              <GraduationCap className="w-5 h-5 text-[#007BFF]" />
              <span className="text-base font-semibold text-[#80C8F7] tracking-wide">
                3 Year Degree Programs
              </span>
            </div>
          </motion.div>

          <motion.h1
            className="text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1] text-white mb-16 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif" }}
          >
            Bachelor's Degree in
          </motion.h1>

          {/* Desktop Degree Selector */}
          <div className="flex justify-center gap-5 max-w-6xl mx-auto px-4">
            {degrees.map((degree, index) => {
              const Icon = degree.icon;
              const isActive = activeDegree === index;
              return (
                <motion.button
                  key={degree.id}
                  onClick={() => setActiveDegree(index)}
                  className={`flex-1 p-8 rounded-3xl border-2 transition-all duration-300 backdrop-blur-sm ${
                    isActive
                      ? "border-[#007BFF] bg-[#007BFF]/10 shadow-2xl shadow-[#007BFF]/30"
                      : "border-[#333]/60 bg-[#1a1a1a]/70 hover:border-[#444]/80 hover:bg-[#222]/80"
                  }`}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.08 }}
                  whileHover={{ scale: isActive ? 1.02 : 1.03, y: -4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex flex-col items-center gap-5">
                    <motion.div 
                      className={`p-5 rounded-2xl transition-all duration-300 ${
                        isActive 
                          ? "bg-[#007BFF] shadow-xl shadow-[#007BFF]/40" 
                          : "bg-[#2a2a2a]"
                      }`}
                      animate={isActive ? { 
                        scale: [1, 1.05, 1],
                      } : {}}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Icon className={`w-10 h-10 ${isActive ? "text-white" : "text-[#6B9BD1]"}`} />
                    </motion.div>
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={degree.name}
                        className={`text-xl font-bold text-center leading-tight transition-all duration-300 ${
                          isActive 
                            ? "text-white" 
                            : "text-[#9CB4D8]"
                        }`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        {degree.name}
                      </motion.span>
                    </AnimatePresence>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Accreditation Section */}
      <div className="relative bg-gradient-to-b from-white via-slate-50/40 to-white py-5 overflow-hidden border-t border-slate-100">
        {/* Soft Background Glow */}
        <motion.div
          className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#007BFF]/8 blur-[160px] rounded-full"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 16, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-[550px] h-[550px] bg-[#FF7F00]/6 blur-[170px] rounded-full"
          animate={{ 
            scale: [1, 1.25, 1],
            x: [0, -30, 0],
            opacity: [0.25, 0.45, 0.25]
          }}
          transition={{ duration: 18, repeat: Infinity }}
        />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <p className="text-3xl md:text-4xl mx-auto max-w-4xl font-bold text-slate-800 leading-relaxed mb-8"
               style={{ fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif" }}>
              <span className="text-[#007BFF]">
                Earn a prestigious degree
              </span>
              <br />
              <span>from one of India's top 2%</span>
              <br />
              <span className="bg-gradient-to-r from-[#007BFF] via-[#FF7F00] to-[#FFCD00] bg-clip-text text-transparent">
                Ranking University
              </span>
            </p>

            <motion.div
              className="flex flex-wrap justify-center gap-4 mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              viewport={{ once: true }}
            >
              {[
                { icon: <Award className="w-5 h-5" />, text: "NAAC A+ Accredited", color: "#007BFF" },
                { icon: <BookOpen className="w-5 h-5" />, text: "UGC Recognized", color: "#FF7F00" },
                { icon: <GraduationCap className="w-5 h-5" />, text: "Industry-Ready", color: "#FFCD00" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 px-6 py-3 bg-white border border-slate-200/80 rounded-full shadow-sm hover:shadow-lg hover:border-[#007BFF]/40 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <motion.div
                    style={{ color: stat.color }}
                    animate={{ 
                      rotate: [0, 8, -8, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                  >
                    {stat.icon}
                  </motion.div>
                  <span className="text-base text-slate-700 font-semibold">
                    {stat.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HubHero;