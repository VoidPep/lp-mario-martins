/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Fundos
        "surface-page": "#0B1219",
        "surface-section-alt": "#0F1921",
        "surface-card": "#131F2A",
        "surface-elevated": "#162330",
        "surface-hero-alt": "#070C0F",
        
        // Texto
        "text-primary": "#EEF2F5",
        "text-secondary": "#A8B8C8",
        "text-muted": "#5C7080",
        "text-on-accent": "#0B1219",
        
        // Accent (dourado fosco)
        "accent-primary": "#B8924A",
        "accent-hover": "#CFA85E",
        "accent-subtle": "rgba(184, 146, 74, 0.12)",
        
        // Status
        "status-success": "#3D8C6B",
        "status-error": "#8C3D3D",
      },
      borderColor: {
        "default": "rgba(238, 242, 245, 0.12)",
        "subtle": "rgba(238, 242, 245, 0.06)",
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "serif"],
        body: ["var(--font-manrope)", "sans-serif"],
      },
      fontSize: {
        // Hero
        "hero": ["80px", { lineHeight: "1.0", letterSpacing: "-0.02em", fontWeight: "700" }],
        
        // Títulos de seção
        "section-title": ["48px", { lineHeight: "1.1", letterSpacing: "-0.01em", fontWeight: "600" }],
        
        // Subtítulos
        "section-subtitle": ["18px", { lineHeight: "1.6", letterSpacing: "0", fontWeight: "500" }],
        
        // Corpo
        "body": ["16px", { lineHeight: "1.7", fontWeight: "400" }],
        
        // Caption/Labels
        "caption": ["12px", { lineHeight: "1.4", letterSpacing: "0.08em", fontWeight: "500" }],
        
        // CTA
        "cta": ["14px", { letterSpacing: "0.04em", fontWeight: "600" }],
        
        // Números em display
        "number-display": ["96px", { lineHeight: "1.0", fontWeight: "300" }],
      },
      borderRadius: {
        card: "0px",
        button: "2px",
        input: "2px",
        badge: "2px",
      },
      boxShadow: {
        card: "0 1px 3px rgba(0,0,0,0.5), 0 8px 24px rgba(0,0,0,0.25)",
        nav: "0 1px 0 rgba(255,255,255,0.04)",
        float: "0 4px 32px rgba(0,0,0,0.4)",
      },
      spacing: {
        "section-padding-y": "120px",
        "section-padding-y-lg": "200px",
      },
      maxWidth: {
        content: "1280px",
      },
      backdropBlur: {
        md: "12px",
      },
    },
  },
  plugins: [],
};
