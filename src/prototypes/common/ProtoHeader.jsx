import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useApp } from "../../context/AppContext";
import { Emblem } from "../../components/common/Emblem";
import { AccessibilityBar } from "../../components/common/AccessibilityBar";
import {
  Search,
  Menu,
  X,
  FileText,
  HelpCircle,
  Phone,
  ShieldCheck,
  ChevronDown,
  Sparkles,
  Waves,
  Landmark,
  Eye,
  Sliders,
  ExternalLink
} from "lucide-react";

import { Proto3Header } from "../prototype3/components/Proto3Header";

export const ProtoHeader = ({ variant = "modern", basePath = "/prototype-2" }) => {
  if (variant === "mdl") {
    return <Proto3Header basePath={basePath} />;
  }

  const { language, searchQuery, setSearchQuery, setIsFeedbackOpen, t } = useApp();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navLinks = [
    { label: t.navHome, path: `${basePath}` },
    {
      label: t.navDepartment,
      path: `${basePath}/department`,
      children: [
        { label: "Vision & Objectives", path: `${basePath}/department` },
        { label: "Leadership & Administration", path: `${basePath}/department` },
        { label: "Organization Hierarchy (Clause 3.3)", path: `${basePath}/department` },
        { label: "Government Holidays 2026", path: `${basePath}/department` }
      ]
    },
    { label: t.navPurposes, path: `${basePath}/purposes` },
    { label: t.navPerformance, path: `${basePath}/performance` },
    { label: t.navPolicies, path: `${basePath}/policies` },
    { label: t.navTenders, path: `${basePath}/tenders` },
    { label: t.navContact, path: `${basePath}/contact` }
  ];

  const isClassic = variant === "classic";
  const isAccessible = variant === "accessible";
  const isModern = variant === "modern";

  return (
    <header className="w-full relative z-30">
      {/* 1. GIGW 3.0 Accessibility Toolbar */}
      <AccessibilityBar
        currentPrototype={
          isClassic
            ? "Concept 1: Official Classic"
            : isAccessible
            ? "Concept 3: Accessibility-First"
            : "Concept 2: Modern Citizen-First"
        }
      />

      {/* 2. Government Identity Masthead */}
      <div
        className={`px-4 sm:px-6 lg:px-8 py-3 transition-all ${
          isClassic
            ? "bg-[#0b1d33] text-white border-b-2 border-amber-500/80 shadow-md"
            : isAccessible
            ? "bg-black text-white border-b-4 border-yellow-400"
            : "bg-white/95 backdrop-blur-md text-slate-900 border-b border-slate-200/80 shadow-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          {/* Emblem & Department Title */}
          <Link to={basePath} className="flex items-center gap-3.5 group">
            <div className="relative">
              <Emblem className="w-12 h-12 sm:w-14 sm:h-14 group-hover:scale-105 transition-transform duration-300 shrink-0" />
              {isModern && (
                <span className="absolute -bottom-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white animate-pulse"></span>
              )}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span
                  className={`text-[11px] font-extrabold tracking-wider uppercase ${
                    isClassic
                      ? "text-kalpasar-gold"
                      : isAccessible
                      ? "text-yellow-400"
                      : "text-amber-700"
                  }`}
                >
                  {t.govtName}
                </span>
                <span className="hidden sm:inline text-slate-400 text-xs">•</span>
                <span className="hidden sm:inline text-[11px] text-slate-500 font-medium tracking-tight">
                  {language === "gujarati"
                    ? "નર્મદા, જળસંપત્તિ અને કલ્પસર વિભાગ"
                    : language === "hindi"
                    ? "नर्मदा, जल संसाधन एवं कल्पसर विभाग"
                    : "Water Resources & Kalpasar Initiative"}
                </span>
              </div>

              <h1
                className={`text-lg sm:text-xl md:text-2xl font-black tracking-tight leading-tight ${
                  isClassic
                    ? "text-white font-serif"
                    : isAccessible
                    ? "text-white"
                    : "bg-gradient-to-r from-slate-950 via-slate-900 to-kalpasar-navy bg-clip-text text-transparent"
                }`}
              >
                {t.deptName}
              </h1>

              <p
                className={`text-xs hidden md:flex items-center gap-1.5 font-medium ${
                  isClassic || isAccessible ? "text-slate-300" : "text-slate-600"
                }`}
              >
                <Waves className="w-3.5 h-3.5 text-kalpasar-cyan inline" />
                <span>{t.tagline}</span>
              </p>
            </div>
          </Link>

          {/* Quick Header Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/admin"
              className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-amber-500/10 hover:bg-amber-500/20 text-amber-700 dark:text-amber-300 border border-amber-300/60 transition flex items-center gap-1.5"
            >
              <Sliders className="w-3.5 h-3.5" />
              <span>Maker-Checker CMS</span>
            </Link>

            <button
              onClick={() => setIsFeedbackOpen(true)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 shadow-sm hover:shadow ${
                isClassic
                  ? "bg-kalpasar-gold hover:bg-yellow-500 text-slate-950"
                  : isAccessible
                  ? "bg-yellow-400 hover:bg-yellow-300 text-black font-black border-2 border-white"
                  : "bg-gradient-to-r from-kalpasar-navy to-slate-900 hover:from-slate-900 hover:to-kalpasar-navy text-white shadow-slate-900/10"
              }`}
            >
              <FileText className="w-3.5 h-3.5 text-kalpasar-cyan" />
              <span>{t.citizenFeedback}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-xl lg:hidden transition ${
              isClassic || isAccessible
                ? "text-white hover:bg-slate-800"
                : "text-slate-700 hover:bg-slate-100"
            }`}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* 3. Primary Navigation Bar */}
      <nav
        className={`hidden lg:block transition-all ${
          isClassic
            ? "bg-[#0f2942] text-white border-b border-slate-700 shadow"
            : isAccessible
            ? "bg-yellow-400 text-black border-b-2 border-black font-black"
            : "bg-gradient-to-r from-[#0c233c] via-[#0f2d4a] to-[#0a1c2e] text-white border-b border-cyan-900/40 shadow-md"
        }`}
        aria-label="Main Navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <ul className="flex items-center space-x-1 py-1">
            {navLinks.map((item, idx) => {
              const isActive = location.pathname === item.path;
              return (
                <li
                  key={idx}
                  className="relative group"
                  onMouseEnter={() => item.children && setActiveDropdown(idx)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    to={item.path}
                    className={`px-3.5 py-2.5 rounded-lg text-xs font-semibold tracking-wide transition-all flex items-center gap-1 ${
                      isAccessible
                        ? isActive
                          ? "bg-black text-yellow-400 underline font-black"
                          : "text-black hover:bg-yellow-300"
                        : isActive
                        ? isClassic
                          ? "bg-kalpasar-gold text-slate-950 font-bold shadow-sm"
                          : "bg-kalpasar-cyan text-slate-950 font-bold shadow-md shadow-cyan-900/30"
                        : "text-slate-200 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    <span>{item.label}</span>
                    {item.children && <ChevronDown className="w-3 h-3 opacity-60" />}
                  </Link>

                  {/* Dropdown for sub-items */}
                  {item.children && activeDropdown === idx && (
                    <div className="absolute top-full left-0 mt-0 w-64 bg-slate-900 text-white border border-slate-700 rounded-xl shadow-2xl p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                      {item.children.map((sub, sIdx) => (
                        <Link
                          key={sIdx}
                          to={sub.path}
                          className="block px-3 py-2 text-xs text-slate-200 hover:text-white hover:bg-slate-800 rounded-lg transition"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              );
            })}
          </ul>

          {/* Quick Search in Nav */}
          <div className="relative my-1.5">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.searchPlaceholder.slice(0, 26) + "..."}
              className={`text-xs pl-8 pr-3 py-1.5 rounded-full focus:outline-none transition-all w-48 focus:w-64 ${
                isAccessible
                  ? "bg-white text-black border-2 border-black placeholder:text-gray-700"
                  : "bg-slate-800/90 text-white placeholder:text-slate-400 border border-slate-700/80 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20"
              }`}
            />
            <Search className="w-3.5 h-3.5 absolute left-2.5 top-2.5 text-slate-400" />
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 text-white border-b border-slate-800 p-4 space-y-2 animate-in slide-in-from-top-4 duration-200">
          <div className="mb-3">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.searchPlaceholder}
              className="w-full text-xs p-2.5 rounded-xl bg-slate-800 text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>
          {navLinks.map((item, idx) => (
            <Link
              key={idx}
              to={item.path}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-semibold text-slate-200 hover:text-white hover:bg-slate-800 rounded-lg"
            >
              {item.label}
            </Link>
          ))}
          <button
            onClick={() => {
              setIsFeedbackOpen(true);
              setMobileMenuOpen(false);
            }}
            className="w-full mt-3 py-2.5 bg-kalpasar-cyan text-slate-950 font-bold rounded-xl text-xs shadow-md"
          >
            {t.citizenFeedback}
          </button>
        </div>
      )}
    </header>
  );
};
