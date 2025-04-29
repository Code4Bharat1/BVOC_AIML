// src/components/Programs.jsx
"use client";
import React from "react";
import Image from "next/image";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

const ProgramStructure = () => {
  return (
    <section className="bg-[#efefef] py-24 px-6 md:px-12 mb-8 mt-2 min-h-screen">
      <div className="container mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl md:text-6xl font-extrabold text-black mb-6 ml-2 md:ml-20 font-publicSans text-left">
          Program <span className="text-lime-400">Structure</span>
        </h2>
        <p className="text-sm md:text-2xl text-[#6D737A] mb-8 md:mb-16 ml-2 md:ml-20 font-publicSans text-left">
          A flexible curriculum with multiple exit points offering progressive qualifications.
        </p>

        {/* Grid Layout for Program Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <CourseCard
            imageUrl="/ProgramLogo.png"
            backgroundImage="/cert1.png"
            title="Six Semester"
            description="B.Voc Degree"
            customMargin="mt-4 md:mt-0 md:ml-36"
          />

          <CourseCard
            imageUrl="/ProgramLogo.png"
            backgroundImage="/cert2.png"
            title="Four Semester"
            description="Advanced Diploma"
            customMargin="mt-4 md:mt-0 md:ml-4"
          />

          <CourseCard
            imageUrl="/ProgramLogo.png"
            backgroundImage="/cert3.png"
            title="Two Semester"
            description="Diploma"
            customMargin="mt-8 md:mt-0 md:ml-56"
          />

          <CourseCard
            imageUrl="/ProgramLogo.png"
            backgroundImage="/cert4.png"
            title="One Semester"
            description="Certificate"
            customMargin="mt-8 md:mt-0 md:ml-24"
          />
        </div>
        {/* Certifications and Industry Tie-ups */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-black mb-4">Industry-Endorsed Certifications</h3>
          {/* Add badges or certifications per program */}
        </div>

        {/* Hands-On Learning and Live Projects */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-black mb-4">Hands-On Learning and Live Projects</h3>
          {/* Add explanation of live projects */}
        </div>

        {/* Placement Success Rate and Industry Tie-ups */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-black mb-4">Placement Success Rate</h3>
          {/* Add success metrics, companies, and logos */}
        </div>

      </div>
    </section>
  );
};

const CourseCard = ({
  imageUrl,
  title,
  description,
  customMargin,
  backgroundImage,
}) => {
  return (
    <div
      className={`flex flex-col md:flex-row rounded-2xl overflow-hidden shadow-xl w-full max-w-full md:max-w-[75%] transition-transform transform hover:scale-105 duration-300 ${customMargin}`}
    >
      {/* Image Section (1/3) */}
      <div
        className="w-full md:w-1/3 h-56 relative"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0" />
      </div>

      {/* Text Section (2/3) */}
      <div className="w-full md:w-2/3 bg-white p-6 flex flex-col justify-center space-y-6">
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
        <p className="text-sm md:text-lg text-gray-700 font-publicSans">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProgramStructure;
