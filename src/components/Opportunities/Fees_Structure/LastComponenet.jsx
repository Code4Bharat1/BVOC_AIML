import React from "react";

export default function LastComponenet() {
  const CardData = [
    {
      heading: "Case Study 1: Priya (Meritorious + Internship)",
      param:
        "Priya scored 85% in her 12th and received a 50% merit scholarship for Year 1. From 2nd year, she secured an internship offering ₹7,000/month. Her earnings of ₹84,000/year helped cover most of her 2nd and 3rd year fees.",
    },
    {
      heading: "Case Study 2: Ramesh (Rural Background + Internship)",
      param:
        "Ramesh comes from a rural background and received a need-based scholarship of ₹20,000/year. He also interned at ₹5,000/month from the 4th semester, covering ₹60,000 annually, allowing him to manage his semester fees independently.",
    },
    {
      heading: "Case Study 3: Meena (Female in Tech + Internship)",
      param:
        "Meena joined the course under the 'Women in Tech' initiative and received a ₹30,000/year scholarship. With her ₹10,000/month internship from the final year, she fully paid her last year's tuition fees through earned stipend.",
    },
  ];

  return (
    <div>
      <div
        className="w-full max-w-full px-15 py-15 mt-16 text-white shadow-lg rounded"
        style={{
          background: "linear-gradient(90deg, #3F0D55 0%, #1A031A 100%)",
        }}
      >
        <h2 className="text-4xl font-bold mb-4 text-center">
          Paid Internship Impact on Fee Payment
        </h2>
        <p className="text-lg text-center mt-10">
          Students starting from the second year may receive monthly stipends
          between ₹3,000 to ₹10,000 under Nexcore’s Paid Internship Program.
          This enables students to partially or fully cover their semester fees.
        </p>
      </div>

      <h2 className="text-4xl font-bold mb-4 text-center my-16 text-white">
        Sample Case Studies
      </h2>

      {/* Mobile View */}
      <div className="flex flex-col gap-8 items-center lg:hidden px-4">
        {CardData.map((card, index) => (
          <div
            key={`mobile-performance-${index}`}
            className="w-full max-w-[380px]" // Increased width
          >
            <div className="rounded-2xl w-full bg-gradient-to-b from-[#6B009D] to-[#2B2038] border-[3px] border-white shadow-sm shadow-white p-6 -skew-x-12">
              <div className="text-white text-sm sm:text-base md:text-lg font-bold text-center skew-x-12 whitespace-pre-line">
                {card.heading + "\n\n" + card.param}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop View */}
      <div className="hidden lg:flex flex-wrap justify-center gap-8 px-4 mt-15">
        {CardData.map((card, index) => (
          <div
            key={`desktop-performance-${index}`}
            className="w-full max-w-[380px]" // Increased width
          >
            <div className="rounded-xl w-100 h-90 bg-gradient-to-b from-[#6B009D] to-[#2B2038] border-[3px] border-white shadow-sm shadow-white p-6 -skew-x-12">
              <div className="text-white text-base md:text-lg lg:text-xl font-bold text-center skew-x-12 whitespace-pre-line ml-4">
                {card.heading + "\n\n" + card.param}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
