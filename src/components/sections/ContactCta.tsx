import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import { company } from "@/data/company";

export default function ContactCta() {
  return (
    <section className="bg-surface py-16 sm:py-20">
      <Container>
        <div className="max-w-xl">
          <div className="mb-5 h-1 w-10 bg-brand" />
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">
            Richiedi informazioni
          </h2>
          <p className="text-descriptive mt-3 text-base leading-relaxed text-neutral-700">
            Per preventivi, informazioni su appalti o per qualsiasi necessità tecnica,
            il nostro ufficio è a disposizione.
          </p>
          <div className="mt-5 space-y-1 text-sm text-neutral-700">
            <p>
              Tel:{" "}
              <a
                href={`tel:${company.contact.phone}`}
                className="font-medium text-neutral-900 hover:underline"
              >
                {company.contact.phone}
              </a>
            </p>
            <p>
              Email:{" "}
              <a
                href={`mailto:${company.contact.email}`}
                className="font-medium text-neutral-900 hover:underline"
              >
                {company.contact.email}
              </a>
            </p>
          </div>
          <div className="mt-6">
            <Button href="/contatti" variant="primary">
              Vai alla pagina contatti
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
