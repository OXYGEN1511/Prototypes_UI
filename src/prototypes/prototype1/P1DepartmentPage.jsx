import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useApp } from "../../context/AppContext";
import { ProtoHeader } from "../common/ProtoHeader";
import { ProtoFooter } from "../common/ProtoFooter";
import { Chatbot } from "../../components/common/Chatbot";
import { FeedbackModal } from "../../components/common/FeedbackModal";
import {
  departmentInfo,
  leadershipData,
  gujaratHolidays2026,
  upcomingEvents,
  organizationHierarchy
} from "../../data/kalpasarData";
import {
  Building2,
  FileText,
  Calendar,
  Users,
  Award,
  CheckSquare,
  Landmark,
  ChevronRight,
  ExternalLink,
  MapPin,
  Clock,
  Printer
} from "lucide-react";

export const P1DepartmentPage = () => {
  const { language, t } = useApp();
  const [activeTab, setActiveTab] = useState("overview");

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
              {language === "gujarati" ? "વિભાગ પરિચય" : language === "hindi" ? "विभाग परिचय" : "About Department"}
            </span>
          </div>
          <div className="flex items-center gap-4 text-[11px] text-slate-200">
            <span>સંદર્ભ: સામાન્ય વહીવટ વિભાગ (GAD)</span>
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
        {/* Title Notice Banner with Classic Framing */}
        <div className="bg-white border-t-4 border-[#1c5e8a] border-x border-b border-slate-300 p-5 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 bg-[#1c5e8a] text-white rounded-none flex items-center justify-center shrink-0 border border-[#004b87]">
              <Landmark className="w-8 h-8" />
            </div>
            <div>
              <span className="text-[11px] font-bold text-[#1c5e8a] uppercase tracking-wider block">
                નર્મદા, જળસંપત્તિ, પાણી પુરવઠા અને કલ્પસર પ્રભાગ | Government of Gujarat
              </span>
              <h1 className="text-xl sm:text-2xl font-bold font-serif text-[#004b87] mt-0.5">
                {language === "gujarati"
                  ? "કલ્પસર વિભાગ — વહીવટી માળખું અને સંગઠન"
                  : language === "hindi"
                  ? "कल्पसर विभाग — प्रशासनिक ढांचा एवं संगठन"
                  : "Kalpasar Department — Governance & Administrative Framework"}
              </h1>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                RFP Requirement Clause 3.3 & Clause 3.9 — Official disclosure of Department Mandate, Powers & Duties of Officers, and Statutory Gujarat Gazetted Holidays (2026).
              </p>
            </div>
          </div>

          {/* Classic Govt Navigation Tabs */}
          <div className="flex flex-wrap items-center gap-1 mt-6 border-b border-slate-300 text-xs font-semibold">
            {[
              { id: "overview", label: "વિભાગ પરિચય (Overview & Mandate)", icon: <Building2 className="w-3.5 h-3.5" /> },
              { id: "hierarchy", label: "સંગઠન માળખું (Hierarchy & Duties - Clause 3.3)", icon: <Users className="w-3.5 h-3.5" /> },
              { id: "holidays", label: "સરકારી રજાઓની યાદી (Holidays 2026 - Clause 3.9)", icon: <Calendar className="w-3.5 h-3.5" /> },
              { id: "events", label: "વિભાગીય કાર્યક્રમો (Event Calendar)", icon: <Clock className="w-3.5 h-3.5" /> }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-1.5 px-4 py-2 border-t-2 transition ${
                  activeTab === tab.id
                    ? "bg-[#1c5e8a] text-white border-[#004b87] font-bold shadow-sm"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200 border-transparent border-b"
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* TAB 1: OVERVIEW & LEADERSHIP */}
        {activeTab === "overview" && (
          <div className="space-y-6">
            {/* Leadership Grid - Classic Portrait Box */}
            <div className="bg-white border border-slate-300 shadow-sm p-5">
              <h2 className="text-sm font-bold font-serif text-[#004b87] uppercase border-b-2 border-[#1c5e8a] pb-1.5 mb-4 flex items-center justify-between">
                <span>વિભાગીય નેતૃત્વ / Department Leadership</span>
                <span className="text-[11px] text-slate-500 font-sans font-normal">Gandhinagar Secretariat</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {leadershipData.map((leader, idx) => (
                  <div
                    key={idx}
                    className="border border-slate-200 bg-[#f9fafb] p-3 text-center flex flex-col items-center hover:border-[#1c5e8a] transition"
                  >
                    <div className="w-24 h-28 border-2 border-slate-400 bg-white p-1 mb-2 shadow-sm">
                      <img
                        src={leader.image}
                        alt={leader.nameEn}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="font-bold text-xs text-[#004b87] font-serif">
                      {language === "gujarati" ? leader.nameGu : language === "hindi" ? leader.nameHi : leader.nameEn}
                    </div>
                    <div className="text-[11px] font-semibold text-slate-800 mt-0.5">
                      {language === "gujarati" ? leader.roleGu : language === "hindi" ? leader.roleHi : leader.roleEn}
                    </div>
                    <div className="text-[10px] text-slate-600 mt-0.5">
                      {language === "gujarati" ? leader.portfolioGu : language === "hindi" ? leader.portfolioHi : leader.portfolioEn}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Department Mission & Institutional Mandate */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white border border-slate-300 p-5 shadow-sm">
                <div className="bg-[#1c5e8a] text-white text-xs font-bold px-3 py-1.5 mb-3 flex items-center gap-1.5">
                  <CheckSquare className="w-3.5 h-3.5" />
                  <span>વિભાગની મુખ્ય કામગીરી (Mandated Functions)</span>
                </div>
                <ul className="text-xs text-slate-700 space-y-2.5">
                  <li className="flex items-start gap-2">
                    <span className="text-[#1c5e8a] font-bold">&raquo;&raquo;</span>
                    <span><strong>હાઈડ્રોગ્રાફિક સર્વે:</strong> ખંભાતના અખાતમાં ૩૦ કિમી ડેમ અક્ષરે સમુદ્ર તળિયાની ઊંડાઈ, ભરતીના પ્રવાહો અને કાદવના નિક્ષેપનો સતત વૈજ્ઞાનિક અભ્યાસ.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#1c5e8a] font-bold">&raquo;&raquo;</span>
                    <span><strong>નદી પૂર જળ સંચય:</strong> નર્મદા, મહી, સાબરમતી અને ઢાઢર નદીઓમાંથી દર વર્ષે વહી જતા વધારાના મીઠા પાણીનું જળાશયમાં આયોજન.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#1c5e8a] font-bold">&raquo;&raquo;</span>
                    <span><strong>ટાઈડલ ટર્બાઈન ઇજનેરી:</strong> વિશ્વની સૌથી મોટી ભરતી આધારિત ૫,૮૪૫ મેગાવોટ વિદ્યુત ઉત્પાદન વ્યવસ્થાનું વિગતવાર આયોજન.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#1c5e8a] font-bold">&raquo;&raquo;</span>
                    <span><strong>પર્યાવરણીય મંજૂરી:</strong> MoEF&CC, CWPRS પુણે, NIOT ચેન્નઈ અને કેન્દ્રીય જળ આયોગ (CWC) સાથે વૈધાનિક પરામર્શ.</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-slate-300 p-5 shadow-sm">
                <div className="bg-[#004b87] text-white text-xs font-bold px-3 py-1.5 mb-3 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5" />
                  <span>વિશેષ સત્તા મંડળો અને સમિતિઓ (Statutory Bodies)</span>
                </div>
                <div className="space-y-3 text-xs text-slate-700">
                  <div className="border border-slate-200 p-2.5 bg-[#fdfdfd]">
                    <div className="font-bold text-[#004b87]">૧. સ્ટીયરીંગ કાઉન્સિલ ઓફ મિનિસ્ટર્સ (SCM)</div>
                    <p className="text-[11px] text-slate-600 mt-0.5">માનનીય મુખ્યમંત્રીશ્રીના અધ્યક્ષસ્થાને નીતિવિષયક નિર્ણયો લેતી સર્વોચ્ચ સંસ્થા.</p>
                  </div>
                  <div className="border border-slate-200 p-2.5 bg-[#fdfdfd]">
                    <div className="font-bold text-[#004b87]">૨. કમિટી ઓફ સેક્રેટરીઝ (CSE)</div>
                    <p className="text-[11px] text-slate-600 mt-0.5">મુખ્ય સચિવશ્રીના વડપણ હેઠળ વિવિધ સરકારી વિભાગો વચ્ચે આંતર-વિભાગીય સંકલન.</p>
                  </div>
                  <div className="border border-slate-200 p-2.5 bg-[#fdfdfd]">
                    <div className="font-bold text-[#004b87]">૩. એક્સપર્ટ એડવાઇઝરી ગ્રુપ (EAG)</div>
                    <p className="text-[11px] text-slate-600 mt-0.5">રાષ્ટ્રીય તથા આંતરરાષ્ટ્રીય સ્તરના સમુદ્ર વિજ્ઞાનીઓ અને હાઇડ્રોલોજી નિષ્ણાતોનું સલાહકાર મંડળ.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: ORGANIZATION HIERARCHY */}
        {activeTab === "hierarchy" && (
          <div className="bg-white border border-slate-300 p-5 shadow-sm space-y-4">
            <div className="bg-[#1c5e8a] text-white px-4 py-2 font-serif text-sm font-bold flex items-center justify-between">
              <span>સંગઠન માળખું અને અધિકારીઓની સત્તા તથા ફરજો (Clause 3.3 Item 2)</span>
              <span className="text-xs font-mono font-normal">GOG-SEC-NWRS-KLP</span>
            </div>
            <p className="text-xs text-slate-600">
              ગુજરાત સરકારના સેવા નિયમો અને કલ્પસર પ્રભાગના વહીવટી અધિકારક્ષેત્ર હેઠળના વિવિધ સ્તરોના અધિકારીઓની યાદી:
            </p>

            <div className="overflow-x-auto border border-slate-300">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-[#1c5e8a] text-white font-bold border-b border-slate-300">
                    <th className="py-2.5 px-3 border-r border-blue-400">સ્તર / Level</th>
                    <th className="py-2.5 px-3 border-r border-blue-400">હોદ્દો / Designation</th>
                    <th className="py-2.5 px-3 border-r border-blue-400">કચેરી / Office</th>
                    <th className="py-2.5 px-3">સત્તા અને વૈધાનિક ફરજો / Powers & Duties</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-300">
                  {organizationHierarchy.map((org, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-blue-50/40"}>
                      <td className="py-2.5 px-3 font-mono font-bold text-[#004b87] border-r border-slate-200">
                        {org.level}
                      </td>
                      <td className="py-2.5 px-3 font-bold text-slate-900 border-r border-slate-200">
                        {org.role}
                      </td>
                      <td className="py-2.5 px-3 text-slate-700 border-r border-slate-200">
                        {org.authority}
                      </td>
                      <td className="py-2.5 px-3 text-[11px] text-slate-600">
                        વહીવટી મંજૂરી, ટેકનિકલ ચકાસણી, ટેન્ડર મંજૂરી અને યોજનાકીય અમલીકરણનું સંચાલન.
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 3: HOLIDAYS */}
        {activeTab === "holidays" && (
          <div className="bg-white border border-slate-300 p-5 shadow-sm space-y-4">
            <div className="bg-[#1c5e8a] text-white px-4 py-2 font-serif text-sm font-bold flex items-center justify-between">
              <span>ગુજરાત સરકાર ગેઝેટેડ જાહેર રજાઓની યાદી (વર્ષ ૨૦૨૬) — Clause 3.9 Item 46</span>
              <span className="text-xs font-mono font-normal">GAD Circular Ref 2026</span>
            </div>
            <p className="text-xs text-slate-600">
              સામાન્ય વહીવટ વિભાગ, સચિવાલય, ગાંધીનગર દ્વારા જાહેર કરાયેલ જાહેર રજાઓનું સત્તાવાર પત્રક:
            </p>

            <div className="overflow-x-auto border border-slate-300">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-[#1c5e8a] text-white font-bold border-b border-slate-300">
                    <th className="py-2.5 px-3 border-r border-blue-400">તારીખ / Date</th>
                    <th className="py-2.5 px-3 border-r border-blue-400">વાર / Day</th>
                    <th className="py-2.5 px-3 border-r border-blue-400">તહેવાર / Occasion</th>
                    <th className="py-2.5 px-3">પ્રકાર / Category</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-300">
                  {gujaratHolidays2026.map((h, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-blue-50/40"}>
                      <td className="py-2 px-3 font-mono font-bold text-slate-900 border-r border-slate-200">
                        {h.date}
                      </td>
                      <td className="py-2 px-3 text-slate-700 border-r border-slate-200">
                        {h.day}
                      </td>
                      <td className="py-2 px-3 font-semibold text-slate-900 border-r border-slate-200">
                        {h.occasion}
                      </td>
                      <td className="py-2 px-3">
                        <span className="bg-blue-100 text-[#004b87] border border-blue-300 px-2 py-0.5 text-[10px] font-bold">
                          {h.type}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 4: EVENTS */}
        {activeTab === "events" && (
          <div className="bg-white border border-slate-300 p-5 shadow-sm space-y-4">
            <div className="bg-[#1c5e8a] text-white px-4 py-2 font-serif text-sm font-bold flex items-center justify-between">
              <span>વિભાગીય આગામી કાર્યક્રમો અને પરિસંવાદો (Event Calendar - Clause 3.3)</span>
              <span className="text-xs font-mono font-normal">Technical Seminars</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {upcomingEvents.map((ev, i) => (
                <div key={i} className="border border-slate-300 p-4 bg-[#fdfdfd] hover:border-[#1c5e8a] transition">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-2 mb-2">
                    <span className="bg-[#1c5e8a] text-white px-2 py-0.5 text-[11px] font-mono font-bold">
                      {ev.date}
                    </span>
                    <span className="text-[10px] text-slate-500 font-semibold uppercase">સત્તાવાર બેઠક</span>
                  </div>
                  <h3 className="font-bold text-sm text-[#004b87] font-serif mb-2">{ev.title}</h3>
                  <div className="flex items-center gap-2 text-xs text-slate-600">
                    <MapPin className="w-3.5 h-3.5 text-[#1c5e8a]" />
                    <span>{ev.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      <ProtoFooter variant="classic" />
      <Chatbot />
      <FeedbackModal />
    </div>
  );
};
