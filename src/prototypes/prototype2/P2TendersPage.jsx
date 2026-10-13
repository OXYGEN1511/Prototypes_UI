import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useApp } from "../../context/AppContext";
import { ProtoHeader } from "../common/ProtoHeader";
import { ProtoFooter } from "../common/ProtoFooter";
import { Chatbot } from "../../components/common/Chatbot";
import { FeedbackModal } from "../../components/common/FeedbackModal";
import { kalpasarStore } from "../../services/kalpasarStore";
import {
  FileText,
  Download,
  Filter,
  Search,
  Sparkles,
  ExternalLink,
  Calendar,
  Clock,
  Building,
  CheckCircle2
} from "lucide-react";

export const P2TendersPage = () => {
  const { language, t } = useApp();
  const [activeTab, setActiveTab] = useState("ALL");
  const [search, setSearch] = useState("");

  const notices = kalpasarStore.getPublishedNotices();

  const filtered = notices.filter(n => {
    const matchCat = activeTab === "ALL" || n.category === activeTab;
    const matchSearch =
      n.titleEn.toLowerCase().includes(search.toLowerCase()) ||
      n.titleGu.includes(search) ||
      n.refNo.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

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
            <span className="text-slate-400">e-Procurement & GeM Tenders</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-cyan-300 text-xs font-semibold backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>GeM & GIL Integrated Portal</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                {language === "gujarati"
                  ? "જાહેર ટેન્ડરો, EOI અને ઈ-પ્રોક્યોરમેન્ટ નોટિસો"
                  : language === "hindi"
                  ? "सार्वजनिक निविदाएं, ईओआई एवं ई-प्रोक्योरमेंट सूचनाएं"
                  : "Active Tenders, RFPs & Procurement Notices"}
              </h1>
              <p className="text-slate-400 text-sm leading-relaxed">
                Explore transparent government bidding opportunities, technical specifications, and corrigenda published by Kalpasar Prabhag.
              </p>
            </div>
          </div>
        </div>
      </div>

      <main id="main-content" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-1 w-full space-y-8">
        {/* GeM Portal Banner */}
        <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-950/40 via-cyan-950/30 to-slate-900 border border-cyan-800/40 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500 text-slate-950 flex items-center justify-center font-bold font-mono">
              GeM
            </div>
            <div>
              <strong className="text-white text-sm block">Government e-Marketplace (GeM) & GIL Mandate</strong>
              <span className="text-xs text-slate-400">All submissions must strictly comply with official GeM guidelines.</span>
            </div>
          </div>
          <a
            href="https://gem.gov.in"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-cyan-500/40 text-xs font-semibold flex items-center gap-2 transition shrink-0"
          >
            <span>Visit GeM Portal</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Filter & Search Bar */}
        <div className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700/60 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 flex-wrap text-xs">
            <span className="text-slate-400 font-mono flex items-center gap-1.5">
              <Filter className="w-3.5 h-3.5 text-cyan-400" /> Filter:
            </span>
            {["ALL", "RFP", "EOI", "TENDER", "CORRIGENDUM"].map(c => (
              <button
                key={c}
                onClick={() => setActiveTab(c)}
                className={`px-3 py-1.5 rounded-xl font-medium transition ${
                  activeTab === c
                    ? "bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20"
                    : "bg-slate-900/60 text-slate-300 hover:bg-slate-900 hover:text-white border border-slate-700/60"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="relative">
            <input
              type="text"
              placeholder="Search tender ID or subject..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="text-xs pl-8 pr-4 py-2 bg-slate-900/80 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 w-64"
            />
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-3" />
          </div>
        </div>

        {/* Tenders Stream */}
        <div className="space-y-4">
          {filtered.map((n) => (
            <div
              key={n.id}
              className="group p-6 rounded-3xl bg-slate-800/40 border border-slate-700/60 hover:border-cyan-500/50 hover:bg-slate-800/60 transition duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="space-y-2 max-w-3xl">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="px-3 py-0.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800/50 text-[11px] font-mono font-bold">
                    {n.category}
                  </span>
                  <span className="text-slate-400 font-mono text-xs">{n.refNo}</span>
                  <span className="text-slate-600">&bull;</span>
                  <span className="text-slate-400 text-xs font-mono">Published: {n.date}</span>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition">
                  {language === "gujarati" ? n.titleGu : n.titleEn}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {language === "gujarati" ? n.summaryGu : n.summaryEn}
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0 self-start md:self-center">
                <button
                  onClick={() => alert(`Downloading tender document: ${n.refNo}`)}
                  className="px-5 py-2.5 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs flex items-center gap-2 shadow-lg shadow-cyan-500/20 transition"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download ({n.fileSize})</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <ProtoFooter variant="modern" />
      <Chatbot />
      <FeedbackModal />
    </div>
  );
};
