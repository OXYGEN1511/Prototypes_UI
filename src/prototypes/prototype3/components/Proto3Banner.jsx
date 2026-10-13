import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useApp } from "../../../context/AppContext";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Download,
  ArrowRight,
  Waves,
  Zap,
  ShieldCheck,
  Compass,
  CheckCircle2,
} from "lucide-react";

export const Proto3Banner = ({ basePath = "/prototype-3" }) => {
  const { language, t } = useApp();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const timerRef = useRef(null);

  const slides = [
    {
      id: 1,
      badge:
        language === "gujarati"
          ? "વિશ્વનો સૌથી મોટો દરિયાઈ ડેમ પ્રોજેક્ટ"
          : language === "hindi"
            ? "विश्व की सबसे बड़ी समुद्री बांध परियोजना"
            : "World's Largest Marine Dam Project",
      title:
        language === "gujarati"
          ? "ખંભાતના અખાત પર ૩૦ કિમી સંયુક્ત ડેમ"
          : language === "hindi"
            ? "खंभात की खाड़ी पर 30 किमी संयुक्त बांध"
            : "30 km Gulf of Khambhat Composite Dam",
      subtitle:
        language === "gujarati"
          ? "ભાવનગર અને દહેજ (ભરૂચ) વચ્ચે ૧૦-લેન એક્સપ્રેસવે ૨૨૫ કિમીનું મુસાફરી અંતર ઘટાડશે."
          : language === "hindi"
            ? "भावनगर और दहेज के बीच 10-लेन एक्सप्रेसवे यात्रा दूरी में 225 किमी की बचत करेगा।"
            : "10-lane expressway connecting Dahej & Bhavnagar, slashing 225 km transit distance.",
      metrics: [
        { label: "Dam Length", val: "30 km" },
        { label: "Expressway", val: "10-Lane" },
        { label: "Distance Cut", val: "225 km" },
      ],
      bgGradient: "from-[#031525] via-[#092b4a] to-[#041c33]",
      accentColor: "#159895",
      primaryCta: {
        label:
          language === "gujarati"
            ? "યોજનાનો સંપૂર્ણ હેતુ"
            : language === "hindi"
              ? "परियोजना विज़न देखें"
              : "Explore Project Scope",
        path: `${basePath}/purposes`,
      },
      secondaryCta: {
        label:
          language === "gujarati"
            ? "ટેકનિકલ પરિપત્રો"
            : language === "hindi"
              ? "तकनीकी विवरण"
              : "Technical DPR",
        path: `${basePath}/performance`,
      },
    },
    {
      id: 2,
      badge:
        language === "gujarati"
          ? "૧૦,૨૫૦ MCM મીઠા પાણીનું સરોવર"
          : language === "hindi"
            ? "10,250 MCM ताजे पानी का विशाल भंडार"
            : "10,250 MCM Freshwater Storage",
      title:
        language === "gujarati"
          ? "નર્મદા, મહી અને સાબરમતી પૂરના પાણીનો સંગ્રહ"
          : language === "hindi"
            ? "नर्मदा, माही और साबरमती के अधिशेष जल का संचयन"
            : "Gigantic Freshwater Lake in the Gulf",
      subtitle:
        language === "gujarati"
          ? "ગુજરાતના દુષ્કાળગ્રસ્ત વિસ્તારો માટે પીવાના પાણી અને ઉદ્યોગો માટે કાયમી જળસુરક્ષા."
          : language === "hindi"
            ? "सौराष्ट्र और भाल क्षेत्रों के लिए पीने के पानी और उद्योगों हेतु शाश्वत जल सुरक्षा।"
            : "Surplus monsoon flood storage providing permanent water security for Saurashtra & Bhal.",
      metrics: [
        { label: "Storage Volume", val: "10,250 MCM" },
        { label: "Rivers Tapped", val: "4 Major" },
        { label: "Water Purity", val: "Potable" },
      ],
      bgGradient: "from-[#021d30] via-[#0c4063] to-[#03243d]",
      accentColor: "#38bdf8",
      primaryCta: {
        label:
          language === "gujarati"
            ? "જળાશયની વિગતો"
            : language === "hindi"
              ? "जलाशय विवरण"
              : "Reservoir Details",
        path: `${basePath}/purposes`,
      },
      secondaryCta: {
        label:
          language === "gujarati"
            ? "પર્યાવરણીય અહેવાલ"
            : language === "hindi"
              ? "पर्यावरणीय रिपोर्ट"
              : "EIA Studies",
        path: `${basePath}/policies`,
      },
    },
    {
      id: 3,
      badge:
        language === "gujarati"
          ? "૫,૮૪૫ MW સ્વચ્છ ભરતી વિદ્યુત ઊર્જા"
          : language === "hindi"
            ? "5,845 MW हरित ज्वारीय ऊर्जा संयंत्र"
            : "5,845 MW Clean Marine Tidal Energy",
      title:
        language === "gujarati"
          ? "વિશ્વનું સૌથી મોટું ટાઈડલ પાવર ઇન્સ્ટોલેશન"
          : language === "hindi"
            ? "विश्व का सबसे बड़ा ज्वारीય विद्युत स्टेशन"
            : "World's Foremost Tidal Power Installation",
      subtitle:
        language === "gujarati"
          ? "ખંભાતના અખાતના ૮ થી ૧૧ મીટરના ભરતી મોજાંનો ઉપયોગ કરી વર્ષે લાખો યુનિટ ગ્રીન એનર્જી."
          : language === "hindi"
            ? "खंभात की 8-11 मीटर ऊंची लहरों का दोहन कर शून्य-कार्बन स्वच्छ ऊर्जा उत्पादन।"
            : "Tapping 8–11 meter tidal range to generate continuous carbon-free green base load power.",
      metrics: [
        { label: "Tidal Capacity", val: "5,845 MW" },
        { label: "Tidal Variation", val: "8 – 11 m" },
        { label: "Clean Fuel", val: "100% Green" },
      ],
      bgGradient: "from-[#08182b] via-[#113859] to-[#072138]",
      accentColor: "#eab308",
      primaryCta: {
        label:
          language === "gujarati"
            ? "ઊર્જા ક્ષમતા તપાસો"
            : language === "hindi"
              ? "ऊर्जा क्षमता देखें"
              : "Tidal Energy Grid",
        path: `${basePath}/performance`,
      },
      secondaryCta: {
        label:
          language === "gujarati"
            ? "RFP ટેન્ડર દસ્તાવેજ"
            : language === "hindi"
              ? "RFP निविदा"
              : "Active RFP Notice",
        path: `${basePath}/tenders`,
      },
    },
    {
      id: 4,
      badge:
        language === "gujarati"
          ? "૧૦.૫૪ લાખ હેક્ટર જમીનમાં સિંચાઈ ક્રાંતિ"
          : language === "hindi"
            ? "10.54 लाख हेक्टेयर सिंचाई एवं खारापन नियंत्रण"
            : "10.54 Lakh Ha Irrigation & Salinity Barrier",
      title:
        language === "gujarati"
          ? "સૌરાષ્ટ્ર અને ભાલ પ્રદેશની કૃષિ કાયાપલટ"
          : language === "hindi"
            ? "सौराष्ट्र और भाल क्षेत्रों का कृषि कायाकल्प"
            : "Transformative Micro-Irrigation & Coastal Protection",
      subtitle:
        language === "gujarati"
          ? "૧૨ દરિયાકાંઠાના તાલુકાઓમાં ખારાશ આગળ વધતી અટકાવી ભૂગર્ભ જળ રિચાર્જ થશે."
          : language === "hindi"
            ? "12 तटीय तालुकों में खारेपन के प्रसार को रोककर भूजल स्तर में ऐतिहासिक सुधार।"
            : "Reversing coastal seawater ingress while recharging groundwater across 12 vulnerable talukas.",
      metrics: [
        { label: "Irrigation Area", val: "10.54 L Ha" },
        { label: "Talukas Covered", val: "12 Coastal" },
        { label: "Groundwater", val: "+8.5 m Avg" },
      ],
      bgGradient: "from-[#011d28] via-[#083b4c] to-[#02212e]",
      accentColor: "#2dd4bf",
      primaryCta: {
        label:
          language === "gujarati"
            ? "સિંચાઈ નેટવર્ક"
            : language === "hindi"
              ? "सिंचाई नेटवर्क"
              : "Irrigation Network",
        path: `${basePath}/purposes`,
      },
      secondaryCta: {
        label:
          language === "gujarati"
            ? "ખેડૂત સેવાઓ"
            : language === "hindi"
              ? "किसान पोर्टल"
              : "Farmer Connect",
        path: `${basePath}/contact`,
      },
    },
  ];

  // Autoplay control
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5500);
    } else if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, slides.length]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const slide = slides[currentSlide];

  return (
    <section
      aria-label="Hero Banner Carousel"
      className="relative w-full overflow-hidden bg-slate-950 text-white min-h-[460px] sm:min-h-[520px] lg:min-h-[580px] flex items-center"
    >
      {/* Dynamic Background with SVG Wave Overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-r ${slide.bgGradient} transition-all duration-1000 ease-in-out`}
      >
        {/* Subtle Engineering Grid & Wave Pattern */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-slate-950/40"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main Slide Content (Left Col) */}
          <div className="lg:col-span-8 space-y-6">
            {/* Government Scope Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 backdrop-blur-md border border-white/20 text-amber-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span>{slide.badge}</span>
            </div>

            {/* Headline */}
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight drop-shadow-md">
              {slide.title}
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-200 leading-relaxed max-w-2xl font-normal drop-shadow">
              {slide.subtitle}
            </p>

            {/* Metrics Chips */}
            <div className="grid grid-cols-3 gap-3 pt-2 max-w-lg">
              {slide.metrics.map((m, idx) => (
                <div
                  key={idx}
                  className="bg-black/40 backdrop-blur-md border border-white/15 p-2.5 rounded-xl text-center hover:border-amber-400/60 transition"
                >
                  <div className="text-base sm:text-xl font-black text-amber-400 font-mono tracking-tight">
                    {m.val}
                  </div>
                  <div className="text-[10px] sm:text-xs text-slate-300 font-semibold uppercase tracking-wider mt-0.5">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <Link
                to={slide.primaryCta.path}
                className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black rounded-xl text-xs uppercase tracking-wider transition-all duration-200 shadow-lg shadow-amber-500/20 flex items-center gap-2 group"
              >
                <span>{slide.primaryCta.label}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to={slide.secondaryCta.path}
                className="px-5 py-3 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl text-xs uppercase tracking-wider backdrop-blur-md border border-white/30 transition flex items-center gap-2"
              >
                <Download className="w-4 h-4 text-cyan-300" />
                <span>{slide.secondaryCta.label}</span>
              </Link>
            </div>
          </div>

          {/* Right Col: Graphic Emblem & Engineering Card */}
          <div className="hidden lg:flex lg:col-span-4 justify-end">
            <div className="w-full max-w-sm bg-slate-900/80 backdrop-blur-md border-2 border-white/15 p-6 rounded-2xl shadow-2xl space-y-4">
              <div className="flex items-center justify-between border-b border-slate-700/80 pb-3">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">
                  RFP Clause 2.18.5 Prototype 3
                </span>
                <span className="text-[10px] bg-cyan-950 text-cyan-300 border border-cyan-700 px-2 py-0.5 rounded font-mono">
                  GIL/2026/01
                </span>
              </div>

              <div className="space-y-2.5">
                <div className="flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    Dual composite dam across Bhavnagar and Dahej (Bharuch)
                  </span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    World-class tidal turbines generating 5,845 MW base power
                  </span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>10,250 MCM fresh reservoir storage capacity</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    10.54 Lakh hectares agricultural command area irrigation
                  </span>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-700/80 flex items-center justify-between text-xs text-slate-400">
                <span>Nodal Authority:</span>
                <strong className="text-white">Govt. of Gujarat</strong>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Navigation & Controls Bar (MDL Signature Floating Controls) */}
      <div className="absolute bottom-4 left-0 right-0 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Numbered Indicator (e.g. 01 / 04) */}
          <div className="flex items-center gap-3 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 text-xs font-mono font-bold">
            <span className="text-amber-400">0{currentSlide + 1}</span>
            <span className="text-slate-500">/</span>
            <span className="text-slate-400">0{slides.length}</span>
          </div>

          {/* Dots / Indicators */}
          <div className="hidden sm:flex items-center gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2 transition-all rounded-full ${
                  currentSlide === idx
                    ? "w-8 bg-amber-400"
                    : "w-2.5 bg-white/40 hover:bg-white/70"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Controls: Prev, Play/Pause, Next */}
          <div className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md p-1 rounded-full border border-white/20">
            <button
              onClick={handlePrev}
              className="p-1.5 rounded-full hover:bg-white/20 text-white transition"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-1.5 rounded-full hover:bg-white/20 text-amber-300 transition"
              aria-label={isPlaying ? "Pause Slideshow" : "Play Slideshow"}
            >
              {isPlaying ? (
                <Pause className="w-3.5 h-3.5" />
              ) : (
                <Play className="w-3.5 h-3.5" />
              )}
            </button>

            <button
              onClick={handleNext}
              className="p-1.5 rounded-full hover:bg-white/20 text-white transition"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
