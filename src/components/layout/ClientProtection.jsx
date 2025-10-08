"use client";

import { useEffect, useState } from "react";

export default function ClientProtection() {
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    const disableContextMenu = (e) => e.preventDefault();
    const disableCopy = (e) => e.preventDefault();
    const disableDrag = (e) => e.preventDefault();
    const disableKeyCombos = (e) => {
      const forbidden = [
        { ctrl: true, key: "c" },
        { ctrl: true, key: "u" },
        { ctrl: true, key: "s" },
        { ctrl: true, key: "i" },
        { ctrl: true, shift: true, key: "i" },
        { meta: true, key: "c" },
        { meta: true, key: "u" },
        { meta: true, key: "s" },
      ];

      const match = forbidden.some(
        (combo) =>
          (combo.ctrl ? e.ctrlKey : true) &&
          (combo.meta ? e.metaKey : true) &&
          (combo.shift ? e.shiftKey : !e.shiftKey) &&
          e.key.toLowerCase() === combo.key
      );

      if (match) e.preventDefault();
    };

    document.addEventListener("contextmenu", disableContextMenu);
    document.addEventListener("copy", disableCopy);
    document.addEventListener("dragstart", disableDrag);
    document.addEventListener("keydown", disableKeyCombos);

    const timer = setTimeout(() => setShowOverlay(false), 1500);

    return () => {
      document.removeEventListener("contextmenu", disableContextMenu);
      document.removeEventListener("copy", disableCopy);
      document.removeEventListener("dragstart", disableDrag);
      document.removeEventListener("keydown", disableKeyCombos);
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      {showOverlay && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-r from-[#1a1f4d] via-[#2d1b4e] to-[#4a1f6b] overflow-hidden">
          {/* Cyan + Orange + Purple glowing orbs */}
          <div className="absolute w-40 h-40 bg-[#00d4ff]/30 blur-3xl rounded-full top-20 left-16 animate-pulse" />
          <div className="absolute w-48 h-48 bg-[#ff6b35]/30 blur-3xl rounded-full bottom-20 right-20 animate-ping" />
          <div className="absolute w-32 h-32 bg-[#AC6CFF]/30 blur-3xl rounded-full top-1/3 right-1/3 animate-pulse" />

          {/* Themed text */}
          <h1 className="text-center text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
            <span className="bg-gradient-to-r from-[#00d4ff] via-[#AC6CFF] to-[#ff6b35] bg-clip-text text-transparent animate-pulse">
              Nexcore Security
            </span>{" "}
            <span className="text-[#00d4ff]">Protection Active</span>
          </h1>

          {/* Rotating border ring */}
          <div className="absolute w-60 h-60 border-4 border-transparent border-t-[#00d4ff] border-r-[#ff6b35] border-b-[#AC6CFF] rounded-full animate-spin-slow" />
        </div>
      )}
    </>
  );
}
