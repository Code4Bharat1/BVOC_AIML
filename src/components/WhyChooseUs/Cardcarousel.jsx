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
    <div className="relative min-h-screen bg-gradient-to-br from-[#1A287E] via-[#2C3560] to-[#212121] py-24 px-4 overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#26C6DA 1px, transparent 1px), linear-gradient(90deg, #26C6DA 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[#26C6DA] rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: '3s'
            }}
          />
        ))}
      </div>

      {/* Glowing Orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#26C6DA]/20 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FF6F00]/20 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-24">
          <div className="flex items-center justify-center gap-2 mb-6">
            <HiSparkles className="text-[#26C6DA] text-3xl animate-pulse" />
            <div className="inline-block px-6 py-2 bg-[#26C6DA]/10 border-2 border-[#26C6DA]/30 rounded-full backdrop-blur-xl">
              <span className="text-[#26C6DA] text-sm font-bold tracking-widest">AI-POWERED LEARNING</span>
            </div>
            <HiSparkles className="text-[#FF6F00] text-3xl animate-pulse" />
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            AI Tools Management
          </h1>
          <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#26C6DA] via-[#FF6F00] to-[#26C6DA] bg-clip-text text-transparent">
            A Smarter Way to Learn!
          </p>

          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="h-1 w-20 bg-gradient-to-r from-transparent via-[#26C6DA] to-transparent rounded-full animate-pulse" />
            <div className="w-2 h-2 rounded-full bg-[#26C6DA] animate-pulse" />
            <div className="h-1 w-20 bg-gradient-to-r from-transparent via-[#26C6DA] to-transparent rounded-full animate-pulse" />
          </div>
        </div>

        {/* Desktop: Split View Design */}
        <div className="hidden md:block">
          <div className="grid grid-cols-2 gap-8 mb-12">
            {/* Left: Large Active Card */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#26C6DA] via-[#FF6F00] to-[#26C6DA] rounded-3xl blur-xl opacity-60 group-hover:opacity-80 transition duration-1000 animate-pulse" />
              
              <div className="relative h-[600px] rounded-3xl overflow-hidden bg-[#1A287E]/80 backdrop-blur-xl border-2 border-[#26C6DA]/50">
                {/* Image with Overlay */}
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={cards[activeIndex].image}
                    alt={cards[activeIndex].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1A287E]/50 to-[#1A287E]" />
                  
                  {/* Floating Tag */}
                  <div className="absolute top-6 right-6">
                    <div className="flex items-center gap-2 px-4 py-2 bg-[#26C6DA]/20 backdrop-blur-md border-2 border-[#26C6DA]/40 rounded-full">
                      <HiSparkles className="text-[#26C6DA]" />
                      <span className="text-xs font-bold text-white tracking-wider">
                        {cards[activeIndex].tag}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#26C6DA] to-[#FF6F00] flex items-center justify-center text-2xl font-black text-white shadow-lg shadow-[#26C6DA]/50">
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
                      <div key={i} className="flex items-center gap-3 text-[#26C6DA]">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#26C6DA]" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-[#26C6DA]/50 rounded-tl-3xl" />
                <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-[#FF6F00]/50 rounded-br-3xl" />
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
                  <div className={`relative rounded-2xl overflow-hidden border-2 backdrop-blur-xl ${
                    index === activeIndex 
                      ? 'border-[#26C6DA]/20 bg-[#1A287E]/50'
                      : 'border-[#26C6DA]/30 bg-[#1A287E]/80 hover:border-[#26C6DA] hover:bg-[#1A287E]'
                  }`}>
                    <div className="flex items-center gap-4 p-5">
                      <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 border-2 border-[#26C6DA]/50">
                        <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-br from-[#26C6DA]/20 to-transparent" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs text-[#26C6DA] font-semibold mb-1 tracking-wider">
                          {card.tag}
                        </div>
                        <h3 className="text-white font-bold text-lg mb-1 truncate">
                          {card.title}
                        </h3>
                        <p className="text-gray-400 text-sm line-clamp-2">
                          {card.description}
                        </p>
                      </div>
                      <FaChevronRight className="text-[#26C6DA] text-xl flex-shrink-0" />
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
                    ? 'w-12 h-3 bg-gradient-to-r from-[#26C6DA] to-[#FF6F00]'
                    : 'w-3 h-3 bg-gray-600 group-hover:bg-[#26C6DA]'
                }`} />
                {index === activeIndex && (
                  <div className="absolute inset-0 rounded-full bg-[#26C6DA]/50 blur-md" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile: Modern Swipeable Card */}
        <div className="md:hidden" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#26C6DA] via-[#FF6F00] to-[#26C6DA] rounded-3xl blur-xl opacity-60 animate-pulse" />
            
            <div className="relative rounded-3xl overflow-hidden bg-[#1A287E]/80 backdrop-blur-xl border-2 border-[#26C6DA]/50">
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={cards[activeIndex].image}
                  alt={cards[activeIndex].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1A287E]/50 to-[#1A287E]" />
                
                <div className="absolute top-4 right-4 flex items-center gap-2 px-4 py-2 bg-[#26C6DA]/20 backdrop-blur-md border-2 border-[#26C6DA]/40 rounded-full">
                  <HiSparkles className="text-[#26C6DA]" />
                  <span className="text-xs font-bold text-white tracking-wider">
                    {cards[activeIndex].tag}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start gap-3 mb-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-[#26C6DA] to-[#FF6F00] flex items-center justify-center text-xl font-black text-white shadow-lg shadow-[#26C6DA]/50">
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
              </div>

              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[#26C6DA]/50 rounded-tl-3xl" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[#FF6F00]/50 rounded-br-3xl" />
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full bg-[#1A287E]/80 backdrop-blur-xl border-2 border-[#26C6DA]/50 flex items-center justify-center hover:bg-[#26C6DA]/20 transition-all"
            >
              <FaChevronLeft className="text-white text-lg" />
            </button>

            <div className="flex gap-2">
              {cards.map((_, index) => (
                <div
                  key={index}
                  className={`transition-all duration-300 rounded-full ${
                    index === activeIndex
                      ? 'w-8 h-2 bg-gradient-to-r from-[#26C6DA] to-[#FF6F00]'
                      : 'w-2 h-2 bg-gray-600'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-[#1A287E]/80 backdrop-blur-xl border-2 border-[#26C6DA]/50 flex items-center justify-center hover:bg-[#26C6DA]/20 transition-all"
            >
              <FaChevronRight className="text-white text-lg" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}