import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import ServiceCard from "@/components/ui/ServiceCard";
import Button from "@/components/ui/Button";
import { services } from "@/data/services";

export default function ServicesOverview() {
  return (
    <section className="bg-surface py-16 sm:py-20">
      <Container>
        <SectionTitle
          title="Ambiti operativi"
          subtitle="Realizziamo opere pubbliche e infrastrutture in diversi settori tecnici, con mezzi propri e personale specializzato."
          marker
        />
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
        <div className="mt-8">
          <Button href="/servizi" variant="secondary">
            Tutti i servizi
          </Button>
        </div>
      </Container>
    </section>
  );
}
