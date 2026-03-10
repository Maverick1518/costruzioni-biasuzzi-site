"use client";

import { useEffect, useRef } from "react";

interface SuccessDialogProps {
  open: boolean;
  message: string;
  onClose: () => void;
}

export default function SuccessDialog({ open, message, onClose }: SuccessDialogProps) {
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!open) return;

    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-neutral-900/45 px-4"
      aria-hidden={false}
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="careers-success-dialog-title"
        className="w-full max-w-md rounded border border-neutral-200 bg-white p-6 shadow-xl"
        onClick={(event) => event.stopPropagation()}
      >
        <h2 id="careers-success-dialog-title" className="text-lg font-semibold text-neutral-900">
          Candidatura inviata
        </h2>
        <p className="mt-3 text-sm leading-6 text-neutral-700">{message}</p>
        <div className="mt-6 flex justify-end">
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="inline-flex items-center justify-center rounded bg-brand px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-dark focus:outline-none focus:ring-2 focus:ring-brand-teal/30"
          >
            Chiudi
          </button>
        </div>
      </div>
    </div>
  );
}
