import React from "react";

export default function FeePaymentGuidelines() {
  const guidelines = [
    {
      description:
        "Fees can be paid via bank transfer, UPI, net banking, or at the university finance counter.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="20" height="14" x="2" y="5" rx="2" />
          <line x1="2" x2="22" y1="10" y2="10" />
        </svg>
      ),
    },
    {
      description: "A late fee of ₹500/week is applicable after the due date.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      ),
    },
    {
      description:
        "Fee receipts must be retained and submitted during semester registration.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      ),
    },
    {
      description:
        "Students availing scholarships or paid internships must notify the accounts department for adjustments.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="9 11 12 14 22 4" />
          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
        </svg>
      ),
    },
    {
      description:
        "No refunds after 15 days of admission, unless approved under exceptional cases.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 3v18h18" />
          <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <h1 className="text-white text-center text-4xl font-bold mb-12">
          Fee Payment Guidelines
        </h1>

        {/* Guidelines Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {guidelines.map((item, index) => {
            const isLast = index === guidelines.length - 1;
            const isOdd = guidelines.length % 2 !== 0;

            return (
              <div
                key={index}
                className={`group relative bg-gradient-to-br from-[#6B009D] to-[#3b0055] rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center min-h-[150px] transform transition-all duration-500 ease-out animate-fadeIn ${
                  isLast && isOdd
                    ? "md:col-span-2 md:mx-auto max-w-md"
                    : ""
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex-shrink-0 p-3 rounded-full bg-white/10 text-white group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
                  {item.icon}
                </div>
                <div className="text-center mt-4">
                  <p className="text-white text-base sm:text-lg font-medium leading-relaxed">
                    {item.description}
                  </p>
                </div>
                {/* Subtle overlay effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
