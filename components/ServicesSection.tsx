"use client";

import { motion } from "framer-motion";

const services = [
  {
    id: "aposent-tempo",
    label: "Aposentadoria",
    title: "Aposentadoria por Tempo de Contribuição / Idade",
    description: "Análise completa de seu período contributivo ao INSS e orientação estratégica.",
    svg: (
      <svg viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg" className="w-full">
        {/* Timeline com pontos */}
        <line x1="20" y1="40" x2="180" y2="40" stroke="#5C7080" strokeWidth="1" />
        {[20, 60, 100, 140, 180].map((x, i) => (
          <g key={i}>
            <motion.circle
              cx={x}
              cy="40"
              r="4"
              fill={i === 4 ? "#B8924A" : "#5C7080"}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.15, duration: 0.3 }}
              viewport={{ once: true }}
            />
            {i === 4 && (
              <motion.path
                d="M 170 35 L 180 40 L 175 50"
                fill="none"
                stroke="#B8924A"
                strokeWidth="1.5"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.4 }}
                viewport={{ once: true }}
              />
            )}
          </g>
        ))}
      </svg>
    ),
  },
  {
    id: "aposent-rural",
    label: "Aposentadoria",
    title: "Aposentadoria Rural",
    description: "Especialização em comprovação de atividade rural e cálculo de tempo de contribuição.",
    svg: (
      <svg viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg" className="w-full">
        {/* Grade de talhões */}
        {Array.from({ length: 12 }).map((_, i) => {
          const row = Math.floor(i / 4);
          const col = i % 4;
          const x = 30 + col * 40;
          const y = 20 + row * 25;
          const isFilled = [2, 4, 5, 6, 8, 10].includes(i);
          return (
            <motion.rect
              key={i}
              x={x}
              y={y}
              width="12"
              height="12"
              fill={isFilled ? "#B8924A" : "none"}
              stroke="#5C7080"
              strokeWidth="0.5"
              fillOpacity={isFilled ? 0.15 : 0}
              initial={{ fillOpacity: 0 }}
              whileInView={{ fillOpacity: isFilled ? 0.15 : 0 }}
              transition={{ delay: i * 0.05, duration: 0.3 }}
              viewport={{ once: true }}
            />
          );
        })}
      </svg>
    ),
  },
  {
    id: "auxilio-doenca",
    label: "Benefícios",
    title: "Auxílio-Doença / Afastamento",
    description: "Recebimento correto de benefícios por incapacidade temporária ou permanente.",
    svg: (
      <svg viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg" className="w-full">
        {/* Linha central */}
        <line x1="100" y1="20" x2="100" y2="60" stroke="#5C7080" strokeWidth="2" />
        {/* Barras horizontais */}
        {[
          { y: 30, width: 35, color: "#5C7080" },
          { y: 40, width: 50, color: "#B8924A" },
          { y: 50, width: 30, color: "#5C7080" },
        ].map((bar, i) => (
          <line
            key={i}
            x1={100 - bar.width / 2}
            y1={bar.y}
            x2={100 + bar.width / 2}
            y2={bar.y}
            stroke={bar.color}
            strokeWidth="2"
          />
        ))}
      </svg>
    ),
  },
  {
    id: "bpc-loas",
    label: "Benefícios",
    title: "BPC/LOAS",
    description: "Garantia de 1 salário mínimo para pessoas idosas ou com deficiência.",
    svg: (
      <svg viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg" className="w-full">
        {/* Círculos concêntricos */}
        <circle cx="100" cy="40" r="32" fill="none" stroke="#5C7080" strokeWidth="1" />
        <circle cx="100" cy="40" r="20" fill="none" stroke="#5C7080" strokeWidth="1" />
        {/* Número "1" em dourado */}
        <text x="100" y="48" textAnchor="middle" fontSize="24" fill="#B8924A" fontFamily="serif">
          1
        </text>
      </svg>
    ),
  },
  {
    id: "revisao-beneficio",
    label: "Revisão",
    title: "Revisão de Benefícios",
    description: "Recalcular o valor devido com todas as contribuições ou períodos computáveis.",
    svg: (
      <svg viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg" className="w-full">
        {/* Valor antigo com tachado */}
        <text x="50" y="40" textAnchor="middle" fontSize="14" fill="#5C7080" fontFamily="monospace">
          R$ 1.200
        </text>
        <line x1="30" y1="35" x2="70" y2="45" stroke="#5C7080" strokeWidth="1" />

        {/* Seta */}
        <path
          d="M 85 40 Q 100 35 100 50"
          fill="none"
          stroke="#B8924A"
          strokeWidth="2"
          markerEnd="url(#arrowhead)"
        />

        {/* Valor novo em dourado */}
        <text x="150" y="42" textAnchor="middle" fontSize="16" fill="#B8924A" fontFamily="monospace" fontWeight="bold">
          R$ 1.850
        </text>

        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
            <polygon points="0 0, 10 5, 0 10" fill="#B8924A" />
          </marker>
        </defs>
      </svg>
    ),
  },
  {
    id: "beneficio-negado",
    label: "Recurso",
    title: "Benefício Negado — Recurso",
    description: "Transformar uma negação em aprovação através de argumentação jurídica forte.",
    svg: (
      <svg viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg" className="w-full">
        {/* Documento com X */}
        <rect x="40" y="25" width="40" height="50" fill="none" stroke="#8C3D3D" strokeWidth="1" opacity="0.5" />
        <text x="60" y="55" textAnchor="middle" fontSize="24" fill="#8C3D3D" opacity="0.5">
          ✕
        </text>

        {/* Seta curvada */}
        <motion.path
          d="M 85 50 Q 105 35 120 45"
          fill="none"
          stroke="#B8924A"
          strokeWidth="2"
          initial={{ strokeDasharray: 30, strokeDashoffset: 30 }}
          whileInView={{ strokeDasharray: 30, strokeDashoffset: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          markerEnd="url(#arrow)"
        />

        {/* Documento aprovado */}
        <rect x="120" y="25" width="40" height="50" fill="none" stroke="#B8924A" strokeWidth="1" />

        <defs>
          <marker id="arrow" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto">
            <polygon points="0 0, 10 5, 0 10" fill="#B8924A" />
          </marker>
        </defs>
      </svg>
    ),
  },
];

export function ServicesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -16 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="servicos" className="py-section-padding-y bg-surface-page px-20">
      <div className="max-w-content mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="border-t border-subtle py-8 flex items-center justify-between group hover:border-t-accent-primary transition-colors duration-300"
            >
              {/* Informações do serviço */}
              <div className="flex-1">
                <p className="font-body text-caption text-text-muted mb-2">{service.label}</p>
                <h3 className="font-display text-2xl font-medium text-text-primary mb-2">
                  {service.title}
                </h3>
                <p className="font-body text-sm text-text-secondary max-w-sm mb-4">
                  {service.description}
                </p>
                <button className="font-body text-sm text-accent-primary hover:underline">
                  Saiba mais →
                </button>
              </div>

              {/* SVG visual */}
              <div className="w-48 h-20 flex-shrink-0 ml-12 hidden lg:flex items-center justify-center">
                {service.svg}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
