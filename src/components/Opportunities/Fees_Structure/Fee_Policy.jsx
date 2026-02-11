"use client";
import { DollarSign, Calendar, FileText, CreditCard } from "lucide-react";
import React from "react";
import Link from "next/link";

export default function Fee_Policy() {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 mt-15">
      <div className="max-w-6xl mx-auto mt-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: '#2C2C2C' }}>
            Fees Structure & <span style={{ color: '#007BFF' }}>Payment Policy</span>
          </h1>

          <h2 className="text-xl md:text-2xl font-medium max-w-3xl mx-auto" style={{ color: 'rgba(44, 44, 44, 0.75)' }}>
            Course: Bachelor's in <span style={{ color: '#FF7F00', fontWeight: 600 }}>AI</span> and{" "}
            <span style={{ color: '#007BFF', fontWeight: 600 }}>Machine Learning,</span>{" "}
            <span style={{ color: '#FF7F00', fontWeight: 600 }}>Computer Science,</span> and{" "}
            <span style={{ color: '#007BFF', fontWeight: 600 }}>Cybersecurity</span>
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-orange-500 mx-auto rounded-full mt-6" />
        </div>

        {/* Total Fee Card */}
        <div className="mb-16">
          <div className="bg-white rounded-xl p-8 lg:p-10 border border-gray-200 shadow-md">
            <div
              className="w-full h-1 rounded-full mb-6"
              style={{ background: 'linear-gradient(to right, #007BFF, #FF7F00)' }}
            />

            <div className="flex items-center justify-center gap-4 mb-4">
              <div
                className="w-14 h-14 lg:w-16 lg:h-16 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: '#007BFF' }}
              >
                <DollarSign className="text-white w-7 h-7 lg:w-8 lg:h-8" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold" style={{ color: '#2C2C2C' }}>
                Total Program Fee
              </h3>
            </div>
            <p className="text-4xl md:text-5xl font-bold text-center" style={{ color: '#007BFF' }}>
              ₹3,36,000/-
            </p>
            <p className="text-lg text-center mt-3 font-medium text-gray-600">
              (₹1,12,000 per year for 3 years)
            </p>
          </div>
        </div>

        {/* Fee Bifurcation Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center" style={{ color: '#2C2C2C' }}>
            Detailed <span style={{ color: '#007BFF' }}>Fee Bifurcation</span> (Per Year)
          </h2>

          <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-md bg-white">
            <div
              className="w-full h-1"
              style={{ background: 'linear-gradient(to right, #007BFF, #FF7F00)' }}
            />

            <table className="w-full text-left border-collapse">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 font-bold text-lg text-center border-b-2 border-gray-200" style={{ color: '#2C2C2C' }}>
                    Component
                  </th>
                  <th className="px-6 py-4 font-bold text-lg text-center border-b-2 border-gray-200" style={{ color: '#2C2C2C' }}>
                    Amount per Year (₹)
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-medium">Admission & Registration Fee</td>
                  <td className="px-6 py-4 text-center font-semibold" style={{ color: '#2C2C2C' }}>₹5,000</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-medium">Tuition Fee</td>
                  <td className="px-6 py-4 text-center font-semibold" style={{ color: '#2C2C2C' }}>₹85,000</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-medium">Lab, AI Tools & Project Access</td>
                  <td className="px-6 py-4 text-center font-semibold" style={{ color: '#2C2C2C' }}>₹10,000</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-medium">Examination Fee</td>
                  <td className="px-6 py-4 text-center font-semibold" style={{ color: '#2C2C2C' }}>₹6,000</td>
                </tr>
                <tr className="border-b-2 border-gray-200 hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-medium">Student Development & Activity Fee</td>
                  <td className="px-6 py-4 text-center font-semibold" style={{ color: '#2C2C2C' }}>₹6,000</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-5 font-bold text-lg" style={{ color: '#2C2C2C' }}>Total per Year</td>
                  <td className="px-6 py-5 text-center font-bold text-2xl" style={{ color: '#007BFF' }}>₹1,12,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Payment Options */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" style={{ color: '#2C2C2C' }}>
            Payment <span style={{ color: '#007BFF' }}>Schedule</span> &{" "}
            <span style={{ color: '#FF7F00' }}>Options</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {/* Option A */}
            <div className="bg-white rounded-xl p-6 lg:p-8 border border-gray-200 hover:shadow-md transition-shadow h-full">
              <div className="w-full h-1 rounded-full mb-6" style={{ backgroundColor: '#007BFF' }} />

              <div className="flex flex-col items-center mb-6">
                <div
                  className="w-14 h-14 rounded-lg flex items-center justify-center text-white mb-4"
                  style={{ backgroundColor: '#007BFF' }}
                >
                  <Calendar className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-center" style={{ color: '#2C2C2C' }}>
                  Option A: Annual Payment
                </h3>
              </div>

              <div className="space-y-4 text-gray-700">
                <div className="flex items-start gap-3">
                  <span
                    className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold"
                    style={{ backgroundColor: '#007BFF' }}
                  >
                    1
                  </span>
                  <p className="text-base leading-relaxed">1st Year: ₹1,12,000 at Admission</p>
                </div>
                <div className="flex items-start gap-3">
                  <span
                    className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold"
                    style={{ backgroundColor: '#007BFF' }}
                  >
                    2
                  </span>
                  <p className="text-base leading-relaxed">2nd Year: ₹1,12,000 at the start of 3rd Semester</p>
                </div>
                <div className="flex items-start gap-3">
                  <span
                    className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold"
                    style={{ backgroundColor: '#007BFF' }}
                  >
                    3
                  </span>
                  <p className="text-base leading-relaxed">3rd Year: ₹1,12,000 at the start of 5th Semester</p>
                </div>
              </div>
            </div>

            {/* Option B */}
            <div className="bg-white rounded-xl p-6 lg:p-8 border border-gray-200 hover:shadow-md transition-shadow h-full">
              <div className="w-full h-1 rounded-full mb-6" style={{ backgroundColor: '#FF7F00' }} />

              <div className="flex flex-col items-center mb-6">
                <div
                  className="w-14 h-14 rounded-lg flex items-center justify-center text-white mb-4"
                  style={{ backgroundColor: '#FF7F00' }}
                >
                  <FileText className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-center" style={{ color: '#2C2C2C' }}>
                  Option B: Semester-wise Installments
                </h3>
              </div>

              <div className="space-y-6 text-center">
                <div className="p-6 rounded-lg bg-blue-50 border border-blue-100">
                  <p className="text-base mb-2 font-medium text-gray-600">Per Semester</p>
                  <p className="text-3xl font-bold" style={{ color: '#007BFF' }}>₹56,000</p>
                </div>
                <div className="p-6 rounded-lg bg-orange-50 border border-orange-100">
                  <p className="text-base mb-2 font-medium text-gray-600">Total Fee (6 Semesters)</p>
                  <p className="text-3xl font-bold" style={{ color: '#FF7F00' }}>₹3,36,000</p>
                </div>
              </div>
            </div>

            {/* Option C */}
            <div className="bg-white rounded-xl p-6 lg:p-8 border border-gray-200 hover:shadow-md transition-shadow h-full">
              <div
                className="w-full h-1 rounded-full mb-6"
                style={{ background: 'linear-gradient(to right, #007BFF, #FF7F00)' }}
              />

              <div className="flex flex-col items-center mb-6">
                <div
                  className="w-14 h-14 rounded-lg flex items-center justify-center text-white mb-4"
                  style={{ background: 'linear-gradient(135deg, #007BFF, #FF7F00)' }}
                >
                  <CreditCard className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-center" style={{ color: '#2C2C2C' }}>
                  Option C: Monthly EMI Plan
                </h3>
              </div>

              <div className="space-y-4 text-gray-700">
                <div className="flex items-start gap-3">
                  <span
                    className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold"
                    style={{ backgroundColor: '#007BFF' }}
                  >
                    1
                  </span>
                  <p className="text-base leading-relaxed">Admission Fees: ₹5,000 (one-time)</p>
                </div>

                <div className="flex items-start gap-3">
                  <span
                    className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold"
                    style={{ backgroundColor: '#007BFF' }}
                  >
                    2
                  </span>
                  <p className="text-base leading-relaxed">Exam Fees: ₹6,000 (one-time)</p>
                </div>

                <div className="flex items-start gap-3">
                  <span
                    className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold"
                    style={{ backgroundColor: '#007BFF' }}
                  >
                    3
                  </span>
                  <p className="text-base leading-relaxed">Student Development Fees: ₹6,000 (one-time)</p>
                </div>

                <div className="flex items-start gap-3">
                  <span
                    className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold"
                    style={{ backgroundColor: '#007BFF' }}
                  >
                    4
                  </span>
                  <p className="text-base leading-relaxed">Balance Amount: ₹95,000</p>
                </div>

                <div className="flex items-start gap-3">
                  <span
                    className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold"
                    style={{ backgroundColor: '#007BFF' }}
                  >
                    5
                  </span>
                  <p className="text-base leading-relaxed">
                    EMI via <span style={{ color: '#007BFF', fontWeight: 600 }}>Credit Card Only</span> (No Cost EMI)
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span
                    className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold"
                    style={{ backgroundColor: '#FF7F00' }}
                  >
                    💳
                  </span>
                  <p className="text-base leading-relaxed font-semibold" style={{ color: '#FF7F00' }}>
                    Monthly EMI: ₹10,555 / month
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <Link href="/contact">
            <button
              className="px-10 py-4 text-white font-semibold rounded-lg text-lg shadow-md hover:shadow-lg transition-shadow"
              style={{ background: "linear-gradient(135deg, #007BFF, #FF7F00)" }}
            >
              Start Your Admission →
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}