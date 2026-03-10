import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import ServiceCard from "@/components/ui/ServiceCard";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Servizi",
  description:
    "Ambiti operativi di Costruzioni Generali Biasuzzi S.R.L.: lavori stradali, reti idriche, opere idrauliche, demolizioni e bonifiche.",
};

export default function ServiziPage() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionTitle
          title="Servizi"
          subtitle="Ambiti operativi dell'impresa nelle opere pubbliche e nelle infrastrutture."
          marker
        />
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </Container>
    </section>
  );
}
