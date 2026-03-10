import Image from "next/image";
import type { QualificationDocument } from "@/types/qualification";

interface DocumentCardProps {
  document: QualificationDocument;
}

export default function DocumentCard({ document }: DocumentCardProps) {
  return (
    <article className="rounded border border-neutral-200 bg-white p-4 sm:p-5">
      <div className="flex items-start gap-4">
        <a
          href={document.fileUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-24 shrink-0 rounded border border-neutral-200 bg-neutral-50 p-1.5 transition-colors hover:border-neutral-300 sm:w-28"
          aria-label={`${document.title} - visualizza documento in nuova scheda`}
        >
          <Image
            src={document.previewImage}
            alt={document.previewAlt}
            width={1322}
            height={1871}
            className="h-auto w-full rounded-sm border border-neutral-200 bg-white object-contain"
            priority={false}
          />
        </a>

        <div className="min-w-0 flex-1">
          <h3 className="text-base font-semibold leading-tight text-neutral-900 sm:text-lg">
            {document.title}
          </h3>
          {document.badgeLabel && (
            <span className="mt-2 inline-flex rounded-full border border-brand/20 bg-brand/5 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-brand">
              {document.badgeLabel}
            </span>
          )}

          <div className="mt-4 flex flex-wrap gap-2.5">
            <a
              href={document.fileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded bg-brand px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-dark"
            >
              Visualizza documento
            </a>
            <a
              href={document.fileUrl}
              download={document.downloadName}
              className="inline-flex items-center justify-center rounded border border-neutral-300 bg-white px-4 py-2 text-sm font-medium text-neutral-800 transition-colors hover:bg-neutral-50"
            >
              Scarica PDF
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
