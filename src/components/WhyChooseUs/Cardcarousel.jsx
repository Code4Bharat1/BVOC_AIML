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
    color: "#007BFF",
  },
  {
    title: "Real-Time Content Recommendations",
    description:
      "Get smart suggestions tailored to your interests, keeping you on track and ensuring you always have the best resources at your fingertips.",
    image: "/recommendation.png",
    tag: "SMART FEED",
    color: "#FF7F00",
  },
  {
    title: "Track Progress with Insights",
    description:
      "Stay motivated with data-driven insights that show your growth and guide your next steps, making your learning experience more efficient.",
    image: "/insights.png",
    tag: "ANALYTICS",
    color: "#007BFF",
  },
  {
    title: "Industry-Ready Tools",
    description:
      "Access the latest AI-powered tools, equipping you with the skills that are shaping the future of work.",
    image: "/tools.png",
    tag: "FUTURE READY",
    color: "#FF7F00",
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
    <div className="min-h-screen bg-white py-24 px-4 mt-5">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-24">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Sparkles className="w-7 h-7 text-blue-600" />
            <span className="px-6 py-2 border rounded-full text-xs font-bold tracking-widest text-blue-600">
              AI-POWERED LEARNING
            </span>
            <Sparkles className="w-7 h-7 text-orange-500" />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            AI Tools Management
          </h1>

          <p className="text-2xl md:text-3xl font-bold text-orange-500">
            A Smarter Way to Learn!
          </p>
        </div>

        {/* Desktop */}
        <div className="hidden md:grid grid-cols-2 gap-8">
          {/* Active Card */}
          <div className="border rounded-3xl overflow-hidden shadow-lg">
            <img
              src={cards[activeIndex].image}
              alt={cards[activeIndex].title}
              className="w-full h-72 object-cover"
            />

            <div className="p-8">
              <span
                className="inline-block mb-4 text-xs font-bold"
                style={{ color: cards[activeIndex].color }}
              >
                {cards[activeIndex].tag}
              </span>

              <h2 className="text-2xl font-bold mb-3 text-gray-900">
                {cards[activeIndex].title}
              </h2>

              <p className="text-gray-700 leading-relaxed">
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
                className={`w-full text-left border rounded-2xl p-5 flex gap-4 ${
                  index === activeIndex
                    ? "cursor-not-allowed"
                    : "hover:border-blue-400"
                }`}
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-20 h-20 object-cover rounded-xl"
                />

                <div>
                  <div
                    className="text-xs font-bold mb-1"
                    style={{ color: card.color }}
                  >
                    {card.tag}
                  </div>
                  <h3 className="font-bold text-gray-900">{card.title}</h3>
                  <p className="text-sm text-gray-600 line-clamp-2">
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
          <div className="border rounded-3xl overflow-hidden shadow-lg">
            <img
              src={cards[activeIndex].image}
              alt={cards[activeIndex].title}
              className="w-full h-64 object-cover"
            />

            <div className="p-6">
              <span
                className="text-xs font-bold"
                style={{ color: cards[activeIndex].color }}
              >
                {cards[activeIndex].tag}
              </span>

              <h2 className="text-xl font-bold mt-2 mb-3 text-gray-900">
                {cards[activeIndex].title}
              </h2>

              <p className="text-sm text-gray-700">
                {cards[activeIndex].description}
              </p>
            </div>
          </div>

          <div className="flex justify-center items-center gap-6 mt-6">
            <button onClick={handlePrev}>
              <ChevronLeft />
            </button>

            <button onClick={handleNext}>
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
