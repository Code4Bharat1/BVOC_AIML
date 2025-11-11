"use client";

import React, { useRef } from "react";

const cardData = [
  { id: 1, image: "/Hub/MachineLearning_Home.png", title: "Machine Learning\nEngineer" },
  { id: 2, image: "/Hub/AiSoftware_Home.png", title: "AI Software\nEngineer" },
  { id: 3, image: "/Hub/DA_Home.png", title: "Data Analyst\n(AI/ML Focus)" },
  { id: 4, image: "/Hub/AiHealthcare_Home.png", title: "AI Engineer\nin Healthcare" },
  { id: 5, image: "/Hub/Speech_Recognition_Home.png", title: "Speech Recognition\nEngineer" },
];

const KickStart = () => {
  const scrollContainerRef = useRef(null);

  return (
    <section className="relative py-24 px-6 lg:px-24 overflow-hidden bg-gradient-to-br from-white to-gray-50 ">
      {/* Heading */}
      <h1 className="text-center text-5xl lg:text-6xl font-bold mb-16 leading-tight text-gray-800" style={{ fontFamily: "'Inter', 'SF Pro Display', system-ui, sans-serif" }}>
        Kickstart Your 
        <span className="text-blue-600"> Career</span>
      </h1>

      {/* Cards Scroll */}
      <div
        ref={scrollContainerRef}
        className="overflow-x-auto scrollbar-hidden"
        style={{ scrollBehavior: "smooth" }}
      >
        <div className="flex gap-8 w-max  pr-8">
          {cardData.map((card) => (
            <div
              key={card.id}
              className="w-[290px] lg:w-[350px] h-[340px] lg:h-[440px] bg-white overflow-hidden shadow-lg flex-shrink-0 flex flex-col items-center justify-start p-6 border border-blue-200"
            >
              <div className="relative w-full h-[300px] overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-gray-800 font-bold text-center text-xl lg:text-2xl mt-4 uppercase leading-snug whitespace-pre-line">
                {card.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KickStart;