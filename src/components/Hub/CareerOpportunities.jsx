"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Sparkles } from "lucide-react/dist/cjs/lucide-react";

const careers = [
  { img: "/career1.svg", alt: "Career 1", label: "Adoption" },
  { img: "/career2.svg", alt: "Career 2", label: "Opportunities" },
  { img: "/career3.svg", alt: "Career 3", label: "Preparedness" },
  { img: "/career4.svg", alt: "Career 4", label: "Innovation" },
  { img: "/career5.svg", alt: "Career 5", label: "Practicality" },
  { img: "/career6.svg", alt: "Career 6", label: "Integration" },
];

const CareerOpportunities = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-white py-10 px-6">
      <div className="max-w-7xl mx-auto">

        {/* ===== HEADER ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-[#2C2C2C] mb-4">
            Career & Opportunities
          </h2>

             <div className="flex items-center justify-center gap-2 mb-3">
            <Sparkles className="text-[#FF7F00]" size={18} />
            <p className="text-lg lg:text-xl text-[#007BFF] font-semibold">
              Step Into High-Demand Tech Careers
            </p>
            <Sparkles className="text-[#FF7F00]" size={18} />
          </div>
        </motion.div>

        {/* ===== CARD GRID ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {careers.map((career, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 250, damping: 18 }}
              className="
                bg-[#f8fafc]
                rounded-2xl
                p-8
                flex items-center gap-5
                border border-gray-100
                shadow-sm hover:shadow-md
                transition-all
              "
            >
              {/* ICON */}
              <div
                className="
                  w-16 h-16
                  rounded-xl
                  bg-white
                  flex items-center justify-center
                  shadow-sm
                  border border-gray-100
                "
              >
                <img src={career.img} alt={career.alt} className="w-10 h-10" />
              </div>

              {/* TEXT */}
              <div>
                <h4 className="text-lg font-semibold text-[#2C2C2C]">
                  {career.label}
                </h4>
                <p className="text-sm text-gray-600 mt-1">
                  Industry-focused learning approach
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CareerOpportunities;
