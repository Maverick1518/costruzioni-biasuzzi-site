"use client";

import { useCallback, useState } from "react";
import type { ContactApiResponse, ContactFormErrors, ContactFormValues } from "@/types/contact";
import SuccessDialog from "@/components/ui/SuccessDialog";

const SUCCESS_MESSAGE = "Richiesta inviata correttamente. (non riceverai nessuna mail)";

const initialValues: ContactFormValues = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const inputClass =
  "w-full rounded border border-neutral-300 px-3 py-2.5 text-sm text-neutral-900 outline-none transition focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20";

export default function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(initialValues);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [isSuccessDialogOpen, setIsSuccessDialogOpen] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const closeSuccessDialog = useCallback(() => {
    setIsSuccessDialogOpen(false);
  }, []);

  function onChange<K extends keyof ContactFormValues>(key: K, value: ContactFormValues[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  function validateClient(): ContactFormErrors {
    const nextErrors: ContactFormErrors = {};

    if (!values.firstName.trim()) nextErrors.firstName = "Inserisci il nome.";
    if (!values.lastName.trim()) nextErrors.lastName = "Inserisci il cognome.";
    if (!values.email.trim()) nextErrors.email = "Inserisci l'email.";
    if (values.email.trim() && !validateEmail(values.email.trim())) {
      nextErrors.email = "Inserisci un indirizzo email valido.";
    }
    if (!values.phone.trim()) nextErrors.phone = "Inserisci il numero di telefono.";
    if (!values.subject.trim()) nextErrors.subject = "Inserisci l'oggetto della richiesta.";
    if (!values.message.trim()) nextErrors.message = "Inserisci il messaggio.";

    return nextErrors;
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSuccessMessage("");
    setIsSuccessDialogOpen(false);
    setSubmitError("");

    const validationErrors = validateClient();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contatti", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: values.firstName.trim(),
          lastName: values.lastName.trim(),
          email: values.email.trim(),
          phone: values.phone.trim(),
          subject: values.subject.trim(),
          message: values.message.trim(),
        }),
      });

      const data = (await response.json()) as ContactApiResponse;
      if (!response.ok || !data.ok) {
        setSubmitError(data.message || "Si è verificato un errore durante l'invio.");
        return;
      }

      setValues(initialValues);
      setErrors({});
      setSuccessMessage(data.message || SUCCESS_MESSAGE);
      setIsSuccessDialogOpen(true);
    } catch {
      setSubmitError("Si è verificato un errore durante l'invio. Riprova più tardi.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <div className="mt-10">
        <p className="mb-5 text-sm text-neutral-600">
          Per richieste di informazioni, preventivi o chiarimenti, è possibile compilare
          il modulo seguente.
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-5 rounded border border-neutral-200 bg-white p-6 sm:p-8"
          noValidate
        >
          {/* Nome / Cognome */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="cf-firstName" className="mb-1.5 block text-sm font-medium text-neutral-800">
                Nome *
              </label>
              <input
                id="cf-firstName"
                name="firstName"
                type="text"
                value={values.firstName}
                onChange={(e) => onChange("firstName", e.target.value)}
                className={inputClass}
                autoComplete="given-name"
                aria-invalid={Boolean(errors.firstName)}
              />
              {errors.firstName && <p className="mt-1 text-xs text-brand">{errors.firstName}</p>}
            </div>

            <div>
              <label htmlFor="cf-lastName" className="mb-1.5 block text-sm font-medium text-neutral-800">
                Cognome *
              </label>
              <input
                id="cf-lastName"
                name="lastName"
                type="text"
                value={values.lastName}
                onChange={(e) => onChange("lastName", e.target.value)}
                className={inputClass}
                autoComplete="family-name"
                aria-invalid={Boolean(errors.lastName)}
              />
              {errors.lastName && <p className="mt-1 text-xs text-brand">{errors.lastName}</p>}
            </div>
          </div>

          {/* Email / Telefono */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="cf-email" className="mb-1.5 block text-sm font-medium text-neutral-800">
                Email *
              </label>
              <input
                id="cf-email"
                name="email"
                type="email"
                value={values.email}
                onChange={(e) => onChange("email", e.target.value)}
                className={inputClass}
                autoComplete="email"
                aria-invalid={Boolean(errors.email)}
              />
              {errors.email && <p className="mt-1 text-xs text-brand">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="cf-phone" className="mb-1.5 block text-sm font-medium text-neutral-800">
                Telefono *
              </label>
              <input
                id="cf-phone"
                name="phone"
                type="tel"
                value={values.phone}
                onChange={(e) => onChange("phone", e.target.value)}
                className={inputClass}
                autoComplete="tel"
                aria-invalid={Boolean(errors.phone)}
              />
              {errors.phone && <p className="mt-1 text-xs text-brand">{errors.phone}</p>}
            </div>
          </div>

          {/* Oggetto */}
          <div>
            <label htmlFor="cf-subject" className="mb-1.5 block text-sm font-medium text-neutral-800">
              Oggetto *
            </label>
            <input
              id="cf-subject"
              name="subject"
              type="text"
              value={values.subject}
              onChange={(e) => onChange("subject", e.target.value)}
              className={inputClass}
              aria-invalid={Boolean(errors.subject)}
            />
            {errors.subject && <p className="mt-1 text-xs text-brand">{errors.subject}</p>}
          </div>

          {/* Messaggio */}
          <div>
            <label htmlFor="cf-message" className="mb-1.5 block text-sm font-medium text-neutral-800">
              Messaggio *
            </label>
            <textarea
              id="cf-message"
              name="message"
              rows={5}
              value={values.message}
              onChange={(e) => onChange("message", e.target.value)}
              className={inputClass}
              aria-invalid={Boolean(errors.message)}
            />
            {errors.message && <p className="mt-1 text-xs text-brand">{errors.message}</p>}
          </div>

          {submitError && (
            <p className="rounded border border-brand/25 bg-brand/5 px-3 py-2 text-sm text-brand">
              {submitError}
            </p>
          )}

          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center rounded bg-brand px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-dark disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? "Invio in corso..." : "Invia richiesta"}
            </button>
          </div>
        </form>
      </div>

      <SuccessDialog
        open={isSuccessDialogOpen}
        title="Messaggio inviato"
        message={successMessage}
        onClose={closeSuccessDialog}
      />
    </>
  );
}
