import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useApp } from "../../../context/AppContext";
import { Emblem } from "../../../components/common/Emblem";
import {
  Network,
  Users,
  BarChart3,
  ChevronRight,
  ShieldCheck,
  Building2,
  FileCheck2,
  Award,
} from "lucide-react";

export const Proto3AboutDepartment = ({ basePath = "/prototype-3" }) => {
  const navigate = useNavigate();
  const { language, t } = useApp();
  const [showMore, setShowMore] = useState(false);

  return (
    <section
      id="about-department"
      aria-labelledby="about-department-heading"
      className="bg-white py-12 sm:py-16 w-full text-slate-900 border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        {/* Left Column: Mandate narrative + 3 Action Cards (MDL Style) */}
        <div className="lg:col-span-8 flex flex-col space-y-6">
          <div className="flex items-center gap-3 text-[#0a2540]">
            <div className="p-2.5 rounded-xl bg-slate-100 text-[#1a5f7a] border border-slate-200">
              <Network className="w-8 h-8" strokeWidth={1.8} />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#159895]">
                {language === "gujarati"
                  ? "સરકારી જનાદેશ અને પરિચય"
                  : language === "hindi"
                    ? "शासकीय जनादेश एवं परिचय"
                    : "Mandate & Governance"}
              </span>
              <h2
                id="about-department-heading"
                className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0a2540] tracking-tight"
              >
                {language === "gujarati"
                  ? "કલ્પસર વિભાગ વિશે"
                  : language === "hindi"
                    ? "कल्पसर विभाग के बारे में"
                    : "About Kalpasar Department"}
              </h2>
            </div>
          </div>

          <div className="space-y-4 text-slate-700 leading-relaxed text-sm sm:text-base text-justify">
            <p>
              {language === "gujarati"
                ? "કલ્પસર વિભાગની સ્થાપના ગુજરાત સરકાર દ્વારા ખંભાતના અખાત વિકાસ યોજના (કલ્પસર) ના સમગ્ર સંશોધન, સર્વેક્ષણ, દરિયાઈ ઇજનેરી ડિઝાઇન અને સમયબદ્ધ અમલીકરણ માટે કરવામાં આવી છે. આ પ્રોજેક્ટ અંતર્ગત ખંભાતના અખાત પર ૩૦ કિલોમીટર લાંબો સંયુક્ત ડેમ બાંધી નર્મદા, મહી, સાબરમતી અને ઢાઢર નદીઓના વધારાના પૂરના પાણીનો સંગ્રહ કરી ૧૦,૨૫૦ મિલિયન ઘનમીટર (MCM) ક્ષમતાનું વિશ્વનું સૌથી મોટું મીઠા પાણીનું સરોવર નિર્માણ કરવાનો ઉદ્દેશ્ય છે."
                : language === "hindi"
                  ? "कल्पसर विभाग की स्थापना गुजरात सरकार द्वारा खंभात की खाड़ी विकास परियोजना (कल्पसर) के व्यापक अनुसंधान, सर्वेक्षण, समुद्री इंजीनियरिंग डिजाइन एवं क्रियान्वयन हेतु की गई है। इस महत्वाकांक्षी परियोजना के अंतर्गत खंभात की खाड़ी पर 30 किलोमीटर लंबा संयुक्त बांध बनाकर 10,250 मिलियन क्यूबिक मीटर (MCM) क्षमता का ताजे पानी का विशाल जलाशय तैयार किया जा रहा है।"
                  : "The Kalpasar Department was constituted by the Government of Gujarat to pioneer, survey, engineer, and implement the Gulf of Khambhat Development Project (Kalpasar). By constructing a monumental 30-kilometer composite dam across the Gulf between Bhavnagar and Dahej, the initiative will capture surplus monsoon floodwaters from the Narmada, Mahi, Sabarmati, and Dhadhar rivers into a 10,250 MCM freshwater reservoir."}
              {!showMore && (
                <>
                  {" "}
                  <button
                    type="button"
                    onClick={() => setShowMore(true)}
                    className="text-[#1a5f7a] font-bold hover:underline inline-flex items-center gap-0.5 ml-1"
                  >
                    <span>
                      {language === "gujarati"
                        ? "વધુ વાંચો"
                        : language === "hindi"
                          ? "और पढ़ें"
                          : "Read More..."}
                    </span>
                  </button>
                </>
              )}
            </p>

            {showMore && (
              <div className="space-y-3 animate-in fade-in duration-300">
                <p>
                  {language === "gujarati"
                    ? "આ પ્રોજેક્ટ દ્વારા ૫,૮૪૫ મેગાવોટ સ્વચ્છ ભરતી-ઊર્જા (Tidal Energy) ઉત્પાદન ક્ષમતા ઊભી થશે, જે વિશ્વના સૌથી મોટા ટાઈડલ પાવર પ્લાન્ટ્સમાં સ્થાન મેળવશે. આ ઉપરાંત ડેમના શિખર પર ૧૦-લેનનો આધુનિક એક્સપ્રેસવે દહેજ (ભરૂચ) અને ભાવનગર વચ્ચેનું રોડ અંતર ૩૬૦ કિમીથી ઘટાડીને માત્ર ૧૩૫ કિમી કરી ૨૨૫ કિમીની મુસાફરી બચાવશે. સાથે સાથે સૌરાષ્ટ્ર અને ભાલ પ્રદેશના ૧૦.૫૪ લાખ હેક્ટર વિસ્તારમાં સૂક્ષ્મ સિંચાઈ અને ૧૨ દરિયાકાંઠાના તાલુકાઓમાં ખારાશ આગળ વધતી અટકાવી ભૂગર્ભ જળ રિચાર્જ કરશે."
                    : language === "hindi"
                      ? "यह परियोजना 5,845 मेगावाट स्वच्छ समुद्री ज्वारीय ऊर्जा (Tidal Clean Energy) उत्पादन क्षमता विकसित करेगी। बांध के शीर्ष पर 10-लेन का अत्याधुनिक एक्सप्रेसवे दहेज और भावनगर के बीच की दूरी को 360 किमी से घटाकर 135 किमी कर देगा, जिससे 225 किमी यात्रा समय की बचत होगी। यह सौराष्ट्र और भाल क्षेत्रों के 10.54 लाख हेक्टेयर में सिंचाई प्रदान करेगा तथा 12 तटीય तालुकों में खारेपन को रोकेगा।"
                      : "The project integrates a 5,845 MW clean tidal energy power station tapping the 8–11 meter tidal range in the Gulf of Khambhat. Furthermore, a 10-lane expressway over the dam crest cuts the transit distance between Dahej (Bharuch) and Bhavnagar from 360 km to 135 km (saving 225 km). Crucially, it provides micro-irrigation across 10.54 lakh hectares in Saurashtra and Bhal, while halting Arabian Sea salinity intrusion across 12 coastal talukas."}
                </p>
                <button
                  type="button"
                  onClick={() => setShowMore(false)}
                  className="text-[#1a5f7a] font-bold hover:underline inline-flex items-center gap-0.5"
                >
                  <span>
                    {language === "gujarati"
                      ? "ઓછું વાંચો"
                      : language === "hindi"
                        ? "संक्षेप करें"
                        : "Show Less"}
                  </span>
                </button>
              </div>
            )}
          </div>

          {/* MDL Signature 3 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <button
              type="button"
              onClick={() => navigate(`${basePath}/department`)}
              className="group flex flex-col items-center justify-center p-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-[#0a2239] hover:text-white transition-all duration-200 shadow-sm text-center"
            >
              <Users className="w-7 h-7 text-[#1a5f7a] group-hover:text-amber-300 transition-colors mb-2" />
              <span className="font-extrabold text-xs sm:text-sm text-slate-900 group-hover:text-white">
                {language === "gujarati"
                  ? "અમારું નેતૃત્વ"
                  : language === "hindi"
                    ? "हमारा नेतृत्व"
                    : "Our Leadership"}
              </span>
              <span className="text-[11px] text-slate-500 group-hover:text-slate-300 mt-0.5">
                {language === "gujarati"
                  ? "પ્રશાસન અને સચિવશ્રી"
                  : language === "hindi"
                    ? "प्रशासन व सचिव"
                    : "Secretariat & Board"}
              </span>
            </button>

            <button
              type="button"
              onClick={() => navigate(`${basePath}/performance`)}
              className="group flex flex-col items-center justify-center p-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-[#0a2239] hover:text-white transition-all duration-200 shadow-sm text-center"
            >
              <BarChart3 className="w-7 h-7 text-[#1a5f7a] group-hover:text-amber-300 transition-colors mb-2" />
              <span className="font-extrabold text-xs sm:text-sm text-slate-900 group-hover:text-white">
                {language === "gujarati"
                  ? "કામગીરી અને સિદ્ધિઓ"
                  : language === "hindi"
                    ? "प्रदर्शन व उपलब्धियां"
                    : "Key Performance"}
              </span>
              <span className="text-[11px] text-slate-500 group-hover:text-slate-300 mt-0.5">
                {language === "gujarati"
                  ? "DPR અને સર્વેક્ષણો"
                  : language === "hindi"
                    ? "DPR एवं तकनीकी प्रगति"
                    : "DPR & Ocean Surveys"}
              </span>
            </button>

            <button
              type="button"
              onClick={() => navigate(`${basePath}/department`)}
              className="group flex flex-col items-center justify-center p-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-[#0a2239] hover:text-white transition-all duration-200 shadow-sm text-center"
            >
              <Building2 className="w-7 h-7 text-[#1a5f7a] group-hover:text-amber-300 transition-colors mb-2" />
              <span className="font-extrabold text-xs sm:text-sm text-slate-900 group-hover:text-white">
                {language === "gujarati"
                  ? "સંગઠન માળખું"
                  : language === "hindi"
                    ? "संगठन संरचना"
                    : "Org Hierarchy"}
              </span>
              <span className="text-[11px] text-slate-500 group-hover:text-slate-300 mt-0.5">
                {language === "gujarati"
                  ? "કલમ ૩.૩ અનુપાલન"
                  : language === "hindi"
                    ? "खंड 3.3 अनुपालन"
                    : "Clause 3.3 Compliance"}
              </span>
            </button>
          </div>
        </div>

        {/* Right Column: Leadership Portrait Card (MDL Chairman/Minister Photo Card) */}
        <div className="lg:col-span-4 flex justify-center lg:justify-end w-full">
          <div className="w-full max-w-xs bg-slate-50 border-2 border-slate-200 rounded-2xl p-5 shadow-lg flex flex-col items-center text-center space-y-4">
            {/* Leadership Frame with State Crest */}
            <div className="relative">
              <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-2xl bg-gradient-to-b from-slate-200 to-slate-300 border-4 border-white shadow-md flex items-center justify-center overflow-hidden">
                <Emblem className="w-24 h-24 object-contain opacity-90 drop-shadow" />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-amber-500 text-slate-950 p-1.5 rounded-full shadow border-2 border-white">
                <ShieldCheck className="w-4 h-4" />
              </div>
            </div>

            {/* Title & Designation */}
            <div className="space-y-1">
              <h3 className="font-black text-base sm:text-lg text-[#0a2540] tracking-tight">
                {language === "gujarati"
                  ? "માનનીય મંત્રીશ્રી, કલ્પસર પ્રભાગ"
                  : language === "hindi"
                    ? "माननीय मंत्री, कल्पसर विभाग"
                    : "Hon'ble Minister for Kalpasar"}
              </h3>
              <p className="text-xs font-semibold text-[#1a5f7a] uppercase tracking-wide">
                {language === "gujarati"
                  ? "નર્મદા, જળસંપત્તિ અને કલ્પસર મંત્રાલય"
                  : language === "hindi"
                    ? "नर्मदा, जल संसाधन एवं कल्पसर मंत्रालय"
                    : "Water Resources & Maritime Affairs"}
              </p>
              <p className="text-[11px] text-slate-500">
                Government of Gujarat • Gandhinagar
              </p>
            </div>

            <div className="w-full pt-3 border-t border-slate-200 text-[11px] text-slate-600 space-y-1">
              <div className="flex items-center justify-between">
                <span>Nodal Secretariat:</span>
                <strong className="text-slate-800">Karmayogi Bhavan</strong>
              </div>
              <div className="flex items-center justify-between">
                <span>Public Grievance:</span>
                <strong className="text-emerald-700">Online Active</strong>
              </div>
            </div>

            <button
              onClick={() => navigate(`${basePath}/department`)}
              className="w-full py-2 bg-[#0a2540] hover:bg-[#1a3d66] text-white font-bold text-xs rounded-xl transition shadow flex items-center justify-center gap-1.5"
            >
              <span>View Department Hierarchy</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
