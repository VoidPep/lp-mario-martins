"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-surface-elevated/95 backdrop-blur-md border-b border-subtle shadow-nav"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="section-container h-[4.5rem] lg:h-20 flex items-center justify-between">
        <Link href="#" className="flex items-center gap-3 group">
          <div className="w-9 h-9 lg:w-10 lg:h-10 bg-gradient-to-br from-accent-primary to-accent-hover rounded-button flex items-center justify-center shadow-[0_2px_12px_rgba(184,146,74,0.3)]">
            <span className="text-text-on-accent font-display text-base lg:text-lg font-bold">M</span>
          </div>
          <span className="hidden sm:inline font-display text-xl font-bold text-text-primary tracking-tight">
            MCM
          </span>
        </Link>

        <div className="hidden md:flex gap-8 lg:gap-10 items-center">
          {navLinks.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="relative font-body text-sm font-medium text-text-secondary hover:text-text-primary transition-colors py-1 group"
            >
              {label}
              <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-accent-primary group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </div>

        <Link href="#contato" className="btn-primary btn-sm lg:px-8">
          Consulta Gratuita
        </Link>
      </div>
    </nav>
  );
}
