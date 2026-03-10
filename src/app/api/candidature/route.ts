import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import type { CareerApiResponse } from "@/types/career";

export const runtime = "nodejs";

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const ACCEPTED_FILE_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];
const ACCEPTED_EXTENSIONS = [".pdf", ".doc", ".docx"];

function isAllowedFile(file: File): boolean {
  const lowerName = file.name.toLowerCase();
  const hasAllowedExtension = ACCEPTED_EXTENSIONS.some((ext) => lowerName.endsWith(ext));
  return ACCEPTED_FILE_TYPES.includes(file.type) || hasAllowedExtension;
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function jsonResponse(status: number, payload: CareerApiResponse) {
  return NextResponse.json(payload, { status });
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const firstName = String(formData.get("firstName") ?? "").trim();
    const lastName = String(formData.get("lastName") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const position = String(formData.get("position") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();
    const cv = formData.get("cv");

    if (!firstName || !lastName || !email || !phone || !message) {
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

    if (!(cv instanceof File)) {
      return jsonResponse(400, {
        ok: false,
        message: "Allega il curriculum vitae.",
      });
    }

    if (!isAllowedFile(cv)) {
      return jsonResponse(400, {
        ok: false,
        message: "Formato CV non valido. Sono ammessi PDF, DOC e DOCX.",
      });
    }

    if (cv.size > MAX_FILE_SIZE) {
      return jsonResponse(400, {
        ok: false,
        message: "Il CV supera la dimensione massima di 5 MB.",
      });
    }

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

    const cvBuffer = Buffer.from(await cv.arrayBuffer());

    await transporter.sendMail({
      from: mailFrom,
      to: mailTo,
      subject: `Nuova candidatura dal sito - ${firstName} ${lastName}`,
      text: [
        "Nuova candidatura dal sito web",
        "",
        `Nome: ${firstName}`,
        `Cognome: ${lastName}`,
        `Email: ${email}`,
        `Telefono: ${phone}`,
        `Posizione di interesse: ${position || "Non indicata"}`,
        "",
        "Messaggio:",
        message,
      ].join("\n"),
      attachments: [
        {
          filename: cv.name,
          content: cvBuffer,
          contentType: cv.type || "application/octet-stream",
        },
      ],
    });

    return jsonResponse(200, {
      ok: true,
      message: "La candidatura e stata inviata correttamente.",
    });
  } catch {
    return jsonResponse(500, {
      ok: false,
      message: "Si e verificato un errore durante l'invio della candidatura.",
    });
  }
}
