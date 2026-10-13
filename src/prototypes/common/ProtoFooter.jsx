import React from "react";
import { Link } from "react-router-dom";
import { useApp } from "../../context/AppContext";
import { Emblem } from "../../components/common/Emblem";
import { departmentInfo } from "../../data/kalpasarData";
import {
  ShieldCheck,
  ExternalLink,
  MapPin,
  Phone,
  Mail,
  Clock,
  Eye,
  FileText
} from "lucide-react";
import { Proto3Footer } from "../prototype3/components/Proto3Footer";

export const ProtoFooter = ({ variant = "modern", basePath = "/prototype-2" }) => {
  if (variant === "mdl") {
    return <Proto3Footer basePath={basePath} />;
  }

  const { language, visitorCount, t } = useApp();

  const isAccessible = variant === "accessible";

  return (
    <footer
      className={`border-t text-xs transition-colors ${
        isAccessible
          ? "bg-black text-white border-yellow-400 border-t-4"
          : "bg-slate-950 text-slate-300 border-slate-800"
      }`}
    >
      {/* Upper Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Col 1: Identity & Address */}
        <div className="space-y-3">
          <div className="flex items-center gap-2.5">
            <Emblem className="w-10 h-10" />
            <div>
              <div className="font-bold text-white text-sm">{t.deptName}</div>
              <div className="text-[11px] text-kalpasar-gold font-medium">
                {t.govtName}
              </div>
            </div>
          </div>
          <p className="text-[11px] text-slate-400 leading-relaxed">
            {language === "gujarati"
              ? "ખંભાતના અખાત પર ભરતી ઊર્જા અને વિશાળ મીઠા પાણીના સરોવર નિર્માણ માટે સમર્પિત ગુજરાત સરકારનો મહત્ત્વાકાંક્ષી વિભાગ."
              : language === "hindi"
              ? "खंभात की खाड़ी में ज्वारीय ऊर्जा और विशाल मीठे पानी के जलाशय निर्माण हेतु समर्पित गुजरात सरकार का महत्वाकांक्षी विभाग।"
              : "Dedicated department of Government of Gujarat executing the Gulf of Khambhat Development Project."}
          </p>
          <div className="space-y-1.5 text-[11px] text-slate-400 pt-1">
            <div className="flex items-start gap-2">
              <MapPin className="w-3.5 h-3.5 text-kalpasar-cyan shrink-0 mt-0.5" />
              <span>{departmentInfo.address.office}, {departmentInfo.address.sector}, {departmentInfo.address.city} - {departmentInfo.address.pincode}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-kalpasar-cyan shrink-0" />
              <span>{departmentInfo.address.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-kalpasar-cyan shrink-0" />
              <span>{departmentInfo.address.email}</span>
            </div>
          </div>
        </div>

        {/* Col 2: Useful Links */}
        <div>
          <h4 className="font-bold text-white mb-3 uppercase tracking-wider text-[11px] border-b border-slate-800 pb-1.5">
            Important Portals & Policies
          </h4>
          <ul className="space-y-2 text-[11px] text-slate-400">
            <li>
              <a
                href="https://gujaratindia.gov.in"
                target="_blank"
                rel="noreferrer"
                className="hover:text-kalpasar-cyan flex items-center gap-1"
              >
                <span>Gujarat State Portal</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>
            </li>
            <li>
              <a
                href="https://gil.gujarat.gov.in"
                target="_blank"
                rel="noreferrer"
                className="hover:text-kalpasar-cyan flex items-center gap-1"
              >
                <span>Gujarat Informatics Limited (GIL)</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>
            </li>
            <li>
              <a
                href="https://digitalgujarat.gov.in"
                target="_blank"
                rel="noreferrer"
                className="hover:text-kalpasar-cyan flex items-center gap-1"
              >
                <span>Digital Gujarat Services</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>
            </li>
            <li>
              <a
                href="https://nrega.nic.in"
                target="_blank"
                rel="noreferrer"
                className="hover:text-kalpasar-cyan flex items-center gap-1"
              >
                <span>National Water Informatics Centre</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>
            </li>
          </ul>
        </div>

        {/* Col 3: Compliance & Standards */}
        <div>
          <h4 className="font-bold text-white mb-3 uppercase tracking-wider text-[11px] border-b border-slate-800 pb-1.5">
            GIGW 3.0 & Web Standards
          </h4>
          <div className="space-y-2 text-[11px] text-slate-400">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>GIGW 3.0 Compliance Matrix</span>
            </div>
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>WCAG 2.1 Level AA Accessible</span>
            </div>
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Trilingual Unicode Fonts Standardized</span>
            </div>
            <div className="bg-slate-900 border border-slate-800 p-2.5 rounded-lg text-[10px] text-slate-300 mt-2">
              <strong>Tender Reference:</strong> {departmentInfo.tenderRef}
            </div>
          </div>
        </div>

        {/* Col 4: Analytics & Prototype Switcher */}
        <div>
          <h4 className="font-bold text-white mb-3 uppercase tracking-wider text-[11px] border-b border-slate-800 pb-1.5">
            Portal Analytics & Demos
          </h4>
          <div className="bg-slate-900 border border-slate-800 p-3 rounded-xl space-y-2">
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-slate-400">{t.visitorCount}:</span>
              <span className="font-mono font-bold text-emerald-400 text-sm">
                {visitorCount.toLocaleString()}
              </span>
            </div>
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-slate-400">{t.lastUpdated}:</span>
              <span className="font-mono text-slate-300">10 Oct 2026</span>
            </div>
          </div>

          <div className="mt-3 flex flex-col gap-1.5">
            <Link
              to="/evaluation"
              className="text-[11px] text-amber-300 hover:text-amber-200 underline"
            >
              &rarr; View RFP Evaluation Checklist (100 Marks)
            </Link>
            <Link
              to="/admin"
              className="text-[11px] text-cyan-400 hover:text-cyan-300 underline"
            >
              &rarr; Test Maker-Checker CMS (/admin)
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800/80 py-4 px-4 sm:px-6 lg:px-8 bg-black/60 text-center">
        <p className="text-[11px] text-slate-400">{t.footerDisclaimer}</p>
        <p className="text-[11px] text-slate-500 mt-1">{t.copyright}</p>
      </div>
    </footer>
  );
};
