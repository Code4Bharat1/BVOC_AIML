import React from "react";

export default function Fee_Policy() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-center mt-10 mb-6">
      {/* Main Heading */}
      <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
        Fees Structure & Payment Policy
      </h1>

      {/* Subheading */}
      <h2 className="text-lg sm:text-2xl font-semibold text-[#AC6CFF]">
        Course: B.Voc in Artificial Intelligence and Machine Learning
      </h2>
      <div className="bg-[#6B009D] rounded-2xl p-6 mt-8 max-w-4xl mx-auto text-white">
        <p className="text-xl sm:text-2xl text-bold font-medium text-center">
          Total Program Fee: ₹3,36,000/- (₹1,12,000 per year for 3 years)
        </p>
      </div>

      {/** table of compoenent and fee */}
      <h2 className="text-2xl sm:text-4xl font-bold text-[#ffff] mt-15 text-bold">
        Detailed Fee Bifurcation (Per Year)
      </h2>
      <div className="overflow-x-auto mt-10 max-w-4xl mx-auto">
        <table className="min-w-full table-auto text-left text-sm sm:text-base border border-white border-collapse">
          <thead className="bg-[#6B009D] text-white">
            <tr>
              <th className="px-4 py-3 font-bold text-2xl text-center border border-white">
                Component
              </th>
              <th className="px-4 py-3 font-bold text-2xl text-center border border-white">
                Amount per Year (₹)
              </th>
            </tr>
          </thead>
          <tbody className="bg-[#232529] text-white text-center">
            <tr>
              <td className="px-4 py-3 border border-white">
                Admission & Registration Fee
              </td>
              <td className="px-4 py-3 border border-white">₹5,000</td>
            </tr>
            <tr>
              <td className="px-4 py-3 border border-white">Tuition Fee</td>
              <td className="px-4 py-3 border border-white">₹85,000</td>
            </tr>
            <tr>
              <td className="px-4 py-3 border border-white">
                Lab, AI Tools & Project Access
              </td>
              <td className="px-4 py-3 border border-white">₹10,000</td>
            </tr>
            <tr>
              <td className="px-4 py-3 border border-white">Examination Fee</td>
              <td className="px-4 py-3 border border-white">₹6,000</td>
            </tr>
            <tr>
              <td className="px-4 py-3 border border-white">
                Student Development & Activity Fee
              </td>
              <td className="px-4 py-3 border border-white">₹6,000</td>
            </tr>
            <tr>
              <td className="px-4 py-3 border border-white">Total per Year</td>
              <td className="px-4 py-3 border border-white">₹1,12,000</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/** Payment Schedule & Options */}
      <h2 className="text-4xl font-bold text-[#ffff] mt-15 mb-15 text-bold">
        Payment Schedule & Options
      </h2>
      <div className="flex flex-col sm:flex-row justify-center items-stretch gap-15 mt-10 px-4">
        {/* Box 1 */}
        <div className="w-full sm:w-1/2 max-w-md p-6 rounded-2xl border border-white shadow-[0_2px_10px_#AC6CFF] bg-gradient-to-t from-[#1a001f] to-[#6B009D] text-white text-center flex flex-col justify-between">
          <h2 className="text-2xl font-bold mb-8">Option A: Annual Payment</h2>
          <p className="text-base sm:text-lg">
            1st Year: ₹1,12,000 at Admission
            <br />
            2nd Year: ₹1,12,000 at the start of 4th Semester
            <br />
            3rd Year: ₹1,12,000 at the start of 6th Semester
          </p>
        </div>

        {/* Box 2 */}
        <div className="w-full sm:w-1/2 max-w-md p-6 rounded-2xl border border-white shadow-[0_2px_10px_#AC6CFF] bg-gradient-to-t from-[#1a001f] to-[#6B009D] text-white text-center flex flex-col justify-between">
          <h2 className="text-2xl font-bold mb-8">
            Option B: Semester-wise Installments
          </h2>
          <div>
            <p className="text-base sm:text-lg mb-4">
              Semester 1 to Semester 6: ₹56,000 per semester
            </p>
            <p className="text-base sm:text-lg">Total Fee: ₹3,36,000</p>
          </div>
        </div>
      </div>
    </div>
  );
}
