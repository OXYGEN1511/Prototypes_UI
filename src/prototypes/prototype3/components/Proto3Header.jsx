import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useApp } from "../../../context/AppContext";
import { Emblem } from "../../../components/common/Emblem";
import {
  Search,
  Menu,
  X,
  ChevronDown,
  Volume2,
  VolumeX,
  Sun,
  Moon,
  Globe,
  Sliders,
  ExternalLink,
  ShieldCheck,
  Phone,
  Mail,
  Waves,
  Building2,
  Award,
  Radio,
  Share2,
  Check,
} from "lucide-react";

export const Proto3Header = ({ basePath = "/prototype-3" }) => {
  const {
    language,
    setLanguage,
    fontSize,
    setFontSize,
    contrastMode,
    setContrastMode,
    searchQuery,
    setSearchQuery,
    isSpeaking,
    speakText,
    stopSpeaking,
    setIsFeedbackOpen,
    t,
  } = useApp();

  const location = useLocation();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isSticky, setIsSticky] = useState(false);
  const [searchInput, setSearchInput] = useState(searchQuery || "");
  const [showLangMenu, setShowLangMenu] = useState(false);
  const langMenuRef = useRef(null);

  // Close menus on outside click or route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    setShowLangMenu(false);
  }, [location.pathname]);

  // Scroll listener for sticky navigation bar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 120) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchInput.trim()) {
      setSearchQuery(searchInput.trim());
      navigate(`${basePath}/tenders`);
    }
  };

  const skipToMain = (e) => {
    e.preventDefault();
    const mainEl = document.getElementById("main-content");
    if (mainEl) {
      mainEl.setAttribute("tabindex", "-1");
      mainEl.focus();
      mainEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navMenuItems = [
    {
      label:
        language === "gujarati"
          ? "મુખ્ય પૃષ્ઠ"
          : language === "hindi"
            ? "मुख्य पृष्ठ"
            : "Home",
      path: `${basePath}`,
    },
    {
      label:
        language === "gujarati"
          ? "વિભાગ વિશે"
          : language === "hindi"
            ? "विभाग के बारे में"
            : "About Us",
      path: `${basePath}/department`,
      submenu: [
        {
          title:
            language === "gujarati"
              ? "ધ્યેય અને પરિચય"
              : language === "hindi"
                ? "विज़न एवं परिचय"
                : "Vision & Mandate",
          path: `${basePath}/department`,
        },
        {
          title:
            language === "gujarati"
              ? "નેતૃત્વ અને પ્રશાસન"
              : language === "hindi"
                ? "नेतृत्व एवं प्रशासन"
                : "Leadership & Governance",
          path: `${basePath}/department`,
        },
        {
          title:
            language === "gujarati"
              ? "સંગઠન માળખું (કલમ ૩.૩)"
              : language === "hindi"
                ? "संगठन ढांचा (खंड 3.3)"
                : "Organization Hierarchy (Clause 3.3)",
          path: `${basePath}/department`,
        },
        {
          title:
            language === "gujarati"
              ? "સરકારી રજાઓ ૨૦૨૬"
              : language === "hindi"
                ? "शासकीय अवकाश सूची 2026"
                : "Official Holidays 2026",
          path: `${basePath}/department`,
        },
      ],
    },
    {
      label:
        language === "gujarati"
          ? "પ્રોજેક્ટ હેતુઓ"
          : language === "hindi"
            ? "परियोजना उद्देश्य"
            : "Key Purposes",
      path: `${basePath}/purposes`,
      submenu: [
        {
          title:
            language === "gujarati"
              ? "૩૦ કિમી સંયુક્ત ડેમ"
              : language === "hindi"
                ? "30 किमी संयुक्त बांध"
                : "30 km Gulf Composite Dam",
          path: `${basePath}/purposes`,
        },
        {
          title:
            language === "gujarati"
              ? "૧૦,૨૫૦ MCM મીઠા પાણીનો સંગ્રહ"
              : language === "hindi"
                ? "10,250 MCM ताजे पानी का भंडार"
                : "10,250 MCM Freshwater Basin",
          path: `${basePath}/purposes`,
        },
        {
          title:
            language === "gujarati"
              ? "૫,૮૪૫ MW ભરતી ઊર્જા પ્રોજેક્ટ"
              : language === "hindi"
                ? "5,845 MW ज्वारीय हरित ऊर्जा"
                : "5,845 MW Clean Tidal Energy",
          path: `${basePath}/purposes`,
        },
        {
          title:
            language === "gujarati"
              ? "ખારાશ નિયંત્રણ અને ભૂગર્ભ જળ"
              : language === "hindi"
                ? "खारापन नियंत्रण व भूजल"
                : "Salinity Ingress Prevention",
          path: `${basePath}/purposes`,
        },
      ],
    },
    {
      label:
        language === "gujarati"
          ? "કામગીરી અને સિદ્ધિઓ"
          : language === "hindi"
            ? "प्रदर्शन एवं उपलब्धियां"
            : "Performance",
      path: `${basePath}/performance`,
    },
    {
      label:
        language === "gujarati"
          ? "ટેન્ડર્સ અને RFP"
          : language === "hindi"
            ? "निविदाएं एवं RFP"
            : "Tenders & RFP",
      path: `${basePath}/tenders`,
      badge: "ACTIVE",
    },
    {
      label:
        language === "gujarati"
          ? "નીતિઓ અને અહેવાલો"
          : language === "hindi"
            ? "नीतियां एवं रिपोर्ट"
            : "Policies",
      path: `${basePath}/policies`,
    },
    {
      label:
        language === "gujarati"
          ? "સંપર્ક અને ફરિયાદ"
          : language === "hindi"
            ? "संपर्क एवं शिकायत"
            : "Contact & Citizen Care",
      path: `${basePath}/contact`,
    },
  ];

  return (
    <header
      className="w-full z-40 relative bg-white border-b border-slate-200 font-sans shadow-sm"
      role="banner"
    >
      {/* ================= 1. GIGW ACCESSIBILITY TOPBAR (MDL Style) ================= */}
      <div className="bg-[#0b1d33] text-slate-200 border-b border-[#1a385c] text-[11px] py-1 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          {/* Left: Skip to Main & Screen Reader */}
          <div className="flex items-center gap-3">
            <a
              href="#main-content"
              onClick={skipToMain}
              className="text-amber-400 hover:text-amber-300 font-semibold focus:outline-none focus:ring-1 focus:ring-amber-400 px-1 rounded transition"
            >
              Skip to Main Content
            </a>
            <span className="text-slate-600">|</span>
            <span className="hidden sm:inline text-slate-400">
              Government of Gujarat • કલ્પસર વિભાગ
            </span>
          </div>

          {/* Right: Accessibility Controls & Language Switcher */}
          <div className="flex items-center gap-3 ml-auto">
            {/* Screen Reader Voice (Divyangjan) */}
            <button
              onClick={() => {
                if (isSpeaking) {
                  stopSpeaking();
                } else {
                  speakText(
                    `Kalpasar Department Website. Prototype 3 modelled after MDL main portal. Harnessing 5,845 Megawatt clean tidal energy and constructing 30 kilometer composite dam across Gulf of Khambhat.`,
                  );
                }
              }}
              aria-label="Screen Reader Read Aloud"
              className="flex items-center gap-1 text-slate-300 hover:text-cyan-300 transition px-1.5 py-0.5 rounded bg-slate-800/80 border border-slate-700"
            >
              {isSpeaking ? (
                <>
                  <VolumeX className="w-3.5 h-3.5 text-red-400 animate-pulse" />
                  <span className="text-red-300 font-bold">Stop Voice</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Screen Reader</span>
                </>
              )}
            </button>

            {/* Font Size Adjusters: A- A A+ */}
            <div
              className="flex items-center border border-slate-700 rounded overflow-hidden bg-slate-900/60"
              aria-label="Font Resizing"
            >
              <button
                onClick={() => setFontSize("normal")}
                className={`px-1.5 py-0.5 hover:bg-slate-700 transition ${fontSize === "normal" ? "font-bold text-amber-400 bg-slate-800" : "text-slate-300"}`}
                title="Default Font Size"
              >
                A-
              </button>
              <button
                onClick={() => setFontSize("large")}
                className={`px-1.5 py-0.5 border-x border-slate-700 hover:bg-slate-700 transition ${fontSize === "large" ? "font-bold text-amber-400 bg-slate-800" : "text-slate-300"}`}
                title="Larger Font Size"
              >
                A
              </button>
              <button
                onClick={() => setFontSize("xlarge")}
                className={`px-1.5 py-0.5 hover:bg-slate-700 transition ${fontSize === "xlarge" ? "font-bold text-amber-400 bg-slate-800" : "text-slate-300"}`}
                title="Largest Font Size"
              >
                A+
              </button>
            </div>

            {/* Contrast Toggle */}
            <button
              onClick={() =>
                setContrastMode(
                  contrastMode === "high-contrast" ? "normal" : "high-contrast",
                )
              }
              className="p-1 rounded text-slate-300 hover:text-amber-400 transition"
              title="Toggle High Contrast Mode"
              aria-label="Toggle High Contrast"
            >
              {contrastMode === "high-contrast" ? (
                <Sun className="w-3.5 h-3.5 text-yellow-400" />
              ) : (
                <Moon className="w-3.5 h-3.5" />
              )}
            </button>

            <span className="text-slate-600">|</span>

            {/* Trilingual Language Selector */}
            <div className="relative" ref={langMenuRef}>
              <button
                onClick={() => setShowLangMenu(!showLangMenu)}
                className="flex items-center gap-1.5 font-bold text-slate-200 hover:text-white px-2 py-0.5 rounded bg-slate-800 border border-slate-700 transition"
              >
                <Globe className="w-3 h-3 text-cyan-400" />
                <span>
                  {language === "gujarati"
                    ? "ગુજરાતી"
                    : language === "hindi"
                      ? "हिन्दी"
                      : "English"}
                </span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </button>

              {showLangMenu && (
                <div className="absolute right-0 top-full mt-1 w-32 bg-slate-900 border border-slate-700 rounded-lg shadow-xl z-50 py-1 overflow-hidden">
                  <button
                    onClick={() => {
                      setLanguage("english");
                      setShowLangMenu(false);
                    }}
                    className={`w-full text-left px-3 py-1.5 flex items-center justify-between hover:bg-slate-800 text-xs ${language === "english" ? "text-amber-400 font-bold" : "text-slate-200"}`}
                  >
                    <span>English</span>
                    {language === "english" && <Check className="w-3 h-3" />}
                  </button>
                  <button
                    onClick={() => {
                      setLanguage("gujarati");
                      setShowLangMenu(false);
                    }}
                    className={`w-full text-left px-3 py-1.5 flex items-center justify-between hover:bg-slate-800 text-xs ${language === "gujarati" ? "text-amber-400 font-bold" : "text-slate-200"}`}
                  >
                    <span>ગુજરાતી</span>
                    {language === "gujarati" && <Check className="w-3 h-3" />}
                  </button>
                  <button
                    onClick={() => {
                      setLanguage("hindi");
                      setShowLangMenu(false);
                    }}
                    className={`w-full text-left px-3 py-1.5 flex items-center justify-between hover:bg-slate-800 text-xs ${language === "hindi" ? "text-amber-400 font-bold" : "text-slate-200"}`}
                  >
                    <span>हिन्दी</span>
                    {language === "hindi" && <Check className="w-3 h-3" />}
                  </button>
                </div>
              )}
            </div>

            {/* CMS Shortcut Link */}
            <Link
              to="/admin"
              className="hidden md:inline-flex items-center gap-1 text-[10px] bg-amber-500/20 text-amber-300 border border-amber-500/40 px-2 py-0.5 rounded font-bold hover:bg-amber-500/30 transition"
              title="Maker-Checker Publishing CMS"
            >
              <Sliders className="w-3 h-3" />
              <span>CMS</span>
            </Link>
          </div>
        </div>
      </div>

      {/* ================= 2. MAIN BRANDING MASTHEAD (MDL Signature Identity) ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          {/* Main Logo & Ministry Title Section */}
          <Link
            to={basePath}
            className="flex items-center gap-3.5 group focus:outline-none rounded-lg p-1"
          >
            <div className="relative shrink-0">
              <Emblem className="h-16 w-16 sm:h-20 sm:w-20 object-contain drop-shadow" />
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-extrabold text-[#9a2a18] uppercase tracking-wider">
                  {t.govtName}
                </span>
                <span className="text-slate-400 text-xs">•</span>
                <span className="text-[11px] text-slate-600 font-medium tracking-tight">
                  {language === "gujarati"
                    ? "નર્મદા, જળસંપત્તિ અને કલ્પસર વિભાગ"
                    : language === "hindi"
                      ? "नर्मदा, जल संसाधन एवं कल्पसर विभाग"
                      : "Water Resources & Maritime Infrastructure"}
                </span>
              </div>

              <h1 className="text-lg sm:text-2xl md:text-[26px] font-black text-[#0a2540] tracking-tight leading-tight">
                {t.deptName}
              </h1>

              <p className="text-xs sm:text-sm font-semibold text-[#1a5f7a] flex items-center gap-1.5 mt-0.5">
                <Waves className="w-3.5 h-3.5 text-[#159895]" />
                <span>
                  {language === "gujarati"
                    ? "ખંભાતના અખાતમાં વિશ્વનો અજોડ ભરતી ઊર્જા અને મીઠા પાણીનો જળાશય પ્રોજેક્ટ"
                    : language === "hindi"
                      ? "खंभात की खाड़ी में विश्वस्तरीय ज्वारीय ऊर्जा एवं मीठे पानी का महा-जलाशय"
                      : "World's Flagship Marine Tidal Energy & 10,250 MCM Dam Reservoir"}
                </span>
              </p>
            </div>
          </Link>

          {/* Desktop Search Bar & National Badges */}
          <div className="flex items-center gap-4 w-full lg:w-auto justify-between lg:justify-end">
            {/* Search Input */}
            <form
              onSubmit={handleSearchSubmit}
              className="relative w-full max-w-xs sm:max-w-sm"
            >
              <input
                type="text"
                placeholder={
                  language === "gujarati"
                    ? "ટેન્ડર્સ, પરિપત્રો કે પ્રોજેક્ટ શોધો..."
                    : language === "hindi"
                      ? "निविदाएं या परियोजना खोजें..."
                      : "Search tenders, circulars, DPR..."
                }
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className="w-full pl-3 pr-10 py-2 text-xs border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a5f7a] focus:border-transparent bg-slate-50 text-slate-900 transition"
              />
              <button
                type="submit"
                className="absolute right-1 top-1/2 -translate-y-1/2 p-1.5 text-slate-500 hover:text-[#0a2540] transition"
                aria-label="Submit Search"
              >
                <Search className="w-4 h-4" />
              </button>
            </form>

            {/* National Initiative Emblems & Badges (MDL Hallmark) */}
            <div className="hidden sm:flex items-center gap-3 pl-3 border-l border-slate-200 shrink-0">
              <div className="flex flex-col items-center">
                <span className="text-[9px] font-black tracking-widest text-[#d97706] uppercase">
                  GIGW 3.0
                </span>
                <span className="text-[10px] font-bold text-slate-800">
                  WCAG AA
                </span>
              </div>

              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-orange-500 via-white to-green-600 p-[2px] shadow-sm flex items-center justify-center">
                <div className="w-full h-full bg-white rounded-full flex items-center justify-center text-[10px] font-black text-blue-900">
                  🇮🇳
                </div>
              </div>

              <Link
                to="/"
                className="px-2.5 py-1.5 rounded-lg text-xs font-bold text-[#0f2942] bg-slate-100 hover:bg-slate-200 border border-slate-300 transition flex items-center gap-1"
                title="Return to Prototypes Selection Hub"
              >
                <span>Hub</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </Link>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-100 transition"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* ================= 3. SIGNATURE MDL DEEP NAVY NAVIGATION BAR ================= */}
      <nav
        className={`w-full bg-[#0a2239] text-white border-y border-[#061828] transition-all duration-300 ${
          isSticky ? "fixed top-0 left-0 right-0 z-50 shadow-lg" : "relative"
        }`}
        role="navigation"
        aria-label="Main Navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="hidden lg:flex items-center flex-wrap">
            {navMenuItems.map((item, idx) => {
              const isActive =
                item.path === basePath
                  ? location.pathname === basePath
                  : location.pathname.startsWith(item.path);
              const hasSub = item.submenu && item.submenu.length > 0;

              return (
                <li
                  key={idx}
                  className="relative group"
                  onMouseEnter={() => hasSub && setActiveDropdown(item.label)}
                  onMouseLeave={() => hasSub && setActiveDropdown(null)}
                >
                  <Link
                    to={item.path}
                    className={`flex items-center gap-1 px-4 py-3 text-xs font-bold uppercase tracking-wider transition-colors border-b-2 ${
                      isActive
                        ? "text-amber-300 bg-[#123150] border-amber-400"
                        : "text-slate-100 border-transparent hover:text-amber-300 hover:bg-[#0f2e4c]"
                    }`}
                  >
                    <span>{item.label}</span>
                    {hasSub && (
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          activeDropdown === item.label
                            ? "rotate-180 text-amber-300"
                            : "text-slate-400"
                        }`}
                      />
                    )}
                    {item.badge && (
                      <span className="ml-1.5 px-1.5 py-0.2 text-[9px] bg-red-600 text-white font-black rounded animate-pulse">
                        {item.badge}
                      </span>
                    )}
                  </Link>

                  {/* Mega / Dropdown Menu */}
                  {hasSub && activeDropdown === item.label && (
                    <div className="absolute left-0 top-full w-64 bg-[#0a2239]/95 backdrop-blur-md border border-slate-700 shadow-2xl rounded-b-lg py-2 z-50">
                      {item.submenu.map((sub, sIdx) => (
                        <Link
                          key={sIdx}
                          to={sub.path}
                          className="block px-4 py-2.5 text-xs text-slate-200 hover:text-amber-300 hover:bg-[#123150] transition-colors border-b border-slate-800 last:border-0"
                        >
                          {sub.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              );
            })}

            {/* Quick Demonstration Shortcuts in Nav */}
            <li className="ml-auto flex items-center gap-2 py-2">
              <Link
                to="/evaluation"
                className="px-2.5 py-1 text-[11px] font-bold bg-amber-500/20 text-amber-300 hover:bg-amber-500/30 border border-amber-400/40 rounded transition flex items-center gap-1"
                title="RFP Evaluation Matrix (70+30 Marks)"
              >
                <Award className="w-3 h-3 text-amber-400" />
                <span>RFP 100 Marks</span>
              </Link>
              <Link
                to="/prototype-2"
                className="px-2.5 py-1 text-[11px] font-medium text-slate-300 hover:text-white hover:bg-slate-800 rounded transition"
              >
                Concept 2
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#07192b] border-t border-slate-800 px-4 py-4 space-y-3">
            <ul className="space-y-1">
              {navMenuItems.map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-2 rounded text-xs font-bold uppercase tracking-wider text-slate-100 hover:bg-[#123150] hover:text-amber-300 transition"
                  >
                    {item.label}
                  </Link>
                  {item.submenu && (
                    <div className="pl-4 space-y-1 mt-1 border-l-2 border-slate-700">
                      {item.submenu.map((sub, sIdx) => (
                        <Link
                          key={sIdx}
                          to={sub.path}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block px-3 py-1 text-xs text-slate-300 hover:text-amber-300 transition"
                        >
                          {sub.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>

            <div className="pt-3 border-t border-slate-800 flex flex-wrap gap-2 text-xs">
              <Link
                to="/"
                className="w-full text-center py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded font-bold"
              >
                Back to Selection Hub
              </Link>
              <Link
                to="/admin"
                className="w-full text-center py-2 bg-amber-500/20 text-amber-300 border border-amber-400/40 rounded font-bold"
              >
                Maker-Checker CMS Admin
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
