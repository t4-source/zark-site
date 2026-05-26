// Information-only intents for the Vitta assistant.
//
// ICAI's Chartered Accountants Act, 1949 (First Schedule, Part I, Clauses 6
// & 7) prohibits chartered accountants in India from soliciting work, or
// advertising their professional attainments or services, in the public
// domain. Every response below is written to inform — not to solicit,
// promote, recommend or compare. Compliance-sensitive intents (fees,
// engagement requests, references, comparisons, tailored advice) deflect
// politely and direct the visitor to contact the firm directly.

export type IntentCategory =
  | "greeting"
  | "info"
  | "compliance"
  | "contact"
  | "meta"
  | "fallback";

export interface Intent {
  id: string;
  category: IntentCategory;
  /** Tokens or prefixes that, when present in the user message, score 1 each. */
  keywords?: string[];
  /** Additional regex patterns that score 2 each (more specific). */
  patterns?: RegExp[];
  /** Negative keywords — if present, this intent is excluded. */
  exclude?: string[];
  /** Static response, or a function of the matched message. */
  response: string;
  /** Intent IDs to surface as quick-reply chips after this response. */
  followUps?: string[];
  /** Priority bonus when scores are tied. Higher = wins ties. */
  priority?: number;
}

export const DEFAULT_FOLLOW_UPS = [
  "what-are-practice-areas",
  "cybersecurity",
  "dpdpa",
  "contact",
];

