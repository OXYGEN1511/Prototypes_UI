import React, { useState, useEffect } from "react";
import { useApp } from "../../context/AppContext";
import { kalpasarStore } from "../../services/kalpasarStore";
import {
  X,
  Send,
  CheckCircle2,
  MessageSquare,
  AlertCircle,
  RefreshCw,
  Shield,
} from "lucide-react";

export const FeedbackModal = () => {
  const { isFeedbackOpen, setIsFeedbackOpen, showToast, language, t } =
    useApp();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    category: "General Query",
    subject: "",
    message: "",
    captchaInput: "",
  });

  const [captchaCode, setCaptchaCode] = useState("");
  const [captchaError, setCaptchaError] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Generate neat & clean 5-digit alphanumeric CAPTCHA (Mandated by RFP Clause 3.9 Item 17)
  const generateCaptcha = () => {
    const chars = "23456789ABCDEFGHJKLMNPQRSTUVWXYZ";
    let code = "";
    for (let i = 0; i < 5; i++) {
      code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaCode(code);
    setCaptchaError(false);
  };

  useEffect(() => {
    if (isFeedbackOpen) {
      generateCaptcha();
    }
  }, [isFeedbackOpen]);

  if (!isFeedbackOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      showToast("Please fill all required fields.");
      return;
    }

    // Verify Captcha
    if (formData.captchaInput.trim().toUpperCase() !== captchaCode) {
      setCaptchaError(true);
      showToast("Security Captcha does not match. Please try again.");
      generateCaptcha();
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      kalpasarStore.submitFeedback(formData);
      setIsSubmitting(false);
      setSubmitted(true);
      showToast("Citizen feedback registered successfully!");
    }, 600);
  };

  const handleClose = () => {
    setIsFeedbackOpen(false);
    setSubmitted(false);
    setFormData({
      name: "",
      email: "",
      mobile: "",
      category: "General Query",
      subject: "",
      message: "",
      captchaInput: "",
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden border border-slate-200">
        {/* Header */}
        <div className="bg-kalpasar-navy text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-kalpasar-cyan" />
            <h3 className="font-bold text-base">
              {language === "gujarati"
                ? "નાગરિક પ્રતિસાદ અને પૂછપરછ ફોર્મ"
                : language === "hindi"
                  ? "नागरिक प्रतिक्रिया एवं पूछताछ फॉर्म"
                  : "Citizen Feedback & Public Query"}
            </h3>
          </div>
          <button
            onClick={handleClose}
            className="text-slate-400 hover:text-white transition p-1"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="text-xl font-bold text-slate-800">
              {language === "gujarati"
                ? "આપનો પ્રતિસાદ નોંધાયો છે"
                : language === "hindi"
                  ? "आपकी प्रतिक्रिया दर्ज की गई है"
                  : "Thank You for Your Feedback"}
            </h4>
            <p className="text-sm text-slate-600">
              {language === "gujarati"
                ? "કલ્પસર વિભાગ નાગરિકોના સક્રિય સહકારની પ્રશંસા કરે છે. આ એન્ટ્રી CMS ડેશબોર્ડ પર ચકાસી શકાય છે."
                : language === "hindi"
                  ? "कल्पसर विभाग नागरिकों के सहयोग की सराहना करता है। यह प्रविष्टि CMS डैशबोर्ड पर देखी जा सकती है।"
                  : "Your submission has been securely recorded in the departmental database and can be reviewed in the CMS Admin panel."}
            </p>
            <button
              onClick={handleClose}
              className="mt-4 px-6 py-2.5 bg-kalpasar-navy hover:bg-slate-900 text-white rounded-xl text-sm font-semibold transition"
            >
              {language === "gujarati"
                ? "બંધ કરો"
                : language === "hindi"
                  ? "बंद करें"
                  : "Close"}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Full Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="e.g. Ramesh Patel"
                  className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-kalpasar-cyan focus:outline-none"
                />
              </div>
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Email Address <span className="text-rose-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="name@example.com"
                  className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-kalpasar-cyan focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  value={formData.mobile}
                  onChange={(e) =>
                    setFormData({ ...formData, mobile: e.target.value })
                  }
                  placeholder="+91 98765 43210"
                  className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-kalpasar-cyan focus:outline-none"
                />
              </div>
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Category <span className="text-rose-500">*</span>
                </label>
                <select
                  value={formData.category}
                  onChange={(e) =>
                    setFormData({ ...formData, category: e.target.value })
                  }
                  className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-kalpasar-cyan focus:outline-none bg-white"
                >
                  <option value="General Query">General Query</option>
                  <option value="Tender / RFP Inquiry">
                    Tender / RFP Inquiry
                  </option>
                  <option value="Environmental & EIA">
                    Environmental & EIA
                  </option>
                  <option value="Irrigation & Agriculture">
                    Irrigation & Agriculture
                  </option>
                  <option value="Website Grievance">Website Grievance</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-1">
                Subject
              </label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) =>
                  setFormData({ ...formData, subject: e.target.value })
                }
                placeholder="Brief summary of your inquiry"
                className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-kalpasar-cyan focus:outline-none"
              />
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-1">
                Message / Comments <span className="text-rose-500">*</span>
              </label>
              <textarea
                required
                rows={3}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                placeholder="Please enter your detailed observations or queries..."
                className="w-full border border-slate-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-kalpasar-cyan focus:outline-none resize-none"
              />
            </div>

            {/* Security Captcha verification (Clause 3.9 item 17) */}
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-slate-700 flex items-center gap-1.5 text-xs">
                  <Shield className="w-3.5 h-3.5 text-cyan-700" />
                  Security Verification (Captcha){" "}
                  <span className="text-rose-500">*</span>
                </span>
                <span className="text-[10px] text-slate-400">
                  RFP Clause 3.9 Item 17 Compliant
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="px-4 py-2 bg-slate-900 text-yellow-300 font-mono font-extrabold text-base tracking-widest rounded-lg select-none border border-slate-700 shadow-inner">
                  {captchaCode}
                </div>
                <button
                  type="button"
                  onClick={generateCaptcha}
                  className="p-2 bg-white hover:bg-slate-100 border border-slate-300 text-slate-600 rounded-lg transition"
                  title="Generate New Captcha"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
                <input
                  type="text"
                  required
                  placeholder="Enter characters"
                  value={formData.captchaInput}
                  onChange={(e) => {
                    setFormData({ ...formData, captchaInput: e.target.value });
                    setCaptchaError(false);
                  }}
                  className={`flex-1 border rounded-lg px-3 py-2 text-xs uppercase font-mono tracking-wider focus:outline-none focus:ring-2 ${
                    captchaError
                      ? "border-rose-500 focus:ring-rose-400 bg-rose-50/50"
                      : "border-slate-300 focus:ring-kalpasar-cyan"
                  }`}
                />
              </div>
              {captchaError && (
                <p className="text-[11px] text-rose-600 font-medium">
                  Invalid security code. Please enter the characters shown
                  above.
                </p>
              )}
            </div>

            <div className="flex items-center justify-between pt-2">
              <span className="text-[11px] text-slate-500 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 text-kalpasar-cyan" />
                Data stored in Local PostgreSQL simulation
              </span>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center gap-2 bg-kalpasar-navy hover:bg-slate-900 text-white font-semibold px-5 py-2.5 rounded-xl transition shadow"
              >
                <Send className="w-3.5 h-3.5" />
                <span>
                  {isSubmitting ? "Submitting..." : "Submit Feedback"}
                </span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
