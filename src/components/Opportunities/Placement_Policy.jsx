import React from "react";

export default function Placement_Policy() {
  const Placement_Policy = [
    {
      image: "/placement_policy/image1.svg",
      heading: "Placement Guarantee Overview",
      description: [
        "Minimum Guaranteed Package: ₹3,00,000 per annum (₹25,000/month).",
        "Maximum Guaranteed Package: ₹6,00,000 per annum (₹50,000/month).",
        "Job Domains: AI, Machine Learning, Data Science, Analytics, and related fields.",
        "Support Includes:",
        [
          "Resume & profile development",
          "Industry training & soft skills workshops",
          "Mock interviews and portfolio building",
          "Direct placement drives with partner companies",
        ],
      ],
    },
    {
      image: "/placement_policy/image2.svg",
      heading: "Eligibility Criteria",
      description: [
        "To be eligible for the guaranteed placement, a student must:",
        [
          "Complete the entire 3-year program without backlog.",
          "Maintain at least 90% attendance across all semesters.",
          "Maintain a minimum CGPA of 8.5 (out of 10).",
          "Actively participate in pre-placement training sessions.",
          "Have no record of disciplinary issues or academic dishonesty.",
        ],
      ],
    },
    {
      image: "/placement_policy/image3.svg",
      heading: "Student Responsibilities",
      description: [
        "Apply to all relevant job opportunities shared by the placement cell.",
        "Attend interviews and drives arranged by Nexcore or GKU.",
        "Accept job offers that meet or exceed the ₹3 LPA minimum.",
        "Students can decline only up to 2 job offers; declining more than 2 forfeits the placement guarantee.",
      ],
    },
    {
      image: "/placement_policy/image4.svg",
      heading: "Force Majeure & Exemptions",
      description: [
        "Nexcore Alliance is not liable for placement outcomes impacted by unforeseen events like pandemics, economic crises, or personal emergencies.",
        "Students opting out of placements for higher education, family business, or entrepreneurship must submit a signed Opt-Out Declaration.",
      ],
    },
    {
      image: "/placement_policy/image5MobileView.png",
      heading: "Policy Terms",
      description: [
        "This policy is applicable only to the B.Voc in AI & ML program.",
        "Changes to the policy may be made by Nexcore Alliance based on industry or academic developments.",
        "At admission, students and guardians will sign a Placement Policy Agreement acknowledging these terms.",
      ],
    },
  ];

  return (
    <>
      <h1 className="text-center text-5xl sm:text-6xl font-extrabold text-white mt-12 mb-6 tracking-tight drop-shadow-lg">
        <span className="text-[#AC6CFF]">Guaranteed</span> Placement Policy
      </h1>

      <h2 className="text-center text-2xl sm:text-3xl font-semibold text-white mt-2 mb-2">
        Introduction
      </h2>

      <p className="text-center text-base sm:text-lg lg:text-xl font-medium text-white px-6 mb-6 mt-2 max-w-4xl mx-auto">
        Nexcore Alliance guarantees placement support for every student enrolled
        in the B.Voc in Artificial Intelligence and Machine Learning program.
        This policy outlines the terms, responsibilities, and eligibility
        criteria for students to qualify for the guaranteed placement offer.
      </p>

      {/* Grid layout: 1 column on mobile, 2 on md+ */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-12 justify-items-center p-6">
        {Placement_Policy.map((item, index) => {
          // Flatten description to text to calculate length
          const getDescriptionText = (desc) => {
            if (Array.isArray(desc)) {
              return desc
                .flatMap((d) => (Array.isArray(d) ? d : [d]))
                .join(" ");
            }
            return desc;
          };

          // Calculate total description length
          const totalDescLength = getDescriptionText(item.description).length;

          // Threshold for switching font size
          const isLongText = totalDescLength > 300;

          return (
            <div
              key={index}
              className={`w-full max-w-[480px] h-[750px] md:h-[700px] rounded-3xl overflow-hidden ${
                Placement_Policy.length % 2 === 1 &&
                index === Placement_Policy.length - 1
                  ? "md:col-span-2 md:justify-self-center"
                  : ""
              }`}
            >
              <div className="w-full h-full bg-white relative rounded-3xl">
                {/* Top purple background */}
                <div
                  className="w-full h-[50%] bg-[#AC6CFF] absolute top-0 left-0 rounded-t-3xl"
                  style={{
                    borderBottomLeftRadius: "0px",
                    borderBottomRightRadius: "30px",
                  }}
                ></div>

                {/* Image section */}
                <div
                  className="w-full h-[50%] absolute top-0 left-0 flex items-center justify-center bg-white rounded-t-3xl"
                  style={{ borderBottomLeftRadius: "20px" }}
                >
                  <img
                    src={item.image}
                    alt={item.heading}
                    className="w-full h-full object-cover rounded-bl-[20px] md:scale-104 transition-transform duration-300"
                  />
                </div>

                {/* Bottom content area */}
                <div
                  className="w-full bg-[#AC6CFF] absolute bottom-0 left-0 p-5 text-white rounded-b-3xl"
                  style={{ height: "50%", borderTopLeftRadius: "0px" }}
                >
                  <h3 className="text-xl font-bold mb-2 text-center">
                    {item.heading}
                  </h3>

                  <ul
                    className={`list-disc pl-5 space-y-1 ${
                      isLongText ? "text-sm" : "text-base"
                    }`}
                  >
                    {Array.isArray(item.description) ? (
                      item.description.map((desc, i) =>
                        Array.isArray(desc) ? (
                          <ul
                            key={i}
                            className="list-[lower-alpha] pl-6 space-y-1"
                          >
                            {desc.map((sub, j) => (
                              <li key={j}>{sub}</li>
                            ))}
                          </ul>
                        ) : (
                          <li key={i}>{desc}</li>
                        )
                      )
                    ) : (
                      <li>{item.description}</li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
