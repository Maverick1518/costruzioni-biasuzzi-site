import Button from "@/components/ui/Button";
import Container from "@/components/layout/Container";

export default function Hero() {
  return (
    <section className="border-b border-slate-800 bg-slate-900 py-20 sm:py-28">
      <Container>
        <div className="max-w-2xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-slate-400">
            Veneto · Friuli Venezia Giulia
          </p>
          <h1 className="text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Opere pubbliche e infrastrutture con competenza e affidabilità
          </h1>
          <p className="mt-5 text-base leading-relaxed text-slate-400 sm:text-lg">
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
