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
  { icon: FaWhatsapp,   url: "https://wa.me/919892398976",                                                              label: "WhatsApp"  },
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
          0%, 100% { transform: translateY(0);     }
          50%      { transform: translateY(-5px);  }
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
                <div className="hidden md:flex md:w-[290px] flex-shrink-0 bg-white border-r border-gray-200 p-6 flex-col relative overflow-hidden">
                  {/* Subtle background decoration */}
                  <div className="absolute top-[-60px] right-[-60px] w-[200px] h-[200px] bg-blue-50 rounded-full blur-3xl opacity-50" />

                  {/* Logo */}
                  <div className="relative z-10 mb-6 w-[76px] h-[76px] bg-white rounded-xl flex items-center justify-center overflow-hidden shadow-md border border-gray-100">
                    <Image 
                      src="/logo.png" 
                      alt="Nexcore" 
                      width={64} 
                      height={64} 
                      className="object-contain"
                      priority 
                    />
                  </div>

                  {/* Live Badge */}
                  <div className="relative z-10 flex items-center gap-2 mb-4">
                    <div className="pulse-ring relative flex items-center justify-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full relative z-10" />
                    </div>
                    <span className="text-blue-600 text-[11px] font-bold tracking-wider">
                      REGISTRATION NOW OPEN
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="relative z-10 text-gray-900 text-[21px] font-extrabold leading-tight mb-3">
                    Scholarship<br />Program 2025
                  </h2>
                  
                  <p className="relative z-10 text-gray-600 text-xs leading-relaxed mb-5">
                    Supporting deserving students to build a future in technology and creative arts.
                  </p>

                  {/* Divider */}
                  <div className="relative z-10 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent my-5" />

                  {/* ₹25L Floating Pill */}
                  <motion.div
                    className="float-animation relative z-10 inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-600 px-5 py-2.5 rounded-full font-extrabold text-base mb-5"
                  >
                    🏅 Total Pool: ₹25 Lakh
                  </motion.div>

                  <span className="relative z-10 text-gray-500 text-[11px]">
                    Nexcore Institute of Technology • Since 2011
                  </span>

                  {/* Social Links */}
                  <div className="relative z-10 mt-auto pt-6">
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

                  {/* Mobile Logo (Only visible on mobile) */}
                  <div className="md:hidden mb-4 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center overflow-hidden shadow-md border border-gray-100">
                      <Image 
                        src="/logo.png" 
                        alt="Nexcore" 
                        width={52} 
                        height={52} 
                        className="object-contain"
                        priority 
                      />
                    </div>
                  </div>

                  {/* Eyebrow */}
                  <p className="text-[11px] font-bold text-gray-400 tracking-widest mb-2">
                    ADMISSIONS NOW OPEN
                  </p>

                  {/* Title */}
                  <h3 className="text-xl sm:text-[22px] font-extrabold text-gray-900 leading-tight mb-2">
                    Registrations Started 🎉
                  </h3>
                  
                  <p className="text-xs sm:text-[13px] text-gray-600 leading-relaxed mb-4">
                    Apply for the 2025 Scholarship Program — started from{" "}
                    <strong className="text-blue-600">16 March 2025</strong>.{" "}
                    Limited seats available.
                  </p>

                  {/* ₹25 Lakh Box */}
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="bg-gradient-to-br from-blue-50 to-blue-50/50 border-2 border-blue-200 rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-6 text-center mb-3"
                  >
                    <p className="text-[10px] sm:text-[11px] font-bold text-gray-400 tracking-wider mb-1.5">
                      TOTAL SCHOLARSHIP POOL
                    </p>
                    <div className="text-[42px] sm:text-[48px] md:text-[52px] font-black leading-none text-blue-600 mb-1">
                      ₹25 Lakh
                    </div>
                    <p className="text-[11px] sm:text-xs text-gray-600">
                      Scholarship opportunities for deserving students
                    </p>
                  </motion.div>

                  {/* Registration Date Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.52 }}
                    className="bg-green-50 border-2 border-green-200 rounded-lg md:rounded-xl p-3 sm:p-4 flex items-center gap-3 mb-4"
                  >
                    <div className="w-10 h-10 sm:w-11 sm:h-11 flex-shrink-0 bg-green-100 border border-green-300 rounded-lg flex items-center justify-center text-lg sm:text-xl">
                      🗓️
                    </div>
                    <div>
                      <div className="text-[9px] sm:text-[10px] font-bold text-green-700 tracking-wider mb-0.5">
                        REGISTRATION STARTED FROM
                      </div>
                      <div className="text-lg sm:text-xl font-extrabold text-gray-900">
                        16 March 2025
                      </div>
                      <div className="text-[10px] sm:text-[11px] text-green-600 font-semibold mt-0.5">
                        ✓ Apply now — seats filling fast!
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
                      className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-5 py-3 rounded-lg text-sm font-bold transition-all shadow-md hover:shadow-lg active:scale-95"
                    >
                      Apply Now <FaArrowRight className="text-xs" />
                    </Link>
                    <a
                      href="https://wa.me/919594402822?text=Hi%2C%20I%20want%20to%20apply%20for%20the%20%E2%82%B925%20Lakh%20Scholarship%20at%20Nexcore%20Institute."
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={handleClose}
                      className="flex-1 sm:flex-initial flex items-center justify-center gap-2 bg-green-50 hover:bg-green-600 text-green-600 hover:text-white px-4 sm:px-5 py-3 rounded-lg text-[13px] font-bold border-2 border-green-200 hover:border-green-600 transition-all active:scale-95"
                    >
                      <FaWhatsapp className="text-sm" /> WhatsApp
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