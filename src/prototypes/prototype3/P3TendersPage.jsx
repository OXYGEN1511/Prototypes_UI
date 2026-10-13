import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useApp } from "../../context/AppContext";
import { Proto3Header } from "./components/Proto3Header";
import { Proto3Footer } from "./components/Proto3Footer";
import { Chatbot } from "../../components/common/Chatbot";
import { FeedbackModal } from "../../components/common/FeedbackModal";
import { kalpasarStore } from "../../services/kalpasarStore";
import {
  FileText,
  Download,
  Filter,
  Search,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
  Building2,
  Calendar,
  Briefcase
} from "lucide-react";

export const P3TendersPage = () => {
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
            <span className="text-amber-400 font-bold">e-Procurement & Tenders</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-2">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-amber-500/20 text-amber-300 border border-amber-400/40 text-xs font-bold uppercase tracking-wider mb-2">
                <Briefcase className="w-3.5 h-3.5" />
                <span>Transparent Commercial Bidding Portal</span>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
                {language === "gujarati"
                  ? "જાહેર ટેન્ડરો, RFP, EOI અને ઈ-પ્રોક્યોરમેન્ટ જાહેરાતો"
                  : language === "hindi"
                  ? "सार्वजनिक निविदाएं, आरएफपी, ईओआई एवं ई-प्रोक्योरमेंट सूचनाएं"
                  : "Active Commercial Tenders, RFPs & Procurement Notices"}
              </h1>
            </div>

            <div className="text-right shrink-0">
              <span className="block text-xs text-slate-300">GeM & GIL Unified Portal</span>
              <span className="font-mono text-xs text-amber-400 font-bold">Public Works Tender Wing</span>
            </div>
          </div>
        </div>
      </section>

      <main id="main-content" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-1 w-full space-y-8">
        {/* GeM Portal Notice Strip */}
        <div className="border border-slate-200 rounded-lg p-5 bg-slate-50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded bg-slate-900 text-amber-400 flex items-center justify-center font-mono font-bold text-xs">
              GeM
            </div>
            <div>
              <strong className="text-slate-900 text-sm block">Government e-Marketplace (GeM) & GIL Mandate</strong>
              <span className="text-xs text-slate-500">All vendors must submit technical and financial bids via GeM or n-Procure platforms.</span>
            </div>
          </div>
          <a
            href="https://gem.gov.in"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-amber-400 text-xs font-bold rounded flex items-center gap-2 shrink-0 transition"
          >
            <span>Access GeM Portal</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Filter & Search Bar */}
        <div className="border border-slate-200 rounded-lg p-4 bg-white shadow-xs flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 flex-wrap text-xs">
            <span className="text-slate-600 font-semibold flex items-center gap-1">
              <Filter className="w-3.5 h-3.5 text-amber-500" /> Notice Type:
            </span>
            {["ALL", "RFP", "EOI", "TENDER", "CORRIGENDUM"].map(c => (
              <button
                key={c}
                onClick={() => setActiveTab(c)}
                className={`px-3 py-1.5 rounded text-xs font-semibold transition ${
                  activeTab === c
                    ? "bg-slate-900 text-amber-400 font-bold shadow-xs"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
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
              className="text-xs pl-8 pr-3 py-2 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-500 w-64 bg-white"
            />
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
          </div>
        </div>

        {/* Commercial Tenders Table */}
        <div className="border border-slate-200 rounded-lg overflow-hidden shadow-sm">
          <div className="bg-slate-900 text-white px-5 py-3 flex items-center justify-between">
            <div className="font-bold text-sm flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>Official Live Procurement & Tender Notices</span>
            </div>
            <span className="text-xs text-amber-400 font-mono">Live Bidding Register</span>
          </div>

          <div className="divide-y divide-slate-200 bg-white">
            {filtered.map((n) => (
              <div
                key={n.id}
                className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-amber-50/30 transition"
              >
                <div className="space-y-2 max-w-3xl">
                  <div className="flex items-center gap-2 flex-wrap text-xs">
                    <span className="px-2.5 py-0.5 rounded bg-slate-900 text-amber-400 text-[10px] font-mono font-bold">
                      {n.category}
                    </span>
                    <span className="font-mono text-slate-500 font-bold">{n.refNo}</span>
                    <span className="text-slate-300">&bull;</span>
                    <span className="text-slate-500">Date: {n.date}</span>
                    <span className="text-slate-300">&bull;</span>
                    <span className="text-amber-700 font-semibold font-mono">Closing: 15-Nov-2026</span>
                  </div>

                  <h3 className="font-bold text-slate-900 text-base">
                    {language === "gujarati" ? n.titleGu : n.titleEn}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {language === "gujarati" ? n.summaryGu : n.summaryEn}
                  </p>
                </div>

                <div className="shrink-0 self-start md:self-center">
                  <button
                    onClick={() => alert(`Downloading tender document: ${n.refNo}`)}
                    className="px-5 py-2.5 bg-slate-900 hover:bg-amber-500 hover:text-slate-950 text-white rounded font-bold text-xs flex items-center gap-2 shadow-xs transition"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download RFP ({n.fileSize})</span>
                  </button>
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
