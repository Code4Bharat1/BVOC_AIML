"use client"
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function FeePaymentGuidelines() {
  // State to track viewport width
  const [windowWidth, setWindowWidth] = useState(0);
  
  // Refs for measuring text content height
  const textRefs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];
  
  // State to store calculated heights for each card
  const [cardHeights, setCardHeights] = useState([140, 140, 140, 140, 140]);

  // Base classes
  const cardClasses =
    "relative w-full max-w-4xl mx-auto mb-4 flex items-center justify-center text-center px-6 py-6";

  const textClasses =
    "absolute inset-0 flex items-center justify-center text-white text-base sm:text-lg font-semibold leading-snug px-6";

  // Handle resize and initial measurements
  useEffect(() => {
    // Set initial window width
    setWindowWidth(window.innerWidth);
    
    // Calculate card heights based on content
    updateCardHeights();
    
    // Add resize listener
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      updateCardHeights();
    };
    
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Recalculate heights when window width changes
  useEffect(() => {
    updateCardHeights();
  }, [windowWidth]);

  // Function to calculate appropriate heights
  const updateCardHeights = () => {
    const newHeights = textRefs.map((ref, index) => {
      if (!ref.current) return 140;
      
      // Get content height
      const contentHeight = ref.current.scrollHeight;
      
      // Base height calculation
      let baseHeight = 140; // Default height
      
      // On mobile (under 640px - Tailwind's sm breakpoint)
      if (windowWidth < 640) {
        // Card 4 has longer text with the <br>
        if (index === 3) {
          baseHeight = 180;
        } else {
          // Adjust other cards based on content length
          baseHeight = contentHeight > 60 ? 160 : 140;
        }
      }
      
      return baseHeight;
    });
    
    setCardHeights(newHeights);
  };

  return (
    <div>
      <h1 className="text-white text-center text-2xl sm:text-3xl md:text-4xl font-bold mt-8 sm:mt-12 md:mt-16 mb-6 sm:mb-8 md:mb-10">
        Fee Payment Guidelines
      </h1>

      {/* Card 1 */}
      <div className={cardClasses}>
        <Image
          src="/elements/arrow_box.svg"
          alt="Arrow Box"
          width={1200}
          height={400}
          className="w-full object-contain"
          style={{ height: `${cardHeights[0]}px` }}
        />
        <p className={textClasses} ref={textRefs[0]}>
          Fees can be paid via bank transfer, UPI, net banking, or at the university finance counter.
        </p>
      </div>

      {/* Card 2 */}
      <div className={cardClasses}>
        <Image
          src="/elements/arrow_box.svg"
          alt="Arrow Box"
          width={1200}
          height={400}
          className="w-full object-contain"
          style={{ height: `${cardHeights[1]}px` }}
        />
        <p className={textClasses} ref={textRefs[1]}>
          A late fee of ₹500/week is applicable after the due date.
        </p>
      </div>

      {/* Card 3 */}
      <div className={cardClasses}>
        <Image
          src="/elements/arrow_box.svg"
          alt="Arrow Box"
          width={1200}
          height={400}
          className="w-full object-contain"
          style={{ height: `${cardHeights[2]}px` }}
        />
        <p className={textClasses} ref={textRefs[2]}>
          Fee receipts must be retained and submitted during semester registration.
        </p>
      </div>

      {/* Card 4 */}
      <div className={cardClasses}>
        <Image
          src="/elements/arrow_box.svg"
          alt="Arrow Box"
          width={1200}
          height={400}
          className="w-full object-contain"
          style={{ height: `${cardHeights[3]}px` }}
        />
        <p className={textClasses} ref={textRefs[3]}>
          Students availing scholarships or paid internships must notify the accounts department for adjustments.
        </p>
      </div>

      {/* Card 5 */}
      <div className={cardClasses}>
        <Image
          src="/elements/arrow_box.svg"
          alt="Arrow Box"
          width={1200}
          height={200}
          className="w-full object-contain"
          style={{ height: `${cardHeights[4]}px` }}
        />
        <p className={textClasses} ref={textRefs[4]}>
          No refunds after 15 days of admission, unless approved under exceptional cases.
        </p>
      </div>
    </div>
  );
}