"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp, Check } from "lucide-react";

const SelectionPolicy = () => {
  const policyItems = [
    {
      id: 1,
      heading: "Objective",
      image: "/SelectionPolicy/SelectionPolicy1.png",
      description: "To establish a transparent, fair, and merit-based internal selection process for admitting students into the B.Voc in AI and ML program, ensuring compliance with academic and government regulations.",
    },
    {
      id: 2,
      heading: "Application Submission",
      image: "/SelectionPolicy/SelectionPolicy2.png",
      description: "Candidates must submit a duly filled application form along with all required documents by the specified deadline. Incomplete applications or those without valid documents will not be considered.",
    },
    {
      id: 3,
      heading: "Verification of Eligibility",
      image: "/SelectionPolicy/SelectionPolicy3.png",
      description: "All applications will be screened for minimum eligibility criteria (educational qualification, minimum marks, age, etc.) as per the Admission Eligibility Criteria. Applications not meeting eligibility standards will be rejected outright",
    },
    {
      id: 4,
      heading: "Evaluation Criteria",
      image: "/SelectionPolicy/SelectionPolicy4.png",
      description: "Candidates who meet eligibility will be evaluated based on the following: Academic Performance: 10+2 marks percentage or equivalent (weightage 70%). Entrance Test (if applicable): A written or online test assessing basic knowledge related to Mathematics, Logical Reasoning, and English (weightage 20%). Personal Interview: To evaluate candidate's motivation, communication skills, and interest in AI & ML (weightage 10%). Note: The entrance test and interview may be waived off based on the merit of 10+2 scores or as per policy.",
    },
    {
      id: 5,
      heading: "Merit List Preparation",
      image: "/SelectionPolicy/SelectionPolicy5.png",
      description: "A consolidated score will be calculated based on the evaluation criteria. Candidates will be ranked according to their total scores. Separate merit lists will be prepared for General and Reserved category candidates.",
    },
    {
      id: 6,
      heading: "Selection and Admission Offer",
      image: "/SelectionPolicy/SelectionPolicy6.png",
      description: "To establish a transparent, fair, and merit-based internal selection process for admitting students into the B.Voc in AI and ML program, ensuring compliance with academic and government regulations.",
    },
    {
      id: 7,
      heading: "Waitlist and Vacancies",
      image: "/SelectionPolicy/SelectionPolicy7.png",
      description: "Candidates not initially selected may be placed on a waitlist. Waitlisted candidates will be offered admission if seats become available. The waitlist will be valid for the duration of the admission cycle only.",
    },
    {
      id: 8,
      heading: "Final Authority",
      image: "/SelectionPolicy/SelectionPolicy9.png",
      description: "The Admissions Committee reserves the right to modify, relax, or waive any clause of the selection policy in exceptional cases. All decisions of the Admissions Committee shall be final and binding.",
    },
  ];

  return (
    <div className="relative bg-gradient-to-b from-slate-50 to-white py-16 px-4 overflow-hidden mt-20">
      {/* Simple background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50/40 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-orange-50/40 via-transparent to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight text-slate-900">
            Internal Selection Process Policy
          </h1>
          
          <div className="max-w-4xl mx-auto">
            <h2 className="text-lg md:text-xl text-slate-700 leading-relaxed">
              <span className="font-semibold text-blue-600">Bachelor's</span> in{" "}
              <span className="font-semibold text-blue-600">AI & Machine Learning</span>,{" "}
              <span className="font-semibold text-orange-500">Artificial Intelligence & Robotics</span>,{" "}
              <span className="font-semibold text-blue-600">Cybersecurity</span>,{" "}
              <span className="font-semibold text-blue-600">Graphic Animation, VFX & Multimedia</span>
            </h2>
          </div>

          {/* Simple divider */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
            <div className="w-2 h-2 rounded-full bg-orange-500" />
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-orange-400 to-transparent" />
          </div>
        </div>

        {/* Policy Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {policyItems.map((item, index) => (
            <PolicyCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

const PolicyCard = ({ item, index }) => {
  const [expanded, setExpanded] = useState(false);

  const isBlue = index % 2 === 0;
  const accentColor = isBlue ? "blue" : "orange";

  const colorStyles = {
    blue: {
      badge: "bg-blue-600",
      border: "border-blue-200",
      hoverBorder: "hover:border-blue-400",
      text: "text-blue-600",
      checkBg: "bg-blue-600",
    },
    orange: {
      badge: "bg-orange-500",
      border: "border-orange-200",
      hoverBorder: "hover:border-orange-400",
      text: "text-orange-500",
      checkBg: "bg-orange-500",
    },
  };

  const styles = colorStyles[accentColor];

  return (
    <div className="group">
      <div
        className={`bg-white rounded-2xl border-2 ${styles.border} ${styles.hoverBorder} shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden ${
          expanded ? "h-auto" : "h-[500px]"
        }`}
      >
        {/* Header */}
        <div className="p-6 pb-4">
          <div className="flex items-center gap-3 mb-4">
            <div className={`w-10 h-10 ${styles.badge} rounded-lg flex items-center justify-center text-white font-bold shadow-md flex-shrink-0`}>
              {item.id}
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              {item.heading}
            </h3>
          </div>
        </div>

        {/* Image */}
        <div className="relative px-6 pb-4">
          <div className="relative rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
            <img
              src={item.image}
              alt={item.heading}
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            {/* Check badge */}
            <div className={`absolute top-3 right-3 w-8 h-8 ${styles.checkBg} rounded-full flex items-center justify-center shadow-lg`}>
              <Check className="w-5 h-5 text-white" strokeWidth={3} />
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="px-6 pb-6">
          <div className={`relative ${expanded ? "" : "max-h-24 overflow-hidden"}`}>
            <p className="text-sm text-slate-700 leading-relaxed">
              {item.description}
            </p>
            {!expanded && (
              <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white to-transparent" />
            )}
          </div>

          {/* Read More Button */}
          <button
            onClick={() => setExpanded(!expanded)}
            className={`mt-4 flex items-center gap-2 ${styles.text} hover:underline font-semibold text-sm transition-all group/btn`}
          >
            {expanded ? (
              <>
                Read less
                <ChevronUp className="w-4 h-4 group-hover/btn:-translate-y-0.5 transition-transform" />
              </>
            ) : (
              <>
                Read more
                <ChevronDown className="w-4 h-4 group-hover/btn:translate-y-0.5 transition-transform" />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectionPolicy;