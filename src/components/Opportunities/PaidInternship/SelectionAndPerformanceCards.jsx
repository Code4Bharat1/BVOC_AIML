import React from "react";

const SelectionAndPerformanceCards = () => {
  const selectionCards = [
    {
      title: "1. Selection Process",
      description:
        "Evaluated by faculty mentors based on academic performance, participation in labs, and behavioral feedback.",
    },
    {
      title: "2. Skill Assessment",
      description:
        "Candidates are evaluated through coding tasks, problem-solving ability, and domain knowledge.",
    },
    {
      title: "3. Interview & Project Mapping",
      description:
        "Shortlisted candidates will be matched with available internships based on their interest, skill sets, and project requirements.",
    },
  ];

  const performanceCards = [
    {
      description:
        "Interns will be\n reviewed monthly\n by mentors or\n industry\n supervisors.",
    },
    {
      description:
        "Continuation and\n stipend increase are subject to:\n1. Timely completion of tasks.\n2. Quality of work and initiative.",
    },
    {
      description:
        "Soft skills such as\n communication,\n punctuality, and\n collaboration.",
    },
  ];

  const getMarginLeft = (index) => {
    if (index === 1) return "lg:ml-40";
    if (index === 2) return "lg:ml-80";
    return "ml-0";
  };

  return (
    <div className="w-full">
      {/* ================ Selection Process ================ */}
      <div className="w-full py-10 mt-10">
        <div className="mx-auto w-max rounded-2xl bg-gradient-to-l from-[#6B009D] to-[#2B2038] px-6 md:px-12 py-4 md:py-6 border-[3px] border-[#AC6CFF] shadow-sm shadow-[#AC6CFF] mb-10 ">
          <h2 className="text-white text-xl md:text-2xl lg:text-4xl font-bold text-center ">
            Selection Process
          </h2>
        </div>

        {/* Mobile View */}
        <div className="flex flex-col gap-6 items-center lg:hidden px-4">
          {selectionCards.map((card, index) => (
            <div
              key={`mobile-selection-${index}`}
              className="relative w-full max-w-[480px] aspect-[3/1] mb-4"
            >
              <div className="absolute inset-0 w-full h-full">
                <img
                  src="/paid-internship/SelectionProcessImgMob.svg"
                  alt={`Mobile Card ${index + 1}`}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="absolute inset-0 flex flex-col justify-center items-center px-4 text-white text-center">
                <h3 className="text-base md:text-lg font-bold mb-1 md:mb-2">
                  {card.title}
                </h3>
                <p className="text-xs md:text-sm font-semibold px-2 md:px-4">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop View */}
        <div className="hidden lg:block">
          <div className="flex flex-col gap-6 items-center lg:ml-0">
            {selectionCards.map((card, index) => (
              <div
                key={`desktop-selection-${index}`}
                className={`relative w-[900px] min-h-48 aspect-[5.6/1] ${getMarginLeft(
                  index
                )}`}
              >
                <div className="absolute inset-0 w-full h-full">
                  <img
                    src="/paid-internship/SelectionProcessImg.svg"
                    alt={`Card ${index + 1}`}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="absolute inset-0 flex flex-col justify-center px-6 text-white text-left">
                  <h3 className="text-xl lg:text-2xl font-bold mb-1 lg:mb-2">
                    {card.title}
                  </h3>
                  <p className="text-base lg:text-xl font-bold">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================ Performance Review & Continuation ================ */}

      <div className="w-full py-10">
        {/* Heading with skewed border */}
        <div className="mx-auto lg:w-max w-72 relative mb-14">
          <div className="relative lg:my-10 rounded-lg bg-gradient-to-l from-[#6B009D] to-[#2B2038] px-6 md:px-12 py-4 md:py-6 border-[3px] border-[#AC6CFF] shadow-sm shadow-[#AC6CFF] -skew-x-12">
            <h2 className="text-white text-xl md:text-2xl lg:text-4xl font-extrabold text-center skew-x-12">
              Performance Review & Continuation
            </h2>
          </div>
        </div>

        {/* Mobile View */}
        <div className="flex flex-col gap-8 items-center lg:hidden px-4">
          {performanceCards.map((card, index) => (
            <div
              key={`mobile-performance-${index}`}
              className="relative w-full max-w-[280px] aspect-[4/3] mb-4"
            >
              <div className="relative rounded-2xl w-full h-full bg-gradient-to-b from-[#6B009D] to-[#2B2038] border-[3px] border-white shadow-sm shadow-white flex items-center justify-center p-6 -skew-x-12">
                <div className="text-white text-lg md:text-xl font-bold text-center skew-x-12 whitespace-pre-line">
                  {card.description}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop View */}
        <div className="hidden lg:flex justify-center gap-8 px-4">
          {performanceCards.map((card, index) => (
            <div
              key={`desktop-performance-${index}`}
              className="relative h-64 w-full max-w-[320px] aspect-[1/1.2]"
            >
              <div className="relative w-full h-full rounded-xl bg-gradient-to-b from-[#6B009D] to-[#2B2038] border-[3px] border-white shadow-sm shadow-white flex items-center justify-center p-6 -skew-x-12">
                <div className="text-white text-base md:text-2xl font-bold text-center skew-x-12 whitespace-pre-line">
                  {card.description}
                </div>{" "}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectionAndPerformanceCards;
