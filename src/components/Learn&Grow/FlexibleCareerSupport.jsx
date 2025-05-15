import React from "react";
import Image from "next/image";

const FlexibleCareerSupport = () => {
  return (
    <>
      <div className="relative bg-[#E8D7FF] p-10 overflow-hidden my-10">
        {/* Left Content */}
        <div className="flex flex-col lg:flex-row items-center justify-between z-10 relative">
          {/* Left Image */}
          <div className="w-full lg:w-[60%] flex justify-center lg:justify-start">
            <Image
              src="/path-to-left-image.svg"
              alt="Left Icon"
              width={740}
              height={440}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Right Positioned Image */}
        <div className="absolute right-0 bottom-0 hidden lg:block">
          <Image
            src="/path-to-right-image.svg"
            alt="Right Icon"
            width={580}
            height={500}
            className="object-contain"
          />
        </div>
      </div>

      {/* Text Content */}
      <div className="mt-20 text-start pl-6 lg:pl-24">
        <h1 className="text-white text-2xl lg:text-5xl font-bold">
          NexCore Alliance LLP– <br className="lg:hidden" />A Clear Path
          Forward
        </h1>
        <p className="text-[#AC6CFF] text-xl lg:text-3xl pt-4 mb-10">
          With exit points tailored to your goals, our NSQF-certified{" "}
          <br className="hidden lg:block" />
          program offers flexibility
        </p>
      </div>
    </>
  );
};

export default FlexibleCareerSupport;
