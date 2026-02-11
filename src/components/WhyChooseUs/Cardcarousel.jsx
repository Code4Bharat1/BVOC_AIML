"use client";

import { useState, useEffect, useRef } from "react";
import { Sparkles, ChevronLeft, ChevronRight } from "lucide-react";

const cards = [
  {
    title: "Personalized Learning Path",
    description:
      "Our AI-driven tools create a customized learning journey, recommending relevant courses, projects, and resources based on your goals and progress.",
    image: "/chat-ai.png",
    tag: "ADAPTIVE AI",
    color: "blue",
  },
  {
    title: "Real-Time Content Recommendations",
    description:
      "Get smart suggestions tailored to your interests, keeping you on track and ensuring you always have the best resources at your fingertips.",
    image: "/recommendation.png",
    tag: "SMART FEED",
    color: "orange",
  },
  {
    title: "Track Progress with Insights",
    description:
      "Stay motivated with data-driven insights that show your growth and guide your next steps, making your learning experience more efficient.",
    image: "/insights.png",
    tag: "ANALYTICS",
    color: "blue",
  },
  {
    title: "Industry-Ready Tools",
    description:
      "Access the latest AI-powered tools, equipping you with the skills that are shaping the future of work.",
    image: "/tools.png",
    tag: "FUTURE READY",
    color: "orange",
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
    <div className="bg-slate-50 py-20 px-6 mt-15">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4" />
            AI-Powered Learning
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
            AI Tools Management
          </h2>

          <p className="text-xl text-orange-600 font-semibold">
            A Smarter Way to Learn!
          </p>
        </div>

        {/* Desktop */}
        <div className="hidden md:grid grid-cols-2 gap-8">
          {/* Active Card */}
          <div className="bg-white border-2 border-slate-200 rounded-2xl overflow-hidden shadow-lg">
            <div className="relative h-80 bg-slate-100">
              <img
                src={cards[activeIndex].image}
                alt={cards[activeIndex].title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-8">
              <span
                className={`inline-block mb-4 px-3 py-1 rounded-full text-xs font-bold ${
                  cards[activeIndex].color === 'blue'
                    ? 'bg-blue-100 text-blue-700'
                    : 'bg-orange-100 text-orange-700'
                }`}
              >
                {cards[activeIndex].tag}
              </span>

              <h3 className="text-2xl font-bold mb-3 text-slate-900">
                {cards[activeIndex].title}
              </h3>

              <p className="text-slate-600 leading-relaxed">
                {cards[activeIndex].description}
              </p>
            </div>
          </div>

          {/* Side Cards */}
          <div className="space-y-4">
            {cards.map((card, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveIndex(index);
                  setIsPaused(true);
                  setTimeout(() => setIsPaused(false), 8000);
                }}
                disabled={index === activeIndex}
                className={`w-full text-left bg-white border-2 rounded-xl p-5 flex gap-4 transition-all ${
                  index === activeIndex
                    ? "border-blue-500 cursor-not-allowed"
                    : "border-slate-200 hover:border-blue-400 hover:shadow-md"
                }`}
              >
                <div className="w-20 h-20 bg-slate-100 rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <div
                    className={`inline-block mb-1 px-2 py-1 rounded text-xs font-bold ${
                      card.color === 'blue'
                        ? 'bg-blue-100 text-blue-700'
                        : 'bg-orange-100 text-orange-700'
                    }`}
                  >
                    {card.tag}
                  </div>
                  <h4 className="font-bold text-slate-900 mb-1">{card.title}</h4>
                  <p className="text-sm text-slate-600 line-clamp-2">
                    {card.description}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Mobile */}
        <div
          className="md:hidden"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="bg-white border-2 border-slate-200 rounded-2xl overflow-hidden shadow-lg">
            <div className="relative h-64 bg-slate-100">
              <img
                src={cards[activeIndex].image}
                alt={cards[activeIndex].title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6">
              <span
                className={`inline-block mb-3 px-3 py-1 rounded-full text-xs font-bold ${
                  cards[activeIndex].color === 'blue'
                    ? 'bg-blue-100 text-blue-700'
                    : 'bg-orange-100 text-orange-700'
                }`}
              >
                {cards[activeIndex].tag}
              </span>

              <h3 className="text-xl font-bold mb-3 text-slate-900">
                {cards[activeIndex].title}
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed">
                {cards[activeIndex].description}
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-6 mt-6">
            <button
              onClick={handlePrev}
              className="w-10 h-10 bg-white border-2 border-slate-200 rounded-full flex items-center justify-center hover:border-blue-400 transition-all"
            >
              <ChevronLeft className="w-5 h-5 text-slate-600" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {cards.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setActiveIndex(index);
                    setIsPaused(true);
                    setTimeout(() => setIsPaused(false), 8000);
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === activeIndex
                      ? "bg-blue-600 w-6"
                      : "bg-slate-300"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-10 h-10 bg-white border-2 border-slate-200 rounded-full flex items-center justify-center hover:border-blue-400 transition-all"
            >
              <ChevronRight className="w-5 h-5 text-slate-600" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}