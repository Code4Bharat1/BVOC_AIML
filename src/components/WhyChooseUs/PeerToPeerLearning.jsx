"use client";
import Image from "next/image";

// Star component to create individual stars with glow animation
const Star = ({ top, left, size, opacity, delay }) => {
  return (
    <div
      className="absolute"
      style={{
        top: `${top}%`,
        left: `${left}%`,
        opacity: opacity,
        animation: `glow 3s infinite ${delay}s`,
      }}
    >
      <div
        className="relative"
        style={{
          width: `${size * 20}px`,
          height: `${size * 20}px`,
        }}
      >
        <Image
          src="/star.png"
          alt="Star"
          fill
          className="animate-pulse"
          style={{
            filter: "drop-shadow(0 0 5px rgba(255, 255, 255, 0.7))",
            animationDuration: "3s",
            animationDelay: `${delay}s`,
          }}
        />
      </div>
    </div>
  );
};

const PeerToPeerLearning = () => {
  return (
    <div className="text-white py-10 text-center md:space-y-16 space-y-0">
      <style jsx global>{`
        @keyframes glow {
          0% {
            filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.5));
          }
          50% {
            filter: drop-shadow(0 0 12px rgba(255, 255, 255, 0.9));
          }
          100% {
            filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.5));
          }
        }
      `}</style>

      {/* Header */}
      <div className="text-2xl md:text-3xl font-semibold space-y-2 px-4 pb-8 md:pb-0 relative">
        <div className="text-white flex items-center justify-center">
          <div className="relative w-6 h-6 mr-2">
            <Image
              src="/star.png"
              alt="Star"
              fill
              className="animate-pulse"
              style={{
                filter: "drop-shadow(0 0 5px rgba(255, 255, 255, 0.7))",
                animationDuration: "3s",
              }}
            />
          </div>
          Peer-to-Peer Learning:
        </div>
        <div className="text-purple-700 font-bold flex items-center justify-center">
          Learn, Collaborate, Grow Together
          <div className="relative w-6 h-6 ml-2">
            <Image
              src="/star.png"
              alt="Star"
              fill
              className="animate-pulse"
              style={{
                filter: "drop-shadow(0 0 5px rgba(255, 255, 255, 0.7))",
                animationDuration: "3s",
                animationDelay: "1.5s",
              }}
            />
          </div>
        </div>
      </div>

      {/* Sections */}
      <Section
        bgColor="#cda7ff"
        textColor="text-black"
        leftCircle={"/elements/CircleElement_Home.svg"}
        title="Collaborative Learning Environment"
        desc="At Nexcore, we believe in the power of learning "
        boldPhrases={["together", "peer-to-peer learning platform"]}
        tailText=" connects you with like-minded students, fostering collaboration, innovation, and deeper learning."
        image="/collaborative-learning.png"
        reverseOnDesktop={false}
        stars={[
          { top: 15, left: 10, size: 1.2, opacity: 0.7, delay: 0 },
          { top: 75, left: 85, size: 1.0, opacity: 0.8, delay: 1.5 },
          { top: 25, left: 90, size: 1.4, opacity: 0.6, delay: 0.8 },
        ]}
      />

      <Section
        bgColor="#AC6CFF"
        textColor="text-black"
        rightCircle={"/elements/CircleElementRight.svg"}
        title="Group Projects & Hackathons"
        desc="Work alongside your peers on "
        boldPhrases={["real-world projects", "hackathons", "doing"]}
        tailText=" that challenge your skills and encourage creativity. This dynamic approach ensures you're not just learning—you're "
        image="/group-projects-hackathons.png"
        reverseOnDesktop={true}
        stars={[
          { top: 20, left: 15, size: 1.1, opacity: 0.7, delay: 0.5 },
          { top: 70, left: 80, size: 1.3, opacity: 0.6, delay: 1.8 },
        ]}
      />

      <Section
        bgColor="#6B009D"
        textColor="text-white"
        leftCircle={"/elements/CircleElement_Home.svg"}
        title="Discussion Boards & Networking"
        desc="Engage in "
        boldPhrases={["discussions", "industry-driven topics"]}
        tailText=" through our interactive discussion boards. Learn from diverse perspectives and build your professional network."
        image="/discussion-boards-networking.png"
        reverseOnDesktop={false}
        boldColor="text-purple-300"
        stars={[
          { top: 15, left: 85, size: 1.2, opacity: 0.8, delay: 0.3 },
          { top: 65, left: 8, size: 1.0, opacity: 0.9, delay: 1.2 },
          { top: 30, left: 50, size: 1.3, opacity: 0.7, delay: 2.1 },
        ]}
      />

      <Section
        bgColor="#3A0B57"
        textColor="text-white"
        rightCircle={"/elements/CircleElementRight.svg"}
        title="Build Skills for Success"
        desc="Through collaboration, you'll sharpen essential "
        boldPhrases={["problem-solving", "communication skills"]}
        tailText=", key assets for success in any career."
        image="/build-skills-success.png"
        reverseOnDesktop={true}
        boldColor="text-purple-300"
        stars={[
          { top: 20, left: 20, size: 1.2, opacity: 0.8, delay: 0.7 },
          { top: 75, left: 75, size: 1.4, opacity: 0.7, delay: 1.5 },
        ]}
      />
    </div>
  );
};

const Section = ({
  bgColor,
  textColor,
  title,
  desc,
  boldPhrases,
  tailText,
  image,
  reverseOnDesktop,
  boldColor = "text-purple-700",
  stars = [],
  leftCircle, // pass: "/half-circle-left.png"
  rightCircle, // pass: "/half-circle-right.png"
}) => {
  return (
    <div
      className={`${textColor} py-10 px-4 md:px-8 flex flex-col ${
        reverseOnDesktop ? "md:flex-row-reverse" : "md:flex-row"
      } items-center gap-6 md:gap-8 shadow-lg relative overflow-hidden`}
      style={{ backgroundColor: bgColor }}
    >
      {/* Left Half-Circle */}
      {leftCircle && (
        <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-0 opacity-50">
          <Image
            src={leftCircle}
            alt="Left Decorative Circle"
            width={100}
            height={100}
            className="object-contain"
          />
        </div>
      )}

      {/* Right Half-Circle */}
      {rightCircle && (
        <div className="hidden md:block absolute right-10 top-1/2 -translate-y-1/2 translate-x-1/2 z-0 opacity-50">
          <Image
            src={rightCircle}
            alt="Right Decorative Circle"
            width={100}
            height={100}
            className="object-contain"
          />
        </div>
      )}

      {/* Stars */}
      {stars.map((star, index) => (
        <Star
          key={index}
          top={star.top}
          left={star.left}
          size={star.size}
          opacity={star.opacity}
          delay={star.delay}
        />
      ))}

      {/* Image */}
      <div className="flex-1 flex justify-center w-full relative z-10">
        <Image
          src={image}
          alt={title}
          width={320}
          height={240}
          className="shadow-md w-full max-w-[350px] object-contain"
        />
      </div>

      {/* Text */}
      <div className="flex-1 text-center md:text-left text-sm md:text-lg leading-relaxed space-y-4 relative z-10">
        <h1 className="text-xl md:text-3xl font-bold">{title}</h1>
        <p>
          {desc}
          {boldPhrases.map((phrase, i) => (
            <span key={i} className={`font-bold ${boldColor}`}>
              {phrase}
              {i < boldPhrases.length - 1 && ", "}
            </span>
          ))}
          {tailText}
        </p>
      </div>
    </div>
  );
};

export default PeerToPeerLearning;
