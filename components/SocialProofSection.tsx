"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function Counter({ value }: { value: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-20%" });

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const duration = 1.8;
    const increment = value / (duration * 60);

    const interval = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(interval);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);

    return () => clearInterval(interval);
  }, [inView, value]);

  return <span ref={ref}>{count}</span>;
}

export function SocialProofSection() {
  const items = [
    { number: 300, label: "Benefícios conquistados" },
    { number: 17, label: "Anos de atuação exclusiva" },
    { number: 98, label: "% de aprovação nos recursos" },
  ];

  return (
    <section className="py-section-padding-y bg-surface-section-alt">
      <div className="max-w-content mx-auto px-6">
        <div className="section-center">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20 items-center justify-items-center">
            {items.map((item, i) => (
              <motion.div
                key={i}
                className="text-center"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true, margin: "-10%" }}
              >
                <div className="font-display text-6xl lg:text-[96px] font-light text-text-primary leading-none mb-4">
                  <Counter value={item.number} />+
                </div>
                <div className="w-14 h-px bg-accent-primary mx-auto mb-4" />
                <p className="font-body text-sm text-text-muted uppercase tracking-widest">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
