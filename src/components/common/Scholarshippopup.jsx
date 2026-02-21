"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";
import {
  FaFacebookF, FaInstagram, FaLinkedinIn,
  FaYoutube, FaWhatsapp, FaArrowRight
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const socialLinks = [
  { icon: FaFacebookF,  url: "https://www.facebook.com/profile.php?id=61585525156166",                                   label: "Facebook"  },
  { icon: FaInstagram,  url: "https://www.instagram.com/nexcoreinstitute?igsh=eDF4NHR3ZG50NWE0",                        label: "Instagram" },
  { icon: FaLinkedinIn, url: "https://www.linkedin.com/school/nexcore-institute-of-technology-nit/posts/?feedView=all",  label: "LinkedIn"  },
  { icon: FaYoutube,    url: "https://www.youtube.com/@NexcoreInstitute",                                                label: "YouTube"   },
  { icon: FaWhatsapp,   url: "https://wa.me/919594402822",                                                              label: "WhatsApp"  },
];

const ScholarshipPopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setShowPopup(false);
    const t = setTimeout(() => setShowPopup(true), 2000);
    return () => clearTimeout(t);
  }, [pathname]);

  const handleClose = () => setShowPopup(false);

  return (
    <>
      <style>{`
        @keyframes pulseRing {
          0%   { transform: scale(1);   opacity: 0.7; }
          100% { transform: scale(2.4); opacity: 0;   }
        }
        @keyframes floatY {
          0%, 100% { transform: translateY(0);    }
          50%      { transform: translateY(-5px); }
        }
        .pulse-ring::before {
          content: '';
          position: absolute;
          inset: -5px;
          border-radius: 50%;
          border: 1.5px solid #0066cc;
          animation: pulseRing 2s ease-out infinite;
        }
        .float-animation {
          animation: floatY 3.5s ease-in-out infinite;
        }
      `}</style>

      <AnimatePresence>
        {showPopup && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleClose}
              className="fixed inset-0 bg-gray-900/60 backdrop-blur-sm z-[9999]"
            />

            {/* Modal Container */}
            <div className="fixed inset-0 z-[10000] flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
              <motion.div
                initial={{ scale: 0.88, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.88, opacity: 0, y: 50 }}
                transition={{ type: "spring", stiffness: 265, damping: 26 }}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-[780px] flex flex-col md:flex-row rounded-xl md:rounded-2xl overflow-hidden shadow-2xl my-auto"
              >
                {/* ══════════ LEFT PANEL (Hidden on Mobile) ══════════ */}
                <div className="hidden md:flex md:w-[300px] flex-shrink-0 bg-white border-r border-gray-200 p-6 flex-col relative overflow-hidden">
                  {/* Subtle background decoration */}
                  <div className="absolute top-[-60px] right-[-60px] w-[200px] h-[200px] bg-blue-50 rounded-full blur-3xl opacity-50" />

                  {/* ── LOGO — full brand logo, properly sized ── */}
                  <div className="relative z-10 mb-5 w-full">
                    <Image
                      src="/logo.png"
                      alt="Nexcore Institute of Technology"
                      width={240}
                      height={96}
                      className="object-contain w-full h-auto max-h-[88px]"
                      priority
                    />
                  </div>

                  {/* Live Badge */}
                  <div className="relative z-10 flex items-center gap-2 mb-4">
                    <div className="pulse-ring relative flex items-center justify-center">
                      <div className="w-2 h-2 bg-red-600 rounded-full relative z-10" />
                    </div>
                    <span className="text-red-600 text-[11px] font-bold tracking-wider">
                      REGISTRATION CLOSING SOON
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="relative z-10 text-gray-900 text-[21px] font-extrabold leading-tight mb-3">
                    Scholarship<br />Program 2026
                  </h2>

                  <p className="relative z-10 text-gray-600 text-xs leading-relaxed mb-5">
                    Supporting deserving students to build a future in technology and creative arts.
                  </p>

                  {/* Divider */}
                  <div className="relative z-10 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent my-4" />

                  {/* ── Amount box — no overlap, stacked layout ── */}
                  <div className="float-animation relative z-10 w-full bg-blue-50 border border-blue-200 rounded-2xl px-4 py-4 mb-5 text-center">
                    <p className="text-[10px] font-bold text-gray-400 tracking-widest mb-1.5 uppercase">
                      Total Scholarship Pool
                    </p>
                    <p className="text-[28px] font-black text-blue-600 leading-none tracking-tight">
                      ₹25,00,000/-
                    </p>
                    <p className="text-[10px] text-blue-500 font-semibold mt-1.5">
                      🏅 Twenty Five Lakh Rupees
                    </p>
                  </div>

                  {/* Exam Dates Box */}
                  <div className="relative z-10 w-full bg-orange-50 border border-orange-200 rounded-xl px-3 py-3 mb-4 text-center">
                    <p className="text-[9px] font-bold text-gray-400 tracking-wider mb-1 uppercase">
                      Exam Dates
                    </p>
                    <p className="text-sm font-extrabold text-orange-600 leading-tight">
                      27, 28, 29 March
                    </p>
                    <p className="text-[9px] text-orange-500 font-medium mt-1">
                      📝 Online • 90 Minutes
                    </p>
                  </div>

                  <span className="relative z-10 text-gray-500 text-[11px]">
                    Nexcore Institute of Technology • Since 2011
                  </span>

                  {/* Social Links */}
                  <div className="relative z-10 mt-auto pt-5">
                    <p className="text-gray-500 text-[11px] mb-2">Follow us for updates</p>
                    <div className="flex gap-2">
                      {socialLinks.map((s) => {
                        const Icon = s.icon;
                        return (
                          <a
                            key={s.label}
                            href={s.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={handleClose}
                            aria-label={s.label}
                            className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-100 text-gray-600 border border-gray-200 hover:bg-blue-600 hover:text-white hover:scale-110 transition-all text-xs"
                          >
                            <Icon />
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* ══════════ RIGHT PANEL (Full Width on Mobile) ══════════ */}
                <div className="flex-1 bg-white p-5 sm:p-6 md:p-7 flex flex-col relative overflow-y-auto max-h-[85vh] md:max-h-[90vh]">
                  {/* Close Button */}
                  <button
                    onClick={handleClose}
                    className="absolute top-3 right-3 sm:top-3.5 sm:right-3.5 w-8 h-8 bg-gray-100 hover:bg-gray-200 border-none rounded-full cursor-pointer text-gray-600 hover:text-gray-900 flex items-center justify-center transition-colors text-lg z-10"
                    aria-label="Close"
                  >
                    <IoClose />
                  </button>

                  {/* Mobile Logo */}
                  <div className="md:hidden mb-4 flex items-center justify-center">
                    <Image
                      src="/logo.png"
                      alt="Nexcore Institute of Technology"
                      width={180}
                      height={72}
                      className="object-contain h-auto max-h-[64px]"
                      priority
                    />
                  </div>

                  {/* Eyebrow */}
                  <p className="text-[11px] font-bold text-red-500 tracking-widest mb-2">
                    ⏰ REGISTRATION CLOSES 25 MARCH
                  </p>

                  {/* Title */}
                  <h3 className="text-xl sm:text-[22px] font-extrabold text-gray-900 leading-tight mb-2">
                    Scholarship Examination 2026 🎓
                  </h3>

                  <p className="text-xs sm:text-[13px] text-gray-600 leading-relaxed mb-4">
                    Register now for the Scholarship Examination. Registration closes on{" "}
                    <strong className="text-red-600">25 March</strong>. Don't miss out!
                  </p>

                  {/* ₹25,00,000/- Box — stacked, no overlap */}
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="bg-gradient-to-br from-blue-50 to-blue-50/50 border-2 border-blue-200 rounded-xl md:rounded-2xl p-4 sm:p-5 text-center mb-3"
                  >
                    <p className="text-[10px] sm:text-[11px] font-bold text-gray-400 tracking-wider mb-2 uppercase">
                      Total Scholarship Pool
                    </p>
                    <div className="text-[34px] sm:text-[40px] md:text-[44px] font-black leading-none text-blue-600 mb-1 tracking-tight">
                      ₹25,00,000/-
                    </div>
                    <p className="text-[11px] sm:text-xs text-blue-500 font-semibold mt-1">
                      🏅 Twenty Five Lakh Rupees
                    </p>
                    <p className="text-[10px] text-gray-400 mt-0.5">
                      Scholarship opportunities for deserving students
                    </p>
                  </motion.div>

                  {/* Exam Details Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.52 }}
                    className="bg-orange-50 border-2 border-orange-200 rounded-lg md:rounded-xl p-3 sm:p-4 mb-3"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 sm:w-11 sm:h-11 flex-shrink-0 bg-orange-100 border border-orange-300 rounded-lg flex items-center justify-center text-lg sm:text-xl">
                        📝
                      </div>
                      <div className="flex-1">
                        <div className="text-[9px] sm:text-[10px] font-bold text-orange-700 tracking-wider mb-0.5">
                          SCHOLARSHIP EXAMINATION
                        </div>
                        <div className="text-base sm:text-lg font-extrabold text-gray-900 mb-1">
                          27, 28, 29 March
                        </div>
                        <div className="text-[10px] sm:text-[11px] text-gray-600 space-y-0.5">
                          <div>✓ Mode: <span className="font-semibold">Online</span></div>
                          <div>✓ Duration: <span className="font-semibold">90 Minutes</span></div>
                          <div>✓ Pattern: <span className="font-semibold">MCQ-based</span></div>
                          <div className="text-orange-600 font-semibold mt-1">
                            Choose any one date to appear
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Registration Closing Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.58 }}
                    className="bg-red-50 border-2 border-red-200 rounded-lg md:rounded-xl p-3 sm:p-4 flex items-center gap-3 mb-4"
                  >
                    <div className="w-10 h-10 sm:w-11 sm:h-11 flex-shrink-0 bg-red-100 border border-red-300 rounded-lg flex items-center justify-center text-lg sm:text-xl">
                      ⏰
                    </div>
                    <div>
                      <div className="text-[9px] sm:text-[10px] font-bold text-red-700 tracking-wider mb-0.5">
                        REGISTRATION CLOSES
                      </div>
                      <div className="text-lg sm:text-xl font-extrabold text-gray-900">
                        25 March 2025
                      </div>
                      <div className="text-[10px] sm:text-[11px] text-red-600 font-semibold mt-0.5">
                        ⚠️ Limited time remaining — Register now!
                      </div>
                    </div>
                  </motion.div>

                  {/* CTA Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.62 }}
                    className="flex flex-col sm:flex-row gap-2.5 mb-3"
                  >
                    <Link
                      href="/scholarships"
                      onClick={handleClose}
                      className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-5 py-3 rounded-lg text-sm font-bold transition-all shadow-md hover:shadow-lg active:scale-95 no-underline"
                    >
                      Learn More <FaArrowRight className="text-xs" />
                    </Link>
                    <a
                      href="https://wa.me/919594402822?text=Hi%2C%20I%20want%20to%20register%20for%20the%20%E2%82%B925%20Lakh%20Scholarship%20Examination%20at%20Nexcore%20Institute."
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={handleClose}
                      className="flex-1 sm:flex-initial flex items-center justify-center gap-2 bg-green-50 hover:bg-green-600 text-green-600 hover:text-white px-4 sm:px-5 py-3 rounded-lg text-[13px] font-bold border-2 border-green-200 hover:border-green-600 transition-all active:scale-95 no-underline"
                    >
                      <FaWhatsapp className="text-sm" /> Register Now
                    </a>
                  </motion.div>

                  {/* Footer Text */}
                  <p className="text-center text-[10px] sm:text-[11px] text-gray-400">
                    NAAC A+ Accredited • UGC Recognized • Since 2011
                  </p>

                  {/* Mobile Social Links */}
                  <div className="md:hidden mt-4 pt-4 border-t border-gray-200">
                    <p className="text-center text-gray-500 text-[10px] mb-2">Follow us for updates</p>
                    <div className="flex justify-center gap-2">
                      {socialLinks.map((s) => {
                        const Icon = s.icon;
                        return (
                          <a
                            key={s.label}
                            href={s.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={handleClose}
                            aria-label={s.label}
                            className="w-8 h-8 rounded-full flex items-center justify-center bg-gray-100 text-gray-600 border border-gray-200 active:bg-blue-600 active:text-white transition-all text-xs"
                          >
                            <Icon />
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default ScholarshipPopup;