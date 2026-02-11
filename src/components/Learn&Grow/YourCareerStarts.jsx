"use client";
import React from "react";
import { Users, TrendingUp } from "lucide-react";

const YourCareerStarts = () => {
  return (
    <section className="relative bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* ===== Heading ===== */}
        <div className="text-center mb-16 px-4">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-slate-900 mb-6">
            Your Career Starts With Us,{" "}
            <span className="text-blue-600">And We Stay With You</span> All The Way.
          </h2>

          <p className="mt-4 max-w-3xl mx-auto text-slate-600 text-lg">
            From classroom learning to real-world careers, we guide, mentor and
            prepare you for success at every stage of your professional journey.
          </p>
        </div>

        {/* ===== Cards ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Card 1 */}
          <div className="bg-slate-50 rounded-2xl p-8 border-2 border-slate-200 hover:border-blue-400 hover:shadow-xl transition-all duration-300">
            <div className="flex flex-col gap-5">

              <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-blue-100">
                <Users className="w-7 h-7 text-blue-600" />
              </div>

              <h3 className="text-2xl font-bold text-slate-900">
                Learn With Industry Mentors
              </h3>

              <p className="text-slate-600 leading-relaxed">
                Get trained by professionals who understand industry needs and
                help you build strong technical foundations with practical
                exposure.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-slate-50 rounded-2xl p-8 border-2 border-slate-200 hover:border-orange-400 hover:shadow-xl transition-all duration-300">
            <div className="flex flex-col gap-5">

              <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-orange-100">
                <TrendingUp className="w-7 h-7 text-orange-600" />
              </div>

              <h3 className="text-2xl font-bold text-slate-900">
                Career-Focused Support System
              </h3>

              <p className="text-slate-600 leading-relaxed">
                From internships to placements, resume building to interview
                preparation — we support your transition into the workforce.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default YourCareerStarts;