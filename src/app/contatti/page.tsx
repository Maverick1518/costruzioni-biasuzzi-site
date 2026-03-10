import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Contatti",
  description:
    "Contatta Costruzioni Generali Biasuzzi S.R.L. per informazioni, preventivi e appalti. Sede legale a Ponzano Veneto, sede operativa a Treviso.",
};

export default function ContattiPage() {
  return (
    <div className="py-16 sm:py-20">
      <Container>
        <SectionTitle
          title="Contatti"
          subtitle="Per informazioni, preventivi o richieste tecniche, il nostro ufficio è a disposizione."
          marker
        />

        {/* Recapiti principali + Sedi */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* Recapiti */}
          <div className="rounded border border-neutral-200 bg-white p-6">
            <h2 className="mb-4 text-xs font-semibold uppercase tracking-wider text-neutral-500">
              Recapiti
            </h2>
            <div className="space-y-2 text-sm">
              <p>
                <span className="font-medium text-neutral-900">Tel</span>
                <span className="mx-2 text-neutral-300">·</span>
                <a
                  href={`tel:${company.contact.phone}`}
                  className="text-neutral-700 hover:underline"
                >
                  {company.contact.phone}
                </a>
              </p>
              <p>
                <span className="font-medium text-neutral-900">Email</span>
                <span className="mx-2 text-neutral-300">·</span>
                <a
                  href={`mailto:${company.contact.email}`}
                  className="text-neutral-700 hover:underline"
                >
                  {company.contact.email}
                </a>
              </p>
            </div>
          </div>

          {/* Sede legale */}
          <div className="rounded border border-neutral-200 bg-white p-6">
            <h2 className="mb-4 text-xs font-semibold uppercase tracking-wider text-neutral-500">
              Sede legale
            </h2>
            <address className="not-italic text-sm leading-relaxed text-neutral-700">
              <p className="font-medium text-neutral-900">{company.name}</p>
              <p>{company.legalAddress.street}</p>
              <p>
                {company.legalAddress.zip} {company.legalAddress.city} ({company.legalAddress.province})
              </p>
            </address>
          </div>

          {/* Sede operativa */}
          <div className="rounded border border-neutral-200 bg-white p-6">
            <h2 className="mb-4 text-xs font-semibold uppercase tracking-wider text-neutral-500">
              Sede operativa
            </h2>
            <address className="not-italic text-sm leading-relaxed text-neutral-700">
              <p>{company.operationalAddress.street}</p>
              <p>
                {company.operationalAddress.zip} {company.operationalAddress.city} ({company.operationalAddress.province})
              </p>
            </address>
          </div>
        </div>

        {/* Dati societari */}
        <div className="mt-6 rounded border border-neutral-200 bg-neutral-50 p-6">
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-wider text-neutral-500">
            Dati societari
          </h2>
          <dl className="grid grid-cols-1 gap-x-10 gap-y-2 text-sm sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex gap-2">
              <dt className="shrink-0 font-medium text-neutral-900">Ragione sociale</dt>
              <dd className="text-neutral-600">{company.name}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="shrink-0 font-medium text-neutral-900">Forma giuridica</dt>
              <dd className="text-neutral-600">{company.legalForm}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="shrink-0 font-medium text-neutral-900">P. IVA / C.F.</dt>
              <dd className="text-neutral-600">{company.vatNumber}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="shrink-0 font-medium text-neutral-900">REA</dt>
              <dd className="text-neutral-600">{company.rea}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="shrink-0 font-medium text-neutral-900">PEC</dt>
              <dd className="text-neutral-600">{company.pec}</dd>
            </div>
          </dl>
        </div>
      </Container>
    </div>
  );
}
