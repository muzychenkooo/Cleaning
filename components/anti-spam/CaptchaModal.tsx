'use client';

import * as React from 'react';

type CaptchaModalProps = {
  isOpen: boolean;
  onVerified: () => void;
  onCancel: () => void;
};

function generateChallenge() {
  const a = Math.floor(Math.random() * 8) + 2; // 2–9
  const b = Math.floor(Math.random() * 8) + 2;
  const sum = a + b;
  return { question: `${a} + ${b} = ?`, answer: String(sum) };
}

export function CaptchaModal({ isOpen, onVerified, onCancel }: CaptchaModalProps) {
  const [question, setQuestion] = React.useState<string>('');
  const [answer, setAnswer] = React.useState<string>('');
  const [expected, setExpected] = React.useState<string>('');
  const [checkbox, setCheckbox] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (!isOpen) return;
    const { question: q, answer: a } = generateChallenge();
    setQuestion(q);
    setExpected(a);
    setAnswer('');
    setCheckbox(false);
    setError(null);
  }, [isOpen]);

  React.useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleConfirm = () => {
    if (!checkbox) {
      setError('Подтвердите, что вы не робот.');
      return;
    }
    if (answer.trim() !== expected) {
      setError('Неверный ответ. Повторите попытку.');
      const { question: q, answer: a } = generateChallenge();
      setQuestion(q);
      setExpected(a);
      setAnswer('');
      return;
    }
    setError(null);
    onVerified();
  };

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/55 px-4">
      <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">
        <button
          type="button"
          aria-label="Закрыть"
          onClick={onCancel}
          className="absolute right-4 top-4 rounded-md text-slate-500 hover:text-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
        >
          ×
        </button>
        <h2 className="text-lg font-semibold text-slate-900">
          Подтвердите, что вы человек
        </h2>
        <p className="mt-2 text-sm text-slate-600">
          Решите простой пример и поставьте отметку &laquo;Я не робот&raquo;, чтобы отправить заявку.
        </p>

        <div className="mt-4 space-y-3">
          <div>
            <p className="text-sm font-medium text-slate-800">{question}</p>
            <input
              type="text"
              inputMode="numeric"
              className="mt-2 h-10 w-32 rounded-lg border border-slate-300 px-3 text-sm text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
              value={answer}
              onChange={(e) => {
                setAnswer(e.target.value.replace(/[^0-9]/g, ''));
                setError(null);
              }}
              aria-label="Ответ на пример"
            />
          </div>

          <label className="flex cursor-pointer items-center gap-3">
            <input
              type="checkbox"
              className="h-4 w-4 rounded border-slate-300 text-primary-600 focus:ring-primary-500"
              checked={checkbox}
              onChange={(e) => {
                setCheckbox(e.target.checked);
                setError(null);
              }}
            />
            <span className="text-sm text-slate-700">Я не робот</span>
          </label>

          {error && (
            <p className="text-sm text-red-600" role="alert">
              {error}
            </p>
          )}
        </div>

        <div className="mt-6 flex justify-end gap-3">
          <button
            type="button"
            onClick={onCancel}
            className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
          >
            Отмена
          </button>
          <button
            type="button"
            onClick={handleConfirm}
            className="inline-flex items-center justify-center rounded-lg bg-primary-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
          >
            Подтвердить
          </button>
        </div>
      </div>
    </div>
  );
}

