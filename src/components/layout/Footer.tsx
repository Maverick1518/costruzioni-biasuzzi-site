import Link from "next/link";
import { company } from "@/data/company";
import { navLinks } from "@/data/navigation";
import Container from "./Container";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-900 text-slate-300">
      <Container className="py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Dati aziendali */}
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-white">
              {company.name}
            </p>
            <address className="not-italic text-sm leading-relaxed">
              <p>{company.address.street}</p>
              <p>
                {company.address.zip} {company.address.city} ({company.address.province})
              </p>
              <p className="mt-3">
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
            </address>
          </div>

          {/* Link rapidi */}
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

          {/* Aree operative */}
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-white">
              Aree operative
            </p>
            <ul className="space-y-1 text-sm">
              {company.areas.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
            {company.vatNumber && (
              <p className="mt-4 text-xs text-slate-500">P.IVA {company.vatNumber}</p>
            )}
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800 pt-6 text-center text-xs text-slate-500">
          © {currentYear} {company.name}. Tutti i diritti riservati.
        </div>
      </Container>
    </footer>
  );
}
