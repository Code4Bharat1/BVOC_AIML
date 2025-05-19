import React from "react";
import Image from "next/image";

export default function FeePaymentGuidelines() {
  const cardClasses =
    "relative w-full max-w-4xl mx-auto mb-6 flex items-center justify-center text-center px-6 py-6 sm:py-8";

  const textClasses =
    "absolute inset-0 flex items-center justify-center text-white text-sm sm:text-base font-semibold leading-snug px-6";

  return (
    <div>
      <h1 className="text-white text-center text-4xl font-bold mt-16 mb-10">
        Fee Payment Guidelines
      </h1>

      {/* Card 1 */}
      <div className={cardClasses}>
        <Image
          src="/elements/arrow_box.svg"
          alt="Arrow Box"
          width={1200}
          height={400}
          className="w-full h-[140px] object-contain"
        />
        <p className={textClasses}>
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
          className="w-full h-[140px] object-contain"
        />
        <p className={textClasses}>
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
          className="w-full h-[140px] object-contain"
        />
        <p className={textClasses}>
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
          className="w-full h-[140px] object-contain"
        />
        <p className={textClasses}>
          Students availing scholarships or paid internships must notify the accounts department <br /> for adjustments.
        </p>
      </div>

      {/* Card 5 */}
      <div className={cardClasses}>
        <Image
          src="/elements/arrow_box.svg"
          alt="Arrow Box"
          width={1200}
          height={200}
          className="w-full h-[140px] object-contain"
        />
        <p className={textClasses}>
          No refunds after 15 days of admission, unless approved under exceptional cases.
        </p>
      </div>
    </div>
  );
}
