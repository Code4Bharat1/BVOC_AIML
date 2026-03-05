'use client';
import { useEffect, useState } from 'react';
import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import {
  FaWifi,
  FaUsers,
  FaCheckCircle,
  FaArrowRight,
  FaWhatsapp,
  FaMobileAlt,
  FaGraduationCap,
  FaLaptopCode,
} from 'react-icons/fa';
import { HiLightningBolt, HiSparkles } from 'react-icons/hi';
import { MdNetworkCheck, MdSpeed, MdSecurity } from 'react-icons/md';

import Image from 'next/image';
import Link from 'next/link';

const benefits = [
  {
    icon: MdSpeed,
    title: 'High-Speed Internet',
    desc: 'Blazing fast Jio fiber connectivity across the entire campus for seamless learning.',
    color: '#0066FF',
  },
  {
    icon: MdNetworkCheck,
    title: '5G Ready Campus',
    desc: 'Future-ready 5G infrastructure enabling IoT labs, cloud computing, and real-time data work.',
    color: '#00B4D8',
  },
  {
    icon: FaLaptopCode,
    title: 'Digital Learning Tools',
    desc: "Access to Jio's suite of digital education platforms and cloud-based learning resources.",
    color: '#0077B6',
  },
  {
    icon: MdSecurity,
    title: 'Secure Network',
    desc: 'Enterprise-grade cybersecurity ensuring safe browsing and data protection for all students.',
    color: '#023E8A',
  },
  {
    icon: FaMobileAlt,
    title: 'Student SIM Benefits',
    desc: 'Special Jio SIM offers for enrolled students with discounted data and calling plans.',
    color: '#0096C7',
  },
  {
    icon: FaWifi,
    title: 'Campus-Wide WiFi',
    desc: 'Zero dead zones — seamless connectivity in classrooms, labs, library, and common areas.',
    color: '#48CAE4',
  },
];

const stats = [
  { value: '1 Gbps', label: 'Campus Speed', icon: MdSpeed },
  { value: '100%', label: 'Coverage', icon: FaWifi },
  { value: '500+', label: 'Connected Devices', icon: FaMobileAlt },
  { value: '24/7', label: 'Network Support', icon: MdNetworkCheck },
];

const highlights = [
  'Jio Fiber connected classrooms & smart labs',
  'Free Wi-Fi access for all enrolled students',
  'Jio Meet integration for hybrid lectures',
  'JioCloud storage for academic resources',
  'Priority bandwidth for exam portals',
  'Dedicated IT helpdesk powered by Jio',
];

