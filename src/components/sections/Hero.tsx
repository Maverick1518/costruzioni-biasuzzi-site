import Button from "@/components/ui/Button";
import Container from "@/components/layout/Container";

export default function Hero() {
  return (
    <section className="bg-brand-teal-dark py-20 sm:py-28">
      <Container>
        <div className="max-w-2xl">
          {/* Barra brand rossa — accento del logo */}
          <div className="mb-6 h-1 w-12 bg-brand" />
          <h1 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Opere pubbliche e infrastrutture con competenza e affidabilità
          </h1>
          <p className="mt-5 text-base leading-relaxed text-white/70 sm:text-lg">
            Costruzioni Generali Biasuzzi Srl è un&apos;impresa specializzata nella
            realizzazione di infrastrutture stradali, reti idriche, opere idrauliche e
            bonifiche ambientali.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/contatti" variant="primary">
              Contattaci
            </Button>
            <Button href="/servizi" variant="outline">
              I nostri servizi
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
