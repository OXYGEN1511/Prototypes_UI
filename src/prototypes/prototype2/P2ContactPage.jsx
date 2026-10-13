import React from "react";
import { Link } from "react-router-dom";
import { useApp } from "../../context/AppContext";
import { ProtoHeader } from "../common/ProtoHeader";
import { ProtoFooter } from "../common/ProtoFooter";
import { Chatbot } from "../../components/common/Chatbot";
import { FeedbackModal } from "../../components/common/FeedbackModal";
import { departmentInfo } from "../../data/kalpasarData";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Sparkles,
  Send,
  Building2,
  Navigation,
  Globe,
  MessageSquare
} from "lucide-react";

export const P2ContactPage = () => {
  const { language, setIsFeedbackOpen, t } = useApp();

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
            <span className="text-slate-400">Citizen Helpline & Contact</span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-cyan-300 text-xs font-semibold backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>Responsive Citizen Grievance Redressal</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                {language === "gujarati"
                  ? "સંપર્ક કરો અને નાગરિક પ્રતિસાદ પોર્ટલ"
                  : language === "hindi"
                  ? "संपर्क करें एवं नागरिक प्रतिपुष्टि पोर्टल"
                  : "Connect With Kalpasar Secretariat"}
              </h1>
              <p className="text-slate-400 text-sm leading-relaxed">
                Reach the engineering secretariat, submit formal representations, or plan visits to the project nodal office in Gandhinagar.
              </p>
            </div>

            <button
              onClick={() => setIsFeedbackOpen(true)}
              className="px-5 py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs flex items-center gap-2 shadow-lg shadow-cyan-500/20 transition shrink-0"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Launch Citizen Feedback Form</span>
            </button>
          </div>
        </div>
      </div>

      <main id="main-content" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-1 w-full space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Secretariat Details Bento Card */}
          <div className="p-8 rounded-3xl bg-slate-800/40 border border-slate-700/60 space-y-6">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
                Main Headquarters
              </span>
              <span className="px-3 py-1 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800/50 text-[10px] font-mono">
                Sachivalaya Complex
              </span>
            </div>

            <h3 className="text-xl font-bold text-white">
              Kalpasar Prabhag, Government of Gujarat
            </h3>

            <div className="space-y-4 text-xs text-slate-300">
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-slate-900/60 border border-slate-700/50">
                <MapPin className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-semibold mb-1">Office Location</strong>
                  <p className="text-slate-400 leading-relaxed">
                    {departmentInfo.address.office}, {departmentInfo.address.sector}, {departmentInfo.address.city} - {departmentInfo.address.pincode}, {departmentInfo.address.state}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-2xl bg-slate-900/60 border border-slate-700/50">
                <Phone className="w-5 h-5 text-cyan-400 shrink-0" />
                <div>
                  <strong className="text-white block font-semibold mb-0.5">Telephone Numbers</strong>
                  <span className="font-mono text-cyan-300">{departmentInfo.address.phone} / {departmentInfo.address.phoneAlt}</span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-2xl bg-slate-900/60 border border-slate-700/50">
                <Mail className="w-5 h-5 text-cyan-400 shrink-0" />
                <div>
                  <strong className="text-white block font-semibold mb-0.5">Official Inquiries Email</strong>
                  <span className="font-mono text-cyan-300">{departmentInfo.address.email}</span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-2xl bg-slate-900/60 border border-slate-700/50">
                <Clock className="w-5 h-5 text-cyan-400 shrink-0" />
                <div>
                  <strong className="text-white block font-semibold mb-0.5">Public Working Hours</strong>
                  <span className="text-slate-400">{departmentInfo.address.workingHours}</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => setIsFeedbackOpen(true)}
                className="w-full py-3 rounded-2xl bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-cyan-500/40 text-xs font-bold flex items-center justify-center gap-2 transition"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Submit Grievance / Citizen Suggestion</span>
              </button>
            </div>
          </div>

          {/* Interactive GIS Map Bento */}
          <div className="p-6 rounded-3xl bg-slate-800/40 border border-slate-700/60 flex flex-col justify-between space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
                GIS Coordinate Satellite Lock
              </span>
              <span className="text-[11px] font-mono text-slate-400">
                23.2156° N, 72.6374° E
              </span>
            </div>

            <div className="h-80 w-full rounded-2xl overflow-hidden border border-slate-700/80">
              <iframe
                title="Kalpasar Modern Secretariat Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14670.329431872856!2d72.63738555!3d23.215635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2b0b1a03e6e7%3A0x63351336154e12e1!2sKarmayogi%20Bhavan%2C%20Sector%2010%2C%20Gandhinagar%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-700/50 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2 text-slate-400">
                <Navigation className="w-4 h-4 text-cyan-400" />
                <span>Near Mahatma Mandir & New Sachivalaya Gate No. 2</span>
              </div>
              <a
                href="https://maps.google.com/?q=Karmayogi+Bhavan+Gandhinagar"
                target="_blank"
                rel="noreferrer"
                className="text-cyan-400 font-semibold hover:underline"
              >
                Directions &rarr;
              </a>
            </div>
          </div>
        </div>
      </main>

      <ProtoFooter variant="modern" />
      <Chatbot />
      <FeedbackModal />
    </div>
  );
};