export const INTENTS: Intent[] = [
  // ─── Greetings & meta ────────────────────────────────────────────────────
  {
    id: "greeting",
    category: "greeting",
    keywords: [
      "hello",
      "hi",
      "hey",
      "namaste",
      "good morning",
      "good afternoon",
      "good evening",
      "greetings",
    ],
    response:
      "Hello. I am Vitta, an information-only assistant for Z A R K & Co LLP. I can describe the firm's practice areas, cybersecurity service offerings, DPDPA compliance work, offices and contact details. How can I help?",
    followUps: ["what-are-practice-areas", "cybersecurity", "offices", "contact"],
    priority: -1,
  },
  {
    id: "who-are-you",
    category: "meta",
    patterns: [
      /\bwho\s+are\s+you\b/,
      /\bwhat'?s?\s+your\s+name\b/,
      /\bare\s+you\s+a\s+(bot|human|person)\b/,
    ],
    keywords: ["vitta"],
    response:
      "I am Vitta — an automated information assistant for Z A R K & Co LLP. I am not a chartered accountant and cannot provide tailored professional advice. For any engagement please contact the firm directly.",
    followUps: ["help-topics", "contact"],
  },
  {
    id: "help-topics",
    category: "meta",
    keywords: ["help", "support", "topics", "options", "what can you do", "menu"],
    response:
      "Topics I can describe:\n• Practice areas (audit, taxation, risk & governance, banking & PSU work)\n• Cybersecurity services (VAPT, SOC, cloud security, vCISO)\n• DPDPA 2023 compliance\n• Firm history, partners, memberships\n• Office locations\n• Contact details and careers\n\nFor anything beyond general information, please contact the firm directly.",
    followUps: ["what-are-practice-areas", "cybersecurity", "dpdpa", "contact"],
  },
  {
    id: "thanks",
    category: "meta",
    keywords: ["thank", "thanks", "thx", "ty", "appreciate"],
    response: "You are welcome.",
    followUps: ["what-are-practice-areas", "cybersecurity", "contact"],
    priority: -2,
  },
  {
    id: "bye",
    category: "meta",
    keywords: ["bye", "goodbye", "see you", "exit", "quit", "later"],
    response: "Goodbye. The Contact page lists the firm's email and phone for any direct enquiry.",
    followUps: ["contact"],
    priority: -2,
  },

  // ─── Compliance guards (highest priority) ───────────────────────────────
  {
    id: "fees",
    category: "compliance",
    keywords: [
      "fee",
      "fees",
      "cost",
      "costs",
      "price",
      "prices",
      "pricing",
      "charge",
      "charges",
      "quote",
      "quotation",
      "rate",
      "rates",
      "package",
      "discount",
    ],
    patterns: [/\bhow\s+much\b/],
    response:
      "Under ICAI Rules (Part I of the First Schedule to the Chartered Accountants Act, 1949), chartered accountancy firms in India are not permitted to publish fees, rate cards or fee schedules in the public domain. For any engagement enquiry, please write to the firm at raghav@kraca.in or call +91-9936104447.",
    followUps: ["contact", "offices"],
    priority: 5,
  },
  {
    id: "hire-engage",
    category: "compliance",
    patterns: [
      /\b(hire|engage|appoint|retain|onboard)\b.*(you|your|firm|zark)/,
      /\b(can|could|would)\s+you\s+(do|handle|take|prepare|file|audit|review)\b/,
      /\bi\s+(want|need|would like)\s+to\s+(hire|engage|appoint)\b/,
    ],
    response:
      "This assistant only provides general information about the firm. It cannot accept or commit to engagements. To discuss a possible engagement, please contact the firm directly at raghav@kraca.in or +91-9936104447.",
    followUps: ["contact", "offices"],
    priority: 5,
  },
  {
    id: "tailored-advice",
    category: "compliance",
    patterns: [
      /\b(advice|advise|consult|opinion|guidance)\s+(on|for|about|regarding)\b/,
      /\bwhat\s+should\s+i\s+do\b/,
      /\bis\s+it\s+(legal|allowed|permitted|exempt|taxable)\b/,
      /\bhow\s+(do|should|can)\s+i\s+(file|claim|deduct|save|reduce|avoid)\b/,
    ],
    response:
      "Tailored professional advice on tax, audit, regulatory or compliance matters is not provided through this assistant. For any guidance specific to your situation, please contact the firm directly — raghav@kraca.in or +91-9936104447.",
    followUps: ["contact", "what-are-practice-areas"],
    priority: 4,
  },
  {
    id: "client-list",
    category: "compliance",
    patterns: [
      /\b(client|customer|reference|referral|case\s*stud(y|ies)|portfolio)s?\b/,
      /\bwho\s+(are|do)\s+you\s+(serve|work\s+with|audit)\b/,
    ],
    response:
      "ICAI rules do not permit chartered accountancy firms to publish client names, references or case studies in the public domain. Sector-level information — public-sector undertakings, banking & financial institutions and private enterprise — is on the Sectors section of the home page.",
    followUps: ["sectors", "what-are-practice-areas"],
    priority: 4,
  },
  {
    id: "comparison",
    category: "compliance",
    patterns: [
      /\bbetter\s+than\b/,
      /\bcompare(d)?\s+(to|with)\b/,
      /\bversus\b|\bvs\b/,
      /\bwhy\s+(choose|hire|pick)\b/,
      /\bare\s+you\s+the\s+best\b/,
    ],
    response:
      "I cannot compare this firm with any other. ICAI rules restrict comparative claims in the public domain. The Practice Areas pages describe the work the firm engages in, for general understanding.",
    followUps: ["what-are-practice-areas", "memberships"],
    priority: 4,
  },
  {
    id: "testimonial",
    category: "compliance",
    keywords: ["testimonial", "review", "rating", "feedback", "endorsement", "praise"],
    response:
      "ICAI rules do not permit chartered accountancy firms to publish client testimonials or endorsements in the public domain.",
    followUps: ["what-are-practice-areas", "memberships"],
    priority: 4,
  },
  {
    id: "guarantee",
    category: "compliance",
    keywords: ["guarantee", "assured", "promise", "guarantee result"],
    patterns: [/\bsuccess\s+rate\b/, /\bwin\s+rate\b/],
    response:
      "No guarantees about specific outcomes can be made through this assistant. Audit, tax and regulatory work involves professional judgement under the applicable regulations.",
    followUps: ["what-are-practice-areas", "contact"],
    priority: 4,
  },

  // ─── Contact / offices / appointments ───────────────────────────────────
  {
    id: "contact",
    category: "contact",
    keywords: [
      "contact",
      "phone",
      "email",
      "mail",
      "call",
      "reach",
      "number",
      "whatsapp",
    ],
    response:
      "Contact details:\nEmail: raghav@kraca.in\nPhone: +91-9936104447\nHead Office: 105, Chintels House, 16 Station Road, Lucknow — 226001, UP, India.\nThe Contact page lists office hours.",
    followUps: ["offices", "appointment"],
  },
  {
    id: "offices",
    category: "info",
    keywords: [
      "office",
      "offices",
      "location",
      "locations",
      "address",
      "branch",
      "branches",
      "where",
      "city",
      "cities",
      "lucknow",
      "jamshedpur",
      "varanasi",
      "ghaziabad",
    ],
    response:
      "Offices:\n• Lucknow (head office) — 105, Chintels House, 16 Station Road, Lucknow — 226001\n• Jamshedpur, Jharkhand — 16/3, New Housing Colony, Adityapur — 831013\n• Varanasi, Uttar Pradesh — 3/1380, Rampur Ward, Ramnagar — 221008\n• Ghaziabad, Uttar Pradesh — A 801, Exotica East Square, Ahinsa Khand 2, Indirapuram — 201014",
    followUps: ["contact", "appointment"],
  },
  {
    id: "appointment",
    category: "contact",
    keywords: [
      "appointment",
      "meeting",
      "consultation",
      "schedule",
      "book",
      "available",
      "availability",
      "visit",
    ],
    response:
      "For an appointment please contact the firm directly at raghav@kraca.in or +91-9936104447. The assistant does not handle scheduling.",
    followUps: ["contact", "offices"],
  },

  // ─── Firm information ───────────────────────────────────────────────────
  {
    id: "about",
    category: "info",
    keywords: [
      "about",
      "who",
      "what is zark",
      "tell me about",
      "history",
      "background",
      "story",
      "founded",
      "established",
      "incorporation",
      "incorporated",
      "since",
      "year",
      "years",
      "old",
      "experience",
    ],
    response:
      "Z A R K & Co LLP is a Chartered Accountancy LLP established on 4 April 1997, based in Lucknow with offices in Jamshedpur, Varanasi and Ghaziabad. The firm engages in audit, assurance, taxation, risk and governance practice areas, and offers cybersecurity and DPDPA compliance services.",
    followUps: ["partners", "memberships", "what-are-practice-areas"],
  },
  {
    id: "partners",
    category: "info",
    keywords: [
      "partner",
      "partners",
      "leadership",
      "founder",
      "founders",
      "team",
      "staff",
      "people",
      "employees",
      "size",
      "strength",
    ],
    response:
      "The firm has ten partners, all Fellows or Associates of the Institute of Chartered Accountants of India. The total team strength is around 87 across four offices, comprising chartered accountants, cybersecurity professionals and support staff. The Who-We-Are page lists each partner with their ICAI membership number.",
    followUps: ["about", "memberships"],
  },
  {
    id: "memberships",
    category: "info",
    keywords: [
      "membership",
      "memberships",
      "certification",
      "certifications",
      "cii",
      "young indians",
      "yi",
      "icai",
      "association",
      "associations",
    ],
    response:
      "The firm is a member of the Confederation of Indian Industry (CII) and Young Indians (Yi). Each partner is registered with the Institute of Chartered Accountants of India (ICAI).",
    followUps: ["partners", "about"],
  },

  // ─── Practice areas (informational, not solicited) ──────────────────────
  {
    id: "what-are-practice-areas",
    category: "info",
    patterns: [
      /\bpractice\s+area/,
      /\bareas?\s+of\s+(work|practice|engagement)/,
      /\bwhat.*(?:do|does)\s+(you|the\s+firm)\s+(do|engage)/,
    ],
    keywords: ["practice", "discipline", "disciplines"],
    response:
      "Practice areas the firm engages in:\n• Audit & Assurance (statutory, internal, concurrent, stock, special-purpose)\n• Direct & Indirect Taxation (corporate tax, GST, transfer pricing)\n• Risk & Governance (internal controls, ERM, governance reviews)\n• Public-Sector & Banking assurance\n• Project Financing and Stock Verification\n\nThese pages are informational and not an offer of professional services.",
    followUps: ["audit", "taxation", "risk", "banking"],
  },
  {
    id: "audit",
    category: "info",
    keywords: [
      "audit",
      "audits",
      "auditing",
      "auditor",
      "assurance",
      "statutory",
      "internal",
      "concurrent",
      "stock verification",
      "special purpose",
    ],
    response:
      "Audit & Assurance is a practice area. The firm engages in statutory, internal, concurrent, stock and special-purpose audits across public-sector undertakings, banking & financial institutions and private enterprise. See the Audit & Assurance page for the scope of each.",
    followUps: ["banking", "risk", "what-are-practice-areas"],
  },
  {
    id: "taxation",
    category: "info",
    keywords: [
      "tax",
      "taxes",
      "taxation",
      "gst",
      "income tax",
      "corporate tax",
      "transfer pricing",
      "tds",
      "tcs",
      "vat",
    ],
    response:
      "Direct & Indirect Taxation is a practice area. The regulatory areas covered include corporate tax, Goods & Services Tax, transfer pricing, and tax representation. The Taxation page describes the kinds of compliance and advisory work involved.",
    followUps: ["what-are-practice-areas", "audit"],
  },
  {
    id: "risk",
    category: "info",
    keywords: [
      "risk",
      "risks",
      "governance",
      "internal control",
      "internal controls",
      "controls",
      "compliance review",
      "ifc",
      "icofr",
      "ifc-fr",
      "enterprise risk",
      "erm",
      "advisory",
    ],
    response:
      "Risk & Governance is a practice area covering internal financial controls, enterprise risk management and corporate governance reviews aligned with sectoral regulators. See the Risk Advisory page for the scope of work.",
    followUps: ["audit", "what-are-practice-areas"],
  },
  {
    id: "banking",
    category: "info",
    keywords: [
      "banking",
      "bank",
      "banks",
      "financial institution",
      "financial institutions",
      "psu",
      "psus",
      "public sector undertaking",
      "public-sector",
      "rbi",
      "nbfc",
      "co-operative",
      "cooperative",
    ],
    response:
      "Banking & Public-Sector engagement is a long-standing area of the firm — assurance, internal audit, concurrent audit and special reviews for public-sector banks, NBFCs and public-sector undertakings. See the Banking & Financial Institutions page.",
    followUps: ["audit", "risk", "sectors"],
  },
  {
    id: "project-financing",
    category: "info",
    keywords: [
      "project",
      "financing",
      "funding",
      "loan",
      "loans",
      "appraisal",
      "feasibility",
      "techno-economic",
    ],
    response:
      "Project Financing is a practice area. The Project Financing page describes the regulatory and review work involved — covenant compliance, project appraisal support and lender-side reviews.",
    followUps: ["banking", "what-are-practice-areas"],
  },
  {
    id: "stock-verification",
    category: "info",
    keywords: [
      "stock verification",
      "stock audit",
      "physical verification",
      "inventory",
      "warehouse",
    ],
    response:
      "Stock Verification is a defined practice area — physical verification and reconciliation engagements typically for lender-side reviews. See the Stock Verification page.",
    followUps: ["banking", "audit"],
  },

  // ─── Sectors ────────────────────────────────────────────────────────────
  {
    id: "sectors",
    category: "info",
    keywords: [
      "sector",
      "sectors",
      "industry",
      "industries",
      "vertical",
      "verticals",
      "market",
    ],
    response:
      "Sectors the firm engages with include:\n• Public Sector — government undertakings, PSUs, statutory authorities\n• Banking & Financial Services — public-sector banks, NBFCs, cooperative banks\n• Private Enterprise — listed and unlisted corporates, family-owned businesses",
    followUps: ["banking", "what-are-practice-areas"],
  },

  // ─── Service offerings (cyber + DPDPA — outside ICAI restrictions) ──────
  {
    id: "cybersecurity",
    category: "info",
    keywords: [
      "cyber",
      "cybersecurity",
      "security",
      "vapt",
      "penetration",
      "pen test",
      "pentest",
      "pentesting",
      "soc",
      "managed soc",
      "cloud security",
      "vciso",
      "ciso",
      "infosec",
      "iso 27001",
      "iso27001",
      "isms",
    ],
    response:
      "Cybersecurity service offerings (offered as defined service engagements):\n• Vulnerability Assessment & Penetration Testing (VAPT)\n• Security Audit & Compliance\n• Managed SOC (24×7 monitoring)\n• Cloud Security reviews\n• vCISO / Cybersecurity Consulting\n• Cybersecurity Training\n\nCybersecurity sits outside ICAI advertising restrictions. The Cybersecurity Services page describes each in detail.",
    followUps: ["vapt", "soc", "dpdpa", "contact"],
  },
  {
    id: "vapt",
    category: "info",
    keywords: ["vapt", "pen test", "pentest", "penetration testing", "vulnerability assessment"],
    response:
      "VAPT covers application, network and infrastructure assessment with reporting and remediation guidance. Scope can be aligned to OWASP, NIST or sector-specific frameworks. See the VAPT page.",
    followUps: ["cybersecurity", "soc"],
  },
  {
    id: "soc",
    category: "info",
    keywords: ["soc", "siem", "monitoring", "24x7", "managed security"],
    patterns: [/\bsecurity\s+operations\s+(centre|center)\b/],
    response:
      "Managed SOC services include 24×7 monitoring, threat detection, incident response and SIEM tuning. See the Managed SOC page.",
    followUps: ["cybersecurity", "vapt"],
  },
  {
    id: "cloud-security",
    category: "info",
    keywords: ["cloud", "aws", "azure", "gcp", "kubernetes"],
    response:
      "Cloud Security reviews cover IAM, configuration hardening, workload security and cloud-native controls across AWS, Azure and GCP. See the Cloud Security page.",
    followUps: ["cybersecurity", "vapt"],
  },
  {
    id: "vciso",
    category: "info",
    keywords: ["vciso", "ciso", "fractional ciso", "security strategy"],
    response:
      "vCISO is a fractional-CISO engagement — board-level security strategy, governance, risk and compliance leadership without a full-time hire. See the vCISO page.",
    followUps: ["cybersecurity", "soc"],
  },
  {
    id: "training",
    category: "info",
    keywords: ["training", "trainings", "awareness", "workshop", "workshops"],
    response:
      "Cybersecurity Training programmes cover staff awareness, role-based training and developer secure-coding workshops. See the Trainings page.",
    followUps: ["cybersecurity"],
  },

  // ─── DPDPA ──────────────────────────────────────────────────────────────
  {
    id: "dpdpa",
    category: "info",
    keywords: [
      "dpdpa",
      "data protection",
      "data privacy",
      "privacy",
      "dpdp",
      "personal data",
      "data fiduciary",
      "consent",
      "data principal",
      "gdpr",
    ],
    response:
      "DPDPA 2023 compliance is a defined service engagement covering:\n• Readiness assessment against the Digital Personal Data Protection Act, 2023\n• Data-flow mapping and gap analysis\n• Policy, notice and consent framework drafting\n• Implementation roadmap and training\n\nProgrammes are tailored for schools, enterprises and public-sector data fiduciaries. See the DPDPA page.",
    followUps: ["cybersecurity", "contact"],
  },

  // ─── Careers ────────────────────────────────────────────────────────────
  {
    id: "careers",
    category: "info",
    keywords: [
      "career",
      "careers",
      "job",
      "jobs",
      "vacancy",
      "vacancies",
      "opening",
      "openings",
      "hiring",
      "internship",
      "intern",
      "articleship",
      "apply",
      "recruit",
    ],
    response:
      "Current openings are listed on the Careers page. Applications can be submitted through the application form on that page or by writing to raghav@kraca.in. The firm recruits across audit, taxation, risk and the cybersecurity team.",
    followUps: ["contact"],
  },

  // ─── Blog / insights ────────────────────────────────────────────────────
  {
    id: "blogs",
    category: "info",
    keywords: ["blog", "blogs", "article", "articles", "insight", "insights", "update", "updates", "post", "posts", "news"],
    response:
      "The Insights section of the site carries articles published by partners and associates of the firm. Topics include regulatory updates, audit notes and cybersecurity observations.",
    followUps: ["what-are-practice-areas"],
  },

  // ─── Catch-all "more details" handler ───────────────────────────────────
  {
    id: "more",
    category: "meta",
    keywords: ["more", "details", "elaborate", "explain", "expand", "further", "tell me more"],
    patterns: [/\band\s*\?$/, /\bgo\s+on\b/, /\banything\s+else\b/],
    response:
      "Could you tell me which topic you would like more detail on? I can describe practice areas, cybersecurity services, DPDPA work, offices, or contact details.",
    followUps: ["what-are-practice-areas", "cybersecurity", "dpdpa", "offices"],
    priority: -3,
  },
];

