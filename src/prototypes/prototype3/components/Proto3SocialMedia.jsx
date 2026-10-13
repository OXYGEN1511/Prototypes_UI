import React, { useState } from "react";
import { useApp } from "../../../context/AppContext";
import {
  Share2,
  ExternalLink,
  MessageSquare,
  ThumbsUp,
  Repeat2,
  Calendar,
  CheckCircle2,
} from "lucide-react";

export const Proto3SocialMedia = ({ basePath = "/prototype-3" }) => {
  const { language } = useApp();
  const [activeSocialTab, setActiveSocialTab] = useState("TWITTER");

  const tweets = [
    {
      id: "tw-1",
      date: "Oct 12, 2026",
      handle: "@KalpasarGovGuj",
      content:
        "High-level review meeting chaired on Gulf of Khambhat 30 km composite dam alignment. Geotechnical soil boreholes in Dahej-Bhavnagar corridor confirmed favorable marine substrata for tidal caissons. #Gujarat #TidalEnergy #Infrastructure",
      likes: 412,
      retweets: 184,
    },
    {
      id: "tw-2",
      date: "Oct 08, 2026",
      handle: "@KalpasarGovGuj",
      content:
        "Clause 2.18.5 Prototype Website Suite deployed for technical evaluation. Features authentic 10,250 MCM freshwater reservoir metrics, Divyangjan AI voice assistant & 2-stage Maker-Checker CMS. #DigitalGujarat #GovTech",
      likes: 628,
      retweets: 247,
    },
    {
      id: "tw-3",
      date: "Oct 02, 2026",
      handle: "@KalpasarGovGuj",
      content:
        "Salinity ingress monitoring across 12 coastal talukas reports promising groundwater recharge projections following Phase-1 diversion models. #Kalpasar #WaterSecurity",
      likes: 389,
      retweets: 119,
    },
  ];

  return (
    <section
      aria-label="Official Social Media Stream"
      className="bg-slate-50 py-14 sm:py-16 w-full border-b border-slate-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#159895]">
              {language === "gujarati"
                ? "સોશિયલ મીડિયા અને જનસંપર્ક"
                : language === "hindi"
                  ? "सोशल मीडिया एवं जनसंपर्क"
                  : "Public Engagement & Media"}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0a2540] tracking-tight">
              {language === "gujarati"
                ? "વિભાગીય સોશિયલ મીડિયા અપડેટ્સ"
                : language === "hindi"
                  ? "विभागीय सोशल मीडिया उपस्थिति"
                  : "Social Media Presence & Updates"}
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveSocialTab("TWITTER")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                activeSocialTab === "TWITTER"
                  ? "bg-[#0a2540] text-white"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              Twitter / X
            </button>
            <button
              onClick={() => setActiveSocialTab("YOUTUBE")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                activeSocialTab === "YOUTUBE"
                  ? "bg-[#0a2540] text-white"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              YouTube Tour
            </button>
            <button
              onClick={() => setActiveSocialTab("FACEBOOK")}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                activeSocialTab === "FACEBOOK"
                  ? "bg-[#0a2540] text-white"
                  : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
              }`}
            >
              Facebook Stream
            </button>
          </div>
        </div>

        {/* Dynamic Social Content */}
        {activeSocialTab === "TWITTER" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tweets.map((tw) => (
              <div
                key={tw.id}
                className="bg-white border border-slate-200 hover:border-[#1a5f7a] rounded-2xl p-5 shadow-sm hover:shadow-md transition flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-[#0a2540] text-amber-400 font-black text-xs flex items-center justify-center">
                        X
                      </div>
                      <div>
                        <span className="font-extrabold text-xs text-slate-900 block leading-tight">
                          Kalpasar Dept, Gujarat
                        </span>
                        <span className="text-[11px] text-slate-500 font-mono">
                          {tw.handle}
                        </span>
                      </div>
                    </div>
                    <span className="text-[10px] text-slate-400">
                      {tw.date}
                    </span>
                  </div>

                  <p className="text-xs text-slate-700 leading-relaxed">
                    {tw.content}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span className="flex items-center gap-1 hover:text-rose-600 transition cursor-pointer">
                    <ThumbsUp className="w-3.5 h-3.5" />
                    <span>{tw.likes}</span>
                  </span>
                  <span className="flex items-center gap-1 hover:text-emerald-600 transition cursor-pointer">
                    <Repeat2 className="w-3.5 h-3.5" />
                    <span>{tw.retweets}</span>
                  </span>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1a5f7a] hover:underline flex items-center gap-0.5 text-[11px]"
                  >
                    <span>View Post</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeSocialTab === "YOUTUBE" && (
          <div className="bg-white border border-slate-200 rounded-2xl p-6 text-center space-y-4">
            <div className="max-w-xl mx-auto space-y-2">
              <h4 className="text-lg font-bold text-slate-900">
                Official YouTube Video Channel &bull; Kalpasar Department
              </h4>
              <p className="text-xs text-slate-600">
                Subscribe for live webinars, oceanographic survey broadcasts,
                and high-level government presentations on the Gulf of Khambhat
                Development Project.
              </p>
            </div>
            <div className="flex justify-center">
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold text-xs rounded-xl transition shadow flex items-center gap-2"
              >
                <span>Subscribe on YouTube</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}

        {activeSocialTab === "FACEBOOK" && (
          <div className="bg-white border border-slate-200 rounded-2xl p-6 text-center space-y-4">
            <div className="max-w-xl mx-auto space-y-2">
              <h4 className="text-lg font-bold text-slate-900">
                Official Facebook Community Page
              </h4>
              <p className="text-xs text-slate-600">
                Connecting citizens, farmers, and industry stakeholders with
                authentic project progress, photo updates, and public
                consultations.
              </p>
            </div>
            <div className="flex justify-center">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs rounded-xl transition shadow flex items-center gap-2"
              >
                <span>Follow on Facebook</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
