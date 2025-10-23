"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const YourCareerStarts = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const headingRef = useRef(null);

  const leftInView = useInView(leftRef, { once: true, margin: "-100px" });
  const rightInView = useInView(rightRef, { once: true, margin: "-100px" });
  const headingInView = useInView(headingRef, { once: true, margin: "-100px" });

  return (
    <section className="relative mt-1 overflow-hidden bg-gradient-to-b from-[#1a1f4d] via-[#2d1b4e] to-[#4a1f6b] py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-12">
      {/* Grid Background - Hero Style */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(#00d4ff 1px, transparent 1px), linear-gradient(90deg, #00d4ff 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      {/* Floating Particles - Hero Style */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#00d4ff] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Glowing Orbs - Hero Style */}
      <motion.div
        className="absolute top-20 left-20 w-96 h-96 bg-[#00d4ff]/20 blur-[150px] rounded-full"
        animate={{
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 18, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-[#AC6CFF]/20 blur-[180px] rounded-full"
        animate={{
          scale: [1, 1.4, 1],
        }}
        transition={{ duration: 22, repeat: Infinity }}
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: -50 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12 md:mb-16 lg:mb-20 px-4"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
            Your Career Starts With Us, <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-[#00d4ff] via-[#AC6CFF] to-[#ff6b35] bg-clip-text text-transparent">
              And We'll Be With You
            </span>{" "}
            Every Step Of The Way.
          </h2>
        </motion.div>

        {/* Cards Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
          {/* Left Card */}
          <motion.div
            ref={leftRef}
            initial={{ opacity: 0, x: -100 }}
            animate={leftInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="group"
          >
            <div className="relative h-full bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-2xl hover:shadow-[0_0_40px_rgba(0,212,255,0.3)] transition-all duration-500 hover:scale-[1.02] hover:border-[#00d4ff]/40">
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#00d4ff]/0 to-[#AC6CFF]/0 group-hover:from-[#00d4ff]/10 group-hover:to-[#AC6CFF]/10 rounded-3xl transition-all duration-500"></div>
              
              <div className="relative flex flex-col space-y-6 md:space-y-8">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={leftInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-[#00d4ff] to-[#AC6CFF] rounded-2xl flex items-center justify-center shadow-lg shadow-[#00d4ff]/50 group-hover:shadow-[#00d4ff]/70 transition-all duration-300"
                >
                  <img
                    src="/elements/CareerStart1.svg"
                    alt="Number 1"
                    className="w-12 h-12 sm:w-14 sm:h-14"
                  />
                </motion.div>
                
                <p className="text-lg sm:text-xl md:text-2xl font-semibold text-white/95 leading-relaxed">
                  Unlock Your Potential With{" "}
                  Expert Guidance{" "}
                  And Real-World Skills.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Card */}
          <motion.div
            ref={rightRef}
            initial={{ opacity: 0, x: 100 }}
            animate={rightInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="group"
          >
            <div className="relative h-full bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-2xl hover:shadow-[0_0_40px_rgba(255,107,53,0.3)] transition-all duration-500 hover:scale-[1.02] hover:border-[#ff6b35]/40">
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#AC6CFF]/0 to-[#ff6b35]/0 group-hover:from-[#AC6CFF]/10 group-hover:to-[#ff6b35]/10 rounded-3xl transition-all duration-500"></div>
              
              <div className="relative flex flex-col space-y-6 md:space-y-8">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={rightInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-[#AC6CFF] to-[#ff6b35] rounded-2xl flex items-center justify-center shadow-lg shadow-[#ff6b35]/50 group-hover:shadow-[#ff6b35]/70 transition-all duration-300"
                >
                  <img
                    src="/elements/CareerStart2.svg"
                    alt="Number 2"
                    className="w-12 h-12 sm:w-14 sm:h-14"
                  />
                </motion.div>
                
                <p className="text-lg sm:text-xl md:text-2xl font-semibold text-white/95 leading-relaxed">
                  Join A Community That Believes{" "}
                  In Your Success.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default YourCareerStarts;