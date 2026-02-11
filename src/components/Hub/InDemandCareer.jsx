"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const cards = [
  {
    title: "AI & Machine Learning Careers",
    text: "AI and Machine Learning professionals are among the most sought-after in the industry today, with opportunities across every major sector.",
    img: "/Hub/AboutUs_Home.png",
  },
  {
    title: "Data-Driven Roles Are Booming",
    text: "Companies are actively hiring experts who can turn complex data into powerful business decisions and competitive advantages.",
    img: "/Hub/MachineLearning_Home.png",
  },
  {
    title: "Tech Is Transforming Every Industry",
    text: "Healthcare, robotics, finance, and autonomous systems are evolving fast — and you can be part of this transformation.",
    img: "/Hub/AiSoftware_Home.png",
  },
];

const InDemandCareer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-white py-16 lg:py-10 px-4">
      <div className="max-w-7xl mx-auto">
        {/* ===== HEADER ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
          className="mb-16 lg:mb-20"
        >
          {/* Small label */}
         

          {/* Main heading */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-slate-900 text-center mb-4 tracking-tight">
            Future-Ready Careers <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-700">Start Here</span>
          </h2>

          {/* Accent line */}
          <motion.div
            className="w-16 h-0.5 bg-slate-900 mx-auto mb-6"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          />

          {/* Subheading */}
          <p className="text-slate-600 text-lg lg:text-xl max-w-3xl mx-auto text-center leading-relaxed">
            Learn skills that align with real industry demand and global career opportunities
          </p>
        </motion.div>

        {/* ===== CARDS ===== */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                delay: 0.2 + i * 0.1, 
                duration: 0.5,
                ease: [0.25, 0.4, 0.25, 1]
              }}
              className="group h-full"
            >
              <div className="relative h-full flex flex-col bg-white border border-slate-200 overflow-hidden transition-all duration-300 hover:border-slate-300 hover:shadow-lg">
                {/* Top accent line - appears on hover */}
                <motion.div
                  className="absolute top-0 left-0 right-0 h-0.5 bg-slate-900 z-10"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{ transformOrigin: 'left' }}
                />

                {/* Image container */}
                <div className="relative h-64 lg:h-72 overflow-hidden bg-slate-50">
                  <motion.img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
                  />
                  
                  {/* Gradient overlay for better text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="flex-1 p-6 lg:p-8 flex flex-col">
                  <h3 className="text-xl lg:text-2xl font-semibold text-slate-900 mb-3 leading-tight">
                    {card.title}
                  </h3>
                  
                  <p className="text-slate-600 text-sm lg:text-base leading-relaxed">
                    {card.text}
                  </p>

                  {/* Bottom spacing element */}
                  <div className="mt-auto pt-6">
                    <motion.div
                      className="w-8 h-0.5 bg-slate-900"
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                      style={{ transformOrigin: 'left' }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InDemandCareer;