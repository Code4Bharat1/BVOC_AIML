"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, GraduationCap, Rocket, ArrowRight, Brain, Code, Shield } from "lucide-react";
import Link from "next/link";
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

const AdmissionCard = () => {
  return (
    <div className="flex w-full justify-center items-center min-h-screen px-4 py-10 relative overflow-hidden" style={{ backgroundColor: '#ffffff' }}>
      {/* Grid Lines with Brand Blue */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(#007BFF 1px, transparent 1px),
              linear-gradient(90deg, #007BFF 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      {/* Ambient Glows with Brand Colors */}
      <motion.div 
        className="absolute top-20 left-10 w-96 h-96 rounded-full blur-[180px]"
        style={{ backgroundColor: 'rgba(0, 123, 255, 0.15)' }}
        animate={{ 
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
          y: [0, -30, 0]
        }}
        transition={{ duration: 20, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-10 right-10 w-[450px] h-[450px] rounded-full blur-[160px]"
        style={{ backgroundColor: 'rgba(255, 127, 0, 0.12)' }}
        animate={{ 
          scale: [1, 1.25, 1],
          x: [0, -30, 0],
          y: [0, 30, 0]
        }}
        transition={{ duration: 22, repeat: Infinity }}
      />

      <motion.div 
        className="relative lg:py-16 bg-white text-slate-900 text-center rounded-3xl p-8 lg:p-10 w-[90%] pb-32 lg:pb-10 overflow-hidden"
        style={{ 
          border: '1px solid #007BFF',
          boxShadow: '0 20px 50px rgba(0, 123, 255, 0.25), 0 0 40px rgba(255, 127, 0, 0.15)'
        }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        {/* Card Grid Lines with Brand Blue */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(#007BFF 1px, transparent 1px),
                linear-gradient(90deg, #007BFF 1px, transparent 1px)
              `,
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>

        {/* Floating Particles with Brand Colors */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1.5 h-1.5 rounded-full"
              style={{
                backgroundColor: i % 3 === 0 ? '#007BFF' : i % 3 === 1 ? '#FF7F00' : '#FF5733',
                opacity: 0.4,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Glowing Orbs with Brand Colors */}
        <motion.div 
          className="absolute top-0 left-0 w-64 h-64 rounded-full blur-[120px]"
          style={{ backgroundColor: 'rgba(0, 123, 255, 0.2)' }}
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 25, 0],
            y: [0, -25, 0]
          }}
          transition={{ duration: 16, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-0 right-0 w-72 h-72 rounded-full blur-[130px]"
          style={{ backgroundColor: 'rgba(255, 127, 0, 0.15)' }}
          animate={{ 
            scale: [1, 1.25, 1],
            x: [0, -25, 0],
            y: [0, 25, 0]
          }}
          transition={{ duration: 18, repeat: Infinity }}
        />

        {/* Badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-5 py-2 mb-6 rounded-full backdrop-blur-sm shadow-sm"
          style={{ 
            backgroundColor: 'rgba(255, 205, 0, 0.15)',
            border: '1px solid rgba(255, 205, 0, 0.4)'
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Sparkles className="w-4 h-4" style={{ color: '#FF7F00' }} />
          <span className="text-xs font-semibold tracking-[0.12em] uppercase" style={{ color: '#FF7F00' }}>Limited Seats Available</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h2 
          className="text-3xl lg:text-5xl font-bold mb-6"
          style={{ 
            background: 'linear-gradient(135deg, #007BFF 0%, #80C8F7 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif"
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
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
          <span className="font-semibold" style={{ color: '#007BFF' }}>NAAC A+</span> Accredited
          program and gain the edge with a{" "}
          <span className="font-semibold" style={{ color: '#FF7F00' }}>UGC-approved Bachelor's</span>{" "}
          in AI & ML — crafted to prepare you for the real world.
        </motion.p>

        {/* Available Programs Section */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="text-xs mb-4 text-slate-500 font-semibold tracking-wider uppercase">
            Available Programs
          </div>
          <div className="flex flex-wrap gap-3 justify-center">
            {degrees.map((degree, i) => (
              <motion.div
                key={degree.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white shadow-sm"
                style={{
                  border: `1.5px solid ${degree.color}40`,
                }}
              >
                <degree.icon className="w-4 h-4" style={{ color: degree.color }} />
                <span className="text-sm font-semibold text-slate-800">{degree.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Subheading */}
        <motion.h3 
          className="text-xl lg:text-3xl font-semibold mb-4 relative z-10"
          style={{
            background: 'linear-gradient(135deg, #FF7F00 0%, #FFCD00 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif"
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          viewport={{ once: true }}
        >
          A Unique Blend of Industry & Academia
        </motion.h3>

        <motion.p 
          className="text-slate-600 mb-10 text-base lg:text-xl max-w-3xl mx-auto relative z-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
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
          transition={{ delay: 1.1 }}
          viewport={{ once: true }}
        >
          {[
            { icon: GraduationCap, text: "NAAC A+ Accredited", color: "#007BFF" },
            { icon: Sparkles, text: "Industry Ready", color: "#FF7F00" },
            { icon: Rocket, text: "Career Focused", color: "#80C8F7" }
          ].map((item, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-2 px-5 py-2 rounded-full bg-white backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300"
              style={{ 
                border: `1px solid ${item.color}40`,
              }}
              whileHover={{ 
                scale: 1.05, 
                y: -2,
                boxShadow: `0 8px 20px ${item.color}30`
              }}
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
  transition={{ delay: 1.2 }}
  viewport={{ once: true }}
>
  <Link href="/contact">
    <motion.button
      className="group relative px-10 py-4 rounded-xl font-semibold text-base text-white overflow-hidden z-10"
      style={{
        background: "linear-gradient(135deg, #007BFF 0%, #FF7F00 100%)",
        boxShadow:
          "0 10px 30px rgba(0, 123, 255, 0.3), 0 5px 15px rgba(255, 127, 0, 0.2)",
      }}
      whileHover={{
        scale: 1.03,
        y: -1,
        boxShadow:
          "0 15px 40px rgba(0, 123, 255, 0.4), 0 8px 20px rgba(255, 127, 0, 0.3)",
      }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Hover Gradient */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: "linear-gradient(135deg, #FF7F00 0%, #007BFF 100%)",
        }}
      />

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
  </Link>
</motion.div>
      </motion.div>
    </div>
  );
};

export default AdmissionCard;