import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";

const strengths = [
  {
    title: "Esperienza operativa",
    description:
      "Anni di attività nel settore delle opere pubbliche e delle infrastrutture in ambito regionale, con cantieri di diversa complessità.",
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
    title: "Presenza territoriale",
    description:
      "Operatività radicata in Veneto e Friuli Venezia Giulia, con conoscenza diretta del territorio e delle sue specificità.",
  },
];

export default function StrengthsSection() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20">
      <Container>
        <SectionTitle
          title="Perché sceglierci"
          subtitle="Affidabilità, competenza e presenza sul territorio."
        />
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {strengths.map((item) => (
            <div key={item.title} className="flex gap-4">
              <div className="mt-1 h-5 w-1 flex-shrink-0 rounded-full bg-slate-800" />
              <div>
                <h3 className="mb-1 text-sm font-semibold text-slate-900">{item.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
