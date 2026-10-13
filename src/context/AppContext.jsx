import React, { createContext, useContext, useState, useEffect } from "react";
import { translations } from "../data/translations";
import { kalpasarStore } from "../services/kalpasarStore";

const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => localStorage.getItem("kalpasar_lang") || "english");
  const [fontSize, setFontSize] = useState("normal"); // 'normal', 'large', 'xlarge'
  const [contrastMode, setContrastMode] = useState("normal"); // 'normal', 'high-contrast'
  const [theme, setTheme] = useState("light");
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
  const [visitorCount, setVisitorCount] = useState(142857);

  // Initialize visitor counter on load
  useEffect(() => {
    const count = kalpasarStore.incrementVisitorCount();
    setVisitorCount(count);
  }, []);

  // Update HTML lang attribute and localStorage
  useEffect(() => {
    localStorage.setItem("kalpasar_lang", language);
    const langCode = language === "gujarati" ? "gu" : language === "hindi" ? "hi" : "en";
    document.documentElement.lang = langCode;
  }, [language]);

  // Update body classes for font scale
  useEffect(() => {
    document.body.classList.remove("font-large", "font-xlarge");
    if (fontSize === "large") document.body.classList.add("font-large");
    if (fontSize === "xlarge") document.body.classList.add("font-xlarge");
  }, [fontSize]);

  // Update body classes for contrast
  useEffect(() => {
    if (contrastMode === "high-contrast") {
      document.body.classList.add("high-contrast");
    } else {
      document.body.classList.remove("high-contrast");
    }
  }, [contrastMode]);

  // Toast Helper
  const showToast = (message, duration = 3500) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, duration);
  };

  // Text-to-Speech Accessibility for Divyangjan
  const speakText = (text) => {
    if (!("speechSynthesis" in window)) {
      showToast("Speech synthesis not supported in this browser.");
      return;
    }

    window.speechSynthesis.cancel();
    if (!text) return;

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = language === "gujarati" ? "gu-IN" : language === "hindi" ? "hi-IN" : "en-IN";
    utterance.rate = 0.95;

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utterance);
    showToast("Reading aloud started...");
  };

  const stopSpeaking = () => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
    setIsSpeaking(false);
    showToast("Speech stopped.");
  };

  const t = translations[language] || translations.english;

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage,
        fontSize,
        setFontSize,
        contrastMode,
        setContrastMode,
        theme,
        setTheme,
        isSpeaking,
        speakText,
        stopSpeaking,
        toastMessage,
        showToast,
        searchQuery,
        setSearchQuery,
        isFeedbackOpen,
        setIsFeedbackOpen,
        visitorCount,
        t
      }}
    >
      {children}
      {/* Global Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-slate-900 text-white px-5 py-3 rounded-lg shadow-2xl border-l-4 border-kalpasar-cyan animate-bounce">
          <span className="text-sm font-medium">{toastMessage}</span>
          <button
            onClick={() => setToastMessage(null)}
            className="text-xs text-slate-400 hover:text-white ml-2"
          >
            ✕
          </button>
        </div>
      )}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
};
