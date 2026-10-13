import React from "react";

export const Emblem = ({ className = "w-12 h-12" }) => {
  return (
    <div className={`relative flex items-center justify-center shrink-0 ${className}`}>
      {/* Official styled emblem insignia representing Kalpasar: Water Waves, Tidal Sun, and Dam Crest */}
      <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm">
        <circle cx="50" cy="50" r="46" fill="#0f2942" stroke="#c29b38" strokeWidth="3" />
        <circle cx="50" cy="50" r="42" fill="none" stroke="#57c5b6" strokeWidth="1" strokeDasharray="3 3" />
        
        {/* Golden Sun / Tidal power */}
        <circle cx="50" cy="34" r="10" fill="#c29b38" />
        <path d="M50 18 L50 22 M50 46 L50 50 M34 34 L38 34 M62 34 L66 34 M39 23 L42 26 M61 23 L58 26 M39 45 L42 42 M61 45 L58 42" stroke="#e6ca65" strokeWidth="2" strokeLinecap="round" />
        
        {/* Dam Structure */}
        <path d="M22 62 L78 62 L74 69 L26 69 Z" fill="#94a3b8" />
        <path d="M30 62 L30 69 M38 62 L38 69 M46 62 L46 69 M54 62 L54 69 M62 62 L62 69 M70 62 L70 69" stroke="#0f2942" strokeWidth="1.5" />
        
        {/* Water Waves */}
        <path d="M18 76 Q34 68 50 76 T82 76" fill="none" stroke="#57c5b6" strokeWidth="3.5" strokeLinecap="round" />
        <path d="M22 83 Q36 78 50 83 T78 83" fill="none" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    </div>
  );
};
