import React from "react";
import Image from "next/image";

const HubHero = () => {
  return (
    <div className="flex flex-col lg:min-h-screen">
      {/* Hero Section with Background */}
      <div
        className="hidden relative w-full h-screen bg-cover bg-center bg-no-repeat lg:flex flex-col items-center justify-center text-white px-4"
        style={{
          backgroundImage: "url(/Hub_Hero-bg.png)",
          backgroundSize: "100% 100%",
        }}
      >
        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-black font-bold text-center mb-64 max-w-6xl">
          Bachelor of Vocation in{" "}
          <span className="text-[#AC6CFF]">Machine Learning</span> and{" "}
          <span className="text-[#AC6CFF]">Artificial Intelligence</span>
        </h1>
      </div>

      {/* Brand Logos Section */}
      <div className="bg-gray-900 py-16">
        <div className="container mx-auto px-4">
          {/* Logos Container */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-x-14 mb-12">
            <Image
              src="/approved.png"
              alt="Approved"
              width={200}
              height={80}
              className="object-contain"
              priority
            />
            <Image
              src="/naac-logo.png"
              alt="NAAC A++ Grade"
              width={200}
              height={80}
              className="object-contain"
              priority
            />
            <Image
              src="/ugc-logo.png"
              alt="UGC Entitled"
              width={200}
              height={80}
              className="object-contain"
              priority
            />
          </div>

          {/* Bottom Text */}
          <p className="text-xl md:text-3xl text-white text-center mx-auto max-w-4xl">
            Earn a prestigious AI & ML degree from one of India&apos;s top 2%{" "}
            <br />
            Ranking University
          </p>
        </div>
      </div>
    </div>
  );
};

export default HubHero;
