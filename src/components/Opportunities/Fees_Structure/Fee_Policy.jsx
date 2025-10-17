import { FaRupeeSign, FaCalendarAlt, FaFileInvoice ,FaCreditCard} from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";
import Link from "next/link";



export default function Fee_Policy() {
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
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-6 px-6 py-2 bg-cyan-500/10 border-2 border-cyan-500/30 rounded-full">
            <HiSparkles className="text-cyan-400" />
            <span className="text-cyan-400 text-sm font-bold tracking-widest">FEE STRUCTURE</span>
            <HiSparkles className="text-cyan-400" />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Fees Structure & Payment Policy
          </h1>

          <h2 className="text-xl md:text-2xl font-semibold text-cyan-400">
            Course: Bachelor's in Artificial Intelligence and Machine Learning
          </h2>

          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="h-1 w-20 bg-gradient-to-r from-transparent via-cyan-500 to-transparent rounded-full" />
            <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
            <div className="h-1 w-20 bg-gradient-to-r from-transparent via-cyan-500 to-transparent rounded-full" />
          </div>
        </div>

        {/* Total Fee Card */}
        <div className="relative mb-16 group">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-3xl blur-xl opacity-60 group-hover:opacity-80 transition duration-500" />
          
          <div className="relative bg-gradient-to-r from-cyan-600 to-purple-600 rounded-3xl p-8 border-2 border-white/20">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <FaRupeeSign className="text-white text-3xl" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                Total Program Fee
              </h3>
            </div>
            <p className="text-3xl md:text-4xl font-bold text-white text-center">
              ₹3,36,000/-
            </p>
            <p className="text-lg text-white/90 text-center mt-2">
              (₹1,12,000 per year for 3 years)
            </p>
          </div>
        </div>

        {/* Fee Bifurcation Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
            Detailed Fee Bifurcation (Per Year)
          </h2>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition duration-500" />
            
            <div className="relative overflow-x-auto rounded-3xl border-2 border-cyan-500/50">
              <table className="w-full text-left text-base border-collapse">
                <thead className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white">
                  <tr>
                    <th className="px-6 py-4 font-bold text-xl text-center border-2 border-white/20">
                      Component
                    </th>
                    <th className="px-6 py-4 font-bold text-xl text-center border-2 border-white/20">
                      Amount per Year (₹)
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-[#1a2847] text-white">
                  <tr className="hover:bg-cyan-500/10 transition-colors">
                    <td className="px-6 py-4 border-2 border-cyan-500/20">
                      Admission & Registration Fee
                    </td>
                    <td className="px-6 py-4 text-center border-2 border-cyan-500/20 font-semibold">
                      ₹5,000
                    </td>
                  </tr>
                  <tr className="hover:bg-cyan-500/10 transition-colors">
                    <td className="px-6 py-4 border-2 border-cyan-500/20">
                      Tuition Fee
                    </td>
                    <td className="px-6 py-4 text-center border-2 border-cyan-500/20 font-semibold">
                      ₹85,000
                    </td>
                  </tr>
                  <tr className="hover:bg-cyan-500/10 transition-colors">
                    <td className="px-6 py-4 border-2 border-cyan-500/20">
                      Lab, AI Tools & Project Access
                    </td>
                    <td className="px-6 py-4 text-center border-2 border-cyan-500/20 font-semibold">
                      ₹10,000
                    </td>
                  </tr>
                  <tr className="hover:bg-cyan-500/10 transition-colors">
                    <td className="px-6 py-4 border-2 border-cyan-500/20">
                      Examination Fee
                    </td>
                    <td className="px-6 py-4 text-center border-2 border-cyan-500/20 font-semibold">
                      ₹6,000
                    </td>
                  </tr>
                  <tr className="hover:bg-cyan-500/10 transition-colors">
                    <td className="px-6 py-4 border-2 border-cyan-500/20">
                      Student Development & Activity Fee
                    </td>
                    <td className="px-6 py-4 text-center border-2 border-cyan-500/20 font-semibold">
                      ₹6,000
                    </td>
                  </tr>
                  <tr className="bg-gradient-to-r from-cyan-600/50 to-purple-600/50">
                    <td className="px-6 py-4 border-2 border-cyan-500/30 font-bold text-lg">
                      Total per Year
                    </td>
                    <td className="px-6 py-4 text-center border-2 border-cyan-500/30 font-bold text-xl text-cyan-300">
                      ₹1,12,000
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Payment Options */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            Payment Schedule & Options
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Option A */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition duration-500" />
              
              <div className="relative h-full bg-[#1a2847] rounded-3xl p-8 border-2 border-cyan-500/50">
                {/* Corner Decorations */}
                <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-cyan-500/70 rounded-tl-3xl" />
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-purple-500/70 rounded-br-3xl" />

                <div className="flex flex-col items-center mb-6">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center text-white text-2xl mb-4 shadow-lg shadow-cyan-500/50">
                    <FaCalendarAlt />
                  </div>
                  <h3 className="text-2xl font-bold text-cyan-400">
                    Option A: Annual Payment
                  </h3>
                </div>

                <div className="space-y-4 text-gray-300">
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold shadow-lg shadow-cyan-500/50">
                      1
                    </span>
                    <p className="text-lg">1st Year: ₹1,12,000 at Admission</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold shadow-lg shadow-cyan-500/50">
                      2
                    </span>
                    <p className="text-lg">2nd Year: ₹1,12,000 at the start of 3th Semester</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold shadow-lg shadow-cyan-500/50">
                      3
                    </span>
                    <p className="text-lg">3rd Year: ₹1,12,000 at the start of 5th Semester</p>
                  </div>
                </div>
              </div>
            </div>

            

            {/* Option B */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition duration-500" />
              
              <div className="relative h-full bg-[#1a2847] rounded-3xl p-8 border-2 border-cyan-500/50">
                {/* Corner Decorations */}
                <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-cyan-500/70 rounded-tr-3xl" />
                <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-purple-500/70 rounded-bl-3xl" />

                <div className="flex flex-col items-center mb-6">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center text-white text-2xl mb-4 shadow-lg shadow-purple-500/50">
                    <FaFileInvoice />
                  </div>
                  <h3 className="text-2xl font-bold text-cyan-400">
                    Option B: Semester-wise Installments
                  </h3>
                </div>

                <div className="space-y-6 text-center">
                  <div className="p-6 rounded-xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30">
                    <p className="text-lg text-gray-300 mb-2">Per Semester</p>
                    <p className="text-3xl font-bold text-cyan-400">₹56,000</p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-cyan-500/30">
                    <p className="text-lg text-gray-300 mb-2">Total Fee (6 Semesters)</p>
                    <p className="text-3xl font-bold text-cyan-400">₹3,36,000</p>
                  </div>
                </div>
              </div>
            </div>
             {/* Option C */}
                  <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition duration-500" />

                <div className="relative h-full bg-[#1a2847] rounded-3xl p-8 border-2 border-cyan-500/50">
                  {/* Corner Decorations */}
                  <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-cyan-500/70 rounded-tl-3xl" />
                  <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-purple-500/70 rounded-br-3xl" />

                  <div className="flex flex-col items-center mb-6">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center text-white text-2xl mb-4 shadow-lg shadow-cyan-500/50">
                      <FaCreditCard />
                    </div>
                    <h3 className="text-2xl font-bold text-cyan-400">
                      Option C: Monthly EMI Plan
                    </h3>
                  </div>

                  <div className="space-y-4 text-gray-300">
                    <div className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold shadow-lg shadow-cyan-500/50">
                        1
                      </span>
                      <p className="text-lg">Admission Fees: ₹5,000 (one-time)</p>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold shadow-lg shadow-cyan-500/50">
                        2
                      </span>
                      <p className="text-lg">Exam Fees: ₹6,000 (one-time)</p>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold shadow-lg shadow-cyan-500/50">
                        3
                      </span>
                      <p className="text-lg">Student Development Fees: ₹6,000 (one-time)</p>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold shadow-lg shadow-cyan-500/50">
                        4
                      </span>
                      <p className="text-lg">Balance Amount: ₹95,000</p>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold shadow-lg shadow-cyan-500/50">
                        5
                      </span>
                      <p className="text-lg">
                        EMI via <span className="text-cyan-400 font-semibold">Credit Card Only</span> (No Cost EMI)
                      </p>
                    </div>

                    <div className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold shadow-lg shadow-cyan-500/50">
                        💳
                      </span>
                      <p className="text-lg font-semibold text-purple-400">
                        Monthly EMI: ₹10,555 / month
                      </p>
                    </div>
                  </div>
                </div>
              </div>

          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="relative inline-block">
            <div className="absolute -inset-2 bg-gradient-to-r from-orange-600 to-orange-400 rounded-full blur-xl opacity-75" />
            <Link href="/contact">
  <button className="relative px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold rounded-full text-lg shadow-2xl shadow-orange-500/50 transition-all duration-300 transform hover:scale-105">
    Start Your Admission →
  </button>
</Link>
          </div>
        </div>
      </div>
    </div>
  );
}