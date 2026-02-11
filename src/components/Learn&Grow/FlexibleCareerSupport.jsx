"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

const FlexibleCareerSupport = () => {
  return (
    <div className="bg-slate-50">
      {/* ================= DESKTOP ================= */}
      <div className="hidden lg:block py-20">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
                  Career Success
                </span>
                <h2 className="text-4xl lg:text-5xl font-bold text-black mb-4">
                  Flexible Career Support
                </h2>
                <p className="text-lg text-slate-600">
                  Structured guidance and placement support designed to move you
                  confidently into your professional career.
                </p>
              </div>

              {/* Features List */}
              <div className="space-y-4">
                {[
                  "Personalized career coaching",
                  "Mock interviews & workshops",
                  "Direct access to industry jobs",
                  "Resume building & optimization"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg transition-all"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl blur-3xl opacity-30" />
              <div className="relative">
                <Image
                  src="/path-to-left-image2.svg"
                  alt="Career Support"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-2xl"
                />
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-20 bg-white rounded-3xl p-10 shadow-lg border border-slate-200">
            <h3 className="text-3xl font-bold text-slate-900 mb-4">
              <span className="text-blue-600">NEXCORE</span> INSTITUTE OF TECHNOLOGY — A Clear Path Forward
            </h3>
            <p className="text-xl text-slate-600 max-w-3xl">
              With exit points tailored to your goals, our{" "}
              <span className="font-semibold text-orange-600">NSQF-certified</span>{" "}
              program offers flexibility and long-term career support.
            </p>
          </div>
        </div>
      </div>

      {/* ================= MOBILE ================= */}
      <div className="block lg:hidden py-16 px-6">
        
        {/* Badge */}
        <div className="text-center mb-6">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
            Career Success
          </span>
        </div>

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-black mb-3">
            Flexible Career Support
          </h2>
          <p className="text-slate-600">
            From training to placement, we guide you every step
          </p>
        </div>

        {/* Image */}
        <div className="mb-10">
          <div className="relative bg-white rounded-2xl p-4 shadow-lg">
            <Image
              src="/path-to-left-image2.svg"
              alt="Career Support"
              width={400}
              height={300}
              className="w-full h-auto rounded-xl"
            />
          </div>
        </div>

        {/* Features */}
        <div className="space-y-3 mb-10">
          {[
            { title: "Personalized Coaching", color: "blue" },
            { title: "Mock Interviews & Workshops", color: "orange" },
            { title: "Direct Access to Industry Jobs", color: "slate" }
          ].map((item, index) => (
            <div
              key={index}
              className={`flex items-center gap-3 p-4 rounded-xl border-2 ${
                item.color === 'blue' 
                  ? 'bg-blue-50 border-blue-200' 
                  : item.color === 'orange'
                  ? 'bg-orange-50 border-orange-200'
                  : 'bg-slate-50 border-slate-200'
              }`}
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                item.color === 'blue'
                  ? 'bg-blue-600'
                  : item.color === 'orange'
                  ? 'bg-orange-600'
                  : 'bg-slate-600'
              }`}>
                <span className="text-white font-bold">{index + 1}</span>
              </div>
              <span className="font-semibold text-slate-900">{item.title}</span>
            </div>
          ))}
        </div>

        {/* Bottom Card */}
        <div className="bg-white rounded-2xl p-6 shadow-lg mb-8">
          <h3 className="text-xl font-bold text-slate-900 mb-3">
            <span className="text-blue-600">NEXCORE</span> INSTITUTE OF TECHNOLOGY
          </h3>
          <p className="text-slate-600 mb-4">
            Our{" "}
            <span className="font-semibold text-orange-600">NSQF-certified</span>{" "}
            program offers flexibility and long-term career support tailored to your goals.
          </p>
        </div>

        {/* CTA */}
        <Link
          href="/contact"
          className="flex items-center justify-center gap-2 w-full px-8 py-4 bg-blue-600 text-white font-semibold rounded-xl shadow-lg"
        >
          Get Started
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  );
};

export default FlexibleCareerSupport;