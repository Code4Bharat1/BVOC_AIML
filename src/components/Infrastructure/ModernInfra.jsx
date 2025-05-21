import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

// Simple fade-in wrapper
const FadeIn = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 1.0, delay }}
    >
      {children}
    </motion.div>
  );
};

const ModernInfra = () => {
  const [hoveredSection, setHoveredSection] = useState(null);

  const handleMouseEnter = (section) => setHoveredSection(section);
  const handleMouseLeave = () => setHoveredSection(null);

  return (
    <>
      <div className="modern-desktop bg-gradient-to-b from-[#3A0B57] via-[#3D0B67] to-[#160E6E] py-40">
        <div className="relative w-full max-w-4xl h-[600px] mx-auto">
          {/* Center Image */}
          <FadeIn delay={0.1}>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <Image
                src="/Modern_infra_main.svg"
                alt="Center"
                width={250}
                height={250}
              />
            </div>
          </FadeIn>

          {/* Center Text */}
          <FadeIn delay={0.2}>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <p className="text-white text-2xl text-center my-10">
                Modern <br />
                <span className="text-[#AC6CFF]"> Infrastructure: </span>
                <br /> Experience Our <br /> Campus
              </p>
            </div>
          </FadeIn>

          {/* Quadrants */}
          <FadeIn delay={0.3}>
            <div
              className="absolute top-0 left-30 transform -translate-x-1/4 -translate-y-1/4 transition-all duration-300 "
              onMouseEnter={() => handleMouseEnter("topLeft")}
              onMouseLeave={handleMouseLeave}
            >
              <div className={`${hoveredSection === "topLeft" ? "brightness-125 scale-105" : ""} transition-all`}>
                <Image src="/Modern_infra_1.svg" alt="Top Left" width={400} height={400} />
              </div>
              <div className="absolute top-35 left-25">
                <p className={`text-white text-3xl text-center my-10 ${hoveredSection === "topLeft" ? "font-bold scale-105" : ""} transition-all`}>
                  Explore Through <br /> Videos & Photos
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div
              className="absolute top-0 right-30 transform translate-x-1/4 -translate-y-1/4 transition-all duration-300 "
              onMouseEnter={() => handleMouseEnter("topRight")}
              onMouseLeave={handleMouseLeave}
            >
              <div className={`${hoveredSection === "topRight" ? "brightness-125 scale-105" : ""} transition-all`}>
                <Image src="/Modern_infra_2.svg" alt="Top Right" width={400} height={400} />
              </div>
              <div className="absolute top-35 right-5 -translate-x-16">
                <p className={`text-white text-3xl text-center my-10 ${hoveredSection === "topRight" ? "font-bold scale-105" : ""} transition-all`}>
                  Innovation-Driven <br /> Workspaces
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.5}>
            <div
              className="absolute bottom-0 left-30 transform -translate-x-1/4 translate-y-1/4 transition-all duration-300 "
              onMouseEnter={() => handleMouseEnter("bottomLeft")}
              onMouseLeave={handleMouseLeave}
            >
              <div className={`${hoveredSection === "bottomLeft" ? "brightness-125 scale-105" : ""} transition-all`}>
                <Image src="/Modern_infra_3.svg" alt="Bottom Left" width={400} height={400} />
              </div>
              <div className="absolute bottom-35 left-20">
                <p className={`text-white text-3xl text-center my-10 ${hoveredSection === "bottomLeft" ? "font-bold scale-105" : ""} transition-all`}>
                  Dynamic & <br /> Comfortable Spaces
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.6}>
            <div
              className="absolute bottom-0 right-30 transform translate-x-1/4 translate-y-1/4 transition-all duration-300 "
              onMouseEnter={() => handleMouseEnter("bottomRight")}
              onMouseLeave={handleMouseLeave}
            >
              <div className={`${hoveredSection === "bottomRight" ? "brightness-125 scale-105" : ""} transition-all`}>
                <Image src="/Modern_infra_4.svg" alt="Bottom Right" width={400} height={400} />
              </div>
              <div className="absolute bottom-35 right-15 -translate-x-16">
                <p className={`text-white text-3xl text-center my-10 ${hoveredSection === "bottomRight" ? "font-bold scale-105" : ""} transition-all`}>
                  Cutting-Edge <br /> Technology
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Mobile View */}
      <FadeIn delay={0.3}>
        <div className="modern-mobile flex flex-col items-center justify-start pt-6 pb-6 bg-gradient-to-b from-[#160E6E] via-[#3D0B67] via-50% to-[#451053] to-75% bg-[#3A0B57] px-1">
          <p className="text-white text-3xl text-center mb-6">
            Modern <span className="text-[#AC6CFF]"> Infrastructure: </span>
            <br /> Experience Our Campus
          </p>
          <div className="flex items-center justify-center">
            <Image
              src="/infrastructure/modernInfrastructure.svg"
              alt="Modern Infrastructure Mobile"
              width={500}
              height={650}
              className="max-w-full h-full"
              priority
            />
          </div>
        </div>
      </FadeIn>
    </>
  );
};

export default ModernInfra;
