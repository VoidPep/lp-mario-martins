"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
    },
  },
};

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
    // Simulando envio
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({ name: "", phone: "", serviceType: "", message: "" });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contato" className="py-section-padding-y bg-surface-page px-20">
      <div className="max-w-content mx-auto">
        <div className="grid grid-cols-2 gap-16">
          {/* Coluna Esquerda - Headline + Contatos (45%) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
          >
            {/* Caption */}
            <motion.p variants={itemVariants} className="font-body text-caption text-accent-primary mb-6">
              CONSULTA GRATUITA
            </motion.p>

            {/* Headline */}
            <motion.h2 variants={itemVariants} className="font-display text-5xl font-medium text-text-primary mb-2">
              Sua situação
            </motion.h2>
            <motion.h2 variants={itemVariants} className="font-display text-5xl font-light text-text-primary mb-8">
              tem solução.
            </motion.h2>

            {/* Subtítulo */}
            <motion.p variants={itemVariants} className="font-body text-lg text-text-secondary mb-12">
              Vamos conversar sobre seu caso
            </motion.p>

            {/* Contatos diretos */}
            <div className="space-y-6">
              <motion.div variants={itemVariants} className="flex items-center gap-4">
                <span className="text-2xl">💬</span>
                <div>
                  <p className="font-body text-sm text-text-muted mb-1">WhatsApp</p>
                  <a href="tel:+5511999999999" className="font-body font-semibold text-text-primary hover:text-accent-primary">
                    (11) 99999-9999
                  </a>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex items-center gap-4">
                <span className="text-2xl">✉️</span>
                <div>
                  <p className="font-body text-sm text-text-muted mb-1">E-mail</p>
                  <a href="mailto:contato@mariocruzadvogado.com.br" className="font-body font-semibold text-text-primary hover:text-accent-primary">
                    contato@mariocruzadvogado.com.br
                  </a>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="flex items-center gap-4">
                <span className="text-2xl">📍</span>
                <div>
                  <p className="font-body text-sm text-text-muted mb-1">Escritório</p>
                  <p className="font-body font-semibold text-text-primary">
                    São Paulo, SP
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Coluna Direita - Formulário (55%) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-10%" }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nome */}
              <motion.div variants={itemVariants}>
                <label className="font-body text-caption text-text-muted block mb-2">
                  NOME COMPLETO
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-surface-card border border-default text-text-primary font-body text-body px-4 py-3.5 rounded-input focus:border-accent-primary focus:outline-none transition-colors duration-200"
                  placeholder="Seu nome"
                />
              </motion.div>

              {/* Telefone/WhatsApp */}
              <motion.div variants={itemVariants}>
                <label className="font-body text-caption text-text-muted block mb-2">
                  TELEFONE / WHATSAPP
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full bg-surface-card border border-default text-text-primary font-body text-body px-4 py-3.5 rounded-input focus:border-accent-primary focus:outline-none transition-colors duration-200"
                  placeholder="(11) 99999-9999"
                />
              </motion.div>

              {/* Tipo de Benefício */}
              <motion.div variants={itemVariants}>
                <label className="font-body text-caption text-text-muted block mb-2">
                  TIPO DE BENEFÍCIO
                </label>
                <select
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  required
                  className="w-full bg-surface-card border border-default text-text-primary font-body text-body px-4 py-3.5 rounded-input focus:border-accent-primary focus:outline-none transition-colors duration-200"
                >
                  <option value="">Selecione um benefício</option>
                  <option value="aposentadoria-tempo">Aposentadoria por Tempo de Contribuição</option>
                  <option value="aposentadoria-idade">Aposentadoria por Idade</option>
                  <option value="aposentadoria-rural">Aposentadoria Rural</option>
                  <option value="auxilio-doenca">Auxílio-Doença</option>
                  <option value="bpc-loas">BPC/LOAS</option>
                  <option value="revisao-beneficio">Revisão de Benefício</option>
                  <option value="beneficio-negado">Benefício Negado - Recurso</option>
                </select>
              </motion.div>

              {/* Mensagem */}
              <motion.div variants={itemVariants}>
                <label className="font-body text-caption text-text-muted block mb-2">
                  MENSAGEM (OPCIONAL)
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-surface-card border border-default text-text-primary font-body text-body px-4 py-3.5 rounded-input focus:border-accent-primary focus:outline-none transition-colors duration-200 resize-none"
                  placeholder="Descreva brevemente sua situação..."
                  rows={4}
                />
              </motion.div>

              {/* Botão de Envio */}
              <motion.div variants={itemVariants}>
                <button
                  type="submit"
                  disabled={isSubmitted}
                  className="w-full bg-accent-primary text-text-on-accent font-body text-cta h-13 rounded-button hover:bg-accent-hover hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitted ? "Mensagem enviada! ✓" : "Enviar mensagem"}
                </button>
              </motion.div>

              {/* Texto de confirmação */}
              <motion.p variants={itemVariants} className="font-body text-xs text-text-muted text-center">
                Respondemos em até 24h úteis. Sem compromisso.
              </motion.p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
