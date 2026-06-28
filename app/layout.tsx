import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { GlowBackground } from "./../components/GlowBackground";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mário da Cruz Martins | Advogado Previdenciário",
  description:
    "Especialista em direito previdenciário com 17+ anos de atuação. Recupere seu benefício negado, atrasado ou sub-calculado.",
  keywords: "advogado previdenciário, aposentadoria, benefício INSS, Maringá",
  icons: {
    icon: [
      { url: "/favicon.ico", rel: "shortcut icon" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Mário da Cruz Martins | Advogado Previdenciário",
    description:
      "Especialista em direito previdenciário com 17+ anos de atuação. Recupere seu benefício negado, atrasado ou sub-calculado.",
    url: "https://mariocruzadvogado.com",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${cormorant.variable} ${manrope.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-surface-page text-text-primary pb-20 md:pb-0">
        <GlowBackground />
        {children}
      </body>
    </html>
  );
}
