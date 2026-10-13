# Kalpasar Department Website — Government of Gujarat RFP Prototype

**Tender Reference:** `GIL/2026/KALPASAR/WEB/01`  
**Prepared by:** Aroosha Technologies Pvt. Ltd.  
**Presented to:** Government Evaluation Committee, Gujarat Informatics Limited (GIL)  

---

## 🌟 Executive Summary

This repository contains a full-stack interactive website prototype suite engineered for the **Kalpasar Department (Government of Gujarat)** in strict compliance with **Clause 2.18.5 (Three Distinct Website Prototypes)** and **Clause 2.18.3 (70 General + 30 Technical Marks Evaluation Criteria)**.

Rather than static mockups or simple color variations, this suite delivers **three genuinely distinct, fully functional prototypes** sharing an authentic information architecture, backed by live data persistence, an interactive 2-stage **Maker-Checker Content Publishing CMS**, a **Technical Capabilities Showcase**, and a **Divyangjan AI Voice Assistant**.

---

## 🚀 Quick Start Guide

### 1. Start the Development Server
```bash
npm run dev
```
Open your browser at **`http://localhost:3000`** (or the port displayed in terminal).

### 2. Build for Production
```bash
npm run build
```

---

## 🗺️ Portal Navigation & Architecture

| Route | Name & Concept | Purpose & Target Evaluation |
|---|---|---|
| **`/`** | **Prototypes Selection Hub** | Entry hub for the evaluation committee with 3 preview cards, project metrics, and demo shortcuts. |
| **`/prototype-2`** | **Concept 2: Modern Citizen-First Portal** | **(Primary Recommended)** Contemporary GovTech design, ocean gradients, dynamic search, and interactive metrics. |
| **`/prototype-1`** | **Concept 1: Official Government Classic** | Formal institutional identity, deep navy blue & gold palette, structured gazette tables, and official circulars. |
| **`/prototype-3`** | **Concept 3: PSU Enterprise Flagship Portal (MDL Main Architecture)** | Modeled after Mazagon Dock Shipbuilders Limited (`mdl_main`): Hero Banner carousel, live marquee ticker, executive leadership photo card, strategic project portfolio with specs modal, dual offerings & What's New hub, multimedia feature spotlight, and national initiatives marquee. |
| **`/admin`** | **Maker-Checker Publishing CMS** | Live 2-stage publishing pipeline (`DRAFT` &rarr; `PENDING_APPROVAL` &rarr; `APPROVED` &rarr; `PUBLISHED`). |
| **`/technical-capabilities`** | **Technical Capabilities Showcase** | Demonstrating 30 marks: PostgreSQL schema, live REST API tester, and RSS/XML feed generator. |
| **`/evaluation`** | **RFP Evaluation Scorecard** | Interactive checklist mapping all 70 General + 30 Technical Marks with direct test action links. |

---

## 🏛️ Authentic Project Scope & Metrics (Gulf of Khambhat)

- **30 km Composite Dam:** Constructed across the Gulf of Khambhat connecting Bhavnagar and Dahej (Bharuch).
- **10,250 MCM Freshwater Reservoir:** Storing surplus monsoon floodwaters of Narmada, Mahi, Sabarmati, and Dhadhar rivers.
- **5,845 MW Clean Tidal Energy:** Utilizing 8–11 meter tidal range in Gulf of Khambhat.
- **10.54 Lakh Hectares Irrigation:** Micro-irrigation and canal network across drought-prone talukas of Saurashtra and Bhal.
- **225 km Road Distance Saved:** 10-lane expressway over the dam crest cuts Dahej-Bhavnagar travel from 360 km to 135 km.
- **Salinity Ingress Prevention:** Halts Arabian Sea seawater intrusion, reviving groundwater across 12 coastal talukas.

---

## 📋 RFP Clause 2.18.3 Evaluation Criteria Compliance

### General Website Criteria (70 Marks)
1. **Categorization (10 Marks):** Clear division into Department, Performance, Purposes, Policies, Tenders, Contact.
2. **Target Audience (10 Marks):** Dedicated portals for citizens, farmers, researchers, contractors, and evaluation committee.
3. **Aesthetics & User-Friendliness (10 Marks):** State-of-the-art GovTech visual design with fluid micro-interactions.
4. **Ease of Navigation & Search (10 Marks):** Live instant search bar with keyboard focus traversal and skip links.
5. **Color & Image Balance (10 Marks):** Curated oceanic navy/cyan/gold palette with high-contrast toggle.
6. **Understanding Organizational Functions (10 Marks):** Complete coverage of the Kalpasar mandate and leadership.
7. **Citizen-Centric Services (10 Marks):** Interactive grievance/feedback forms and Divyangjan AI voice assistant.

### Technical Criteria (30 Marks)
1. **Database Integration (8 Marks):** Relational store with notices, audit history, citizen feedback, and query runner.
2. **Language Selection (8 Marks):** Instant trilingual switching between English, Gujarati (ગુજરાતી), and Hindi (हिन्दी).
3. **Remote User/Site Management (7 Marks):** Role-based CMS with authentic Maker-Checker approval workflow.
4. **Integration & Data-Exchange Standards (7 Marks):** RESTful JSON API endpoints, W3C RSS 2.0 XML syndication feeds, and GIS coordinates.

---

## 🛠️ Technology Stack
- **Framework:** React 18, Vite 6, React Router DOM 6
- **Styling:** Tailwind CSS, PostCSS, Autoprefixer
- **Icons:** Lucide React
- **Accessibility:** GIGW 3.0 & WCAG 2.1 AA Compliant with Web Speech API
- **Data Persistence:** Client-Side Relational Store & PostgreSQL Simulation with LocalStorage backing
