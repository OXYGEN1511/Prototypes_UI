import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useApp } from "../../context/AppContext";
import { ProtoHeader } from "../common/ProtoHeader";
import { ProtoFooter } from "../common/ProtoFooter";
import { Chatbot } from "../../components/common/Chatbot";
import { FeedbackModal } from "../../components/common/FeedbackModal";
import { projectPurposes, keyProjectFacts } from "../../data/kalpasarData";
import {
  Waves,
  Zap,
  Sprout,
  Compass,
  Anchor,
  Car,
  ShieldCheck,
  Sparkles,
  Activity,
  ArrowRight,
  TrendingUp,
  Volume2
} from "lucide-react";

export const P2PurposesPage = () => {
  const { language, speakText, t } = useApp();
  const [activePurpose, setActivePurpose] = useState(null);

  const icons = {
    "purp-1": <Waves className="w-6 h-6 text-cyan-400" />,
    "purp-2": <Zap className="w-6 h-6 text-amber-400" />,
    "purp-3": <Sprout className="w-6 h-6 text-emerald-400" />,
    "purp-4": <Car className="w-6 h-6 text-blue-400" />,
    "purp-5": <ShieldCheck className="w-6 h-6 text-purple-400" />,
    "purp-6": <Anchor className="w-6 h-6 text-teal-400" />,
    "purp-7": <Compass className="w-6 h-6 text-rose-400" />
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col justify-between selection:bg-cyan-500 selection:text-slate-950">
      <ProtoHeader variant="modern" basePath="/prototype-2" />

      {/* Modern Gradient Hero Header */}
      <div className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-900/90 pt-8 pb-12 border-b border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <div className="flex items-center gap-2 text-xs text-cyan-400 font-mono tracking-wider uppercase">
            <Link to="/prototype-2" className="hover:text-cyan-300 transition">
              Home
            </Link>
            <span>/</span>
            <span className="text-slate-400">Purposes & Benefits</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-cyan-300 text-xs font-semibold backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>Transformative State Impact Matrix</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                {language === "gujarati"
                  ? "યોજનાના ૭ બહુહેતુક ઉદ્દેશો અને પરિવર્તનશીલ લાભો"
                  : language === "hindi"
                  ? "परियोजना के 7 बहुउद्देश्यीय लक्ष्य एवं परिवर्तनकारी लाभ"
                  : "Kalpasar Multi-Purpose Engineering Pillars"}
              </h1>
              <p className="text-slate-400 text-sm leading-relaxed">
                Integrating the world's largest tidal energy generator, 10,000 MCM freshwater reservoir, 10-lane expressway bridge, and massive salinity ingress prevention.
              </p>
            </div>

            <button
              onClick={() =>
                speakText(
                  "The Kalpasar Project integrates tidal energy harnessing, freshwater conservation, regional highway connectivity, and agricultural transformation into a single unified engineering marvel."
                )
              }
              className="px-4 py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-semibold flex items-center gap-2 transition self-start"
            >
              <Volume2 className="w-3.5 h-3.5 text-cyan-400" />
              <span>Narration</span>
            </button>
          </div>
        </div>
      </div>

      <main id="main-content" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-1 w-full space-y-12">
        {/* Real-time Telemetry Metric Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {keyProjectFacts.slice(0, 4).map((fact, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-800/50 backdrop-blur-md border border-slate-700/60 hover:border-cyan-500/50 transition group"
            >
              <span className="text-xs text-slate-400 block font-mono">
                {language === "gujarati" ? fact.labelGu : fact.labelEn}
              </span>
              <div className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-cyan-400 transition font-mono mt-1">
                {fact.metric}
              </div>
              <div className="text-[11px] text-slate-400 mt-2 line-clamp-2">
                {language === "gujarati" ? fact.descriptionGu : fact.descriptionEn}
              </div>
            </div>
          ))}
        </div>

        {/* 7 Purposes Modern Bento Grid */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-cyan-400" />
              <span>7 Strategic Pillars & Beneficiary Breakdown</span>
            </h2>
            <span className="text-xs text-slate-400 font-mono">Vision 2047</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectPurposes.map((p, idx) => (
              <div
                key={p.id}
                className="group relative rounded-3xl bg-slate-800/40 backdrop-blur-md border border-slate-700/60 p-6 flex flex-col justify-between hover:border-cyan-500/60 hover:shadow-2xl hover:shadow-cyan-950/40 transition duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-950/80 px-3 py-1 rounded-full border border-cyan-800/60">
                      {p.stat}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-700/80 flex items-center justify-center group-hover:border-cyan-500/50 transition">
                      {icons[p.id] || <Waves className="w-6 h-6 text-cyan-400" />}
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition mb-2">
                    {language === "gujarati" ? p.titleGu : language === "hindi" ? p.titleHi : p.titleEn}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {language === "gujarati" ? p.descriptionGu : language === "hindi" ? p.descriptionHi : p.descriptionEn}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-mono">Pillar 0{idx + 1}</span>
                  <span className="text-cyan-400 font-semibold group-hover:translate-x-1 transition flex items-center gap-1">
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <ProtoFooter variant="modern" />
      <Chatbot />
      <FeedbackModal />
    </div>
  );
};
