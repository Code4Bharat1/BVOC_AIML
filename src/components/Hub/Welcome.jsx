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
          <span className="font-semibold text-zinc-800">
            NEXCORE INSTITUTE OF TECHNOLOGY
          </span>
          , launching{" "}
          <span className="font-semibold text-[#FF7F00]">
            Cyber Security, Computer Science, AI & ML
          </span>{" "}
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
        <svg width="300" height="360" viewBox="0 0 300 360" fill="none">
          {/* Antenna */}
          <line
            x1="150"
            y1="20"
            x2="150"
            y2="45"
            stroke="#FF9800"
            strokeWidth="6"
          />
          <circle cx="150" cy="15" r="8" fill="#FF9800" />

          {/* Head */}
          <rect
            x="80"
            y="45"
            rx="24"
            ry="24"
            width="140"
            height="110"
            fill="#4DA3FF"
          />

          {/* Eyes */}
          <circle cx="120" cy="95" r="10" fill="white" />
          <circle cx="180" cy="95" r="10" fill="white" />

          {/* Smile */}
          <path
            d="M120 125 Q150 145 180 125"
            stroke="#FF9800"
            strokeWidth="5"
            fill="none"
            strokeLinecap="round"
          />

          {/* Body */}
          <rect
            x="70"
            y="165"
            rx="26"
            ry="26"
            width="160"
            height="130"
            fill="#3A8DDE"
          />

          {/* Screen */}
          <rect
            x="105"
            y="195"
            rx="10"
            ry="10"
            width="90"
            height="55"
            fill="#1E3A5F"
          />
          <line
            x1="120"
            y1="215"
            x2="175"
            y2="215"
            stroke="#4DA3FF"
            strokeWidth="4"
          />
          <line
            x1="120"
            y1="235"
            x2="160"
            y2="235"
            stroke="#FF9800"
            strokeWidth="4"
          />

          {/* Arms */}
          <rect
            x="45"
            y="185"
            rx="12"
            ry="12"
            width="25"
            height="80"
            fill="#FF9800"
          />
          <rect
            x="230"
            y="185"
            rx="12"
            ry="12"
            width="25"
            height="80"
            fill="#FF9800"
          />

          {/* Legs */}
          <rect
            x="110"
            y="300"
            rx="14"
            ry="14"
            width="30"
            height="55"
            fill="#4DA3FF"
          />
          <rect
            x="160"
            y="300"
            rx="14"
            ry="14"
            width="30"
            height="55"
            fill="#4DA3FF"
          />

          {/* AI Bubble */}
          <circle cx="245" cy="120" r="18" fill="#FF9800" />
          <text
            x="245"
            y="125"
            textAnchor="middle"
            fontSize="14"
            fill="white"
            fontWeight="700"
            fontFamily="Arial, sans-serif"
          >
            AI
          </text>
        </svg>
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
