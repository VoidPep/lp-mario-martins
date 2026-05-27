import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface-card py-16 px-6 border-t border-subtle">
      <div className="max-w-content mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 text-center md:text-left">
          {/* Branding */}
          <div>
            <p className="text-accent-primary font-display text-2xl font-bold mb-2">MCM</p>
            <p className="font-body text-sm text-text-muted">Advogado Previdenciário especializado em direito do INSS</p>
          </div>

          {/* Links Rápidos */}
          <div>
            <p className="font-body text-caption text-text-muted mb-4">NAVEGAÇÃO</p>
            <nav className="space-y-2">
              <Link href="#como-funciona" className="font-body text-sm text-text-secondary hover:text-text-primary transition-colors">Como Funciona</Link>
              <Link href="#servicos" className="font-body text-sm text-text-secondary hover:text-text-primary transition-colors">Serviços</Link>
              <Link href="#sobre" className="font-body text-sm text-text-secondary hover:text-text-primary transition-colors">Sobre</Link>
              <Link href="#contato" className="font-body text-sm text-text-secondary hover:text-text-primary transition-colors">Contato</Link>
            </nav>
          </div>

          {/* Credencial */}
          <div>
            <p className="font-body text-caption text-text-muted mb-4">CREDENCIAL</p>
            <p className="font-body text-sm text-text-secondary mb-2"><span className="text-accent-primary font-semibold">OAB/SP 123456</span></p>
            <p className="font-body text-xs text-text-muted">Especialista em Direito Previdenciário pelo IBDP</p>
          </div>
        </div>

        <div className="border-t border-subtle py-6 text-center text-sm text-text-muted">
          © {currentYear} Mário da Cruz Martins. Todos os direitos reservados. • Desenvolvido com precisão jurídica
        </div>
      </div>
    </footer>
  );
}
