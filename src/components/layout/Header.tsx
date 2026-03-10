"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks } from "@/data/navigation";
import { company } from "@/data/company";
import Container from "./Container";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="border-b border-slate-200 bg-white">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Brand / Logo placeholder */}
          {/* PLACEHOLDER: sostituire con <Image> quando disponibile il logo aziendale */}
          <Link
            href="/"
            className="flex items-center gap-2 text-slate-900 hover:text-slate-700 transition-colors"
          >
            <span className="text-base font-semibold tracking-tight">
              {company.name}
            </span>
          </Link>

          {/* Navigazione desktop */}
          <nav aria-label="Navigazione principale" className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-slate-900 ${
                  pathname === link.href
                    ? "border-b-2 border-slate-800 pb-0.5 text-slate-900"
                    : "text-slate-600"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Bottone menu mobile */}
          <button
            type="button"
            aria-label={menuOpen ? "Chiudi menu" : "Apri menu di navigazione"}
            aria-expanded={menuOpen}
            className="flex flex-col justify-center gap-1 p-2 text-slate-600 hover:text-slate-900 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
          </button>
        </div>

        {/* Menu mobile collapsible */}
        {menuOpen && (
          <nav aria-label="Navigazione mobile" className="border-t border-slate-100 py-3 md:hidden">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`block py-2.5 text-sm font-medium transition-colors hover:text-slate-900 ${
                  pathname === link.href ? "text-slate-900" : "text-slate-600"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}
      </Container>
    </header>
  );
}
