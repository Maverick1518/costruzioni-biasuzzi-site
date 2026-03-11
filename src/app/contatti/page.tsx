import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import ContactForm from "@/components/sections/ContactForm";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Contatti",
  description:
    "Contatta Costruzioni Generali Biasuzzi S.r.l. per informazioni e richieste tecniche. Sede operativa a Treviso.",
};

const mapEmbedUrl = `https://www.google.com/maps?q=${company.operationalCoordinates.lat},${company.operationalCoordinates.lng}&z=16&output=embed`;
const mapExternalUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${company.operationalAddress.street}, ${company.operationalAddress.zip} ${company.operationalAddress.city}`,
)}`;

export default function ContattiPage() {
  return (
    <div className="py-16 sm:py-20">
      <Container>
        <SectionTitle
          title="Contatti"
          subtitle="Riferimenti aziendali, sedi e dati societari."
          marker
        />

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">

          {/* Riquadro dati compatto */}
          <div className="rounded border border-neutral-200 bg-white p-6 text-sm">
            <p className="mb-4 font-semibold text-neutral-900">{company.name}</p>

            <dl className="space-y-2 text-neutral-700">
              <div className="flex gap-x-3">
                <dt className="w-28 shrink-0 text-neutral-400">Sede legale</dt>
                <dd>
                  <address className="not-italic leading-snug">
                    <span className="block">{company.legalAddress.street}</span>
                    <span className="block">
                      {company.legalAddress.zip} {company.legalAddress.city} ({company.legalAddress.province})
                    </span>
                  </address>
                </dd>
              </div>
              <div className="flex gap-x-3">
                <dt className="w-28 shrink-0 text-neutral-400">Sede operativa</dt>
                <dd>
                  <address className="not-italic leading-snug">
                    <span className="block">{company.operationalAddress.street}</span>
                    <span className="block">
                      {company.operationalAddress.zip} {company.operationalAddress.city} ({company.operationalAddress.province})
                    </span>
                  </address>
                </dd>
              </div>
              <div className="flex gap-x-3">
                <dt className="w-28 shrink-0 text-neutral-400">P. IVA / C.F.</dt>
                <dd>{company.vatNumber}</dd>
              </div>
              <div className="flex gap-x-3">
                <dt className="w-28 shrink-0 text-neutral-400">REA</dt>
                <dd>{company.rea}</dd>
              </div>
              <div className="flex gap-x-3">
                <dt className="w-28 shrink-0 text-neutral-400">Email</dt>
                <dd>
                  <a href={`mailto:${company.contact.email}`} className="hover:underline">
                    {company.contact.email}
                  </a>
                </dd>
              </div>
              <div className="flex gap-x-3">
                <dt className="w-28 shrink-0 text-neutral-400">PEC</dt>
                <dd>{company.pec}</dd>
              </div>
              <div className="flex gap-x-3">
                <dt className="w-28 shrink-0 text-neutral-400">Telefono</dt>
                <dd>
                  <a href={`tel:${company.contact.phone}`} className="hover:underline">
                    {company.contact.phone}
                  </a>
                </dd>
              </div>
            </dl>
          </div>

          {/* Mappa sede operativa */}
          <div className="flex flex-col rounded border border-neutral-200 bg-white">
            <div className="flex items-center justify-between px-4 py-3">
              <p className="text-xs text-neutral-500">
                Sede operativa — {company.operationalAddress.street},{" "}
                {company.operationalAddress.city}
              </p>
              <a
                href={mapExternalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 text-xs font-medium text-brand-teal hover:underline"
              >
                Apri su Maps
              </a>
            </div>
            <div className="flex-1 overflow-hidden rounded-b border-t border-neutral-100">
              <iframe
                title="Mappa sede operativa Costruzioni Generali Biasuzzi S.r.l."
                src={mapEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-72 w-full lg:h-full"
              />
            </div>
          </div>

        </div>

        <ContactForm />
      </Container>
    </div>
  );
}
