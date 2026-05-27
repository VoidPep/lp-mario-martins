"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    number: 1,
    title: "Consulta Gratuita",
    description: "20 minutos por WhatsApp ou presencial para conhecer seu caso.",
  },
  {
    number: 2,
    title: "Análise do Caso",
    description: "Dr. Mário avalia documentos e viabilidade do seu benefício.",
  },
  {
    number: 3,
    title: "Atuação Completa",
    description: "Toda tramitação junto ao INSS e Justiça Federal, sem custo adiantado.",
  },
];

export function HowItWorksSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      ref={ref}
      id="como-funciona"
      className="py-section-padding-y bg-surface-section-alt px-20"
    >
      <div className="max-w-content mx-auto">
        {/* Título */}
        <motion.h2
          className="font-display text-section-title text-text-primary text-center mb-24"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-10%" }}
        >
          Como Funciona
        </motion.h2>

        {/* Steps com path animado */}
        <div className="relative">
          {/* SVG Path animado */}
          <svg
            className="absolute top-0 left-0 w-full h-32 pointer-events-none"
            viewBox="0 0 1280 128"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M 100 64 L 600 64 L 1100 64"
              fill="none"
              stroke="#B8924A"
              strokeWidth="2"
              strokeDasharray="1000"
              strokeDashoffset={useTransform(pathLength, [0, 1], [1000, 0])}
            />
          </svg>

          {/* Grid de steps */}
          <div className="grid grid-cols-3 gap-12 relative z-10">
            {steps.map((step) => (
              <motion.div
                key={step.number}
                className="text-center"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: step.number * 0.1,
                }}
                viewport={{ once: true, margin: "-10%" }}
              >
                {/* Círculo com número */}
                <div className="w-20 h-20 rounded-full bg-accent-primary text-text-on-accent flex items-center justify-center mx-auto mb-6 font-body text-cta font-bold">
                  {step.number}
                </div>

                {/* Título */}
                <h3 className="font-display text-xl font-medium text-text-primary mb-3">
                  {step.title}
                </h3>

                {/* Descrição */}
                <p className="font-body text-sm text-text-secondary">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
