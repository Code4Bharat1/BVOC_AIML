import React from "react";
import Image from "next/image";

// Shared data for both components
const cardsData = [
  {
    title: "B.Voc Degree",
    duration: "(6 Semesters)",
    description:
      "Gain in-depth knowledge and industry-ready skills with a full 3-year vocational degree.",
    bg: "bg-[#933FFF]",
    text: "text-white",
  },
  {
    title: "Advanced Diploma",
    duration: "(4 Semesters)",
    description:
      "Build strong practical expertise and step confidently into specialized career roles.",
    bg: "bg-[#A45EFF]",
    text: "text-white",
  },
  {
    title: "Diploma",
    duration: "(2 Semesters)",
    description:
      "Kickstart your professional journey with core skills in just one year.",
    bg: "bg-[#C89DFF]",
    text: "text-black",
  },
  {
    title: "Certificate",
    duration: "(1 Semester)",
    description:
      "Get a quick, focused introduction to essential vocational skills in just six months.",
    bg: "bg-[#D8BCFD]",
    text: "text-black",
  },
];

// Alternative version based on the second example
const MobileSemesterCards = () => {
  return (
    <div className="lg:hidden min-h-screen bg-[#B379FF] py-12 mt-56 px-4 m-8 rounded-4xl text-center">
      {/* Nexcore Logo with Background */}
      <div className="relative w-full mb-10">
        {/* Background SVG positioned behind the logo */}
        <div className="absolute -top-52 left-[15%] w-64 h-64 -z-10">
          <Image
            src="/elements/Nexcore-learngrow-bg.svg"
            alt="Background Circle"
            width={240}
            height={240}
            className="object-contain"
            priority
          />
        </div>
        
        <div>
          <Image
            src="/elements/Nexcore_Alliance.svg"
            alt="Nexcore Alliance"
            width={190}
            height={170}
            className="object-contain rounded-full absolute -top-44 left-[23%]"
            priority
          />
        </div>
      </div>

      {/* Mobile Cards */}
      <div className="flex flex-col gap-6 max-w-md mx-auto">
        {cardsData
          .slice()
          .reverse()
          .map((card, index) => (
            <div
              key={index}
              className={`
                ${card.bg} ${card.text} rounded-[2rem] p-6
                transform transition-all duration-300 ease-in-out
                min-h-[180px] hover:min-h-[240px] hover:shadow-xl
                flex items-center
              `}
            >
              <div className="space-y-2">
                <h2 className="text-xl font-bold">{card.title}</h2>
                <p className="text-base font-bold">{card.duration}</p>
                <p className="text-base font-bold">{card.description}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

// Alternative Desktop version based on the second example
const DesktopSemesterCards = () => {
  return (
    <div className="hidden lg:block relative min-h-screen bg-[#E8D7FF] py-20 px-4">
      <div className="absolute top-[44%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 z-20">
        <Image
          src="/elements/Nexcore_Alliance.svg"
          alt="Nexcore Alliance"
          width={288}
          height={288}
          className="object-contain"
          priority
        />
      </div>

      <div className="grid grid-cols-2 gap-x-32 gap-y-20 max-w-7xl mx-auto">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className={`
              ${card.bg} ${card.text} rounded-[2rem] p-8
              transform transition-all duration-300 ease-in-out
              hover:bg-[#AC6CFF] hover:shadow-lg
              ${index % 2 === 0 ? "hover:pr-16" : "hover:pl-16"}
              min-h-[200px] hover:min-h-[280px] flex items-center
            `}
          >
            <div className="max-w-sm mx-auto space-y-3">
              <h2 className="text-2xl font-bold">{card.title}</h2>
              <p className="text-lg font-medium">{card.duration}</p>
              <p className="text-lg">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Main component that combines both
const SemesterCards = () => {
  return (
    <>
      <DesktopSemesterCards />
      <MobileSemesterCards />
    </>
  );
};

export default SemesterCards;