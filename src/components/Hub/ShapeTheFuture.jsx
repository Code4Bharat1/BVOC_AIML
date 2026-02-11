"use client";

import React, { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";

const ShapeTheFuture = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-16 lg:py-24 px-4 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white">
      {/* Subtle decorative elements */}
      <div className="absolute top-32 left-[10%] w-2 h-2 rounded-full bg-slate-900/20" />
      <div className="absolute top-20 right-[15%] w-1.5 h-1.5 rounded-full bg-slate-800/20" />
      <div className="absolute bottom-32 left-[20%] w-1 h-1 rounded-full bg-slate-400/20" />

      {/* Soft gradient orbs */}
      <motion.div
        className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-br from-slate-900/5 to-slate-800/5 rounded-full blur-3xl"
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 20, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-slate-800/5 to-slate-900/5 rounded-full blur-3xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 22, repeat: Infinity }}
      />

      <div className="max-w-7xl mx-auto">
        {/* Main Card */}
        <motion.div
          ref={ref}
          className="relative bg-white border-2 border-slate-200 rounded-2xl p-8 lg:p-16 shadow-xl overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
          viewport={{ once: true }}
        >
          {/* Top gradient accent */}
          <motion.div
            className="absolute top-0 left-0 right-0 h-1 bg-slate-900"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{ transformOrigin: 'left' }}
          />

          {/* Desktop Robot Image - positioned absolutely */}
          <motion.img
            src="/elements/ShapeFutureRobo_Home.svg"
            alt="Shape the Future Robot"
            className="hidden lg:block absolute -bottom-8 -left-8 w-[350px] h-auto opacity-70 z-10"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 0.7, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          />

          {/* Content Container */}
          <div className="relative z-20 lg:ml-80">
            {/* Small label */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-flex items-center gap-2 mb-6"
            >
              <div className="w-2 h-2 bg-slate-900 rounded-full" />
              <p className="text-sm font-medium text-slate-600 tracking-wide uppercase">
                Your Journey Begins
              </p>
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 mb-6 tracking-tight leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Ready To Shape{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-700">
                The Future?
              </span>
            </motion.h2>

            {/* Accent line */}
            <motion.div
              className="w-20 h-1 bg-slate-900 mb-8 rounded-full"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              style={{ transformOrigin: 'left' }}
            />

            {/* Description */}
            <motion.p
              className="text-base lg:text-lg text-slate-600 mb-8 leading-relaxed max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              viewport={{ once: true }}
            >
              The world needs innovators, problem-solvers, and tech leaders. Our
              program is designed to equip you with the skills and experience to
              jump right into the heart of the technology revolution.
            </motion.p>

            {/* Programs list */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="w-1 h-1 bg-slate-900 rounded-full" />
                <p className="text-sm font-medium text-slate-600 uppercase tracking-wide">
                  Available Programs
                </p>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {[
                  "AI & Machine Learning",
                  "AI & Robotics",
                  "Cyber Security",
                  "Graphic Animation",
                  "VFX & Multimedia"
                ].map((program, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.9 + idx * 0.1 }}
                    className="inline-block px-4 py-2 bg-slate-50 border-2 border-slate-200 text-slate-700 text-sm font-medium rounded hover:border-slate-300 hover:bg-white transition-colors duration-300"
                  >
                    {program}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <a
                href="https://wa.me/919594402822?text=Hi, I'm interested in enrolling in your course!"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  className="group relative inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white font-semibold rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 bg-slate-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <span className="relative z-10 flex items-center gap-2">
                    Get Started
                    <motion.span
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="w-5 h-5" strokeWidth={2.5} />
                    </motion.span>
                  </span>

                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent"
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                  />
                </motion.button>
              </a>
            </motion.div>

            {/* Additional info */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 1.4, duration: 0.6 }}
              className="mt-6 text-sm text-slate-500"
            >
              Your future starts now — and we're here to guide you every step of the way.
            </motion.p>
          </div>

          {/* Mobile Robot Image */}
          <motion.div
            className="lg:hidden mt-12 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <img
              src="/elements/ShapeFutureRobo_Home.svg"
              alt="Shape the Future Robot"
              className="w-64 h-auto opacity-70"
            />
          </motion.div>

          {/* Decorative corner elements */}
          <div className="absolute top-0 right-0 w-32 h-32 opacity-50">
            <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-l from-slate-900/30 to-transparent" />
            <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-slate-900/30 to-transparent" />
          </div>
          <div className="absolute bottom-0 left-0 w-32 h-32 opacity-50">
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-slate-900/30 to-transparent" />
            <div className="absolute bottom-0 left-0 w-px h-full bg-gradient-to-t from-slate-900/30 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ShapeTheFuture;