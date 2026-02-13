"use client";
import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X, ArrowRight, CheckCircle, Award, Users, Briefcase } from "lucide-react";
import Link from "next/link";

const Welcome = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isPdfModalOpen, setPdfModalOpen] = useState(false);

  return (
    <section
      ref={ref}
      className="relative py-1 sm:py-20 lg:py-12 px-4 sm:px-6 lg:px-12 xl:px-24 bg-gradient-to-b from-white to-slate-50 overflow-hidden"
    >
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-40 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-100 rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* ================= LEFT CONTENT ================= */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase">
                Future of Education
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] text-slate-900"
            >
              Welcome to the <br />
              Future of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-700">
                Learning
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-2xl"
            >
              Strategic partnership with{" "}
              <span className="font-semibold text-slate-900">
                NEXCORE INSTITUTE OF TECHNOLOGY
              </span>
              , launching cutting-edge programs in{" "}
              <span className="font-semibold text-blue-600">
                Data Science & Artificial Intelligence
              </span>{" "}
              and{" "}
              <span className="font-semibold text-orange-500">
                Multimedia & Animation
              </span>{" "}
              that integrate industry expertise with academic excellence.
            </motion.p>

            {/* Key Features Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              {[
                { icon: Award, label: "UGC Approved", value: "✓" },
                { icon: Users, label: "Industry Ready", value: "100%" },
                { icon: Briefcase, label: "Placement", value: "95%" },
                { icon: CheckCircle, label: "NAAC A+", value: "✓" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 + i * 0.1, duration: 0.6 }}
                  className="
                    group p-4 rounded-2xl 
                    bg-white border border-slate-200
                    hover:shadow-lg hover:border-blue-200
                    transition-all duration-300
                  "
                >
                  <item.icon className="w-6 h-6 text-blue-600 mb-2 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-2xl font-bold text-slate-900 mb-1">
                    {item.value}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-600 font-medium">
                    {item.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Programs Highlight */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9, duration: 0.7 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-slate-50 border border-blue-100"
            >
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-sm font-semibold text-slate-900 mb-2">
                    Industry-Integrated Programs
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Learn from industry experts and gain hands-on experience through real-world projects and internships with leading tech companies.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 1, duration: 0.7 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="
                    inline-flex items-center gap-3
                    px-8 py-4 rounded-xl
                    bg-gradient-to-r from-blue-600 to-blue-700
                    text-white font-semibold text-base
                    shadow-lg shadow-blue-500/30
                    hover:shadow-xl hover:shadow-blue-500/40
                    hover:from-blue-700 hover:to-blue-800
                    transition-all duration-300
                  "
                >
                  Enroll Now
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>

              {/* <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setPdfModalOpen(true)}
                className="
                  inline-flex items-center gap-3
                  px-8 py-4 rounded-xl
                  bg-white border-2 border-slate-200
                  text-slate-900 font-semibold text-base
                  hover:border-blue-300 hover:bg-blue-50
                  transition-all duration-300
                "
              >
                Download Brochure
              </motion.button> */}
            </motion.div>
          </motion.div>

          {/* ================= RIGHT ILLUSTRATION - PROFESSIONAL TECH VISUAL ================= */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative w-full max-w-[550px] h-[550px]">
              {/* Decorative Background Elements */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute w-[450px] h-[450px] rounded-full bg-gradient-to-br from-blue-100/40 to-slate-100/40 blur-3xl" />
              </div>

              {/* Professional Tech Illustration */}
              <svg 
                width="550" 
                height="550" 
                viewBox="0 0 550 550" 
                fill="none"
                className="relative z-10"
              >
                {/* Gradient Definitions */}
                <defs>
                  <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="100%" stopColor="#2563EB" />
                  </linearGradient>
                  <linearGradient id="screenGlow" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#1E293B" />
                    <stop offset="100%" stopColor="#0F172A" />
                  </linearGradient>
                  <linearGradient id="orangeAccent" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#F59E0B" />
                    <stop offset="100%" stopColor="#EF4444" />
                  </linearGradient>
                </defs>

                {/* Main Circular Background Glow */}
                <motion.circle
                  initial={{ scale: 0, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 0.08 } : {}}
                  transition={{ duration: 1, delay: 0.2 }}
                  cx="275"
                  cy="275"
                  r="220"
                  fill="url(#blueGradient)"
                />

                {/* ========== LARGE CENTRAL MONITOR ========== */}
                <motion.g
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  {/* Monitor Stand - Wider Base */}
                  <rect x="245" y="400" width="60" height="80" rx="8" fill="#475569" />
                  <rect x="210" y="470" width="130" height="20" rx="10" fill="#64748B" />

                  {/* Monitor Frame - Much Larger */}
                  <rect x="120" y="100" width="310" height="300" rx="16" fill="#1E293B" />
                  
                  {/* Screen Bezel */}
                  <rect x="130" y="110" width="290" height="280" rx="12" fill="url(#screenGlow)" />

                  {/* Screen Inner Glow */}
                  <motion.rect
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 0.3 } : {}}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    x="135" y="115" width="280" height="270" rx="10" fill="url(#blueGradient)"
                  />
                </motion.g>

                {/* ========== SCREEN CONTENT - DATA VISUALIZATION ========== */}
                <g opacity="0.95">
                  
                  {/* Header Section - Title Bar */}
                  <motion.rect
                    initial={{ width: 0 }}
                    animate={isInView ? { width: 250 } : {}}
                    transition={{ duration: 0.6, delay: 1 }}
                    x="150" y="135" width="250" height="30" rx="6" fill="#1E40AF" opacity="0.3"
                  />
                  
                  {/* Window Dots */}
                  {[0, 1, 2].map((i) => (
                    <motion.circle
                      key={i}
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: 1.1 + i * 0.1 }}
                      cx={165 + i * 15}
                      cy={150}
                      r="4"
                      fill={i === 0 ? "#EF4444" : i === 1 ? "#F59E0B" : "#10B981"}
                    />
                  ))}

                  {/* Code Editor Section */}
                  <g>
                    {/* Code Lines with Different Lengths */}
                    <motion.rect
                      initial={{ width: 0 }}
                      animate={isInView ? { width: 200 } : {}}
                      transition={{ duration: 0.5, delay: 1.4 }}
                      x="155" y="185" width="200" height="6" rx="3" fill="#60A5FA"
                    />
                    <motion.rect
                      initial={{ width: 0 }}
                      animate={isInView ? { width: 180 } : {}}
                      transition={{ duration: 0.5, delay: 1.5 }}
                      x="165" y="200" width="180" height="6" rx="3" fill="#93C5FD"
                    />
                    <motion.rect
                      initial={{ width: 0 }}
                      animate={isInView ? { width: 160 } : {}}
                      transition={{ duration: 0.5, delay: 1.6 }}
                      x="165" y="215" width="160" height="6" rx="3" fill="#60A5FA"
                    />
                    <motion.rect
                      initial={{ width: 0 }}
                      animate={isInView ? { width: 140 } : {}}
                      transition={{ duration: 0.5, delay: 1.7 }}
                      x="155" y="230" width="140" height="6" rx="3" fill="#F59E0B"
                    />
                    <motion.rect
                      initial={{ width: 0 }}
                      animate={isInView ? { width: 170 } : {}}
                      transition={{ duration: 0.5, delay: 1.8 }}
                      x="165" y="245" width="170" height="6" rx="3" fill="#93C5FD"
                    />
                  </g>

                  {/* Data Visualization Section - Large Bar Chart */}
                  <g transform="translate(155, 280)">
                    {/* Chart Background Grid */}
                    {[0, 1, 2, 3].map((i) => (
                      <motion.line
                        key={i}
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 0.1 } : {}}
                        transition={{ duration: 0.4, delay: 1.9 }}
                        x1="0"
                        y1={i * 20}
                        x2="240"
                        y2={i * 20}
                        stroke="#60A5FA"
                        strokeWidth="1"
                      />
                    ))}

                    {/* Animated Data Bars - Larger and More Prominent */}
                    {[
                      { x: 15, height: 65, color: "#3B82F6", delay: 2.0 },
                      { x: 50, height: 55, color: "#60A5FA", delay: 2.1 },
                      { x: 85, height: 75, color: "#2563EB", delay: 2.2 },
                      { x: 120, height: 50, color: "#3B82F6", delay: 2.3 },
                      { x: 155, height: 70, color: "#F59E0B", delay: 2.4 },
                      { x: 190, height: 60, color: "#60A5FA", delay: 2.5 },
                      { x: 225, height: 80, color: "#2563EB", delay: 2.6 },
                    ].map((bar, i) => (
                      <motion.rect
                        key={i}
                        initial={{ height: 0, y: 80 }}
                        animate={isInView ? { height: bar.height, y: 80 - bar.height } : {}}
                        transition={{ duration: 0.6, delay: bar.delay, ease: [0.22, 1, 0.36, 1] }}
                        x={bar.x}
                        width="25"
                        rx="4"
                        fill={bar.color}
                      />
                    ))}

                    {/* X-axis */}
                    <motion.line
                      initial={{ opacity: 0 }}
                      animate={isInView ? { opacity: 0.3 } : {}}
                      transition={{ duration: 0.4, delay: 2.7 }}
                      x1="0"
                      y1="85"
                      x2="240"
                      y2="85"
                      stroke="#60A5FA"
                      strokeWidth="2"
                    />
                  </g>
                </g>

                {/* ========== FLOATING ACADEMIC ICONS ========== */}
                
                {/* Graduation Cap - Top Left - Larger */}
                <motion.g
                  initial={{ scale: 0, rotate: -45, opacity: 0 }}
                  animate={isInView ? { scale: 1, rotate: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.7, delay: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
                >
                  <circle cx="85" cy="100" r="35" fill="#3B82F6" opacity="0.1" />
                  <rect x="55" y="95" width="60" height="10" rx="5" fill="#3B82F6" />
                  <path d="M85 95 L115 82 L85 69 L55 82 Z" fill="#2563EB" />
                  <rect x="81" y="105" width="8" height="30" rx="4" fill="#3B82F6" />
                  <circle cx="85" cy="138" r="7" fill="#F59E0B" />
                </motion.g>

                {/* Book Stack - Top Right - Larger */}
                <motion.g
                  initial={{ scale: 0, y: -30, opacity: 0 }}
                  animate={isInView ? { scale: 1, y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.7, delay: 0.9, ease: [0.34, 1.56, 0.64, 1] }}
                >
                  <circle cx="465" cy="120" r="35" fill="#F59E0B" opacity="0.1" />
                  <rect x="435" y="125" width="60" height="10" rx="3" fill="#3B82F6" />
                  <rect x="440" y="112" width="60" height="10" rx="3" fill="#60A5FA" />
                  <rect x="445" y="99" width="60" height="10" rx="3" fill="#2563EB" />
                </motion.g>

                {/* Brain/AI Icon - Left Side - Larger and More Detailed */}
                <motion.g
                  initial={{ scale: 0, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.7, delay: 1.0, ease: [0.34, 1.56, 0.64, 1] }}
                >
                  <circle cx="70" cy="275" r="45" fill="#F59E0B" opacity="0.15" />
                  <path
                    d="M 50 275 Q 50 250 70 250 Q 90 250 90 275 Q 90 300 70 300 Q 50 300 50 275 Z"
                    fill="none"
                    stroke="#F59E0B"
                    strokeWidth="4"
                  />
                  <circle cx="62" cy="268" r="4" fill="#F59E0B" />
                  <circle cx="78" cy="268" r="4" fill="#F59E0B" />
                  <circle cx="70" cy="282" r="4" fill="#F59E0B" />
                  <path d="M 55 275 Q 60 285 65 275" fill="none" stroke="#F59E0B" strokeWidth="2" />
                  <path d="M 75 275 Q 80 285 85 275" fill="none" stroke="#F59E0B" strokeWidth="2" />
                </motion.g>

                {/* Lightbulb - Right Side - Larger */}
                <motion.g
                  initial={{ scale: 0, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.7, delay: 1.1, ease: [0.34, 1.56, 0.64, 1] }}
                >
                  <circle cx="480" cy="290" r="45" fill="#FCD34D" opacity="0.2" />
                  <circle cx="480" cy="283" r="18" fill="none" stroke="#F59E0B" strokeWidth="4" />
                  <rect x="473" y="302" width="14" height="6" rx="3" fill="#F59E0B" />
                  <rect x="475" y="310" width="10" height="12" rx="3" fill="#F59E0B" />
                  
                  {/* Light rays */}
                  {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
                    const rad = (angle * Math.PI) / 180;
                    const x1 = 480 + Math.cos(rad) * 25;
                    const y1 = 283 + Math.sin(rad) * 25;
                    const x2 = 480 + Math.cos(rad) * 35;
                    const y2 = 283 + Math.sin(rad) * 35;
                    return (
                      <motion.line
                        key={i}
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 0.6 } : {}}
                        transition={{ duration: 0.3, delay: 1.2 + i * 0.05 }}
                        x1={x1}
                        y1={y1}
                        x2={x2}
                        y2={y2}
                        stroke="#F59E0B"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    );
                  })}
                </motion.g>

                {/* Certificate - Bottom Left - Larger */}
                <motion.g
                  initial={{ scale: 0, rotate: 15, opacity: 0 }}
                  animate={isInView ? { scale: 1, rotate: -8, opacity: 1 } : {}}
                  transition={{ duration: 0.7, delay: 1.2, ease: [0.34, 1.56, 0.64, 1] }}
                >
                  <circle cx="110" cy="450" r="40" fill="#3B82F6" opacity="0.1" />
                  <rect x="75" y="425" width="90" height="65" rx="6" fill="white" stroke="#3B82F6" strokeWidth="3" />
                  <rect x="90" y="445" width="60" height="4" rx="2" fill="#3B82F6" opacity="0.5" />
                  <rect x="90" y="458" width="50" height="4" rx="2" fill="#3B82F6" opacity="0.5" />
                  <rect x="90" y="471" width="55" height="4" rx="2" fill="#3B82F6" opacity="0.5" />
                  <circle cx="120" cy="438" r="8" fill="#F59E0B" />
                </motion.g>

                {/* Gear - Bottom Right - Larger */}
                <motion.g
                  initial={{ scale: 0, rotate: 0, opacity: 0 }}
                  animate={isInView ? { scale: 1, rotate: 45, opacity: 1 } : {}}
                  transition={{ duration: 0.9, delay: 1.3, ease: [0.34, 1.56, 0.64, 1] }}
                >
                  <circle cx="450" cy="440" r="40" fill="#2563EB" opacity="0.1" />
                  <circle cx="450" cy="440" r="30" fill="none" stroke="#3B82F6" strokeWidth="10" />
                  <circle cx="450" cy="440" r="15" fill="#3B82F6" />
                  
                  {/* Gear teeth */}
                  {[0, 90, 180, 270].map((angle, i) => {
                    const rad = (angle * Math.PI) / 180;
                    const x = 450 + Math.cos(rad) * 35;
                    const y = 440 + Math.sin(rad) * 35;
                    return (
                      <rect
                        key={i}
                        x={x - 5}
                        y={y - 12}
                        width="10"
                        height="24"
                        rx="3"
                        fill="#3B82F6"
                        transform={`rotate(${angle}, ${x}, ${y})`}
                      />
                    );
                  })}
                </motion.g>

                {/* Floating Particles/Dots - More and Varied Sizes */}
                {[
                  { cx: 100, cy: 180, r: 5, delay: 2.8 },
                  { cx: 450, cy: 200, r: 4, delay: 2.9 },
                  { cx: 130, cy: 350, r: 6, delay: 3.0 },
                  { cx: 440, cy: 370, r: 5, delay: 3.1 },
                  { cx: 200, cy: 80, r: 4, delay: 3.2 },
                  { cx: 350, cy: 470, r: 5, delay: 3.3 },
                  { cx: 180, cy: 470, r: 4, delay: 3.4 },
                  { cx: 370, cy: 90, r: 6, delay: 3.5 },
                ].map((dot, i) => (
                  <motion.circle
                    key={i}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 0.5 } : {}}
                    transition={{ duration: 0.5, delay: dot.delay }}
                    cx={dot.cx}
                    cy={dot.cy}
                    r={dot.r}
                    fill="#3B82F6"
                  />
                ))}

                {/* Connection Lines - Dashed */}
                <motion.path
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={isInView ? { pathLength: 1, opacity: 0.25 } : {}}
                  transition={{ duration: 1.5, delay: 3.6 }}
                  d="M 85 138 Q 180 100 275 120"
                  stroke="#3B82F6"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="8,4"
                />
                <motion.path
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={isInView ? { pathLength: 1, opacity: 0.25 } : {}}
                  transition={{ duration: 1.5, delay: 3.7 }}
                  d="M 70 275 Q 150 250 200 260"
                  stroke="#F59E0B"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="8,4"
                />
                <motion.path
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={isInView ? { pathLength: 1, opacity: 0.25 } : {}}
                  transition={{ duration: 1.5, delay: 3.8 }}
                  d="M 480 322 Q 420 360 350 380"
                  stroke="#3B82F6"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="8,4"
                />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ================= PDF MODAL ================= */}
      <AnimatePresence>
        {isPdfModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPdfModalOpen(false)}
          >
            <motion.div
              className="relative w-full max-w-5xl h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setPdfModalOpen(false)}
                className="absolute top-4 right-4 bg-slate-900 text-white p-3 rounded-xl hover:bg-slate-800 hover:scale-105 transition-all duration-300 z-10 shadow-lg"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              <iframe
                src="/brochure/b.pdf"
                className="w-full h-full"
                style={{ border: "none" }}
                title="Brochure"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Welcome;