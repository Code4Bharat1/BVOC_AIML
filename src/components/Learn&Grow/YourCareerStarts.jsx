"use client";
import React from "react";

const YourCareerStarts = () => {
  return (
    <section className="relative bg-white py-20 md:py-28 px-4 sm:px-6 lg:px-12">

      <style jsx>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideLeft {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideRight {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }

        .heading-animate { animation: slideDown 0.7s ease-out; }
        .card-left { animation: slideLeft 0.7s ease-out; }
        .card-right { animation: slideRight 0.7s ease-out; }

        .career-card {
          transition: all 0.3s ease;
        }
        .career-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 30px rgba(0,0,0,0.08);
        }
      `}</style>

      <div className="max-w-7xl mx-auto">

        {/* ===== Heading ===== */}
        <div className="heading-animate text-center mb-14 md:mb-20 px-2">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-[#2C2C2C]"
            style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
          >
            Your Career Starts With Us, <br className="hidden sm:block" />
            <span className="text-[#007BFF]">And We Stay With You</span> All The Way.
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-[#2C2C2C]/70 text-base sm:text-lg">
            From classroom learning to real-world careers, we guide, mentor and
            prepare you for success at every stage of your professional journey.
          </p>
        </div>

        {/* ===== Cards ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

          {/* Card 1 */}
          <div
            className="card-left career-card bg-white rounded-2xl p-8 md:p-10 border"
            style={{ borderColor: "rgba(0,123,255,0.25)" }}
          >
            <div className="flex flex-col gap-5">

              <div className="w-16 h-16 rounded-xl flex items-center justify-center bg-[#007BFF]/10">
                <img
                  src="/elements/CareerStart1.svg"
                  alt="Guidance"
                  className="w-10 h-10"
                />
              </div>

              <h3 className="text-xl md:text-2xl font-semibold text-[#2C2C2C]">
                Learn With Industry Mentors
              </h3>

              <p className="text-[#2C2C2C]/75 leading-relaxed">
                Get trained by professionals who understand industry needs and
                help you build strong technical foundations with practical
                exposure.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="card-right career-card bg-white rounded-2xl p-8 md:p-10 border"
            style={{ borderColor: "rgba(255,127,0,0.25)" }}
          >
            <div className="flex flex-col gap-5">

              <div className="w-16 h-16 rounded-xl flex items-center justify-center bg-[#FF7F00]/10">
                <img
                  src="/elements/CareerStart2.svg"
                  alt="Success"
                  className="w-10 h-10"
                />
              </div>

              <h3 className="text-xl md:text-2xl font-semibold text-[#2C2C2C]">
                Career-Focused Support System
              </h3>

              <p className="text-[#2C2C2C]/75 leading-relaxed">
                From internships to placements, resume building to interview
                preparation — we support your transition into the workforce.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default YourCareerStarts;
