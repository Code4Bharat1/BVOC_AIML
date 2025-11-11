"use client";
import { Sparkles, Award, BookOpen, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

const HubHero = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Mobile Hero Section */}
      <div className="lg:hidden relative overflow-hidden bg-gradient-to-b from-white via-slate-50/30 to-blue-50/20">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(#94a3b8 1px, transparent 1px), linear-gradient(90deg, #94a3b8 1px, transparent 1px)`,
              backgroundSize: "48px 48px",
            }}
          ></div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: 5 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Soft Ambient Glows */}
        <motion.div
          className="absolute top-0 left-0 w-64 h-64 bg-blue-100/30 blur-[100px] rounded-full"
          animate={{
            scale: [1, 1.15, 1],
            x: [0, 15, 0],
            y: [0, -15, 0],
          }}
          transition={{ duration: 14, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-100/25 blur-[110px] rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -15, 0],
            y: [0, 15, 0],
          }}
          transition={{ duration: 16, repeat: Infinity }}
        />

        <div className="relative w-full min-h-[22rem] flex items-center justify-center text-center px-6 py-10">
          <div>
            <motion.div
              className="inline-flex items-center gap-2 mb-6 px-5 py-2 bg-white/80 border border-slate-200/60 rounded-full backdrop-blur-sm shadow-sm"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              </motion.div>
              <span className="text-blue-700 text-[10px] font-semibold tracking-[0.15em] uppercase">
                Next-Gen Education
              </span>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              </motion.div>
            </motion.div>

            <motion.h1
              className="text-3xl md:text-4xl font-bold leading-tight mb-4 text-slate-800"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              style={{ fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif" }}
            >
              <span>Bachelor's in</span>
              <br />
              <span className="text-blue-600">Machine Learning</span>
              <span> and</span>
              <br />
              <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                Artificial Intelligence
              </span>
            </motion.h1>
          </div>
        </div>
      </div>

      {/* Desktop Hero Section */}
      <div className="hidden lg:flex relative w-full min-h-screen items-center justify-center px-4 overflow-hidden bg-gradient-to-br from-white via-slate-50/20 to-blue-50/10">
        {/* Subtle Grid */}
        <div className="absolute inset-0 opacity-[0.025]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(#94a3b8 1px, transparent 1px), linear-gradient(90deg, #94a3b8 1px, transparent 1px)`,
              backgroundSize: "64px 64px",
            }}
          ></div>
        </div>

        {/* Ambient Light Effects */}
        <motion.div
          className="absolute top-20 -left-20 w-[500px] h-[500px] bg-blue-100/25 blur-[160px] rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 22, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-10 right-0 w-[550px] h-[550px] bg-indigo-100/20 blur-[180px] rounded-full"
          animate={{
            scale: [1, 1.25, 1],
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 24, repeat: Infinity }}
        />

        <div className="text-center max-w-6xl z-10">
          <motion.div
            className="inline-flex items-center gap-3 mb-10 px-7 py-2.5 bg-white/90 border border-slate-200/70 rounded-full backdrop-blur-sm shadow-sm"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-4 h-4 text-blue-600" />
            </motion.div>
            <span className="text-blue-700 text-xs font-semibold tracking-[0.15em] uppercase">
              Next-Generation Education
            </span>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-4 h-4 text-blue-600" />
            </motion.div>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.15] text-slate-800 mb-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            style={{ fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif" }}
          >
            <span>Bachelor's in</span>
            <br />
            <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-blue-700 bg-clip-text text-transparent">
              Artificial Intelligence
            </span>
            <br />
            <span>and </span>
            <span className="text-blue-600">Machine Learning</span>
          </motion.h1>
        </div>
      </div>

      {/* Accreditation Section */}
      <div className="relative bg-gradient-to-b from-white via-slate-50/30 to-white py-20 overflow-hidden border-t border-slate-100">
        {/* Soft Background Glow */}
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-blue-100/15 blur-[140px] rounded-full"
          animate={{ scale: [1, 1.2, 1], x: [0, 20, 0] }}
          transition={{ duration: 18, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-indigo-100/12 blur-[150px] rounded-full"
          animate={{ scale: [1, 1.25, 1], x: [0, -20, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="flex flex-col items-center gap-8 lg:flex-row lg:justify-center lg:gap-10 mb-14"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            {/* Logo Cards */}
            <div className="flex flex-wrap justify-center items-center gap-6">
              {[
                { src: "/approved.png", alt: "Approved" },
                { src: "/naac-logo-1.png", alt: "NAAC A+ Grade" },
                { src: "/ugc-logo.png", alt: "UGC Entitled" },
              ].map((logo, i) => (
                <motion.div
                  key={i}
                  className="bg-gray-500 border border-slate-200/60 shadow-sm rounded-2xl p-6 hover:shadow-md hover:border-slate-300/60 transition-all duration-300"
                  whileHover={{ scale: 1.03, y: -2 }}
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="w-40 h-20 object-contain opacity-90"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            viewport={{ once: true }}
          >
            <p className="text-2xl md:text-3xl mx-auto max-w-4xl font-semibold text-slate-800 leading-relaxed mb-6"
               style={{ fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif" }}>
              <span className="text-blue-600">
                Earn a prestigious AI & ML degree
              </span>
              <br />
              <span>from one of India's top 2%</span>
              <br />
              <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
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
                { icon: <Award className="w-4 h-4" />, text: "NAAC A+ Accredited", color: "#2563eb" },
                { icon: <BookOpen className="w-4 h-4" />, text: "UGC Recognized", color: "#4f46e5" },
                { icon: <GraduationCap className="w-4 h-4" />, text: "Industry-Ready", color: "#3b82f6" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="flex  items-center gap-2.5 px-5 py-2.5 bg-white border border-slate-200/70 rounded-full shadow-sm hover:shadow-md hover:border-slate-300/70 transition-all duration-300"
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