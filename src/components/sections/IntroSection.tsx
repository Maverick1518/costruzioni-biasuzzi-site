import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";

interface IntroSectionProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

const defaultSubtitle =
  "Un'impresa strutturata, con esperienza nel settore delle opere pubbliche e delle infrastrutture.";

export default function IntroSection({
  title = "Chi siamo",
  subtitle = defaultSubtitle,
  className = "py-16 sm:py-20",
}: IntroSectionProps) {
  return (
    <section className={className}>
      <Container>
        <div className="max-w-3xl">
          <SectionTitle title={title} subtitle={subtitle} marker />
          <div className="mt-6 space-y-4 text-base leading-relaxed text-neutral-600">
            <p className="text-descriptive">
              Costruzioni Generali Biasuzzi S.R.L. opera nel settore delle costruzioni
              civili e delle infrastrutture pubbliche, con esperienza consolidata nella
              realizzazione di opere per committenti pubblici e privati.
            </p>
            <p className="text-descriptive">
              L&apos;azienda e qualificata per l&apos;esecuzione di opere stradali,
              acquedotti, fognature, opere idrauliche, demolizioni e bonifiche ambientali,
              garantendo competenza tecnica e affidabilita operativa in ogni fase del
              progetto.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
