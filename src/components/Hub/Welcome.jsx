import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import EnrollNow from "./EnrollNow";

const Welcome = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="bg-[#1712331B] relative lg:mt-6 py-16 px-6 lg:px-24 flex flex-col lg:flex-row items-center gap-12 overflow-hidden"
    >
      {/* Decorative Stars SVGs */}
      <Image
        src="/elements/StarsElement.svg"
        alt="Star Top Right"
        width={50}
        height={50}
        className="absolute top-4 left-4 w-8 h-8 lg:w-12 lg:h-7"
      />
      <Image
        src="/elements/StarsElement.svg"
        alt="Star Bottom Right"
        width={50}
        height={50}
        className="absolute bottom-28 right-20 lg:bottom-8 lg:right-52 w-8 h-6 lg:w-12 lg:h-12"
      />
      <Image
        src="/elements/StarsElement.svg"
        alt="Star Bottom Left"
        width={50}
        height={50}
        className="hidden lg:absolute lg:bottom-28 lg:left-65 w-8 h-5 lg:w-12 lg:h-8"
      />

      {/* Text Section */}
      <motion.div
        className="relative lg:w-1/2 text-center lg:text-left"
        initial={{ opacity: 0, x: -60 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1 className="text-white text-4xl lg:text-6xl font-bold mb-6 mt-6 lg:mt-14">
          Welcome t
          <span className="relative inline-block">
            o{/* Decorative Element Positioned Over "o" in "to" */}
            <div className="  z-10">
              <Image
                src="/elements/HeroElement.svg"
                alt="Decorative Element"
                width={100}
                height={30}
                className="absolute w-44 h-10 lg:w-16 lg:h-8 -top-5 -right-4 lg:-right-8 transform -translate-x-1/4"
              />
            </div>
          </span>{" "}
          <br />
          the Future of <br />
          <span className="text-[#AC6CFF]">Learning!</span>
        </h1>

        <motion.p
          className="hidden lg:block text-[28px] text-white mb-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 1 }}
        >
          We’re excited to introduce a game-changing partnership between{" "}
          <span className="text-[#AC6CFF]">Nexcore Alliance LLP</span> and{" "}
          <span className="text-[#AC6CFF]">Guru Kashi University (GKU)</span>—an
          alliance designed to bring you the{" "}
          <span className="text-[#AC6CFF]">B.Voc (Bachelor of Vocation)</span>{" "}
          degree programs that fuse industry expertise with academic excellence.
        </motion.p>

        <motion.p
          className="lg:hidden text-lg text-white mb-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 1 }}
        >
          We’re excited to introduce a game-changing partnership between{" "}
          <span className="text-[#AC6CFF]">Nexcore Alliance LLP</span> and{" "}
          <span className="text-[#AC6CFF]">Guru Kashi University (GKU)</span>—an
          alliance designed to bring you the{" "}
          <span className="text-[#AC6CFF]">B.Voc (Bachelor of Vocation)</span>{" "}
          degree programs that fuse industry expertise with academic excellence.
        </motion.p>
        <EnrollNow />
      </motion.div>

      {/* Image Section */}
      <motion.div
        className="hidden lg:block md:w-1/2"
        initial={{ opacity: 0, x: 100 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: 0.4, duration: 1 }}
      >
        <Image
          src="/elements/AI_Element_Home.svg"
          alt="Hero Illustration"
          width={200}
          height={150}
          className="mx-auto"
        />
      </motion.div>
    </section>
  );
};

export default Welcome;
