"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { siteConfig } from "./globals/config";

export function AboutSection() {
  return (
    <section id="sobre" className="section-padding bg-surface-page">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 xl:gap-20 items-center">
          <motion.div
            className="relative aspect-[4/5] lg:aspect-auto lg:h-[28rem] xl:h-[32rem] bg-surface-card border border-subtle overflow-hidden"
            initial={{ opacity: 0, scale: 1.02 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-10%" }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-surface-card to-surface-elevated flex items-center justify-center">
              <Image
                src="/mario-cruz-advogado.png"
                alt="Dr. Mário da Cruz Martins"
                fill
                className="object-cover object-top grayscale"
              />
            </div>
            <div className="absolute inset-0 bg-[#0B1219]/20 mix-blend-multiply pointer-events-none" />
          </motion.div>

          <motion.div
            className="lg:pl-4 xl:pl-8"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            viewport={{ once: true, margin: "-10%" }}
          >
            <p className="section-label text-text-muted">Sobre o Advogado</p>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-section-title text-text-primary font-semibold mb-6 leading-tight">
              Mário da Cruz Martins
            </h2>

            <p className="font-body text-base lg:text-body text-text-secondary mb-8 leading-relaxed">
              Com mais de 17 anos de atuação exclusiva em Direito Previdenciário, o Dr. Mário da
              Cruz Martins dedica-se a recuperar benefícios negados e garantir que cada cliente
              receba aquilo que é seu por direito. Especialista em Aposentadoria Especial, por tempo de Contribuição, por Idade, Rural e demais Benefícios previdenciários.
            </p>

            <div className="flex items-baseline gap-4 mb-8 pb-8 border-b border-subtle"></div>

            <p className="font-body text-caption text-text-muted mb-8">
              {siteConfig.advogado.oab} · {siteConfig.advogado.especialidade}
            </p>

            <button type="button" className="btn-ghost">
              Leia o perfil completo
              <span aria-hidden="true">→</span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
