"use client";

import { motion } from "framer-motion";
import { useState } from "react";

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
    phone: "",
    serviceType: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", phone: "", serviceType: "", message: "" });
      setIsSubmitted(false);
    }, 3000);
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
              Vamos conversar sobre seu caso. Sem compromisso, respondemos em até 24h úteis.
            </motion.p>

            <div className="space-y-0">
              <motion.div variants={itemVariants} className="contact-row">
                <div className="contact-icon">
                  <PhoneIcon />
                </div>
                <div>
                  <p className="font-body text-xs text-text-muted uppercase tracking-wider mb-1">WhatsApp</p>
                  <a
                    href="tel:+5511999999999"
                    className="font-body font-semibold text-text-primary hover:text-accent-primary transition-colors"
                  >
                    (11) 99999-9999
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
                    href="mailto:contato@mariocruzadvogado.com.br"
                    className="font-body font-semibold text-text-primary hover:text-accent-primary transition-colors break-all"
                  >
                    contato@mariocruzadvogado.com.br
                  </a>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="contact-row">
                <div className="contact-icon">
                  <MapPinIcon />
                </div>
                <div>
                  <p className="font-body text-xs text-text-muted uppercase tracking-wider mb-1">Escritório</p>
                  <p className="font-body font-semibold text-text-primary">São Paulo, SP</p>
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
                <label htmlFor="phone" className="form-label">
                  Telefone / WhatsApp
                </label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="form-input"
                  placeholder="(11) 99999-9999"
                />
              </motion.div>

              <motion.div variants={itemVariants} className="form-group">
                <label htmlFor="serviceType" className="form-label">
                  Tipo de benefício
                </label>
                <select
                  id="serviceType"
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  required
                  className="form-select"
                >
                  <option value="">Selecione um benefício</option>
                  <option value="aposentadoria-tempo">Aposentadoria por Tempo de Contribuição</option>
                  <option value="aposentadoria-idade">Aposentadoria por Idade</option>
                  <option value="aposentadoria-rural">Aposentadoria Rural</option>
                  <option value="auxilio-doenca">Auxílio-Doença</option>
                  <option value="bpc-loas">BPC/LOAS</option>
                  <option value="revisao-beneficio">Revisão de Benefício</option>
                  <option value="beneficio-negado">Benefício Negado — Recurso</option>
                </select>
              </motion.div>

              <motion.div variants={itemVariants} className="form-group">
                <label htmlFor="message" className="form-label">
                  Mensagem (opcional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                  placeholder="Descreva brevemente sua situação..."
                  rows={4}
                />
              </motion.div>

              <motion.div variants={itemVariants} className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitted}
                  className="btn-primary btn-full"
                >
                  {isSubmitted ? "Mensagem enviada ✓" : "Enviar mensagem"}
                </button>
              </motion.div>

              <motion.p variants={itemVariants} className="font-body text-xs text-text-muted text-center pt-1">
                Respondemos em até 24h úteis. Sem compromisso.
              </motion.p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
