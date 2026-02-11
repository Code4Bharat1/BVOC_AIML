"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  GraduationCap,
  Rocket,
  ArrowRight,
  CheckCircle,
  Award,
  Users,
} from "lucide-react";
import Link from "next/link";

const AdmissionCard = () => {
  return (
    <section className="relative w-full px-4 sm:px-6 lg:px-5 py-5 sm:py-5 lg:py-1 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      {/* Optimized Decorative Elements - Using transform instead of large blur for better performance */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-blue-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-0 w-72 h-72 bg-orange-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* ================= MAIN CONTENT CARD ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="
            relative
            rounded-3xl sm:rounded-[2rem] p-8 sm:p-12 lg:p-16
            bg-white
            border border-slate-200
            shadow-xl shadow-slate-200/50
          "
        >
          {/* Top Accent Line */}
          
          {/* Content Container */}
          <div className="text-center">
            {/* Badge */}
            

            {/* Main Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-5 sm:mb-6 text-slate-900 tracking-tight"
            >
              Admissions Now <span className="text-blue-600">Open</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-4xl mx-auto mb-8 sm:mb-10 leading-relaxed"
            >
              Step into the future with a{" "}
              <span className="font-semibold text-blue-600">NAAC A+</span> Accredited
              program. Gain the competitive edge with a{" "}
              <span className="font-semibold text-orange-600">
                UGC-approved Bachelor's
              </span>{" "}
              degree designed to prepare you for real-world challenges.
            </motion.p>

            {/* Divider */}
            <div className="flex items-center justify-center gap-3 mb-8 sm:mb-10">
              <div className="h-px w-16 sm:w-24 bg-gradient-to-r from-transparent to-slate-300" />
              <div className="w-2 h-2 rounded-full bg-blue-500" />
              <div className="h-px w-16 sm:w-24 bg-gradient-to-l from-transparent to-slate-300" />
            </div>

            {/* Subheading */}
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 text-slate-900"
            >
              A Unique Blend of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-700">
                Industry & Academia
              </span>
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-sm sm:text-base lg:text-lg text-slate-600 mb-10 sm:mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Join a program that transcends traditional education — experience practical, hands-on
              learning in collaboration with industry leaders.
            </motion.p>

            {/* Feature Pills - Optimized Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-12 max-w-3xl mx-auto"
            >
              {[
                { icon: Award, text: "NAAC A+ Accredited", color: "blue" },
                { icon: Users, text: "Industry Partnerships", color: "blue" },
                { icon: Rocket, text: "Career Focused", color: "blue" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
                  whileHover={{ y: -4 }}
                  className="
                    flex items-center justify-center gap-3
                    px-5 py-4
                    rounded-2xl
                    bg-gradient-to-br from-blue-50 to-blue-100/50
                    border border-blue-200/50
                    transition-all duration-300
                    hover:shadow-lg hover:shadow-blue-200/30
                  "
                >
                  <item.icon className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-sm sm:text-base font-semibold text-slate-800">
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Key Benefits List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-10 sm:mb-12 text-sm sm:text-base text-slate-600"
            >
              {[
                "Flexible Learning",
                "Expert Faculty",
                "Placement Support",
                "Live Projects",
              ].map((benefit, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="
                    inline-flex items-center gap-3
                    px-8 sm:px-10 py-4 sm:py-5
                    rounded-2xl
                    bg-gradient-to-r from-blue-600 to-blue-700
                    text-white font-semibold text-base sm:text-lg
                    shadow-lg shadow-blue-500/30
                    hover:shadow-xl hover:shadow-blue-500/40
                    hover:from-blue-700 hover:to-blue-800
                    transition-all duration-300
                  "
                >
                  Book Your Admission Slot
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>

              {/* Helper Text */}
              <p className="text-xs sm:text-sm text-slate-500 mt-4">
                Secure your spot today • No registration fee
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Stats Bar - Optional Bottom Section */}
       
      </div>
    </section>
  );
};

export default AdmissionCard;