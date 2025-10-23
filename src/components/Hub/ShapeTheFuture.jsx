"use client";

import React, { useRef } from "react";
import { ChevronRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const ShapeTheFuture = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div
      className="flex justify-center items-center min-h-screen px-4 pt-10 relative overflow-hidden"
      style={{
        background: "linear-gradient(to bottom right, #1A287E, #2C3560, #212121)",
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
        />
      </div>

      {/* Card */}
      <motion.div
        ref={ref}
        className="relative lg:py-16 border-2 border-[#26C6DA]/30 bg-black text-white text-center rounded-3xl p-8 lg:p-10 w-[90%] shadow-2xl overflow-hidden backdrop-blur-xl"
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
          />
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
              animate={{ y: [0, -30, 0], opacity: [0, 1, 0] }}
              transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, delay: Math.random() * 2 }}
            />
          ))}
        </div>

        {/* Glowing Orbs */}
        <motion.div
          className="absolute top-0 left-0 w-64 h-64 bg-[#26C6DA]/20 rounded-full blur-[100px]"
          animate={{ scale: [1, 1.3, 1], x: [0, 30, 0], y: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-80 h-80 bg-[#FF6F00]/20 rounded-full blur-[120px]"
          animate={{ scale: [1, 1.4, 1], x: [0, -30, 0], y: [0, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
        />

        {/* Robot Image */}
        <motion.img
          src="/elements/ShapeFutureRobo_Home.svg"
          alt="Shape the Future Robot"
          className="hidden lg:block absolute z-30 lg:-bottom-[200px] lg:-left-30 lg:w-[25rem] lg:h-[50rem]"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ delay: 1, duration: 1 }}
        />

        {/* Heading */}
        <motion.h2
          className="text-3xl lg:text-5xl font-bold text-[#26C6DA] mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          Ready To Shape The Future?
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-base lg:text-2xl font-light mb-8 text-white/90 max-w-4xl mx-auto relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
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
          <Link
            href="https://wa.me/919594402822?text=Hi, I'm interested in enrolling in your course!"
            target="_blank"
          >
            <motion.button
              className="group relative px-10 py-4 bg-gradient-to-r from-[#FF6F00] to-[#FF8A65] rounded-2xl font-bold text-lg text-white overflow-hidden shadow-2xl shadow-[#FF6F00]/30 z-10"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF8A65] to-[#FF6F00] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10 flex items-center gap-2">
                Get Started
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

        {/* Mobile Image */}
        <motion.img
          src="/elements/ShapeFutureRobo_Home.svg"
          alt="Shape the Future Robot"
          className="lg:hidden w-72 h-[13rem] md:w-[23rem] object-contain mx-auto mt-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ delay: 1, duration: 1 }}
        />
      </motion.div>
    </div>
  );
};

export default ShapeTheFuture;