export default function JioPage() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState([]);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    benefits.forEach((_, i) => {
      setTimeout(() => setVisible((p) => [...p, i]), 150 + i * 100);
    });
  }, []);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#F0F7FF] relative overflow-hidden">
        {/* Dot pattern */}
        <div
          className="fixed inset-0 pointer-events-none z-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'radial-gradient(circle, #0066FF 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />

        {/* Corner glows */}
        <div
          className="fixed -top-32 -left-32 w-96 h-96 rounded-full pointer-events-none z-0"
          style={{
            background:
              'radial-gradient(circle, rgba(0,102,255,0.1), transparent 70%)',
          }}
        />
        <div
          className="fixed -bottom-24 -right-24 w-80 h-80 rounded-full pointer-events-none z-0"
          style={{
            background:
              'radial-gradient(circle, rgba(0,180,216,0.08), transparent 70%)',
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
                'linear-gradient(135deg, #0050CC 0%, #0077FF 50%, #00B4D8 100%)',
            }}
          >
            {/* Grid overlay */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
              }}
            />
            {/* Big faded icon */}
            <FaWifi
              className="absolute -right-10 top-10 text-white opacity-[0.06]"
              style={{ fontSize: 280 }}
            />

            <div className="max-w-5xl mx-auto relative z-10">
              <div className="inline-flex items-center gap-2 bg-white/20 border border-white/30 rounded-full px-4 py-1.5 text-[11px] font-bold text-white tracking-widest uppercase mb-6">
                <HiSparkles /> Industry Partnership
              </div>

              {/* Jio + Nexcore logos */}
              <div className="flex items-center gap-4 mb-6 flex-wrap">
                <div className="bg-white rounded-2xl px-5 py-3 shadow-lg flex items-center gap-2">
                  <span className="text-blue-700 font-black text-2xl tracking-tight">
                    JIO
                  </span>
                  <span className="text-blue-700 font-black text-xl">Jio</span>
                </div>
                <span className="text-white/60 text-2xl font-light">×</span>
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
                Powered by
                <br />
                <span className="text-blue-200">Jio Connectivity</span>
              </h1>
              <p className="text-white/70 text-base sm:text-lg font-medium mb-8 max-w-lg">
                Nexcore's strategic partnership with Reliance Jio brings
                cutting-edge digital infrastructure directly to our campus —
                enabling smarter, faster, and better-connected learning.
              </p>

              {/* Stats */}
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
            {/* ── BENEFITS GRID ── */}
            <div className="mb-12">
              <h2 className="text-gray-800 text-2xl font-black mb-1 flex items-center gap-2">
                <HiLightningBolt className="text-blue-500" /> What Jio Brings to
                Campus
              </h2>
              <p className="text-gray-400 text-sm mb-7">
                World-class digital infrastructure for next-gen learning
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {benefits.map((b, i) => {
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
                        className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 shadow-sm"
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
                  <span className="w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center">
                    <FaCheckCircle className="text-blue-500 text-sm" />
                  </span>
                  Key Highlights
                </h3>
                <ul className="flex flex-col gap-3">
                  {highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-3 text-sm text-gray-600"
                    >
                      <FaCheckCircle className="text-blue-500 mt-0.5 flex-shrink-0 text-xs" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              {/* About the partnership */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-500 rounded-2xl p-6 shadow-lg text-white relative overflow-hidden">
                <div className="absolute -right-8 -bottom-8 opacity-10">
                  <FaWifi style={{ fontSize: 160 }} />
                </div>
                <span className="inline-block text-3xl font-black tracking-tight text-white mb-4">
                  JIO
                </span>
                <h3 className="font-black text-xl mb-3">
                  About the Partnership
                </h3>
                <p className="text-white/80 text-sm leading-relaxed mb-5">
                  Nexcore Institute of Technology has partnered with Reliance
                  Jio to create a future-ready, digitally connected campus. This
                  collaboration ensures students have access to the same
                  enterprise-grade connectivity used by top tech companies.
                </p>
                <div className="flex items-center gap-2 text-white/60 text-xs">
                  <FaGraduationCap />
                  <span>Benefiting 500+ students every year</span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div
              className="rounded-2xl p-8 sm:p-10 text-center border border-blue-100 relative overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #EFF6FF, #DBEAFE)',
              }}
            >
              <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage:
                    'repeating-linear-gradient(45deg, #0066FF 0, #0066FF 1px, transparent 0, transparent 50%)',
                  backgroundSize: '16px 16px',
                }}
              />
              <span className="inline-block text-4xl font-black tracking-tight text-blue-600 mb-3 relative z-10">
                JIO
              </span>
              <h3 className="text-gray-800 text-2xl font-black mb-2 relative z-10">
                Interested in Our Digital Campus?
              </h3>
              <p className="text-gray-500 text-sm mb-6 max-w-md mx-auto relative z-10">
                Come visit Nexcore and experience the Jio-powered smart campus
                firsthand.
              </p>
              <a
                href="https://wa.me/9892398976?text=Hi%2C%20I%20want%20to%20know%20more%20about%20Nexcore%27s%20Jio%20partnership%20and%20campus%20facilities."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-white font-bold text-sm px-8 py-3.5 rounded-xl no-underline hover:opacity-90 hover:scale-105 transition-all duration-200 relative z-10"
                style={{
                  background: 'linear-gradient(135deg, #0066FF, #00B4D8)',
                  boxShadow: '0 8px 24px rgba(0,102,255,0.3)',
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
