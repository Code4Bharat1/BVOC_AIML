import { FaCreditCard, FaClock, FaFileInvoice, FaBell, FaChartLine } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";
import Link from "next/link";

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

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6 px-6 py-2 bg-cyan-500/10 border-2 border-cyan-500/30 rounded-full">
            <HiSparkles className="text-cyan-400" />
            <span className="text-cyan-400 text-sm font-bold tracking-widest">PAYMENT TERMS</span>
            <HiSparkles className="text-cyan-400" />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Fee Payment Guidelines
          </h1>

          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="h-1 w-20 bg-gradient-to-r from-transparent via-cyan-500 to-transparent rounded-full" />
            <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
            <div className="h-1 w-20 bg-gradient-to-r from-transparent via-cyan-500 to-transparent rounded-full" />
          </div>
        </div>

        {/* Guidelines Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition duration-500" />
                
                <div className="relative h-full bg-[#1a2847] rounded-3xl p-8 border-2 border-cyan-500/50 flex flex-col items-center justify-center min-h-[200px] transform transition-all duration-500 hover:scale-105">
                  {/* Corner Decorations */}
                  <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-cyan-500/70 rounded-tl-3xl" />
                  <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-purple-500/70 rounded-br-3xl" />

                  {/* Icon Badge */}
                  <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center text-white text-2xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg shadow-cyan-500/50">
                    {item.icon}
                  </div>

                  {/* Number Badge */}
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white text-sm font-bold shadow-lg shadow-orange-500/50">
                    {index + 1}
                  </div>

                  {/* Description */}
                  <div className="text-center">
                    <p className="text-gray-300 text-base md:text-lg font-medium leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Info Section */}
        <div className="mt-16 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-orange-400 rounded-3xl blur-xl opacity-50" />
          
          <div className="relative bg-gradient-to-r from-orange-500 to-orange-600 rounded-3xl p-8 border-2 border-white/20 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <HiSparkles className="text-white text-2xl" />
              <h3 className="text-2xl font-bold text-white">Need Assistance?</h3>
              <HiSparkles className="text-white text-2xl" />
            </div>
            <p className="text-white text-lg mb-6">
              Contact our finance department for any payment-related queries
            </p>
            <Link href="/contact">
  <button className="px-8 py-3 bg-white text-orange-600 font-bold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
    Contact Finance Team →
  </button>
</Link>
          </div>
        </div>
      </div>
    </div>
  );
}