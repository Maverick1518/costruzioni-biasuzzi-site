import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import { company } from "@/data/company";

export default function ContactCta() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="rounded border border-slate-200 bg-white p-8 sm:p-10">
          <div className="max-w-xl">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
              Richiedi informazioni
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Per preventivi, informazioni su appalti o per qualsiasi necessità tecnica,
              il nostro ufficio è a disposizione.
            </p>
            <div className="mt-5 space-y-1 text-sm text-slate-700">
              <p>
                Tel:{" "}
                <a
                  href={`tel:${company.contact.phone}`}
                  className="font-medium hover:underline"
                >
                  {company.contact.phone}
                </a>
              </p>
              <p>
                Email:{" "}
                <a
                  href={`mailto:${company.contact.email}`}
                  className="font-medium hover:underline"
                >
                  {company.contact.email}
                </a>
              </p>
            </div>
            <div className="mt-6">
              <Button href="/contatti">Vai alla pagina contatti</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
