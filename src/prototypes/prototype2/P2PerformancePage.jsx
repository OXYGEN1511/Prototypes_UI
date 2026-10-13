import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useApp } from "../../context/AppContext";
import { ProtoHeader } from "../common/ProtoHeader";
import { ProtoFooter } from "../common/ProtoFooter";
import { Chatbot } from "../../components/common/Chatbot";
import { FeedbackModal } from "../../components/common/FeedbackModal";
import {
  FileText,
  Download,
  Filter,
  Search,
  Sparkles,
  Activity,
  CheckCircle2,
  Clock,
  Layers,
  ArrowUpRight
} from "lucide-react";

export const P2PerformancePage = () => {
  const { language, t } = useApp();
  const [filterCat, setFilterCat] = useState("ALL");
  const [search, setSearch] = useState("");

  const reports = [
    {
      titleEn: "Bathymetric & Seismic Survey of Gulf of Khambhat — Final Report",
      titleGu: "ખંભાતના અખાતનો બાથિમિટ્રિક અને સેસમિક સર્વે — અંતિમ અહેવાલ",
      date: "2026-08-15",
      size: "4.2 MB",
      cat: "Hydrography",
      agency: "CWPRS & NIOT",
      progress: 100,
      status: "Published"
    },
    {
      titleEn: "Tidal Power Simulation Studies using 2D Hydrodynamic Models",
      titleGu: "દ્વિ-પરિમાણીય હાઇડ્રોડાયનેમિક મોડેલિંગ દ્વારા ભરતી ઊર્જાનું સિમ્યુલેશન",
      date: "2026-06-20",
      size: "3.1 MB",
      cat: "Renewable Energy",
      agency: "IIT Madras",
      progress: 100,
      status: "Published"
    },
    {
      titleEn: "Salinity Ingress Prevention Baseline Analysis across 12 Talukas",
      titleGu: "સૌરાષ્ટ્ર અને ભાલ વિસ્તારના ૧૨ તાલુકાઓમાં ખારાશ નિયંત્રણ સર્વેક્ષણ",
      date: "2026-04-10",
      size: "2.8 MB",
      cat: "Environment",
      agency: "WALMI",
      progress: 85,
      status: "Field Review"
    },
    {
      titleEn: "Dahej-Bhavnagar Expressway Multi-Modal Corridor Feasibility",
      titleGu: "દહેજ-ભાવનગર એક્સપ્રેસવે અને રેલવે કોરિડોર ફિઝિબિલિટી રિપોર્ટ",
      date: "2026-02-28",
      size: "5.5 MB",
      cat: "Transportation",
      agency: "RITES",
      progress: 100,
      status: "Published"
    },
    {
      titleEn: "Bhadbhut Barrage Hydraulic Model Test & Sluice Gate Automation",
      titleGu: "ભાડભૂત બેરેજ હાઇડ્રોલિક મોડેલ ટેસ્ટ અને સ્લુઇસ ગેટ ઓટોમેશન",
      date: "2026-01-12",
      size: "3.8 MB",
      cat: "Engineering",
      agency: "GERI Vadodara",
      progress: 92,
      status: "Final Review"
    }
  ];

  const filtered = reports.filter(r => {
    const matchCat = filterCat === "ALL" || r.cat === filterCat;
    const matchSearch =
      r.titleEn.toLowerCase().includes(search.toLowerCase()) ||
      r.titleGu.includes(search) ||
      r.agency.toLowerCase().includes(search.toLowerCase());
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
            <span className="text-slate-400">Department Performance</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-cyan-300 text-xs font-semibold backdrop-blur-md">
                <Activity className="w-3.5 h-3.5 text-cyan-400" />
                <span>Live Project Progress & Open Data</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                {language === "gujarati"
                  ? "કામગીરી અહેવાલો અને તકનીકી સંશોધન ડેટાસેટ"
                  : language === "hindi"
                  ? "प्रदर्शन रिपोर्ट एवं तकनीकी अनुसंधान डेटासेट"
                  : "Technical Studies & Project Performance"}
              </h1>
              <p className="text-slate-400 text-sm leading-relaxed">
                Review peer-reviewed oceanographic surveys, hydrodynamic modeling, environmental impact evaluations, and physical progress metrics.
              </p>
            </div>
          </div>
        </div>
      </div>

      <main id="main-content" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-1 w-full space-y-8">
        {/* Live Project Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-slate-800/50 border border-slate-700/60">
            <span className="text-xs text-slate-400 font-mono">Commissioned Studies</span>
            <div className="text-2xl font-bold text-white mt-1">100+</div>
            <span className="text-[11px] text-cyan-400 font-semibold mt-1 block">86 Published PDFs</span>
          </div>
          <div className="p-5 rounded-2xl bg-slate-800/50 border border-slate-700/60">
            <span className="text-xs text-slate-400 font-mono">National Premier Labs</span>
            <div className="text-2xl font-bold text-white mt-1">14 Institutes</div>
            <span className="text-[11px] text-slate-400 mt-1 block">NIOT, CWPRS, IITs</span>
          </div>
          <div className="p-5 rounded-2xl bg-slate-800/50 border border-slate-700/60">
            <span className="text-xs text-slate-400 font-mono">Marine Borehole Drills</span>
            <div className="text-2xl font-bold text-white mt-1">450+ Sites</div>
            <span className="text-[11px] text-emerald-400 mt-1 block">Geotechnical Core Data</span>
          </div>
          <div className="p-5 rounded-2xl bg-slate-800/50 border border-slate-700/60">
            <span className="text-xs text-slate-400 font-mono">Bhadbhut Barrage Works</span>
            <div className="text-2xl font-bold text-white mt-1">78% Done</div>
            <span className="text-[11px] text-amber-400 mt-1 block">Target: Mid 2027</span>
          </div>
        </div>

        {/* Filter & Search Bento Toolbar */}
        <div className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700/60 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 flex-wrap text-xs">
            <span className="text-slate-400 font-mono flex items-center gap-1.5">
              <Filter className="w-3.5 h-3.5 text-cyan-400" /> Filter:
            </span>
            {["ALL", "Hydrography", "Renewable Energy", "Environment", "Transportation", "Engineering"].map(c => (
              <button
                key={c}
                onClick={() => setFilterCat(c)}
                className={`px-3 py-1.5 rounded-xl font-medium transition ${
                  filterCat === c
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
              placeholder="Search reports or agencies..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="text-xs pl-8 pr-4 py-2 bg-slate-900/80 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 w-64"
            />
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-3" />
          </div>
        </div>

        {/* Modern Reports Feed */}
        <div className="space-y-4">
          {filtered.map((rep, idx) => (
            <div
              key={idx}
              className="group p-5 rounded-2xl bg-slate-800/40 border border-slate-700/60 hover:border-cyan-500/50 hover:bg-slate-800/60 transition duration-200 flex flex-col md:flex-row md:items-center justify-between gap-4"
            >
              <div className="space-y-2 max-w-3xl">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-800/50 text-[10px] font-mono font-bold">
                    {rep.cat}
                  </span>
                  <span className="text-slate-400 text-xs font-mono">Agency: {rep.agency}</span>
                  <span className="text-slate-600">&bull;</span>
                  <span className="text-slate-400 text-xs font-mono">{rep.date}</span>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition">
                  {language === "gujarati" ? rep.titleGu : rep.titleEn}
                </h3>

                {/* Telemetry Bar */}
                <div className="flex items-center gap-3 pt-1">
                  <div className="w-40 h-2 rounded-full bg-slate-700 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-cyan-500 to-emerald-400 rounded-full"
                      style={{ width: `${rep.progress}%` }}
                    />
                  </div>
                  <span className="text-[11px] font-mono text-cyan-400">{rep.progress}% Complete</span>
                </div>
              </div>

              <div className="flex items-center gap-3 shrink-0 self-start md:self-center">
                <button
                  onClick={() => alert(`Downloading technical paper: ${rep.titleEn}`)}
                  className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs flex items-center gap-2 shadow-lg shadow-cyan-500/20 transition"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download ({rep.size})</span>
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
