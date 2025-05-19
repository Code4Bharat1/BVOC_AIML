import React from "react";
import Image from "next/image";

const DurationTimelineAndEligibilityCriteria = () => {
  return (
    <>
    {/*================ Duration and Timeline Section ===============*/}
    <div className="w-full py-10 px-4 md:px-10 bg-gradient-to-b from-[#6B009D] to-[#2B2038]">
      {/* Duration & Timeline Heading */}
      <div className="mx-auto w-max bg-gradient-to-r from-[#6B009D] to-[#2B2038] rounded-2xl px-12 py-6 border-[3px] border-[#AC6CFF] shadow-sm shadow-[#AC6CFF] mb-10">
        <h2 className="text-white text-2xl md:text-4xl font-bold text-center">
          Duration & Timeline
        </h2>
      </div>

      {/* Timeline Image Cards */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 mb-20">
        {[
          "Internships will start from <br /> the fourth semester <br /> (second year).",
          "Duration of internships <br /> may vary between 3 to 12 <br /> months, depending on the <br/> project and organization.",
          "Students may work part- <br />time or full-time during <br /> semester breaks.",
        ].map((text, idx) => (
          <div key={idx} className="relative w-[280px] md:w-[370px] mt-10">
            <img
              src="/paid-internship/DurTimeImg1.svg"
              alt={`Card ${idx + 1}`}
              className="w-full"
            />
            <div className="absolute inset-0 flex items-center justify-center px-4 text-center">
              <p
                className="text-white font-semibold text-sm md:text-base"
                dangerouslySetInnerHTML={{ __html: text }}
              />
            </div>
          </div>
        ))}
      </div>

      
    </div>

    {/*=============== Eligibility Criteria Section ==============*/}
      <div className="w-full bg-[#3F0D55] py-10 mt-10">
  {/* Heading */}
  <div className="mx-auto w-max bg-gradient-to-l from-[#6B009D] to-[#2B2038] rounded-2xl px-12 py-6 border-[3px] border-[#AC6CFF] shadow-sm shadow-[#AC6CFF] mb-10">
    <h2 className="text-white text-2xl md:text-4xl font-bold text-center">
      Eligibility Criteria
    </h2>
  </div>

  {/* Content: Image + Text */}
  <div className="flex flex-col lg:flex-row items-center justify-center gap-0">
    {/* Left: Image */}
    <div className="w-md:w-[400px] lg:w-[500px] flex justify-center mb-6 lg:mb-0">
      <Image
        src="/paid-internship/EligiblityCriteriaImg.svg"
        alt="Eligibility"
        width={400}
        height={400}
        className="w-60 lg:w-92"
      />
    </div>

    {/* Right: List */}
    <div className="text-white text-base md:text-4xl font-bold leading-relaxed text-left">
      <ol className="list-decimal pl-6 lg:pl-0 space-y-4">
        <li>
          Be enrolled in the B.Voc in AI and ML program.
        </li>
        <li>
          Have successfully completed the first year with <br /> a minimum CGPA of 7.0.
        </li>
        <li>
          Maintain a minimum attendance of 80% in the <br /> previous semesters.
        </li>
        <li>
          Demonstrate proficiency in programming, data <br />
          handling, or ML tools through internal assessments <br className="hidden lg:block"/>
          or mini-projects.
        </li>
      </ol>
    </div>
  </div>
</div>

    </>
  );
};

export default DurationTimelineAndEligibilityCriteria;
