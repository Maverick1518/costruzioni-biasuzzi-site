import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";

const strengths = [
  {
    title: "Esperienza operativa",
    description:
      "Oltre quarant'anni di attività nel settore delle opere pubbliche e delle infrastrutture, con cantieri di diversa complessità e committenti pubblici e privati.",
  },
  {
    title: "Struttura organizzata",
    description:
      "Personale tecnico qualificato, parco macchine adeguato e processi di cantiere consolidati per garantire efficienza e puntualità.",
  },
  {
    title: "Competenze certificate",
    description:
      "Qualificazioni SOA nelle principali categorie di lavori pubblici, con classifiche di rilievo che attestano la solidità dell'impresa.",
  },
  {
    title: "Presenza sul territorio",
    description:
      "Sede legale a Ponzano Veneto e sede operativa a Treviso, a supporto diretto dei cantieri e della committenza.",
  },
];

export default function StrengthsSection() {
  return (
    <section className="bg-surface py-16 sm:py-20">
      <Container>
        <SectionTitle
          title="Perché sceglierci"
          subtitle="Affidabilità, competenza e presenza sul territorio."
          marker
        />
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {strengths.map((item) => (
            <div key={item.title} className="flex gap-4">
              <div className="mt-1 h-5 w-1 shrink-0 rounded-full bg-brand" />
              <div>
                <h3 className="mb-1 text-sm font-semibold text-neutral-900">{item.title}</h3>
                <p className="text-sm leading-relaxed text-neutral-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
