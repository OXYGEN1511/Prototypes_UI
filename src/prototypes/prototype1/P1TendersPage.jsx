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
  Printer,
  AlertCircle,
  ExternalLink,
  Calendar,
  Clock,
  Landmark
} from "lucide-react";

export const P1TendersPage = () => {
  const { language, t } = useApp();
  const [filterCat, setFilterCat] = useState("ALL");
  const [search, setSearch] = useState("");

  const notices = kalpasarStore.getPublishedNotices();

  const filtered = notices.filter(n => {
    const matchCat = filterCat === "ALL" || n.category === filterCat;
    const matchSearch =
      n.titleGu.includes(search) ||
      n.titleEn.toLowerCase().includes(search.toLowerCase()) ||
      n.refNo.toLowerCase().includes(search.toLowerCase());
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
              {language === "gujarati" ? "ટેન્ડર અને જાહેર નોટિસો" : language === "hindi" ? "निविदा एवं सार्वजनिक सूचनाएं" : "Tenders & Public Notices"}
            </span>
          </div>
          <div className="flex items-center gap-4 text-[11px] text-slate-200">
            <span>ઇ-પ્રોક્યોરમેન્ટ શાખા / e-Procurement Portal</span>
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
        {/* Title Gazette Header */}
        <div className="bg-white border-t-4 border-[#1c5e8a] border-x border-b border-slate-300 p-5 shadow-sm">
          <span className="text-[11px] font-bold text-[#1c5e8a] uppercase tracking-wider block">
            Government of Gujarat | Public Works & e-Procurement
          </span>
          <h1 className="text-xl sm:text-2xl font-bold font-serif text-[#004b87] mt-0.5">
            {language === "gujarati"
              ? "કલ્પસર પ્રભાગ — જાહેર ટેન્ડર, EOI, RFP અને શુદ્ધિપત્રો (Corrigendum)"
              : language === "hindi"
              ? "कल्पसर विभाग — सार्वजनिक निविदा, ईओआई, आरएफपी एवं शुद्धिपत्र"
              : "Kalpasar Department: Active Tenders, RFPs, EOIs & Corrigenda"}
          </h1>
          <p className="text-xs text-slate-600 mt-1 leading-relaxed">
            ખંભાતના અખાત વિકાસ યોજના અંતર્ગત GeM પોર્ટલ તથા ગુજરાત ઇન્ફોર્મેટિક્સ લિમિટેડ (GIL) મારફતે આમંત્રિત ટેન્ડરોની સત્તાવાર જાહેરાત.
          </p>
        </div>

        {/* Procurement Guidelines Note */}
        <div className="bg-[#f0f7fb] border border-[#1c5e8a] p-3 text-xs text-[#004b87] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Landmark className="w-4 h-4 shrink-0 text-[#1c5e8a]" />
            <span>
              <strong>નોંધ:</strong> તમામ બિડરોએ https://tender.nprocure.com અથવા https://gem.gov.in મારફતે ઓનલાઈન બિડ સબમિટ કરવાની રહેશે.
            </span>
          </div>
          <a
            href="https://gem.gov.in"
            target="_blank"
            rel="noreferrer"
            className="text-[11px] font-bold text-[#1c5e8a] underline flex items-center gap-1 shrink-0"
          >
            <span>GeM પોર્ટલ ખોલો</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        {/* Filter Controls */}
        <div className="bg-white border border-slate-300 p-3 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="font-bold text-slate-700 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5 text-[#1c5e8a]" /> ટેન્ડર પ્રકાર:
            </span>
            {["ALL", "RFP", "EOI", "TENDER", "CORRIGENDUM"].map(c => (
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
              placeholder="ટેન્ડર ક્રમાંક અથવા શીર્ષક..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="text-xs outline-none w-48 text-slate-800"
            />
          </div>
        </div>

        {/* Tenders Register Table */}
        <div className="bg-white border border-slate-300 shadow-sm overflow-hidden">
          <div className="bg-[#1c5e8a] text-white px-4 py-2 font-serif text-sm font-bold flex items-center justify-between">
            <span>સત્તાવાર ઇ-ટેન્ડર રજિસ્ટર (Official Public Procurement Register)</span>
            <span className="text-xs font-mono font-normal">Clause 3.3 Compliance</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-[#1c5e8a] text-white font-bold border-b border-blue-700">
                  <th className="py-2.5 px-3 border-r border-blue-400 text-center w-12">ક્રમ</th>
                  <th className="py-2.5 px-3 border-r border-blue-400">ટેન્ડર સંદર્ભ ક્રમાંક</th>
                  <th className="py-2.5 px-3 border-r border-blue-400">ટેન્ડર વિગત / Title</th>
                  <th className="py-2.5 px-3 border-r border-blue-400">વર્ગ</th>
                  <th className="py-2.5 px-3 border-r border-blue-400">પ્રકાશન તારીખ</th>
                  <th className="py-2.5 px-3 border-r border-blue-400">અંતિમ તારીખ</th>
                  <th className="py-2.5 px-3 text-center">ટેન્ડર ડાઉનલોડ</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-300">
                {filtered.map((item, idx) => (
                  <tr key={item.id} className={idx % 2 === 0 ? "bg-white" : "bg-blue-50/40"}>
                    <td className="py-2.5 px-3 text-center font-mono font-bold text-[#004b87] border-r border-slate-200">
                      {idx + 1}
                    </td>
                    <td className="py-2.5 px-3 font-mono text-[11px] font-bold text-[#004b87] border-r border-slate-200">
                      {item.refNo}
                    </td>
                    <td className="py-2.5 px-3 border-r border-slate-200">
                      <div className="font-bold text-slate-900">
                        {language === "gujarati" ? item.titleGu : item.titleEn}
                      </div>
                      <div className="text-[11px] text-slate-600 mt-0.5 line-clamp-1">
                        {language === "gujarati" ? item.summaryGu : item.summaryEn}
                      </div>
                    </td>
                    <td className="py-2.5 px-3 border-r border-slate-200">
                      <span className="bg-blue-100 text-[#004b87] border border-blue-300 px-2 py-0.5 text-[10px] font-bold">
                        {item.category}
                      </span>
                    </td>
                    <td className="py-2.5 px-3 font-mono text-[11px] text-slate-600 border-r border-slate-200 whitespace-nowrap">
                      {item.date}
                    </td>
                    <td className="py-2.5 px-3 font-mono text-[11px] text-red-700 font-bold border-r border-slate-200 whitespace-nowrap">
                      15-11-2026
                    </td>
                    <td className="py-2.5 px-3 text-center">
                      <button
                        onClick={() => alert(`ડાઉનલોડ થઈ રહ્યું છે: ${item.refNo}`)}
                        className="bg-[#1c5e8a] hover:bg-slate-900 text-white px-2.5 py-1 text-[11px] font-bold rounded-none flex items-center gap-1 mx-auto whitespace-nowrap"
                      >
                        <Download className="w-3 h-3" />
                        <span>PDF ({item.fileSize})</span>
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
