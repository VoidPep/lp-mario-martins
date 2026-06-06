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

  const pathLength = useTransform(scrollYProgress, [0, 1], [1000, 0]);

  return (
    <section ref={ref} id="como-funciona" className="section-padding bg-surface-section-alt">
      <div className="section-container">
        <motion.div
          className="text-center mb-14 lg:mb-20"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-10%" }}
        >
          <p className="section-label">Processo</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-section-title text-text-primary font-semibold">
            Como Funciona
          </h2>
        </motion.div>

        {/* Desktop: horizontal path */}
        <div className="hidden lg:block relative">
          <svg
            className="absolute top-10 left-0 w-full h-32 pointer-events-none"
            viewBox="0 0 1280 128"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M 100 64 L 600 64 L 1100 64"
              fill="none"
              stroke="#B8924A"
              strokeWidth="2"
              strokeDasharray="1000"
              strokeDashoffset={pathLength}
            />
          </svg>

          <div className="grid grid-cols-3 gap-12 relative z-10">
            {steps.map((step) => (
              <StepCard key={step.number} step={step} delay={step.number * 0.1} />
            ))}
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="lg:hidden">
          <div className="space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className="flex gap-5 sm:gap-6"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: step.number * 0.1 }}
                viewport={{ once: true, margin: "-10%" }}
              >
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-accent-primary text-text-on-accent flex items-center justify-center font-body text-sm font-bold ring-4 ring-surface-section-alt">
                    {step.number}
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className="w-px flex-1 min-h-10 my-2 border-l border-dashed border-accent-primary/40"
                      aria-hidden="true"
                    />
                  )}
                </div>
                <div className={index < steps.length - 1 ? "pb-10" : "pb-0"}>
                  <h3 className="font-display text-xl font-medium text-text-primary mb-2">
                    {step.title}
                  </h3>
                  <p className="font-body text-sm text-text-secondary leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StepCard({
  step,
  delay,
}: {
  step: (typeof steps)[number];
  delay: number;
}) {
  return (
    <motion.div
      className="text-center px-4"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true, margin: "-10%" }}
    >
      <div className="w-[4.5rem] h-[4.5rem] rounded-full bg-accent-primary text-text-on-accent flex items-center justify-center mx-auto mb-6 font-body text-lg font-bold shadow-[0_4px_20px_rgba(184,146,74,0.3)] ring-4 ring-accent-primary/10">
        {step.number}
      </div>
      <h3 className="font-display text-xl font-medium text-text-primary mb-3">{step.title}</h3>
      <p className="font-body text-sm text-text-secondary leading-relaxed max-w-xs mx-auto">
        {step.description}
      </p>
    </motion.div>
  );
}
