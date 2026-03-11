import Link from "next/link";
import { company } from "@/data/company";
import { navLinks } from "@/data/navigation";
import Container from "./Container";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-teal text-white/80">
      <div className="h-px bg-white/20" />

      <Container className="py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-white">
              {company.name}
            </p>
            <address className="not-italic text-sm leading-relaxed">
              <p className="mb-0.5 text-xs font-medium uppercase tracking-wide text-white/60">
                Sede legale
              </p>
              <p>{company.legalAddress.street}</p>
              <p>
                {company.legalAddress.zip} {company.legalAddress.city} ({company.legalAddress.province})
              </p>

              <p className="mb-0.5 mt-3 text-xs font-medium uppercase tracking-wide text-white/60">
                Sede operativa
              </p>
              <p>{company.operationalAddress.street}</p>
              <p>
                {company.operationalAddress.zip} {company.operationalAddress.city} ({company.operationalAddress.province})
              </p>
            </address>
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-white">
              Navigazione
            </p>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition-colors hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-white">
              Contatti
            </p>
            <address className="not-italic text-sm leading-relaxed">
              <p>
                Tel:{" "}
                <a
                  href={`tel:${company.contact.phone}`}
                  className="transition-colors hover:text-white"
                >
                  {company.contact.phone}
                </a>
              </p>
              <p>
                Email:{" "}
                <a
                  href={`mailto:${company.contact.email}`}
                  className="transition-colors hover:text-white"
                >
                  {company.contact.email}
                </a>
              </p>
              <p className="mt-2 text-white/70">PEC: {company.pec}</p>
            </address>

            <div className="mt-4 border-t border-white/20 pt-4 text-xs text-white/70">
              <p>P. IVA / C.F. {company.vatNumber}</p>
              <p>REA {company.rea}</p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/20 pt-6 text-center text-xs text-white/60">
          © {currentYear} {company.name}. Tutti i diritti riservati.
        </div>
      </Container>
    </footer>
  );
}
