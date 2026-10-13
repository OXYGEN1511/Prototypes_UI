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
  Printer,
  Scale,
  ShieldCheck,
  BookOpen,
  HelpCircle,
  ExternalLink
} from "lucide-react";

export const P1PoliciesPage = () => {
  const { language, t } = useApp();
  const [filterCat, setFilterCat] = useState("ALL");
  const [search, setSearch] = useState("");

  const policyDocuments = [
    {
      id: "pol-1",
      titleGu: "ગુજરાત સિંચાઈ અને જળ સંરક્ષણ અધિનિયમ (કલ્પસર યોજના જોગવાઈઓ)",
      titleEn: "Gujarat Irrigation & Water Conservation Act (Relevant Provisions for Kalpasar)",
      cat: "અધિનિયમ / Acts",
      ref: "ACT-GOG-1979-IV",
      date: "10-01-2026",
      size: "1.2 MB",
      issuing: "જળસંપત્તિ વિભાગ, સચિવાલય"
    },
    {
      id: "pol-2",
      titleGu: "કોસ્ટલ રેગ્યુલેશન ઝોન (CRZ) ક્લિયરન્સ ગાઇડલાઇન્સ અને પર્યાવરણ મંજૂરી",
      titleEn: "Coastal Regulation Zone (CRZ) Clearance Guidelines for Tidal Dam",
      cat: "જાહેરનામા / Notifications",
      ref: "CRZ-ENV-2026-01",
      date: "14-03-2026",
      size: "850 KB",
      issuing: "MoEF&CC / વન અને પર્યાવરણ વિભાગ"
    },
    {
      id: "pol-3",
      titleGu: "કલ્પસર ઇજનેરી સંવર્ગ — ભરતી અને સેવા નિયમો ૨૦૨૬",
      titleEn: "Recruitment & Cadre Rules for Junior Hydrographic Engineers 2026",
      cat: "ભરતી નિયમો / Recruitment",
      ref: "RR-ENG-2026-04",
      date: "18-05-2026",
      size: "1.4 MB",
      issuing: "સામાન્ય વહીવટ વિભાગ (GAD)"
    },
    {
      id: "pol-4",
      titleGu: "સરકારી ઠરાવ: કલ્પસર ઇન્ફ્રાસ્ટ્રક્ચર સ્પેશિયલ પર્પઝ વ્હીકલ (SPV) સ્થાપના",
      titleEn: "Government Resolution: Special Purpose Entity for Kalpasar Infrastructure",
      cat: "સરકારી ઠરાવો / Resolutions",
      ref: "GR-KLP-2026-88",
      date: "22-07-2026",
      size: "2.1 MB",
      issuing: "નાણાં વિભાગ & કલ્પસર પ્રભાગ"
    },
    {
      id: "pol-5",
      titleGu: "દરિયાઈ સર્વેક્ષણ જહાજો અને ડ્રિલિંગ બોટો માટે સ્ટાન્ડર્ડ ઓપરેટિંગ પ્રોસિજર (SOP)",
      titleEn: "Standard Operating Procedures (SOP) for Marine Survey Vessels",
      cat: "પરિપત્રો / Circulars",
      ref: "SOP-SUR-2026-09",
      date: "05-09-2026",
      size: "940 KB",
      issuing: "મુખ્ય ઇજનેર, કલ્પસર કચેરી"
    },
    {
      id: "pol-6",
      titleGu: "માહિતી અધિકાર અધિનિયમ (RTI Act 2005) અંતર્ગત સત્તાવાર જાહેર પ્રકટીકરણ",
      titleEn: "Proactive Disclosure under Right to Information (RTI Act 2005) Section 4(1)(b)",
      cat: "RTI / Disclosure",
      ref: "RTI-KLP-2026-01",
      date: "01-08-2026",
      size: "3.5 MB",
      issuing: "જાહેર માહિતી અધિકારી (PIO), કલ્પસર"
    }
  ];

  const filtered = policyDocuments.filter(p => {
    const matchCat = filterCat === "ALL" || p.cat.includes(filterCat);
    const matchSearch =
      p.titleGu.includes(search) ||
      p.titleEn.toLowerCase().includes(search.toLowerCase()) ||
      p.ref.toLowerCase().includes(search.toLowerCase());
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
              {language === "gujarati" ? "કાયદા, નિયમો અને ઠરાવો" : language === "hindi" ? "अधिनियम, नियम एवं संकल्प" : "Acts, Rules & Resolutions"}
            </span>
          </div>
          <div className="flex items-center gap-4 text-[11px] text-slate-200">
            <span>સત્તાવાર ગેઝેટ વિભાગ</span>
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
            Government of Gujarat | Statutory Laws, Notifications & RTI
          </span>
          <h1 className="text-xl sm:text-2xl font-bold font-serif text-[#004b87] mt-0.5">
            {language === "gujarati"
              ? "કાયદાઓ, વહીવટી નિયમો, સરકારી ઠરાવો (GRs) અને માહિતી અધિકાર (RTI)"
              : language === "hindi"
              ? "अधिनियम, प्रशासनिक नियम, सरकारी संकल्प एवं सूचना का अधिकार"
              : "Acts, Administrative Rules, Government Resolutions (GRs) & RTI"}
          </h1>
          <p className="text-xs text-slate-600 mt-1 leading-relaxed">
            કલ્પસર પ્રભાગ અને ખંભાતના અખાત યોજના સંબંધિત કાયદાકીય માળખું, ભરતી નિયમાવલીઓ, સરકારી ગેઝેટ પરિપત્રો અને RTI એક્ટ કલમ ૪(૧)(ખ) હેઠળનું પ્રકટીકરણ.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white border border-slate-300 p-3 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="font-bold text-slate-700 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5 text-[#1c5e8a]" /> દસ્તાવેજ વર્ગ:
            </span>
            {["ALL", "Acts", "Notifications", "Recruitment", "Resolutions", "Circulars", "RTI"].map(c => (
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
              placeholder="ઠરાવ અથવા વિષય શોધો..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="text-xs outline-none w-48 text-slate-800"
            />
          </div>
        </div>

        {/* Policies Register Table */}
        <div className="bg-white border border-slate-300 shadow-sm overflow-hidden">
          <div className="bg-[#1c5e8a] text-white px-4 py-2 font-serif text-sm font-bold flex items-center justify-between">
            <span>સત્તાવાર ગેઝેટ અને પરિપત્ર રજિસ્ટર (Official Legislative Repository)</span>
            <span className="text-xs font-mono font-normal">Updated: 2026</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-[#1c5e8a] text-white font-bold border-b border-blue-700">
                  <th className="py-2.5 px-3 border-r border-blue-400 text-center w-12">ક્રમ</th>
                  <th className="py-2.5 px-3 border-r border-blue-400">દસ્તાવેજ શીર્ષક / Subject</th>
                  <th className="py-2.5 px-3 border-r border-blue-400">વર્ગ / Category</th>
                  <th className="py-2.5 px-3 border-r border-blue-400">સંદર્ભ ક્રમાંક</th>
                  <th className="py-2.5 px-3 border-r border-blue-400">જારી કરનાર શાખા</th>
                  <th className="py-2.5 px-3 border-r border-blue-400">તારીખ</th>
                  <th className="py-2.5 px-3 text-center">ડાઉનલોડ</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-300">
                {filtered.map((item, idx) => (
                  <tr key={item.id} className={idx % 2 === 0 ? "bg-white" : "bg-blue-50/40"}>
                    <td className="py-2.5 px-3 text-center font-mono font-bold text-[#004b87] border-r border-slate-200">
                      {idx + 1}
                    </td>
                    <td className="py-2.5 px-3 border-r border-slate-200">
                      <div className="font-bold text-slate-900">
                        {language === "gujarati" ? item.titleGu : item.titleEn}
                      </div>
                      <div className="text-[10px] text-slate-500 font-mono mt-0.5">
                        કદ: {item.size} &bull; ફોર્મેટ: સત્તાવાર PDF (ગુજરાતી / અંગ્રેજી)
                      </div>
                    </td>
                    <td className="py-2.5 px-3 font-semibold text-slate-700 border-r border-slate-200">
                      <span className="bg-slate-100 border border-slate-300 px-2 py-0.5 text-[10px]">
                        {item.cat}
                      </span>
                    </td>
                    <td className="py-2.5 px-3 font-mono text-[11px] text-slate-800 border-r border-slate-200">
                      {item.ref}
                    </td>
                    <td className="py-2.5 px-3 text-slate-600 border-r border-slate-200 text-[11px]">
                      {item.issuing}
                    </td>
                    <td className="py-2.5 px-3 font-mono text-[11px] text-slate-700 border-r border-slate-200 whitespace-nowrap">
                      {item.date}
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

        {/* RTI Statutory Notice Box (Classic Old Govt Layout) */}
        <div className="bg-[#fffef0] border border-amber-300 p-4 text-xs text-amber-950 space-y-2">
          <div className="font-bold flex items-center gap-1.5 text-amber-900">
            <Scale className="w-4 h-4 text-amber-800" />
            <span>માહિતી અધિકાર અધિનિયમ (RTI Act 2005) — વૈધાનિક જાહેરાત</span>
          </div>
          <p className="text-[11px] leading-relaxed">
            આ યોજના સંબંધિત RTI અરજીઓ જાહેર માહિતી અધિકારી (PIO), કલ્પસર પ્રભાગ, બ્લોક નં. ૮, સાતમો માળ, નવું સચિવાલય, ગાંધીનગર ખાતે સ્વીકારવામાં આવે છે. પ્રથમ અપીલ સત્તાધિકારી અધિક સચિવશ્રી (કલ્પસર) છે.
          </p>
        </div>
      </main>

      <ProtoFooter variant="classic" />
      <Chatbot />
      <FeedbackModal />
    </div>
  );
};
