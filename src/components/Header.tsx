 "use client";

import { useState } from "react";
import { Menu, PawPrint, X } from "lucide-react";

const links = [
  { href: "#servicios", label: "Servicios" },
  { href: "#citas", label: "Solicitar cita" },
  { href: "#consejos", label: "Consejos" },
  { href: "#contacto", label: "Contacto" }
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-emerald-950/5 bg-cream/95 backdrop-blur">
      <div className="container-page flex min-h-[76px] items-center justify-between gap-5">
        <a href="#inicio" aria-label="VetCare, ir al inicio" className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-forest text-white">
            <PawPrint size={23} aria-hidden="true" />
          </span>
          <span>
            <span className="block text-xl font-extrabold tracking-tight text-ink">VetCare</span>
            <span className="block text-[11px] font-medium text-muted">Cuidamos juntos</span>
          </span>
        </a>

        <nav aria-label="Navegación principal" className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-semibold text-muted transition hover:text-forest">
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#citas" className="hidden rounded-full bg-forest px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-forest-dark md:inline-flex">
          Agenda una visita <span className="ml-2" aria-hidden="true">↗</span>
        </a>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-950/10 text-ink md:hidden"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <nav aria-label="Navegación móvil" className="border-t border-emerald-950/10 bg-white px-5 py-3 md:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block rounded-xl px-3 py-3 font-semibold text-ink hover:bg-mint"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
