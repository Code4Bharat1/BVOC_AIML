"use client";
import { useState } from "react";
import { HiSparkles } from "react-icons/hi";
import { FaUsers, FaCode, FaComments, FaChartLine } from "react-icons/fa";

const PeerToPeerLearning = () => {
  return (
    <div className="relative bg-gradient-to-br from-[#1A287E] via-[#2C3560] to-[#212121] text-white py-16 overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#26C6DA 1px, transparent 1px), linear-gradient(90deg, #26C6DA 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Floating Particles with Movement */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => {
          const startY = Math.random() * 100;
          return (
            <div
              key={i}
              className="absolute w-1 h-1 bg-[#26C6DA] rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${startY}%`,
                animation: `floatUp ${4 + Math.random() * 3}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 3}s`
              }}
            />
          );
        })}
      </div>

      {/* Glowing Orbs with Animation */}
      <div 
        className="absolute top-0 left-0 w-96 h-96 bg-[#26C6DA]/20 rounded-full blur-[150px]"
        style={{
          animation: 'moveOrb1 20s ease-in-out infinite'
        }}
      />
      <div 
        className="absolute bottom-0 right-0 w-96 h-96 bg-[#FF6F00]/20 rounded-full blur-[150px]"
        style={{
          animation: 'moveOrb2 25s ease-in-out infinite'
        }}
      />

      <style jsx>{`
        @keyframes floatUp {
          0% {
            transform: translateY(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100px);
            opacity: 0;
          }
        }

        @keyframes moveOrb1 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(50px, -50px) scale(1.3);
          }
          50% {
            transform: translate(30px, 30px) scale(1);
          }
          75% {
            transform: translate(-30px, -30px) scale(1.4);
          }
        }

        @keyframes moveOrb2 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(-50px, 50px) scale(1.4);
          }
          50% {
            transform: translate(-30px, -30px) scale(1);
          }
          75% {
            transform: translate(30px, 30px) scale(1.5);
          }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <HiSparkles className="text-[#26C6DA] text-3xl animate-pulse" />
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Peer-to-Peer Learning:
            </h1>
          </div>
          <div className="flex items-center justify-center gap-2">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#26C6DA] via-[#FF6F00] to-[#26C6DA] bg-clip-text text-transparent">
              Learn, Collaborate, Grow Together
            </h2>
            <HiSparkles className="text-[#FF6F00] text-3xl animate-pulse" />
          </div>
          
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="h-1 w-20 bg-gradient-to-r from-transparent via-[#26C6DA] to-transparent rounded-full animate-pulse" />
            <div className="w-2 h-2 rounded-full bg-[#26C6DA] animate-pulse" />
            <div className="h-1 w-20 bg-gradient-to-r from-transparent via-[#26C6DA] to-transparent rounded-full animate-pulse" />
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-0">
          <Section
            bgGradient="from-[#26C6DA]/20 to-[#FF6F00]/20"
            borderColor="border-[#26C6DA]/30"
            icon={<FaUsers className="text-4xl text-[#26C6DA]" />}
            title="Collaborative Learning Environment"
            desc="At Nexcore, we believe in the power of learning "
            boldPhrases={["together", "peer-to-peer learning platform"]}
            tailText=" connects you with like-minded students, fostering collaboration, innovation, and deeper learning."
            image="/peertopeer/image1.png"
            reverseOnDesktop={false}
            highlightColor="text-[#26C6DA]"
          />

          <Section
            bgGradient="from-[#FF6F00]/20 to-[#26C6DA]/20"
            borderColor="border-[#FF6F00]/30"
            icon={<FaCode className="text-4xl text-[#FF6F00]" />}
            title="Group Projects & Hackathons"
            desc="Work alongside your peers on "
            boldPhrases={["real-world projects", "hackathons"]}
            tailText=" that challenge your skills and encourage creativity. This dynamic approach ensures you're not just learning—you're "
            boldPhrases2={["doing"]}
            image="/peertopeer/image2.png"
            highlightColor="text-[#FF6F00]"
            reverseOnDesktop={true}
          />

          <Section
            bgGradient="from-[#26C6DA]/20 to-[#FF6F00]/20"
            borderColor="border-[#26C6DA]/30"
            icon={<FaComments className="text-4xl text-[#26C6DA]" />}
            title="Discussion Boards & Networking"
            desc="Engage in "
            boldPhrases={["discussions", "industry-driven topics"]}
            tailText=" through our interactive discussion boards. Learn from diverse perspectives and build your professional network."
            image="/peertopeer/image3.png"
            reverseOnDesktop={false}
            highlightColor="text-[#26C6DA]"
          />

          <Section
            bgGradient="from-[#FF6F00]/20 to-[#26C6DA]/20"
            borderColor="border-[#FF6F00]/30"
            icon={<FaChartLine className="text-4xl text-[#FF6F00]" />}
            title="Build Skills for Success"
            desc="Through collaboration, you'll sharpen essential "
            boldPhrases={["problem-solving", "communication skills"]}
            tailText=", key assets for success in any career."
            image="/peertopeer/image4.svg"
            reverseOnDesktop={true}
            highlightColor="text-[#FF6F00]"
          />
        </div>
      </div>
    </div>
  );
};

const Section = ({
  bgGradient,
  borderColor,
  icon,
  title,
  desc,
  boldPhrases = [],
  boldPhrases2 = [],
  tailText,
  image,
  reverseOnDesktop,
  highlightColor,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative py-16 px-6 md:px-12 my-8 rounded-3xl border-2 ${borderColor} bg-gradient-to-br ${bgGradient} backdrop-blur-xl overflow-hidden transition-all duration-500 hover:scale-[1.02]`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow Effect on Hover */}
      {isHovered && (
        <div className="absolute inset-0 bg-gradient-to-r from-[#26C6DA]/10 via-[#FF6F00]/10 to-[#26C6DA]/10 blur-xl transition-opacity duration-500" />
      )}

      {/* Content */}
      <div
        className={`flex flex-col ${
          reverseOnDesktop ? "md:flex-row-reverse" : "md:flex-row"
        } items-center gap-8 md:gap-12 relative z-10`}
      >
        {/* Image Side */}
        <div className="flex-1 flex justify-center">
          <div className="relative group">
            {/* Glow behind image */}
            <div className={`absolute -inset-2 bg-gradient-to-r ${bgGradient} rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500`} />
            
            <div className="relative rounded-2xl overflow-hidden border-2 border-white/10 bg-white/5 backdrop-blur-sm p-4">
              <img
                src={image}
                alt={title}
                className="w-full max-w-[350px] object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Text Side */}
        <div className="flex-1 space-y-6">
          {/* Icon & Title */}
          <div className="flex items-center gap-4 mb-4">
            <div className={`p-3 rounded-xl bg-gradient-to-br ${bgGradient} border ${borderColor} backdrop-blur-xl`}>
              {icon}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              {title}
            </h2>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
            {desc}
            {boldPhrases.map((phrase, i) => (
              <span key={i} className={`font-bold ${highlightColor}`}>
                {phrase}
                {i < boldPhrases.length - 1 && ", "}
              </span>
            ))}
            {tailText}
            {boldPhrases2 && boldPhrases2.map((phrase, i) => (
              <span key={`b2-${i}`} className={`font-bold ${highlightColor}`}>
                {phrase}
              </span>
            ))}
          </p>

          {/* Decorative line */}
          <div className={`h-1 w-24 bg-gradient-to-r ${bgGradient} rounded-full`} />
        </div>
      </div>

      {/* Corner Decorations */}
      <div className={`absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 ${borderColor} rounded-tl-3xl opacity-50`} />
      <div className={`absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 ${borderColor} rounded-br-3xl opacity-50`} />
    </div>
  );
};

export default PeerToPeerLearning;