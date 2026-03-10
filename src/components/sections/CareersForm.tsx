"use client";

import { useRef, useState } from "react";
import type { CareerApiResponse, CareerFormErrors, CareerFormValues } from "@/types/career";

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const ACCEPTED_FILE_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];
const ACCEPTED_EXTENSIONS = [".pdf", ".doc", ".docx"];

const initialValues: CareerFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  position: "",
  message: "",
};

function isAllowedFile(file: File): boolean {
  const lowerName = file.name.toLowerCase();
  const hasAllowedExtension = ACCEPTED_EXTENSIONS.some((ext) => lowerName.endsWith(ext));
  return ACCEPTED_FILE_TYPES.includes(file.type) || hasAllowedExtension;
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default function CareersForm() {
  const [values, setValues] = useState<CareerFormValues>(initialValues);
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [errors, setErrors] = useState<CareerFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [submitError, setSubmitError] = useState("");
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  function onChange<K extends keyof CareerFormValues>(key: K, value: CareerFormValues[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  function validateClient(): CareerFormErrors {
    const nextErrors: CareerFormErrors = {};

    if (!values.firstName.trim()) nextErrors.firstName = "Inserisci il nome.";
    if (!values.lastName.trim()) nextErrors.lastName = "Inserisci il cognome.";
    if (!values.email.trim()) nextErrors.email = "Inserisci l'email.";
    if (values.email.trim() && !validateEmail(values.email.trim())) {
      nextErrors.email = "Inserisci un indirizzo email valido.";
    }
    if (!values.phone.trim()) nextErrors.phone = "Inserisci il telefono.";
    if (!values.message.trim()) nextErrors.message = "Inserisci un messaggio di presentazione.";

    if (!cvFile) {
      nextErrors.cv = "Carica il curriculum vitae.";
    } else {
      if (!isAllowedFile(cvFile)) {
        nextErrors.cv = "Formato file non valido. Sono ammessi PDF, DOC e DOCX.";
      } else if (cvFile.size > MAX_FILE_SIZE) {
        nextErrors.cv = "Il file supera la dimensione massima di 5 MB.";
      }
    }

    return nextErrors;
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSuccessMessage("");
    setSubmitError("");

    const validationErrors = validateClient();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;
    if (!cvFile) return;

    const payload = new FormData();
    payload.append("firstName", values.firstName.trim());
    payload.append("lastName", values.lastName.trim());
    payload.append("email", values.email.trim());
    payload.append("phone", values.phone.trim());
    payload.append("position", values.position.trim());
    payload.append("message", values.message.trim());
    payload.append("cv", cvFile);

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/candidature", {
        method: "POST",
        body: payload,
      });

      const data = (await response.json()) as CareerApiResponse;
      if (!response.ok || !data.ok) {
        setSubmitError(data.message || "Si e verificato un errore durante l'invio.");
        return;
      }

      setValues(initialValues);
      setCvFile(null);
      setErrors({});
      setSuccessMessage("La candidatura e stata inviata correttamente.");
      if (fileInputRef.current) fileInputRef.current.value = "";
    } catch {
      setSubmitError("Si e verificato un errore durante l'invio. Riprova piu tardi.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-5 rounded border border-neutral-200 bg-white p-6 sm:p-8">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="firstName" className="mb-1.5 block text-sm font-medium text-neutral-800">
            Nome *
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            value={values.firstName}
            onChange={(e) => onChange("firstName", e.target.value)}
            className="w-full rounded border border-neutral-300 px-3 py-2.5 text-sm text-neutral-900 outline-none transition focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20"
            autoComplete="given-name"
            aria-invalid={Boolean(errors.firstName)}
          />
          {errors.firstName && <p className="mt-1 text-xs text-brand">{errors.firstName}</p>}
        </div>

        <div>
          <label htmlFor="lastName" className="mb-1.5 block text-sm font-medium text-neutral-800">
            Cognome *
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            value={values.lastName}
            onChange={(e) => onChange("lastName", e.target.value)}
            className="w-full rounded border border-neutral-300 px-3 py-2.5 text-sm text-neutral-900 outline-none transition focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20"
            autoComplete="family-name"
            aria-invalid={Boolean(errors.lastName)}
          />
          {errors.lastName && <p className="mt-1 text-xs text-brand">{errors.lastName}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-neutral-800">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={(e) => onChange("email", e.target.value)}
            className="w-full rounded border border-neutral-300 px-3 py-2.5 text-sm text-neutral-900 outline-none transition focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20"
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
          />
          {errors.email && <p className="mt-1 text-xs text-brand">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-neutral-800">
            Telefono *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={values.phone}
            onChange={(e) => onChange("phone", e.target.value)}
            className="w-full rounded border border-neutral-300 px-3 py-2.5 text-sm text-neutral-900 outline-none transition focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20"
            autoComplete="tel"
            aria-invalid={Boolean(errors.phone)}
          />
          {errors.phone && <p className="mt-1 text-xs text-brand">{errors.phone}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="position" className="mb-1.5 block text-sm font-medium text-neutral-800">
          Posizione di interesse
        </label>
        <input
          id="position"
          name="position"
          type="text"
          value={values.position}
          onChange={(e) => onChange("position", e.target.value)}
          className="w-full rounded border border-neutral-300 px-3 py-2.5 text-sm text-neutral-900 outline-none transition focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-neutral-800">
          Messaggio *
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          value={values.message}
          onChange={(e) => onChange("message", e.target.value)}
          className="w-full rounded border border-neutral-300 px-3 py-2.5 text-sm text-neutral-900 outline-none transition focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20"
          aria-invalid={Boolean(errors.message)}
        />
        {errors.message && <p className="mt-1 text-xs text-brand">{errors.message}</p>}
      </div>

      <div>
        <label htmlFor="cv" className="mb-1.5 block text-sm font-medium text-neutral-800">
          Carica CV (PDF, DOC, DOCX - max 5 MB) *
        </label>
        <input
          ref={fileInputRef}
          id="cv"
          name="cv"
          type="file"
          accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          onChange={(e) => {
            const nextFile = e.target.files?.[0] ?? null;
            setCvFile(nextFile);
            setErrors((prev) => ({ ...prev, cv: undefined }));
          }}
          className="block w-full cursor-pointer rounded border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-700 file:mr-3 file:cursor-pointer file:rounded file:border-0 file:bg-brand-teal file:px-3 file:py-2 file:text-white hover:file:bg-brand-teal-dark"
          aria-invalid={Boolean(errors.cv)}
        />
        {cvFile && (
          <p className="mt-1 text-xs text-neutral-600">
            File selezionato: <span className="font-medium">{cvFile.name}</span>
          </p>
        )}
        {errors.cv && <p className="mt-1 text-xs text-brand">{errors.cv}</p>}
      </div>

      {submitError && (
        <p className="rounded border border-brand/25 bg-brand/5 px-3 py-2 text-sm text-brand">
          {submitError}
        </p>
      )}
      {successMessage && (
        <p className="rounded border border-brand-teal/30 bg-brand-teal/5 px-3 py-2 text-sm text-brand-teal-dark">
          {successMessage}
        </p>
      )}

      <div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center rounded bg-brand px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? "Invio in corso..." : "Invia candidatura"}
        </button>
      </div>
    </form>
  );
}
