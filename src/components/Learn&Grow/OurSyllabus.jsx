"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const OurSyllabus = () => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-blue-50 py-24 px-6 lg:px-16 ">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center max-w-4xl mx-auto mb-20 relative z-10"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-slate-700">
          Level Up Your Skills with <br />
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
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
          className={`relative rounded-3xl p-10 w-7xl h-[360px] transition-all duration-300 ease-in-out shadow-xl overflow-hidden bg-white border-2 ${
            isHovered
              ? "border-blue-400 shadow-2xl"
              : "border-slate-200"
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Subtle gradient overlay on hover */}
          <div className={`absolute inset-0 bg-gradient-to-r from-blue-50/0 to-purple-50/0 transition-all duration-300 rounded-3xl ${
            isHovered ? "from-blue-50/50 to-purple-50/50" : ""
          }`}></div>

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
              className="w-full h-auto"
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
              <p className="text-xl lg:text-2xl leading-relaxed text-slate-600">
                Our{" "}
                <span
                  className={`font-bold ${
                    isHovered ? "text-blue-600" : "text-purple-600"
                  }`}
                >
                  B.Voc
                </span>{" "}
                <span
                  className={`font-bold ${
                    isHovered ? "text-blue-600" : "text-purple-600"
                  }`}
                >
                  AI
                </span>{" "}
                &{" "}
                <span
                  className={`font-bold ${
                    isHovered ? "text-blue-600" : "text-purple-600"
                  }`}
                >
                  ML
                </span>{" "}
                program is structured across six dynamic semesters, providing
                hands-on skills and deep theoretical knowledge in{" "}
                <span className="font-extrabold text-slate-700">
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
          className="flex items-center justify-center py-3 mb-10 mt-10 text-center w-full mx-auto rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg"
        >
          <h2 className="text-xl font-extrabold text-white">
            About Our <span className="text-blue-100">Syllabus</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative rounded-3xl p-5 h-auto mx-auto flex flex-col items-center shadow-lg overflow-hidden bg-white border-2 border-slate-200"
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
              className="w-48 h-auto"
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
            <p className="text-base leading-snug text-slate-600">
              Our{" "}
              <span className="font-bold text-blue-600">B.Voc</span>{" "}
              <span className="font-bold text-purple-600">AI</span> &{" "}
              <span className="font-bold text-teal-600">ML</span> program is
              structured across six dynamic semesters, providing hands-on
              skills and deep theoretical knowledge in{" "}
              <span className="font-extrabold text-slate-700">
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