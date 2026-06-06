"use client";

import { useEffect, useState } from "react";

export function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const heroHeight = window.innerHeight * 0.6;
      setVisible(window.scrollY > heroHeight);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={`floating-cta ${visible ? "visible" : ""}`}>
      <a href="#contato" className="btn-primary btn-full">
        Consulta Gratuita
      </a>
    </div>
  );
}
