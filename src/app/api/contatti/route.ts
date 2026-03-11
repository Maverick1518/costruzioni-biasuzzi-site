import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import type { ContactApiResponse } from "@/types/contact";

export const runtime = "nodejs";

const MOCK_SUCCESS_MESSAGE = "Richiesta inviata correttamente. (non riceverai nessuna mail)";
const LIVE_SUCCESS_MESSAGE = "Richiesta inviata correttamente. Riceverai una conferma all'indirizzo email indicato.";

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function jsonResponse(status: number, payload: ContactApiResponse) {
  return NextResponse.json(payload, { status });
}

function isContactFormMockMode(): boolean {
  // Default: mock mode. Per attivare l'invio reale impostare CONTACT_FORM_MODE=live
  return process.env.CONTACT_FORM_MODE !== "live";
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Record<string, unknown>;

    const firstName = String(body.firstName ?? "").trim();
    const lastName = String(body.lastName ?? "").trim();
    const email = String(body.email ?? "").trim();
    const phone = String(body.phone ?? "").trim();
    const subject = String(body.subject ?? "").trim();
    const message = String(body.message ?? "").trim();

    // Validazione server-side
    if (!firstName || !lastName || !email || !phone || !subject || !message) {
      return jsonResponse(400, {
        ok: false,
        message: "Compila tutti i campi obbligatori.",
      });
    }

    if (!validateEmail(email)) {
      return jsonResponse(400, {
        ok: false,
        message: "Indirizzo email non valido.",
      });
    }

    // Modalità mock (default): risposta positiva senza invio email
    if (isContactFormMockMode()) {
      return jsonResponse(200, {
        ok: true,
        message: MOCK_SUCCESS_MESSAGE,
      });
    }

    // Modalità live: invio email tramite SMTP
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = Number(process.env.SMTP_PORT || 0);
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const mailFrom = process.env.MAIL_FROM || smtpUser;
    const mailTo = process.env.MAIL_TO || "info@biasuzzi.it";

    if (!smtpHost || !smtpPort || !smtpUser || !smtpPass || !mailFrom || !mailTo) {
      return jsonResponse(500, {
        ok: false,
        message: "Configurazione email non disponibile.",
      });
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const messageBody = [
      "Nuova richiesta dal sito web",
      "",
      `Nome: ${firstName} ${lastName}`,
      `Email: ${email}`,
      `Telefono: ${phone}`,
      `Oggetto: ${subject}`,
      "",
      "Messaggio:",
      message,
    ].join("\n");

    // Mail 1: notifica interna a info@biasuzzi.it
    await transporter.sendMail({
      from: mailFrom,
      to: mailTo,
      subject: `Nuova richiesta dal sito — ${subject}`,
      text: messageBody,
    });

    // Mail 2: copia di conferma al mittente
    await transporter.sendMail({
      from: mailFrom,
      to: email,
      subject: `Conferma ricezione: ${subject}`,
      text: [
        `Gentile ${firstName} ${lastName},`,
        "",
        "Abbiamo ricevuto la sua richiesta inviata tramite il sito web.",
        "Di seguito il riepilogo del messaggio inviato.",
        "",
        `Oggetto: ${subject}`,
        "",
        "Messaggio:",
        message,
        "",
        "Sarà nostra cura rispondere il prima possibile.",
        "",
        "Costruzioni Generali Biasuzzi S.r.l.",
      ].join("\n"),
    });

    return jsonResponse(200, {
      ok: true,
      message: LIVE_SUCCESS_MESSAGE,
    });
  } catch {
    return jsonResponse(500, {
      ok: false,
      message: "Si è verificato un errore durante l'invio della richiesta.",
    });
  }
}
