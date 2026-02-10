"use client";
import { Zap, Rocket, Target, Circle, Sparkles } from "lucide-react";

const DegreeComparisonTable = () => {
  return (
    <div className="relative min-h-screen bg-white py-10 px-4 overflow-hidden  shadow-sm">
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
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .feature-card {
          animation: fadeIn 0.6s ease-out;
          transition: all 0.3s ease;
        }

        .feature-card:hover {
          transform: scale(1.05);
        }

        .feature-card:nth-child(1) { animation-delay: 0s; }
        .feature-card:nth-child(2) { animation-delay: 0.1s; }
        .feature-card:nth-child(3) { animation-delay: 0.2s; }
      `}</style>

      <div className="max-w-6xl mx-auto relative z-10 mt-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          {/* Tag */}
          <div 
            className="inline-flex items-center gap-2 mb-6 px-6 py-2 rounded-full backdrop-blur-sm shadow-sm"
            style={{
              backgroundColor: 'rgba(0, 123, 255, 0.1)',
              border: '1px solid rgba(0, 123, 255, 0.2)'
            }}
          >
            <Sparkles className="w-4 h-4" style={{ color: '#007BFF' }} />
            <span 
              className="text-xs font-bold tracking-[0.12em] uppercase"
              style={{ 
                color: '#007BFF',
                fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif"
              }}
            >
              Compare & Decide
            </span>
            <Sparkles className="w-4 h-4" style={{ color: '#007BFF' }} />
          </div>

          {/* Main Heading */}
          <h2 
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight relative" 
            style={{ fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif" }}
          >
            <span style={{ color: '#007BFF' }}>B.Voc</span> vs{" "}
            <span style={{ color: '#FF7F00' }}>Traditional Degrees</span>
            <br />
            <span style={{ color: '#2C2C2C' }}>The Clear Choice for Your Future</span>
          </h2>

          {/* Description */}
          <div className="max-w-3xl mx-auto">
            <p 
              className="text-lg leading-relaxed mb-4" 
              style={{ 
                fontFamily: "'Inter', -apple-system, system-ui, sans-serif",
                color: 'rgba(44, 44, 44, 0.75)'
              }}
            >
              <span 
                className="font-bold"
                style={{ color: '#2C2C2C' }}
              >
                Choosing the right course is one of the most important decisions you'll make. Let's break it down:
              </span>
            </p>
            <p 
              className="text-lg leading-relaxed" 
              style={{ 
                fontFamily: "'Inter', -apple-system, system-ui, sans-serif",
                color: 'rgba(44, 44, 44, 0.75)'
              }}
            >
              While traditional degrees like{" "}
              <span className="font-bold" style={{ color: '#007BFF' }}>B.Tech</span> and{" "}
              <span className="font-bold" style={{ color: '#FF7F00' }}>B.Sc</span> offer a solid foundation,{" "}
              <span className="font-bold" style={{ color: '#007BFF' }}>B.Voc</span> is the{" "}
              <span className="font-bold" style={{ color: '#FF7F00' }}>fast track to industry-ready skills</span>.
            </p>
          </div>

          {/* Decorative Line */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <div 
              className="h-0.5 w-20 rounded-full"
              style={{ background: 'linear-gradient(to right, transparent, rgba(0, 123, 255, 0.5), transparent)' }}
            />
            <Circle 
              className="w-2 h-2 fill-current"
              style={{ color: '#007BFF' }}
            />
            <div 
              className="h-0.5 w-20 rounded-full"
              style={{ background: 'linear-gradient(to right, transparent, rgba(255, 127, 0, 0.5), transparent)' }}
            />
          </div>
        </div>

        {/* Key Points Section */}
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: <Target className="w-12 h-12" />,
              title: "Industry-Ready Skills",
              desc: "B.Voc focuses on practical, job-ready skills from day one",
              color: "#007BFF"
            },
            {
              icon: <Zap className="w-12 h-12" />,
              title: "Faster Entry to Workforce",
              desc: "Graduate and start earning sooner than traditional degrees",
              color: "#FF7F00"
            },
            {
              icon: <Rocket className="w-12 h-12" />,
              title: "Modern Curriculum",
              desc: "Stay ahead with cutting-edge industry-aligned courses",
              color: "#007BFF"
            }
          ].map((item, index) => (
            <div 
              key={index}
              className="feature-card relative group"
            >
              <div 
                className="absolute -inset-0.5 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300"
                style={{
                  background: `linear-gradient(135deg, ${item.color}80, ${item.color}40)`
                }}
              />
              <div 
                className="relative bg-white backdrop-blur-sm border rounded-2xl p-6 shadow-sm"
                style={{ borderColor: 'rgba(0, 123, 255, 0.2)' }}
              >
                <div className="mb-4" style={{ color: item.color }}>
                  {item.icon}
                </div>
                <h3 
                  className="font-bold text-lg mb-2" 
                  style={{ 
                    fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif",
                    color: '#2C2C2C'
                  }}
                >
                  {item.title}
                </h3>
                <p 
                  className="text-sm" 
                  style={{ 
                    fontFamily: "'Inter', -apple-system, system-ui, sans-serif",
                    color: 'rgba(44, 44, 44, 0.75)'
                  }}
                >
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DegreeComparisonTable;
