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
  Users,
  Calendar,
  Clock,
  Sparkles,
  ShieldCheck,
  ChevronRight,
  ArrowRight,
  CheckCircle2,
  Layers,
  MapPin,
  ExternalLink,
  Search,
  Activity,
  Award
} from "lucide-react";

export const P2DepartmentPage = () => {
  const { language, speakText, t } = useApp();
  const [activeTab, setActiveTab] = useState("overview");

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
            <span className="text-slate-400">Department Governance</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-cyan-300 text-xs font-semibold backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>Clause 3.3 & 3.9 Statutory Transparency</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                {language === "gujarati"
                  ? "કલ્પસર પ્રભાગ — સંગઠન માળખું અને નેતૃત્વ"
                  : language === "hindi"
                  ? "कल्पसर विभाग — संगठन ढांचा एवं नेतृत्व"
                  : "Kalpasar Department: Vision & Administration"}
              </h1>
              <p className="text-slate-400 text-sm leading-relaxed">
                Pioneering the world's largest tidal energy reservoir. Delivering transparent public disclosure of governance hierarchies, officer duties, and gazetted milestones.
              </p>
            </div>

            {/* Quick Action Badges */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() =>
                  speakText(
                    "Kalpasar Department was constituted by Government of Gujarat to plan, survey, design and implement the Gulf of Khambhat Development Project."
                  )
                }
                className="px-4 py-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-semibold flex items-center gap-2 transition"
              >
                <Activity className="w-3.5 h-3.5 text-cyan-400" />
                <span>Listen Audio</span>
              </button>
            </div>
          </div>

          {/* Bento-styled Modern Tabs */}
          <div className="flex flex-wrap items-center gap-2 pt-6 border-t border-slate-800/60 text-xs font-medium">
            {[
              { id: "overview", label: "Executive Leadership & Mandate", icon: <Building2 className="w-3.5 h-3.5" /> },
              { id: "hierarchy", label: "Governance Hierarchy & Powers", icon: <Users className="w-3.5 h-3.5" /> },
              { id: "holidays", label: "Gazetted Holidays 2026", icon: <Calendar className="w-3.5 h-3.5" /> },
              { id: "events", label: "Upcoming Milestones & Events", icon: <Clock className="w-3.5 h-3.5" /> }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl transition duration-200 ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold shadow-lg shadow-cyan-500/20"
                    : "bg-slate-800/60 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-700/60"
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <main id="main-content" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-1 w-full space-y-10">
        {/* TAB 1: OVERVIEW */}
        {activeTab === "overview" && (
          <div className="space-y-10">
            {/* Leadership Bento Grid */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-cyan-400" />
                  <span>Apex Leadership & Administrative Direction</span>
                </h2>
                <span className="text-xs text-slate-400 font-mono">Government of Gujarat</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {leadershipData.map((leader, idx) => (
                  <div
                    key={idx}
                    className="group relative bg-slate-800/50 backdrop-blur-md rounded-2xl border border-slate-700/70 p-6 flex items-center gap-5 hover:border-cyan-500/60 hover:shadow-xl hover:shadow-cyan-950/40 transition duration-300"
                  >
                    <div className="relative shrink-0">
                      <img
                        src={leader.image}
                        alt={leader.nameEn}
                        className="w-20 h-20 rounded-2xl object-cover ring-2 ring-cyan-500/40 group-hover:ring-cyan-400 transition"
                      />
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 ring-2 ring-slate-900 flex items-center justify-center">
                        <CheckCircle2 className="w-3.5 h-3.5 text-slate-950" />
                      </div>
                    </div>
                    <div className="text-xs space-y-1">
                      <h3 className="font-bold text-white text-sm group-hover:text-cyan-300 transition">
                        {language === "gujarati" ? leader.nameGu : language === "hindi" ? leader.nameHi : leader.nameEn}
                      </h3>
                      <div className="text-cyan-400 font-semibold">
                        {language === "gujarati" ? leader.roleGu : language === "hindi" ? leader.roleHi : leader.roleEn}
                      </div>
                      <div className="text-slate-400 text-[11px] leading-tight">
                        {language === "gujarati" ? leader.portfolioGu : language === "hindi" ? leader.portfolioHi : leader.portfolioEn}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Functions Bento */}
            <div className="bg-slate-800/40 rounded-3xl border border-slate-700/60 p-6 sm:p-8 space-y-6">
              <div className="max-w-2xl">
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
                  Operational Architecture
                </span>
                <h3 className="text-xl font-bold text-white mt-1">
                  Key Functions & Working Processes (Clause 3.3)
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                {[
                  {
                    title: "Hydrographic & Bathymetric Seabed Profiling",
                    desc: "Continuous sub-bottom profiling across the 30 km Khambhat corridor executed with CWPRS Pune and NIOT Chennai."
                  },
                  {
                    title: "River Discharge & Impoundment Modeling",
                    desc: "Mathematical hydraulic simulations capturing surplus runoff from Narmada, Mahi, Sabarmati, and Dhadhar rivers."
                  },
                  {
                    title: "Tidal Turbine Powerhouse Engineering",
                    desc: "State-of-the-art configuration of 5,845 MW reversible bulb turbines generating clean baseload ocean power."
                  },
                  {
                    title: "Inter-State & Central Statutory Approvals",
                    desc: "Facilitating EIA/SIA clearances from MoEF&CC, Central Electricity Authority, and Central Water Commission."
                  }
                ].map((item, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-2xl bg-slate-900/60 border border-slate-700/50 flex items-start gap-3 hover:border-cyan-500/40 transition"
                  >
                    <div className="w-8 h-8 rounded-xl bg-cyan-950 text-cyan-400 flex items-center justify-center shrink-0">
                      <Layers className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="text-white block font-semibold mb-1">{item.title}</strong>
                      <span className="text-slate-400 leading-relaxed">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: HIERARCHY */}
        {activeTab === "hierarchy" && (
          <div className="bg-slate-800/40 rounded-3xl border border-slate-700/60 p-6 sm:p-8 space-y-6">
            <div>
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
                Governance Structure
              </span>
              <h2 className="text-xl font-bold text-white mt-1">
                Department Organization Hierarchy & Powers (Clause 3.3 Item 2)
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Clear administrative reporting lines and official responsibilities under Gujarat Civil Services Rules.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-700/80">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-900/90 text-cyan-300 font-bold border-b border-slate-700">
                  <tr>
                    <th className="py-3 px-4 font-mono">Level</th>
                    <th className="py-3 px-4">Designation & Role</th>
                    <th className="py-3 px-4">Designated Office</th>
                    <th className="py-3 px-4">Statutory Powers & Duties</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/80 bg-slate-900/40">
                  {organizationHierarchy.map((org, i) => (
                    <tr key={i} className="hover:bg-slate-800/60 transition">
                      <td className="py-3 px-4 font-mono font-bold text-cyan-400">{org.level}</td>
                      <td className="py-3 px-4 font-bold text-white">{org.role}</td>
                      <td className="py-3 px-4 text-slate-300">{org.authority}</td>
                      <td className="py-3 px-4 text-slate-400 text-[11px]">
                        Policy approvals, administrative sanctions, technical validations, and field execution.
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
          <div className="bg-slate-800/40 rounded-3xl border border-slate-700/60 p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
                  Public Disclosure
                </span>
                <h2 className="text-xl font-bold text-white mt-1">
                  Gujarat State Government Gazetted Holidays (Year 2026)
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  Mandated under RFP Clause 3.9 Item 46 for official public disclosure.
                </p>
              </div>
              <span className="self-start px-3 py-1 rounded-full bg-cyan-950 border border-cyan-800 text-cyan-300 text-xs font-mono">
                GAD Circular 2026
              </span>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-slate-700/80">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-900/90 text-cyan-300 font-bold border-b border-slate-700">
                  <tr>
                    <th className="py-3 px-4 font-mono">Date</th>
                    <th className="py-3 px-4">Day</th>
                    <th className="py-3 px-4">Occasion / Festival</th>
                    <th className="py-3 px-4">Type</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/80 bg-slate-900/40">
                  {gujaratHolidays2026.map((h, i) => (
                    <tr key={i} className="hover:bg-slate-800/60 transition">
                      <td className="py-2.5 px-4 font-mono font-bold text-white">{h.date}</td>
                      <td className="py-2.5 px-4 text-slate-400">{h.day}</td>
                      <td className="py-2.5 px-4 font-semibold text-slate-200">{h.occasion}</td>
                      <td className="py-2.5 px-4">
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-950/80 text-amber-300 border border-amber-800/60">
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
          <div className="bg-slate-800/40 rounded-3xl border border-slate-700/60 p-6 sm:p-8 space-y-6">
            <div>
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
                Department Milestones
              </span>
              <h2 className="text-xl font-bold text-white mt-1">
                Upcoming Events & Public Consultations Calendar (Clause 3.3)
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Key conferences, symposiums, and stakeholder engagements for the Kalpasar mega-project.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              {upcomingEvents.map((ev, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl bg-slate-900/70 border border-slate-700/60 hover:border-cyan-500/50 transition space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 bg-cyan-950 text-cyan-300 rounded-full font-mono font-bold text-[11px] border border-cyan-800/50">
                      {ev.date}
                    </span>
                    <span className="text-cyan-400 text-[10px] font-mono uppercase tracking-wider">
                      Upcoming
                    </span>
                  </div>
                  <h3 className="font-bold text-white text-sm">{ev.title}</h3>
                  <div className="flex items-center gap-2 text-slate-400 text-xs">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{ev.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      <ProtoFooter variant="modern" />
      <Chatbot />
      <FeedbackModal />
    </div>
  );
};
