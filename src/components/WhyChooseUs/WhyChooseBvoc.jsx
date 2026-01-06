"use client";

import { useState } from "react";
import { CheckCircle, Rocket, GraduationCap, Brain, TrendingUp, Sparkles, Atom } from "lucide-react";

const WhyChooseBVoc = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="relative min-h-screen bg-white py-20 px-4 overflow-hidden">
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

        .main-card {
          animation: fadeIn 0.6s ease-out;
          transition: all 1s ease;
        }

        .main-card:hover .card-glow {
          opacity: 0.5;
        }

        .feature-card {
          transition: all 0.3s ease;
        }

        .feature-card:hover {
          transform: scale(1.05);
        }

        .comparison-item {
          transition: all 0.3s ease;
        }
      `}</style>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
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
              Your Future Starts Here
            </span>
            <Sparkles className="w-4 h-4" style={{ color: '#007BFF' }} />
          </div>

          <h1 
            className="text-4xl md:text-5xl font-bold mb-4 relative" 
            style={{ fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif" }}
          >
            <span style={{ color: '#2C2C2C' }}>Why Choose </span>
            <span style={{ color: '#007BFF' }}>B.Voc</span>
            <span style={{ color: '#FF7F00' }}>?</span>
          </h1>

          <div className="flex items-center justify-center gap-3 mt-6">
            <div 
              className="h-0.5 w-20 rounded-full"
              style={{ background: 'linear-gradient(to right, transparent, rgba(0, 123, 255, 0.5), transparent)' }}
            />
            <div 
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: '#007BFF' }}
            />
            <div 
              className="h-0.5 w-20 rounded-full"
              style={{ background: 'linear-gradient(to right, transparent, rgba(255, 127, 0, 0.5), transparent)' }}
            />
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Left: Image Card */}
          <div className="relative group main-card">
            <div 
              className="card-glow absolute -inset-1 rounded-3xl blur-lg transition duration-1000"
              style={{
                background: 'linear-gradient(135deg, rgba(0, 123, 255, 0.3), rgba(255, 127, 0, 0.3))',
                opacity: 0.3
              }}
            />
            
            <div 
              className="relative h-full rounded-3xl overflow-hidden bg-white backdrop-blur-sm border shadow-xl"
              style={{ borderColor: 'rgba(0, 123, 255, 0.2)' }}
            >
              {/* Corner Decorations */}
              <div 
                className="absolute top-0 left-0 w-20 h-20 border-t border-l rounded-tl-3xl z-10"
                style={{ borderColor: 'rgba(0, 123, 255, 0.2)' }}
              />
              <div 
                className="absolute bottom-0 right-0 w-20 h-20 border-b border-r rounded-br-3xl z-10"
                style={{ borderColor: 'rgba(255, 127, 0, 0.2)' }}
              />

              <div className="relative h-full p-8">
                {/* Image Container */}
                <div 
                  className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-6 border"
                  style={{ borderColor: 'rgba(0, 123, 255, 0.2)' }}
                >
                  <img
                    src="/bvoc-image.png"
                    alt="B.Voc illustration"
                    className="w-full h-full object-cover"
                  />
                  <div 
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(to top, rgba(255, 255, 255, 0.8), transparent)' }}
                  />
                  
                  {/* Floating Badge */}
                  <div 
                    className="absolute bottom-4 left-4 px-4 py-2 backdrop-blur-sm rounded-full shadow-sm"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      border: '1px solid rgba(0, 123, 255, 0.3)'
                    }}
                  >
                    <span 
                      className="text-xs font-bold tracking-wider flex items-center gap-2"
                      style={{ 
                        color: '#007BFF',
                        fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif"
                      }}
                    >
                      <Rocket className="w-3.5 h-3.5" style={{ color: '#007BFF' }} />
                      CAREER ACCELERATOR
                    </span>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { value: "3x", label: "Faster Job Ready" },
                    { value: "95%", label: "Placement Rate" },
                    { value: "50+", label: "Industry Partners" }
                  ].map((stat, index) => (
                    <div 
                      key={index} 
                      className="text-center p-3 rounded-xl backdrop-blur-sm shadow-sm"
                      style={{
                        backgroundColor: 'rgba(0, 123, 255, 0.1)',
                        border: '1px solid rgba(0, 123, 255, 0.2)'
                      }}
                    >
                      <div 
                        className="text-2xl font-bold mb-1"
                        style={{ 
                          color: '#007BFF',
                          fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif"
                        }}
                      >
                        {stat.value}
                      </div>
                      <div 
                        className="text-xs"
                        style={{ 
                          color: 'rgba(44, 44, 44, 0.7)',
                          fontFamily: "'Inter', -apple-system, system-ui, sans-serif"
                        }}
                      >
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content Card */}
          <div className="relative group main-card">
            <div 
              className="card-glow absolute -inset-1 rounded-3xl blur-lg transition duration-1000"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 127, 0, 0.3), rgba(0, 123, 255, 0.3))',
                opacity: 0.3
              }}
            />
            
            <div 
              className="relative h-full rounded-3xl overflow-hidden bg-white backdrop-blur-sm border shadow-xl p-8"
              style={{ borderColor: 'rgba(0, 123, 255, 0.2)' }}
            >
              {/* Corner Decorations */}
              <div 
                className="absolute top-0 right-0 w-20 h-20 border-t border-r rounded-tr-3xl"
                style={{ borderColor: 'rgba(0, 123, 255, 0.2)' }}
              />
              <div 
                className="absolute bottom-0 left-0 w-20 h-20 border-b border-l rounded-bl-3xl"
                style={{ borderColor: 'rgba(255, 127, 0, 0.2)' }}
              />

              <div className="relative">
                {/* Fast Track Section */}
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center shadow-md"
                      style={{
                        background: 'linear-gradient(135deg, #007BFF, #FF7F00)'
                      }}
                    >
                      <Rocket className="text-white w-5 h-5" />
                    </div>
                    <h2 
                      className="text-xl font-bold" 
                      style={{ 
                        fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif",
                        color: '#007BFF'
                      }}
                    >
                      Fast-Track Your Career
                    </h2>
                  </div>
                  <p 
                    className="leading-relaxed pl-15" 
                    style={{ 
                      fontFamily: "'Inter', -apple-system, system-ui, sans-serif",
                      color: 'rgba(44, 44, 44, 0.75)'
                    }}
                  >
                    Industry-driven curriculum, hands-on internships, and real-world projects get you job-ready quicker than traditional degrees.
                  </p>
                </div>

                {/* Divider */}
                <div 
                  className="h-px mb-8"
                  style={{ background: 'linear-gradient(to right, transparent, rgba(0, 123, 255, 0.3), transparent)' }}
                />

                {/* Comparison Section */}
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center shadow-md"
                      style={{
                        background: 'linear-gradient(135deg, #007BFF, #FF7F00)'
                      }}
                    >
                      <TrendingUp className="text-white w-5 h-5" />
                    </div>
                    <h2 
                      className="text-xl font-bold" 
                      style={{ 
                        fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif",
                        color: '#007BFF'
                      }}
                    >
                      B.Voc vs. Traditional Degrees
                    </h2>
                  </div>
                </div>

                {/* Comparison Cards */}
                <div className="space-y-4 mb-8">
                  {[
                    {
                      icon: <GraduationCap className="w-5 h-5" />,
                      title: "B.Tech/B.E",
                      desc: "Strong theory, but lacks job readiness"
                    },
                    {
                      icon: <Atom className="w-5 h-5" />,
                      title: "B.Sc",
                      desc: "Great for research, but not industry-focused"
                    },
                    {
                      icon: <Brain className="w-5 h-5" />,
                      title: "B.Voc Advantage",
                      desc: "Lead in AI, ML, and Data Science"
                    }
                  ].map((item, index) => (
                    <div
                      key={index}
                      onMouseEnter={() => setHoveredCard(index)}
                      onMouseLeave={() => setHoveredCard(null)}
                      className="comparison-item flex items-start gap-4 p-4 rounded-xl border backdrop-blur-sm"
                      style={{
                        borderColor: hoveredCard === index ? 'rgba(0, 123, 255, 0.3)' : 'rgba(0, 123, 255, 0.2)',
                        backgroundColor: hoveredCard === index ? 'rgba(0, 123, 255, 0.05)' : 'white',
                        boxShadow: hoveredCard === index ? '0 4px 12px rgba(0, 123, 255, 0.15)' : 'none'
                      }}
                    >
                      <div 
                        className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                        style={{
                          background: hoveredCard === index 
                            ? 'linear-gradient(135deg, #007BFF, #FF7F00)' 
                            : 'rgba(0, 123, 255, 0.1)',
                          color: hoveredCard === index ? 'white' : '#007BFF',
                          boxShadow: hoveredCard === index ? '0 4px 12px rgba(0, 123, 255, 0.3)' : 'none'
                        }}
                      >
                        {item.icon}
                      </div>
                      <div>
                        <h3 
                          className="font-bold mb-1" 
                          style={{ 
                            fontFamily: "'Inter', -apple-system, system-ui, sans-serif",
                            color: '#2C2C2C'
                          }}
                        >
                          {item.title}
                        </h3>
                        <p 
                          className="text-sm" 
                          style={{ 
                            fontFamily: "'Inter', -apple-system, system-ui, sans-serif",
                            color: 'rgba(44, 44, 44, 0.7)'
                          }}
                        >
                          {item.desc}
                        </p>
                      </div>
                      {index === 2 && (
                        <CheckCircle className="w-5 h-5 ml-auto flex-shrink-0" style={{ color: '#00C853' }} />
                      )}
                    </div>
                  ))}
                </div>

                {/* Bottom CTA */}
                <div 
                  className="p-4 rounded-xl backdrop-blur-sm"
                  style={{
                    background: 'linear-gradient(135deg, rgba(0, 123, 255, 0.05), rgba(255, 127, 0, 0.05))',
                    border: '1px solid rgba(0, 123, 255, 0.3)'
                  }}
                >
                  <p 
                    className="leading-relaxed" 
                    style={{ 
                      fontFamily: "'Inter', -apple-system, system-ui, sans-serif",
                      color: 'rgba(44, 44, 44, 0.75)'
                    }}
                  >
                    B.Voc equips you with the skills to excel in these fast-evolving fields and launch your career faster.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Feature Cards */}
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { icon: <Rocket />, title: "Quick Launch", desc: "Start earning faster", color: "#007BFF" },
            { icon: <Brain />, title: "AI & ML Focus", desc: "Future-proof skills", color: "#FF7F00" },
            { icon: <GraduationCap />, title: "Industry Experts", desc: "Learn from the best", color: "#007BFF" },
            { icon: <TrendingUp />, title: "Career Growth", desc: "Faster promotions", color: "#FF7F00" }
          ].map((feature, index) => (
            <div key={index} className="relative group">
              <div 
                className="absolute -inset-0.5 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300"
                style={{
                  background: `linear-gradient(135deg, ${feature.color}80, ${feature.color}40)`
                }}
              />
              <div 
                className="feature-card relative bg-white backdrop-blur-sm border rounded-2xl p-5 shadow-sm text-center"
                style={{ borderColor: 'rgba(0, 123, 255, 0.2)' }}
              >
                <div className="text-4xl mb-3 flex justify-center" style={{ color: feature.color }}>
                  {feature.icon}
                </div>
                <h3 
                  className="font-bold mb-2" 
                  style={{ 
                    fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif",
                    color: '#2C2C2C'
                  }}
                >
                  {feature.title}
                </h3>
                <p 
                  className="text-sm" 
                  style={{ 
                    fontFamily: "'Inter', -apple-system, system-ui, sans-serif",
                    color: 'rgba(44, 44, 44, 0.7)'
                  }}
                >
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseBVoc;
