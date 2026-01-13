"use client";
import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Brain, Code, Shield } from "lucide-react";
import Link from "next/link";

const degrees = [
  { id: 1, name: "AI & ML", icon: Brain },
  { id: 2, name: "Computer Science", icon: Code },
  { id: 3, name: "Cyber Security", icon: Shield },
];

const Welcome = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isPdfModalOpen, setPdfModalOpen] = useState(false);

  return (
    <section
      ref={ref}
      className="relative py-28 px-6 lg:px-24 flex flex-col lg:flex-row items-center gap-20 bg-[#f9fafb] overflow-hidden"
    >
      {/* ================= LEFT CONTENT ================= */}
      <motion.div
        className="relative z-10 lg:w-1/2"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-[#007BFF] text-xs font-semibold tracking-wide mb-8">
          FUTURE OF EDUCATION
        </div>

        {/* Heading */}
        <h1 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight text-[#2C2C2C]">
          Welcome to the <br />
          Future of <span className="text-[#007BFF]">Learning</span>
        </h1>

        {/* Description */}
        <p className="mb-10 text-gray-600 text-lg max-w-xl">
          Strategic partnership with{" "}
          <span className="font-semibold text-[#007BFF]">
            Nexcore Alliance LLP
          </span>
          , launching{" "}
          <span className="font-semibold text-[#FF7F00]">B.Voc</span> degree
          programs that integrate industry expertise with academic excellence.
        </p>

        {/* Stats */}
        <div className="flex gap-12 mb-12">
          {[
            { number: "100%", label: "Industry Ready" },
            { number: "AI/ML", label: "Focused" },
            { number: "UGC", label: "Approved" },
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-2xl font-bold text-[#2C2C2C]">
                <span className="text-[#007BFF]">{stat.number}</span>
              </div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Programs */}
        <div className="mb-12">
          <div className="text-xs text-gray-400 mb-4 tracking-wider">
            AVAILABLE PROGRAMS
          </div>
          <div className="flex flex-wrap gap-3">
            {degrees.map((degree) => (
              <motion.div
                key={degree.id}
                whileHover={{ y: -4 }}
                className="flex items-center gap-2 px-5 py-3 bg-white border border-gray-200 rounded-xl shadow-sm"
              >
                <degree.icon className="w-4 h-4 text-[#007BFF]" />
                <span className="text-sm font-medium text-gray-800">
                  {degree.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-wrap gap-4">
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 rounded-xl bg-[#007BFF] cursor-pointer text-white font-semibold shadow-lg hover:shadow-xl transition"
            >
              Enroll Now
            </motion.button>
          </Link>

          {/* <motion.button
            whileHover={{ scale: 1.03 }}
            onClick={() => setPdfModalOpen(true)}
            className="px-8 py-4 rounded-xl border border-gray-300 text-gray-800 font-semibold hover:bg-gray-100 transition"
          >
            Download Brochure
          </motion.button> */}
        </div>
      </motion.div>

      {/* ================= RIGHT ILLUSTRATION ================= */}
      <motion.div
        className="hidden lg:flex lg:w-1/2 justify-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.9 }}
      >
        <motion.div
          className="rounded-3xl bg-white p-14 shadow-xl border border-gray-100"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Your existing SVG robot – unchanged */}
          <svg width="350" height="350" viewBox="0 0 350 350">
            <defs>
              <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#007BFF" />
                <stop offset="100%" stopColor="#80C8F7" />
              </linearGradient>
            </defs>

            <g transform="translate(175, 175)">
              <rect x="-45" y="-90" width="90" height="70" rx="18" fill="url(#g1)" />
              <circle cx="-20" cy="-60" r="8" fill="#fff" />
              <circle cx="20" cy="-60" r="8" fill="#fff" />
              <path
                d="M -20,-35 Q 0,-25 20,-35"
                stroke="#FF7F00"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
              />
              <rect
                x="-50"
                y="-15"
                width="100"
                height="85"
                rx="18"
                fill="url(#g1)"
                opacity="0.9"
              />
            </g>
          </svg>
        </motion.div>
      </motion.div>

      {/* ================= PDF MODAL ================= */}
      <AnimatePresence>
        {isPdfModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setPdfModalOpen(false)}
          >
            <motion.div
              className="relative w-full max-w-5xl h-[90vh] bg-white rounded-xl shadow-2xl overflow-hidden"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setPdfModalOpen(false)}
                className="absolute top-4 right-4 bg-[#007BFF] text-white p-2 rounded-lg hover:scale-105 transition"
              >
                <X size={18} />
              </button>

              <iframe
                src="/brochure/b.pdf"
                className="w-full h-full"
                style={{ border: "none" }}
                title="Brochure"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Welcome;
