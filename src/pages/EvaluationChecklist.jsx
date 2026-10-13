import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Emblem } from "../components/common/Emblem";
import { evaluationCriteriaChecklist } from "../data/kalpasarData";
import {
  Award,
  CheckCircle,
  ExternalLink,
  Layers,
  ArrowRight,
  ShieldCheck,
  Star,
  FileCheck2,
  ChevronRight,
} from "lucide-react";

export const EvaluationChecklist = () => {
  const [activeTab, setActiveTab] = useState("all"); // 'all', 'general', 'technical'

  const { generalCriteria, technicalCriteria } = evaluationCriteriaChecklist;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900/90 backdrop-blur sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Emblem className="w-9 h-9" />
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-bold text-kalpasar-gold uppercase">
                  Government of Gujarat
                </span>
                <span className="text-[10px] bg-amber-500/20 text-amber-300 border border-amber-500/40 px-1.5 py-0.2 rounded font-mono">
                  RFP Clause 2.18.3 • Total 100 Marks
                </span>
              </div>
              <h1 className="text-base sm:text-lg font-bold text-white">
                RFP Evaluation Criteria Compliance Scorecard
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/prototype-2"
              className="px-3 py-1.5 bg-kalpasar-cyan text-slate-950 rounded-lg text-xs font-bold hover:bg-teal-400 transition"
            >
              Open Prototype 2 (Recommended)
            </Link>
            <Link
              to="/"
              className="px-3 py-1.5 bg-slate-800 text-slate-200 border border-slate-700 rounded-lg text-xs font-medium hover:bg-slate-700 transition"
            >
              Prototypes Hub
            </Link>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        {/* Summary Card */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-amber-950/60 border border-slate-800 p-6 rounded-2xl flex flex-wrap items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs text-amber-400 font-semibold bg-amber-950/60 border border-amber-800/80 px-2.5 py-1 rounded-full mb-3">
              <Award className="w-3.5 h-3.5" />
              <span>Full Compliance Matrix (Clause 2.18.3 & 2.18.5)</span>
            </div>
            <h2 className="text-2xl font-extrabold text-white">
              Self-Evaluation & Committee Assessment Guide
            </h2>
            <p className="text-xs text-slate-400 mt-2 leading-relaxed">
              Under Clause 2.18.3, proposals must achieve at least 60/100 marks
              across General Website Criteria (70 marks) and Technical Criteria
              (30 marks). This matrix provides a clear, clickable mapping
              between each evaluation criterion and the demonstrable features
              implemented in this prototype suite.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl text-center min-w-[120px]">
              <div className="text-2xl font-extrabold text-cyan-400">70 M</div>
              <div className="text-[11px] text-slate-400 mt-0.5">
                General Criteria
              </div>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl text-center min-w-[120px]">
              <div className="text-2xl font-extrabold text-amber-400">30 M</div>
              <div className="text-[11px] text-slate-400 mt-0.5">
                Technical Criteria
              </div>
            </div>
          </div>
        </div>

        {/* Section Tabs */}
        <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
              activeTab === "all"
                ? "bg-slate-800 text-white"
                : "text-slate-400 hover:text-white"
            }`}
          >
            All 11 Criteria (100 Marks)
          </button>
          <button
            onClick={() => setActiveTab("general")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
              activeTab === "general"
                ? "bg-slate-800 text-cyan-300"
                : "text-slate-400 hover:text-white"
            }`}
          >
            General Criteria (70 Marks)
          </button>
          <button
            onClick={() => setActiveTab("technical")}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
              activeTab === "technical"
                ? "bg-slate-800 text-amber-300"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Technical Criteria (30 Marks)
          </button>
        </div>

        {/* PART 1: GENERAL CRITERIA (70 MARKS) */}
        {(activeTab === "all" || activeTab === "general") && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <FileCheck2 className="w-5 h-5 text-cyan-400" />
                <span>General Website Evaluation Criteria (70 Marks)</span>
              </h3>
              <span className="text-xs text-slate-400 font-mono">
                7 Categories &bull; 10 Marks Each
              </span>
            </div>

            <div className="grid grid-cols-1 gap-3.5">
              {generalCriteria.categories.map((c, idx) => (
                <div
                  key={c.id}
                  className="bg-slate-900 border border-slate-800 p-5 rounded-xl hover:border-slate-700 transition space-y-3"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <span className="w-7 h-7 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800 flex items-center justify-center text-xs font-bold">
                        {idx + 1}
                      </span>
                      <h4 className="text-sm font-bold text-white">{c.name}</h4>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-xs bg-slate-800 text-cyan-300 px-2.5 py-1 rounded font-mono font-bold">
                        Max: {c.maxMarks} Marks
                      </span>
                      <Link
                        to={c.demoRoute}
                        className="flex items-center gap-1 text-xs bg-cyan-950 hover:bg-cyan-900 text-cyan-300 border border-cyan-800 px-3 py-1 rounded font-medium transition"
                      >
                        <span>Test Feature</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300">{c.description}</p>

                  <div className="bg-slate-950/80 p-3 rounded-lg text-xs space-y-1.5 border border-slate-800/80">
                    <div>
                      <strong className="text-emerald-400">
                        Implemented Evidence:
                      </strong>{" "}
                      <span className="text-slate-300">{c.evidence}</span>
                    </div>
                    <div>
                      <strong className="text-amber-400">
                        Evaluator Test Action:
                      </strong>{" "}
                      <span className="text-slate-400">{c.testAction}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* PART 2: TECHNICAL CRITERIA (30 MARKS) */}
        {(activeTab === "all" || activeTab === "technical") && (
          <div className="space-y-4 pt-4">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-amber-400" />
                <span>Technical Evaluation Criteria (30 Marks)</span>
              </h3>
              <span className="text-xs text-slate-400 font-mono">
                4 Categories &bull; Total 30 Marks
              </span>
            </div>

            <div className="grid grid-cols-1 gap-3.5">
              {technicalCriteria.categories.map((c, idx) => (
                <div
                  key={c.id}
                  className="bg-slate-900 border border-slate-800 p-5 rounded-xl hover:border-slate-700 transition space-y-3"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2.5">
                      <span className="w-7 h-7 rounded-full bg-amber-950 text-amber-300 border border-amber-800 flex items-center justify-center text-xs font-bold">
                        T{idx + 1}
                      </span>
                      <h4 className="text-sm font-bold text-white">{c.name}</h4>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="text-xs bg-slate-800 text-amber-300 px-2.5 py-1 rounded font-mono font-bold">
                        Max: {c.maxMarks} Marks
                      </span>
                      <Link
                        to={c.demoRoute}
                        className="flex items-center gap-1 text-xs bg-amber-950 hover:bg-amber-900 text-amber-300 border border-amber-800 px-3 py-1 rounded font-medium transition"
                      >
                        <span>Test Feature</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300">{c.description}</p>

                  <div className="bg-slate-950/80 p-3 rounded-lg text-xs space-y-1.5 border border-slate-800/80">
                    <div>
                      <strong className="text-emerald-400">
                        Implemented Evidence:
                      </strong>{" "}
                      <span className="text-slate-300">{c.evidence}</span>
                    </div>
                    <div>
                      <strong className="text-amber-400">
                        Evaluator Test Action:
                      </strong>{" "}
                      <span className="text-slate-400">{c.testAction}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};
