"use client";
import { GraduationCap, Percent, Calendar, ArrowRight, Check } from "lucide-react";

export default function Admission_Eligibility() {
  const criteriaItems = [
    {
      heading: "Educational Qualification",
      description: [
        "Candidate must have passed 10+2 (Higher Secondary or equivalent) examination from a recognized board in any stream — Science, Commerce, Arts, or Vocational.",
        "Candidates with 2-year ITI certificate after 10th standard are also eligible.",
      ],
      image: "/eligibility_criteria/Criteria1.svg",
      icon: <GraduationCap className="w-6 h-6" />,
      color: "blue",
    },
    {
      heading: "Minimum Marks",
      description: [
        "General category candidates should have at least 50% aggregate marks in 10+2.",
        "Reserved category candidates (SC/ST/OBC/PwD) are eligible with a minimum of 40% aggregate marks.",
      ],
      image: "/eligibility_criteria/Criteria2.svg",
      icon: <Percent className="w-6 h-6" />,
      color: "orange",
    },
    {
      heading: "Age Limit",
      description: ["No upper age limit for admission."],
      image: "/eligibility_criteria/Criteria3.svg",
      icon: <Calendar className="w-6 h-6" />,
      color: "blue",
    },
  ];

  return (
    <div className="relative bg-gradient-to-b from-slate-50 to-white py-16 px-4 overflow-hidden mt-20">
      {/* Simple background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-50/40 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-orange-50/40 via-transparent to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight text-slate-900">
            Admission Eligibility Criteria
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

        {/* Eligibility Cards */}
        <div className="flex flex-col gap-6 mb-12">
          {criteriaItems.map((item, index) => (
            <CriteriaCard key={index} item={item} index={index} />
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-orange-500 text-white font-bold rounded-xl text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Apply Now
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
}

const CriteriaCard = ({ item, index }) => {
  const colorStyles = {
    blue: {
      icon: "bg-blue-600",
      border: "border-blue-200",
      hoverBorder: "hover:border-blue-400",
      heading: "text-blue-600",
      badge: "bg-blue-500",
    },
    orange: {
      icon: "bg-orange-500",
      border: "border-orange-200",
      hoverBorder: "hover:border-orange-400",
      heading: "text-orange-500",
      badge: "bg-orange-500",
    },
  };

  const styles = colorStyles[item.color];

  return (
    <div className="group">
      <div className={`bg-white rounded-2xl border-2 ${styles.border} ${styles.hoverBorder} shadow-sm hover:shadow-lg transition-all duration-300 p-6 md:p-8`}>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          {/* Image with Icon Badge */}
          <div className="relative flex-shrink-0">
            <div className="w-48 h-48 rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 p-6 flex items-center justify-center">
              <img
                src={item.image}
                alt={item.heading}
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>

            {/* Icon Badge */}
            <div className={`absolute -top-3 -right-3 w-12 h-12 ${styles.icon} rounded-xl flex items-center justify-center text-white shadow-lg border-2 border-white`}>
              {item.icon}
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 text-center md:text-left">
            <h3 className={`text-2xl md:text-3xl font-bold mb-4 ${styles.heading}`}>
              {item.heading}
            </h3>

            <ul className="space-y-3">
              {item.description.map((point, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-700 leading-relaxed">
                  <div className={`flex-shrink-0 w-6 h-6 ${styles.badge} rounded-full flex items-center justify-center mt-0.5`}>
                    <Check className="w-4 h-4 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-base md:text-lg">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};