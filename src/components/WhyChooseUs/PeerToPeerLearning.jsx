"use client";
import { useState } from "react";
import { Sparkles, Users, Code, MessageCircle, TrendingUp } from "lucide-react";

const PeerToPeerLearning = () => {
  return (
    <div className="relative bg-white text-slate-900 py-16 overflow-hidden">
      {/* Floating Particles with Movement */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => {
          const startY = Math.random() * 100;
          return (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/20 rounded-full"
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
        className="absolute top-0 left-0 w-96 h-96 bg-blue-100/15 rounded-full blur-[180px]"
        style={{
          animation: 'moveOrb1 22s ease-in-out infinite'
        }}
      />
      <div 
        className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-100/12 rounded-full blur-[160px]"
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
            opacity: 0.5;
          }
          90% {
            opacity: 0.5;
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
            transform: translate(50px, -50px) scale(1.2);
          }
          50% {
            transform: translate(30px, 30px) scale(1);
          }
          75% {
            transform: translate(-30px, -30px) scale(1.25);
          }
        }

        @keyframes moveOrb2 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(-50px, 50px) scale(1.25);
          }
          50% {
            transform: translate(-30px, -30px) scale(1);
          }
          75% {
            transform: translate(30px, 30px) scale(1.2);
          }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="text-blue-600 w-7 h-7" />
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900" style={{ fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif" }}>
              Peer-to-Peer Learning:
            </h1>
          </div>
          <div className="flex items-center justify-center gap-2">
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent" style={{ fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif" }}>
              Learn, Collaborate, Grow Together
            </h2>
            <Sparkles className="text-indigo-600 w-7 h-7" />
          </div>
          
          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="h-0.5 w-20 bg-gradient-to-r from-transparent via-blue-400 to-transparent rounded-full" />
            <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
            <div className="h-0.5 w-20 bg-gradient-to-r from-transparent via-indigo-400 to-transparent rounded-full" />
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-0">
          <Section
            bgGradient="from-blue-50/50 to-indigo-50/50"
            borderColor="border-blue-200/60"
            icon={<Users className="w-9 h-9 text-blue-600" />}
            title="Collaborative Learning Environment"
            desc="At Nexcore, we believe in the power of learning "
            boldPhrases={["together", "peer-to-peer learning platform"]}
            tailText=" connects you with like-minded students, fostering collaboration, innovation, and deeper learning."
            image="/peertopeer/image1.png"
            reverseOnDesktop={false}
            highlightColor="text-blue-700"
          />

          <Section
            bgGradient="from-indigo-50/50 to-blue-50/50"
            borderColor="border-indigo-200/60"
            icon={<Code className="w-9 h-9 text-indigo-600" />}
            title="Group Projects & Hackathons"
            desc="Work alongside your peers on "
            boldPhrases={["real-world projects", "hackathons"]}
            tailText=" that challenge your skills and encourage creativity. This dynamic approach ensures you're not just learning—you're "
            boldPhrases2={["doing"]}
            image="/peertopeer/image2.png"
            highlightColor="text-indigo-700"
            reverseOnDesktop={true}
          />

          <Section
            bgGradient="from-blue-50/50 to-indigo-50/50"
            borderColor="border-blue-200/60"
            icon={<MessageCircle className="w-9 h-9 text-blue-600" />}
            title="Discussion Boards & Networking"
            desc="Engage in "
            boldPhrases={["discussions", "industry-driven topics"]}
            tailText=" through our interactive discussion boards. Learn from diverse perspectives and build your professional network."
            image="/peertopeer/image3.png"
            reverseOnDesktop={false}
            highlightColor="text-blue-700"
          />

          <Section
            bgGradient="from-indigo-50/50 to-blue-50/50"
            borderColor="border-indigo-200/60"
            icon={<TrendingUp className="w-9 h-9 text-indigo-600" />}
            title="Build Skills for Success"
            desc="Through collaboration, you'll sharpen essential "
            boldPhrases={["problem-solving", "communication skills"]}
            tailText=", key assets for success in any career."
            image="/peertopeer/image4.svg"
            reverseOnDesktop={true}
            highlightColor="text-indigo-700"
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
      className={`relative py-16 px-6 md:px-12 my-8 rounded-3xl border ${borderColor} bg-gradient-to-br ${bgGradient} backdrop-blur-sm overflow-hidden transition-all duration-500 hover:scale-[1.01] shadow-md hover:shadow-lg`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow Effect on Hover */}
      {isHovered && (
        <div className="absolute inset-0 bg-gradient-to-r from-blue-100/20 via-indigo-100/20 to-blue-100/20 blur-xl transition-opacity duration-500" />
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
            <div className={`absolute -inset-2 bg-gradient-to-r ${bgGradient} rounded-2xl blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-500`} />
            
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-md p-4">
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
            <div className={`p-3 rounded-xl bg-gradient-to-br ${bgGradient} border ${borderColor} backdrop-blur-sm shadow-sm`}>
              {icon}
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900" style={{ fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif" }}>
              {title}
            </h2>
          </div>

          {/* Description */}
          <p className="text-base md:text-lg text-slate-700 leading-relaxed" style={{ fontFamily: "'Inter', -apple-system, system-ui, sans-serif" }}>
            {desc}
            {boldPhrases.map((phrase, i) => (
              <span key={i} className={`font-semibold ${highlightColor}`}>
                {phrase}
                {i < boldPhrases.length - 1 && ", "}
              </span>
            ))}
            {tailText}
            {boldPhrases2 && boldPhrases2.map((phrase, i) => (
              <span key={`b2-${i}`} className={`font-semibold ${highlightColor}`}>
                {phrase}
              </span>
            ))}
          </p>

          {/* Decorative line */}
          <div className={`h-1 w-24 bg-gradient-to-r ${bgGradient} rounded-full`} />
        </div>
      </div>

      {/* Corner Decorations */}
      <div className={`absolute top-0 left-0 w-20 h-20 border-t border-l ${borderColor} rounded-tl-3xl opacity-40`} />
      <div className={`absolute bottom-0 right-0 w-20 h-20 border-b border-r ${borderColor} rounded-br-3xl opacity-40`} />
    </div>
  );
};

export default PeerToPeerLearning;