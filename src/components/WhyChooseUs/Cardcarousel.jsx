"use client";

import { useState, useEffect, useRef } from "react";
import { HiSparkles } from "react-icons/hi";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

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
    <div className="relative min-h-screen bg-gradient-to-br from-[#0f2847] via-[#1a3a5c] to-[#2d1b69] py-24 px-4 overflow-hidden">
      {/* Background Stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <HiSparkles className="absolute top-10 left-10 text-cyan-400 text-3xl animate-pulse" />
        <HiSparkles className="absolute top-32 right-20 text-orange-400 text-2xl animate-pulse delay-300" />
        <HiSparkles className="absolute bottom-32 left-1/4 text-purple-400 text-4xl animate-pulse delay-700" />
        <HiSparkles className="absolute bottom-20 right-1/3 text-yellow-400 text-2xl animate-pulse delay-1000" />
        <div className="absolute top-20 right-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-ping" />
        <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-orange-400 rounded-full animate-ping delay-500" />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-24">
          <div className="flex items-center justify-center gap-2 mb-6">
            <HiSparkles className="text-cyan-400 text-3xl animate-pulse" />
            <div className="inline-block px-6 py-2 bg-cyan-500/10 border-2 border-cyan-500/30 rounded-full">
              <span className="text-cyan-400 text-sm font-bold tracking-widest">AI-POWERED LEARNING</span>
            </div>
            <HiSparkles className="text-orange-400 text-3xl animate-pulse delay-500" />
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            AI Tools Management
          </h1>
          <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
            A Smarter Way to Learn!
          </p>

          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="h-1 w-20 bg-gradient-to-r from-transparent via-cyan-500 to-transparent rounded-full" />
            <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
            <div className="h-1 w-20 bg-gradient-to-r from-transparent via-cyan-500 to-transparent rounded-full" />
          </div>
        </div>

        {/* Desktop: Split View Design */}
        <div className="hidden md:block">
          <div className="grid grid-cols-2 gap-8 mb-12">
            {/* Left: Large Active Card */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 via-purple-600 to-orange-600 rounded-3xl blur-xl opacity-60 group-hover:opacity-80 transition duration-1000 animate-pulse" />
              
              <div className="relative h-[600px] rounded-3xl overflow-hidden bg-[#1a2847] border-2 border-cyan-500/50">
                {/* Image with Overlay */}
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={cards[activeIndex].image}
                    alt={cards[activeIndex].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1a2847]/50 to-[#1a2847]" />
                  
                  {/* Floating Tag */}
                  <div className="absolute top-6 right-6">
                    <div className="flex items-center gap-2 px-4 py-2 bg-cyan-500/20 backdrop-blur-md border-2 border-cyan-500/40 rounded-full">
                      <HiSparkles className="text-cyan-400" />
                      <span className="text-xs font-bold text-white tracking-wider">
                        {cards[activeIndex].tag}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center text-2xl font-black text-white shadow-lg shadow-cyan-500/50">
                      {activeIndex + 1}
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-white mb-3 leading-tight">
                        {cards[activeIndex].title}
                      </h2>
                      <p className="text-gray-300 text-lg leading-relaxed">
                        {cards[activeIndex].description}
                      </p>
                    </div>
                  </div>

                  {/* Feature List */}
                  <div className="space-y-3 mt-8">
                    {['AI-Powered Analysis', 'Real-Time Updates', 'Personalized Experience'].map((feature, i) => (
                      <div key={i} className="flex items-center gap-3 text-cyan-300">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button className="mt-8 w-full py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg shadow-orange-500/50">
                    Explore Feature →
                  </button>
                </div>

                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-cyan-500/50 rounded-tl-3xl" />
                <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-purple-500/50 rounded-br-3xl" />
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
                  <div className={`relative rounded-2xl overflow-hidden border-2 ${
                    index === activeIndex 
                      ? 'border-cyan-500/20 bg-[#1a2847]/50'
                      : 'border-cyan-500/30 bg-[#1a2847] hover:border-cyan-500 hover:bg-[#1a2847]/80'
                  }`}>
                    <div className="flex items-center gap-4 p-5">
                      <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 border-2 border-cyan-500/50">
                        <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/20 to-transparent" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs text-cyan-400 font-semibold mb-1 tracking-wider">
                          {card.tag}
                        </div>
                        <h3 className="text-white font-bold text-lg mb-1 truncate">
                          {card.title}
                        </h3>
                        <p className="text-gray-400 text-sm line-clamp-2">
                          {card.description}
                        </p>
                      </div>
                      <FaChevronRight className="text-cyan-400 text-xl flex-shrink-0" />
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
                    ? 'w-12 h-3 bg-gradient-to-r from-cyan-500 to-purple-500'
                    : 'w-3 h-3 bg-gray-600 group-hover:bg-cyan-400'
                }`} />
                {index === activeIndex && (
                  <div className="absolute inset-0 rounded-full bg-cyan-500/50 blur-md" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile: Modern Swipeable Card */}
        <div className="md:hidden" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 via-purple-600 to-orange-600 rounded-3xl blur-xl opacity-60 animate-pulse" />
            
            <div className="relative rounded-3xl overflow-hidden bg-[#1a2847] border-2 border-cyan-500/50">
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={cards[activeIndex].image}
                  alt={cards[activeIndex].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1a2847]/50 to-[#1a2847]" />
                
                <div className="absolute top-4 right-4 flex items-center gap-2 px-4 py-2 bg-cyan-500/20 backdrop-blur-md border-2 border-cyan-500/40 rounded-full">
                  <HiSparkles className="text-cyan-400" />
                  <span className="text-xs font-bold text-white tracking-wider">
                    {cards[activeIndex].tag}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center text-xl font-black text-white shadow-lg shadow-cyan-500/50">
                    {activeIndex + 1}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">
                      {cards[activeIndex].title}
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                      {cards[activeIndex].description}
                    </p>
                  </div>
                </div>

                <button className="mt-6 w-full py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold rounded-xl transition-all duration-300 shadow-lg shadow-orange-500/50">
                  Learn More →
                </button>
              </div>

              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-cyan-500/50 rounded-tl-3xl" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-purple-500/50 rounded-br-3xl" />
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full bg-[#1a2847] border-2 border-cyan-500/50 flex items-center justify-center hover:bg-cyan-500/20 transition-all"
            >
              <FaChevronLeft className="text-white text-lg" />
            </button>

            <div className="flex gap-2">
              {cards.map((_, index) => (
                <div
                  key={index}
                  className={`transition-all duration-300 rounded-full ${
                    index === activeIndex
                      ? 'w-8 h-2 bg-gradient-to-r from-cyan-500 to-purple-500'
                      : 'w-2 h-2 bg-gray-600'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-[#1a2847] border-2 border-cyan-500/50 flex items-center justify-center hover:bg-cyan-500/20 transition-all"
            >
              <FaChevronRight className="text-white text-lg" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}