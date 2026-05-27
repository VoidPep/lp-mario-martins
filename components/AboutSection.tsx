"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function AboutSection() {
  return (
    <section id="sobre" className="py-section-padding-y bg-surface-page px-20">
      <div className="max-w-content mx-auto">
        <div className="grid grid-cols-2 gap-16 items-center">
          {/* Coluna Esquerda - Foto (45%) */}
          <motion.div
            className="col-span-1 h-96 bg-surface-card border-r border-subtle overflow-hidden"
            initial={{ opacity: 0, scale: 1.02 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-10%" }}
          >
            {/* Placeholder para foto do Dr. Mário */}
            <div className="w-full h-full bg-gradient-to-br from-surface-card to-surface-elevated flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">👨‍⚖️</div>
                <p className="text-text-muted text-sm">
                  Foto do Dr. Mário da Cruz Martins
                  <br />
                  (Fornecer foto profissional em P&B)
                </p>
              </div>
            </div>
          </motion.div>

          {/* Coluna Direita - Texto (55%) */}
          <motion.div
            className="col-span-1 pl-12"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true, margin: "-10%" }}
          >
            {/* Caption */}
            <p className="font-body text-caption text-text-muted mb-6">SOBRE O ADVOGADO</p>

            {/* Headline */}
            <h2 className="font-display text-section-title text-text-primary mb-6">
              Mais de 300 famílias que não desistiram.
            </h2>

            {/* Descrição */}
            <p className="font-body text-body text-text-secondary mb-8 leading-relaxed">
              Com mais de 17 anos de atuação exclusiva em Direito Previdenciário, o Dr. Mário da Cruz Martins dedica-se a recuperar benefícios negados e garantir que cada cliente receba aquilo que é seu por direito. Especialista em aposentadorias, auxílios-doença, BPC/LOAS e revisões de benefícios, já ajudou centenas de famílias paulistas a transformar uma negação em aprovação.
            </p>

            {/* Números integrados */}
            <div className="flex items-baseline gap-4 mb-6">
              <span className="font-display text-number-display text-accent-primary font-light">
                17
              </span>
              <span className="font-body text-sm text-text-secondary">
                anos de atuação exclusiva em Direito Previdenciário
              </span>
            </div>

            {/* Credencial */}
            <p className="font-body text-caption text-text-muted mb-8">
              OAB/SP 123456 · Especialista em Direito Previdenciário
            </p>

            {/* CTA */}
            <button className="text-accent-primary font-body text-sm font-medium hover:underline">
              Leia o perfil completo →
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
