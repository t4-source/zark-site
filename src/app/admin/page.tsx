"use client";

import { useEffect, useState } from "react";
import BlogManagement from "@/components/admin/BlogManagement";
import ContactMessages from "@/components/admin/ContactMessages";
import JobApplications from "@/components/admin/JobApplications";
import JobManagement from "@/components/admin/JobManagement";
import Analytics from "@/components/admin/Analytics";
import Settings from "@/components/admin/Settings";
import UserManagement from "@/components/admin/UserManagement";

interface SessionUser {
  id: string;
  email: string;
  name: string;
  role: "admin" | "employee";
}

const SECTIONS_ADMIN = [
  { id: "blogs", label: "Blog Posts", description: "Publish and manage insights." },
  { id: "users", label: "Employee Accounts", description: "Invite and manage logins." },
  { id: "jobs", label: "Job Postings", description: "Manage career openings." },
  { id: "applications", label: "Applications", description: "Review applicants." },
  { id: "messages", label: "Messages", description: "Inbound enquiries." },
  { id: "analytics", label: "Analytics", description: "Site traffic overview." },
  { id: "settings", label: "Settings", description: "Workspace preferences." },
] as const;

const SECTIONS_EMPLOYEE = [
  { id: "blogs", label: "Blog Posts", description: "Write and manage your posts." },
] as const;

type SectionId = (typeof SECTIONS_ADMIN)[number]["id"];

export default function AdminDashboard() {
  const [me, setMe] = useState<SessionUser | null>(null);
  const [section, setSection] = useState<SectionId | null>(null);
  const [authChecking, setAuthChecking] = useState(true);

  useEffect(() => {
    document.title = "Workspace";
    (async () => {
      try {
        const res = await fetch("/api/admin/verify", { credentials: "include" });
        if (!res.ok) {
          window.location.href = "/admin/login";
          return;
        }
        const data = await res.json();
        setMe(data.user);
      } finally {
        setAuthChecking(false);
      }
    })();
  }, []);

  const sections = me?.role === "admin" ? SECTIONS_ADMIN : SECTIONS_EMPLOYEE;

  const renderSection = () => {
    switch (section) {
      case "blogs":
        return <BlogManagement />;
      case "users":
        return me?.role === "admin" ? <UserManagement /> : null;
      case "jobs":
        return <JobManagement />;
      case "applications":
        return <JobApplications />;
      case "messages":
        return <ContactMessages />;
      case "analytics":
        return <Analytics />;
      case "settings":
        return <Settings />;
      default:
        return null;
    }
  };

  const logout = async () => {
    if (!confirm("Sign out?")) return;
    await fetch("/api/admin/logout", {
      method: "POST",
      credentials: "include",
    });
    window.location.href = "/admin/login";
  };

  if (authChecking || !me) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center text-slate-500">
        Loading workspace…
      </div>
    );
  }

  if (section) {
    return (
      <div className="min-h-screen bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="mb-6 flex items-center justify-between">
            <button
              onClick={() => setSection(null)}
              className="inline-flex items-center gap-1 text-sm font-medium text-blue-700 hover:text-blue-900"
            >
              <span aria-hidden>←</span> Dashboard
            </button>
            <div className="text-sm text-slate-500">
              Signed in as{" "}
              <span className="font-medium text-slate-700">{me.email}</span>
            </div>
          </div>
          {renderSection()}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm text-blue-700 font-medium uppercase tracking-widest">
              Workspace
            </p>
            <h1 className="mt-1 text-3xl font-semibold text-slate-900">
              Welcome, {me.name.split(" ")[0]}
            </h1>
            <p className="mt-2 text-slate-600">
              {me.role === "admin"
                ? "Manage content, accounts and applications across the site."
                : "Manage the posts published under your name."}
            </p>
          </div>
          <button
            onClick={logout}
            className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
          >
            Sign out
          </button>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {sections.map((s) => (
            <button
              key={s.id}
              onClick={() => setSection(s.id as SectionId)}
              className="group rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm hover:shadow-md hover:border-blue-200 transition-all"
            >
              <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-700">
                {s.label}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{s.description}</p>
              <div className="mt-4 text-sm font-medium text-blue-700">
                Open →
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
