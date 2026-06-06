"use client";

import { motion } from "framer-motion";

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
              <div className="text-center px-6">
                <div className="w-20 h-20 mx-auto mb-5 rounded-full border border-accent-primary/30 flex items-center justify-center">
                  <span className="font-display text-3xl text-accent-primary">M</span>
                </div>
                <p className="text-text-muted text-sm leading-relaxed">
                  Foto do Dr. Mário da Cruz Martins
                  <br />
                  <span className="text-xs">(Fornecer foto profissional em P&amp;B)</span>
                </p>
              </div>
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
              Mais de 300 famílias que não desistiram.
            </h2>

            <p className="font-body text-base lg:text-body text-text-secondary mb-8 leading-relaxed">
              Com mais de 17 anos de atuação exclusiva em Direito Previdenciário, o Dr. Mário da
              Cruz Martins dedica-se a recuperar benefícios negados e garantir que cada cliente
              receba aquilo que é seu por direito. Especialista em aposentadorias, auxílios-doença,
              BPC/LOAS e revisões de benefícios.
            </p>

            <div className="flex items-baseline gap-4 mb-8 pb-8 border-b border-subtle">
              <span className="font-display text-5xl sm:text-6xl lg:text-[4.5rem] text-accent-primary font-light leading-none">
                17
              </span>
              <span className="font-body text-sm sm:text-base text-text-secondary leading-snug max-w-[200px]">
                anos de atuação exclusiva em Direito Previdenciário
              </span>
            </div>

            <p className="font-body text-caption text-text-muted mb-8">
              OAB/SP 123456 · Especialista em Direito Previdenciário
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
