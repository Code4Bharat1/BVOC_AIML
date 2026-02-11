"use client";
import React, { useState } from "react";
import Image from "next/image";

const OurSyllabus = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative overflow-hidden bg-gray-50 py-16 px-6 lg:px-16">
      {/* Heading */}
      <div className="text-center max-w-4xl mx-auto mb-16 relative z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-[#2C2C2C]">
          Level Up Your Skills with <br />
          <span className="text-[#007BFF]">
            Our AI & ML, Cyber Security, Artificial Intelligence & Robotics &
            Graphic Animation, VFX & Multimedia
          </span>
        </h2>
      </div>

      {/* Desktop Card */}
      <div className="hidden lg:flex justify-center">
        <div
          className="relative rounded-2xl p-10 w-full max-w-7xl h-[360px] shadow-lg overflow-hidden bg-white border-2 border-gray-200 hover:shadow-xl hover:border-blue-300 transition-all duration-200"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Robot */}
          <div
            className="absolute left-0 bottom-0 w-1/3 z-10 transition-transform duration-200"
            style={{
              transform: isHovered ? "scale(1.05)" : "scale(1)",
              transformOrigin: "bottom left",
            }}
          >
            <Image
              src="/syllabusRoboImg.svg"
              alt="Robot"
              width={250}
              height={250}
              className="w-full h-auto"
            />
          </div>

          {/* Text */}
          <div className="ml-auto w-2/3 relative z-20 flex items-center h-full">
            <div className="transition-transform duration-200" style={{ transform: isHovered ? "scale(0.98)" : "scale(1)" }}>
              <p className="text-xl lg:text-2xl leading-relaxed text-gray-700">
                Our{" "}
                <span className="font-bold text-[#007BFF]">
                  AI & ML, Cyber Security, Artificial Intelligence & Robotics &
                  Graphic Animation, VFX & Multimedia
                </span>{" "}
                program is structured across six dynamic semesters, providing
                hands-on skills and deep theoretical knowledge in{" "}
                <span className="font-bold text-[#2C2C2C]">
                  AI & ML, Cyber Security, Artificial Intelligence & Robotics &
                  Graphic Animation, VFX & Multimedia
                </span>
                .
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="block lg:hidden px-6">
        <div className="flex items-center justify-center py-4 mb-8 mt-8 text-center w-full mx-auto rounded-xl shadow-md bg-[#007BFF]">
          <h2 className="text-xl font-bold text-white">About Our Syllabus</h2>
        </div>

        <div className="relative rounded-2xl p-6 h-auto mx-auto flex flex-col items-center shadow-md bg-white border-2 border-gray-200">
          <div className="relative w-full flex justify-center mb-6">
            <Image
              src="/syllabusRoboImg.svg"
              alt="Robot"
              width={200}
              height={200}
              className="w-48 h-auto"
            />
          </div>

          <div className="text-center px-2">
            <p className="text-base leading-relaxed text-gray-700">
              Our{" "}
              <span className="font-bold text-[#007BFF]">B.Voc AI & ML</span>{" "}
              program is structured across six dynamic semesters, providing
              hands-on skills and deep theoretical knowledge in{" "}
              <span className="font-bold text-[#2C2C2C]">
                AI, ML, and Data Science
              </span>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurSyllabus;