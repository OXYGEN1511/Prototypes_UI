import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useApp } from "../../../context/AppContext";
import {
  Waves,
  Zap,
  ArrowRight,
  ShieldCheck,
  Compass,
  Sprout,
  CheckCircle2,
  X,
  ExternalLink,
  Layers,
  FileText,
} from "lucide-react";

export const Proto3Portfolio = ({ basePath = "/prototype-3" }) => {
  const { language } = useApp();
  const [activeFilter, setActiveFilter] = useState("ALL");
  const [selectedProject, setSelectedProject] = useState(null);

  const filterCategories = [
    {
      id: "ALL",
      label:
        language === "gujarati"
          ? "તમામ ક્ષેત્રો"
          : language === "hindi"
            ? "सभी परियोजनाएं"
            : "All Domains",
    },
    {
      id: "DAM",
      label:
        language === "gujarati"
          ? "ડેમ અને જળાશય"
          : language === "hindi"
            ? "बांध एवं जलाशय"
            : "Dam & Reservoir",
    },
    {
      id: "ENERGY",
      label:
        language === "gujarati"
          ? "ભરતી ઊર્જા"
          : language === "hindi"
            ? "ज्वारीय हरित ऊर्जा"
            : "Tidal Energy",
    },
    {
      id: "IRRIGATION",
      label:
        language === "gujarati"
          ? "સિંચાઈ નેટવર્ક"
          : language === "hindi"
            ? "सिंचाई नेटवर्क"
            : "Micro-Irrigation",
    },
    {
      id: "CONNECTIVITY",
      label:
        language === "gujarati"
          ? "૧૦-લેન એક્સપ્રેસવે"
          : language === "hindi"
            ? "एक्सप्रेसवे"
            : "Expressway",
    },
    {
      id: "SALINITY",
      label:
        language === "gujarati"
          ? "ખારાશ નિયંત્રણ"
          : language === "hindi"
            ? "खारापन नियंत्रण"
            : "Salinity Barrier",
    },
  ];

  const portfolioProjects = [
    {
      id: "proj-1",
      category: "DAM",
      categoryLabel: "Marine Composite Dam",
      title:
        language === "gujarati"
          ? "૩૦ કિમી ખંભાત અખાત સંયુક્ત ડેમ"
          : language === "hindi"
            ? "30 किमी खंभात खाड़ी संयुक्त बांध"
            : "30 km Gulf of Khambhat Composite Dam",
      metric: "30 km",
      metricLabel: "Dam Crest Length",
      specs:
        "Alignment: Bhavnagar to Dahej (Bharuch) • Depth: 15–35 meters • Composite Rockfill & Sluice Gates",
      summary:
        language === "gujarati"
          ? "ભાવનગર અને દહેજ વચ્ચે ખંભાતના અખાત પર બનનાર અદ્યતન સંયુક્ત ડેમ, જે નર્મદા, મહી, સાબરમતી અને ઢાઢર નદીઓના પૂરના પાણીનો સંગ્રહ કરશે."
          : language === "hindi"
            ? "भावनगर और भरूच के दहेज के मध्य खंभात की खाड़ी पर निर्मित होने वाला अद्वितीय संयुक्त बांध, जो 4 प्रमुख नदियों के अधिशेष जल को रोकेगा।"
            : "Engineered composite marine barrier stretching 30 km across the Gulf, impounding surplus floodwaters of Narmada, Mahi, Sabarmati, and Dhadhar rivers.",
      dprStatus: "Approved by Central Water Commission (CWC)",
      investment: "Estimated Phase-1 Infrastructure",
      details: [
        "Constructed across tidal currents with modular caissons and rockfill embankments.",
        "Equipped with deep-crest automated flood spillways and tidal barrage sluices.",
        "Houses a 10-lane expressway on the dam crest connecting Saurashtra directly to South Gujarat.",
      ],
    },
    {
      id: "proj-2",
      category: "DAM",
      categoryLabel: "Freshwater Storage",
      title:
        language === "gujarati"
          ? "૧૦,૨૫૦ MCM મીઠા પાણીનું સરોવર"
          : language === "hindi"
            ? "10,250 MCM विशाल ताजे पानी का सरोवर"
            : "10,250 MCM Freshwater Reservoir",
      metric: "10,250 MCM",
      metricLabel: "Active Storage Capacity",
      specs:
        "Water Volume: ~25% of Gujarat Annual Demand • Surface Area: ~2,000 sq km • Salinity: Fully Fresh",
      summary:
        language === "gujarati"
          ? "વિશ્વનું સૌથી મોટું કૃત્રિમ દરિયાઈ મીઠા પાણીનું સરોવર, જે સૌરાષ્ટ્ર અને મધ્ય ગુજરાતના લાખો નાગરિકો માટે પીવાના પાણીની સુરક્ષા આપશે."
          : language === "hindi"
            ? "विश्व का सबसे बड़ा कृत्रिम तटीय मीठे पानी का सरोवर, जो सौराष्ट्र और मध्य गुजरात के पेयजल संकट को सदा के लिए समाप्त करेगा।"
            : "One of the world's largest man-made marine freshwater impoundments, converting seawater Gulf into a pristine reservoir.",
      dprStatus: "Hydrographic Modeling Finalized",
      investment: "Inter-Basin Flood Diversion",
      details: [
        "Captures 10,250 million cubic meters of monsoon flood surplus which otherwise drains into the Arabian Sea.",
        "Supplies drinking water to over 13 million citizens across Rajkot, Bhavnagar, Amreli, and Ahmedabad districts.",
        "Provides dedicated dedicated industrial water allocation for Dholera SIR and Dahej PCPIR zones.",
      ],
    },
    {
      id: "proj-3",
      category: "ENERGY",
      categoryLabel: "Clean Tidal Energy",
      title:
        language === "gujarati"
          ? "૫,૮૪૫ MW ભરતી ઊર્જા પાવર હાઉસ"
          : language === "hindi"
            ? "5,845 MW समुद्री ज्वारीय ऊर्जा संयंत्र"
            : "5,845 MW Marine Tidal Clean Energy Station",
      metric: "5,845 MW",
      metricLabel: "Installed Power Capacity",
      specs:
        "Tidal Variation: 8 to 11 meters • Bulb Turbines: Bi-directional • Carbon Emission: Zero",
      summary:
        language === "gujarati"
          ? "વિશ્વનો સૌથી મોટો ટાઈડલ પાવર પ્રોજેક્ટ, જે ખંભાતના અખાતના શક્તિશાળી ભરતી-ઓટના મોજાઓમાંથી અવિરત હરિત વીજળી ઉત્પન્ન કરશે."
          : language === "hindi"
            ? "विश्व का सबसे बड़ा ज्वारीय विद्युत स्टेशन, जो खंभात की खाड़ी की 8-11 मीटर ऊंची लहरों से सतत हरित बिजली पैदा करेगा।"
            : "Utility-scale marine tidal power generation utilizing the immense 8–11 meter astronomical tidal variation of Khambhat.",
      dprStatus: "IIT Madras & CEA Technical Validation",
      investment: "Zero-Carbon Renewable Clean Base-Load",
      details: [
        "Utilizes two-way bulb turbines for bi-directional power generation during ebb and flood tide phases.",
        "Supplies continuous clean baseload energy into the Gujarat State Grid and Western Regional Grid.",
        "Displaces over 11.2 million tonnes of carbon dioxide emissions annually, supporting India's net-zero 2070 goal.",
      ],
    },
    {
      id: "proj-4",
      category: "IRRIGATION",
      categoryLabel: "Agricultural Transformation",
      title:
        language === "gujarati"
          ? "૧૦.૫૪ લાખ હેક્ટર સૂક્ષ્મ સિંચાઈ"
          : language === "hindi"
            ? "10.54 लाख हेक्टेयर कमान क्षेत्र सूक्ष्म सिंचाई"
            : "10.54 Lakh Ha Micro-Irrigation Network",
      metric: "10.54 L Ha",
      metricLabel: "Cultivable Command Area",
      specs:
        "Canal Reach: Saurashtra, Bhal & Sabarmati plains • Technology: Automated Drip & Sprinkler Micro-Grid",
      summary:
        language === "gujarati"
          ? "દુષ્કાળગ્રસ્ત સૌરાષ્ટ્ર અને ભાલ પ્રદેશના લાખો ખેડૂત પરિવારો માટે બારેમાસ સિંચાઈ સુવિધા ઉપલબ્ધ કરાવી કૃષિ ઉત્પાદકતા બમણી કરશે."
          : language === "hindi"
            ? "सूखाग्रस्त सौराष्ट्र एवं भाल क्षेत्र के किसानों के लिए 12 महीने सिंचाई सुविधा, जिससे कृषि उत्पादकता में अभूतपूर्व वृद्धि होगी।"
            : "Revolutionary pressurized micro-irrigation pipeline network extending freshwater across chronically water-scarce talukas.",
      dprStatus: "Command Area Survey Completed",
      investment: "Farmer Prosperity & Double Crop Rotation",
      details: [
        "Enables double and triple cropping cycles in cotton, groundnut, wheat, and horticulture across Saurashtra.",
        "Integrates SCADA-controlled automated distribution ensuring zero seepage and optimal water use efficiency.",
        "Increases farm income in rural Bhavnagar, Botad, Surendranagar, and Ahmedabad districts by over 140%.",
      ],
    },
    {
      id: "proj-5",
      category: "CONNECTIVITY",
      categoryLabel: "Highway & Logistics",
      title:
        language === "gujarati"
          ? "૨૨૫ કિમી રોડ અંતર ઘટાડો (૧૦-લેન)"
          : language === "hindi"
            ? "225 किमी सड़क दूरी की बचत (10-लेन एक्सप्रेसवे)"
            : "225 km Distance Cut: 10-Lane Expressway",
      metric: "225 km",
      metricLabel: "Travel Distance Saved",
      specs:
        "Lanes: 10 (8 Highway + 2 Rail/Utility Corridor) • Route: Dahej Port to Bhavnagar Port • Speed: 120 km/h",
      summary:
        language === "gujarati"
          ? "ડેમના શિખર પર ૧૦-લેન એક્સપ્રેસવે દહેજ અને ભાવનગર વચ્ચેનું મુસાફરી અંતર ૩૬૦ કિમીથી ઘટાડીને માત્ર ૧૩૫ કિમી કરી નાખશે."
          : language === "hindi"
            ? "बांध पर 10-लेन का विश्वस्तरीय एक्सप्रेसवे भरूच-दहेज और भावनगर के बीच की दूरी को 360 किमी से घटाकर 135 किमी कर देगा।"
            : "Expressway constructed over the crest of the Kalpasar dam cutting Dahej–Bhavnagar travel from 360 km to 135 km.",
      dprStatus: "Integrated with Bharatmala & GatiShakti",
      investment: "Direct Transit Time reduced from 7.5 hrs to 1.5 hrs",
      details: [
        "Cuts travel time between Southern Gujarat (Surat/Dahej) and Saurashtra (Bhavnagar/Alang) from 7.5 hours to 1.5 hours.",
        "Saves an estimated ₹1,800 Crores in fuel consumption and vehicle operating costs annually.",
        "Directly connects Dahej Special Economic Zone with Dholera Special Investment Region (DSIR).",
      ],
    },
    {
      id: "proj-6",
      category: "SALINITY",
      categoryLabel: "Eco Barrier & Ground Water",
      title:
        language === "gujarati"
          ? "૧૨ દરિયાકાંઠા તાલુકાઓમાં ખારાશ નિયંત્રણ"
          : language === "hindi"
            ? "12 तटीय तालुकों में खारापन नियंत्रण व भूजल संवर्धन"
            : "Salinity Ingress Prevention & Recharge",
      metric: "100% Eco",
      metricLabel: "Salinity Ingress Halted",
      specs:
        "Coastal Belt: 12 Talukas • Wells Recharged: Over 45,000 Agricultural Wells • Aquifer Status: Fresh",
      summary:
        language === "gujarati"
          ? "અરબી સમુદ્રના ખારા પાણીને જમીનમાં આગળ વધતું કાયમ માટે અટકાવી દરિયાકાંઠાની ફળદ્રુપ જમીન અને ભૂગર્ભ જળને મીઠા બનાવશે."
          : language === "hindi"
            ? "अरब सागर के खारे पानी को भूमि में आगे बढ़ने से स्थायी रूप से रोककर तटीय उपजाऊ भूमि व भूजल को मीठा और समृद्ध बनाएगा।"
            : "Reverses decades of destructive marine salinity intrusion, creating a freshwater hydraulic barrier that cleanses coastal aquifers.",
      dprStatus: "Ecological Clearance Stage-1 Granted",
      investment: "Groundwater Table Improvement (+8.5 meters)",
      details: [
        "Creates a permanent positive freshwater head, pushing back saline seawater wedge across 12 coastal talukas.",
        "Restores over 45,000 saline agricultural borewells back to sweet drinking and farming quality.",
        "Protects fragile coastal ecosystems and prevents desertification across the Gulf of Khambhat littoral margin.",
      ],
    },
  ];

  const filteredProjects =
    activeFilter === "ALL"
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category === activeFilter);

  return (
    <section
      id="product-portfolio"
      aria-labelledby="portfolio-heading"
      className="bg-[#07192b] text-white py-14 sm:py-16 w-full border-b border-[#0f3254]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-800 pb-5">
          <div>
            <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider">
              <Layers className="w-4 h-4 text-cyan-400" />
              <span>
                {language === "gujarati"
                  ? "મુખ્ય વ્યૂહાત્મક યોજનાઓ"
                  : language === "hindi"
                    ? "प्रमुख रणनीतिक परियोजनाएं"
                    : "Strategic Portfolios & Scope"}
              </span>
            </div>
            <h2
              id="portfolio-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight mt-1"
            >
              {language === "gujarati"
                ? "કલ્પસર પ્રોજેક્ટના મુખ્ય આધારસ્તંભો"
                : language === "hindi"
                  ? "कल्पसर परियोजना के मुख्य आधार-स्तंभ"
                  : "Modernized Project Portfolio"}
            </h2>
          </div>

          {/* Category Filter Pills (MDL Style) */}
          <div className="flex flex-wrap items-center gap-1.5 text-xs font-semibold">
            {filterCategories.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveFilter(c.id)}
                className={`px-3 py-1.5 rounded-lg transition-all duration-200 ${
                  activeFilter === c.id
                    ? "bg-amber-400 text-slate-950 font-black shadow-md shadow-amber-400/20"
                    : "bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((p) => (
            <div
              key={p.id}
              className="group bg-[#0b243d] hover:bg-[#0f2e4c] border border-slate-700/80 hover:border-amber-400/80 rounded-2xl p-6 transition-all duration-300 shadow-xl flex flex-col justify-between space-y-5"
            >
              <div className="space-y-3">
                {/* Metric Header */}
                <div className="flex items-start justify-between gap-3 border-b border-slate-800 pb-3">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-cyan-950 text-cyan-300 border border-cyan-700">
                    {p.categoryLabel}
                  </span>
                  <div className="text-right">
                    <span className="text-2xl font-black text-amber-400 font-mono tracking-tight block">
                      {p.metric}
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium">
                      {p.metricLabel}
                    </span>
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="text-lg font-black text-white group-hover:text-amber-300 transition-colors leading-snug">
                  {p.title}
                </h3>

                {/* Summary */}
                <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                  {p.summary}
                </p>

                {/* Specs Snippet */}
                <div className="p-2.5 rounded-xl bg-black/40 border border-slate-800 text-[11px] text-slate-300 font-mono">
                  {p.specs}
                </div>
              </div>

              {/* Action Button to Open Detail Modal */}
              <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between">
                <span className="text-[10px] text-emerald-400 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>DPR In Progress</span>
                </span>

                <button
                  onClick={() => setSelectedProject(p)}
                  className="px-3.5 py-1.5 bg-slate-800 hover:bg-amber-400 hover:text-slate-950 text-amber-300 font-bold text-xs rounded-lg border border-slate-700 hover:border-amber-400 transition flex items-center gap-1.5"
                >
                  <span>View Specifications</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Specifications Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-[#0b243d] border-2 border-amber-400 rounded-2xl max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition"
              aria-label="Close Modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-1">
              <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
                {selectedProject.categoryLabel} &bull; Technical Specifications
              </span>
              <h3 className="text-2xl font-black text-white">
                {selectedProject.title}
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-4 bg-black/40 p-4 rounded-xl border border-slate-800">
              <div>
                <span className="text-[10px] text-slate-400 uppercase tracking-wider block">
                  Primary Dimension:
                </span>
                <span className="text-xl font-black text-amber-400 font-mono">
                  {selectedProject.metric} ({selectedProject.metricLabel})
                </span>
              </div>
              <div>
                <span className="text-[10px] text-slate-400 uppercase tracking-wider block">
                  Validation Status:
                </span>
                <span className="text-xs font-bold text-emerald-400">
                  {selectedProject.dprStatus}
                </span>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                Key Engineering & Strategic Deliverables:
              </h4>
              <ul className="space-y-2">
                {selectedProject.details.map((d, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-xs text-slate-200"
                  >
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
              <span className="text-xs text-slate-400">
                Department Reference:{" "}
                <strong className="text-white">KALPASAR/DPR/2026</strong>
              </span>

              <div className="flex gap-2">
                <Link
                  to={`${basePath}/purposes`}
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 bg-amber-400 text-slate-950 font-black rounded-xl text-xs hover:bg-amber-300 transition"
                >
                  Full Purpose Document
                </Link>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl text-xs transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
