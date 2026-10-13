import React from "react";
import { Link } from "react-router-dom";
import { useApp } from "../../context/AppContext";
import { ProtoHeader } from "../common/ProtoHeader";
import { ProtoFooter } from "../common/ProtoFooter";
import { Chatbot } from "../../components/common/Chatbot";
import { FeedbackModal } from "../../components/common/FeedbackModal";
import { departmentInfo } from "../../data/kalpasarData";
import {
  Building2,
  Phone,
  Mail,
  MapPin,
  Clock,
  Printer,
  ShieldCheck,
  Send,
  UserCheck,
  Building
} from "lucide-react";

export const P1ContactPage = () => {
  const { language, setIsFeedbackOpen, t } = useApp();

  const officersDirectory = [
    {
      desig: "અધિક મુખ્ય સચિવશ્રી (ACS)",
      roleEn: "Additional Chief Secretary",
      name: "શ્રી એસ. જે. હૈદર, IAS",
      phone: "+91-79-23252235",
      room: "રૂમ નં. ૭૦૨, બ્લોક-૮",
      email: "sec-kalpasar@gujarat.gov.in"
    },
    {
      desig: "સચિવશ્રી (કલ્પસર)",
      roleEn: "Secretary (Kalpasar)",
      name: "શ્રી કે. એ. પટેલ, GAS",
      phone: "+91-79-23252236",
      room: "રૂમ નં. ૭૦૪, બ્લોક-૮",
      email: "sec2-kalpasar@gujarat.gov.in"
    },
    {
      desig: "મુખ્ય ઇજનેરશ્રી અને સંયુક્ત સચિવ",
      roleEn: "Chief Engineer & Joint Secretary",
      name: "ઇજનેર વી. કે. પંડ્યા",
      phone: "+91-79-23256022",
      room: "રૂમ નં. ૭૧૦, બ્લોક-૮",
      email: "ce-kalpasar@gujarat.gov.in"
    },
    {
      desig: "અધિક્ષક ઇજનેરશ્રી (યોજના)",
      roleEn: "Superintending Engineer (Plg)",
      name: "ઇજનેર એમ. એમ. શાહ",
      phone: "+91-79-23256024",
      room: "રૂમ નં. ૭૧૨, બ્લોક-૮",
      email: "se-plg@gujarat.gov.in"
    },
    {
      desig: "જાહેર માહિતી અધિકારી (PIO)",
      roleEn: "Public Information Officer",
      name: "શ્રી આર. બી. ચૌધરી",
      phone: "+91-79-23252240",
      room: "રૂમ નં. ૭૧૫, બ્લોક-૮",
      email: "pio-kalpasar@gujarat.gov.in"
    }
  ];

  return (
    <div className="min-h-screen bg-[#f4f6f9] text-slate-800 flex flex-col justify-between font-sans">
      <ProtoHeader variant="classic" basePath="/prototype-1" />

      {/* Official Government Classic Sub-header Bar */}
      <div className="bg-[#1c5e8a] text-white border-b-2 border-[#004b87] py-2 px-4 shadow-inner">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between text-xs font-serif">
          <div className="flex items-center gap-2">
            <Link to="/prototype-1" className="hover:underline text-slate-100">
              મુખ્ય પૃષ્ઠ / Home
            </Link>
            <span>&raquo;</span>
            <span className="font-bold text-amber-200">
              {language === "gujarati" ? "સંપર્ક અને ટેલિફોન ડાયરેક્ટરી" : language === "hindi" ? "संपर्क एवं टेलीफोन निर्देशिका" : "Contact & Telephone Directory"}
            </span>
          </div>
          <div className="flex items-center gap-4 text-[11px] text-slate-200">
            <span>કચેરી: સરદાર ભવન, સચિવાલય</span>
            <button
              onClick={() => window.print()}
              className="flex items-center gap-1 bg-[#004b87] hover:bg-slate-900 px-2 py-0.5 rounded border border-blue-300 text-white"
            >
              <Printer className="w-3 h-3" />
              <span>Print Page</span>
            </button>
          </div>
        </div>
      </div>

      <main id="main-content" className="max-w-7xl mx-auto px-4 py-8 flex-1 w-full space-y-6">
        {/* Title Gazette Header */}
        <div className="bg-white border-t-4 border-[#1c5e8a] border-x border-b border-slate-300 p-5 shadow-sm">
          <span className="text-[11px] font-bold text-[#1c5e8a] uppercase tracking-wider block">
            Government of Gujarat | Secretariat Directory
          </span>
          <h1 className="text-xl sm:text-2xl font-bold font-serif text-[#004b87] mt-0.5">
            {language === "gujarati"
              ? "કલ્પસર પ્રભાગ સચિવાલય — સંપર્ક વિગત અને અધિકારી ડાયરેક્ટરી"
              : language === "hindi"
              ? "कल्पसर प्रभाग सचिवालय — संपर्क विवरण एवं अधिकारी निर्देशिका"
              : "Kalpasar Department Secretariat: Contact & Official Directory"}
          </h1>
          <p className="text-xs text-slate-600 mt-1 leading-relaxed">
            મુખ્ય સચિવાલય ગાંધીનગર, ફિલ્ડ ડિવિઝન કચેરીઓ (ભાવનગર / દહેજ), જાહેર ફરિયાદ નિવારણ અને અધિકૃત ઈ-મેઈલ સરનામા.
          </p>
        </div>

        {/* 2-Column: Headquarters & Field Offices */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Main Headquarters Box */}
          <div className="bg-white border border-slate-300 p-5 shadow-sm space-y-4">
            <div className="bg-[#1c5e8a] text-white px-3 py-1.5 font-serif text-xs font-bold flex items-center gap-1.5">
              <Building2 className="w-4 h-4" />
              <span>મુખ્ય સચિવાલય કચેરી (Headquarters)</span>
            </div>

            <div className="text-xs text-slate-700 space-y-3">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#1c5e8a] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block font-serif">કલ્પસર પ્રભાગ, નર્મદા અને જળસંપત્તિ વિભાગ</strong>
                  <p className="text-slate-600 text-[11px] mt-0.5">
                    {departmentInfo.address.office}, {departmentInfo.address.sector}, {departmentInfo.address.city} - {departmentInfo.address.pincode}, {departmentInfo.address.state}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#1c5e8a] shrink-0" />
                <div>
                  <span className="font-bold">ટેલિફોન: </span>
                  <span className="font-mono">{departmentInfo.address.phone} / {departmentInfo.address.phoneAlt}</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#1c5e8a] shrink-0" />
                <div>
                  <span className="font-bold">ઈ-મેઈલ: </span>
                  <span className="font-mono text-[#004b87]">{departmentInfo.address.email}</span>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#1c5e8a] shrink-0" />
                <div>
                  <span className="font-bold">કચેરી સમય: </span>
                  <span>{departmentInfo.address.workingHours}</span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-200">
              <button
                onClick={() => setIsFeedbackOpen(true)}
                className="w-full bg-[#1c5e8a] hover:bg-slate-900 text-white py-2 text-xs font-bold rounded-none flex items-center justify-center gap-1.5 shadow-sm transition"
              >
                <Send className="w-3.5 h-3.5" />
                <span>ઓનલાઈન નાગરિક પ્રતિસાદ / ફરિયાદ નોંધણી ફોર્મ ખોલો</span>
              </button>
            </div>
          </div>

          {/* Regional & Field Offices Box */}
          <div className="bg-white border border-slate-300 p-5 shadow-sm space-y-4">
            <div className="bg-[#004b87] text-white px-3 py-1.5 font-serif text-xs font-bold flex items-center gap-1.5">
              <Building className="w-4 h-4" />
              <span>વિભાગીય ફિલ્ડ કચેરીઓ (Regional Project Offices)</span>
            </div>

            <div className="text-xs text-slate-700 space-y-3 divide-y divide-slate-200">
              <div className="pt-2 first:pt-0">
                <strong className="text-[#004b87] block font-serif">૧. કલ્પસર સંશોધન વિભાગ — ભાવનગર</strong>
                <p className="text-[11px] text-slate-600 mt-0.5">
                  બહુમાળી ભવન, સી-બ્લોક, ત્રીજો માળ, ભાવનગર - ૩૬૪૦૦૧ &bull; ફોન: ૦૨૭૮-૨૫૧૪૫૯૯
                </p>
                <span className="text-[10px] text-slate-500 font-mono">કાર્યક્ષેત્ર: ભાવનગર ડેમ એલાઈનમેન્ટ સર્વેક્ષણ</span>
              </div>

              <div className="pt-2">
                <strong className="text-[#004b87] block font-serif">૨. દહેજ હાઇડ્રોગ્રાફિક મોનિટરિંગ યુનિટ — ભરૂચ</strong>
                <p className="text-[11px] text-slate-600 mt-0.5">
                  GIDC વહીવટી ભવન, દહેજ પોર્ટ રોડ, ભરૂચ - ૩૯૨૧૩૦ &bull; ફોન: ૦૨૬૪૧-૨૫૬૭૮૨
                </p>
                <span className="text-[10px] text-slate-500 font-mono">કાર્યક્ષેત્ર: ભરતી માપન અને સી-બેડ ડ્રિલિંગ</span>
              </div>

              <div className="pt-2">
                <strong className="text-[#004b87] block font-serif">૩. ભાડભૂત બેરેજ યોજના કચેરી — અંકલેશ્વર</strong>
                <p className="text-[11px] text-slate-600 mt-0.5">
                  સિંચાઈ વસાહત, નર્મદા કેમ્પસ, અંકલેશ્વર - ૩૯૩૦૦૨ &bull; ફોન: ૦૨૬૪૬-૨૭૩૪૧૧
                </p>
                <span className="text-[10px] text-slate-500 font-mono">કાર્યક્ષેત્ર: ૧.૬૬ કિમી ભાડભૂત બેરેજ નિર્માણ</span>
              </div>
            </div>
          </div>
        </div>

        {/* Official Staff Telephone Directory Table */}
        <div className="bg-white border border-slate-300 shadow-sm overflow-hidden">
          <div className="bg-[#1c5e8a] text-white px-4 py-2 font-serif text-sm font-bold flex items-center justify-between">
            <span>સચિવાલય અધિકારી ટેલિફોન ડાયરેક્ટરી (Clause 3.3 Directory)</span>
            <span className="text-xs font-mono font-normal">Gandhinagar New Sachivalaya</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-[#1c5e8a] text-white font-bold border-b border-blue-700">
                  <th className="py-2.5 px-3 border-r border-blue-400">હોદ્દો / Designation</th>
                  <th className="py-2.5 px-3 border-r border-blue-400">અધિકારીનું નામ / Officer Name</th>
                  <th className="py-2.5 px-3 border-r border-blue-400">કચેરી રૂમ નં.</th>
                  <th className="py-2.5 px-3 border-r border-blue-400">ટેલિફોન નંબર</th>
                  <th className="py-2.5 px-3">સત્તાવાર ઈ-મેઈલ</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-300">
                {officersDirectory.map((off, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-blue-50/40"}>
                    <td className="py-2.5 px-3 font-bold text-[#004b87] border-r border-slate-200">
                      {off.desig}
                      <span className="block text-[10px] text-slate-500 font-sans font-normal">{off.roleEn}</span>
                    </td>
                    <td className="py-2.5 px-3 font-semibold text-slate-900 border-r border-slate-200">
                      {off.name}
                    </td>
                    <td className="py-2.5 px-3 text-slate-700 border-r border-slate-200 font-mono text-[11px]">
                      {off.room}
                    </td>
                    <td className="py-2.5 px-3 font-mono text-[#004b87] font-bold border-r border-slate-200 whitespace-nowrap">
                      {off.phone}
                    </td>
                    <td className="py-2.5 px-3 font-mono text-[11px] text-slate-700">
                      {off.email}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Google Maps / GIS Embed with Classic Border */}
        <div className="bg-white border border-slate-300 p-4 shadow-sm">
          <div className="font-serif font-bold text-xs text-[#004b87] border-b border-slate-200 pb-2 mb-3 flex items-center justify-between">
            <span>સચિવાલય ભૌગોલિક નકશો (GIS Location)</span>
            <span className="text-[11px] text-slate-500 font-mono">23.2156° N, 72.6374° E</span>
          </div>
          <div className="h-64 w-full border border-slate-300">
            <iframe
              title="Kalpasar Secretariat Gandhinagar Classic Map"
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

      <ProtoFooter variant="classic" />
      <Chatbot />
      <FeedbackModal />
    </div>
  );
};
