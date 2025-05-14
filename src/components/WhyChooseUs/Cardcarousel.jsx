"use client";

import { useState, useEffect, useRef } from "react";

// Card data
const cards = [
  {
    title: "Personalized Learning Path",
    description: (
      <>
        Our AI-driven tools create a{" "}
        <span className="text-white font-medium">
          customized learning journey
        </span>
        ,{" "}
        <span className="text-purple-400">
          recommending relevant courses, projects, and resources
        </span>{" "}
        based on your goals and progress.
      </>
    ),
    image: "/chat-ai.png",
    highlight: "Chat AI",
  },
  {
    title: "Real-Time Content Recommendations",
    description: (
      <>
        Get <span className="text-white font-medium">smart suggestions</span>{" "}
        <span className="text-purple-400">tailored to your interests</span>,
        keeping you on track and ensuring you always have the best resources at
        your fingertips.
      </>
    ),
    image: "/recommendation.png",
  },
  {
    title: "Track Progress with Insights",
    description: (
      <>
        Stay motivated with{" "}
        <span className="text-white font-medium">data-driven insights</span>{" "}
        that show your growth and guide your next steps,{" "}
        <span className="text-purple-400">
          making your learning experience more efficient
        </span>
        .
      </>
    ),
    image: "/insights.png",
  },
  {
    title: "Industry-Ready Tools",
    description: (
      <>
        Access the latest{" "}
        <span className="text-white font-medium">AI-powered tools</span>,{" "}
        <span className="text-purple-400">equipping you with the skills</span>{" "}
        that are shaping the future of work.
      </>
    ),
    image: "/tools.png",
  },
];

export default function AIToolsManagement() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);
  const touchStartX = useRef(0);

  // Auto-rotate cards
  useEffect(() => {
    if (!isPaused) {
      timerRef.current = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % cards.length);
      }, 5000);
    }
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isPaused]);

  const nextCard = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setActiveIndex((prevIndex) => (prevIndex + 1) % cards.length);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 10000);
  };

  const prevCard = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + cards.length) % cards.length
    );
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 10000);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    setIsPaused(true);
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? nextCard() : prevCard();
    }
    setTimeout(() => setIsPaused(false), 10000);
  };

  return (
    <div className="bg-[#0f0f1a] min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 relative">
          <h1 className="text-4xl font-bold text-white mb-2 mt-6">
            AI Tools Management{" "}
            <span className="absolute text-purple-300 text-sm top-0 right-1/3">
              ++
            </span>
          </h1>
          <p className="text-4xl text-purple-400 font-semibold relative">
            <span className="absolute text-purple-300 text-sm -left-4 top-1">
              ++
            </span>
            A Smarter Way to Learn <span className="text-pink-500">!</span>
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <div key={index} className="relative group">
              <div className="relative">
                <div className="bg-[#1a1a2e] relative z-10 h-[500px] overflow-hidden border-2 border-white transition-all duration-300">
                  <div className="h-[45%] overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5 flex flex-col border-2 border-white h-[55%]">
                    {card.highlight && (
                      <div className="text-purple-400 text-sm font-semibold mb-2">
                        {card.highlight}
                      </div>
                    )}
                    <h3 className="text-white text-xl font-bold mb-3 text-center">
                      {card.title}
                    </h3>
                    <div className="text-sm text-gray-300 leading-relaxed text-center">
                      {card.description}
                    </div>
                  </div>
                </div>

                {/* Right-to-left slope - white base */}
                <div className="absolute bottom-0 left-0 w-full h-16 bg-transparent overflow-hidden">
                  <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                    <polygon
                      points="0,0 100,50 100,100 0,100"
                      className="fill-white"
                      stroke="white"
                      strokeWidth="1"
                    />
                  </svg>
                </div>

                {/* Purple shadow */}
                <div className="absolute w-full h-16 bottom-0 left-0 -z-10 transform translate-y-2 overflow-hidden">
                  <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                    <polygon
                      points="0,0 100,50 100,100 0,100"
                      className="fill-purple-600/20"
                      stroke="white"
                      strokeWidth="1"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="relative" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
            <div className="bg-[#1a1a2e] relative z-10 h-[520px] overflow-hidden border-2 border-purple-500 rounded-t-lg">
              <div className="h-[45%] overflow-hidden">
                <img
                  src={cards[activeIndex].image}
                  alt={cards[activeIndex].title}
                  className="w-full h-full object-cover transition-all duration-500"
                />
                {cards[activeIndex].highlight && (
                  <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                    {cards[activeIndex].highlight}
                  </div>
                )}
              </div>
              <div className="p-6 flex flex-col">
                <h3 className="text-white text-2xl font-bold mb-4 text-center">
                  {cards[activeIndex].title}
                </h3>
                <div className="text-gray-300 leading-relaxed text-center">
                  {cards[activeIndex].description}
                </div>
                <div className="absolute bottom-20 left-0 w-full flex justify-center items-center mt-4">
                  <div className="text-gray-400 text-xs flex items-center py-1 px-3 bg-gray-800/40 rounded-full animate-pulse">
                    <span className="mr-1">◀</span> Swipe to navigate{" "}
                    <span className="ml-1">▶</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right-to-left slope - white base (mobile) */}
            <div className="absolute bottom-0 left-0 w-full h-16 bg-transparent overflow-hidden">
              <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                <polygon
                  points="0,0 100,50 100,100 0,100"
                  className="fill-white"
                  stroke="white"
                  strokeWidth="1"
                />
              </svg>
            </div>

            {/* Purple shadow (mobile) */}
            <div className="absolute w-full h-16 bottom-0 left-0 -z-10 transform translate-y-2 overflow-hidden">
              <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                <polygon
                  points="0,0 100,50 100,100 0,100"
                  className="fill-purple-600/20"
                  stroke="white"
                  strokeWidth="1"
                />
              </svg>
            </div>
            <div className="h-6"></div>

            {/* Controls */}
            <div className="mt-12 flex flex-col items-center">
              <div className="flex space-x-2 mb-6">
                {cards.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setActiveIndex(index);
                      setIsPaused(true);
                      setTimeout(() => setIsPaused(false), 10000);
                    }}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === activeIndex ? "bg-purple-500 w-6" : "bg-gray-600"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
              <div className="flex justify-center items-center w-full gap-12">
                <button
                  onClick={prevCard}
                  className="bg-purple-600 hover:bg-purple-700 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition-transform active:scale-95"
                  aria-label="Previous card"
                >
                  ◀
                </button>
                <div
                  className={`${
                    isPaused ? "opacity-0" : "opacity-100"
                  } transition-opacity duration-300 w-4 h-4 flex items-center justify-center`}
                >
                  <div className="w-2 h-2 bg-purple-400 rounded-full animate-ping"></div>
                </div>
                <button
                  onClick={nextCard}
                  className="bg-purple-600 hover:bg-purple-700 text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition-transform active:scale-95"
                  aria-label="Next card"
                >
                  ▶
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
