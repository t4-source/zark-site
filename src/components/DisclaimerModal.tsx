'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function DisclaimerModal() {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
    // Only show on home page and only once per session
    if (pathname === '/') {
      const hasSeenDisclaimer = sessionStorage.getItem('disclaimerAccepted');
      if (!hasSeenDisclaimer) {
        setOpen(true);
      }
    } else {
      // Close modal if user navigates away from homepage
      setOpen(false);
    }
  }, [pathname]);

  if (!mounted || !open) return null;

  function accept() {
    // Store in sessionStorage so it doesn't show again in this session
    sessionStorage.setItem('disclaimerAccepted', 'true');
    setOpen(false);
  }

  return (
    <div role="dialog" aria-modal="true" className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-slate-900/60" aria-hidden onClick={accept} />
      <div className="relative z-10 max-w-2xl mx-4 w-full rounded-lg bg-white shadow-xl border border-slate-200">
        <div className="p-6">
          <h2 className="text-lg font-semibold text-slate-900 mb-3">Important Disclaimer</h2>
          <div className="text-sm text-slate-700 space-y-3">
            <p>
              The rules of Institute of Chartered Accountants of India prohibit Chartered Accountants firm from advertising and soliciting work in the public domain. This website is solely meant for the purpose of information and not for the purpose of advertising. Z A R K & Co does not intend to solicit clients through this website. We do not take the responsibility of any action taken by any person based on the information posted here.
            </p>
            <p>
              By proceeding beyond this point the visitor acknowledges that the information provided on the website does not:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>amount to solicitation and advertising; and</li>
              <li>is meant only for their understanding about our activities and who we are.</li>
            </ul>
          </div>
          <div className="mt-6 flex justify-end">
            <button onClick={accept} className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600">
              I agree and proceed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


