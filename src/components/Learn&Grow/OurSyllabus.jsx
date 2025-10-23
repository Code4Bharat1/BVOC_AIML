"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const OurSyllabus = () => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#1a1f4d] via-[#2d1b4e] to-[#4a1f6b] py-24 px-6 lg:px-16 rounded-t-[3rem] text-white">
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

      {/* Glowing Orbs - Hero Style */}
      <motion.div
        className="absolute top-20 left-20 w-96 h-96 bg-[#00d4ff]/15 blur-[150px] rounded-full"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 18, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-[#AC6CFF]/15 blur-[180px] rounded-full"
        animate={{ scale: [1, 1.4, 1] }}
        transition={{ duration: 22, repeat: Infinity }}
      />

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center max-w-4xl mx-auto mb-20 relative z-10"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          Level Up Your Skills with <br />
          <span className="bg-gradient-to-r from-[#00d4ff] via-[#AC6CFF] to-[#ff6b35] bg-clip-text text-transparent">
            Our B.Voc AI & ML Program
          </span>
        </h2>
      </motion.div>

      {/* Large Screen Card */}
      <div className="hidden lg:flex justify-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6 }}
          className={`relative rounded-3xl p-10 w-7xl h-[360px] transition-all duration-300 ease-in-out shadow-2xl overflow-hidden backdrop-blur-md bg-white/5 border ${
            isHovered
              ? "bg-gradient-to-r from-[#00d4ff]/20 to-[#AC6CFF]/20 border-[#00d4ff]/40"
              : "border-white/10"
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Robot Image */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className={`absolute left-0 bottom-0 w-1/3 z-10 transition-transform duration-300 ease-in-out ${
              isHovered ? "scale-110 origin-bottom-left" : ""
            }`}
          >
            <Image
              src="/syllabusRoboImg.svg"
              alt="Robot"
              width={250}
              height={250}
              className="w-full h-auto drop-shadow-lg"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="ml-auto w-2/3 relative z-20 flex items-center h-full"
          >
            <div
              className={`transition-transform duration-300 ${
                isHovered ? "scale-95" : ""
              }`}
            >
              <p className="text-xl lg:text-2xl leading-relaxed text-white/90">
                Our{" "}
                <span
                  className={`font-bold ${
                    isHovered ? "text-[#00d4ff]" : "text-[#AC6CFF]"
                  }`}
                >
                  B.Voc
                </span>{" "}
                <span
                  className={`font-bold ${
                    isHovered ? "text-[#00d4ff]" : "text-[#AC6CFF]"
                  }`}
                >
                  AI
                </span>{" "}
                &{" "}
                <span
                  className={`font-bold ${
                    isHovered ? "text-[#00d4ff]" : "text-[#AC6CFF]"
                  }`}
                >
                  ML
                </span>{" "}
                program is structured across six dynamic semesters, providing
                hands-on skills and deep theoretical knowledge in{" "}
                <span className="font-extrabold text-white">
                  AI, ML, and Data Science
                </span>
                .
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Mobile Card */}
      <div className="block lg:hidden px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex items-center justify-center py-3 mb-10 mt-10 text-center w-full mx-auto rounded-2xl bg-gradient-to-r from-[#00d4ff] to-[#AC6CFF] shadow-md"
        >
          <h2 className="text-xl font-extrabold text-white">
            About Our <span className="text-black">Syllabus</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative rounded-3xl p-5 h-auto mx-auto flex flex-col items-center shadow-2xl overflow-hidden backdrop-blur-md bg-white/5 border border-white/10"
        >
          {/* Robot Image */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="relative w-full flex justify-center mb-4"
          >
            <Image
              src="/syllabusRoboImg.svg"
              alt="Robot"
              width={200}
              height={200}
              className="w-48 h-auto drop-shadow-lg"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center px-2"
          >
            <p className="text-base leading-snug text-white/90">
              Our{" "}
              <span className="font-bold text-[#00d4ff]">B.Voc</span>{" "}
              <span className="font-bold text-[#AC6CFF]">AI</span> &{" "}
              <span className="font-bold text-[#ff6b35]">ML</span> program is
              structured across six dynamic semesters, providing hands-on
              skills and deep theoretical knowledge in{" "}
              <span className="font-extrabold text-white">
                AI, ML, and Data Science
              </span>
              .
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default OurSyllabus;