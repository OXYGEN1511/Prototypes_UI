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
  departmentInfo,
  upcomingEvents
} from "../../data/kalpasarData";
import {
  Building2,
  FileText,
  Download,
  ExternalLink,
  ChevronRight,
  Landmark,
  ArrowRight,
  Map,
  Users,
  BookOpen,
  Scroll,
  GanttChartSquare,
  Phone,
  Mail,
  MapPin
} from "lucide-react";

// Old Government Site Color Palette
// Primary: #1c5e8a (GoG Steel Blue)
// Dark: #004b87 (Deep GoG Blue)
// Accent: #0077b6 (Link Blue)
// Background: #f0f0f0 (Light Gray)
// Nav: #1c5e8a

export const Prototype1Home = () => {
  const { language, setIsFeedbackOpen, t } = useApp();
  const publishedNotices = kalpasarStore.getPublishedNotices();

  const contentCards = [
    {
      title: "Current Activities & Future Plan",
      icon: <GanttChartSquare className="w-4 h-4" />,
      items: [
        "Engineering Activities (Bathymetric & Seismic Surveys, Marine Geotechnical Drilling by CWPRS Pune & NIOT Chennai)",
        "EIA / SIA Activities (Environmental & Social Impact Assessment covering Marine Ecology & Estuarine Fisheries)",
        "Bhadbhut Barrage Activities (1.66 km, 125 Gates across Narmada — 599 MCM Sweet Water Reservoir)",
        "Departmental Miscellaneous Engineering Activities (Real-time Ocean Wave, Tidal & Sedimentation Monitoring)"
      ],
      link: "/prototype-1/performance"
    },
    {
      title: "Committees",
      icon: <Users className="w-4 h-4" />,
      items: [
        "Constitution of \"Steering Council of Ministers for Kalpasar Project\" (SCM) — Chaired by Hon'ble Chief Minister",
        "Constitution of \"Committee of Secretaries for Executive Functions\" (CSE) — Inter-Ministerial Coordination",
        "Constitution of \"Expert Advisory Group for Kalpasar Project\" (EAG) — Eminent Scientists & Oceanographers"
      ],
      link: "/prototype-1/department"
    },
    {
      title: "Government Resolutions",
      icon: <Scroll className="w-4 h-4" />,
      items: [
        "Kalpasar Project – Corrigendum to the resolution dated 16/6/06 for the reconstitution of Expert Advisory Group (EAG)",
        "Reconstitution of Expert Advisory Group for Kalpasar Project (GR No. KLP-102003-88-K)",
        "Administrative Approval & Sanction for Bhadbhut Barrage Project across River Narmada (GR No. BBP-102018-204-K)"
      ],
      link: "/prototype-1/policies"
    },
    {
      title: "Maps",
      icon: <Map className="w-4 h-4" />,
      items: [
        "Kalpasar Dam Alignment Map (Bhavnagar ↔ Dahej, 30 km Composite Closure)",
        "Bhadbhut Barrage Project Map (River Narmada, Village Bhadbhut, Bharuch)",
        "Enclosed Freshwater Reservoir & Salinity Barrier Map (2,000 sq km)"
      ],
      link: "/prototype-1/purposes",
      isMap: true
    }
  ];

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#f0f0f0", fontFamily: "Arial, sans-serif" }}>
      {/* GIGW Accessibility Bar — matching old site top bar */}
      <div className="w-full bg-white border-b border-gray-300 py-1 px-4 flex items-center justify-between text-xs">
        <div className="flex items-center gap-4 text-gray-600">
          <a href="#main-content" className="flex items-center gap-1 hover:underline">
            <span>⏭</span> Skip To Main Content
          </a>
          <a href="#" className="flex items-center gap-1 hover:underline">
            <span>👁</span> Screen Reader Access
          </a>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 text-xs">
            <button className="w-6 h-6 bg-black text-white font-bold text-xs rounded">A</button>
            <button className="w-6 h-6 bg-gray-300 text-gray-700 text-xs rounded">A</button>
            <button className="w-6 h-6 bg-white border border-gray-400 text-xs rounded">A</button>
          </div>
          <span className="text-gray-400">|</span>
          <span className="text-gray-600">Text Resize:</span>
          <div className="flex items-center gap-0.5">
            <button className="px-1.5 py-0.5 border border-gray-400 text-xs hover:bg-gray-100">A-</button>
            <button className="px-1.5 py-0.5 border border-gray-400 text-xs bg-gray-200">A</button>
            <button className="px-1.5 py-0.5 border border-gray-400 text-xs hover:bg-gray-100">A+</button>
          </div>
          <button
            onClick={() => setIsFeedbackOpen(true)}
            className="text-xs text-blue-700 hover:underline font-medium"
          >
            ગુજરાતી
          </button>
        </div>
      </div>

      {/* Department Header — Old Site Style */}
      <div className="bg-white border-b border-gray-300 py-3 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/prototype-1" className="flex items-center gap-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Emblem_of_Gujarat.svg/120px-Emblem_of_Gujarat.svg.png"
              alt="Gujarat Emblem"
              className="h-14 w-auto"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            <div>
              <div className="text-xs font-bold text-gray-500 uppercase tracking-wide">
                NARMADA, WATER RESOURCES, WATER SUPPLY & KALPASAR DEPARTMENT
              </div>
              <div className="text-xl font-bold" style={{ color: "#1c5e8a" }}>
                {language === "gujarati" ? "ખંભાતના અખાત વિકાસ યોજના (કલ્પસર)" : language === "hindi" ? "खंभात की खाड़ी विकास परियोजना (कल्पसर)" : "The Gulf of Khambhat Development Project (Kalpasar)"}
              </div>
              <div className="text-xs text-gray-500">
                Government of Gujarat | ગુજરાત સરકાર
              </div>
            </div>
          </Link>
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search..."
              className="border border-gray-400 px-3 py-1.5 text-sm w-64 focus:outline-none focus:border-blue-500"
            />
            <button
              className="absolute right-0 top-0 h-full px-3 text-white text-sm"
              style={{ backgroundColor: "#1c5e8a" }}
            >
              🔍
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation — Old Site Dark Blue Bar */}
      <nav className="w-full text-white text-sm shadow" style={{ backgroundColor: "#1c5e8a" }}>
        <div className="max-w-7xl mx-auto flex items-center flex-wrap">
          {[
            { label: "Home", path: "/prototype-1", active: true },
            { label: "About Us", path: "/prototype-1/department" },
            { label: "Projects", path: "/prototype-1/purposes" },
            { label: "Documents", path: "/prototype-1/policies" },
            { label: "Gallery", path: "/prototype-1/performance" },
            { label: "News & Updates", path: "/prototype-1/tenders" },
            { label: "Bhadbhut Barrage Project", path: "/prototype-1/purposes", external: true, isExternal: true },
            { label: "RTI", path: "/prototype-1/policies" },
            { label: "Contact", path: "/prototype-1/contact" },
          ].map((item, idx) => (
            <Link
              key={idx}
              to={item.path}
              className="px-4 py-3 text-xs font-medium hover:bg-white/20 transition whitespace-nowrap flex items-center gap-1"
              style={item.active ? { backgroundColor: "#333", color: "#fff" } : {}}
            >
              {item.label}
              {item.external && <ExternalLink className="w-3 h-3 opacity-60" />}
            </Link>
          ))}
        </div>
      </nav>

      <main id="main-content" className="flex-1">
        {/* Hero Section — 2-column like old site: big photo + CM portrait */}
        <div className="w-full flex" style={{ maxHeight: "420px", overflow: "hidden" }}>
          {/* Left: Large Site/Project Photo */}
          <div className="flex-1 relative" style={{ minHeight: "300px" }}>
            <img
              src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=900"
              alt="Bhadbhut Barrage Construction - Gulf of Khambhat"
              className="w-full h-full object-cover"
              style={{ maxHeight: "420px" }}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
              <p className="text-white text-xs font-semibold">Bhadbhut Barrage — Gulf of Khambhat Development Project, Gujarat</p>
            </div>
          </div>

          {/* Right Sidebar: CM Portrait — old site style */}
          <div
            className="w-80 shrink-0 flex flex-col items-center justify-center gap-4 p-6"
            style={{ backgroundColor: "#d4e6f5" }}
          >
            {leadershipData.slice(0, 2).map((leader, idx) => (
              <div key={idx} className="text-center">
                <img
                  src={leader.image}
                  alt={leader.nameEn}
                  className="w-24 h-24 object-cover mx-auto border-2 border-white shadow"
                />
                <div className="mt-2 text-xs">
                  <div className="font-bold text-gray-900 text-sm">{leader.nameEn}</div>
                  <div className="text-gray-600">{leader.roleEn}</div>
                  {idx === 0 && <div className="text-[11px] text-gray-500">{leader.portfolioEn}</div>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Latest News Ticker — Blue Bar Style */}
        <div className="w-full flex items-center text-xs" style={{ backgroundColor: "#1c5e8a" }}>
          <div
            className="shrink-0 text-white font-bold px-4 py-2.5 flex items-center"
            style={{ backgroundColor: "#004b87", minWidth: "140px" }}
          >
            Latest News
          </div>
          <div className="flex-1 overflow-hidden bg-white py-2.5 px-4">
            <div className="overflow-hidden whitespace-nowrap">
              <div className="inline-block animate-marquee space-x-8 text-gray-700">
                {publishedNotices.length > 0
                  ? publishedNotices.slice(0, 4).map((n, i) => (
                      <span key={n.id}>
                        <span className="font-semibold text-blue-700">[{n.category}]</span>{" "}
                        {language === "gujarati" ? n.titleGu : language === "hindi" ? n.titleHi : n.titleEn}
                        {i < 3 ? " • " : ""}
                      </span>
                    ))
                  : "At Present there is no latest news available."}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

          {/* 4-Column Content Cards — exactly like old site */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
            {contentCards.map((card, idx) => (
              <div key={idx} className="bg-white border border-gray-200 shadow-sm">
                {/* Card Header — old site blue header */}
                <div
                  className="text-white text-xs font-bold px-4 py-3 flex items-center gap-2"
                  style={{ backgroundColor: "#1c5e8a" }}
                >
                  {card.icon}
                  <span>{card.title}</span>
                </div>
                {/* Card Body */}
                <div className="p-4 space-y-2 min-h-36">
                  {card.isMap ? (
                    <div className="space-y-2">
                      {card.items.map((item, iIdx) => (
                        <Link
                          key={iIdx}
                          to={card.link}
                          className="block p-2 bg-gray-100 hover:bg-blue-50 border border-gray-200 text-xs font-semibold text-gray-800 transition"
                        >
                          📍 {item}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <ul className="space-y-1.5">
                      {card.items.map((item, iIdx) => (
                        <li key={iIdx}>
                          <Link
                            to={card.link}
                            className="text-xs flex items-start gap-1.5 hover:underline"
                            style={{ color: "#0077b6" }}
                          >
                            <span className="text-gray-500 mt-0.5">»»</span>
                            <span>{item}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                {/* View More */}
                <div className="border-t border-gray-200 p-3 flex justify-end">
                  <Link
                    to={card.link}
                    className="text-xs text-white px-3 py-1 font-semibold hover:opacity-90 transition"
                    style={{ backgroundColor: "#1c5e8a" }}
                  >
                    View More
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Official Notices Table — formal table like old govt site */}
          <div className="bg-white border border-gray-200 shadow-sm mb-8">
            <div
              className="text-white font-bold px-5 py-3 flex items-center justify-between text-sm"
              style={{ backgroundColor: "#004b87" }}
            >
              <span className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                Official Departmental Notifications, Circulars & Tenders
              </span>
              <Link
                to="/prototype-1/tenders"
                className="text-xs text-yellow-300 hover:underline font-semibold"
              >
                View Gazette Archive →
              </Link>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-gray-800">
                <thead className="border-b-2" style={{ backgroundColor: "#e8f0f7", borderColor: "#1c5e8a" }}>
                  <tr>
                    <th className="py-2.5 px-4 font-bold">Date</th>
                    <th className="py-2.5 px-4 font-bold">Ref Number</th>
                    <th className="py-2.5 px-4 font-bold">Subject Title</th>
                    <th className="py-2.5 px-4 font-bold">Category</th>
                    <th className="py-2.5 px-4 font-bold text-right">Download</th>
                  </tr>
                </thead>
                <tbody>
                  {publishedNotices.map((n, idx) => (
                    <tr
                      key={n.id}
                      className="border-b border-gray-200 hover:bg-blue-50 transition"
                      style={idx % 2 === 0 ? { backgroundColor: "#fafcff" } : { backgroundColor: "#fff" }}
                    >
                      <td className="py-3 px-4 font-mono text-gray-600 whitespace-nowrap">{n.date}</td>
                      <td className="py-3 px-4 font-mono font-semibold whitespace-nowrap" style={{ color: "#004b87" }}>
                        {n.refNo}
                      </td>
                      <td className="py-3 px-4 font-medium text-gray-900">
                        <a href="#" className="hover:underline" style={{ color: "#0077b6" }}>
                          {language === "gujarati" ? n.titleGu : language === "hindi" ? n.titleHi : n.titleEn}
                        </a>
                      </td>
                      <td className="py-3 px-4 whitespace-nowrap">
                        <span className="px-2 py-0.5 border border-gray-300 rounded text-[11px] bg-gray-100">
                          {n.category}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-right whitespace-nowrap">
                        <button
                          onClick={() => alert(`Downloading: ${n.refNo}`)}
                          className="px-2.5 py-1 text-white rounded text-[11px] font-semibold hover:opacity-90 transition"
                          style={{ backgroundColor: "#1c5e8a" }}
                        >
                          PDF ({n.fileSize})
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Key Project Stats — inline table style */}
          <div className="bg-white border border-gray-200 shadow-sm mb-8">
            <div
              className="text-white font-bold px-5 py-3 text-sm flex items-center gap-2"
              style={{ backgroundColor: "#1c5e8a" }}
            >
              <Landmark className="w-4 h-4" />
              Kalpasar Project Key Statistics
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-x divide-y divide-gray-200">
              {keyProjectFacts.map((fact, idx) => (
                <div key={idx} className="p-4 text-center hover:bg-blue-50 transition">
                  <div className="text-xl font-black font-mono" style={{ color: "#004b87" }}>
                    {fact.metric}
                  </div>
                  <div className="text-[11px] font-bold text-gray-700 mt-1">
                    {language === "gujarati" ? fact.labelGu : language === "hindi" ? fact.labelHi : fact.labelEn}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Leadership Section */}
          <div className="bg-white border border-gray-200 shadow-sm">
            <div
              className="text-white font-bold px-5 py-3 text-sm flex items-center gap-2"
              style={{ backgroundColor: "#1c5e8a" }}
            >
              <Users className="w-4 h-4" />
              Department Governance & Administrative Leadership
            </div>
            <div className="p-5 grid grid-cols-1 md:grid-cols-3 gap-5">
              {leadershipData.map((l, idx) => (
                <div
                  key={idx}
                  className="border border-gray-200 p-4 text-center space-y-2 hover:shadow-md transition"
                  style={{ backgroundColor: "#f5f9ff" }}
                >
                  <img
                    src={l.image}
                    alt={l.nameEn}
                    className="w-20 h-20 rounded-full mx-auto object-cover border-2"
                    style={{ borderColor: "#1c5e8a" }}
                  />
                  <div className="font-bold text-sm text-gray-900">{l.nameEn}</div>
                  <div className="text-xs font-semibold" style={{ color: "#1c5e8a" }}>{l.roleEn}</div>
                  <div className="text-[11px] text-gray-500">{l.portfolioEn}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Quick Info Bar */}
        <div className="w-full border-t border-gray-200 py-4 px-4" style={{ backgroundColor: "#e8f0f7" }}>
          <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-6 text-xs text-gray-700">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" style={{ color: "#1c5e8a" }} />
              <span>Block No. 8, 7th Floor, Sardar Bhavan, New Sachivalaya, Gandhinagar 382 010</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5" style={{ color: "#1c5e8a" }} />
              <span>+91-79-23252235 | +91-99096 80401</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5" style={{ color: "#1c5e8a" }} />
              <span>cc-nwrs@gujarat.gov.in</span>
            </div>
          </div>
        </div>

        {/* Footer Policy Links — old site style */}
        <div className="w-full py-3 px-4 text-center text-xs" style={{ backgroundColor: "#1a1a1a", color: "#ccc" }}>
          <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-x-3 gap-y-1 mb-2">
            {["Accessibility Statement", "Copyright Policy", "Disclaimer", "Site Map", "Feedback", "Hyperlink Policy", "Privacy Policy", "Terms & Conditions", "Terms of Use", "Help", "Web Information Manager"].map((link, i) => (
              <span key={i} className="flex items-center gap-3">
                <button onClick={() => {}} className="hover:text-white transition hover:underline">{link}</button>
                {i < 10 && <span className="text-gray-600">|</span>}
              </span>
            ))}
          </div>
          <div className="text-[11px] text-gray-500 leading-relaxed">
            Copyright © 2018 - All Rights Reserved - Official Website of The Gulf of Khambhat Development Project (Kalpasar), Government of Gujarat, India<br />
            Content published and managed by The Gulf of Khambhat Development Project (Kalpasar), Government of Gujarat<br />
            E-mail ID: cc-nwrs@gujarat.gov.in | Contact: +91-79-23252235 | +91-99096 80401
          </div>
        </div>
      </main>

      <Chatbot />
      <FeedbackModal />
    </div>
  );
};
