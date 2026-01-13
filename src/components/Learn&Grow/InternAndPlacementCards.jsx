"use client";

import Image from "next/image";

const InternAndPlacementCards = () => {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto space-y-20">

        {/* ===== CARD 1 ===== */}
        <div className="flex flex-col lg:flex-row items-center gap-10">

          {/* Image */}
          <div className="relative w-full lg:w-1/3 h-64 rounded-2xl overflow-hidden border border-gray-200">
            <Image
              src="/learn&grow/internship-image.svg"
              alt="Internship"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <h3 className="text-3xl font-bold mb-4 text-[#007BFF]">
              Internship Before Graduation
            </h3>

            <p className="text-lg text-[#2C2C2C]/75 leading-relaxed">
              Gain practical exposure through real-world internships that help you
              build confidence, improve technical skills, and understand industry
              expectations before completing your degree.
            </p>
          </div>
        </div>

        {/* ===== CARD 2 ===== */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-10">

          {/* Image */}
          <div className="relative w-full lg:w-1/3 h-64 rounded-2xl overflow-hidden border border-gray-200">
            <Image
              src="/learn&grow/placement-image.svg"
              alt="Placement"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex-1 text-center lg:text-left">
            <h3 className="text-3xl font-bold mb-4 text-[#FF7F00]">
              Job Placement After Completion
            </h3>

            <p className="text-lg text-[#2C2C2C]/75 leading-relaxed">
              Receive structured placement support including resume preparation,
              interview training, and connections with hiring partners to help you
              start your professional career with confidence.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default InternAndPlacementCards;
