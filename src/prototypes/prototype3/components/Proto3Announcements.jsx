import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useApp } from "../../../context/AppContext";
import { kalpasarStore } from "../../../services/kalpasarStore";
import {
  Radio,
  Play,
  Pause,
  ArrowRight,
  Bell,
  ChevronRight,
} from "lucide-react";

export const Proto3Announcements = ({ basePath = "/prototype-3" }) => {
  const { language, t } = useApp();
  const [isPaused, setIsPaused] = useState(false);
  const publishedNotices = kalpasarStore.getPublishedNotices();

  return (
    <section
      aria-label="Announcements & Circulars Ticker"
      className="w-full bg-[#0a1d30] border-y border-[#183a5c] text-white py-2 px-4 sm:px-6 lg:px-8 shadow-inner"
    >
      <div className="max-w-7xl mx-auto flex items-center gap-3 text-xs">
        {/* Flash Title Badge */}
        <div className="flex items-center gap-2 shrink-0">
          <span className="bg-gradient-to-r from-red-600 to-rose-700 text-white font-black px-3 py-1 rounded-md flex items-center gap-1.5 uppercase text-[10px] tracking-wider shadow-sm border border-red-400/40">
            <Radio className="w-3.5 h-3.5 animate-pulse text-amber-300" />
            <span>
              {language === "gujarati"
                ? "તાજા સમાચાર"
                : language === "hindi"
                  ? "नवीनतम घोषणाएं"
                  : "Latest Updates"}
            </span>
          </span>

          {/* Pause / Play Toggle Button */}
          <button
            onClick={() => setIsPaused(!isPaused)}
            className="p-1 rounded text-slate-300 hover:text-white hover:bg-slate-800 transition"
            title={isPaused ? "Resume Ticker" : "Pause Ticker"}
            aria-label={isPaused ? "Resume Ticker" : "Pause Ticker"}
          >
            {isPaused ? (
              <Play className="w-3 h-3 text-amber-400" />
            ) : (
              <Pause className="w-3 h-3" />
            )}
          </button>
        </div>

        {/* Scrolling Marquee Area */}
        <div
          className="overflow-hidden whitespace-nowrap flex-1"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            className={`inline-block space-x-10 text-[11px] font-medium text-slate-200 ${
              isPaused ? "" : "animate-marquee"
            }`}
          >
            {publishedNotices.map((n) => (
              <Link
                key={n.id}
                to={`${basePath}/tenders`}
                className="hover:text-amber-300 transition-colors inline-flex items-center gap-2 group"
              >
                <span className="bg-amber-500/20 text-amber-300 border border-amber-500/40 px-1.5 py-0.2 rounded text-[10px] font-mono font-bold">
                  {n.category}
                </span>
                <span className="group-hover:underline">
                  {language === "gujarati"
                    ? n.titleGu
                    : language === "hindi"
                      ? n.titleHi
                      : n.titleEn}
                </span>
                <span className="text-slate-400 font-mono text-[10px]">
                  [Ref: {n.refNo}]
                </span>
                <span className="text-slate-500">•</span>
              </Link>
            ))}
          </div>
        </div>

        {/* View All Notices Link */}
        <Link
          to={`${basePath}/tenders`}
          className="text-[11px] text-amber-400 hover:text-amber-300 shrink-0 font-bold hidden sm:flex items-center gap-1 pl-2 border-l border-slate-700"
        >
          <span>{t.viewAll}</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </section>
  );
};