export const INTENT_INDEX: Record<string, Intent> = Object.fromEntries(
  INTENTS.map((i) => [i.id, i]),
);

/** Map an intent ID back to a short label used on the chip suggestion list. */
export const SUGGESTION_LABELS: Record<string, string> = {
  "what-are-practice-areas": "What are your practice areas?",
  audit: "Tell me about audit & assurance",
  taxation: "Tell me about taxation work",
  risk: "Tell me about risk & governance",
  banking: "Tell me about banking & PSU work",
  "project-financing": "Tell me about project financing",
  "stock-verification": "Tell me about stock verification",
  cybersecurity: "Tell me about cybersecurity",
  vapt: "What is VAPT?",
  soc: "What is the managed SOC?",
  "cloud-security": "Tell me about cloud security",
  vciso: "What is vCISO?",
  training: "Cybersecurity training programmes",
  dpdpa: "Tell me about DPDPA compliance",
  about: "Tell me about the firm",
  partners: "Who are the partners?",
  memberships: "Memberships and affiliations",
  sectors: "Which sectors do you engage with?",
  blogs: "Where can I read insights?",
  careers: "Are there any career openings?",
  contact: "How can I contact you?",
  offices: "Where are your offices?",
  appointment: "How do I book an appointment?",
  "help-topics": "What can you help me with?",
};
