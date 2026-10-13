import React from "react";
import { Link } from "react-router-dom";
import { useApp } from "../../context/AppContext";
import { Proto3Header } from "./components/Proto3Header";
import { Proto3Footer } from "./components/Proto3Footer";
import { Chatbot } from "../../components/common/Chatbot";
import { FeedbackModal } from "../../components/common/FeedbackModal";
import { departmentInfo } from "../../data/kalpasarData";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Building2,
  ChevronRight,
  Send,
  Building,
  Navigation,
  ExternalLink,
  ShieldCheck
} from "lucide-react";

export const P3ContactPage = () => {
  const { language, setIsFeedbackOpen, t } = useApp();

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
            <span className="text-amber-400 font-bold">Contact & Directory</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-2">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-amber-500/20 text-amber-300 border border-amber-400/40 text-xs font-bold uppercase tracking-wider mb-2">
                <Building2 className="w-3.5 h-3.5" />
                <span>Secretariat & Field Directorate</span>
              </div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
                {language === "gujarati"
                  ? "કલ્પસર સચિવાલય — સંપર્ક અને સહાયતા કેન્દ્ર"
                  : language === "hindi"
                  ? "कल्पसर सचिवालय — संपर्क एवं सहायता केंद्र"
                  : "Kalpasar Secretariat: Corporate Inquiries & Directory"}
              </h1>
            </div>

            <div className="text-right shrink-0">
              <span className="block text-xs text-slate-300">Public Grievance & Information Wing</span>
              <span className="font-mono text-xs text-amber-400 font-bold">Gandhinagar HQ</span>
            </div>
          </div>
        </div>
      </section>

      <main id="main-content" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-1 w-full space-y-10">
        {/* 2-Column: Headquarters & Regional Divisions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Main Headquarters Card */}
          <div className="border border-slate-200 rounded-lg p-6 bg-white shadow-sm space-y-6">
            <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-amber-500" />
                <span>Department Headquarters (Gandhinagar)</span>
              </h3>
              <span className="text-xs font-mono font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded">
                Sardar Bhavan
              </span>
            </div>

            <div className="space-y-4 text-xs text-slate-700">
              <div className="flex items-start gap-3 p-3.5 rounded bg-slate-50 border border-slate-200">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block font-semibold mb-0.5">Corporate Address</strong>
                  <p className="text-slate-600 leading-relaxed">
                    {departmentInfo.address.office}, {departmentInfo.address.sector}, {departmentInfo.address.city} - {departmentInfo.address.pincode}, {departmentInfo.address.state}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded bg-slate-50 border border-slate-200">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <div>
                  <strong className="text-slate-900 block font-semibold mb-0.5">Telephone Numbers</strong>
                  <span className="font-mono text-slate-800">{departmentInfo.address.phone} / {departmentInfo.address.phoneAlt}</span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded bg-slate-50 border border-slate-200">
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <div>
                  <strong className="text-slate-900 block font-semibold mb-0.5">Official Nodal Email</strong>
                  <span className="font-mono text-slate-800">{departmentInfo.address.email}</span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded bg-slate-50 border border-slate-200">
                <Clock className="w-4 h-4 text-amber-500 shrink-0" />
                <div>
                  <strong className="text-slate-900 block font-semibold mb-0.5">Working Hours</strong>
                  <span className="text-slate-600">{departmentInfo.address.workingHours}</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => setIsFeedbackOpen(true)}
                className="w-full py-3 bg-slate-900 hover:bg-amber-500 hover:text-slate-950 text-white text-xs font-bold rounded flex items-center justify-center gap-2 shadow-xs transition"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Launch Citizen Grievance / Feedback Redressal Form</span>
              </button>
            </div>
          </div>

          {/* Regional Project Divisions */}
          <div className="border border-slate-200 rounded-lg p-6 bg-white shadow-sm space-y-6">
            <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <Building className="w-5 h-5 text-amber-500" />
                <span>Regional Project Engineering Divisions</span>
              </h3>
              <span className="text-xs font-mono font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded">
                Field Offices
              </span>
            </div>

            <div className="space-y-4 text-xs text-slate-700 divide-y divide-slate-100">
              <div className="pt-2 first:pt-0">
                <strong className="text-slate-900 block font-semibold text-sm">
                  1. Kalpasar Investigation Division (Bhavnagar)
                </strong>
                <p className="text-slate-600 mt-1">
                  Bahumali Bhavan, C-Block, 3rd Floor, Bhavnagar - 364001 &bull; Phone: +91-278-2514599
                </p>
                <span className="text-[11px] text-slate-400 font-mono mt-0.5 block">
                  Jurisdiction: Bhavnagar coastal alignment & seabed monitoring
                </span>
              </div>

              <div className="pt-4">
                <strong className="text-slate-900 block font-semibold text-sm">
                  2. Dahej Offshore Monitoring Unit (Bharuch)
                </strong>
                <p className="text-slate-600 mt-1">
                  GIDC Commercial Complex, Dahej Port Road, Bharuch - 392130 &bull; Phone: +91-2641-256782
                </p>
                <span className="text-[11px] text-slate-400 font-mono mt-0.5 block">
                  Jurisdiction: Marine boreholes, tidal meters & geotechnical core lab
                </span>
              </div>

              <div className="pt-4">
                <strong className="text-slate-900 block font-semibold text-sm">
                  3. Bhadbhut Barrage Project Circle (Ankleshwar)
                </strong>
                <p className="text-slate-600 mt-1">
                  Irrigation Colony, Narmada Campus, Ankleshwar - 393002 &bull; Phone: +91-2646-273411
                </p>
                <span className="text-[11px] text-slate-400 font-mono mt-0.5 block">
                  Jurisdiction: 1.66 km Bhadbhut sweet water barrage execution
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* GIS Location & Satellite Map */}
        <div className="border border-slate-200 rounded-lg p-6 bg-white shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div>
              <h4 className="text-base font-bold text-slate-900">
                Department Headquarters Satellite Location (GIS Embed)
              </h4>
              <p className="text-xs text-slate-500">
                Sector-10 A, Karmayogi Bhavan, Gandhinagar, Gujarat
              </p>
            </div>
            <span className="text-xs font-mono font-bold text-amber-600 bg-amber-50 px-3 py-1 rounded border border-amber-200">
              Coordinates: 23.2156° N, 72.6374° E
            </span>
          </div>

          <div className="h-72 w-full rounded-lg overflow-hidden border border-slate-300">
            <iframe
              title="Kalpasar Secretariat Gandhinagar PSU Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14670.329431872856!2d72.63738555!3d23.215635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2b0b1a03e6e7%3A0x63351336154e12e1!2sKarmayogi%20Bhavan%2C%20Sector%2010%2C%20Gandhinagar%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </main>

      <Proto3Footer basePath="/prototype-3" />
      <Chatbot />
      <FeedbackModal />
    </div>
  );
};
