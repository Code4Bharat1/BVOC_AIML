"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";
import {
  FaFacebookF, FaInstagram, FaLinkedinIn,
  FaYoutube, FaWhatsapp, FaArrowRight,
  FaBrain, FaPalette, FaCheckCircle
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const socialLinks = [
  { icon: FaFacebookF,  url: "https://www.facebook.com/profile.php?id=61585525156166",                                  label: "Facebook"  },
  { icon: FaInstagram,  url: "https://www.instagram.com/nexcoreinstitute?igsh=eDF4NHR3ZG50NWE0",                       label: "Instagram" },
  { icon: FaLinkedinIn, url: "https://www.linkedin.com/school/nexcore-institute-of-technology-nit/posts/?feedView=all", label: "LinkedIn"  },
  { icon: FaYoutube,    url: "https://www.youtube.com/@NexcoreInstitute",                                               label: "YouTube"   },
  { icon: FaWhatsapp,   url: "https://wa.me/919594402822",                                                             label: "WhatsApp"  },
];

const programs = [
  {
    emoji: "🤖",
    icon: FaBrain,
    name: "Bachelor of Data Science & Artificial Intelligence",
    shortName: "Data Science & AI",
    badge: "B.Voc · 3 Years · Online / Offline",
    borderColor: "border-blue-100",
    textColor: "text-blue-600",
    iconBg: "bg-blue-100",
  },
  {
    emoji: "🎨",
    icon: FaPalette,
    name: "Bachelor of Multimedia & Animation",
    shortName: "Multimedia & Animation",
    badge: "B.Voc · 3 Years · Offline",
    borderColor: "border-purple-100",
    textColor: "text-purple-600",
    iconBg: "bg-purple-100",
  },
];

const qualifications = ["10th Pass", "12th Pass", "Graduate", "Post Graduate", "Other"];

/* ─────────────────────────────────────────
   REGISTRATION FORM (shown inside modal)
───────────────────────────────────────── */
const RegistrationForm = ({ onClose, onSuccess }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    studentName: "", whatsappNumber: "", parentsNumber: "",
    qualification: "", courseInterested: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleMobileChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length <= 10) setFormData({ ...formData, [e.target.name]: value });
  };

  const validateStep1 = () =>
    formData.studentName &&
    formData.whatsappNumber.length === 10 &&
    formData.parentsNumber.length === 10;

  const sendWhatsApp = () => {
    const msg = `*New Registration - Nexcore Institute*\n\n*Student Details:*\n Name: ${formData.studentName}\n WhatsApp: +91 ${formData.whatsappNumber}\n Parent's Number: +91 ${formData.parentsNumber}\n Qualification: ${formData.qualification}\n Course Interested: ${formData.courseInterested}\n\n*Time:* ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}`;
    window.open(`https://wa.me/919594402822?text=${encodeURIComponent(msg)}`, "_blank");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendWhatsApp();
    onSuccess(formData);
  };

  return (
    <div className="flex flex-col h-full">
      {/* Close */}
      <button onClick={onClose} aria-label="Close"
        className="absolute top-3 right-3 z-20 w-9 h-9 bg-slate-100 hover:bg-slate-200 border-none rounded-full cursor-pointer text-slate-500 hover:text-slate-900 flex items-center justify-center transition-colors text-lg">
        <IoClose />
      </button>

      {/* Mobile logo */}
      <div className="md:hidden p-5 pb-0 flex justify-center">
        <Image src="/logo.png" alt="Nexcore" width={140} height={50}
          className="object-contain h-auto max-h-[46px]" priority />
      </div>

      {/* Scrollable form area */}
      <div className="flex-1 overflow-y-auto p-5 sm:p-6 md:p-10">
        <div className="mb-6">
          <h3 className="text-[20px] sm:text-[24px] font-black text-slate-900 mb-1">
            Register for Scholarship 🎓
          </h3>
          <p className="text-[12px] sm:text-[13px] text-slate-500">
            Fill in your details to apply for the ₹25,00,000 Scholarship Examination
          </p>
        </div>

        {/* Step indicator */}
        <div className="flex items-center gap-2 mb-7">
          {[1, 2].map((s) => (
            <div key={s} className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[12px] font-black transition-all ${currentStep >= s ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-400"}`}>
                {s}
              </div>
              {s < 2 && <div className={`h-0.5 w-14 sm:w-20 rounded-full transition-all ${currentStep > s ? "bg-slate-900" : "bg-slate-200"}`} />}
            </div>
          ))}
          <span className="ml-2 text-[11px] text-slate-400 font-medium">Step {currentStep} of 2</span>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Step 1 */}
          {currentStep === 1 && (
            <motion.div initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
              <div>
                <label className="block text-[12px] font-bold text-slate-700 mb-1.5">Student Name *</label>
                <input type="text" name="studentName" value={formData.studentName} onChange={handleChange}
                  className="w-full px-4 py-3 text-[13px] border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="Enter your full name" required />
              </div>
              <div>
                <label className="block text-[12px] font-bold text-slate-700 mb-1.5">WhatsApp Number *</label>
                <div className="flex gap-2">
                  <div className="w-14 px-3 py-3 bg-slate-100 border border-slate-200 rounded-xl flex items-center justify-center text-[13px] font-bold text-slate-600">+91</div>
                  <input type="tel" name="whatsappNumber" value={formData.whatsappNumber} onChange={handleMobileChange}
                    className="flex-1 px-4 py-3 text-[13px] border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    placeholder="9876543210" required maxLength="10" />
                </div>
              </div>
              <div>
                <label className="block text-[12px] font-bold text-slate-700 mb-1.5">Parent's Mobile Number *</label>
                <div className="flex gap-2">
                  <div className="w-14 px-3 py-3 bg-slate-100 border border-slate-200 rounded-xl flex items-center justify-center text-[13px] font-bold text-slate-600">+91</div>
                  <input type="tel" name="parentsNumber" value={formData.parentsNumber} onChange={handleMobileChange}
                    className="flex-1 px-4 py-3 text-[13px] border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    placeholder="9876543210" required maxLength="10" />
                </div>
              </div>
              <button type="button" onClick={() => validateStep1() && setCurrentStep(2)}
                disabled={!validateStep1()}
                className="w-full mt-2 px-6 py-3 bg-slate-900 text-white rounded-xl text-[13px] font-black hover:bg-slate-800 disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed transition-all">
                Next →
              </button>
            </motion.div>
          )}

          {/* Step 2 */}
          {currentStep === 2 && (
            <motion.div initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} className="space-y-4">
              <div>
                <label className="block text-[12px] font-bold text-slate-700 mb-1.5">Qualification *</label>
                <select name="qualification" value={formData.qualification} onChange={handleChange}
                  className="w-full px-4 py-3 text-[13px] border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-white" required>
                  <option value="">Select your qualification</option>
                  {qualifications.map((q) => <option key={q} value={q}>{q}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-[12px] font-bold text-slate-700 mb-1.5">Course Interested In *</label>
                <select name="courseInterested" value={formData.courseInterested} onChange={handleChange}
                  className="w-full px-4 py-3 text-[13px] border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-white" required>
                  <option value="">Select a course</option>
                  {programs.map((p) => <option key={p.name} value={p.name}>{p.name}</option>)}
                </select>
              </div>

              {/* Summary */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                <p className="text-[11px] font-black text-slate-400 tracking-wider uppercase mb-3">📋 Summary</p>
                <div className="space-y-1.5 text-[12px] text-slate-600">
                  {[
                    ["Name", formData.studentName],
                    ["WhatsApp", `+91 ${formData.whatsappNumber}`],
                    ["Parent's No.", `+91 ${formData.parentsNumber}`],
                    ["Qualification", formData.qualification],
                    ["Course", formData.courseInterested],
                  ].map(([label, val]) => val ? (
                    <div key={label} className="flex gap-2">
                      <span className="font-bold text-slate-700 w-24 flex-shrink-0">{label}:</span>
                      <span className="text-slate-600 break-all">{val}</span>
                    </div>
                  ) : null)}
                </div>
              </div>

              <div className="flex gap-2.5">
                <button type="button" onClick={() => setCurrentStep(1)}
                  className="flex-1 px-4 py-3 border-2 border-slate-200 text-slate-700 rounded-xl text-[13px] font-black hover:bg-slate-50 transition-all">
                  ← Back
                </button>
                <button type="submit"
                  disabled={!formData.qualification || !formData.courseInterested}
                  className="flex-1 px-4 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl text-[13px] font-black disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed transition-all">
                  Submit ✓
                </button>
              </div>
            </motion.div>
          )}
        </form>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────
   SUCCESS SCREEN
───────────────────────────────────────── */
const SuccessScreen = ({ formData, onClose }) => (
  <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
    className="p-6 sm:p-10 md:p-12 text-center relative">
    <button onClick={onClose} aria-label="Close"
      className="absolute top-3 right-3 w-9 h-9 bg-slate-100 hover:bg-slate-200 border-none rounded-full cursor-pointer text-slate-500 flex items-center justify-center text-lg">
      <IoClose />
    </button>
    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}
      transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
      className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
      <FaCheckCircle className="text-green-500 text-4xl" />
    </motion.div>
    <h3 className="text-[22px] sm:text-[26px] font-black text-slate-900 mb-3">Registration Successful!</h3>
    <p className="text-[13px] sm:text-[14px] text-slate-500 mb-6">
      Thank you, <strong className="text-slate-800">{formData.studentName}</strong>! Your application has been submitted.
    </p>
    <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 mb-6 text-left max-w-sm mx-auto">
      <p className="text-[11px] font-black text-slate-400 tracking-wider uppercase mb-3">📧 What's Next?</p>
      <ul className="space-y-2 text-[12px] text-slate-600">
        <li>• We'll contact you on +91 {formData.whatsappNumber} within 24 hours</li>
        <li>• Course details for <strong>{formData.courseInterested?.split(" ").slice(0,3).join(" ")}…</strong> will be shared</li>
        <li>• Check your WhatsApp for admission process updates</li>
      </ul>
    </div>
    <button onClick={onClose}
      className="px-8 py-3 bg-slate-900 text-white rounded-xl text-[13px] font-black hover:bg-slate-800 transition-all">
      Close
    </button>
    <p className="text-[10px] text-slate-400 mt-3">This window will close automatically in 5 seconds</p>
  </motion.div>
);

/* ─────────────────────────────────────────
   MAIN SCHOLARSHIP POPUP
───────────────────────────────────────── */
const ScholarshipPopup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [view, setView] = useState("info"); // "info" | "form" | "success"
  const [submittedData, setSubmittedData] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    setShowPopup(false);
    setView("info");
    const t = setTimeout(() => setShowPopup(true), 2000);
    return () => clearTimeout(t);
  }, [pathname]);

  const handleClose = () => {
    setShowPopup(false);
    setTimeout(() => setView("info"), 400);
  };

  const handleSuccess = (data) => {
    setSubmittedData(data);
    setView("success");
    setTimeout(handleClose, 5000);
  };

  return (
    <>
      <style>{`
        @keyframes pulseRing {
          0%   { transform: scale(1);   opacity: 0.8; }
          100% { transform: scale(2.8); opacity: 0;   }
        }
        @keyframes floatY {
          0%, 100% { transform: translateY(0px);  }
          50%      { transform: translateY(-7px); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        .pulse-dot { position: relative; display: flex; align-items: center; justify-content: center; }
        .pulse-dot::before {
          content: ''; position: absolute; inset: -4px; border-radius: 50%;
          border: 1.5px solid #dc2626; animation: pulseRing 1.8s ease-out infinite;
        }
        .float-box { animation: floatY 3.5s ease-in-out infinite; }
        .popup-scroll {
          scrollbar-width: thin; scrollbar-color: #e2e8f0 transparent;
          overflow-y: auto; -webkit-overflow-scrolling: touch;
        }
        .popup-scroll::-webkit-scrollbar { width: 3px; }
        .popup-scroll::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 99px; }
        .cta-shimmer {
          background: linear-gradient(110deg,#1d4ed8 0%,#2563eb 30%,#60a5fa 50%,#2563eb 70%,#1d4ed8 100%);
          background-size: 200% auto; animation: shimmer 2.8s linear infinite;
        }
        .cta-shimmer:hover { animation-play-state: paused; filter: brightness(1.1); }
        .amount-fluid { font-size: clamp(1.75rem, 8vw, 3rem); }
      `}</style>

      <AnimatePresence>
        {showPopup && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={handleClose}
              className="fixed inset-0 bg-slate-900/70 backdrop-blur-[3px] z-[9998]" />

            <div className="fixed inset-0 z-[9999] overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-3 sm:p-5">
                <motion.div
                  initial={{ scale: 0.88, opacity: 0, y: 36 }}
                  animate={{ scale: 1,    opacity: 1, y: 0  }}
                  exit={{ scale: 0.88, opacity: 0, y: 36 }}
                  transition={{ type: "spring", stiffness: 290, damping: 26 }}
                  onClick={(e) => e.stopPropagation()}
                  className="
                    relative w-full
                    max-w-[360px] sm:max-w-[580px] md:max-w-[860px]
                    flex flex-col md:flex-row
                    rounded-2xl md:rounded-3xl overflow-hidden
                    shadow-2xl border border-slate-200
                  "
                >

                  {/* ══════ LEFT SIDEBAR — md+ ══════ */}
                  <aside className="
                    hidden md:flex md:w-[280px] lg:w-[300px] flex-shrink-0 flex-col
                    bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900
                    p-6 relative overflow-hidden
                  ">
                    <div className="pointer-events-none absolute -top-16 -right-16 w-56 h-56 rounded-full bg-blue-900/40 blur-3xl" />
                    <div className="pointer-events-none absolute -bottom-8 -left-8  w-44 h-44 rounded-full bg-indigo-900/40 blur-2xl" />

                    {/* Logo */}
                    <div className="relative z-10 mb-5 w-full bg-white rounded-xl p-2.5 flex items-center justify-center shadow-lg">
                      <Image src="/logo.png" alt="Nexcore Institute of Technology"
                        width={200} height={80} className="object-contain w-full h-auto max-h-[68px]" priority />
                    </div>

                    {/* Live badge */}
                    <div className="relative z-10 flex items-center gap-3 mb-4">
                      <div className="pulse-dot"><div className="w-2 h-2 rounded-full bg-red-500 relative z-10" /></div>
                      <span className="text-red-400 text-[10px] font-black tracking-widest uppercase">Closing Soon</span>
                    </div>

                    <h2 className="relative z-10 text-white text-[21px] font-black leading-tight mb-2">
                      Scholarship<br />Program 2026
                    </h2>
                    <p className="relative z-10 text-slate-400 text-[11.5px] leading-relaxed mb-4">
                      Supporting deserving students to build a future in technology and creative arts.
                    </p>

                    <div className="relative z-10 h-px bg-white/10 mb-4" />

                    {/* Amount */}
                    <div className="float-box relative z-10 bg-blue-600 rounded-2xl px-4 py-4 mb-3 text-center shadow-lg shadow-blue-900/40">
                      <p className="text-[9px] font-black text-blue-200 tracking-[0.18em] mb-1 uppercase">Total Scholarship Pool</p>
                      <p className="text-[28px] font-black text-white leading-none tracking-tight">₹25,00,000/-</p>
                      <p className="text-[9px] text-blue-200 font-semibold mt-1.5">🏅 Twenty Five Lakh Rupees</p>
                    </div>

                    {/* Exam dates */}
                    <div className="relative z-10 bg-orange-500/10 border border-orange-500/30 rounded-xl px-3 py-2.5 mb-3 text-center">
                      <p className="text-[8px] font-black text-slate-400 tracking-widest mb-0.5 uppercase">Exam Dates</p>
                      <p className="text-[13px] font-black text-orange-400">27th, 28th, 29th March</p>
                      <p className="text-[8px] text-orange-500/80 font-medium mt-0.5">📝 Online · 90 Minutes</p>
                    </div>

                    {/* Programs */}
                    <div className="relative z-10 mb-3">
                      <p className="text-[8px] font-black text-slate-500 tracking-widest mb-2 uppercase">Eligible Programs</p>
                      <div className="flex flex-col gap-1.5">
                        {programs.map((p) => (
                          <div key={p.shortName}
                            className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-2.5 py-2">
                            <span className="text-sm flex-shrink-0">{p.emoji}</span>
                            <div>
                              <div className="text-[10px] font-black text-white leading-tight">{p.shortName}</div>
                              <div className="text-[8px] text-slate-400 font-semibold">{p.badge}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <span className="relative z-10 text-slate-600 text-[9px]">Nexcore · Since 2011</span>

                    {/* Social */}
                    <div className="relative z-10 mt-auto pt-4">
                      <p className="text-slate-500 text-[9px] mb-2 font-medium">Follow for updates</p>
                      <div className="flex gap-1.5 flex-wrap">
                        {socialLinks.map(({ icon: Icon, url, label }) => (
                          <a key={label} href={url} target="_blank" rel="noopener noreferrer"
                            onClick={handleClose} aria-label={label}
                            className="w-7 h-7 rounded-full flex items-center justify-center bg-white/10 text-slate-400 border border-white/10 hover:bg-blue-600 hover:text-white hover:scale-110 hover:border-blue-600 transition-all duration-200 text-[11px]">
                            <Icon />
                          </a>
                        ))}
                      </div>
                    </div>
                  </aside>

                  {/* ══════ RIGHT PANEL ══════ */}
                  <main className="flex-1 bg-white relative flex flex-col popup-scroll max-h-[90vh] md:max-h-[200vh]">

                    {/* ── INFO VIEW ── */}
                    {view === "info" && (
                      <>
                        <button onClick={handleClose} aria-label="Close"
                          className="absolute top-3 right-3 z-20 w-9 h-9 bg-slate-100 hover:bg-slate-200 border-none rounded-full cursor-pointer text-slate-500 hover:text-slate-900 flex items-center justify-center transition-colors text-lg">
                          <IoClose />
                        </button>

                        <div className="p-4 sm:p-5 md:p-8 flex flex-col gap-3 sm:gap-3.5">
                          {/* Mobile logo */}
                          <div className="md:hidden flex justify-center pt-0.5">
                            <Image src="/logo.png" alt="Nexcore" width={150} height={60}
                              className="object-contain h-auto max-h-[50px]" priority />
                          </div>

                          <p className="text-[10px] sm:text-[11px] font-black text-red-500 tracking-[0.14em] uppercase">
                            ⏰ Registration Closes 25th March
                          </p>

                          <div>
                            <h3 className="text-[17px] sm:text-[20px] md:text-[22px] font-black text-slate-900 leading-tight mb-1">
                              Scholarship Examination 2026 🎓
                            </h3>
                            <p className="text-[11px] sm:text-[13px] text-slate-500 leading-relaxed">
                              Register before <strong className="text-red-600">25th March</strong> to secure your scholarship!
                            </p>
                          </div>

                          {/* Amount */}
                          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                            className="bg-blue-600 rounded-xl sm:rounded-2xl px-4 py-4 sm:py-5 text-center shadow-lg shadow-blue-100">
                            <p className="text-[9px] sm:text-[10px] font-black text-blue-200 tracking-[0.18em] mb-1.5 uppercase">Total Scholarship Pool</p>
                            <div className="amount-fluid font-black text-white leading-none tracking-tight">₹25,00,000/-</div>
                            <p className="text-[10px] sm:text-[11px] text-blue-200 font-semibold mt-2">🏅 Twenty Five Lakh Rupees</p>
                          </motion.div>

                          {/* Programs */}
                          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
                            className="bg-slate-50 border border-slate-200 rounded-xl p-3 sm:p-4">
                            <p className="text-[9px] sm:text-[10px] font-black text-slate-400 tracking-[0.14em] uppercase mb-2.5">
                              🎓 Eligible B.Voc 3-Year Degree Programs
                            </p>
                            <div className="flex flex-col gap-2">
                              {programs.map((p) => (
                                <div key={p.name}
                                  className={`flex items-center gap-2.5 bg-white border ${p.borderColor} rounded-lg px-3 py-2.5 shadow-sm`}>
                                  <div className={`w-8 h-8 flex-shrink-0 rounded-lg ${p.iconBg} flex items-center justify-center text-base`}>
                                    {p.emoji}
                                  </div>
                                  <div className="min-w-0">
                                    <div className="text-[11px] sm:text-[12px] font-black text-slate-800 leading-tight">{p.name}</div>
                                    <div className={`text-[9px] ${p.textColor} font-semibold mt-0.5`}>{p.badge}</div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </motion.div>

                          {/* Exam + Deadline */}
                          <div className="grid grid-cols-2 gap-2 sm:gap-3">
                            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.48 }}
                              className="bg-orange-50 border border-orange-200 rounded-xl p-3 sm:p-4">
                              <div className="text-[8px] font-black text-orange-700 tracking-wider mb-1 uppercase">Exam Dates</div>
                              <div className="text-[13px] sm:text-[15px] font-black text-slate-900 mb-2 leading-tight">27–29<br />March</div>
                              <div className="space-y-0.5 text-[9px] sm:text-[10px] text-slate-600">
                                <div>✓ <span className="font-semibold">Online</span></div>
                                <div>✓ <span className="font-semibold">90 Min</span></div>
                                <div>✓ <span className="font-semibold">MCQ</span></div>
                              </div>
                              <div className="text-[8px] text-orange-600 font-bold mt-1.5">Any one date</div>
                            </motion.div>

                            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.52 }}
                              className="bg-red-50 border border-red-200 rounded-xl p-3 sm:p-4 flex flex-col justify-between">
                              <div>
                                <div className="text-[8px] font-black text-red-700 tracking-wider mb-1 uppercase">Reg. Closes</div>
                                <div className="text-[13px] sm:text-[15px] font-black text-slate-900 mb-1 leading-tight">25th March<br />2026</div>
                                <div className="text-[9px] text-red-600 font-semibold">⚠️ Limited time!</div>
                              </div>
                              <div className="mt-2 text-[8px] text-slate-400">Register now to secure your spot.</div>
                            </motion.div>
                          </div>

                          {/* CTAs */}
                          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.58 }}
                            className="flex flex-col sm:flex-row gap-2.5">
                            <button onClick={() => setView("form")}
                              className="flex-1 flex items-center justify-center gap-2 cta-shimmer text-white px-4 py-3 rounded-xl text-[12px] sm:text-[13px] font-black shadow-md hover:shadow-lg active:scale-95 transition-all border-none cursor-pointer">
                              Apply for Scholarship <FaArrowRight className="text-[10px]" />
                            </button>
                            <Link href="/scholarships" onClick={handleClose}
                              className="flex-1 flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 px-4 py-3 rounded-xl text-[12px] sm:text-[13px] font-black transition-all no-underline active:scale-95">
                              Learn More
                            </Link>
                          </motion.div>

                          <p className="text-center text-[9px] sm:text-[10px] text-slate-400">
                            NAAC A+ Accredited · UGC Recognized · Since 2011
                          </p>

                          {/* Mobile socials */}
                          <div className="md:hidden pt-3 border-t border-slate-100">
                            <p className="text-center text-slate-400 text-[10px] mb-2 font-medium">Follow us for updates</p>
                            <div className="flex justify-center gap-2 flex-wrap">
                              {socialLinks.map(({ icon: Icon, url, label }) => (
                                <a key={label} href={url} target="_blank" rel="noopener noreferrer"
                                  onClick={handleClose} aria-label={label}
                                  className="w-8 h-8 rounded-full flex items-center justify-center bg-slate-50 text-slate-500 border border-slate-200 active:bg-blue-600 active:text-white transition-all text-xs">
                                  <Icon />
                                </a>
                              ))}
                            </div>
                          </div>
                        </div>
                      </>
                    )}

                    {/* ── FORM VIEW ── */}
                    {view === "form" && (
                      <RegistrationForm onClose={handleClose} onSuccess={handleSuccess} />
                    )}

                    {/* ── SUCCESS VIEW ── */}
                    {view === "success" && (
                      <SuccessScreen formData={submittedData} onClose={handleClose} />
                    )}

                  </main>
                </motion.div>
              </div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default ScholarshipPopup;