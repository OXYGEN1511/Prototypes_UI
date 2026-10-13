import React, { useState } from "react";
import { useApp } from "../../context/AppContext";
import { ProtoHeader } from "./ProtoHeader";
import { ProtoFooter } from "./ProtoFooter";
import { Chatbot } from "../../components/common/Chatbot";
import { FeedbackModal } from "../../components/common/FeedbackModal";
import {
  departmentInfo,
  keyProjectFacts,
  projectPurposes,
  leadershipData,
  initialNotices,
  gujaratHolidays2026,
  upcomingEvents,
  organizationHierarchy
} from "../../data/kalpasarData";
import {
  FileText,
  Download,
  Search,
  MapPin,
  Phone,
  Mail,
  Calendar,
  Building,
  CheckCircle2,
  Zap,
  Waves,
  Sprout,
  Compass,
  ShieldCheck,
  Anchor,
  Filter,
  ExternalLink,
  Image,
  Video,
  Layers,
  ChevronRight
} from "lucide-react";

// 1. Department Page (Vision, Mission, Org Structure, Hierarchy, Powers & Duties)
export const DepartmentPage = ({ variant = "modern", basePath = "/prototype-2" }) => {
  const { language, t } = useApp();
  const [activeTab, setActiveTab] = useState("overview"); // 'overview', 'hierarchy', 'holidays', 'events'

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between">
      <ProtoHeader variant={variant} basePath={basePath} />

      <main id="main-content" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-1 space-y-8 w-full">
        {/* Breadcrumb */}
        <div className="text-xs text-slate-500 flex items-center gap-2">
          <span>{t.navHome}</span> &rarr; <span className="font-bold text-slate-900">{t.navDepartment}</span>
        </div>

        {/* Section Header */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <span className="text-xs font-bold text-kalpasar-cyan uppercase tracking-wider">
            Mandate & Governance
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            {language === "gujarati" ? "કલ્પસર વિભાગ — પરિચય અને વહીવટી માળખું" : language === "hindi" ? "कल्पसर विभाग — परिचय एवं प्रशासनिक ढांचा" : "About Kalpasar Department"}
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed max-w-4xl">
            {language === "gujarati"
              ? "કલ્પસર વિભાગની સ્થાપના ગુજરાત સરકાર દ્વારા ખંભાતના અખાત વિકાસ યોજના (કલ્પસર યોજના) ના આયોજન, સર્વેક્ષણ, સંશોધન અને અમલીકરણ માટે કરવામાં આવી છે. આ પ્રોજેક્ટ જળસુરક્ષા, હરિત ઊર્જા, દરિયાકાંઠાનું રક્ષણ અને પરિવહન ક્ષેત્રે ગુજરાતને વૈશ્વિક કક્ષાએ સ્થાપિત કરશે."
              : language === "hindi"
              ? "कल्पसर विभाग की स्थापना गुजरात सरकार द्वारा खंभात की खाड़ी विकास परियोजना (कल्पसर परियोजना) के नियोजन, सर्वेक्षण, अनुसंधान और क्रियान्वयन हेतु की गई है। यह परियोजना जल सुरक्षा, हरित ऊर्जा, तटीय संरक्षण और परिवहन क्षेत्र में क्रांतिकारी बदलाव लाएगी।"
              : "The Kalpasar Department was constituted by the Government of Gujarat to plan, survey, design, and implement the Gulf of Khambhat Development Project (Kalpasar). It addresses chronic water deficits in Saurashtra and Central Gujarat through transformative tidal engineering."}
          </p>

          {/* Sub Navigation Tabs */}
          <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-slate-100 text-xs">
            <button
              onClick={() => setActiveTab("overview")}
              className={`px-3 py-1.5 rounded-lg font-semibold transition ${
                activeTab === "overview" ? "bg-kalpasar-navy text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              Overview & Leadership
            </button>
            <button
              onClick={() => setActiveTab("hierarchy")}
              className={`px-3 py-1.5 rounded-lg font-semibold transition ${
                activeTab === "hierarchy" ? "bg-kalpasar-navy text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              Organization Hierarchy & Duties (Clause 3.3)
            </button>
            <button
              onClick={() => setActiveTab("holidays")}
              className={`px-3 py-1.5 rounded-lg font-semibold transition ${
                activeTab === "holidays" ? "bg-kalpasar-navy text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              Government Holiday List (Clause 3.9)
            </button>
            <button
              onClick={() => setActiveTab("events")}
              className={`px-3 py-1.5 rounded-lg font-semibold transition ${
                activeTab === "events" ? "bg-kalpasar-navy text-white" : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              Upcoming Events Calendar
            </button>
          </div>
        </div>

        {/* TAB 1: OVERVIEW & LEADERSHIP */}
        {activeTab === "overview" && (
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Building className="w-5 h-5 text-kalpasar-blue" />
                <span>{t.leadershipTitle}</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {leadershipData.map((leader, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm flex items-center gap-4 hover:shadow-md transition"
                  >
                    <img
                      src={leader.image}
                      alt={leader.nameEn}
                      className="w-16 h-16 rounded-full object-cover border-2 border-kalpasar-cyan/40 shrink-0"
                    />
                    <div className="text-xs">
                      <div className="font-bold text-slate-900 text-sm">
                        {language === "gujarati" ? leader.nameGu : language === "hindi" ? leader.nameHi : leader.nameEn}
                      </div>
                      <div className="text-cyan-800 font-semibold mt-0.5">
                        {language === "gujarati" ? leader.roleGu : language === "hindi" ? leader.roleHi : leader.roleEn}
                      </div>
                      <div className="text-slate-500 text-[11px] mt-0.5">
                        {language === "gujarati" ? leader.portfolioGu : language === "hindi" ? leader.portfolioHi : leader.portfolioEn}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Department Functions Grid */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-base font-bold text-slate-900">Key Functions & Working Processes (Clause 3.3)</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-700">
                <div className="flex items-start gap-3 p-3.5 bg-slate-50 rounded-xl border border-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block mb-0.5">Hydrographic and Bathymetric Surveys:</strong>
                    <span>Continuous seabed profiling, tidal amplitude logging, and sedimentation studies across the 30 km Khambhat corridor.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3.5 bg-slate-50 rounded-xl border border-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block mb-0.5">River Discharge & Flood Modeling:</strong>
                    <span>Mathematical simulation of impounded flood volumes from Narmada, Mahi, Sabarmati, and Dhadhar river systems.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3.5 bg-slate-50 rounded-xl border border-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block mb-0.5">Tidal Turbine Installation Engineering:</strong>
                    <span>Detailed engineering for 5,845 MW bulb turbine powerhouses with reversible sluice gates.</span>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3.5 bg-slate-50 rounded-xl border border-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block mb-0.5">Environmental Clearances & Inter-State Coordination:</strong>
                    <span>Securing statutory approvals from Ministry of Environment, Forest and Climate Change (MoEF&CC) and Central Water Commission.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: ORGANIZATION HIERARCHY */}
        {activeTab === "hierarchy" && (
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <h3 className="text-base font-bold text-slate-900">
              Department Organizational Structure & Hierarchy (Clause 3.3 Item 2)
            </h3>
            <p className="text-xs text-slate-500">
              Administrative reporting structure and powers/duties of key departmental officers.
            </p>

            <div className="overflow-x-auto border border-slate-200 rounded-xl">
              <table className="w-full text-left text-xs text-slate-700">
                <thead className="bg-slate-100 font-bold text-slate-800 border-b border-slate-200">
                  <tr>
                    <th className="py-3 px-4">Level</th>
                    <th className="py-3 px-4">Designation & Role</th>
                    <th className="py-3 px-4">Designated Authority / Office</th>
                    <th className="py-3 px-4">Powers & Duties</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  {organizationHierarchy.map((org, i) => (
                    <tr key={i} className="hover:bg-slate-50">
                      <td className="py-3 px-4 font-mono font-bold text-cyan-800">{org.level}</td>
                      <td className="py-3 px-4 font-bold text-slate-900">{org.role}</td>
                      <td className="py-3 px-4 text-slate-700">{org.authority}</td>
                      <td className="py-3 px-4 text-slate-600 text-[11px]">
                        Policy approvals, administrative sanctions, technical validations, and field execution.
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* TAB 3: HOLIDAY LIST (Clause 3.9 item 46) */}
        {activeTab === "holidays" && (
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-slate-900">
                  Gujarat State Government Gazetted Holidays (Year 2026)
                </h3>
                <p className="text-xs text-slate-500">
                  Mandated under RFP Clause 3.9 Item 46 for official public disclosure.
                </p>
              </div>
              <span className="text-xs bg-slate-100 px-3 py-1 rounded font-mono font-semibold">
                General Administration Dept (GAD)
              </span>
            </div>

            <div className="overflow-x-auto border border-slate-200 rounded-xl">
              <table className="w-full text-left text-xs text-slate-700">
                <thead className="bg-slate-100 font-bold text-slate-800 border-b border-slate-200">
                  <tr>
                    <th className="py-3 px-4">Date</th>
                    <th className="py-3 px-4">Day</th>
                    <th className="py-3 px-4">Occasion / Festival</th>
                    <th className="py-3 px-4">Type</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  {gujaratHolidays2026.map((h, i) => (
                    <tr key={i} className="hover:bg-slate-50">
                      <td className="py-2.5 px-4 font-mono font-bold text-slate-900">{h.date}</td>
                      <td className="py-2.5 px-4 text-slate-600">{h.day}</td>
                      <td className="py-2.5 px-4 font-medium text-slate-800">{h.occasion}</td>
                      <td className="py-2.5 px-4">
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-800">
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

        {/* TAB 4: UPCOMING EVENTS CALENDAR (Clause 3.3 & 3.9) */}
        {activeTab === "events" && (
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <h3 className="text-base font-bold text-slate-900">
              Departmental Event Calendar & Stakeholder Consultations (Clause 3.3)
            </h3>
            <p className="text-xs text-slate-500">
              Key milestones, pre-bid conferences, and technical symposiums for the Kalpasar Project.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              {upcomingEvents.map((ev, i) => (
                <div key={i} className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-1 bg-cyan-100 text-cyan-900 rounded font-mono font-bold text-[11px]">
                      {ev.date}
                    </span>
                    <span className="text-slate-400 text-[10px]">Upcoming</span>
                  </div>
                  <h4 className="font-bold text-slate-900 text-sm">{ev.title}</h4>
                  <div className="flex items-center gap-1.5 text-slate-600 text-[11px]">
                    <MapPin className="w-3.5 h-3.5 text-kalpasar-cyan" />
                    <span>{ev.location}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      <ProtoFooter variant={variant} />
      <Chatbot />
      <FeedbackModal />
    </div>
  );
};

// 2. Purposes Page
export const PurposesPage = ({ variant = "modern", basePath = "/prototype-2" }) => {
  const { language, t } = useApp();

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between">
      <ProtoHeader variant={variant} basePath={basePath} />

      <main id="main-content" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-1 space-y-8 w-full">
        <div className="text-xs text-slate-500 flex items-center gap-2">
          <span>{t.navHome}</span> &rarr; <span className="font-bold text-slate-900">{t.navPurposes}</span>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <span className="text-xs font-bold text-kalpasar-cyan uppercase tracking-wider">
            Multi-Purpose Project Benefits
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            {t.explorePurposes}
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed max-w-4xl">
            The Kalpasar Project integrates tidal energy harnessing, freshwater conservation, regional highway connectivity, and agricultural transformation into a single unified engineering marvel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectPurposes.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-cyan-800 bg-cyan-50 px-2.5 py-1 rounded-full border border-cyan-200">
                    {p.stat}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-kalpasar-navy text-kalpasar-cyan flex items-center justify-center">
                    <Waves className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {language === "gujarati" ? p.titleGu : language === "hindi" ? p.titleHi : p.titleEn}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {language === "gujarati" ? p.descriptionGu : language === "hindi" ? p.descriptionHi : p.descriptionEn}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <ProtoFooter variant={variant} />
      <Chatbot />
      <FeedbackModal />
    </div>
  );
};

// 3. Performance Page
export const PerformancePage = ({ variant = "modern", basePath = "/prototype-2" }) => {
  const { language, t } = useApp();

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between">
      <ProtoHeader variant={variant} basePath={basePath} />

      <main id="main-content" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-1 space-y-8 w-full">
        <div className="text-xs text-slate-500 flex items-center gap-2">
          <span>{t.navHome}</span> &rarr; <span className="font-bold text-slate-900">{t.navPerformance}</span>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <span className="text-xs font-bold text-kalpasar-cyan uppercase tracking-wider">
            Reports & Engineering Milestones
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            {language === "gujarati" ? "કામગીરી અને અભ્યાસ અહેવાલો" : language === "hindi" ? "प्रदर्शन एवं अध्ययन रिपोर्ट" : "Department Performance & Reports"}
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed max-w-4xl">
            Official progress on mathematical modeling, hydraulic scale studies, environmental impact assessments, and technical feasibility reports for the Gulf of Khambhat Dam.
          </p>
        </div>

        {/* Reports Table */}
        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
          <div className="p-4 bg-slate-100 border-b border-slate-200 font-bold text-xs text-slate-800">
            Published Technical Reports & Studies (Demonstration Dataset)
          </div>
          <div className="divide-y divide-slate-200 text-xs">
            {[
              { title: "Bathymetric & Seismic Survey of Gulf of Khambhat — Final Report", date: "2026-08-15", size: "4.2 MB", cat: "Hydrography" },
              { title: "Tidal Power Simulation Studies using 2D Hydrodynamic Models", date: "2026-06-20", size: "3.1 MB", cat: "Renewable Energy" },
              { title: "Salinity Ingress Prevention Baseline Analysis across 12 Talukas", date: "2026-04-10", size: "2.8 MB", cat: "Environment" },
              { title: "Dahej-Bhavnagar Expressway Multi-Modal Corridor Feasibility", date: "2026-02-28", size: "5.5 MB", cat: "Transportation" }
            ].map((rep, idx) => (
              <div key={idx} className="p-4 flex flex-wrap items-center justify-between gap-3 hover:bg-slate-50 transition">
                <div>
                  <div className="font-bold text-slate-900">{rep.title}</div>
                  <div className="text-slate-500 text-[11px] mt-0.5">
                    Category: {rep.cat} &bull; Published: {rep.date} &bull; File: {rep.size} (PDF)
                  </div>
                </div>
                <button
                  onClick={() => alert(`Downloading ${rep.title}`)}
                  className="px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium rounded-lg flex items-center gap-1.5 border border-slate-300 transition"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>

      <ProtoFooter variant={variant} />
      <Chatbot />
      <FeedbackModal />
    </div>
  );
};

// 4. Policies and Rules Page
export const PoliciesPage = ({ variant = "modern", basePath = "/prototype-2" }) => {
  const { language, t } = useApp();
  const [filter, setFilter] = useState("ALL");
  const [search, setSearch] = useState("");

  const policies = [
    { title: "Gujarat Irrigation & Water Conservation Act (Relevant Provisions)", cat: "Acts", ref: "ACT-GOG-1979", date: "2026-01-10", size: "1.2 MB" },
    { title: "Coastal Regulation Zone (CRZ) Clearance Guidelines for Tidal Dam", cat: "Notifications", ref: "CRZ-ENV-2026-01", date: "2026-03-14", size: "850 KB" },
    { title: "Recruitment Rules for Junior Hydrographic Engineers 2026", cat: "Recruitment", ref: "RR-ENG-2026-04", date: "2026-05-18", size: "1.4 MB" },
    { title: "Government Resolution: Special Purpose Entity for Kalpasar Infrastructure", cat: "Resolutions", ref: "GR-KLP-2026-88", date: "2026-07-22", size: "2.1 MB" },
    { title: "Standard Operating Procedures for Marine Survey Vessels", cat: "Circulars", ref: "SOP-SUR-2026-09", date: "2026-09-05", size: "940 KB" }
  ];

  const filtered = policies.filter(p => {
    const matchesCat = filter === "ALL" || p.cat === filter;
    const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between">
      <ProtoHeader variant={variant} basePath={basePath} />

      <main id="main-content" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-1 space-y-8 w-full">
        <div className="text-xs text-slate-500 flex items-center gap-2">
          <span>{t.navHome}</span> &rarr; <span className="font-bold text-slate-900">{t.navPolicies}</span>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <span className="text-xs font-bold text-kalpasar-cyan uppercase tracking-wider">
            Legal & Regulatory Documents
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            {language === "gujarati" ? "કાયદાઓ, નિયમો અને સરકારી ઠરાવો" : language === "hindi" ? "अधिनियम, नियम एवं सरकारी संकल्प" : "Acts, Rules & Government Resolutions"}
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed max-w-4xl">
            Searchable repository of legislative acts, recruitment notifications, circulars, and departmental resolutions.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs flex-wrap">
            <span className="text-slate-500 font-semibold flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" /> Category:
            </span>
            {["ALL", "Acts", "Notifications", "Resolutions", "Recruitment", "Circulars"].map(c => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition ${
                  filter === c ? "bg-kalpasar-navy text-white font-bold" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="relative">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Filter by title..."
              className="text-xs pl-8 pr-3 py-1.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-kalpasar-cyan"
            />
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
          </div>
        </div>

        {/* Listing */}
        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm divide-y divide-slate-200 text-xs">
          {filtered.map((item, idx) => (
            <div key={idx} className="p-4 flex flex-wrap items-center justify-between gap-3 hover:bg-slate-50 transition">
              <div>
                <div className="font-bold text-slate-900">{item.title}</div>
                <div className="text-slate-500 text-[11px] mt-0.5">
                  Ref: <span className="font-mono">{item.ref}</span> &bull; Category: {item.cat} &bull; Date: {item.date} &bull; {item.size}
                </div>
              </div>
              <button
                onClick={() => alert(`Downloading ${item.title}`)}
                className="px-3 py-1.5 bg-kalpasar-navy hover:bg-slate-900 text-white rounded-lg flex items-center gap-1.5 text-xs font-semibold shadow-sm transition"
              >
                <Download className="w-3.5 h-3.5" />
                <span>{t.download}</span>
              </button>
            </div>
          ))}
        </div>
      </main>

      <ProtoFooter variant={variant} />
      <Chatbot />
      <FeedbackModal />
    </div>
  );
};

// 5. Contact Us Page
export const ContactPage = ({ variant = "modern", basePath = "/prototype-2" }) => {
  const { language, setIsFeedbackOpen, t } = useApp();

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between">
      <ProtoHeader variant={variant} basePath={basePath} />

      <main id="main-content" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-1 space-y-8 w-full">
        <div className="text-xs text-slate-500 flex items-center gap-2">
          <span>{t.navHome}</span> &rarr; <span className="font-bold text-slate-900">{t.navContact}</span>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <span className="text-xs font-bold text-kalpasar-cyan uppercase tracking-wider">
            Secretariat & Directory
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            {language === "gujarati" ? "કલ્પસર સચિવાલયનો સંપર્ક કરો" : language === "hindi" ? "कल्पसर सचिवालय से संपर्क करें" : "Contact Kalpasar Secretariat"}
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed max-w-4xl">
            Reach out to the engineering secretariat, submit formal representations, or inspect tender documentation in Gandhinagar.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Office Details */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-6 text-xs">
            <h3 className="text-base font-bold text-slate-900">Department Headquarters</h3>
            <div className="space-y-4 text-slate-700">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-kalpasar-cyan shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block text-sm">Kalpasar Department, Govt. of Gujarat</strong>
                  <p className="text-slate-600 mt-1">{departmentInfo.address.office}, {departmentInfo.address.sector}, {departmentInfo.address.city} - {departmentInfo.address.pincode}, {departmentInfo.address.state}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-kalpasar-cyan shrink-0" />
                <div>
                  <strong className="text-slate-900 block">Telephone:</strong>
                  <span>{departmentInfo.address.phone}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-kalpasar-cyan shrink-0" />
                <div>
                  <strong className="text-slate-900 block">Official Email:</strong>
                  <span>{departmentInfo.address.email}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-kalpasar-cyan shrink-0" />
                <div>
                  <strong className="text-slate-900 block">Working Hours:</strong>
                  <span>{departmentInfo.address.workingHours}</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200">
              <button
                onClick={() => setIsFeedbackOpen(true)}
                className="w-full py-3 bg-kalpasar-navy hover:bg-slate-900 text-white rounded-xl font-bold flex items-center justify-center gap-2 shadow"
              >
                <span>Launch Citizen Feedback Form (Captcha Protected)</span>
              </button>
            </div>
          </div>

          {/* Interactive Google Maps / GIS Embed */}
          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
            <div className="h-80 w-full rounded-xl overflow-hidden border border-slate-300">
              <iframe
                title="Kalpasar Secretariat Gandhinagar Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14670.329431872856!2d72.63738555!3d23.215635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2b0b1a03e6e7%3A0x63351336154e12e1!2sKarmayogi%20Bhavan%2C%20Sector%2010%2C%20Gandhinagar%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="text-[11px] text-slate-500 mt-2 text-center">
              GIS Coordinates: 23.2156° N, 72.6374° E • Sector-10 A, Karmayogi Bhavan, Gandhinagar
            </div>
          </div>
        </div>
      </main>

      <ProtoFooter variant={variant} />
      <Chatbot />
      <FeedbackModal />
    </div>
  );
};

// 6. Tenders & Notices Page
export const TendersPage = ({ variant = "modern", basePath = "/prototype-2" }) => {
  const { language, t } = useApp();
  const notices = initialNotices;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between">
      <ProtoHeader variant={variant} basePath={basePath} />

      <main id="main-content" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-1 space-y-8 w-full">
        <div className="text-xs text-slate-500 flex items-center gap-2">
          <span>{t.navHome}</span> &rarr; <span className="font-bold text-slate-900">{t.navTenders}</span>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-3">
          <span className="text-xs font-bold text-kalpasar-cyan uppercase tracking-wider">
            Public Procurement & GeM Tenders
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            {t.navTenders}
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed max-w-4xl">
            Active Requests for Proposals (RFP), Expressions of Interest (EOI), and tender documents issued through GeM and Gujarat Informatics Limited (GIL).
          </p>
        </div>

        {/* Tenders Table */}
        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm divide-y divide-slate-200 text-xs">
          {notices.map((n) => (
            <div key={n.id} className="p-5 flex flex-wrap items-center justify-between gap-4 hover:bg-slate-50 transition">
              <div className="max-w-2xl">
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 text-[10px] font-bold">
                    {n.category}
                  </span>
                  <span className="font-mono text-slate-400 text-[11px]">{n.refNo}</span>
                  <span className="text-slate-400">&bull;</span>
                  <span className="text-slate-500 text-[11px]">{n.date}</span>
                </div>
                <h3 className="font-bold text-slate-900 text-sm">
                  {language === "gujarati" ? n.titleGu : language === "hindi" ? n.titleHi : n.titleEn}
                </h3>
                <p className="text-slate-600 text-xs mt-1">
                  {language === "gujarati" ? n.summaryGu : language === "hindi" ? n.summaryHi : n.summaryEn}
                </p>
              </div>

              <button
                onClick={() => alert(`Downloading tender document: ${n.refNo}`)}
                className="px-4 py-2 bg-kalpasar-navy hover:bg-slate-900 text-white rounded-xl font-bold flex items-center gap-1.5 shadow transition"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download ({n.fileSize})</span>
              </button>
            </div>
          ))}
        </div>
      </main>

      <ProtoFooter variant={variant} />
      <Chatbot />
      <FeedbackModal />
    </div>
  );
};
