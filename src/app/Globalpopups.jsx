"use client";

import { usePathname } from "next/navigation";
import ScholarshipPopup from "@/components/common/Scholarshippopup";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function GlobalPopups() {
  const pathname = usePathname();

  // Pages jahan popup NAHI dikhana hai
  const excludePopupPages = ['/scholarships', '/brochure'];
  
  // Check if current page is in exclude list
  const shouldShowPopup = !excludePopupPages.includes(pathname);

  return (
    <>
      {/* Scholarship popup sirf allowed pages par dikhega */}
      {shouldShowPopup && <ScholarshipPopup />}
      
      {/* WhatsApp floating button har page par dikhega */}
      <FloatingWhatsApp />
    </>
  );
}