"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const OurSyllabus = () => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <>
      {/* Header (Visible on Large Screens) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="hidden lg:flex items-start justify-center py-3 mt-14 text-center w-3xl mx-auto rounded-4xl bg-[#D8BCFD]"
      >
        <h2 className="text-5xl font-extrabold py-6">
          About Our <span className="text-purple-500">Syllabus</span>
        </h2>
      </motion.div>

      {/* Large Screen Version */}
      <div className="hidden lg:block" ref={ref}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5 }}
          className={`relative rounded-3xl p-6 h-[320px] w-7xl lg:max-w-full mx-auto transition-all duration-300 mt-16 ease-in-out ${
            isHovered ? "bg-purple-500 text-white" : "bg-purple-100"
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Robot Image */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className={`absolute left-0 bottom-0 w-1/3 z-40 transition-transform duration-300 ease-in-out ${
              isHovered ? "scale-110 origin-bottom-left" : ""
            }`}
          >
            <Image
              src="/syllabusRoboImg.svg"
              alt="Robot"
              width={200}
              height={200}
              className="w-full h-auto"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="ml-auto w-2/3 relative z-10 flex items-center h-full"
          >
            <div
              className={`transition-transform duration-300 ${
                isHovered ? "scale-x-95" : "scale-x-100"
              }`}
            >
              <p className="text-xl lg:text-3xl text-left">
                Our{" "}
                <span
                  className={`${
                    isHovered
                      ? "font-extrabold text-black"
                      : "font-bold text-purple-500"
                  }`}
                >
                  B.Voc
                </span>{" "}
                <span
                  className={`font-bold ${
                    isHovered ? "text-black font-extrabold" : "text-purple-500"
                  }`}
                >
                  AI
                </span>{" "}
                &{" "}
                <span
                  className={`font-bold ${
                    isHovered ? "text-black font-extrabold" : "text-purple-600"
                  }`}
                >
                  ML
                </span>{" "}
                program is structured across six dynamic semesters, designed to
                provide you with hands-on skills and deep theoretical knowledge
                in the fields of{" "}
                <span className="font-bold text-black">
                  AI, ML, and Data Science.
                </span>
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Small/Medium Screen Version */}
      <div className="block lg:hidden px-2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex items-start justify-center py-3 mb-16 mt-10 text-center w-64 mx-auto rounded-2xl bg-[#EADAFF]"
        >
          <h2 className="text-lg font-extrabold py-1">
            About Our <span className="text-purple-500">Syllabus</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative rounded-3xl p-4 h-[200px] mx-auto bg-[#EADAFF] flex items-center overflow-visible"
        >
          {/* Robot Image */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className=" w-[30%] z-10"
          >
            <Image
              src="/syllabusRoboImg.svg"
              alt="Robot"
              width={250}
              height={250}
              className="w-64 h-auto absolute -left-6 bottom-0"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            viewport={{ once: true }}
            className="ml-28 w-[70%] z-20"
          >
            <p className="text-sm text-left leading-snug">
              Our <span className="font-bold text-purple-500">B.Voc</span>{" "}
              <span className="font-bold text-purple-500">AI</span> &{" "}
              <span className="font-bold text-purple-600">ML</span> program is
              structured across six dynamic semesters, designed to provide you
              with hands-on skills and deep theoretical knowledge in the fields
              of{" "}
              <span className="font-bold text-black">
                AI, ML, and Data Science.
              </span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default OurSyllabus;
