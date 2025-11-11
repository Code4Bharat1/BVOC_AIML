"use client";

import React, { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";

const ShapeTheFuture = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div
      className="flex justify-center items-center min-h-screen px-4 pt-10 relative overflow-hidden bg-white"
    >


      {/* Soft Glowing Orbs */}
      <motion.div
        className="absolute top-20 left-10 w-96 h-96 bg-blue-100/15 rounded-full blur-[180px]"
        animate={{ scale: [1, 1.2, 1], x: [0, 30, 0], y: [0, -30, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-indigo-100/12 rounded-full blur-[160px]"
        animate={{ scale: [1, 1.25, 1], x: [0, -30, 0], y: [0, 30, 0] }}
        transition={{ duration: 22, repeat: Infinity }}
      />

      {/* Card */}
      <motion.div
        ref={ref}
        className="relative lg:py-16 border border-slate-200 bg-white text-slate-900 text-center rounded-3xl p-8 lg:p-10 w-[90%] shadow-xl overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >


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
              animate={{ y: [0, -30, 0], opacity: [0, 0.5, 0] }}
              transition={{ duration: 4 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
            />
          ))}
        </div>

        {/* Subtle Glowing Orbs */}
        <motion.div
          className="absolute top-0 left-0 w-64 h-64 bg-blue-100/20 rounded-full blur-[120px]"
          animate={{ scale: [1, 1.2, 1], x: [0, 25, 0], y: [0, -25, 0] }}
          transition={{ duration: 16, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-100/15 rounded-full blur-[130px]"
          animate={{ scale: [1, 1.25, 1], x: [0, -25, 0], y: [0, 25, 0] }}
          transition={{ duration: 18, repeat: Infinity }}
        />

        {/* Robot Image */}
        <motion.img
          src="/elements/ShapeFutureRobo_Home.svg"
          alt="Shape the Future Robot"
          className="hidden lg:block absolute z-30 lg:-bottom-[200px] lg:-left-30 lg:w-[25rem] lg:h-[50rem] opacity-90"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 0.9, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ delay: 1, duration: 1 }}
        />

        {/* Heading */}
        <motion.h2
          className="text-3xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-6"
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
          className="text-base lg:text-xl font-normal mb-8 text-slate-700 max-w-4xl mx-auto relative z-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          style={{ fontFamily: "'Inter', -apple-system, system-ui, sans-serif" }}
        >
          The world needs innovators, problem-solvers, and tech leaders. Our
          program is designed to equip you with the skills and experience to
          jump right into the heart of the AI & ML revolution. Your future
          starts now— and we're here to guide you every step of the way.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
        >
          <a
            href="https://wa.me/919594402822?text=Hi, I'm interested in enrolling in your course!"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              className="group relative px-10 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl font-semibold text-base text-white overflow-hidden shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 transition-shadow duration-300 z-10"
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1.5 }}
              />
            </motion.button>
          </a>
        </motion.div>

        {/* Mobile Image */}
        <motion.img
          src="/elements/ShapeFutureRobo_Home.svg"
          alt="Shape the Future Robot"
          className="lg:hidden w-72 h-[13rem] md:w-[23rem] object-contain mx-auto mt-8 opacity-90"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 0.9, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ delay: 1, duration: 1 }}
        />
      </motion.div>
    </div>
  );
};

export default ShapeTheFuture;