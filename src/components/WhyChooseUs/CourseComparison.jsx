"use client";

export default function CourseComparison() {
  const rows = [
    {
      title: "Curriculum Design",
      traditional: "Theory-heavy, outdated syllabus",
      bvoc: "Industry-designed & frequently updated",
    },
    {
      title: "Practical Exposure",
      traditional: "Limited labs, exam-focused",
      bvoc: "Hands-on training from Day 1",
    },
    {
      title: "Industry Alignment",
      traditional: "Weak connection to job roles",
      bvoc: "Mapped to real industry profiles",
    },
    {
      title: "Skill Readiness",
      traditional: "Not job-ready after graduation",
      bvoc: "Industry-ready skill set",
    },
    {
      title: "Technology Relevance",
      traditional: "Slow tech adoption",
      bvoc: "AI, ML, Cyber tools taught live",
    },
    {
      title: "Faculty Experience",
      traditional: "Mostly academic background",
      bvoc: "Industry professionals & practitioners",
    },
    {
      title: "Projects & Internships",
      traditional: "Final year project only",
      bvoc: "Live projects + mandatory internships",
    },
    {
      title: "Placements",
      traditional: "Degree first, job later",
      bvoc: "Employment-focused from start",
    },
    {
      title: "Career Clarity",
      traditional: "Unclear career path",
      bvoc: "Clear roles in AI, Cyber & CS",
    },
  ];

  return (
    <section className="relative py-10 bg-gray-100 overflow-hidden">
      {/* Soft background glow */}
      {/* <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-400/20 blur-[140px] rounded-full" /> */}

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-blue-600 mb-3">
            Compare Your Career Paths
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            BVoc vs Traditional Degree
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            See why industry-driven education is becoming the smarter choice for
            modern tech careers.
          </p>
        </div>

        {/* ================= DESKTOP TABLE ================= */}
        <div className="hidden md:block">
          <div className="grid grid-cols-3 rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-xl">
            <div className="p-6 font-semibold text-gray-700 bg-gray-50">
              Parameter
            </div>
            <div className="p-6 font-semibold text-red-600 bg-red-50">
              Traditional Degree
            </div>
            <div className="p-6 font-semibold text-blue-700 bg-blue-50">
              Bachelor's [Nexcore Institute Of Technology]
            </div>

            {rows.map((row, i) => (
              <div key={i} className="contents">
                <div className="p-6 border-t border-gray-200 text-gray-700 bg-gray-50">
                  {row.title}
                </div>
                <div className="p-6 border-t border-gray-200 text-gray-600">
                  {row.traditional}
                </div>
                <div className="p-6 border-t border-gray-200 text-gray-800 bg-blue-50/50">
                  {row.bvoc}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= MOBILE CARDS ================= */}
        <div className="md:hidden space-y-6">
          {rows.map((row, i) => (
            <div
              key={i}
              className="rounded-2xl border border-gray-200 bg-white shadow-lg overflow-hidden"
            >
              <div className="p-4 font-semibold text-blue-700 bg-blue-50">
                {row.title}
              </div>

              <div className="p-4 border-t border-gray-200">
                <p className="text-xs text-red-600 mb-1">Traditional Degree</p>
                <p className="text-gray-700 text-sm">{row.traditional}</p>
              </div>

              <div className="p-4 border-t border-gray-200 bg-blue-50/50">
                <p className="text-xs text-blue-700 mb-1">BVoc Program</p>
                <p className="text-gray-800 text-sm">{row.bvoc}</p>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}
