"use client";
import { useState } from "react";
import { Sparkles, Users, Code, MessageCircle, TrendingUp } from "lucide-react";

const PeerToPeerLearning = () => {
  return (
    <div className="relative bg-white py-16 overflow-hidden">
      {/* Subtle Background */}
      <div 
        className="absolute top-0 left-0 w-96 h-96 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(0, 123, 255, 0.05) 0%, transparent 70%)',
          filter: 'blur(80px)'
        }}
      />
      <div 
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255, 127, 0, 0.05) 0%, transparent 70%)',
          filter: 'blur(80px)'
        }}
      />

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .section-card {
          animation: fadeIn 0.6s ease-out;
          transition: all 0.5s ease;
        }

        .section-card:hover {
          transform: scale(1.01);
          box-shadow: 0 10px 30px rgba(0, 123, 255, 0.15);
        }

        .image-wrapper {
          transition: transform 0.5s ease;
        }

        .section-card:hover .image-wrapper {
          transform: scale(1.05);
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-7 h-7" style={{ color: '#007BFF' }} />
            <h1 
              className="text-4xl md:text-5xl font-bold" 
              style={{ 
                fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif",
                color: '#2C2C2C'
              }}
            >
              Peer-to-Peer Learning:
            </h1>
          </div>
          <div className="flex items-center justify-center gap-2">
            <h2 
              className="text-2xl md:text-3xl font-bold"
              style={{ 
                fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif",
                background: 'linear-gradient(135deg, #007BFF 0%, #FF7F00 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Learn, Collaborate, Grow Together
            </h2>
            <Sparkles className="w-7 h-7" style={{ color: '#FF7F00' }} />
          </div>
          
          <div className="flex items-center justify-center gap-3 mt-6">
            <div 
              className="h-0.5 w-20 rounded-full"
              style={{ background: 'linear-gradient(to right, transparent, rgba(0, 123, 255, 0.5), transparent)' }}
            />
            <div 
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: '#007BFF' }}
            />
            <div 
              className="h-0.5 w-20 rounded-full"
              style={{ background: 'linear-gradient(to right, transparent, rgba(255, 127, 0, 0.5), transparent)' }}
            />
          </div>
        </div>

        {/* Sections */}
        <div className="space-y-0">
          <Section
            bgColor="rgba(0, 123, 255, 0.05)"
            borderColor="rgba(0, 123, 255, 0.2)"
            icon={<Users className="w-9 h-9" style={{ color: '#007BFF' }} />}
            title="Collaborative Learning Environment"
            desc="At Nexcore, we believe in the power of learning "
            boldPhrases={["together", "peer-to-peer learning platform"]}
            tailText=" connects you with like-minded students, fostering collaboration, innovation, and deeper learning."
            image="/peertopeer/image1.png"
            reverseOnDesktop={false}
            highlightColor="#007BFF"
            accentColor="#007BFF"
          />

          <Section
            bgColor="rgba(255, 127, 0, 0.05)"
            borderColor="rgba(255, 127, 0, 0.2)"
            icon={<Code className="w-9 h-9" style={{ color: '#FF7F00' }} />}
            title="Group Projects & Hackathons"
            desc="Work alongside your peers on "
            boldPhrases={["real-world projects", "hackathons"]}
            tailText=" that challenge your skills and encourage creativity. This dynamic approach ensures you're not just learning—you're "
            boldPhrases2={["doing"]}
            image="/peertopeer/image2.png"
            highlightColor="#FF7F00"
            accentColor="#FF7F00"
            reverseOnDesktop={true}
          />

          <Section
            bgColor="rgba(0, 123, 255, 0.05)"
            borderColor="rgba(0, 123, 255, 0.2)"
            icon={<MessageCircle className="w-9 h-9" style={{ color: '#007BFF' }} />}
            title="Discussion Boards & Networking"
            desc="Engage in "
            boldPhrases={["discussions", "industry-driven topics"]}
            tailText=" through our interactive discussion boards. Learn from diverse perspectives and build your professional network."
            image="/peertopeer/image3.png"
            reverseOnDesktop={false}
            highlightColor="#007BFF"
            accentColor="#007BFF"
          />

          <Section
            bgColor="rgba(255, 127, 0, 0.05)"
            borderColor="rgba(255, 127, 0, 0.2)"
            icon={<TrendingUp className="w-9 h-9" style={{ color: '#FF7F00' }} />}
            title="Build Skills for Success"
            desc="Through collaboration, you'll sharpen essential "
            boldPhrases={["problem-solving", "communication skills"]}
            tailText=", key assets for success in any career."
            image="/peertopeer/image4.svg"
            reverseOnDesktop={true}
            highlightColor="#FF7F00"
            accentColor="#FF7F00"
          />
        </div>
      </div>
    </div>
  );
};

