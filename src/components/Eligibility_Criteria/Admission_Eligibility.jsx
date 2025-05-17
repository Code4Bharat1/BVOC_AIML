import React from "react";

export default function Admission_Eligibility() {
  const Admission_Eligibility = [
    {
      heading: "Educational Qualification :",
      description: [
        "Candidate must have passed 10+2 (Higher Secondary or equivalent) examination from a recognized board in any stream — Science, Commerce, Arts, or Vocational.",
        "Candidates with 2-year ITI certificate after 10th standard are also eligible.",
      ],
      image: "/eligibility_criteria/Criteria1.svg",
    },
    {
      heading: "Minimum Marks :",
      description: [
        "General category candidates should have at least 50% aggregate marks in 10+2.",
        "Reserved category candidates (SC/ST/OBC/PwD) are eligible with a minimum of 45% aggregate marks.",
      ],
      image: "/eligibility_criteria/Criteria2.svg",
    },
    {
      heading: "Age Limit :",
      description: ["No upper age limit for admission."],
      image: "/eligibility_criteria/Criteria3.svg",
    },
    {
      heading: "Additional Criteria (If applicable) :",
      description: [
        "Some institutes may require candidates to clear an entrance exam or interview for final admission.",
        "Candidates must meet any additional guidelines issued by affiliating university or government bodies.",
      ],
      image: "/eligibility_criteria/Criteria4.svg",
    },
    {
      heading: "Reservation:",
      description: [
        "Reservation as per applicable government rules (SC 15%, ST 7.5%, OBC 27%, PwD 3%).",
        "Valid certificates must be submitted for claiming reservations.",
      ],
      image: "/eligibility_criteria/Criteria5.svg",
    },
  ];
  return (
    <>
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 mt-8 text-center leading-tight px-4">
        Admission Eligibility Criteria for{" "}
        <span className="text-[#AC6CFF]">B.Voc </span>in <br />
        <span className="text-[#AC6CFF]">Artificial Intelligence</span> and{" "}
        <br />
        <span className="text-[#AC6CFF]">Machine Learning</span>
      </h2>

      <div className="flex flex-col items-center justify-center px-4 pb-10 gap-6">
        {Admission_Eligibility.map((item, index) => (
          <div
            key={index}
            className="w-full max-w-4xl rounded-2xl p-6 text-white border-2 border-[#AC6CFF] shadow-[0_6px_20px_0_rgba(172,108,255,0.85)] bg-gradient-to-b from-[#2B2038] to-[#6B009D]"
          >
            <div className="flex flex-col md:flex-row items-center md:items-start gap-3 md:gap-6">
              <img
                src={item.image}
                alt="criteria icon"
                className="w-full max-w-[224px] h-auto object-contain"
              />
              <div className="text-center md:text-left">
                <h3 className="text-2xl md:text-4xl font-semibold mb-2">
                  {item.heading}
                </h3>
                <ul className="list-decimal list-inside space-y-2 text-base md:text-lg">
                  {item.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
