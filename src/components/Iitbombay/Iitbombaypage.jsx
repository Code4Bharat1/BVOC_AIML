'use client';
import { useEffect, useState } from 'react';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import {
  FaGraduationCap,
  FaFlask,
  FaUsers,
  FaCheckCircle,
  FaWhatsapp,
  FaLaptopCode,
  FaMedal,
  FaTrophy,
} from 'react-icons/fa';
import { HiLightningBolt, HiSparkles, HiAcademicCap } from 'react-icons/hi';
import { MdScience, MdBiotech, MdOutlineEmojiEvents } from 'react-icons/md';
import { GiMicroscope, GiTeacher } from 'react-icons/gi';
import { BsBuilding, BsStarFill } from 'react-icons/bs';

const programs = [
  {
    icon: FaLaptopCode,
    title: 'Joint Workshops',
    desc: 'Monthly hands-on technical workshops co-conducted by IIT Bombay faculty and industry experts.',
    color: '#6B21A8',
  },
  {
    icon: MdScience,
    title: 'Research Exposure',
    desc: 'Selected Nexcore students get research lab visits and project collaborations at IIT Bombay.',
    color: '#7C3AED',
  },
  {
    icon: GiTeacher,
    title: 'Guest Lectures',
    desc: 'Regular guest lectures from IIT Bombay professors covering advanced engineering topics.',
    color: '#5B21B6',
  },
  {
    icon: FaFlask,
    title: 'Lab Access Program',
    desc: 'Students can access specialized IIT Bombay labs for final year projects and internships.',
    color: '#4C1D95',
  },
  {
    icon: HiAcademicCap,
    title: 'Mentorship Program',
    desc: '1-on-1 mentorship from IIT Bombay alumni working in top product companies and research roles.',
    color: '#7C3AED',
  },
  {
    icon: MdBiotech,
    title: 'Innovation Challenges',
    desc: "Participate in IIT Bombay's Techfest and E-Summit representing Nexcore Institute.",
    color: '#6D28D9',
  },
];

const stats = [
  { value: 'IIT', label: 'Bombay Collaboration', icon: HiAcademicCap },
  { value: '12+', label: 'Joint Workshops/Year', icon: MdOutlineEmojiEvents },
  { value: '50+', label: 'Student Beneficiaries', icon: FaUsers },
  { value: '3', label: 'Research Projects', icon: GiMicroscope },
];

const highlights = [
  "Access to IIT Bombay's world-class research facilities",
  'Certification co-signed by IIT Bombay for select programs',
  'Annual industry immersion week at IIT Bombay campus',
  'IIT Bombay alumni mentors available to Nexcore students',
  'Collaborative final-year project guidance',
  'Priority referrals for IIT Bombay incubation programs',
];

const timeline = [
  {
    year: '2022',
    event: 'Partnership MoU signed between Nexcore & IIT Bombay',
  },
  {
    year: '2023',
    event: 'First batch of students visited IIT Bombay research labs',
  },
  {
    year: '2024',
    event: 'Joint certification program launched for B.Voc students',
  },
  { year: '2025', event: "Nexcore team participated in IIT Bombay's Techfest" },
];

