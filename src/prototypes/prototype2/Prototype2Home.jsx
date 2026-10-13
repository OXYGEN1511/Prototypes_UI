import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useApp } from "../../context/AppContext";
import { ProtoHeader } from "../common/ProtoHeader";
import { ProtoFooter } from "../common/ProtoFooter";
import { Chatbot } from "../../components/common/Chatbot";
import { FeedbackModal } from "../../components/common/FeedbackModal";
import { kalpasarStore } from "../../services/kalpasarStore";
import {
  keyProjectFacts,
  projectPurposes,
  leadershipData,
  officialFAQs,
  departmentInfo
} from "../../data/kalpasarData";
import {
  Search,
  Bell,
  Waves,
  Zap,
  ArrowRight,
  Download,
  CheckCircle2,
  ChevronDown,
  Volume2,
  FileText,
  Building2,
  Compass,
  Sprout,
  HelpCircle,
  ExternalLink,
  ShieldCheck,
  TrendingUp,
  MapPin,
  Sparkles,
  Activity,
  Layers,
  ArrowUpRight,
  Eye,
  Sliders,
  Calendar,
  Radio
} from "lucide-react";

export const Prototype2Home = () => {
  const { language, searchQuery, setSearchQuery, setIsFeedbackOpen, speakText, t } = useApp();
  const [activeFaq, setActiveFaq] = useState(0);
  const [activeNoticeTab, setActiveNoticeTab] = useState("ALL");

  // Live published notices from store
  const publishedNotices = kalpasarStore.getPublishedNotices();

  const filteredNotices = publishedNotices.filter((n) => {
    const matchesTab = activeNoticeTab === "ALL" || n.category === activeNoticeTab;
    if (!searchQuery) return matchesTab;
    const query = searchQuery.toLowerCase();
    const matchesQuery =
      n.titleEn.toLowerCase().includes(query) ||
      (n.titleGu && n.titleGu.includes(query)) ||
      n.category.toLowerCase().includes(query);
    return matchesTab && matchesQuery;
  });

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between selection:bg-kalpasar-cyan selection:text-white">
      {/* Header */}
      <ProtoHeader variant="modern" basePath="/prototype-2" />

      <main id="main-content" className="flex-1 space-y-16 pb-16">
        {/* 1. Live Marquee News Ticker */}
        <section aria-label="Announcements Ticker" className="bg-slate-900 text-white py-2 px-4 border-b border-slate-800 shadow-inner">
          <div className="max-w-7xl mx-auto flex items-center gap-3 text-xs">
            <span className="bg-gradient-to-r from-kalpasar-cyan to-teal-400 text-slate-950 font-black px-2.5 py-0.5 rounded-full flex items-center gap-1.5 shrink-0 uppercase text-[10px] shadow-sm">
              <Radio className="w-3 h-3 animate-pulse text-slate-950" />
              <span>{t.whatsNew}</span>
            </span>

            <div className="overflow-hidden whitespace-nowrap flex-1">
              <div className="inline-block animate-marquee space-x-8 text-[11px] font-medium text-slate-300">
                {publishedNotices.slice(0, 4).map((n) => (
                  <Link
                    key={n.id}
                    to="/prototype-2/tenders"
                    className="hover:text-cyan-300 transition-colors inline-flex items-center gap-2"
                  >
                    <span className="text-amber-400 font-mono font-bold">[{n.category}]</span>
                    <span>{language === "gujarati" ? n.titleGu : language === "hindi" ? n.titleHi : n.titleEn}</span>
                    <span className="text-slate-600 font-normal">| Ref: {n.refNo}</span>
                    <span className="text-slate-500">•</span>
                  </Link>
                ))}
              </div>
            </div>

            <Link
              to="/prototype-2/tenders"
              className="text-[11px] text-cyan-400 hover:text-cyan-300 shrink-0 font-bold hidden sm:flex items-center gap-1"
            >
              <span>{t.viewAll}</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </section>

        {/* 2. Flagship Modern Hero Section with Live Telemetry */}
        <section
          aria-label="Hero Banner"
          className="relative bg-gradient-to-br from-[#06182c] via-[#09233f] to-[#041120] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden shadow-2xl"
        >
          {/* Animated Background Mesh & Waves */}
          <div className="absolute inset-0 opacity-15 pointer-events-none">
            <div className="absolute top-0 -left-1/4 w-[600px] h-[600px] bg-cyan-500/30 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 -right-1/4 w-[700px] h-[700px] bg-teal-500/20 rounded-full blur-3xl"></div>
            <svg className="absolute bottom-0 w-full h-48 opacity-40" viewBox="0 0 1440 320" preserveAspectRatio="none">
              <path fill="#159895" fillOpacity="0.4" d="M0,192L48,176C96,160,192,128,288,144C384,160,480,224,576,218.7C672,213,768,139,864,133.3C960,128,1056,192,1152,192C1248,192,1344,128,1392,96L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
          </div>

          <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Vision Statement */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2.5 bg-slate-800/80 backdrop-blur-xl border border-cyan-500/30 px-4 py-1.5 rounded-full text-xs text-cyan-300 font-semibold shadow-lg">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-ping"></span>
                <span>Government of Gujarat &bull; Gulf of Khambhat Project</span>
              </div>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12]">
                {language === "gujarati"
                  ? "ખંભાતના અખાતમાં{\" \"}ਮીઠા પાણિનાં સરોવરનું સરજન અને ભરતી ઊરયાગનું ઉત્પાદન"
                  : language === "hindi"
                  ? "खंभात की खाड़ी में मीठे पानी के जलाशय और ज्वारीय ऊर्जा"
                  : <>The Gulf of{" "}<span className="bg-gradient-to-r from-teal-300 via-cyan-200 to-amber-300 bg-clip-text text-transparent">Khambhat Development</span>{" "}Project (Kalpasar)</>}
              </h2>

              <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
                {language === "gujarati"
                  ? "ગુજરાત વિશાળ શક્તિવાળું રાજ્ય છે પરંતુ ભારતની સતહી જળસંપત્તિના માત્ર 2% સાથે, પ્રતિ વ્યક્તિ થિ પાણિ પુરવઠો 990 m³/વર્ષ છે જે રાષ્ટ્રીય માપદંડ 1,700 m³/વર્ષથી ઘણું ઓછું છે. કલ્પસર યોજના દ્વારા ખંભાતના અખાતમાં બંધ બાંધીને નર્મદા, મહી, સાબરમતી અને ઢાઢર નદીઓનાં વધારાનાં પૂરનાં પાણીનો સંગ્રહ 10,000 MCM ક્ષમતાના વિશાળ મીઠા પાણીના સરોવરમાં થશે."
                  : language === "hindi"
                  ? "गुजरात भारत की 6.4% भूमि और 5% जनसंख्या के साथ केवल 2% सतही जल संसाधन रखता है। प्रति व्यक्ति जल उपलब्धता 990 m³/वर्ष है जो राष्ट्रीय न्यूनतम 1,700 m³/वर्ष से कम है। कल्पसर परियोजना खंभात खाड़ी में बांध बनाकर 10,000 MCM का विशाल मीठे पानी का जलाशय बनाएगी।"
                  : "Gujarat, covering 6.4% of India's land and 5% of its population, has access to only 2% of the nation's surface water resources. With per capita water availability of just 990 m³/year — far below the national minimum of 1,700 m³/year — the Kalpasar Project proposes to enclose the Gulf of Khambhat via a 30 km dam, creating a 10,000 MCM freshwater lake from rivers Narmada, Dhadhar, Mahi, Sabarmati, and others."}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <Link
                  to="/prototype-2/purposes"
                  className="px-6 py-3.5 bg-gradient-to-r from-kalpasar-cyan to-teal-400 hover:from-teal-300 hover:to-cyan-300 text-slate-950 font-black rounded-xl text-xs sm:text-sm shadow-xl shadow-cyan-900/40 transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
                >
                  <span>Explore 6 Engineering Pillars</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <button
                  onClick={() => setIsFeedbackOpen(true)}
                  className="px-5 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl text-xs sm:text-sm border border-white/20 backdrop-blur-md transition shadow"
                >
                  {t.citizenFeedback}
                </button>

                <button
                  onClick={() =>
                    speakText(
                      `${t.deptName}. ${t.heroTitle}. ${t.heroDesc}. 30 km composite dam across Gulf of Khambhat, 10250 MCM freshwater lake, and 5845 MW tidal clean energy.`
                    )
                  }
                  className="px-4 py-3.5 bg-slate-800/90 hover:bg-slate-700 text-cyan-300 rounded-xl text-xs font-semibold flex items-center gap-2 border border-slate-700 transition"
                  title="Listen to Section Aloud (Divyangjan Web Speech)"
                >
                  <Volume2 className="w-4 h-4 text-kalpasar-cyan" />
                  <span>Listen</span>
                </button>
              </div>

              {/* Real-time Project Telemetry Bar */}
              <div className="pt-4 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-3 gap-3 text-[11px] text-slate-300">
                <div className="flex items-center gap-2">
                  <Activity className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Tidal Range: <strong>8 to 11 Meters</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <Waves className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Lake Area: <strong>~2,000 sq km</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                  <span>Status: <strong>RFP Modeling Phase</strong></span>
                </div>
              </div>
            </div>

            {/* Right Column: High-Tech Project Metrics Card */}
            <div className="lg:col-span-5">
              <div className="bg-slate-900/90 backdrop-blur-2xl border border-cyan-500/30 p-6 sm:p-7 rounded-3xl shadow-2xl relative space-y-5">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-kalpasar-gold" />
                    <span className="text-xs font-extrabold uppercase tracking-wider text-kalpasar-gold">
                      Khambhat Dam Key Specifications
                    </span>
                  </div>
                  <span className="text-[10px] bg-cyan-950 text-cyan-300 border border-cyan-800 px-2 py-0.5 rounded font-mono">
                    GoG Master Plan
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3.5">
                  <div className="bg-slate-950/70 p-4 rounded-2xl border border-slate-800/90 hover:border-cyan-500/40 transition group">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Gulf Dam Crest</span>
                    <div className="text-3xl font-black text-cyan-400 font-mono mt-1 group-hover:scale-105 transition-transform">30 km</div>
                    <div className="text-[11px] text-slate-300 mt-1">Bhavnagar &harr; Dahej</div>
                    <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2.5 overflow-hidden">
                      <div className="bg-cyan-400 h-full w-[85%] rounded-full"></div>
                    </div>
                  </div>

                  <div className="bg-slate-950/70 p-4 rounded-2xl border border-slate-800/90 hover:border-teal-500/40 transition group">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Freshwater Lake</span>
                    <div className="text-3xl font-black text-teal-400 font-mono mt-1 group-hover:scale-105 transition-transform">10,250</div>
                    <div className="text-[11px] text-slate-300 mt-1">Million Cubic Metres</div>
                    <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2.5 overflow-hidden">
                      <div className="bg-teal-400 h-full w-[95%] rounded-full"></div>
                    </div>
                  </div>

                  <div className="bg-slate-950/70 p-4 rounded-2xl border border-slate-800/90 hover:border-amber-500/40 transition group">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Clean Tidal Energy</span>
                    <div className="text-3xl font-black text-amber-400 font-mono mt-1 group-hover:scale-105 transition-transform">5,845 MW</div>
                    <div className="text-[11px] text-slate-300 mt-1">Zero-Carbon Power</div>
                    <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2.5 overflow-hidden">
                      <div className="bg-amber-400 h-full w-[70%] rounded-full"></div>
                    </div>
                  </div>

                  <div className="bg-slate-950/70 p-4 rounded-2xl border border-slate-800/90 hover:border-emerald-500/40 transition group">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Distance Saved</span>
                    <div className="text-3xl font-black text-emerald-400 font-mono mt-1 group-hover:scale-105 transition-transform">225 km</div>
                    <div className="text-[11px] text-slate-300 mt-1">10-Lane Expressway</div>
                    <div className="w-full bg-slate-800 h-1.5 rounded-full mt-2.5 overflow-hidden">
                      <div className="bg-emerald-400 h-full w-[90%] rounded-full"></div>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-cyan-950/40 border border-cyan-800/40 rounded-xl text-[11px] text-slate-300 flex items-center justify-between">
                  <span>Impounding Narmada, Mahi, Sabarmati & Dhadhar</span>
                  <Link to="/prototype-2/performance" className="text-cyan-400 font-bold hover:underline">
                    View Studies &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Instant Search & Citizen Service Dock */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200/90 p-5 sm:p-6 space-y-4">
            <div className="flex flex-col md:flex-row items-center gap-3">
              <div className="relative flex-1 w-full">
                <Search className="w-5 h-5 text-slate-400 absolute left-4 top-3.5" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t.searchPlaceholder}
                  className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-kalpasar-cyan focus:bg-white focus:outline-none transition"
                />
              </div>

              <div className="flex items-center gap-2 w-full md:w-auto">
                <Link
                  to="/prototype-2/tenders"
                  className="flex-1 md:flex-none py-3.5 px-5 bg-kalpasar-navy hover:bg-slate-900 text-white rounded-xl text-xs font-bold transition shadow-sm"
                >
                  {t.navTenders}
                </Link>
                <Link
                  to="/prototype-2/policies"
                  className="flex-1 md:flex-none py-3.5 px-5 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-xl text-xs font-semibold border border-slate-300 transition"
                >
                  {t.navPolicies}
                </Link>
              </div>
            </div>

            {/* Quick Action Service Dock (6 Citizen Hub Cards) */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 pt-2 border-t border-slate-100 text-xs">
              <Link
                to="/prototype-2/tenders"
                className="p-3 bg-slate-50 hover:bg-cyan-50/60 rounded-xl border border-slate-200/80 hover:border-cyan-300 transition text-center group"
              >
                <FileText className="w-5 h-5 mx-auto text-cyan-700 group-hover:scale-110 transition-transform mb-1.5" />
                <span className="font-bold text-slate-900 block text-[11px]">e-Tenders</span>
                <span className="text-[10px] text-slate-400">RFP 2026</span>
              </Link>

              <button
                onClick={() => setIsFeedbackOpen(true)}
                className="p-3 bg-slate-50 hover:bg-cyan-50/60 rounded-xl border border-slate-200/80 hover:border-cyan-300 transition text-center group"
              >
                <HelpCircle className="w-5 h-5 mx-auto text-cyan-700 group-hover:scale-110 transition-transform mb-1.5" />
                <span className="font-bold text-slate-900 block text-[11px]">Feedback & Query</span>
                <span className="text-[10px] text-slate-400">Captcha Verified</span>
              </button>

              <Link
                to="/prototype-2/purposes"
                className="p-3 bg-slate-50 hover:bg-cyan-50/60 rounded-xl border border-slate-200/80 hover:border-cyan-300 transition text-center group"
              >
                <Waves className="w-5 h-5 mx-auto text-cyan-700 group-hover:scale-110 transition-transform mb-1.5" />
                <span className="font-bold text-slate-900 block text-[11px]">Tidal Power</span>
                <span className="text-[10px] text-slate-400">5,845 MW Scope</span>
              </Link>

              <Link
                to="/prototype-2/department"
                className="p-3 bg-slate-50 hover:bg-cyan-50/60 rounded-xl border border-slate-200/80 hover:border-cyan-300 transition text-center group"
              >
                <Building2 className="w-5 h-5 mx-auto text-cyan-700 group-hover:scale-110 transition-transform mb-1.5" />
                <span className="font-bold text-slate-900 block text-[11px]">Organization</span>
                <span className="text-[10px] text-slate-400">Hierarchy & Duties</span>
              </Link>

              <Link
                to="/prototype-2/department"
                className="p-3 bg-slate-50 hover:bg-cyan-50/60 rounded-xl border border-slate-200/80 hover:border-cyan-300 transition text-center group"
              >
                <Calendar className="w-5 h-5 mx-auto text-cyan-700 group-hover:scale-110 transition-transform mb-1.5" />
                <span className="font-bold text-slate-900 block text-[11px]">Holiday List</span>
                <span className="text-[10px] text-slate-400">2026 Gazetted</span>
              </Link>

              <Link
                to="/prototype-2/contact"
                className="p-3 bg-slate-50 hover:bg-cyan-50/60 rounded-xl border border-slate-200/80 hover:border-cyan-300 transition text-center group"
              >
                <MapPin className="w-5 h-5 mx-auto text-cyan-700 group-hover:scale-110 transition-transform mb-1.5" />
                <span className="font-bold text-slate-900 block text-[11px]">Gandhinagar GIS</span>
                <span className="text-[10px] text-slate-400">Secretariat Map</span>
              </Link>
            </div>
          </div>
        </section>

        {/* 4. Interactive Bento Grid: The 6 Core Engineering Pillars */}
        <section aria-label="Core Project Purposes" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-black text-cyan-800 uppercase tracking-widest bg-cyan-50 px-3 py-1 rounded-full border border-cyan-200">
              Current Activities & Future Plan
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              {t.explorePurposes}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {language === "gujarati"
                ? "કલ્પસર ડેમ અને ભાડભવાત બેરેજ પ્રોજેક૭માં વચ્ચેની વિવિધ બહુ-વિધાપ઼ર્ણ ઇજનેરી પ્રવૃત્તિઓ અને સંશોધનસં અંગેની વિગતો."
                : language === "hindi"
                ? "कल्पसर बांध और भादभूत बैराज परियोजनाओं हेतु विविध बहु-विषयक इंजीनियरिंग गतिविधियां एवं शोध कार्य।"
                : "Multi-disciplinary engineering activities and research studies undertaken for the Kalpasar Dam across Gulf of Khambhat and the Bhadbhut Barrage across River Narmada."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Pillar 1: Engineering Activities */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-7 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-cyan-900 bg-cyan-100/70 px-3 py-1 rounded-full">
                    CWPRS Pune &bull; NIOT Chennai
                  </span>
                  <div className="w-11 h-11 rounded-2xl bg-cyan-500/10 text-cyan-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Compass className="w-6 h-6" />
                  </div>
                </div>

                <h4 className="text-lg font-bold text-slate-900 mb-2">
                  Engineering Activities
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Bathymetric surveys, seismic hazard analysis, marine geotechnical drilling, tidal current amplitude logging, and 2D/3D numerical model simulations across the 30 km Gulf alignment by CWPRS Pune, NIOT Chennai, and NIO Goa.
                </p>

                {/* Interactive Distance Comparison Graphic */}
                <div className="mt-4 p-3 bg-slate-50 rounded-xl border border-slate-100 text-[11px] space-y-1.5 font-mono">
                  <div className="flex justify-between text-slate-500">
                    <span>Dam Length:</span>
                    <span className="text-cyan-700 font-bold">30 km (Bhavnagar &harr; Dahej)</span>
                  </div>
                  <div className="flex justify-between text-slate-900 font-bold">
                    <span>Expressway Over Dam:</span>
                    <span className="text-emerald-600">10-Lane, 225 km Saved</span>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] text-slate-400">Marine Geotechnical Studies</span>
                <Link to="/prototype-2/purposes" className="text-xs font-bold text-cyan-800 hover:text-cyan-950 flex items-center gap-1">
                  <span>Learn more</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Pillar 2: EIA / SIA Activities */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-7 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-amber-900 bg-amber-100/70 px-3 py-1 rounded-full">
                    EIA &bull; SIA Studies
                  </span>
                  <div className="w-11 h-11 rounded-2xl bg-amber-500/10 text-amber-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Zap className="w-6 h-6" />
                  </div>
                </div>

                <h4 className="text-lg font-bold text-slate-900 mb-2">
                  EIA / SIA Activities
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Comprehensive Environmental Impact Assessment (EIA) and Social Impact Assessment (SIA) covering marine ecology, estuarine fisheries, mangrove habitats, mudflat conservation, and coastal communities.
                </p>

                <div className="mt-4 p-3 bg-slate-50 rounded-xl border border-slate-100 text-[11px] space-y-1">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Tidal Energy Potential:</span>
                    <span className="font-bold text-amber-800">5,845 MW</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Tidal Range (Gulf):</span>
                    <span className="font-bold text-emerald-600">8 to 11 Metres</span>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] text-slate-400">MoEF&CC Clearance Process</span>
                <Link to="/prototype-2/purposes" className="text-xs font-bold text-cyan-800 hover:text-cyan-950 flex items-center gap-1">
                  <span>Learn more</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Pillar 3: Bhadbhut Barrage Activities */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-7 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-teal-900 bg-teal-100/70 px-3 py-1 rounded-full">
                    599 MCM &bull; 125 Gates
                  </span>
                  <div className="w-11 h-11 rounded-2xl bg-teal-500/10 text-teal-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Waves className="w-6 h-6" />
                  </div>
                </div>

                <h4 className="text-lg font-bold text-slate-900 mb-2">
                  Bhadbhut Barrage Activities
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Construction of 1.66 km Barrage across River Narmada near village Bhadbhut, Bharuch with 125 vertical lift gates creating a 599 MCM sweet water reservoir and halting Arabian Sea salinity ingress.
                </p>

                <div className="mt-4 p-3 bg-slate-50 rounded-xl border border-slate-100 text-[11px] space-y-1">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Barrage Length:</span>
                    <span className="font-bold text-teal-800">1.66 km (1,663 m)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Sweet Water Storage:</span>
                    <span className="font-bold text-slate-800">599 MCM</span>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] text-slate-400">Narmada River, Bharuch</span>
                <Link to="/prototype-2/purposes" className="text-xs font-bold text-cyan-800 hover:text-cyan-950 flex items-center gap-1">
                  <span>Learn more</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Pillar 4: Departmental Misc Engineering */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-7 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-emerald-900 bg-emerald-100/70 px-3 py-1 rounded-full">
                    10.54 Lakh Ha
                  </span>
                  <div className="w-11 h-11 rounded-2xl bg-emerald-500/10 text-emerald-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Sprout className="w-6 h-6" />
                  </div>
                </div>

                <h4 className="text-lg font-bold text-slate-900 mb-2">
                  Departmental Engineering Activities
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Real-time ocean wave recording, tidal current amplitude logging, sedimentation rate measurement, basin hydrology monitoring, and micro-irrigation network design for 10.54 lakh hectares in Saurashtra, Surendranagar, Ahmedabad (Bhal) and Rajkot.
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] text-slate-400">Live Telemetry Monitoring</span>
                <Link to="/prototype-2/purposes" className="text-xs font-bold text-cyan-800 hover:text-cyan-950 flex items-center gap-1">
                  <span>Learn more</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Pillar 5: Government Resolutions & Committees */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-7 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-blue-900 bg-blue-100/70 px-3 py-1 rounded-full">
                    SCM &bull; CSE &bull; EAG
                  </span>
                  <div className="w-11 h-11 rounded-2xl bg-blue-500/10 text-blue-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                </div>

                <h4 className="text-lg font-bold text-slate-900 mb-2">
                  Committees & Government Resolutions
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Apex governing bodies: Steering Council of Ministers (SCM), Committee of Secretaries (CSE), and Expert Advisory Group (EAG) with eminent scientists overseeing all technical, environmental, and administrative approvals.
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] text-slate-400">GR No. KLP-102003-88-K</span>
                <Link to="/prototype-2/department" className="text-xs font-bold text-cyan-800 hover:text-cyan-950 flex items-center gap-1">
                  <span>View Committees</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Pillar 6: Maps & Alignment */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-7 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-indigo-900 bg-indigo-100/70 px-3 py-1 rounded-full">
                    GIS &bull; Alignment Maps
                  </span>
                  <div className="w-11 h-11 rounded-2xl bg-indigo-500/10 text-indigo-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Building2 className="w-6 h-6" />
                  </div>
                </div>

                <h4 className="text-lg font-bold text-slate-900 mb-2">
                  Maps & Alignment Diagrams
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Kalpasar Dam Alignment Map (Bhavnagar to Dahej, 30 km), Bhadbhut Barrage Project Map (River Narmada, Bharuch), and Enclosed Freshwater Reservoir & Salinity Barrier area (2,000 sq km).
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] text-slate-400">GIS Coordinates Available</span>
                <Link to="/prototype-2/contact" className="text-xs font-bold text-cyan-800 hover:text-cyan-950 flex items-center gap-1">
                  <span>View Maps</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Live Notices & Tenders Board with Category Tabs */}
        <section aria-label="Official Circulars and Tenders" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-sm space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-5">
              <div>
                <span className="text-xs font-black text-cyan-800 uppercase tracking-widest bg-cyan-50 px-2.5 py-0.5 rounded-full border border-cyan-200">
                  Live Maker-Checker Feed
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900 mt-1">
                  {t.latestNotices}
                </h3>
              </div>

              {/* Category Filter Tabs */}
              <div className="flex flex-wrap items-center gap-1.5 text-xs">
                {["ALL", "Tenders", "Resolutions", "Circulars", "Recruitment", "Reports"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveNoticeTab(tab)}
                    className={`px-3 py-1.5 rounded-xl font-bold transition-all ${
                      activeNoticeTab === tab
                        ? "bg-kalpasar-navy text-white shadow-sm"
                        : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* List */}
            <div className="divide-y divide-slate-100 text-xs">
              {filteredNotices.slice(0, 5).map((n) => (
                <div
                  key={n.id}
                  className="py-4 flex flex-wrap items-center justify-between gap-4 hover:bg-slate-50/80 px-3 rounded-2xl transition group"
                >
                  <div className="max-w-2xl space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-blue-100 text-blue-800 font-mono">
                        {n.category}
                      </span>
                      <span className="font-mono text-slate-400 text-[11px]">{n.refNo}</span>
                      <span className="text-slate-300">&bull;</span>
                      <span className="text-slate-500 text-[11px]">{n.date}</span>
                    </div>

                    <h4 className="font-bold text-slate-900 text-sm group-hover:text-cyan-800 transition-colors">
                      {language === "gujarati" ? n.titleGu : language === "hindi" ? n.titleHi : n.titleEn}
                    </h4>

                    <p className="text-slate-500 text-xs line-clamp-1">
                      {language === "gujarati" ? n.summaryGu : language === "hindi" ? n.summaryHi : n.summaryEn}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => alert(`Downloading official document: ${n.refNo}`)}
                      className="px-4 py-2 bg-slate-100 hover:bg-cyan-50 text-slate-700 hover:text-cyan-900 rounded-xl flex items-center gap-1.5 border border-slate-300/80 font-bold text-xs transition"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>PDF ({n.fileSize})</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs text-slate-500">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Verified with Gujarat Informatics Limited standards</span>
              </span>

              <Link
                to="/prototype-2/tenders"
                className="font-bold text-cyan-800 hover:underline flex items-center gap-1"
              >
                <span>Browse All Procurement Tenders</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </section>

        {/* 6. Executive Leadership & Ministerial Guidance */}
        <section aria-label="Department Leadership" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-slate-900 via-kalpasar-navy to-[#081f38] text-white rounded-3xl p-8 sm:p-10 shadow-2xl space-y-8 relative overflow-hidden">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <span className="text-xs uppercase font-extrabold text-kalpasar-gold tracking-widest">
                Narmada, Water Resources, Water Supply & Kalpasar Department
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white">{t.leadershipTitle}</h3>
              <p className="text-xs text-slate-300">
                {language === "gujarati"
                  ? "કલ્પસર પ્રભાગ, બ્લોક નં. ธ, ๷મો માળ, સરદાર ભવન, નવી સચિવાલય, ગાંધીનગર ุ82 010"
                  : language === "hindi"
                  ? "कल्पसर प्रभाग, ब्लॉक नं. 8, 7वीं मंजिल, सरदार भवन, नई सचिवालय, गांधीनगर 382 010"
                  : "KALPASAR PRABHAG, Block No. 8, 7th Floor, Sardar Bhavan, New Sachivalaya, Gandhinagar 382 010 | Ph: +91-79-23252235 | cc-nwrs@gujarat.gov.in"}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {leadershipData.map((l, idx) => (
                <div
                  key={idx}
                  className="bg-slate-800/70 backdrop-blur-md border border-slate-700/80 p-6 rounded-2xl text-center space-y-3.5 hover:border-kalpasar-gold/40 transition group"
                >
                  <img
                    src={l.image}
                    alt={l.nameEn}
                    className="w-24 h-24 rounded-full mx-auto object-cover border-2 border-kalpasar-gold/80 shadow-lg group-hover:scale-105 transition-transform"
                  />
                  <div>
                    <h4 className="font-bold text-white text-base">
                      {language === "gujarati" ? l.nameGu : language === "hindi" ? l.nameHi : l.nameEn}
                    </h4>
                    <div className="text-xs text-cyan-300 font-bold mt-1">
                      {language === "gujarati" ? l.roleGu : language === "hindi" ? l.roleHi : l.roleEn}
                    </div>
                    <div className="text-[11px] text-slate-400 mt-1">
                      {language === "gujarati" ? l.portfolioGu : language === "hindi" ? l.portfolioHi : l.portfolioEn}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Official FAQs & Citizen Information */}
        <section aria-label="Frequently Asked Questions" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-sm space-y-5">
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <div>
                <span className="text-xs font-black text-cyan-800 uppercase tracking-widest bg-cyan-50 px-2.5 py-0.5 rounded-full border border-cyan-200">
                  Citizen Information Desk
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900 mt-1">{t.faqTitle}</h3>
              </div>
              <HelpCircle className="w-6 h-6 text-slate-400" />
            </div>

            <div className="space-y-3">
              {officialFAQs.map((faq, idx) => {
                const isOpen = activeFaq === idx;
                const question =
                  language === "gujarati"
                    ? faq.questionGu
                    : language === "hindi"
                    ? faq.questionHi
                    : faq.questionEn;
                const answer =
                  language === "gujarati"
                    ? faq.answerGu
                    : language === "hindi"
                    ? faq.answerHi
                    : faq.answerEn;

                return (
                  <div
                    key={faq.id}
                    className="border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200"
                  >
                    <button
                      onClick={() => setActiveFaq(isOpen ? null : idx)}
                      className="w-full p-4 sm:p-5 text-left font-bold text-xs sm:text-sm text-slate-800 flex items-center justify-between hover:bg-slate-50 transition"
                    >
                      <span>{question}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${
                          isOpen ? "rotate-180 text-kalpasar-cyan" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="p-5 pt-0 bg-slate-50/70 text-xs text-slate-600 leading-relaxed border-t border-slate-100">
                        {answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <ProtoFooter variant="modern" />

      {/* Interactive Floating Chatbot & Feedback Modal */}
      <Chatbot />
      <FeedbackModal />
    </div>
  );
};
