"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { siteConfig } from "./globals/config";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const text = [
      `Olá, Dr. Mário! Sou ${formData.name}, vim pelo site e gostaria de uma consulta.`,
      ``,
      formData.message ? `*Situação:* ${formData.message}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    const encoded = encodeURIComponent(text);
    const number = siteConfig.advogado.links.whatsapp.replace(/\D/g, "");
    window.open(`https://wa.me/${number}?text=${encoded}`, "_blank");
  };

  return (
    <section id="contato" className="section-padding bg-surface-page">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-12 lg:gap-16 xl:gap-20 items-start">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
          >
            <motion.p variants={itemVariants} className="section-label">
              Consulta Gratuita
            </motion.p>

            <motion.h2
              variants={itemVariants}
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-text-primary leading-tight mb-1"
            >
              Sua situação
            </motion.h2>
            <motion.h2
              variants={itemVariants}
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-light text-text-primary mb-6"
            >
              tem solução.
            </motion.h2>

            <motion.p variants={itemVariants} className="font-body text-base lg:text-lg text-text-secondary mb-10 leading-relaxed">
              Preencha o formulário e você será redirecionado para o nosso WhatsApp com sua mensagem já formatada.
            </motion.p>

            <div className="space-y-0">
              <motion.div variants={itemVariants} className="contact-row">
                <div className="contact-icon">
                  <PhoneIcon />
                </div>
                <div>
                  <p className="font-body text-xs text-text-muted uppercase tracking-wider mb-1">WhatsApp</p>
                  <a
                    href={siteConfig.advogado.links.whatsapp}
                    target="_blank"
                    className="font-body font-semibold text-text-primary hover:text-accent-primary transition-colors"
                  >
                    {siteConfig.advogado.telefone}
                  </a>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="contact-row">
                <div className="contact-icon">
                  <MailIcon />
                </div>
                <div>
                  <p className="font-body text-xs text-text-muted uppercase tracking-wider mb-1">E-mail</p>
                  <a
                    href={"mailto:" + siteConfig.advogado.email}
                    className="font-body font-semibold text-text-primary hover:text-accent-primary transition-colors break-all"
                  >
                    {siteConfig.advogado.email}
                  </a>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="contact-row">
                <div className="contact-icon">
                  <MapPinIcon />
                </div>
                <div>
                  <p className="font-body text-xs text-text-muted uppercase tracking-wider mb-1">Escritório</p>
                  <p className="font-body font-semibold text-text-primary">{siteConfig.advogado.localidade}</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
          >
            <form onSubmit={handleSubmit} className="form-card space-y-5">
              <motion.div variants={itemVariants} className="form-group">
                <label htmlFor="name" className="form-label">
                  Nome completo
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="Seu nome"
                />
              </motion.div>

              <motion.div variants={itemVariants} className="form-group">
                <label htmlFor="message" className="form-label">
                  Descreva sua situação (opcional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                  placeholder="Ex: Tive meu auxílio-doença negado e gostaria de recorrer..."
                  rows={4}
                />
              </motion.div>

              <motion.div variants={itemVariants} className="pt-2">
                <button type="submit" className="btn-primary btn-full">
                  Enviar pelo WhatsApp
                </button>
              </motion.div>

              <motion.p variants={itemVariants} className="font-body text-xs text-text-muted text-center pt-1">
                Você será redirecionado para o WhatsApp com sua mensagem já preenchida.
              </motion.p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}