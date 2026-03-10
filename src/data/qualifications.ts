import type { Qualification, QualificationDocument } from "@/types/qualification";

export const qualifications: Qualification[] = [
  {
    code: "OG1",
    category: "Edifici civili e industriali",
    classification: "III-BIS",
    description: "Costruzione, manutenzione o restauro di edifici civili e industriali.",
  },
  {
    code: "OG3",
    category: "Strade, autostrade, ponti, viadotti, ferrovie, metropolitane",
    classification: "V",
    description:
      "Costruzione e manutenzione di strade, autostrade, ponti, viadotti e infrastrutture viarie.",
  },
  {
    code: "OG6",
    category: "Acquedotti, gasdotti, oleodotti, opere di irrigazione e di evacuazione",
    classification: "IV-BIS",
    description:
      "Realizzazione di reti di distribuzione idrica, gasdotti e sistemi di irrigazione e scarico.",
  },
  {
    code: "OG8",
    category: "Opere fluviali, di difesa, di sistemazione idraulica e di bonifica",
    classification: "V",
    description:
      "Interventi idraulici, arginature, sistemazioni fluviali e opere di bonifica idraulica.",
  },
  {
    code: "OG10",
    category:
      "Impianti per la trasformazione alta/media in bassa tensione e per la distribuzione di energia elettrica",
    classification: "I",
    description: "Impianti elettrici di distribuzione e trasformazione energetica.",
  },
  {
    code: "OG12",
    category: "Opere ed impianti di bonifica e protezione ambientale",
    classification: "VIII",
    description: "Opere di bonifica ambientale e protezione del territorio.",
  },
  {
    code: "OS1",
    category: "Lavori in terra",
    classification: "II",
    description: "Scavi, rilevati, movimenti di terra e opere geotecniche.",
  },
  {
    code: "OS23",
    category: "Demolizione di opere",
    classification: "II",
    description: "Demolizioni strutturali e selettive di manufatti edilizi esistenti.",
  },
];

export const qualificationDocuments: QualificationDocument[] = [
  {
    id: "soa",
    title: "Certificazione SOA",
    description: "Attestazione di qualificazione per l'esecuzione di lavori pubblici.",
    fileUrl: "/documents/soa.pdf",
    previewImage: "/documents/previews/soa-preview.jpg",
    previewAlt: "Anteprima prima pagina della Certificazione SOA",
    downloadName: "costruzioni-generali-biasuzzi-soa.pdf",
    badgeLabel: "PDF",
    note: "Documento consultabile online e scaricabile in formato PDF.",
  },
  {
    id: "iso-9001-2015",
    title: "Certificazione ISO 9001:2015",
    description: "Certificazione del sistema di gestione per la qualita.",
    fileUrl: "/documents/iso-9001-2015.pdf",
    previewImage: "/documents/previews/iso-9001-2015-preview.jpg",
    previewAlt: "Anteprima prima pagina della Certificazione ISO 9001:2015",
    downloadName: "costruzioni-generali-biasuzzi-iso-9001-2015.pdf",
    badgeLabel: "PDF",
    note: "Documento consultabile online e scaricabile in formato PDF.",
  },
];
