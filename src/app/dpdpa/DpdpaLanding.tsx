'use client';

import { useMemo, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

type Question = {
  id: string;
  weight:
    | 'consent'
    | 'vendor'
    | 'breach'
    | 'retention'
    | 'children'
    | 'security'
    | 'grievance'
    | 'dpo'
    | 'transfer'
    | 'staff'
    | 'size';
  text: string;
  options: { label: string; score: number }[];
};

type Answer = { optIdx: number; score: number; weight: Question['weight'] };

type Risk = 'HIGH' | 'MEDIUM' | 'LOW';

export default function DpdpaLanding() {
  const reduceMotion = useReducedMotion();
  const questions: Question[] = useMemo(
    () => [
      {
        id: 'q1',
        weight: 'consent',
        text: 'Does your school obtain explicit written consent from parents before collecting or processing student personal data?',
        options: [
          { label: 'Yes — we have a formal documented consent process', score: 0 },
          { label: 'Partially — we have verbal or informal consent', score: 2 },
          { label: 'No — we collect data without formal consent', score: 4 },
          { label: 'We are unsure of our current process', score: 3 },
        ],
      },
      {
        id: 'q2',
        weight: 'vendor',
        text: 'How many third-party EdTech or software vendors (ERP, LMS, apps) have access to your student data?',
        options: [
          { label: 'None — we use only in-house systems', score: 0 },
          { label: '1–3 vendors with written data agreements', score: 1 },
          { label: '4–10 vendors, some without formal agreements', score: 3 },
          { label: 'More than 10 vendors, most without formal agreements', score: 4 },
        ],
      },
      {
        id: 'q3',
        weight: 'breach',
        text: 'Does your school have a documented procedure for detecting and reporting a data breach?',
        options: [
          { label: 'Yes — with clear escalation and notification steps', score: 0 },
          { label: 'Partially — there is an informal process', score: 2 },
          { label: 'No documented procedure exists', score: 4 },
          { label: 'We have never considered this', score: 4 },
        ],
      },
      {
        id: 'q4',
        weight: 'retention',
        text: "What is your school's policy on how long student data is retained after a student leaves?",
        options: [
          { label: 'We have a defined retention and erasure policy', score: 0 },
          { label: 'We retain data indefinitely with no clear policy', score: 4 },
          { label: 'We delete data when we remember to', score: 3 },
          { label: 'We have not thought about this', score: 4 },
        ],
      },
      {
        id: 'q5',
        weight: 'children',
        text: "Do any of your school's apps or platforms track student behaviour, usage patterns, or serve targeted content to students?",
        options: [
          { label: 'No — none of our tools do this', score: 0 },
          { label: 'Some do — but we have reviewed and restricted this', score: 1 },
          { label: 'Yes — several platforms track student behaviour', score: 4 },
          { label: 'We are not sure what our vendors collect', score: 3 },
        ],
      },
      {
        id: 'q6',
        weight: 'security',
        text: 'What technical security measures does your school have in place to protect student data?',
        options: [
          { label: 'Encryption, access controls, DLP, regular audits', score: 0 },
          { label: 'Basic password protection and access controls', score: 2 },
          { label: 'Minimal — mostly rely on vendor security', score: 3 },
          { label: 'No specific data security measures in place', score: 4 },
        ],
      },
      {
        id: 'q7',
        weight: 'grievance',
        text: 'Can parents or students easily raise a complaint or access request regarding their data?',
        options: [
          { label: 'Yes — we have a clear, published grievance mechanism', score: 0 },
          { label: 'Parents can contact the office informally', score: 2 },
          { label: 'No formal mechanism exists', score: 4 },
          { label: 'We have not considered this', score: 3 },
        ],
      },
      {
        id: 'q8',
        weight: 'dpo',
        text: 'Does your school have a designated Data Protection Officer or a responsible person for data compliance?',
        options: [
          { label: 'Yes — a dedicated DPO is in place', score: 0 },
          { label: 'Someone handles it alongside other duties', score: 2 },
          { label: 'No — no one is designated for this', score: 4 },
          { label: 'We do not know if this is required', score: 3 },
        ],
      },
      {
        id: 'q9',
        weight: 'transfer',
        text: 'Does your school use cloud services or software hosted outside India (e.g. Google Workspace, Microsoft 365, foreign LMS)?',
        options: [
          { label: 'No — all data stays within India', score: 0 },
          { label: 'Yes — and we have reviewed cross-border transfer compliance', score: 1 },
          { label: 'Yes — and we have not reviewed compliance', score: 3 },
          { label: 'We are unsure where our data is hosted', score: 3 },
        ],
      },
      {
        id: 'q10',
        weight: 'staff',
        text: 'Have your staff (teachers, admin, IT) received any training on data protection or DPDPA requirements?',
        options: [
          { label: 'Yes — formal training with documented records', score: 0 },
          { label: 'Informal awareness, no formal training', score: 2 },
          { label: 'No training has been provided', score: 4 },
          { label: 'Planning to do this but not yet done', score: 3 },
        ],
      },
      {
        id: 'q11',
        weight: 'size',
        text: 'How many students are currently enrolled in your school or school group?',
        options: [
          { label: 'Under 500 students', score: 1 },
          { label: '500 – 2,000 students', score: 2 },
          { label: '2,000 – 10,000 students', score: 3 },
          { label: 'Over 10,000 students (school group/chain)', score: 4 },
        ],
      },
    ],
    []
  );

  const [answers, setAnswers] = useState<Record<number, Answer>>({});
  const [currentQ, setCurrentQ] = useState(0);
  const [isLoadingResult, setIsLoadingResult] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [risk, setRisk] = useState<{ risk: Risk; pct: number; recs: string[]; weakAreas: Question['weight'][] } | null>(null);
  const [expandedService, setExpandedService] = useState<Question['weight'] | null>(null);

  const progressPct = Math.round((currentQ / questions.length) * 100);

  const canNext = answers[currentQ] !== undefined;

  const selectOption = (qIdx: number, optIdx: number, score: number) => {
    setAnswers((prev) => ({
      ...prev,
      [qIdx]: { optIdx, score, weight: questions[qIdx].weight },
    }));
  };

  const goNext = () => {
    if (!canNext) return;
    if (currentQ < questions.length - 1) {
      setCurrentQ((q) => q + 1);
      return;
    }

    setIsLoadingResult(true);
    setShowResult(false);

    window.setTimeout(() => {
      setIsLoadingResult(false);
      const computed = computeResult(answers, questions);
      setRisk(computed);
      setShowResult(true);
    }, 2200);
  };

  const goBack = () => {
    if (currentQ <= 0) return;
    setCurrentQ((q) => q - 1);
  };

  const prefillContact = () => {
    if (!risk) return;

    const msg = document.getElementById('cf-message') as HTMLTextAreaElement | null;
    if (msg)
      msg.value = `I completed the DPDPA compliance assessment and my school's risk level is: ${risk.risk}. I would like a detailed compliance consultation.`;

    const svc = document.getElementById('cf-service') as HTMLSelectElement | null;
    if (svc) svc.value = 'Full Compliance Package';

    const riskField = document.getElementById('cf-risk') as HTMLInputElement | null;
    if (riskField) riskField.value = `${risk.risk} (${risk.pct}%)`;
  };

  return (
    <div className="bg-white text-slate-800">
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950">
        <div className="absolute inset-0 opacity-30" aria-hidden>
          <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-blue-500 blur-2xl" />
          <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-indigo-500 blur-2xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
            >
              <div className="inline-flex items-center rounded-full bg-white/10 px-4 py-2 text-xs font-semibold tracking-wider text-blue-100 ring-1 ring-white/15">
                DPDPA 2023 COMPLIANCE
              </div>
              <h1 className="mt-6 text-4xl sm:text-5xl font-bold text-white leading-tight">
                Is Your School Legally Protected Under India&apos;s New Data Law?
              </h1>
              <p className="mt-6 text-lg text-blue-100/80 max-w-2xl">
                The Digital Personal Data Protection Act 2023 places serious obligations on every school in India.
                Non-compliance with children&apos;s data rules carries penalties up to ₹200 Crore. K Raghav & Associates
                helps schools across Lucknow and Uttar Pradesh stay compliant.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href="#assessment"
                  className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-3 text-blue-700 font-medium hover:bg-blue-50 transition-colors"
                >
                  Take the Free Assessment
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center rounded-lg border-2 border-white/70 px-8 py-3 text-white font-medium hover:bg-white/10 transition-colors"
                >
                  Our Services
                </a>
              </div>
            </motion.div>

            <motion.div
              className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur shadow-lg"
              initial={reduceMotion ? false : { opacity: 0, y: 10 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              whileHover={reduceMotion ? undefined : { y: -2 }}
            >
              <div className="text-xs font-semibold tracking-wider text-blue-100/80">DPDPA Penalty Schedule</div>
              <div className="mt-4 space-y-3 text-sm">
                {[
                  { label: 'Failure to secure student data', amt: '₹250 Cr' },
                  { label: "Children's data violations", amt: '₹200 Cr' },
                  { label: 'Breach notification failure', amt: '₹200 Cr' },
                  { label: 'Significant Data Fiduciary breach', amt: '₹150 Cr' },
                  { label: 'Other provision breaches', amt: '₹50 Cr' },
                ].map((row) => (
                  <div key={row.label} className="flex items-center justify-between border-b border-white/10 pb-3 last:border-b-0 last:pb-0">
                    <span className="text-blue-100/70 pr-3">{row.label}</span>
                    <span className="text-rose-200 font-semibold">{row.amt}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-3xl"
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
          >
            <h2 className="text-3xl font-bold text-slate-900">Why schools are exposed</h2>
            <p className="mt-4 text-slate-600">
              Schools collect and process vast amounts of personal data — from minors. The DPDPA is unambiguous about
              responsibilities and liabilities.
            </p>
          </motion.div>

          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: '👤',
                title: 'Parental Consent Mandatory',
                desc: "Every student's data requires verifiable parental consent before processing.",
              },
              {
                icon: '🏢',
                title: 'Vendor Liability Falls on You',
                desc: 'If vendors misuse student data, the school can still be held liable as Data Fiduciary.',
              },
              {
                icon: '🚫',
                title: 'No Behavioural Tracking',
                desc: 'Targeted advertising and behavioural monitoring directed at children is strictly restricted.',
              },
              {
                icon: '🗑️',
                title: 'Data Erasure Obligations',
                desc: 'Personal data should be erased once its purpose is served; indefinite retention is risky.',
              },
            ].map((c, idx) => (
              <motion.div
                key={c.title}
                className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
                initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.22, ease: 'easeOut', delay: reduceMotion ? 0 : idx * 0.015 }}
                whileHover={reduceMotion ? undefined : { y: -2 }}
              >
                <div className="h-10 w-10 rounded-lg bg-blue-50 flex items-center justify-center text-lg">{c.icon}</div>
                <h3 className="mt-4 font-semibold text-slate-900">{c.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-3xl"
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
          >
            <h2 className="text-3xl font-bold text-slate-900">End-to-End DPDPA compliance for schools</h2>
            <p className="mt-4 text-slate-600">
              From assessment to implementation, we handle every aspect of your school&apos;s data protection obligations.
            </p>
          </motion.div>

          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                id: 'consent' as const,
                num: '01',
                title: 'DPDPA Compliance Gap Analysis',
                tag: 'Section 8 & 9',
                desc: 'Audit current practices and deliver a prioritised remediation roadmap.',
                more: 'We map data flows (students, parents, staff), identify lawful basis gaps, and produce a step-by-step remediation plan with timelines.',
              },
              {
                id: 'vendor' as const,
                num: '02',
                title: 'Parental Consent Platform',
                tag: 'Section 5, 6 & 9',
                desc: 'Capture, store, and track verifiable parental consent workflows.',
                more: 'Create verifiable consent journeys, multilingual notices, audit logs, and consent withdrawal workflows aligned to children-specific rules.',
              },
              {
                id: 'security' as const,
                num: '03',
                title: 'DLP & Security Safeguards',
                tag: 'Section 8(5)',
                desc: 'Technical safeguards to prevent unauthorised access, breach, or misuse.',
                more: 'Access control hardening, least privilege, logging, data classification, and controls for email/drive/exports to reduce leakage.',
              },
              {
                id: 'breach' as const,
                num: '04',
                title: 'Breach Detection & Notification',
                tag: 'Section 8(6)',
                desc: 'Incident response workflows and timely breach notification readiness.',
                more: 'We design escalation matrices, incident runbooks, and evidence capture to reduce response time and support required reporting.',
              },
              {
                id: 'dpo' as const,
                num: '05',
                title: 'Data Protection Officer (DPO)',
                tag: 'Section 10',
                desc: 'Outsourced DPO support for Significant Data Fiduciaries and governance.',
                more: 'Periodic governance reviews, grievance handling coordination, policy updates, and board-ready reporting.',
              },
              {
                id: 'retention' as const,
                num: '06',
                title: 'EdTech Vendor Audit & Contracts',
                tag: 'Section 8(2)',
                desc: 'Review vendor agreements and align Data Processor clauses to DPDPA.',
                more: 'We update contracts for processor obligations, deletion/return of data, breach SLAs, sub-processor controls, and audit rights.',
              },
            ].map((s, idx) => {
              const isExpanded = expandedService === s.id;
              const isHighlighted = Boolean(risk?.weakAreas?.includes(s.id));

              return (
                <motion.button
                  type="button"
                  key={s.num}
                  onClick={() => setExpandedService((prev) => (prev === s.id ? null : s.id))}
                  className={`text-left rounded-xl border bg-white p-6 shadow-sm hover:shadow-md transition-shadow focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                    isHighlighted ? 'border-blue-400' : 'border-slate-200'
                  }`}
                  initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                  whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.22, ease: 'easeOut', delay: reduceMotion ? 0 : idx * 0.012 }}
                  whileHover={reduceMotion ? undefined : { y: -2 }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-xs font-semibold text-blue-700 tracking-wider">{s.num} — SERVICE</div>
                      <h3 className="mt-3 text-lg font-semibold text-slate-900">{s.title}</h3>
                      <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
                    </div>
                    <div className="mt-1 text-slate-400">
                      {isExpanded ? '−' : '+'}
                    </div>
                  </div>

                  <span className="mt-4 inline-flex items-center rounded-md bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                    {s.tag}
                  </span>

                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={reduceMotion ? false : { opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.16, ease: 'easeOut' }}
                        className="overflow-hidden"
                      >
                        <div className="mt-4 text-sm text-slate-700">
                          {s.more}
                        </div>
                        {isHighlighted && (
                          <div className="mt-3 text-xs font-semibold text-blue-700">
                            Highlighted based on your assessment results
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      <section id="assessment" className="py-16 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-3xl"
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
          >
            <h2 className="text-3xl font-bold text-slate-900">Free compliance assessment</h2>
            <p className="mt-4 text-slate-600">
              Answer 11 questions about your current data practices. We&apos;ll analyse your responses and recommend the right compliance services.
            </p>
          </motion.div>

          <div className="mt-10 max-w-3xl rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
            <div className="bg-slate-900 px-6 py-6">
              <div className="text-white text-xl font-semibold">School Compliance Assessment</div>
              <div className="mt-1 text-sm text-blue-100/70">Powered by K Raghav & Associates — takes about 3 minutes</div>
              <div className="mt-4 h-2 rounded bg-white/10 overflow-hidden">
                <div className="h-2 bg-blue-400" style={{ width: `${showResult || isLoadingResult ? 100 : progressPct}%` }} />
              </div>
              <div className="mt-2 text-xs text-blue-100/70">
                {isLoadingResult ? 'Analysing your responses...' : `Question ${currentQ + 1} of ${questions.length}`}
              </div>
            </div>

            <div className="p-6">
              {!showResult && !isLoadingResult && (
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={currentQ}
                    initial={reduceMotion ? false : { opacity: 0, x: 6 }}
                    animate={reduceMotion ? undefined : { opacity: 1, x: 0 }}
                    exit={reduceMotion ? undefined : { opacity: 0, x: -6 }}
                    transition={{ duration: 0.12, ease: 'easeOut' }}
                  >
                    <div className="text-xs font-semibold tracking-wider text-blue-700">Question {currentQ + 1} of {questions.length}</div>
                    <div className="mt-2 text-lg font-medium text-slate-900">{questions[currentQ].text}</div>

                    <div className="mt-6 space-y-3">
                      {questions[currentQ].options.map((opt, oi) => {
                        const isSelected = answers[currentQ]?.optIdx === oi;
                        return (
                          <label
                            key={oi}
                            className={`flex gap-3 rounded-xl border px-4 py-3 cursor-pointer transition-colors ${
                              isSelected
                                ? 'border-blue-500 bg-blue-50'
                                : 'border-slate-200 bg-white hover:bg-slate-50'
                            }`}
                          >
                            <input
                              type="radio"
                              name={`q${currentQ}`}
                              value={oi}
                              checked={isSelected}
                              onChange={() => selectOption(currentQ, oi, opt.score)}
                              className="mt-1"
                            />
                            <span className="text-sm text-slate-800">{opt.label}</span>
                          </label>
                        );
                      })}
                    </div>

                    <div className="mt-8 flex items-center justify-between">
                      {currentQ > 0 ? (
                        <button
                          className="rounded-lg border border-slate-200 px-4 py-2 text-sm text-slate-700 hover:bg-slate-50"
                          onClick={goBack}
                        >
                          ← Back
                        </button>
                      ) : (
                        <span />
                      )}
                      <button
                        className="rounded-lg bg-blue-600 px-5 py-2 text-sm font-semibold text-white hover:bg-blue-700 disabled:opacity-50"
                        onClick={goNext}
                        disabled={!canNext}
                      >
                        {currentQ < questions.length - 1 ? 'Next Question →' : 'See My Results →'}
                      </button>
                    </div>
                  </motion.div>
                </AnimatePresence>
              )}

              {isLoadingResult && (
                <div className="py-12 text-center">
                  <div className="mx-auto h-10 w-10 animate-spin rounded-full border-2 border-slate-200 border-t-blue-600" />
                  <p className="mt-4 text-sm text-slate-600">Analysing your responses against DPDPA requirements...</p>
                </div>
              )}

              {showResult && risk && (
                <div>
                  <div
                    className={`rounded-2xl border p-5 ${
                      risk.risk === 'HIGH'
                        ? 'border-rose-200 bg-rose-50'
                        : risk.risk === 'MEDIUM'
                          ? 'border-amber-200 bg-amber-50'
                          : 'border-emerald-200 bg-emerald-50'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`min-w-[84px] rounded-xl px-3 py-2 text-center text-lg font-bold text-white ${
                          risk.risk === 'HIGH'
                            ? 'bg-rose-600'
                            : risk.risk === 'MEDIUM'
                              ? 'bg-amber-600'
                              : 'bg-emerald-700'
                        }`}
                      >
                        {risk.risk}
                      </div>
                      <div>
                        <div className="font-semibold text-slate-900">Risk Level: {risk.risk} (Score: {risk.pct}%)</div>
                        <div className="mt-1 text-sm text-slate-600">
                          {risk.risk === 'HIGH'
                            ? 'Your school has significant DPDPA compliance gaps. Immediate action is recommended.'
                            : risk.risk === 'MEDIUM'
                              ? 'Your school has partial compliance in place but key gaps remain.'
                              : 'Your school has a reasonable compliance foundation. Some areas may need strengthening.'}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 text-xs font-semibold tracking-wider text-slate-700">RECOMMENDED SERVICES</div>
                  <div className="mt-3 space-y-2">
                    {risk.recs.slice(0, 6).map((r, idx) => (
                      <div key={idx} className="rounded-xl bg-slate-50 border border-slate-200 px-4 py-3 text-sm text-slate-800">
                        {r}
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 rounded-2xl bg-slate-900 p-6 text-center">
                    <div className="text-white text-lg font-semibold">Get a Detailed Compliance Report</div>
                    <div className="mt-2 text-sm text-blue-100/70">
                      Our experts will review your responses and deliver a personalised DPDPA compliance roadmap.
                    </div>
                    <a
                      href="#contact"
                      className="mt-5 inline-flex items-center justify-center rounded-lg bg-white px-8 py-3 text-blue-700 font-semibold hover:bg-blue-50 transition-colors"
                      onClick={prefillContact}
                    >
                      Contact Our Team →
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Contact our team</h2>
              <p className="mt-4 text-slate-600">
                Our DPDPA specialists work with schools across Lucknow, Kanpur, Varanasi and Uttar Pradesh. Share your context and we&apos;ll recommend a practical compliance roadmap.
              </p>
              <div className="mt-6 space-y-3 text-sm text-slate-700">
                <div><span className="font-semibold">Email:</span> raghav@kraca.in</div>
                <div><span className="font-semibold">Phone:</span> +91-9936104447</div>
                <div>
                  <span className="font-semibold">Head Office:</span>
                  <div className="mt-1">105, Chintels House, 16 Station Road, Lucknow - 226001, UP, India</div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <form id="contact-form" action="https://formspree.io/f/xaqvebpb" method="POST" className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-600">Your Name</label>
                    <input id="cf-name" name="name" required placeholder="Principal / Admin name" className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600">School Name</label>
                    <input id="cf-school" name="school" placeholder="School / Institution name" className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-600">Email Address</label>
                    <input id="cf-email" name="email" type="email" required placeholder="your@school.edu.in" className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600">Phone Number</label>
                    <input id="cf-phone" name="phone" type="tel" placeholder="+91 XXXXX XXXXX" className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-600">Service of Interest</label>
                  <select id="cf-service" name="service" defaultValue="" className="mt-2 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="">Select a service</option>
                    <option>DPDPA Gap Assessment</option>
                    <option>Consent Management Platform</option>
                    <option>DLP & Security Safeguards</option>
                    <option>Breach Detection & Notification</option>
                    <option>DPO as a Service</option>
                    <option>EdTech Vendor Audit</option>
                    <option>Full Compliance Package</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-600">Message</label>
                  <textarea id="cf-message" name="message" placeholder="Tell us about your school and any specific compliance concerns..." className="mt-2 min-h-[110px] w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-500" />
                </div>

                <input type="hidden" name="risk_level" id="cf-risk" />
                <input type="hidden" name="_subject" value="New DPDPA Compliance Enquiry — K Raghav & Associates" />
                <input type="hidden" name="_next" value="" />

                <button type="submit" className="w-full rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white hover:bg-blue-700">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function computeResult(answers: Record<number, Answer>, questions: Question[]) {
  const totalScore = Object.values(answers).reduce((s, a) => s + a.score, 0);
  const maxScore = questions.length * 4;
  const pct = Math.round((totalScore / maxScore) * 100);

  const weakAreas: Question['weight'][] = [];
  if ((answers[0]?.score || 0) >= 2) weakAreas.push('consent');
  if ((answers[1]?.score || 0) >= 3) weakAreas.push('vendor');
  if ((answers[2]?.score || 0) >= 2) weakAreas.push('breach');
  if ((answers[3]?.score || 0) >= 3) weakAreas.push('retention');
  if ((answers[4]?.score || 0) >= 3) weakAreas.push('children');
  if ((answers[5]?.score || 0) >= 2) weakAreas.push('security');
  if ((answers[6]?.score || 0) >= 2) weakAreas.push('grievance');
  if ((answers[7]?.score || 0) >= 2) weakAreas.push('dpo');
  if ((answers[8]?.score || 0) >= 2) weakAreas.push('transfer');
  if ((answers[9]?.score || 0) >= 2) weakAreas.push('staff');

  const isLargeSchool = (answers[10]?.score || 0) >= 3;

  let risk: Risk;
  if (pct >= 55) risk = 'HIGH';
  else if (pct >= 28) risk = 'MEDIUM';
  else risk = 'LOW';

  const serviceMap: Record<Question['weight'], string> = {
    consent: '📋 Consent Management Platform — verifiable parental consent workflows',
    vendor: '📄 EdTech Vendor Audit & DPDPA-compliant contract review',
    breach: '🔔 Breach Detection & Notification System',
    retention: '🗑️ Data Retention & Erasure Policy implementation',
    children: "🧒 Children's Data Compliance Audit (Section 9)",
    security: '🔒 DLP & Technical Security Safeguards',
    grievance: '📬 Grievance Redressal Mechanism setup',
    dpo: '🏛️ DPO-as-a-Service — dedicated Data Protection Officer',
    transfer: '🌐 Cross-border Data Transfer Compliance Review',
    staff: '🎓 Staff Data Protection Training Programme',
    size: '',
  };

  const recs =
    weakAreas.length > 0
      ? weakAreas.map((w) => serviceMap[w]).filter(Boolean)
      : ['✅ Gap Assessment to document your compliance posture', '📊 Annual DPDPA Compliance Audit'];

  if (isLargeSchool && !weakAreas.includes('dpo')) {
    recs.push('🏛️ Data Protection Impact Assessment (DPIA) for Significant Data Fiduciaries');
  }

  return { risk, pct, recs, weakAreas };
}
