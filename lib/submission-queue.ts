export interface SubmissionQueue {
  canSubmit(formId: string): boolean;
  /** Call when user actually initiates a submit (e.g. before opening captcha). */
  recordAttempt(formId: string): void;
  lockSubmission(formId: string): void;
  unlockSubmission(formId: string): void;
  recordSubmission(formId: string, payload: unknown): void;
  isDuplicate(formId: string, payload: unknown): boolean;
}

type FormState = {
  locked: boolean;
  lastTimestamp: number;
  lastPayloadHash?: string;
  attemptsInWindow: number;
  windowStart: number;
};

const COOLDOWN_MS = 45_000; // 45 seconds between successful submissions
const DUPLICATE_WINDOW_MS = 45_000;
const BURST_WINDOW_MS = 30_000;
const BURST_MAX_ATTEMPTS = 4;

const state = new Map<string, FormState>();

function getState(formId: string): FormState {
  const existing = state.get(formId);
  if (existing) return existing;
  const initial: FormState = {
    locked: false,
    lastTimestamp: 0,
    lastPayloadHash: undefined,
    attemptsInWindow: 0,
    windowStart: 0,
  };
  state.set(formId, initial);
  return initial;
}

function payloadHash(payload: unknown): string {
  try {
    return JSON.stringify(payload ?? null);
  } catch {
    return String(payload);
  }
}

export const submissionQueue: SubmissionQueue = {
  canSubmit(formId) {
    const now = Date.now();
    const s = getState(formId);

    if (s.locked) return false;

    // Cooldown after last successful submission
    if (s.lastTimestamp && now - s.lastTimestamp < COOLDOWN_MS) {
      return false;
    }

    // Burst protection: only count real attempts (see recordAttempt)
    if (s.windowStart && now - s.windowStart < BURST_WINDOW_MS) {
      if (s.attemptsInWindow >= BURST_MAX_ATTEMPTS) return false;
    } else {
      s.windowStart = now;
      s.attemptsInWindow = 0;
    }

    return true;
  },

  recordAttempt(formId) {
    const now = Date.now();
    const s = getState(formId);
    if (s.windowStart && now - s.windowStart > BURST_WINDOW_MS) {
      s.windowStart = now;
      s.attemptsInWindow = 0;
    }
    s.attemptsInWindow += 1;
  },

  lockSubmission(formId) {
    const s = getState(formId);
    s.locked = true;
  },

  unlockSubmission(formId) {
    const s = getState(formId);
    s.locked = false;
  },

  recordSubmission(formId, payload) {
    const s = getState(formId);
    s.lastTimestamp = Date.now();
    s.lastPayloadHash = payloadHash(payload);
  },

  isDuplicate(formId, payload) {
    const now = Date.now();
    const s = getState(formId);
    if (!s.lastTimestamp) return false;
    if (now - s.lastTimestamp > DUPLICATE_WINDOW_MS) return false;
    const hash = payloadHash(payload);
    return !!s.lastPayloadHash && s.lastPayloadHash === hash;
  },
};

