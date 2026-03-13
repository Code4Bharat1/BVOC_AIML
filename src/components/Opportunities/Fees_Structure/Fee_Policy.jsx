"use client";
import { Calendar, FileText, CreditCard, IndianRupee } from "lucide-react";
import React from "react";
import Link from "next/link";

export default function Fee_Policy() {
  return (
    <section
      aria-labelledby="fee-policy-heading"
      className="min-h-screen bg-gray-50 py-16 px-4 mt-15"
    >
      <div className="max-w-6xl mx-auto mt-10">

        {/* Header */}
        <header className="text-center mb-16">
          <h1
            id="fee-policy-heading"
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: "#2C2C2C" }}
          >
            Fees Structure &{" "}
            <span style={{ color: "#007BFF" }}>Payment Policy</span>
          </h1>

          <h2 className="text-xl md:text-2xl font-medium max-w-3xl mx-auto"
            style={{ color: "rgba(44, 44, 44, 0.75)" }}
          >
            Course:{" "}
            <span style={{ color: "#007BFF", fontWeight: 600 }}>
              Bachelor of Data Science and Artificial Intelligence
            </span>{" "}
            and{" "}
            <span style={{ color: "#FF7F00", fontWeight: 600 }}>
              Bachelor of Multimedia and Animation
            </span>
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-orange-500 mx-auto rounded-full mt-6" />
        </header>

        {/* Total Fee Card */}
        <div className="mb-16">
          <div className="bg-white rounded-xl p-8 lg:p-10 border border-gray-200 shadow-md">
            <div
              className="w-full h-1 rounded-full mb-6"
              style={{ background: "linear-gradient(to right, #007BFF, #FF7F00)" }}
            />

            <div className="flex items-center justify-center gap-4 mb-4">
              <div
                className="w-14 h-14 lg:w-16 lg:h-16 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: "#007BFF" }}
                aria-hidden="true"
              >
                <IndianRupee className="text-white w-7 h-7 lg:w-8 lg:h-8" />
              </div>

              <h3 className="text-2xl md:text-3xl font-bold"
                style={{ color: "#2C2C2C" }}
              >
                Total Program Fee
              </h3>
            </div>

            <p className="text-4xl md:text-5xl font-bold text-center"
              style={{ color: "#007BFF" }}
            >
              ₹3,36,000/-
            </p>

            <p className="text-lg text-center mt-3 font-medium text-gray-600">
              (₹1,12,000 per year for 3 years)
            </p>
          </div>
        </div>

        {/* Fee Bifurcation */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center"
            style={{ color: "#2C2C2C" }}
          >
            Detailed <span style={{ color: "#007BFF" }}>Fee Bifurcation</span> (Per Year)
          </h2>

          <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-md bg-white">

            <div
              className="w-full h-1"
              style={{ background: "linear-gradient(to right, #007BFF, #FF7F00)" }}
            />

            <table className="w-full text-left border-collapse">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 font-bold text-lg text-center border-b-2 border-gray-200">
                    Component
                  </th>
                  <th className="px-6 py-4 font-bold text-lg text-center border-b-2 border-gray-200">
                    Amount per Year (₹)
                  </th>
                </tr>
              </thead>

              <tbody className="text-gray-700">

                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium">
                    Admission & Registration Fee
                  </td>
                  <td className="px-6 py-4 text-center font-semibold">
                    ₹5,000
                  </td>
                </tr>

                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium">
                    Tuition Fee
                  </td>
                  <td className="px-6 py-4 text-center font-semibold">
                    ₹85,000
                  </td>
                </tr>

                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium">
                    Lab, Software Tools & Project Access
                  </td>
                  <td className="px-6 py-4 text-center font-semibold">
                    ₹10,000
                  </td>
                </tr>

                <tr className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium">
                    Examination Fee
                  </td>
                  <td className="px-6 py-4 text-center font-semibold">
                    ₹6,000
                  </td>
                </tr>

                <tr className="border-b-2 border-gray-200 hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium">
                    Student Development & Activity Fee
                  </td>
                  <td className="px-6 py-4 text-center font-semibold">
                    ₹6,000
                  </td>
                </tr>

                <tr className="bg-gray-50">
                  <td className="px-6 py-5 font-bold text-lg">
                    Total per Year
                  </td>
                  <td className="px-6 py-5 text-center font-bold text-2xl text-blue-600">
                    ₹1,12,000
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>

        {/* Payment Options */}
        <div className="mb-16">

          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center"
            style={{ color: "#2C2C2C" }}
          >
            Payment <span style={{ color: "#007BFF" }}>Schedule</span> &{" "}
            <span style={{ color: "#FF7F00" }}>Options</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">

            {/* Annual Payment */}
            <article className="bg-white rounded-xl p-6 lg:p-8 border border-gray-200 hover:shadow-md">

              <div className="w-full h-1 rounded-full mb-6 bg-blue-600" />

              <div className="flex flex-col items-center mb-6">
                <div
                  className="w-14 h-14 rounded-lg flex items-center justify-center text-white mb-4 bg-blue-600"
                  aria-hidden="true"
                >
                  <Calendar className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-bold text-center text-slate-900">
                  Option A: Annual Payment
                </h3>
              </div>

              <p className="text-gray-700 text-center">
                Pay ₹1,12,000 annually at the start of each academic year.
              </p>

            </article>

            {/* Semester Payment */}
            <article className="bg-white rounded-xl p-6 lg:p-8 border border-gray-200 hover:shadow-md">

              <div className="w-full h-1 rounded-full mb-6 bg-orange-500" />

              <div className="flex flex-col items-center mb-6">

                <div
                  className="w-14 h-14 rounded-lg flex items-center justify-center text-white mb-4 bg-orange-500"
                  aria-hidden="true"
                >
                  <FileText className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-bold text-center text-slate-900">
                  Option B: Semester-wise Installments
                </h3>

              </div>

              <p className="text-center text-gray-700">
                ₹56,000 per semester for 6 semesters.
              </p>

            </article>

            {/* EMI */}
            <article className="bg-white rounded-xl p-6 lg:p-8 border border-gray-200 hover:shadow-md">

              <div className="w-full h-1 rounded-full mb-6 bg-gradient-to-r from-blue-500 to-orange-500" />

              <div className="flex flex-col items-center mb-6">

                <div
                  className="w-14 h-14 rounded-lg flex items-center justify-center text-white mb-4 bg-gradient-to-r from-blue-500 to-orange-500"
                  aria-hidden="true"
                >
                  <CreditCard className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-bold text-center text-slate-900">
                  Option C: Monthly EMI Plan
                </h3>

              </div>

              <p className="text-center text-gray-700">
                Monthly EMI available via credit card (No Cost EMI).
              </p>

            </article>

          </div>
        </div>

        {/* CTA */}
        <div className="text-center">

          <Link href="/contact">
            <button
              className="px-10 py-4 text-white font-semibold rounded-lg text-lg shadow-md hover:shadow-lg transition-shadow"
              style={{
                background: "linear-gradient(135deg, #007BFF, #FF7F00)",
              }}
            >
              Start Your Admission →
            </button>
          </Link>

        </div>
      </div>
    </section>
  );
}