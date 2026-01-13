"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const InDemandCareer = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      ref={sectionRef}
      className="bg-[#F4F7FB] py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* ===== HEADER ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-4">
            In-Demand Careers in AI & Emerging Tech
          </h2>

          {/* Brand underline */}
          <div className="w-24 h-[3px] mx-auto mb-5 rounded-full bg-[#FF7F00]" />

          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Explore future-ready career paths designed around real industry demand and skills.
          </p>
        </motion.div>

        {/* ===== CONTENT CARD ===== */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="
            bg-white
            rounded-2xl
            border border-[#007BFF]/20
            shadow-[0_10px_35px_rgba(0,123,255,0.12)]
            px-6 py-8
            lg:px-12 lg:py-12
            max-w-6xl
            mx-auto
          "
        >
          {/* Image */}
          <div className="flex justify-center">
            <img
              src="/Career-demand-imgs.svg"
              alt="In-Demand Careers"
              className="w-full max-w-5xl h-auto"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default InDemandCareer;
