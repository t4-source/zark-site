"use client";

import { useState } from "react";
import Modal from "./Modal";
import { useNotification } from "./Notification";

interface JobApplicationDialogProps {
  position: string;
  location: string;
  type: string;
}

const INPUT_CLASS =
  "w-full rounded-xl border border-[color:var(--border)] bg-white px-3.5 py-2.5 text-[14px] text-[color:var(--ink-900)] placeholder:text-[color:var(--ink-300)] focus:border-[color:var(--accent-600)] focus:outline-none focus:ring-2 focus:ring-[color:var(--accent-100)] transition";

const LABEL_CLASS =
  "block text-[12px] font-medium text-[color:var(--ink-700)] mb-1.5 uppercase tracking-[0.12em]";

export default function JobApplicationDialog({
  position,
  location,
  type,
}: JobApplicationDialogProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "",
    resume: null as File | null,
    coverLetter: "",
  });
  const { showNotification } = useNotification();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const fd = new FormData();
      fd.append("name", formData.name);
      fd.append("email", formData.email);
      fd.append("phone", formData.phone);
      fd.append("experience", formData.experience);
      fd.append("coverLetter", formData.coverLetter);
      fd.append("position", position);
      fd.append("location", location);
      fd.append("type", type);
      if (formData.resume) fd.append("resume", formData.resume);

      const response = await fetch("/api/job-application", {
        method: "POST",
        body: fd,
      });

      if (response.ok) {
        showNotification(
          "Thank you for your application. We will review it and get back to you soon.",
          "success",
        );
        setIsOpen(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          experience: "",
          resume: null,
          coverLetter: "",
        });
      } else {
        showNotification(
          "There was an error submitting your application. Please try again.",
          "error",
        );
      }
    } catch {
      showNotification(
        "There was an error submitting your application. Please try again.",
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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setFormData({ ...formData, resume: e.target.files[0] });
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-[color:var(--ink-900)] px-5 py-2.5 text-[13.5px] font-medium text-white hover:bg-[color:var(--accent-700)] transition-colors"
      >
        Apply now
        <svg
          className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5"
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
        title={`Apply for ${position}`}
        description={`${location} · ${type}`}
        size="xl"
      >
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="jad-name" className={LABEL_CLASS}>
                Full name *
              </label>
              <input
                type="text"
                id="jad-name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className={INPUT_CLASS}
              />
            </div>
            <div>
              <label htmlFor="jad-email" className={LABEL_CLASS}>
                Email *
              </label>
              <input
                type="email"
                id="jad-email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className={INPUT_CLASS}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="jad-phone" className={LABEL_CLASS}>
                Phone *
              </label>
              <input
                type="tel"
                id="jad-phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className={INPUT_CLASS}
              />
            </div>
            <div>
              <label htmlFor="jad-experience" className={LABEL_CLASS}>
                Experience *
              </label>
              <input
                type="text"
                id="jad-experience"
                name="experience"
                required
                value={formData.experience}
                onChange={handleChange}
                placeholder="e.g. 2-3 years"
                className={INPUT_CLASS}
              />
            </div>
          </div>

          <div>
            <label htmlFor="jad-resume" className={LABEL_CLASS}>
              Resume / CV *
            </label>
            <input
              type="file"
              id="jad-resume"
              name="resume"
              required
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              className="w-full rounded-xl border border-[color:var(--border)] bg-white px-3.5 py-2.5 text-[13.5px] text-[color:var(--ink-700)] file:mr-3 file:rounded-full file:border-0 file:bg-[color:var(--accent-50)] file:px-3 file:py-1.5 file:text-[12px] file:font-medium file:text-[color:var(--accent-700)] hover:file:bg-[color:var(--accent-100)] focus:outline-none focus:ring-2 focus:ring-[color:var(--accent-100)] focus:border-[color:var(--accent-600)] transition"
            />
            <p className="text-[11.5px] text-[color:var(--ink-400)] mt-1.5">
              PDF, DOC or DOCX only
            </p>
          </div>

          <div>
            <label htmlFor="jad-cover" className={LABEL_CLASS}>
              Cover letter
            </label>
            <textarea
              id="jad-cover"
              name="coverLetter"
              rows={4}
              value={formData.coverLetter}
              onChange={handleChange}
              placeholder="Tell us why you're interested in this role."
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
                  Submitting…
                </>
              ) : (
                <>
                  Submit application
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
