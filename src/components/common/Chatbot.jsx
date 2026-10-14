import React, { useState, useRef, useEffect } from "react";
import { useApp } from "../../context/AppContext";
import {
  officialFAQs,
  keyProjectFacts,
  departmentInfo,
} from "../../data/kalpasarData";
import { sendChatMessage } from "../../services/aiChatService";
import {
  MessageSquare,
  X,
  Send,
  Bot,
  User,
  Volume2,
  Sparkles,
  HelpCircle,
  Loader2,
  Wifi,
} from "lucide-react";

export const Chatbot = () => {
  const { language, speakText, t } = useApp();
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      source: "NETBEANS SYSTEMS AI",
      textEn:
        "Namaste! I am the Kalpasar Divyangjan AI Assistant powered by NETBEANS SYSTEMS AI. How can I help you understand the Gulf of Khambhat Development Project today?",
      textGu:
        "નમસ્તે! હું કલ્પસર દિવ્યાંગજન AI સહાયક છું (NETBEANS SYSTEMS AI દ્વારા સંચાલિત). ખંભાતના અખાત વિકાસ યોજના અંગે હું આપને શું માહિતી આપી શકું?",
      textHi:
        "नमस्ते! मैं कल्पसर दिव्यांगजन AI सहायक हूं (NETBEANS SYSTEMS AI द्वारा संचालित)। खंभात की खाड़ी विकास परियोजना के संबंध में मैं आपकी क्या सहायता कर सकता हूं?",
    },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isLoading]);

  const quickQuestions = [
    {
      labelEn: "What is Kalpasar Dam?",
      labelGu: "કલ્પસર ડેમ શું છે?",
      labelHi: "कल्पसर बांध क्या है?",
      query: "What is the Kalpasar dam project?",
    },
    {
      labelEn: "Tidal Energy Capacity?",
      labelGu: "ભરતી ઊર્જા ક્ષમતા કેટલી?",
      labelHi: "ज्वारीय ऊर्जा क्षमता कितनी है?",
      query: "What is the tidal energy capacity of Kalpasar project?",
    },
    {
      labelEn: "Freshwater Reservoir Size?",
      labelGu: "મીઠા પાણીના સરોવરનું કદ?",
      labelHi: "मीठे पानी के जलाशय का आकार?",
      query: "What is the freshwater reservoir capacity of Kalpasar project?",
    },
    {
      labelEn: "Dahej-Bhavnagar Distance?",
      labelGu: "દહેજ-ભાવનગર અંતર બચત?",
      labelHi: "दहेज-भावनगर दूरी बचत?",
      query:
        "How much distance does the Kalpasar dam road save between Dahej and Bhavnagar?",
    },
  ];

  const handleSend = async (userText = input) => {
    const query = userText.trim();
    if (!query || isLoading) return;

    // Add user message
    const newMsg = {
      sender: "user",
      textEn: query,
      textGu: query,
      textHi: query,
    };

    setMessages((prev) => [...prev, newMsg]);
    setInput("");
    setIsLoading(true);

    try {
      // 1. Call Live Chatbot API (https://shreeram.tail902341.ts.net/api/chat)
      const result = await sendChatMessage(query);

      if (result.success && result.reply) {
        setMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            source: result.source || "NETBEANS SYSTEMS AI",
            isLive: true,
            textEn: result.reply,
            textGu: result.reply,
            textHi: result.reply,
          },
        ]);
        setIsLoading(false);
        return;
      }
    } catch (err) {
      console.warn(
        "Live API error, falling back to local Kalpasar dataset:",
        err,
      );
    }

    // 2. Intelligent fallback to Kalpasar knowledge base
    setTimeout(() => {
      const lower = query.toLowerCase();
      let botResponse = {
        sender: "bot",
        source: "Kalpasar Knowledge Base",
        isLive: false,
        textEn:
          "The Kalpasar Project is a multipurpose initiative of the Government of Gujarat creating a 30 km dam across the Gulf of Khambhat for tidal power, a 10,250 MCM freshwater reservoir, and regional transport connectivity.",
        textGu:
          "કલ્પસર યોજના ગુજરાત સરકારનો એક બહુહેતુક પ્રોજેક્ટ છે જેમાં ખંભાતના અખાત પર ૩૦ કિમી ડેમ બનાવીને ભરતી ઊર્જા, ૧૦,૨૫૦ એમસીએમ મીઠા પાણીનું સરોવર અને પરિવહન લિંક સ્થાપિત કરાશે.",
        textHi:
          "कल्पसर परियोजना गुजरात सरकार की एक बहुउद्देशीय पहल है जिसमें खंभात की खाड़ी पर 30 किमी का बांध बनाकर ज्वारीय ऊर्जा, 10,250 एमसीएम मीठे पानी का जलाशय और परिवहन संपर्क स्थापित किया जाएगा।",
      };

      if (
        lower.includes("dam") ||
        lower.includes("length") ||
        lower.includes("ડેમ") ||
        lower.includes("बांध")
      ) {
        botResponse = {
          sender: "bot",
          source: "Kalpasar Knowledge Base",
          isLive: false,
          textEn:
            "The proposed composite dam is 30 km long across the Gulf of Khambhat, connecting Bhavnagar and Dahej (Bharuch). It will include spillways, tidal sluices, and a 10-lane roadway.",
          textGu:
            "પ્રસ્તાવિત સંયુક્ત ડેમ ખંભાતના અખાતમાં ભાવનગર અને દહેજ (ભરૂચ) વચ્ચે ૩૦ કિમી લંબાઈ ધરાવે છે. તેમાં સ્પીલવે, ભરતી સ્લુઈસ અને ૧૦-લેન માર્ગનો સમાવેશ થાય છે.",
          textHi:
            "प्रस्तावित संयुक्त बांध खंभात की खाड़ी में भावनगर और दहेज (भरूच) को जोड़ने वाला 30 किमी लंबा बांध है। इसमें स्पिलवे, टाइडल स्लुइस और 10-लेन सड़क शामिल होगी।",
        };
      } else if (
        lower.includes("energy") ||
        lower.includes("power") ||
        lower.includes("tidal") ||
        lower.includes("વીજળી") ||
        lower.includes("ऊर्जा")
      ) {
        botResponse = {
          sender: "bot",
          source: "Kalpasar Knowledge Base",
          isLive: false,
          textEn:
            "The project has an estimated tidal clean power potential of 5,845 MW, utilizing the massive 8 to 11 meter tidal oscillations in the Gulf of Khambhat.",
          textGu:
            "આ પ્રોજેક્ટ ખંભાતના અખાતમાં ૮ થી ૧૧ મીટરના ઊંચા ભરતી મોજાઓનો ઉપયોગ કરીને ૫,૮૪૫ મેગાવોટ સ્વચ્છ હરિત વીજળી ઉત્પન્ન કરશે.",
          textHi:
            "यह परियोजना खंभात की खाड़ी में 8 से 11 मीटर के ज्वारीय उतार-चढ़ाव का उपयोग करके 5,845 मेगावाट स्वच्छ हरित बिजली उत्पन्न करेगी।",
        };
      } else if (
        lower.includes("reservoir") ||
        lower.includes("water") ||
        lower.includes("freshwater") ||
        lower.includes("પાણી") ||
        lower.includes("સરોવર")
      ) {
        botResponse = {
          sender: "bot",
          source: "Kalpasar Knowledge Base",
          isLive: false,
          textEn:
            "The freshwater lake will have an immense live storage capacity of 10,250 MCM, impounding floodwaters from Narmada, Mahi, Sabarmati, and Dhadhar rivers.",
          textGu:
            "મીઠા પાણીનું સરોવર ૧૦,૨૫૦ એમસીએમ જીવંત સંગ્રહ ક્ષમતા ધરાવશે, જેમાં નર્મદા, મહી, સાબરમતી અને ઢાઢર નદીઓનું પાણી સંગ્રહિત થશે.",
          textHi:
            "मीठे पानी की झील में 10,250 एमसीएम की विशाल जल संचयन क्षमता होगी, जिसमें नर्मदा, माही, साबरमती और ढाढर नदियों का बाढ़ का पानी संचित होगा।",
        };
      } else if (
        lower.includes("distance") ||
        lower.includes("road") ||
        lower.includes("travel") ||
        lower.includes("અંતર") ||
        lower.includes("દૂરી")
      ) {
        botResponse = {
          sender: "bot",
          source: "Kalpasar Knowledge Base",
          isLive: false,
          textEn:
            "A 10-lane roadway over the 30 km dam will reduce Dahej-Bhavnagar travel distance from 360 km to just 135 km, saving 225 km of travel distance and over 5 hours of time.",
          textGu:
            "ડેમ પર ૩૦ કિમી ૧૦-લેન માર્ગ દહેજ અને ભાવનગર વચ્ચેનું અંતર ૩૬૦ કિમીથી ઘટાડીને માત્ર ૧૩૫ કિમી કરશે, જેનાથી ૨૨૫ કિમી અને ૫ કલાકનો સમય બચશે.",
          textHi:
            "बांध के ऊपर 30 किमी का 10-लेन मार्ग दहेज और भावनगर के बीच की दूरी 360 किमी से घटकर मात्र 135 किमी कर देगा, जिससे 225 किमी और 5 घंटे की बचत होगी।",
        };
      } else if (
        lower.includes("tender") ||
        lower.includes("rfp") ||
        lower.includes("ટેન્ડર") ||
        lower.includes("निविदा")
      ) {
        botResponse = {
          sender: "bot",
          source: "Kalpasar Knowledge Base",
          isLive: false,
          textEn:
            "Current Active RFP: 'Selection of Service Provider for Design, Development and Maintenance of Website for Kalpasar Department' (Ref: GEM/2026/B/XXXXXX). Please visit the Tenders page for RFP documents.",
          textGu:
            "હાલમાં ચાલુ RFP: 'કલ્પસર વિભાગની વેબસાઇટ ડિઝાઇન, વિકાસ અને જાળવણી' (સંદર્ભ: GEM/2026/B/XXXXXX). વધુ વિગતો માટે કૃપા કરીને ટેન્ડર વિભાગ જુઓ.",
          textHi:
            "वर्तमान सक्रिय RFP: 'कल्पसर विभाग की वेबसाइट डिजाइन, विकास एवं रखरखाव' (संदर्भ: GEM/2026/B/XXXXXX)। दस्तावेजों हेतु कृपया निविदा अनुभाग देखें।",
        };
      }

      setMessages((prev) => [...prev, botResponse]);
      setIsLoading(false);
    }, 400);
  };

  const getLocalizedText = (msg) => {
    if (language === "gujarati") return msg.textGu || msg.textEn;
    if (language === "hindi") return msg.textHi || msg.textEn;
    return msg.textEn;
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {/* Launcher Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2.5 bg-kalpasar-navy hover:bg-slate-900 text-white px-4 py-3 rounded-full shadow-2xl border-2 border-kalpasar-cyan hover:scale-105 transition-all duration-200 group"
          aria-label="Open Divyangjan AI Assistant"
        >
          <div className="relative">
            <Bot className="w-6 h-6 text-kalpasar-cyan animate-pulse" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full ring-2 ring-slate-900"></span>
          </div>
          <div className="text-left hidden sm:block">
            <div className="text-xs font-bold text-white flex items-center gap-1">
              Kalpasar AI Assistant
              <Sparkles className="w-3 h-3 text-kalpasar-gold" />
            </div>
            <div className="text-[10px] text-cyan-300 flex items-center gap-1 font-mono">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full inline-block"></span>
              Live NETBEANS SYSTEMS AI
            </div>
          </div>
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="w-[360px] sm:w-[420px] h-[550px] bg-white rounded-2xl shadow-2xl border border-slate-300 flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-200">
          {/* Header */}
          <div className="bg-kalpasar-navy text-white px-4 py-3 flex items-center justify-between border-b border-slate-700">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-kalpasar-blue/50 flex items-center justify-center border border-cyan-400">
                <Bot className="w-5 h-5 text-cyan-300" />
              </div>
              <div>
                <h3 className="text-sm font-bold flex items-center gap-1.5">
                  Kalpasar AI Assistant
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-1.5 py-0.2 rounded font-normal flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping"></span>
                    Live AI Connected
                  </span>
                </h3>
                {/* <p className="text-[10px] text-slate-300 font-mono">
                  Endpoint: shreeram.tail902341.ts.net &bull; Bearer Auth
                </p> */}
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
              aria-label="Close Assistant"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick FAQ Suggestion Pills */}
          <div className="bg-slate-50 border-b border-slate-200 px-3 py-2 flex items-center gap-1.5 overflow-x-auto text-[11px] scrollbar-none">
            <span className="text-slate-400 shrink-0 flex items-center gap-1 text-[10px]">
              <HelpCircle className="w-3 h-3" /> Ask:
            </span>
            {quickQuestions.map((q, idx) => (
              <button
                key={idx}
                onClick={() =>
                  handleSend(
                    language === "gujarati"
                      ? q.labelGu
                      : language === "hindi"
                        ? q.labelHi
                        : q.labelEn,
                  )
                }
                className="shrink-0 bg-white hover:bg-kalpasar-cyan/10 hover:text-kalpasar-navy hover:border-kalpasar-cyan border border-slate-200 text-slate-700 px-2.5 py-1 rounded-full transition text-[11px] font-medium"
              >
                {language === "gujarati"
                  ? q.labelGu
                  : language === "hindi"
                    ? q.labelHi
                    : q.labelEn}
              </button>
            ))}
          </div>

          {/* Messages Feed */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-slate-50/50">
            {messages.map((m, idx) => {
              const isBot = m.sender === "bot";
              const text = getLocalizedText(m);
              return (
                <div
                  key={idx}
                  className={`flex items-start gap-2.5 ${isBot ? "" : "flex-row-reverse"}`}
                >
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 text-xs font-bold ${
                      isBot
                        ? "bg-kalpasar-navy text-cyan-300"
                        : "bg-kalpasar-gold text-slate-900"
                    }`}
                  >
                    {isBot ? (
                      <Bot className="w-4 h-4" />
                    ) : (
                      <User className="w-4 h-4" />
                    )}
                  </div>
                  <div
                    className={`max-w-[80%] rounded-2xl px-3.5 py-2.5 text-xs leading-relaxed shadow-sm ${
                      isBot
                        ? "bg-white text-slate-800 border border-slate-200 rounded-tl-none"
                        : "bg-kalpasar-navy text-white rounded-tr-none"
                    }`}
                  >
                    <p>{text}</p>
                    {isBot && (
                      <div className="mt-2 pt-1 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-400">
                        <span className="flex items-center gap-1 font-mono text-[10px] text-emerald-700 font-semibold">
                          <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                          {m.source || "NETBEANS SYSTEMS AI"}
                        </span>
                        <button
                          onClick={() => speakText(text)}
                          className="flex items-center gap-1 text-cyan-700 hover:text-cyan-900 font-medium"
                          title="Read this answer aloud"
                        >
                          <Volume2 className="w-3 h-3" />
                          Listen
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}

            {/* Loading Indicator */}
            {isLoading && (
              <div className="flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-full bg-kalpasar-navy text-cyan-300 flex items-center justify-center shrink-0 text-xs font-bold">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="bg-white text-slate-600 border border-slate-200 rounded-2xl rounded-tl-none px-4 py-2.5 text-xs flex items-center gap-2 shadow-sm">
                  <Loader2 className="w-3.5 h-3.5 animate-spin text-kalpasar-cyan" />
                  <span>NETBEANS SYSTEMS AI is thinking...</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 bg-white border-t border-slate-200 flex items-center gap-2">
            <input
              type="text"
              value={input}
              disabled={isLoading}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder={
                language === "gujarati"
                  ? "પ્રશ્ન પૂછો (જેમ કે ડેમ, વીજળી, સરોવર)..."
                  : language === "hindi"
                    ? "प्रश्न पूछें (जैसे बांध, ऊर्जा, जलाशय)..."
                    : "Ask about Kalpasar Dam, tidal power, lake..."
              }
              className="flex-1 text-xs border border-slate-300 rounded-xl px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-kalpasar-cyan focus:border-transparent bg-slate-50 disabled:opacity-50"
            />
            <button
              onClick={() => handleSend()}
              disabled={!input.trim() || isLoading}
              className="p-2.5 bg-kalpasar-navy hover:bg-slate-900 disabled:opacity-40 text-white rounded-xl transition shadow"
              aria-label="Send message"
            >
              <Send className="w-4 h-4 text-kalpasar-cyan" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
