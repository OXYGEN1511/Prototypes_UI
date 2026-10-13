import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AdminPortal } from "../pages/admin/AdminPortal";
import { AdminProto1 } from "../pages/admin/AdminProto1";
import { AdminProto2 } from "../pages/admin/AdminProto2";
import { AdminProto3 } from "../pages/admin/AdminProto3";
import { TechnicalCapabilities } from "../pages/TechnicalCapabilities";
import { EvaluationChecklist } from "../pages/EvaluationChecklist";

import { Prototype1Home } from "../prototypes/prototype1/Prototype1Home";
import { Prototype2Home } from "../prototypes/prototype2/Prototype2Home";
import { Prototype3Home } from "../prototypes/prototype3/Prototype3Home";

import {
  DepartmentPage,
  PurposesPage,
  PerformancePage,
  PoliciesPage,
  ContactPage,
  TendersPage
} from "../prototypes/common/SharedSubpages";

export const AppRoutes = () => {
  return (
    <Routes>
      {/* Root — redirect directly to Prototype 1 (no hub landing page) */}
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

      {/* Prototype 1: Official Classic */}
      <Route path="/prototype-1" element={<Prototype1Home />} />
      <Route path="/prototype-1/department" element={<DepartmentPage variant="classic" basePath="/prototype-1" />} />
      <Route path="/prototype-1/purposes" element={<PurposesPage variant="classic" basePath="/prototype-1" />} />
      <Route path="/prototype-1/performance" element={<PerformancePage variant="classic" basePath="/prototype-1" />} />
      <Route path="/prototype-1/policies" element={<PoliciesPage variant="classic" basePath="/prototype-1" />} />
      <Route path="/prototype-1/tenders" element={<TendersPage variant="classic" basePath="/prototype-1" />} />
      <Route path="/prototype-1/contact" element={<ContactPage variant="classic" basePath="/prototype-1" />} />

      {/* Prototype 2: Modern Citizen-First (Primary Recommended) */}
      <Route path="/prototype-2" element={<Prototype2Home />} />
      <Route path="/prototype-2/department" element={<DepartmentPage variant="modern" basePath="/prototype-2" />} />
      <Route path="/prototype-2/purposes" element={<PurposesPage variant="modern" basePath="/prototype-2" />} />
      <Route path="/prototype-2/performance" element={<PerformancePage variant="modern" basePath="/prototype-2" />} />
      <Route path="/prototype-2/policies" element={<PoliciesPage variant="modern" basePath="/prototype-2" />} />
      <Route path="/prototype-2/tenders" element={<TendersPage variant="modern" basePath="/prototype-2" />} />
      <Route path="/prototype-2/contact" element={<ContactPage variant="modern" basePath="/prototype-2" />} />

      {/* Prototype 3: PSU Enterprise Flagship Portal (MDL Main Architecture) */}
      <Route path="/prototype-3" element={<Prototype3Home />} />
      <Route path="/prototype-3/department" element={<DepartmentPage variant="mdl" basePath="/prototype-3" />} />
      <Route path="/prototype-3/purposes" element={<PurposesPage variant="mdl" basePath="/prototype-3" />} />
      <Route path="/prototype-3/performance" element={<PerformancePage variant="mdl" basePath="/prototype-3" />} />
      <Route path="/prototype-3/policies" element={<PoliciesPage variant="mdl" basePath="/prototype-3" />} />
      <Route path="/prototype-3/tenders" element={<TendersPage variant="mdl" basePath="/prototype-3" />} />
      <Route path="/prototype-3/contact" element={<ContactPage variant="mdl" basePath="/prototype-3" />} />

      {/* Default fallback */}
      <Route path="*" element={<Navigate to="/prototype-1" replace />} />
    </Routes>
  );
};
