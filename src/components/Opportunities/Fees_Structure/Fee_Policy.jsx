"use client";
import { DollarSign, Calendar, FileText, CreditCard, Sparkles } from "lucide-react";
import React from "react";
import Link from "next/link";

export default function Fee_Policy() {
  return (
    <div className="relative min-h-screen bg-white py-16 px-4 overflow-hidden">
      {/* Optimized Floating Particles - Reduced for Better Performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              background: i % 2 === 0 ? '#007BFF' : '#FF7F00',
              opacity: 0.15,
              left: `${15 + i * 15}%`,
              top: `${10 + i * 12}%`,
              animation: `floatUp ${6 + i}s ease-in-out infinite`,
              animationDelay: `${i * 0.8}s`
            }}
          />
        ))}
      </div>

      {/* Lighter Glowing Orbs with CSS Animation - Better Performance */}
      <div
        className="absolute top-0 right-0 w-80 h-80 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(0, 123, 255, 0.08) 0%, transparent 70%)',
          filter: 'blur(60px)',
          animation: 'moveOrb1 20s ease-in-out infinite',
          willChange: 'transform'
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255, 127, 0, 0.08) 0%, transparent 70%)',
          filter: 'blur(60px)',
          animation: 'moveOrb2 22s ease-in-out infinite',
          willChange: 'transform'
        }}
      />

      {/* CSS Animations for Better Performance */}
      <style jsx>{`
        @keyframes floatUp {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          15% {
            opacity: 0.2;
          }
          85% {
            opacity: 0.2;
          }
          100% {
            transform: translateY(-120px) translateX(20px);
            opacity: 0;
          }
        }

        @keyframes moveOrb1 {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(40px, 40px);
          }
        }

        @keyframes moveOrb2 {
          0%, 100% {
            transform: translate(0, 0);
          }
          50% {
            transform: translate(-40px, -40px);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleUp {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        html {
          scroll-behavior: smooth;
        }
      `}</style>

      <div className="max-w-6xl mx-auto relative z-10 mt-10">
        {/* Header */}
        <div className="text-center mb-16">
          {/* <div 
            className="inline-flex items-center gap-2 mb-5 px-5 py-2 bg-gradient-to-r from-blue-50 to-orange-50 border rounded-full"
            style={{ 
              borderColor: 'rgba(0, 123, 255, 0.2)',
              animation: 'fadeInUp 0.5s ease-out'
            }}
          >
            <Sparkles className="w-4 h-4" style={{ color: '#007BFF' }} />
            <span 
              className="text-xs font-semibold tracking-wider uppercase" 
              style={{ color: '#2C2C2C' }}
            >
              FEE STRUCTURE
            </span>
            <Sparkles className="w-4 h-4" style={{ color: '#FF7F00' }} />
          </div> */}

          <h1
            className="text-3xl md:text-5xl font-bold mb-4 leading-tight"
            style={{
              fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif",
              color: '#2C2C2C',
              animation: 'fadeInUp 0.6s ease-out 0.1s backwards'
            }}
          >
            Fees Structure & <span style={{ color: '#007BFF' }}>Payment Policy</span>
          </h1>

          <h2
            className="text-xl md:text-2xl font-medium max-w-3xl mx-auto"
            style={{
              color: 'rgba(44, 44, 44, 0.75)',
              animation: 'fadeInUp 0.6s ease-out 0.2s backwards'
            }}
          >
            Course: Bachelor's in <span style={{ color: '#FF7F00', fontWeight: 600 }}>AI</span> and <span style={{ color: '#007BFF', fontWeight: 600 }}>Machine Learning,</span>
            <span style={{ color: '#FF7F00', fontWeight: 600 }}>Computer Science,</span> and {" "}
            <span style={{ color: '#007BFF', fontWeight: 600 }}>Cybersecurity</span>

          </h2>

          <div
            className="flex items-center justify-center gap-3 mt-5"
            style={{ animation: 'fadeInUp 0.6s ease-out 0.3s backwards' }}
          >
            <div
              className="h-0.5 w-16 rounded-full"
              style={{ background: 'linear-gradient(to right, transparent, #007BFF, transparent)' }}
            />
            <div
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: '#FF7F00' }}
            />
            <div
              className="h-0.5 w-16 rounded-full"
              style={{ background: 'linear-gradient(to right, transparent, #FF7F00, transparent)' }}
            />
          </div>
        </div>

        {/* Total Fee Card */}
        <div
          className="relative mb-16 group"
          style={{ animation: 'scaleUp 0.6s ease-out 0.4s backwards' }}
        >
          <div className="relative bg-white rounded-2xl p-8 lg:p-10 border border-gray-200/60 shadow-xl hover:shadow-2xl transition-shadow duration-300">
            {/* Accent Bar */}
            <div
              className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
              style={{ background: 'linear-gradient(to right, #007BFF, #FF7F00)' }}
            />

            <div className="flex items-center justify-center gap-4 mb-4 mt-2">
              <div
                className="w-14 h-14 lg:w-16 lg:h-16 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300"
                style={{ background: 'linear-gradient(135deg, #007BFF, #80C8F7)' }}
              >
                <DollarSign className="text-white w-7 h-7 lg:w-8 lg:h-8" />
              </div>
              <h3
                className="text-2xl md:text-3xl font-bold"
                style={{
                  fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif",
                  color: '#2C2C2C'
                }}
              >
                Total Program Fee
              </h3>
            </div>
            <p
              className="text-4xl md:text-5xl font-bold text-center"
              style={{ color: '#007BFF' }}
            >
              ₹3,36,000/-
            </p>
            <p
              className="text-lg text-center mt-3 font-medium"
              style={{ color: 'rgba(44, 44, 44, 0.7)' }}
            >
              (₹1,12,000 per year for 3 years)
            </p>
          </div>
        </div>

        {/* Fee Bifurcation Section */}
        <div
          className="mb-16"
          style={{ animation: 'fadeInUp 0.6s ease-out 0.5s backwards' }}
        >
          <h2
            className="text-3xl md:text-4xl font-bold mb-10 text-center"
            style={{
              fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif",
              color: '#2C2C2C'
            }}
          >
            Detailed <span style={{ color: '#007BFF' }}>Fee Bifurcation</span> (Per Year)
          </h2>

          <div className="relative group">
            <div className="relative overflow-x-auto rounded-2xl border border-gray-200/60 shadow-xl bg-white">
              {/* Accent Bar for Table */}
              <div
                className="absolute top-0 left-0 right-0 h-1"
                style={{ background: 'linear-gradient(to right, #007BFF, #FF7F00)' }}
              />

              <table className="w-full text-left border-collapse">
                <thead className="bg-gradient-to-r from-blue-50 to-orange-50">
                  <tr>
                    <th
                      className="px-6 py-5 font-bold text-lg text-center border-b-2"
                      style={{
                        color: '#2C2C2C',
                        borderColor: 'rgba(0, 123, 255, 0.2)'
                      }}
                    >
                      Component
                    </th>
                    <th
                      className="px-6 py-5 font-bold text-lg text-center border-b-2"
                      style={{
                        color: '#2C2C2C',
                        borderColor: 'rgba(0, 123, 255, 0.2)'
                      }}
                    >
                      Amount per Year (₹)
                    </th>
                  </tr>
                </thead>
                <tbody style={{ color: 'rgba(44, 44, 44, 0.8)' }}>
                  <tr className="table-row-hover border-b border-gray-100">
                    <td className="px-6 py-4 font-medium">
                      Admission & Registration Fee
                    </td>
                    <td
                      className="px-6 py-4 text-center font-semibold"
                      style={{ color: '#2C2C2C' }}
                    >
                      ₹5,000
                    </td>
                  </tr>
                  <tr className="table-row-hover border-b border-gray-100">
                    <td className="px-6 py-4 font-medium">
                      Tuition Fee
                    </td>
                    <td
                      className="px-6 py-4 text-center font-semibold"
                      style={{ color: '#2C2C2C' }}
                    >
                      ₹85,000
                    </td>
                  </tr>
                  <tr className="table-row-hover border-b border-gray-100">
                    <td className="px-6 py-4 font-medium">
                      Lab, AI Tools & Project Access
                    </td>
                    <td
                      className="px-6 py-4 text-center font-semibold"
                      style={{ color: '#2C2C2C' }}
                    >
                      ₹10,000
                    </td>
                  </tr>
                  <tr className="table-row-hover border-b border-gray-100">
                    <td className="px-6 py-4 font-medium">
                      Examination Fee
                    </td>
                    <td
                      className="px-6 py-4 text-center font-semibold"
                      style={{ color: '#2C2C2C' }}
                    >
                      ₹6,000
                    </td>
                  </tr>
                  <tr className="table-row-hover border-b-2 border-gray-200">
                    <td className="px-6 py-4 font-medium">
                      Student Development & Activity Fee
                    </td>
                    <td
                      className="px-6 py-4 text-center font-semibold"
                      style={{ color: '#2C2C2C' }}
                    >
                      ₹6,000
                    </td>
                  </tr>
                  <tr className="bg-gradient-to-r from-blue-50 to-orange-50">
                    <td
                      className="px-6 py-5 font-bold text-lg"
                      style={{ color: '#2C2C2C' }}
                    >
                      Total per Year
                    </td>
                    <td
                      className="px-6 py-5 text-center font-bold text-2xl"
                      style={{ color: '#007BFF' }}
                    >
                      ₹1,12,000
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Payment Options */}
        <div className="mb-16">
          <h2
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
            style={{
              fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif",
              color: '#2C2C2C',
              animation: 'fadeInUp 0.6s ease-out 0.6s backwards'
            }}
          >
            Payment <span style={{ color: '#007BFF' }}>Schedule</span> & <span style={{ color: '#FF7F00' }}>Options</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {/* Option A */}
            <div
              className="relative group payment-card"
              style={{ animation: 'fadeInUp 0.6s ease-out 0.7s backwards' }}
            >
              <div className="relative h-full bg-white rounded-2xl p-6 lg:p-8 border border-gray-200/60 shadow-lg hover:shadow-xl transition-all duration-300">
                {/* Accent Bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                  style={{ background: 'linear-gradient(to right, #007BFF, #80C8F7)' }}
                />

                <div className="flex flex-col items-center mb-6 mt-2">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center text-white mb-4 shadow-lg icon-hover"
                    style={{ background: 'linear-gradient(135deg, #007BFF, #80C8F7)' }}
                  >
                    <Calendar className="w-6 h-6" />
                  </div>
                  <h3
                    className="text-xl font-bold text-center"
                    style={{
                      fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif",
                      color: '#2C2C2C'
                    }}
                  >
                    Option A: Annual Payment
                  </h3>
                </div>

                <div className="space-y-4" style={{ color: 'rgba(44, 44, 44, 0.8)' }}>
                  <div className="flex items-start gap-3">
                    <span
                      className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold shadow"
                      style={{ background: 'linear-gradient(135deg, #007BFF, #80C8F7)' }}
                    >
                      1
                    </span>
                    <p className="text-base leading-relaxed">1st Year: ₹1,12,000 at Admission</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span
                      className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold shadow"
                      style={{ background: 'linear-gradient(135deg, #007BFF, #80C8F7)' }}
                    >
                      2
                    </span>
                    <p className="text-base leading-relaxed">2nd Year: ₹1,12,000 at the start of 3rd Semester</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span
                      className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold shadow"
                      style={{ background: 'linear-gradient(135deg, #007BFF, #80C8F7)' }}
                    >
                      3
                    </span>
                    <p className="text-base leading-relaxed">3rd Year: ₹1,12,000 at the start of 5th Semester</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Option B */}
            <div
              className="relative group payment-card"
              style={{ animation: 'fadeInUp 0.6s ease-out 0.8s backwards' }}
            >
              <div className="relative h-full bg-white rounded-2xl p-6 lg:p-8 border border-gray-200/60 shadow-lg hover:shadow-xl transition-all duration-300">
                {/* Accent Bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                  style={{ background: 'linear-gradient(to right, #FF7F00, #FFCD00)' }}
                />

                <div className="flex flex-col items-center mb-6 mt-2">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center text-white mb-4 shadow-lg icon-hover"
                    style={{ background: 'linear-gradient(135deg, #FF7F00, #FFCD00)' }}
                  >
                    <FileText className="w-6 h-6" />
                  </div>
                  <h3
                    className="text-xl font-bold text-center"
                    style={{
                      fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif",
                      color: '#2C2C2C'
                    }}
                  >
                    Option B: Semester-wise Installments
                  </h3>
                </div>

                <div className="space-y-6 text-center">
                  <div className="p-6 rounded-xl bg-gradient-to-r from-blue-50 to-orange-50 border border-blue-200/40">
                    <p
                      className="text-base mb-2 font-medium"
                      style={{ color: 'rgba(44, 44, 44, 0.7)' }}
                    >
                      Per Semester
                    </p>
                    <p
                      className="text-3xl font-bold"
                      style={{ color: '#007BFF' }}
                    >
                      ₹56,000
                    </p>
                  </div>
                  <div className="p-6 rounded-xl bg-gradient-to-r from-orange-50 to-yellow-50 border border-orange-200/40">
                    <p
                      className="text-base mb-2 font-medium"
                      style={{ color: 'rgba(44, 44, 44, 0.7)' }}
                    >
                      Total Fee (6 Semesters)
                    </p>
                    <p
                      className="text-3xl font-bold"
                      style={{ color: '#FF7F00' }}
                    >
                      ₹3,36,000
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Option C */}
            <div
              className="relative group payment-card"
              style={{ animation: 'fadeInUp 0.6s ease-out 0.9s backwards' }}
            >
              <div className="relative h-full bg-white rounded-2xl p-6 lg:p-8 border border-gray-200/60 shadow-lg hover:shadow-xl transition-all duration-300">
                {/* Accent Bar */}
                <div
                  className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
                  style={{ background: 'linear-gradient(to right, #007BFF, #FF7F00)' }}
                />

                <div className="flex flex-col items-center mb-6 mt-2">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center text-white mb-4 shadow-lg icon-hover"
                    style={{ background: 'linear-gradient(135deg, #007BFF, #FF7F00)' }}
                  >
                    <CreditCard className="w-6 h-6" />
                  </div>
                  <h3
                    className="text-xl font-bold text-center"
                    style={{
                      fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif",
                      color: '#2C2C2C'
                    }}
                  >
                    Option C: Monthly EMI Plan
                  </h3>
                </div>

                <div className="space-y-4" style={{ color: 'rgba(44, 44, 44, 0.8)' }}>
                  <div className="flex items-start gap-3">
                    <span
                      className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold shadow"
                      style={{ background: 'linear-gradient(135deg, #007BFF, #FF7F00)' }}
                    >
                      1
                    </span>
                    <p className="text-base leading-relaxed">Admission Fees: ₹5,000 (one-time)</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span
                      className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold shadow"
                      style={{ background: 'linear-gradient(135deg, #007BFF, #FF7F00)' }}
                    >
                      2
                    </span>
                    <p className="text-base leading-relaxed">Exam Fees: ₹6,000 (one-time)</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span
                      className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold shadow"
                      style={{ background: 'linear-gradient(135deg, #007BFF, #FF7F00)' }}
                    >
                      3
                    </span>
                    <p className="text-base leading-relaxed">Student Development Fees: ₹6,000 (one-time)</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span
                      className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold shadow"
                      style={{ background: 'linear-gradient(135deg, #007BFF, #FF7F00)' }}
                    >
                      4
                    </span>
                    <p className="text-base leading-relaxed">Balance Amount: ₹95,000</p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span
                      className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold shadow"
                      style={{ background: 'linear-gradient(135deg, #007BFF, #FF7F00)' }}
                    >
                      5
                    </span>
                    <p className="text-base leading-relaxed">
                      EMI via <span style={{ color: '#007BFF', fontWeight: 600 }}>Credit Card Only</span> (No Cost EMI)
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span
                      className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold shadow"
                      style={{ background: 'linear-gradient(135deg, #007BFF, #FF7F00)' }}
                    >
                      💳
                    </span>
                    <p
                      className="text-base leading-relaxed font-semibold"
                      style={{ color: '#FF7F00' }}
                    >
                      Monthly EMI: ₹10,555 / month
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div
          className="text-center"
          style={{ animation: 'fadeInUp 0.6s ease-out 1s backwards' }}
        >
          <Link href="/contact">
            <button
              className="cta-button px-10 py-4 text-white font-semibold rounded-full text-lg shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
              style={{
                background: "linear-gradient(135deg, #007BFF, #FF7F00)",
                fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif",
              }}
            >
              Start Your Admission →
            </button>
          </Link>
        </div>
      </div>

      {/* Additional CSS for Hover Effects */}
      <style jsx>{`
        .table-row-hover {
          transition: background-color 0.3s ease, transform 0.2s ease;
        }

        .table-row-hover:hover {
          background-color: rgba(0, 123, 255, 0.05);
          transform: translateX(4px);
        }

        .payment-card:hover {
          transform: translateY(-8px);
        }

        .icon-hover {
          transition: transform 0.3s ease;
        }

        .payment-card:hover .icon-hover {
          transform: rotate(360deg) scale(1.05);
        }

        .cta-button:hover {
          transform: scale(1.05);
          box-shadow: 0 20px 40px rgba(0, 123, 255, 0.3);
        }

        .cta-button:active {
          transform: scale(0.98);
        }
      `}</style>
    </div>
  );
}
