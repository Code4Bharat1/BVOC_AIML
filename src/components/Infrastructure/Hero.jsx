"use client";

import React from "react";

const Hero = () => {
  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden bg-white"
    >
      {/* Optimized Floating Particles - Reduced from 15 to 6 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              background: i % 2 === 0 ? '#007BFF' : '#FF7F00',
              opacity: 0.15,
              left: `${15 + i * 15}%`,
              top: `${10 + i * 12}%`,
              animation: `floatUp ${6 + i}s ease-in-out infinite`,
              animationDelay: `${i * 0.8}s`
            }}
          />
        ))}
      </div>

      {/* Lighter Glowing Orbs with CSS Animation */}
      <div 
        className="absolute top-20 left-16 w-72 h-72 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(0, 123, 255, 0.08) 0%, transparent 70%)',
          filter: 'blur(80px)',
          animation: 'moveOrb1 20s ease-in-out infinite',
          willChange: 'transform'
        }}
      />
      <div 
        className="absolute bottom-20 right-24 w-80 h-80 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255, 127, 0, 0.08) 0%, transparent 70%)',
          filter: 'blur(80px)',
          animation: 'moveOrb2 22s ease-in-out infinite',
          willChange: 'transform'
        }}
      />

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes floatUp {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          15% {
            opacity: 0.15;
          }
          85% {
            opacity: 0.15;
          }
          100% {
            transform: translateY(-100px) translateX(15px);
            opacity: 0;
          }
        }

        @keyframes moveOrb1 {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(40px, -40px);
          }
        }

        @keyframes moveOrb2 {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(-40px, 40px);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes floatBox1 {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(10deg);
          }
        }

        @keyframes floatBox2 {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(25px) rotate(-8deg);
          }
        }

        @keyframes floatBox3 {
          0%, 100% {
            transform: translate(-50%, -50%) translateY(0) rotate(0deg);
          }
          50% {
            transform: translate(-50%, -50%) translateY(-15px) rotate(15deg);
          }
        }

        .hero-content {
          animation: fadeInUp 0.8s ease-out;
        }

        .feature-pill {
          transition: all 0.3s ease;
        }

        .feature-pill:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 25px rgba(0, 123, 255, 0.15);
        }
      `}</style>

      <div className="relative flex flex-col lg:flex-row justify-between items-center gap-12 z-10 w-full max-w-7xl">
        {/* LEFT SIDE */}
        <div className="hero-content lg:w-[65%] w-full text-center lg:text-left">
          {/* Mobile Heading */}
          <h1 
            className="lg:hidden text-4xl md:text-5xl font-bold leading-snug mb-6"
            style={{ 
              fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif",
              color: '#2C2C2C'
            }}
          >
            Where Innovation <br /> Meets World-Class <br />
            <span 
              style={{
                background: 'linear-gradient(135deg, #007BFF 0%, #FF7F00 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Infrastructure.
            </span>
          </h1>

          <p 
            className="lg:hidden my-8 text-lg text-center leading-relaxed"
            style={{ 
              fontFamily: "'Inter', -apple-system, system-ui, sans-serif",
              color: 'rgba(44, 44, 44, 0.8)'
            }}
          >
            <span className="font-semibold" style={{ color: '#007BFF' }}>High-Tech</span> Learning Spaces, and{" "}
            <span className="font-semibold" style={{ color: '#FF7F00' }}>Smart Classrooms</span>. Built to empower
            hands-on learning, creativity, and real-world simulation.
          </p>

          {/* Desktop Heading */}
          <h1
            className="hidden lg:block text-5xl md:text-6xl font-bold leading-snug"
            style={{ 
              fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif",
              color: '#2C2C2C',
              animation: 'fadeInUp 0.8s ease-out 0.2s backwards'
            }}
          >
            Where Innovation Meets <br /> World-Class{" "}
            <span 
              style={{
                background: 'linear-gradient(135deg, #007BFF 0%, #FF7F00 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Infrastructure.
            </span>
          </h1>

          <p
            className="hidden lg:block mt-10 text-xl lg:text-2xl leading-relaxed"
            style={{ 
              fontFamily: "'Inter', -apple-system, system-ui, sans-serif",
              color: 'rgba(44, 44, 44, 0.8)',
              animation: 'fadeInUp 0.8s ease-out 0.4s backwards'
            }}
          >
            <span className="font-semibold" style={{ color: '#007BFF' }}>High-Tech</span> Learning Spaces, and{" "}
            <span className="font-semibold" style={{ color: '#FF7F00' }}>Smart Classrooms</span>. <br />
            Built to empower hands-on learning, creativity, and real-world simulation.
          </p>

          {/* Feature Pills */}
          <div
            className="hidden lg:flex flex-wrap gap-4 mt-10"
            style={{ animation: 'fadeInUp 0.8s ease-out 0.6s backwards' }}
          >
            {[
              { text: "State-of-the-art Labs", gradient: "linear-gradient(135deg, #007BFF, #80C8F7)" },
              { text: "Smart Classrooms", gradient: "linear-gradient(135deg, #FF7F00, #FFCD00)" },
              { text: "Innovation Hub", gradient: "linear-gradient(135deg, #007BFF, #FF7F00)" },
            ].map((item, i) => (
              <div
                key={i}
                className="feature-pill px-6 py-3 rounded-full text-white shadow-md font-semibold text-sm"
                style={{
                  background: item.gradient,
                  fontFamily: "'Inter', -apple-system, system-ui, sans-serif"
                }}
              >
                {item.text}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE (Animated Boxes) */}
        <div
          className="hidden lg:block lg:w-[30%] w-full relative h-[300px]"
          style={{ animation: 'fadeInUp 0.8s ease-out 0.3s backwards' }}
        >
          {/* Glow Layers */}
          <div 
            className="absolute -top-10 -left-10 w-72 h-72 rounded-full" 
            style={{
              background: 'radial-gradient(circle, rgba(0, 123, 255, 0.1) 0%, transparent 70%)',
              filter: 'blur(80px)'
            }}
          />
          <div 
            className="absolute bottom-0 right-0 w-80 h-80 rounded-full" 
            style={{
              background: 'radial-gradient(circle, rgba(255, 127, 0, 0.1) 0%, transparent 70%)',
              filter: 'blur(80px)'
            }}
          />

          {/* Animated Box Elements */}
          <div
            className="absolute top-0 left-10 w-20 h-20 rounded-2xl"
            style={{
              background: 'linear-gradient(135deg, rgba(0, 123, 255, 0.2), rgba(128, 200, 247, 0.2))',
              border: '2px solid rgba(0, 123, 255, 0.3)',
              animation: 'floatBox1 6s ease-in-out infinite'
            }}
          />
          <div
            className="absolute bottom-10 right-10 w-24 h-24 rounded-2xl"
            style={{
              background: 'linear-gradient(135deg, rgba(255, 127, 0, 0.2), rgba(255, 205, 0, 0.2))',
              border: '2px solid rgba(255, 127, 0, 0.3)',
              animation: 'floatBox2 7s ease-in-out infinite'
            }}
          />
          <div
            className="absolute top-1/2 left-1/2 w-16 h-16 rounded-xl"
            style={{
              background: 'linear-gradient(135deg, rgba(0, 123, 255, 0.15), rgba(255, 127, 0, 0.15))',
              border: '2px solid rgba(0, 123, 255, 0.2)',
              animation: 'floatBox3 5s ease-in-out infinite'
            }}
          />

          {/* Static Decorative Image */}
          <img
            src="/elements/SubtractInfraElement.svg"
            alt="Decorative Element"
            className="absolute -bottom-20 left-0 opacity-30 w-[180px] h-[180px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
