"use client";

import React, { useState } from "react";
import { FaVideo, FaLightbulb, FaBuilding, FaMicroscope, FaGraduationCap } from "react-icons/fa";

const ModernInfra = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const features = [
    {
      id: 1,
      icon: FaVideo,
      title: "Explore Through",
      subtitle: "Videos & Photos",
      color: "#007BFF",
    },
    {
      id: 2,
      icon: FaLightbulb,
      title: "Innovation-Driven",
      subtitle: "Workspaces",
      color: "#FF7F00",
    },
    {
      id: 3,
      icon: FaBuilding,
      title: "Dynamic &",
      subtitle: "Comfortable Spaces",
      color: "#007BFF",
    },
    {
      id: 4,
      icon: FaMicroscope,
      title: "Cutting-Edge",
      subtitle: "Technology",
      color: "#FF7F00",
    },
  ];

  return (
    <div className="bg-white py-20 px-4 relative overflow-hidden">
      {/* Subtle Background Elements */}
      <div 
        className="absolute top-0 left-0 w-96 h-96 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(0, 123, 255, 0.05) 0%, transparent 70%)',
          filter: 'blur(80px)'
        }}
      />
      <div 
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255, 127, 0, 0.05) 0%, transparent 70%)',
          filter: 'blur(80px)'
        }}
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
          transition: all 0.3s ease;
        }

        .feature-card:hover {
          transform: translateY(-8px);
        }

        .icon-circle {
          transition: all 0.3s ease;
        }
      `}</style>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 fade-in">
          <div 
            className="inline-flex items-center justify-center w-24 h-24 bg-white rounded-full shadow-lg mb-6"
            style={{
              border: '4px solid rgba(0, 123, 255, 0.1)'
            }}
          >
            <FaGraduationCap className="text-5xl" style={{ color: '#007BFF' }} />
          </div>
          <h1 
            className="text-4xl md:text-5xl font-bold mb-3 leading-tight"
            style={{ 
              fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif",
              color: '#2C2C2C'
            }}
          >
            Modern{" "}
            <span 
              style={{
                background: 'linear-gradient(135deg, #007BFF 0%, #FF7F00 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontWeight: 'bold'
              }}
            >
              Infrastructure
            </span>
          </h1>
          <p 
            className="text-xl font-medium"
            style={{ 
              fontFamily: "'Inter', -apple-system, system-ui, sans-serif",
              color: 'rgba(44, 44, 44, 0.7)'
            }}
          >
            Experience Our Campus
          </p>
        </div>

        {/* Desktop Features Grid */}
        <div 
          className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 fade-in"
          style={{ animationDelay: '0.2s' }}
        >
          {features.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.id}
                className="feature-card bg-white rounded-2xl p-8 shadow-md border-2 text-center"
                onMouseEnter={() => setHoveredCard(feature.id)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  borderColor: hoveredCard === feature.id ? feature.color : '#e5e7eb',
                  boxShadow: hoveredCard === feature.id 
                    ? `0 20px 40px ${feature.color}20` 
                    : '0 4px 6px rgba(0, 0, 0, 0.1)'
                }}
              >
                <div 
                  className="icon-circle w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto"
                  style={{
                    backgroundColor: hoveredCard === feature.id 
                      ? `${feature.color}15` 
                      : '#f8fafc',
                  }}
                >
                  <IconComponent 
                    className="text-4xl" 
                    style={{ 
                      color: hoveredCard === feature.id ? feature.color : 'rgba(44, 44, 44, 0.6)'
                    }} 
                  />
                </div>
                <h3 
                  className="text-xl font-bold mb-2"
                  style={{
                    fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif",
                    color: hoveredCard === feature.id ? feature.color : '#2C2C2C',
                  }}
                >
                  {feature.title}
                </h3>
                <p 
                  className="text-lg font-semibold"
                  style={{
                    fontFamily: "'Inter', -apple-system, system-ui, sans-serif",
                    color: hoveredCard === feature.id ? feature.color : 'rgba(44, 44, 44, 0.6)',
                  }}
                >
                  {feature.subtitle}
                </p>
              </div>
            );
          })}
        </div>

        {/* Mobile Optimized Section */}
        <div 
          className="block lg:hidden space-y-6 fade-in"
          style={{ animationDelay: '0.3s' }}
        >
          {features.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={`mobile-${feature.id}`}
                className="bg-white rounded-2xl p-6 shadow-md border-2"
                style={{
                  borderColor: '#e5e7eb',
                }}
              >
                <div className="flex items-center gap-5">
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{
                      backgroundColor: `${feature.color}15`,
                    }}
                  >
                    <IconComponent className="text-3xl" style={{ color: feature.color }} />
                  </div>
                  <div className="text-left">
                    <p 
                      className="text-lg font-bold leading-tight"
                      style={{ 
                        fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif",
                        color: '#2C2C2C'
                      }}
                    >
                      {feature.title}
                    </p>
                    <p 
                      className="text-lg font-semibold"
                      style={{ 
                        fontFamily: "'Inter', -apple-system, system-ui, sans-serif",
                        color: feature.color 
                      }}
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
