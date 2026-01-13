"use client";

import React, { useState } from "react";
import { FaVideo, FaLightbulb, FaBuilding, FaMicroscope, FaGraduationCap } from "react-icons/fa";

const ModernInfra = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const features = [
    { id: 1, icon: FaVideo, title: "Explore Through", subtitle: "Videos & Photos", color: "#2563EB" },
    { id: 2, icon: FaLightbulb, title: "Innovation-Driven", subtitle: "Workspaces", color: "#F59E0B" },
    { id: 3, icon: FaBuilding, title: "Dynamic &", subtitle: "Comfortable Spaces", color: "#2563EB" },
    { id: 4, icon: FaMicroscope, title: "Cutting-Edge", subtitle: "Technology", color: "#F59E0B" },
  ];

  return (
    <div className="bg-[#F8FAFC] py-20 px-4 relative overflow-hidden">
      {/* Subtle Solid Background Elements */}
      <div
        className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl"
        style={{ background: "rgba(37, 99, 235, 0.05)" }}
      />
      <div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl"
        style={{ background: "rgba(245, 158, 11, 0.05)" }}
      />

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .fade-in {
          animation: fadeInUp 0.6s ease-out;
        }

        .feature-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .feature-card:hover {
          transform: translateY(-8px);
        }

        .icon-circle {
          transition: background-color 0.3s ease;
        }
      `}</style>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 fade-in">
          <div
            className="inline-flex items-center justify-center w-24 h-24 bg-white rounded-full shadow-lg mb-6"
            style={{ border: "4px solid rgba(37, 99, 235, 0.15)" }}
          >
            <FaGraduationCap className="text-5xl" style={{ color: "#2563EB" }} />
          </div>

          <h1
            className="text-4xl md:text-5xl font-bold mb-3 leading-tight"
            style={{
              fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif",
              color: "#0A2540",
            }}
          >
            Modern{" "}
            <span style={{ color: "#F59E0B", fontWeight: "bold" }}>
              Infrastructure
            </span>
          </h1>

          <p
            className="text-xl font-medium"
            style={{
              fontFamily: "'Inter', -apple-system, system-ui, sans-serif",
              color: "rgba(15, 23, 42, 0.7)",
            }}
          >
            Experience Our Campus
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 fade-in">
          {features.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.id}
                className="feature-card bg-white rounded-2xl p-8 shadow-md border-2 text-center"
                onMouseEnter={() => setHoveredCard(feature.id)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  borderColor: hoveredCard === feature.id ? feature.color : "#E5E7EB",
                  boxShadow:
                    hoveredCard === feature.id
                      ? `0 20px 40px ${feature.color}25`
                      : "0 4px 6px rgba(0,0,0,0.08)",
                }}
              >
                <div
                  className="icon-circle w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto"
                  style={{
                    backgroundColor:
                      hoveredCard === feature.id ? `${feature.color}20` : "#F1F5F9",
                  }}
                >
                  <IconComponent
                    className="text-4xl"
                    style={{
                      color: hoveredCard === feature.id ? feature.color : "#475569",
                    }}
                  />
                </div>

                <h3
                  className="text-xl font-bold mb-2"
                  style={{
                    fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif",
                    color: "#0F172A",
                  }}
                >
                  {feature.title}
                </h3>

                <p
                  className="text-lg font-semibold"
                  style={{
                    fontFamily: "'Inter', -apple-system, system-ui, sans-serif",
                    color: "#475569",
                  }}
                >
                  {feature.subtitle}
                </p>
              </div>
            );
          })}
        </div>

        {/* Mobile */}
        <div className="block lg:hidden space-y-6 fade-in">
          {features.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={`mobile-${feature.id}`}
                className="bg-white rounded-2xl p-6 shadow-md border-2 border-slate-200"
              >
                <div className="flex items-center gap-5">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${feature.color}20` }}
                  >
                    <IconComponent className="text-3xl" style={{ color: feature.color }} />
                  </div>
                  <div>
                    <p
                      className="text-lg font-bold"
                      style={{ color: "#0F172A" }}
                    >
                      {feature.title}
                    </p>
                    <p
                      className="text-lg font-semibold"
                      style={{ color: "#475569" }}
                    >
                      {feature.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ModernInfra;
