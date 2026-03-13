"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const careers = [
  {
    img: "/career1.svg",
    alt: "AI Adoption",
    label: "AI Adoption",
    description: "Leading organizations in AI transformation",
  },
  {
    img: "/career2.svg",
    alt: "Career Opportunities",
    label: "Career Opportunities",
    description: "Access to top-tier tech companies",
  },
  {
    img: "/career3.svg",
    alt: "Industry Preparedness",
    label: "Industry Preparedness",
    description: "Job-ready from day one",
  },
  {
    img: "/career4.svg",
    alt: "Innovation Leadership",
    label: "Innovation Leadership",
    description: "Drive technological advancement",
  },
  {
    img: "/career5.svg",
    alt: "Practical Excellence",
    label: "Practical Excellence",
    description: "Real-world project experience",
  },
  {
    img: "/career6.svg",
    alt: "Seamless Integration",
    label: "Seamless Integration",
    description: "Theory meets industry practice",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
};

const CareerOpportunities = () => {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    amount: 0.2,
  });

  return (
    <section ref={ref} className="relative bg-white py-16 lg:py-24 px-4">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 lg:mb-16"
        >
          <div className="flex items-end justify-between gap-4 flex-wrap">

            <div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-slate-900 mb-3 tracking-tight">
                Career &{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-700">
                  Opportunities
                </span>
              </h2>

              <motion.div
                className="w-16 h-0.5 bg-slate-900"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{ transformOrigin: "left" }}
              />
            </div>

          </div>
        </motion.header>

        {/* CARDS GRID */}
        <motion.ul
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6"
        >
          {careers.map((career, i) => (
            <MinimalCareerCard key={i} career={career} />
          ))}
        </motion.ul>

        {/* MOBILE CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="lg:hidden mt-8 text-center"
        >
          <p className="text-slate-600 text-base">
            Step into high-demand tech careers with industry-ready skills
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default CareerOpportunities;

/* ================= CAREER CARD ================= */

const MinimalCareerCard = ({ career }) => {
  return (
    <motion.li variants={itemVariants}>
      <article className="group relative">

        <motion.div
          className="relative p-6 lg:p-8 h-full flex flex-col bg-white border border-slate-200 hover:shadow-lg transition-all duration-300"
          whileHover={{ y: -2 }}
        >

          {/* Hover Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-slate-900 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />

          {/* Icon */}
          <div className="mb-4">
            <Image
              src={career.img}
              alt={career.alt}
              width={32}
              height={32}
              className="opacity-60"
            />
          </div>

          {/* Title */}
          <h3 className="text-lg font-semibold text-slate-900 mb-1.5 leading-tight">
            {career.label}
          </h3>

          {/* Description */}
          <p className="text-sm text-slate-600 leading-relaxed">
            {career.description}
          </p>

        </motion.div>

      </article>
    </motion.li>
  );
};