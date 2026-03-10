import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Contatti",
  description:
    "Contatta Costruzioni Generali Biasuzzi S.R.L. per informazioni e richieste tecniche. Sede operativa a Treviso.",
};

const mapQuery = encodeURIComponent(
  `${company.operationalAddress.street}, ${company.operationalAddress.zip} ${company.operationalAddress.city} (${company.operationalAddress.province})`,
);

const mapEmbedUrl = `https://www.google.com/maps?q=${company.operationalCoordinates.lat},${company.operationalCoordinates.lng}&z=16&output=embed`;
const mapExternalUrl = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;

export default function ContattiPage() {
  return (
    <div className="py-16 sm:py-20">
      <Container>
        <SectionTitle
          title="Contatti"
          subtitle="Riferimenti aziendali, sedi e dati societari in un unico quadro informativo essenziale."
          marker
        />

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
          <div className="space-y-6">
            <section className="rounded border border-neutral-200 bg-white p-6">
              <h2 className="mb-4 text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Sedi
              </h2>
              <div className="grid gap-5 sm:grid-cols-2">
                <address className="not-italic text-sm leading-relaxed text-neutral-700">
                  <p className="mb-1 font-semibold text-neutral-900">Sede legale</p>
                  <p>{company.legalAddress.street}</p>
                  <p>
                    {company.legalAddress.zip} {company.legalAddress.city} ({company.legalAddress.province})
                  </p>
                </address>
                <address className="not-italic text-sm leading-relaxed text-neutral-700">
                  <p className="mb-1 font-semibold text-neutral-900">Sede operativa</p>
                  <p>{company.operationalAddress.street}</p>
                  <p>
                    {company.operationalAddress.zip} {company.operationalAddress.city} ({company.operationalAddress.province})
                  </p>
                </address>
              </div>
            </section>

            <section className="rounded border border-neutral-200 bg-white p-6">
              <h2 className="mb-4 text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Recapiti
              </h2>
              <div className="space-y-2 text-sm text-neutral-700">
                <p>
                  <span className="font-medium text-neutral-900">Telefono</span>
                  <span className="mx-2 text-neutral-300">|</span>
                  <a href={`tel:${company.contact.phone}`} className="hover:underline">
                    {company.contact.phone}
                  </a>
                </p>
                <p>
                  <span className="font-medium text-neutral-900">Email</span>
                  <span className="mx-2 text-neutral-300">|</span>
                  <a href={`mailto:${company.contact.email}`} className="hover:underline">
                    {company.contact.email}
                  </a>
                </p>
              </div>
            </section>

            <section className="rounded border border-neutral-200 bg-neutral-50 p-6">
              <h2 className="mb-4 text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Dati societari
              </h2>
              <dl className="space-y-2 text-sm text-neutral-700">
                <div className="flex flex-wrap gap-x-2">
                  <dt className="font-medium text-neutral-900">Ragione sociale:</dt>
                  <dd>{company.name}</dd>
                </div>
                <div className="flex flex-wrap gap-x-2">
                  <dt className="font-medium text-neutral-900">P. IVA / C.F.:</dt>
                  <dd>{company.vatNumber}</dd>
                </div>
                <div className="flex flex-wrap gap-x-2">
                  <dt className="font-medium text-neutral-900">REA:</dt>
                  <dd>{company.rea}</dd>
                </div>
                <div className="flex flex-wrap gap-x-2">
                  <dt className="font-medium text-neutral-900">PEC:</dt>
                  <dd>{company.pec}</dd>
                </div>
              </dl>
            </section>
          </div>

          <section className="rounded border border-neutral-200 bg-white p-4 sm:p-5">
            <div className="mb-4 flex items-start justify-between gap-3">
              <div>
                <h2 className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                  Sede operativa - geolocalizzazione
                </h2>
                <p className="mt-1 text-sm text-neutral-700">
                  {company.operationalAddress.street}, {company.operationalAddress.zip}{" "}
                  {company.operationalAddress.city} ({company.operationalAddress.province})
                </p>
              </div>
              <a
                href={mapExternalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 text-xs font-medium text-brand-teal hover:underline"
              >
                Apri su Google Maps
              </a>
            </div>

            <div className="overflow-hidden rounded border border-neutral-200">
              <iframe
                title="Mappa sede operativa Costruzioni Generali Biasuzzi S.R.L."
                src={mapEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[320px] w-full sm:h-[420px]"
              />
            </div>
          </section>
        </div>
      </Container>
    </div>
  );
}
