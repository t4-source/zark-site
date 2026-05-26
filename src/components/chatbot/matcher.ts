import {
  DEFAULT_FOLLOW_UPS,
  INTENT_INDEX,
  INTENTS,
  type Intent,
} from "./intents";

export interface MatchResult {
  intent: Intent;
  score: number;
  followUpIntents: string[];
}

const FILLER = new Set([
  "a",
  "an",
  "the",
  "is",
  "are",
  "do",
  "does",
  "you",
  "your",
  "i",
  "we",
  "they",
  "of",
  "in",
  "on",
  "at",
  "to",
  "for",
  "with",
  "about",
  "and",
  "or",
  "but",
  "please",
  "kindly",
  "hi",
  "hello",
]);

function normalise(s: string) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9\s&]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function tokens(s: string) {
  return normalise(s)
    .split(" ")
    .filter((t) => t.length > 1 && !FILLER.has(t));
}

function scoreIntent(intent: Intent, raw: string, normalised: string): number {
  if (intent.exclude?.some((k) => normalised.includes(k))) return 0;

  let score = 0;
  if (intent.keywords) {
    for (const kw of intent.keywords) {
      const k = kw.toLowerCase();
      if (k.includes(" ")) {
        if (normalised.includes(k)) score += 2; // multi-word keyword
      } else {
        // Match as a token prefix to handle plurals/inflections.
        const re = new RegExp(`\\b${k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\w*`, "i");
        if (re.test(normalised)) score += 1;
      }
    }
  }
  if (intent.patterns) {
    for (const p of intent.patterns) {
      if (p.test(raw) || p.test(normalised)) score += 2;
    }
  }
  if (score > 0 && intent.priority) score += intent.priority;
  return score;
}

const FOLLOW_UP_TOKENS = [
  "more",
  "details",
  "elaborate",
  "expand",
  "explain",
  "further",
  "continue",
  "go on",
  "tell me more",
  "what else",
  "anything else",
];

function isFollowUpProbe(raw: string) {
  const n = normalise(raw);
  if (n.length > 25) return false; // long messages aren't follow-up probes
  return FOLLOW_UP_TOKENS.some((t) => n.includes(t));
}

export function matchIntent(
  message: string,
  context?: { lastIntentId?: string },
): MatchResult {
  const raw = message;
  const normalised = normalise(message);

  // "tell me more" style probes — expand on the last topic if we have one.
  if (context?.lastIntentId && isFollowUpProbe(raw)) {
    const last = INTENT_INDEX[context.lastIntentId];
    if (last && last.followUps?.length) {
      const expandTo = last.followUps[0];
      const expanded = INTENT_INDEX[expandTo];
      if (expanded) {
        return {
          intent: expanded,
          score: 99,
          followUpIntents: expanded.followUps?.length
            ? expanded.followUps
            : DEFAULT_FOLLOW_UPS,
        };
      }
    }
  }

  let best: { intent: Intent; score: number } | null = null;
  for (const intent of INTENTS) {
    const score = scoreIntent(intent, raw, normalised);
    if (score <= 0) continue;
    if (!best || score > best.score) best = { intent, score };
  }

  if (!best) {
    // Fallback intent — not a real one, just a synthetic shell.
    const fallback: Intent = {
      id: "fallback",
      category: "fallback",
      response:
        "I am Vitta, an information-only assistant for Z A R K & Co LLP. I can describe the firm's practice areas, cybersecurity services, DPDPA compliance, offices, careers and contact details. Could you rephrase, or pick one of the suggestions below?",
      followUps: DEFAULT_FOLLOW_UPS,
    };
    return { intent: fallback, score: 0, followUpIntents: DEFAULT_FOLLOW_UPS };
  }

  return {
    intent: best.intent,
    score: best.score,
    followUpIntents:
      best.intent.followUps && best.intent.followUps.length > 0
        ? best.intent.followUps
        : DEFAULT_FOLLOW_UPS,
  };
}

export { tokens };
