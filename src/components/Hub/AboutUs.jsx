"use client";
import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Brain, Code, Shield, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

const degrees = [
  {
    id: 1,
    name: "Artificial Intelligence & Machine Learning",
    shortName: "AI & ML",
    icon: Brain,
    gradient: "from-blue-600 via-orange-500 to-orange-600",
    color: "#007BFF",
    description: "Master the future of technology with cutting-edge AI and ML techniques",
    features: ["Deep Learning", "Neural Networks", "Data Science", "Computer Vision"]
  },
  {
    id: 2,
    name: "Computer Science",
    shortName: "Computer Science",
    icon: Code,
    gradient: "from-orange-500 via-blue-600 to-blue-700",
    color: "#FF7F00",
    description: "Build a strong foundation in software development and computational thinking",
    features: ["Full-Stack Development", "Algorithms", "Cloud Computing", "DevOps"]
  },
  {
    id: 3,
    name: "Cyber Security",
    shortName: "Cyber Security",
    icon: Shield,
    gradient: "from-blue-700 via-orange-600 to-orange-500",
    color: "#007BFF",
    description: "Protect digital assets and become an expert in information security",
    features: ["Ethical Hacking", "Network Security", "Cryptography", "Threat Analysis"]
  }
];

const DegreesShowcase = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, threshold: 0.1 });
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-[#2C2C2C] overflow-hidden py-20 px-4"
    >
      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(#007BFF 1px, transparent 1px), linear-gradient(90deg, #007BFF 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Glowing Orbs */}
      <div className="absolute top-40 left-20 w-96 h-96 bg-[#007BFF] rounded-full opacity-10 blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#FF7F00] rounded-full opacity-10 blur-3xl" />

      {/* Floating Particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full"
          style={{
            background: i % 3 === 0 ? "#007BFF" : i % 3 === 1 ? "#FF7F00" : "#80C8F7",
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            filter: "blur(1px)",
          }}
          animate={{
            y: [0, -40, 0],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#007BFF]/20 to-[#FF7F00]/20 border border-[#007BFF]/30 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-[#FFCD00]" />
            <span className="text-sm font-medium text-white">Our Programs</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            Choose Your Path
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Transform your career with our industry-aligned{" "}
            <span className="bg-gradient-to-r from-[#FF7F00] to-[#FFCD00] bg-clip-text text-transparent font-semibold">
              Bachelor's Degree Programs
            </span>
          </p>

          {/* Gradient Bar */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-1 w-32 mx-auto rounded-full bg-gradient-to-r from-[#007BFF] via-[#FF7F00] to-[#FFCD00] origin-center"
          />
        </motion.div>

        {/* Degrees Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {degrees.map((degree, index) => (
            <motion.div
              key={degree.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              onMouseEnter={() => setHoveredCard(degree.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group relative"
            >
              {/* Card */}
              <div className="relative h-full bg-gradient-to-br from-[#2C2C2C] to-[#1a1a1a] rounded-2xl border border-[#007BFF]/20 overflow-hidden transition-all duration-300 hover:border-[#007BFF]/50 hover:shadow-2xl hover:shadow-[#007BFF]/20">
                {/* Gradient Top Bar */}
                <div
                  className={`h-2 bg-gradient-to-r ${degree.gradient}`}
                />

                <div className="p-6 space-y-6">
                  {/* Icon */}
                  <motion.div
                    animate={{
                      scale: hoveredCard === degree.id ? 1.1 : 1,
                      rotate: hoveredCard === degree.id ? 5 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="relative inline-block"
                  >
                    <div
                      className="absolute inset-0 rounded-2xl blur-xl opacity-50"
                      style={{ background: degree.color }}
                    />
                    <div
                      className="relative w-16 h-16 rounded-2xl flex items-center justify-center"
                      style={{
                        background: `linear-gradient(135deg, ${degree.color}20, ${degree.color}10)`,
                        border: `1px solid ${degree.color}40`,
                      }}
                    >
                      <degree.icon
                        className="w-8 h-8"
                        style={{ color: degree.color }}
                      />
                    </div>
                  </motion.div>

                  {/* Title */}
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {degree.shortName}
                    </h3>
                    <p className="text-sm text-gray-400">{degree.name}</p>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed">
                    {degree.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    {degree.features.map((feature, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.5 + index * 0.15 + i * 0.05 }}
                        className="flex items-center gap-2"
                      >
                        <CheckCircle2
                          className="w-4 h-4 flex-shrink-0"
                          style={{ color: degree.color }}
                        />
                        <span className="text-sm text-gray-300">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full mt-4 px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                    style={{
                      background: `linear-gradient(135deg, ${degree.color}, ${degree.color}CC)`,
                      boxShadow: `0 4px 20px ${degree.color}30`,
                    }}
                  >
                    Explore Program
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </motion.button>
                </div>

                {/* Hover Glow Effect */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredCard === degree.id ? 0.1 : 0 }}
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at center, ${degree.color}, transparent 70%)`,
                  }}
                />
              </div>

              {/* Decorative Corner Elements */}
              <div
                className="absolute -top-2 -right-2 w-20 h-20 rounded-full opacity-20 blur-2xl transition-opacity duration-300 group-hover:opacity-30"
                style={{ background: degree.color }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gray-300 mb-6">
            Can't decide? Our counselors can help you choose the right path
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#007BFF] to-[#FF7F00] text-white font-semibold shadow-lg hover:shadow-2xl transition-all duration-300"
          >
            Schedule a Consultation
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default DegreesShowcase;