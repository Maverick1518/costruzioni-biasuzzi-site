import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import QualificationsPreview from "@/components/sections/QualificationsPreview";
import DocumentCard from "@/components/ui/DocumentCard";
import SectionTitle from "@/components/ui/SectionTitle";
import { qualificationDocuments } from "@/data/qualifications";

export const metadata: Metadata = {
  title: "Qualificazioni",
  description:
    "Qualificazioni SOA di Costruzioni Generali Biasuzzi S.R.L. per l'esecuzione di lavori pubblici.",
};

export default function QualificazioniPage() {
  return (
    <>
      <section className="py-16 sm:py-20">
        <Container>
          <div className="max-w-3xl">
            <SectionTitle
              title="Qualificazioni"
              subtitle="Le qualificazioni riportate in questa pagina documentano l'idoneita di Costruzioni Generali Biasuzzi S.R.L. all'esecuzione di lavori pubblici nelle categorie per cui l'impresa risulta attestata."
              marker
            />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-neutral-600">
              <p className="text-descriptive">
                L&apos;attestazione SOA in corso di validita comprende le categorie OG1, OG3,
                OG6, OG8, OG10, OG12, OS1 e OS23, con classifiche differenziate in
                funzione degli ambiti di intervento. A supporto
                dell&apos;organizzazione aziendale e inoltre presente la certificazione UNI EN ISO
                9001:2015 per il sistema di gestione per la qualita.
              </p>
              <p className="text-descriptive">
                La sezione seguente riporta il dettaglio delle categorie e dei relativi
                documenti di attestazione e certificazione.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <QualificationsPreview
        className="bg-surface py-16 sm:py-20"
        subtitle="Categorie SOA e relative classifiche per le lavorazioni gia presenti nel progetto."
        showButton={false}
        showDescriptions
      />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="max-w-3xl">
            <SectionTitle
              title="Certificazioni e attestazioni"
              subtitle="Documenti ufficiali aziendali consultabili online e disponibili per il download."
              marker
            />
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {qualificationDocuments.map((document) => (
              <DocumentCard key={document.id} document={document} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
