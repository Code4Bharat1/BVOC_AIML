"use client";
import { FaCreditCard, FaClock, FaFileInvoice, FaBell, FaChartLine } from "react-icons/fa";
import Link from "next/link";

export default function FeePaymentGuidelines() {
  const guidelines = [
    {
      description:
        "Fees can be paid via bank transfer, UPI, net banking, or directly at the growth head cabin.",
      icon: <FaCreditCard />,
      color: "#007BFF",
    },
    {
      description:
        "A late fee of ₹500 per day is applicable if payment is made after the due date.",
      icon: <FaClock />,
      color: "#FF7F00",
    },
    {
      description:
        "Fee receipts must be retained and submitted during semester registration for verification.",
      icon: <FaFileInvoice />,
      color: "#007BFF",
    },
    {
      description:
        "Students receiving scholarships must inform the accounts department to apply proper fee adjustments.",
      icon: <FaBell />,
      color: "#FF7F00",
    },
    {
      description:
        "No refunds are applicable after 15 days of admission as per institutional policy.",
      icon: <FaChartLine />,
      color: "#007BFF",
    },
  ];

  return (
    <section
      aria-labelledby="fee-guidelines-heading"
      className="min-h-screen bg-gray-50 py-16 px-4"
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <header className="text-center mb-12">
          <h1
            id="fee-guidelines-heading"
            className="text-4xl md:text-5xl font-bold mb-3"
            style={{ color: "#2C2C2C" }}
          >
            Fee Payment <span style={{ color: "#007BFF" }}>Guidelines</span>
          </h1>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Important instructions and policies related to fee payment,
            deadlines, and financial procedures for students enrolled in our programs.
          </p>

          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-orange-500 mx-auto rounded-full mt-4" />
        </header>

        {/* Guidelines Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {guidelines.map((item, index) => {
            const isLast = index === guidelines.length - 1;
            const isOdd = guidelines.length % 2 !== 0;

            return (
              <article
                key={index}
                className={`${
                  isLast && isOdd
                    ? "md:col-span-2 md:mx-auto md:w-full md:max-w-lg"
                    : ""
                }`}
              >
                <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-md transition-shadow duration-200 h-full">

                  {/* Top accent line */}
                  <div
                    className="w-full h-1 rounded-full mb-5"
                    style={{ backgroundColor: item.color }}
                  />

                  <div className="flex items-start gap-4">

                    {/* Icon */}
                    <div
                      className="flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center text-white text-xl"
                      style={{ backgroundColor: item.color }}
                      aria-hidden="true"
                    >
                      {item.icon}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <p className="text-gray-700 text-base leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Contact Section */}
        <div className="bg-white rounded-xl p-8 border border-gray-200 text-center">
          <div
            className="w-full h-1 rounded-full mb-6"
            style={{
              background: "linear-gradient(to right, #007BFF, #FF7F00)",
            }}
          />

          <h2 className="text-2xl font-bold mb-3" style={{ color: "#2C2C2C" }}>
            Need Assistance?
          </h2>

          <p className="text-gray-600 mb-6">
            Contact our finance department for any payment-related queries,
            installment options, or scholarship fee adjustments.
          </p>

          <Link href="/contact">
            <button
              className="px-8 py-3 text-white font-semibold rounded-lg transition-all duration-200 hover:shadow-lg"
              style={{
                background: "linear-gradient(135deg, #007BFF, #FF7F00)",
              }}
            >
              Contact Finance Team →
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}