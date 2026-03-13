"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp, Check } from "lucide-react";
import Head from "next/head";

const SelectionPolicy = () => {
  const policyItems = [
    {
      id: 1,
      heading: "Objective",
      image: "/SelectionPolicy/SelectionPolicy1.png",
      description:
        "To establish a transparent, fair, and merit-based internal selection process for admitting students into the Bachelor of Data Science and Artificial Intelligence or Bachelor of Multimedia and Animation programs, ensuring compliance with academic and government regulations.",
    },
    {
      id: 2,
      heading: "Application Submission",
      image: "/SelectionPolicy/SelectionPolicy2.png",
      description:
        "Candidates must submit a duly filled application form along with all required documents by the specified deadline. Incomplete applications or those without valid documents will not be considered.",
    },
    {
      id: 3,
      heading: "Verification of Eligibility",
      image: "/SelectionPolicy/SelectionPolicy3.png",
      description:
        "All applications will be screened for minimum eligibility criteria (educational qualification, minimum marks, age, etc.) as per the Admission Eligibility Criteria. Applications not meeting eligibility standards will be rejected outright.",
    },
    {
      id: 4,
      heading: "Evaluation Criteria",
      image: "/SelectionPolicy/SelectionPolicy4.png",
      description:
        "Candidates who meet eligibility will be evaluated based on the following: Academic Performance (70%), Entrance Test assessing mathematics, logical reasoning, English, or creative aptitude (20%), and Personal Interview evaluating communication and motivation (10%). Entrance test and interview may be waived based on merit.",
    },
    {
      id: 5,
      heading: "Merit List Preparation",
      image: "/SelectionPolicy/SelectionPolicy5.png",
      description:
        "A consolidated score will be calculated based on the evaluation criteria. Candidates will be ranked according to their total scores. Separate merit lists will be prepared for General and Reserved category candidates.",
    },
    {
      id: 6,
      heading: "Selection and Admission Offer",
      image: "/SelectionPolicy/SelectionPolicy6.png",
      description:
        "Candidates will be selected based on their rank in the merit list and availability of seats. Selected candidates will receive an Admission Offer Letter and must confirm admission by paying fees within the stipulated deadline.",
    },
    {
      id: 7,
      heading: "Waitlist and Vacancies",
      image: "/SelectionPolicy/SelectionPolicy7.png",
      description:
        "Candidates not initially selected may be placed on a waitlist and will be offered admission if seats become available during the admission cycle.",
    },
    {
      id: 8,
      heading: "Final Authority",
      image: "/SelectionPolicy/SelectionPolicy9.png",
      description:
        "The Admissions Committee reserves the right to modify, relax, or waive any clause of the selection policy in exceptional cases. All decisions of the Admissions Committee shall be final and binding.",
    },
  ];

  return (
    <>
      {/* ================= SEO START ================= */}
      <Head>
        <title>
          Internal Selection Process Policy | Data Science & AI | Multimedia Programs
        </title>

        <meta
          name="description"
          content="Learn about the internal student selection process for Bachelor of Data Science & Artificial Intelligence and Bachelor of Multimedia & Animation programs including application review, eligibility verification, evaluation criteria, and admission offers."
        />

        <meta
          name="keywords"
          content="AI course admission selection process, data science admission policy, multimedia animation admission process, Nexcore Institute admission selection, AI degree admission criteria"
        />

        <meta name="robots" content="index, follow" />

        <link
          rel="canonical"
          href="https://yourdomain.com/opportunities/selection-policy"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Internal Selection Process Policy | Data Science & AI Programs"
        />
        <meta
          property="og:description"
          content="Explore the internal selection process including application submission, eligibility verification, merit lists, and admission offers for AI and Multimedia programs."
        />
        <meta
          property="og:url"
          content="https://yourdomain.com/opportunities/selection-policy"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://yourdomain.com/og-image.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Internal Selection Process Policy | AI & Data Science Programs"
        />
        <meta
          name="twitter:description"
          content="Understand the student selection process including evaluation, merit list preparation, and admission offers."
        />
        <meta
          name="twitter:image"
          content="https://yourdomain.com/og-image.jpg"
        />
      </Head>
      {/* ================= SEO END ================= */}

      <div className="relative bg-gradient-to-b from-slate-50 to-white py-16 px-4 overflow-hidden mt-20">
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
                <span className="font-semibold text-blue-600">
                  Bachelor of Data Science and Artificial Intelligence
                </span>{" "}
                and{" "}
                <span className="font-semibold text-orange-500">
                  Bachelor of Multimedia and Animation
                </span>
              </h2>
            </div>

            <div className="flex items-center justify-center gap-2 mt-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
              <div className="w-2 h-2 rounded-full bg-orange-500" />
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-orange-400 to-transparent" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {policyItems.map((item, index) => (
              <PolicyCard key={item.id} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </>
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
        <div className="p-6 pb-4">
          <div className="flex items-center gap-3 mb-4">
            <div
              className={`w-10 h-10 ${styles.badge} rounded-lg flex items-center justify-center text-white font-bold shadow-md flex-shrink-0`}
            >
              {item.id}
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              {item.heading}
            </h3>
          </div>
        </div>

        <div className="relative px-6 pb-4">
          <div className="relative rounded-xl overflow-hidden bg-slate-100 border border-slate-200">
            <img
              src={item.image}
              alt={item.heading}
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <div
              className={`absolute top-3 right-3 w-8 h-8 ${styles.checkBg} rounded-full flex items-center justify-center shadow-lg`}
            >
              <Check className="w-5 h-5 text-white" strokeWidth={3} />
            </div>
          </div>
        </div>

        <div className="px-6 pb-6">
          <div className={`${expanded ? "" : "max-h-24 overflow-hidden"} relative`}>
            <p className="text-sm text-slate-700 leading-relaxed">
              {item.description}
            </p>
            {!expanded && (
              <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white to-transparent" />
            )}
          </div>

          <button
            onClick={() => setExpanded(!expanded)}
            className={`mt-4 flex items-center gap-2 ${styles.text} hover:underline font-semibold text-sm`}
          >
            {expanded ? (
              <>
                Read less
                <ChevronUp className="w-4 h-4" />
              </>
            ) : (
              <>
                Read more
                <ChevronDown className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectionPolicy;