import React, { useState } from "react";
import { useApp } from "../../../context/AppContext";
import { Play, Pause, ExternalLink } from "lucide-react";

export const Proto3PartnersLogos = () => {
  const { language } = useApp();
  const [isPaused, setIsPaused] = useState(false);

  const partners = [
    {
      name: "Digital India",
      tag: "digitalindia.gov.in",
      url: "https://www.digitalindia.gov.in/",
    },
    {
      name: "Make in India",
      tag: "makeinindia.com",
      url: "https://www.makeinindia.com/",
    },
    {
      name: "Gujarat Informatics Ltd (GIL)",
      tag: "gil.gujarat.gov.in",
      url: "https://gil.gujarat.gov.in/",
    },
    { name: "NITI Aayog", tag: "niti.gov.in", url: "https://www.niti.gov.in/" },
    {
      name: "Central Public Procurement (CPPP)",
      tag: "eprocure.gov.in",
      url: "https://eprocure.gov.in/",
    },
    {
      name: "Jal Jeevan Mission",
      tag: "jaljeevanmission.gov.in",
      url: "https://jaljeevanmission.gov.in/",
    },
    {
      name: "National Water Mission",
      tag: "nwm.gov.in",
      url: "https://nwm.gov.in/",
    },
    {
      name: "Government e-Marketplace (GeM)",
      tag: "gem.gov.in",
      url: "https://gem.gov.in/",
    },
    {
      name: "National Portal of India",
      tag: "india.gov.in",
      url: "https://www.india.gov.in/",
    },
  ];

  return (
    <section
      aria-label="National Government Partners and Initiatives"
      className="bg-[#0b1d33] text-white py-10 w-full border-b border-[#183a5c] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 flex items-center justify-between">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
            {language === "gujarati"
              ? "રાષ્ટ્રીય પહેલ અને ભાગીદારો"
              : language === "hindi"
                ? "राष्ट्रीय पहल एवं साझेदार"
                : "National Initiatives & Portals"}
          </span>
          <h4 className="text-lg sm:text-xl font-black text-white">
            {language === "gujarati"
              ? "સરકારી સહયોગ અને સંસ્થાઓ"
              : language === "hindi"
                ? "शासकीय सहयोग एवं उपक्रम"
                : "Key Government Collaborations"}
          </h4>
        </div>

        <button
          onClick={() => setIsPaused(!isPaused)}
          className="p-1.5 rounded-full bg-slate-800 text-slate-300 hover:text-white transition"
          title={isPaused ? "Play Marquee" : "Pause Marquee"}
          aria-label={isPaused ? "Play Marquee" : "Pause Marquee"}
        >
          {isPaused ? (
            <Play className="w-3.5 h-3.5 text-amber-400" />
          ) : (
            <Pause className="w-3.5 h-3.5" />
          )}
        </button>
      </div>

      {/* Marquee Track */}
      <div
        className="w-full overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          className={`flex gap-6 w-max ${isPaused ? "" : "animate-marquee"}`}
        >
          {[...partners, ...partners].map((p, idx) => (
            <a
              key={idx}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-black/40 hover:bg-slate-800/80 border border-slate-700/80 hover:border-amber-400/80 px-5 py-3 rounded-xl transition duration-200 group text-slate-200"
            >
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center font-black text-xs text-amber-400">
                🏛️
              </div>
              <div>
                <span className="font-extrabold text-xs text-white group-hover:text-amber-300 transition-colors block">
                  {p.name}
                </span>
                <span className="text-[10px] text-slate-400 font-mono">
                  {p.tag}
                </span>
              </div>
              <ExternalLink className="w-3 h-3 text-slate-500 group-hover:text-amber-300 transition ml-1" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
