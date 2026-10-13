import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { kalpasarStore } from "../../services/kalpasarStore";
import { useApp } from "../../context/AppContext";
import { Emblem } from "../../components/common/Emblem";
import {
  Sliders,
  CheckCircle2,
  XCircle,
  Clock,
  Plus,
  Send,
  Eye,
  FileText,
  MessageSquare,
  Users,
  Shield,
  RotateCcw,
  Search,
  ArrowRight,
  TrendingUp,
  AlertTriangle,
  History,
  Trash2
} from "lucide-react";

export const AdminPortal = () => {
  const { showToast } = useApp();
  const [currentUser, setCurrentUser] = useState({
    name: "S. K. Joshi (Superintending Engineer)",
    role: "CHECKER" // 'MAKER' or 'CHECKER'
  });
  const [activeTab, setActiveTab] = useState("workflow"); // 'workflow', 'history', 'feedback', 'new'
  const [notices, setNotices] = useState([]);
  const [history, setHistory] = useState([]);
  const [feedbacks, setFeedbacks] = useState([]);
  const [statusFilter, setStatusFilter] = useState("ALL");
  const [selectedNotice, setSelectedNotice] = useState(null);
  const [actionRemarks, setActionRemarks] = useState("");

  // New Draft Form State
  const [newDraft, setNewDraft] = useState({
    titleEn: "",
    titleGu: "",
    titleHi: "",
    category: "Circulars",
    refNo: "KLP/2026/ADM/101",
    summaryEn: "",
    fileSize: "1.4 MB",
    fileType: "PDF"
  });

  const loadData = () => {
    setNotices(kalpasarStore.getNotices());
    setHistory(kalpasarStore.getWorkflowHistory());
    setFeedbacks(kalpasarStore.getFeedbackList());
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleCreateDraft = (e) => {
    e.preventDefault();
    if (!newDraft.titleEn || !newDraft.summaryEn) {
      showToast("Please provide at least English title and summary.");
      return;
    }

    const created = kalpasarStore.createDraft(
      {
        ...newDraft,
        titleGu: newDraft.titleGu || newDraft.titleEn,
        titleHi: newDraft.titleHi || newDraft.titleEn
      },
      currentUser.name
    );

    loadData();
    showToast(`Draft ${created.id} created successfully!`);
    setActiveTab("workflow");
    setNewDraft({
      titleEn: "",
      titleGu: "",
      titleHi: "",
      category: "Circulars",
      refNo: "KLP/2026/ADM/101",
      summaryEn: "",
      fileSize: "1.4 MB",
      fileType: "PDF"
    });
  };

  const handleSubmitForApproval = (id) => {
    kalpasarStore.submitForApproval(id, currentUser.name, "Submitted for executive verification");
    loadData();
    showToast(`Notice ${id} submitted to Checker for approval!`);
  };

  const handleApprove = (id) => {
    const remarks = actionRemarks || "Verified against departmental guidelines and approved.";
    kalpasarStore.approveNotice(id, currentUser.name, remarks);
    setActionRemarks("");
    setSelectedNotice(null);
    loadData();
    showToast(`Notice ${id} APPROVED by Checker.`);
  };

  const handleReject = (id) => {
    const remarks = actionRemarks || "Deficiencies noted. Please update draft.";
    kalpasarStore.rejectNotice(id, currentUser.name, remarks);
    setActionRemarks("");
    setSelectedNotice(null);
    loadData();
    showToast(`Notice ${id} REJECTED back to Maker.`);
  };

  const handlePublish = (id) => {
    kalpasarStore.publishNotice(id, currentUser.name);
    loadData();
    showToast(`Notice ${id} is now PUBLISHED and live on public websites!`);
  };

  const handleDelete = (id) => {
    kalpasarStore.deleteNotice(id);
    loadData();
    showToast(`Notice ${id} deleted.`);
  };

  const handleResetDemo = () => {
    if (window.confirm("Reset all notices and workflow records to initial demonstration state?")) {
      kalpasarStore.resetToDemo();
      loadData();
      showToast("Store reset to clean seed demo state.");
    }
  };

  const filteredNotices = notices.filter((n) => {
    if (statusFilter === "ALL") return true;
    return n.status === statusFilter;
  });

  const pendingCount = notices.filter((n) => n.status === "PENDING_APPROVAL").length;
  const publishedCount = notices.filter((n) => n.status === "PUBLISHED").length;
  const draftCount = notices.filter((n) => n.status === "DRAFT").length;

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      {/* Top Admin Header */}
      <header className="bg-slate-900 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Emblem className="w-9 h-9" />
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] uppercase font-bold text-kalpasar-gold tracking-wider">
                  Government of Gujarat
                </span>
                <span className="text-[10px] bg-amber-500/20 text-amber-300 border border-amber-500/40 px-1.5 py-0.2 rounded">
                  Clause 2.18.3 Maker-Checker CMS
                </span>
              </div>
              <h1 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                Kalpasar Department Administration & Publishing Portal
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Role Switcher for Demonstration */}
            <div className="flex items-center bg-slate-800 rounded-lg p-1 border border-slate-700 text-xs">
              <span className="text-slate-400 px-2 font-medium">Demo Role:</span>
              <button
                onClick={() =>
                  setCurrentUser({
                    name: "Ramesh Dave (Section Officer)",
                    role: "MAKER"
                  })
                }
                className={`px-2.5 py-1 rounded font-semibold transition ${
                  currentUser.role === "MAKER"
                    ? "bg-kalpasar-cyan text-slate-950 font-bold"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                Maker (Creator)
              </button>
              <button
                onClick={() =>
                  setCurrentUser({
                    name: "S. K. Joshi (Superintending Engineer)",
                    role: "CHECKER"
                  })
                }
                className={`px-2.5 py-1 rounded font-semibold transition ${
                  currentUser.role === "CHECKER"
                    ? "bg-kalpasar-gold text-slate-950 font-bold"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                Checker (Approver)
              </button>
            </div>

            <Link
              to="/prototype-2"
              className="flex items-center gap-1.5 bg-kalpasar-cyan hover:bg-teal-400 text-slate-950 px-3 py-1.5 rounded-lg text-xs font-bold transition shadow"
            >
              <span>View Live Website</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        {/* Metric Cards Banner */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase">Live Published</p>
              <h3 className="text-2xl font-bold text-emerald-700 mt-1">{publishedCount}</h3>
              <p className="text-[11px] text-slate-400 mt-0.5">Active on public website</p>
            </div>
            <div className="w-11 h-11 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6" />
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase">Pending Approval</p>
              <h3 className="text-2xl font-bold text-amber-600 mt-1">{pendingCount}</h3>
              <p className="text-[11px] text-slate-400 mt-0.5">Awaiting Checker review</p>
            </div>
            <div className="w-11 h-11 bg-amber-100 text-amber-600 rounded-lg flex items-center justify-center">
              <Clock className="w-6 h-6" />
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase">Draft Items</p>
              <h3 className="text-2xl font-bold text-slate-800 mt-1">{draftCount}</h3>
              <p className="text-[11px] text-slate-400 mt-0.5">Under Maker creation</p>
            </div>
            <div className="w-11 h-11 bg-slate-100 text-slate-600 rounded-lg flex items-center justify-center">
              <FileText className="w-6 h-6" />
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase">Citizen Inquiries</p>
              <h3 className="text-2xl font-bold text-blue-700 mt-1">{feedbacks.length}</h3>
              <p className="text-[11px] text-slate-400 mt-0.5">Registered via web forms</p>
            </div>
            <div className="w-11 h-11 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center">
              <MessageSquare className="w-6 h-6" />
            </div>
          </div>
        </div>

        {/* Current User Role Notice */}
        <div className="bg-gradient-to-r from-slate-900 to-kalpasar-navy text-white p-4 rounded-xl flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-kalpasar-gold font-bold">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-slate-400">Authenticated CMS Session:</div>
              <div className="font-bold text-sm text-white">
                {currentUser.name} —{" "}
                <span className="text-kalpasar-gold uppercase tracking-wider font-mono">
                  [{currentUser.role} ROLE]
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleResetDemo}
              className="flex items-center gap-1.5 text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 px-3 py-1.5 rounded-lg border border-slate-700 transition"
              title="Reset notices and workflow history to default seed data"
            >
              <RotateCcw className="w-3.5 h-3.5 text-slate-400" />
              <span>Reset Demo State</span>
            </button>
          </div>
        </div>

        {/* CMS Tabs Navigation */}
        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
          <div className="flex items-center border-b border-slate-200 px-4 bg-slate-50/70">
            <button
              onClick={() => setActiveTab("workflow")}
              className={`py-3.5 px-4 text-xs font-bold border-b-2 flex items-center gap-2 transition ${
                activeTab === "workflow"
                  ? "border-kalpasar-cyan text-kalpasar-navy"
                  : "border-transparent text-slate-500 hover:text-slate-800"
              }`}
            >
              <Sliders className="w-4 h-4" />
              <span>Maker-Checker Notices & Circulars</span>
              {pendingCount > 0 && (
                <span className="bg-amber-500 text-white text-[10px] px-1.5 py-0.2 rounded-full font-mono">
                  {pendingCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setActiveTab("new")}
              className={`py-3.5 px-4 text-xs font-bold border-b-2 flex items-center gap-2 transition ${
                activeTab === "new"
                  ? "border-kalpasar-cyan text-kalpasar-navy"
                  : "border-transparent text-slate-500 hover:text-slate-800"
              }`}
            >
              <Plus className="w-4 h-4" />
              <span>Create New Notice (Maker)</span>
            </button>

            <button
              onClick={() => setActiveTab("history")}
              className={`py-3.5 px-4 text-xs font-bold border-b-2 flex items-center gap-2 transition ${
                activeTab === "history"
                  ? "border-kalpasar-cyan text-kalpasar-navy"
                  : "border-transparent text-slate-500 hover:text-slate-800"
              }`}
            >
              <History className="w-4 h-4" />
              <span>Workflow Audit Trail ({history.length})</span>
            </button>

            <button
              onClick={() => setActiveTab("feedback")}
              className={`py-3.5 px-4 text-xs font-bold border-b-2 flex items-center gap-2 transition ${
                activeTab === "feedback"
                  ? "border-kalpasar-cyan text-kalpasar-navy"
                  : "border-transparent text-slate-500 hover:text-slate-800"
              }`}
            >
              <MessageSquare className="w-4 h-4" />
              <span>Citizen Feedback Inbox ({feedbacks.length})</span>
            </button>
          </div>

          {/* TAB 1: WORKFLOW TABLE */}
          {activeTab === "workflow" && (
            <div className="p-6">
              {/* Filter Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-2 text-xs">
                  <span className="text-slate-500 font-semibold">Filter Status:</span>
                  {["ALL", "PENDING_APPROVAL", "PUBLISHED", "APPROVED", "DRAFT", "REJECTED"].map(
                    (st) => (
                      <button
                        key={st}
                        onClick={() => setStatusFilter(st)}
                        className={`px-2.5 py-1 rounded-md text-[11px] font-semibold transition ${
                          statusFilter === st
                            ? "bg-slate-900 text-white"
                            : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                        }`}
                      >
                        {st.replace("_", " ")}
                      </button>
                    )
                  )}
                </div>

                <div className="text-xs text-slate-500">
                  Showing {filteredNotices.length} items
                </div>
              </div>

              {/* Table */}
              <div className="overflow-x-auto border border-slate-200 rounded-lg">
                <table className="w-full text-left text-xs text-slate-700">
                  <thead className="bg-slate-100/90 text-slate-800 font-bold border-b border-slate-200">
                    <tr>
                      <th className="py-3 px-4">Ref & ID</th>
                      <th className="py-3 px-4">Title & Description</th>
                      <th className="py-3 px-4">Category</th>
                      <th className="py-3 px-4">Author (Maker)</th>
                      <th className="py-3 px-4">Status</th>
                      <th className="py-3 px-4 text-right">Workflow Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    {filteredNotices.map((n) => {
                      const isPending = n.status === "PENDING_APPROVAL";
                      const isDraft = n.status === "DRAFT";
                      const isApproved = n.status === "APPROVED";
                      const isPublished = n.status === "PUBLISHED";
                      const isRejected = n.status === "REJECTED";

                      return (
                        <tr key={n.id} className="hover:bg-slate-50/70 transition">
                          <td className="py-3.5 px-4 whitespace-nowrap">
                            <span className="font-mono font-bold text-slate-900">{n.id}</span>
                            <div className="text-[11px] text-slate-400 font-mono">{n.refNo}</div>
                          </td>
                          <td className="py-3.5 px-4 max-w-md">
                            <div className="font-bold text-slate-900">{n.titleEn}</div>
                            <div className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                              {n.summaryEn}
                            </div>
                            <div className="text-[10px] text-slate-400 mt-1">
                              GU: {n.titleGu || "-"}
                            </div>
                          </td>
                          <td className="py-3.5 px-4 whitespace-nowrap">
                            <span className="px-2 py-0.5 bg-slate-100 border border-slate-200 text-slate-700 rounded text-[11px] font-medium">
                              {n.category}
                            </span>
                            <div className="text-[10px] text-slate-400 mt-0.5">{n.date}</div>
                          </td>
                          <td className="py-3.5 px-4 whitespace-nowrap text-slate-600">
                            <div>{n.author || "Administrator"}</div>
                            {n.approvedBy && n.approvedBy !== "-" && (
                              <div className="text-[10px] text-emerald-600">
                                Appr: {n.approvedBy}
                              </div>
                            )}
                          </td>
                          <td className="py-3.5 px-4 whitespace-nowrap">
                            {isPublished && (
                              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">
                                <CheckCircle2 className="w-3.5 h-3.5" />
                                PUBLISHED
                              </span>
                            )}
                            {isPending && (
                              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-amber-100 text-amber-800 border border-amber-300 animate-pulse">
                                <Clock className="w-3.5 h-3.5" />
                                PENDING APPROVAL
                              </span>
                            )}
                            {isApproved && (
                              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-blue-100 text-blue-800 border border-blue-300">
                                <CheckCircle2 className="w-3.5 h-3.5" />
                                APPROVED
                              </span>
                            )}
                            {isDraft && (
                              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-slate-100 text-slate-700 border border-slate-300">
                                <FileText className="w-3.5 h-3.5" />
                                DRAFT
                              </span>
                            )}
                            {isRejected && (
                              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-rose-100 text-rose-800 border border-rose-300">
                                <XCircle className="w-3.5 h-3.5" />
                                REJECTED
                              </span>
                            )}
                          </td>
                          <td className="py-3.5 px-4 text-right whitespace-nowrap">
                            <div className="flex items-center justify-end gap-1.5">
                              {/* MAKER ACTION: Submit Draft for Approval */}
                              {(isDraft || isRejected) && (
                                <button
                                  onClick={() => handleSubmitForApproval(n.id)}
                                  className="px-2.5 py-1 bg-cyan-700 hover:bg-cyan-800 text-white rounded font-medium text-[11px] flex items-center gap-1"
                                  title="Submit Draft to Checker for Review"
                                >
                                  <Send className="w-3 h-3" />
                                  Submit
                                </button>
                              )}

                              {/* CHECKER ACTIONS: Approve / Reject */}
                              {isPending && (
                                <>
                                  <button
                                    onClick={() => handleApprove(n.id)}
                                    className="px-2.5 py-1 bg-emerald-600 hover:bg-emerald-700 text-white rounded font-bold text-[11px] flex items-center gap-1"
                                    title="Approve Notice"
                                  >
                                    <CheckCircle2 className="w-3 h-3" />
                                    Approve
                                  </button>
                                  <button
                                    onClick={() => handleReject(n.id)}
                                    className="px-2 py-1 bg-rose-600 hover:bg-rose-700 text-white rounded font-medium text-[11px] flex items-center gap-1"
                                    title="Reject Notice with Remarks"
                                  >
                                    <XCircle className="w-3 h-3" />
                                    Reject
                                  </button>
                                </>
                              )}

                              {/* CHECKER / ADMIN ACTION: Publish Approved Item */}
                              {isApproved && (
                                <button
                                  onClick={() => handlePublish(n.id)}
                                  className="px-3 py-1 bg-emerald-700 hover:bg-emerald-800 text-white rounded font-bold text-[11px] flex items-center gap-1 shadow"
                                  title="Publish Live on Public Website"
                                >
                                  <Eye className="w-3 h-3" />
                                  Publish Live
                                </button>
                              )}

                              {/* Delete button */}
                              <button
                                onClick={() => handleDelete(n.id)}
                                className="p-1 text-slate-400 hover:text-rose-600 rounded transition"
                                title="Delete"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 2: CREATE DRAFT FORM */}
          {activeTab === "new" && (
            <div className="p-6 max-w-3xl">
              <div className="mb-4">
                <h3 className="text-sm font-bold text-slate-800">
                  Create New Notice / Circular Draft (Maker Flow)
                </h3>
                <p className="text-xs text-slate-500">
                  As per RFP Clause 2.18.3, content created by the Maker enters the system in 'DRAFT' status and requires Checker authorization prior to public release.
                </p>
              </div>

              <form onSubmit={handleCreateDraft} className="space-y-4 text-xs">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    English Title <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={newDraft.titleEn}
                    onChange={(e) => setNewDraft({ ...newDraft, titleEn: e.target.value })}
                    placeholder="e.g. Expression of Interest for Bathymetric Survey Phase II"
                    className="w-full border border-slate-300 rounded-lg p-2.5 focus:ring-2 focus:ring-kalpasar-cyan focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Gujarati Title (ગુજરાતી)
                    </label>
                    <input
                      type="text"
                      value={newDraft.titleGu}
                      onChange={(e) => setNewDraft({ ...newDraft, titleGu: e.target.value })}
                      placeholder="e.g. બાથિમેટ્રિક સર્વે ફેઝ ૨ માટે જાહેર નોટિસ"
                      className="w-full border border-slate-300 rounded-lg p-2.5 focus:ring-2 focus:ring-kalpasar-cyan focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Hindi Title (हिन्दी)
                    </label>
                    <input
                      type="text"
                      value={newDraft.titleHi}
                      onChange={(e) => setNewDraft({ ...newDraft, titleHi: e.target.value })}
                      placeholder="e.g. बाथिमेट्रिक सर्वेक्षण चरण 2 हेतु सार्वजनिक सूचना"
                      className="w-full border border-slate-300 rounded-lg p-2.5 focus:ring-2 focus:ring-kalpasar-cyan focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Category</label>
                    <select
                      value={newDraft.category}
                      onChange={(e) => setNewDraft({ ...newDraft, category: e.target.value })}
                      className="w-full border border-slate-300 rounded-lg p-2.5 focus:ring-2 focus:ring-kalpasar-cyan focus:outline-none bg-white"
                    >
                      <option value="Tenders">Tenders</option>
                      <option value="Circulars">Circulars</option>
                      <option value="Resolutions">Government Resolutions</option>
                      <option value="Recruitment">Recruitment</option>
                      <option value="Reports">Performance Reports</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Reference Number</label>
                    <input
                      type="text"
                      value={newDraft.refNo}
                      onChange={(e) => setNewDraft({ ...newDraft, refNo: e.target.value })}
                      className="w-full border border-slate-300 rounded-lg p-2.5 focus:ring-2 focus:ring-kalpasar-cyan focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">
                    Summary / Description <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={newDraft.summaryEn}
                    onChange={(e) => setNewDraft({ ...newDraft, summaryEn: e.target.value })}
                    placeholder="Brief description of the notice for public citizens and evaluators..."
                    className="w-full border border-slate-300 rounded-lg p-2.5 focus:ring-2 focus:ring-kalpasar-cyan focus:outline-none"
                  />
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <button
                    type="submit"
                    className="px-6 py-2.5 bg-kalpasar-navy hover:bg-slate-900 text-white rounded-xl font-bold flex items-center gap-2 shadow"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Create Draft Notice</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("workflow")}
                    className="px-4 py-2.5 text-slate-600 hover:text-slate-800"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* TAB 3: WORKFLOW AUDIT TRAIL */}
          {activeTab === "history" && (
            <div className="p-6">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold text-slate-800">
                    Content Publishing Audit Trail & Historical Log
                  </h3>
                  <p className="text-xs text-slate-500">
                    Chronological record of every Maker creation, submission, Checker approval, and publishing event with role stamps.
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                {history.map((h) => (
                  <div
                    key={h.id}
                    className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg flex flex-wrap items-center justify-between gap-3 text-xs"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-[11px] ${
                          h.action === "PUBLISHED"
                            ? "bg-emerald-100 text-emerald-700"
                            : h.action === "APPROVED"
                            ? "bg-blue-100 text-blue-700"
                            : h.action === "REJECTED"
                            ? "bg-rose-100 text-rose-700"
                            : "bg-amber-100 text-amber-700"
                        }`}
                      >
                        {h.action.slice(0, 2)}
                      </div>
                      <div>
                        <div className="font-bold text-slate-900">
                          {h.action.replace(/_/g, " ")} — Notice {h.noticeId}
                        </div>
                        <div className="text-slate-500 text-[11px] mt-0.5">
                          Actor: <strong>{h.actor}</strong> ({h.role}) &bull; Remarks: "{h.remarks}"
                        </div>
                      </div>
                    </div>

                    <div className="text-[11px] text-slate-400 font-mono">
                      {h.timestamp}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: CITIZEN FEEDBACK */}
          {activeTab === "feedback" && (
            <div className="p-6">
              <div className="mb-4">
                <h3 className="text-sm font-bold text-slate-800">
                  Citizen Feedback & Grievance Submissions
                </h3>
                <p className="text-xs text-slate-500">
                  Recorded from public citizen feedback modals across all prototypes.
                </p>
              </div>

              {feedbacks.length === 0 ? (
                <div className="text-center py-12 text-slate-400">
                  <MessageSquare className="w-10 h-10 mx-auto text-slate-300 mb-2" />
                  <p className="text-sm">No citizen feedback submitted yet.</p>
                  <p className="text-xs mt-1">
                    Open any prototype, click 'Citizen Feedback', and submit a sample form.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {feedbacks.map((fb) => (
                    <div
                      key={fb.id}
                      className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-slate-900">{fb.name}</span>
                        <span className="text-[10px] bg-slate-200 px-2 py-0.5 rounded font-mono">
                          {fb.submittedAt}
                        </span>
                      </div>
                      <div className="text-slate-500">
                        {fb.email} {fb.mobile ? `• ${fb.mobile}` : ""}
                      </div>
                      <div className="font-semibold text-cyan-800">
                        Category: {fb.category} {fb.subject ? `— ${fb.subject}` : ""}
                      </div>
                      <p className="text-slate-700 bg-white p-2.5 rounded border border-slate-200">
                        "{fb.message}"
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};
