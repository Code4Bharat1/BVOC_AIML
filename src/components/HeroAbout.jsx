"use client";
import { useRef, useState, useEffect } from "react";

const HeroAboutSection = () => {
  const ref = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.clientHeight);
    }
    const handleResize = () => {
      if (ref.current) setHeight(ref.current.clientHeight);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="pt-10">
      {/* Hero Section with Video */}
      <div ref={ref} className="w-full h-screen relative overflow-hidden mt-6">
        <div className="w-full h-full relative">
          <div className="w-full h-full overflow-hidden bg-black">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover bg-black opacity-50"
            >
              <source src="/Hero_Bg_video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Static Text Card */}
          <div className="absolute top-56 md:top-56 md:left-96 z-10 flex justify-start px-4">
            <div className="max-w-3xl text-center rounded-xl p-6">
              <h1 className="hidden md:block text-white text-6xl font-bold leading-tight tracking-wide">
                Code4Bharat, <br />
                by Nexcore Alliance LLP
              </h1>
              <h1 className="md:hidden text-white text-3xl font-bold leading-tight tracking-wide">
                Code4Bharat, by <br />
                Nexcore Alliance LLP
              </h1>
              <p className="text-white mt-4 text-lg sm:text-xl font-medium">
                In collaboration with Guru Kashi University for B.Voc programs
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="w-full min-h-screen px-6 lg:px-20 flex items-center justify-center bg-black text-[#fafaf3]">
        <div className="max-w-4xl text-center">
          <h2 className="text-5xl sm:text-6xl font-bold mb-6 text-lime-400">
            Our Story
          </h2>
          <p className="text-xl sm:text-2xl font-medium leading-relaxed tracking-wide">
            We are proud to announce that{" "}
            <span className="font-bold">Code4Bharat</span>, a registered brand
            under <span className="font-bold">Nexcore Alliance LLP</span>, has
            officially partnered with{" "}
            <span className="font-bold">Guru Kashi University (GKU)</span> as an
            Industry Partner to offer <span className="font-bold">B.Voc</span>{" "}
            degree programs. This strategic collaboration merges academic
            excellence with hands-on industry exposure, aimed at preparing
            students for real-world careers in high-demand sectors like AI, ML,
            and Web Dev.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroAboutSection;
