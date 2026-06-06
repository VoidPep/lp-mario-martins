import Link from "next/link";

const navLinks = [
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface-card border-t border-subtle">
      <div className="section-container py-14 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12 mb-10">
          <div>
            <p className="text-accent-primary font-display text-2xl font-bold mb-3 tracking-tight">MCM</p>
            <p className="font-body text-sm text-text-muted leading-relaxed max-w-xs">
              Advogado Previdenciário especializado em direito do INSS
            </p>
          </div>

          <div>
            <p className="font-body text-caption text-text-muted mb-4">Navegação</p>
            <nav className="flex flex-col gap-3">
              {navLinks.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className="font-body text-sm text-text-secondary hover:text-accent-primary transition-colors w-fit"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="sm:col-span-2 lg:col-span-1">
            <p className="font-body text-caption text-text-muted mb-4">Credencial</p>
            <p className="font-body text-sm text-text-secondary mb-2">
              <span className="text-accent-primary font-semibold">OAB/SP 123456</span>
            </p>
            <p className="font-body text-xs text-text-muted leading-relaxed">
              Especialista em Direito Previdenciário pelo IBDP
            </p>
          </div>
        </div>

        <div className="border-t border-subtle pt-8 text-center">
          <p className="text-sm text-text-muted leading-relaxed">
            © {currentYear} Mário da Cruz Martins. Todos os direitos reservados.
            <span className="hidden sm:inline"> · </span>
            <span className="block sm:inline mt-1 sm:mt-0">Desenvolvido com precisão jurídica</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
