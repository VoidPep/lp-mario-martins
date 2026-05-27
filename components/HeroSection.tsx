"use client";

import { motion } from "framer-motion";

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <section className="pt-40 pb-32 px-6 sm:px-8 lg:px-16 bg-surface-page relative min-h-screen flex items-center justify-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Coluna Esquerda - Texto (55%) */}
          <motion.div
            className="col-span-1 flex flex-col justify-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
          >
            {/* Subtitle elegante */}
            <motion.p
              variants={itemVariants}
              className="font-body text-xs lg:text-sm font-semibold text-accent-primary tracking-widest uppercase mb-8"
            >
              ✨ Especialista em Direito Previdenciário
            </motion.p>

            {/* Headline com contraste de peso */}
            <motion.h1
              variants={itemVariants}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-text-primary leading-tight mb-3"
            >
              Seu benefício
            </motion.h1>

            <motion.h1
              variants={itemVariants}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-light text-accent-primary leading-tight mb-8"
            >
              tem solução
            </motion.h1>

            {/* Descrição */}
            <motion.p
              variants={itemVariants}
              className="font-body text-lg lg:text-xl text-text-secondary mb-12 max-w-md leading-relaxed"
            >
              Com mais de 17 anos de experiência, recupero benefícios negados, atrasados ou sub-calculados. Você merece receber aquilo que é seu por direito.
            </motion.p>

            {/* CTAs com melhor espaçamento */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <button className="bg-accent-primary text-text-on-accent font-body text-cta px-8 py-4 rounded-button hover:bg-accent-hover hover:shadow-float hover:-translate-y-1 transition-all duration-200 active:translate-y-0 whitespace-nowrap">
                Marcar Consulta Gratuita
              </button>
              <button className="border-2 border-accent-primary text-accent-primary font-body text-cta px-8 py-4 rounded-button hover:bg-accent-subtle hover:shadow-float transition-all duration-200 whitespace-nowrap">
                Saiba Mais
              </button>
            </motion.div>

            {/* Stats rápidos */}
            <motion.div variants={itemVariants} className="flex gap-12 mt-16 pt-12 border-t border-subtle/30">
              <div>
                <p className="font-display text-3xl font-bold text-accent-primary">300+</p>
                <p className="font-body text-sm text-text-muted mt-2">Benefícios Conquistados</p>
              </div>
              <div>
                <p className="font-display text-3xl font-bold text-accent-primary">17 anos</p>
                <p className="font-body text-sm text-text-muted mt-2">De Atuação</p>
              </div>
              <div>
                <p className="font-display text-3xl font-bold text-accent-primary">98%</p>
                <p className="font-body text-sm text-text-muted mt-2">Taxa de Aprovação</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Coluna Direita - SVG (45%) */}
          <motion.div
            className="col-span-1 flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true, margin: "-10%" }}
          >
            <div className="w-full max-w-md">
              <svg
                className="w-full"
                viewBox="0 0 500 480"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Container visual com borda sutil */}
                <rect
                  x="50"
                  y="40"
                  width="400"
                  height="400"
                  fill="none"
                  stroke="url(#grad1)"
                  strokeWidth="1"
                  opacity="0.3"
                  rx="4"
                />

                {/* Documentos empilhados com gradiente */}
                {[
                  { y: 0, width: 240, height: 32, i: 0 },
                  { y: 60, width: 180, height: 32, i: 1 },
                  { y: 120, width: 200, height: 32, i: 2 },
                  { y: 180, width: 160, height: 32, i: 3 },
                  { y: 240, width: 220, height: 32, i: 4 },
                ].map((doc) => (
                  <motion.g key={doc.i}>
                    <rect
                      x={(500 - doc.width) / 2}
                      y={100 + doc.y}
                      width={doc.width}
                      height={doc.height}
                      fill="#131F2A"
                      stroke="#B8924A"
                      strokeWidth="1.5"
                      opacity="0.7"
                      rx="2"
                      // initial={{ opacity: 0, x: -20 }}
                      // whileInView={{ opacity: 0.7, x: 0 }}
                      // transition={{ delay: doc.i * 0.15, duration: 0.6 }}
                      // viewport={{ once: true }}
                    />
                  </motion.g>
                ))}

                {/* Linha diagonal em dourado com efeito */}
                <motion.line
                  x1="80"
                  y1="330"
                  x2="420"
                  y2="130"
                  stroke="#B8924A"
                  strokeWidth="3"
                  strokeDasharray="400"
                  animate={{ strokeDashoffset: [400, 0, 400] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />

                {/* Pontos brilhantes */}
                {[140, 210, 280, 350].map((x, i) => (
                  <motion.circle
                    key={`point-${i}`}
                    cx={x}
                    cy={330 - ((x - 80) * 200) / 340}
                    r="6"
                    fill="#B8924A"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.5 + i * 0.15, duration: 0.4 }}
                    viewport={{ once: true }}
                  />
                ))}

                {/* Gradiente */}
                <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#B8924A" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#B8924A" stopOpacity="0.1" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
