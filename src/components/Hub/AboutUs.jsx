"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Brain, Palette, ArrowRight } from "lucide-react";
import Link from "next/link";

const initialDegrees = [
  {
    id: 1,
    name: "Bachelor of Data Science and Artificial Intelligence",
    shortName: "Data Science & AI",
    icon: Brain,
    color: "#007BFF",
    description:
      "Master the future of technology with cutting-edge data science and AI techniques",
    features: ["Deep Learning", "Data Analytics", "Machine Learning", "Predictive Modeling"],
  },
  {
    id: 2,
    name: "Bachelor of Multimedia and Animation",
    shortName: "Multimedia & Animation",
    icon: Palette,
    color: "#007BFF",
    description:
      "Create stunning visuals and bring imagination to life with cutting-edge animation",
    features: ["3D Animation", "Visual Effects", "Motion Graphics", "Digital Design"],
  },
];

const DegreesShowcase = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.2 });

  return (
    <section
      ref={sectionRef}
      className="relative py-5 sm:py-28 lg:py-5 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50 overflow-hidden"
    >
      {/* ===== SUBTLE DECORATIVE ELEMENTS ===== */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-30 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-100 rounded-full blur-3xl opacity-40 pointer-events-none" />
      
      {/* ===== REFINED GRID BACKGROUND ===== */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 0, 0, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: "100px 100px",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ===== REFINED PROFESSIONAL HEADER ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-24 lg:mb-10 max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 mb-8 px-5 py-2.5 rounded-full bg-white border border-blue-100 shadow-sm"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-blue-600 text-xs sm:text-sm font-semibold tracking-widest uppercase">
              Academic Programs
            </span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 sm:mb-7 tracking-tight leading-[1.1]">
            Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-700">Path</span>
          </h2>

          <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
            Industry-aligned Bachelor's programs designed to prepare you for tomorrow's challenges and opportunities.
          </p>
        </motion.div>

        {/* ===== PREMIUM PROFESSIONAL CARD GRID ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-6 xl:gap-8 max-w-5xl mx-auto">
          {initialDegrees.map((degree, index) => (
            <motion.div
              key={degree.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full group"
            >
              {/* Card Container with Elevated Shadow */}
              <div
                className="
                  relative h-full
                  bg-white
                  rounded-3xl p-8
                  border border-slate-200/60
                  transition-all duration-500 ease-out
                  hover:shadow-2xl hover:shadow-slate-200/50
                  hover:border-blue-200/80
                  hover:-translate-y-2
                  flex flex-col
                  overflow-hidden
                "
              >
                {/* Gradient Accent Line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Subtle Background Glow on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 via-blue-50/0 to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon & Badge Row */}
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className="
                        w-16 h-16 rounded-2xl 
                        flex items-center justify-center 
                        bg-gradient-to-br from-blue-50 to-blue-100/50
                        border border-blue-200/50
                        shadow-sm
                        transition-all duration-500
                        group-hover:scale-110 group-hover:shadow-md group-hover:shadow-blue-200/30
                      "
                    >
                      <degree.icon className="w-8 h-8 text-blue-600" />
                    </div>

                    {/* Elegant Number Badge */}
                    <div
                      className="
                        min-w-[2.5rem] h-10 px-3
                        rounded-xl 
                        flex items-center justify-center 
                        text-sm font-bold
                        bg-slate-50 text-slate-400
                        border border-slate-200/50
                        transition-all duration-500
                        group-hover:bg-blue-50 group-hover:text-blue-600 group-hover:border-blue-200
                      "
                    >
                      0{index + 1}
                    </div>
                  </div>

                  {/* Title Section with Enhanced Typography */}
                  <div className="mb-5">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2 tracking-tight leading-tight transition-colors duration-300 group-hover:text-blue-900">
                      {degree.shortName}
                    </h3>
                    <div className="flex items-center gap-3">
                      <div className="h-[2px] w-10 rounded-full bg-gradient-to-r from-blue-500 to-blue-600" />
                      <p className="text-[11px] text-slate-500 font-semibold uppercase tracking-[0.15em] leading-none">
                        Bachelor's Degree
                      </p>
                    </div>
                  </div>

                  {/* Description with Better Line Height */}
                  <p className="text-slate-600 text-[15px] mb-6 leading-relaxed line-clamp-3">
                    {degree.description}
                  </p>

                  {/* Features with Refined Spacing */}
                  <div className="space-y-3 mb-8 flex-grow">
                    {degree.features.map((feature, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: index * 0.15 + i * 0.08 }}
                        className="flex items-start gap-3 group/item"
                      >
                        <div
                          className="
                            w-1.5 h-1.5 rounded-full flex-shrink-0 
                            bg-blue-500 mt-[7px]
                            transition-all duration-300
                            group-hover/item:scale-125
                          "
                        />
                        <span className="text-[15px] text-slate-600 leading-relaxed">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Premium CTA Button */}
                  <div className="mt-auto pt-6 border-t border-slate-100">
                    <Link href="/contact">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="
                          w-full flex items-center justify-between 
                          px-6 py-4 rounded-2xl 
                          font-semibold text-[15px]
                          transition-all duration-300
                          bg-gradient-to-r from-blue-600 to-blue-700 
                          text-white 
                          shadow-lg shadow-blue-500/25
                          hover:shadow-xl hover:shadow-blue-500/40
                          hover:from-blue-700 hover:to-blue-800
                          group/btn
                        "
                      >
                        <span>Explore Program</span>
                        <ArrowRight 
                          className="w-5 h-5 transition-transform duration-300 group-hover/btn:translate-x-1" 
                        />
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ===== REFINED BOTTOM CTA ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-20 sm:mt-15 lg:mt-10 max-w-3xl mx-auto"
        >
          <p className="text-slate-600 text-lg sm:text-xl mb-8 sm:mb-10 font-light leading-relaxed">
            Not sure which program aligns with your career goals?
          </p>

          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.03, y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="
                inline-flex items-center gap-3
                px-10 sm:px-12 py-4 sm:py-5 rounded-2xl
                bg-gradient-to-r from-slate-900 to-slate-800 text-white 
                font-semibold text-base sm:text-lg
                shadow-xl shadow-slate-900/20
                hover:shadow-2xl hover:shadow-slate-900/30
                transition-all duration-500
                border border-slate-800
              "
            >
              <span>Schedule a Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>
          
          <p className="text-slate-500 text-sm mt-6">
            Speak with our academic advisors to find your perfect fit
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default DegreesShowcase;