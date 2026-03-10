"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks } from "@/data/navigation";
import Container from "./Container";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="border-b border-neutral-200 bg-white">
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo aziendale */}
          <Link
            href="/"
            className="flex items-center transition-opacity hover:opacity-80"
            aria-label="Costruzioni Generali Biasuzzi Srl — Homepage"
          >
            <Image
              src="/images/logo-biasuzzi.jpg"
              alt="Costruzioni Generali Biasuzzi Srl"
              width={480}
              height={280}
              className="h-10 w-auto sm:h-11"
              priority
            />
          </Link>

          {/* Navigazione desktop */}
          <nav aria-label="Navigazione principale" className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "border-b-2 border-brand-teal pb-0.5 text-brand-teal-dark"
                    : "text-neutral-600 hover:text-brand-teal-dark"
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
            className="flex flex-col justify-center gap-1 p-2 text-neutral-600 hover:text-neutral-900 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
            <span className="block h-0.5 w-5 bg-current" />
          </button>
        </div>

        {/* Menu mobile collapsible */}
        {menuOpen && (
          <nav
            aria-label="Navigazione mobile"
            className="border-t border-neutral-100 py-3 md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`block py-2.5 text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "text-brand-teal-dark"
                    : "text-neutral-600 hover:text-brand-teal-dark"
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
