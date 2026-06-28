"use client";

import { motion } from "framer-motion";
import { siteConfig } from "./globals/config";

const services = siteConfig.servicos

export function ServicesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -16 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="servicos" className="section-padding bg-surface-page">
      <div className="section-container">
        <motion.div
          className="mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-10%" }}
        >
          <p className="section-label">Áreas de Atuação</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-section-title text-text-primary font-semibold">
            Serviços Previdenciários
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="border-t border-subtle"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="border-b border-subtle py-8 lg:py-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 group hover:border-b-[#B8924A] transition-colors duration-300"
            >
              <div className="flex-1 min-w-0">
                <p className="font-body text-caption text-text-muted mb-2 [.group:hover_&]:text-[#B8924A] transition-colors duration-300">
                  {service.label}
                </p>
                <h3 className="font-display text-xl sm:text-2xl font-medium text-text-primary mb-3 leading-snug">
                  <span className="text-[#B8924A] font-light mr-2">{String(index + 1).padStart(2, "0")}</span> - {service.title}
                </h3>
                <p className="font-body text-sm sm:text-base text-text-secondary max-w-lg mb-4 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
