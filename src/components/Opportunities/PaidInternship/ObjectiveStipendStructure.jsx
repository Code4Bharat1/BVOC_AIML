import React from "react";

const ObjectiveStipendStructure = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-10">
      {/* Heading */}
      <h2 className="text-5xl font-bold text-center mb-20 text-white">
        Paid <span className="text-[#AC6CFF]">Internship</span> Policy (From <span className="text-[#AC6CFF]">2nd Year</span> Onwards)
      </h2>

      {/* Main Flex Container */}
      <div className="flex items-center justify-center gap-10">
        {/* Left Circle with 'Objective' */}
        <div className="w-64 h-64 rounded-full border-[3px] shadow-sm shadow-white border-white bg-[#AC6CFF] flex items-center justify-center">
          <span className="text-white text-3xl font-bold">OBJECTIVE</span>
        </div>

        {/* Right Side - Objectives List */}
        <div className="flex flex-col gap-10">
          {/* Objective 1 */}
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-[#AC6CFF] text-white font-bold text-2xl border-[3px] shadow-sm shadow-white border-white flex items-center justify-center">
              1
            </div>
            <div className="rounded-4xl border-[2px] border-[#AC6CFF] shadow-sm shadow-[#AC6CFF] bg-gradient-to-b from-[#6B009D] to-[#2B2038] text-white p-6 w-[400px] text-center font-bold text-lg">
              To provide financial assistance through paid internships.
            </div>
          </div>

          {/* Objective 2 (With extra right padding) */}
          <div className="flex items-center gap-6 pl-20 my-10">
            <div className="w-16 h-16 rounded-full bg-[#AC6CFF] text-white font-bold text-2xl border-[3px] shadow-sm shadow-white border-white flex items-center justify-center">
              2
            </div>
            <div className="rounded-4xl border-[2px] border-[#AC6CFF] shadow-sm shadow-[#AC6CFF] bg-gradient-to-b from-[#6B009D] to-[#2B2038] text-white p-6 w-[400px] text-center font-bold text-lg">
              To bridge the gap between academic learning and industry requirements.
            </div>
          </div>

          {/* Objective 3 */}
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-[#AC6CFF] text-white font-bold text-2xl border-[3px] shadow-sm shadow-white border-white flex items-center justify-center">
              3
            </div>
            <div className="rounded-4xl border-[2px] border-[#AC6CFF] shadow-sm shadow-[#AC6CFF] bg-gradient-to-b from-[#6B009D] to-[#2B2038] text-white p-6 w-[400px] text-center font-bold text-lg">
              To help students contribute partially towards their own educational expenses.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ObjectiveStipendStructure;
