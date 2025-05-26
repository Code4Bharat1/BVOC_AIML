import React from "react";

const ObjectiveStipendStructure = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 md:p-10 space-y-20">
      {/* ===== HEADING ===== */}
      <h2 className="text-3xl md:text-5xl font-bold text-center text-white">
        Paid <span className="text-[#AC6CFF]">Internship</span> Policy (From{" "}
        <span className="text-[#AC6CFF]">2nd Year</span> Onwards)
      </h2>

      {/* ===== OBJECTIVE SECTION ===== */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
        {/* OBJECTIVE Circle */}
        <div className="w-40 h-40 md:w-64 md:h-64 rounded-full border-[3px] shadow-sm shadow-white border-white bg-[#AC6CFF] flex items-center justify-center">
          <span className="text-white text-xl md:text-3xl font-bold">
            OBJECTIVE
          </span>
        </div>

        {/* OBJECTIVE Details */}
        <div className="flex flex-col gap-10 mt-0 lg:mt-0">
          {/* Item 1 */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#AC6CFF] text-white font-bold text-xl md:text-2xl border-[3px] shadow-sm shadow-white border-white flex items-center justify-center">
              1
            </div>
            <div className="rounded-3xl border-[2px] border-[#AC6CFF] shadow-sm shadow-[#AC6CFF] bg-gradient-to-b from-[#6B009D] to-[#2B2038] text-white p-4 md:p-6 w-[300px] md:w-[400px] text-center font-bold text-base md:text-lg">
              To provide financial assistance through paid internships.
            </div>
          </div>

          {/* Item 2 */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 md:pl-20 my-6 md:my-10">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#AC6CFF] text-white font-bold text-xl md:text-2xl border-[3px] shadow-sm shadow-white border-white flex items-center justify-center">
              2
            </div>
            <div className="rounded-3xl border-[2px] border-[#AC6CFF] shadow-sm shadow-[#AC6CFF] bg-gradient-to-b from-[#6B009D] to-[#2B2038] text-white p-4 md:p-6 w-[300px] md:w-[400px] text-center font-bold text-base md:text-lg">
              To bridge the gap between academic learning and industry
              requirements.
            </div>
          </div>

          {/* Item 3 */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#AC6CFF] text-white font-bold text-xl md:text-2xl border-[3px] shadow-sm shadow-white border-white flex items-center justify-center">
              3
            </div>
            <div className="rounded-3xl border-[2px] border-[#AC6CFF] shadow-sm shadow-[#AC6CFF] bg-gradient-to-b from-[#6B009D] to-[#2B2038] text-white p-4 md:p-6 w-[300px] md:w-[400px] text-center font-bold text-base md:text-lg">
              To help students contribute partially towards their own
              educational expenses.
            </div>
          </div>
        </div>
      </div>

      {/* ===== STIPEND STRUCTURE SECTION ===== */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10 w-full">
        {/* Left Box */}
        <div className="bg-[#AC6CFF] text-white font-bold text-xl md:text-2xl px-6 py-10 rounded-lg shadow-sm shadow-white text-center flex justify-center items-center lg:w-[230px] lg:h-[210px] border-[3px] border-white">
          Stipend <br /> Structure
        </div>

        {/* Right Text Cards */}
        <div className="flex flex-col gap-6">
          <div className="bg-gradient-to-r from-[#6B009D] to-[#2B2038] text-white p-4 md:p-6 rounded-2xl border-2 border-[#AC6CFF] w-[300px] md:w-[500px] text-center font-semibold text-sm md:text-base shadow-sm shadow-[#AC6CFF]">
            Paid internships will be performance-based, with stipends ranging
            between ₹3,000 to ₹10,000 per month.
          </div>
          <div className="bg-gradient-to-r from-[#6B009D] to-[#2B2038] text-white p-4 md:p-6 rounded-2xl border-2 border-[#AC6CFF] w-[300px] md:w-[500px] text-center font-semibold text-sm md:text-base shadow-sm shadow-[#AC6CFF]">
            Stipend amounts are determined based on the student’s skills,
            project involvement, work discipline, and mentor evaluations.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ObjectiveStipendStructure;
