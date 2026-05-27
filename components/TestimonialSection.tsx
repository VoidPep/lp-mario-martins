"use client";

import { motion } from "framer-motion";

export function TestimonialSection() {
  return (
    <section className="py-32 bg-surface-hero-alt px-20 relative overflow-hidden">
      {/* Aspas decorativas de fundo */}
      <motion.div
        className="absolute top-8 left-20 text-accent-subtle opacity-20 pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.2 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true, margin: "-10%" }}
      >
        <span className="font-display text-9xl font-light">&quot;</span>
      </motion.div>

      <div className="max-w-content mx-auto relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true, margin: "-10%" }}
        >
          {/* Quote */}
          <p className="font-display text-4xl text-text-primary italic leading-relaxed mb-12 max-w-5xl mx-auto font-light">
            &quot;Minha aposentadoria rural foi negada duas vezes. O Dr. Mário conseguiu em quatro meses
            o que dois anos de tentativas sozinha não resolveram. Agora tenho paz e a dignidade de
            receber o que é meu.&quot;
          </p>

          {/* Barra divisória */}
          <div className="w-10 h-px bg-accent-primary mx-auto mb-6" />

          {/* Autoria */}
          <p className="font-body font-semibold text-text-primary mb-1">
            Maria Ferreira da Silva
          </p>
          <p className="font-body text-sm text-text-muted">
            Aposentadoria Rural • São Paulo, SP
          </p>
        </motion.div>
      </div>
    </section>
  );
}
