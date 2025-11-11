"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

// Simple Fade-in animation wrapper
const FadeIn = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};

const ModernInfra = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const features = [
    {
      id: 1,
      icon: "📹",
      title: "Explore Through",
      subtitle: "Videos & Photos",
      color: "#4A90E2",
    },
    {
      id: 2,
      icon: "💡",
      title: "Innovation-Driven",
      subtitle: "Workspaces",
      color: "#E67E22",
    },
    {
      id: 3,
      icon: "🏛️",
      title: "Dynamic &",
      subtitle: "Comfortable Spaces",
      color: "#9B59B6",
    },
    {
      id: 4,
      icon: "🔬",
      title: "Cutting-Edge",
      subtitle: "Technology",
      color: "#16A085",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-white via-slate-50 to-blue-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <FadeIn delay={0.1}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-white rounded-full shadow-lg mb-6 border-4 border-slate-100">
              <span className="text-5xl">🎓</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-light text-slate-700 mb-3 leading-tight">
              Modern{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent font-semibold">
                Infrastructure
              </span>
            </h1>
            <p className="text-xl text-slate-600">
              Experience Our Campus
            </p>
          </div>
        </FadeIn>

        {/* Features Grid Section */}
        <FadeIn delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="bg-white rounded-3xl p-8 shadow-md border-2 border-slate-100 hover:shadow-xl transition-all duration-300 cursor-pointer text-center"
                onMouseEnter={() => setHoveredCard(feature.id)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  borderColor: hoveredCard === feature.id ? feature.color : '#e2e8f0',
                  transform: hoveredCard === feature.id ? 'translateY(-5px)' : 'translateY(0)',
                }}
              >
                <div 
                  className="w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto transition-all duration-300"
                  style={{
                    backgroundColor: hoveredCard === feature.id ? `${feature.color}15` : '#f8fafc',
                  }}
                >
                  <span className="text-5xl">{feature.icon}</span>
                </div>
                <h3 
                  className="text-2xl font-light mb-2 transition-colors duration-300"
                  style={{
                    color: hoveredCard === feature.id ? feature.color : '#334155',
                  }}
                >
                  {feature.title}
                </h3>
                <p 
                  className="text-xl font-medium transition-colors duration-300"
                  style={{
                    color: hoveredCard === feature.id ? feature.color : '#64748b',
                  }}
                >
                  {feature.subtitle}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Mobile Optimized Section */}
        <div className="block lg:hidden mt-12">
          <FadeIn delay={0.3}>
            <div className="space-y-6">
              {features.map((feature) => (
                <div
                  key={`mobile-${feature.id}`}
                  className="bg-white rounded-2xl p-6 shadow-md border-2 border-slate-100 hover:shadow-xl transition-all duration-300"
                  style={{
                    borderColor: '#e2e8f0',
                  }}
                >
                  <div className="flex items-center gap-5">
                    <div 
                      className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{
                        backgroundColor: `${feature.color}15`,
                      }}
                    >
                      <span className="text-4xl">{feature.icon}</span>
                    </div>
                    <div className="text-left">
                      <p className="text-xl font-light text-slate-700 leading-relaxed">
                        {feature.title}
                      </p>
                      <p 
                        className="text-xl font-medium"
                        style={{ color: feature.color }}
                      >
                        {feature.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

      </div>
    </div>
  );
};

export default ModernInfra;