"use client";

import Image from "next/image";

const InternAndPlacementCards = () => {
  return (
    <>
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .card-animate-1 {
          animation: fadeInUp 0.8s ease-out;
        }

        .card-animate-2 {
          animation: fadeInUp 0.8s ease-out 0.2s backwards;
        }

        .decorative-animate-1 {
          animation: fadeIn 0.8s ease-out;
        }

        .decorative-animate-2 {
          animation: fadeIn 0.8s ease-out 0.2s backwards;
        }

        .card-hover {
          transition: all 0.3s ease;
        }

        .card-hover:hover {
          transform: translateY(-5px);
          box-shadow: 0 25px 50px rgba(0, 123, 255, 0.15);
        }

        .mobile-card-1 {
          animation: fadeInUp 0.6s ease-out;
        }

        .mobile-card-2 {
          animation: fadeInUp 0.6s ease-out 0.1s backwards;
        }
      `}</style>

      {/* Desktop View */}
      <div className="hidden lg:flex flex-col items-center gap-24 relative overflow-visible px-8 bg-white py-16">
        {/* Subtle Background */}
        <div 
          className="absolute top-0 right-0 w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(0, 123, 255, 0.05) 0%, transparent 70%)',
            filter: 'blur(80px)'
          }}
        />
        <div 
          className="absolute bottom-0 left-0 w-96 h-96 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255, 127, 0, 0.05) 0%, transparent 70%)',
            filter: 'blur(80px)'
          }}
        />

        {/* Card 1 Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 relative w-full max-w-7xl mx-auto px-4 z-10">
          {/* Decorative Left Element */}
          <div className="decorative-animate-1 relative z-0 w-[150px] h-[150px] pointer-events-none">
            <Image
              src="/elements/AI-left.svg"
              alt="Decorative Left"
              fill
              className="object-contain opacity-40"
            />
          </div>

          {/* Card 1 */}
          <div className="card-animate-1 card-hover z-10 flex-1">
            <div 
              className="flex flex-col md:flex-row rounded-3xl shadow-xl w-full overflow-hidden border-2 bg-white"
              style={{ borderColor: 'rgba(0, 123, 255, 0.3)' }}
            >
              {/* Text Section */}
              <div className="flex flex-col justify-between p-8 pl-14 leading-normal flex-1">
                <h5 
                  className="mb-4 text-4xl font-bold tracking-tight"
                  style={{ 
                    fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif",
                    color: '#007BFF'
                  }}
                >
                  Internship Before Graduation
                </h5>
                <p 
                  className="mb-3 text-2xl leading-relaxed"
                  style={{ 
                    fontFamily: "'Inter', -apple-system, system-ui, sans-serif",
                    color: 'rgba(44, 44, 44, 0.75)'
                  }}
                >
                  Apply your skills with{" "}
                  <span className="font-bold" style={{ color: '#FF7F00' }}>
                    real-world
                  </span>{" "}
                  internships that give you{" "}
                  <span className="font-bold" style={{ color: '#007BFF' }}>
                    hands-on experience
                  </span>{" "}
                  and industry exposure.
                </p>
              </div>

              {/* Image Section */}
              <div 
                className="md:w-1/4 w-full h-[260px] relative"
                style={{ backgroundColor: 'rgba(0, 123, 255, 0.05)' }}
              >
                <Image
                  src="/learn&grow/internship-image.svg"
                  alt="Internship Graduate"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 relative w-full max-w-7xl mx-auto px-4 z-10">
          {/* Card 2 */}
          <div className="card-animate-2 card-hover z-10 flex-1">
            <div 
              className="flex flex-col md:flex-row-reverse rounded-3xl shadow-xl w-full overflow-hidden border-2 bg-white"
              style={{ borderColor: 'rgba(255, 127, 0, 0.3)' }}
            >
              {/* Text Section */}
              <div className="flex flex-col justify-between p-8 pl-14 leading-normal flex-1">
                <h5 
                  className="mb-4 text-4xl font-bold tracking-tight"
                  style={{ 
                    fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif",
                    color: '#FF7F00'
                  }}
                >
                  Job Placement After Completion
                </h5>
                <p 
                  className="mb-3 text-2xl leading-relaxed"
                  style={{ 
                    fontFamily: "'Inter', -apple-system, system-ui, sans-serif",
                    color: 'rgba(44, 44, 44, 0.75)'
                  }}
                >
                  We connect you directly with{" "}
                  <span className="font-bold" style={{ color: '#007BFF' }}>
                    hiring companies
                  </span>
                  , offering{" "}
                  <span className="font-bold" style={{ color: '#FF7F00' }}>
                    mock interviews
                  </span>
                  ,{" "}
                  <span className="font-bold" style={{ color: '#FFCD00' }}>
                    resume building
                  </span>
                  , and a strong{" "}
                  <span className="font-bold" style={{ color: '#007BFF' }}>
                    network
                  </span>{" "}
                  of employers looking for fresh talent.
                </p>
              </div>

              {/* Image Section */}
              <div 
                className="md:w-1/4 w-full h-[260px] relative"
                style={{ backgroundColor: 'rgba(255, 127, 0, 0.05)' }}
              >
                <Image
                  src="/learn&grow/placement-image.svg"
                  alt="Job Placement"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Decorative Right Element */}
          <div className="decorative-animate-2 relative z-0 w-[150px] h-[150px] pointer-events-none">
            <Image
              src="/elements/AI-right.svg"
              alt="Decorative Right"
              fill
              className="object-contain opacity-40"
            />
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="flex flex-col items-center px-6 gap-12 lg:hidden bg-white py-12 relative overflow-hidden">
        {/* Subtle Background */}
        <div 
          className="absolute top-0 left-0 w-64 h-64 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(0, 123, 255, 0.05) 0%, transparent 70%)',
            filter: 'blur(60px)'
          }}
        />
        <div 
          className="absolute bottom-0 right-0 w-64 h-64 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(255, 127, 0, 0.05) 0%, transparent 70%)',
            filter: 'blur(60px)'
          }}
        />

        {/* Card 1 */}
        <div 
          className="mobile-card-1 bg-white rounded-2xl flex flex-col items-center text-center p-6 w-full max-w-md border-2 shadow-lg relative z-10"
          style={{ borderColor: 'rgba(0, 123, 255, 0.3)' }}
        >
          <div className="w-full h-72 relative mb-4">
            <Image
              src="/learn&grow/internship-image.svg"
              alt="Internship"
              fill
              className="object-cover rounded-2xl border-2"
              style={{ borderColor: 'rgba(0, 123, 255, 0.2)' }}
            />
          </div>
          <h2 
            className="text-2xl font-bold mb-2"
            style={{ 
              fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif",
              color: '#007BFF'
            }}
          >
            Internship Before Graduation
          </h2>
          <p 
            className="text-base"
            style={{ 
              fontFamily: "'Inter', -apple-system, system-ui, sans-serif",
              color: 'rgba(44, 44, 44, 0.75)'
            }}
          >
            Apply your skills with real-world internships that give you hands-on
            experience and industry exposure.
          </p>
        </div>

        {/* Card 2 */}
        <div 
          className="mobile-card-2 bg-white rounded-2xl flex flex-col items-center text-center p-6 w-full max-w-md border-2 shadow-lg relative z-10"
          style={{ borderColor: 'rgba(255, 127, 0, 0.3)' }}
        >
          <div className="w-full h-72 relative mb-4">
            <Image
              src="/learn&grow/placement-image.svg"
              alt="Job Placement"
              fill
              className="object-cover rounded-2xl border-2"
              style={{ borderColor: 'rgba(255, 127, 0, 0.2)' }}
            />
          </div>
          <h2 
            className="text-2xl font-bold mb-2"
            style={{ 
              fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif",
              color: '#FF7F00'
            }}
          >
            Job Placement After Completion
          </h2>
          <p 
            className="text-base"
            style={{ 
              fontFamily: "'Inter', -apple-system, system-ui, sans-serif",
              color: 'rgba(44, 44, 44, 0.75)'
            }}
          >
            We connect you directly with hiring companies, offering mock
            interviews, resume building, and a network of employers.
          </p>
        </div>
      </div>
    </>
  );
};

export default InternAndPlacementCards;
