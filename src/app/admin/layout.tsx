"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

interface SessionUser {
  id: string;
  email: string;
  name: string;
  role: "admin" | "employee";
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<SessionUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();
  const isLogin =
    pathname === "/admin/login" || pathname === "/admin/login/";

  useEffect(() => {
    if (isLogin) {
      setIsLoading(false);
      return;
    }
    (async () => {
      try {
        const response = await fetch("/api/admin/verify", {
          credentials: "include",
        });
        const data = await response.json();
        if (response.ok && data.authenticated) {
          setUser(data.user);
        } else {
          router.push("/admin/login");
        }
      } catch {
        router.push("/admin/login");
      } finally {
        setIsLoading(false);
      }
    })();
  }, [router, pathname, isLogin]);

  if (isLogin) return <>{children}</>;

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="animate-pulse text-slate-500">Loading…</div>
      </div>
    );
  }
  if (!user) return null;

  const isAdmin = user.role === "admin";

  return (
    <div className="min-h-screen bg-slate-50">
      <nav className="bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/admin" className="flex items-center gap-3">
              <Image src="/zark.png" alt="" width={32} height={32} />
              <span className="font-semibold text-slate-900">
                ZARK Workspace
              </span>
            </Link>
            <div className="flex items-center gap-1 text-sm">
              <Link
                href="/admin"
                className="px-3 py-2 text-slate-600 hover:text-blue-700"
              >
                Dashboard
              </Link>
              <Link
                href="/admin/blogs"
                className="px-3 py-2 text-slate-600 hover:text-blue-700"
              >
                Blogs
              </Link>
              {isAdmin && (
                <Link
                  href="/admin/jobs"
                  className="px-3 py-2 text-slate-600 hover:text-blue-700"
                >
                  Jobs
                </Link>
              )}
              {isAdmin && (
                <Link
                  href="/admin/contacts"
                  className="px-3 py-2 text-slate-600 hover:text-blue-700"
                >
                  Messages
                </Link>
              )}
              <span className="mx-3 hidden sm:inline text-slate-400">|</span>
              <span className="hidden sm:inline text-slate-500">
                {user.name}{" "}
                <span
                  className={`ml-1 inline-flex items-center rounded-full px-2 py-0.5 text-xs ${
                    isAdmin
                      ? "bg-purple-100 text-purple-700"
                      : "bg-blue-100 text-blue-700"
                  }`}
                >
                  {user.role}
                </span>
              </span>
              <form
                onSubmit={async (e) => {
                  e.preventDefault();
                  await fetch("/api/admin/logout", {
                    method: "POST",
                    credentials: "include",
                  });
                  window.location.href = "/admin/login";
                }}
              >
                <button
                  type="submit"
                  className="ml-2 rounded-md border border-slate-300 px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-50"
                >
                  Sign out
                </button>
              </form>
            </div>
          </div>
        </div>
      </nav>
      <main>{children}</main>
    </div>
  );
}
