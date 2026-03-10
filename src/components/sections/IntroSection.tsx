import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";

export default function IntroSection() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="max-w-3xl">
          <SectionTitle
            title="Chi siamo"
            subtitle="Un'impresa strutturata, con esperienza nel settore delle opere pubbliche e delle infrastrutture."
            marker
          />
          <div className="mt-6 space-y-4 text-base leading-relaxed text-neutral-600">
            <p>
              Costruzioni Generali Biasuzzi S.R.L. opera nel settore delle costruzioni
              civili e delle infrastrutture pubbliche, con esperienza consolidata nella
              realizzazione di opere per committenti pubblici e privati.
            </p>
            <p>
              L&apos;azienda è qualificata per l&apos;esecuzione di opere stradali,
              acquedotti, fognature, opere idrauliche, demolizioni e bonifiche ambientali,
              garantendo competenza tecnica e affidabilità operativa in ogni fase del
              progetto.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
