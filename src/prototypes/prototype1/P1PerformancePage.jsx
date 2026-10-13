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
  Printer,
  CheckCircle,
  Clock,
  AlertCircle,
  BarChart3,
  Layers,
  Search
} from "lucide-react";

export const P1PerformancePage = () => {
  const { language, t } = useApp();
  const [filterCat, setFilterCat] = useState("ALL");
  const [search, setSearch] = useState("");

  const studies = [
    {
      sr: 1,
      titleGu: "ખંભાતના અખાતનો બાથિમિટ્રિક અને સેસમિક સર્વે — અંતિમ અહેવાલ",
      titleEn: "Bathymetric & Seismic Survey of Gulf of Khambhat — Final Report",
      agency: "CWPRS Pune & NIOT",
      refNo: "KLP/TECH/BATHY/2026-01",
      date: "15-08-2026",
      status: "પૂર્ણ / Completed",
      statusColor: "bg-emerald-100 text-emerald-800 border-emerald-300",
      size: "4.2 MB",
      cat: "Hydrography"
    },
    {
      sr: 2,
      titleGu: "દ્વિ-પરિમાણીય હાઇડ્રોડાયનેમિક મોડેલિંગ દ્વારા ભરતી ઊર્જાનું સિમ્યુલેશન",
      titleEn: "Tidal Power Simulation Studies using 2D Hydrodynamic Models",
      agency: "IIT Madras Ocean Engg",
      refNo: "KLP/TIDAL/SIM/2026-04",
      date: "20-06-2026",
      status: "પૂર્ણ / Completed",
      statusColor: "bg-emerald-100 text-emerald-800 border-emerald-300",
      size: "3.1 MB",
      cat: "Renewable Energy"
    },
    {
      sr: 3,
      titleGu: "સૌરાષ્ટ્ર અને ભાલ વિસ્તારના ૧૨ તાલુકાઓમાં ખારાશ નિયંત્રણ સર્વેક્ષણ",
      titleEn: "Salinity Ingress Prevention Baseline Analysis across 12 Talukas",
      agency: "WALMI Anand",
      refNo: "KLP/ENV/SAL/2026-08",
      date: "10-04-2026",
      status: "ચાલુ / In Progress",
      statusColor: "bg-amber-100 text-amber-800 border-amber-300",
      size: "2.8 MB",
      cat: "Environment"
    },
    {
      sr: 4,
      titleGu: "દહેજ-ભાવનગર ૧૦-લેન એક્સપ્રેસવે અને રેલવે કોરિડોર ફિઝિબિલિટી રિપોર્ટ",
      titleEn: "Dahej-Bhavnagar 10-Lane Expressway & Rail Multi-Modal Corridor Feasibility",
      agency: "RITES & GIDB",
      refNo: "KLP/CORR/TRANS/2026-11",
      date: "28-02-2026",
      status: "પૂર્ણ / Completed",
      statusColor: "bg-emerald-100 text-emerald-800 border-emerald-300",
      size: "5.5 MB",
      cat: "Transportation"
    },
    {
      sr: 5,
      titleGu: "ભાડભૂત બેરેજ કામગીરી અને નર્મદા મીઠા પાણીના સંગ્રહનું ત્રિમાસિક મૂલ્યાંકન",
      titleEn: "Bhadbhut Barrage Quarterly Physical & Financial Progress Audit",
      agency: "Chief Engineer (KLP)",
      refNo: "KLP/BHD/AUDIT/2026-Q2",
      date: "15-01-2026",
      status: "સમીક્ષા હેઠળ / Under Review",
      statusColor: "bg-blue-100 text-blue-800 border-blue-300",
      size: "1.9 MB",
      cat: "Engineering"
    }
  ];

  const filtered = studies.filter(s => {
    const matchCat = filterCat === "ALL" || s.cat === filterCat;
    const matchSearch =
      s.titleGu.includes(search) ||
      s.titleEn.toLowerCase().includes(search.toLowerCase()) ||
      s.refNo.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="min-h-screen bg-[#f4f6f9] text-slate-800 flex flex-col justify-between font-sans">
      <ProtoHeader variant="classic" basePath="/prototype-1" />

      {/* Official Government Classic Sub-header Bar */}
      <div className="bg-[#1c5e8a] text-white border-b-2 border-[#004b87] py-2 px-4 shadow-inner">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between text-xs font-serif">
          <div className="flex items-center gap-2">
            <Link to="/prototype-1" className="hover:underline text-slate-100">
              મુખ્ય પૃષ્ઠ / Home
            </Link>
            <span>&raquo;</span>
            <span className="font-bold text-amber-200">
              {language === "gujarati" ? "કામગીરી અને તકનીકી અહેવાલો" : language === "hindi" ? "प्रदर्शन एवं तकनीकी रिपोर्ट" : "Department Performance & Reports"}
            </span>
          </div>
          <div className="flex items-center gap-4 text-[11px] text-slate-200">
            <span>સંદર્ભ: સત્તાવાર ઓડિટ શાખા</span>
            <button
              onClick={() => window.print()}
              className="flex items-center gap-1 bg-[#004b87] hover:bg-slate-900 px-2 py-0.5 rounded border border-blue-300 text-white"
            >
              <Printer className="w-3 h-3" />
              <span>Print Page</span>
            </button>
          </div>
        </div>
      </div>

      <main id="main-content" className="max-w-7xl mx-auto px-4 py-8 flex-1 w-full space-y-6">
        {/* Title Notice Banner */}
        <div className="bg-white border-t-4 border-[#1c5e8a] border-x border-b border-slate-300 p-5 shadow-sm">
          <span className="text-[11px] font-bold text-[#1c5e8a] uppercase tracking-wider block">
            Government of Gujarat | Annual Progress & Studies
          </span>
          <h1 className="text-xl sm:text-2xl font-bold font-serif text-[#004b87] mt-0.5">
            {language === "gujarati"
              ? "કલ્પસર વિભાગ — કામગીરી પરિણામો, તકનીકી સંશોધનો અને વૈજ્ઞાનિક અહેવાલો"
              : language === "hindi"
              ? "कल्पसर विभाग — कार्य निष्पादन, तकनीकी अनुसंधान एवं वैज्ञानिक रिपोर्ट"
              : "Department Performance, Scientific Surveys & Technical Reports"}
          </h1>
          <p className="text-xs text-slate-600 mt-1 leading-relaxed">
            ખંભાતના અખાત વિકાસ યોજના અંતર્ગત હાથ ધરાયેલ ૧૦૦થી વધુ સંશોધન અભ્યાસો, હાઈડ્રોડાયનેમિક મોડેલિંગ, દરિયાઈ ભૂસ્તરશાસ્ત્રીય ડ્રિલિંગ અને પર્યાવરણીય મૂલ્યાંકનનું સત્તાવાર પ્રગતિ પત્રક.
          </p>
        </div>

        {/* Milestone Statistics Cards (Classic Govt Metric Boxes) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white border border-slate-300 p-3 text-center">
            <span className="text-[11px] text-slate-500 font-bold block">કુલ સંશોધન અભ્યાસો</span>
            <span className="text-2xl font-bold font-mono text-[#004b87]">૧૦૦+</span>
            <span className="text-[10px] text-emerald-700 font-semibold block mt-1">&#10003; ૮૬ પૂર્ણ અહેવાલો</span>
          </div>
          <div className="bg-white border border-slate-300 p-3 text-center">
            <span className="text-[11px] text-slate-500 font-bold block">સહભાગી રાષ્ટ્રીય સંસ્થાઓ</span>
            <span className="text-2xl font-bold font-mono text-[#004b87]">૧૪</span>
            <span className="text-[10px] text-slate-600 block mt-1">CWPRS, NIOT, IITs, SAC</span>
          </div>
          <div className="bg-white border border-slate-300 p-3 text-center">
            <span className="text-[11px] text-slate-500 font-bold block">દરિયાઈ બોરહોલ ડ્રિલિંગ</span>
            <span className="text-2xl font-bold font-mono text-[#004b87]">૪૫૦+</span>
            <span className="text-[10px] text-slate-600 block mt-1">અખાતમાં ભૂસ્તર નમૂનાઓ</span>
          </div>
          <div className="bg-white border border-slate-300 p-3 text-center">
            <span className="text-[11px] text-slate-500 font-bold block">ભાડભૂત બેરેજ ભૌતિક પ્રગતિ</span>
            <span className="text-2xl font-bold font-mono text-[#004b87]">૭૮%</span>
            <span className="text-[10px] text-amber-700 font-semibold block mt-1">&#9203; સમયમર્યાદા: ૨૦૨૭</span>
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-white border border-slate-300 p-3 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="font-bold text-slate-700 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5 text-[#1c5e8a]" /> વર્ગ (Category):
            </span>
            {["ALL", "Hydrography", "Renewable Energy", "Environment", "Transportation", "Engineering"].map(c => (
              <button
                key={c}
                onClick={() => setFilterCat(c)}
                className={`px-2.5 py-1 text-[11px] font-semibold border ${
                  filterCat === c
                    ? "bg-[#1c5e8a] text-white border-[#004b87]"
                    : "bg-slate-100 text-slate-700 border-slate-300 hover:bg-slate-200"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="flex items-center border border-slate-300 bg-white px-2 py-1">
            <Search className="w-3.5 h-3.5 text-slate-400 mr-1.5" />
            <input
              type="text"
              placeholder="અહેવાલ શોધો / Search title..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="text-xs outline-none w-48 text-slate-800"
            />
          </div>
        </div>

        {/* Technical Reports Ledger Table */}
        <div className="bg-white border border-slate-300 shadow-sm overflow-hidden">
          <div className="bg-[#1c5e8a] text-white px-4 py-2 font-serif text-sm font-bold flex items-center justify-between">
            <span>પ્રકાશિત ટેકનિકલ અહેવાલો અને સંશોધન પત્રકોની સત્તાવાર યાદી (Official Report Repository)</span>
            <span className="text-xs font-mono font-normal">Clause 3.3 Reference</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-[#1c5e8a] text-white font-bold border-b border-blue-700">
                  <th className="py-2.5 px-3 border-r border-blue-400 text-center w-12">ક્રમ</th>
                  <th className="py-2.5 px-3 border-r border-blue-400">અહેવાલનું શીર્ષક / Title</th>
                  <th className="py-2.5 px-3 border-r border-blue-400">સંસ્થા / Agency</th>
                  <th className="py-2.5 px-3 border-r border-blue-400">સંદર્ભ ક્રમાંક</th>
                  <th className="py-2.5 px-3 border-r border-blue-400">તારીખ</th>
                  <th className="py-2.5 px-3 border-r border-blue-400">સ્થિતિ / Status</th>
                  <th className="py-2.5 px-3 text-center">ડાઉનલોડ</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-300">
                {filtered.map((item, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-blue-50/40"}>
                    <td className="py-2.5 px-3 text-center font-mono font-bold text-[#004b87] border-r border-slate-200">
                      {item.sr}
                    </td>
                    <td className="py-2.5 px-3 border-r border-slate-200">
                      <div className="font-bold text-slate-900">
                        {language === "gujarati" ? item.titleGu : item.titleEn}
                      </div>
                      <div className="text-[10px] text-slate-500 font-mono mt-0.5">
                        વર્ગ: {item.cat} | કદ: {item.size} PDF
                      </div>
                    </td>
                    <td className="py-2.5 px-3 text-slate-700 font-medium border-r border-slate-200">
                      {item.agency}
                    </td>
                    <td className="py-2.5 px-3 font-mono text-[11px] text-slate-600 border-r border-slate-200">
                      {item.refNo}
                    </td>
                    <td className="py-2.5 px-3 font-mono text-[11px] text-slate-600 border-r border-slate-200 whitespace-nowrap">
                      {item.date}
                    </td>
                    <td className="py-2.5 px-3 border-r border-slate-200">
                      <span className={`px-2 py-0.5 border text-[10px] font-bold ${item.statusColor}`}>
                        {item.status}
                      </span>
                    </td>
                    <td className="py-2.5 px-3 text-center">
                      <button
                        onClick={() => alert(`ડાઉનલોડ થઈ રહ્યું છે: ${item.titleEn}`)}
                        className="bg-[#1c5e8a] hover:bg-slate-900 text-white px-2.5 py-1 text-[11px] font-bold rounded-none flex items-center gap-1 mx-auto"
                      >
                        <Download className="w-3 h-3" />
                        <span>PDF</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      <ProtoFooter variant="classic" />
      <Chatbot />
      <FeedbackModal />
    </div>
  );
};
