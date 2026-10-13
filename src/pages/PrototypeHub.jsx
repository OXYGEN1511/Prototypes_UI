import React from "react";
import { Link } from "react-router-dom";
import { Emblem } from "../components/common/Emblem";
import { keyProjectFacts, departmentInfo } from "../data/kalpasarData";
import {
  ExternalLink,
  Layers,
  Award,
  CheckCircle,
  Sliders,
  Database,
  Eye,
  Zap,
  ArrowRight,
  ShieldCheck,
  Globe2,
  FileText,
  Bot,
} from "lucide-react";

export const PrototypeHub = () => {
  const prototypes = [
    {
      id: "prototype-1",
      name: "Concept 1: Official Government Classic",
      route: "/prototype-1",
      badge: "Institutional & Formal",
      badgeColor: "bg-blue-100 text-blue-900 border-blue-300",
      accentColor: "border-blue-900",
      description:
        "Formal government portal identity emphasizing institutional authority, deep navy blue & gold palette, structured document tables, circular listings, and traditional GoG information hierarchy.",
      features: [
        "Structured Government Navigation with Emblem Header",
        "Official Notifications & Circulars Ticker & Tables",
        "Authoritative Department & Secretary Leadership Section",
        "GIGW 3.0 Standardized Footer & Government Links",
      ],
      idealFor:
        "Traditional committee evaluators prioritizing standard GoG portal compliance.",
    },
    {
      id: "prototype-2",
      name: "Concept 2: Modern Citizen-First Portal",
      route: "/prototype-2",
      badge: "Primary Recommended Concept",
      badgeColor:
        "bg-emerald-100 text-emerald-900 border-emerald-300 font-bold",
      accentColor: "border-kalpasar-cyan ring-2 ring-kalpasar-cyan/40",
      isPrimary: true,
      description:
        "State-of-the-art GovTech portal celebrating the Gulf of Khambhat with ocean gradients, prominent search, interactive metrics dashboard, responsive citizen services, and world-class visual finesse.",
      features: [
        "Dynamic Hero with Live Metrics (30 km Dam, 5845 MW Tidal Power)",
        "Instant Search & Citizen Quick-Access Services Hub",
        "Multi-Purpose Project Interactive Visual Cards",
        "Divyangjan Voice Assistant & Live Multilingual Engine",
      ],
      idealFor:
        "Forward-looking digital governance showcasing Aroosha Technologies' UI/UX excellence.",
    },
    {
      id: "prototype-3",
      name: "Concept 3: PSU Enterprise Flagship Portal (MDL Main Architecture)",
      route: "/prototype-3",
      badge: "MDL Benchmark / GIGW 3.0",
      badgeColor: "bg-blue-100 text-blue-900 border-blue-300",
      accentColor: "border-blue-600",
      description:
        "Engineered following the state-of-the-art Public Sector Enterprise benchmark architecture (modeled after Mazagon Dock Shipbuilders Limited — mdl_main). Featuring dynamic hero sliders, live marquee ticker, executive leadership photo showcase, strategic portfolio grid, dual-column offerings & What's New hub, multimedia feature player, and national initiatives marquee.",
      features: [
        "MDL Main Signature Navy Masthead, Topbar & Mega Navigation",
        "Interactive 4-Slide Engineering Hero Carousel with Autoplay & Play/Pause",
        "About Department Leadership Portrait, Mandate & Action Cards",
        "Strategic Project Portfolio Grid with Technical Specs Modal",
        "Dual Offerings & What's New Hub with Direct PDF Downloads",
        "Multimedia Feature Spotlight, Important Links Panel & Impact Metrics",
        "Social Media Stream & Photo/Survey Lightbox Media Gallery",
      ],
      idealFor:
        "Evaluators seeking a prestigious, enterprise-grade Public Sector Undertaking & Ministry portal architecture.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-slate-100">
      {/* Top Banner */}
      <header className="border-b border-slate-800 bg-slate-900/80 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <Emblem className="w-11 h-11" />
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-kalpasar-gold uppercase tracking-wider">
                  Government of Gujarat
                </span>
                <span className="text-[10px] bg-kalpasar-blue/50 text-cyan-300 border border-cyan-800 px-2 py-0.5 rounded">
                  RFP Clause 2.18.5 Prototype
                </span>
              </div>
              <h1 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                Kalpasar Department Website Prototype Selection Hub
              </h1>
              <p className="text-xs text-slate-400">
                Presented by{" "}
                <strong className="text-slate-200">
                  Aroosha Technologies Pvt. Ltd.
                </strong>{" "}
                for Government Evaluation Committee
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <Link
              to="/evaluation"
              className="flex items-center gap-1.5 bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 px-3 py-1.5 rounded-lg text-xs font-semibold transition"
            >
              <Award className="w-3.5 h-3.5" />
              <span>Evaluation Checklist (70+30 Marks)</span>
            </Link>
            <Link
              to="/admin"
              className="flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 px-3 py-1.5 rounded-lg text-xs font-medium transition"
            >
              <Sliders className="w-3.5 h-3.5 text-kalpasar-cyan" />
              <span>CMS Admin</span>
            </Link>
            <Link
              to="/technical-capabilities"
              className="flex items-center gap-1.5 bg-cyan-950/60 hover:bg-cyan-900 text-cyan-300 border border-cyan-800 px-3 py-1.5 rounded-lg text-xs font-medium transition"
            >
              <Database className="w-3.5 h-3.5" />
              <span>Technical Demo</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Presentation */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-6 text-center">
        <div className="inline-flex items-center gap-2 bg-slate-800/80 border border-slate-700 rounded-full px-4 py-1.5 text-xs text-slate-300 mb-4">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>
            Full-Stack Interactive Prototypes with Working Navigation, Data &
            CMS
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight max-w-4xl mx-auto leading-tight">
          Three Distinct Architectural Prototypes for the{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-amber-300">
            Gulf of Khambhat Development Project
          </span>
        </h2>
        <p className="mt-4 text-sm sm:text-base text-slate-400 max-w-3xl mx-auto leading-relaxed">
          In strict accordance with the Kalpasar RFP Clause 2.18.5, we present
          three genuinely distinct, fully responsive concepts with functional
          navigation, shared information architecture, live maker-checker CMS,
          and database integration demonstrations.
        </p>

        {/* Live Metrics Row */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl mx-auto">
          {keyProjectFacts.slice(0, 4).map((f, i) => (
            <div
              key={i}
              className="bg-slate-900/60 border border-slate-800 p-3.5 rounded-xl"
            >
              <div className="text-xl sm:text-2xl font-black text-cyan-400">
                {f.metric}
              </div>
              <div className="text-xs font-medium text-slate-300 mt-0.5">
                {f.labelEn}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* The 3 Prototype Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-6">
          <span className="text-xs uppercase font-bold tracking-wider text-kalpasar-gold">
            Select a Prototype to Explore Live
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {prototypes.map((proto) => (
            <div
              key={proto.id}
              className={`bg-slate-900 rounded-2xl border transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-xl hover:-translate-y-1.5 hover:shadow-2xl ${
                proto.isPrimary
                  ? "border-cyan-500/80 ring-2 ring-cyan-500/30"
                  : "border-slate-800 hover:border-slate-700"
              }`}
            >
              {/* Card Header & Preview */}
              <div className="p-6">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span
                    className={`text-[11px] px-2.5 py-1 rounded-full border ${proto.badgeColor}`}
                  >
                    {proto.badge}
                  </span>
                  <span className="text-xs text-slate-500 font-mono">
                    {proto.id.toUpperCase()}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">
                  {proto.name}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {proto.description}
                </p>

                {/* Feature Checklist */}
                <div className="space-y-2 border-t border-slate-800/80 pt-4 mb-4">
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                    Key Architectural Features:
                  </span>
                  {proto.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 text-xs text-slate-300"
                    >
                      <CheckCircle className="w-3.5 h-3.5 text-kalpasar-cyan shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Target Evaluation Note */}
                <div className="bg-slate-950/70 border border-slate-800 p-2.5 rounded-lg text-[11px] text-slate-400">
                  <strong className="text-slate-300">Design Intent:</strong>{" "}
                  {proto.idealFor}
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 bg-slate-950/50 border-t border-slate-800">
                <Link
                  to={proto.route}
                  className={`w-full py-3 px-4 rounded-xl flex items-center justify-center gap-2 font-bold text-sm transition shadow-lg ${
                    proto.isPrimary
                      ? "bg-gradient-to-r from-kalpasar-cyan to-teal-500 hover:from-teal-400 hover:to-cyan-400 text-slate-950 shadow-cyan-900/40"
                      : "bg-slate-800 hover:bg-slate-700 text-white border border-slate-700"
                  }`}
                >
                  <span>Launch {proto.id.replace("-", " ").toUpperCase()}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Fast Shortcuts to Demonstrations */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 border-t border-slate-800">
        <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
          <Zap className="w-5 h-5 text-kalpasar-gold" />
          <span>Interactive Demonstrations for the Evaluation Committee</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link
            to="/admin"
            className="p-4 bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 rounded-xl transition flex items-start gap-3.5 group"
          >
            <div className="p-2.5 bg-amber-500/10 text-amber-400 rounded-lg shrink-0 group-hover:scale-110 transition">
              <Sliders className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                Maker-Checker CMS Portal
                <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-amber-400 group-hover:translate-x-1 transition" />
              </h4>
              <p className="text-xs text-slate-400 mt-1">
                Test the 2-stage publishing workflow: Draft &rarr; Submit &rarr;
                Checker Approval &rarr; Instant public notice board reflection.
              </p>
            </div>
          </Link>

          <Link
            to="/technical-capabilities"
            className="p-4 bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 rounded-xl transition flex items-start gap-3.5 group"
          >
            <div className="p-2.5 bg-cyan-500/10 text-cyan-400 rounded-lg shrink-0 group-hover:scale-110 transition">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                Technical Capabilities Showcase
                <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-1 transition" />
              </h4>
              <p className="text-xs text-slate-400 mt-1">
                PostgreSQL schema design, live REST API test runner (HTTP 200
                JSON), RSS/XML feeds, and GIS integration endpoints.
              </p>
            </div>
          </Link>

          <Link
            to="/evaluation"
            className="p-4 bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 rounded-xl transition flex items-start gap-3.5 group"
          >
            <div className="p-2.5 bg-emerald-500/10 text-emerald-400 rounded-lg shrink-0 group-hover:scale-110 transition">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                RFP Evaluation Scorecard
                <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-emerald-400 group-hover:translate-x-1 transition" />
              </h4>
              <p className="text-xs text-slate-400 mt-1">
                Full compliance breakdown of all 70 General + 30 Technical Marks
                with direct links to each feature evidence.
              </p>
            </div>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-6 text-center text-xs text-slate-500 bg-slate-950">
        <p>
          Kalpasar Department Website RFP Prototype | Prepared by{" "}
          <strong>Aroosha Technologies Pvt. Ltd.</strong> | Gandhinagar, Gujarat
        </p>
        <p className="mt-1 text-[11px] text-slate-600">
          Compliant with Gujarat Informatics Limited (GIL) Guidelines & GIGW 3.0
          Accessibility Standards.
        </p>
      </footer>
    </div>
  );
};
