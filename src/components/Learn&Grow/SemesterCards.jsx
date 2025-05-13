import React from "react";
import Image from "next/image";

const SemesterCards = () => {
  const cards = [
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

  return (
    <>
      {/* Desktop Layout (Large screens and above) */}
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
          {cards.map((card, index) => (
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

      {/* Mobile Layout */}
      <div className="lg:hidden min-h-screen bg-[#B379FF] py-12 mt-36 px-4 m-8 rounded-4xl text-center">
       {/* Nexcore Logo */}
<div className="relative w-full mb-10 ">
  <div className="absolute -top-44 left-12">
    <Image
      src="/elements/Nexcore_Alliance.svg"
      alt="Nexcore Alliance"
      width={170}
      height={170}
      className="object-contain rounded-full"
      priority
    />
  </div>
</div>


        {/* Mobile Cards */}
        <div className="flex flex-col gap-6 max-w-md mx-auto">
          {cards
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
                  <p className="text-base font-medium">{card.duration}</p>
                  <p className="text-base">{card.description}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default SemesterCards;
