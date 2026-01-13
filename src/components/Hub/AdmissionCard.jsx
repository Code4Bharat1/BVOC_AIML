"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  GraduationCap,
  Rocket,
  ArrowRight,
  Brain,
  Code,
  Shield,
} from "lucide-react";
import Link from "next/link";

const degrees = [
  { id: 1, name: "AI & ML", icon: Brain },
  { id: 2, name: "Computer Science", icon: Code },
  { id: 3, name: "Cyber Security", icon: Shield },
];

const AdmissionCard = () => {
  return (
    <section className="relative flex w-full justify-center items-center min-h-screen px-4 py-20 bg-gradient-to-b from-[#f8fafc] to-white overflow-hidden">
      {/* Soft Ambient Blobs */}
      <motion.div
        className="absolute top-24 left-10 w-96 h-96 rounded-full bg-blue-300/20 blur-[160px]"
        animate={{ scale: [1, 1.15, 1], x: [0, 30, 0], y: [0, -30, 0] }}
        transition={{ duration: 18, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-[420px] h-[420px] rounded-full bg-orange-300/20 blur-[160px]"
        animate={{ scale: [1, 1.2, 1], x: [0, -30, 0], y: [0, 30, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
      />

      {/* ================= GLASS CARD ================= */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="
          relative w-full max-w-5xl
          rounded-3xl p-10 lg:p-16 text-center
          backdrop-blur-xl bg-white/60
          border border-white/40
          shadow-[0_25px_60px_rgba(0,0,0,0.08)]
        "
      >
        {/* subtle border glow */}
        <div className="absolute inset-0 rounded-3xl pointer-events-none ring-1 ring-blue-200/40" />

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2 mb-6 rounded-full bg-orange-100/60 text-orange-600 text-xs font-semibold tracking-widest uppercase">
          <Sparkles className="w-4 h-4" />
          Limited Seats Available
        </div>

        {/* Heading */}
        <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-[#2C2C2C]">
          Admissions Now Open
        </h2>

        {/* Description */}
        <p className="text-gray-600 text-base lg:text-xl max-w-4xl mx-auto mb-10 leading-relaxed">
          Step into the future with a{" "}
          <span className="font-semibold text-[#007BFF]">NAAC A+</span> Accredited
          program and gain the edge with a{" "}
          <span className="font-semibold text-[#FF7F00]">
            UGC-approved Bachelor's
          </span>{" "}
          in AI & ML — crafted to prepare you for the real world.
        </p>

        {/* Programs */}
        <div className="mb-10">
          <div className="text-xs mb-4 text-gray-500 font-semibold tracking-widest uppercase">
            Available Programs
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {degrees.map((degree) => (
              <motion.div
                key={degree.id}
                whileHover={{ y: -4 }}
                className="
                  flex items-center gap-2 px-6 py-3
                  rounded-xl bg-white/70 backdrop-blur-md
                  border border-gray-200 shadow-sm
                "
              >
                <degree.icon className="w-4 h-4 text-[#007BFF]" />
                <span className="text-sm font-semibold text-gray-800">
                  {degree.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Subheading */}
        <h3 className="text-xl lg:text-3xl font-semibold mb-4 text-[#007BFF]">
          A Unique Blend of Industry & Academia
        </h3>

        <p className="text-gray-600 mb-10 text-base lg:text-lg max-w-3xl mx-auto leading-relaxed">
          Join a course that goes beyond theory — experience practical, hands-on
          learning in collaboration with top industry leaders.
        </p>

        {/* Feature Pills */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { icon: GraduationCap, text: "NAAC A+ Accredited" },
            { icon: Sparkles, text: "Industry Ready" },
            { icon: Rocket, text: "Career Focused" },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -3 }}
              className="
                flex items-center gap-2 px-5 py-2.5
                rounded-full bg-white/70 backdrop-blur-md
                border border-gray-200 shadow-sm
              "
            >
              <item.icon className="w-4 h-4 text-[#007BFF]" />
              <span className="text-sm font-medium text-gray-800">
                {item.text}
              </span>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <Link href="/contact">
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="
              inline-flex items-center gap-3
              px-10 py-4 rounded-xl
              bg-[#007BFF] text-white font-semibold
              shadow-lg hover:shadow-xl transition
            "
          >
            Book Admission Slot
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </Link>
      </motion.div>
    </section>
  );
};

export default AdmissionCard;
