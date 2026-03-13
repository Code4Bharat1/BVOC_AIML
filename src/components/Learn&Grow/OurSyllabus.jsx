"use client";
import React, { useState } from "react";
import Image from "next/image";

const OurSyllabus = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      aria-labelledby="syllabus-heading"
      className="relative overflow-hidden bg-gray-50 py-16 px-6 lg:px-16"
    >
      {/* Heading */}
      <header className="text-center max-w-4xl mx-auto mb-16 relative z-10">
        <h2
          id="syllabus-heading"
          className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-[#2C2C2C]"
        >
          Level Up Your Skills with <br />
          <span className="text-[#007BFF]">
            Bachelor of Data Science & Artificial Intelligence <br />
            Bachelor of Multimedia & Animation
          </span>
        </h2>
      </header>

      {/* Desktop Card */}
      <div className="hidden lg:flex justify-center">
        <article
          className="relative rounded-2xl p-10 w-full max-w-7xl h-[360px] shadow-lg overflow-hidden bg-white border-2 border-gray-200 hover:shadow-xl hover:border-blue-300 transition-all duration-200"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Robot Image */}
          <div
            className="absolute left-0 bottom-0 w-1/3 z-10 transition-transform duration-200"
            style={{
              transform: isHovered ? "scale(1.05)" : "scale(1)",
              transformOrigin: "bottom left",
            }}
          >
            <Image
              src="/syllabusRoboImg.svg"
              alt="Artificial intelligence learning robot illustration representing AI and data science syllabus"
              width={250}
              height={250}
              className="w-full h-auto"
            />
          </div>

          {/* Text */}
          <div className="ml-auto w-2/3 relative z-20 flex items-center h-full">
            <div
              className="transition-transform duration-200"
              style={{ transform: isHovered ? "scale(0.98)" : "scale(1)" }}
            >
              <p className="text-xl lg:text-2xl leading-relaxed text-gray-700">
                Our{" "}
                <strong className="text-[#007BFF]">
                  Bachelor of Data Science and Artificial Intelligence &
                  Bachelor of Multimedia and Animation
                </strong>{" "}
                programs are structured across six dynamic semesters, providing
                hands-on skills and strong theoretical knowledge in modern
                technologies such as{" "}
                <strong className="text-[#2C2C2C]">
                  Artificial Intelligence, Machine Learning, Data Science,
                  Multimedia, and Animation
                </strong>
                .
              </p>
            </div>
          </div>
        </article>
      </div>

      {/* Mobile */}
      <div className="block lg:hidden px-6">
        <div className="flex items-center justify-center py-4 mb-8 mt-8 text-center w-full mx-auto rounded-xl shadow-md bg-[#007BFF]">
          <h3 className="text-xl font-bold text-white">
            About Our Syllabus
          </h3>
        </div>

        <article className="relative rounded-2xl p-6 h-auto mx-auto flex flex-col items-center shadow-md bg-white border-2 border-gray-200">
          <div className="relative w-full flex justify-center mb-6">
            <Image
              src="/syllabusRoboImg.svg"
              alt="AI and machine learning syllabus illustration"
              width={200}
              height={200}
              className="w-48 h-auto"
            />
          </div>

          <div className="text-center px-2">
            <p className="text-base leading-relaxed text-gray-700">
              Our{" "}
              <strong className="text-[#007BFF]">
                B.Voc Artificial Intelligence & Machine Learning
              </strong>{" "}
              program is structured across six semesters, providing practical
              skills and theoretical understanding in{" "}
              <strong className="text-[#2C2C2C]">
                AI, Machine Learning, Data Science, Multimedia, and Animation
              </strong>
              .
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default OurSyllabus;