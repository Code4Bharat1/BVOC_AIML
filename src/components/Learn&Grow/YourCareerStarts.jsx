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
    <section className="relative mt-1 overflow-hidden bg-gradient-to-b from-white via-slate-50 to-blue-50 py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-12">
      <div className="relative max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: -50 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-12 md:mb-16 lg:mb-20 px-4"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-slate-700">
            Your Career Starts With Us, <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
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
            <div className="relative h-full bg-white border-2 border-blue-200 rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02] hover:border-blue-400">
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-purple-50/0 group-hover:from-blue-50/50 group-hover:to-purple-50/50 rounded-3xl transition-all duration-500"></div>
              
              <div className="relative flex flex-col space-y-6 md:space-y-8">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={leftInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300"
                >
                  <img
                    src="/elements/CareerStart1.svg"
                    alt="Number 1"
                    className="w-12 h-12 sm:w-14 sm:h-14"
                  />
                </motion.div>
                
                <p className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-700 leading-relaxed">
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
            <div className="relative h-full bg-white border-2 border-orange-200 rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02] hover:border-orange-400">
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50/0 to-orange-50/0 group-hover:from-purple-50/50 group-hover:to-orange-50/50 rounded-3xl transition-all duration-500"></div>
              
              <div className="relative flex flex-col space-y-6 md:space-y-8">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={rightInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-purple-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300"
                >
                  <img
                    src="/elements/CareerStart2.svg"
                    alt="Number 2"
                    className="w-12 h-12 sm:w-14 sm:h-14"
                  />
                </motion.div>
                
                <p className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-700 leading-relaxed">
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