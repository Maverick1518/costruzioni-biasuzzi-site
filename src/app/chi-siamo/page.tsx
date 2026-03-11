import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import IntroSection from "@/components/sections/IntroSection";
import StrengthsSection from "@/components/sections/StrengthsSection";
import SectionTitle from "@/components/ui/SectionTitle";
import { company } from "@/data/company";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Chi siamo",
  description:
    "Profilo aziendale di Costruzioni Generali Biasuzzi S.r.l., impresa attiva nelle opere pubbliche e nelle infrastrutture.",
};

export default function ChiSiamoPage() {
  return (
    <>
      <IntroSection
        title="Chi siamo"
        subtitle="Profilo istituzionale dell'impresa e principali ambiti operativi."
      />

      <section className="bg-surface py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.3fr)_minmax(18rem,1fr)]">
            <div className="max-w-3xl">
              <SectionTitle
                title="Presenza aziendale"
                subtitle="Una struttura organizzata a supporto dei cantieri e delle attività sul territorio."
                marker
              />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-neutral-600">
                <p className="text-descriptive">
                  La società opera con sede legale a {company.legalAddress.city} e sede
                  operativa a {company.operationalAddress.city}, mantenendo un presidio
                  diretto sulle commesse e sulle attività di cantiere.
                </p>
                <p className="text-descriptive">
                  L&apos;organizzazione aziendale supporta interventi in ambito civile e
                  infrastrutturale, con competenze applicate a lavori stradali, reti
                  idriche, opere idrauliche, demolizioni e bonifiche ambientali.
                </p>
              </div>
            </div>

            <div className="rounded border border-neutral-200 bg-white p-6">
              <h2 className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                Sedi
              </h2>
              <div className="mt-4 space-y-5 text-sm text-neutral-600">
                <div>
                  <p className="font-medium text-neutral-900">Sede legale</p>
                  <p>{company.name}</p>
                  <p>{company.legalAddress.street}</p>
                  <p>
                    {company.legalAddress.zip} {company.legalAddress.city} ({company.legalAddress.province})
                  </p>
                </div>
                <div>
                  <p className="font-medium text-neutral-900">Sede operativa</p>
                  <p>{company.operationalAddress.street}</p>
                  <p>
                    {company.operationalAddress.zip} {company.operationalAddress.city} ({company.operationalAddress.province})
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 rounded border border-neutral-200 bg-white p-6">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
              Ambiti di attività
            </h2>
            <ul className="mt-4 grid gap-3 text-sm text-neutral-600 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <li key={service.id} className="rounded border border-neutral-100 bg-neutral-50 px-4 py-3">
                  <span className="font-medium text-neutral-900">{service.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <StrengthsSection />
    </>
  );
}
