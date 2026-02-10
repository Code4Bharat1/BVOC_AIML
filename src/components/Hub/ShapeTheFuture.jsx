"use client";

import React, { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";

const ShapeTheFuture = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div
      className="flex justify-center items-center min-h-screen px-4 pt-10 relative overflow-hidden bg-[#ffffff]"
    >
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `linear-gradient(#007BFF 1px, transparent 1px), linear-gradient(90deg, #007BFF 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Glowing Orbs with Brand Colors */}
      <motion.div
        className="absolute top-20 left-10 w-96 h-96 bg-[#007BFF]/10 rounded-full blur-[180px]"
        animate={{ scale: [1, 1.2, 1], x: [0, 30, 0], y: [0, -30, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-[#FF7F00]/8 rounded-full blur-[160px]"
        animate={{ scale: [1, 1.25, 1], x: [0, -30, 0], y: [0, 30, 0] }}
        transition={{ duration: 22, repeat: Infinity }}
      />

      {/* Card */}
      <motion.div
        ref={ref}
        className="relative lg:py-16 border border-[#007BFF]/30 bg-[#1a1a1a] text-white text-center rounded-3xl p-8 lg:p-10 w-[90%] shadow-[0_0_40px_rgba(0,123,255,0.2)] overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Animated Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-1 h-1 rounded-full ${
                i % 3 === 0 ? 'bg-[#80C8F7]/30' : i % 3 === 1 ? 'bg-[#FF7F00]/30' : 'bg-[#FFCD00]/30'
              }`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{ y: [0, -30, 0], opacity: [0, 0.7, 0] }}
              transition={{ duration: 4 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
            />
          ))}
        </div>

        {/* Subtle Glowing Orbs Inside Card */}
        <motion.div
          className="absolute top-0 left-0 w-64 h-64 bg-[#007BFF]/10 rounded-full blur-[120px]"
          animate={{ scale: [1, 1.2, 1], x: [0, 25, 0], y: [0, -25, 0] }}
          transition={{ duration: 16, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-72 h-72 bg-[#FF7F00]/8 rounded-full blur-[130px]"
          animate={{ scale: [1, 1.25, 1], x: [0, -25, 0], y: [0, 25, 0] }}
          transition={{ duration: 18, repeat: Infinity }}
        />

        {/* Border Glow Effect */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#007BFF]/20 via-[#FF7F00]/20 to-[#007BFF]/20 blur-xl opacity-50" />

        {/* Robot Image */}
        <motion.img
          src="/elements/ShapeFutureRobo_Home.svg"
          alt="Shape the Future Robot"
          className="hidden lg:block absolute z-30 lg:-bottom-[200px] lg:-left-30 lg:w-[25rem] lg:h-[50rem] opacity-80 drop-shadow-[0_0_30px_rgba(0,123,255,0.3)]"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 0.8, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ delay: 1, duration: 1 }}
        />

        {/* Heading */}
        <motion.h2
          className="text-3xl lg:text-5xl font-bold bg-gradient-to-r from-[#007BFF] via-[#80C8F7] to-[#007BFF] bg-clip-text text-transparent mb-6 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          style={{ fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif" }}
        >
          Ready To Shape The Future?
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-base lg:text-xl font-normal mb-8 text-gray-300 max-w-4xl mx-auto relative z-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          style={{ fontFamily: "'Inter', -apple-system, system-ui, sans-serif" }}
        >
          The world needs innovators, problem-solvers, and tech leaders. Our
          program is designed to equip you with the skills and experience to
          jump right into the heart of the{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF7F00] to-[#FFCD00] font-semibold">
            AI & ML , AI & Robotics, Cyber Security, Graphic Animation, VFX & Multimedia
          </span>{" "}
          revolution. Your future
          starts now— and we're here to guide you every step of the way.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <a
            href="https://wa.me/919594402822?text=Hi, I'm interested in enrolling in your course!"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              className="group relative px-10 py-4 bg-gradient-to-r from-[#007BFF] to-[#80C8F7] rounded-xl font-semibold text-base text-white overflow-hidden shadow-[0_0_30px_rgba(0,123,255,0.3)] hover:shadow-[0_0_50px_rgba(0,123,255,0.5)] transition-shadow duration-300"
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 rounded-xl p-[2px] bg-gradient-to-r from-[#007BFF] via-[#FF7F00] to-[#007BFF] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-full h-full bg-gradient-to-r from-[#007BFF] to-[#80C8F7] rounded-xl" />
              </div>

              {/* Hover Gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#80C8F7] to-[#007BFF] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <span className="relative z-10 flex items-center gap-2 justify-center">
                Get Started
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.span>
              </span>

              {/* Shimmer Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1.5 }}
              />

              {/* Corner Accents */}
              <div className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute top-0 right-0 w-full h-0.5 bg-gradient-to-l from-[#FF7F00] to-transparent" />
                <div className="absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b from-[#FF7F00] to-transparent" />
              </div>
              <div className="absolute bottom-0 left-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#FF7F00] to-transparent" />
                <div className="absolute bottom-0 left-0 w-0.5 h-full bg-gradient-to-t from-[#FF7F00] to-transparent" />
              </div>
            </motion.button>
          </a>
        </motion.div>

        {/* Mobile Image */}
        <motion.img
          src="/elements/ShapeFutureRobo_Home.svg"
          alt="Shape the Future Robot"
          className="lg:hidden w-72 h-[13rem] md:w-[23rem] object-contain mx-auto mt-8 opacity-80 drop-shadow-[0_0_30px_rgba(0,123,255,0.3)]"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 0.8, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ delay: 1, duration: 1 }}
        />
      </motion.div>
    </div>
  );
};

export default ShapeTheFuture;

