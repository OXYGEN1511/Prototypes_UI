import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useApp } from "../../../context/AppContext";
import {
  Image,
  Calendar,
  MapPin,
  X,
  Maximize2,
  ChevronRight,
  Filter,
} from "lucide-react";

export const Proto3EventGallery = ({ basePath = "/prototype-3" }) => {
  const { language } = useApp();
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [activeImage, setActiveImage] = useState(null);

  const categories = [
    {
      id: "ALL",
      label:
        language === "gujarati"
          ? "તમામ તસવીરો"
          : language === "hindi"
            ? "सभी तस्वीरें"
            : "All Photos",
    },
    {
      id: "SURVEYS",
      label:
        language === "gujarati"
          ? "દરિયાઈ સર્વેક્ષણ"
          : language === "hindi"
            ? "समुद्री सर्वेक्षण"
            : "Marine Surveys",
    },
    {
      id: "MODELS",
      label:
        language === "gujarati"
          ? "હાઇડ્રોલિક મોડેલિંગ"
          : language === "hindi"
            ? "हाइड्रोलिक मॉडलिंग"
            : "Hydraulic Modeling",
    },
    {
      id: "REVIEWS",
      label:
        language === "gujarati"
          ? "ઉચ્ચ સ્તરીય બેઠકો"
          : language === "hindi"
            ? "समीक्षा बैठकें"
            : "High-Level Reviews",
    },
  ];

  const galleryItems = [
    {
      id: "gal-1",
      category: "SURVEYS",
      title:
        language === "gujarati"
          ? "ખંભાતના અખાતમાં બાથિમિટ્રિક અને ભૂસ્તરશાસ્ત્રીય સર્વે"
          : language === "hindi"
            ? "खंभात की खाड़ी में बाथिमीट्रिक एवं भूवैज्ञानिक सर्वेक्षण"
            : "Bathymetric & Seabed Substrata Survey",
      date: "Sep 2026",
      location: "Gulf of Khambhat (Bhavnagar Sector)",
      desc: "Oceanographic research vessel mapping seabed contours and tidal flow vectors for the 30 km composite dam alignment.",
      aspect: "from-blue-900 to-slate-900",
      tag: "Site Survey",
    },
    {
      id: "gal-2",
      category: "MODELS",
      title:
        language === "gujarati"
          ? "CWPRS પુણે ખાતે ફિઝિકલ ટાઈડલ મોડેલ ટેસ્ટિંગ"
          : language === "hindi"
            ? "CWPRS पुणे में भौतिक ज्वारीय मॉडल परीक्षण"
            : "Physical Tidal Barrage Scale Modeling",
      date: "Aug 2026",
      location: "CWPRS Khadakwasla, Pune",
      desc: "1:250 scale hydraulic model simulation verifying sluice gate discharge velocities under extreme astronomical spring tides.",
      aspect: "from-teal-900 to-slate-900",
      tag: "Model Testing",
    },
    {
      id: "gal-3",
      category: "REVIEWS",
      title:
        language === "gujarati"
          ? "ગાંધીનગરમાં કલ્પસર ઉચ્ચ સત્તા સમિતિ બેઠક"
          : language === "hindi"
            ? "गांधीनगर में कल्पसर उच्चाधिकार प्राप्त समिति बैठक"
            : "Empowered Apex Committee Review Meeting",
      date: "Oct 2026",
      location: "Swarnim Sankul-1, Gandhinagar",
      desc: "Hon'ble Minister and Chief Secretary reviewing Phase-1 DPR environmental milestones and tender milestones.",
      aspect: "from-indigo-900 to-slate-900",
      tag: "Governance",
    },
    {
      id: "gal-4",
      category: "SURVEYS",
      title:
        language === "gujarati"
          ? "દહેજ અને ભરૂચ કાંઠાનું જિયો-ટેકનિકલ ડ્રિલિંગ"
          : language === "hindi"
            ? "दहेज एवं भरूच तट का भू-तकनीकी ड्रिलिंग कार्य"
            : "Dahej Marine Geotechnical Borehole Program",
      date: "Jul 2026",
      location: "Dahej Coastal Outpost, Bharuch",
      desc: "Offshore jack-up rig extracting core rock strata samples to determine foundation bearing strength for deep marine sluices.",
      aspect: "from-sky-900 to-slate-900",
      tag: "Geotech Drilling",
    },
    {
      id: "gal-5",
      category: "MODELS",
      title:
        language === "gujarati"
          ? "૫,૮૪૫ MW ટાઈડલ ટર્બાઈન CFD ન્યુમેરિકલ સિમ્યુલેશન"
          : language === "hindi"
            ? "5,845 MW ज्वारीय टरबाइन CFD न्यूमेरिकल सिमुलेशन"
            : "5,845 MW Tidal Turbine CFD Simulation",
      date: "Jun 2026",
      location: "IIT Madras Ocean Engineering Center",
      desc: "Supercomputing analysis of bi-directional bulb turbine hydrodynamics under variable ebb-flood seawater heads.",
      aspect: "from-cyan-950 to-slate-900",
      tag: "CFD Supercomputing",
    },
    {
      id: "gal-6",
      category: "REVIEWS",
      title:
        language === "gujarati"
          ? "સૌરાષ્ટ્ર અને ભાલ ખેડૂત પ્રતિનિધિ મંડળ પરામર્શ"
          : language === "hindi"
            ? "सौराष्ट्र एवं भाल किसान प्रतिनिधि परामर्श"
            : "Public Stakeholder & Farmer Consultation",
      date: "May 2026",
      location: "Bhavnagar Town Hall",
      desc: "Interactive technical presentation to regional farmer cooperatives regarding 10.54 lakh hectare command irrigation schedules.",
      aspect: "from-amber-950 to-slate-900",
      tag: "Public Consultation",
    },
  ];

  const filteredItems =
    activeCategory === "ALL"
      ? galleryItems
      : galleryItems.filter((g) => g.category === activeCategory);

  return (
    <section
      aria-label="Event & Project Media Gallery"
      className="bg-white py-14 sm:py-16 w-full border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#159895]">
              {language === "gujarati"
                ? "તસવીરો અને સાઇટ પ્રગતિ"
                : language === "hindi"
                  ? "तस्वीरें एवं साइट प्रगति"
                  : "Visual Archives & Milestones"}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0a2540] tracking-tight">
              {language === "gujarati"
                ? "પ્રોજેક્ટ ઇવેન્ટ્સ અને સર્વે ગેલેરી"
                : language === "hindi"
                  ? "परियोजना कार्यक्रम एवं सर्वेक्षण गैलरी"
                  : "Event & Survey Media Gallery"}
            </h3>
          </div>

          <div className="flex flex-wrap items-center gap-1.5 text-xs font-semibold">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setActiveCategory(c.id)}
                className={`px-3 py-1.5 rounded-lg transition ${
                  activeCategory === c.id
                    ? "bg-[#0a2540] text-white font-bold"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveImage(item)}
              className="group cursor-pointer bg-slate-50 border border-slate-200 hover:border-[#1a5f7a] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition flex flex-col justify-between"
            >
              {/* Graphic Visual Representation */}
              <div
                className={`relative h-48 bg-gradient-to-tr ${item.aspect} p-4 flex flex-col justify-between overflow-hidden`}
              >
                <div className="flex items-center justify-between text-xs text-white z-10">
                  <span className="px-2 py-0.5 rounded bg-black/60 text-amber-300 font-mono text-[10px] font-bold">
                    {item.tag}
                  </span>
                  <span className="p-1 rounded-full bg-black/40 group-hover:bg-amber-400 group-hover:text-black transition">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </span>
                </div>

                <div className="z-10">
                  <div className="text-[11px] text-slate-300 flex items-center gap-1 font-mono">
                    <Calendar className="w-3 h-3" />
                    <span>{item.date}</span>
                    <span className="mx-1">•</span>
                    <MapPin className="w-3 h-3" />
                    <span>{item.location}</span>
                  </div>
                </div>

                {/* Subtle Grid overlay */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>
              </div>

              {/* Text Caption */}
              <div className="p-4 space-y-2">
                <h4 className="font-extrabold text-sm text-slate-900 group-hover:text-[#1a5f7a] transition-colors leading-snug">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="bg-slate-900 border-2 border-amber-400 rounded-2xl max-w-2xl w-full p-6 space-y-4 shadow-2xl relative text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-1">
              <span className="text-xs font-mono font-bold text-amber-400 uppercase">
                {activeImage.tag} &bull; {activeImage.date}
              </span>
              <h3 className="text-xl font-black text-white">
                {activeImage.title}
              </h3>
              <p className="text-xs text-slate-400 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-rose-400" />
                <span>{activeImage.location}</span>
              </p>
            </div>

            <div
              className={`h-64 rounded-xl bg-gradient-to-tr ${activeImage.aspect} flex items-center justify-center border border-slate-700 p-6 text-center`}
            >
              <div className="space-y-2">
                <Image className="w-12 h-12 text-amber-400 mx-auto" />
                <p className="text-sm font-bold text-slate-200">
                  Government of Gujarat &bull; Official Site Survey Photographic
                  Record
                </p>
                <p className="text-xs text-slate-400 font-mono">
                  Resolution: 3840 &times; 2160 &bull; Archive ID:
                  GIL-KALPASAR-2026-MED
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              {activeImage.desc}
            </p>

            <div className="pt-3 border-t border-slate-800 flex justify-end">
              <button
                onClick={() => setActiveImage(null)}
                className="px-4 py-2 bg-amber-400 text-slate-950 font-bold rounded-lg text-xs"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
