import React, { useEffect, useRef } from "react";
import { useApp } from "../../context/AppContext";
import { Proto3Header } from "./components/Proto3Header";
import { Proto3Banner } from "./components/Proto3Banner";
import { Proto3Announcements } from "./components/Proto3Announcements";
import { Proto3AboutDepartment } from "./components/Proto3AboutDepartment";
import { Proto3Portfolio } from "./components/Proto3Portfolio";
import { Proto3OfferingsWhatsNew } from "./components/Proto3OfferingsWhatsNew";
import { Proto3Dashboard } from "./components/Proto3Dashboard";
import { Proto3SocialMedia } from "./components/Proto3SocialMedia";
import { Proto3EventGallery } from "./components/Proto3EventGallery";
import { Proto3PartnersLogos } from "./components/Proto3PartnersLogos";
import { Proto3Footer } from "./components/Proto3Footer";
import { Chatbot } from "../../components/common/Chatbot";
import { FeedbackModal } from "../../components/common/FeedbackModal";

export const Prototype3Home = () => {
  const mainContentRef = useRef(null);
  const { language, t } = useApp();

  // Accessibility focus handling on load (MDL Main style)
  useEffect(() => {
    if (window.location.hash) return;
    if (
      mainContentRef.current &&
      !window.matchMedia("(pointer: fine)").matches
    ) {
      mainContentRef.current.focus({ preventScroll: true });
    }
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col justify-between font-sans selection:bg-amber-400 selection:text-slate-950">
      {/* 1. Header (MDL Architecture) */}
      <Proto3Header basePath="/prototype-3" />

      {/* Main Content Area */}
      <main
        id="main-content"
        ref={mainContentRef}
        className="flex-1 w-full outline-none"
        role="main"
        aria-label={
          language === "gujarati"
            ? "મુખ્ય વિષયવસ્તુ - કલ્પસર વિભાગ"
            : language === "hindi"
              ? "मुख्य सामग्री - कल्पसर विभाग"
              : "Main Content - Kalpasar Department"
        }
        tabIndex={-1}
      >
        {/* Screen Reader Status Announcement */}
        <div
          className="sr-only"
          role="status"
          aria-live="polite"
          aria-atomic="true"
        >
          {language === "gujarati"
            ? "કલ્પસર વિભાગ મુખ્ય પોર્ટલ લોડ થયું છે. કલ્પસર પ્રભાગ, ગુજરાત સરકાર."
            : language === "hindi"
              ? "कल्पसर विभाग मुख्य पोर्टल लोड हो गया है। गुजरात सरकार।"
              : "Kalpasar Department Portal loaded. Government of Gujarat."}
        </div>

        {/* 2. Hero Banner Slider */}
        <section aria-label="Hero Banner Slider" className="w-full">
          <Proto3Banner basePath="/prototype-3" />
        </section>

        {/* 3. Announcements Ticker Section */}
        <section aria-label="Announcements & Circulars" className="w-full">
          <Proto3Announcements basePath="/prototype-3" />
        </section>

        {/* 4. About Department Section */}
        <section aria-label="About Department Mandate" className="w-full">
          <Proto3AboutDepartment basePath="/prototype-3" />
        </section>

        {/* 5. Product & Strategic Portfolio Section (MDL Signature) */}
        <section aria-label="Modernized Project Portfolio" className="w-full">
          <Proto3Portfolio basePath="/prototype-3" />
        </section>

        {/* 6. Offerings & What's New Dual Hub */}
        <section aria-label="Offerings & What's New" className="w-full">
          <Proto3OfferingsWhatsNew basePath="/prototype-3" />
        </section>

        {/* 7. Dashboard, Media Feature & Important Links */}
        <section aria-label="Dashboard & Key Metrics" className="w-full">
          <Proto3Dashboard basePath="/prototype-3" />
        </section>

        {/* 8. Social Media Presence */}
        <section aria-label="Social Media Presence" className="w-full">
          <Proto3SocialMedia basePath="/prototype-3" />
        </section>

        {/* 9. Event & Survey Media Gallery */}
        <section aria-label="Event & Survey Media Gallery" className="w-full">
          <Proto3EventGallery basePath="/prototype-3" />
        </section>

        {/* 10. Partner Government Initiatives Logos */}
        <section aria-label="Partner Initiatives" className="w-full">
          <Proto3PartnersLogos />
        </section>
      </main>

      {/* 11. Footer (MDL Architecture) */}
      <Proto3Footer basePath="/prototype-3" />

      {/* Global Interactive Elements */}
      <Chatbot />
      <FeedbackModal />
    </div>
  );
};

export default Prototype3Home;
