"use client";

import { useState } from "react";
import Modal from "./Modal";
import { useNotification } from "./Notification";

const INPUT_CLASS =
  "w-full rounded-xl border border-[color:var(--border)] bg-white px-3.5 py-2.5 text-[14px] text-[color:var(--ink-900)] placeholder:text-[color:var(--ink-300)] focus:border-[color:var(--accent-600)] focus:outline-none focus:ring-2 focus:ring-[color:var(--accent-100)] transition";

const LABEL_CLASS =
  "block text-[12px] font-medium text-[color:var(--ink-700)] mb-1.5 uppercase tracking-[0.12em]";

export default function ContactDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    message: "",
  });
  const { showNotification } = useNotification();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        showNotification(
          "Thank you for your message. We will get back to you soon.",
          "success",
        );
        setIsOpen(false);
        setFormData({ name: "", email: "", organization: "", message: "" });
      } else {
        showNotification(
          "There was an error sending your message. Please try again.",
          "error",
        );
      }
    } catch {
      showNotification(
        "There was an error sending your message. Please try again.",
        "error",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="group inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--ink-900)] px-6 py-3 text-sm font-medium text-white hover:bg-[color:var(--accent-700)] transition-colors"
      >
        Get in touch
        <svg
          className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14M13 5l7 7-7 7" />
        </svg>
      </button>

      <Modal
        open={isOpen}
        onClose={() => setIsOpen(false)}
        title="Start a conversation"
        description="We respond to general enquiries within two business days."
        size="lg"
      >
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="cd-name" className={LABEL_CLASS}>
              Name *
            </label>
            <input
              type="text"
              id="cd-name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className={INPUT_CLASS}
            />
          </div>
          <div>
            <label htmlFor="cd-email" className={LABEL_CLASS}>
              Email *
            </label>
            <input
              type="email"
              id="cd-email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className={INPUT_CLASS}
            />
          </div>
          <div>
            <label htmlFor="cd-org" className={LABEL_CLASS}>
              Organisation
            </label>
            <input
              type="text"
              id="cd-org"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
              className={INPUT_CLASS}
            />
          </div>
          <div>
            <label htmlFor="cd-message" className={LABEL_CLASS}>
              Message *
            </label>
            <textarea
              id="cd-message"
              name="message"
              rows={4}
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="A few lines about your enquiry."
              className={INPUT_CLASS}
            />
          </div>
          <div className="flex flex-col-reverse sm:flex-row gap-3 pt-2">
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="flex-1 inline-flex items-center justify-center rounded-full border border-[color:var(--border-strong)] bg-white px-5 py-2.5 text-[13.5px] font-medium text-[color:var(--ink-700)] hover:border-[color:var(--ink-700)] transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--ink-900)] px-5 py-2.5 text-[13.5px] font-medium text-white hover:bg-[color:var(--accent-700)] disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin h-4 w-4 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="3"
                      className="opacity-25"
                    />
                    <path
                      fill="currentColor"
                      className="opacity-75"
                      d="M4 12a8 8 0 018-8V0C5.4 0 0 5.4 0 12h4z"
                    />
                  </svg>
                  Sending…
                </>
              ) : (
                <>
                  Send message
                  <svg
                    className="w-3.5 h-3.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </>
              )}
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
}
