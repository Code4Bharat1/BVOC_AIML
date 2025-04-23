// src/components/Programs.jsx
"use client";
import React from "react";
import Image from "next/image";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

const Courses = () => {
  return (
    <section className="bg-[#B2D5ED] py-16 px-4 md:px-8 mb-8 mt-2">
      <div className="container mx-auto">
        {/* Section Title */}
        <h2 className="text-xl md:text-4xl font-semibold text-black mb-4 ml-2 md:ml-20 font-publicSans text-left">
          Program <span className="text-[#116EB3]">Structure</span>
        </h2>
        <p className="text-sm md:text-2xl text-[#6D737A] mb-6 md:mb-12 ml-2 md:ml-20 font-publicSans text-left">
          A flexible curriculum with multiple exit points offering progressive qualifications.
        </p>

        {/* Grid Layout for Program Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {/* NSQF Level 7 */}
          <CourseCard
            imageUrl="/ProgramLogo.png"
            backgroundImage="/cert1.png"
            title="Six Semester"
            description="B.Voc Degree"
            customMargin="mt-4 md:mt-0 md:ml-36"
          />

          {/* NSQF Level 6 */}
          <CourseCard
            imageUrl="/ProgramLogo.png"
            backgroundImage="/cert2.png"
            title="Four Semester"
            description="Advanced Diploma"
            customMargin="mt-4 md:mt-0 md:ml-4"
          />

          {/* NSQF Level 5 */}
          <CourseCard
            imageUrl="/ProgramLogo.png"
            backgroundImage="/cert3.png"
            title="Two Semester"
            description="Diploma"
            customMargin="mt-8 md:mt-0 md:ml-56"
          />

          {/* NSQF Level 4 */}
          <CourseCard
            imageUrl="/ProgramLogo.png"
            backgroundImage="/cert4.png"
            title="One Semester"
            description="Certificate"
            customMargin="mt-8 md:mt-0 md:ml-24"
          />
        </div>
      </div>
    </section>
  );
};

// Split Layout CourseCard Component
const CourseCard = ({ imageUrl, title, description, customMargin, backgroundImage }) => {
  return (
    <div
      className={`flex flex-col md:flex-row rounded-2xl overflow-hidden shadow-xl w-full max-w-full md:max-w-[75%] transition-transform transform hover:scale-105 duration-300 ${customMargin}`}
    >
      {/* Image Section (1/3) */}
      <div
        className="w-full md:w-1/3 h-40 md:h-auto relative"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Optional overlay for effect */}
        <div className="absolute inset-0 " />
      </div>

      {/* Text Section (2/3) */}
      <div className="w-full md:w-2/3 bg-white p-4 md:p-6 flex flex-col justify-center space-y-4">
        <div className="flex items-center">
          <Image
            src={imageUrl}
            alt="Program Symbol"
            width={30}
            height={30}
            className="rounded-full bg-white p-1"
          />
          <h3 className="ml-3 text-base md:text-2xl font-bold font-publicSans text-black">
            {title}
          </h3>
          <FormatQuoteIcon className="text-yellow-500 text-lg md:text-3xl ml-auto" />
        </div>
        <p className="text-sm md:text-lg text-gray-700 font-publicSans">{description}</p>
      </div>
    </div>
  );
};

export default Courses;
