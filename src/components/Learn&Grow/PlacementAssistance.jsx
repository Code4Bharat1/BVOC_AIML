"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const PlacementAssistance = () => {
  return (
    <section
      aria-labelledby="placement-assistance-heading"
      className="relative w-full overflow-hidden px-6 py-20 mt-20 bg-slate-50"
    >
      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 items-center gap-12">

          {/* LEFT SIDE IMAGE */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-lg">

              {/* Decorative blur background */}
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-100 to-orange-100 rounded-3xl blur-2xl opacity-30" />

              {/* Image container */}
              <div className="relative bg-white rounded-2xl p-3 shadow-xl">
                <Image
                  src="/placement-card.png"
                  alt="Students receiving career guidance and placement assistance"
                  width={600}
                  height={350}
                  priority
                  className="w-full h-auto rounded-xl"
                />
              </div>

            </div>
          </div>

          {/* RIGHT SIDE CONTENT */}
          <div className="space-y-6">

            <header>
              {/* Badge */}
              <div className="inline-block mb-2">
                <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                  Career Support
                </span>
              </div>

              {/* Heading */}
              <h2
                id="placement-assistance-heading"
                className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight"
              >
                Placement Assistance:{" "}
                <span className="text-blue-600">
                  Your Path to Success
                </span>
              </h2>
            </header>

            {/* Description */}
            <p className="text-lg text-slate-600 leading-relaxed">
              At{" "}
              <strong className="text-slate-900">
                Nexcore Institute of Technology
              </strong>
              , we don't just teach — you{" "}
              <strong className="text-orange-600">intern</strong> and{" "}
              <strong className="text-amber-600">work</strong>. Our{" "}
              <strong className="text-slate-900">
                100% placement assistance
              </strong>{" "}
              ensures you're job-ready for the real world.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <article className="p-4 bg-white rounded-xl shadow-sm border border-slate-200">
                <div className="text-3xl font-bold text-blue-600 mb-1">
                  100%
                </div>
                <div className="text-sm text-slate-600">
                  Placement Support
                </div>
              </article>

              <article className="p-4 bg-white rounded-xl shadow-sm border border-slate-200">
                <div className="text-3xl font-bold text-orange-600 mb-1">
                  500+
                </div>
                <div className="text-sm text-slate-600">
                  Partner Companies
                </div>
              </article>
            </div>

            {/* CTA */}
            <div className="pt-2">
              <Link
                href="/contact"
                aria-label="Enroll at Nexcore Institute and get placement assistance"
                className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all group"
              >
                Enroll Now
                <ChevronRight
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  aria-hidden="true"
                />
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default PlacementAssistance;