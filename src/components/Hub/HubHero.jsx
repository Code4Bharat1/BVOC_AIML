"use client";
import { useState } from "react";
import { Sparkles, Award, BookOpen, GraduationCap, Brain, Code, Shield, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const degrees = [
  {
    id: 1,
    name: "Artificial Intelligence & Machine Learning",
    shortName: "AI & ML",
    icon: Brain,
    gradient: "from-[#007BFF] via-[#FF7F00] to-[#FFCD00]",
    color: "#007BFF"
  },
  {
    id: 2,
    name: "Computer Science",
    shortName: "Computer Science",
    icon: Code,
    gradient: "from-[#FF7F00] via-[#007BFF] to-[#80C8F7]",
    color: "#FF7F00"
  },
  {
    id: 3,
    name: "Cyber Security",
    shortName: "Cyber Security",
    icon: Shield,
    gradient: "from-[#007BFF] via-[#80C8F7] to-[#FF7F00]",
    color: "#007BFF"
  }
];

const HubHero = () => {
  const [activeDegree, setActiveDegree] = useState(0);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Mobile Hero Section */}
      <div className="lg:hidden relative overflow-hidden bg-gradient-to-b from-[#2C2C2C] via-[#2C2C2C] to-[#1a1a1a]">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-20"
          >
            <source src="/homevideo/hero.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[#2C2C2C]/80 via-[#2C2C2C]/60 to-[#2C2C2C]/90"></div>
        </div>

        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.08]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(#007BFF 1px, transparent 1px), linear-gradient(90deg, #007BFF 1px, transparent 1px)`,
              backgroundSize: "48px 48px",
            }}
          ></div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-1.5 h-1.5 rounded-full ${
                i % 3 === 0 ? "bg-[#007BFF]/40" : i % 3 === 1 ? "bg-[#FF7F00]/40" : "bg-[#FF5733]/40"
              }`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -40, 0],
                opacity: [0, 0.8, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Soft Ambient Glows */}
        <motion.div
          className="absolute top-0 left-0 w-72 h-72 bg-[#007BFF]/25 blur-[100px] rounded-full"
          animate={{
            scale: [1, 1.15, 1],
            x: [0, 15, 0],
            y: [0, -15, 0],
          }}
          transition={{ duration: 14, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-80 h-80 bg-[#FF7F00]/20 blur-[110px] rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -15, 0],
            y: [0, 15, 0],
          }}
          transition={{ duration: 16, repeat: Infinity }}
        />

        <div className="relative w-full min-h-[28rem] flex items-center justify-center text-center px-6 py-10">
          <div className="w-full">
            <motion.h1
              className="text-3xl md:text-4xl font-bold leading-tight mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              style={{ fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif" }}
            >
              <span>Bachelor's Degree in</span>
            </motion.h1>

            {/* Mobile Degree Selector */}
            <div className="space-y-3 max-w-md mx-auto">
              {degrees.map((degree, index) => {
                const Icon = degree.icon;
                return (
                  <motion.button
                    key={degree.id}
                    onClick={() => setActiveDegree(index)}
                    className={`w-full p-4 rounded-xl border-2 transition-all duration-300 ${
                      activeDegree === index
                        ? "border-[#007BFF] bg-[#007BFF]/10 shadow-lg shadow-[#007BFF]/20"
                        : "border-[#3a3a3a] bg-[#1a1a1a]/80 hover:border-[#007BFF]/50"
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${activeDegree === index ? "bg-[#007BFF]" : "bg-[#3a3a3a]"}`}>
                        <Icon className={`w-5 h-5 ${activeDegree === index ? "text-white" : "text-[#80C8F7]"}`} />
                      </div>
                      <span className={`text-left font-semibold ${activeDegree === index ? "text-white" : "text-[#80C8F7]"}`}>
                        {degree.shortName}
                      </span>
                      <ChevronRight className={`w-5 h-5 ml-auto ${activeDegree === index ? "text-[#007BFF]" : "text-[#666]"}`} />
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Hero Section */}
      <div className="hidden lg:flex relative w-full min-h-screen items-center justify-center px-4 overflow-hidden bg-gradient-to-br from-[#2C2C2C] via-[#1a1a1a] to-[#2C2C2C]">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-25"
          >
            <source src="/homevideo/hero.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-[#2C2C2C]/50 via-transparent to-[#2C2C2C]/50"></div>
        </div>

        {/* Subtle Grid */}
        <div className="absolute inset-0 opacity-[0.08]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(#007BFF 1px, transparent 1px), linear-gradient(90deg, #007BFF 1px, transparent 1px)`,
              backgroundSize: "64px 64px",
            }}
          ></div>
        </div>

        {/* Ambient Light Effects */}
        <motion.div
          className="absolute top-20 -left-20 w-[500px] h-[500px] bg-[#007BFF]/20 blur-[160px] rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 22, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-10 right-0 w-[550px] h-[550px] bg-[#FF7F00]/15 blur-[180px] rounded-full"
          animate={{
            scale: [1, 1.25, 1],
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 24, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#80C8F7]/10 blur-[140px] rounded-full"
          animate={{
            scale: [1, 1.15, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 26, repeat: Infinity }}
        />

        <div className="text-center max-w-6xl z-10">
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.15] text-white mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            style={{ fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif" }}
          >
            <span>Bachelor's Degree in</span>
          </motion.h1>

          {/* Desktop Degree Selector */}
          <div className="flex justify-center gap-4 max-w-5xl mx-auto">
            {degrees.map((degree, index) => {
              const Icon = degree.icon;
              return (
                <motion.button
                  key={degree.id}
                  onClick={() => setActiveDegree(index)}
                  className={`flex-1 p-6 rounded-2xl border-2 transition-all duration-300 ${
                    activeDegree === index
                      ? "border-[#007BFF] bg-[#007BFF]/10 shadow-xl shadow-[#007BFF]/20"
                      : "border-[#3a3a3a] bg-[#1a1a1a]/90 hover:border-[#007BFF]/50 hover:shadow-lg hover:shadow-[#007BFF]/10"
                  }`}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.03, y: -4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex flex-col items-center gap-4">
                    <motion.div 
                      className={`p-4 rounded-xl ${activeDegree === index ? "bg-[#007BFF]" : "bg-[#3a3a3a]"}`}
                      animate={activeDegree === index ? { rotate: [0, 5, -5, 0] } : {}}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Icon className={`w-8 h-8 ${activeDegree === index ? "text-white" : "text-[#80C8F7]"}`} />
                    </motion.div>
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={degree.name}
                        className={`text-xl font-bold text-center ${
                          activeDegree === index 
                            ? `bg-gradient-to-r ${degree.gradient} bg-clip-text text-transparent` 
                            : "text-[#80C8F7]"
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
      <div className="relative bg-gradient-to-b from-white via-slate-50/30 to-white py-20 overflow-hidden border-t border-slate-100">
        {/* Soft Background Glow */}
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-[#007BFF]/15 blur-[140px] rounded-full"
          animate={{ scale: [1, 1.2, 1], x: [0, 20, 0] }}
          transition={{ duration: 18, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-[#FF7F00]/12 blur-[150px] rounded-full"
          animate={{ scale: [1, 1.25, 1], x: [0, -20, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#FFCD00]/8 blur-[130px] rounded-full"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 16, repeat: Infinity }}
        />

        <div className="container mx-auto px-4 relative z-10">
       

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            viewport={{ once: true }}
          >
            <p className="text-2xl md:text-3xl mx-auto max-w-4xl font-semibold text-slate-800 leading-relaxed mb-6"
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
              className="flex flex-wrap justify-center gap-4 mt-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {[
                { icon: <Award className="w-4 h-4" />, text: "NAAC A+ Accredited", color: "#007BFF" },
                { icon: <BookOpen className="w-4 h-4" />, text: "UGC Recognized", color: "#FF7F00" },
                { icon: <GraduationCap className="w-4 h-4" />, text: "Industry-Ready", color: "#FFCD00" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-2.5 px-5 py-2.5 bg-white border border-slate-200/70 rounded-full shadow-sm hover:shadow-md hover:border-[#007BFF]/30 transition-all duration-300"
                  whileHover={{ scale: 1.04, y: -1 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <motion.div
                    style={{ color: stat.color }}
                    animate={{ rotate: [0, 8, -8, 0] }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      delay: index * 0.4,
                    }}
                  >
                    {stat.icon}
                  </motion.div>
                  <span className="text-sm text-slate-700 font-medium">
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