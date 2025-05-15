import React from 'react';

const YourCareerStarts = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="flex flex-col lg:flex-row w-full max-w-3xl mx-auto overflow-hidden rounded-4xl shadow-2xl relative bg-white">
        {/* Main Heading - Positioned above both sections */}
        <div className="absolute top-6 left-0 right-0 text-center z-10 px-4">
          <h2 className="text-md md:text-4xl lg:text-3xl font-bold leading-tight">
            Your Career Starts With Us, And We'll Be <br />
            With You Every Step Of The Way.
          </h2>
        </div>

        {/* Left Section */}
        <div className="w-full lg:w-1/2 p-10 pt-40 lg:pt-32 group hover:bg-[#AC6CFF] lg:rounded-r-3xl transition-colors duration-300">
          <div className="bg-[#D9D9D9] rounded-2xl p-8 transition-all duration-300 group-hover:scale-105">
            <div className="flex flex-col items-start space-y-6">
              <img 
                src="/elements/CareerStart1.svg" 
                alt="Number 1" 
                className="w-20 h-20"
              />
              <p className="text-xl font-bold text-start">
                Unlock Your Potential With{' '}
                <span className="text-[#AC6CFF] group-hover:text-white font-semibold">
                  Expert Guidance
                </span>{' '}
                And Real-World Skills.
              </p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/2 p-10 bg-[#AC6CFF] lg:bg-transparent rounded-t-3xl lg:rounded-l-3xl lg:pt-32  group lg:hover:bg-[#AC6CFF] transition-colors duration-300">
          <div className="bg-[#D9D9D9] rounded-2xl p-8 lg:mt-24 transition-all duration-300 group-hover:scale-105">
            <div className="flex flex-col items-start space-y-6">
              <img 
                src="/elements/CareerStart2.svg" 
                alt="Number 2" 
                className="w-20 h-20"
              />
              <p className="text-xl font-bold text-start">
                Join A Community That Believes{' '}
                <span className="text-[#AC6CFF] group-hover:text-white font-semibold">
                  In Your Success.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourCareerStarts;