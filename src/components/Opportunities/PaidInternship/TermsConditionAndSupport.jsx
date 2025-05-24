"use client";
import Image from "next/image";
// import { useState } from "react";

function TermsConditionAndSupport() {
  const terms = [
    {
      id: 1,
      image: "T&C1.svg",
      content: (
        <>
          Internships are optional but highly encouraged
          <div>for career growth.</div>
        </>
      ),
    },
    {
      id: 2,
      image: "T&C2.svg",
      content: (
        <>
          Students can pay part of their tuition fees using
          <div>earnings from internships.</div>
        </>
      ),
    },
    {
      id: 3,
      image: "T&C3.svg",
      content: (
        <>
          Nexcore Alliance or partner organizations reserve
          <div>the right to terminate an internship in case of</div>
          <div>misconduct or underperformance.</div>
        </>
      ),
    },
    {
      id: 4,
      image: "T&C4.svg",
      content: (
        <>
          Internships will not interfere with core academic
          <div>schedules—flexibility will be ensured.</div>
        </>
      ),
    },
    {
      id: 5,
      image: "T&C5.svg",
      content: (
        <>
          Selected students will be required to sign an
          <div>Internship Agreement.</div>
        </>
      ),
    },
  ];

  return (
    <>
      {/* =============== Terms & Condition Section ================== */}
      <div className="py-12 px-4 min-h-screen">
        {/* Header */}
        <div className="mx-auto lg:w-max w-72 relative mb-14">
          <div className="relative lg:my-10 rounded-lg bg-gradient-to-l from-[#6B009D] to-[#2B2038] px-6 md:px-12 py-4 md:py-6 border-[3px] border-[#AC6CFF] shadow-sm shadow-[#AC6CFF] -skew-x-12">
            <h2 className="text-white text-xl md:text-2xl lg:text-4xl font-extrabold text-center skew-x-12">
              Terms and Conditions
            </h2>
          </div>
        </div>

        {/* Cards */}
        <div className="max-w-6xl mx-auto space-y-16">
          {terms.map((term) => (
            <div key={term.id} className="relative flex items-center">
              {/* Diamond-shaped image box */}
              <div className="absolute left-0 z-10">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-[#A33DFF] rotate-45 rounded-lg border-2 border-white flex items-center justify-center shadow-md shadow-white">
                  <div className="-rotate-45">
                    <Image
                      src={`/paid-internship/${term.image}`}
                      alt={`icon-${term.id}`}
                      width={40}
                      height={40}
                      className="w-10 h-10"
                    />
                  </div>
                </div>
              </div>

              {/* Card content */}
              <div className="ml-8 md:ml-10 w-full">
                <div className="bg-gradient-to-l from-[#6B009D] to-[#2B2038] pl-12 pr-6 py-10 rounded-2xl shadow-md border border-purple-500/30">
                  <p className="text-white text-lg lg:text-4xl pl-8 font-bold">
                    {term.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* =============== Suuport and Guidence Section ================ */}
      <div className="w-full bg-[#3F0D55] py-10 mt-10">
        {/* Heading */}
        <div className="mx-auto w-max mb-10">
          <h2 className="text-white text-3xl md:text-4xl font-bold text-center">
            Support & Guidance
          </h2>
        </div>

        {/* Content: Image + Text */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-0">
          {/* Left: Image */}
          <div className="w-md:w-[400px] lg:w-[500px] flex justify-center mb-6 lg:mb-0">
            <Image
              src="/paid-internship/support.svg"
              alt="Support & Guidance"
              width={400}
              height={400}
              className="w-60 lg:w-92"
            />
          </div>

          {/* Right: List */}
          <div className="text-white text-base  font-bold leading-relaxed text-center lg:text-left">
            <p className="mb-8 lg:text-3xl text-lg">
              The Internship & Placement Cell will assist students in:
            </p>
            <ol className="list-decimal pl-6 md:text-3xl text-base lg:text-left text-center lg:pl-20 space-y-4">
              <li>Resume building and interview preparation.</li>
              <li>Identifying internship and placement opportunities.</li>
              <li>Providing mentorship for career development.</li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}

export default TermsConditionAndSupport;
