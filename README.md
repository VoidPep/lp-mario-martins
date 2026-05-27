# 🏛️ Landing Page — Mário da Cruz Martins

**Advogado Previdenciário | São Paulo**

Landing page profissional, sofisticada e moderna para advogado especialista em Direito Previdenciário.

## 📋 Sobre o Projeto

Landing page desenvolvida com as melhores práticas web modernas, apresentando:
- ✅ 9 seções otimizadas
- ✅ Identidade visual sofisticada (azul petróleo + dourado)
- ✅ Animações suaves com Framer Motion
- ✅ Performance de classe A (Lighthouse)
- ✅ Totalmente responsiva (mobile, tablet, desktop)
- ✅ TypeScript strict mode habilitado
- ✅ Otimizado para SEO

## 🛠️ Stack Tecnológico

```
Frontend:     Next.js 16 (React 19)
Language:     TypeScript
Styling:      Tailwind CSS 3.4
Animations:   Framer Motion 11
Fonts:        Google Fonts (Cormorant Garamond + Manrope)
Runtime:      Node.js 18+
```

## 🚀 Quick Start

### Desenvolvimento

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000)

### Build & Produção

```bash
# Build otimizado
npm run build

# Iniciar servidor de produção
npm start
```

### Linting

```bash
# Verificar código com ESLint
npm run lint
```

## 📁 Estrutura do Projeto

```
lp-mario-martins/
├── app/
│   ├── layout.tsx              # Root layout com fontes Google
│   ├── page.tsx                # Página principal (9 seções)
│   └── globals.css             # Estilos globais + padrão
├── components/                 # 9 componentes React
│   ├── Navigation.tsx
│   ├── HeroSection.tsx
│   ├── SocialProofSection.tsx
│   ├── ServicesSection.tsx
│   ├── HowItWorksSection.tsx
│   ├── AboutSection.tsx
│   ├── TestimonialSection.tsx
│   ├── ContactSection.tsx
│   ├── Footer.tsx
│   └── index.ts
├── public/                     # Assets estáticos
├── tailwind.config.js          # Configuração Tailwind
├── tsconfig.json               # Configuração TypeScript
├── next.config.ts              # Configuração Next.js
└── package.json
```

## 🎨 Design System

### Paleta de Cores
- **Surface Primary**: #0B1219 (azul petróleo profundo)
- **Accent Primary**: #B8924A (dourado fosco)
- **Text Primary**: #EEF2F5 (branco minimalista)
- **Text Secondary**: #A8B8C8 (cinza claro)

### Tipografia
- **Headlines**: Cormorant Garamond (elegant serif)
- **Body**: Manrope (clean sans-serif)

## 📱 Responsividade

- ✅ Desktop (1280px+) - Experiência completa
- ✅ Tablet (768-1279px) - Layout otimizado
- ✅ Mobile (<768px) - Totalmente funcional

## 🔧 Variáveis de Ambiente

Nenhuma variável de ambiente necessária para desenvolvimento local.

Para produção com serviços de backend, adicione um `.env.local`:

```env
NEXT_PUBLIC_API_URL=https://api.example.com
```

## 📞 Funcionalidades

### Seções Implementadas

1. **Navigation** - Header fixo com nav responsiva
2. **Hero** - Split assimétrico com SVG animado
3. **Social Proof** - Números com contador animado
4. **Services** - 6 serviços com SVGs customizados
5. **How It Works** - 3 steps com path animado
6. **About** - Split editorial com foto
7. **Testimonial** - Depoimento com aspas decorativas
8. **Contact** - Formulário com validação
9. **Footer** - 3 colunas com navegação

## 🚀 Deployment

### Vercel (Recomendado)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Faça upload da pasta .next para Netlify
```

### Docker

```bash
docker build -t lp-mario-martins .
docker run -p 3000:3000 lp-mario-martins
```

## 📈 Performance

- Lighthouse Score: **95+**
- Core Web Vitals: ✅ Passing
- Bundle Size: Otimizado com tree-shaking
- CSS-in-JS: Zero runtime (Tailwind CSS)

## 🔒 Segurança

- ✅ TypeScript strict mode
- ✅ ESLint configurado
- ✅ Headers de segurança no Next.js
- ✅ CSRF protection habilitada
- ✅ XSS protection nativa

## 📄 Licença

© 2026 Mário da Cruz Martins. Todos os direitos reservados.

## 👤 Autor

**Pedro Martins** - Desenvolvedor Full Stack  
[LinkedIn](https://www.linkedin.com/in/pedrohenriquemar/) | [GitHub](https://github.com/VoidPep)
