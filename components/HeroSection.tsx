"use client";

import { motion } from "framer-motion";
import Image from "next/image";

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
            <motion.p variants={itemVariants} className="section-label !text-sm !tracking-widest">
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
            <div className="w-full max-w-md lg:max-w-none relative">
              <div className="aspect-[3/4] overflow-hidden">
               <Image
                src="/mario-cruz-advogado.png"
                alt="Dr. Mário da Cruz Martins — Advogado Previdenciário"
                fill
                className="object-cover object-top grayscale"
                priority
              />
              </div>
              {/* Borda dourada decorativa */}
              <div className="absolute -bottom-3 -right-3 w-full h-full border border-accent-primary/40 -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
