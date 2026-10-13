import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useApp } from "../../context/AppContext";
import { Proto3Header } from "./components/Proto3Header";
import { Proto3Footer } from "./components/Proto3Footer";
import { Chatbot } from "../../components/common/Chatbot";
import { FeedbackModal } from "../../components/common/FeedbackModal";
import {
  FileText,
  Download,
  Filter,
  Search,
  Scale,
  ShieldCheck,
  ChevronRight,
  ExternalLink,
  BookOpen
} from "lucide-react";

export const P3PoliciesPage = () => {
  const { language, t } = useApp();
  const [filterCat, setFilterCat] = useState("ALL");
  const [search, setSearch] = useState("");

  const policies = [
    {
      id: "p1",
      titleEn: "Gujarat Irrigation & Water Conservation Act (Relevant Provisions)",
      titleGu: "ગુજરાત સિંચાઈ અને જળ સંરક્ષણ અધિનિયમ (કલ્પસર યોજના જોગવાઈઓ)",
      cat: "Acts",
      ref: "ACT-GOG-1979",
      date: "2026-01-10",
      size: "1.2 MB",
      issuing: "Water Resources Dept"
    },
    {
      id: "p2",
      titleEn: "Coastal Regulation Zone (CRZ) Clearance Guidelines for Tidal Dam",
      titleGu: "કોસ્ટલ રેગ્યુલેશન ઝોન (CRZ) ક્લિયરન્સ ગાઇડલાઇન્સ અને પર્યાવરણ મંજૂરી",
      cat: "Notifications",
      ref: "CRZ-ENV-2026-01",
      date: "2026-03-14",
      size: "850 KB",
      issuing: "MoEF&CC / Forests & Environment"
    },
    {
      id: "p3",
      titleEn: "Recruitment Rules for Junior Hydrographic Engineers 2026",
      titleGu: "કલ્પસર ઇજનેરી સંવર્ગ — ભરતી અને સેવા નિયમો ૨૦૨૬",
      cat: "Recruitment",
      ref: "RR-ENG-2026-04",
      date: "2026-05-18",
      size: "1.4 MB",
      issuing: "General Administration Dept (GAD)"
    },
    {
      id: "p4",
      titleEn: "Government Resolution: Special Purpose Entity for Kalpasar Infrastructure",
      titleGu: "સરકારી ઠરાવ: કલ્પસર ઇન્ફ્રાસ્ટ્રક્ચર સ્પેશિયલ પર્પઝ વ્હીકલ (SPV) સ્થાપના",
      cat: "Resolutions",
      ref: "GR-KLP-2026-88",
      date: "2026-07-22",
      size: "2.1 MB",
      issuing: "Finance Department"
    },
    {
      id: "p5",
      titleEn: "Standard Operating Procedures for Marine Survey Vessels",
      titleGu: "દરિયાઈ સર્વેક્ષણ જહાજો માટે સ્ટાન્ડર્ડ ઓપરેટિંગ પ્રોસિજર (SOP)",
      cat: "Circulars",
      ref: "SOP-SUR-2026-09",
      date: "2026-09-05",
      size: "940 KB",
      issuing: "Chief Engineer Directorate"
    },
    {
      id: "p6",
      titleEn: "Proactive RTI Section 4(1)(b) Transparency Compliance Disclosure",
      titleGu: "માહિતી અધિકાર અધિનિયમ (RTI Act 2005) અંતર્ગત સત્તાવાર જાહેર પ્રકટીકરણ",
      cat: "RTI",
      ref: "RTI-KLP-2026-01",
      date: "2026-08-01",
      size: "3.5 MB",
      issuing: "Public Information Officer"
    }
  ];

  const filtered = policies.filter(p => {
    const matchCat = filterCat === "ALL" || p.cat === filterCat;
    const matchSearch =
      p.titleEn.toLowerCase().includes(search.toLowerCase()) ||
      p.titleGu.includes(search) ||
      p.ref.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col justify-between font-sans selection:bg-amber-400 selection:text-slate-950">
      <Proto3Header basePath="/prototype-3" />

      {/* Enterprise Corporate Banner */}
      <section className="bg-gradient-to-r from-slate-900 via-[#0d2a4a] to-slate-900 text-white py-10 border-b-4 border-amber-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-slate-300 font-medium">
            <Link to="/prototype-3" className="hover:text-amber-400 transition">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-amber-400 font-bold">Policies & Regulations</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-2">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-amber-500/20 text-amber-300 border border-amber-400/40 text-xs font-bold uppercase tracking-wider mb-2">
                <Scale className="w-3.5 h-3.5" />
                <span>Statutory Governance & Compliance</span>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
                {language === "gujarati"
                  ? "કાયદાકીય માળખું, નિયમો, ઠરાવો અને જાહેર પ્રકટીકરણ"
                  : language === "hindi"
                  ? "विधिक ढांचा, नियम, सरकारी संकल्प एवं सार्वजनिक प्रकटीकरण"
                  : "Acts, Regulations, Government Resolutions & Disclosures"}
              </h1>
            </div>

            <div className="text-right shrink-0">
              <span className="block text-xs text-slate-300">Corporate Compliance Secretariat</span>
              <span className="font-mono text-xs text-amber-400 font-bold">RTI Act & State Gazette</span>
            </div>
          </div>
        </div>
      </section>

      <main id="main-content" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-1 w-full space-y-8">
        {/* Filter & Search Toolbar */}
        <div className="border border-slate-200 rounded-lg p-4 bg-slate-50 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 flex-wrap text-xs">
            <span className="text-slate-600 font-semibold flex items-center gap-1">
              <Filter className="w-3.5 h-3.5 text-amber-500" /> Classification:
            </span>
            {["ALL", "Acts", "Notifications", "Resolutions", "Recruitment", "Circulars", "RTI"].map(c => (
              <button
                key={c}
                onClick={() => setFilterCat(c)}
                className={`px-3 py-1.5 rounded text-xs font-semibold transition ${
                  filterCat === c
                    ? "bg-slate-900 text-amber-400 font-bold shadow-xs"
                    : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="relative">
            <input
              type="text"
              placeholder="Search acts or reference ID..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="text-xs pl-8 pr-3 py-2 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-amber-500 w-64 bg-white"
            />
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
          </div>
        </div>

        {/* Policies Register Table */}
        <div className="border border-slate-200 rounded-lg overflow-hidden shadow-sm">
          <div className="bg-slate-900 text-white px-5 py-3 flex items-center justify-between">
            <div className="font-bold text-sm flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>Official Regulatory & Statutory Documents Register</span>
            </div>
            <span className="text-xs text-amber-400 font-mono">Updated 2026</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                <tr>
                  <th className="py-3 px-4">Subject & Official Title</th>
                  <th className="py-3 px-4">Category</th>
                  <th className="py-3 px-4">Reference No.</th>
                  <th className="py-3 px-4">Issuing Authority</th>
                  <th className="py-3 px-4">Date</th>
                  <th className="py-3 px-4 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                {filtered.map((item) => (
                  <tr key={item.id} className="hover:bg-amber-50/40 transition">
                    <td className="py-3.5 px-4 max-w-md">
                      <div className="font-bold text-slate-900">
                        {language === "gujarati" ? item.titleGu : item.titleEn}
                      </div>
                      <div className="text-[11px] text-slate-500 mt-0.5 font-mono">
                        File Size: {item.size} &bull; PDF
                      </div>
                    </td>
                    <td className="py-3.5 px-4 font-semibold text-slate-700">
                      <span className="bg-slate-100 text-slate-800 border border-slate-200 px-2 py-0.5 rounded text-[11px]">
                        {item.cat}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 font-mono font-bold text-slate-800">
                      {item.ref}
                    </td>
                    <td className="py-3.5 px-4 text-slate-600 text-[11px]">
                      {item.issuing}
                    </td>
                    <td className="py-3.5 px-4 font-mono text-slate-700 whitespace-nowrap">
                      {item.date}
                    </td>
                    <td className="py-3.5 px-4 text-center">
                      <button
                        onClick={() => alert(`Downloading regulatory file: ${item.titleEn}`)}
                        className="px-3 py-1.5 bg-slate-900 hover:bg-amber-500 hover:text-slate-950 text-white rounded font-bold text-xs flex items-center gap-1.5 mx-auto transition"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>PDF</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Corporate RTI Section */}
        <div className="border border-amber-300 rounded-lg p-6 bg-amber-50/60 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
              <Scale className="w-4 h-4 text-amber-600" />
              <span>Right to Information (RTI) Transparency Compliance</span>
            </div>
            <p className="text-xs text-slate-600 max-w-3xl leading-relaxed">
              In accordance with Section 4(1)(b) of the RTI Act 2005, the Kalpasar Department publishes annual organization structures, officer powers, decision-making procedures, and public registers.
            </p>
          </div>
          <a
            href="https://onlinerti.gujarat.gov.in"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-amber-400 font-bold text-xs rounded flex items-center gap-2 shrink-0 transition"
          >
            <span>State RTI Portal</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </main>

      <Proto3Footer basePath="/prototype-3" />
      <Chatbot />
      <FeedbackModal />
    </div>
  );
};
