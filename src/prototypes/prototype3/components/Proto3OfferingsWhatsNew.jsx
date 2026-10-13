import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useApp } from "../../../context/AppContext";
import { kalpasarStore } from "../../../services/kalpasarStore";
import {
  FileText,
  Download,
  Calendar,
  ArrowRight,
  ExternalLink,
  Droplet,
  Zap,
  Sprout,
  Compass,
  ShieldCheck,
  UserCheck,
  Clock,
  Sparkles,
  ChevronRight,
  Filter,
} from "lucide-react";

export const Proto3OfferingsWhatsNew = ({ basePath = "/prototype-3" }) => {
  const { language, t } = useApp();
  const [activeTab, setActiveTab] = useState("ALL");
  const publishedNotices = kalpasarStore.getPublishedNotices();

  const offerings = [
    {
      id: "srv-1",
      icon: Droplet,
      iconBg: "bg-blue-50 text-blue-700",
      title:
        language === "gujarati"
          ? "ઔદ્યોગિક અને પીવાના પાણીની ફાળવણી"
          : language === "hindi"
            ? "औद्योगिक एवं पेयजल आवंटन"
            : "Bulk Water Allocation",
      desc:
        language === "gujarati"
          ? "ધોલેરા SIR, દહેજ PCPIR અને નગરપાલિકાઓ માટે ૧૦,૨૫૦ MCM જળાશયમાંથી પાણી ફાળવણી."
          : language === "hindi"
            ? "धोलेरा SIR, दहेज PCPIR और नगरपालिकाओं हेतु 10,250 MCM जलाशय से जल आवंटन।"
            : "Formal water rights and bulk water allocation from the 10,250 MCM freshwater impoundment.",
      actionLabel: "Apply for Allocation",
      link: `${basePath}/contact`,
    },
    {
      id: "srv-2",
      icon: Zap,
      iconBg: "bg-amber-50 text-amber-700",
      title:
        language === "gujarati"
          ? "ભરતી ઊર્જા ગ્રીડ ઇન્ટિગ્રેશન"
          : language === "hindi"
            ? "ज्वारीय ऊर्जा ग्रिड एकीकरण"
            : "Tidal Grid Integration",
      desc:
        language === "gujarati"
          ? "૫,૮૪૫ MW સ્વચ્છ ટાઈડલ એનર્જીના ગ્રીડ ડિસ્પેચ અને પીપીએ (PPA) વ્યવસ્થાપન."
          : language === "hindi"
            ? "5,845 MW स्वच्छ ज्वारीय ऊर्जा का ग्रिड ट्रांसमिशन और PPA प्रबंधन।"
            : "Interconnection framework and green power purchase agreements for tidal clean energy.",
      actionLabel: "Grid Portal",
      link: `${basePath}/performance`,
    },
    {
      id: "srv-3",
      icon: Sprout,
      iconBg: "bg-emerald-50 text-emerald-700",
      title:
        language === "gujarati"
          ? "ખેડૂત સૂક્ષ્મ સિંચાઈ નેટવર્ક"
          : language === "hindi"
            ? "किसान सूक्ष्म सिंचाई नेटवर्क"
            : "Farmer Irrigation Command",
      desc:
        language === "gujarati"
          ? "૧૦.૫૪ લાખ હેક્ટર વિસ્તારમાં પાઇપલાઇન અને ડ્રિપ-ઇરિગેશન કમાન્ડ એરિયા નોંધણી."
          : language === "hindi"
            ? "10.54 लाख हेक्टेयर क्षेत्र में किसान पाइपलाइन एवं ड्रिप सिंचाई पंजीकरण।"
            : "Subsidized farm gate pipeline registration and automated micro-irrigation scheduling.",
      actionLabel: "Farmer Portal",
      link: `${basePath}/contact`,
    },
    {
      id: "srv-4",
      icon: Compass,
      iconBg: "bg-cyan-50 text-cyan-700",
      title:
        language === "gujarati"
          ? "GIS આધારિત દરિયાઈ મેપિંગ"
          : language === "hindi"
            ? "GIS आधारित समुद्री मानचित्रण"
            : "Geo-Spatial GIS Tracking",
      desc:
        language === "gujarati"
          ? "ખંભાતના અખાત અને નર્મદા મુખત્રિકોણનું સેટેલાઇટ અને બાથિમિટ્રિક લાઇવ મેપિંગ."
          : language === "hindi"
            ? "खंभात की खाड़ी और नर्मदा डेल्टा का उपग्रह एवं बाथिमीट्रिक लाइव सर्वेक्षण।"
            : "Interactive spatial hydrographic charts, seabed contour data, and sediment monitors.",
      actionLabel: "Access GIS Map",
      link: `${basePath}/performance`,
    },
    {
      id: "srv-5",
      icon: ShieldCheck,
      iconBg: "bg-rose-50 text-rose-700",
      title:
        language === "gujarati"
          ? "દરિયાઈ ખારાશ અટકાવ નિરીક્ષણ"
          : language === "hindi"
            ? "तटीय लवणता रोकथाम निगरानी"
            : "Coastal Salinity Monitoring",
      desc:
        language === "gujarati"
          ? "૧૨ દરિયાકાંઠા તાલુકાઓમાં ભૂગર્ભ જળની ગુણવત્તા અને ખારાશ સ્તરની નિયમિત ચકાસણી."
          : language === "hindi"
            ? "12 तटीय तालुकों में भूजल गुणवत्ता और लवणता स्तर की वास्तविक समय जांच।"
            : "Real-time groundwater salinity telemetry and aquifer recharge index tracking.",
      actionLabel: "Water Quality Lab",
      link: `${basePath}/policies`,
    },
    {
      id: "srv-6",
      icon: UserCheck,
      iconBg: "bg-purple-50 text-purple-700",
      title:
        language === "gujarati"
          ? "કોન્ટ્રાક્ટર અને વેન્ડર નોંધણી"
          : language === "hindi"
            ? "ठेकेदार एवं विक्रेता ई-पंजीकरण"
            : "Vendor & e-Procurement",
      desc:
        language === "gujarati"
          ? "GeM અને CPPP પોર્ટલ દ્વારા દરિયાઈ ઈજનેરી અને સંશોધન સેવાઓ માટે ઓનલાઇન વેન્ડર પ્લેટફોર્મ."
          : language === "hindi"
            ? "GeM एवं CPPP पोर्टल के माध्यम से समुद्री इंजीनियरिंग सेवाओं हेतु विक्रेता पंजीकरण।"
            : "Direct registration for EPC marine contractors, hydraulic consultants, and surveyors.",
      actionLabel: "Vendor Registration",
      link: `${basePath}/tenders`,
    },
  ];

  const noticeTabs = [
    {
      id: "ALL",
      label:
        language === "gujarati" ? "તમામ" : language === "hindi" ? "सभी" : "All",
    },
    {
      id: "Tenders",
      label:
        language === "gujarati"
          ? "ટેન્ડર્સ"
          : language === "hindi"
            ? "निविदाएं"
            : "Tenders",
    },
    {
      id: "Circulars",
      label:
        language === "gujarati"
          ? "પરિપત્રો"
          : language === "hindi"
            ? "परिपत्र"
            : "Circulars",
    },
    {
      id: "Reports",
      label:
        language === "gujarati"
          ? "અહેવાલો"
          : language === "hindi"
            ? "रिपोर्ट्स"
            : "Reports",
    },
  ];

  const filteredNotices =
    activeTab === "ALL"
      ? publishedNotices
      : publishedNotices.filter((n) => n.category === activeTab);

  return (
    <section
      aria-label="Department Offerings and What's New"
      className="bg-slate-50 py-14 sm:py-16 w-full border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* ================= LEFT (8 cols): OFFERINGS LIST (MDL Style) ================= */}
          <div className="lg:col-span-7 xl:col-span-8 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#159895]">
                  {language === "gujarati"
                    ? "નાગરિક અને હિતધારક સેવાઓ"
                    : language === "hindi"
                      ? "नागरिक एवं हितधारक सेवाएं"
                      : "Citizen & Stakeholder Offerings"}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0a2540] tracking-tight">
                  {language === "gujarati"
                    ? "વિભાગીય સેવાઓ અને સુવિધાઓ"
                    : language === "hindi"
                      ? "विभागीय सेवाएं एवं सुविधाएं"
                      : "Department Offerings & Services"}
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {offerings.map((item) => {
                const IconComp = item.icon;
                return (
                  <div
                    key={item.id}
                    className="p-5 bg-white border border-slate-200 hover:border-[#1a5f7a] rounded-xl hover:shadow-md transition-all duration-200 flex flex-col justify-between space-y-3 group"
                  >
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between">
                        <div
                          className={`p-2.5 rounded-lg ${item.iconBg} inline-block`}
                        >
                          <IconComp className="w-5 h-5" />
                        </div>
                        <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-[#1a5f7a] group-hover:translate-x-1 transition-all" />
                      </div>

                      <h4 className="font-extrabold text-sm sm:text-base text-slate-900 group-hover:text-[#1a5f7a] transition-colors">
                        {item.title}
                      </h4>

                      <p className="text-xs text-slate-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    <Link
                      to={item.link}
                      className="text-xs font-bold text-[#1a5f7a] hover:text-[#0a2540] inline-flex items-center gap-1 pt-2 border-t border-slate-100"
                    >
                      <span>{item.actionLabel}</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ================= RIGHT (4 cols): WHAT'S NEW BOARD (MDL Style) ================= */}
          <div className="lg:col-span-5 xl:col-span-4 bg-white border border-slate-200 rounded-2xl shadow-sm p-5 sm:p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <div className="flex items-center gap-2 text-[#0a2540]">
                <Sparkles className="w-5 h-5 text-amber-500" />
                <h3 className="text-lg sm:text-xl font-black tracking-tight">
                  {language === "gujarati"
                    ? "નવું શું છે?"
                    : language === "hindi"
                      ? "नया क्या है?"
                      : "What's New"}
                </h3>
              </div>

              <Link
                to={`${basePath}/tenders`}
                className="text-xs font-bold text-[#1a5f7a] hover:underline"
              >
                {t.viewAll}
              </Link>
            </div>

            {/* Filter Tabs inside What's New */}
            <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-lg text-xs font-bold">
              {noticeTabs.map((tItem) => (
                <button
                  key={tItem.id}
                  onClick={() => setActiveTab(tItem.id)}
                  className={`flex-1 py-1 rounded-md transition text-center ${
                    activeTab === tItem.id
                      ? "bg-white text-[#0a2540] shadow-sm font-extrabold"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {tItem.label}
                </button>
              ))}
            </div>

            {/* Notices List */}
            <div className="space-y-3 max-h-[460px] overflow-y-auto pr-1">
              {filteredNotices.length === 0 ? (
                <div className="py-8 text-center text-xs text-slate-500">
                  No published records under this category.
                </div>
              ) : (
                filteredNotices.slice(0, 5).map((n) => (
                  <div
                    key={n.id}
                    className="p-3 bg-slate-50 hover:bg-slate-100/80 border border-slate-200/80 rounded-xl transition space-y-2 group"
                  >
                    <div className="flex items-center justify-between text-[10px]">
                      <span className="font-mono font-bold px-1.5 py-0.5 rounded bg-blue-100 text-blue-900">
                        {n.category}
                      </span>
                      <span className="flex items-center gap-1 text-slate-500 font-mono">
                        <Calendar className="w-3 h-3" />
                        <span>{n.date}</span>
                      </span>
                    </div>

                    <h5 className="font-bold text-xs text-slate-900 group-hover:text-[#1a5f7a] transition-colors leading-snug">
                      {language === "gujarati"
                        ? n.titleGu
                        : language === "hindi"
                          ? n.titleHi
                          : n.titleEn}
                    </h5>

                    <div className="flex items-center justify-between pt-1 border-t border-slate-200 text-[11px]">
                      <span className="text-slate-500 font-mono text-[10px]">
                        Ref: {n.refNo}
                      </span>
                      <button
                        onClick={() =>
                          alert(
                            `Simulating Official PDF Download:\nReference: ${n.refNo}\nCategory: ${n.category}\nFile Size: ${n.fileSize}`,
                          )
                        }
                        className="px-2 py-1 rounded bg-[#0a2540] hover:bg-[#1a5f7a] text-white font-bold text-[10px] flex items-center gap-1 transition shadow-sm"
                      >
                        <Download className="w-3 h-3" />
                        <span>PDF ({n.fileSize})</span>
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Live Publishing CMS Link */}
            <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
              <span>Managed via Maker-Checker CMS</span>
              <Link
                to="/admin"
                className="font-bold text-amber-600 hover:underline"
              >
                CMS Portal &rarr;
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
