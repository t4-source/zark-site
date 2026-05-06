'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Skip auth check for login page (handle optional trailing slash)
    if (pathname === '/admin/login' || pathname === '/admin/login/') {
      setIsLoading(false);
      return;
    }

    // Check authentication via API
    const checkAuth = async () => {
      try {
        const response = await fetch('/api/admin/verify', { credentials: 'include' });
        const data = await response.json();
        
        if (response.ok && data.authenticated) {
          setIsAuthenticated(true);
        } else {
          router.push('/admin/login');
        }
      } catch (error) {
        router.push('/admin/login');
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, [router, pathname]);

  // Skip layout for login page (handle optional trailing slash)
  if (pathname === '/admin/login' || pathname === '/admin/login/') {
    return <>{children}</>;
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-slate-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <nav className="bg-white shadow-sm border-b">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-semibold text-slate-900">Admin Panel</h1>
            </div>
            <div className="flex items-center space-x-4">
              <a href="/admin/blogs" className="text-slate-600 hover:text-slate-900">Blogs</a>
              <a href="/admin/jobs" className="text-slate-600 hover:text-slate-900">Jobs</a>
              <a href="/admin/contacts" className="text-slate-600 hover:text-slate-900">Contacts</a>
              <form action="/api/admin/logout" method="post">
                <button type="submit" className="text-red-600 hover:text-red-900">Logout</button>
              </form>
            </div>
          </div>
        </div>
      </nav>
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  );
}
