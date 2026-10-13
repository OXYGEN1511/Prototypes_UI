import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useApp } from "../../context/AppContext";
import { Proto3Header } from "./components/Proto3Header";
import { Proto3Footer } from "./components/Proto3Footer";
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
  Users,
  Calendar,
  Clock,
  Award,
  ShieldCheck,
  ChevronRight,
  ExternalLink,
  MapPin,
  CheckCircle,
  Briefcase,
  FileSpreadsheet
} from "lucide-react";

export const P3DepartmentPage = () => {
  const { language, t } = useApp();
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col justify-between font-sans selection:bg-amber-400 selection:text-slate-950">
      <Proto3Header basePath="/prototype-3" />

      {/* Enterprise PSU Corporate Banner */}
      <section className="bg-gradient-to-r from-slate-900 via-[#0d2a4a] to-slate-900 text-white py-10 border-b-4 border-amber-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-slate-300 font-medium">
            <Link to="/prototype-3" className="hover:text-amber-400 transition">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-amber-400 font-bold">About Department</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-2">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-amber-500/20 text-amber-300 border border-amber-400/40 text-xs font-bold uppercase tracking-wider mb-2">
                <Briefcase className="w-3.5 h-3.5" />
                <span>PSU Governance & Mandate (Clause 3.3)</span>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
                {language === "gujarati"
                  ? "કલ્પસર વિભાગ — સંગઠન માળખું અને વહીવટી સંચાલન"
                  : language === "hindi"
                  ? "कल्पसर विभाग — संगठन ढांचा एवं प्रशासनिक प्रबंधन"
                  : "Kalpasar Department: Organization & Corporate Mandate"}
              </h1>
            </div>

            <div className="text-right shrink-0">
              <span className="block text-xs text-slate-300">Public Sector Engineering Entity</span>
              <span className="font-mono text-xs text-amber-400 font-bold">Government of Gujarat</span>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Nav Tabs */}
      <div className="border-b border-slate-200 bg-slate-50 sticky top-0 z-20 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap gap-2 py-2">
          {[
            { id: "overview", label: "Executive Leadership & Mandate", icon: <Building2 className="w-4 h-4" /> },
            { id: "hierarchy", label: "Hierarchy & Powers (Clause 3.3)", icon: <Users className="w-4 h-4" /> },
            { id: "holidays", label: "State Gazetted Holidays 2026", icon: <Calendar className="w-4 h-4" /> },
            { id: "events", label: "Corporate Event Calendar", icon: <Clock className="w-4 h-4" /> }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2.5 text-xs font-bold rounded-md transition ${
                activeTab === tab.id
                  ? "bg-slate-900 text-amber-400 shadow-sm border-b-2 border-amber-400"
                  : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/70"
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      <main id="main-content" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-1 w-full space-y-10">
        {/* TAB 1: OVERVIEW */}
        {activeTab === "overview" && (
          <div className="space-y-10">
            {/* Leadership Section */}
            <div className="border-t-4 border-amber-500 bg-white p-6 sm:p-8 rounded-lg shadow-sm border-x border-b border-slate-200 space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <h2 className="text-xl font-bold text-slate-900">
                    Apex Department Leadership & Directorate
                  </h2>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Executive administration of the Gulf of Khambhat Development Project
                  </p>
                </div>
                <span className="text-xs font-mono font-bold text-slate-600 bg-slate-100 px-3 py-1 rounded">
                  New Sachivalaya, Gandhinagar
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {leadershipData.map((leader, idx) => (
                  <div
                    key={idx}
                    className="border border-slate-200 rounded-lg p-5 bg-slate-50/50 hover:border-amber-400 hover:shadow-md transition duration-200 flex flex-col items-center text-center group"
                  >
                    <div className="relative mb-3">
                      <img
                        src={leader.image}
                        alt={leader.nameEn}
                        className="w-24 h-24 rounded-full object-cover ring-4 ring-white shadow-md group-hover:ring-amber-400 transition"
                      />
                      <div className="absolute bottom-0 right-0 w-6 h-6 rounded-full bg-slate-900 border-2 border-white flex items-center justify-center">
                        <Award className="w-3.5 h-3.5 text-amber-400" />
                      </div>
                    </div>
                    <h3 className="font-bold text-slate-900 text-sm group-hover:text-amber-600 transition">
                      {language === "gujarati" ? leader.nameGu : language === "hindi" ? leader.nameHi : leader.nameEn}
                    </h3>
                    <div className="text-xs font-semibold text-slate-700 mt-1">
                      {language === "gujarati" ? leader.roleGu : language === "hindi" ? leader.roleHi : leader.roleEn}
                    </div>
                    <div className="text-[11px] text-slate-500 mt-1">
                      {language === "gujarati" ? leader.portfolioGu : language === "hindi" ? leader.portfolioHi : leader.portfolioEn}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Enterprise Strategic Functions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-slate-200 rounded-lg p-6 bg-white shadow-sm space-y-4">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-base border-b border-slate-100 pb-3">
                  <ShieldCheck className="w-5 h-5 text-amber-500" />
                  <span>Statutory Department Mandate</span>
                </div>
                <ul className="text-xs text-slate-600 space-y-3">
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                    <span><strong>Integrated Marine Hydrography:</strong> Rigorous seabed profiling, tidal amplitude logging, and silt deposition monitoring with CWPRS Pune & NIOT Chennai.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                    <span><strong>Hydraulic River Discharge Modeling:</strong> Mathematical computer simulation of surplus flood volume from Narmada, Mahi, Sabarmati, and Dhadhar rivers.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                    <span><strong>Tidal Turbine Engineering:</strong> Turnkey project design for 5,845 MW clean tidal turbine powerhouses with reversible sluice gates.</span>
                  </li>
                </ul>
              </div>

              <div className="border border-slate-200 rounded-lg p-6 bg-white shadow-sm space-y-4">
                <div className="flex items-center gap-2 text-slate-900 font-bold text-base border-b border-slate-100 pb-3">
                  <Briefcase className="w-5 h-5 text-amber-500" />
                  <span>Corporate Governance Councils</span>
                </div>
                <div className="space-y-3 text-xs text-slate-600">
                  <div className="p-3 rounded bg-slate-50 border border-slate-200">
                    <strong className="text-slate-900 block font-semibold">1. Steering Council of Ministers (SCM)</strong>
                    <span className="text-[11px] text-slate-500">Chaired by Hon'ble Chief Minister for strategic policy direction.</span>
                  </div>
                  <div className="p-3 rounded bg-slate-50 border border-slate-200">
                    <strong className="text-slate-900 block font-semibold">2. Committee of Secretaries (CSE)</strong>
                    <span className="text-[11px] text-slate-500">Inter-ministerial committee under Chief Secretary for cross-departmental coordination.</span>
                  </div>
                  <div className="p-3 rounded bg-slate-50 border border-slate-200">
                    <strong className="text-slate-900 block font-semibold">3. Expert Advisory Group (EAG)</strong>
                    <span className="text-[11px] text-slate-500">Technical council of eminent oceanographers, hydraulic engineers, and geologists.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: HIERARCHY */}
        {activeTab === "hierarchy" && (
          <div className="border-t-4 border-amber-500 bg-white p-6 sm:p-8 rounded-lg shadow-sm border-x border-b border-slate-200 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div>
                <h2 className="text-xl font-bold text-slate-900">
                  Organization Hierarchy & Officer Powers (Clause 3.3)
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  Administrative delegation and executive duties of departmental officers
                </p>
              </div>
              <span className="text-xs font-mono text-slate-500">GOG-NWRS-KLP</span>
            </div>

            <div className="overflow-x-auto border border-slate-200 rounded-lg">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-900 text-white font-bold">
                  <tr>
                    <th className="py-3 px-4 font-mono text-amber-400">Level</th>
                    <th className="py-3 px-4">Designation & Role</th>
                    <th className="py-3 px-4">Designated Authority / Office</th>
                    <th className="py-3 px-4">Statutory Powers & Executive Duties</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  {organizationHierarchy.map((org, i) => (
                    <tr key={i} className="hover:bg-amber-50/50 transition">
                      <td className="py-3 px-4 font-mono font-bold text-amber-600">{org.level}</td>
                      <td className="py-3 px-4 font-bold text-slate-900">{org.role}</td>
                      <td className="py-3 px-4 text-slate-700">{org.authority}</td>
                      <td className="py-3 px-4 text-slate-600 text-[11px]">
                        Administrative sanctions, technical clearances, e-tender approvals, and field implementation oversight.
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
          <div className="border-t-4 border-amber-500 bg-white p-6 sm:p-8 rounded-lg shadow-sm border-x border-b border-slate-200 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div>
                <h2 className="text-xl font-bold text-slate-900">
                  Gujarat State Government Gazetted Holidays (Year 2026)
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  Statutory public disclosure under RFP Clause 3.9 Item 46
                </p>
              </div>
              <span className="text-xs font-mono font-bold bg-amber-100 text-amber-900 px-3 py-1 rounded">
                GAD Circular 2026
              </span>
            </div>

            <div className="overflow-x-auto border border-slate-200 rounded-lg">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-900 text-white font-bold">
                  <tr>
                    <th className="py-3 px-4 font-mono text-amber-400">Date</th>
                    <th className="py-3 px-4">Day</th>
                    <th className="py-3 px-4">Occasion / Festival</th>
                    <th className="py-3 px-4">Type</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  {gujaratHolidays2026.map((h, i) => (
                    <tr key={i} className="hover:bg-amber-50/50 transition">
                      <td className="py-2.5 px-4 font-mono font-bold text-slate-900">{h.date}</td>
                      <td className="py-2.5 px-4 text-slate-600">{h.day}</td>
                      <td className="py-2.5 px-4 font-semibold text-slate-800">{h.occasion}</td>
                      <td className="py-2.5 px-4">
                        <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-800 border border-slate-200">
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
          <div className="border-t-4 border-amber-500 bg-white p-6 sm:p-8 rounded-lg shadow-sm border-x border-b border-slate-200 space-y-4">
            <div className="border-b border-slate-100 pb-4">
              <h2 className="text-xl font-bold text-slate-900">
                Corporate Events & Stakeholder Consultations Calendar
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Upcoming pre-bid conferences, technical symposiums, and engineering reviews
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {upcomingEvents.map((ev, i) => (
                <div
                  key={i}
                  className="p-5 rounded-lg border border-slate-200 bg-slate-50/60 hover:border-amber-400 hover:shadow-sm transition space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 bg-slate-900 text-amber-400 rounded font-mono font-bold text-[11px]">
                      {ev.date}
                    </span>
                    <span className="text-slate-400 text-[10px] font-semibold uppercase">
                      Scheduled
                    </span>
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm">{ev.title}</h3>
                  <div className="flex items-center gap-1.5 text-slate-600 text-xs">
                    <MapPin className="w-3.5 h-3.5 text-amber-500" />
                    <span>{ev.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      <Proto3Footer basePath="/prototype-3" />
      <Chatbot />
      <FeedbackModal />
    </div>
  );
};
