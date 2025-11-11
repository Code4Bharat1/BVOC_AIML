"use client";
import { FaCreditCard, FaClock, FaFileInvoice, FaBell, FaChartLine } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";

export default function FeePaymentGuidelines() {
  const guidelines = [
    {
      description: "Fees can be paid via bank transfer, UPI, net banking, or at the growth head cabin.",
      icon: <FaCreditCard />,
    },
    {
      description: "A late fee of ₹500/per Day is applicable after the due date.",
      icon: <FaClock />,
    },
    {
      description: "Fee receipts must be retained and submitted during semester registration.",
      icon: <FaFileInvoice />,
    },
    {
      description: "Students receiving scholarships are required to inform the accounts department for fee adjustments.",
      icon: <FaBell />,
    },
    {
      description: "No refunds after 15 days of admission.",
      icon: <FaChartLine />,
    },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-white via-gray-50 to-blue-50 py-20 px-4">
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-8 px-8 py-3 bg-white/80 border-2 border-blue-200/50 rounded-full backdrop-blur-xl shadow-lg shadow-blue-100/50">
            <HiSparkles className="text-blue-500 text-xl" />
            <span className="text-blue-600 text-sm font-bold tracking-widest">PAYMENT TERMS</span>
            <HiSparkles className="text-blue-500 text-xl" />
          </div>

          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 tracking-tight"
            style={{ fontFamily: "'Inter', 'Segoe UI', sans-serif" }}
          >
            Fee Payment <span className="text-blue-600">Guidelines</span>
          </h1>

          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="h-0.5 w-24 bg-gradient-to-r from-transparent via-blue-400 to-transparent rounded-full" />
            <div className="w-2 h-2 rounded-full bg-blue-500" />
            <div className="h-0.5 w-24 bg-gradient-to-r from-transparent via-blue-400 to-transparent rounded-full" />
          </div>
        </div>

        {/* Guidelines Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {guidelines.map((item, index) => {
            const isLast = index === guidelines.length - 1;
            const isOdd = guidelines.length % 2 !== 0;

            return (
              <div
                key={index}
                className={`relative group ${
                  isLast && isOdd ? "md:col-span-2 md:mx-auto md:max-w-md" : ""
                }`}
              >
                <div className="relative h-full bg-white/90 backdrop-blur-xl rounded-2xl p-8 border border-gray-200/80 shadow-lg shadow-gray-200/50 flex flex-col items-center justify-center min-h-[200px] hover:shadow-xl hover:shadow-blue-100/50 hover:scale-105 transition-all duration-300">
                  {/* Corner Decorations */}
                  <div className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-blue-300/50 rounded-tl-2xl" />
                  <div className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-indigo-300/50 rounded-br-2xl" />

                  {/* Icon Badge */}
                  <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center text-white text-2xl mb-6 shadow-md shadow-blue-200/50">
                    {item.icon}
                  </div>

                  {/* Number Badge */}
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-sm font-bold shadow-md shadow-blue-200/50">
                    {index + 1}
                  </div>

                  {/* Description */}
                  <div className="text-center">
                    <p className="text-gray-700 text-base md:text-lg font-medium leading-relaxed" style={{ fontFamily: "'Inter', 'Segoe UI', sans-serif" }}>
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Info Section */}
        <div className="relative group">
          <div className="relative bg-gradient-to-br from-white to-blue-50/50 rounded-2xl p-8 border border-gray-200/80 shadow-lg shadow-gray-200/50 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <HiSparkles className="text-blue-500 text-2xl" />
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800" style={{ fontFamily: "'Inter', 'Segoe UI', sans-serif" }}>
                Need Assistance?
              </h3>
              <HiSparkles className="text-blue-500 text-2xl" />
            </div>
            <p className="text-gray-600 text-lg mb-6" style={{ fontFamily: "'Inter', 'Segoe UI', sans-serif" }}>
              Contact our finance department for any payment-related queries
            </p>
            <button 
              className="px-8 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-full hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 shadow-lg shadow-blue-200/50 hover:scale-105"
            >
              Contact Finance Team →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}