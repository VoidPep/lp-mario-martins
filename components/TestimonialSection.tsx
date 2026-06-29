"use client";

import { motion } from "framer-motion";

export function TestimonialSection() {
  return (
    <section className="section-padding bg-surface-hero-alt relative overflow-hidden">
      <div className="section-container relative z-10">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, margin: "-10%" }}
        >
          <blockquote className="font-display text-2xl sm:text-3xl lg:text-4xl text-text-primary italic leading-relaxed mb-10 lg:mb-12 font-light">
            &ldquo;Minha aposentadoria Especial foi negada por duas vezes. Dr. Mário Cruz
            conseguiu em quatro meses o que dois anos de tentativas sozinha
            não resolveram. Agora tenho paz e a dignidade de receber o que é
            meu de direito&rdquo;
          </blockquote>

          <div className="w-10 h-px bg-accent-primary mx-auto mb-6" />

        </motion.div>
      </div>
    </section>
  );
}
