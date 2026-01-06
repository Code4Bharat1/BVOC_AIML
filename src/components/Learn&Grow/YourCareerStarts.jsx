"use client";
import React from "react";

const YourCareerStarts = () => {
  return (
    <section className="relative mt-1 overflow-hidden bg-white py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-12">
      {/* Subtle Background */}
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
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideLeft {
          from {
            opacity: 0;
            transform: translateX(-100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideRight {
          from {
            opacity: 0;
            transform: translateX(100px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .heading-animate {
          animation: slideDown 0.8s ease-out;
        }

        .card-left {
          animation: slideLeft 0.8s ease-out;
        }

        .card-right {
          animation: slideRight 0.8s ease-out;
        }

        .icon-left {
          animation: scaleIn 0.6s ease-out 0.2s backwards;
        }

        .icon-right {
          animation: scaleIn 0.6s ease-out 0.2s backwards;
        }

        .career-card {
          transition: all 0.5s ease;
        }

        .career-card:hover {
          transform: scale(1.02);
        }

        .card-overlay {
          transition: all 0.5s ease;
        }

        .icon-box {
          transition: all 0.3s ease;
        }

        .career-card:hover .icon-box {
          box-shadow: 0 15px 30px rgba(0, 123, 255, 0.3);
        }
      `}</style>

      <div className="relative max-w-7xl mx-auto">
        {/* Heading */}
        <div className="heading-animate text-center mb-12 md:mb-16 lg:mb-20 px-4">
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            style={{ 
              fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif",
              color: '#2C2C2C'
            }}
          >
            Your Career Starts With Us, <br className="hidden sm:block" />
            <span 
              style={{
                background: 'linear-gradient(135deg, #007BFF 0%, #FF7F00 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontWeight: 'bold'
              }}
            >
              And We'll Be With You
            </span>{" "}
            Every Step Of The Way.
          </h2>
        </div>

        {/* Cards Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
          {/* Left Card */}
          <div className="card-left career-card relative h-full bg-white rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-lg border-2"
            style={{ borderColor: 'rgba(0, 123, 255, 0.3)' }}
          >
            {/* Gradient Overlay on Hover */}
            <div 
              className="card-overlay absolute inset-0 rounded-3xl"
              style={{
                background: 'linear-gradient(135deg, rgba(0, 123, 255, 0.05), rgba(255, 127, 0, 0.05))',
                opacity: 0
              }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '0'}
            />
            
            <div className="relative flex flex-col space-y-6 md:space-y-8">
              <div 
                className="icon-left icon-box w-20 h-20 sm:w-24 sm:h-24 rounded-2xl flex items-center justify-center shadow-lg"
                style={{
                  background: 'linear-gradient(135deg, #007BFF, #80C8F7)'
                }}
              >
                <img
                  src="/elements/CareerStart1.svg"
                  alt="Number 1"
                  className="w-12 h-12 sm:w-14 sm:h-14"
                />
              </div>
              
              <p 
                className="text-lg sm:text-xl md:text-2xl font-bold leading-relaxed"
                style={{ 
                  fontFamily: "'Inter', -apple-system, system-ui, sans-serif",
                  color: '#2C2C2C'
                }}
              >
                Unlock Your Potential With{" "}
                <span style={{ color: '#007BFF' }}>Expert Guidance</span>{" "}
                And Real-World Skills.
              </p>
            </div>
          </div>

          {/* Right Card */}
          <div className="card-right career-card relative h-full bg-white rounded-3xl p-6 sm:p-8 md:p-10 lg:p-12 shadow-lg border-2"
            style={{ borderColor: 'rgba(255, 127, 0, 0.3)' }}
          >
            {/* Gradient Overlay on Hover */}
            <div 
              className="card-overlay absolute inset-0 rounded-3xl"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 127, 0, 0.05), rgba(255, 205, 0, 0.05))',
                opacity: 0
              }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '0'}
            />
            
            <div className="relative flex flex-col space-y-6 md:space-y-8">
              <div 
                className="icon-right icon-box w-20 h-20 sm:w-24 sm:h-24 rounded-2xl flex items-center justify-center shadow-lg"
                style={{
                  background: 'linear-gradient(135deg, #FF7F00, #FFCD00)'
                }}
              >
                <img
                  src="/elements/CareerStart2.svg"
                  alt="Number 2"
                  className="w-12 h-12 sm:w-14 sm:h-14"
                />
              </div>
              
              <p 
                className="text-lg sm:text-xl md:text-2xl font-bold leading-relaxed"
                style={{ 
                  fontFamily: "'Inter', -apple-system, system-ui, sans-serif",
                  color: '#2C2C2C'
                }}
              >
                Join A Community That Believes{" "}
                <span style={{ color: '#FF7F00' }}>In Your Success</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YourCareerStarts;
