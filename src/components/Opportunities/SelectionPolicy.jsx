'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function SelectionPolicy() {
  const [loaded, setLoaded] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    setLoaded(true);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!loaded) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-800">
        <div className="text-white text-xl">Loading selection policy...</div>
      </div>
    );
  }

  // Dynamically calculate image size
  const imageMaxWidth = Math.min(1000, windowSize.width * 0.9);

  return (
    <div className="bg-gray-800 min-h-screen flex flex-col items-center justify-center px-4 py-8">
      {/* Header */}
      <div className="text-center mb-6 max-w-4xl">
        <h1 className="text-2xl md:text-5xl font-bold text-white my-8">
          Internal Selection Process Policy for <br /> 
          <span className="text-[#A33DFF]"> B.Voc</span> in <span className="text-[#A33DFF]"> Artificial Intelligence</span> <br /> and <span className="text-[#A33DFF]">Machine Learning</span>
        </h1>
      </div>

      {/* Centered and Responsive Image */}
      <div
        className="flex justify-center items-center"
        style={{ width: imageMaxWidth }}
      >
        <Image
          src="/selection-policy/SELECTION-POLICY.svg"
          alt="Selection Policy Diagram"
          width={imageMaxWidth}
          height={imageMaxWidth * 0.75} // assuming 4:3 aspect ratio
          className="w-full h-auto"
          priority
        />
      </div>
    </div>
  );
}
