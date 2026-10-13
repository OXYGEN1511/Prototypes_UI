import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useApp } from "../../../context/AppContext";
import { Emblem } from "../../../components/common/Emblem";
import {
  ArrowUp,
  Mail,
  Phone,
  MapPin,
  Clock,
  ShieldCheck,
  Eye,
  Sliders,
  Award,
  ExternalLink,
  MessageSquare,
} from "lucide-react";

export const Proto3Footer = ({ basePath = "/prototype-3" }) => {
  const { language, visitorCount, setIsFeedbackOpen, t } = useApp();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentDate = new Date().toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <footer
      className="bg-[#061626] text-slate-300 font-sans border-t-4 border-amber-500 relative"
      role="contentinfo"
      aria-label="Portal Footer"
    >
      {/* Main Footer Links & Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Column 1 (4 cols): Emblem & Secretariat Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <Emblem className="w-14 h-14 object-contain brightness-110 drop-shadow" />
              <div>
                <span className="text-[10px] font-extrabold text-amber-400 uppercase tracking-wider block">
                  {t.govtName}
                </span>
                <h4 className="text-base font-black text-white leading-tight">
                  {t.deptName}
                </h4>
                <span className="text-[11px] text-slate-400">
                  Government of Gujarat
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed text-justify">
              {language === "gujarati"
                ? "ખંભાતના અખાત પર ૩૦ કિમી સંયુક્ત ડેમ, ૧૦,૨૫૦ MCM મીઠા પાણીનો જળાશય, ૫,૮૪૫ MW ભરતી ઊર્જા અને ૧૦.૫૪ લાખ હેક્ટર વિસ્તારમાં સૂક્ષ્મ સિંચાઈ માટે ગુજરાત સરકારનો સર્વોચ્ચ પ્રોજેક્ટ."
                : language === "hindi"
                  ? "खंभात की खाड़ी पर 30 किमी संयुक्त बांध, 10,250 MCM ताजे पानी का विशाल जलाशय, 5,845 MW स्वच्छ ज्वारीय ऊर्जा और 10.54 लाख हेक्टेयर में सिंचाई हेतु गुजरात सरकार की महत्वाकांक्षी पहल।"
                  : "Pioneering the 30 km Gulf of Khambhat composite dam, 10,250 MCM freshwater impoundment, 5,845 MW clean tidal energy, and 10.54 lakh hectare command irrigation."}
            </p>

            {/* Registered Address & Helplines */}
            <div className="space-y-2 text-xs text-slate-300 pt-2 border-t border-slate-800">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  Block No. 2, 2nd Floor, Karmayogi Bhavan, Sector-10 A,
                  Gandhinagar - 382010, Gujarat
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>079-23256022 / 23256025</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>sec-kalpasar@gujarat.gov.in</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                <span>
                  Mon to Sat: 10:30 AM – 6:10 PM (2nd & 4th Sat Closed)
                </span>
              </div>
            </div>
          </div>

          {/* Column 2 (2.5 cols): Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h5 className="text-xs font-black text-white uppercase tracking-wider border-b border-slate-800 pb-2 flex items-center justify-between">
              <span>
                {language === "gujarati"
                  ? "ઝડપી લિંક્સ"
                  : language === "hindi"
                    ? "त्वरित लिंक"
                    : "Quick Navigation"}
              </span>
              <span className="w-2 h-2 rounded-full bg-amber-400"></span>
            </h5>

            <ul className="space-y-2 text-xs">
              <li>
                <Link
                  to={`${basePath}`}
                  className="hover:text-amber-300 transition flex items-center gap-1.5"
                >
                  <span className="text-slate-600">&rsaquo;</span>
                  <span>{t.navHome}</span>
                </Link>
              </li>
              <li>
                <Link
                  to={`${basePath}/department`}
                  className="hover:text-amber-300 transition flex items-center gap-1.5"
                >
                  <span className="text-slate-600">&rsaquo;</span>
                  <span>About Kalpasar Mandate</span>
                </Link>
              </li>
              <li>
                <Link
                  to={`${basePath}/purposes`}
                  className="hover:text-amber-300 transition flex items-center gap-1.5"
                >
                  <span className="text-slate-600">&rsaquo;</span>
                  <span>Project Pillars & Reservoir</span>
                </Link>
              </li>
              <li>
                <Link
                  to={`${basePath}/performance`}
                  className="hover:text-amber-300 transition flex items-center gap-1.5"
                >
                  <span className="text-slate-600">&rsaquo;</span>
                  <span>Performance & Feasibility</span>
                </Link>
              </li>
              <li>
                <Link
                  to={`${basePath}/tenders`}
                  className="hover:text-amber-300 transition flex items-center gap-1.5"
                >
                  <span className="text-slate-600">&rsaquo;</span>
                  <span>Active Tenders & RFP</span>
                </Link>
              </li>
              <li>
                <Link
                  to={`${basePath}/contact`}
                  className="hover:text-amber-300 transition flex items-center gap-1.5"
                >
                  <span className="text-slate-600">&rsaquo;</span>
                  <span>Grievance & Contact Us</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/evaluation"
                  className="text-amber-400 font-bold hover:underline flex items-center gap-1.5"
                >
                  <span className="text-amber-400">&rsaquo;</span>
                  <span>RFP Evaluation Matrix (100 Marks)</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 (2.5 cols): Legal Policies */}
          <div className="lg:col-span-2 space-y-3">
            <h5 className="text-xs font-black text-white uppercase tracking-wider border-b border-slate-800 pb-2 flex items-center justify-between">
              <span>Policies & Terms</span>
              <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
            </h5>

            <ul className="space-y-2 text-xs">
              <li>
                <Link
                  to={`${basePath}/policies`}
                  className="hover:text-cyan-300 transition flex items-center gap-1.5"
                >
                  <span className="text-slate-600">&rsaquo;</span>
                  <span>Hyperlinking Policy</span>
                </Link>
              </li>
              <li>
                <Link
                  to={`${basePath}/policies`}
                  className="hover:text-cyan-300 transition flex items-center gap-1.5"
                >
                  <span className="text-slate-600">&rsaquo;</span>
                  <span>Copyright Policy</span>
                </Link>
              </li>
              <li>
                <Link
                  to={`${basePath}/policies`}
                  className="hover:text-cyan-300 transition flex items-center gap-1.5"
                >
                  <span className="text-slate-600">&rsaquo;</span>
                  <span>Privacy Policy</span>
                </Link>
              </li>
              <li>
                <Link
                  to={`${basePath}/policies`}
                  className="hover:text-cyan-300 transition flex items-center gap-1.5"
                >
                  <span className="text-slate-600">&rsaquo;</span>
                  <span>Terms of Use</span>
                </Link>
              </li>
              <li>
                <Link
                  to={`${basePath}/policies`}
                  className="hover:text-cyan-300 transition flex items-center gap-1.5"
                >
                  <span className="text-slate-600">&rsaquo;</span>
                  <span>Website Disclaimer</span>
                </Link>
              </li>
              <li>
                <Link
                  to={`${basePath}/policies`}
                  className="hover:text-cyan-300 transition flex items-center gap-1.5"
                >
                  <span className="text-slate-600">&rsaquo;</span>
                  <span>RTI Proactive Disclosures</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 (3 cols): GIGW & Citizen Support */}
          <div className="lg:col-span-3 space-y-3">
            <h5 className="text-xs font-black text-white uppercase tracking-wider border-b border-slate-800 pb-2 flex items-center justify-between">
              <span>Citizen Governance</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            </h5>

            <div className="space-y-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                <span className="text-[10px] text-amber-400 font-bold uppercase tracking-wider block">
                  Web Information Manager (WIM)
                </span>
                <p className="font-bold text-white">
                  Superintending Engineer (P&D)
                </p>
                <p className="text-[11px] text-slate-400">
                  Kalpasar Department, Gandhinagar
                </p>
                <p className="text-[11px] text-slate-400">
                  Email: wim-kalpasar@gujarat.gov.in
                </p>
              </div>

              <button
                onClick={() => setIsFeedbackOpen(true)}
                className="w-full py-2 bg-slate-800 hover:bg-slate-700 text-amber-300 font-bold text-xs rounded-xl border border-slate-700 transition flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Submit Citizen Feedback</span>
              </button>

              <div className="flex items-center gap-2 text-[11px] text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>GIGW 3.0 & WCAG 2.1 AA Certified</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Sub-Footer Bar */}
      <div className="bg-[#030d17] border-t border-slate-800/80 text-[11px] py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-slate-400">
          <div>
            <p>
              &copy; 2026 <strong>Kalpasar Department</strong>, Government of
              Gujarat. All Rights Reserved.
            </p>
            <p className="text-[10px] text-slate-500 mt-0.5">
              Tender Ref:{" "}
              <span className="font-mono text-slate-400">
                GIL/2026/KALPASAR/WEB/01
              </span>{" "}
              &bull; Engineered by Aroosha Technologies Pvt. Ltd.
            </p>
          </div>

          {/* Visitor Counter & Last Updated */}
          <div className="flex items-center gap-4 text-xs font-mono">
            <div className="bg-slate-900 px-3 py-1 rounded-lg border border-slate-800 text-slate-300">
              <span className="text-slate-500 mr-1.5">Visitors:</span>
              <strong className="text-amber-400 font-bold">
                {Number(visitorCount).toLocaleString()}
              </strong>
            </div>

            <div className="bg-slate-900 px-3 py-1 rounded-lg border border-slate-800 text-slate-300">
              <span className="text-slate-500 mr-1.5">Updated:</span>
              <strong className="text-cyan-400 font-bold">{currentDate}</strong>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Back to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-2xl transition-all duration-300 border-2 border-slate-900 animate-in fade-in"
          title="Scroll to Top"
          aria-label="Scroll to Top"
        >
          <ArrowUp className="w-5 h-5 font-black stroke-[3]" />
        </button>
      )}
    </footer>
  );
};
