"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Brands data array
const brandsData = [
  { id: 1, image: "/2.jpg", name: "Brand 1" },
  { id: 2, image: "/3.png", name: "Brand 2" },
  { id: 3, image: "/5.jpg", name: "Brand 3" },
  { id: 4, image: "/18.jpg", name: "Brand 4" },
  { id: 5, image: "/47.jpg", name: "Brand 5" },
  { id: 6, image: "/60.jpg", name: "Brand 6" },
  { id: 7, image: "/bkccrown.png", name: "Brand 7" },
  { id: 8, image: "/constrochem.png", name: "Brand 8" },
  { id: 9, image: "/dl.png", name: "Brand 9" },
  { id: 10, image: "/faina.png", name: "Brand 10" },
  { id: 11, image: "/falcon.png", name: "Brand 11" },
  { id: 12, image: "/fresco.png", name: "Brand 12" },
  { id: 13, image: "/icco.png", name: "Brand 14" },
  { id: 14, image: "/lmt.png", name: "Brand 18" },
  { id: 15, image: "/overseas.png", name: "Brand 19" },
  { id: 16, image: "/rm.png", name: "Brand 20" },
  { id: 17, image: "/tiss.png", name: "Brand 21" },
  { id: 18, image: "/tt.png", name: "Brand 22" },
  { id: 19, image: "/urbanicon.png", name: "Brand 23" },
];

const Brands = () => {
  const [shuffledBrands, setShuffledBrands] = useState([
    ...brandsData,
    ...brandsData,
  ]); // Duplicate for seamless scrolling

  useEffect(() => {
    // Shuffle the array periodically
    const shuffleInterval = setInterval(() => {
      setShuffledBrands((prev) => {
        const firstHalf = prev.slice(0, brandsData.length);
        const shuffled = firstHalf.sort(() => Math.random() - 0.5);
        return [...shuffled, ...shuffled]; // Duplicate again for seamless effect
      });
    }, 20000); // Shuffle every 20 seconds
    return () => clearInterval(shuffleInterval);
  }, []);

  return (
    <section className="bg-white w-full pt-12 overflow-hidden">
      <div className="w-full mb-16">
        {/* Heading Section */}
        <div className="mb-6 text-center">
          <h2 className="text-2xl md:text-5xl font-semibold text-black">
            Our <span className="text-lime-400">Partners</span> &{" "}
            <span className="text-lime-400">Collaborations</span>
          </h2>
        </div>
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-8"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: "linear",
            }}
          >
            {shuffledBrands.map((brand, index) => (
              <SingleBrand key={`${brand.id}-${index}`} brand={brand} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Brands;

const SingleBrand = ({ brand }) => {
  const { image, name } = brand;

  const isPng = image.toLowerCase().endsWith(".png");

  const containerClasses = `relative aspect-square w-32 h-32 lg:w-48 lg:h-48 opacity-100 transition ${
    isPng ? "bg-white" : "bg-transparent"
  } flex items-center justify-center rounded-lg`;

  return (
    <div className={containerClasses}>
      <Image src={image} alt={`${name} Logo`} fill className="object-contain" />
    </div>
  );
};
