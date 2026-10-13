import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useApp } from "../../context/AppContext";
import { Volume2, VolumeX, Eye, Sparkles, Layers, Sliders } from "lucide-react";

export const AccessibilityBar = ({ currentPrototype = "Prototype" }) => {
  const {
    language,
    setLanguage,
    fontSize,
    setFontSize,
    contrastMode,
    setContrastMode,
    isSpeaking,
    speakText,
    stopSpeaking,
    t
  } = useApp();

  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleString("en-IN", {
          timeZone: "Asia/Kolkata",
          day: "2-digit",
          month: "short",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit"
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleAudioNarration = () => {
    if (isSpeaking) {
      stopSpeaking();
    } else {
      const pageText = `${t.deptName}. ${t.govtName}. ${t.tagline}. ${t.heroTitle}. ${t.heroDesc}`;
      speakText(pageText);
    }
  };

  return (
    <div className="bg-slate-900 text-slate-200 text-xs border-b border-slate-800 py-1.5 px-4 sm:px-6 lg:px-8">
      {/* Skip to Main Content Link for WCAG & Screen Readers */}
      <a href="#main-content" className="skip-link">
        {t.skipToContent}
      </a>

      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        {/* Left: Government of Gujarat indicator & Live Clock */}
        <div className="flex items-center gap-3">
          <span className="font-semibold text-kalpasar-gold tracking-wide uppercase">
            {t.govtName}
          </span>
          <span className="hidden md:inline text-slate-600">|</span>
          <span className="hidden md:inline text-slate-400 font-mono">
            IST {currentTime}
          </span>
          <span className="hidden lg:inline bg-kalpasar-blue/40 text-cyan-300 px-2 py-0.5 rounded text-[11px] font-medium border border-cyan-800">
            {currentPrototype}
          </span>
        </div>

        {/* Right: Accessibility Controls & Language Selector */}
        <div className="flex items-center flex-wrap gap-2 sm:gap-4">
          {/* Quick Prototype Hub Link */}
          <Link
            to="/"
            className="flex items-center gap-1.5 text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 px-2.5 py-1 rounded transition text-[11px]"
            title="Switch between Prototype 1, 2, 3 or view CMS"
          >
            <Layers className="w-3.5 h-3.5 text-kalpasar-cyan" />
            <span className="font-medium">Prototypes Hub</span>
          </Link>

          {/* CMS Admin Link */}
          <Link
            to="/admin"
            className="hidden sm:flex items-center gap-1 text-amber-300 hover:text-amber-200 bg-amber-950/50 border border-amber-800/60 px-2 py-1 rounded text-[11px] font-medium"
            title="Maker-Checker Publishing CMS"
          >
            <Sliders className="w-3 h-3" />
            <span>CMS Admin</span>
          </Link>

          {/* Font Resizing A- / A / A+ */}
          <div className="flex items-center bg-slate-800 rounded px-1 py-0.5" role="group" aria-label="Font Size">
            <button
              onClick={() => setFontSize("normal")}
              className={`px-1.5 py-0.5 rounded font-bold ${
                fontSize === "normal" ? "bg-kalpasar-cyan text-slate-900" : "text-slate-300 hover:text-white"
              }`}
              title="Standard Font Size"
            >
              A
            </button>
            <button
              onClick={() => setFontSize("large")}
              className={`px-1.5 py-0.5 rounded font-bold ${
                fontSize === "large" ? "bg-kalpasar-cyan text-slate-900" : "text-slate-300 hover:text-white"
              }`}
              title="Large Font Size (+15%)"
            >
              A+
            </button>
            <button
              onClick={() => setFontSize("xlarge")}
              className={`px-1.5 py-0.5 rounded font-bold ${
                fontSize === "xlarge" ? "bg-kalpasar-cyan text-slate-900" : "text-slate-300 hover:text-white"
              }`}
              title="Extra Large Font Size (+30%)"
            >
              A++
            </button>
          </div>

          {/* High Contrast Toggle */}
          <button
            onClick={() =>
              setContrastMode(contrastMode === "normal" ? "high-contrast" : "normal")
            }
            className={`flex items-center gap-1 px-2 py-1 rounded transition font-medium ${
              contrastMode === "high-contrast"
                ? "bg-yellow-400 text-black font-bold ring-2 ring-yellow-300"
                : "bg-slate-800 text-slate-300 hover:text-white"
            }`}
            title="Toggle High Contrast Mode (WCAG 2.1 AA)"
          >
            <Eye className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">
              {contrastMode === "high-contrast" ? "High Contrast ON" : "Contrast"}
            </span>
          </button>

          {/* Screen Reader Aloud */}
          <button
            onClick={handleAudioNarration}
            className={`flex items-center gap-1 px-2 py-1 rounded transition font-medium ${
              isSpeaking
                ? "bg-red-600 text-white animate-pulse"
                : "bg-slate-800 text-slate-300 hover:text-white"
            }`}
            title="Divyangjan Voice Reader (Web Speech API)"
          >
            {isSpeaking ? (
              <>
                <VolumeX className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Stop Audio</span>
              </>
            ) : (
              <>
                <Volume2 className="w-3.5 h-3.5 text-teal-400" />
                <span className="hidden sm:inline">Read Aloud</span>
              </>
            )}
          </button>

          {/* Language Switcher (English, Gujarati, Hindi) */}
          <div className="flex items-center bg-slate-800 rounded p-0.5 border border-slate-700">
            <button
              onClick={() => setLanguage("english")}
              className={`px-2 py-0.5 rounded font-medium transition ${
                language === "english"
                  ? "bg-kalpasar-gold text-slate-950 font-bold"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              English
            </button>
            <button
              onClick={() => setLanguage("gujarati")}
              className={`px-2 py-0.5 rounded font-medium transition ${
                language === "gujarati"
                  ? "bg-kalpasar-gold text-slate-950 font-bold"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              ગુજરાતી
            </button>
            <button
              onClick={() => setLanguage("hindi")}
              className={`px-2 py-0.5 rounded font-medium transition ${
                language === "hindi"
                  ? "bg-kalpasar-gold text-slate-950 font-bold"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              हिन्दी
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
