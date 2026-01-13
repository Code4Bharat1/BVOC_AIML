"use client";
import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Brain, Code, Shield, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const initialDegrees = [
  {
    id: 1,
    name: "Artificial Intelligence & Machine Learning",
    shortName: "AI & ML",
    icon: Brain,
    color: "#007BFF",
    description:
      "Master the future of technology with cutting-edge AI and ML techniques",
    features: ["Deep Learning", "Neural Networks", "Data Science", "Computer Vision"],
  },
  {
    id: 2,
    name: "Computer Science",
    shortName: "Computer Science",
    icon: Code,
    color: "#FF7F00",
    description:
      "Build a strong foundation in software development and computational thinking",
    features: ["Full-Stack Development", "Algorithms", "Cloud Computing", "DevOps"],
  },
  {
    id: 3,
    name: "Cyber Security",
    shortName: "Cyber Security",
    icon: Shield,
    color: "#007BFF",
    description:
      "Protect digital assets and become an expert in information security",
    features: ["Ethical Hacking", "Network Security", "Cryptography", "Threat Analysis"],
  },
];

const positions = [
  { x: -220, rotate: -12, scale: 0.95, z: 10 }, // left
  { x: 0, rotate: 0, scale: 1.06, z: 30 },     // center
  { x: 220, rotate: 12, scale: 0.95, z: 10 },  // right
];

const DegreesShowcase = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.2 });

  const [cards, setCards] = useState(initialDegrees);

  const handleCardClick = (index) => {
    if (index === 1) return;

    const newOrder = [...cards];

    if (index === 0) newOrder.splice(1, 0, newOrder.shift());
    else if (index === 2) newOrder.splice(1, 0, newOrder.pop());

    setCards(newOrder);
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-28 px-4 bg-[#0b1220] overflow-hidden"
    >
      {/* ===== GRID BACKGROUND ===== */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(#007BFF 1px, transparent 1px),
            linear-gradient(90deg, #007BFF 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* ===== HEADER ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 lg:mb-24"
        >
          <div className="inline-block mb-4 px-5 py-2 rounded-full bg-blue-500/10 text-[#007BFF] text-xs font-semibold tracking-wider">
            OUR PROGRAMS
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Choose Your Path
          </h2>

          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto">
            Industry-aligned Bachelor’s programs designed for future-ready careers.
          </p>
        </motion.div>

        {/* ===== MOBILE STACK ===== */}
        <div className="grid gap-8 lg:hidden">
          {cards.map((degree) => (
            <div
              key={degree.id}
              className="
                w-full bg-[#111827]
                rounded-2xl p-8
                border border-white/10 shadow-xl
                flex flex-col
              "
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                style={{
                  background: `${degree.color}20`,
                  border: `1px solid ${degree.color}50`,
                }}
              >
                <degree.icon className="w-7 h-7" style={{ color: degree.color }} />
              </div>

              <h3 className="text-xl font-bold text-white mb-1">
                {degree.shortName}
              </h3>
              <p className="text-sm text-gray-400 mb-4">{degree.name}</p>

              <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                {degree.description}
              </p>

              <div className="space-y-2 mb-8">
                {degree.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2
                      className="w-4 h-4"
                      style={{ color: degree.color }}
                    />
                    <span className="text-sm text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-auto">
                <Link href="/contact">
                  <button
                    className="w-full px-5 py-3 rounded-xl font-semibold text-white flex items-center justify-center gap-2"
                    style={{ backgroundColor: "#FF7F00" }}
                  >
                    Explore Program
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* ===== DESKTOP FAN STACK ===== */}
        <div className="relative h-[620px] items-center justify-center hidden lg:flex">
          {cards.map((degree, index) => {
            const pos = positions[index];

            return (
              <motion.div
                key={degree.id}
                onClick={() => handleCardClick(index)}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.15 }}
                className="absolute cursor-pointer"
                style={{ zIndex: pos.z }}
              >
                <motion.div
                  animate={{
                    x: pos.x,
                    rotate: pos.rotate,
                    scale: pos.scale,
                  }}
                  transition={{ type: "spring", stiffness: 260, damping: 24 }}
                  className="
                    w-[360px] h-[500px]
                    bg-[#111827]
                    rounded-2xl p-8
                    border border-white/10
                    shadow-2xl flex flex-col
                  "
                >
                  <div
                    className="w-16 h-16 rounded-xl flex items-center justify-center mb-6"
                    style={{
                      background: `${degree.color}20`,
                      border: `1px solid ${degree.color}50`,
                    }}
                  >
                    <degree.icon className="w-8 h-8" style={{ color: degree.color }} />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-1">
                    {degree.shortName}
                  </h3>
                  <p className="text-sm text-gray-400 mb-4">{degree.name}</p>

                  <p className="text-gray-300 text-base mb-6 leading-relaxed">
                    {degree.description}
                  </p>

                  <div className="space-y-2 mb-8">
                    {degree.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle2
                          className="w-4 h-4"
                          style={{ color: degree.color }}
                        />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto">
                    <Link href="/contact">
                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="w-full px-5 py-3 rounded-xl font-semibold text-white flex items-center justify-center gap-2"
                        style={{ backgroundColor: "#FF7F00" }}
                      >
                        Explore Program
                        <ArrowRight className="w-4 h-4" />
                      </motion.button>
                    </Link>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* ===== BOTTOM CTA ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-20 lg:mt-24"
        >
          <p className="text-gray-400 mb-6">
            Not sure which program suits you best?
          </p>

          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="
                px-10 py-4 rounded-xl
                bg-[#007BFF] text-white font-semibold
                shadow-lg hover:shadow-xl transition
              "
            >
              Schedule a Consultation
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default DegreesShowcase;
