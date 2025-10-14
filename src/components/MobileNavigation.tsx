'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function MobileNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button 
        className="md:hidden p-2 rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100"
        onClick={toggleMenu}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 absolute top-full left-0 right-0 z-50">
          <div className="px-4 py-2 space-y-1">
            <Link href="/" className="block px-3 py-2 text-sm text-slate-700 hover:text-blue-700 hover:bg-slate-50 rounded-md" onClick={toggleMenu}>Home</Link>
            <Link href="/who-we-are" className="block px-3 py-2 text-sm text-slate-700 hover:text-blue-700 hover:bg-slate-50 rounded-md" onClick={toggleMenu}>Who we are</Link>
            <Link href="/practice-areas" className="block px-3 py-2 text-sm text-slate-700 hover:text-blue-700 hover:bg-slate-50 rounded-md" onClick={toggleMenu}>Practice areas</Link>
            <Link href="/cybersecurity" className="block px-3 py-2 text-sm text-slate-700 hover:text-blue-700 hover:bg-slate-50 rounded-md" onClick={toggleMenu}>Cybersecurity Services</Link>
            <Link href="/blogs" className="block px-3 py-2 text-sm text-slate-700 hover:text-blue-700 hover:bg-slate-50 rounded-md" onClick={toggleMenu}>Blogs</Link>
            <Link href="/careers" className="block px-3 py-2 text-sm text-slate-700 hover:text-blue-700 hover:bg-slate-50 rounded-md" onClick={toggleMenu}>Career</Link>
            <Link href="/contact" className="block px-3 py-2 text-sm text-slate-700 hover:text-blue-700 hover:bg-slate-50 rounded-md" onClick={toggleMenu}>Contact</Link>
          </div>
        </div>
      )}
    </>
  );
}
