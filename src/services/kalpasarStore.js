// Kalpasar State Store & Mock PostgreSQL REST API Simulation
// Supports Maker-Checker Publishing Workflow, Audit Logging, and Feedback
import { initialNotices } from "../data/kalpasarData";

const STORAGE_KEYS = {
  NOTICES: "kalpasar_notices_v1",
  WORKFLOW: "kalpasar_workflow_v1",
  FEEDBACK: "kalpasar_feedback_v1",
  VISITORS: "kalpasar_visitor_count_v1"
};

// Initial seed workflow history
const initialWorkflowHistory = [
  {
    id: "wf-1",
    noticeId: "not-001",
    action: "PUBLISHED",
    actor: "Superintending Engineer (Checker)",
    role: "CHECKER",
    timestamp: "2026-10-10 16:30:00",
    remarks: "RFP documents verified and approved for public tender opening."
  },
  {
    id: "wf-2",
    noticeId: "not-001",
    action: "SUBMITTED_FOR_APPROVAL",
    actor: "System Administrator (Maker)",
    role: "MAKER",
    timestamp: "2026-10-10 11:15:00",
    remarks: "Draft uploaded as per Secretary approval."
  },
  {
    id: "wf-3",
    noticeId: "not-002",
    action: "PUBLISHED",
    actor: "Secretary, Kalpasar (Checker)",
    role: "CHECKER",
    timestamp: "2026-09-28 17:00:00",
    remarks: "Marine Geo-technical Survey sanction published."
  }
];

class KalpasarStore {
  constructor() {
    this.init();
  }

  init() {
    if (!localStorage.getItem(STORAGE_KEYS.NOTICES)) {
      localStorage.setItem(STORAGE_KEYS.NOTICES, JSON.stringify(initialNotices));
    }
    if (!localStorage.getItem(STORAGE_KEYS.WORKFLOW)) {
      localStorage.setItem(STORAGE_KEYS.WORKFLOW, JSON.stringify(initialWorkflowHistory));
    }
    if (!localStorage.getItem(STORAGE_KEYS.FEEDBACK)) {
      localStorage.setItem(STORAGE_KEYS.FEEDBACK, JSON.stringify([]));
    }
    if (!localStorage.getItem(STORAGE_KEYS.VISITORS)) {
      localStorage.setItem(STORAGE_KEYS.VISITORS, "142857");
    }
  }

