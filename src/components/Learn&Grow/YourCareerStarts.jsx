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
    <section className="relative overflow-hidden bg-gradient-to-t from-[#33135B] via-[#460E73] to-[#8E1DBA] py-28 px-6 lg:px-16 rounded-t-[3rem] text-white">
      {/* Glow Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(172,108,255,0.15),transparent_70%)] pointer-events-none"></div>

      <div className="flex flex-col lg:flex-row w-full max-w-6xl mx-auto overflow-hidden backdrop-blur-md bg-white/10 border border-white/10 rounded-3xl shadow-2xl relative gap-6 lg:gap-10 pt-20 lg:pt-28">
        {/* Heading */}
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: -50 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute top-6 lg:top-10 left-0 right-0 text-center z-10 px-4"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Your Career Starts With Us, <br />
            <span className="text-[#AC6CFF]">And We'll Be With You</span> Every Step Of The Way.
          </h2>
        </motion.div>

        {/* Left Card */}
        <motion.div
          ref={leftRef}
          initial={{ opacity: 0, x: -100 }}
          animate={leftInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full lg:w-1/2 p-8 lg:p-12 pt-40 lg:pt-44 group hover:bg-white/10 transition-colors duration-300 rounded-none lg:rounded-r-[3rem]"
        >
          <div className="bg-white/10 border border-white/20 rounded-3xl p-10 backdrop-blur-md transition-all duration-300 group-hover:scale-105">
            <div className="flex flex-col items-start space-y-6">
              <motion.img
                src="/elements/CareerStart1.svg"
                alt="Number 1"
                className="w-24 h-24"
                initial={{ opacity: 0, rotate: -10 }}
                animate={leftInView ? { opacity: 1, rotate: 0 } : {}}
                transition={{ duration: 0.6 }}
              />
              <p className="text-xl lg:text-2xl font-semibold text-start text-white/90 leading-relaxed">
                Unlock Your Potential With{" "}
                <span className="text-[#AC6CFF] group-hover:text-white font-bold">
                  Expert Guidance
                </span>{" "}
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
          className="w-full lg:w-1/2 p-8 lg:p-12 pt-40 lg:pt-44 group hover:bg-white/10 transition-colors duration-300 rounded-none lg:rounded-l-[3rem]"
        >
          <div className="bg-white/10 border border-white/20 rounded-3xl p-10 backdrop-blur-md transition-all duration-300 group-hover:scale-105">
            <div className="flex flex-col items-start space-y-6">
              <motion.img
                src="/elements/CareerStart2.svg"
                alt="Number 2"
                className="w-24 h-24"
                initial={{ opacity: 0, rotate: 10 }}
                animate={rightInView ? { opacity: 1, rotate: 0 } : {}}
                transition={{ duration: 0.6 }}
              />
              <p className="text-xl lg:text-2xl font-semibold text-start text-white/90 leading-relaxed">
                Join A Community That Believes{" "}
                <span className="text-[#AC6CFF] group-hover:text-white font-bold">
                  In Your Success.
                </span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default YourCareerStarts;
