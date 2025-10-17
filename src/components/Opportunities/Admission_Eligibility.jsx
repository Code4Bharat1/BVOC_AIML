import { FaGraduationCap, FaPercentage, FaCalendarAlt, FaClipboardCheck, FaUsers } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";
import Link from "next/link";

export default function Admission_Eligibility() {
  const Admission_Eligibility = [
    {
      heading: "Educational Qualification :",
      description: [
        "Candidate must have passed 10+2 (Higher Secondary or equivalent) examination from a recognized board in any stream — Science, Commerce, Arts, or Vocational.",
        "Candidates with 2-year ITI certificate after 10th standard are also eligible.",
      ],
      image: "/eligibility_criteria/Criteria1.svg",
      icon: <FaGraduationCap />,
    },
    {
      heading: "Minimum Marks :",
      description: [
        "General category candidates should have at least 50% aggregate marks in 10+2.",
        "Reserved category candidates (SC/ST/OBC/PwD) are eligible with a minimum of 40% aggregate marks.",
      ],
      image: "/eligibility_criteria/Criteria2.svg",
      icon: <FaPercentage />,
    },
    {
      heading: "Age Limit :",
      description: ["No upper age limit for admission."],
      image: "/eligibility_criteria/Criteria3.svg",
      icon: <FaCalendarAlt />,
    },
    // {
    //   heading: "Additional Criteria (If applicable) :",
    //   description: [
    //     "Some institutes may require candidates to clear an entrance exam or interview for final admission.",
    //     "Candidates must meet any additional guidelines issued by affiliating university or government bodies.",
    //   ],
    //   image: "/eligibility_criteria/Criteria4.svg",
    //   icon: <FaClipboardCheck />,
    // },
    // {
    //   heading: "Reservation:",
    //   description: [
    //     "Reservation as per applicable government rules (SC 15%, ST 7.5%, OBC 27%, PwD 3%).",
    //     "Valid certificates must be submitted for claiming reservations.",
    //   ],
    //   image: "/eligibility_criteria/Criteria5.svg",
    //   icon: <FaUsers />,
    // },
  ];

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

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6 px-6 py-2 bg-cyan-500/10 border-2 border-cyan-500/30 rounded-full">
            <HiSparkles className="text-cyan-400" />
            <span className="text-cyan-400 text-sm font-bold tracking-widest">ELIGIBILITY CRITERIA</span>
            <HiSparkles className="text-cyan-400" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Admission Eligibility Criteria for{" "}
            <span className="text-cyan-400">{"Bachelor's"}</span> in
            <br />
            <span className="text-cyan-400">Artificial Intelligence</span> and{" "}
            <br />
            <span className="text-cyan-400">Machine Learning</span>
          </h2>

          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="h-1 w-20 bg-gradient-to-r from-transparent via-cyan-500 to-transparent rounded-full" />
            <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
            <div className="h-1 w-20 bg-gradient-to-r from-transparent via-cyan-500 to-transparent rounded-full" />
          </div>
        </div>

        {/* Eligibility Cards */}
        <div className="flex flex-col items-center gap-8">
          {Admission_Eligibility.map((item, index) => (
            <div key={index} className="w-full group">
              {/* Glow Effect */}
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 via-purple-600 to-cyan-600 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition duration-500" />
                
                <div className="relative bg-[#1a2847] rounded-3xl p-6 md:p-8 border-2 border-cyan-500/50 shadow-2xl">
                  {/* Corner Decorations */}
                  <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-cyan-500/70 rounded-tl-3xl" />
                  <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-purple-500/70 rounded-br-3xl" />

                  <div className="flex flex-col md:flex-row items-center md:items-start gap-6 relative z-10">
                    {/* Image with Icon Badge */}
                    <div className="relative flex-shrink-0">
                      <div className="relative w-full max-w-[224px]">
                        {/* Image Glow */}
                        <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 rounded-2xl blur-xl" />
                        
                        <div className="relative rounded-2xl overflow-hidden border-2 border-cyan-500/30 bg-[#0f2847]/50 p-4">
                          <img
                            src={item.image}
                            alt="criteria icon"
                            className="w-full h-auto object-contain"
                          />
                        </div>
                      </div>

                      {/* Floating Icon Badge */}
                      <div className="absolute -top-3 -right-3 w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center text-white text-2xl shadow-lg shadow-cyan-500/50 border-2 border-white/20">
                        {item.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 text-center md:text-left">
                      <h3 className="text-2xl md:text-3xl font-bold text-cyan-400 mb-4">
                        {item.heading}
                      </h3>
                      
                      <ul className="space-y-3">
                        {item.description.map((point, i) => (
                          <li key={i} className="flex items-start gap-3 text-gray-300 text-base md:text-lg leading-relaxed">
                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center text-white text-xs font-bold mt-1 shadow-lg shadow-cyan-500/50">
                              {i + 1}
                            </span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 text-center">
          <div className="relative inline-block">
            <div className="absolute -inset-2 bg-gradient-to-r from-orange-600 to-orange-400 rounded-full blur-xl opacity-75" />
            <Link
  href="/contact"
  className="relative inline-block px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold rounded-full text-lg shadow-2xl shadow-orange-500/50 transition-all duration-300 transform hover:scale-105"
>
  Apply Now →
</Link>
          </div>
        </div>
      </div>
    </div>
  );
}