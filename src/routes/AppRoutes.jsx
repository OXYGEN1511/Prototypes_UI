import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AdminPortal } from "../pages/admin/AdminPortal";
import { AdminProto1 } from "../pages/admin/AdminProto1";
import { AdminProto2 } from "../pages/admin/AdminProto2";
import { AdminProto3 } from "../pages/admin/AdminProto3";
import { TechnicalCapabilities } from "../pages/TechnicalCapabilities";
import { EvaluationChecklist } from "../pages/EvaluationChecklist";

// Prototype 1: Official Classic Home & Subpages
import { Prototype1Home } from "../prototypes/prototype1/Prototype1Home";
import { P1DepartmentPage } from "../prototypes/prototype1/P1DepartmentPage";
import { P1PurposesPage } from "../prototypes/prototype1/P1PurposesPage";
import { P1PerformancePage } from "../prototypes/prototype1/P1PerformancePage";
import { P1PoliciesPage } from "../prototypes/prototype1/P1PoliciesPage";
import { P1TendersPage } from "../prototypes/prototype1/P1TendersPage";
import { P1ContactPage } from "../prototypes/prototype1/P1ContactPage";

// Prototype 2: Modern Citizen-First Home & Subpages
import { Prototype2Home } from "../prototypes/prototype2/Prototype2Home";
import { P2DepartmentPage } from "../prototypes/prototype2/P2DepartmentPage";
import { P2PurposesPage } from "../prototypes/prototype2/P2PurposesPage";
import { P2PerformancePage } from "../prototypes/prototype2/P2PerformancePage";
import { P2PoliciesPage } from "../prototypes/prototype2/P2PoliciesPage";
import { P2TendersPage } from "../prototypes/prototype2/P2TendersPage";
import { P2ContactPage } from "../prototypes/prototype2/P2ContactPage";

// Prototype 3: PSU Enterprise Flagship Portal Home & Subpages
import { Prototype3Home } from "../prototypes/prototype3/Prototype3Home";
import { P3DepartmentPage } from "../prototypes/prototype3/P3DepartmentPage";
import { P3PurposesPage } from "../prototypes/prototype3/P3PurposesPage";
import { P3PerformancePage } from "../prototypes/prototype3/P3PerformancePage";
import { P3PoliciesPage } from "../prototypes/prototype3/P3PoliciesPage";
import { P3TendersPage } from "../prototypes/prototype3/P3TendersPage";
import { P3ContactPage } from "../prototypes/prototype3/P3ContactPage";

export const AppRoutes = () => {
  return (
    <Routes>
      {/* Root — redirect directly to Prototype 1 */}
      <Route path="/" element={<Navigate to="/prototype-1" replace />} />

      {/* Admin Panels — each prototype has its own dedicated admin route */}
      <Route path="/admin/proto1" element={<AdminProto1 />} />
      <Route path="/admin/proto2" element={<AdminProto2 />} />
      <Route path="/admin/proto3" element={<AdminProto3 />} />
      {/* Legacy /admin route kept for backward compatibility */}
      <Route path="/admin" element={<AdminPortal />} />

      {/* Special Demonstration Portals */}
      <Route path="/technical-capabilities" element={<TechnicalCapabilities />} />
      <Route path="/evaluation" element={<EvaluationChecklist />} />

      {/* Prototype 1: Official Classic (Distinct Old Government Look) */}
      <Route path="/prototype-1" element={<Prototype1Home />} />
      <Route path="/prototype-1/department" element={<P1DepartmentPage />} />
      <Route path="/prototype-1/purposes" element={<P1PurposesPage />} />
      <Route path="/prototype-1/performance" element={<P1PerformancePage />} />
      <Route path="/prototype-1/policies" element={<P1PoliciesPage />} />
      <Route path="/prototype-1/tenders" element={<P1TendersPage />} />
      <Route path="/prototype-1/contact" element={<P1ContactPage />} />

      {/* Prototype 2: Modern Citizen-First (Distinct Modern Navy/Cyan Glassmorphic Look) */}
      <Route path="/prototype-2" element={<Prototype2Home />} />
      <Route path="/prototype-2/department" element={<P2DepartmentPage />} />
      <Route path="/prototype-2/purposes" element={<P2PurposesPage />} />
      <Route path="/prototype-2/performance" element={<P2PerformancePage />} />
      <Route path="/prototype-2/policies" element={<P2PoliciesPage />} />
      <Route path="/prototype-2/tenders" element={<P2TendersPage />} />
      <Route path="/prototype-2/contact" element={<P2ContactPage />} />

      {/* Prototype 3: PSU Enterprise Flagship Portal (Distinct White/Amber Corporate Look) */}
      <Route path="/prototype-3" element={<Prototype3Home />} />
      <Route path="/prototype-3/department" element={<P3DepartmentPage />} />
      <Route path="/prototype-3/purposes" element={<P3PurposesPage />} />
      <Route path="/prototype-3/performance" element={<P3PerformancePage />} />
      <Route path="/prototype-3/policies" element={<P3PoliciesPage />} />
      <Route path="/prototype-3/tenders" element={<P3TendersPage />} />
      <Route path="/prototype-3/contact" element={<P3ContactPage />} />

      {/* Default fallback */}
      <Route path="*" element={<Navigate to="/prototype-1" replace />} />
    </Routes>
  );
};
