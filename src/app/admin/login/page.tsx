"use client";

import { useEffect, useState } from "react";
import { useNotification } from "@/components/Notification";
import Image from "next/image";

export default function LoginPage() {
  const { showNotification } = useNotification();
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    document.title = "Employee Sign in";
    const link = document.querySelector(
      "link[rel*='icon']",
    ) as HTMLLinkElement | null;
    if (link) link.href = "/zark.png";
  }, []);

  return (
    <div className="min-h-[calc(100dvh-5rem)] grid lg:grid-cols-2">
      <div className="hidden lg:flex relative bg-slate-900 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_30%_30%,#1d4ed8_0%,transparent_60%),radial-gradient(40%_50%_at_80%_70%,#0ea5e9_0%,transparent_55%)] opacity-50" />
        <div className="relative z-10 flex flex-col justify-between p-12">
          <Image
            src="/zark.png"
            alt="Z A R K & Co LLP"
            width={56}
            height={56}
            className="rounded-lg bg-white/5 p-1"
          />
          <div>
            <h2 className="text-3xl font-semibold leading-tight">
              The Z A R K & Co LLP team workspace.
            </h2>
            <p className="mt-4 text-blue-100/80 max-w-md">
              Sign in to publish insights, manage applications, and update the
              firm&apos;s public presence.
            </p>
          </div>
          <p className="text-xs text-blue-100/60">
            Access restricted to authorised personnel.
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          <div className="lg:hidden flex items-center gap-3 mb-8">
            <Image src="/zark.png" alt="" width={40} height={40} />
            <span className="font-semibold text-slate-900">
              Z A R K & Co LLP
            </span>
          </div>
          <h1 className="text-2xl font-semibold text-slate-900">
            Sign in to your workspace
          </h1>
          <p className="mt-2 text-sm text-slate-600">
            Use the credentials provided by your administrator.
          </p>

          <form
            className="mt-8 space-y-5"
            onSubmit={async (e) => {
              e.preventDefault();
              if (submitting) return;
              setSubmitting(true);
              try {
                const formData = new FormData(e.currentTarget);
                const response = await fetch("/api/admin/login", {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  credentials: "include",
                  body: JSON.stringify({
                    email: formData.get("email"),
                    password: formData.get("password"),
                  }),
                });
                if (response.ok) {
                  showNotification("Welcome back", "success");
                  window.location.href = "/admin";
                } else {
                  const data = await response.json().catch(() => ({}));
                  showNotification(
                    data.error || "Invalid credentials",
                    "error",
                  );
                }
              } finally {
                setSubmitting(false);
              }
            }}
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-700 mb-1.5"
              >
                Work email
              </label>
              <input
                id="email"
                name="email"
                type="text"
                required
                autoComplete="username"
                className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="name@zarkandco.in"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-slate-700 mb-1.5"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                autoComplete="current-password"
                className="w-full rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full rounded-lg bg-blue-600 text-white py-3 font-medium hover:bg-blue-700 disabled:opacity-60 transition-colors"
            >
              {submitting ? "Signing in…" : "Sign in"}
            </button>
          </form>

          <p className="mt-6 text-xs text-slate-500">
            Lost access? Contact your administrator to reset your password.
          </p>
        </div>
      </div>
    </div>
  );
}
