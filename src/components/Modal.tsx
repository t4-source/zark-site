"use client";

import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  children: ReactNode;
  /** Max-width preset; default "lg" (~28rem). */
  size?: "md" | "lg" | "xl";
};

const SIZE_CLASS: Record<NonNullable<ModalProps["size"]>, string> = {
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-2xl",
};

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Modal({
  open,
  onClose,
  title,
  description,
  children,
  size = "lg",
}: ModalProps) {
  const reduce = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const titleId = useId();
  const descId = useId();
  const panelRef = useRef<HTMLDivElement | null>(null);

  // SSR guard
  useEffect(() => {
    setMounted(true);
  }, []);

  // Escape to close
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  // Lock body scroll while open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // Focus the panel when it opens
  useEffect(() => {
    if (open) {
      // Defer to allow the portal to mount
      const t = window.setTimeout(() => {
        panelRef.current?.focus();
      }, 0);
      return () => window.clearTimeout(t);
    }
  }, [open]);

  const handleBackdrop = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === e.currentTarget) onClose();
    },
    [onClose],
  );

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {open ? (
        <motion.div
          key="modal"
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
          aria-modal="true"
          role="dialog"
          aria-labelledby={titleId}
          aria-describedby={description ? descId : undefined}
          onMouseDown={handleBackdrop}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduce ? 0 : 0.18, ease: "easeOut" }}
        >
          {/* Backdrop */}
          <div
            aria-hidden
            className="absolute inset-0 bg-[color:var(--ink-900)]/45 backdrop-blur-sm"
          />

          {/* Panel */}
          <motion.div
            ref={panelRef}
            tabIndex={-1}
            className={`relative w-full ${SIZE_CLASS[size]} max-h-[90vh] overflow-y-auto rounded-3xl border border-[color:var(--border)] bg-white shadow-[0_28px_60px_-22px_rgba(11,37,69,0.35)] focus:outline-none`}
            initial={reduce ? false : { opacity: 0, y: 14, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: reduce ? 0 : 0.28, ease: EASE }}
            onMouseDown={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="relative px-6 sm:px-8 pt-7 pb-5 border-b border-[color:var(--border)]">
              <h2
                id={titleId}
                className="display text-xl sm:text-2xl text-[color:var(--ink-900)] pr-8"
              >
                {title}
              </h2>
              {description ? (
                <p
                  id={descId}
                  className="mt-2 text-[13.5px] text-[color:var(--ink-500)]"
                >
                  {description}
                </p>
              ) : null}
              <button
                type="button"
                onClick={onClose}
                aria-label="Close dialog"
                className="absolute top-5 right-5 inline-flex h-9 w-9 items-center justify-center rounded-full text-[color:var(--ink-500)] hover:bg-[color:var(--bg-muted)] hover:text-[color:var(--ink-900)] transition-colors"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Body */}
            <div className="px-6 sm:px-8 py-6">{children}</div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.body,
  );
}
