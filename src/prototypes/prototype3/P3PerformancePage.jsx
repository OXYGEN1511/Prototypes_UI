import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useApp } from "../../context/AppContext";
import { Proto3Header } from "./components/Proto3Header";
import { Proto3Footer } from "./components/Proto3Footer";
import { Chatbot } from "../../components/common/Chatbot";
import { FeedbackModal } from "../../components/common/FeedbackModal";
import {
  FileText,
  Download,
  Filter,
  Search,
  CheckCircle2,
  Clock,
  Layers,
  ChevronRight,
  TrendingUp,
  BarChart,
  Award
} from "lucide-react";

export const P3PerformancePage = () => {
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
      refNo: "PSU-KLP-REP-01"
    },
    {
      titleEn: "Tidal Power Simulation Studies using 2D Hydrodynamic Models",
      titleGu: "દ્વિ-પરિમાણીય હાઇડ્રોડાયનેમિક મોડેલિંગ દ્વારા ભરતી ઊર્જાનું સિમ્યુલેશન",
      date: "2026-06-20",
      size: "3.1 MB",
      cat: "Renewable Energy",
      agency: "IIT Madras",
      refNo: "PSU-KLP-REP-02"
    },
    {
      titleEn: "Salinity Ingress Prevention Baseline Analysis across 12 Talukas",
      titleGu: "સૌરાષ્ટ્ર અને ભાલ વિસ્તારના ૧૨ તાલુકાઓમાં ખારાશ નિયંત્રણ સર્વેક્ષણ",
      date: "2026-04-10",
      size: "2.8 MB",
      cat: "Environment",
      agency: "WALMI",
      refNo: "PSU-KLP-REP-03"
    },
    {
      titleEn: "Dahej-Bhavnagar Expressway Multi-Modal Corridor Feasibility",
      titleGu: "દહેજ-ભાવનગર ૧૦-લેન એક્સપ્રેસવે અને રેલવે કોરિડોર ફિઝિબિલિટી રિપોર્ટ",
      date: "2026-02-28",
      size: "5.5 MB",
      cat: "Transportation",
      agency: "RITES & GIDB",
      refNo: "PSU-KLP-REP-04"
    },
    {
      titleEn: "Bhadbhut Barrage Hydraulic Model Test & Sluice Gate Automation",
      titleGu: "ભાડભૂત બેરેજ હાઇડ્રોલિક મોડેલ ટેસ્ટ અને સ્લુઇસ ગેટ ઓટોમેશન",
      date: "2026-01-12",
      size: "3.8 MB",
      cat: "Engineering",
      agency: "GERI Vadodara",
      refNo: "PSU-KLP-REP-05"
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
            <span className="text-amber-400 font-bold">Performance & Research</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-2">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-amber-500/20 text-amber-300 border border-amber-400/40 text-xs font-bold uppercase tracking-wider mb-2">
                <BarChart className="w-3.5 h-3.5" />
                <span>Engineering Deliverables & Audit Disclosure</span>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
                {language === "gujarati"
                  ? "કામગીરી પરિણામો, તકનીકી અહેવાલો અને સંશોધન ડેટાબેઝ"
                  : language === "hindi"
                  ? "कार्य निष्पादन परिणाम, तकनीकी रिपोर्ट एवं अनुसंधान डेटाबेस"
                  : "Department Performance & Technical Research Repository"}
              </h1>
            </div>

            <div className="text-right shrink-0">
              <span className="block text-xs text-slate-300">Technical Validation Directorate</span>
              <span className="font-mono text-xs text-amber-400 font-bold">Clause 3.3 Compliance</span>
            </div>
          </div>
        </div>
      </section>

      <main id="main-content" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-1 w-full space-y-10">
        {/* Performance KPI Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="border border-slate-200 rounded-lg p-5 bg-white shadow-xs">
            <span className="text-xs text-slate-500 font-semibold block">Total Sanctioned Studies</span>
            <div className="text-2xl font-bold font-mono text-slate-900 mt-1">100+</div>
            <span className="text-[11px] text-emerald-600 font-bold mt-1 block">86 Completed & Validated</span>
          </div>
          <div className="border border-slate-200 rounded-lg p-5 bg-white shadow-xs">
            <span className="text-xs text-slate-500 font-semibold block">Premier Research Partners</span>
            <div className="text-2xl font-bold font-mono text-slate-900 mt-1">14 Institutes</div>
            <span className="text-[11px] text-slate-500 mt-1 block">NIOT, CWPRS, IITs, SAC</span>
          </div>
          <div className="border border-slate-200 rounded-lg p-5 bg-white shadow-xs">
            <span className="text-xs text-slate-500 font-semibold block">Geotechnical Core Samples</span>
            <div className="text-2xl font-bold font-mono text-slate-900 mt-1">450+ Boreholes</div>
            <span className="text-[11px] text-slate-500 mt-1 block">Offshore Seabed Profiling</span>
          </div>
          <div className="border border-slate-200 rounded-lg p-5 bg-white shadow-xs">
            <span className="text-xs text-slate-500 font-semibold block">Bhadbhut Barrage Execution</span>
            <div className="text-2xl font-bold font-mono text-amber-600 mt-1">78% Milestone</div>
            <span className="text-[11px] text-slate-500 mt-1 block">Commissioning Target: 2027</span>
          </div>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="border border-slate-200 rounded-lg p-4 bg-slate-50 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 flex-wrap text-xs">
            <span className="text-slate-600 font-semibold flex items-center gap-1">
              <Filter className="w-3.5 h-3.5 text-amber-500" /> Filter Domain:
            </span>
            {["ALL", "Hydrography", "Renewable Energy", "Environment", "Transportation", "Engineering"].map(c => (
              <button
                key={c}
                onClick={() => setFilterCat(c)}
                className={`px-3 py-1.5 rounded text-xs font-semibold transition ${
                  filterCat === c
                    ? "bg-slate-900 text-amber-400 font-bold shadow-xs"
                    : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
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
              className="text-xs pl-8 pr-3 py-2 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-500 w-64 bg-white"
            />
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
          </div>
        </div>

        {/* Corporate Research Studies Matrix */}
        <div className="border border-slate-200 rounded-lg overflow-hidden shadow-sm">
          <div className="bg-slate-900 text-white px-5 py-3 flex items-center justify-between">
            <div className="font-bold text-sm flex items-center gap-2">
              <Award className="w-4 h-4 text-amber-400" />
              <span>Published Scientific Research & Feasibility Documents</span>
            </div>
            <span className="text-xs text-amber-400 font-mono">Official PDF Library</span>
          </div>

          <div className="divide-y divide-slate-200 bg-white text-xs">
            {filtered.map((rep, idx) => (
              <div
                key={idx}
                className="p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-slate-50/80 transition"
              >
                <div className="space-y-1.5 max-w-3xl">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-800 text-[10px] font-mono font-bold">
                      {rep.cat}
                    </span>
                    <span className="text-slate-400 font-mono text-[11px]">{rep.refNo}</span>
                    <span className="text-slate-400">&bull;</span>
                    <span className="text-slate-600 text-xs">Agency: <strong>{rep.agency}</strong></span>
                  </div>

                  <h3 className="font-bold text-slate-900 text-sm">
                    {language === "gujarati" ? rep.titleGu : rep.titleEn}
                  </h3>

                  <div className="text-[11px] text-slate-500 font-mono">
                    Published: {rep.date} &bull; File Size: {rep.size} (PDF Format)
                  </div>
                </div>

                <div className="shrink-0 self-start md:self-center">
                  <button
                    onClick={() => alert(`Downloading technical paper: ${rep.titleEn}`)}
                    className="px-4 py-2 bg-slate-900 hover:bg-amber-500 hover:text-slate-950 text-white rounded font-bold text-xs flex items-center gap-1.5 shadow-xs transition"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download Report</span>
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
