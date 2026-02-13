"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

function CareerPath() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="bg-slate-50 py-16 lg:py-12 px-4"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20">
        {/* ===== LEFT IMAGE ===== */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
          className="flex justify-center lg:justify-start order-2 lg:order-1"
        >
          <div className="relative w-full max-w-lg">
            {/* Decorative background elements */}
            <div className="absolute -inset-6 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl -z-10 opacity-60" />
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-40 h-40 bg-teal-500/10 rounded-full blur-2xl" />
            
            {/* Main image container */}
            <div className="relative overflow-hidden border-2 border-white bg-white shadow-xl rounded-lg">
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
              >
                <Image
                  src="/CareerPath1.png"
                  alt="Career Path"
                  width={520}
                  height={520}
                  className="w-full h-auto"
                  priority
                />
              </motion.div>
              
              {/* Gradient overlay on hover */}
             
              
              {/* Top accent line with gradient */}
              <motion.div
                className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-blue-500 to-blue-500"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                style={{ transformOrigin: 'left' }}
              />
            </div>
          </div>
        </motion.div>

        {/* ===== RIGHT CONTENT ===== */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1], delay: 0.2 }}
          className="order-1 lg:order-2"
        >
          {/* Small label with color */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full" />
            <p className="text-sm font-medium text-slate-600 tracking-wide uppercase">
              Your Future Awaits
            </p>
          </motion.div>

          {/* Main heading */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 mb-4 tracking-tight leading-tight">
            Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-700">Journey</span>
          </h2>

          {/* Accent line with gradient */}
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-blue-500 to-blue-500 mb-6 rounded-full"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{ transformOrigin: 'left' }}
          />

          {/* Subheading */}
          <h3 className="text-xl lg:text-2xl font-semibold text-slate-900 mb-5">
            Where Will Your Journey Take You?
          </h3>

          {/* Description */}
          <div className="space-y-5">
            <p className="text-slate-600 text-base lg:text-lg leading-relaxed">
              The best part? You're not limited. Whether you're just starting or
              aiming for an advanced role, our programs offer a clear path to
              exciting opportunities at every stage of your career.
            </p>

            {/* Programs list with color accents */}
            <div className="pt-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-1 h-1 bg-blue-500 rounded-full" />
                <p className="text-sm font-medium text-slate-600 uppercase tracking-wide">
                  Available Programs
                </p>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {[
                  { name: "Data Science & AI", color: "from-blue-500 to-indigo-500" },
                  { name: "Multimedia & Animation", color: "from-indigo-500 to-purple-500" }
                ].map((program, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + idx * 0.1 }}
                    className="group relative"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${program.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded`} />
                    <span className="relative inline-block px-4 py-2 bg-white border-2 border-slate-200 text-slate-700 text-sm font-medium rounded hover:border-slate-300 transition-colors duration-300">
                      {program.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom CTA with color accent */}
          
        </motion.div>
      </div>
    </section>
  );
}

export default CareerPath;