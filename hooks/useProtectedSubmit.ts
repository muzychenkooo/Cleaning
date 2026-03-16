'use client';

import * as React from 'react';
import { submissionQueue } from '@/lib/submission-queue';

type SubmitFn<T> = (payload: T) => void | Promise<void>;

export function useProtectedSubmit<TPayload>(
  formId: string,
  submitFn: SubmitFn<TPayload>,
) {
  const [isCaptchaOpen, setIsCaptchaOpen] = React.useState(false);
  const [pendingPayload, setPendingPayload] = React.useState<TPayload | null>(null);

  const canSubmitNow = React.useCallback(() => {
    return submissionQueue.canSubmit(formId);
  }, [formId]);

  const initiateSubmit = React.useCallback(
    (payload: TPayload) => {
      if (!submissionQueue.canSubmit(formId)) {
        return;
      }
      if (submissionQueue.isDuplicate(formId, payload)) {
        return;
      }
      submissionQueue.recordAttempt(formId);
      setPendingPayload(payload);
      setIsCaptchaOpen(true);
    },
    [formId],
  );

  const handleCaptchaVerified = React.useCallback(async () => {
    if (!pendingPayload) {
      setIsCaptchaOpen(false);
      return;
    }
    setIsCaptchaOpen(false);
    submissionQueue.lockSubmission(formId);
    try {
      await submitFn(pendingPayload);
      submissionQueue.recordSubmission(formId, pendingPayload);
    } finally {
      submissionQueue.unlockSubmission(formId);
      setPendingPayload(null);
    }
  }, [formId, pendingPayload, submitFn]);

  const handleCaptchaCancel = React.useCallback(() => {
    setIsCaptchaOpen(false);
    setPendingPayload(null);
  }, []);

  return {
    initiateSubmit,
    isCaptchaOpen,
    onCaptchaVerified: handleCaptchaVerified,
    onCaptchaCancel: handleCaptchaCancel,
    canSubmitNow: canSubmitNow(),
  };
}

