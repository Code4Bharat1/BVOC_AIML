"use client";
import { FaCreditCard, FaClock, FaFileInvoice, FaBell, FaChartLine } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";
import Link from "next/link";

export default function FeePaymentGuidelines() {
  const guidelines = [
    {
      description: "Fees can be paid via bank transfer, UPI, net banking, or at the growth head cabin.",
      icon: <FaCreditCard />,
      color: "from-[#007BFF] to-[#80C8F7]",
    },
    {
      description: "A late fee of ₹500/per Day is applicable after the due date.",
      icon: <FaClock />,
      color: "from-[#FF7F00] to-[#FFCD00]",
    },
    {
      description: "Fee receipts must be retained and submitted during semester registration.",
      icon: <FaFileInvoice />,
      color: "from-[#007BFF] to-[#FF7F00]",
    },
    {
      description: "Students receiving scholarships are required to inform the accounts department for fee adjustments.",
      icon: <FaBell />,
      color: "from-[#80C8F7] to-[#007BFF]",
    },
    {
      description: "No refunds after 15 days of admission.",
      icon: <FaChartLine />,
      color: "from-[#FF7F00] to-[#FFCD00]",
    },
  ];

  return (
    <div className="relative min-h-screen bg-white py-16 px-4 overflow-hidden">
      {/* Optimized Floating Particles */}
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

      {/* Lighter Glowing Orbs with CSS Animation */}
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

      {/* CSS Animations */}
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

        html {
          scroll-behavior: smooth;
        }

        .guideline-card:hover {
          transform: translateY(-8px) scale(1.02);
        }

        .guideline-icon {
          transition: transform 0.3s ease;
        }

        .guideline-card:hover .guideline-icon {
          transform: rotate(360deg) scale(1.1);
        }
      `}</style>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          {/* <div 
            className="inline-flex items-center gap-2 mb-5 px-5 py-2 bg-gradient-to-r from-blue-50 to-orange-50 border rounded-full"
            style={{ 
              borderColor: 'rgba(0, 123, 255, 0.2)',
              animation: 'fadeInUp 0.5s ease-out'
            }}
          >
            <HiSparkles className="text-xl" style={{ color: '#007BFF' }} />
            <span 
              className="text-xs font-semibold tracking-wider uppercase" 
              style={{ color: '#2C2C2C' }}
            >
              PAYMENT TERMS
            </span>
            <HiSparkles className="text-xl" style={{ color: '#FF7F00' }} />
          </div> */}

          <h1
            className="text-3xl md:text-5xl font-bold mb-4 leading-tight"
            style={{
              fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif",
              color: '#2C2C2C',
              animation: 'fadeInUp 0.6s ease-out 0.1s backwards'
            }}
          >
            Fee Payment <span style={{ color: '#007BFF' }}>Guidelines</span>
          </h1>

          <div
            className="flex items-center justify-center gap-3 mt-5"
            style={{ animation: 'fadeInUp 0.6s ease-out 0.2s backwards' }}
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

        {/* Guidelines Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {guidelines.map((item, index) => {
            const isLast = index === guidelines.length - 1;
            const isOdd = guidelines.length % 2 !== 0;

            return (
              <div
                key={index}
                className={`relative ${isLast && isOdd ? "md:col-span-2 md:mx-auto md:w-full md:max-w-lg" : ""
                  }`}
                style={{ animation: `fadeInUp 0.6s ease-out ${0.3 + index * 0.1}s backwards` }}
              >
                <div className="relative h-full bg-white rounded-2xl p-6 lg:p-8 border border-gray-200/60 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center min-h-[200px] guideline-card">
                  {/* Accent Bar */}
                  <div
                    className={`absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-gradient-to-r ${item.color}`}
                  />

                  {/* Corner Decorations */}
                  <div
                    className="absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 rounded-tl-2xl opacity-30"
                    style={{ borderColor: index % 2 === 0 ? '#007BFF' : '#FF7F00' }}
                  />
                  <div
                    className="absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 rounded-br-2xl opacity-30"
                    style={{ borderColor: index % 2 === 0 ? '#FF7F00' : '#007BFF' }}
                  />

                  {/* Icon Badge */}
                  <div
                    className={`guideline-icon flex-shrink-0 w-14 h-14 lg:w-16 lg:h-16 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white text-2xl mb-6 shadow-lg`}
                  >
                    {item.icon}
                  </div>

                  {/* Number Badge */}
                  <div
                    className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-md"
                    style={{ background: `linear-gradient(135deg, ${index % 2 === 0 ? '#007BFF' : '#FF7F00'}, ${index % 2 === 0 ? '#80C8F7' : '#FFCD00'})` }}
                  >
                    {index + 1}
                  </div>

                  {/* Description */}
                  <div className="text-center">
                    <p
                      className="text-base md:text-lg font-medium leading-relaxed"
                      style={{
                        fontFamily: "'Inter', -apple-system, system-ui, sans-serif",
                        color: 'rgba(44, 44, 44, 0.85)'
                      }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Info Section */}
        <div
          className="relative group"
          style={{ animation: 'fadeInUp 0.6s ease-out 0.9s backwards' }}
        >
          <div className="relative bg-white rounded-2xl p-8 border border-gray-200/60 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
            {/* Accent Bar */}
            <div
              className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl"
              style={{ background: 'linear-gradient(to right, #007BFF, #FF7F00)' }}
            />

            <div className="flex items-center justify-center gap-3 mb-4 mt-2">
              <HiSparkles className="text-2xl" style={{ color: '#007BFF' }} />
              <h3
                className="text-2xl md:text-3xl font-bold"
                style={{
                  fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif",
                  color: '#2C2C2C'
                }}
              >
                Need Assistance?
              </h3>
              <HiSparkles className="text-2xl" style={{ color: '#FF7F00' }} />
            </div>
            <p
              className="text-lg mb-6"
              style={{
                fontFamily: "'Inter', -apple-system, system-ui, sans-serif",
                color: 'rgba(44, 44, 44, 0.7)'
              }}
            >
              Contact our finance department for any payment-related queries
            </p>
            <Link href="/contact">
              <button
                className="cta-button px-8 py-3 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:scale-105 active:scale-95"
                style={{
                  background: "linear-gradient(135deg, #007BFF, #FF7F00)",
                  fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif",
                }}
              >
                Contact Finance Team →
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Additional CSS for CTA Button */}
      <style jsx>{`
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
