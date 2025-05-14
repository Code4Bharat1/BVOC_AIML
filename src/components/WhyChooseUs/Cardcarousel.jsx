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
      }, 5000); // Change card every 5 seconds
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isPaused]);

  const nextCard = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    setActiveIndex((prevIndex) => (prevIndex + 1) % cards.length);
    setIsPaused(true);
    // Resume auto-rotation after 10 seconds of inactivity
    setTimeout(() => setIsPaused(false), 10000);
  };

  const prevCard = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + cards.length) % cards.length
    );
    setIsPaused(true);
    // Resume auto-rotation after 10 seconds of inactivity
    setTimeout(() => setIsPaused(false), 10000);
  };

  // Touch event handlers for swipe functionality
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    setIsPaused(true);
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    // Swipe threshold of 50px
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        // Swipe left to go to next card
        nextCard();
      } else {
        // Swipe right to go to previous card
        prevCard();
      }
    }

    // Resume auto-rotation after 10 seconds of inactivity
    setTimeout(() => setIsPaused(false), 10000);
  };

  return (
    <div className="bg-[#232529] min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
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
              {/* Card Container */}
              <div className="relative">
                {/* Card Content */}
                <div
                  className="bg-[#1a1a2e] relative z-10 h-[480px] overflow-hidden border-2 border-white
                  [clip-path:polygon(0_0,100%_0,100%_100%,0_92%)] transition-all duration-300"
                >
                  {/* Image Section */}
                  <div className="h-[45%] overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Content Section */}
                  <div className="p-5 h-[55%] flex flex-col border-2 border-white">
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

                {/* Improved Purple Slanted Bottom Border */}
                <div className="absolute bottom-0 left-0 w-full h-10 bg-transparent">
                  <svg
                    className="w-full h-full"
                    preserveAspectRatio="none"
                    viewBox="0 0 100 50"
                  >
                    <polygon
                      points="0,0 100,0 100,50 0,10" // Increased Y value at left-bottom for deeper right slant
                      className="fill-white"
                    />
                  </svg>
                </div>

                {/* Shadow */}
                <div className="absolute w-full h-full bottom-0 left-0 -z-10 transform translate-y-2">
                  <svg
                    className="w-full h-full"
                    preserveAspectRatio="none"
                    viewBox="0 0 100 50"
                  >
                    <polygon
                      points="0,0 100,0 100,50 0,9.5" // Match the shape, but slightly shallower for shadow effect
                      className="fill-white"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Mobile Carousel */}
        <div className="md:hidden">
          <div
            className="relative"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Card Content */}
            <div
              className="bg-[#1a1a2e] relative z-10 h-[550px] overflow-hidden border-2 border-white rounded-t-lg
                            [clip-path:polygon(0_0,100%_0,100%_100%,0_92%)]"
            >
              {/* Image Section */}
              <div className="h-[45%] overflow-hidden">
                <img
                  src={cards[activeIndex].image}
                  alt={cards[activeIndex].title}
                  className="w-full h-full object-cover transition-all duration-500"
                />

                {/* Highlight Badge */}
                {cards[activeIndex].highlight && (
                  <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                    {cards[activeIndex].highlight}
                  </div>
                )}
              </div>

              {/* Content Section */}
              <div className="p-6 flex flex-col">
                <h3 className="text-white text-2xl font-bold mb-4 text-center">
                  {cards[activeIndex].title}
                </h3>
                <div className="text-gray-300 leading-relaxed text-center">
                  {cards[activeIndex].description}
                </div>

                {/* Swipe Indicator */}
                <div className="absolute bottom-20 left-0 w-full flex justify-center items-center mt-4">
                  <div className="text-gray-400 text-xs flex items-center py-1 px-3 bg-gray-800/40 rounded-full animate-pulse">
                    <span className="mr-1">◀</span>
                    Swipe to navigate
                    <span className="ml-1">▶</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-26 left-0 w-full h-10 bg-transparent rotate-[2deg]">
              <svg
                className="w-full h-full"
                preserveAspectRatio="none"
                viewBox="0 0 100 100"
              >
                <polygon
                  points="0,0 100,0 100,100 0,5"
                  className="fill-white"
                />
              </svg>
            </div>
            {/* Shadow */}
            <div className="absolute w-full h-full bottom-0 left-0 -z-10 transform translate-y-2">
              <svg
                className="w-full h-full"
                preserveAspectRatio="none"
                viewBox="0 0 100 50"
              >
                <polygon
                  points="0,0 100,0 100,50 0,9.5" // Match the shape, but slightly shallower for shadow effect
                  className="fill-white"
                />
              </svg>
            </div>

            {/* Card Shadow with Slant */}
            <div
              className="absolute w-full h-full bottom-0 left-0 
                          [clip-path:polygon(0_0,100%_0,100%_100%,0_92%)] 
                          bg-white -z-10 transform translate-y-2"
            ></div>

            {/* Clear spacer to ensure proper layout */}
            <div className="h-6"></div>

            {/* Navigation Controls */}
            <div className="mt-12 flex flex-col items-center">
              {/* Progress Indicators */}
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
                      index === activeIndex
                        ? "bg-purple-500 w-6"
                        : "bg-gray-600"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
