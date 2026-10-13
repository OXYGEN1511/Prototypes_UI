import React from "react";
import { Link } from "react-router-dom";
import { useApp } from "../../context/AppContext";
import { Proto3Header } from "./components/Proto3Header";
import { Proto3Footer } from "./components/Proto3Footer";
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
  ChevronRight,
  TrendingUp,
  Award,
  Layers,
  ArrowRight
} from "lucide-react";

export const P3PurposesPage = () => {
  const { language, t } = useApp();

  const purposeIcons = {
    "purp-1": <Waves className="w-6 h-6 text-amber-500" />,
    "purp-2": <Zap className="w-6 h-6 text-amber-500" />,
    "purp-3": <Sprout className="w-6 h-6 text-amber-500" />,
    "purp-4": <Car className="w-6 h-6 text-amber-500" />,
    "purp-5": <ShieldCheck className="w-6 h-6 text-amber-500" />,
    "purp-6": <Anchor className="w-6 h-6 text-amber-500" />,
    "purp-7": <Compass className="w-6 h-6 text-amber-500" />
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col justify-between font-sans selection:bg-amber-400 selection:text-slate-950">
      <Proto3Header basePath="/prototype-3" />

      {/* Enterprise Corporate Banner */}
      <section className="bg-gradient-to-r from-slate-900 via-[#0d2a4a] to-slate-900 text-white py-10 border-b-4 border-amber-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-slate-300 font-medium">
            <Link to="/prototype-3" className="hover:text-amber-400 transition">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-amber-400 font-bold">Project Purposes</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-2">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-amber-500/20 text-amber-300 border border-amber-400/40 text-xs font-bold uppercase tracking-wider mb-2">
                <Layers className="w-3.5 h-3.5" />
                <span>Multi-Sectoral Engineering Portfolio</span>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
                {language === "gujarati"
                  ? "કલ્પસર યોજનાના બહુહેતુક ઉદ્દેશો અને વ્યૂહાત્મક સ્તંભો"
                  : language === "hindi"
                  ? "कल्पसर परियोजना के बहुउद्देश्यीय लक्ष्य एवं रणनीतिक स्तंभ"
                  : "Kalpasar Strategic Project Pillars & Multi-Benefit Matrix"}
              </h1>
            </div>

            <div className="text-right shrink-0">
              <span className="block text-xs text-slate-300">Mega Infrastructure Development</span>
              <span className="font-mono text-xs text-amber-400 font-bold">State Strategic Asset</span>
            </div>
          </div>
        </div>
      </section>

      <main id="main-content" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-1 w-full space-y-12">
        {/* Enterprise Technical KPI Strip */}
        <div className="border border-slate-200 rounded-lg p-6 bg-slate-50 shadow-xs">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-4">
            <h2 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
              <Award className="w-4 h-4 text-amber-500" />
              <span>Key Project Parameters & Technical Dimensions</span>
            </h2>
            <span className="text-xs font-mono text-slate-500">Government of Gujarat Baseline</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {keyProjectFacts.map((fact, idx) => (
              <div key={idx} className="border-l-2 border-amber-500 pl-4 space-y-1">
                <span className="text-xs text-slate-500 font-semibold block">
                  {language === "gujarati" ? fact.labelGu : fact.labelEn}
                </span>
                <div className="text-xl sm:text-2xl font-extrabold text-slate-900 font-mono">
                  {fact.metric}
                </div>
                <div className="text-[11px] text-slate-600 leading-tight">
                  {language === "gujarati" ? fact.descriptionGu : fact.descriptionEn}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 7 Purposes Grid - PSU Corporate Cards */}
        <div className="space-y-4">
          <div className="border-b-2 border-slate-200 pb-2 flex items-center justify-between">
            <h3 className="text-lg font-bold text-slate-900">
              7 Core Strategic Pillars of the Kalpasar Development Project
            </h3>
            <span className="text-xs text-amber-600 font-bold">PSU Flagship Architecture</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectPurposes.map((p, idx) => (
              <div
                key={p.id}
                className="border border-slate-200 rounded-lg bg-white p-6 shadow-sm hover:border-amber-400 hover:shadow-md transition duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-slate-900 bg-amber-100 px-3 py-1 rounded border border-amber-300">
                      {p.stat}
                    </span>
                    <div className="w-12 h-12 rounded-lg bg-slate-900 text-amber-400 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-slate-950 transition">
                      {purposeIcons[p.id] || <Waves className="w-6 h-6 text-amber-400" />}
                    </div>
                  </div>

                  <h4 className="text-base font-bold text-slate-900 group-hover:text-amber-600 transition mb-2">
                    {language === "gujarati" ? p.titleGu : language === "hindi" ? p.titleHi : p.titleEn}
                  </h4>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {language === "gujarati" ? p.descriptionGu : language === "hindi" ? p.descriptionHi : p.descriptionEn}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="font-mono">Strategic Sector 0{idx + 1}</span>
                  <span className="text-amber-600 font-bold group-hover:translate-x-1 transition flex items-center gap-1">
                    <span>Engineering Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Proto3Footer basePath="/prototype-3" />
      <Chatbot />
      <FeedbackModal />
    </div>
  );
};
