"use client";
import React, { useState, useEffect } from "react";
import { Clock, CheckCircle, Star } from "lucide-react";

const DurationTimelineAndEligibilityCriteria = () => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const generateStars = () => {
      return Array.from({ length: 12 }).map(() => ({
        id: Math.random(),
        top: Math.random() * 100,
        left: Math.random() * 100,
        color: ["#00d4ff", "#ff8c00", "#b847ff", "#ffd700"][
          Math.floor(Math.random() * 4)
        ],
        delay: Math.random() * 2,
        duration: 2 + Math.random() * 1,
      }));
    };
    setStars(generateStars());
  }, []);

  const timelineItems = [
    "Internships will start from the fourth semester (second year).",
    "Duration of internships may vary between 3 to 12 months, depending on the project and organization.",
    "Students may work part-time or full-time during semester breaks.",
  ];

  const eligibilityCriteria = [
    "Be enrolled in the B.Voc in AI and ML program.",
    "Have successfully completed the first year with a minimum CGPA of 7.0.",
    "Maintain a minimum attendance of 80% in the previous semesters.",
    "Demonstrate proficiency in programming, data handling, or ML tools through internal assessments or mini-projects.",
  ];

  return (
    <>
      {/*================ Duration and Timeline Section ===============*/}
      <div className="w-full py-10 px-4 md:px-10 bg-gradient-to-b from-[#0f2847] via-[#1a3a5c] to-[#2d1b69] relative overflow-hidden">
        {/* Background Stars */}
        <div className="absolute inset-0 pointer-events-none">
          {stars.map((star) => (
            <div
              key={star.id}
              className="absolute w-2 h-2 rounded-full animate-pulse"
              style={{
                top: `${star.top}%`,
                left: `${star.left}%`,
                backgroundColor: star.color,
                opacity: 0.6,
                animation: `twinkle ${star.duration}s ease-in-out ${star.delay}s infinite`,
              }}
            >
              <style>{`
                @keyframes twinkle {
                  0%, 100% { opacity: 0.3; transform: scale(0.5); }
                  50% { opacity: 1; transform: scale(1); }
                }
              `}</style>
            </div>
          ))}
        </div>

        <div className="relative z-10">
          {/* Duration & Timeline Heading */}
          <div className="mx-auto w-max bg-gradient-to-r from-cyan-600 to-purple-700 rounded-2xl px-12 py-6 border-2 border-cyan-400/80 shadow-lg shadow-cyan-500/50 mb-10">
            <h2 className="text-white text-2xl md:text-4xl font-bold text-center flex items-center gap-3">
              <Clock className="w-8 h-8" />
              Duration & Timeline
            </h2>
          </div>

          {/* Timeline Cards */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 mb-20">
            {timelineItems.map((text, idx) => (
              <div key={idx} className="group">
                <div className="relative w-[280px] md:w-[320px] h-[280px] md:h-[320px] rounded-2xl overflow-hidden">
                  {/* Gradient Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/20 to-purple-700/20 backdrop-blur-sm"></div>

                  {/* Animated Border */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-gradient-to-r from-cyan-400 to-orange-400 opacity-70 group-hover:opacity-100 transition-opacity"></div>

                  {/* Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl border-[2px] border-transparent bg-gradient-to-r from-cyan-500/30 via-purple-500/30 to-orange-500/30 opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>

                  {/* Content */}
                  <div className="relative h-full flex items-center justify-center px-6">
                    <div className="text-center">
                      <div className="mb-4 flex justify-center">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-orange-500 flex items-center justify-center text-white font-bold text-lg">
                          {idx + 1}
                        </div>
                      </div>
                      <p className="text-white font-semibold text-sm md:text-base leading-relaxed">
                        {text}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/*=============== Eligibility Criteria Section ==============*/}
      <div className="w-full bg-gradient-to-b from-[#2d1b69] via-[#1a3a5c] to-[#0f2847] py-10 relative overflow-hidden">
        {/* Background Stars */}
        <div className="absolute inset-0 pointer-events-none">
          {stars.map((star) => (
            <div
              key={`eli-${star.id}`}
              className="absolute w-2 h-2 rounded-full animate-pulse"
              style={{
                top: `${star.top}%`,
                left: `${star.left}%`,
                backgroundColor: star.color,
                opacity: 0.5,
                animation: `twinkle ${star.duration}s ease-in-out ${star.delay}s infinite`,
              }}
            ></div>
          ))}
        </div>

        <div className="relative z-10">
          {/* Heading */}
          <div className="mx-auto w-max bg-gradient-to-r from-purple-700 to-cyan-600 rounded-2xl px-12 py-6 border-2 border-cyan-400/80 shadow-lg shadow-cyan-500/50 mb-10">
            <h2 className="text-white text-2xl md:text-4xl font-bold text-center flex items-center gap-3">
              <CheckCircle className="w-8 h-8" />
              Eligibility Criteria
            </h2>
          </div>

          {/* Content: Grid Layout */}
          <div className="flex flex-col lg:flex-row items-stretch justify-center gap-8 px-4 lg:px-0">
            {/* Left: Visual Element */}
            <div className="lg:w-1/2 flex justify-center items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-orange-500/30 rounded-2xl blur-xl opacity-60"></div>
                <div className="relative w-80 h-80 rounded-2xl bg-gradient-to-br from-cyan-600/20 to-purple-700/20 border-2 border-cyan-400/70 backdrop-blur-sm flex items-center justify-center p-8">
                  <div className="text-center">
  <Star className="w-20 h-20 mx-auto text-orange-400 mb-4 animate-pulse" />
  <img
    src="/paid-internship/EligiblityCriteriaImg.svg"
    alt="Eligibility Criteria"
    className="mx-auto mb-4 w-32 h-32"
  />
  <p className="text-white font-semibold text-base md:text-lg leading-relaxed">
    Eligibility Criteria for Paid Internships from 2nd Year Onwards
  </p>
</div>

                </div>
              </div>
            </div>

            {/* Right: List */}
            <div className="lg:w-1/2">
              <div className="space-y-6">
                {eligibilityCriteria.map((criterion, idx) => (
                  <div
                    key={idx}
                    className="group flex gap-4 p-4 rounded-xl bg-gradient-to-r from-cyan-600/10 to-purple-700/10 border-l-4 border-orange-400 hover:border-orange-300 hover:from-cyan-600/20 hover:to-purple-700/20 hover:shadow-lg hover:shadow-cyan-500/30 transition-all backdrop-blur-sm"
                  >
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-8 w-8 rounded-full bg-gradient-to-br from-orange-400 to-orange-500 text-white font-bold">
                        {idx + 1}
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white font-semibold text-sm md:text-base leading-relaxed">
                        {criterion}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DurationTimelineAndEligibilityCriteria;