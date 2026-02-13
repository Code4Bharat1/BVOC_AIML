"use client";

export default function CourseComparison() {
  const rows = [
    {
      title: "Curriculum Design",
      traditional: "Theory-heavy, outdated syllabus",
      nexcore: "Industry-designed & frequently updated",
    },
    {
      title: "Practical Exposure",
      traditional: "Limited labs, exam-focused",
      nexcore: "Hands-on training from Day 1",
    },
    {
      title: "Industry Alignment",
      traditional: "Weak connection to job roles",
      nexcore: "Mapped to real industry profiles",
    },
    {
      title: "Skill Readiness",
      traditional: "Not job-ready after graduation",
      nexcore: "Industry-ready skill set",
    },
    {
      title: "Technology Relevance",
      traditional: "Slow tech adoption",
      nexcore: "AI, Data Science & Animation tools taught live",
    },
    {
      title: "Faculty Experience",
      traditional: "Mostly academic background",
      nexcore: "Industry professionals & practitioners",
    },
    {
      title: "Projects & Internships",
      traditional: "Final year project only",
      nexcore: "Live projects + mandatory internships",
    },
    {
      title: "Placements",
      traditional: "Degree first, job later",
      nexcore: "Employment-focused from start",
    },
    {
      title: "Career Clarity",
      traditional: "Unclear career path",
      nexcore: "Clear roles in Data Science & Creative Tech",
    },
  ];

  return (
    <div className="w-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Compare Your Career Paths
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            See why industry-driven education is becoming the smarter choice for modern tech careers
          </p>
        </div>

        {/* Desktop View - Side by Side Cards */}
        <div className="hidden md:grid md:grid-cols-2 gap-6 mb-8">
          {/* Traditional Degree Card */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-200">
            <div className="bg-slate-100 px-6 py-4 border-b border-slate-200">
              <h3 className="text-xl font-semibold text-slate-700">Traditional Degree</h3>
            </div>
            <div className="divide-y divide-slate-100">
              {rows.map((row, i) => (
                <div key={i} className="px-6 py-4 hover:bg-slate-50 transition-colors">
                  <div className="text-sm font-medium text-slate-500 mb-1">{row.title}</div>
                  <div className="text-slate-700 flex items-start gap-2">
                    <span className="text-red-500 mt-0.5">✕</span>
                    <span>{row.traditional}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Nexcore Bachelor's Program Card */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-indigo-500 relative">
            <div className="absolute top-4 right-4 bg-indigo-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
              RECOMMENDED
            </div>
            <div className="bg-gradient-to-r from-indigo-600 to-blue-600 px-6 py-4 border-b">
              <h3 className="text-xl font-semibold text-white">Bachelor's Programs</h3>
              <p className="text-indigo-100 text-sm mt-1">Nexcore Institute of Technology</p>
            </div>
            <div className="divide-y divide-slate-100">
              {rows.map((row, i) => (
                <div key={i} className="px-6 py-4 hover:bg-indigo-50 transition-colors">
                  <div className="text-sm font-medium text-slate-500 mb-1">{row.title}</div>
                  <div className="text-slate-800 flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">✓</span>
                    <span className="font-medium">{row.nexcore}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile View - Accordion Style */}
        <div className="md:hidden space-y-4">
          {rows.map((row, i) => (
            <div key={i} className="bg-white rounded-xl shadow-md overflow-hidden border border-slate-200">
              <div className="bg-indigo-50 px-5 py-3 border-b border-indigo-100">
                <h4 className="font-semibold text-slate-800">{row.title}</h4>
              </div>
              
              <div className="p-5 space-y-4">
                {/* Traditional */}
                <div>
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
                    Traditional Degree
                  </div>
                  <div className="flex items-start gap-2 text-slate-700">
                    <span className="text-red-500 text-lg">✕</span>
                    <span className="text-sm">{row.traditional}</span>
                  </div>
                </div>

                {/* Nexcore Bachelor's */}
                <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-lg p-4 border border-indigo-200">
                  <div className="text-xs font-semibold text-indigo-700 uppercase tracking-wide mb-2 flex items-center gap-2">
                    Nexcore Bachelor's
                    <span className="bg-indigo-500 text-white px-2 py-0.5 rounded-full text-[10px]">
                      BETTER
                    </span>
                  </div>
                  <div className="flex items-start gap-2 text-slate-800">
                    <span className="text-green-500 text-lg">✓</span>
                    <span className="text-sm font-medium">{row.nexcore}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
          <h3 className="text-2xl font-bold text-slate-900 mb-3">Ready to Make the Right Choice?</h3>
          <p className="text-slate-600 mb-6 max-w-xl mx-auto">
            Join thousands of students who chose industry-relevant education over traditional degrees
          </p>
          <div className="space-y-3">
            <button className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all">
              Explore Our Programs
            </button>
            <div className="flex flex-wrap justify-center gap-2 text-sm text-slate-600">
              <span className="inline-flex items-center gap-1.5 bg-indigo-50 px-3 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
                Data Science & AI
              </span>
              <span className="inline-flex items-center gap-1.5 bg-purple-50 px-3 py-1.5 rounded-full">
                <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                Multimedia & Animation
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}