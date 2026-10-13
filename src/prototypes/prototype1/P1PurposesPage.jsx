import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useApp } from "../../context/AppContext";
import { ProtoHeader } from "../common/ProtoHeader";
import { ProtoFooter } from "../common/ProtoFooter";
import { Chatbot } from "../../components/common/Chatbot";
import { FeedbackModal } from "../../components/common/FeedbackModal";
import { projectPurposes, keyProjectFacts, departmentInfo } from "../../data/kalpasarData";
import {
  Compass,
  Waves,
  Zap,
  Sprout,
  Anchor,
  ShieldAlert,
  Car,
  Printer,
  Table,
  CheckSquare,
  FileSpreadsheet
} from "lucide-react";

export const P1PurposesPage = () => {
  const { language, t } = useApp();
  const [selectedPurpose, setSelectedPurpose] = useState(null);

  const purposeIcons = {
    "purp-1": <Waves className="w-5 h-5 text-[#1c5e8a]" />,
    "purp-2": <Zap className="w-5 h-5 text-amber-600" />,
    "purp-3": <Sprout className="w-5 h-5 text-emerald-700" />,
    "purp-4": <Car className="w-5 h-5 text-[#004b87]" />,
    "purp-5": <ShieldAlert className="w-5 h-5 text-red-700" />,
    "purp-6": <Anchor className="w-5 h-5 text-cyan-700" />,
    "purp-7": <Compass className="w-5 h-5 text-indigo-700" />
  };

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
              {language === "gujarati" ? "યોજનાના બહુહેતુક ઉદ્દેશો" : language === "hindi" ? "परियोजना के बहुउद्देश्यीय लक्ष्य" : "Project Purposes & Objectives"}
            </span>
          </div>
          <div className="flex items-center gap-4 text-[11px] text-slate-200">
            <span>વિભાગ: કલ્પસર યોજના પ્રભાગ</span>
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
        {/* Header Gazette Box */}
        <div className="bg-white border-t-4 border-[#1c5e8a] border-x border-b border-slate-300 p-5 shadow-sm">
          <span className="text-[11px] font-bold text-[#1c5e8a] uppercase tracking-wider block">
            Government of Gujarat | Gulf of Khambhat Development Project
          </span>
          <h1 className="text-xl sm:text-2xl font-bold font-serif text-[#004b87] mt-0.5">
            {language === "gujarati"
              ? "કલ્પસર યોજનાના ૭ મુખ્ય બહુહેતુક ઉદ્દેશો અને ટેકનિકલ માપદંડો"
              : language === "hindi"
              ? "कल्पसर परियोजना के 7 प्रमुख बहुउद्देश्यीय लक्ष्य एवं तकनीकी मापदंड"
              : "Kalpasar Project: 7 Core Multi-Purpose Objectives & Technical Parameters"}
          </h1>
          <p className="text-xs text-slate-600 mt-1 leading-relaxed">
            ખંભાતના અખાતમાં મીઠા પાણીનું સરોવર નિર્માણ કરી સૌરાષ્ટ્ર અને મધ્ય ગુજરાતના જળસંકટ, વીજ સંકટ અને પરિવહન અંતરને કાયમી ધોરણે ઉકેલવાની વૈશ્વિક સ્તરની ઇજનેરી યોજના.
          </p>
        </div>

        {/* Technical Parameters Table (Old Govt Ledger Style) */}
        <div className="bg-white border border-slate-300 p-5 shadow-sm space-y-3">
          <div className="bg-[#1c5e8a] text-white px-4 py-2 font-serif text-sm font-bold flex items-center justify-between">
            <span className="flex items-center gap-2">
              <FileSpreadsheet className="w-4 h-4" />
              <span>યોજનાના મુખ્ય ટેકનિકલ પરિમાણો (Salient Technical Features)</span>
            </span>
            <span className="text-xs font-mono font-normal">CWPRS & NIOT Baseline</span>
          </div>

          <div className="overflow-x-auto border border-slate-300">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-[#1c5e8a] text-white font-bold">
                  <th className="py-2.5 px-3 border-r border-blue-400">ક્રમ</th>
                  <th className="py-2.5 px-3 border-r border-blue-400">મુખ્ય પરિમાણ / Feature</th>
                  <th className="py-2.5 px-3 border-r border-blue-400">મૂલ્ય / Capacity</th>
                  <th className="py-2.5 px-3">વિગતવાર ઇજનેરી મહત્વ / Engineering Significance</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-300">
                {keyProjectFacts.map((fact, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-blue-50/40"}>
                    <td className="py-2.5 px-3 font-mono font-bold text-[#004b87] border-r border-slate-200 text-center">
                      {i + 1}
                    </td>
                    <td className="py-2.5 px-3 font-bold text-slate-900 border-r border-slate-200">
                      {language === "gujarati" ? fact.labelGu : language === "hindi" ? fact.labelHi : fact.labelEn}
                    </td>
                    <td className="py-2.5 px-3 font-mono font-bold text-[#004b87] border-r border-slate-200">
                      {fact.metric}
                    </td>
                    <td className="py-2.5 px-3 text-slate-700 text-[11px]">
                      {language === "gujarati" ? fact.descriptionGu : language === "hindi" ? fact.descriptionHi : fact.descriptionEn}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 7 Purposes Grid in Classic Government Ledger Cards */}
        <div className="bg-white border border-slate-300 p-5 shadow-sm space-y-4">
          <div className="border-b-2 border-[#1c5e8a] pb-2 flex items-center justify-between">
            <h2 className="text-sm font-bold font-serif text-[#004b87] uppercase">
              ૭ પ્રમુખ બહુહેતુક ઘટકોનું વિવરણ (Detailed Purpose Breakdown)
            </h2>
            <span className="text-[11px] text-slate-500">Government of Gujarat Gazette</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projectPurposes.map((p, idx) => (
              <div
                key={p.id}
                className="border border-slate-300 bg-[#fbfbfb] p-4 flex flex-col justify-between hover:border-[#1c5e8a] transition shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-slate-200 pb-2 mb-3">
                    <span className="bg-[#1c5e8a] text-white font-mono font-bold text-xs px-2 py-0.5">
                      ઉદ્દેશ #{idx + 1}
                    </span>
                    <div className="p-1 border border-slate-300 bg-white">
                      {purposeIcons[p.id] || <Waves className="w-4 h-4 text-[#1c5e8a]" />}
                    </div>
                  </div>

                  <h3 className="font-bold text-sm text-[#004b87] font-serif mb-1.5">
                    {language === "gujarati" ? p.titleGu : language === "hindi" ? p.titleHi : p.titleEn}
                  </h3>

                  <div className="mb-2 bg-blue-50 border border-blue-200 px-2 py-1 text-[11px] font-mono font-bold text-[#004b87]">
                    લક્ષિત ક્ષમતા: {p.stat}
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {language === "gujarati" ? p.descriptionGu : language === "hindi" ? p.descriptionHi : p.descriptionEn}
                  </p>
                </div>

                <div className="mt-4 pt-2 border-t border-slate-200 flex items-center justify-between text-[11px] text-slate-500">
                  <span>પ્રાયોરિટી: કેબિનેટ મંજૂર</span>
                  <span className="text-[#1c5e8a] font-bold">&raquo;&raquo; અહેવાલ જુઓ</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <ProtoFooter variant="classic" />
      <Chatbot />
      <FeedbackModal />
    </div>
  );
};
