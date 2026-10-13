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
  ShieldCheck,
  Scale,
  ExternalLink,
  BookOpen
} from "lucide-react";

export const P2PoliciesPage = () => {
  const { language, t } = useApp();
  const [filterCat, setFilterCat] = useState("ALL");
  const [search, setSearch] = useState("");

  const policies = [
    {
      id: "p1",
      titleEn: "Gujarat Irrigation & Water Conservation Act (Relevant Provisions)",
      titleGu: "ગુજરાત સિંચાઈ અને જળ સંરક્ષણ અધિનિયમ (કલ્પસર યોજના જોગવાઈઓ)",
      cat: "Acts",
      ref: "ACT-GOG-1979",
      date: "2026-01-10",
      size: "1.2 MB",
      desc: "Statutory legal framework governing reservoir impoundment, water rights, and canal commands."
    },
    {
      id: "p2",
      titleEn: "Coastal Regulation Zone (CRZ) Clearance Guidelines for Tidal Dam",
      titleGu: "કોસ્ટલ રેગ્યુલેશન ઝોન (CRZ) ક્લિયરન્સ ગાઇડલાઇન્સ અને પર્યાવરણ મંજૂરી",
      cat: "Notifications",
      ref: "CRZ-ENV-2026-01",
      date: "2026-03-14",
      size: "850 KB",
      desc: "Environmental clearance protocol issued in compliance with MoEF&CC 2019 coastal norms."
    },
    {
      id: "p3",
      titleEn: "Recruitment Rules for Junior Hydrographic Engineers 2026",
      titleGu: "કલ્પસર ઇજનેરી સંવર્ગ — ભરતી અને સેવા નિયમો ૨૦૨૬",
      cat: "Recruitment",
      ref: "RR-ENG-2026-04",
      date: "2026-05-18",
      size: "1.4 MB",
      desc: "Service conditions, technical eligibility criteria, and examination guidelines."
    },
    {
      id: "p4",
      titleEn: "Government Resolution: Special Purpose Entity for Kalpasar Infrastructure",
      titleGu: "સરકારી ઠરાવ: કલ્પસર ઇન્ફ્રાસ્ટ્રક્ચર સ્પેશિયલ પર્પઝ વ્હીકલ (SPV) સ્થાપના",
      cat: "Resolutions",
      ref: "GR-KLP-2026-88",
      date: "2026-07-22",
      size: "2.1 MB",
      desc: "Official cabinet resolution authorizing autonomous project execution vehicle."
    },
    {
      id: "p5",
      titleEn: "Standard Operating Procedures for Marine Survey Vessels",
      titleGu: "દરિયાઈ સર્વેક્ષણ જહાજો માટે સ્ટાન્ડર્ડ ઓપરેટિંગ પ્રોસિજર (SOP)",
      cat: "Circulars",
      ref: "SOP-SUR-2026-09",
      date: "2026-09-05",
      size: "940 KB",
      desc: "Safety directives, navigation protocols, and data protection during offshore drilling."
    },
    {
      id: "p6",
      titleEn: "Proactive RTI Section 4(1)(b) Transparency Disclosure",
      titleGu: "માહિતી અધિકાર અધિનિયમ (RTI Act 2005) અંતર્ગત સત્તાવાર જાહેર પ્રકટીકરણ",
      cat: "RTI",
      ref: "RTI-KLP-2026-01",
      date: "2026-08-01",
      size: "3.5 MB",
      desc: "Directory of public information officers, administrative procedures, and budget records."
    }
  ];

  const filtered = policies.filter(p => {
    const matchCat = filterCat === "ALL" || p.cat === filterCat;
    const matchSearch =
      p.titleEn.toLowerCase().includes(search.toLowerCase()) ||
      p.titleGu.includes(search) ||
      p.ref.toLowerCase().includes(search.toLowerCase());
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
            <span className="text-slate-400">Policies & Regulations</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-cyan-300 text-xs font-semibold backdrop-blur-md">
                <Scale className="w-3.5 h-3.5 text-cyan-400" />
                <span>Statutory Governance Repository</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                {language === "gujarati"
                  ? "કાયદાઓ, નિયમો, સરકારી ઠરાવો અને RTI પ્રકટીકરણ"
                  : language === "hindi"
                  ? "अधिनियम, नियम, सरकारी संकल्प एवं आरटीआई प्रकटीकरण"
                  : "Acts, Rules, Government Resolutions & RTI"}
              </h1>
              <p className="text-slate-400 text-sm leading-relaxed">
                Browse official gazettes, administrative policy frameworks, and citizen rights charters for the Kalpasar Project.
              </p>
            </div>
          </div>
        </div>
      </div>

      <main id="main-content" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-1 w-full space-y-8">
        {/* Search & Filter Toolbar */}
        <div className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700/60 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 flex-wrap text-xs">
            <span className="text-slate-400 font-mono flex items-center gap-1.5">
              <Filter className="w-3.5 h-3.5 text-cyan-400" /> Category:
            </span>
            {["ALL", "Acts", "Notifications", "Resolutions", "Recruitment", "Circulars", "RTI"].map(c => (
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
              placeholder="Search by title or reference..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="text-xs pl-8 pr-4 py-2 bg-slate-900/80 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 w-64"
            />
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-3" />
          </div>
        </div>

        {/* Policies Modern Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="group p-6 rounded-3xl bg-slate-800/40 border border-slate-700/60 hover:border-cyan-500/50 hover:bg-slate-800/60 transition duration-300 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800/50 text-xs font-mono font-bold">
                    {item.cat}
                  </span>
                  <span className="text-slate-400 font-mono text-xs">{item.ref}</span>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition">
                  {language === "gujarati" ? item.titleGu : item.titleEn}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div className="text-[11px] text-slate-500 font-mono">
                  Date: {item.date} &bull; {item.size}
                </div>
                <button
                  onClick={() => alert(`Downloading document: ${item.titleEn}`)}
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-cyan-500 hover:text-slate-950 text-cyan-300 border border-cyan-500/30 text-xs font-bold flex items-center gap-2 transition"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* RTI Fast-Track Card */}
        <div className="p-6 rounded-3xl bg-gradient-to-r from-slate-900 to-cyan-950/40 border border-cyan-800/40 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono font-bold">
              <Scale className="w-4 h-4" />
              <span>Right to Information (RTI Act 2005)</span>
            </div>
            <h4 className="text-lg font-bold text-white">Need formal records or project clarifications?</h4>
            <p className="text-xs text-slate-400 max-w-2xl leading-relaxed">
              Citizens can file electronic RTI applications via the Gujarat State RTI Portal or submit formal inquiries directly to the designated Public Information Officer (PIO) at Karmayogi Bhavan.
            </p>
          </div>
          <a
            href="https://onlinerti.gujarat.gov.in"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-3 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center gap-2 shrink-0 shadow-lg shadow-cyan-500/20 transition"
          >
            <span>Gujarat Online RTI Portal</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </main>

      <ProtoFooter variant="modern" />
      <Chatbot />
      <FeedbackModal />
    </div>
  );
};
