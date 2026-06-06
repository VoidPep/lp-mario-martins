"use client";

import { motion } from "framer-motion";

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section className="section-padding pt-32 lg:pt-40 pb-20 lg:pb-28 bg-surface-page relative min-h-[90vh] flex items-center">
      <div className="section-container w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 xl:gap-24 items-center">
          <motion.div
            className="flex flex-col justify-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.p variants={itemVariants} className="section-label">
              Advocacia Previdenciária Especializada
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="font-display text-[2.75rem] sm:text-6xl lg:text-7xl xl:text-[5rem] font-bold text-text-primary leading-[1.05] mb-1"
            >
              Seu benefício
            </motion.h1>

            <motion.h1
              variants={itemVariants}
              className="font-display text-[2.75rem] sm:text-6xl lg:text-7xl xl:text-[5rem] font-light text-accent-primary leading-[1.05] mb-8 lg:mb-10"
            >
              tem solução
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="font-body text-base lg:text-lg text-text-secondary mb-10 lg:mb-12 max-w-md leading-relaxed"
            >
              Com mais de 17 anos de experiência, recupero benefícios negados, atrasados ou
              sub-calculados. Você merece receber aquilo que é seu por direito.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              <a href="#contato" className="btn-primary">
                Marcar Consulta Gratuita
              </a>
              <a href="#servicos" className="btn-secondary">
                Conheça os Serviços
              </a>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-6 sm:gap-10 mt-14 lg:mt-20 pt-10 border-t border-subtle"
            >
              {[
                { value: "300+", label: "Benefícios Conquistados" },
                { value: "17", label: "Anos de Atuação" },
                { value: "98%", label: "Taxa de Aprovação" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-2xl sm:text-3xl font-light text-accent-primary">
                    {stat.value}
                  </p>
                  <p className="font-body text-xs sm:text-sm text-text-muted mt-1.5 leading-snug">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="flex justify-center items-center order-first lg:order-last"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="w-full max-w-md lg:max-w-none">
              <svg className="w-full" viewBox="0 0 500 480" xmlns="http://www.w3.org/2000/svg">
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

                {[
                  { y: 0, width: 240, height: 32, i: 0 },
                  { y: 60, width: 180, height: 32, i: 1 },
                  { y: 120, width: 200, height: 32, i: 2 },
                  { y: 180, width: 160, height: 32, i: 3 },
                  { y: 240, width: 220, height: 32, i: 4 },
                ].map((doc) => (
                  <rect
                    key={doc.i}
                    x={(500 - doc.width) / 2}
                    y={100 + doc.y}
                    width={doc.width}
                    height={doc.height}
                    fill="#131F2A"
                    stroke="#B8924A"
                    strokeWidth="1.5"
                    opacity="0.7"
                    rx="2"
                  />
                ))}

                <motion.line
                  x1="80"
                  y1="330"
                  x2="420"
                  y2="130"
                  stroke="#B8924A"
                  strokeWidth="3"
                  strokeDasharray="400"
                  animate={{ strokeDashoffset: [400, 0, 400] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                />

                {[140, 210, 280, 350].map((x, i) => (
                  <motion.circle
                    key={`point-${i}`}
                    cx={x}
                    cy={330 - ((x - 80) * 200) / 340}
                    r="5"
                    fill="#B8924A"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.8 + i * 0.12, duration: 0.4 }}
                  />
                ))}

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
