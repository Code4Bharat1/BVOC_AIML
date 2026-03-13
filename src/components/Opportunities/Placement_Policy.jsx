"use client";
import { Briefcase, CheckCircle, UserCheck, AlertTriangle, FileText, ArrowRight } from "lucide-react";
import Head from "next/head";

export default function Placement_Policy() {

  const policyItems = [
    {
      image: "/placement_policy/image1.svg",
      icon: <Briefcase className="w-6 h-6" />,
      heading: "Placement Guarantee Overview",
      description: [
        "Minimum Guaranteed Package: ₹3,00,000 per annum (₹25,000/month).",
        "Maximum Guaranteed Package: ₹6,00,000 per annum (₹50,000/month).",
        "Job Domains: Data Science, AI, Machine Learning, Analytics, Creative Tech, Multimedia, Animation, VFX, and related fields.",
        "Support Includes:",
        [
          "Resume & profile development",
          "Industry training & soft skills workshops",
          "Mock interviews and portfolio building",
          "Direct placement drives with partner companies",
        ],
      ],
      color: "blue",
    },
    {
      image: "/placement_policy/image2.svg",
      icon: <CheckCircle className="w-6 h-6" />,
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
      color: "orange",
    },
    {
      image: "/placement_policy/image3.svg",
      icon: <UserCheck className="w-6 h-6" />,
      heading: "Student Responsibilities",
      description: [
        "Apply to all relevant job opportunities shared by the placement cell.",
        "Attend interviews and drives arranged by Nexcore.",
        "Accept job offers that meet or exceed the ₹3 LPA minimum.",
        "Students can decline only up to 2 job offers; declining more than 2 forfeits the placement guarantee.",
      ],
      color: "blue",
    },
    {
      image: "/placement_policy/image4.svg",
      icon: <AlertTriangle className="w-6 h-6" />,
      heading: "Force Majeure & Exemptions",
      description: [
        "Nexcore Institute of Technology is not liable for placement outcomes impacted by unforeseen events like pandemics, economic crises, or personal emergencies.",
        "Students opting out of placements for higher education, family business, or entrepreneurship must submit a signed Opt-Out Declaration.",
      ],
      color: "orange",
    },
    {
      image: "/placement_policy/image5MobileView.png",
      icon: <FileText className="w-6 h-6" />,
      heading: "Policy Terms",
      description: [
        "This policy is applicable to Bachelor of Data Science and Artificial Intelligence and Bachelor of Multimedia and Animation programs.",
        "Changes to the policy may be made by Nexcore Institute of Technology based on industry or academic developments.",
        "At admission, students and guardians will sign a Placement Policy Agreement acknowledging these terms.",
      ],
      color: "blue",
    },
  ];

  return (
    <>
      {/* ================= SEO START ================= */}
      <Head>

        <title>
          Guaranteed Placement Policy | Data Science & AI | Multimedia & Animation
        </title>

        <meta
          name="description"
          content="Learn about the guaranteed placement policy for Bachelor of Data Science & Artificial Intelligence and Bachelor of Multimedia & Animation programs including eligibility criteria, student responsibilities, and placement support."
        />

        <meta
          name="keywords"
          content="placement guarantee AI course, data science placement policy, multimedia animation placement program, AI course with placement guarantee, Nexcore placement policy, AI degree placement support"
        />

        <meta name="robots" content="index, follow" />

        <link
          rel="canonical"
          href="https://yourdomain.com/opportunities/placement-policy"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Guaranteed Placement Policy | Data Science & AI | Multimedia & Animation"
        />

        <meta
          property="og:description"
          content="Explore the guaranteed placement policy including eligibility criteria, responsibilities, and placement support for Data Science, AI, and Multimedia programs."
        />

        <meta
          property="og:url"
          content="https://yourdomain.com/opportunities/placement-policy"
        />

        <meta property="og:type" content="website" />

        <meta
          property="og:image"
          content="https://yourdomain.com/og-image.jpg"
        />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />

        <meta
          name="twitter:title"
          content="Guaranteed Placement Policy | Data Science & AI Programs"
        />

        <meta
          name="twitter:description"
          content="Understand the guaranteed placement policy, eligibility rules, and job support for AI, Data Science, and Multimedia degree programs."
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

          <div className="text-center mb-12">

            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-900">
              <span className="text-blue-600">Guaranteed</span> Placement Policy
            </h1>

            <h2 className="text-2xl font-semibold mb-4 text-orange-500">
              Introduction
            </h2>

            <p className="text-base md:text-lg max-w-4xl mx-auto leading-relaxed text-slate-700">
              Nexcore Institute of Technology guarantees placement support for every student enrolled
              in the <span className="font-semibold text-blue-600">Bachelor of Data Science and Artificial Intelligence</span> or{" "}
              <span className="font-semibold text-orange-500">Bachelor of Multimedia and Animation</span> programs.
              This policy outlines the terms, responsibilities, and eligibility
              criteria for students to qualify for the guaranteed placement offer.
            </p>

            <div className="flex items-center justify-center gap-2 mt-6">
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
              <div className="w-2 h-2 rounded-full bg-orange-500" />
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-orange-400 to-transparent" />
            </div>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {policyItems.map((item, index) => (
              <PolicyCard key={index} item={item} index={index} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-orange-500 text-white font-bold rounded-xl text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              View Full Placement Terms
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

        </div>
      </div>
    </>
  );
}