"use client";

import Image from "next/image";
import { Briefcase, TrendingUp } from "lucide-react";

const InternAndPlacementCards = () => {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* ===== CARD 1 - Internship ===== */}
        <div className="grid lg:grid-cols-2 items-center gap-12">

          {/* Image */}
          <div className="relative">
            <div className="absolute -inset-3 bg-gradient-to-br from-blue-100 to-blue-50 rounded-3xl blur-2xl opacity-40" />
            <div className="relative bg-white rounded-2xl p-4 shadow-xl border border-slate-200">
              <div className="relative w-full h-80 rounded-xl overflow-hidden">
                <Image
                  src="/learn&grow/internship-image.svg"
                  alt="Internship"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
              <Briefcase className="w-4 h-4" />
              Before Graduation
            </div>

            <h3 className="text-4xl font-bold text-slate-900">
              <span className="text-blue-600">Internship</span> Experience
            </h3>

            <p className="text-lg text-slate-600 leading-relaxed">
              Gain practical exposure through real-world internships that help you
              build confidence, improve technical skills, and understand industry
              expectations before completing your degree.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <span className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium">
                Real Projects
              </span>
              <span className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium">
                Industry Mentors
              </span>
              <span className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium">
                Hands-on Learning
              </span>
            </div>
          </div>
        </div>

        {/* ===== CARD 2 - Placement ===== */}
        <div className="grid lg:grid-cols-2 items-center gap-12">

          {/* Content */}
          <div className="space-y-6 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold">
              <TrendingUp className="w-4 h-4" />
              After Completion
            </div>

            <h3 className="text-4xl font-bold text-slate-900">
              <span className="text-orange-600">Job Placement</span> Support
            </h3>

            <p className="text-lg text-slate-600 leading-relaxed">
              Receive structured placement support including resume preparation,
              interview training, and connections with hiring partners to help you
              start your professional career with confidence.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <span className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium">
                Resume Building
              </span>
              <span className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium">
                Mock Interviews
              </span>
              <span className="px-4 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium">
                Partner Network
              </span>
            </div>
          </div>

          {/* Image */}
          <div className="relative lg:order-2">
            <div className="absolute -inset-3 bg-gradient-to-br from-orange-100 to-orange-50 rounded-3xl blur-2xl opacity-40" />
            <div className="relative bg-white rounded-2xl p-4 shadow-xl border border-slate-200">
              <div className="relative w-full h-80 rounded-xl overflow-hidden">
                <Image
                  src="/SelectionPolicy/SelectionPolicy6.png"
                  alt="Placement"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default InternAndPlacementCards;