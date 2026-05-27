import Link from "next/link";

export function Navigation() {
  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300 bg-surface-page border-b border-subtle/30">
      <div className="max-w-7xl mx-auto px-8 lg:px-16 h-20 flex items-center justify-between">
        {/* Monograma MCM com estilo */}
        <Link href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-gradient-to-br from-accent-primary to-accent-hover rounded-button flex items-center justify-center">
            <span className="text-text-on-accent font-display text-lg font-bold">M</span>
          </div>
          <span className="hidden sm:inline font-display text-xl font-bold text-text-primary">
            MCM
          </span>
        </Link>

        {/* Links de navegação */}
        <div className="hidden md:flex gap-8 lg:gap-12 items-center">
          {["Como Funciona", "Serviços", "Sobre", "Contato"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="relative font-body text-sm font-medium text-text-secondary hover:text-text-primary transition-colors group"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent-primary group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </div>

        {/* CTA Principal */}
        <button className="bg-accent-primary text-text-on-accent font-body text-cta px-6 lg:px-8 h-12 rounded-button hover:bg-accent-hover hover:shadow-float hover:-translate-y-0.5 transition-all duration-200 active:translate-y-0">
          Consulta Gratuita
        </button>
      </div>
    </nav>
  );
}
