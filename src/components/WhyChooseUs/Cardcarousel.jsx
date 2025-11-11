"use client";

import { useState, useEffect, useRef } from "react";
import { Sparkles, ChevronLeft, ChevronRight } from "lucide-react";

const cards = [
  {
    title: "Personalized Learning Path",
    description: "Our AI-driven tools create a customized learning journey, recommending relevant courses, projects, and resources based on your goals and progress.",
    image: "/chat-ai.png",
    tag: "ADAPTIVE AI",
    color: "cyan"
  },
  {
    title: "Real-Time Content Recommendations",
    description: "Get smart suggestions tailored to your interests, keeping you on track and ensuring you always have the best resources at your fingertips.",
    image: "/recommendation.png",
    tag: "SMART FEED",
    color: "orange"
  },
  {
    title: "Track Progress with Insights",
    description: "Stay motivated with data-driven insights that show your growth and guide your next steps, making your learning experience more efficient.",
    image: "/insights.png",
    tag: "ANALYTICS",
    color: "purple"
  },
  {
    title: "Industry-Ready Tools",
    description: "Access the latest AI-powered tools, equipping you with the skills that are shaping the future of work.",
    image: "/tools.png",
    tag: "FUTURE READY",
    color: "blue"
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
    <div className="relative min-h-screen bg-white py-24 px-4 overflow-hidden">
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: '4s'
            }}
          />
        ))}
      </div>

      {/* Soft Glowing Orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-100/15 rounded-full blur-[180px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-100/12 rounded-full blur-[160px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-24">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="text-blue-600 w-7 h-7" />
            <div className="inline-block px-6 py-2 bg-blue-50/80 border border-blue-200/50 rounded-full backdrop-blur-sm shadow-sm">
              <span className="text-blue-700 text-xs font-semibold tracking-[0.12em] uppercase">AI-Powered Learning</span>
            </div>
            <Sparkles className="text-indigo-600 w-7 h-7" />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4" style={{ fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif" }}>
            AI Tools Management
          </h1>
          <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent" style={{ fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif" }}>
            A Smarter Way to Learn!
          </p>

          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="h-0.5 w-20 bg-gradient-to-r from-transparent via-blue-400 to-transparent rounded-full" />
            <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
            <div className="h-0.5 w-20 bg-gradient-to-r from-transparent via-indigo-400 to-transparent rounded-full" />
          </div>
        </div>

        {/* Desktop: Split View Design */}
        <div className="hidden md:block">
          <div className="grid grid-cols-2 gap-8 mb-12">
            {/* Left: Large Active Card */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-200 via-indigo-200 to-blue-200 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition duration-1000" />
              
              <div className="relative h-[600px] rounded-3xl overflow-hidden bg-white backdrop-blur-sm border border-slate-200 shadow-xl">
                {/* Image with Overlay */}
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={cards[activeIndex].image}
                    alt={cards[activeIndex].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-white" />
                  
                  {/* Floating Tag */}
                  <div className="absolute top-6 right-6">
                    <div className="flex items-center gap-2 px-4 py-2 bg-blue-50/90 backdrop-blur-sm border border-blue-200/60 rounded-full shadow-sm">
                      <Sparkles className="w-4 h-4 text-blue-600" />
                      <span className="text-xs font-semibold text-blue-700 tracking-wider">
                        {cards[activeIndex].tag}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-2xl font-bold text-white shadow-md">
                      {activeIndex + 1}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-slate-900 mb-3 leading-tight" style={{ fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif" }}>
                        {cards[activeIndex].title}
                      </h2>
                      <p className="text-slate-600 text-base leading-relaxed" style={{ fontFamily: "'Inter', -apple-system, system-ui, sans-serif" }}>
                        {cards[activeIndex].description}
                      </p>
                    </div>
                  </div>

                  {/* Feature List */}
                  <div className="space-y-3 mt-8">
                    {['AI-Powered Analysis', 'Real-Time Updates', 'Personalized Experience'].map((feature, i) => (
                      <div key={i} className="flex items-center gap-3 text-blue-700">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                        <span className="text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-blue-200 rounded-tl-3xl" />
                <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-indigo-200 rounded-br-3xl" />
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
                  className={`w-full text-left transition-all duration-500 ${
                    index === activeIndex ? 'opacity-50 pointer-events-none' : 'hover:scale-105'
                  }`}
                >
                  <div className={`relative rounded-2xl overflow-hidden border backdrop-blur-sm ${
                    index === activeIndex 
                      ? 'border-slate-200 bg-white/70'
                      : 'border-slate-200 bg-white hover:border-blue-300 hover:shadow-md'
                  }`}>
                    <div className="flex items-center gap-4 p-5">
                      <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 border border-slate-200">
                        <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 to-transparent" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs text-blue-600 font-semibold mb-1 tracking-wider">
                          {card.tag}
                        </div>
                        <h3 className="text-slate-900 font-bold text-base mb-1 truncate" style={{ fontFamily: "'Inter', -apple-system, system-ui, sans-serif" }}>
                          {card.title}
                        </h3>
                        <p className="text-slate-500 text-sm line-clamp-2" style={{ fontFamily: "'Inter', -apple-system, system-ui, sans-serif" }}>
                          {card.description}
                        </p>
                      </div>
                      <ChevronRight className="text-blue-600 w-5 h-5 flex-shrink-0" />
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
                className="group relative"
              >
                <div className={`transition-all duration-300 rounded-full ${
                  index === activeIndex
                    ? 'w-12 h-2.5 bg-gradient-to-r from-blue-600 to-indigo-600'
                    : 'w-2.5 h-2.5 bg-slate-300 group-hover:bg-blue-400'
                }`} />
                {index === activeIndex && (
                  <div className="absolute inset-0 rounded-full bg-blue-400/30 blur-sm" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile: Modern Swipeable Card */}
        <div className="md:hidden" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-200 via-indigo-200 to-blue-200 rounded-3xl blur-lg opacity-30" />
            
            <div className="relative rounded-3xl overflow-hidden bg-white backdrop-blur-sm border border-slate-200 shadow-xl">
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={cards[activeIndex].image}
                  alt={cards[activeIndex].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-white" />
                
                <div className="absolute top-4 right-4 flex items-center gap-2 px-4 py-2 bg-blue-50/90 backdrop-blur-sm border border-blue-200/60 rounded-full shadow-sm">
                  <Sparkles className="w-4 h-4 text-blue-600" />
                  <span className="text-xs font-semibold text-blue-700 tracking-wider">
                    {cards[activeIndex].tag}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-xl font-bold text-white shadow-md">
                    {activeIndex + 1}
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-slate-900 mb-2" style={{ fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif" }}>
                      {cards[activeIndex].title}
                    </h2>
                    <p className="text-slate-600 leading-relaxed text-sm" style={{ fontFamily: "'Inter', -apple-system, system-ui, sans-serif" }}>
                      {cards[activeIndex].description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-blue-200 rounded-tl-3xl" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-indigo-200 rounded-br-3xl" />
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full bg-white backdrop-blur-sm border border-slate-200 flex items-center justify-center hover:bg-blue-50 hover:border-blue-300 transition-all shadow-sm"
            >
              <ChevronLeft className="text-slate-700 w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {cards.map((_, index) => (
                <div
                  key={index}
                  className={`transition-all duration-300 rounded-full ${
                    index === activeIndex
                      ? 'w-8 h-2 bg-gradient-to-r from-blue-600 to-indigo-600'
                      : 'w-2 h-2 bg-slate-300'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-white backdrop-blur-sm border border-slate-200 flex items-center justify-center hover:bg-blue-50 hover:border-blue-300 transition-all shadow-sm"
            >
              <ChevronRight className="text-slate-700 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}