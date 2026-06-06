"use client";

import { motion } from "framer-motion";

export function TestimonialSection() {
  return (
    <section className="section-padding bg-surface-hero-alt relative overflow-hidden">
      <motion.div
        className="absolute top-6 left-[var(--container-px)] sm:top-10 text-accent-primary/10 pointer-events-none select-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true, margin: "-10%" }}
      >
        <span className="font-display text-[8rem] sm:text-[10rem] lg:text-[12.5rem] font-light leading-none">
          &quot;
        </span>
      </motion.div>

      <div className="section-container relative z-10">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "-10%" }}
        >
          <blockquote className="font-display text-2xl sm:text-3xl lg:text-4xl text-text-primary italic leading-relaxed mb-10 lg:mb-12 font-light">
            &ldquo;Minha aposentadoria rural foi negada duas vezes. O Dr. Mário conseguiu em quatro
            meses o que dois anos de tentativas sozinha não resolveram. Agora tenho paz e a
            dignidade de receber o que é meu.&rdquo;
          </blockquote>

          <div className="w-10 h-px bg-accent-primary mx-auto mb-6" />

          <p className="font-body font-semibold text-text-primary mb-1.5">
            Maria Ferreira da Silva
          </p>
          <p className="font-body text-sm text-text-muted">
            Aposentadoria Rural · São Paulo, SP
          </p>
        </motion.div>
      </div>
    </section>
  );
}
