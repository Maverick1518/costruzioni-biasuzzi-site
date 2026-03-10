import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";
import { qualifications } from "@/data/qualifications";

export default function QualificationsPreview() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionTitle
          title="Qualificazioni SOA"
          subtitle="Siamo qualificati per l'esecuzione di lavori pubblici nelle seguenti categorie."
        />
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {qualifications.map((q) => (
            <div key={q.code} className="rounded border border-slate-200 bg-white px-4 py-4">
              <span className="block text-base font-semibold text-slate-900">{q.code}</span>
              <span className="mt-0.5 block text-xs text-slate-500">
                Classifica {q.classification}
              </span>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Button href="/qualificazioni" variant="secondary">
            Dettaglio qualificazioni
          </Button>
        </div>
      </Container>
    </section>
  );
}
