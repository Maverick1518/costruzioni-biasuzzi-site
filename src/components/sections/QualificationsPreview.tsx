import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import { qualifications } from "@/data/qualifications";

interface QualificationsPreviewProps {
  title?: string;
  subtitle?: string;
  className?: string;
  showButton?: boolean;
  showDescriptions?: boolean;
}

export default function QualificationsPreview({
  title = "Qualificazioni SOA",
  subtitle = "Siamo qualificati per l'esecuzione di lavori pubblici nelle seguenti categorie.",
  className = "py-16 sm:py-20",
  showButton = true,
  showDescriptions = false,
}: QualificationsPreviewProps) {
  return (
    <section className={className}>
      <Container>
        <SectionTitle title={title} subtitle={subtitle} marker />
        <div
          className={`mt-8 grid gap-3 ${
            showDescriptions ? "grid-cols-1 lg:grid-cols-2" : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
          }`}
        >
          {qualifications.map((q) => (
            <div
              key={q.code}
              className="rounded border border-neutral-200 bg-white px-4 py-4"
            >
              <span className="block text-base font-semibold text-brand">{q.code}</span>
              <span className="mt-0.5 block text-xs text-neutral-500">
                Classifica {q.classification}
              </span>
              {showDescriptions && (
                <>
                  <p className="mt-3 text-sm font-medium text-neutral-900">{q.category}</p>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                    {q.description}
                  </p>
                </>
              )}
            </div>
          ))}
        </div>
        {showButton && (
          <div className="mt-8">
            <Button href="/qualificazioni" variant="secondary">
              Dettaglio qualificazioni
            </Button>
          </div>
        )}
      </Container>
    </section>
  );
}
