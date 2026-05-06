'use client';

import { useState } from 'react';
import { useNotification } from '@/components/Notification';

export default function Page() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { showNotification } = useNotification();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const formData = new FormData(e.currentTarget);
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      });
      
      if (response.ok) {
        showNotification('Thank you for your message! We will get back to you soon.', 'success');
        (e.target as HTMLFormElement).reset();
      } else {
        showNotification('There was an error sending your message. Please try again.', 'error');
      }
    } catch (error) {
      showNotification('There was an error sending your message. Please try again.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-2xl font-semibold text-slate-900 text-left">Contact</h1>
      <div className="mt-6 grid md:grid-cols-2 gap-8">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm text-slate-700 text-left">Name</label>
            <input name="name" className="mt-1 w-full rounded border border-slate-300 px-3 py-2" required />
          </div>
          <div>
            <label className="block text-sm text-slate-700 text-left">Email</label>
            <input name="email" type="email" className="mt-1 w-full rounded border border-slate-300 px-3 py-2" required />
          </div>
          <div>
            <label className="block text-sm text-slate-700 text-left">Message</label>
            <textarea name="message" className="mt-1 w-full rounded border border-slate-300 px-3 py-2" rows={5} required />
          </div>
          <button 
            type="submit" 
            disabled={isSubmitting}
            className="rounded bg-blue-600 text-white px-4 py-2 text-left disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </>
            ) : (
              'Send'
            )}
          </button>
        </form>
        <div className="text-sm text-slate-700">
          <p>
            Head Office: 105, Chintels House, 16 Station Road, Lucknow - 226001
          </p>
          <p className="mt-2">Phone: +91-9936104447</p>
          <p className="mt-2">Email: raghav@kraca.in</p>
        </div>
      </div>
    </div>
  );
}


