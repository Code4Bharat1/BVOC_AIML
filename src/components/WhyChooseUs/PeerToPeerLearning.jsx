"use client";
import { useState } from "react";
import { HiSparkles } from "react-icons/hi";
import { FaUsers, FaCode, FaComments, FaChartLine } from "react-icons/fa";

const Star = ({ top, left, size, delay }) => {
  return (
    <div
      className="absolute animate-pulse"
      style={{
        top: `${top}%`,
        left: `${left}%`,
        animationDelay: `${delay}s`,
        animationDuration: "3s"
      }}
    >
      <HiSparkles 
        className="text-cyan-300" 
        style={{ fontSize: `${size * 20}px` }}
      />
    </div>
  );
};

const PeerToPeerLearning = () => {
  return (
    <div className="relative bg-gradient-to-br from-[#0f2847] via-[#1a3a5c] to-[#2d1b69] text-white py-16 overflow-hidden">
      {/* Background Stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <HiSparkles className="absolute top-10 left-10 text-cyan-400 text-3xl animate-pulse" />
        <HiSparkles className="absolute top-32 right-20 text-orange-400 text-2xl animate-pulse delay-300" />
        <HiSparkles className="absolute bottom-32 left-1/4 text-purple-400 text-4xl animate-pulse delay-700" />
        <HiSparkles className="absolute bottom-20 right-1/3 text-yellow-400 text-2xl animate-pulse delay-1000" />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <HiSparkles className="text-cyan-400 text-3xl animate-pulse" />
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Peer-to-Peer Learning:
            </h1>
          </div>
          <div className="flex items-center justify-center gap-2">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
              Learn, Collaborate, Grow Together
            </h2>
            <HiSparkles className="text-orange-400 text-3xl animate-pulse delay-500" />
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-0">
          <Section
            bgGradient="from-cyan-400/20 to-purple-400/20"
            borderColor="border-cyan-400/30"
            icon={<FaUsers className="text-4xl text-cyan-400" />}
            title="Collaborative Learning Environment"
            desc="At Nexcore, we believe in the power of learning "
            boldPhrases={["together", "peer-to-peer learning platform"]}
            tailText=" connects you with like-minded students, fostering collaboration, innovation, and deeper learning."
            image="/peertopeer/image1.png"
            reverseOnDesktop={false}
            highlightColor="text-cyan-300"
            stars={[
              { top: 15, left: 10, size: 1.2, delay: 0 },
              { top: 75, left: 85, size: 1.0, delay: 1.5 },
            ]}
          />

          <Section
            bgGradient="from-purple-500/20 to-pink-500/20"
            borderColor="border-purple-400/30"
            icon={<FaCode className="text-4xl text-purple-400" />}
            title="Group Projects & Hackathons"
            desc="Work alongside your peers on "
            boldPhrases={["real-world projects", "hackathons"]}
            tailText=" that challenge your skills and encourage creativity. This dynamic approach ensures you're not just learning—you're "
            boldPhrases2={["doing"]}
            image="/peertopeer/image2.png"
            highlightColor="text-orange-300"
            reverseOnDesktop={true}
            stars={[
              { top: 20, left: 15, size: 1.1, delay: 0.5 },
              { top: 70, left: 80, size: 1.3, delay: 1.8 },
            ]}
          />

          <Section
            bgGradient="from-blue-600/20 to-indigo-600/20"
            borderColor="border-blue-400/30"
            icon={<FaComments className="text-4xl text-blue-400" />}
            title="Discussion Boards & Networking"
            desc="Engage in "
            boldPhrases={["discussions", "industry-driven topics"]}
            tailText=" through our interactive discussion boards. Learn from diverse perspectives and build your professional network."
            image="/peertopeer/image3.png"
            reverseOnDesktop={false}
            highlightColor="text-cyan-300"
            stars={[
              { top: 15, left: 85, size: 1.2, delay: 0.3 },
              { top: 65, left: 8, size: 1.0, delay: 1.2 },
            ]}
          />

          <Section
            bgGradient="from-indigo-700/20 to-purple-700/20"
            borderColor="border-indigo-400/30"
            icon={<FaChartLine className="text-4xl text-indigo-400" />}
            title="Build Skills for Success"
            desc="Through collaboration, you'll sharpen essential "
            boldPhrases={["problem-solving", "communication skills"]}
            tailText=", key assets for success in any career."
            image="/peertopeer/image4.svg"
            reverseOnDesktop={true}
            highlightColor="text-purple-300"
            stars={[
              { top: 20, left: 20, size: 1.2, delay: 0.7 },
              { top: 75, left: 75, size: 1.4, delay: 1.5 },
            ]}
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
  stars = [],
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative py-16 px-6 md:px-12 my-8 rounded-3xl border-2 ${borderColor} bg-gradient-to-br ${bgGradient} backdrop-blur-sm overflow-hidden transition-all duration-500 hover:scale-[1.02]`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated Stars */}
      {stars.map((star, index) => (
        <Star key={index} {...star} />
      ))}

      {/* Glow Effect on Hover */}
      {isHovered && (
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-orange-500/10 blur-xl transition-opacity duration-500" />
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
            <div className={`p-3 rounded-xl bg-gradient-to-br ${bgGradient} border ${borderColor}`}>
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