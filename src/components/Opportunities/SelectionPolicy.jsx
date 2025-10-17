"use client";
import { useState } from "react";
import { FaChevronDown, FaChevronUp, FaCheckCircle } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";

const SelectionPolicy = () => {
  const policyItems = [
    {
      id: 1,
      heading: "1. Objective",
      image: "/SelectionPolicy/SelectionPolicy1.png",
      description: "To establish a transparent, fair, and merit-based internal selection process for admitting students into the B.Voc in AI and ML program, ensuring compliance with academic and government regulations.",
    },
    {
      id: 2,
      heading: "2. Application Submission",
      image: "/SelectionPolicy/SelectionPolicy2.png",
      description: "Candidates must submit a duly filled application form along with all required documents by the specified deadline. Incomplete applications or those without valid documents will not be considered.",
    },
    {
      id: 3,
      heading: "3. Verification of Eligibility",
      image: "/SelectionPolicy/SelectionPolicy3.png",
      description: "All applications will be screened for minimum eligibility criteria (educational qualification, minimum marks, age, etc.) as per the Admission Eligibility Criteria. Applications not meeting eligibility standards will be rejected outright",
    },
    {
      id: 4,
      heading: "4. Evaluation Criteria",
      image: "/SelectionPolicy/SelectionPolicy4.png",
      description: "Candidates who meet eligibility will be evaluated based on the following: Academic Performance: 10+2 marks percentage or equivalent (weightage 70%). Entrance Test (if applicable): A written or online test assessing basic knowledge related to Mathematics, Logical Reasoning, and English (weightage 20%). Personal Interview: To evaluate candidate's motivation, communication skills, and interest in AI & ML (weightage 10%). Note: The entrance test and interview may be waived off based on the merit of 10+2 scores or as per policy.",
    },
    {
      id: 5,
      heading: "5. Merit List Preparation",
      image: "/SelectionPolicy/SelectionPolicy5.png",
      description: "A consolidated score will be calculated based on the evaluation criteria. Candidates will be ranked according to their total scores. Separate merit lists will be prepared for General and Reserved category candidates.",
    },
    {
      id: 6,
      heading: "6. Selection and Admission Offer",
      image: "/SelectionPolicy/SelectionPolicy6.png",
      description: "To establish a transparent, fair, and merit-based internal selection process for admitting students into the B.Voc in AI and ML program, ensuring compliance with academic and government regulations.",
    },
    {
      id: 7,
      heading: "7. Waitlist and Vacancies",
      image: "/SelectionPolicy/SelectionPolicy7.png",
      description: "Candidates not initially selected may be placed on a waitlist. Waitlisted candidates will be offered admission if seats become available. The waitlist will be valid for the duration of the admission cycle only.",
    },
    // {
    //   id: 8,
    //   heading: "8. Object Reservation and Relaxation",
    //   image: "/SelectionPolicy/SelectionPolicy8.png",
    //   description: "Reservation for SC, ST, OBC, and PwD candidates will be implemented as per government norms. Relaxation in eligibility criteria and selection process will be applied accordingly.",
    // },
    {
      id: 8,
      heading: "8. Final Authority",
      image: "/SelectionPolicy/SelectionPolicy9.png",
      description: "The Admissions Committee reserves the right to modify, relax, or waive any clause of the selection policy in exceptional cases. All decisions of the Admissions Committee shall be final and binding.",
    },
  ];

  const hasOddItems = policyItems.length % 2 !== 0;

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#0f2847] via-[#1a3a5c] to-[#2d1b69] py-20 px-4 overflow-hidden">
      {/* Background Stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <HiSparkles className="absolute top-10 left-10 text-cyan-400 text-3xl animate-pulse" />
        <HiSparkles className="absolute top-32 right-20 text-orange-400 text-2xl animate-pulse delay-300" />
        <HiSparkles className="absolute bottom-32 left-1/4 text-purple-400 text-4xl animate-pulse delay-700" />
        <HiSparkles className="absolute bottom-20 right-1/3 text-yellow-400 text-2xl animate-pulse delay-1000" />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6 px-6 py-2 bg-cyan-500/10 border-2 border-cyan-500/30 rounded-full">
            <HiSparkles className="text-cyan-400" />
            <span className="text-cyan-400 text-sm font-bold tracking-widest">ADMISSION POLICY</span>
            <HiSparkles className="text-cyan-400" />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Internal Selection Process Policy
            <br />
            <span className="text-cyan-400">{"Bachelor's"}</span> in{" "}
            <span className="text-cyan-400">Artificial Intelligence</span>
            <br />
            and <span className="text-cyan-400">Machine Learning</span>
          </h1>

          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="h-1 w-20 bg-gradient-to-r from-transparent via-cyan-500 to-transparent rounded-full" />
            <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
            <div className="h-1 w-20 bg-gradient-to-r from-transparent via-cyan-500 to-transparent rounded-full" />
          </div>
        </div>

        {/* Policy Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-items-center">
          {policyItems.map((item, index) => (
            <div
              key={item.id}
              className={
                hasOddItems && index === policyItems.length - 1
                  ? "lg:col-span-2 flex justify-center w-full"
                  : "w-full flex justify-center"
              }
            >
              <PolicyCard item={item} index={index} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const PolicyCard = ({ item, index }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="relative w-full max-w-md group">
      {/* Glow Effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition duration-500" />
      
      <div
        className={`relative bg-[#1a2847] rounded-3xl overflow-hidden border-2 border-cyan-500/50 transition-all duration-300 ${
          expanded ? "h-auto" : "h-[490px]"
        }`}
      >
        {/* Corner Decorations */}
        <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-cyan-500/70 rounded-tl-3xl z-10" />
        <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-purple-500/70 rounded-br-3xl z-10" />

        <div className="p-6">
          {/* Header with Number Badge */}
          <div className="flex items-center gap-3 mb-3">
            <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center text-white font-bold shadow-lg shadow-cyan-500/50">
              {item.id}
            </div>
            <h3 className="text-xl font-bold text-white">{item.heading}</h3>
          </div>

          <div className="h-px bg-gradient-to-r from-cyan-500/50 via-purple-500/50 to-transparent mb-4" />

          {/* Image */}
          <div className="relative mb-4 rounded-2xl overflow-hidden border-2 border-cyan-500/30">
            <img
              src={item.image}
              alt={item.heading}
              className="w-full h-56 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a2847]/60 via-transparent to-transparent" />
            
            {/* Check Badge */}
            <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-green-500 flex items-center justify-center shadow-lg">
              <FaCheckCircle className="text-white text-lg" />
            </div>
          </div>

          {/* Description */}
          <div className={`relative ${expanded ? "" : "max-h-28 overflow-hidden"}`}>
            <p className="text-gray-300 text-sm leading-relaxed">
              {item.description}
            </p>

            {!expanded && (
              <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#1a2847] to-transparent" />
            )}
          </div>

          {/* Read More Button */}
          <button
            onClick={toggleExpand}
            className="mt-4 flex items-center gap-2 text-cyan-400 font-semibold hover:text-cyan-300 transition-colors group/btn"
          >
            {expanded ? (
              <>
                Read less
                <FaChevronUp className="text-sm group-hover/btn:-translate-y-0.5 transition-transform" />
              </>
            ) : (
              <>
                Read more
                <FaChevronDown className="text-sm group-hover/btn:translate-y-0.5 transition-transform" />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectionPolicy;