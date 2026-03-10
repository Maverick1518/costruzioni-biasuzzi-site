import type { Metadata } from "next";
import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import CareersForm from "@/components/sections/CareersForm";

export const metadata: Metadata = {
  title: "Lavora con noi",
  description:
    "Invia la tua candidatura a Costruzioni Generali Biasuzzi S.R.L. compilando il modulo e allegando il curriculum vitae.",
};

export default function LavoraConNoiPage() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="max-w-3xl">
          <SectionTitle
            title="Lavora con noi"
            subtitle="L'azienda valuta candidature per profili operativi, tecnici e amministrativi. E possibile inviare la propria candidatura compilando il modulo seguente e allegando il curriculum vitae."
            marker
          />
        </div>

        <CareersForm />
      </Container>
    </section>
  );
}