const Section = ({
  bgColor,
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
  accentColor,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="section-card relative py-16 px-6 md:px-12 my-8 rounded-3xl border backdrop-blur-sm overflow-hidden shadow-md"
      style={{
        backgroundColor: bgColor,
        borderColor: borderColor
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow Effect on Hover */}
      {isHovered && (
        <div 
          className="absolute inset-0 blur-xl transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle, ${accentColor}20, transparent)`,
            opacity: 0.3
          }}
        />
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
            <div 
              className="absolute -inset-2 rounded-2xl blur-xl transition-opacity duration-500"
              style={{
                backgroundColor: bgColor,
                opacity: isHovered ? 0.6 : 0.4
              }}
            />
            
            <div 
              className="relative rounded-2xl overflow-hidden border bg-white shadow-md p-4"
              style={{ borderColor: 'rgba(0, 123, 255, 0.2)' }}
            >
              <img
                src={image}
                alt={title}
                className="image-wrapper w-full max-w-[350px] object-contain"
              />
            </div>
          </div>
        </div>

        {/* Text Side */}
        <div className="flex-1 space-y-6">
          {/* Icon & Title */}
          <div className="flex items-center gap-4 mb-4">
            <div 
              className="p-3 rounded-xl backdrop-blur-sm shadow-sm border"
              style={{
                backgroundColor: bgColor,
                borderColor: borderColor
              }}
            >
              {icon}
            </div>
            <h2 
              className="text-2xl md:text-3xl font-bold" 
              style={{ 
                fontFamily: "'Inter', 'SF Pro Display', -apple-system, system-ui, sans-serif",
                color: '#2C2C2C'
              }}
            >
              {title}
            </h2>
          </div>

          {/* Description */}
          <p 
            className="text-base md:text-lg leading-relaxed" 
            style={{ 
              fontFamily: "'Inter', -apple-system, system-ui, sans-serif",
              color: 'rgba(44, 44, 44, 0.8)'
            }}
          >
            {desc}
            {boldPhrases.map((phrase, i) => (
              <span 
                key={i} 
                className="font-bold"
                style={{ color: highlightColor }}
              >
                {phrase}
                {i < boldPhrases.length - 1 && ", "}
              </span>
            ))}
            {tailText}
            {boldPhrases2 && boldPhrases2.map((phrase, i) => (
              <span 
                key={`b2-${i}`} 
                className="font-bold"
                style={{ color: highlightColor }}
              >
                {phrase}
              </span>
            ))}
          </p>

          {/* Decorative line */}
          <div 
            className="h-1 w-24 rounded-full"
            style={{ backgroundColor: accentColor }}
          />
        </div>
      </div>

      {/* Corner Decorations */}
      <div 
        className="absolute top-0 left-0 w-20 h-20 border-t border-l rounded-tl-3xl opacity-40"
        style={{ borderColor: borderColor }}
      />
      <div 
        className="absolute bottom-0 right-0 w-20 h-20 border-b border-r rounded-br-3xl opacity-40"
        style={{ borderColor: borderColor }}
      />
    </div>
  );
};

export default PeerToPeerLearning;