  // Notices
  getNotices() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEYS.NOTICES)) || initialNotices;
    } catch {
      return initialNotices;
    }
  }

  getPublishedNotices() {
    return this.getNotices().filter(n => n.status === "PUBLISHED");
  }

  saveNotices(notices) {
    localStorage.setItem(STORAGE_KEYS.NOTICES, JSON.stringify(notices));
  }

  // Maker-Checker Actions
  createDraft(noticeData, author = "Maker Admin") {
    const notices = this.getNotices();
    const newNotice = {
      ...noticeData,
      id: `not-${Date.now().toString().slice(-4)}`,
      status: "DRAFT",
      date: new Date().toISOString().split("T")[0],
      author: author,
      approvedBy: "-"
    };
    notices.unshift(newNotice);
    this.saveNotices(notices);

    this.logWorkflow({
      noticeId: newNotice.id,
      noticeTitle: newNotice.titleEn,
      action: "CREATED_DRAFT",
      actor: author,
      role: "MAKER",
      remarks: "Draft notice created in CMS."
    });

    return newNotice;
  }

  submitForApproval(noticeId, actor = "Maker Admin", remarks = "Submitted for checker approval") {
    const notices = this.getNotices();
    const notice = notices.find(n => n.id === noticeId);
    if (!notice) return null;

    notice.status = "PENDING_APPROVAL";
    this.saveNotices(notices);

    this.logWorkflow({
      noticeId: notice.id,
      noticeTitle: notice.titleEn,
      action: "SUBMITTED_FOR_APPROVAL",
      actor: actor,
      role: "MAKER",
      remarks: remarks
    });

    return notice;
  }

  approveNotice(noticeId, actor = "Executive Checker", remarks = "Content reviewed and approved") {
    const notices = this.getNotices();
    const notice = notices.find(n => n.id === noticeId);
    if (!notice) return null;

    notice.status = "APPROVED";
    notice.approvedBy = actor;
    this.saveNotices(notices);

    this.logWorkflow({
      noticeId: notice.id,
      noticeTitle: notice.titleEn,
      action: "APPROVED",
      actor: actor,
      role: "CHECKER",
      remarks: remarks
    });

    return notice;
  }

  rejectNotice(noticeId, actor = "Executive Checker", remarks = "Revision requested") {
    const notices = this.getNotices();
    const notice = notices.find(n => n.id === noticeId);
    if (!notice) return null;

    notice.status = "REJECTED";
    notice.approvedBy = actor;
    this.saveNotices(notices);

    this.logWorkflow({
      noticeId: notice.id,
      noticeTitle: notice.titleEn,
      action: "REJECTED",
      actor: actor,
      role: "CHECKER",
      remarks: remarks
    });

    return notice;
  }

  publishNotice(noticeId, actor = "Executive Checker") {
    const notices = this.getNotices();
    const notice = notices.find(n => n.id === noticeId);
    if (!notice) return null;

    notice.status = "PUBLISHED";
    notice.approvedBy = actor;
    this.saveNotices(notices);

    this.logWorkflow({
      noticeId: notice.id,
      noticeTitle: notice.titleEn,
      action: "PUBLISHED",
      actor: actor,
      role: "CHECKER",
      remarks: "Notice made active and visible to citizens on public portal."
    });

    return notice;
  }

  deleteNotice(noticeId) {
    let notices = this.getNotices();
    notices = notices.filter(n => n.id !== noticeId);
    this.saveNotices(notices);
  }

  // Workflow History Logging
  logWorkflow({ noticeId, noticeTitle, action, actor, role, remarks }) {
    const history = this.getWorkflowHistory();
    const record = {
      id: `wf-${Date.now()}`,
      noticeId,
      noticeTitle,
      action,
      actor,
      role,
      timestamp: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
      remarks
    };
    history.unshift(record);
    localStorage.setItem(STORAGE_KEYS.WORKFLOW, JSON.stringify(history));
    return record;
  }

  getWorkflowHistory() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEYS.WORKFLOW)) || initialWorkflowHistory;
    } catch {
      return initialWorkflowHistory;
    }
  }

  // Citizen Feedback
  submitFeedback(feedbackData) {
    const list = this.getFeedbackList();
    const entry = {
      id: `fb-${Date.now()}`,
      ...feedbackData,
      submittedAt: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
      status: "NEW"
    };
    list.unshift(entry);
    localStorage.setItem(STORAGE_KEYS.FEEDBACK, JSON.stringify(list));
    return entry;
  }

  getFeedbackList() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEYS.FEEDBACK)) || [];
    } catch {
      return [];
    }
  }

  // Visitor Counter
  getVisitorCount() {
    const count = parseInt(localStorage.getItem(STORAGE_KEYS.VISITORS) || "142857", 10);
    return count;
  }

  incrementVisitorCount() {
    const count = this.getVisitorCount() + 1;
    localStorage.setItem(STORAGE_KEYS.VISITORS, count.toString());
    return count;
  }

  // Reset to seed demo state
  resetToDemo() {
    localStorage.setItem(STORAGE_KEYS.NOTICES, JSON.stringify(initialNotices));
    localStorage.setItem(STORAGE_KEYS.WORKFLOW, JSON.stringify(initialWorkflowHistory));
    localStorage.setItem(STORAGE_KEYS.FEEDBACK, JSON.stringify([]));
    localStorage.setItem(STORAGE_KEYS.VISITORS, "142857");
  }

  // RSS / XML Feed Generator
  generateRSSFeed() {
    const notices = this.getPublishedNotices();
    const xml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
  <title>Kalpasar Department — Government of Gujarat Official Notices</title>
  <link>https://kalpasar.gujarat.gov.in</link>
  <description>Official notifications, circulars, and tenders from Kalpasar Department</description>
  <language>en-in</language>
  <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
  ${notices.map(n => `
  <item>
    <title><![CDATA[${n.titleEn}]]></title>
    <link>https://kalpasar.gujarat.gov.in/notices/${n.id}</link>
    <guid>${n.id}</guid>
    <category>${n.category}</category>
    <pubDate>${new Date(n.date).toUTCString()}</pubDate>
    <description><![CDATA[${n.summaryEn}]]></description>
  </item>`).join("")}
</channel>
</rss>`;
    return xml;
  }
}

export const kalpasarStore = new KalpasarStore();
