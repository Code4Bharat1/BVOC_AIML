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
              className="w-full h-full object-cover"
            >
              <source src="/AI_Brain_Bg.mp4" type="video/mp4" />
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
<div className="w-full min-h-screen px-6 md:px-4 py-12 bg-white text-black flex items-center justify-center">
  <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-10">
    
    {/* Left: Text Content */}
    <div className="flex-1 text-center lg:text-left">
      <h2 className="text-5xl md:text-6xl font-bold mb-6 text-lime-400">
        Who We Are?
      </h2>
      <p className="text-xl sm:text-2xl font-medium leading-relaxed tracking-wide">
  <strong>Code4Bharat</strong> is a leading tech education brand under <strong>Nexcore Alliance LLP</strong>, dedicated to upskilling India’s youth in emerging technologies. With a vision to make India a global digital talent hub, Code4Bharat works on real-world IT projects, conducts training programs, and now delivers industry-integrated B.Voc courses in collaboration with reputed universities like GKU.
</p>
    </div>

    {/* Right: Image */}
    <div className="flex-1">
      <img
        src="/Hero_About_Bg.jpg"
        alt="About Us"
        className="w-full h-[420px] rounded-xl shadow-lg object-cover"
      />
    </div>

  </div>
</div>


    </div>
  );
};

export default HeroAboutSection;
