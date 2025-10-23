"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, GraduationCap, Rocket } from "lucide-react";

const AdmissionCard = () => {
  return (
    <div className="flex w-full justify-center items-center min-h-screen px-4 py-10 relative overflow-hidden"
      style={{
        background: "linear-gradient(to bottom right, #1A287E, #2C3560, #212121)"
      }}
    >
      {/* Page Grid Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(38,198,218,0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(38,198,218,0.2) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

    <motion.div 
          className="relative lg:py-16 border-2 border-[#26C6DA]/30 bg-black text-white text-center rounded-3xl p-8 lg:p-10 w-[90%] shadow-2xl pb-32 lg:pb-10 overflow-hidden backdrop-blur-xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
        {/* Card Grid Lines */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(rgba(38,198,218,0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(38,198,218,0.3) 1px, transparent 1px)
              `,
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>

    

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#26C6DA] rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Glowing Orbs */}
        <motion.div 
          className="absolute top-0 left-0 w-64 h-64 bg-[#26C6DA]/20 rounded-full blur-[100px]"
          animate={{ 
            scale: [1, 1.3, 1],
            x: [0, 30, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-0 right-0 w-80 h-80 bg-[#FF6F00]/20 rounded-full blur-[120px]"
          animate={{ 
            scale: [1, 1.4, 1],
            x: [0, -30, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />

        {/* Badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-5 py-2 mb-6 rounded-full bg-[#26C6DA]/10 border border-[#26C6DA]/30 backdrop-blur-xl"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Sparkles className="w-4 h-4 text-[#26C6DA]" />
          <span className="text-[#26C6DA] text-sm font-semibold tracking-wider">LIMITED SEATS AVAILABLE</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h2 
          className="text-3xl lg:text-5xl font-black mb-6 text-[#26C6DA]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          Admissions Now Open!
        </motion.h2>

        {/* Description */}
        <motion.p 
          className="text-base lg:text-2xl font-light mb-8 text-white/90 max-w-4xl mx-auto relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          Step into the future with a{" "}
          <span className="text-[#00BCD4] font-bold">NAAC A+</span> Accredited
          program and gain the edge with a{" "}
          <span className="text-[#FF6F00] font-bold">UGC-approved Bachelor's</span>{" "}
          in AI & ML — crafted to prepare you for the real world.
        </motion.p>

        {/* Subheading */}
        <motion.h3 
          className="text-xl lg:text-3xl font-bold mb-4 text-[#00BCD4] relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
        >
          A Unique Blend of Industry & Academia
        </motion.h3>

        <motion.p 
          className="text-white/80 mb-10 text-base lg:text-xl max-w-3xl mx-auto relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
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
            { icon: GraduationCap, text: "NAAC A+ Accredited", color: "#26C6DA" },
            { icon: Sparkles, text: "Industry Ready", color: "#FF6F00" },
            { icon: Rocket, text: "Career Focused", color: "#00BCD4" }
          ].map((item, i) => (
            <motion.div
              key={i}
              className="flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <item.icon className="w-4 h-4" style={{ color: item.color }} />
              <span className="text-sm text-gray-200 font-medium">{item.text}</span>
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
          <Link href="/contact">
            <motion.button
              className="group relative px-10 py-4 bg-gradient-to-r from-[#FF6F00] to-[#FF8A65] rounded-2xl font-bold text-lg text-white overflow-hidden shadow-2xl shadow-[#FF6F00]/30 z-10"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF8A65] to-[#FF6F00] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 flex items-center gap-2">
                Book Admission Slot
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
              
              {/* Shimmer Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
              />
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AdmissionCard;
