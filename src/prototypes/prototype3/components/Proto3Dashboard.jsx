import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useApp } from "../../../context/AppContext";
import {
  Search,
  ChevronRight,
  ExternalLink,
  Play,
  Download,
  FileText,
  Video,
  Award,
  Layers,
  CheckCircle2,
  Activity,
  Globe,
  Sliders,
} from "lucide-react";

export const Proto3Dashboard = ({ basePath = "/prototype-3" }) => {
  const { language } = useApp();
  const [linksFilter, setLinksFilter] = useState("");
  const [showVideoModal, setShowVideoModal] = useState(false);

  const importantLinks = [
    {
      title: "e-Procurement Gujarat (GeM / CPPP)",
      path: "https://eprocure.gov.in/cppp/",
      isExternal: true,
    },
    {
      title: "Gujarat Informatics Limited (GIL)",
      path: "https://gil.gujarat.gov.in",
      isExternal: true,
    },
    {
      title: "Central Water Commission (CWC) New Delhi",
      path: "http://cwc.gov.in",
      isExternal: true,
    },
    {
      title: "Ministry of Power - Tidal Energy Division",
      path: "https://powermin.gov.in",
      isExternal: true,
    },
    {
      title: "NITI Aayog Infrastructure Project Tracker",
      path: "https://niti.gov.in",
      isExternal: true,
    },
    {
      title: "Right to Information (RTI) Proactive Disclosure",
      path: `${basePath}/policies`,
      isExternal: false,
    },
    {
      title: "State Water Data Centre (SWDC) Gandhinagar",
      path: "https://swdc.gujarat.gov.in",
      isExternal: true,
    },
    {
      title: "Citizen Grievance Redressal (SWAGAT Online)",
      path: `${basePath}/contact`,
      isExternal: false,
    },
    {
      title: "National Ocean Technology Institute (NIOT)",
      path: "https://www.niot.res.in",
      isExternal: true,
    },
    {
      title: "RFP Evaluation Scorecard (100 Marks)",
      path: "/evaluation",
      isExternal: false,
    },
  ];

  const filteredLinks = importantLinks.filter((l) =>
    l.title.toLowerCase().includes(linksFilter.toLowerCase()),
  );

  const impactMetrics = [
    {
      num: "30 km",
      label: "Composite Dam Crest",
      sub: "Connecting Bhavnagar & Dahej",
    },
    {
      num: "10,250 MCM",
      label: "Freshwater Storage",
      sub: "Surplus floodwaters of 4 rivers",
    },
    {
      num: "5,845 MW",
      label: "Clean Marine Tidal Power",
      sub: "World-class green base load",
    },
    {
      num: "225 km",
      label: "Travel Distance Saved",
      sub: "Dahej-Bhavnagar Expressway",
    },
    {
      num: "10.54 L Ha",
      label: "Micro-Irrigation Reach",
      sub: "Saurashtra & Bhal farm transformation",
    },
    {
      num: "12 Talukas",
      label: "Salinity Ingress Halted",
      sub: "Coastal aquifer recharge",
    },
  ];

  return (
    <section
      aria-label="Department Dashboard and Important Links"
      className="bg-white py-14 sm:py-16 w-full border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* ================= 1. DUAL COLUMN: MEDIA SPOTLIGHT + IMPORTANT LINKS ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column (8 cols): Media Section / Engineering Showcase (MDL Style) */}
          <div className="lg:col-span-8 flex flex-col space-y-6">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#159895]">
                  {language === "gujarati"
                    ? "મલ્ટિમીડિયા અને ટેકનિકલ અહેવાલો"
                    : language === "hindi"
                      ? "मल्टीमीडिया एवं तकनीकी रिपोर्ट"
                      : "Multimedia & Technical Briefs"}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0a2540] tracking-tight">
                  {language === "gujarati"
                    ? "પ્રોજેક્ટ વિઝન અને દસ્તાવેજી ચિત્ર"
                    : language === "hindi"
                      ? "परियोजना विज़न एवं तकनीकी वृत्तचित्र"
                      : "Project Showcase & Documentaries"}
                </h3>
              </div>
            </div>

            {/* Video Feature Card */}
            <div className="relative bg-[#09223a] text-white rounded-2xl overflow-hidden shadow-xl border border-slate-800 p-6 sm:p-8 space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
                <span className="bg-amber-500 text-slate-950 font-black px-3 py-1 rounded-full uppercase text-[10px] tracking-wider">
                  Technical Feature Documentary
                </span>
                <span className="text-slate-300 font-mono">
                  Duration: 08:45 Min &bull; Ultra HD
                </span>
              </div>

              <div className="space-y-3">
                <h4 className="text-xl sm:text-2xl font-black text-white leading-tight">
                  {language === "gujarati"
                    ? "ખંભાતના અખાત પર મહા-બંધ અને ભરતી ઊર્જા: ૨૧મી સદીનું વિઝન"
                    : language === "hindi"
                      ? "खंभात की खाड़ी पर महा-बांध एवं ज्वारीय ऊर्जा: 21वीं सदी का इंजीनियरिंग चमत्कार"
                      : "The Gulf of Khambhat Mega Dam & Tidal Energy: Engineering the 21st Century"}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
                  {language === "gujarati"
                    ? "આ વિડીયો દસ્તાવેજી ચિત્રમાં ૩૦ કિમી ડેમની અલાઇનમેન્ટ, દરિયાઈ ભરતી-ઓટના સિમ્યુલેશન મોડેલ્સ અને ૧૦-લેન એક્સપ્રેસવેની વિગતવાર એનિમેશન રજૂઆત દર્શાવવામાં આવી છે."
                    : language === "hindi"
                      ? "इस वृत्तचित्र में 30 किमी बांध के समुद्री संरेखण, ज्वारीय सिमुलेशन मॉडल और 10-लेन एक्सप्रेसवे का विस्तृत 3D इंजीनियरिंग प्रदर्शन शामिल है।"
                      : "Comprehensive video detailing the 30 km dam alignment, tidal hydrodynamics simulation models, and the 10-lane expressway transit corridor across Gulf of Khambhat."}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => setShowVideoModal(true)}
                  className="px-5 py-2.5 bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold rounded-xl text-xs uppercase tracking-wider transition shadow-md flex items-center gap-2"
                >
                  <Play className="w-4 h-4 fill-slate-950" />
                  <span>Play Video Tour</span>
                </button>

                <button
                  onClick={() =>
                    alert(
                      "Downloading: Kalpasar_Executive_Summary_DPR_2026.pdf (14.2 MB)",
                    )
                  }
                  className="px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl text-xs uppercase tracking-wider transition border border-white/20 flex items-center gap-2"
                >
                  <Download className="w-4 h-4 text-cyan-300" />
                  <span>Executive DPR (PDF)</span>
                </button>

                <Link
                  to={`${basePath}/policies`}
                  className="text-xs text-cyan-300 hover:underline ml-auto flex items-center gap-1"
                >
                  <span>Environmental Clearances</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column (4 cols): Important Links Panel (MDL Style) */}
          <div className="lg:col-span-4 flex flex-col space-y-4">
            <div className="flex items-center gap-2 text-[#0a2540] border-b border-slate-200 pb-3">
              <Search className="w-5 h-5 text-[#1a5f7a]" />
              <h3 className="text-xl font-extrabold tracking-tight uppercase">
                {language === "gujarati"
                  ? "મહત્વપૂર્ણ પોર્ટલ્સ"
                  : language === "hindi"
                    ? "महत्वपूर्ण पोर्टल"
                    : "Important Links"}
              </h3>
            </div>

            {/* Link search filter */}
            <input
              type="text"
              placeholder="Filter government portals..."
              value={linksFilter}
              onChange={(e) => setLinksFilter(e.target.value)}
              className="w-full px-3 py-1.5 text-xs border border-slate-300 rounded-lg bg-slate-50 focus:outline-none focus:ring-1 focus:ring-[#1a5f7a]"
            />

            {/* Scrollable list of links */}
            <div className="flex flex-col max-h-[360px] overflow-y-auto pr-1 divide-y divide-slate-100 border border-slate-200 rounded-xl bg-slate-50/50">
              {filteredLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.path}
                  target={link.isExternal ? "_blank" : "_self"}
                  rel={link.isExternal ? "noopener noreferrer" : ""}
                  className="flex items-center justify-between gap-3 p-3 hover:bg-blue-50/80 transition-colors group text-xs text-slate-800"
                >
                  <span className="font-semibold group-hover:text-[#1a5f7a] transition-colors leading-snug">
                    {link.title}
                  </span>
                  {link.isExternal ? (
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#1a5f7a] shrink-0" />
                  ) : (
                    <ChevronRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#1a5f7a] group-hover:translate-x-1 transition-all shrink-0" />
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ================= 2. IMPACT DASHBOARD METRICS BAR (Full Width) ================= */}
        <div className="bg-[#0b1d33] text-white rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-xl">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-8">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
              {language === "gujarati"
                ? "ગુજરાત સરકાર - કલ્પસર વિભાગ પ્રભાવ"
                : language === "hindi"
                  ? "गुजरात सरकार - कल्पसर परियोजना प्रभाव"
                  : "Government of Gujarat • Project Dimensions"}
            </span>
            <h3 className="text-xl sm:text-3xl font-black text-white">
              {language === "gujarati"
                ? "મુખ્ય યોજનાકીય આંકડા અને રાષ્ટ્રીય પ્રભાવ"
                : language === "hindi"
                  ? "प्रमुख परियोजना आंकड़े एवं राष्ट्रीय प्रभाव"
                  : "Transformational Metrics & National Impact"}
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {impactMetrics.map((m, idx) => (
              <div
                key={idx}
                className="bg-black/30 border border-slate-800 p-4 rounded-xl text-center space-y-1 hover:border-amber-400/60 transition"
              >
                <div className="text-xl sm:text-2xl font-black text-amber-400 font-mono tracking-tight">
                  {m.num}
                </div>
                <div className="text-xs font-bold text-slate-200 leading-snug">
                  {m.label}
                </div>
                <div className="text-[10px] text-slate-400 leading-tight">
                  {m.sub}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Video Modal Simulation */}
      {showVideoModal && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setShowVideoModal(false)}
        >
          <div
            className="bg-[#0b243d] border-2 border-amber-400 rounded-2xl max-w-3xl w-full p-6 space-y-4 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-700 pb-3">
              <h4 className="text-lg font-bold text-white flex items-center gap-2">
                <Video className="w-5 h-5 text-amber-400" />
                <span>Kalpasar Dam Engineering 3D Simulation</span>
              </h4>
              <button
                onClick={() => setShowVideoModal(false)}
                className="text-slate-400 hover:text-white text-xs font-bold px-2 py-1 bg-slate-800 rounded"
              >
                Close
              </button>
            </div>

            <div className="aspect-video bg-black rounded-xl border border-slate-700 flex flex-col items-center justify-center p-6 text-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-amber-400/20 text-amber-400 flex items-center justify-center border-2 border-amber-400 animate-pulse">
                <Play className="w-8 h-8 fill-amber-400" />
              </div>
              <p className="text-sm font-bold text-white">
                Streaming Official Gujarat Kalpasar HD Documentary
              </p>
              <p className="text-xs text-slate-400 max-w-md">
                Alignment: Bhavnagar to Dahej (30 km) • 5,845 MW Tidal Power
                Generation • 10,250 MCM Freshwater Dam Reservoir.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
