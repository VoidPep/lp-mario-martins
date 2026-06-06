"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function Counter({ value, suffix = "+" }: { value: number; suffix?: string }) {
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

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function SocialProofSection() {
  const items = [
    { number: 300, suffix: "+", label: "Benefícios conquistados" },
    { number: 17, suffix: "+", label: "Anos de atuação exclusiva" },
    { number: 98, suffix: "%", label: "Taxa de aprovação nos recursos" },
  ];

  return (
    <section className="section-padding bg-surface-section-alt">
      <div className="section-container">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 lg:gap-16 xl:gap-24">
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              className="text-center px-4"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true, margin: "-10%" }}
            >
              <div className="font-display text-6xl lg:text-[5.5rem] xl:text-number-display font-light text-text-primary leading-none mb-5">
                <Counter value={item.number} suffix={item.suffix} />
              </div>
              <div className="w-10 h-px bg-accent-primary mx-auto mb-5" />
              <p className="font-body text-xs sm:text-sm text-text-muted uppercase tracking-[0.12em] leading-relaxed max-w-[200px] mx-auto">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
