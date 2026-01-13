"use client";

import { useState, useEffect, useRef } from "react";
import { Sparkles, ChevronLeft, ChevronRight } from "lucide-react";

const cards = [
  {
    title: "Personalized Learning Path",
    description: "Our AI-driven tools create a customized learning journey, recommending relevant courses, projects, and resources based on your goals and progress.",
    image: "/chat-ai.png",
    tag: "ADAPTIVE AI",
    color: "#007BFF"
  },
  {
    title: "Real-Time Content Recommendations",
    description: "Get smart suggestions tailored to your interests, keeping you on track and ensuring you always have the best resources at your fingertips.",
    image: "/recommendation.png",
    tag: "SMART FEED",
    color: "#FF7F00"
  },
  {
    title: "Track Progress with Insights",
    description: "Stay motivated with data-driven insights that show your growth and guide your next steps, making your learning experience more efficient.",
    image: "/insights.png",
    tag: "ANALYTICS",
    color: "#007BFF"
  },
  {
    title: "Industry-Ready Tools",
    description: "Access the latest AI-powered tools, equipping you with the skills that are shaping the future of work.",
    image: "/tools.png",
    tag: "FUTURE READY",
    color: "#FF7F00"
  },
];

export default function EnhancedAITools() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);
  const touchStartX = useRef(0);

  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % cards.length);
      }, 5000);
    }
    return () => clearInterval(timerRef.current);
  }, [isPaused]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % cards.length);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 8000);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + cards.length) % cards.length);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 8000);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    setIsPaused(true);
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? handleNext() : handlePrev();
    }
    setTimeout(() => setIsPaused(false), 8000);
  };

  return (
    <div className="relative min-h-screen bg-white py-24 px-4 mt-5">
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

        .ai-card {
          animation: fadeIn 0.5s ease-out;
          transition: all 0.5s ease;
        }

        .ai-card-small {
          transition: all 0.3s ease;
        }

        .ai-card-small:hover {
          transform: scale(1.05);
        }

        .nav-button {
          transition: all 0.3s ease;
        }

        .nav-button:hover {
          background-color: rgba(0, 123, 255, 0.1);
          border-color: rgba(0, 123, 255, 0.3);
        }

        .dot-indicator {
          transition: all 0.3s ease;
        }
      `}</style>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-24">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-7 h-7" style={{ color: '#007BFF' }} />
            <div 
              className="inline-block px-6 py-2 rounded-full backdrop-blur-sm shadow-sm"
              style={{
                backgroundColor: 'rgba(0, 123, 255, 0.1)',
                border: '1px solid rgba(0, 123, 255, 0.2)'
              }}
            >
              <span 
                className="text-xs font-bold tracking-[0.12em] uppercase"
                style={{ 
                  color: '#007BFF',
                  fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif"
                }}
              >
                AI-Powered Learning
              </span>
            </div>
            <Sparkles className="w-7 h-7" style={{ color: '#FF7F00' }} />
          </div>

          <h1 
            className="text-4xl md:text-5xl font-bold mb-4" 
            style={{ 
              fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif",
              color: '#2C2C2C'
            }}
          >
            AI Tools Management
          </h1>
          <p 
            className="text-2xl md:text-3xl font-bold"
            style={{ 
              fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif",
              background: 'linear-gradient(135deg, #007BFF 0%, #FF7F00 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            A Smarter Way to Learn!
          </p>

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

        {/* Desktop: Split View Design */}
        <div className="hidden md:block">
          <div className="grid grid-cols-2 gap-8 mb-12">
            {/* Left: Large Active Card */}
            <div className="relative group">
              <div 
                className="absolute -inset-1 rounded-3xl blur-lg opacity-30 group-hover:opacity-50"
                style={{
                  background: `linear-gradient(135deg, rgba(0, 123, 255, 0.3), rgba(255, 127, 0, 0.3))`,
                  transition: 'opacity 1s ease'
                }}
              />
              
              <div 
                className="ai-card relative h-[600px] rounded-3xl overflow-hidden bg-white backdrop-blur-sm border shadow-xl"
                style={{ borderColor: 'rgba(0, 123, 255, 0.2)' }}
              >
                {/* Image with Overlay */}
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={cards[activeIndex].image}
                    alt={cards[activeIndex].title}
                    className="w-full h-full object-cover"
                  />
                  <div 
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.3), white)' }}
                  />
                  
                  {/* Floating Tag */}
                  <div className="absolute top-6 right-6">
                    <div 
                      className="flex items-center gap-2 px-4 py-2 backdrop-blur-sm rounded-full shadow-sm"
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.9)',
                        border: `1px solid ${cards[activeIndex].color}40`
                      }}
                    >
                      <Sparkles className="w-4 h-4" style={{ color: cards[activeIndex].color }} />
                      <span 
                        className="text-xs font-bold tracking-wider"
                        style={{ 
                          color: cards[activeIndex].color,
                          fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif"
                        }}
                      >
                        {cards[activeIndex].tag}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div 
                      className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-2xl font-bold text-white shadow-md"
                      style={{
                        background: `linear-gradient(135deg, ${cards[activeIndex].color}, ${cards[activeIndex].color}dd)`
                      }}
                    >
                      {activeIndex + 1}
                    </div>
                    <div>
                      <h2 
                        className="text-2xl font-bold mb-3 leading-tight" 
                        style={{ 
                          fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif",
                          color: '#2C2C2C'
                        }}
                      >
                        {cards[activeIndex].title}
                      </h2>
                      <p 
                        className="text-base leading-relaxed" 
                        style={{ 
                          fontFamily: "'Inter', -apple-system, system-ui, sans-serif",
                          color: 'rgba(44, 44, 44, 0.75)'
                        }}
                      >
                        {cards[activeIndex].description}
                      </p>
                    </div>
                  </div>

                  {/* Feature List */}
                  <div className="space-y-3 mt-8">
                    {['AI-Powered Analysis', 'Real-Time Updates', 'Personalized Experience'].map((feature, i) => (
                      <div key={i} className="flex items-center gap-3" style={{ color: cards[activeIndex].color }}>
                        <div 
                          className="w-1.5 h-1.5 rounded-full"
                          style={{ backgroundColor: cards[activeIndex].color }}
                        />
                        <span 
                          className="text-sm font-semibold"
                          style={{ fontFamily: "'Inter', -apple-system, system-ui, sans-serif" }}
                        >
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Corner Accents */}
                <div 
                  className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 rounded-tl-3xl"
                  style={{ borderColor: 'rgba(0, 123, 255, 0.2)' }}
                />
                <div 
                  className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 rounded-br-3xl"
                  style={{ borderColor: 'rgba(255, 127, 0, 0.2)' }}
                />
              </div>
            </div>

            {/* Right: Vertical Stack of Other Cards */}
            <div className="space-y-4">
              {cards.map((card, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setActiveIndex(index);
                    setIsPaused(true);
                    setTimeout(() => setIsPaused(false), 8000);
                  }}
                  className={`ai-card-small w-full text-left ${
                    index === activeIndex ? 'opacity-50 pointer-events-none' : ''
                  }`}
                  disabled={index === activeIndex}
                >
                  <div 
                    className="relative rounded-2xl overflow-hidden border backdrop-blur-sm"
                    style={{
                      borderColor: index === activeIndex ? 'rgba(0, 123, 255, 0.2)' : 'rgba(0, 123, 255, 0.2)',
                      backgroundColor: index === activeIndex ? 'rgba(255, 255, 255, 0.7)' : 'white'
                    }}
                  >
                    <div className="flex items-center gap-4 p-5">
                      <div 
                        className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 border"
                        style={{ borderColor: 'rgba(0, 123, 255, 0.2)' }}
                      >
                        <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
                        <div 
                          className="absolute inset-0"
                          style={{ background: 'linear-gradient(135deg, rgba(0, 123, 255, 0.05), transparent)' }}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div 
                          className="text-xs font-bold mb-1 tracking-wider"
                          style={{ 
                            color: card.color,
                            fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif"
                          }}
                        >
                          {card.tag}
                        </div>
                        <h3 
                          className="font-bold text-base mb-1 truncate" 
                          style={{ 
                            fontFamily: "'Inter', -apple-system, system-ui, sans-serif",
                            color: '#2C2C2C'
                          }}
                        >
                          {card.title}
                        </h3>
                        <p 
                          className="text-sm line-clamp-2" 
                          style={{ 
                            fontFamily: "'Inter', -apple-system, system-ui, sans-serif",
                            color: 'rgba(44, 44, 44, 0.6)'
                          }}
                        >
                          {card.description}
                        </p>
                      </div>
                      <ChevronRight className="w-5 h-5 flex-shrink-0" style={{ color: card.color }} />
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-3">
            {cards.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveIndex(index);
                  setIsPaused(true);
                  setTimeout(() => setIsPaused(false), 8000);
                }}
                className="relative group"
              >
                <div 
                  className="dot-indicator rounded-full"
                  style={{
                    width: index === activeIndex ? '48px' : '10px',
                    height: '10px',
                    background: index === activeIndex
                      ? 'linear-gradient(135deg, #007BFF, #FF7F00)'
                      : 'rgba(0, 123, 255, 0.3)'
                  }}
                />
                {index === activeIndex && (
                  <div 
                    className="absolute inset-0 rounded-full blur-sm"
                    style={{ backgroundColor: 'rgba(0, 123, 255, 0.3)' }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile: Modern Swipeable Card */}
        <div className="md:hidden" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
          <div className="relative">
            <div 
              className="absolute -inset-1 rounded-3xl blur-lg opacity-30"
              style={{
                background: 'linear-gradient(135deg, rgba(0, 123, 255, 0.3), rgba(255, 127, 0, 0.3))'
              }}
            />
            
            <div 
              className="ai-card relative rounded-3xl overflow-hidden bg-white backdrop-blur-sm border shadow-xl"
              style={{ borderColor: 'rgba(0, 123, 255, 0.2)' }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={cards[activeIndex].image}
                  alt={cards[activeIndex].title}
                  className="w-full h-full object-cover"
                />
                <div 
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.3), white)' }}
                />
                
                <div className="absolute top-4 right-4">
                  <div 
                    className="flex items-center gap-2 px-4 py-2 backdrop-blur-sm rounded-full shadow-sm"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      border: `1px solid ${cards[activeIndex].color}40`
                    }}
                  >
                    <Sparkles className="w-4 h-4" style={{ color: cards[activeIndex].color }} />
                    <span 
                      className="text-xs font-bold tracking-wider"
                      style={{ 
                        color: cards[activeIndex].color,
                        fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif"
                      }}
                    >
                      {cards[activeIndex].tag}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div 
                    className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-xl font-bold text-white shadow-md"
                    style={{
                      background: `linear-gradient(135deg, ${cards[activeIndex].color}, ${cards[activeIndex].color}dd)`
                    }}
                  >
                    {activeIndex + 1}
                  </div>
                  <div>
                    <h2 
                      className="text-xl font-bold mb-2" 
                      style={{ 
                        fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif",
                        color: '#2C2C2C'
                      }}
                    >
                      {cards[activeIndex].title}
                    </h2>
                    <p 
                      className="leading-relaxed text-sm" 
                      style={{ 
                        fontFamily: "'Inter', -apple-system, system-ui, sans-serif",
                        color: 'rgba(44, 44, 44, 0.75)'
                      }}
                    >
                      {cards[activeIndex].description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Corner Accents */}
              <div 
                className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 rounded-tl-3xl"
                style={{ borderColor: 'rgba(0, 123, 255, 0.2)' }}
              />
              <div 
                className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 rounded-br-3xl"
                style={{ borderColor: 'rgba(255, 127, 0, 0.2)' }}
              />
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              className="nav-button w-12 h-12 rounded-full bg-white backdrop-blur-sm border flex items-center justify-center shadow-sm"
              style={{ borderColor: 'rgba(0, 123, 255, 0.2)' }}
            >
              <ChevronLeft className="w-5 h-5" style={{ color: '#2C2C2C' }} />
            </button>

            <div className="flex gap-2">
              {cards.map((_, index) => (
                <div
                  key={index}
                  className="dot-indicator rounded-full"
                  style={{
                    width: index === activeIndex ? '32px' : '8px',
                    height: '8px',
                    background: index === activeIndex
                      ? 'linear-gradient(135deg, #007BFF, #FF7F00)'
                      : 'rgba(0, 123, 255, 0.3)'
                  }}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="nav-button w-12 h-12 rounded-full bg-white backdrop-blur-sm border flex items-center justify-center shadow-sm"
              style={{ borderColor: 'rgba(0, 123, 255, 0.2)' }}
            >
              <ChevronRight className="w-5 h-5" style={{ color: '#2C2C2C' }} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