export default function IITBombayPage() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState([]);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    programs.forEach((_, i) => {
      setTimeout(() => setVisible((p) => [...p, i]), 150 + i * 100);
    });
  }, []);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#FAF5FF] relative overflow-hidden">
        {/* Dot pattern */}
        <div
          className="fixed inset-0 pointer-events-none z-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'radial-gradient(circle, #7C3AED 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />
        <div
          className="fixed -top-32 -left-32 w-96 h-96 rounded-full pointer-events-none z-0"
          style={{
            background:
              'radial-gradient(circle, rgba(124,58,237,0.09), transparent 70%)',
          }}
        />
        <div
          className="fixed -bottom-24 -right-24 w-80 h-80 rounded-full pointer-events-none z-0"
          style={{
            background:
              'radial-gradient(circle, rgba(109,40,217,0.07), transparent 70%)',
          }}
        />

        <div
          className="relative z-10"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? 'translateY(0)' : 'translateY(16px)',
            transition: 'opacity 0.5s ease, transform 0.5s ease',
          }}
        >
          {/* ── HERO ── */}
          <div
            className="relative overflow-hidden pt-32 pb-16 px-5"
            style={{
              background:
                'linear-gradient(135deg, #3B0764 0%, #6D28D9 50%, #7C3AED 100%)',
            }}
          >
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
              }}
            />
            <HiAcademicCap
              className="absolute -right-10 top-10 text-white opacity-[0.06]"
              style={{ fontSize: 280 }}
            />

            <div className="max-w-5xl mx-auto relative z-10">
              <div className="inline-flex items-center gap-2 bg-white/20 border border-white/30 rounded-full px-4 py-1.5 text-[11px] font-bold text-white tracking-widest uppercase mb-6">
                <BsStarFill className="text-yellow-300" /> Academic Excellence
                Partnership
              </div>

              {/* Logos */}
              <div className="flex items-center gap-4 mb-6 flex-wrap">
                <div className="bg-white rounded-2xl px-5 py-3 shadow-lg">
                  <p className="text-purple-800 font-black text-lg leading-none">
                    IIT
                  </p>
                  <p className="text-purple-600 font-bold text-sm">Bombay</p>
                </div>
                <span className="text-white/50 text-2xl font-light">×</span>
                <div className="bg-white/15 border border-white/30 rounded-2xl px-4 py-3">
                  <span className="text-white font-black text-lg tracking-tight">
                    NEXCORE
                  </span>
                  <span className="text-white/60 text-xs block">
                    Institute of Technology
                  </span>
                </div>
              </div>

              <h1 className="text-5xl sm:text-6xl font-black text-white tracking-tight leading-none mb-4">
                Excellence Through
                <br />
                <span className="text-purple-200">IIT Collaboration</span>
              </h1>
              <p className="text-white/70 text-base sm:text-lg font-medium mb-8 max-w-lg">
                Nexcore's academic partnership with IIT Bombay — one of India's
                premier institutions — gives our students access to world-class
                research, mentorship, and technical exposure.
              </p>

              <div className="flex flex-wrap gap-3">
                {stats.map(({ value, label, icon: Icon }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2 bg-white/15 border border-white/25 rounded-xl px-4 py-2.5 backdrop-blur-sm"
                  >
                    <Icon className="text-white text-sm" />
                    <span className="text-white font-black text-lg leading-none">
                      {value}
                    </span>
                    <span className="text-white/60 text-xs font-semibold">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
            {/* ── PROGRAMS ── */}
            <div className="mb-12">
              <h2 className="text-gray-800 text-2xl font-black mb-1 flex items-center gap-2">
                <HiLightningBolt className="text-purple-500" /> What This
                Partnership Offers
              </h2>
              <p className="text-gray-400 text-sm mb-7">
                Exclusive academic benefits for Nexcore students
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {programs.map((b, i) => {
                  const Icon = b.icon;
                  return (
                    <div
                      key={b.title}
                      className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200"
                      style={{
                        opacity: visible.includes(i) ? 1 : 0,
                        transform: visible.includes(i)
                          ? 'translateY(0)'
                          : 'translateY(16px)',
                        transition: `opacity 0.4s ease ${i * 80}ms, transform 0.4s ease ${i * 80}ms`,
                      }}
                    >
                      <div
                        className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                        style={{ background: `${b.color}15`, color: b.color }}
                      >
                        <Icon className="text-xl" />
                      </div>
                      <h3 className="text-gray-800 font-bold text-base mb-2">
                        {b.title}
                      </h3>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        {b.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* ── 2-COL ── */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              {/* Highlights */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-gray-800 font-black text-lg mb-5 flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-purple-50 flex items-center justify-center">
                    <FaCheckCircle className="text-purple-500 text-sm" />
                  </span>
                  Key Benefits
                </h3>
                <ul className="flex flex-col gap-3">
                  {highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-3 text-sm text-gray-600"
                    >
                      <FaCheckCircle className="text-purple-400 mt-0.5 flex-shrink-0 text-xs" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Timeline */}
              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <h3 className="text-gray-800 font-black text-lg mb-5 flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-purple-50 flex items-center justify-center">
                    <MdOutlineEmojiEvents className="text-purple-500 text-sm" />
                  </span>
                  Partnership Journey
                </h3>
                <div className="relative pl-4">
                  <div className="absolute left-0 top-2 bottom-2 w-px bg-purple-100" />
                  {timeline.map((t, i) => (
                    <div key={t.year} className="relative mb-6 last:mb-0">
                      <div className="absolute -left-[17px] w-3 h-3 rounded-full border-2 border-purple-400 bg-white" />
                      <p className="text-purple-600 text-[11px] font-black tracking-widest mb-1">
                        {t.year}
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {t.event}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA */}
            <div
              className="rounded-2xl p-8 sm:p-10 text-center border border-purple-100 relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #F5F3FF, #EDE9FE)',
              }}
            >
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage:
                    'repeating-linear-gradient(45deg, #7C3AED 0, #7C3AED 1px, transparent 0, transparent 50%)',
                  backgroundSize: '16px 16px',
                }}
              />
              <FaMedal className="text-5xl mx-auto mb-3 text-purple-500 relative z-10" />
              <h3 className="text-gray-800 text-2xl font-black mb-2 relative z-10">
                Want to Know More?
              </h3>
              <p className="text-gray-500 text-sm mb-6 max-w-md mx-auto relative z-10">
                Talk to us about how the IIT Bombay collaboration can boost your
                academic journey at Nexcore.
              </p>
              <a
                href="https://wa.me/9892398976?text=Hi%2C%20I%20want%20to%20know%20more%20about%20Nexcore%27s%20IIT%20Bombay%20partnership%20program."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-white font-bold text-sm px-8 py-3.5 rounded-xl no-underline hover:opacity-90 hover:scale-105 transition-all duration-200 relative z-10"
                style={{
                  background: 'linear-gradient(135deg, #6D28D9, #7C3AED)',
                  boxShadow: '0 8px 24px rgba(109,40,217,0.3)',
                }}
              >
                <FaWhatsapp className="text-lg" /> Enquire on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
