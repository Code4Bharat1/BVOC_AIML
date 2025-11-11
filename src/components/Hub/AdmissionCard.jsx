"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, GraduationCap, Rocket, ArrowRight } from "lucide-react";

const AdmissionCard = () => {
  return (
    <div className="flex w-full justify-center items-center min-h-screen px-4 py-10 relative overflow-hidden bg-white">
      {/* Subtle Grid Lines */}
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

      {/* Very Soft Ambient Glows */}
      <motion.div 
        className="absolute top-20 left-10 w-96 h-96 bg-blue-100/15 rounded-full blur-[180px]"
        animate={{ 
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
          y: [0, -30, 0]
        }}
        transition={{ duration: 20, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-indigo-100/12 rounded-full blur-[160px]"
        animate={{ 
          scale: [1, 1.25, 1],
          x: [0, -30, 0],
          y: [0, 30, 0]
        }}
        transition={{ duration: 22, repeat: Infinity }}
      />

      <motion.div 
        className="relative lg:py-16 border border-slate-200 bg-white text-slate-900 text-center rounded-3xl p-8 lg:p-10 w-[90%] shadow-xl pb-32 lg:pb-10 overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        {/* Card Grid Lines */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(#cbd5e1 1px, transparent 1px),
                linear-gradient(90deg, #cbd5e1 1px, transparent 1px)
              `,
              backgroundSize: "50px 50px",
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

        {/* Subtle Glowing Orbs */}
        <motion.div 
          className="absolute top-0 left-0 w-64 h-64 bg-blue-100/20 rounded-full blur-[120px]"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 25, 0],
            y: [0, -25, 0]
          }}
          transition={{ duration: 16, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-100/15 rounded-full blur-[130px]"
          animate={{ 
            scale: [1, 1.25, 1],
            x: [0, -25, 0],
            y: [0, 25, 0]
          }}
          transition={{ duration: 18, repeat: Infinity }}
        />

        {/* Badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-5 py-2 mb-6 rounded-full bg-blue-50/80 border border-blue-200/50 backdrop-blur-sm shadow-sm"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Sparkles className="w-4 h-4 text-blue-600" />
          <span className="text-blue-700 text-xs font-semibold tracking-[0.12em] uppercase">Limited Seats Available</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h2 
          className="text-3xl lg:text-5xl font-bold mb-6 text-blue-600"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          style={{ fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif" }}
        >
          Admissions Now Open!
        </motion.h2>

        {/* Description */}
        <motion.p 
          className="text-base lg:text-2xl font-normal mb-8 text-slate-700 max-w-4xl mx-auto relative z-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          style={{ fontFamily: "'Inter', -apple-system, system-ui, sans-serif" }}
        >
          Step into the future with a{" "}
          <span className="text-blue-700 font-semibold">NAAC A+</span> Accredited
          program and gain the edge with a{" "}
          <span className="text-indigo-700 font-semibold">UGC-approved Bachelor's</span>{" "}
          in AI & ML — crafted to prepare you for the real world.
        </motion.p>

        {/* Subheading */}
        <motion.h3 
          className="text-xl lg:text-3xl font-semibold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          style={{ fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif" }}
        >
          A Unique Blend of Industry & Academia
        </motion.h3>

        <motion.p 
          className="text-slate-600 mb-10 text-base lg:text-xl max-w-3xl mx-auto relative z-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          style={{ fontFamily: "'Inter', -apple-system, system-ui, sans-serif" }}
        >
          Join a course that goes beyond theory — experience practical, hands-on
          learning in collaboration with top industry leaders.
        </motion.p>

        {/* Feature Pills */}
        <motion.div
          className="flex flex-wrap gap-4 mb-10 justify-center relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          viewport={{ once: true }}
        >
          {[
            { icon: GraduationCap, text: "NAAC A+ Accredited", color: "#2563eb" },
            { icon: Sparkles, text: "Industry Ready", color: "#4f46e5" },
            { icon: Rocket, text: "Career Focused", color: "#3b82f6" }
          ].map((item, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-slate-200 backdrop-blur-sm shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <item.icon className="w-4 h-4" style={{ color: item.color }} />
              <span className="text-sm text-slate-800 font-medium">{item.text}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="group relative px-10 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl font-semibold text-base text-white overflow-hidden shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 transition-shadow duration-300 z-10"
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 flex items-center gap-2 justify-center">
              Book Admission Slot
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
    </div>
  );
};

export default AdmissionCard;