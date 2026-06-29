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
              Com mais de 17 anos de atuação exclusiva em Direito
              Previdenciário, o Dr. Mário da Cruz Martins dedica-se a recuperar
              benefícios negados e garantir que cada cliente receba aquilo que é
              seu por direito. Especialista em Aposentadoria Especial, por tempo
              de Contribuição, por Idade, Rural e demais Benefícios
              previdenciários.
            </p>

            <div className="flex items-baseline gap-4 mb-8 pb-8 border-b border-subtle"></div>

            <p className="font-body text-caption text-text-muted mb-4">
              {siteConfig.advogado.oab} · {siteConfig.advogado.especialidade}
            </p>

            <div className="flex items-center gap-4">
              <a
                href={siteConfig.advogado.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-text-muted hover:text-[#B8924A] transition-colors"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href={siteConfig.advogado.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-text-muted hover:text-[#B8924A] transition-colors"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
