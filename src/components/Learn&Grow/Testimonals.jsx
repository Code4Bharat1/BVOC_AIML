"use client";

import React from "react";
import { AnimatedTestimonials } from "./AnimatedTestimonal.jsx";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Sarah Chen",
      designation: "Product Manager at TechFlow",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Michael Rodriguez",
      designation: "CTO at InnovateSphere",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "James Kim",
      designation: "Engineering Lead at DataPro",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Lisa Thompson",
      designation: "VP of Technology at FutureNet",
      src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-t from-[#33135B] via-[#460E73] to-[#8E1DBA] py-20 px-6 lg:px-12 rounded-t-[3rem] text-white">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
          What Our <span className="text-[#AC6CFF]">Students & Clients</span> Say
        </h2>
        <p className="text-lg text-white/80 max-w-2xl mx-auto">
          Hear from the professionals and learners who’ve experienced success with us.
        </p>
      </div>

      <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl shadow-2xl p-6 md:p-10">
        <AnimatedTestimonials testimonials={testimonials} />
      </div>

      {/* Subtle glow effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(172,108,255,0.15),transparent_70%)] pointer-events-none"></div>
    </section>
  );
}
